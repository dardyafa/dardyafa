// Default Initial Data for Dar Dyafa (Editable via /admin -> saved in localStorage + exportable)
const DEFAULT_SITE_DATA = {
    headerBio: {
        en: "Authentic Moroccan Hospitality, Street Food & Luxury Event Planning in Boston, USA",
        fr: "Hospitalité Marocaine Authentique, Street Food & Organisation d'Événements à Boston, USA",
        ar: "الضيافة المغربية الأصيلة، مأكولات الشارع وتنظيم الحفلات الفاخرة في بوسطن، أمريكا"
    },
    welcomeTitle: {
        en: "Welcome to Dar Dyafa — Taste & Tradition of Morocco in America",
        fr: "Bienvenue chez Dar Dyafa — Le Goût et la Tradition du Maroc en Amérique",
        ar: "مرحباً بكم في دار ضيافة — أصالة المذاق والتقاليد المغربية في أمريكا"
    },
    welcomeSub: {
        en: "From sizzling halal Moroccan street food in Revere & Boston to royal weddings and bridal Negafa styling.",
        fr: "De la street food marocaine halal à Revere & Boston aux mariages royaux et services de Negafa.",
        ar: "من المأكولات المغربية الحلال في بوسطن إلى تنظيم الأعراس الملكية وخدمات النكافة والتجميل."
    },
    tabs: {
        tab1: { en: "Moroccan Cuisine", fr: "Cuisine Marocaine", ar: "مأكولات مغربية" },
        tab2: { en: "Royal Events", fr: "Événements & Mariages", ar: "تنظيم الحفلات" },
        tab3: { en: "Bridal Negafa", fr: "Negafa & Caftans", ar: "نكافة وقفاطين" }
    },
    // Marquee items: ALWAYS ENGLISH ONLY (never translated)
    marqueeItems: [
        { id: "m1", name: "Halal Shawarma with Moroccan Bread", price: "$12.99" },
        { id: "m2", name: "Halal Rice Bowl", price: "$10.00" },
        { id: "m3", name: "Halal Burrito", price: "$10.00" },
        { id: "m4", name: "Chicken or Falafel Gyro with Fries/Salad", price: "$11.99" },
        { id: "m5", name: "Friday Special: Royal Moroccan Couscous", price: "$10.00" },
        { id: "m6", name: "Sides: French Fries / Rice / Vegetables", price: "$3.99" },
        { id: "m7", name: "Moroccan Mint Tea & Drinks", price: "$2.00" }
    ],
    // Videos per page (ordered, controllable from /admin)
    videos: {
        page1: [
            { id: "v1_1", title: "Dar Dyafa Food Truck Live", url: "https://www.instagram.com/p/DflRBFZupbq/" },
            { id: "v1_2", title: "Fresh Moroccan Street Food", url: "https://www.instagram.com/p/DfgkESZRUm4/" },
            { id: "v1_3", title: "Boston Halal Specials", url: "https://www.instagram.com/p/DfKV3EROd5d/" }
        ],
        page2: [
            { id: "v2_1", title: "Moroccan Wedding Catering", url: "https://www.instagram.com/p/DffM0wgIZZ2/" },
            { id: "v2_2", title: "Royal Event Dishes", url: "https://www.instagram.com/p/DfK84z2CQOq/" },
            { id: "v2_3", title: "Traditional Pastilla & Tagine", url: "https://www.instagram.com/p/DYTe6qfCK6A/" },
            { id: "v2_4", title: "Moroccan Sweets & Pastries", url: "https://www.instagram.com/p/DffICvRRbP8/" },
            { id: "v2_5", title: "Luxury Dessert Platter", url: "https://www.instagram.com/p/Dfe43bFGe4L/" },
            { id: "v2_6", title: "Wedding Atmosphere Highlights", url: "https://www.instagram.com/stories/highlights/17875704405471640/" },
            { id: "v2_7", title: "Amaria & Chaabi Celebration", url: "https://www.instagram.com/p/DdfVW2LIoFB/" },
            { id: "v2_8", title: "Full Moroccan Ceremony in USA", url: "https://www.instagram.com/p/Dfq3oQXCbwH/" }
        ],
        page3: [
            { id: "v3_1", title: "Royal Bridal Caftan & Styling", url: "https://www.instagram.com/p/DeDgDtbiWQl/" },
            { id: "v3_2", title: "Negafa Nora Boston Highlights", url: "https://www.instagram.com/stories/highlights/17884648182306587/" }
        ]
    },
    // Posts / Products per page (with images mapped to local assets/images/...)
    posts: {
        page1: [
            {
                id: "FD-101",
                image: "assets/images/page1/pg 1 (1).jpg",
                price: "$11.99",
                title: { en: "Chicken or Falafel Gyro & Rice Platter", fr: "Gyro Poulet/Falafel & Assiette de Riz", ar: "شاورما جيرو وطبق الأرز المغربي" },
                desc: { en: "Served with crispy fries or fresh salad, hummus, pickles, feta cheese, pita, and signature garlic sauce.", fr: "Servi avec frites croustillantes ou salade fraîche, houmous, cornichons, feta, pain pita et sauce à l'ail.", ar: "يقدم مع بطاطس مقرمشة أو سلطة طازجة، حمص، مخللات، جبن فيتا، خبز بيتا وصلصة الثوم الخاصة." }
            },
            {
                id: "FD-102",
                image: "assets/images/page1/pg 1 (2).jpg",
                price: "$12.99",
                title: { en: "Halal Shawarma with Moroccan Bread", fr: "Shawarma Halal au Pain Marocain", ar: "شاورما حلال بالخبز المغربي" },
                desc: { en: "Authentic marinated halal meat wrapped in warm Moroccan bread with lettuce, tomatoes, tahini & garlic sauce.", fr: "Viande halal marinée dans un pain marocain chaud avec laitue, tomates, tahini et sauce à l'ail.", ar: "لحم حلال متبل في خبز مغربي دافئ مع خس، طماطم، طحينة وصلصة الثوم." }
            },
            {
                id: "FD-103",
                image: "assets/images/page1/la page 1 .jpg",
                price: "$10.00",
                title: { en: "Halal Chicken & Rice Platter", fr: "Assiette Riz & Poulet Halal", ar: "طبق الأرز بالدجاج الحلال" },
                desc: { en: "Seasoned basmati rice topped with tender grilled halal chicken, creamy white sauce, and fresh garden salad.", fr: "Riz basmati assaisonné garni de poulet halal grillé tendre, sauce blanche crémeuse et salade fraîche.", ar: "أرز بسمتي متبل مع دجاج حلال مشوي طري، صلصة بيضاء كريمية وسلطة طازجة." }
            },
            {
                id: "FD-104",
                image: "assets/images/page1/pg 1 (2).jpg",
                price: "$10.00",
                title: { en: "Friday Special: Royal Couscous", fr: "Spécial Vendredi : Couscous Royal", ar: "طبق الجمعة الخاص: الكسكس المغربي" },
                desc: { en: "Traditional steamed semolina topped with slow-cooked tender meat and seven caramelized vegetables.", fr: "Semoule traditionnelle cuite à la vapeur avec viande tendre mijotée et sept légumes.", ar: "كسكس مغربي تقليدي مطهو على البخار مع لحم طري وسبع خضار." }
            },
            {
                id: "FD-105",
                image: "assets/images/page1/le page 1 .jpg",
                price: "",
                title: { en: "Dar Dyafa Food Truck — Revere & Boston", fr: "Food Truck Dar Dyafa — Revere & Boston", ar: "شاحنة دار ضيافة للمأكولات — بوسطن" },
                desc: { en: "Visit us at 61 Squire Rd, Revere, MA 02151 or book our truck for private events & festivals.", fr: "Retrouvez-nous au 61 Squire Rd, Revere, MA 02151 ou réservez notre camion pour vos événements.", ar: "زورونا في 61 Squire Rd, Revere, MA أو احجزوا شاحنتنا لمناسباتكم الخاصة." }
            },
            {
                id: "FD-106",
                image: "assets/images/page1/page 01 .jpg",
                price: "",
                title: { en: "Weekly Operating Schedule", fr: "Horaires d'Ouverture Hebdomadaires", ar: "أوقات العمل الأسبوعية" },
                desc: { en: "Open Tuesday through Saturday from 5:00 PM to 11:00 PM. Closed Sundays & Mondays.", fr: "Ouvert du mardi au samedi de 17h00 à 23h00. Fermé dimanche et lundi.", ar: "مفتوح من الثلاثاء إلى السبت من 5:00 مساءً حتى 11:00 ليلاً. مغلق الأحد والاثنين." }
            }
        ],
        page2: [
            {
                id: "EV-201",
                image: "assets/images/page2/p 2.jpg",
                price: "",
                title: { en: "Royal Moroccan Amaria & Procession", fr: "Amaria Royale Marocaine & Cortège", ar: "العمارية المغربية الملكية والزفة" },
                desc: { en: "Grand bridal entrance with traditional bearers, live Chaabi/Dakka Marrakchia musicians, and authentic Moroccan ambiance in the USA.", fr: "Entrée royale des mariés avec porteurs traditionnels, musiciens Chaabi/Dakka Marrakchia aux USA.", ar: "دخلة ملكية للعروسين مع فرقة الدقة المراكشية والشعبي وأجواء مغربية أصيلة في أمريكا." }
            },
            {
                id: "EV-202",
                image: "assets/images/page2/ccc.jpg",
                price: "",
                title: { en: "Luxury Banquet & Venue Decoration", fr: "Décoration de Salle & Banquet de Luxe", ar: "تزيين القاعات والموائد الملكية" },
                desc: { en: "Full venue setup in the US with gold Moroccan craftsmanship, floral centerpieces, and VIP guest table styling.", fr: "Installation complète de salle aux USA avec artisanat marocain doré et décoration florale VIP.", ar: "تجهيز كامل للقاعات في أمريكا بديكورات مغربية فاخرة وتنسيق راقٍ لطاولات الضيوف." }
            },
            {
                id: "EV-203",
                image: "assets/images/page2/images (1).jfif",
                price: "",
                title: { en: "Traditional Tifor & Engagement Gifts", fr: "Tifor Traditionnel & Cadeaux de Fiançailles", ar: "طيفور الخطوبة والهدايا المغربية" },
                desc: { en: "Silver-engraved Moroccan Tifor trays curated for engagements, henna nights, and wedding gift ceremonies.", fr: "Plateaux Tifor marocains ciselés pour fiançailles, soirées henné et cérémonies de mariage.", ar: "مجموعات الطيفور المغربي الفضي المزخرف لحفلات الخطوبة، الحناء، وتقديم الهدايا." }
            },
            {
                id: "EV-204",
                image: "assets/images/page2/images (2).jfif",
                price: "",
                title: { en: "Royal Dates & Moroccan Fakya Display", fr: "Dattes Royales & Présentation Fakya", ar: "تقديم التمر المحشو والفاكية المغربية" },
                desc: { en: "Artisanal stuffed Medjool dates, walnuts, and traditional Moroccan sweets presented on velvet & silver pedestals.", fr: "Dattes Medjool farcies artisanales, noix et douceurs marocaines sur socles en velours.", ar: "تشكيلة فاخرة من التمر المجهول المحشو بالجوز والحلويات المغربية التقليدية." }
            },
            {
                id: "EV-205",
                image: "assets/images/page2/page 02.jpg",
                price: "",
                title: { en: "Live Gnawa & Dakka Marrakchia Band", fr: "Troupe Gnawa & Dakka Marrakchia Live", ar: "فرقة كناوة والدقة المراكشية في أمريكا" },
                desc: { en: "Bring authentic Moroccan street energy and traditional rhythms to your wedding, circumcision (Khtana), or gala.", fr: "Apportez l'énergie authentique des rythmes marocains à votre mariage, baptême ou gala.", ar: "أجواء احتفالية حية مع إيقاعات كناوة والدقة المراكشية للأعراس، الختانة، والسهرات." }
            },
            {
                id: "EV-206",
                image: "assets/images/page2/page 2.jpg",
                price: "",
                title: { en: "Gourmet Exotic Fruit Platters", fr: "Plateaux de Fruits Exotiques Gastronomiques", ar: "بلاطوات الفواكه الفاخرة للمناسبات" },
                desc: { en: "Hand-carved tropical and seasonal fruit arrangements crafted for upscale Moroccan receptions.", fr: "Arrangements de fruits tropicaux sculptés à la main pour réceptions marocaines haut de gamme.", ar: "تشكيلات فواكه استوائية وموسمية مقطعة بعناية فائقة لحفلات الاستقبال." }
            }
        ],
        page3: [
            {
                id: "NG-301",
                image: "assets/images/page3/p3.jfif",
                price: "",
                title: { en: "Royal White & Gold Bridal Caftan", fr: "Caftan de Mariée Royal Blanc & Or", ar: "قفطان العروس الملكي الأبيض والذهبي" },
                desc: { en: "Hand-embroidered Moroccan Takchita paired with golden Mdamma belt, royal crown, and bridal hair & makeup.", fr: "Takchita marocaine brodée main avec ceinture Mdamma dorée, couronne royale et mise en beauté.", ar: "تكشيطة مغربية مطرزة يدوياً مع مضمة ذهبية، تاج ملكي، ومكياج وتسريحة متكاملة للعروس." }
            },
            {
                id: "NG-302",
                image: "assets/images/page3/page 03.jfif",
                price: "",
                title: { en: "Emerald Velvet Imperial Takchita", fr: "Takchita Impériale Velours Émeraude", ar: "تكشيطة المخمل الأخضر الملكي" },
                desc: { en: "Regal emerald green velvet caftan with gold zellige embroidery and authentic Fassi pearl jewelry.", fr: "Caftan en velours vert émeraude avec broderie dorée et parure de perles fassies authentiques.", ar: "قفطان مخملي أخضر ملكي بتطريز ذهبي فاخر مع مجوهرات الجوهر الفاسي الأصيل." }
            },
            {
                id: "NG-303",
                image: "assets/images/page3/p03   .jpg",
                price: "",
                title: { en: "Traditional Henna & Chedda Styling", fr: "Coiffure Traditionnelle Henné & Chedda", ar: "إطلالة الحناء والشدة المغربية" },
                desc: { en: "Complete Negafa dressing, jewelry placement, and HD bridal makeup for Henna night and wedding ceremonies.", fr: "Habillage Negafa complet, parures et maquillage mariée HD pour soirée henné et mariage.", ar: "إشراف كامل للنكافة، تنسيق المجوهرات، ومكياج احترافي لليلة الحناء ويوم الزفاف." }
            },
            {
                id: "NG-304",
                image: "assets/images/page3/pg3.jfif",
                price: "",
                title: { en: "Royal Burgundy & Gold Bridal Couture", fr: "Haute Couture Mariée Bordeaux & Or", ar: "قفطان العروس الملكي باللون العنابي" },
                desc: { en: "Opulent burgundy velvet gown with intricate gold threadwork and matching bridal tiara.", fr: "Robe en velours bordeaux somptueuse avec broderie au fil d'or et diadème assorti.", ar: "إطلالة ملكية باللون العنابي المطرز بخيوط الذهب مع تاج مرصع." }
            },
            {
                id: "NG-305",
                image: "assets/images/page3/3.jfif",
                price: "",
                title: { en: "Full Henna Ceremony Rituals", fr: "Cérémonie Traditionnelle du Henné", ar: "طقوس ليلة الحناء المغربية الأصيلة" },
                desc: { en: "Authentic Moroccan brassware, henna artist, and ceremonial attire coordinated by Negafa Nora in Boston.", fr: "Argenterie marocaine authentique, artiste henné et tenues coordonnées par Negafa Nora à Boston.", ar: "تجهيز طقوس الحناء المغربية بالأواني النحاسية التقليدية ونقش الحناء في بوسطن." }
            }
        ]
    }
};
