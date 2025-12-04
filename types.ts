export enum StreamType {
  SCIENTIFIC = 'العلمي',
  LITERARY = 'الأدبي'
}

export enum Subject {
  MATH = 'الرياضيات',
  ENGLISH = 'اللغة الإنجليزية',
  BOTH = 'كلا المادتين'
}

export interface StudentRegistration {
  name: string;
  phone: string;
  stream: StreamType;
  subject: Subject;
}

export interface TeacherProfile {
  name: string;
  title: string;
  subjects: string[];
  image: string;
  description: string;
}