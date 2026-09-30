import { ImageItem } from '../types';

// Import generated local AI images
import uzbekImg from '../assets/images/uzbek_culture_registan_1790762545934.jpg';
import portraitImg from '../assets/images/ai_portrait_cyberpunk_1790762566073.jpg';
import natureImg from '../assets/images/nature_emerald_mountains_1790762580031.jpg';
import archImg from '../assets/images/futuristic_architecture_museum_1790762595544.jpg';
import fantasyImg from '../assets/images/fantasy_3d_mythical_creature_1790762609120.jpg';

// High-fidelity procedurally styled vector & canvas art representations for complete coverage
const generateArtworkDataUri = (bgGradient: string, accentColor: string, motif: 'car' | 'anime' | 'fashion' | 'animal' | 'tech' | 'space' | 'cinema' | 'edu' | 'digital' | 'wallpaper'): string => {
  const motifs = {
    car: `<path d="M120 280 C 180 200, 300 170, 480 180 C 580 185, 680 230, 720 290 L 800 320 C 820 330, 830 350, 810 380 L 110 380 C 90 350, 100 320, 120 280 Z" fill="none" stroke="${accentColor}" stroke-width="8" stroke-linecap="round"/><circle cx="260" cy="380" r="55" fill="#111" stroke="${accentColor}" stroke-width="8"/><circle cx="660" cy="380" r="55" fill="#111" stroke="${accentColor}" stroke-width="8"/><circle cx="260" cy="380" r="22" fill="${accentColor}"/><circle cx="660" cy="380" r="22" fill="${accentColor}"/><path d="M250 240 L 460 210 L 590 260" fill="none" stroke="${accentColor}" stroke-width="5" opacity="0.8"/>`,
    anime: `<circle cx="450" cy="320" r="160" fill="none" stroke="${accentColor}" stroke-width="6"/><path d="M360 300 Q 400 280 430 310" stroke="${accentColor}" stroke-width="10" stroke-linecap="round" fill="none"/><path d="M470 310 Q 500 280 540 300" stroke="${accentColor}" stroke-width="10" stroke-linecap="round" fill="none"/><circle cx="400" cy="325" r="18" fill="${accentColor}"/><circle cx="500" cy="325" r="18" fill="${accentColor}"/><path d="M410 400 Q 450 430 490 400" stroke="${accentColor}" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M300 200 Q 450 130 600 200" stroke="${accentColor}" stroke-width="8" fill="none"/>`,
    fashion: `<path d="M450 160 C 430 200, 380 240, 350 320 L 320 620 L 580 620 L 550 320 C 520 240, 470 200, 450 160 Z" fill="none" stroke="${accentColor}" stroke-width="8"/><path d="M380 280 L 520 280 M370 360 L 530 360 M360 440 L 540 440" stroke="${accentColor}" stroke-width="4" stroke-dasharray="10 10"/><circle cx="450" cy="110" r="45" fill="none" stroke="${accentColor}" stroke-width="7"/>`,
    animal: `<path d="M320 400 C 310 280, 400 200, 450 200 C 500 200, 590 280, 580 400 C 575 460, 530 520, 450 520 C 370 520, 325 460, 320 400 Z" fill="none" stroke="${accentColor}" stroke-width="8"/><polygon points="340,240 310,140 390,200" fill="none" stroke="${accentColor}" stroke-width="8"/><polygon points="560,240 590,140 510,200" fill="none" stroke="${accentColor}" stroke-width="8"/><circle cx="400" cy="350" r="12" fill="${accentColor}"/><circle cx="500" cy="350" r="12" fill="${accentColor}"/><path d="M450 390 L 440 410 L 460 410 Z" fill="${accentColor}"/>`,
    tech: `<rect x="250" y="200" width="400" height="300" rx="30" fill="none" stroke="${accentColor}" stroke-width="8"/><circle cx="450" cy="350" r="70" fill="none" stroke="${accentColor}" stroke-width="6"/><circle cx="450" cy="350" r="30" fill="${accentColor}"/><path d="M250 350 L 380 350 M520 350 L 650 350 M450 200 L 450 280 M450 420 L 450 500" stroke="${accentColor}" stroke-width="8"/>`,
    space: `<circle cx="450" cy="350" r="140" fill="none" stroke="${accentColor}" stroke-width="8"/><ellipse cx="450" cy="350" rx="260" ry="70" fill="none" stroke="${accentColor}" stroke-width="6" transform="rotate(-20 450 350)"/><circle cx="620" cy="200" r="12" fill="${accentColor}"/><circle cx="280" cy="500" r="8" fill="${accentColor}"/><circle cx="300" cy="180" r="6" fill="${accentColor}"/>`,
    cinema: `<rect x="220" y="220" width="460" height="280" rx="20" fill="none" stroke="${accentColor}" stroke-width="8"/><polygon points="420,310 420,410 510,360" fill="${accentColor}"/><line x1="220" y1="280" x2="680" y2="280" stroke="${accentColor}" stroke-width="4" stroke-dasharray="16 12"/><line x1="220" y1="440" x2="680" y2="440" stroke="${accentColor}" stroke-width="4" stroke-dasharray="16 12"/>`,
    edu: `<path d="M220 340 L 450 220 L 680 340 L 450 460 Z" fill="none" stroke="${accentColor}" stroke-width="8"/><path d="M300 390 L 300 480 C 300 520, 600 520, 600 480 L 600 390" fill="none" stroke="${accentColor}" stroke-width="7"/><path d="M680 340 L 680 460" stroke="${accentColor}" stroke-width="6"/>`,
    digital: `<rect x="260" y="200" width="380" height="380" rx="24" fill="none" stroke="${accentColor}" stroke-width="6"/><path d="M320 280 L 580 280 L 450 500 Z" fill="none" stroke="${accentColor}" stroke-width="8"/><circle cx="450" cy="350" r="40" fill="${accentColor}"/>`,
    wallpaper: `<path d="M150 480 Q 300 320 450 440 T 750 380 L 750 650 L 150 650 Z" fill="none" stroke="${accentColor}" stroke-width="8"/><circle cx="580" cy="240" r="70" fill="none" stroke="${accentColor}" stroke-width="8"/>`
  };

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700" width="100%" height="100%">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        ${bgGradient}
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="${accentColor}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="900" height="700" fill="url(#bg)"/>
    <circle cx="450" cy="350" r="300" fill="url(#glow)"/>
    ${motifs[motif]}
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const INITIAL_IMAGES: ImageItem[] = [
  {
    id: 'img-uzbek-culture-1',
    title: 'Samarqand Registonining Nuri va Adras Libosli Malika',
    description: 'Nafis atlas va adras milliy libosidagi o‘zbek qizi, orqa fonda Registon maydonining moviy gumbazlari va tilla rang koshinlari aks etgan ajoyib kompozitsiya.',
    imageUrl: uzbekImg,
    category: 'uzbek_culture',
    tags: ['o‘zbek madaniyati', 'registon', 'samarqand', 'adras', 'milliy libos', 'tarix'],
    aspectRatio: 'tall',
    author: {
      name: 'Nodira Alimova',
      handle: '@nodira_ai',
      avatar: 'https://images.unsplash.com/placeholder-avatar-1'
    },
    likes: 1248,
    downloads: 489,
    createdAt: '2026-09-28',
    prompt: 'Exquisite high-detail AI artwork of traditional Uzbek national culture, a young Uzbek woman wearing a luxurious authentic Atlas silk and Adras traditional embroidered gown, ornate gold filigree headpiece with turquoise gems, standing before the magnificent illuminated turquoise tile arches of Registan Samarkand, golden hour warm cinematic lighting.',
    aiModel: 'Gemini Imagen 3.5'
  },
  {
    id: 'img-portrait-cyber-2',
    title: 'Kiber-Bioluminessensiya Portreti',
    description: 'Kelajak insonining nozik oltin kiber-chiziqlari va ko‘zlaridagi intellektual nur ifodalangan yuqori aniqlikdagi studiya portreti.',
    imageUrl: portraitImg,
    category: 'portrait',
    tags: ['portret', 'kiberpank', 'kelajak', 'bioluminessensiya', 'fotorealizm'],
    aspectRatio: 'tall',
    author: {
      name: 'Timur Vohidov',
      handle: '@timur_vision',
    },
    likes: 954,
    downloads: 320,
    createdAt: '2026-09-27',
    prompt: 'Hyper-detailed cinematic studio portrait of an ethereal futuristic person with delicate bioluminescent skin patterns, subtle golden cybernetic accents along cheekbones, intense gaze, cinematic moody rim lighting, soft focus bokeh background.',
    aiModel: 'Midjourney v6.1'
  },
  {
    id: 'img-nature-mountains-3',
    title: 'Zumrad Cho‘qqilar va Oyna Ko‘l Afsonasi',
    description: 'Baland tog‘ cho‘qqilari va quyosh nurlari ostida yaltirab turgan billurdek toza alp ko‘li, atrofdagi qadimiy qarag‘ay o‘rmonlari bilan uyg‘unlashgan.',
    imageUrl: natureImg,
    category: 'nature',
    tags: ['tabiat', 'tog‘lar', 'ko‘l', 'zumrad', 'alp', 'tinchlik'],
    aspectRatio: 'wide',
    author: {
      name: 'Elena Rostova',
      handle: '@elena_landscapes',
    },
    likes: 1820,
    downloads: 712,
    createdAt: '2026-09-26',
    prompt: 'Breathtaking fantasy nature landscape, misty emerald mountain peaks reflected in a crystal-clear mirror alpine lake, majestic waterfalls flowing through ancient pine forests, sun rays piercing through clouds, atmospheric cinematic photography.',
    aiModel: 'Stable Diffusion XL Turbo'
  },
  {
    id: 'img-arch-museum-4',
    title: 'Kelajak Parametrik Muzeyi',
    description: 'Oq to‘lqinsimon chiziqlar, ulkan shisha fasadlar va osmon bilan bog‘langan ekologik suv havzalari bilan yaratilgan muhtasham me’moriy durdona.',
    imageUrl: archImg,
    category: 'architecture',
    tags: ['arxitektura', 'zamonaviy', 'parametrik', 'minimalizm', 'kelajak binosi'],
    aspectRatio: 'tall',
    author: {
      name: 'Zaha Studio AI',
      handle: '@zaha_concepts',
    },
    likes: 880,
    downloads: 295,
    createdAt: '2026-09-25',
    prompt: 'Ultra-modern parametric architectural wonder building designed with flowing organic white curves and glass facade, reflecting pools and lush vertical gardens, minimalist futuristic design, soft ambient daylight.',
    aiModel: 'Gemini Imagen 3.5'
  },
  {
    id: 'img-fantasy-dragon-5',
    title: 'Billur Ajdarho Bolasi',
    description: 'Qadimiy toshlar ustida porlab turgan kichik billur qanotli afsonaviy maxluq, atrofida sehrli nur zarralari charx uradi.',
    imageUrl: fantasyImg,
    category: '3d',
    tags: ['3D san’at', 'fantaziya', 'billur', 'afsona', 'sehr'],
    aspectRatio: 'square',
    author: {
      name: 'Artur Kim',
      handle: '@artur_3d',
    },
    likes: 2130,
    downloads: 980,
    createdAt: '2026-09-24',
    prompt: 'Whimsical 3D digital art of a glowing crystalline baby dragon resting on ancient mossy stones surrounded by floating spirit wisps, intricate scales with iridescent sheen, octane render style, soft volumetric lighting.',
    aiModel: 'DALL-E 3 HD'
  },
  {
    id: 'img-car-hyper-6',
    title: 'Aerodinamik Giperkar Konsepti',
    description: 'Tezlik va nafosat timsoli bo‘lgan elektro-aerodinamik super avtomobil, neon chiroqlar va silliq uglerod tolali korpus.',
    imageUrl: generateArtworkDataUri('<stop offset="0%" stop-color="#0a0a0c"/><stop offset="100%" stop-color="#181824"/>', '#38bdf8', 'car'),
    category: 'cars',
    tags: ['avtomobillar', 'superkar', 'tezlik', 'dizayn', 'kelajak'],
    aspectRatio: 'wide',
    author: {
      name: 'Sardor Mansurov',
      handle: '@mansurov_auto',
    },
    likes: 740,
    downloads: 215,
    createdAt: '2026-09-23',
    prompt: 'Sleek aerodynamic concept hypercar drifting at twilight, illuminated chassis neon stripes, carbon fiber texture, dynamic angle, photorealistic octane rendering.',
    aiModel: 'Flux.1 Schnell'
  },
  {
    id: 'img-anime-warrior-7',
    title: 'Sakura Ostidagi Jangchi Qiz',
    description: 'Gullagan gilos daraxtlari ostida shamol hilpiratayotgan an’anaviy yapon yorqin anime san’ati uslubidagi asar.',
    imageUrl: generateArtworkDataUri('<stop offset="0%" stop-color="#1f1124"/><stop offset="100%" stop-color="#3d1d3c"/>', '#f472b6', 'anime'),
    category: 'anime',
    tags: ['anime', 'sakura', 'yapon san’ati', 'illyustratsiya', 'jangchi'],
    aspectRatio: 'tall',
    author: {
      name: 'Yuki Tanaka',
      handle: '@yuki_art',
    },
    likes: 1650,
    downloads: 640,
    createdAt: '2026-09-22',
    prompt: 'Vibrant anime illustration of a mystical guardian surrounded by swirling sakura blossoms, dramatic backlighting, Makoto Shinkai studio aesthetic.',
    aiModel: 'Niji Journey v6'
  },
  {
    id: 'img-fashion-editorial-8',
    title: 'Yuqori Moda: Shisha va Ipak Simfoniyasi',
    description: 'Parij modalar haftaligi uslubidagi skulptural nozik libos va minimalist yorug‘lik aks etgan zamonaviy feshn san’ati.',
    imageUrl: generateArtworkDataUri('<stop offset="0%" stop-color="#141416"/><stop offset="100%" stop-color="#242124"/>', '#e2e8f0', 'fashion'),
    category: 'fashion',
    tags: ['moda', 'feshn', 'elegans', 'editorial', 'dizayn'],
    aspectRatio: 'tall',
    author: {
      name: 'Malika Saidova',
      handle: '@malika_couture',
    },
    likes: 910,
    downloads: 380,
    createdAt: '2026-09-21',
    prompt: 'Haute couture fashion editorial model posing with architectural flowing silk drapery, monochrome minimal high-contrast studio shadows, Vogue cover grade.',
    aiModel: 'Midjourney v6'
  },
  {
    id: 'img-animals-snowleopard-9',
    title: 'Tiyonshon Qor Qoploni',
    description: 'O‘zbekiston va Markaziy Osiyo qoyalarida mag‘rur turgan qor qoploni, muzli cho‘qqilar va qor bo‘ronidagi kuchli nigoh.',
    imageUrl: generateArtworkDataUri('<stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/>', '#94a3b8', 'animal'),
    category: 'animals',
    tags: ['hayvonlar', 'qor qoploni', 'tiyonshon', 'yovvoyi tabiat', 'qoya'],
    aspectRatio: 'square',
    author: {
      name: 'Farrux Zokirov',
      handle: '@farrux_nature',
    },
    likes: 1420,
    downloads: 512,
    createdAt: '2026-09-20',
    prompt: 'Photorealistic close-up of a majestic Snow Leopard on a rocky Himalayan cliff ledge, blowing snow particles, piercing icy hazel eyes, National Geographic style.',
    aiModel: 'Gemini Imagen 3.5'
  },
  {
    id: 'img-tech-quantum-10',
    title: 'Kvant Protsessori va Neyro-Tugunlar',
    description: 'Murakkab o‘lchamdagi ma’lumotlarni bir zumda hisoblovchi kelajak kvant texnologiyasi chipining ichki tuzilishi.',
    imageUrl: generateArtworkDataUri('<stop offset="0%" stop-color="#05131a"/><stop offset="100%" stop-color="#082b3a"/>', '#06b6d4', 'tech'),
    category: 'technology',
    tags: ['texnologiya', 'kvant', 'sun’iy intellekt', 'chip', 'innovatsiya'],
    aspectRatio: 'wide',
    author: {
      name: 'Anvar Qodirov',
      handle: '@anvar_quantum',
    },
    likes: 830,
    downloads: 290,
    createdAt: '2026-09-19',
    prompt: 'Isometric macro view of a next-generation quantum microprocessor core glowing with superconductor circuits and laser optical waveguides.',
    aiModel: 'Stable Diffusion 3'
  },
  {
    id: 'img-cinema-noir-11',
    title: 'Yomg‘irli Kiber-Shahar Kinematografiyasi',
    description: 'Kechki yomg‘ir yog‘ayotgan ko‘chada retro-futuristik shahar manzarasi, neon akslar va kino kadrlariga xos chuqur muhit.',
    imageUrl: generateArtworkDataUri('<stop offset="0%" stop-color="#090a10"/><stop offset="100%" stop-color="#151728"/>', '#818cf8', 'cinema'),
    category: 'cinematic',
    tags: ['kinematografik', 'noir', 'yomg‘ir', 'shahar', 'kino'],
    aspectRatio: 'wide',
    author: {
      name: 'Rustam Ismoilov',
      handle: '@rustam_cinema',
    },
    likes: 1940,
    downloads: 870,
    createdAt: '2026-09-18',
    prompt: 'Cinematic film still, anamorphic widescreen 2.39:1, moody rainy neo-metropolis street at 2 AM with puddle reflections, Blade Runner atmospheric color grading.',
    aiModel: 'Midjourney v6.1'
  },
  {
    id: 'img-edu-space-12',
    title: 'Koinot va Galaktikalar Anatomiyasi',
    description: 'Yulduzlar turkumi va qora tuynukning fazoviy egri chiziqlarini tushuntiruvchi ilmiy-badiiy ta’limiy illyustratsiya.',
    imageUrl: generateArtworkDataUri('<stop offset="0%" stop-color="#030712"/><stop offset="100%" stop-color="#111827"/>', '#fbbf24', 'edu'),
    category: 'education',
    tags: ['ta’lim', 'koinot', 'fizika', 'galaktika', 'ilm-fan'],
    aspectRatio: 'tall',
    author: {
      name: 'Prof. Ilhom AI',
      handle: '@astro_edu',
    },
    likes: 670,
    downloads: 240,
    createdAt: '2026-09-17',
    prompt: 'Educational astronomy cutaway diagram of a rotating spiral galaxy and gravitational lensing warping spacetime, clear scientific precision.',
    aiModel: 'Gemini Imagen 3.5'
  },
  {
    id: 'img-digital-geometry-13',
    title: 'Abstrakt Poligonlar va Fraktal San’at',
    description: 'Cheksiz geometrik naqshlar va yorug‘lik sinishi natijasida hosil bo‘lgan raqamli kompozitsiya.',
    imageUrl: generateArtworkDataUri('<stop offset="0%" stop-color="#180e29"/><stop offset="100%" stop-color="#2d1b4e"/>', '#c084fc', 'digital'),
    category: 'digital',
    tags: ['raqamli san’at', 'abstrakt', 'geometriya', 'fraktal', 'ranglar'],
    aspectRatio: 'square',
    author: {
      name: 'Kamila Nur',
      handle: '@kamila_digital',
    },
    likes: 1120,
    downloads: 430,
    createdAt: '2026-09-16',
    prompt: 'Complex 4D hypercube tesseract unfolding in neon crystal wireframes, fractal sacred geometry, museum gallery exhibition render.',
    aiModel: 'Flux.1 Pro'
  },
  {
    id: 'img-wallpaper-aurora-14',
    title: 'Shimol Yog‘dusi va Muz Okeani',
    description: 'Monitor va smartfonlar uchun ajoyib yuqori aniqlikdagi fon rasmi: yashil-binafsha qutb yog‘dusi.',
    imageUrl: generateArtworkDataUri('<stop offset="0%" stop-color="#022c22"/><stop offset="100%" stop-color="#064e3b"/>', '#34d399', 'wallpaper'),
    category: 'wallpapers',
    tags: ['fon rasmlari', 'qutb yog‘dusi', 'muzlik', 'okean', '4k'],
    aspectRatio: 'ultra-tall',
    author: {
      name: 'Suhrob Bek',
      handle: '@suhrob_wallpapers',
    },
    likes: 2450,
    downloads: 1420,
    createdAt: '2026-09-15',
    prompt: 'Ultra-wide 8K OLED wallpaper of magical Aurora Borealis undulating in emerald and violet ribbons over glassy frozen Arctic sea, starry cosmos.',
    aiModel: 'Midjourney v6'
  }
];
