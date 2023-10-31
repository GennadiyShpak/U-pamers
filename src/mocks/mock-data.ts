import { ChatLastMessage, Message, UserDetailed } from '../app/main/main.model';

export const CHATS_MOCK: ChatLastMessage[] = [
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
  },
  {
    name: 'Sophia',
    surname: 'Brown',
    userId: '5',
    avatarUrl: '/mocks/img/user_5.png',
    lastMessageDateTime: '11:30 AM',
    lastMessage:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
  },
  {
    name: 'Daniel',
    surname: 'Martinez',
    userId: '6',

    avatarUrl: '/mocks/img/user_6.png',
    lastMessageDateTime: '11:30 AM',
    lastMessage: "Hey, how's it going?"
  },
  {
    name: 'LongName',
    surname: 'LongSurname',
    userId: '7',

    avatarUrl: '/mocks/img/user_7.jpg',
    lastMessageDateTime: '11:30 AM',
    lastMessage: 'That sounds amazing! What was the best part of your hike?'
  },
  {
    name: 'William',
    surname: 'Taylor',
    userId: '8',

    avatarUrl: '/mocks/img/user_8.jpg',
    lastMessageDateTime: '11:30 AM',
    lastMessage: 'Rainy days can be cozy if you have a good book and some hot tea. How do you like to spend them?'
  },
  {
    name: 'Ava',
    surname: 'Miller',
    userId: '9',

    avatarUrl: '/mocks/img/user_9.png',
    lastMessageDateTime: '11:30 AM',
    lastMessage: "I'm planning a road trip for the summer. Any must-visit destinations?"
  },
  {
    name: 'James',
    surname: 'Harris',
    userId: '10',
    avatarUrl: '/mocks/img/user_10.jpg',
    lastMessageDateTime: '11:30 AM',
    lastMessage: 'I just got a promotion at work!'
  }
];

export const PERSONAL_DATA_MOCK: UserDetailed = {
  name: 'User',
  surname: 'Userov',
  userId: '100',
  birthDate: '1975-09-12',
  about: 'Angular lover',
  interests: ['Travel', 'Family'],
  location: 'Ukraine, Dnipro',
  avatarUrl: '/mocks/img/avatar.png',
  socials: {
    instagram: 'insta',
    facebook: 'fb',
    linkedin: '../company/epam-systems',
    skype: 'call_me',
    telegram: 'upamer'
  }
};

export const USERS_MOCK: UserDetailed[] = [
  {
    name: 'Lola',
    surname: 'Smith',
    userId: '1',
    birthDate: '',
    about: '',
    interests: ['Health', 'Travel'],
    location: 'Lviv',
    avatarUrl: '/mocks/img/user_1.jpg',
    socials: {
      instagram: 'epam_ukraine',
      linkedin: '../company/epam-systems',
      facebook: '',
      skype: '',
      telegram: ''
    }
  },
  {
    name: 'Ali',
    surname: 'Connors',
    userId: '2',
    birthDate: '2000-06-15',
    about: 'Lorem ipsum dolor sit',
    interests: ['Health', 'Travel'],
    location: 'New York',
    avatarUrl: '/mocks/img/user_2.jpg',
    socials: {
      instagram: 'epamsystems',
      facebook: 'EPAM.Ukraine',
      linkedin: '../company/epam-systems',
      skype: '',
      telegram: ''
    }
  },
  {
    name: 'John',
    surname: 'Doe',
    userId: '3',
    birthDate: '',
    about: 'Tech enthusiast and travel lover',
    interests: ['Attractions', 'Travel', 'Sports'],
    location: 'New York',
    avatarUrl: '/mocks/img/user_3.jpg',
    socials: {
      instagram: 'johndoe_adventures',
      facebook: 'johndoe123',
      linkedin: '../company/epam-systems',
      skype: '',
      telegram: ''
    }
  },
  {
    name: 'Sarah',
    surname: 'Johnson',
    userId: '4',
    birthDate: '',
    about: 'Nature lover, fitness enthusiast, and bookworm',
    interests: ['Dining', 'Sports', 'Family', 'Travel', 'Education'],
    location: 'San Francisco',
    avatarUrl: '/mocks/img/user_4.jpg',
    socials: {
      instagram: 'sarah_nature_fit',
      facebook: '',
      linkedin: '../company/epam-systems',
      skype: '',
      telegram: ''
    }
  },
  {
    name: 'Sophia',
    surname: 'Brown',
    userId: '5',
    birthDate: '1995-02-28',
    about: 'Art lover and coffee addict',
    interests: ['Travel', 'Family', 'Health', 'Promotions', 'Sports', 'Education', 'Dining', 'Office'],
    location: 'Seattle',
    avatarUrl: '/mocks/img/user_5.png',
    socials: {
      instagram: 'sophia_art_coffee',
      facebook: 'sophia.brown',
      linkedin: '../company/epam-systems',
      skype: 'sophia_brown789',
      telegram: 'sophia_coffee_lover'
    }
  },
  {
    name: 'Daniel',
    surname: 'Martinez',
    userId: '6',
    birthDate: '1993-09-12',
    about: 'Hiking enthusiast and tech geek',
    interests: ['Travel', 'Family', 'Sports', 'Education', 'Dining', 'Office'],
    location: 'Denver',
    avatarUrl: '/mocks/img/user_6.png',
    socials: {
      instagram: 'daniel_hiker_tech',
      facebook: 'daniel.martinez',
      linkedin: '../company/epam-systems',
      skype: 'daniel_martinez123',
      telegram: 'daniel_tech_geek'
    }
  },
  {
    name: 'LongName',
    surname: 'LongSurname',
    userId: '7',
    birthDate: '1987-06-03',
    about: '',
    interests: ['Travel'],
    location: 'Netherlands, Hoofddorp, Mercuruissplein 1',
    avatarUrl: '/mocks/img/user_7.jpg',
    socials: {
      instagram: 'olivia_animal_fashion',
      facebook: 'olivia.anderson',
      linkedin: '../company/epam-systems',
      skype: 'olivia_anderson456',
      telegram: 'olivia_dance_queen'
    }
  },
  {
    name: 'William',
    surname: 'Taylor',
    userId: '8',
    birthDate: '1980-11-18',
    about: 'History buff and astronomy enthusiast',
    interests: [],
    location: '',
    avatarUrl: '/mocks/img/user_8.jpg',
    socials: {
      instagram: 'william_history_star',
      facebook: 'william.taylor',
      linkedin: '../company/epam-systems',
      skype: 'william_taylor789',
      telegram: 'william_astronomy_lover'
    }
  },
  {
    name: 'Ava',
    surname: 'Miller',
    userId: '9',
    birthDate: '1998-04-05',
    about: 'Gaming enthusiast and anime lover',
    interests: [],
    location: 'Austin',
    avatarUrl: '/mocks/img/user_9.png',
    socials: {
      instagram: 'ava_gamer_anime',
      facebook: 'ava.miller',
      linkedin: '../company/epam-systems',
      skype: 'ava_miller123',
      telegram: 'ava_anime_fan'
    }
  },
  {
    name: 'James',
    surname: 'Harris',
    userId: '10',
    birthDate: '1986-08-22',
    about: '',
    interests: [],
    location: 'San Diego',
    avatarUrl: '/mocks/img/user_10.jpg',
    socials: {
      instagram: '',
      facebook: '',
      linkedin: '',
      skype: '',
      telegram: ''
    }
  },
  PERSONAL_DATA_MOCK
];

export const CHAT_MOCK: Message[] = [
  {
    id: '17',
    chatId: 'chat-1',
    sender: '1',
    time: '2023-10-30:15:00',
    text: 'See you later!',
    read: false
  },
  {
    id: '16',
    chatId: 'chat-1',
    sender: '2',
    time: '2023-10-30:15:00',
    text: 'Thank you! Talk to you later.',
    read: true
  },
  {
    id: '15',
    chatId: 'chat-1',
    sender: '2',
    time: '2023-10-29T08:10:00',
    text: 'Well, I will let you get ready for the gym. Have a great workout!',
    read: true
  },
  {
    id: '14',
    chatId: 'chat-1',
    sender: '1',
    time: '2023-10-29T08:05:00',
    text: 'You are absolutely right.',
    read: true
  },
  {
    id: '13',
    chatId: 'chat-1',
    sender: '1',
    time: '2023-10-27T08:00:00',
    text: 'It is important to take care of your health.',
    read: true
  },
  {
    id: '12',
    chatId: 'chat-1',
    sender: '2',
    time: '2023-10-25T08:08:00',
    text: 'I try to stay active.',
    read: true
  },
  {
    id: '11',
    chatId: 'chat-1',
    sender: '2',
    time: '2023-10-25T08:12:00',
    text: 'Thats a healthy choice!',
    read: true
  },
  {
    id: '10',
    chatId: 'chat-1',
    sender: '1',
    time: '2023-10-25T08:14:00',
    text: 'Im going to the gym later.',
    read: true
  },
  {
    id: '9',
    chatId: 'chat-1',
    sender: '1',
    time: '2023-10-25T08:40:00',
    text: 'How about you? Any plans?',
    read: true
  },
  {
    id: '8',
    chatId: 'chat-1',
    sender: '1',
    time: '2023-10-25T08:35:00',
    text: 'Sounds like a good plan.',
    read: true
  },
  {
    id: '7',
    chatId: 'chat-1',
    sender: '2',
    time: '2023-10-25T08:30:00',
    text: 'Not really, just relaxing at home.',
    read: true
  },
  {
    id: '6',
    chatId: 'chat-1',
    sender: '2',
    time: '2023-10-24T08:25:00',
    text: 'I understand. Any exciting plans for the evening?',
    read: true
  },
  {
    id: '5',
    chatId: 'chat-1',
    sender: '1',
    time: '2023-10-24T08:20:00',
    text: "It's been a busy day at work.",
    read: true
  },
  {
    id: '4',
    chatId: 'chat-1',
    sender: '1',
    time: '2023-10-24T08:15:00',
    text: 'How has your day been?',
    read: true
  },
  {
    id: '3',
    chatId: 'chat-1',
    sender: '1',
    time: '2023-10-24T08:10:00',
    text: "That's great to hear!",
    read: true
  },
  {
    id: '2',
    chatId: 'chat-1',
    sender: '2',
    time: '2023-10-24T08:05:00',
    text: 'I am doing well, thanks!',
    read: true
  },
  {
    id: '1',
    chatId: 'chat-1',
    sender: '1',
    time: '2023-10-24T08:00:00',
    text: 'Hello, how are you?',
    read: true
  }
];
