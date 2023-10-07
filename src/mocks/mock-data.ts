import { ChatLastMessage, UserDetailed } from '../app/main/main.model';

export const CHATS: ChatLastMessage[] = [
  {
    name: 'Lola',
    surname: 'Smith',
    userId: '1',
    avatarUrl: '/mocks/img/cat.jpg',
    lastMessageDateTime: '10:00 AM',
    lastMessage: 'Halo! Good Morning, whats up man?'
  },
  {
    name: 'Ali',
    surname: 'Connors',
    userId: '2',
    avatarUrl: '/mocks/img/woman.jpg',
    lastMessageDateTime: '11:30 AM',
    lastMessage: 'So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would '
  },
  {
    name: 'John',
    surname: 'Doe',
    userId: '3',
    avatarUrl: '/mocks/img/user_3.jpg',
    lastMessageDateTime: '11:30 AM',
    lastMessage: 'The study was repeated with three brands of hand sanitizers containing 55%, 85%, and 95% ethanol. Th'
  },
  {
    name: 'Sarah',
    surname: 'Johnson',
    userId: '4',
    avatarUrl: '/mocks/img/user_4.jpg',
    lastMessageDateTime: '11:30 AM',
    lastMessage: 'Twenty 30-second applications within half an hour is well in excess of almost anyone’s use of a sani'
  }
];

export const USERS: UserDetailed[] = [
  {
    name: 'Lola',
    surname: 'Smith',
    userId: '1',
    about: "I'm a pretty man",
    interests: ['health', 'travel'],
    city: 'Lviv',
    avatarUrl: '/mocks/img/user_1.jpg',
    instagram: 'epam_ukraine',
    facebook: '',
    skype: '',
    teams: '',
    telegram: ''
  },
  {
    name: 'Ali',
    surname: 'Connors',
    userId: '2',
    about: 'Lorem ipsum dolor sit',
    interests: ['health', 'travel'],
    city: 'New York',
    avatarUrl: '/mocks/img/user_2.jpg',
    instagram: 'epamsystems',
    facebook: 'fb.com/link',
    skype: '',
    teams: '',
    telegram: ''
  },
  {
    name: 'John',
    surname: 'Doe',
    userId: '3',
    about: 'Tech enthusiast and travel lover',
    interests: ['technology', 'travel', 'photography'],
    city: 'New York',
    avatarUrl: '/mocks/img/user_3.jpg',
    instagram: 'johndoe_adventures',
    facebook: 'johndoe123',
    skype: '',
    teams: '',
    telegram: ''
  },
  {
    name: 'Sarah',
    surname: 'Johnson',
    userId: '4',
    about: 'Nature lover, fitness enthusiast, and bookworm',
    interests: ['nature', 'fitness', 'reading'],
    city: 'San Francisco',
    avatarUrl: '/mocks/img/user_4.jpg',
    instagram: 'sarah_nature_fit',
    facebook: '',
    skype: '',
    teams: '',
    telegram: ''
  }
];
