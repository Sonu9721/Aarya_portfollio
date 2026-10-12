import { CinematicParticleEngine } from './particles.js';
import { initCustomCursor } from './cursor.js';
import { cinemaAudio } from './audio.js';
import { ShowreelCinemaPlayer } from './showreel-player.js';
import { PROJECTS, ALL_INSTAGRAM_REELS, COMIC_CAROUSELS } from './projects-data.js';

document.addEventListener('DOMContentLoaded', () => {
  // 0. Immediately dismiss any opening cinema loader
  const loader = document.querySelector('.cinema-loader');
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => {
      if (loader.parentNode) loader.parentNode.removeChild(loader);
    }, 300);
  }

  // 1. Initialize Particles
  new CinematicParticleEngine('hero-particles-canvas');
  new CinematicParticleEngine('footer-particles-canvas');

  // 2. Initialize Custom Cursor
  initCustomCursor();

  // 3. Initialize Theatrical Showreel Player
  new ShowreelCinemaPlayer();

  // 4. Sound Atmosphere Toggle
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const soundWave = document.getElementById('sound-waves-indicator');
  const soundLabel = document.getElementById('sound-label');

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      const isPlaying = cinemaAudio.toggle();
      if (isPlaying) {
        soundToggleBtn.classList.add('border-gold-molten', 'text-gold-bright');
        soundToggleBtn.classList.remove('border-white/10', 'text-soft-grey');
        if (soundWave) soundWave.classList.remove('hidden');
        if (soundLabel) soundLabel.innerText = 'AUDIO: ON';
      } else {
        soundToggleBtn.classList.remove('border-gold-molten', 'text-gold-bright');
        soundToggleBtn.classList.add('border-white/10', 'text-soft-grey');
        if (soundWave) soundWave.classList.add('hidden');
        if (soundLabel) soundLabel.innerText = 'AUDIO: OFF';
      }
    });
  }

  // 5. Navigation Scroll & Blur State
  const navbar = document.getElementById('main-nav');
  let navFrame = 0;
  window.addEventListener('scroll', () => {
    if (navFrame) return;
    navFrame = requestAnimationFrame(() => {
      navFrame = 0;
      if (!navbar) return;
      if (window.scrollY > 50) {
        navbar.classList.add('bg-[#080406]/90', 'backdrop-blur-md', 'border-b', 'border-white/10');
      } else {
        navbar.classList.remove('bg-[#080406]/90', 'backdrop-blur-md', 'border-b', 'border-white/10');
      }
    });
  }, { passive: true });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu');

  if (mobileMenuBtn && mobileMenuDrawer) {
    const setMobileMenuOpen = (open) => {
      mobileMenuDrawer.classList.toggle('hidden', !open);
      mobileMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    mobileMenuBtn.addEventListener('click', () => {
      setMobileMenuOpen(mobileMenuDrawer.classList.contains('hidden'));
    });
    if (closeMobileMenuBtn) {
      closeMobileMenuBtn.addEventListener('click', () => {
        setMobileMenuOpen(false);
      });
    }
    mobileMenuDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        setMobileMenuOpen(false);
      });
    });
  }

  // 7. Render Selected Works Gallery with Live Video Previews
  const worksGrid = document.getElementById('works-grid');
  const filterTabs = document.querySelectorAll('.filter-tab');

  function renderProjects(filter = 'all') {
    if (!worksGrid) return;
    worksGrid.innerHTML = '';

    const filtered = filter === 'all' 
      ? PROJECTS 
      : PROJECTS.filter((p) => p.category === filter);

    filtered.forEach((project) => {
      const card = document.createElement('div');
      card.className = 'portfolio-card group relative rounded-lg overflow-hidden border border-white/10 bg-[#14080C] cursor-pointer';
      card.setAttribute('data-cursor', 'PLAY');
      card.setAttribute('data-id', project.id);

      const previewClip = project.previewVideo || project.videoFile;

      card.innerHTML = `
        <!-- Poster Media Container -->
        <div class="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#10080B]">
          <!-- Still Image -->
          <img 
            src="${project.image}" 
            alt="${project.title}" 
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          <!-- Hover Auto-Play Muted Video Loop (Lazy-Loaded 100KB Preview) -->
          ${previewClip ? `
            <video 
              class="video-preview absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
              muted 
              loop 
              playsinline 
              preload="none"
              data-src="${previewClip}"
            ></video>
          ` : ''}

          <!-- Ambient Vignette & Cinema Bar Gradients -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#14080C] via-transparent to-black/40 opacity-80 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
          
          <!-- Category & Laurel Badges -->
          <div class="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
            <span class="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-gold-molten/40 text-gold-bright font-semibold">
              ${project.tag}
            </span>
            <span class="text-[10px] font-mono tracking-wider text-soft-grey/80 bg-black/60 px-2 py-0.5 rounded">
              ${project.runtime}
            </span>
          </div>

          <!-- Festival Laurel Pill (if available) -->
          ${project.laurel ? `
            <div class="absolute bottom-3 left-3 flex items-center space-x-1.5 px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm border border-gold-molten/30 text-gold-molten text-[10px] font-mono tracking-wider z-10">
              <svg class="w-3.5 h-3.5 text-gold-bright shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8 2.4-7.2-6-4.8h7.6z"/>
              </svg>
              <span class="truncate max-w-[200px] text-white/90">${project.laurel}</span>
            </div>
          ` : ''}

          <!-- Play Icon Watermark on Hover -->
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            <div class="w-14 h-14 rounded-full bg-gold-molten/80 backdrop-blur-sm border border-gold-bright flex items-center justify-center shadow-gold-glow transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <svg class="w-6 h-6 text-black translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Project Meta Info -->
        <div class="p-5 flex flex-col justify-between">
          <div>
            <div class="flex items-baseline justify-between mb-1">
              <h3 class="font-cinematic text-2xl tracking-wider text-white group-hover:text-gold-bright transition-colors duration-300">
                ${project.title}
              </h3>
              <span class="font-mono text-xs text-soft-grey/70">${project.year}</span>
            </div>
            <p class="text-sm text-soft-grey line-clamp-2 leading-relaxed mb-3">
              ${project.logline}
            </p>
          </div>

          <div class="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-soft-grey/70">
            <span class="truncate text-[11px] text-gold-molten/90">${project.format}</span>
            <span class="text-gold-bright flex items-center group-hover:translate-x-1 transition-transform duration-300">
              WATCH ➔
            </span>
          </div>
        </div>
      `;

      // Handle debounced video hover playback
      const videoEl = card.querySelector('.video-preview');
      if (videoEl) {
        let hoverTimer = null;
        card.addEventListener('mouseenter', () => {
          hoverTimer = setTimeout(() => {
            if (!videoEl.src && videoEl.dataset.src) {
              videoEl.src = videoEl.dataset.src;
            }
            videoEl.play().catch(() => {});
          }, 120);
        });
        card.addEventListener('mouseleave', () => {
          clearTimeout(hoverTimer);
          videoEl.pause();
          videoEl.currentTime = 0;
        });
      }

      // Click event for modal
      card.addEventListener('click', () => {
        openProjectModal(project);
      });

      // Cinema-spotlight hover event
      card.addEventListener('mouseenter', () => {
        worksGrid.classList.add('spotlight-active');
      });
      card.addEventListener('mouseleave', () => {
        worksGrid.classList.remove('spotlight-active');
      });

      worksGrid.appendChild(card);
    });
  }

  // Initial render
  renderProjects('all');

  // Filter Tab Switching
  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => {
        t.classList.remove('bg-gold-molten', 'text-black', 'border-gold-bright');
        t.classList.add('text-soft-grey', 'border-white/10', 'hover:border-gold-molten/40');
      });
      tab.classList.add('bg-gold-molten', 'text-black', 'border-gold-bright');
      tab.classList.remove('text-soft-grey', 'border-white/10');

      const filter = tab.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });

  // 8. Render All 12 Downloaded Instagram Reels Deck with Debounced Previews
  const reelsGrid = document.getElementById('instagram-reels-grid');
  if (reelsGrid) {
    reelsGrid.innerHTML = '';
    ALL_INSTAGRAM_REELS.forEach((reel) => {
      const reelCard = document.createElement('div');
      reelCard.className = 'group relative rounded-xl overflow-hidden border border-white/10 bg-[#14080C] hover:border-gold-molten/70 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-lg hover:shadow-gold-glow';
      reelCard.setAttribute('data-cursor', 'REEL');

      const reelPreview = reel.previewVideo || reel.videoFile;

      reelCard.innerHTML = `
        <!-- Vertical Video Container -->
        <div class="relative w-full aspect-[9/16] overflow-hidden bg-black">
          <img 
            src="${reel.thumbnail}" 
            alt="${reel.title}" 
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          ${reelPreview ? `
          <video 
            class="reel-hover-video absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
            data-src="${reelPreview}" 
            muted 
            loop 
            playsinline 
            preload="none"
          ></video>` : ''}

          <!-- Top Metadata Badge -->
          <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-10">
            <span class="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded bg-black/80 border border-gold-molten/40 text-gold-bright">
              ${reel.category}
            </span>
            <span class="text-[9px] font-mono text-soft-grey bg-black/70 px-1.5 py-0.5 rounded">
              ${reel.runtime}
            </span>
          </div>

          <!-- Central Play Trigger -->
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            <div class="w-12 h-12 rounded-full bg-gold-molten/90 border border-gold-bright flex items-center justify-center text-black shadow-gold-glow">
              <svg class="w-5 h-5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Reel Title & Instagram Action -->
        <div class="p-3.5 space-y-2 border-t border-white/5 bg-[#10080B]">
          <h4 class="font-cinematic text-lg tracking-wider text-white group-hover:text-gold-bright transition-colors truncate">
            ${reel.title}
          </h4>
          <p class="text-[11px] text-soft-grey/80 line-clamp-2 leading-relaxed">
            ${reel.caption}
          </p>
          <div class="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[10px]">
            <span class="text-gold-molten">${reel.videoFile ? 'PLAY VIDEO ➔' : 'INSTAGRAM ➔'}</span>
            <a href="${reel.instagramUrl}" target="_blank" rel="noopener" class="text-soft-grey/60 hover:text-white flex items-center gap-1" onclick="event.stopPropagation();">
              <span>INSTAGRAM</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      `;

      // Video hover with 120ms debounce
      const rvid = reelCard.querySelector('.reel-hover-video');
      if (rvid) {
        let hoverTimer = null;
        reelCard.addEventListener('mouseenter', () => {
          hoverTimer = setTimeout(() => {
            if (!rvid.src && rvid.dataset.src) {
              rvid.src = rvid.dataset.src;
            }
            rvid.play().catch(() => {});
          }, 120);
        });
        reelCard.addEventListener('mouseleave', () => {
          clearTimeout(hoverTimer);
          rvid.pause();
          rvid.currentTime = 0;
        });
      }

      // Open in cinema modal
      reelCard.addEventListener('click', () => {
        openReelModal(reel);
      });

      reelsGrid.appendChild(reelCard);
    });
  }

  // 9. Project Detail Modal with Robust HTML5 Video Player
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('close-modal-btn');

  function pauseAllBackgroundVideos() {
    // Pause showreel
    const showreelVid = document.getElementById('showreel-video-element');
    if (showreelVid) showreelVid.pause();

    // Pause all card previews
    document.querySelectorAll('.video-preview, .reel-hover-video').forEach((v) => {
      v.pause();
    });
  }

  function openProjectModal(project) {
    if (!modal || !modalContent) return;
    pauseAllBackgroundVideos();

    modalContent.innerHTML = `
      <!-- Modal Header Video Player -->
      <div class="relative w-full aspect-video sm:aspect-[21/9] bg-black overflow-hidden rounded-t-xl group">
        ${project.youtubeId ? `
          <iframe 
            id="modal-youtube-iframe"
            class="w-full h-full aspect-video sm:aspect-[21/9] border-0" 
            src="https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1" 
            title="${project.title}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
        ` : project.videoFile ? `
          <video 
            id="modal-video-player"
            src="${project.videoFile}" 
            poster="${project.image}" 
            controls 
            playsinline 
            preload="auto"
            class="w-full h-full object-contain bg-black cursor-pointer"
          ></video>

          <!-- Loading Spinner -->
          <div id="modal-spinner" class="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
            <div class="w-12 h-12 rounded-full border-2 border-gold-molten/30 border-t-gold-bright animate-spin"></div>
          </div>
        ` : `
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover"/>
        `}
        <div class="absolute inset-0 bg-gradient-to-t from-[#14080C] via-transparent to-transparent pointer-events-none"></div>
      </div>

      <!-- Modal Content Body -->
      <div class="p-6 sm:p-10 space-y-8 bg-[#14080C] rounded-b-xl border-x border-b border-white/10">
        <!-- Title & Badges -->
        <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div class="flex items-center gap-3 mb-2">
              <span class="px-2.5 py-0.5 rounded text-xs font-mono tracking-widest uppercase bg-gold-molten text-black font-bold">
                ${project.tag}
              </span>
              <span class="text-xs font-mono text-gold-bright">${project.runtime} • ${project.year}</span>
            </div>
            <h2 class="font-cinematic text-4xl sm:text-6xl tracking-wider text-white text-gold-metallic">
              ${project.title}
            </h2>
          </div>
          <div class="flex items-center gap-3">
            ${project.youtubeUrl ? `
              <a href="${project.youtubeUrl}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-4 py-2 rounded border border-red-500/50 bg-black/80 hover:bg-red-600 hover:text-white text-red-400 font-mono text-xs tracking-wider transition-colors">
                <span>WATCH ON YOUTUBE</span>
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            ` : ''}
            ${project.instagramUrl ? `
              <a href="${project.instagramUrl}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-4 py-2 rounded border border-gold-molten/50 bg-black/80 hover:bg-gold-molten hover:text-black text-gold-bright font-mono text-xs tracking-wider transition-colors">
                <span>VIEW ON INSTAGRAM</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            ` : ''}
          </div>
        </div>

        <!-- Logline & Synopsis -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-widest text-gold-molten mb-2">Logline</h4>
          <p class="text-lg text-white font-medium italic border-l-2 border-gold-molten pl-4 mb-6">
            "${project.logline}"
          </p>

          <h4 class="text-xs font-mono uppercase tracking-widest text-gold-molten mb-2">Synopsis & Vision</h4>
          <p class="text-soft-grey leading-relaxed">
            ${project.synopsis}
          </p>
        </div>

        <!-- Technical Pipeline Grid -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-widest text-gold-molten mb-4">Generative AI & VFX Pipeline</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${project.pipeline.map((p, idx) => `
              <div class="p-4 rounded-lg bg-black/50 border border-white/5 flex items-start gap-3">
                <span class="font-mono text-sm text-gold-bright font-bold">0${idx + 1}</span>
                <div>
                  <div class="text-xs font-mono text-soft-grey/60 uppercase">${p.step}</div>
                  <div class="text-sm font-medium text-white">${p.tool}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Director's Statement & Specs -->
        <div class="p-6 rounded-lg bg-steel-dark/60 border border-cyber-glow/50 space-y-4">
          <div class="flex items-center gap-2 text-xs font-mono text-gold-bright">
            <svg class="w-4 h-4 text-gold-bright" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            DIRECTOR'S NOTE
          </div>
          <p class="text-sm text-soft-grey italic leading-relaxed">
            "${project.stats.directorNote}"
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs font-mono">
            <div>
              <span class="text-soft-grey/60 block">FORMAT:</span>
              <span class="text-white">${project.format}</span>
            </div>
            <div>
              <span class="text-soft-grey/60 block">ITERATIONS:</span>
              <span class="text-white">${project.stats.renderPasses}</span>
            </div>
            <div>
              <span class="text-soft-grey/60 block">FPS:</span>
              <span class="text-white">${project.stats.fps}</span>
            </div>
          </div>
        </div>

        <!-- Action Call -->
        <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <span class="text-sm text-soft-grey">Interested in commissioning a similar film, sequence, or campaign?</span>
          <a href="#contact" id="modal-commission-cta" class="px-6 py-2.5 rounded bg-gold-molten hover:bg-gold-bright text-black font-semibold text-xs font-mono tracking-widest uppercase transition-colors">
            COMMISSION AARYA
          </a>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    // Start modal playback safely
    const mvid = document.getElementById('modal-video-player');
    const mspinner = document.getElementById('modal-spinner');
    if (mvid) {
      if (mspinner) {
        mvid.addEventListener('waiting', () => mspinner.classList.remove('hidden'));
        mvid.addEventListener('playing', () => mspinner.classList.add('hidden'));
        mvid.addEventListener('canplay', () => mspinner.classList.add('hidden'));
      }
      mvid.play().catch(() => {
        mvid.muted = true;
        mvid.play().catch(() => {});
      });
    }

    const modalCta = document.getElementById('modal-commission-cta');
    if (modalCta) {
      modalCta.addEventListener('click', () => {
        closeModal();
      });
    }
  }

  function openReelModal(reel) {
    if (!modal || !modalContent) return;
    pauseAllBackgroundVideos();

    modalContent.innerHTML = `
      <div class="relative w-full max-w-lg mx-auto bg-black rounded-xl overflow-hidden border border-gold-molten/50 shadow-gold-glow">
        <div class="relative aspect-[9/16] bg-black">
          ${reel.videoFile ? `
          <video 
            id="modal-reel-player"
            src="${reel.videoFile}" 
            poster="${reel.thumbnail}" 
            controls 
            playsinline 
            preload="auto"
            class="w-full h-full object-contain bg-black"
          ></video>
          <div id="modal-reel-spinner" class="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
            <div class="w-12 h-12 rounded-full border-2 border-gold-molten/30 border-t-gold-bright animate-spin"></div>
          </div>` : `
          <img src="${reel.thumbnail}" alt="${reel.title}" class="w-full h-full object-cover" />
          `}
        </div>
        <div class="p-5 bg-[#14080C] space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono uppercase tracking-widest text-gold-bright bg-gold-molten/20 px-2.5 py-0.5 rounded border border-gold-molten/40">
              ${reel.category} // ${reel.runtime}
            </span>
            <a href="${reel.instagramUrl}" target="_blank" rel="noopener" class="text-xs font-mono text-soft-grey hover:text-gold-bright flex items-center gap-1">
              <span>VIEW ON INSTAGRAM</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
          <h3 class="font-cinematic text-2xl tracking-wider text-white">${reel.title}</h3>
          <p class="text-xs text-soft-grey leading-relaxed">${reel.caption}</p>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    // Start reel playback safely
    const rvid = document.getElementById('modal-reel-player');
    const rspinner = document.getElementById('modal-reel-spinner');
    if (rvid) {
      if (rspinner) {
        rvid.addEventListener('waiting', () => rspinner.classList.remove('hidden'));
        rvid.addEventListener('playing', () => rspinner.classList.add('hidden'));
        rvid.addEventListener('canplay', () => rspinner.classList.add('hidden'));
      }
      rvid.play().catch(() => {
        rvid.muted = true;
        rvid.play().catch(() => {});
      });
    }
  }

  function closeModal() {
    if (!modal) return;
    // Clear iframe src to stop video/audio immediately
    const iframes = modal.querySelectorAll('iframe');
    iframes.forEach((f) => {
      f.src = '';
    });
    // Pause and clear any playing videos inside modal
    const videos = modal.querySelectorAll('video');
    videos.forEach((v) => {
      v.pause();
      v.removeAttribute('src');
      v.load();
    });
    if (modalContent) modalContent.innerHTML = '';
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeComicModal();
    }
  });

  // 10. Render Comic Chronicles Deck & Fullscreen Interactive Reader
  const comicsGrid = document.getElementById('comics-grid');
  const comicModal = document.getElementById('comic-modal');
  const comicModalTitle = document.getElementById('comic-modal-title');
  const comicModalTag = document.getElementById('comic-modal-tag');
  const comicSlideCounter = document.getElementById('comic-slide-counter');
  const comicActiveImage = document.getElementById('comic-active-image');
  const comicModalCaption = document.getElementById('comic-modal-caption');
  const comicModalIgLink = document.getElementById('comic-modal-ig-link');
  const comicThumbnailsStrip = document.getElementById('comic-thumbnails-strip');
  const comicPrevBtn = document.getElementById('comic-prev-btn');
  const comicNextBtn = document.getElementById('comic-next-btn');
  const closeComicModalBtn = document.getElementById('close-comic-modal-btn');

  let activeComic = null;
  let currentSlideIndex = 0;

  function renderComics() {
    if (!comicsGrid) return;
    comicsGrid.innerHTML = '';

    COMIC_CAROUSELS.forEach((comic) => {
      const card = document.createElement('div');
      card.className = 'group relative rounded-xl overflow-hidden border border-white/10 bg-[#14080C] hover:border-gold-molten/70 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-lg hover:shadow-gold-glow';
      card.setAttribute('data-cursor', 'READ');

      card.innerHTML = `
        <!-- Comic Cover Container -->
        <div class="relative w-full aspect-[4/5] sm:aspect-square overflow-hidden bg-black">
          <img 
            src="${comic.cover}" 
            alt="${comic.title}" 
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />

          <!-- Vignette Gradient -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#14080C] via-transparent to-black/30 pointer-events-none"></div>

          <!-- Badges -->
          <div class="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
            <span class="text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-black/80 backdrop-blur-sm border border-gold-molten/40 text-gold-bright font-semibold">
              ${comic.tag}
            </span>
            <span class="text-[10px] font-mono tracking-wider text-black bg-gold-molten px-2.5 py-0.5 rounded font-bold shadow-md">
              ${comic.panelCount} PANELS
            </span>
          </div>

          <!-- Read Series Overlay Pill on Hover -->
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            <div class="px-5 py-2.5 rounded-full bg-gold-molten border border-gold-bright text-black font-mono text-xs font-bold tracking-widest uppercase shadow-gold-glow flex items-center gap-2">
              <span>READ SERIES</span>
              <span>➔</span>
            </div>
          </div>
        </div>

        <!-- Meta Info -->
        <div class="p-5 flex flex-col justify-between flex-1 space-y-3 bg-[#14080C]">
          <div>
            <div class="flex items-center justify-between text-[11px] font-mono text-gold-molten/90 mb-1">
              <span>STATIC CAROUSEL</span>
              <span>${comic.readTime}</span>
            </div>
            <h3 class="font-cinematic text-2xl tracking-wider text-white group-hover:text-gold-bright transition-colors">
              ${comic.title}
            </h3>
            <p class="text-xs text-soft-grey line-clamp-2 leading-relaxed mt-2">
              "${comic.teaser}"
            </p>
          </div>

          <div class="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs">
            <span class="text-gold-bright flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              OPEN CAROUSEL ➔
            </span>
            <a href="${comic.instagramUrl}" target="_blank" rel="noopener" class="text-soft-grey/60 hover:text-white flex items-center gap-1 text-[11px]" onclick="event.stopPropagation();">
              <span>INSTAGRAM</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openComicModal(comic, 0);
      });

      comicsGrid.appendChild(card);
    });
  }

  function openComicModal(comic, startIndex = 0) {
    if (!comicModal || !comic.panels || comic.panels.length === 0) return;
    pauseAllBackgroundVideos();

    activeComic = comic;
    currentSlideIndex = Math.max(0, Math.min(startIndex, comic.panels.length - 1));

    comicModalTitle.innerText = comic.title;
    comicModalTag.innerText = comic.tag;
    comicModalCaption.innerText = comic.caption || comic.teaser;
    comicModalIgLink.href = comic.instagramUrl;

    // Render thumbnail strip
    comicThumbnailsStrip.innerHTML = '';
    comic.panels.forEach((panelSrc, idx) => {
      const thumbBtn = document.createElement('button');
      thumbBtn.className = `shrink-0 w-12 h-12 rounded overflow-hidden border transition-all duration-200 ${idx === currentSlideIndex ? 'border-gold-bright ring-2 ring-gold-molten scale-105' : 'border-white/20 opacity-60 hover:opacity-100'}`;
      thumbBtn.innerHTML = `<img src="${panelSrc}" class="w-full h-full object-cover" alt="Panel ${idx + 1}" />`;
      thumbBtn.addEventListener('click', () => {
        goToComicSlide(idx);
      });
      comicThumbnailsStrip.appendChild(thumbBtn);
    });

    comicModal.classList.remove('hidden');
    comicModal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    updateComicSlide();
  }

  function goToComicSlide(index) {
    if (!activeComic) return;
    currentSlideIndex = (index + activeComic.panels.length) % activeComic.panels.length;
    updateComicSlide();
  }

  function updateComicSlide() {
    if (!activeComic) return;
    const total = activeComic.panels.length;
    const currentSrc = activeComic.panels[currentSlideIndex];

    comicSlideCounter.innerText = `PANEL ${String(currentSlideIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

    comicActiveImage.style.opacity = '0.3';
    comicActiveImage.src = currentSrc;
    comicActiveImage.onload = () => {
      comicActiveImage.style.opacity = '1';
    };

    // Update thumbnail highlights
    const thumbs = comicThumbnailsStrip.querySelectorAll('button');
    thumbs.forEach((t, i) => {
      if (i === currentSlideIndex) {
        t.className = 'shrink-0 w-12 h-12 rounded overflow-hidden border border-gold-bright ring-2 ring-gold-molten scale-105 transition-all duration-200';
        t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        t.className = 'shrink-0 w-12 h-12 rounded overflow-hidden border border-white/20 opacity-60 hover:opacity-100 transition-all duration-200';
      }
    });
  }

  function closeComicModal() {
    if (!comicModal) return;
    comicModal.classList.add('hidden');
    comicModal.classList.remove('flex');
    activeComic = null;
    document.body.style.overflow = 'auto';
  }

  if (comicPrevBtn) {
    comicPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      goToComicSlide(currentSlideIndex - 1);
    });
  }

  if (comicNextBtn) {
    comicNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      goToComicSlide(currentSlideIndex + 1);
    });
  }

  if (closeComicModalBtn) {
    closeComicModalBtn.addEventListener('click', closeComicModal);
  }

  // Keyboard navigation for comics
  window.addEventListener('keydown', (e) => {
    if (comicModal && !comicModal.classList.contains('hidden')) {
      if (e.key === 'ArrowLeft') {
        goToComicSlide(currentSlideIndex - 1);
      } else if (e.key === 'ArrowRight') {
        goToComicSlide(currentSlideIndex + 1);
      }
    }
  });

  // Touch swipe support for comic modal
  let touchStartX = 0;
  let touchEndX = 0;
  if (comicModal) {
    comicModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    comicModal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          goToComicSlide(currentSlideIndex + 1);
        } else {
          goToComicSlide(currentSlideIndex - 1);
        }
      }
    }, { passive: true });
  }

  renderComics();

  // 10. Interactive Contact Form
  const contactForm = document.getElementById('cinema-contact-form');
  const formSuccessModal = document.getElementById('form-success-modal');
  const closeSuccessBtn = document.getElementById('close-success-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (formSuccessModal) {
        formSuccessModal.classList.remove('hidden');
        formSuccessModal.classList.add('flex');
      }
      contactForm.reset();

      import('canvas-confetti')
        .then(({ default: confetti }) => {
          confetti({
            particleCount: 70,
            spread: 80,
            origin: { y: 0.75 },
            colors: ['#8E2A3C', '#C48993', '#F6E7E9', '#FFFFFF']
          });
        })
        .catch(() => {});
    });
  }

  if (closeSuccessBtn && formSuccessModal) {
    closeSuccessBtn.addEventListener('click', () => {
      formSuccessModal.classList.add('hidden');
      formSuccessModal.classList.remove('flex');
    });
  }

  // 11. Live Timecode Clock in Footer & Slate
  function updateRecTimecode() {
    const clockEl = document.getElementById('slate-live-timecode');
    if (!clockEl || document.hidden) return;
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const h = pad(now.getHours());
    const m = pad(now.getMinutes());
    const s = pad(now.getSeconds());
    const frames = pad(Math.floor((now.getMilliseconds() / 1000) * 24));
    const stamp = `${h}:${m}:${s}:${frames}`;
    // Update the existing text node so the cursor observer is not retriggered.
    if (clockEl.firstChild && clockEl.firstChild.nodeType === Node.TEXT_NODE) {
      clockEl.firstChild.nodeValue = stamp;
    } else {
      clockEl.textContent = stamp;
    }
  }
  setInterval(updateRecTimecode, 41);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) updateRecTimecode();
  });
});
