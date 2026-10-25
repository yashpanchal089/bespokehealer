import corporatePhoto from '../assets/corporate-events.jpg';
import eventGathering1 from '../assets/event-gathering-1.jpg';
import eventGuest2 from '../assets/event-tarot-guest-2.png';
import eventTarotSession from '../assets/event-tarot-session.jpg';

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
    id: "event-gathering-1",
    image: eventGathering1,
    alt: "Dr. Srushti Garg with Guests at Sacred Gathering & Event"
  },
  {
    id: "event-guest-tarot-2",
    image: eventGuest2,
    alt: "Private Event Tarot Booth and Reading Experience"
  },
  {
    id: "event-tarot-session-live",
    image: eventTarotSession,
    alt: "Dr. Srushti Garg Live Event Tarot Reading Session"
  },
  {
    id: "samarpanam-corporate",
    image: corporatePhoto,
    alt: "National Healthcare Symposium Corporate Speaker"
  }
];
