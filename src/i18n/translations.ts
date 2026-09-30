import { CategoryKey, LanguageKey } from '../types';

export interface TranslationDictionary {
  appName: string;
  tagline: string;
  viewImages: string;
  uploadImage: string;
  searchPlaceholder: string;
  searchAria: string;
  exploreTitle: string;
  trendingTitle: string;
  trendingSubtitle: string;
  categoriesTitle: string;
  categoriesSubtitle: string;
  latestTitle: string;
  latestSubtitle: string;
  allImagesTitle: string;
  allImagesCount: string;
  
  // Hero section
  heroTitle: string;
  heroSubtitle: string;
  heroCtaView: string;
  heroCtaUpload: string;
  welcomeModalTitle: string;
  welcomeModalTagline: string;
  welcomeEnterButton: string;

  // Sorting
  sortTrending: string;
  sortLatest: string;
  sortPopular: string;

  // Categories
  categories: Record<CategoryKey, string>;

  // Upload modal
  uploadModalTitle: string;
  uploadModalSubtitle: string;
  uploadDropText: string;
  uploadBrowseText: string;
  uploadSupportedFormats: string;
  uploadTitleLabel: string;
  uploadTitlePlaceholder: string;
  uploadDescLabel: string;
  uploadDescPlaceholder: string;
  uploadCategoryLabel: string;
  uploadTagsLabel: string;
  uploadTagsPlaceholder: string;
  uploadSubmit: string;
  uploadCancel: string;
  uploadRequiredError: string;
  uploadSizeError: string;
  uploadSuccessToast: string;

  // Lightbox / Image Viewer
  viewerClose: string;
  viewerPrev: string;
  viewerNext: string;
  viewerFavorite: string;
  viewerFavorited: string;
  viewerDownload: string;
  viewerShare: string;
  viewerCopiedToast: string;
  viewerDownloadToast: string;
  viewerTags: string;
  viewerCategory: string;
  viewerUploadedOn: string;
  viewerAuthor: string;
  viewerPrompt: string;
  viewerModel: string;
  viewerDelete: string;
  viewerDeleteConfirmTitle: string;
  viewerDeleteConfirmDesc: string;
  viewerDeleteConfirmBtn: string;
  viewerDeleteSuccessToast: string;
  viewerRelated: string;

  // Empty states & filter
  emptyTitle: string;
  emptyDesc: string;
  emptyResetBtn: string;

  // Footer
  footerDesc: string;
  footerLinksTitle: string;
  footerHome: string;
  footerCategories: string;
  footerUpload: string;
  footerAbout: string;
  footerPrivacy: string;
  footerAllRights: string;

  // About modal & Privacy modal
  aboutTitle: string;
  aboutContent: string[];
  privacyTitle: string;
  privacyContent: string[];
  closeBtn: string;
}

export const translations: Record<LanguageKey, TranslationDictionary> = {
  uz: {
    appName: 'AI Gallery',
    tagline: 'AI ijod olamiga xush kelibsiz',
    viewImages: 'Rasmlarni ko‘rish',
    uploadImage: '+ Rasm yuklash',
    searchPlaceholder: 'AI rasmlardan qidiring...',
    searchAria: 'Rasmlarni qidirish',
    exploreTitle: 'Kashf eting',
    trendingTitle: 'Trenddagi AI rasmlar',
    trendingSubtitle: 'Hozirda eng ko‘p yoqtirilgan va tomosha qilinayotgan nodir asarlar',
    categoriesTitle: 'Kategoriyalar',
    categoriesSubtitle: 'O‘zingizga yoqqan mavzu bo‘yicha AI san’atini toping',
    latestTitle: 'Oxirgi yuklanganlar',
    latestSubtitle: 'Hamjamiyat tomonidan yangi qo‘shilgan ijod namunalari',
    allImagesTitle: 'Barcha AI rasmlar',
    allImagesCount: 'ta asar',

    heroTitle: 'AI ijod olamiga xush kelibsiz',
    heroSubtitle: 'Sun’iy intellekt yordamida yaratilgan ajoyib rasmlarni kashf eting, yuklang va ulashing.',
    heroCtaView: 'Rasmlarni ko‘rish',
    heroCtaUpload: 'Rasm yuklash',
    welcomeModalTitle: 'AI Gallery',
    welcomeModalTagline: 'AI ijod olamiga xush kelibsiz',
    welcomeEnterButton: 'Rasmlarni ko‘rish',

    sortTrending: 'Trendda',
    sortLatest: 'Eng yangilari',
    sortPopular: 'Ommabop',

    categories: {
      all: 'Barchasi',
      portrait: 'AI portretlar',
      nature: 'Tabiat',
      architecture: 'Arxitektura',
      fashion: 'Moda',
      cars: 'Avtomobillar',
      anime: 'Anime',
      '3d': '3D san’at',
      digital: 'Raqamli san’at',
      fantasy: 'Fantaziya',
      animals: 'Hayvonlar',
      education: 'Ta’lim',
      technology: 'Texnologiya',
      uzbek_culture: 'O‘zbek milliy madaniyati',
      wallpapers: 'Fon rasmlari',
      cinematic: 'Kinematografik',
    },

    uploadModalTitle: 'Yangi AI rasmni yuklash',
    uploadModalSubtitle: 'O‘zingiz yaratgan yoki kashf etgan asarni AI Gallery hamjamiyati bilan ulashing',
    uploadDropText: 'Rasmni shu yerga tashlang yoki faylni tanlang',
    uploadBrowseText: 'Faylni tanlash',
    uploadSupportedFormats: 'Qo‘llab-quvvatlanadi: JPG, JPEG, PNG, WEBP (maks. 15MB)',
    uploadTitleLabel: 'Rasm nomi',
    uploadTitlePlaceholder: 'Masalan: Samarqand Registoni kechki nurlarda...',
    uploadDescLabel: 'Qisqa tavsif',
    uploadDescPlaceholder: 'Ushbu rasm nima haqida yoki qanday g‘oya asosida yaratilgan?',
    uploadCategoryLabel: 'Kategoriya tanlang',
    uploadTagsLabel: 'Teglar (vergul bilan ajrating)',
    uploadTagsPlaceholder: 'masalan: adras, atlas, samarqand, arxitektura',
    uploadSubmit: 'Galereyaga joylash',
    uploadCancel: 'Bekor qilish',
    uploadRequiredError: 'Iltimos, rasm fayli va rasm nomini kiriting!',
    uploadSizeError: 'Fayl hajmi 15MB dan oshmasligi kerak.',
    uploadSuccessToast: 'Rasm muvaffaqiyatli yuklandi va galereyaga qo‘shildi!',

    viewerClose: 'Yopish',
    viewerPrev: 'Oldingi rasm',
    viewerNext: 'Keyingi rasm',
    viewerFavorite: 'Yoqtirish',
    viewerFavorited: 'Yoqtirildi',
    viewerDownload: 'Yuklab olish',
    viewerShare: 'Ulashish',
    viewerCopiedToast: 'Havola buferga nusxalandi!',
    viewerDownloadToast: 'Rasm yuklab olinmoqda...',
    viewerTags: 'Teglar',
    viewerCategory: 'Kategoriya',
    viewerUploadedOn: 'Yuklangan sana',
    viewerAuthor: 'Muallif',
    viewerPrompt: 'Yaratish buyrug‘i (Prompt)',
    viewerModel: 'AI modeli',
    viewerDelete: 'Rasmni o‘chirish',
    viewerDeleteConfirmTitle: 'Rasmni o‘chirishni tasdiqlaysizmi?',
    viewerDeleteConfirmDesc: 'Ushbu rasm sizning galereyangizdan butunlay olib tashlanadi.',
    viewerDeleteConfirmBtn: 'Ha, o‘chirilsin',
    viewerDeleteSuccessToast: 'Rasm muvaffaqiyatli o‘chirildi.',
    viewerRelated: 'O‘xshash asarlar',

    emptyTitle: 'Hech qanday rasm topilmadi',
    emptyDesc: 'Qidiruv so‘zini o‘zgartiring yoki filtrlarni tozalab ko‘ring.',
    emptyResetBtn: 'Barcha filtrlarni tozalash',

    footerDesc: 'AI Gallery — AI ijodkorlar uchun zamonaviy rasmlar platformasi.',
    footerLinksTitle: 'Tezkor havolalar',
    footerHome: 'Bosh sahifa',
    footerCategories: 'Kategoriyalar',
    footerUpload: 'Rasm yuklash',
    footerAbout: 'Biz haqimizda',
    footerPrivacy: 'Maxfiylik siyosati',
    footerAllRights: 'Barcha huquqlar himoyalangan.',

    aboutTitle: 'AI Gallery haqida',
    aboutContent: [
      'AI Gallery — bu sun’iy intellekt orqali yaratilgan eng go‘zal va ilhomlantiruvchi tasviriy san’at asarlarini jamlovchi zamonaviy ochiq platforma.',
      'Bizning maqsadimiz — ijodkorlar, dizaynerlar va AI ixlosmandlariga o‘z asarlarini qulay namoyish qilish, yangi g‘oyalar kashf etish va yuqori sifatli vizual kontentdan bahramand bo‘lish imkoniyatini taqdim etishdir.',
      'Platformada O‘zbekiston milliy madaniyatidan tortib kelajak texnologiyalarigacha bo‘lgan barcha sohadagi AI rasmlari jamlangan.'
    ],
    privacyTitle: 'Maxfiylik siyosati',
    privacyContent: [
      'AI Gallery foydalanuvchilarning shaxsiy ma’lumotlari va ijodiy erkinligini yuksak qadrlaydi.',
      'Yuklangan barcha rasmlar brauzer xotirasi va serverda xavfsiz saqlanadi. Foydalanuvchilar o‘zlari yuklagan asarlarni istalgan vaqtda o‘chirib tashlash huquqiga ega.',
      'Biz shaxsiy ma’lumotlarni uchinchi shaxslarga sotmaymiz yoki noqonuniy maqsadlarda ishlatmaymiz.'
    ],
    closeBtn: 'Yopish'
  },

  en: {
    appName: 'AI Gallery',
    tagline: 'Welcome to the world of AI creation',
    viewImages: 'Explore Images',
    uploadImage: '+ Upload Image',
    searchPlaceholder: 'Search AI artwork, styles, tags...',
    searchAria: 'Search artwork',
    exploreTitle: 'Explore',
    trendingTitle: 'Trending AI Artwork',
    trendingSubtitle: 'Currently the most celebrated and favored visual pieces',
    categoriesTitle: 'Categories',
    categoriesSubtitle: 'Discover AI artwork tailored to your favorite themes',
    latestTitle: 'Latest Uploads',
    latestSubtitle: 'Fresh additions shared by the global community',
    allImagesTitle: 'All AI Artwork',
    allImagesCount: 'artworks',

    heroTitle: 'Welcome to the world of AI creation',
    heroSubtitle: 'Discover, upload, and share stunning AI-generated imagery crafted with cutting-edge imagination.',
    heroCtaView: 'Explore Images',
    heroCtaUpload: 'Upload Image',
    welcomeModalTitle: 'AI Gallery',
    welcomeModalTagline: 'Welcome to the world of AI creation',
    welcomeEnterButton: 'Explore Images',

    sortTrending: 'Trending',
    sortLatest: 'Latest',
    sortPopular: 'Most Popular',

    categories: {
      all: 'All',
      portrait: 'AI Portraits',
      nature: 'Nature',
      architecture: 'Architecture',
      fashion: 'Fashion',
      cars: 'Cars',
      anime: 'Anime',
      '3d': '3D Art',
      digital: 'Digital Art',
      fantasy: 'Fantasy',
      animals: 'Animals',
      education: 'Education',
      technology: 'Technology',
      uzbek_culture: 'Uzbek National Culture',
      wallpapers: 'Wallpapers',
      cinematic: 'Cinematic',
    },

    uploadModalTitle: 'Upload AI Artwork',
    uploadModalSubtitle: 'Share your generated artwork with the worldwide AI Gallery community',
    uploadDropText: 'Drop your image file here or browse from device',
    uploadBrowseText: 'Browse files',
    uploadSupportedFormats: 'Supported: JPG, JPEG, PNG, WEBP (up to 15MB)',
    uploadTitleLabel: 'Artwork Title',
    uploadTitlePlaceholder: 'e.g., Neon Silk Road Twilight...',
    uploadDescLabel: 'Short Description',
    uploadDescPlaceholder: 'Describe the concept, inspiration, or technique behind this piece',
    uploadCategoryLabel: 'Select Category',
    uploadTagsLabel: 'Tags (separated by comma)',
    uploadTagsPlaceholder: 'e.g., silk, architecture, lighting, cinematic',
    uploadSubmit: 'Publish to Gallery',
    uploadCancel: 'Cancel',
    uploadRequiredError: 'Please select an image file and provide an artwork title!',
    uploadSizeError: 'File size cannot exceed 15MB.',
    uploadSuccessToast: 'Artwork successfully uploaded to the gallery!',

    viewerClose: 'Close',
    viewerPrev: 'Previous artwork',
    viewerNext: 'Next artwork',
    viewerFavorite: 'Save to Favorites',
    viewerFavorited: 'Favorited',
    viewerDownload: 'Download',
    viewerShare: 'Share',
    viewerCopiedToast: 'Link copied to clipboard!',
    viewerDownloadToast: 'Downloading image...',
    viewerTags: 'Tags',
    viewerCategory: 'Category',
    viewerUploadedOn: 'Uploaded date',
    viewerAuthor: 'Artist',
    viewerPrompt: 'Generation Prompt',
    viewerModel: 'AI Engine',
    viewerDelete: 'Delete Artwork',
    viewerDeleteConfirmTitle: 'Are you sure you want to delete this artwork?',
    viewerDeleteConfirmDesc: 'This item will be permanently removed from your gallery.',
    viewerDeleteConfirmBtn: 'Yes, delete',
    viewerDeleteSuccessToast: 'Artwork deleted successfully.',
    viewerRelated: 'Related Artworks',

    emptyTitle: 'No artwork found',
    emptyDesc: 'Try adjusting your search terms or resetting the selected filters.',
    emptyResetBtn: 'Clear all filters',

    footerDesc: 'AI Gallery — A modern image discovery and sharing platform for AI creators.',
    footerLinksTitle: 'Quick Links',
    footerHome: 'Home',
    footerCategories: 'Categories',
    footerUpload: 'Upload Image',
    footerAbout: 'About Us',
    footerPrivacy: 'Privacy Policy',
    footerAllRights: 'All rights reserved.',

    aboutTitle: 'About AI Gallery',
    aboutContent: [
      'AI Gallery is a contemporary visual discovery sanctuary uniting state-of-the-art synthetic imagery from around the world.',
      'Our mission is to empower artists, prompters, and visual thinkers to curate, celebrate, and preserve high-fidelity creative artifacts.',
      'From authentic regional cultural heritage to far-future speculative architecture, AI Gallery is built for deep visual inspiration.'
    ],
    privacyTitle: 'Privacy Policy',
    privacyContent: [
      'AI Gallery respects your creative rights and treats user-uploaded assets with maximum integrity.',
      'Images you upload are stored securely in local browser storage and app storage. You retain the ability to delete your items at any time.',
      'We do not sell personal data or track users across external advertising networks.'
    ],
    closeBtn: 'Close'
  },

  ru: {
    appName: 'AI Gallery',
    tagline: 'Добро пожаловать в мир ИИ-творчества',
    viewImages: 'Смотреть картины',
    uploadImage: '+ Загрузить арт',
    searchPlaceholder: 'Поиск артов, стилей, тегов...',
    searchAria: 'Поиск изображений',
    exploreTitle: 'Обзор',
    trendingTitle: 'В тренде',
    trendingSubtitle: 'Наиболее популярные и вдохновляющие работы сообщества',
    categoriesTitle: 'Категории',
    categoriesSubtitle: 'Исследуйте генеративное искусство по тематикам',
    latestTitle: 'Свежие поступления',
    latestSubtitle: 'Новые работы, опубликованные авторами',
    allImagesTitle: 'Все работы',
    allImagesCount: 'работ',

    heroTitle: 'Добро пожаловать в мир ИИ-творчества',
    heroSubtitle: 'Открывайте, публикуйте и делитесь впечатляющими изображениями, созданными искусственным интеллектом.',
    heroCtaView: 'Смотреть картины',
    heroCtaUpload: 'Загрузить арт',
    welcomeModalTitle: 'AI Gallery',
    welcomeModalTagline: 'Добро пожаловать в мир ИИ-творчества',
    welcomeEnterButton: 'Смотреть картины',

    sortTrending: 'В тренде',
    sortLatest: 'Новейшие',
    sortPopular: 'Популярные',

    categories: {
      all: 'Все',
      portrait: 'AI портреты',
      nature: 'Природа',
      architecture: 'Архитектура',
      fashion: 'Мода',
      cars: 'Автомобили',
      anime: 'Аниме',
      '3d': '3D искусство',
      digital: 'Цифровой арт',
      fantasy: 'Фэнтези',
      animals: 'Животные',
      education: 'Образование',
      technology: 'Технологии',
      uzbek_culture: 'Узбекская культура',
      wallpapers: 'Обои',
      cinematic: 'Кинематографичные',
    },

    uploadModalTitle: 'Загрузить AI-изображение',
    uploadModalSubtitle: 'Поделитесь своим шедевром с сообществом AI Gallery',
    uploadDropText: 'Перетащите изображение сюда или выберите файл',
    uploadBrowseText: 'Выбрать файл',
    uploadSupportedFormats: 'Форматы: JPG, JPEG, PNG, WEBP (до 15 МБ)',
    uploadTitleLabel: 'Название работы',
    uploadTitlePlaceholder: 'Например: Золотой Самарканд в лучах заката...',
    uploadDescLabel: 'Краткое описание',
    uploadDescPlaceholder: 'Какая идея или промпт лежит в основе работы?',
    uploadCategoryLabel: 'Выберите категорию',
    uploadTagsLabel: 'Теги (через запятую)',
    uploadTagsPlaceholder: 'например: самарканд, портрет, шелк, неоновый свет',
    uploadSubmit: 'Опубликовать',
    uploadCancel: 'Отмена',
    uploadRequiredError: 'Пожалуйста, выберите файл и укажите название!',
    uploadSizeError: 'Размер файла не должен превышать 15 МБ.',
    uploadSuccessToast: 'Изображение успешно добавлено в галерею!',

    viewerClose: 'Закрыть',
    viewerPrev: 'Предыдущее',
    viewerNext: 'Следующее',
    viewerFavorite: 'В избранное',
    viewerFavorited: 'В избранном',
    viewerDownload: 'Скачать',
    viewerShare: 'Поделиться',
    viewerCopiedToast: 'Ссылка скопирована в буфер обмена!',
    viewerDownloadToast: 'Началось скачивание...',
    viewerTags: 'Теги',
    viewerCategory: 'Категория',
    viewerUploadedOn: 'Дата публикации',
    viewerAuthor: 'Автор',
    viewerPrompt: 'Промпт генерации',
    viewerModel: 'ИИ-модель',
    viewerDelete: 'Удалить работу',
    viewerDeleteConfirmTitle: 'Удалить эту работу?',
    viewerDeleteConfirmDesc: 'Изображение будет безвозвратно удалено из вашей галереи.',
    viewerDeleteConfirmBtn: 'Да, удалить',
    viewerDeleteSuccessToast: 'Работа успешно удалена.',
    viewerRelated: 'Похожие работы',

    emptyTitle: 'Ничего не найдено',
    emptyDesc: 'Попробуйте изменить поисковый запрос или сбросить фильтры.',
    emptyResetBtn: 'Сбросить все фильтры',

    footerDesc: 'AI Gallery — современная платформа для создателей и ценителей ИИ-арта.',
    footerLinksTitle: 'Быстрые ссылки',
    footerHome: 'Главная',
    footerCategories: 'Категории',
    footerUpload: 'Загрузить арт',
    footerAbout: 'О проекте',
    footerPrivacy: 'Политика конфиденциальности',
    footerAllRights: 'Все права защищены.',

    aboutTitle: 'О платформе AI Gallery',
    aboutContent: [
      'AI Gallery — это премиальное визуальное пространство для демонстрации передовых генеративных шедевров.',
      'Мы объединяем авторов, концепт-художников и энтузиастов искусственного интеллекта.',
      'Здесь собраны уникальные работы со всего мира, вдохновляющие на создание нового.'
    ],
    privacyTitle: 'Политика конфиденциальности',
    privacyContent: [
      'AI Gallery бережно относится к вашим данным и авторскому контенту.',
      'Все загруженные изображения сохраняются безопасно. Вы в любой момент можете удалить свои работы.',
      'Мы не передаем персональные данные третьим сторонам.'
    ],
    closeBtn: 'Закрыть'
  },

  tr: {
    appName: 'AI Gallery',
    tagline: 'Yapay zeka yaratıcılık dünyasına hoş geldiniz',
    viewImages: 'Görselleri Keşfet',
    uploadImage: '+ Görsel Yükle',
    searchPlaceholder: 'Yapay zeka görsellerinde ara...',
    searchAria: 'Görselleri ara',
    exploreTitle: 'Keşfet',
    trendingTitle: 'Trend Yapay Zeka Eserleri',
    trendingSubtitle: 'Şu anda topluluk tarafından en çok beğenilen sanatsal çalışmalar',
    categoriesTitle: 'Kategoriler',
    categoriesSubtitle: 'İlgi alanınıza göre AI eserlerini bulun',
    latestTitle: 'En Son Yüklenenler',
    latestSubtitle: 'Topluluk tarafından yeni eklenen taze içerikler',
    allImagesTitle: 'Tüm AI Görselleri',
    allImagesCount: 'eser',

    heroTitle: 'Yapay zeka yaratıcılık dünyasına hoş geldiniz',
    heroSubtitle: 'Yapay zeka ile üretilmiş büyüleyici görselleri keşfedin, yükleyin ve paylaşın.',
    heroCtaView: 'Görselleri Keşfet',
    heroCtaUpload: 'Görsel Yükle',
    welcomeModalTitle: 'AI Gallery',
    welcomeModalTagline: 'Yapay zeka yaratıcılık dünyasına hoş geldiniz',
    welcomeEnterButton: 'Görselleri Keşfet',

    sortTrending: 'Trendler',
    sortLatest: 'En Yeniler',
    sortPopular: 'Popüler',

    categories: {
      all: 'Tümü',
      portrait: 'AI Portreler',
      nature: 'Doğa',
      architecture: 'Mimari',
      fashion: 'Moda',
      cars: 'Arabalar',
      anime: 'Anime',
      '3d': '3D Sanat',
      digital: 'Dijital Sanat',
      fantasy: 'Fantazi',
      animals: 'Hayvanlar',
      education: 'Eğitim',
      technology: 'Teknoloji',
      uzbek_culture: 'Özbek Milli Kültürü',
      wallpapers: 'Duvar Kağıtları',
      cinematic: 'Sinematik',
    },

    uploadModalTitle: 'Yapay Zeka Görseli Yükle',
    uploadModalSubtitle: 'Kendi oluşturduğunuz eseri AI Gallery topluluğu ile paylaşın',
    uploadDropText: 'Görseli buraya sürükleyin veya dosya seçin',
    uploadBrowseText: 'Dosya Seç',
    uploadSupportedFormats: 'Desteklenen: JPG, JPEG, PNG, WEBP (maks. 15MB)',
    uploadTitleLabel: 'Görsel Başlığı',
    uploadTitlePlaceholder: 'Örn: Semerkant Registan Gece Işıkları...',
    uploadDescLabel: 'Kısa Açıklama',
    uploadDescPlaceholder: 'Bu görsel hangi fikir veya prompt ile oluşturuldu?',
    uploadCategoryLabel: 'Kategori Seçin',
    uploadTagsLabel: 'Etiketler (virgülle ayırın)',
    uploadTagsPlaceholder: 'örn: atlas, semerkant, mimari, sinematik',
    uploadSubmit: 'Galeriye Ekle',
    uploadCancel: 'İptal',
    uploadRequiredError: 'Lütfen bir görsel seçin ve başlık yazın!',
    uploadSizeError: 'Dosya boyutu 15MB\'ı geçemez.',
    uploadSuccessToast: 'Görsel başarıyla yüklendi ve galeriye eklendi!',

    viewerClose: 'Kapat',
    viewerPrev: 'Önceki',
    viewerNext: 'Sonraki',
    viewerFavorite: 'Favorilere Ekle',
    viewerFavorited: 'Favorilere Eklendi',
    viewerDownload: 'İndir',
    viewerShare: 'Paylaş',
    viewerCopiedToast: 'Bağlantı panoya kopyalandı!',
    viewerDownloadToast: 'Görsel indiriliyor...',
    viewerTags: 'Etiketler',
    viewerCategory: 'Kategori',
    viewerUploadedOn: 'Yükleme Tarihi',
    viewerAuthor: 'Sanatçı',
    viewerPrompt: 'Üretim Komutu (Prompt)',
    viewerModel: 'AI Modeli',
    viewerDelete: 'Görseli Sil',
    viewerDeleteConfirmTitle: 'Bu görseli silmek istediğinizden emin misiniz?',
    viewerDeleteConfirmDesc: 'Bu eser galerinizden kalıcı olarak silinecektir.',
    viewerDeleteConfirmBtn: 'Evet, sil',
    viewerDeleteSuccessToast: 'Görsel başarıyla silindi.',
    viewerRelated: 'Benzer Eserler',

    emptyTitle: 'Hiçbir görsel bulunamadı',
    emptyDesc: 'Arama teriminizi değiştirmeyi veya filtreleri sıfırlamayı deneyin.',
    emptyResetBtn: 'Tüm filtreleri temizle',

    footerDesc: 'AI Gallery — Yapay zeka yaratıcıları için modern görsel keşif platformu.',
    footerLinksTitle: 'Hızlı Bağlantılar',
    footerHome: 'Ana Sayfa',
    footerCategories: 'Kategoriler',
    footerUpload: 'Görsel Yükle',
    footerAbout: 'Hakkımızda',
    footerPrivacy: 'Gizlilik Politikası',
    footerAllRights: 'Tüm hakları saklıdır.',

    aboutTitle: 'AI Gallery Hakkında',
    aboutContent: [
      'AI Gallery, yapay zeka ile üretilmiş seçkin sanat eserlerini bir araya getiren ilham verici bir platformdur.',
      'Amacımız sanatçılar, tasarımcılar ve teknoloji meraklıları için modern bir keşif alanı sunmaktır.',
      'Geleneksel motiflerden fütüristik tasarımlara kadar geniş bir görsel yelpazesi barındırır.'
    ],
    privacyTitle: 'Gizlilik Politikası',
    privacyContent: [
      'Kullanıcı gizliliği ve eser güvenliği bizim için en önemli önceliktir.',
      'Yüklediğiniz içerikler güvenle saklanır ve dilediğiniz zaman silebilirsiniz.',
      'Kişisel verileriniz hiçbir üçüncü tarafla paylaşılmaz.'
    ],
    closeBtn: 'Kapat'
  },

  ko: {
    appName: 'AI Gallery',
    tagline: 'AI 창작의 세계에 오신 것을 환영합니다',
    viewImages: '이미지 탐색',
    uploadImage: '+ 이미지 업로드',
    searchPlaceholder: 'AI 이미지, 스타일, 태그 검색...',
    searchAria: '이미지 검색',
    exploreTitle: '탐색하기',
    trendingTitle: '트렌딩 AI 아크워크',
    trendingSubtitle: '현재 커뮤니티에서 가장 주목받고 사랑받는 작품들',
    categoriesTitle: '카테고리',
    categoriesSubtitle: '관심 있는 테마별로 AI 예술 작품을 만나보세요',
    latestTitle: '최신 업로드',
    latestSubtitle: '크리에이터들이 새로 공유한 독창적인 작품들',
    allImagesTitle: '모든 AI 이미지',
    allImagesCount: '개의 작품',

    heroTitle: 'AI 창작의 세계에 오신 것을 환영합니다',
    heroSubtitle: '인공지능으로 탄생한 경이로운 이미지들을 발견하고, 업로드하며 함께 공유해보세요.',
    heroCtaView: '이미지 탐색',
    heroCtaUpload: '이미지 업로드',
    welcomeModalTitle: 'AI Gallery',
    welcomeModalTagline: 'AI 창작의 세계에 오신 것을 환영합니다',
    welcomeEnterButton: '이미지 탐색',

    sortTrending: '트렌드',
    sortLatest: '최신순',
    sortPopular: '인기순',

    categories: {
      all: '전체',
      portrait: 'AI 인물화',
      nature: '자연',
      architecture: '건축',
      fashion: '패션',
      cars: '자동차',
      anime: '애니메이션',
      '3d': '3D 아트',
      digital: '디지털 아트',
      fantasy: '판타지',
      animals: '동물',
      education: '교육',
      technology: '기술',
      uzbek_culture: '우즈벡 전통 문화',
      wallpapers: '배경화면',
      cinematic: '시네마틱',
    },

    uploadModalTitle: 'AI 이미지 업로드',
    uploadModalSubtitle: '직접 생성하거나 발견한 AI 작품을 AI Gallery 커뮤니티에 공유해보세요',
    uploadDropText: '이미지를 여기로 드래그하거나 파일을 선택하세요',
    uploadBrowseText: '파일 선택',
    uploadSupportedFormats: '지원 형식: JPG, JPEG, PNG, WEBP (최대 15MB)',
    uploadTitleLabel: '작품 제목',
    uploadTitlePlaceholder: '예: 달빛 아래 사마르칸트 레기스탄...',
    uploadDescLabel: '간단한 설명',
    uploadDescPlaceholder: '작품에 담긴 영감이나 생성 프롬프트를 설명해주세요',
    uploadCategoryLabel: '카테고리 선택',
    uploadTagsLabel: '태그 (쉼표로 구분)',
    uploadTagsPlaceholder: '예: 아틀라스, 건축, 시네마틱, 조명',
    uploadSubmit: '갤러리에 게시',
    uploadCancel: '취소',
    uploadRequiredError: '이미지 파일과 제목을 모두 입력해주세요!',
    uploadSizeError: '파일 크기는 15MB를 초과할 수 없습니다.',
    uploadSuccessToast: '이미지가 성공적으로 갤러리에 추가되었습니다!',

    viewerClose: '닫기',
    viewerPrev: '이전 작품',
    viewerNext: '다음 작품',
    viewerFavorite: '좋아요',
    viewerFavorited: '좋아요 완료',
    viewerDownload: '다운로드',
    viewerShare: '공유하기',
    viewerCopiedToast: '링크가 클립보드에 복사되었습니다!',
    viewerDownloadToast: '이미지를 다운로드하는 중...',
    viewerTags: '태그',
    viewerCategory: '카테고리',
    viewerUploadedOn: '업로드 날짜',
    viewerAuthor: '작가',
    viewerPrompt: '생성 프롬프트',
    viewerModel: 'AI 모델',
    viewerDelete: '작품 삭제',
    viewerDeleteConfirmTitle: '이 작품을 삭제하시겠습니까?',
    viewerDeleteConfirmDesc: '갤러리에서 이 작품이 영구적으로 제거됩니다.',
    viewerDeleteConfirmBtn: '네, 삭제합니다',
    viewerDeleteSuccessToast: '작품이 성공적으로 삭제되었습니다.',
    viewerRelated: '관련 작품',

    emptyTitle: '검색된 이미지가 없습니다',
    emptyDesc: '다른 검색어를 입력하시거나 필터를 초기화해보세요.',
    emptyResetBtn: '모든 필터 초기화',

    footerDesc: 'AI Gallery — AI 크리에이터를 위한 모던 이미지 디스커버리 플랫폼.',
    footerLinksTitle: '빠른 링크',
    footerHome: '홈',
    footerCategories: '카테고리',
    footerUpload: '이미지 업로드',
    footerAbout: '소개',
    footerPrivacy: '개인정보 처리방침',
    footerAllRights: 'All rights reserved.',

    aboutTitle: 'AI Gallery 소개',
    aboutContent: [
      'AI Gallery는 인공지능이 빚어낸 시각 예술의 정수를 모은 모던 갤러리 플랫폼입니다.',
      '전 세계 크리에이터들이 창의적인 프롬프트와 비전을 나누고 새로운 영감을 얻을 수 있도록 돕습니다.',
      '각국의 고유한 전통 문화부터 초현실적 미래 비주얼까지 폭넓은 예술을 선사합니다.'
    ],
    privacyTitle: '개인정보 처리방침',
    privacyContent: [
      'AI Gallery는 이용자의 프라이버시와 창작물 저작권을 최우선으로 보호합니다.',
      '업로드된 이미지는 로컬 저장소 및 서버에 안전하게 관리되며, 언제든 직접 삭제할 수 있습니다.',
      '어떠한 경우에도 개인 데이터를 외부 광고사에 무단 판매하지 않습니다.'
    ],
    closeBtn: '닫기'
  }
};
