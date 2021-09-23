import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alan Soto | Portfolio ', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Alan Soto',
  subtitle: 'Frontend Developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'foto_curriculum.jpg',
  paragraphOne:
    'I am a Frontend Developer. Enthusiastic self-taught, easy to work in a team and always ready to receive feedback. I like to solve problems and always look for the best solution.',
  paragraphTwo:
    'Graduated in Electromechanical Engineering from the Universidad de la Salle Bajío, Campestre.',
  paragraphThree: 'Skills: React, Redux, React Router, Javascript, Sass, Git, HTML, CSS.',
  resume: 'https://drive.google.com/file/d/122oIzFm1qYn7Hyk1PlUWbJ7mn5HaVLP9/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'crown-clothing-shop.png',
    title: 'Crown Clothing Shop',
    info: 'An eCommerce-like web app with Sign Up/Sign In functionality, shopping cart and Stripe integration for online payments.',
    info2: 'React / Firebase / Redux / React-Router / Sass',
    url: 'https://alansfj.github.io/crown-clothing-shop/#/',
    repo: 'https://github.com/alansfj/crown-clothing-shop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'the-movie-showcase.png',
    title: 'The Movie Showcase',
    info: 'A web application that displays a catalog and related data of movies and series.',
    info2: 'React / React-Router / Sass',
    url: 'https://alansfj.github.io/the-movie-showcase/#/',
    repo: 'https://github.com/alansfj/the-movie-showcase', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'there-is-the-face.png',
    title: 'There is the face',
    info: 'A web application that detects a face in internet images.',
    info2: 'React.',
    url: 'https://alansfj.github.io/there-is-the-face/',
    repo: 'https://github.com/alansfj/there-is-the-face', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nice-todo2.png',
    title: 'Nice ToDo',
    info: 'A ToDos web application that allows you to change the theme and keep your tasks saved.',
    info2: 'React / React-Router / Sass',
    url: 'https://alansfj.github.io/nice-ToDo/#/',
    repo: 'https://github.com/alansfj/nice-ToDo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'test-form.png',
    title: 'Test Form',
    info: 'Modern forms with validations',
    info2: 'React / Sass',
    url: 'https://alansfj.github.io/test-form/',
    repo: 'https://github.com/alansfj/test-form', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Send me an email',
  email: 'alansfj348@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alan-soto-abb12b21b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/alansfj',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
