type ImageFormats = {
  large: {name: string, url: string}
  medium: {name: string, url: string}
  small: {name: string, url: string}
}

export interface StrapiImage {
  id: number,
  alternativeText: string,
  url: string,
  caption?: string,
  formats: ImageFormats,
  height: number,
  width: number,
  size: number
};

export interface HomeProps {
  exchanges: {
    id: number;
    logo: StrapiImage
  }[];
  projects: Project[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  image: StrapiImage;
  slug: string
}

export interface AdditionalPageData {
  id: number;
  page_content: [];
  slug: string;
  title: string;
}

export interface AdditionalPageProps {
  pageData: AdditionalPageData;
}

export interface LegalNoticeProps {
  id: number;
  title: string;
  first_paragraph: string;
  second_paragraph: string;
}

export interface BlogProps {
  id: number;
  slug: string;
  date_of_create: Date;
  description: string;
  title: string;
  images: StrapiImage;
  time_to_read: number;
  number_of_views: number;
  content: string;
  legal_notice: LegalNoticeProps; 
  type: string;
}

export interface Categories {
  id: number;
  job_specialization: {
    id: number;
    name: string;
  }
}

export interface Vacancy {
  id: number;
  address: string;
  categories: Categories;
  full_description: string;
  short_description: string;
  slug: string,
  name: string,
};
