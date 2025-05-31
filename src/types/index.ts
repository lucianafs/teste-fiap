export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavbarLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  title: string;
  subtitle: string;
}

export interface IntroProps {
  imageUrl: string;
  text: string;
}

export interface CoursesProps {
  courses: Course[];
}

export interface FAQProps {
  faqs: FAQ[];
}