// KATEGORİ & PROJE VERİLERİ — tek yerde topluyoruz
// Görsel yollarını kendi dosyalarına göre düzenle.
// Ör: /public/projects/hotel/sheraton/1.jpg ...

export const PROJECTS_DATA = {
  hotel: {
    title: "Hotels",
    desc: "Konaklama & hospitality projeleri.",
    projects: [
      {
        slug: "sheraton-batumi",
        title: "Sheraton Batumi Hotel",
        cover: "/projects/hotel/sheraton/cover.jpg",
        images: [
          "/projects/hotel/sheraton/1.jpg",
          "/projects/hotel/sheraton/2.jpg",
          "/projects/hotel/sheraton/3.jpg",
          "/projects/hotel/sheraton/4.jpg",
        ],
      },
      {
        slug: "jade-business",
        title: "Jade Business Hotel",
        cover: "/projects/hotel/jade/cover.jpg",
        images: [
          "/projects/hotel/jade/1.jpg",
          "/projects/hotel/jade/2.jpg",
          "/projects/hotel/jade/3.jpg",
        ],
      },
      {
        slug: "marina-boutique",
        title: "Marina Boutique",
        cover: "/projects/hotel/marina/cover.jpg",
        images: [
          "/projects/hotel/marina/1.jpg",
          "/projects/hotel/marina/2.jpg",
        ],
      },
    ],
  },

  office: {
    title: "Office",
    desc: "Ofis & kurumsal alanlar.",
    projects: [
      {
        slug: "vertex-hq",
        title: "Vertex HQ",
        cover: "/projects/office/vertex/cover.jpg",
        images: [
          "/projects/office/vertex/1.jpg",
          "/projects/office/vertex/2.jpg",
          "/projects/office/vertex/3.jpg",
        ],
      },
      {
        slug: "atrium-boardroom",
        title: "Atrium Boardroom",
        cover: "/projects/office/atrium/cover.jpg",
        images: [
          "/projects/office/atrium/1.jpg",
          "/projects/office/atrium/2.jpg",
        ],
      },
    ],
  },

  home: {
    title: "Home",
    desc: "Konut & rezidans projeleri.",
    projects: [
      {
        slug: "bodrum-seafront-villa",
        title: "Bodrum Seafront Villa",
        cover: "/projects/home/bodrum/cover.jpg",
        images: [
          "/projects/home/bodrum/1.jpg",
          "/projects/home/bodrum/2.jpg",
          "/projects/home/bodrum/3.jpg",
          "/projects/home/bodrum/4.jpg",
        ],
      },
      {
        slug: "modern-istanbul-flat",
        title: "Modern Istanbul Flat",
        cover: "/projects/home/istanbul/cover.jpg",
        images: [
          "/projects/home/istanbul/1.jpg",
          "/projects/home/istanbul/2.jpg",
          "/projects/home/istanbul/3.jpg",
        ],
      },
    ],
  },

  "cafe-restaurant": {
    title: "Cafe / Restaurant",
    desc: "Yiyecek & içecek mekânları.",
    projects: [
      {
        slug: "brass-and-bean",
        title: "Brass & Bean",
        cover: "/projects/cafe/brassbean/cover.jpg",
        images: [
          "/projects/cafe/brassbean/1.jpg",
          "/projects/cafe/brassbean/2.jpg",
          "/projects/cafe/brassbean/3.jpg",
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
          "/projects/vision/desert/1.png",
          "/projects/vision/desert/2.webp",
          "/projects/vision/desert/3.webp",
        ],
      },
      {
        slug: "monochrome-serenity",
        title: "Monochrome Serenity",
        cover: "/projects/vision/mono/cover.webp",
        images: [
          "/projects/vision/mono/1.png",
          "/projects/vision/mono/2.webp",
        ],
      },
    ],
  },
};
