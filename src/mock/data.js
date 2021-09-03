import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alan Soto | Portfolio ', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hola, soy',
  name: 'Alan Soto',
  subtitle: 'Desarrollador Frontend.',
  cta: 'Saber más',
};

// ABOUT DATA
export const aboutData = {
  img: 'foto_curriculum.jpg',
  paragraphOne:
    'Soy Desarrollador Frontend. Autodidacta entusiasta, con facilidad para trabajar en equipo y siempre dispuesto a recibir feedback. Me gusta resolver problemas y buscar siempre la mejor solución.',
  paragraphTwo:
    'Egresado de Ingeniería Electromecánica de la Universidad de la Salle Bajío, campus Campestre.',
  paragraphThree: 'Skills: React, Redux, React Router, Javascript, Sass, Git, HTML, CSS.',
  resume: 'https://drive.google.com/file/d/1wkZi3oDLSbZ3xn4ZtyGyJxLs9R4qdS2-/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'the-movie-showcase.png',
    title: 'The Movie Showcase',
    info: 'Una aplicación web que muestra un catálogo e información de películas y series.',
    info2: 'Hecho con React.',
    url: 'https://alansfj.github.io/the-movie-showcase/#/',
    repo: 'https://github.com/alansfj/the-movie-showcase', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'there-is-the-face.png',
    title: 'There is the face',
    info: 'Una aplicación web que detecta un rostro en imagenes de internet.',
    info2: 'Hecho con React.',
    url: 'https://alansfj.github.io/there-is-the-face/',
    repo: 'https://github.com/alansfj/there-is-the-face', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nice-todo2.png',
    title: 'Nice ToDo',
    info: 'Una aplicación web de ToDos que te permite cambiar el tema y mantiene tus tareas guardadas.',
    info2: 'Hecho con React.',
    url: 'https://alansfj.github.io/nice-ToDo/#/',
    repo: 'https://github.com/alansfj/nice-ToDo', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Mandame un correo',
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
