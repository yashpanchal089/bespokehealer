import corporatePhoto from '../assets/corporate-events.jpg';

export interface EventOffering {
  id: string;
  type: 'corporate' | 'wedding';
  tag: string;
  title: string;
  subtitle: string;
  points: string[];
}

export interface EventGalleryPhoto {
  id: string;
  image: string;
  title: string;
  eventCategory: string;
  tag: string;
}

export const corporateAndWeddingOfferings: EventOffering[] = [
  {
    id: "corporate-wellness",
    type: "corporate",
    tag: "✦ Corporate & Institutional",
    title: "Executive Summits & Symposia",
    subtitle: "Intuitive leadership, keynote talks & organizational wellness.",
    points: [
      "Keynote speaking & national symposia contributions",
      "Executive burnout release & pranic breathwork",
      "Intuitive decision-making workshops for leadership",
      "Interactive group sound & energy harmonization"
    ]
  },
  {
    id: "wedding-celebrations",
    type: "wedding",
    tag: "✦ Luxury Celebrations",
    title: "Bespoke Weddings & Sangeet",
    subtitle: "High-vibe spiritual elegance for unforgettable celebrations.",
    points: [
      "Experiential bridal tarot lounges for cocktails & sangeet",
      "Private bridal suite calming & energetic alignment",
      "Curated consecrated crystal wedding favors",
      "Couples aura cleansing & sacred blessings"
    ]
  }
];

export const eventGalleryPhotos: EventGalleryPhoto[] = [
  {
    id: "samarpanam-25",
    image: corporatePhoto,
    title: "Samarpanam '25 National Healthcare Symposium",
    eventCategory: "Corporate & Institutional",
    tag: "Speaker & Healthcare Contributor"
  }
  // To add more photos later, simply append new objects here:
  // {
  //   id: "event-2",
  //   image: yourNewPhotoImport,
  //   title: "Destination Wedding Tarot Lounge",
  //   eventCategory: "Weddings & Celebrations",
  //   tag: "Udaipur Wedding"
  // }
];
