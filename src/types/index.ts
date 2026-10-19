export interface RoofingProject {
  id: string;
  title: string;
  category: 'shingle' | 'metal' | 'tile';
  categoryLabel: string;
  image: string;
  description: string;
  details: string[];
  location: string;
}

export interface RoofingService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  image: string;
  badge?: string;
  category: 'shingle' | 'metal' | 'tile' | 'inspection';
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  contact?: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  estimatedSqFt?: string;
  message: string;
  preferredContact: 'phone' | 'email' | 'text';
}
