export interface Link {
  name: string;
  url: string;
  type: 'external' | 'pdf';
}

export interface Credential {
  id: number;
  title: string;
  institution: string;
  year: string;
  image: string;
  links: Link[];
}

export interface CredentialsData {
  credentials: Credential[];
}

export interface SocialMedia {
  id: number;
  title: string;
  link: string;
  icon: string;
}

export interface SocialMediasData {
  socialmedias: SocialMedia[];
}

export interface Language {
  id: number;
  title: string;
  src_doc: string;
  image: string;
  links: Link[];
}

export interface LanguagesData {
  languages: Language[];
}