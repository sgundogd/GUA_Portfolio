// KATEGORİ & PROJE VERİLERİ — tek yerde topluyoruz
// Görsel yollarını kendi dosyalarına göre düzenle.
// Ör: /public/projects/hotel/sheraton/1.jpg ...

export const PROJECTS_DATA = {
  hotel: {
    title: "Hotels",
    desc: "Luxury hospitality and accommodation projects.",
    projects: [
            {
        slug: "nirvana-dolce-vita",
        title: "Nirvana Dolce Vita",
        cover: "/projects/hotel/nirvana/1.avif",
        images: [
          "/projects/hotel/nirvana/1.avif",
          "/projects/hotel/nirvana/2.avif",
          "/projects/hotel/nirvana/3.avif",
          "/projects/hotel/nirvana/4.avif",
        ],
      },

      {
        slug: "kaya-palazzo",
        title: "Kaya Palazzo Golf Resort",
        cover: "/projects/hotel/kaya/3.jpg",
        images: [
          "/projects/hotel/kaya/1.jpg",
          "/projects/hotel/kaya/2.avif",
          "/projects/hotel/kaya/3.jpg",
          "/projects/hotel/kaya/4.jpg",
          "/projects/hotel/kaya/5.avif",
          "/projects/hotel/kaya/6.avif",
        ],
      },
      {
        slug: "titanic-golf-belek",
        title: "Titanic Golf Belek",
        cover: "/projects/hotel/titanic/9.jpg",
        images: [
          
          "/projects/hotel/titanic/6.jpg",
          "/projects/hotel/titanic/7.jpg",
          "/projects/hotel/titanic/8.avif",
          "/projects/hotel/titanic/9.jpg",
          "/projects/hotel/titanic/10.avif",
          "/projects/hotel/titanic/11.jpg",
          "/projects/hotel/titanic/12.avif",
          "/projects/hotel/titanic/13.avif",
          "/projects/hotel/titanic/14.avif",
          "/projects/hotel/titanic/1.avif",
          "/projects/hotel/titanic/2.jpg",
          "/projects/hotel/titanic/3.avif",
          "/projects/hotel/titanic/4.avif",
          "/projects/hotel/titanic/5.avif",
        ],
      },
            {
        slug: "sheraton-batumi",
        title: "Sheraton Batumi Hotel",
        cover: "/projects/hotel/sheraton/3.jpg",
        images: [
          "/projects/hotel/sheraton/1.jpg",
          "/projects/hotel/sheraton/2.jpg",
          "/projects/hotel/sheraton/3.jpg",
          "/projects/hotel/sheraton/4.jpg",
        ],
      },

    ],
  },

  business: {
    title: "Business",
    desc: "Corporate offices and executive workspaces.",
    projects: [
      {
        slug: "fashion-boutique",
        title: "Fashion Boutique Interior",
        cover: "/projects/office/fashion/1.jpg",
        images: [
          "/projects/office/fashion/1.jpg",
          "/projects/office/fashion/2.jpg",
          "/projects/office/fashion/3.jpg",
        ],
      },
      {
        slug: "levent-office",
        title: "Levent Office",
        cover: "/projects/office/office/1.jpg",
        images: [
          "/projects/office/office/1.jpg",
          "/projects/office/office/2.jpg",
          "/projects/office/office/3.jpg",
        ],
      },
    ],
  },

  home: {
    title: "Home",
    desc: "Private residences and high-end apartments.",
    projects: [
      {
        slug: "multi-bed-kids-room",
        title: "Multi-Bed Kids Room",
        cover: "/projects/home/multi-bed/1.jpg",
        images: [
          "/projects/home/multi-bed/cover.jpg",
          "/projects/home/multi-bed/1.jpg",
          "/projects/home/multi-bed/2.jpg",
          "/projects/home/multi-bed/3.jpg",
          "/projects/home/multi-bed/4.jpg",
          "/projects/home/multi-bed/5.jpg",
          "/projects/home/multi-bed/6.jpg",
          "/projects/home/multi-bed/7.jpg",
        ],
      },
      {
        slug: "sariyer-istanbul-flat",
        title: "Living & Dining Area Istanbul, Sarıyer",
        cover: "/projects/home/sarıyer/1.jpg",
        images: [
          "/projects/home/sarıyer/1.jpg",
          "/projects/home/sarıyer/2.jpg",
          "/projects/home/sarıyer/3.jpg",
          "/projects/home/sarıyer/4.jpg",
          "/projects/home/sarıyer/5.jpg",
        ],
      },

      {
        slug: "bodrum-living-area",
        title: "Bodrum Flat — Open Living & Dining Area",
        cover: "/projects/home/bodrum1/1.jpg",
        images: [
          "/projects/home/bodrum1/1.jpg",
          "/projects/home/bodrum1/2.jpg",
          "/projects/home/bodrum1/3.jpg",
          "/projects/home/bodrum1/4.jpg",
          "/projects/home/bodrum1/5.jpg",
          "/projects/home/bodrum1/6.jpg",
        ],
      },

      {
        slug: "ankara-residence",
        title: "Ankara Residence — Contemporary Living Area",
        cover: "/projects/home/ankara/1.jpg",
        images: [
          "/projects/home/ankara/1.jpg",
          "/projects/home/ankara/2.jpg",
          "/projects/home/ankara/3.jpg",
          "/projects/home/ankara/4.jpg",
          "/projects/home/ankara/5.jpg",

        ],
      },
      {
        slug: "etiler-residence",
        title: "Etiler Residence",
        cover: "/projects/home/etiler/1.jpg",
        images: [
          "/projects/home/etiler/1.jpg",
          "/projects/home/etiler/2.jpg",
          "/projects/home/etiler/3.jpg",
          "/projects/home/etiler/4.jpg",
          "/projects/home/etiler/5.jpg",

        ],
      },

      {
        slug: "cappadocia-stone-villa",
        title: "Cappadocia Stone Villa",
        cover: "/projects/home/cappadocia/1.jpg",
        images: [
          "/projects/home/cappadocia/1.jpg",
          "/projects/home/cappadocia/2.jpg",
          "/projects/home/cappadocia/3.jpg",
          "/projects/home/cappadocia/4.jpg",
          "/projects/home/cappadocia/5.jpg",
          "/projects/home/cappadocia/6.jpg",
          "/projects/home/cappadocia/7.jpg",
        ],
      },
      {
        slug: "istanbul-mono-apartment",
        title: "Istanbul Mono Apartment",
        cover: "/projects/home/istanbul-mono/1.jpg",
        images: [
          "/projects/home/istanbul-mono/1.jpg",
          "/projects/home/istanbul-mono/2.jpg",
          "/projects/home/istanbul-mono/3.jpg",
          "/projects/home/istanbul-mono/4.jpg",
          "/projects/home/istanbul-mono/5.jpg",
          "/projects/home/istanbul-mono/6.jpg",
          "/projects/home/istanbul-mono/7.jpg",
          "/projects/home/istanbul-mono/8.jpg",
          "/projects/home/istanbul-mono/9.jpg",

        ],
      },
      {
        slug: "integrated-living-kitchen",
        title: "Integrated Living & Kitchen Area",
        cover: "/projects/home/Living & Kitchen/1.jpg",
        images: [
          "/projects/home/Living & Kitchen/1.jpg",
          "/projects/home/Living & Kitchen/2.jpg",
          "/projects/home/Living & Kitchen/3.jpg",
          "/projects/home/Living & Kitchen/4.jpg",

        ],
      },
      {
        slug: "belgrad-flat",
        title: "Open-plan Living Area — Belgrade, Serbia",
        cover: "/projects/home/belgrad/1.jpg",
        images: [
          "/projects/home/belgrad/1.jpg",
          "/projects/home/belgrad/2.jpg",
          "/projects/home/belgrad/3.jpg",
          "/projects/home/belgrad/4.jpg",
          "/projects/home/belgrad/5.jpg",

        ],
      },
      {
        slug: "istanbul-levent-flat",
        title: "Istanbul Levent Flat",
        cover: "/projects/home/levent/1.jpg",
        images: [
          "/projects/home/levent/1.jpg",
          "/projects/home/levent/2.jpg",
          "/projects/home/levent/3.jpg",
          "/projects/home/levent/4.jpg",
          "/projects/home/levent/5.jpg",
          "/projects/home/levent/6.jpg",

        ],
      },

      {
        slug: "neutral-living-space",
        title: "Neutral Living Space",
        cover: "/projects/home/neutral/3.jpg",
        images: [
          "/projects/home/neutral/1.jpg",
          "/projects/home/neutral/2.jpg",
          "/projects/home/neutral/3.jpg",

        ],
      },
      {
        slug: "sapanca-house",
        title: "Sapanca House — Warm Living Area",
        cover: "/projects/home/sapanca/1.jpg",
        images: [
          "/projects/home/sapanca/1.jpg",
          "/projects/home/sapanca/2.jpg",
          "/projects/home/sapanca/3.jpg",
          "/projects/home/sapanca/4.jpg",
          "/projects/home/sapanca/5.jpg",
          "/projects/home/sapanca/6.jpg",
          "/projects/home/sapanca/7.jpg",
          "/projects/home/sapanca/8.jpg",
          "/projects/home/sapanca/9.jpg",

        ],
      },
      {
        slug: "mugla-villa",
        title: "Muğla Villa",
        cover: "/projects/home/mugla/2.jpg",
        images: [
          "/projects/home/mugla/1.jpg",
          "/projects/home/mugla/2.jpg",
          "/projects/home/mugla/3.jpg",
          "/projects/home/mugla/4.jpg",
          "/projects/home/mugla/5.jpg",
          "/projects/home/mugla/6.jpg",
          "/projects/home/mugla/7.jpg",
          "/projects/home/mugla/8.jpg",
          "/projects/home/mugla/9.jpg",

        ],
      },
      {
        slug: "pristina-apartment",
        title: "Pristina Studio House — Contemporary Living Area",
        cover: "/projects/home/pristina/1.jpg",
        images: [
          "/projects/home/pristina/1.jpg",
          "/projects/home/pristina/2.jpg",
          "/projects/home/pristina/3.jpg",
          "/projects/home/pristina/4.jpg",
          "/projects/home/pristina/5.jpg",

        ],
      },

      {
        slug: "antalya-apartment",
        title: "Antalya Modern Flat",
        cover: "/projects/home/antalya/1.jpg",
        images: [
          "/projects/home/antalya/1.jpg",
          "/projects/home/antalya/2.jpg",
          "/projects/home/antalya/3.jpg",
          "/projects/home/antalya/4.jpg",
          "/projects/home/antalya/5.jpg",

        ],
      },
    ],
  },

  "cafe-restaurant": {
    title: "Cafe / Restaurant",
    desc: "Dining and social spaces for hospitality venues.",
    projects: [
      {
        slug: "restaurant-interior",
        title: "Restaurant Interior",
        cover: "/projects/cafe/restaurant/2.jpg",
        images: [
          "/projects/cafe/restaurant/1.jpg",
          "/projects/cafe/restaurant/2.jpg",
          "/projects/cafe/restaurant/3.jpg",
        ],
      },
      {
        slug: "marble-espresso-bar",
        title: "Marble Espresso Bar",
        cover: "/projects/cafe/marble/cover.jpg",
        images: [
          "/projects/cafe/marble/1.jpg",
          "/projects/cafe/marble/2.jpg",
        ],
      },
    ],
  },

  vision: {
    title: "GUA Vision",
    desc: "Moodboard, lookbook ve tasarım yönü.",
    projects: [
      {
        slug: "desert-brass-palette",
        title: "Desert Brass Palette",
        cover: "/projects/vision/desert/cover.webp",
        images: [
          "/projects/vision/mono/1.png",
          "/projects/vision/mono/2.webp",
          "/projects/vision/mono/3.webp",
          "/projects/vision/mono/4.png",
          "/projects/vision/mono/5.webp",
          "/projects/vision/mono/6.png",
          "/projects/vision/mono/7.png",
          "/projects/vision/mono/8.webp",
          "/projects/vision/mono/9.webp",
          "/projects/vision/mono/10.png",
          "/projects/vision/mono/12.webp",
          "/projects/vision/mono/13.jpg",
          "/projects/vision/mono/14.webp",
          "/projects/vision/mono/15.webp",
          "/projects/vision/mono/16.webp",
          "/projects/vision/mono/17.webp",
        ],
      },
    ],
  },
};
