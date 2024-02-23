export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

interface Service {
  name: string;
  content: string;
}

export interface ServicesData {
  enable: boolean;
  title: string;
  description: string;
  services: Service[];
}

interface Address {
  icon: string;
  content: string;
  link?: string;
}

export interface ContactData {
  title: string;
  description: string;
  phone: string;
  mail: string;
  location: string;
  form_action: string;
  layout: string;
  addresses: Address[];
}

export interface Socials {
    facebook: string,
    twitter: string,
    instagram: string,
    youtube: string,
    linkedin: string,
    tiktok: string,
    whatsapp: string,
    email: string,
    phone: string,
    address: string,
    website: string
}