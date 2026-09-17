/**
 * Film Projects, Commercial Campaigns, Music Films, Instagram Reels & Comic Chronicles
 * Master database curated for Aarya Bhujade (@aarya_x_apertures).
 */

export const PROJECTS = [
  // --- CLIENT COMMERCIALS & BRAND PRODUCTIONS ---
  {
    id: 'glamirk-commercial',
    title: 'GLAMIRK INDIA: LUXURY VISION',
    tag: 'COMMERCIAL',
    category: 'ads',
    year: '2025',
    format: '9:16 VERTICAL // LUXURY AI',
    runtime: '00:15',
    laurel: 'Commercial Client Production',
    image: '/assets/images/reels/client_reel_glamirk_DcbKUe0TxpT_thumb.jpg',
    videoFile: '/assets/videos/client_reel_glamirk_DcbKUe0TxpT.mp4',
    previewVideo: '/assets/videos/client_reel_glamirk_DcbKUe0TxpT_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DcbKUe0TxpT/',
    logline: 'High-end beauty and luxury lifestyle commercial campaign crafted with generative realism and bespoke lighting.',
    synopsis: 'Official commercial reel for Glamirk India directed and composited by Aarya Bhujade. Exploring hyper-photorealistic skin textures, cinematic studio rim lighting, and elegant kinetic pacing to deliver an aspirational cosmetic brand identity.',
    pipeline: [
      { step: 'Brand Concept & Moodboard', tool: 'Midjourney v6.1 & Photoshop' },
      { step: 'Neural Motion Diffusion', tool: 'Kling AI & Runway Gen-3' },
      { step: 'Compositing & Grade', tool: 'After Effects & DaVinci Resolve' },
      { step: 'Master Delivery', tool: 'Premiere Pro Ultra-HD Rec.709' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '1080 × 1920 (Vertical 9:16)',
      renderPasses: 'Luxury Studio Grade Pass',
      directorNote: 'Translating luxury aesthetics into generative video requires hyper-consistent specular lighting and velvety focal depth.'
    }
  },
  {
    id: 'mahindra-veero',
    title: 'MAHINDRA VEERO: RAW MOMENTUM',
    tag: 'COMMERCIAL',
    category: 'ads',
    year: '2025',
    format: '9:16 VERTICAL // AUTOMOTIVE',
    runtime: '00:23',
    laurel: 'Automotive Commercial Campaign',
    image: '/assets/images/reels/client_reel_mahindra_DdJaiZThP8N_thumb.jpg',
    videoFile: '/assets/videos/client_reel_mahindra_DdJaiZThP8N.mp4',
    previewVideo: '/assets/videos/client_reel_mahindra_DdJaiZThP8N_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DdJaiZThP8N/',
    logline: 'Rugged capability meets high-torque urban precision in this high-energy automotive showcase for Mahindra Veero.',
    synopsis: 'Produced for Mahindra Veero commercial storytelling. Combines rhythmic editorial pacing, metallic chassis grading, dynamic camera sweeps, and impactful sound design designed to stop thumbs on social feeds.',
    pipeline: [
      { step: 'Vehicle Tracking Plates', tool: 'Automotive Motion Reference' },
      { step: 'Visual Dynamics & FX', tool: 'After Effects Lens Flare & Velocity' },
      { step: 'Color Science', tool: 'ACES Automotive Commercial LUT' },
      { step: 'Audio Impact', tool: 'Engine Rumble & Mechanical Foley' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '1080 × 1920',
      renderPasses: 'Multi-Camera Beat Match',
      directorNote: 'Automotive commercials demand rhythmic momentum. Every cut accentuates torque, metallic reflection, and sheer road presence.'
    }
  },
  {
    id: 'star-pravah-promo',
    title: 'STAR PRAVAH: NETWORK PROMO',
    tag: 'BROADCAST',
    category: 'ads',
    year: '2025',
    format: '9:16 BROADCAST // DIGITAL PROMO',
    runtime: '00:52',
    laurel: 'Star Network Broadcast Production',
    image: '/assets/images/reels/client_reel_starpravah_DdDPCmmmHL2_thumb.jpg',
    videoFile: '/assets/videos/client_reel_starpravah_DdDPCmmmHL2.mp4',
    previewVideo: '/assets/videos/client_reel_starpravah_DdDPCmmmHL2_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DdDPCmmmHL2/',
    logline: 'Official television broadcast promotional sequence engineered for the premier Star Pravah television network.',
    synopsis: 'A high-drama television teaser highlighting marquee programming for Star Pravah. Created with dynamic title integration, cinematic narrative timing, emotional music escalation, and prime-time broadcast polish.',
    pipeline: [
      { step: 'Narrative Storyboarding', tool: 'Star Network Creative Brief' },
      { step: 'Kinetic Typography & Title VFX', tool: 'After Effects Typography Rig' },
      { step: 'Visual Color Grading', tool: 'DaVinci Resolve Television LUT' },
      { step: 'Broadcast Audio Mastering', tool: 'LUFS Broadcast Normalized Audio' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '1080 × 1920 Full HD',
      renderPasses: 'Broadcast Spec Standards',
      directorNote: 'Broadcast television promos require immediate emotional resonance and razor-sharp typographic hierarchy.'
    }
  },
  {
    id: 'swastik-visuals',
    title: 'SWASTIK PRODUCTIONS: MYTHOLOGICAL LORE',
    tag: 'MYTHOLOGICAL AI',
    category: 'films',
    year: '2025',
    format: '9:16 THEATRICAL // SACRED CINEMA',
    runtime: '00:26',
    laurel: 'Official Swastik Productions Visuals',
    image: '/assets/images/reels/client_reel_swastik_DQDfgLFkxeJ_thumb.jpg',
    videoFile: '/assets/videos/client_reel_swastik_DQDfgLFkxeJ.mp4',
    previewVideo: '/assets/videos/client_reel_swastik_DQDfgLFkxeJ_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DQDfgLFkxeJ/',
    logline: 'Transcendent sacred visual sequences designed for epic television powerhouse Swastik Productions.',
    synopsis: 'Created by Aarya Bhujade as AI Artist at Swastik Productions. Visualizing eternal Vedic scriptures, divine aura fields, celestial weapons, and iconic deity iconography with cutting-edge synthetic cinema tools.',
    pipeline: [
      { step: 'Divine Character Design', tool: 'Midjourney Sacred Iconography' },
      { step: 'Aura & Particle Simulation', tool: 'ComfyUI & After Effects Particles' },
      { step: 'Celestial Cinematic Lighting', tool: 'Volumetric Rays & Golden Glow' },
      { step: 'Soundscape Direction', tool: 'Vedic Chants & Theatrical Hits' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '1080 × 1920',
      renderPasses: 'Sacred Iconography Pipeline',
      directorNote: 'Working with Indian television pioneer Swastik Productions has deepened my mastery in translating sacred mythological lore into modern visual epics.'
    }
  },

  // --- GEN-AI ORIGINAL FILMS ---
  {
    id: 'ashoka-gen-ai',
    title: 'ASHOKA: LEGACY OF PEACE',
    tag: 'AI FILM',
    category: 'films',
    year: '2025',
    format: '16:9 WIDESCREEN // 4K MASTER',
    runtime: '01:58',
    laurel: 'Gen-AI Competition Finalist',
    image: '/assets/images/reels/reel_6_DAYbnEMITpG_thumb.jpg',
    videoFile: '/assets/videos/reel_6_DAYbnEMITpG.mp4',
    previewVideo: '/assets/videos/reel_6_DAYbnEMITpG_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DAYbnEMITpG/',
    logline: 'Uncovering the rich heritage and timeless wisdom of Emperor Ashoka where ancient history meets next-generation generative AI.',
    synopsis: 'An official Gen-AI competition short film conceived, directed, written, and edited by Aarya Bhujade. Exploring the spiritual transformation of Emperor Ashoka from bloodshed to peace through dramatic synthetic cinematography and original rap lyrics.',
    pipeline: [
      { step: 'Keyframe Ideation', tool: 'Midjourney & Ideogram AI' },
      { step: 'Kinetic Generation', tool: 'Leonardo AI & Krea AI' },
      { step: 'Visual Compositing', tool: 'Adobe After Effects & Photoshop' },
      { step: 'Sound & Direction', tool: 'Premiere Pro (MAAC Andheri)' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '980 × 554 Native Master',
      renderPasses: 'Multi-Prompt Narrative Pass',
      directorNote: 'Created with AI Edicts for the Gen-AI Competition. Guiding generative engines to honor Indian historical weight was a milestone in generative storytelling.'
    }
  },
  {
    id: 'stranger-things-ai',
    title: 'STRANGER THINGS: AI RE-IMAGINING',
    tag: 'AI FILM',
    category: 'films',
    year: '2025',
    format: '9:16 CINEMATIC // 1080P',
    runtime: '00:40',
    laurel: 'Trending AI Creative Sequence',
    image: '/assets/images/reels/reel_3_DR7HSyHE4gY_thumb.jpg',
    videoFile: '/assets/videos/reel_3_DR7HSyHE4gY.mp4',
    previewVideo: '/assets/videos/reel_3_DR7HSyHE4gY_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DR7HSyHE4gY/',
    logline: 'Things just got stranger: a surreal digital breakdown where the Upside Down breaches the editor workstation.',
    synopsis: 'A stylized generative VFX sequence featuring Aarya at his grading desk being overtaken by the Mind Flayer. Engineered using multi-layer depth inpainting, synthetic tentacle dynamics, and retro synth-wave color grading.',
    pipeline: [
      { step: 'Subject Camera Plate', tool: 'Sony Alpha 4K Studio Plate' },
      { step: 'Neural Inpainting', tool: 'ComfyUI & Kling AI Diffusion' },
      { step: 'Atmospheric Smoke', tool: 'After Effects Volumetrics' },
      { step: 'Color Grade', tool: 'DaVinci Resolve Retro Neon Pass' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '720 × 1280 (Vertical 9:16)',
      renderPasses: '12 Optical Composite Layers',
      directorNote: 'A playful yet technically rigorous exploration of blending practical desk plates with neural horror compositing.'
    }
  },

  // --- SACRED & DIVINE MUSICAL PRODUCTIONS (NETLIFY PORTFOLIO MASTERS) ---
  {
    id: 'bani-re-joganiya',
    title: 'BANI RE JOGANIYA: DIVINE JOURNEY',
    tag: 'MUSIC FILM',
    category: 'music_films',
    year: '2025',
    format: '16:9 WIDESCREEN // 4K SACRED CINEMA',
    runtime: '04:22',
    laurel: 'Featured Musical Film on YouTube',
    image: '/assets/images/music_films/bani_re_joganiya.jpg',
    youtubeId: 'y2YgJ0lXWMQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=y2YgJ0lXWMQ',
    logline: 'A divine musical voyage combining spiritual surrender, sacred poetry, and transcendent visual worldbuilding.',
    synopsis: 'Featured musical production directed and designed with generative AI. Takes the viewer on a deeply emotional pilgrim path celebrating eternal devotion, rich Rajasthani devotional palettes, and ethereal temple atmospheres.',
    pipeline: [
      { step: 'Sacred Worldbuilding', tool: 'Midjourney v6 & Flux Pro' },
      { step: 'Cinematic Motion Synthesis', tool: 'Runway Gen-3 Alpha & Kling' },
      { step: 'Atmospheric Grade', tool: 'DaVinci Resolve Golden Hour LUT' },
      { step: 'Audio Synchronization', tool: 'Premiere Pro Master' }
    ],
    stats: {
      fps: '24 FPS',
      resolution: '3840 × 2160 (4K Master)',
      renderPasses: 'Sacred Atmosphere Simulation',
      directorNote: 'Bani Re Joganiya is about pure spiritual surrender. Translating the longing of the soul into visual poetry with generative AI was a deeply moving experience.'
    }
  },
  {
    id: 'chalo-kumbh',
    title: 'CHALO KUMBH: SACRED CONFLUENCE',
    tag: 'MUSIC FILM',
    category: 'music_films',
    year: '2025',
    format: '16:9 WIDESCREEN // EPIC SCALE',
    runtime: '03:50',
    laurel: 'Official Mahakumbh 2025 Anthem',
    image: '/assets/images/music_films/chalo_kumbh.jpg',
    youtubeId: 'YrJPZad6q0g',
    youtubeUrl: 'https://www.youtube.com/watch?v=YrJPZad6q0g',
    logline: 'An epic visual anthem honoring the sacred Mahakumbh pilgrimage: where millions unite at the divine Sangam.',
    synopsis: 'A grand-scale visual symphony celebrating the spiritual majesty of the Kumbh Mela. Featuring expansive aerial vistas, holy river rituals, sadhu processions, and twilight Ganga Aarti illumination crafted through cinematic AI rendering.',
    pipeline: [
      { step: 'Crowd & Landscape Synthesis', tool: 'Flux & Midjourney' },
      { step: 'Water & Fire Simulation', tool: 'Kling AI Fluid Dynamics' },
      { step: 'Divine Particle Compositing', tool: 'After Effects Ember & Smoke' },
      { step: 'Symphonic Master', tool: 'DaVinci Resolve 4K Theatrical' }
    ],
    stats: {
      fps: '24 FPS',
      resolution: '3840 × 2160 (4K Master)',
      renderPasses: 'Epic Scale Crowd Simulation',
      directorNote: 'Capturing the unprecedented human and divine magnitude of Mahakumbh required framing immense scale without losing the individual pilgrim intimacy.'
    }
  },
  {
    id: 'siya-ram-aaye',
    title: 'SIYA RAM AAYE: SOULFUL BHAKTI',
    tag: 'MUSIC FILM',
    category: 'music_films',
    year: '2025',
    format: '16:9 WIDESCREEN // BHAKTI CINEMA',
    runtime: '03:45',
    laurel: 'Soulful Bhakti Visual Production',
    image: '/assets/images/music_films/siya_ram_aaye.jpg',
    youtubeId: 'JZYm-XgQas4',
    youtubeUrl: 'https://www.youtube.com/watch?v=JZYm-XgQas4',
    logline: 'A heartfelt devotional celebration visualizing the triumphant and loving return of Shri Ram and Sita to Ayodhya.',
    synopsis: 'Ethereal music film centered on the emotional reunion of Ayodhya with Prabhu Shri Ram. Crafted with warm terracotta architecture, celebratory flower showers, luminous diyas, and deeply expressive character portraiture.',
    pipeline: [
      { step: 'Ayodhya World Architecture', tool: 'Midjourney Sacred Geometry' },
      { step: 'Diya & Petal Dynamics', tool: 'After Effects Trapcode Particular' },
      { step: 'Expressive Motion Synthesis', tool: 'Runway Gen-3' },
      { step: 'Devotional Master', tool: 'DaVinci Resolve Warm Gold Grade' }
    ],
    stats: {
      fps: '24 FPS',
      resolution: '3840 × 2160 UHD',
      renderPasses: 'Golden Hour Lighting Rig',
      directorNote: 'The emotion of welcoming Bhagwan Ram back home is eternal in Indian consciousness. The visuals needed to radiate pure warmth, tears of joy, and spiritual peace.'
    }
  },
  {
    id: 'letter-from-krishna',
    title: 'A LETTER FROM KRISHNA: JANMASHTAMI SPECIAL',
    tag: 'MUSIC FILM',
    category: 'music_films',
    year: '2025',
    format: '16:9 WIDESCREEN // SACRED VISUAL POEM',
    runtime: '03:15',
    laurel: 'Janmashtami Special YouTube Feature',
    image: '/assets/images/music_films/letter_from_krishna.jpg',
    youtubeId: 'nYwNLFrSWy8',
    youtubeUrl: 'https://www.youtube.com/watch?v=nYwNLFrSWy8',
    logline: 'An intimate cinematic letter addressed to humanity from Lord Krishna, rendered with gentle emotional resonance.',
    synopsis: 'A deeply meditative narrative poem visualizing the wisdom of the Bhagavad Gita and Krishna\'s timeless assurances. Lush Vrindavan forests, Yamuna riverbanks, peacock plumage, and compassionate divine gazes.',
    pipeline: [
      { step: 'Sacred Character Conceptualization', tool: 'Midjourney & Leonardo' },
      { step: 'Poetic Fluid Camera Moves', tool: 'Luma Dream Machine & Kling' },
      { step: 'Soft Celluloid Grading', tool: 'DaVinci Resolve 35mm Emulation' },
      { step: 'Narrative Soundscape', tool: 'Bansuri Flute & Ambient Nature' }
    ],
    stats: {
      fps: '24 FPS',
      resolution: '3840 × 2160 UHD',
      renderPasses: 'Poetic Narrative Timing',
      directorNote: 'This film was built as an intimate conversation. Krishna speaking not just as a deity, but as an eternal friend and guide through the struggles of life.'
    }
  },
  {
    id: 'parshuram-jayanti',
    title: 'PARSHURAM JAYANTI: THE WARRIOR SAGE',
    tag: 'MUSIC FILM',
    category: 'music_films',
    year: '2024',
    format: '16:9 WIDESCREEN // MYTHOLOGICAL ACTION',
    runtime: '02:48',
    laurel: 'Mythological Action Special',
    image: '/assets/images/music_films/parshuram_jayanti.jpg',
    youtubeId: 'byYBJOo-bFk',
    youtubeUrl: 'https://www.youtube.com/watch?v=byYBJOo-bFk',
    logline: 'Dynamic action and unyielding righteous fury: capturing the legendary martial prowess of Bhagwan Parshuram.',
    synopsis: 'A high-octane mythological music video depicting the sixth avatar of Vishnu. Showcasing lightning-charged axe combat, stormy mountain peaks, fierce ascetic discipline, and the defense of Dharma.',
    pipeline: [
      { step: 'Axe & Combat Choreography', tool: 'Midjourney Action Sequences' },
      { step: 'Thunder & Lightning VFX', tool: 'After Effects Electrical Sim' },
      { step: 'High-Impact Grading', tool: 'High-Contrast Teal & Fiery Amber' },
      { step: 'War-Drum Score', tool: 'Tandav Drum Beat Sync' }
    ],
    stats: {
      fps: '24 FPS',
      resolution: '3840 × 2160 UHD',
      renderPasses: 'VFX Lightning Passes',
      directorNote: 'Parshuram represents warrior righteousness. The visual cadence had to strike like thunder with relentless impact.'
    }
  },

  // --- BRAND CAMPAIGNS & LIVE PRODUCTIONS ---
  {
    id: 'swastik-ganesh-utsav',
    title: 'SWASTIK: SACRED CELEBRATIONS',
    tag: 'COMMERCIAL',
    category: 'ads',
    year: '2024',
    format: '9:16 THEATRICAL // 4K',
    runtime: '00:54',
    laurel: 'Official Swastik Stories Production',
    image: '/assets/images/reels/reel_4_DNwuSMfYnr7_thumb.jpg',
    videoFile: '/assets/videos/reel_4_DNwuSMfYnr7.mp4',
    previewVideo: '/assets/videos/reel_4_DNwuSMfYnr7_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DNwuSMfYnr7/',
    logline: 'With joy, devotion and togetherness: welcoming Bappa into homes and hearts through emotive visual storytelling.',
    synopsis: 'Produced by Aarya Bhujade as AI Artist and Motion Designer at Swastik Stories. Weaving traditional festive devotion with contemporary motion graphics and golden particle embers.',
    pipeline: [
      { step: 'Visual Concept', tool: 'Swastik Stories Creative Direction' },
      { step: 'Motion Design', tool: 'After Effects Kinetic Graphics' },
      { step: 'Generative Elements', tool: 'AI Floral & Lighting Enhancement' },
      { step: 'Sound & Master', tool: 'Premiere Pro Festive Master' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '720 × 1280 (High Bitrate)',
      renderPasses: 'Swastik Production Pipeline',
      directorNote: 'This festive film is an emotion we cherish every year. Ensuring cultural reverence while introducing sleek modern motion design was the primary directive.'
    }
  },
  {
    id: 'sunburn-goa',
    title: 'SUNBURN GOA: ELECTRONIC HORIZONS',
    tag: 'COMMERCIAL',
    category: 'ads',
    year: '2023',
    format: '9:16 FESTIVAL CAMPAIGN',
    runtime: '00:31',
    laurel: 'Sunburn Festival Official Coverage',
    image: '/assets/images/reels/reel_11_C2KYZ2wsWEc_thumb.jpg',
    videoFile: '/assets/videos/reel_11_C2KYZ2wsWEc.mp4',
    previewVideo: '/assets/videos/reel_11_C2KYZ2wsWEc_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/C2KYZ2wsWEc/',
    logline: 'Hypnotic beats, laser storms, and crowd ecstasy at Sunburn Festival Goa.',
    synopsis: 'High-octane commercial coverage of Asia\'s premier electronic music festival. Features strobe-synchronized cuts, low-light optical performance, and dynamic camera moves through 50,000-strong festival crowds.',
    pipeline: [
      { step: 'Crowd Cinematography', tool: 'Low-Light Dual ISO Camera' },
      { step: 'Speed Ramping', tool: 'Optical Flow Frame Interpolation' },
      { step: 'Laser Glow & Grading', tool: 'Custom LUTs + Neon Flare Enhancement' },
      { step: 'Audio Sync', tool: 'Psy-Trance & Techno Beat Synchronization' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '720 × 1280',
      renderPasses: 'Beat-Matched Cut Pipeline',
      directorNote: 'Energy in festival filmmaking is about cutting on the transient of the kick drum. Every frame here pulses with raw sonic adrenaline.'
    }
  },

  // --- DOCUMENTARY & CINEMATIC EXPEDITIONS ---
  {
    id: 'ladakh-expedition',
    title: 'LADAKH: BEYOND THE CLOUDS',
    tag: 'VFX SHOT',
    category: 'vfx',
    year: '2024',
    format: 'CINEMATIC TRAVEL // 4K',
    runtime: '00:21',
    laurel: 'VsnapU Luxury Shoot Expedition',
    image: '/assets/images/reels/reel_5_DB90UpYo5R4_thumb.jpg',
    videoFile: '/assets/videos/reel_5_DB90UpYo5R4.mp4',
    previewVideo: '/assets/videos/reel_5_DB90UpYo5R4_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DB90UpYo5R4/',
    logline: 'Finding peace over chaos in the high-altitude mountain desert of Leh-Ladakh.',
    synopsis: 'Shot on location in Leh-Ladakh as part of Aarya\'s work with VsnapU. Documenting the human spirit, stark Himalayan topography, and heartfelt spontaneous encounters with local village children.',
    pipeline: [
      { step: 'On-Location Camera', tool: 'High-Speed Gimbal & Prime Lens' },
      { step: 'Lighting & Grading', tool: 'Natural Himalayan Sunlight & ACES' },
      { step: 'Narrative Voiceover', tool: 'Original Monologue' },
      { step: 'Final Polish', tool: 'DaVinci Resolve Film Grain' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '720 × 1280',
      renderPasses: 'Raw Log to Rec.709 Grade',
      directorNote: 'Some landscapes demand silence. Ladakh taught me the art of patient framing and letting the environment tell the story.'
    }
  },
  {
    id: 'iaf-aerial-mumbai',
    title: 'IAF: AERIAL SPECTACLE MARINE DRIVE',
    tag: 'VFX SHOT',
    category: 'vfx',
    year: '2024',
    format: '4K ULTRA TELEPHOTO',
    runtime: '00:26',
    laurel: 'Government of Maharashtra Outreach',
    image: '/assets/images/reels/reel_12_C2Ar8eDS3Lp_thumb.jpg',
    videoFile: '/assets/videos/reel_12_C2Ar8eDS3Lp.mp4',
    previewVideo: '/assets/videos/reel_12_C2Ar8eDS3Lp_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/C2Ar8eDS3Lp/',
    logline: 'Indian Air Force fighter jets dazzle Mumbai with high-g supersonic aerobatics over the Arabian Sea.',
    synopsis: 'Capturing the Indian Air Force outreach aerial display over Marine Drive, Mumbai. Extreme telephoto tracking of Sukhoi Su-30MKI and Surya Kiran aerobatic teams slicing through Mumbai coastal humidity.',
    pipeline: [
      { step: 'High-Velocity Tracking', tool: 'Manual Telephoto Camera Rig' },
      { step: 'Haze Penetration', tool: 'De-haze & Contrast Optimization' },
      { step: 'Audio Engineering', tool: 'Engine Roar & Afterburner Boost' },
      { step: 'Master Delivery', tool: '4K Theatrical Sharpening' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '720 × 1280',
      renderPasses: '600mm Long-Lens Tracking',
      directorNote: 'Tracking Mach-speed jets manually across the Marine Drive coastline requires absolute precision and instinctive anticipation.'
    }
  },
  {
    id: 'kala-ghoda-mumbai',
    title: 'KALA GHODA: SOUL OF MUMBAI',
    tag: 'MATTE PAINT',
    category: 'stills',
    year: '2024',
    format: 'DOCUMENTARY PORTRAITURE',
    runtime: '00:36',
    laurel: 'Kala Ghoda Arts Festival',
    image: '/assets/images/reels/reel_9_C7cB8-XoEFQ_thumb.jpg',
    videoFile: '/assets/videos/reel_9_C7cB8-XoEFQ.mp4',
    previewVideo: '/assets/videos/reel_9_C7cB8-XoEFQ_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/C7cB8-XoEFQ/',
    logline: 'Every masterpiece begins with a simple act of kindness: appreciating street artists in the heart of Mumbai.',
    synopsis: 'An evocative documentary portraiture piece exploring the live sketch artists and sculptors of the iconic Kala Ghoda Arts Festival in South Mumbai. Intimate close-ups on charcoal, chalk, and facial expressions.',
    pipeline: [
      { step: 'Street Portraiture', tool: '85mm f/1.4 Bokeh Aperture' },
      { step: 'Natural Ambient Tone', tool: 'South Mumbai Heritage Grade' },
      { step: 'Micro-Motion', tool: 'Handheld Tactile Movement' },
      { step: 'Color Balance', tool: 'Warm Celluloid Emulation' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '720 × 1280',
      renderPasses: 'Documentary Master',
      directorNote: 'A tribute to the tactile, human origins of all art before the advent of pixels.'
    }
  },
  {
    id: 'monochrome-photowalk',
    title: 'THE MONOCHROME APERTURE',
    tag: 'MATTE PAINT',
    category: 'stills',
    year: '2024',
    format: 'BLACK & WHITE CINEMATOGRAPHY',
    runtime: '00:20',
    laurel: 'Street Composition Showcase',
    image: '/assets/images/reels/reel_8_C-rMfPto3hr_thumb.jpg',
    videoFile: '/assets/videos/reel_8_C-rMfPto3hr.mp4',
    previewVideo: '/assets/videos/reel_8_C-rMfPto3hr_preview.mp4',
    instagramUrl: 'https://www.instagram.com/reel/C-rMfPto3hr/',
    logline: 'Angles, contrasts, and sacred geometry: exploring street photowalks in timeless monochrome.',
    synopsis: 'A masterclass study in light, shadow, and architectural framing. Stripping away color to highlight negative space, symmetry, and street life dynamism.',
    pipeline: [
      { step: 'Monochrome Framing', tool: 'High-Contrast B&W Sensor Curve' },
      { step: 'Zone System Grading', tool: 'Ansel Adams Tonal Mapping' },
      { step: 'Sprocket Grain', tool: 'Kodak Tri-X 400 Grain Profile' },
      { step: 'Pacing', tool: 'Meditative Beat Timing' }
    ],
    stats: {
      fps: '30 FPS',
      resolution: '720 × 1280',
      renderPasses: 'Silver Halide Simulation',
      directorNote: 'When you take away color, you are left with pure composition, rhythm, and emotion.'
    }
  }
];

/**
 * All 16 Downloaded Instagram Reels for the Dedicated Reels Deck
 * Fully optimized with faststart and instant hover preview clips.
 */
export const ALL_INSTAGRAM_REELS = [
  // Commercial & Client Reels (Featured at the top)
  {
    id: 'client-reel-glamirk',
    code: 'DcbKUe0TxpT',
    title: 'Glamirk India: Luxury AI Campaign',
    category: 'COMMERCIAL',
    runtime: '15s',
    videoFile: '/assets/videos/client_reel_glamirk_DcbKUe0TxpT.mp4',
    previewVideo: '/assets/videos/client_reel_glamirk_DcbKUe0TxpT_preview.mp4',
    thumbnail: '/assets/images/reels/client_reel_glamirk_DcbKUe0TxpT_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DcbKUe0TxpT/',
    caption: 'Cinematic commercial campaign for Glamirk India crafted with hyper-realistic AI lighting and luxury aesthetic.'
  },
  {
    id: 'client-reel-mahindra',
    code: 'DdJaiZThP8N',
    title: 'Mahindra Veero: Commercial Reel',
    category: 'COMMERCIAL',
    runtime: '23s',
    videoFile: '/assets/videos/client_reel_mahindra_DdJaiZThP8N.mp4',
    previewVideo: '/assets/videos/client_reel_mahindra_DdJaiZThP8N_preview.mp4',
    thumbnail: '/assets/images/reels/client_reel_mahindra_DdJaiZThP8N_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DdJaiZThP8N/',
    caption: 'Automotive showcase for Mahindra Veero highlighting dynamic torque, precision studio grade, and kinetic pacing.'
  },
  {
    id: 'client-reel-starpravah',
    code: 'DdDPCmmmHL2',
    title: 'Star Pravah: Broadcast Promo',
    category: 'BROADCAST',
    runtime: '52s',
    videoFile: '/assets/videos/client_reel_starpravah_DdDPCmmmHL2.mp4',
    previewVideo: '/assets/videos/client_reel_starpravah_DdDPCmmmHL2_preview.mp4',
    thumbnail: '/assets/images/reels/client_reel_starpravah_DdDPCmmmHL2_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DdDPCmmmHL2/',
    caption: 'Official television broadcast promotional sequence engineered for the premier Star Pravah television network.'
  },
  {
    id: 'client-reel-swastik',
    code: 'DQDfgLFkxeJ',
    title: 'Swastik Productions: Mythological Visuals',
    category: 'MYTHOLOGICAL',
    runtime: '26s',
    videoFile: '/assets/videos/client_reel_swastik_DQDfgLFkxeJ.mp4',
    previewVideo: '/assets/videos/client_reel_swastik_DQDfgLFkxeJ_preview.mp4',
    thumbnail: '/assets/images/reels/client_reel_swastik_DQDfgLFkxeJ_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DQDfgLFkxeJ/',
    caption: 'Sacred visual sequence and epic aura storytelling produced for television producer Swastik Productions.'
  },

  // Core Film & VFX Portfolio Reels
  {
    id: 'reel-6',
    code: 'DAYbnEMITpG',
    title: 'Ashoka: The Gen-AI Epic Promo',
    category: 'GEN-AI FILM',
    runtime: '1m 58s',
    videoFile: '/assets/videos/reel_6_DAYbnEMITpG.mp4',
    previewVideo: '/assets/videos/reel_6_DAYbnEMITpG_preview.mp4',
    thumbnail: '/assets/images/reels/reel_6_DAYbnEMITpG_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DAYbnEMITpG/',
    caption: 'Official Gen-AI Competition Promo exploring Emperor Ashoka. Directed & edited by Aarya Bhujade. Tools: Midjourney, Ideogram, Leonardo AI, Krea AI.'
  },
  {
    id: 'reel-3',
    code: 'DR7HSyHE4gY',
    title: 'Stranger Things: AI Re-Imagining',
    category: 'AI VFX',
    runtime: '40s',
    videoFile: '/assets/videos/reel_3_DR7HSyHE4gY.mp4',
    previewVideo: '/assets/videos/reel_3_DR7HSyHE4gY_preview.mp4',
    thumbnail: '/assets/images/reels/reel_3_DR7HSyHE4gY_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DR7HSyHE4gY/',
    caption: 'Things just got stranger: Aarya workstation overtaken by the Mind Flayer in an AI creative VFX edit.'
  },
  {
    id: 'reel-4',
    code: 'DNwuSMfYnr7',
    title: 'Swastik Stories: Ganesh Chaturthi',
    category: 'COMMERCIAL',
    runtime: '54s',
    videoFile: '/assets/videos/reel_4_DNwuSMfYnr7.mp4',
    previewVideo: '/assets/videos/reel_4_DNwuSMfYnr7_preview.mp4',
    thumbnail: '/assets/images/reels/reel_4_DNwuSMfYnr7_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DNwuSMfYnr7/',
    caption: 'Official promotional campaign produced at Swastik Stories featuring festive visual storytelling.'
  },
  {
    id: 'reel-5',
    code: 'DB90UpYo5R4',
    title: 'Ladakh: High-Altitude Solitude',
    category: 'TRAVEL & DOC',
    runtime: '21s',
    videoFile: '/assets/videos/reel_5_DB90UpYo5R4.mp4',
    previewVideo: '/assets/videos/reel_5_DB90UpYo5R4_preview.mp4',
    thumbnail: '/assets/images/reels/reel_5_DB90UpYo5R4_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DB90UpYo5R4/',
    caption: 'On-location shoot in Leh-Ladakh. Finding peace and genuine human connection among the mountains.'
  },
  {
    id: 'reel-11',
    code: 'C2KYZ2wsWEc',
    title: 'Sunburn Goa 2023: Techno Festival',
    category: 'COMMERCIAL',
    runtime: '31s',
    videoFile: '/assets/videos/reel_11_C2KYZ2wsWEc.mp4',
    previewVideo: '/assets/videos/reel_11_C2KYZ2wsWEc_preview.mp4',
    thumbnail: '/assets/images/reels/reel_11_C2KYZ2wsWEc_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/C2KYZ2wsWEc/',
    caption: 'Sunburn Festival Goa electronic music coverage with high-energy laser and crowd cinematography.'
  },
  {
    id: 'reel-12',
    code: 'C2Ar8eDS3Lp',
    title: 'Indian Air Force: Mumbai Air Show',
    category: 'VFX & ACTION',
    runtime: '26s',
    videoFile: '/assets/videos/reel_12_C2Ar8eDS3Lp.mp4',
    previewVideo: '/assets/videos/reel_12_C2Ar8eDS3Lp_preview.mp4',
    thumbnail: '/assets/images/reels/reel_12_C2Ar8eDS3Lp_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/C2Ar8eDS3Lp/',
    caption: 'IAF aerial aerobatics display over Marine Drive Mumbai in 4K telephoto tracking.'
  },
  {
    id: 'reel-8',
    code: 'C-rMfPto3hr',
    title: 'Monochrome Photowalk 2.0',
    category: 'PHOTOGRAPHY',
    runtime: '20s',
    videoFile: '/assets/videos/reel_8_C-rMfPto3hr.mp4',
    previewVideo: '/assets/videos/reel_8_C-rMfPto3hr_preview.mp4',
    thumbnail: '/assets/images/reels/reel_8_C-rMfPto3hr_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/C-rMfPto3hr/',
    caption: 'Street photography study in Nagpur & Mumbai exploring sacred geometry, angles, and monochrome light.'
  },
  {
    id: 'reel-9',
    code: 'C7cB8-XoEFQ',
    title: 'Kala Ghoda Art Festival: Mumbai',
    category: 'DOCUMENTARY',
    runtime: '36s',
    videoFile: '/assets/videos/reel_9_C7cB8-XoEFQ.mp4',
    previewVideo: '/assets/videos/reel_9_C7cB8-XoEFQ_preview.mp4',
    thumbnail: '/assets/images/reels/reel_9_C7cB8-XoEFQ_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/C7cB8-XoEFQ/',
    caption: 'Appreciating the living street artists and portrait sketchers at Kala Ghoda Festival Mumbai.'
  },
  {
    id: 'reel-10',
    code: 'C31hpWSPiPm',
    title: 'Omkareshwar Temple: Sacred Jyotirlinga',
    category: 'DEVOTIONAL',
    runtime: '28s',
    videoFile: '/assets/videos/reel_10_C31hpWSPiPm.mp4',
    previewVideo: '/assets/videos/reel_10_C31hpWSPiPm_preview.mp4',
    thumbnail: '/assets/images/reels/reel_10_C31hpWSPiPm_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/C31hpWSPiPm/',
    caption: 'Spiritual visual journey across Omkareshwar Mandhata temple on the Narmada River.'
  },
  {
    id: 'reel-2',
    code: 'DT4sIS7iJXy',
    title: 'Cinematic Narrative: Pure Souls',
    category: 'NARRATIVE',
    runtime: '47s',
    videoFile: '/assets/videos/reel_2_DT4sIS7iJXy.mp4',
    previewVideo: '/assets/videos/reel_2_DT4sIS7iJXy_preview.mp4',
    thumbnail: '/assets/images/reels/reel_2_DT4sIS7iJXy_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DT4sIS7iJXy/',
    caption: 'Philosophical visual meditation: because some souls are too pure for the noise of the world.'
  },
  {
    id: 'reel-7',
    code: 'C_XPGShtXNq',
    title: 'Mumbai Ganpati: Chinchpokli Cha Chintamani',
    category: 'CULTURE',
    runtime: '19s',
    videoFile: '/assets/videos/reel_7_C_XPGShtXNq.mp4',
    previewVideo: '/assets/videos/reel_7_C_XPGShtXNq_preview.mp4',
    thumbnail: '/assets/images/reels/reel_7_C_XPGShtXNq_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/C_XPGShtXNq/',
    caption: 'Iconic street procession and murti darshan of Chinchpokli Cha Chintamani Mumbai.'
  },
  {
    id: 'reel-1',
    code: 'DckiH89ylxu',
    title: 'Childhood Roots: From Memories to Cinema',
    category: 'HERITAGE',
    runtime: '10s',
    videoFile: '/assets/videos/reel_1_DckiH89ylxu.mp4',
    previewVideo: '/assets/videos/reel_1_DckiH89ylxu_preview.mp4',
    thumbnail: '/assets/images/reels/reel_1_DckiH89ylxu_thumb.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DckiH89ylxu/',
    caption: 'A heartfelt visual tribute celebrating family heritage, nostalgia, and where the artistic journey began.'
  }
];

/**
 * All 6 Static Comic Carousel Lore Series
 * Complete multi-panel visual graphic novels created with generative AI.
 */
export const COMIC_CAROUSELS = [
  {
    "id": "comic-dvnzo2dkrjc",
    "code": "DVNZO2DkRJC",
    "title": "THE ART OF HUMILITY",
    "tag": "MYTHOLOGICAL LORE",
    "teaser": "True greatness is not in rising above others, but in knowing when to bow.",
    "readTime": "2 MIN READ",
    "panelCount": 7,
    "cover": "/assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_1.webp",
    "panels": [
      "/assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_1.webp",
      "/assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_2.webp",
      "/assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_3.webp",
      "/assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_4.webp",
      "/assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_5.webp",
      "/assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_6.webp",
      "/assets/comics/DVNZO2DkRJC/DVNZO2DkRJC_20260226_052435_DVNZO2DkRJC_7.webp"
    ],
    "caption": "True greatness is not in rising above others, but in knowing when to bow.\n.\n.\n.\n.\n.\n.\n.\n\n#IndianMythology #HinduMythology #SanatanStories",
    "instagramUrl": "https://www.instagram.com/p/DVNZO2DkRJC/"
  },
  {
    "id": "comic-dvjhopljmwb",
    "code": "DVJHOpljMwb",
    "title": "LEGEND OF INNER STRENGTH",
    "tag": "SACRED SCRIPTURES",
    "teaser": "Strength is not always about sheer force — sometimes it is about divine intellect.",
    "readTime": "3 MIN READ",
    "panelCount": 11,
    "cover": "/assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_1.jpg",
    "panels": [
      "/assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_1.jpg",
      "/assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_2.jpg",
      "/assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_3.jpg",
      "/assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_4.jpg",
      "/assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_5.jpg",
      "/assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_6.jpg",
      "/assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_7.jpg",
      "/assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_8.jpg",
      "/assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_9.jpg",
      "/assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_10.jpg",
      "/assets/comics/DVJHOpljMwb/DVJHOpljMwb_20260224_133018_DVJHOpljMwb_11.jpg"
    ],
    "caption": "This ancient legend shows—\nstrength is not always about power, sometimes it’s about intelligence.\n\n#indianmythology #hindumythology #mythologystories",
    "instagramUrl": "https://www.instagram.com/p/DVJHOpljMwb/"
  },
  {
    "id": "comic-dvdmz2_kdk7",
    "code": "DVDMZ2_kdK7",
    "title": "BRAJ & AYODHYA: THE ORIGINS OF HOLI",
    "tag": "CULTURAL CHRONICLE",
    "teaser": "Before colours touched the face, they touched the heart. Two traditions, one festival.",
    "readTime": "2 MIN READ",
    "panelCount": 8,
    "cover": "/assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_1.jpg",
    "panels": [
      "/assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_1.jpg",
      "/assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_2.jpg",
      "/assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_3.jpg",
      "/assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_4.jpg",
      "/assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_5.jpg",
      "/assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_6.jpg",
      "/assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_7.jpg",
      "/assets/comics/DVDMZ2_kdK7/DVDMZ2_kdK7_20260222_062005_DVDMZ2_kdK7_8.jpg"
    ],
    "caption": "Before colours touched the face,\nthey touched the heart.\n\nIn Braj, people follow Krishna so Holi is playful.\nIn Ayodhya, people follow Ram so Holi is graceful.\n\nTwo traditions. One festival.\n\nWhich Holi speaks to you? 🎨🌸\n.\n.\n.\n.\n.\n#SwastikStories #SarayuHoli #RamRajya #HoliWithMeaning #holi2026",
    "instagramUrl": "https://www.instagram.com/p/DVDMZ2_kdK7/"
  },
  {
    "id": "comic-duuf9jzkrnm",
    "code": "DUuf9jZkRNM",
    "title": "CHANDRA: THE CRESCENT IN SHIVA'S HAIR",
    "tag": "SHIVA VISUAL LORE",
    "teaser": "A promise made, a love that broke balance. Mahadev restored cosmic rhythm.",
    "readTime": "2 MIN READ",
    "panelCount": 8,
    "cover": "/assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_1.jpg",
    "panels": [
      "/assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_1.jpg",
      "/assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_2.jpg",
      "/assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_3.jpg",
      "/assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_4.jpg",
      "/assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_5.jpg",
      "/assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_6.jpg",
      "/assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_7.jpg",
      "/assets/comics/DUuf9jZkRNM/DUuf9jZkRNM_20260214_052656_DUuf9jZkRNM_8.jpg"
    ],
    "caption": "The moon in Shiva’s hair is Chandra himself. 🌙🔱\n\nA promise made.\nA love that broke balance.\nA curse that dimmed the heavens.\n\nMahadev didn’t just save the moon —\nHe restored cosmic rhythm.\nBecause love without responsibility…\nleads to chaos.\n\nSwipe through the story of Shiva’s crescent moon.\n.\n.\n.\n.\n.\n#SwastikStories #MahadevStory #ShivaMythology #ChandraDev #HinduMythology",
    "instagramUrl": "https://www.instagram.com/p/DUuf9jZkRNM/"
  },
  {
    "id": "comic-dupfgicksek",
    "code": "DUpfGIckSek",
    "title": "THE DEMON TIGER & MAHADEV'S LESSON",
    "tag": "SHIVA VISUAL LORE",
    "teaser": "True power isn't domination — it is mastery over the self. The lore of Shiva's tiger skin.",
    "readTime": "2 MIN READ",
    "panelCount": 9,
    "cover": "/assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_1.jpg",
    "panels": [
      "/assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_1.jpg",
      "/assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_2.jpg",
      "/assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_3.jpg",
      "/assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_4.jpg",
      "/assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_5.jpg",
      "/assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_6.jpg",
      "/assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_7.jpg",
      "/assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_8.jpg",
      "/assets/comics/DUpfGIckSek/DUpfGIckSek_20260212_064310_DUpfGIckSek_9.jpg"
    ],
    "caption": "A demon tiger.\nAngry sages.\nA lesson the world still needs.\n\nMahadev teaches us —\nTrue power isn’t domination,\nit’s mastery over the self. 🐅🔱\n\nSwipe through the story of Shiva’s tiger skin.\n.\n.\n.\n.\n.\n#SwastikStories #MahadevStory #ShivaMythology #HinduMythology #MythologyExplained",
    "instagramUrl": "https://www.instagram.com/p/DUpfGIckSek/"
  },
  {
    "id": "comic-dupmkg9ezun",
    "code": "DUPmkG9EZUn",
    "title": "WHERE EGO BURNS: SHIVA'S REALM",
    "tag": "SPIRITUAL AWAKENING",
    "teaser": "Where ego burns, where titles disappear, where only the eternal truth remains.",
    "readTime": "2 MIN READ",
    "panelCount": 7,
    "cover": "/assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_1.jpg",
    "panels": [
      "/assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_1.jpg",
      "/assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_2.jpg",
      "/assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_3.jpg",
      "/assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_4.jpg",
      "/assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_5.jpg",
      "/assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_6.jpg",
      "/assets/comics/DUPmkG9EZUn/DUPmkG9EZUn_20260202_052810_DUPmkG9EZUn_7.jpg"
    ],
    "caption": "Where ego burns\nWhere titles disappear\nWhere only truth remains\nThat’s Shiva’s home 🕉️\n\n#Mahadev #ShivaVibes #SpiritualAwakening #ReelsIndia #Sanatan",
    "instagramUrl": "https://www.instagram.com/p/DUPmkG9EZUn/"
  }
];
