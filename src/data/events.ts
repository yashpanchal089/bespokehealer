import corporatePhoto from '../assets/corporate-events.jpg';
import terracePhoto from '../assets/corporate-event-terrace.jpg';
import eventGuest1 from '../assets/event-tarot-guest-1.png';
import eventGuest2 from '../assets/event-tarot-guest-2.png';

export interface EventGalleryPhoto {
  id: string;
  image: string;
  alt: string;
  title?: string;
  eventCategory?: string;
  tag?: string;
  description?: string;
}

export const eventGalleryPhotos: EventGalleryPhoto[] = [
  {
    id: "event-guest-tarot-1",
    image: eventGuest1,
    alt: "Corporate & Event Tarot Card Reading Session with Guest"
  },
  {
    id: "event-guest-tarot-2",
    image: eventGuest2,
    alt: "Private Event Tarot Booth and Reading Experience"
  },
  {
    id: "wedding-celebrations-terrace",
    image: terracePhoto,
    alt: "Dr. Srushti Garg Tarot & Crystal Healing Event Setup"
  },
  {
    id: "samarpanam-corporate",
    image: corporatePhoto,
    alt: "National Healthcare Symposium Corporate Speaker"
  }
];
