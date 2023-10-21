import { ChatLastMessage, UserDetailed } from '../app/main/main.model';

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

export const USERS_MOCK: UserDetailed[] = [
  {
    name: 'Lola',
    surname: 'Smith',
    userId: '1',
    birthDate: '',
    about: "I'm a pretty man",
    interests: ['health', 'travel'],
    location: 'Lviv',
    avatarUrl: '/mocks/img/user_1.jpg',
    socials: {
      instagram: 'epam_ukraine',
      linkedin: 'ponomalex',
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
    interests: ['health', 'travel'],
    location: 'New York',
    avatarUrl: '/mocks/img/user_2.jpg',
    socials: {
      instagram: 'epamsystems',
      facebook: 'ponomaleks',
      linkedin: 'ponomalex',
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
    interests: ['technology', 'travel', 'photography'],
    location: 'New York',
    avatarUrl: '/mocks/img/user_3.jpg',
    socials: {
      instagram: 'johndoe_adventures',
      facebook: 'johndoe123',
      linkedin: 'ponomalex',
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
    interests: ['nature', 'fitness', 'reading'],
    location: 'San Francisco',
    avatarUrl: '/mocks/img/user_4.jpg',
    socials: {
      instagram: 'sarah_nature_fit',
      facebook: '',
      linkedin: 'ponomalex',
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
    interests: ['art', 'coffee', 'gardening'],
    location: 'Seattle',
    avatarUrl: '/mocks/img/user_5.png',
    socials: {
      instagram: 'sophia_art_coffee',
      facebook: 'sophia.brown',
      linkedin: 'ponomalex',
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
    interests: ['hiking', 'technology', 'travel'],
    location: 'Denver',
    avatarUrl: '/mocks/img/user_6.png',
    socials: {
      instagram: 'daniel_hiker_tech',
      facebook: 'daniel.martinez',
      linkedin: 'ponomalex',
      skype: 'daniel_martinez123',
      telegram: 'daniel_tech_geek'
    }
  },
  {
    name: 'LongName',
    surname: 'LongSurname',
    userId: '7',
    birthDate: '1987-06-03',
    about: 'Animal lover and fashionista',
    interests: ['animals', 'fashion', 'dancing'],
    location: 'Netherlands, Hoofddorp, Mercuruissplein 1',
    avatarUrl: '/mocks/img/user_7.jpg',
    socials: {
      instagram: 'olivia_animal_fashion',
      facebook: 'olivia.anderson',
      linkedin: 'ponomalex',
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
    interests: ['history', 'astronomy', 'cooking'],
    location: '',
    avatarUrl: '/mocks/img/user_8.jpg',
    socials: {
      instagram: 'william_history_star',
      facebook: 'william.taylor',
      linkedin: 'ponomalex',
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
    interests: ['gaming', 'anime', 'reading'],
    location: 'Austin',
    avatarUrl: '/mocks/img/user_9.png',
    socials: {
      instagram: 'ava_gamer_anime',
      facebook: 'ava.miller',
      linkedin: 'ponomalex',
      skype: 'ava_miller123',
      telegram: 'ava_anime_fan'
    }
  },
  {
    name: 'James',
    surname: 'Harris',
    userId: '10',
    birthDate: '1986-08-22',
    about: 'Cooking aficionado and travel junkie',
    interests: ['cooking', 'travel', 'music'],
    location: 'San Diego',
    avatarUrl: '/mocks/img/user_10.jpg',
    socials: {
      instagram: '',
      facebook: '',
      linkedin: '',
      skype: '',
      telegram: ''
    }
  }
];
