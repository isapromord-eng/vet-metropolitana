export interface Branch {
  id: string;
  name: string;
  shortName: string;
  badge?: string;
  address: string;
  reference: string;
  phone: string;
  whatsapp: string;
  hoursWeekday: string;
  hoursSaturday: string;
  hoursSunday?: string;
  is24hEmergency: boolean;
  mapEmbedUrl: string;
  googleMapsUrl: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  category: 'medica' | 'estetica' | 'hospital' | 'preventiva';
  description: string;
  highlights: string[];
  iconName: string;
  badge?: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  ownerName: string;
  petName: string;
  petBreed: string;
  comment: string;
  rating: number;
  avatar: string;
  branchVisited: string;
  serviceReceived: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'citas' | 'emergencias' | 'servicios' | 'general';
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  tag: string;
}

export interface BookingFormData {
  petName: string;
  petType: 'perro' | 'gato' | 'otro';
  ownerName: string;
  ownerPhone: string;
  serviceId: string;
  branchId: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}
