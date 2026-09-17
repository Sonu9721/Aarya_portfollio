/**
 * Theatrical Showreel Cinema Player Component
 * Bulletproof playback engine with faststart streaming, promise locking, buffering spinners,
 * full-screen click toggling, timecode tracking, and track switching.
 */
export class ShowreelCinemaPlayer {
  constructor() {
    this.container = document.getElementById('showreel-cinema-frame');
    this.screenWrapper = document.getElementById('showreel-screen-wrapper');
    this.videoEl = document.getElementById('showreel-video-element');
    this.playBtn = document.getElementById('showreel-play-toggle');
    this.spinnerEl = document.getElementById('showreel-buffering-spinner');
    this.timecodeEl = document.getElementById('showreel-timecode');
    this.dimLightsBtn = document.getElementById('showreel-dim-lights');
    this.soundBtn = document.getElementById('showreel-video-sound');
    this.trackSelector = document.getElementById('showreel-track-select');
    this.sequenceLabel = document.getElementById('showreel-sequence-label');

    this.isPlaying = false;
    this.isMuted = true;
    this.isDimmed = false;
    this.playPromise = null;
    this.isActionPending = false;

    this.init();
  }

  init() {
    if (!this.videoEl) return;
    this.bindEvents();

    // Set initial video mute state
    this.videoEl.muted = this.isMuted;
    this.updateSoundButtonUI(!this.isMuted);

    // Timecode updater based on video time
    this.videoEl.addEventListener('timeupdate', () => {
      this.updateTimecode(this.videoEl.currentTime);
    });

    // Buffering & State listeners
    this.videoEl.addEventListener('waiting', () => {
      this.showSpinner(true);
    });

    this.videoEl.addEventListener('playing', () => {
      this.isPlaying = true;
      this.showSpinner(false);
      this.updatePlayButtonUI(true);
    });

    this.videoEl.addEventListener('pause', () => {
      this.isPlaying = false;
      this.showSpinner(false);
      this.updatePlayButtonUI(false);
    });

    this.videoEl.addEventListener('ended', () => {
      this.isPlaying = false;
      this.showSpinner(false);
      this.updatePlayButtonUI(false);
    });

    this.videoEl.addEventListener('canplay', () => {
      this.showSpinner(false);
    });
  }

  showSpinner(show) {
    if (!this.spinnerEl) return;
    if (show) {
      this.spinnerEl.classList.remove('hidden');
    } else {
      this.spinnerEl.classList.add('hidden');
    }
  }

  bindEvents() {
    // Cinema screen click toggles play/pause smoothly
    const clickTarget = this.screenWrapper || this.videoEl;
    if (clickTarget) {
      clickTarget.addEventListener('click', (e) => {
        // Prevent clicks from buttons or selects
        if (e.target.closest('#showreel-track-select') || e.target.closest('button:not(#showreel-play-toggle)')) {
          return;
        }
        this.togglePlayback();
      });
    }

    if (this.playBtn) {
      this.playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePlayback();
      });
    }

    if (this.dimLightsBtn) {
      this.dimLightsBtn.addEventListener('click', () => this.toggleDimLights());
    }

    if (this.soundBtn) {
      this.soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleSound();
      });
    }

    if (this.trackSelector) {
      this.trackSelector.addEventListener('change', async (e) => {
        const src = e.target.value;
        const selectedText = e.target.options[e.target.selectedIndex]?.text || '';
        if (src && this.videoEl) {
          const wasPlaying = this.isPlaying;
          this.showSpinner(true);

          if (this.playPromise) {
            try { await this.playPromise; } catch (_) {}
          }

          this.videoEl.pause();
          this.videoEl.src = src;
          this.videoEl.load();

          if (this.sequenceLabel) {
            this.sequenceLabel.innerText = `REEL // ${selectedText.toUpperCase()}`;
          }

          if (wasPlaying) {
            this.startPlayback();
          } else {
            this.showSpinner(false);
            this.updatePlayButtonUI(false);
          }
        }
      });
    }

    // Connect external "Watch Showreel" buttons from Hero
    document.querySelectorAll('.watch-showreel-trigger').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const reelSection = document.getElementById('showreel');
        if (reelSection) {
          reelSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            this.startPlayback();
          }, 500);
        }
      });
    });
  }

  async togglePlayback() {
    if (this.isActionPending || !this.videoEl) return;
    this.isActionPending = true;

    try {
      if (this.videoEl.paused) {
        await this.startPlayback();
      } else {
        await this.pausePlayback();
      }
    } finally {
      this.isActionPending = false;
    }
  }

  async startPlayback() {
    if (!this.videoEl) return;
    this.showSpinner(true);

    try {
      this.playPromise = this.videoEl.play();
      await this.playPromise;
      this.isPlaying = true;
      this.updatePlayButtonUI(true);
    } catch (err) {
      // If autoplay policy blocks sound, try muted
      if (this.videoEl.muted === false) {
        this.videoEl.muted = true;
        this.isMuted = true;
        this.updateSoundButtonUI(false);
        try {
          this.playPromise = this.videoEl.play();
          await this.playPromise;
          this.isPlaying = true;
          this.updatePlayButtonUI(true);
        } catch (e2) {
          console.warn('Playback failed:', e2);
        }
      }
    } finally {
      this.playPromise = null;
      this.showSpinner(false);
    }
  }

  async pausePlayback() {
    if (!this.videoEl) return;
    if (this.playPromise) {
      try {
        await this.playPromise;
      } catch (_) {}
    }
    this.videoEl.pause();
    this.isPlaying = false;
    this.updatePlayButtonUI(false);
  }

  toggleSound() {
    if (!this.videoEl) return;
    this.isMuted = !this.isMuted;
    this.videoEl.muted = this.isMuted;
    this.updateSoundButtonUI(!this.isMuted);
  }

  updateSoundButtonUI(hasSound) {
    if (!this.soundBtn) return;
    if (hasSound) {
      this.soundBtn.classList.add('text-gold-bright', 'border-gold-molten');
      this.soundBtn.innerHTML = `
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
        </svg>
        <span>SOUND: ON</span>
      `;
    } else {
      this.soundBtn.classList.remove('text-gold-bright', 'border-gold-molten');
      this.soundBtn.innerHTML = `
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>
        </svg>
        <span>SOUND: MUTED</span>
      `;
    }
  }

  updatePlayButtonUI(isPlaying) {
    if (!this.playBtn) return;
    if (isPlaying) {
      this.playBtn.innerHTML = `
        <svg class="w-6 sm:w-8 h-6 sm:h-8 text-gold-bright" fill="currentColor" viewBox="0 0 24 24">
          <rect x="6" y="4" width="4" height="16" rx="1"/>
          <rect x="14" y="4" width="4" height="16" rx="1"/>
        </svg>
      `;
      this.playBtn.classList.add('opacity-0', 'pointer-events-none');
    } else {
      this.playBtn.innerHTML = `
        <svg class="w-7 sm:w-8 h-7 sm:h-8 text-black translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      `;
      this.playBtn.classList.remove('opacity-0', 'pointer-events-none');
    }
  }

  toggleDimLights() {
    this.isDimmed = !this.isDimmed;
    let overlay = document.getElementById('cinema-dim-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'cinema-dim-overlay';
      overlay.className = 'fixed inset-0 bg-black/90 pointer-events-none transition-opacity duration-700 z-40';
      overlay.style.opacity = '0';
      document.body.appendChild(overlay);
    }

    if (this.isDimmed) {
      overlay.style.opacity = '1';
      this.container.classList.add('relative', 'z-50');
      this.dimLightsBtn.classList.add('bg-gold-molten', 'text-black');
    } else {
      overlay.style.opacity = '0';
      this.container.classList.remove('z-50');
      this.dimLightsBtn.classList.remove('bg-gold-molten', 'text-black');
    }
  }

  updateTimecode(seconds) {
    if (!this.timecodeEl) return;
    const totalSec = Math.floor(seconds);
    const frames = Math.floor((seconds - totalSec) * 24);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    const pad = (n) => String(n).padStart(2, '0');
    this.timecodeEl.innerText = `00:${pad(m)}:${pad(s)}:${pad(frames)}`;
  }
}
