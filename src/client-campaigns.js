/**
 * Client campaigns supplied for the portfolio, with the descriptions
 * written for each Instagram reel.
 */

const pipeline = [
  { step: 'Environment Design', tool: 'AI-generated environments' },
  { step: 'Motion Design', tool: 'Cinematic motion graphics' },
  { step: 'Scene Extension', tool: 'Visual world-building' },
  { step: 'Delivery', tool: 'Campaign master' },
];

function runtime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

const CAMPAIGNS = [
  {
    code: 'DYm5WygtS4A',
    title: 'PAYAL GAMING × OWND!',
    reelTitle: 'Payal Gaming × OWND!',
    tag: 'COMMERCIAL',
    category: 'ads',
    reelCategory: 'COMMERCIAL',
    seconds: 28,
    description: 'AI-generated environments and cinematic motion graphics crafted to bring gaming-inspired brand storytelling to life.',
  },
  {
    code: 'DYxFR-jMMZV',
    title: 'VEEN DOGHANTALI HI TUTENA | ZEE MARATHI',
    reelTitle: 'Veen Doghantali Hi Tutena | Zee Marathi',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 70,
    description: 'AI-driven environment design and cinematic motion graphics, crafted to elevate visual storytelling for television.',
  },
  {
    code: 'DY1bOqcBs6J',
    title: 'TUM HO NAA | SONY ENTERTAINMENT TELEVISION',
    reelTitle: 'Tum Ho Naa | Sony Entertainment Television',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 130,
    description: 'AI-powered environment creation and cinematic motion graphics, bringing the visual world of television drama to life.',
  },
  {
    code: 'Dak8URtgh_o',
    title: 'KAUN BANEGA CROREPATI 18 | SONY TV',
    reelTitle: 'Kaun Banega Crorepati 18 | Sony Entertainment Television',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 60,
    description: 'A futuristic visual experience featuring AI-generated environments, immersive digital worlds, and precision-crafted motion graphics for a landmark television campaign.',
  },
  {
    code: 'DaNESJEDzsv',
    title: 'RAISONI EDUCATION × VARUN DHAWAN',
    reelTitle: 'Raisoni Education × Varun Dhawan',
    tag: 'COMMERCIAL',
    category: 'ads',
    reelCategory: 'COMMERCIAL',
    seconds: 80,
    description: 'AI-generated environments and cinematic motion graphics, transforming a campus campaign into an immersive visual experience.',
  },
  {
    code: 'Danle1FGl1O',
    title: '108 BASE HOSPITAL URI | COLORS TV',
    reelTitle: '108 Base Hospital Uri | Colors TV',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: null,
    description: 'AI-crafted landscapes and cinematic motion graphics, building an immersive visual world for a powerful story of courage, sacrifice, and patriotism.',
    unavailable: true,
  },
  {
    code: 'DblHbxXgegD',
    title: 'HOSA KATHEGALU | ZEE KANNADA',
    reelTitle: 'Hosa Kathegalu | Zee Kannada',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 25,
    description: 'AI-powered world-building and cinematic motion design, recreating a grand, heritage-inspired atmosphere for compelling Kannada television storytelling.',
  },
  {
    code: 'DbnxidxFdfV',
    title: 'AATA HOU DE DHINGANA | STAR PRAVAH',
    reelTitle: 'Aata Hou De Dhingana | Star Pravah',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 60,
    description: 'AI-driven environment creation and cinematic motion graphics, bringing breathtaking tropical visuals to life for an immersive Marathi television promo.',
  },
  {
    code: 'DcHVeznEzxV',
    title: 'MI KAAT TAKALI | STAR PRAVAH',
    reelTitle: 'Mi Kaat Takali | Star Pravah',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 10,
    description: 'From AI-generated landscapes to cinematic motion design, crafting an intense, atmospheric visual world that sets the stage for a gripping Marathi thriller.',
  },
  {
    code: 'DcIY1VJCDNO',
    title: 'L&T FINANCE × JASPRIT BUMRAH',
    reelTitle: 'L&T Finance × Jasprit Bumrah',
    tag: 'COMMERCIAL',
    category: 'ads',
    reelCategory: 'COMMERCIAL',
    seconds: 30,
    description: 'AI-crafted environments and cinematic motion graphics, blending authentic storytelling with dynamic visuals for a high-impact gold loan campaign.',
  },
  {
    code: 'DcQA-BHqlnY',
    title: 'JASPRIT BUMRAH × L&T FINANCE',
    reelTitle: 'Jasprit Bumrah × L&T Finance | Gold Loan Campaign',
    tag: 'COMMERCIAL',
    category: 'ads',
    reelCategory: 'COMMERCIAL',
    seconds: 30,
    description: 'Personally developed AI-generated environments and cinematic motion graphics, blending realistic visual storytelling with dynamic scene design to elevate the campaign’s overall impact.',
  },
  {
    code: 'DcTTHFJAuzQ',
    title: 'MI KAAT TAKALI | STAR PRAVAH — SUPERNATURAL',
    reelTitle: 'Mi Kaat Takali | Star Pravah — Supernatural',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 195,
    description: 'Created AI-generated environments and designed cinematic motion graphics, bringing the series’ supernatural atmosphere to life through immersive visual world-building.',
  },
  {
    code: 'DcbJCiUOuAz',
    title: 'BITCOIN SCAM | ZEE KANNADA',
    reelTitle: 'Bitcoin Scam | Zee Kannada',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 57,
    description: 'Built immersive AI-driven environments and cinematic visual sequences, blending realistic world-building with atmospheric motion design to shape the series’ on-screen identity.',
  },
  {
    code: 'Dcbg_McOfmU',
    title: 'AYYANA MANE 2 | ZEE KANNADA',
    reelTitle: 'Ayyana Mane 2 | Zee Kannada',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 97,
    description: 'Responsible for AI-generated environment creation, scene enhancement, and cinematic motion graphics, building atmospheric visual settings that support the series’ suspense-driven narrative.',
  },
  {
    code: 'DdQaDIKIptB',
    title: 'GANESH: DUST TO STARDUST | V2S PRODUCTIONS',
    reelTitle: 'Ganesh: Dust to Stardust | V2S Productions',
    tag: 'FILM',
    category: 'films',
    reelCategory: 'FILM',
    seconds: 21,
    description: 'Created AI-generated environments, designed detailed scene extensions, and developed cinematic motion graphics to bring the film’s grand-scale Ganesh Chaturthi visuals to life.',
  },
  {
    code: 'DdoXlJRjx39',
    title: 'MOOKUTHI AMMAN | ZEE TAMIL',
    reelTitle: 'Mookuthi Amman | Zee Tamil',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 150,
    description: 'Developed AI-generated environments and cinematic scene extensions, crafting detailed temple architecture and culturally rooted visual landscapes to enhance the promo’s cinematic scale and storytelling.',
  },
  {
    code: 'DdyMa5mMEHM',
    title: 'APSARA | STARPLUS × JIOHOTSTAR',
    reelTitle: 'Apsara | StarPlus × JioHotstar',
    tag: 'BROADCAST',
    category: 'ads',
    reelCategory: 'BROADCAST',
    seconds: 30,
    description: 'Created AI-generated environments, enhanced scene composition, and developed cinematic motion graphics to build a visually immersive fantasy world for the promotional campaign.',
  },
  {
    code: 'DeV6TRbzWI0',
    title: 'GANESH: DUST TO STARDUST | ENVIRONMENT DESIGN',
    reelTitle: 'Ganesh: Dust to Stardust | Environment Design',
    tag: 'FILM',
    category: 'films',
    reelCategory: 'FILM',
    seconds: 160,
    description: 'Created AI-generated environments, architectural backdrops, and cinematic scene extensions, shaping the film’s visual world through AI-driven environment design.',
  },
];

export const CLIENT_CAMPAIGNS = CAMPAIGNS.map((item) => {
  const media = item.unavailable ? {} : {
    videoFile: `/assets/videos/reel_${item.code}.mp4`,
    previewVideo: `/assets/videos/reel_${item.code}_preview.mp4`,
  };
  return {
    id: `campaign-${item.code}`,
    title: item.title,
    tag: item.tag,
    category: item.category,
    year: '2026',
    format: '9:16 VERTICAL // CLIENT FILM',
    runtime: item.seconds == null ? 'INSTAGRAM' : runtime(item.seconds),
    laurel: 'Client Campaign',
    image: `/assets/images/reels/reel_${item.code}_thumb.jpg`,
    ...media,
    instagramUrl: `https://www.instagram.com/reel/${item.code}/`,
    logline: item.description,
    synopsis: item.description,
    pipeline,
    stats: {
      fps: 'Source reel',
      resolution: '9:16 vertical',
      renderPasses: 'AI environment and motion pass',
      directorNote: item.description,
    },
  };
});

export const CLIENT_CAMPAIGN_REELS = CAMPAIGNS.map((item) => {
  const media = item.unavailable ? {} : {
    videoFile: `/assets/videos/reel_${item.code}.mp4`,
    previewVideo: `/assets/videos/reel_${item.code}_preview.mp4`,
  };
  return {
    id: `reel-${item.code}`,
    code: item.code,
    title: item.reelTitle,
    category: item.reelCategory,
    runtime: item.seconds == null ? 'IG' : `${item.seconds}s`,
    thumbnail: `/assets/images/reels/reel_${item.code}_thumb.jpg`,
    ...media,
    instagramUrl: `https://www.instagram.com/reel/${item.code}/`,
    caption: item.description,
  };
});
