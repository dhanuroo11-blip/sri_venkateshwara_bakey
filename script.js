/* =========================================================
   SRI VENKATESWARA IYENGAR BAKERY & SWEETS
   MAIN JAVASCRIPT - CLEAN CATEGORY VERSION
========================================================= */

/* =========================================================
   CATEGORY DATA
========================================================= */

const categories = {

    /* =================================================
       SWEETS
    ================================================= */

    sweets: {

        title: {
            en: "Sweets",
            ta: "இனிப்புகள்"
        },

        description: {
            en: "Traditional sweets and familiar favourites made for every occasion.",
            ta: "ஒவ்வொரு சந்தர்ப்பத்திற்கும் ஏற்ற பாரம்பரிய இனிப்புகள் மற்றும் அனைவரும் விரும்பும் இனிப்பு வகைகள்."
        },

        heroImage: "images/products/gulabjamun.png",

        items: [

            { en: "Mysore Pak", ta: "மைசூர் பாக்" },
            { en: "Badusha", ta: "பாதுஷா" },
            { en: "Makkan Peda", ta: "மக்கன் பேடா" },
            { en: "Jaggery", ta: "வெல்லம்" },
            { en: "Jalebi", ta: "ஜிலேபி" },
            { en: "Laddu", ta: "லட்டு" },
            { en: "Mothi Laddu", ta: "மோதி லட்டு" },
            { en: "Milk Laddu", ta: "பால் லட்டு" },
            { en: "Dates Laddu", ta: "பேரீச்சம்பழ லட்டு" },
            { en: "Rava Laddu", ta: "ரவா லட்டு" },
            { en: "Tripathi Big Laddu", ta: "திருப்பதி பெரிய லட்டு" },
            { en: "Gulab Jamun", ta: "குலாப் ஜாமுன்" },
            { en: "Mini Gulab Jamun", ta: "மினி குலாப் ஜாமுன்" },
            { en: "Sweet Boondi", ta: "இனிப்பு பூந்தி" },
            { en: "Ghee Mysore Pak", ta: "நெய் மைசூர் பாக்" },
            { en: "Milk Mysore Pak", ta: "பால் மைசூர் பாக்" },
            { en: "Dates Mysore Pak", ta: "பேரீச்சம்பழ மைசூர் பாக்" },
            { en: "Boost Burfi", ta: "பூஸ்ட் பர்ஃபி" },
            { en: "Horlicks Burfi", ta: "ஹார்லிக்ஸ் பர்ஃபி" },
            { en: "Badam Burfi", ta: "பாதாம் பர்ஃபி" },
            { en: "Coconut Burfi", ta: "தேங்காய் பர்ஃபி" },
            { en: "Kalakand", ta: "கலாகண்ட்" },
            { en: "Milk Cake", ta: "மில்க் கேக்" },
            { en: "Milk Burfi", ta: "பால் பர்ஃபி" },
            { en: "Rasgulla", ta: "ரசகுல்லா" },
            { en: "Mini Rasgulla", ta: "மினி ரசகுல்லா" },
            { en: "Rasmalai", ta: "ரசமலாய்" },
            { en: "Halwa", ta: "அல்வா" },
            { en: "Tutti Frutti Halwa", ta: "டூட்டி ஃப்ரூட்டி அல்வா" },
            { en: "Adhirasam", ta: "அதிரசம்" },
            { en: "Kadalai Mittai", ta: "கடலை மிட்டாய்" },
            { en: "Ellu Mittai", ta: "எள்ளு மிட்டாய்" },
            { en: "Then Mittai", ta: "தேன்மிட்டாய்" },
            { en: "Kadla Urunda", ta: "கடலை உருண்டை" },
            { en: "Achu Murukku", ta: "அச்சு முறுக்கு" },
            { en: "Boondi", ta: "பூந்தி" },
            { en: "Seedai", ta: "சீடை" },
            { en: "Choco Bites", ta: "சோகோ பைட்ஸ்" },
{ en: "Ragi Chocos", ta: "ராகி சோகோஸ்" },

        ]
    },


    /* =================================================
       SAVOURIES
    ================================================= */

    savouries: {

        title: {
            en: "Savouries",
            ta: "கார வகைகள்"
        },

        description: {
            en: "Crispy and savoury favourites for every snack break.",
            ta: "ஒவ்வொரு சிற்றுண்டி நேரத்திற்கும் ஏற்ற மொறுமொறுப்பான கார வகைகள்."
        },

        heroImage: "images/products/savories1.png",

        items: [

            { en: "Traditional Mixture", ta: "பாரம்பரிய மிக்சர்" },
            { en: "Bombay Mixture", ta: "பம்பாய் மிக்சர்" },
            { en: "Munthiri Mixture", ta: "முந்திரி மிக்சர்" },
            { en: "Oma Podi", ta: "ஓமப்பொடி" },
            { en: "Cornflakes Mixture", ta: "கார்ன்ஃப்ளேக்ஸ் மிக்சர்" },
            { en: "Nuts & Lentil Mixture", ta: "நட்ஸ் & பருப்பு மிக்சர்" },
            { en: "Kara Sev", ta: "கார சேவ்" },
            { en: "Butter Murukku", ta: "பட்டர் முறுக்கு" },
            { en: "Mullu Murukku", ta: "முள்ளு முறுக்கு" },
            { en: "Ring Murukku", ta: "ரிங் முறுக்கு" },
            { en: "Andhra Murukku", ta: "ஆந்திர முறுக்கு" },
            { en: "Thenkuzhal Murukku", ta: "தேன்குழல் முறுக்கு" },
            { en: "Ribbon Murukku", ta: "ரிப்பன் முறுக்கு" },
            { en: "Chilli Murukku", ta: "மிளகாய் முறுக்கு" },
            { en: "Onion Pakoda", ta: "வெங்காய பகோடா" },
            { en: "Ragi Pakoda", ta: "ராகி பகோடா" },
            { en: "Pavakkai Chips", ta: "பாகற்காய் சிப்ஸ்" },
            {
                en: "Potato Chips (Lays Type)",
                ta: "உருளைக்கிழங்கு சிப்ஸ் (லேஸ் வகை)"
            },
            {
                en: "Big-Size Tapioca Chips (Maravalli Kizhangu)",
                ta: "பெரிய அளவு மரவள்ளிக்கிழங்கு சிப்ஸ்"
            },
            {
                en: "Stick-Type Tapioca Chips",
                ta: "ஸ்டிக் வகை மரவள்ளிக்கிழங்கு சிப்ஸ்"
            },
            { en: "Banana Chips", ta: "வாழைக்காய் சிப்ஸ்" },
            {
                en: "Potato Chips (Normal)",
                ta: "உருளைக்கிழங்கு சிப்ஸ் (சாதாரணம்)"
            },
            { en: "Spicy Lentils", ta: "கார பருப்பு" },
            { en: "Masala Groundnuts", ta: "மசாலா கடலை" },
            {
                en: "Spicy Pulses (Various Types of Pulses)",
                ta: "கார பருப்பு வகைகள்"
            },
            { en: "Onion Rings", ta: "வெங்காய ரிங்ஸ்" },
            { en: "Garlic Rings", ta: "பூண்டு ரிங்ஸ்" },
            { en: "Wheel Chips", ta: "வீல் சிப்ஸ்" },
            { en: "Thattai", ta: "தட்டை" },
            { en: "Kara Boondi", ta: "கார பூந்தி" },
            { en: "Pepper Kara Sev", ta: "மிளகு கார சேவ்" },
            { en: "Finger Chips", ta: "ஃபிங்கர் சிப்ஸ்" },
            { en: "Corn Chips", ta: "கார்ன் சிப்ஸ்" },
            { en: "Ellu Murukku", ta: "எள்ளு முறுக்கு" },
            { en: "Jeera Murukku", ta: "சீரக முறுக்கு" },
            { en: "Kurkure", ta: "குர்குரே" },
            { en: "Moong Dal", ta: "மூங் தால்" },

{ en: "Popcorn", ta: "பாப்கார்ன்" }

        ]
    },


    /* =================================================
       DAIRY PRODUCTS
    ================================================= */

    dairy: {

        title: {
            en: "Dairy Products",
            ta: "பால் பொருட்கள்"
        },

        description: {
            en: "Everyday dairy products available at the bakery.",
            ta: "பேக்கரியில் கிடைக்கும் அன்றாட பால் பொருட்கள்."
        },

        heroImage: "images/products/dairy.png",

        items: [

            { en: "Milk", ta: "பால்" },
            { en: "Curd", ta: "தயிர்" },
            { en: "Buttermilk", ta: "மோர்" },
            { en: "Butter", ta: "வெண்ணெய்" }

        ]
    },


    /* =================================================
       COOL DRINKS
    ================================================= */

    "cool-drinks": {

        title: {
            en: "Cool Drinks",
            ta: "குளிர்பானங்கள்"
        },

        description: {
            en: "Refreshing drinks and familiar favourites for a quick break.",
            ta: "புத்துணர்ச்சி தரும் குளிர்பானங்கள் மற்றும் அனைவரும் விரும்பும் பானங்கள்."
        },

        heroImage: "images/products/cooldrinks.png",

        items: [

            { en: "7UP", ta: "7UP" },
            { en: "Pepsi", ta: "பெப்சி" },
            { en: "Coke", ta: "கோக்" },
            { en: "Bovonto", ta: "பொவொண்டோ" },
            { en: "Panneer Soda", ta: "பன்னீர் சோடா" },
            { en: "Goli Soda", ta: "கோலி சோடா" },
            { en: "Thums Up", ta: "தம்ஸ் அப்" },
            { en: "Sprite", ta: "ஸ்ப்ரைட்" },
            { en: "Mountain Dew", ta: "மவுண்டன் டியூ" },
            { en: "Mirinda", ta: "மிரிண்டா" },
            { en: "Fanta", ta: "ஃபாண்டா" },
            { en: "Limca", ta: "லிம்கா" },
            { en: "Campa", ta: "கேம்பா" },
            { en: "Maaza", ta: "மாஸா" },
            { en: "Frooti", ta: "ஃப்ரூட்டி" },
            { en: "Slice", ta: "ஸ்லைஸ்" },
            { en: "Appy Fizz", ta: "ஆப்பி ஃபிஸ்" },
            { en: "Tender Coconut Sarbath", ta: "இளநீர் சர்பத்" },
            { en: "Rose Milk", ta: "ரோஸ் மில்க்" }

        ]
    },


    /* =================================================
       BISCUITS
    ================================================= */

    biscuits: {

        title: {
            en: "Biscuits",
            ta: "பிஸ்கட்டுகள்"
        },

        description: {
            en: "Packaged biscuits and tea-time favourites available at the bakery.",
            ta: "பேக்கரியில் கிடைக்கும் பேக்கேஜ் செய்யப்பட்ட பிஸ்கட்டுகள் மற்றும் தேநீர் நேர விருப்பங்கள்."
        },

        heroImage: "images/products/biscuits.png",

        items: [

            { en: "Milk Bikis", ta: "மில்க் பிகிஸ்" },
            { en: "Good Day", ta: "குட் டே" },
            {
                en: "Good Day (Choco Chips)",
                ta: "குட் டே (சாக்லேட் சிப்ஸ்)"
            },
            { en: "Marie Gold", ta: "மேரி கோல்ட்" },
            { en: "Oreo", ta: "ஓரியோ" },
            { en: "HiFi", ta: "ஹைஃபை" },
            { en: "Parle-G", ta: "பார்லே-ஜி" },
            { en: "Rusk", ta: "ரஸ்க்" },
            { en: "Lotte Choco Pie", ta: "லோட்டே சோகோ பை" },
            { en: "Hide & Seek", ta: "ஹைட் & சீக்" },
            { en: "Monaco & Krack Jack", ta: "மொனாக்கோ & கிராக் ஜாக்" },
            { en: "20-20", ta: "20-20" },
            { en: "NutriChoice", ta: "நியூட்ரிச்சாய்ஸ்" },
            { en: "50-50", ta: "50-50" },
            { en: "Dark Fantasy", ta: "டார்க் ஃபேண்டஸி" },
            { en: "Mom's Magic", ta: "மாம்ஸ் மேஜிக்" },
            { en: "Marie Light", ta: "மேரி லைட்" },
            { en: "Unibic", ta: "யூனிபிக்" },
            { en: "Jim Jam", ta: "ஜிம் ஜாம்" },
            { en: "Bourbon", ta: "போர்பன்" },
            {
                en: "Britannia Milk Bikis Cream Biscuit",
                ta: "பிரிட்டானியா மில்க் பிகிஸ் கிரீம் பிஸ்கட்"
            },
            { en: "Happy Happy", ta: "ஹாப்பி ஹாப்பி" }

        ]
    },


    /* =================================================
       TEA, COFFEE & MILK
    ================================================= */

    "tea-coffee-milk": {

        title: {
            en: "Tea, Coffee & Milk",
            ta: "தேநீர், காபி & பால்"
        },

        description: {
            en: "Tea, coffee and milk-based drinks to enjoy with your favourite snack.",
            ta: "உங்களுக்கு பிடித்த சிற்றுண்டியுடன் ரசிக்க தேநீர், காபி மற்றும் பால் சார்ந்த பானங்கள்."
        },

        heroImage: "images/products/tea.png",

        items: [

            { en: "Regular Tea", ta: "சாதாரண தேநீர்" },
            { en: "Ginger Tea", ta: "இஞ்சி தேநீர்" },
            { en: "Cardamom Tea", ta: "ஏலக்காய் தேநீர்" },
            { en: "Masala Tea", ta: "மசாலா தேநீர்" },
            { en: "Lemon Tea", ta: "எலுமிச்சை தேநீர்" },
            { en: "Green Tea", ta: "கிரீன் டீ" },
            { en: "Black Tea", ta: "பிளாக் டீ" },
            { en: "Filter Coffee", ta: "ஃபில்டர் காபி" },
            { en: "Regular Coffee", ta: "சாதாரண காபி" },
            { en: "Milk", ta: "பால்" },
            { en: "Badam Milk", ta: "பாதாம் பால்" },
            { en: "Chocolate Milk", ta: "சாக்லேட் பால்" },
            { en: "Horlicks", ta: "ஹார்லிக்ஸ்" },
            { en: "Boost", ta: "பூஸ்ட்" },
            { en: "Masala Milk", ta: "மசாலா பால்" }

        ]
    },


    /* =================================================
       CHOCOLATES
    ================================================= */

    chocolates: {

        title: {
            en: "Chocolates",
            ta: "சாக்லேட்கள்"
        },

        description: {
            en: "Popular chocolates, lollipops and chocolate gift options.",
            ta: "பிரபலமான சாக்லேட்கள், லாலிபாப்கள் மற்றும் சாக்லேட் பரிசுப் பெட்டி வகைகள்."
        },

        heroImage: "images/products/chocolate.png",

        items: [

            {
                en: "Dairy Milk (All Prices and Varieties)",
                ta: "டெய்ரி மில்க் (அனைத்து விலைகள் மற்றும் வகைகள்)"
            },
            { en: "Gems", ta: "ஜெம்ஸ்" },
            { en: "KitKat", ta: "கிட்கேட்" },
            { en: "Munch", ta: "மன்ச்" },
            { en: "Perk", ta: "பெர்க்" },
            { en: "Kinder Joy", ta: "கிண்டர் ஜாய்" },
            { en: "5 Star", ta: "5 ஸ்டார்" },
            { en: "Milky Bar", ta: "மில்கி பார்" },
            { en: "Melody", ta: "மெலடி" },
            { en: "Eclairs", ta: "எக்ளேர்ஸ்" },
            { en: "Snickers", ta: "ஸ்னிக்கர்ஸ்" },
            {
                en: "Lollipops (All Types and Flavours)",
                ta: "லாலிபாப்கள் (அனைத்து வகைகள் மற்றும் சுவைகள்)"
            },
            { en: "Fuse", ta: "ஃபியூஸ்" },
            { en: "Galaxy", ta: "கேலக்ஸி" },
            { en: "Hershey's", ta: "ஹெர்ஷீஸ்" },
            {
                en: "Birthday Chocolate Boxes (Wide Variety Available)",
                ta: "பிறந்தநாள் சாக்லேட் பெட்டிகள் (பல வகைகள் கிடைக்கும்)"
            },
            { en: "Bounty", ta: "பவுண்டி" },
            { en: "Bounty", ta: "பவுண்டி" },
{ en: "Bolts", ta: "போல்ட்ஸ்" },
{ en: "Mentos", ta: "மென்டோஸ்" },
{ en: "Toy Chocolates", ta: "டாய் சாக்லேட்கள்" }

        ]
    },
    /* =================================================
   DATES
================================================= */

dates: {

    title: {
        en: "Dates",
        ta: "பேரீச்சம்பழங்கள்"
    },

    description: {
        en: "A selection of dates available at the bakery.",
        ta: "பேக்கரியில் கிடைக்கும் பல்வேறு பேரீச்சம்பழ வகைகள்."
    },

    heroImage: "images/products/dates.png",

    items: [
        {
            en: "Kimia Dates (Lion Brand)",
            ta: "கிமியா பேரீச்சம்பழம் (லயன் பிராண்ட்)"
        },
        {
            en: "Qyon Dates",
            ta: "கியான் பேரீச்சம்பழம்"
        },
        {
            en: "Dessert Dates",
            ta: "டெசர்ட் பேரீச்சம்பழம்"
        }
    ]

},
/* =================================================
   DRY FRUITS
================================================= */

"dry-fruits": {

    title: {
        en: "Dry Fruits",
        ta: "உலர் பழங்கள்"
    },

    description: {
        en: "A selection of premium dry fruits available at the bakery.",
        ta: "பேக்கரியில் கிடைக்கும் தேர்ந்தெடுக்கப்பட்ட உலர் பழ வகைகள்."
    },

    heroImage: "images/products/dryfruits.png",

    items: [
        {
            en: "Badam",
            ta: "பாதாம்"
        },
        {
            en: "Pista",
            ta: "பிஸ்தா"
        },
        {
            en: "Cashew",
            ta: "முந்திரி"
        },
        {
            en: "Dry Grapes",
            ta: "உலர் திராட்சை"
        },
        {
            en: "Dry Fruits Mixing",
            ta: "உலர் பழ கலவை"
        }
    ]

},

    /* =================================================
       BAKED ITEMS
    ================================================= */

    "baked-items": {

        title: {
            en: "Baked Items",
            ta: "பேக்கரி உணவுகள்"
        },

        description: {
            en: "Fresh bakery favourites including puffs, buns, bread, cookies, rolls and more.",
            ta: "பஃப்ஸ், பன்கள், பிரெட், குக்கீஸ், ரோல்ஸ் மற்றும் பல புதிய பேக்கரி உணவுகள்."
        },

        /*
           No real baked-item image was supplied.
           Therefore we do not use a fake image.
        */
        heroImage: "images/products/baked.jpg",

        items: [

            { en: "Veg Puffs", ta: "வெஜ் பஃப்ஸ்" },
            { en: "Egg Puffs", ta: "முட்டை பஃப்ஸ்" },
            { en: "Chicken Puffs", ta: "சிக்கன் பஃப்ஸ்" },
            { en: "Bread", ta: "பிரெட்" },
            { en: "Bun", ta: "பன்" },
            { en: "Cream Bun", ta: "கிரீம் பன்" },
            { en: "Coconut Bun", ta: "தேங்காய் பன்" },
            { en: "Jam Bun", ta: "ஜாம் பன்" },
            { en: "Dhilpis", ta: "தில்பிஸ்" },
            { en: "Plain Cake", ta: "பிளைன் கேக்" },
            { en: "Sponge Cake", ta: "ஸ்பாஞ்ச் கேக்" },
            { en: "Plum Cake", ta: "பிளம் கேக்" },
            { en: "Fruit Cake", ta: "ஃப்ரூட் கேக்" },
            { en: "Sandwich", ta: "சாண்ட்விச்" },
            { en: "Butter Cookies", ta: "பட்டர் குக்கீஸ்" },
            { en: "Coconut Cookies", ta: "தேங்காய் குக்கீஸ்" },
            { en: "Chocolate Cookies", ta: "சாக்லேட் குக்கீஸ்" },
            { en: "Salt Biscuits", ta: "சால்ட் பிஸ்கட்கள்" },
            { en: "Jeera Biscuits", ta: "சீரக பிஸ்கட்கள்" },
            { en: "Vanilla Roll", ta: "வனிலா ரோல்" },
            { en: "Cream Roll", ta: "கிரீம் ரோல்" },
            { en: "Chocolate Roll", ta: "சாக்லேட் ரோல்" },
            { en: "Brownie", ta: "பிரவுனி" },
            { en: "Tea Cake", ta: "டீ கேக்" }

        ]
    },


    /* =================================================
       ICE CREAM
    ================================================= */

    "ice-cream": {

        title: {
            en: "Ice Cream",
            ta: "ஐஸ்கிரீம்"
        },

        description: {
            en: "Ice creams, frozen treats and family packs for a refreshing finish.",
            ta: "புத்துணர்ச்சியான அனுபவத்திற்கான ஐஸ்கிரீம்கள், குளிர்ச்சியான இனிப்புகள் மற்றும் குடும்பப் பேக்குகள்."
        },

        heroImage: "images/products/icecream.png",

        items: [

            {
                en: "Ice Candies & Fruit Bars",
                ta: "ஐஸ் கேண்டிகள் & ஃப்ரூட் பார்கள்"
            },
            {
                en: "Traditional Kulfi",
                ta: "பாரம்பரிய குல்ஃபி"
            },
            {
                en: "Cone Ice Cream",
                ta: "கோன் ஐஸ்கிரீம்"
            },
            {
                en: "Cup Ice Cream",
                ta: "கப் ஐஸ்கிரீம்"
            },
            {
                en: "Ball Ice Cream",
                ta: "பால் ஐஸ்கிரீம்"
            },
            {
                en: "Family Pack",
                ta: "ஃபேமிலி பேக்"
            },
            {
                en: "Vanilla",
                ta: "வனிலா"
            },
            {
                en: "Butterscotch",
                ta: "பட்டர்ஸ்காட்ச்"
            },
            {
                en: "Chocolate",
                ta: "சாக்லேட்"
            },
            {
                en: "Blackcurrant",
                ta: "பிளாக் கரண்ட்"
            },
            {
                en: "Strawberry",
                ta: "ஸ்ட்ராபெர்ரி"
            },
            {
                en: "Red Velvet",
                ta: "ரெட் வெல்வெட்"
            },
            {
                en: "Pista",
                ta: "பிஸ்தா"
            },
            {
                en: "Badam",
                ta: "பாதாம்"
            }

        ]
    }

};


/* =========================================================
   GLOBAL STATE
========================================================= */

let currentCategory = null;
let currentCategoryKey = null;
let currentLanguage = "en";


/* =========================================================
   CATEGORY LANGUAGE UPDATE
========================================================= */

function updateCategoryLanguage(language) {

    if (!currentCategory) {
        return;
    }

    currentLanguage =
        language === "ta" ? "ta" : "en";


    const title =
        document.getElementById("category-title");

    const description =
        document.getElementById("category-description");

    const heading =
        document.getElementById("listing-heading");

    const productContainer =
        document.getElementById("product-list");

    const whatsapp =
        document.getElementById("category-whatsapp");


    /* CATEGORY TITLE */

    if (title) {

        title.textContent =
            currentCategory.title[currentLanguage];

    }


    /* CATEGORY DESCRIPTION */

    if (description) {

        description.textContent =
            currentCategory.description[currentLanguage];

    }


    /* PRODUCT SECTION HEADING */

    if (heading) {

        if (currentLanguage === "ta") {

            heading.textContent =
                `எங்கள் ${currentCategory.title.ta}`;

        } else {

            heading.textContent =
                `Our ${currentCategory.title.en.toLowerCase()}`;

        }

    }


    /* PRODUCT LIST */

    if (productContainer) {

        productContainer.innerHTML =
            currentCategory.items
                .map((item, index) => {

                    return `
                        <article class="menu-item">

                            <span class="menu-number">
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            <div class="menu-item-content">

                               <h3>
    ${
        currentLanguage === "ta"
            ? item.ta
                .split(" ")
                .map(word => `<span class="tamil-word">${word}</span>`)
                .join(" ")
            : item.en
    }
</h3>

                                <p>
                                    ${
                                        currentLanguage === "ta"
                                            ? "பேக்கரியில் கிடைக்கும்"
                                            : "Available at the bakery"
                                    }
                                </p>

                            </div>

                            <span class="menu-arrow">
                                →
                            </span>

                        </article>
                    `;

                })
                .join("");

    }


    /* WHATSAPP MESSAGE */

    if (whatsapp) {

        let message;

        if (currentLanguage === "ta") {

            message =
                `வணக்கம், ${currentCategory.title.ta} பற்றி தெரிந்துகொள்ள விரும்புகிறேன்.`;

        } else {

            message =
                `Hi, I would like to ask about ${currentCategory.title.en}.`;

        }

        whatsapp.href =
            `https://wa.me/919659487423?text=${encodeURIComponent(message)}`;

    }


    /* PAGE TITLE */

    document.title =
        `${currentCategory.title[currentLanguage]} | Sri Venkateswara Iyengar Bakery & Sweets`;

}


/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

function setLanguage(language) {
        localStorage.setItem(
        "siteLanguage",
        language === "ta" ? "ta" : "en"
    );

    currentLanguage =
        language === "ta" ? "ta" : "en";


    document.documentElement.lang =
        currentLanguage;


    /* STATIC HTML TRANSLATIONS */

    document
        .querySelectorAll("[data-en]")
        .forEach(element => {

            if (currentLanguage === "ta") {

                element.textContent =
                    element.dataset.ta ||
                    element.dataset.en;

            } else {

                element.textContent =
                    element.dataset.en;

            }

        });


    /* CATEGORY PAGE */

    updateCategoryLanguage(currentLanguage);


    /* LANGUAGE BUTTONS */

    const englishBtn =
        document.getElementById("englishBtn");

    const tamilBtn =
        document.getElementById("tamilBtn");


    englishBtn?.classList.toggle(
        "active",
        currentLanguage === "en"
    );


    tamilBtn?.classList.toggle(
        "active",
        currentLanguage === "ta"
    );

}


/* =========================================================
   CATEGORY PAGE INITIALIZATION
========================================================= */

function initializeCategoryPage() {

    const productList =
        document.getElementById("product-list");


    /*
       Homepage does not contain product-list.
       Therefore nothing needs to happen there.
    */

    if (!productList) {

        return;

    }


    /* GET CATEGORY FROM URL */

    const params =
        new URLSearchParams(
            window.location.search
        );


    const requestedKey =
        params.get("category");


    /*
       If the requested category exists,
       use it.

       Otherwise default to sweets.
    */

    currentCategoryKey =
        requestedKey &&
        categories[requestedKey]
            ? requestedKey
            : "sweets";


    currentCategory =
        categories[currentCategoryKey];


    /* SAVE GLOBAL REFERENCES */

    window.currentCategory =
        currentCategory;

    window.currentCategoryKey =
        currentCategoryKey;


    /* CATEGORY HERO IMAGE */

    const heroImage =
        document.getElementById(
            "category-hero-image"
        );


    const heroPhoto =
        document.querySelector(
            ".category-hero-photo"
        );


    if (
        heroImage &&
        heroPhoto
    ) {

        if (
            currentCategory.heroImage
        ) {

            heroImage.src =
                currentCategory.heroImage;


            heroImage.alt =
                currentCategory.title.en;


            heroPhoto.classList.remove(
                "no-category-image"
            );

        } else {

            /*
               Baked Items has no real
               photo supplied.
            */

            heroImage.removeAttribute(
                "src"
            );


            heroImage.alt =
                "";


            heroPhoto.classList.add(
                "no-category-image"
            );

        }

    }


    /* INITIAL LANGUAGE */

  const savedCategoryLanguage =
    localStorage.getItem("siteLanguage") === "ta"
        ? "ta"
        : "en";

updateCategoryLanguage(savedCategoryLanguage);

}


/* =========================================================
   DOM CONTENT LOADED
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =====================================================
           SMOOTH SCROLLING
        ===================================================== */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(link => {

                link.addEventListener(
                    "click",
                    event => {

                        const targetId =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            targetId &&
                            targetId !== "#"
                        ) {

                            const target =
                                document.querySelector(
                                    targetId
                                );


                            if (target) {

                                event.preventDefault();


                                target.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });

                            }

                        }

                    }
                );

            });


        /* =====================================================
           MOBILE MENU
        ===================================================== */

        const menuButton =
            document.querySelector(
                ".menu-button"
            );


        const mobileNav =
            document.querySelector(
                ".mobile-nav"
            );


        if (
            menuButton &&
            mobileNav
        ) {


            /* OPEN / CLOSE MENU */

            menuButton.addEventListener(
                "click",
                () => {

                    const isOpen =
                        mobileNav.classList.toggle(
                            "open"
                        );


                    menuButton.setAttribute(
                        "aria-expanded",
                        String(isOpen)
                    );

                }
            );


            /* CLOSE MENU AFTER CLICK */

            mobileNav
                .querySelectorAll("a")
                .forEach(link => {

                    link.addEventListener(
                        "click",
                        () => {

                            mobileNav.classList.remove(
                                "open"
                            );


                            menuButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }
                    );

                });

        }


        /* =====================================================
           BACK TO TOP
        ===================================================== */

        const backTop =
            document.querySelector(
                ".back-top"
            );


        if (backTop) {

            window.addEventListener(
                "scroll",
                () => {

                    if (
                        window.scrollY > 500
                    ) {

                        backTop.classList.add(
                            "show"
                        );

                    } else {

                        backTop.classList.remove(
                            "show"
                        );

                    }

                }
            );


            backTop.addEventListener(
                "click",
                () => {

                    window.scrollTo({

                        top: 0,

                        behavior: "smooth"

                    });

                }
            );

        }


        /* =====================================================
           FOOTER YEAR
        ===================================================== */

        const yearElements =
            document.querySelectorAll(
                "#year"
            );


        yearElements.forEach(
            element => {

                element.textContent =
                    new Date().getFullYear();

            }
        );


        /* =====================================================
           LANGUAGE BUTTONS
        ===================================================== */

        document
            .getElementById("englishBtn")
            ?.addEventListener(
                "click",
                () => {

                    setLanguage("en");

                }
            );


        document
            .getElementById("tamilBtn")
            ?.addEventListener(
                "click",
                () => {

                    setLanguage("ta");

                }
            );


        /* =====================================================
           CATEGORY PAGE
        ===================================================== */

        initializeCategoryPage();


        /* =====================================================
           WEBSITE ALWAYS STARTS IN ENGLISH
        ===================================================== */

       /*
   Remember the language selected by the user.
   Default to English only on the first visit.
*/

const savedLanguage =
    localStorage.getItem("siteLanguage") === "ta"
        ? "ta"
        : "en";

setLanguage(savedLanguage);

    }
);