export type Lesson = {
    id: string;
    title: string;
    description: string;
    category: "Məntiq" | "İnformatika" | "Digər";
    topic: string;
    difficulty: "Asan" | "Orta" | "Çətin";
    duration: string; // e.g., "12 dəq"
    thumbnailUrl: string;
    videoUrl: string; // YouTube embed ID or similar
    date: string;
};

export const lessons: Lesson[] = [
    {
        id: "1",
        title: "Məntiqə Giriş: Şifrələr",
        description: "Şifrələr mövzusunun izahı və sadə tipli testlərin həlli yolları.",
        category: "Məntiq",
        topic: "Şifrələr",
        difficulty: "Asan",
        duration: "15 dəq",
        thumbnailUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
        videoUrl: "dQw4w9WgXcQ", // Placeholder
        date: "2024-02-15",
    },
    {
        id: "2",
        title: "İnformatika: Kompüterin Aparat Təminatı (Hardware)",
        description: "Kompüterin əsas hissələri: Prosessor, RAM, HDD, SSD və periferiya qurğuları.",
        category: "İnformatika",
        topic: "Hardware",
        difficulty: "Orta",
        duration: "22 dəq",
        thumbnailUrl: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=800&q=80",
        videoUrl: "placeholder",
        date: "2024-02-10",
    },

    {
        id: "4",
        title: "Məntiq: Cədvəllər",
        description: "Cədvəl tipli məntiq testlərinin həlli metodikası. Çatışmayan ədədlərin tapılması.",
        category: "Məntiq",
        topic: "Cədvəllər",
        difficulty: "Orta",
        duration: "18 dəq",
        thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
        videoUrl: "placeholder",
        date: "2024-02-01",
    },
    {
        id: "5",
        title: "İnformatika: MS Word 2019 - Əsaslar",
        description: "Microsoft Word proqramının interfeysi və əsas funksiyaları ilə tanışlıq.",
        category: "İnformatika",
        topic: "Ofis Proqramları",
        difficulty: "Asan",
        duration: "25 dəq",
        thumbnailUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        videoUrl: "placeholder",
        date: "2024-01-28",
    },
    {
        id: "6",
        title: "Operatorlar",
        description: "Qeyri-aşkar və aşkar operatorların həlli qaydaları.",
        category: "Məntiq",
        topic: "Operatorlar",
        difficulty: "Orta",
        duration: "20 dəq",
        thumbnailUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
        videoUrl: "placeholder",
        date: "2024-01-25",
    },
    {
        id: "7",
        title: "MƏNTİQ | QƏBULDAN ƏVVƏLKİ SINAQ | DİM SINAQ 2024",
        description: "2024-cü il qəbul imtahanı üçün DİM sınaq izahı.",
        category: "Məntiq",
        topic: "Sınaq",
        difficulty: "Çətin",
        duration: "45 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/MbiOKP0tcwc/maxresdefault.jpg",
        videoUrl: "MbiOKP0tcwc",
        date: "2024-02-20",
    },
    {
        id: "8",
        title: "DİM | 2023 SINAQ (QƏBULDAN ƏVVƏLKİ) | MƏNTİQ",
        description: "2023-cü il qəbul imtahanı öncəsi sınaq izahı.",
        category: "Məntiq",
        topic: "Sınaq",
        difficulty: "Çətin",
        duration: "50 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/WYrEbaI1W_Q/maxresdefault.jpg",
        videoUrl: "WYrEbaI1W_Q",
        date: "2024-02-19",
    },
    {
        id: "9",
        title: "DİM | MƏNTİQ | SINAQ (2021)",
        description: "2021-ci il Dövlət İmtahan Mərkəzi məntiq sınağı.",
        category: "Məntiq",
        topic: "Sınaq",
        difficulty: "Orta",
        duration: "40 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/bgGaQKX7DkY/maxresdefault.jpg",
        videoUrl: "bgGaQKX7DkY",
        date: "2024-02-18",
    },
    {
        id: "10",
        title: "RİYAZİ MƏSƏLƏLƏR - QƏBULA DÜŞƏ BİLƏCƏK",
        description: "Qəbul imtahanlarında ən çox rast gəlinən riyazi məsələ tipləri.",
        category: "Məntiq",
        topic: "Riyazi Məsələlər",
        difficulty: "Orta",
        duration: "35 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/ZSb3nBOsdgc/maxresdefault.jpg",
        videoUrl: "ZSb3nBOsdgc",
        date: "2024-02-17",
    },
    {
        id: "11",
        title: "26 QƏBUL TİPLİ SUAL | QEYRİ-AŞKAR OPERATORLAR",
        description: "DİM qəbul tipli qeyri-aşkar operator suallarının izahı.",
        category: "Məntiq",
        topic: "Operatorlar",
        difficulty: "Orta",
        duration: "30 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/wOfFvkK0C00/maxresdefault.jpg",
        videoUrl: "wOfFvkK0C00",
        date: "2024-02-16",
    },
    {
        id: "12",
        title: "QƏBUL TİPLİ 15 SUAL (MƏNTİQ) DİM",
        description: "Dövlət qulluğu və magistratura üçün 15 qəbul tipli sual.",
        category: "Məntiq",
        topic: "Qarışıq",
        difficulty: "Orta",
        duration: "25 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/7pxO_eQpVlg/maxresdefault.jpg",
        videoUrl: "7pxO_eQpVlg",
        date: "2024-02-15",
    },
    {
        id: "13",
        title: "MƏNTİQ (QƏBUL) | 2022",
        description: "2022-ci il qəbul imtahanı suallarının təhlili.",
        category: "Məntiq",
        topic: "Sınaq",
        difficulty: "Çətin",
        duration: "55 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/E3l6ZvFKzQw/maxresdefault.jpg",
        videoUrl: "E3l6ZvFKzQw",
        date: "2024-02-14",
    },
    {
        id: "14",
        title: "FUTOSHIKI NECƏ HƏLL EDİLİR?",
        description: "Futoshiki məntiq oyununun həll qaydaları və taktikaları.",
        category: "Məntiq",
        topic: "Şəkil Oyunları",
        difficulty: "Asan",
        duration: "15 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/USNuOf7AV-E/maxresdefault.jpg",
        videoUrl: "USNuOf7AV-E",
        date: "2024-02-13",
    },
    {
        id: "15",
        title: "SUDOKU NECƏ HƏLL EDİLİR?",
        description: "Sudoku həll etməyin sirləri və praktik yollar.",
        category: "Məntiq",
        topic: "Şəkil Oyunları",
        difficulty: "Asan",
        duration: "18 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/DEV2bHCBhvc/maxresdefault.jpg",
        videoUrl: "DEV2bHCBhvc",
        date: "2024-02-12",
    },
    {
        id: "16",
        title: "6 Qızıl Qayda",
        description: "Məntiq testlərini daha sürətli həll etmək üçün 6 vacib qayda.",
        category: "Məntiq",
        topic: "Strategiya",
        difficulty: "Orta",
        duration: "12 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/0GA48okGvmE/maxresdefault.jpg",
        videoUrl: "0GA48okGvmE",
        date: "2024-02-11",
    },
    {
        id: "17",
        title: "2025-Cİ İL QƏBUL II CƏHD | İNFORMATİKA",
        description: "2025-ci il qəbul imtahanı (II cəhd) informatika suallarının izahı.",
        category: "İnformatika",
        topic: "Sınaq",
        difficulty: "Çətin",
        duration: "45 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/jhBAorzejbo/maxresdefault.jpg",
        videoUrl: "jhBAorzejbo",
        date: "2024-02-25",
    },
    {
        id: "18",
        title: "DİM SINAQ 2025 | İNFORMATİKA | MAGİSTRATURA",
        description: "Magistratura qəbul imtahanı üçün DİM 2025 informatika sınağı.",
        category: "İnformatika",
        topic: "Sınaq",
        difficulty: "Çətin",
        duration: "50 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/65N7vEwHoDk/maxresdefault.jpg",
        videoUrl: "65N7vEwHoDk",
        date: "2024-02-24",
    },
    {
        id: "19",
        title: "DİM SINAQ 2024 | İNFORMATİKA | MAGİSTRATURA",
        description: "2024-cü il magistratura qəbulu üzrə DİM informatika sınaq izahı.",
        category: "İnformatika",
        topic: "Sınaq",
        difficulty: "Orta",
        duration: "40 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/8sw_hJvXg0A/maxresdefault.jpg",
        videoUrl: "8sw_hJvXg0A",
        date: "2024-02-23",
    },
    {
        id: "20",
        title: "İNFORMATİKA | DİM SINAQ | 2023 | MAGİSTRATURA",
        description: "2023-cü il magistratura sınaq imtahanı suallarının təhlili.",
        category: "İnformatika",
        topic: "Sınaq",
        difficulty: "Orta",
        duration: "42 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/JYaiABZF_Mc/maxresdefault.jpg",
        videoUrl: "JYaiABZF_Mc",
        date: "2024-02-22",
    },
    {
        id: "21",
        title: "KOMPÜTERİN APARAT TƏMİNATI | DİM İNFORMATİKA(TOPLU)",
        description: "DİM toplusundan hardware (aparat təminatı) mövzusuna aid testlərin izahı.",
        category: "İnformatika",
        topic: "Hardware",
        difficulty: "Orta",
        duration: "35 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/x2ej-LaO0J8/maxresdefault.jpg",
        videoUrl: "x2ej-LaO0J8",
        date: "2024-02-21",
    },
    {
        id: "22",
        title: "2025 QƏBUL SUALLARI | İNFORMATİKA | I CƏHD",
        description: "2025-ci il I cəhd qəbul imtahanı informatika sualları.",
        category: "İnformatika",
        topic: "Sınaq",
        difficulty: "Çətin",
        duration: "48 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/gOm5tkWTVXU/maxresdefault.jpg",
        videoUrl: "gOm5tkWTVXU",
        date: "2024-02-20",
    },
    {
        id: "23",
        title: "2023 QƏBUL – İNFORMATİKA",
        description: "2023-cü il qəbul imtahanında düşmüş informatika suallarının izahı.",
        category: "İnformatika",
        topic: "Sınaq",
        difficulty: "Orta",
        duration: "38 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/DgPIYNgfQnY/maxresdefault.jpg",
        videoUrl: "DgPIYNgfQnY",
        date: "2024-02-19",
    },
    {
        id: "24",
        title: "2022 QƏBUL(II CƏHD) – İNFORMATİKA",
        description: "2022-ci il II cəhd qəbul imtahanı suallarının ətraflı izahı.",
        category: "İnformatika",
        topic: "Sınaq",
        difficulty: "Orta",
        duration: "45 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/h5i4iGEH_hY/maxresdefault.jpg",
        videoUrl: "h5i4iGEH_hY",
        date: "2024-02-18",
    },
    {
        id: "25",
        title: "KOMPÜTER ŞƏBƏKƏLƏRİ | QƏBUL TİPLİ SUALLAR",
        description: "Kompüter şəbəkələri mövzusunda qəbul tipli sualların həlli.",
        category: "İnformatika",
        topic: "Şəbəkələr",
        difficulty: "Çətin",
        duration: "30 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/Kb-AmAqFnuQ/maxresdefault.jpg",
        videoUrl: "Kb-AmAqFnuQ",
        date: "2024-02-17",
    },
    {
        id: "26",
        title: "KOMPÜTER QRAFİKASI | QƏBUL TİPLİ SUALLAR",
        description: "Kompüter qrafikası mövzusundan imtahanda düşə biləcək suallar.",
        category: "İnformatika",
        topic: "Qrafika",
        difficulty: "Orta",
        duration: "25 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/GM89wAUEknQ/maxresdefault.jpg",
        videoUrl: "GM89wAUEknQ",
        date: "2024-02-16",
    },
    {
        id: "27",
        title: "MS ACCESS 2019 | QƏBUL TİPLİ SUALLAR",
        description: "Verilənlər bazası və MS Access 2019 üzrə qəbul tipli suallar.",
        category: "İnformatika",
        topic: "Ofis Proqramları",
        difficulty: "Orta",
        duration: "28 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/LLnMFHSZO58/maxresdefault.jpg",
        videoUrl: "LLnMFHSZO58",
        date: "2024-02-15",
    },
    {
        id: "28",
        title: "DİM SINAQ : 29 YANVAR (MƏNTİQ) 2023",
        description: "2023-cü il 29 Yanvar tarixli DİM sınaq imtahanının məntiq suallarının izahı.",
        category: "Məntiq",
        topic: "Sınaq",
        difficulty: "Çətin",
        duration: "52 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/rrHLlO0mWKQ/maxresdefault.jpg",
        videoUrl: "rrHLlO0mWKQ",
        date: "2024-02-14",
    },
    {
        id: "29",
        title: "DİM (SINAQ 26 DEKABR 2021) - Məntiq",
        description: "2021-ci il 26 Dekabr tarixli DİM sınaq imtahanı sualları.",
        category: "Məntiq",
        topic: "Sınaq",
        difficulty: "Orta",
        duration: "45 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/bq99b8VzdHM/hqdefault.jpg",
        videoUrl: "bq99b8VzdHM",
        date: "2024-02-13",
    },
    {
        id: "30",
        title: "ƏN SON QƏBUL İMTAHANINDA DÜŞMÜŞ SUAL TİPLƏRİ | 2022",
        description: "2022-ci il qəbul imtahanında istifadə olunmuş məntiq sual tiplərinin təhlili.",
        category: "Məntiq",
        topic: "Sınaq",
        difficulty: "Çətin",
        duration: "48 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/f0gBjZyHank/maxresdefault.jpg",
        videoUrl: "f0gBjZyHank",
        date: "2024-02-12",
    },
    {
        id: "31",
        title: "Canlıda Məntiq Suallari",
        description: "Canlı yayımda izah edilən seçilmiş məntiq sualları.",
        category: "Məntiq",
        topic: "Qarışıq",
        difficulty: "Orta",
        duration: "60 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/3yQoQ8WXAxs/hqdefault.jpg",
        videoUrl: "3yQoQ8WXAxs",
        date: "2024-02-11",
    },
    {
        id: "32",
        title: "Qəbulda düşəcək MƏNTİQ sualları",
        description: "Qəbul imtahanına düşmə ehtimalı yüksək olan məntiq sualları.",
        category: "Məntiq",
        topic: "Proqnoz",
        difficulty: "Çətin",
        duration: "40 dəq",
        thumbnailUrl: "https://img.youtube.com/vi/-B4hsf9iW24/hqdefault.jpg",
        videoUrl: "-B4hsf9iW24",
        date: "2024-02-10",
    },
];

export type Question = {
    id: string;
    text: string;
    options: string[];
    correctAnswer: number; // Index of the correct option
    explanation?: string;
};

export type Quiz = {
    id: string;
    title: string;
    description: string;
    questions: Question[];
    duration: number; // in minutes
    category: "Məntiq" | "İnformatika" | "Qarışıq";
    difficulty: "Asan" | "Orta" | "Çətin";
};

export const quizzes: Quiz[] = [
    {
        id: "quiz-1",
        title: "Məntiq: Sınaq İmtahanı #1",
        description: "Məntiqi təfəkkürünüzü yoxlamaq üçün ümumi sınaq. Şifrələr, anaqramlar və riyazi əməllər.",
        duration: 15,
        category: "Məntiq",
        difficulty: "Orta",
        questions: [
            {
                id: "q1",
                text: "2, 5, 11, 23, 47, ?",
                options: ["94", "95", "96", "97"],
                correctAnswer: 1, // 95 (x2 + 1)
                explanation: "Hər bir hədd özündən əvvəlkinin 2 mislindən 1 vahid böyükdür: 2*2+1=5, 5*2+1=11...",
            },
            {
                id: "q2",
                text: "Anaqramı həll edin və fərqli olanı tapın.",
                options: ["Bakı", "Gəncə", "Sumqayıt", "London"],
                correctAnswer: 3,
                explanation: "Variantlardakı şəhərlər: Bakı, Gəncə, Sumqayıt (Azərbaycan), London (İngiltərə). Fərqli olan Londondur.",
            },
            {
                id: "q3",
                text: "Ata 35, oğlu isə 5 yaşındadır. Neçə ildən sonra ata oğlundan 4 dəfə böyük olacaq?",
                options: ["3", "4", "5", "6"],
                correctAnswer: 2,
                explanation: "X il sonra: 35+x = 4*(5+x) => 35+x = 20+4x => 3x=15 => x=5.",
            },
            {
                id: "q4",
                text: "KİTAB - 53912, TİBB - 9322 olarsa, KATİB - ?",
                options: ["51932", "51293", "52913", "59132"],
                correctAnswer: 0,
                explanation: "K=5, İ=3, T=9, A=1, B=2. KATİB = 51932.",
            },
            {
                id: "q5",
                text: "Hansı ədəd fərqlidir? 27, 64, 125, 144, 216",
                options: ["27", "64", "144", "216"],
                correctAnswer: 2,
                explanation: "27=3^3, 64=4^3, 125=5^3, 216=6^3. 144 isə kvadratdır (12^2), kub deyil.",
            },
        ],
    },
    {
        id: "quiz-2",
        title: "İnformatika: Qurğular və Sistemlər",
        description: "Kompüterin aparat təminatı və əməliyyat sistemləri üzrə biliklərinizi yoxlayın.",
        duration: 10,
        category: "İnformatika",
        difficulty: "Asan",
        questions: [
            {
                id: "q1",
                text: "Aşağıdakılardan hansı giriş qurğusudur?",
                options: ["Monitor", "Printer", "Skaner", "Plotter"],
                correctAnswer: 2,
                explanation: "Skaner məlumatı kompüterə daxil edən (giriş) qurğudur. Digərləri çıxış qurğularıdır.",
            },
            {
                id: "q2",
                text: "1 Kilobayt neçə bitdir?",
                options: ["1024", "8000", "8192", "1000"],
                correctAnswer: 2,
                explanation: "1 KB = 1024 Bayt. 1 Bayt = 8 bit. 1024 * 8 = 8192 bit.",
            },
            {
                id: "q3",
                text: "Kompüterin 'beyni' adlanan hissə hansıdır?",
                options: ["RAM", "CPU", "HDD", "GPU"],
                correctAnswer: 1,
                explanation: "CPU (Mərkəzi Prosessor) kompüterin bütün hesablamalarını aparan əsas hissəsidir.",
            },
        ],
    },

];

export type BlogPost = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML or Markdown content
    author: string;
    date: string;
    category: "Təhsil" | "Məntiq" | "İnformatika";
    imageUrl: string;
    tags: string[];
};

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "dim-imtahaninda-en-cox-cixan-movzular",
        title: "DİM İmtahanında Ən Çox Çıxan 5 Mövzu",
        excerpt: "Dövlət İmtahan Mərkəzi tərəfindən keçirilən imtahanlarda təkrarlanan sual tipləri və mövzular haqqında ətraflı analiz.",
        content: `
      <h2>Giriş</h2>
      <p>Hər il minlərlə namizəd Dövlət İmtahan Mərkəzi (DİM) tərəfindən keçirilən müxtəlif imtahanlarda iştirak edir. İstər Dövlət Qulluğu, istərsə də Magistratura imtahanlarında bəzi mövzular var ki, onlar demək olar ki, hər il qarşımıza çıxır. Bu məqalədə həmin mövzuları sizlər üçün analiz etdik.</p>
      
      <h2>1. Məntiq: Şifrələr və Anaqramlar</h2>
      <p>Məntiq blokunun olmazsa olmazı şifrələrdir. Adətən 3-4 sual bu mövzuya aid olur. Sadə riyazi əməllərə əsaslanan şifrələri həll etmək üçün diqqətli olmaq kifayətdir.</p>

      <h2>2. İnformatika: Excel Düsturları</h2>
      <p>MS Excel proqramından ən azı 2 sual düsturlarla bağlı olur. IF, COUNT, SUM kimi funksiyaların iş prinsiplərini mükəmməl bilməlisiniz.</p>

      <h2>Nəticə</h2>
      <p>İmtahana hazırlaşarkən bu mövzulara xüsusi diqqət yetirməklə nəticənizi 10-15 bal artıra bilərsiniz. Uğurlar!</p>
    `,
        author: "Emrah Əhmədov",
        date: "18 Fevral 2024",
        category: "Təhsil",
        imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
        tags: ["DİM", "İmtahan", "Məsləhət"],
    },
    {
        id: "2",
        slug: "mentiqde-en-cox-edilen-sehvler",
        title: "Məntiq Testlərində Ən Çox Edilən 3 Səhv",
        excerpt: "Namizədlərin imtahan zamanı etdiyi sadə, lakin bal itkisinə səbəb olan səhvlər və onlardan qaçınma yolları.",
        content: `
      <h2>1. Sualı Tam Oxumamaq</h2>
      <p>Ən böyük səhv sualın şərtini sona qədər oxumamaqdır. Məsələn, "hansı variant səhvdir" əvəzinə "hansı düzgündür" kimi oxumaq tez-tez rast gəlinən haldır.</p>

      <h2>2. Vaxtı Düzgün Bölməmək</h2>
      <p>Çətin bir sual üzərində 5-10 dəqiqə vaxt itirmək digər asan sualları yazmağa mane olur. "Turlama prinsipi"ndən istifadə edin.</p>

      <h2>3. Variantlarla İşləməmək</h2>
      <p>Bəzən cavabı tapmaqdansa, səhv variantları çıxdaş etmək daha sürətli nəticə verir. Xüsusilə anaqram və sözlə bağlı testlərdə bu metod effektlidir.</p>
    `,
        author: "Aynur Məmmədova",
        date: "15 Fevral 2024",
        category: "Məntiq",
        imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
        tags: ["Məntiq", "Səhvlər", "Strategiya"],
    },

];

export type LogicTopic = {
    id: string;
    title: string;
    subtopics?: { id: string; title: string }[];
};

export const logicTopics: LogicTopic[] = [
    { id: "1", title: "Riyazi Əməllər" },
    { id: "3", title: "Şəklin Analizi" },
    { id: "4", title: "Əməllər (Qeyri-Aşkar Operatorlar)" },
    { id: "5", title: "Şəkil Münasibətləri" },
    {
        id: "6",
        title: "Ardıcıllıqlar",
        subtopics: [
            { id: "6.1", title: "Sıralar" }
        ]
    },
    { id: "7", title: "Şəkil Ardıcıllıqları" },
    { id: "8", title: "Mətnin Məntiqi Təhlili" },
    { id: "9", title: "Rebus" },
    { id: "10", title: "Şəkil Cədvəlləri" },
    { id: "11", title: "Cədvəllər" },
    { id: "12", title: "Analogiya-Anaqram" },
    { id: "13", title: "Hesab Əməlləri" },
    { id: "14", title: "Tərəzilər" },
    { id: "15", title: "Sahə-Perimetr" },
    { id: "16", title: "Müstəvi Təsəvvür" },
    { id: "17", title: "Cədvəl-Qrafik-Diaqram" },
    { id: "18", title: "Fəza Fiqurları" },
    {
        id: "19",
        title: "Riyazi Məsələlər",
        subtopics: [
            { id: "19.1", title: "Yaş Məsələləri" },
            { id: "19.2", title: "Faiz Məsələləri" },
            { id: "19.3", title: "Ədəd Məsələləri" },
            { id: "19.4", title: "İşçi-Hovuz Məsələləri" },
            { id: "19.5", title: "Sürət Məsələləri" },
            { id: "19.6", title: "Kombinatorika və Ehtimal Məsələləri" },
            { id: "19.7", title: "Blok Məsələləri" },
            { id: "19.8", title: "Səhifə Nömrələmə Məsələləri" },
            { id: "19.9", title: "Təqvim (Gün, Ay, İl) Məsələləri" },
        ]
    },
];

export const informatikaTopics: LogicTopic[] = [
    { id: "1", title: "Əsas Anlayışlar" },
    { id: "2", title: "Say Sistemləri" },
    { id: "3", title: "Kompüterin Texniki Təminatı" },
    { id: "4", title: "Alqoritm (Brainware)" },
    { id: "5", title: "Proqram Təminatı (Software)" },
    { id: "6", title: "Əməliyyat Sistemləri" },
    { id: "7", title: "Windows 7" },
    { id: "8", title: "MS Word 2010" },
    { id: "9", title: "MS Excel 2010" },
    { id: "10", title: "MS Power Point 2010" },
    { id: "11", title: "MS Access (VBİS)" },
    { id: "12", title: "Kompüter Qrafikası" },
    { id: "13", title: "Kompüter, İnternet Qlobal Şəbəkələri" },
];
