export interface ToasterMessage {
  title: string;
  description: string;
  linkedText?: string;
  url?: string[];
}

export interface ToasterMessages {
  notLoggedIn: ToasterMessage;
  notFilledProfile: ToasterMessage;
}
