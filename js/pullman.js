let show = document.getElementById("show");
let hide = document.getElementById("hide");
let menu = document.getElementById("menu");

menu.onclick = function () {
  show.style.width = "100%";
};
hide.onclick = function () {
  show.style.width = "0";
};

let translations = {
  en: {
    home: "Home",
    contact: "Contact Us",
    about: "About Us",
    language: "Language :",
    english: "English",
    arabic: "Arabic",
    turkish: "Turkish",
    buyTicket: "Buy A Ticket At The Best Prices",
    buyNow: "Buy Now In Less Than Two Minutes",
    startingCity: "Starting City",
    accessCity: "Access City",
    depertureDate: "Departure Date",
    passenger: "Passenger",
    search: "Search",
    services: "Services",
    offerYou: "What We Offer You",
    improvement: "Improvement",
    continued: "Continued Insestment In High-End Transport Development",
    contact: "Contact",
    lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    tourism: "Tourism",
    trasport: "Transport",
    topPlaces: "Top Places",
    fatih: "Fatih",
    istanbul: "Istanbul",
    price: "Price",
    conatct: "Conatct",
    istanbulTurkey: "Istanbul, Turkye",
  },
  ar: {
    home: "الصفحة الرئيسية",
    contact: "تواصل معنا",
    about: "من نحن",
    language: "اللغة",
    english: "انكليزي",
    arabic: "عربي",
    turkish: "تركي",
    buyTicket: "اشتري التذكرة بأفضل الاسعار",
    buyNow: "اشتري الان بأقل من دقيقتين",
    startingCity: "الانطلاق",
    accessCity: "الوصول",
    depertureDate: "تاريخ المغادرة",
    passenger: "راكب",
    search: "بحث",
    services: "الخدمات",
    offerYou: "ماذا نقدم لك",
    improvement: "تحسين",
    continued: "استمرار الإصرار على تطوير النقل الراقي",
    lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    tourism: "سياحة",
    trasport: "مواصلات",
    topPlaces: "افضل الاماكن",
    fatih: "Fatih",
    istanbul: "Istanbul",
    price: "السعر",
    istanbulTurkey: "Istanbul, Turkye",
  },
  tr: {
    home: "Ana Sayfa",
    contact: "İletişim",
    about: "Hakkında",
    language: "Dil :",
    english: "İngilizce",
    arabic: "Arapça",
    turkish: "Türkçe",
    buyTicket: "En iyi fıatlardan bilet satın alın",
    buyNow: "Şimdi iki dakikadan kısa sürede satın alın",
    startingCity: "Nereden",
    accessCity: "Nereye",
    depertureDate: "Gidiş tarihi",
    passenger: "Yolcu",
    search: "Ara",
    services: "Hizmetler",
    offerYou: "Size sunduğumuz",
    improvement: "Gelişme",
    continued: "Üst düzey taşımacıklık gelişiminde devem eden çökelti",
    lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    tourism: "Turizm",
    trasport: "Ulaşım",
    topPlaces: "En iyi yerleri",
    fatih: "Fatih",
    istanbul: "Istanbul",
    price: "Fiyat",
    istanbulTurkey: "Istanbul, Türkiye",
  },
};

let languageSelector = document.getElementById("language");
let option = document.querySelector("option");
languageSelector.addEventListener("change", (e) => {
  setLanguage(e.target.value);
  localStorage.setItem("lan", e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("lan"));
  if (localStorage.getItem("lan") == "ar") {
    document.querySelector('[value="ar"]').setAttribute("selected", "");
  } else if (localStorage.getItem("lan") == "tr") {
    document.querySelector('[value="ar"]').setAttribute("selected", "");
  }
});
let setLanguage = (language) => {
  let elements = document.querySelectorAll("[data-lan]");
  elements.forEach((element) => {
    let translat = element.getAttribute("data-lan");
    element.textContent = translations[language][translat];
  });
  if (language == "ar") {
    document.dir = "rtl";
  } else {
    document.dir = "ltr";
  }
};

let startingCity = document.getElementById("startingCity");
let accessCity = document.getElementById("accessCity");
let dropdown = document.getElementById("dropdown");

let arr = [
  "ADANA",
  "ADIYAMAN",
  "AFYONKARAHİSAR",
  "AĞRI",
  "AMASYA",
  "ANKARA",
  "ANTALYA",
  "ARTVİN",
  "AYDIN",
  "BALIKESİR",
  "BİLECİK",
  "BİNGÖL",
  "BİTLİS",
  "BOLU",
  "BURDUR",
  "BURSA",
  "ÇANAKKALE",
  "ÇANKIRI",
  "ÇORUM",
  "DENİZLİ",
  "DİYARBAKIR",
  "EDİRNE",
  "ELAZIĞ",
  "ERZİNCAN",
  "ERZURUM",
  "ESKİŞEHİR",
  "GAZİANTEP",
  "GİRESUN",
  "GÜMÜŞHANE",
  "HAKKARİ",
  "HATAY",
  "ISPARTA",
  "MERSİN",
  "İSTANBUL",
  "İZMİR",
  "KARS",
  "KASTAMONU",
  "KAYSERİ",
  "KIRKLARELİ",
  "KIRŞEHİR",
  "KOCAELİ",
  "KONYA",
  "KÜTAHYA",
  "MALATYA",
  "MANİSA",
  "KAHRAMANMARAŞ",
  "MARDİN",
  "MUĞLA",
  "MUŞ",
  "NEVŞEHİR",
  "NİĞDE",
  "ORDU",
  "RİZE",
  "SAKARYA",
  "SAMSUN",
  "SİİRT",
  "SİNOP",
  "SİVAS",
  "TEKİRDAĞ",
  "TOKAT",
  "TRABZON",
  "TUNCELİ",
  "ŞANLIURFA",
  "UŞAK",
  "VAN",
  "YOZGAT",
  "ZONGULDAK",
  "AKSARAY",
  "BAYBURT",
  "KARAMAN",
  "KIRIKKALE",
  "BATMAN",
  "ŞIRNAK",
  "BARTIN",
  "ARDAHAN",
  "IĞDIR",
  "YALOVA",
  "KARABÜK",
  "KİLİS",
  "OSMANİYE",
  "DÜZCE",
];
let cities = "";

startingCity.onclick = function () {
  dropdown.classList.toggle("show");
  cityContent();
};
accessCity.onclick = function () {
  dropdownAccess.classList.toggle("show");
  cityContentAccess();
};
// #######
console.log((dropdownAccess.getAttribute(('[class="dropdown-content show"]'))))

if ((dropdown.hasAttribute('class="show"'))) {
  dropdownAccess.classList= "dropdown-content";
}if ((dropdownAccess.hasAttribute('class="show"'))) {
  dropdown.classList= "dropdown-content";
}
// #######
function cityContentAccess() {
  for (let i = 0; i < arr.length; i++) {
    let mainDiv = document.createElement("div");
    let textDiv = document.createTextNode(arr[i]);
    mainDiv.classList = "item";
    mainDiv.appendChild(textDiv);
    dropdownAccess.appendChild(mainDiv);
  }
}
function cityContent() {
  for (let i = 0; i < arr.length; i++) {
    let mainDiv = document.createElement("div");
    let textDiv = document.createTextNode(arr[i]);
    mainDiv.classList = "item";
    mainDiv.appendChild(textDiv);
    dropdown.appendChild(mainDiv);
  }
}
