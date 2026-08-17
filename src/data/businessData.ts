export interface MenuItem {
  id: string;
  name: string;
  category: 'tostlar' | 'atistirmaliklar' | 'icecekler';
  description: string;
  image: string;
  highlight?: string;
  isPopular?: boolean;
  tags: string[];
  ingredients?: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  timeAgo?: string;
  highlightText?: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
}

export const BUSINESS_INFO = {
  name: "Huzur Büfe",
  tagline: "Lezzetin Adresi Huzur Büfe",
  subtitle: "Taptaze tostlar, sıcak çay, poğaça, börek ve daha fazlası...",
  district: "Yenibosna / Bahçelievler",
  city: "İstanbul",
  fullAddress: "Yenibosna Merkez, 29 Ekim Cd., 34197 Bahçelievler/İstanbul",
  phone: "0212 639 32 40",
  phoneRaw: "02126393240",
  phoneCallUrl: "tel:02126393240",
  googleRating: 4.0,
  googleReviewCount: 6,
  openingHoursDisplay: "Açık · Kapanış 19:00",
  workingHours: [
    { days: "Pazartesi - Cuma", hours: "07:00 - 19:00" },
    { days: "Cumartesi", hours: "07:00 - 19:00" },
    { days: "Pazar", hours: "08:00 - 17:00" }
  ],
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Huzur+B%C3%BCfe+Yenibosna+Merkez+29+Ekim+Cd+34197+Bah%C3%A7elievler+%C4%B0stanbul",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Yenibosna%20Merkez,%2029%20Ekim%20Cd.,%2034197%20Bah%C3%A7elievler/%C4%B0stanbul&t=&z=16&ie=UTF8&iwloc=&output=embed",
  aboutShort: "Yenibosna 29 Ekim Caddesi üzerinde, sıcacık esnaf samimiyetiyle hazırlanan çıtır tostlar, demli çay, günlük taze poğaça ve börek çeşitleriyle gün boyu hizmetinizdeyiz. İster hızlıca paket alın, ister ferah oturma alanımızda keyifle vakit geçirin.",
  featuredQuote: {
    text: "İstanbul'da yediğim en güzel tostun adresi kesinlikle denenmeli 👌",
    author: "hüseyin furkan akgül",
    rating: 5
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // TOSTLAR
  {
    id: "kavurmali-tost",
    name: "Kavurmalı Tost",
    category: "tostlar",
    description: "Özel kavurma eti, eriyen bol taze kaşar peyniri ve çıtır kızarmış ekmek lezzeti. Damaklarda unutulmaz bir tat bırakan imza lezzetimiz.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    highlight: "En Çok Tercih Edilen",
    isPopular: true,
    tags: ["Özel Kavurma", "Bol Kaşar", "Çıtır Ekmek"],
    ingredients: ["Özel Dana Kavurma", "Taze Kaşar Peyniri", "Tereyağı", "Kızarmış Ekmek"]
  },
  {
    id: "sucuklu-tost",
    name: "Sucuklu Tost",
    category: "tostlar",
    description: "Geleneksel baharatlı dana sucuk dilimleri ve isteğe göre kaşarla zenginleştirilmiş, altın sarısı kızarmış klasik esnaf tostu.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    highlight: "Klasik Esnaf Lezzeti",
    isPopular: true,
    tags: ["Baharatlı Sucuk", "Çıtır", "Doyurucu"],
    ingredients: ["Kaliteli Dana Sucuk", "Tereyağlı Kızartma", "Özel Baharat"]
  },
  {
    id: "kasarli-tost",
    name: "Kaşarlı Tost",
    category: "tostlar",
    description: "Taptaze uzayan lezzetli kaşar peynirinin nar gibi kızarmış ekmekle mükemmel uyumu. Çayın ve kahvaltının en iyi eşlikçisi.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    highlight: "Her Öğünün Favorisi",
    isPopular: true,
    tags: ["Bol Kaşar", "Sıcak & Eriyik", "Klasik"],
    ingredients: ["Taze Kaşar Peyniri", "Doğal Tereyağı", "Çıtır Tost Ekmeği"]
  },
  {
    id: "karisik-tost",
    name: "Karışık Tost",
    category: "tostlar",
    description: "Sucuk ve kaşarın enfes buluşması. Dileyenler için kavurma ilavesiyle hazırlanan zengin içerikli doyurucu tost.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    highlight: "Zengin İçerik",
    isPopular: false,
    tags: ["Sucuk + Kaşar", "Çift Malzeme", "Sıcak Servis"],
    ingredients: ["Dana Sucuk", "Kaşar Peyniri", "Özel Tereyağı"]
  },

  // ATIŞTIRMALIKLAR
  {
    id: "pogaca",
    name: "Günlük Poğaça Çeşitleri",
    category: "atistirmaliklar",
    description: "Peynirli, zeytinli, patatesli ve sade seçenekleriyle fırından her sabah taze çıkan yumuşacık ve sıcacık poğaçalar.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    highlight: "Her Sabah Fırından Taze",
    isPopular: true,
    tags: ["Peynirli", "Zeytinli", "Sade", "Yumuşacık"],
    ingredients: ["Geleneksel Hamur", "Taze Peynir / Zeytin Harcı"]
  },
  {
    id: "borek",
    name: "Çıtır Börek Çeşitleri",
    category: "atistirmaliklar",
    description: "İncecik açılmış yufkası ve bol iç malzemesiyle nar gibi kızaran kıymalı, peynirli ve patatesli çıtır börek dilimleri.",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80",
    highlight: "Gevrek & Lezzetli",
    isPopular: true,
    tags: ["Peynirli", "Kıymalı", "Altın Sarısı"],
    ingredients: ["El Açması Yufka", "Taze İç Harç", "Özel Pişirme"]
  },
  {
    id: "sosisli",
    name: "Özel Soslu Sosisli",
    category: "atistirmaliklar",
    description: "Yumuşacık sandviç ekmeğinde özel domates-salçalı sosu, turşusu ve isteğe bağlı ketçap/mayonez ile servis edilen enfes sosisli.",
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80",
    highlight: "Özel Büfe Sosuyla",
    isPopular: true,
    tags: ["Özel Sos", "Sıcak Sosis", "Pratik Atıştırmalık"],
    ingredients: ["Kaliteli Sosis", "Özel Domates Sosu", "Sandviç Ekmeği", "Kornişon Turşu"]
  },

  // İÇECEKLER
  {
    id: "cay",
    name: "Taze Demli Rize Çayı",
    category: "icecekler",
    description: "Tostunuzun ve sohbetinizin en sadık dostu; ince belli bardakta servis edilen taze, tavşan kanı demli Karadeniz çayı.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    highlight: "Sürekli Taze & Sıcak",
    isPopular: true,
    tags: ["Tavşan Kanı", "İnce Belli", "Doğal Demleme"],
    ingredients: ["Karadeniz Yaprak Çayı", "Taze Dem"]
  },
  {
    id: "soguk-icecekler",
    name: "Soğuk İçecekler",
    category: "icecekler",
    description: "Buz gibi ayran, kutu meşrubatlar, maden suyu, şalgam ve soğuk meyve suları ile tost keyfinizi tamamlayın.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    highlight: "Buz Gibi Ferahlık",
    isPopular: false,
    tags: ["Köpüklü Ayran", "Meşrubatlar", "Maden Suyu", "Su"],
    ingredients: ["Soğuk Saklama", "Geniş Çeşit"]
  }
];

export const WHY_US_ITEMS = [
  {
    icon: "🥪",
    title: "Lezzetli Tostlar",
    description: "Günün her saatinde sıcak, taze malzemeli ve doyurucu çıtır tost seçenekleri.",
    detail: "Özel kavurmalı, geleneksel sucuklu ve eriyen kaşarlı tostlarımızı kaliteli ekmek ve tereyağıyla pişiriyoruz."
  },
  {
    icon: "☕",
    title: "Sıcak Çay",
    description: "Tostunuzun yanında taze demlenmiş tavşan kanı bir çay keyfi.",
    detail: "Sürekli tazelenen semaver ve demlik çayımızla kahvaltınız ve molalarınız lezzete dönüşür."
  },
  {
    icon: "🥐",
    title: "Günlük Atıştırmalıklar",
    description: "Poğaça, börek ve özel soslu sosisli seçenekleri.",
    detail: "Sabahın erken saatlerinden itibaren taze poğaçalar ve çıtır börekler gün boyu sizi bekliyor."
  },
  {
    icon: "🪑",
    title: "Oturup Dinlenin",
    description: "Yemeğinizi ve çayınızı rahatça tüketebileceğiniz oturma alanı.",
    detail: "Ayakta beklemeden, huzurlu ve samimi mahalle atmosferimizde oturup çayınızı yudumlayabilirsiniz."
  }
];

// All 6 real, unmodified Google reviews provided by the user
export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "hüseyin furkan akgül",
    rating: 5,
    text: "İstanbulda yediğim en güzel tostun adresi kesinlikle denenmeli 👌",
    timeAgo: "Doğrulanmış Müşteri",
    highlightText: "İstanbul'da yediğim en güzel tost!",
    verified: true
  },
  {
    id: "rev-2",
    author: "Atalay Yıldız",
    rating: 5,
    text: "Çok iyi dükkan her yiyecekleri lezzetli güzel temiz kalpli esnaf",
    timeAgo: "Doğrulanmış Müşteri",
    highlightText: "Temiz kalpli esnaf, her yiyecek lezzetli",
    verified: true
  },
  {
    id: "rev-3",
    author: "Ege Alperen Kuru",
    rating: 5,
    text: "Şahane bir yer mutlaka gidin derim",
    timeAgo: "Doğrulanmış Müşteri",
    highlightText: "Şahane bir yer mutlaka gidin",
    verified: true
  },
  {
    id: "rev-4",
    author: "Shohruh Raimov",
    rating: 5,
    text: "Bir büfe için gereken her şey var.",
    timeAgo: "Doğrulanmış Müşteri",
    highlightText: "Gereken her şey var",
    verified: true
  },
  {
    id: "rev-5",
    author: "İslam Karadag",
    rating: 3,
    text: "Hijyen konusunda iyi diyemedim tost da taş gibi olmuştu 😀 ama çay güzel 👍",
    timeAgo: "Doğrulanmış Müşteri",
    verified: true
  },
  {
    id: "rev-6",
    author: "İbrahim Yıldırım",
    rating: 1,
    text: "Yeni",
    timeAgo: "Doğrulanmış Müşteri",
    verified: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Kavurmalı & Kaşarlı Çıtır Tost",
    category: "Tostlar",
    imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
    caption: "Bol malzemeli, altın sarısı kızarmış sıcak tostumuz"
  },
  {
    id: "gal-2",
    title: "Taze Demli İnce Belli Çay",
    category: "İçecekler",
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80",
    caption: "Her saat taze, tavşan kanı çay keyfi"
  },
  {
    id: "gal-3",
    title: "Geleneksel Baharatlı Sucuklu Tost",
    category: "Tostlar",
    imageUrl: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=80",
    caption: "Hakiki dana sucuklu ve tereyağlı çıtır lezzet"
  },
  {
    id: "gal-4",
    title: "Fırından Yeni Çıkan Poğaçalar",
    category: "Atıştırmalıklar",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    caption: "Her sabah taze peynirli, zeytinli ve sade poğaçalar"
  },
  {
    id: "gal-5",
    title: "Altın Sarısı Çıtır Börek",
    category: "Atıştırmalıklar",
    imageUrl: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=900&q=80",
    caption: "Sıcak ve gevrek iç harçlı börek çeşitlerimiz"
  },
  {
    id: "gal-6",
    title: "Özel Büfe Soslu Sosisli",
    category: "Atıştırmalıklar",
    imageUrl: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=900&q=80",
    caption: "Özel domatesli sosu ve turşusuyla hızlı doyurucu sosisli"
  },
  {
    id: "gal-7",
    title: "Sıcak & Samimi Oturma Alanı",
    category: "Mekan",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
    caption: "Çayınızı yudumlayıp tostun tadını çıkarabileceğiniz rahat alan"
  },
  {
    id: "gal-8",
    title: "Büfe Vitrini & Hızlı Servis",
    category: "Mekan",
    imageUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80",
    caption: "Yenibosna 29 Ekim Caddesi üzerinde güler yüzlü hizmet"
  }
];

export const SEO_KEYWORDS = [
  "Huzur Büfe",
  "Yenibosna büfe",
  "Bahçelievler büfe",
  "Yenibosna tost",
  "Bahçelievler tost",
  "Yenibosna kahvaltı",
  "Yenibosna çay",
  "Yenibosna poğaça",
  "Yenibosna börek",
  "Yenibosna sosisli",
  "29 Ekim Caddesi tost",
  "Kavurmalı tost Yenibosna",
  "Sucuklu tost Bahçelievler"
];
