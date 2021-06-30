import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Peachy Keen Band', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'The Funk / RnB band from Los Angeles', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'We are ',
  name: 'Peachy Keen',
  subtitle: 'The SoCal jazz-funk band',
  cta: 'Learn more!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'apple',
      url: 'https://music.apple.com/us/artist/peachy-keen/260703918',
    },
    {
      id: nanoid(),
      name: 'spotify',
      url: 'https://open.spotify.com/artist/007oN9n0y5CQ4LmDF0rh1P',
    },
    {
      id: nanoid(),
      name: 'amazon',
      url: 'https://music.amazon.in/albums/B08VWD6D1N',
    },
    {
      id: nanoid(),
      name: 'youtube',
      url: 'https://music.youtube.com/channel/UCuJq3XhWrXrla9aQT9HgAxg',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
