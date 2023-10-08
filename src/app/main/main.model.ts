export interface User {
  name: string;
  surname: string;
  userId: string;
  avatarUrl: string;
}

export interface ChatLastMessage extends User {
  lastMessage: string;
  lastMessageDateTime: string;
}

export interface UserDetailed extends User {
  about: string;
  interests: string[];
  city: string;
  instagram: string;
  facebook: string;
  skype: string;
  teams: string;
  telegram: string;
}
