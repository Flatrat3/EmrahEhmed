export type Lesson = {
    id: string;
    title: string;
    description: string;
    category: "Məntiq" | "İnformatika" | "Dövlət Qulluğu" | "Digər";
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
        id: "3",
        title: "Dövlət Qulluğu: Konstitusiya (Maddə 1-23)",
        description: "Azərbaycan Respublikasının Konstitusiyası. Əsas insan və vətəndaş hüquqları.",
        category: "Dövlət Qulluğu",
        topic: "Qanunvericilik",
        difficulty: "Çətin",
        duration: "30 dəq",
        thumbnailUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
        videoUrl: "placeholder",
        date: "2024-02-05",
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
    category: "Məntiq" | "İnformatika" | "Dövlət Qulluğu" | "Qarışıq";
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
    {
        id: "quiz-3",
        title: "Dövlət Qulluğu: Qanunvericilik",
        description: "Konstitusiya və Dövlət Qulluğu haqqında qanun üzrə sınaq.",
        duration: 20,
        category: "Dövlət Qulluğu",
        difficulty: "Çətin",
        questions: [
            {
                id: "q1",
                text: "Azərbaycan Respublikasında dövlət hakimiyyətinin yeganə mənbəyi kimdir?",
                options: ["Prezident", "Xalq", "Milli Məclis", "Konstitusiya Məhkəməsi"],
                correctAnswer: 1,
                explanation: "Konstitusiyanın 1-ci maddəsinə əsasən, dövlət hakimiyyətinin yeganə mənbəyi Azərbaycan xalqıdır.",
            },
            {
                id: "q2",
                text: "Dövlət qulluqçusu kimdir?",
                options: ["Dövlət orqanında maaş alan hər kəs", "Yalnız rəhbər vəzifə tutanlar", "İnzibati və yardımçı vəzifə tutan şəxslər", "Dövlət orqanında ştatda olan hər kəs"],
                correctAnswer: 2,
                explanation: "Dövlət qulluğu haqqında qanuna əsasən, dövlət qulluqçusu inzibati və ya yardımçı vəzifə tutan şəxsdir.",
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
    category: "Təhsil" | "Məntiq" | "İnformatika" | "Dövlət Qulluğu";
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

      <h2>3. Qanunvericilik: Konstitusiya</h2>
      <p>Dövlət qulluğu imtahanlarında Konstitusiyanın ilk 2 fəsli ən çox sual doğuran hissələrdir. İnsan və vətəndaş hüquqları maddələrini əzbərləmək yox, mahiyyətini başa düşmək lazımdır.</p>

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
    {
        id: "3",
        slug: "dovlet-qulluguna-hazirliq",
        title: "Dövlət Qulluğuna Necə Hazırlaşmalı?",
        excerpt: "Sıfırdan başlayaraq dövlət qulluqçusu olmaq üçün addım-addım bələdçi.",
        content: `
      <h2>Planlı Çalışmaq</h2>
      <p>Dövlət qulluğu imtahanı geniş materialı əhatə edir. Qanunvericilik, Məntiq, İnformatika və Azərbaycan dili. Hər biri üçün ayrı vaxt ayırmalı və qrafik tutmalısınız.</p>

      <h2>Resurs Seçimi</h2>
      <p>Yalnız rəsmi mənbələrdən və təsdiq olunmuş dərs vəsaitlərindən istifadə edin. Qanunvericilikdəki son dəyişiklikləri izləmək mütləqdir.</p>
    `,
        author: "Emrah Əhmədov",
        date: "10 Fevral 2024",
        category: "Dövlət Qulluğu",
        imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
        tags: ["Karyera", "Dövlət Qulluğu"],
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
