import self from '../img/self.png';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import mock3 from '../img/mock3.png';
import mock4 from '../img/mock4.png';
import mock5 from '../img/mock5.png';
import mock6 from '../img/mock6.png';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['rgb(33,212,253)', 'rgb(209, 155, 238)'];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

export const info = {
  firstName: 'Iuliia',
  lastName: 'Sutygina',
  initials: 'is',
  position: 'a Full Stack Developer',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '💻',
      text: 'currently studying in Masterschool',
    },
    {
      emoji: '🌎',
      text: 'based in Alberta, Canada',
    },
    {
      emoji: '🎓',
      text: 'Lighthouse Labs Alumn',
    },
    {
      emoji: '📧',
      text: (
        <a href="mailto:juliasutygina@gmail.com">juliasutygina@gmail.com</a>
      ),
    },
  ],
  socials: [
    {
      link: 'https://github.com/juliasut',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/juliasut/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/ISutygina',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
    {
      link: 'https://medium.com/@juliasutygina',
      icon: 'fa fa-medium',
      label: 'medium',
    },
  ],

  bio: "Hello, I'm Iuliia. Currently studying web development in Masterschool. Email me about job opportunities!",
  skills: {
    proficientWith: [
      'javascript',
      'node.js',
      'react',
      'git',
      'mui',
      'sql-nosql-dbs',
      'html5',
      'css',
    ],
    exposedTo: ['typescript', 'ruby'],
  },
  hobbies: [
    {
      label: 'learning',
      emoji: '✨',
    },
    {
      label: 'car trips',
      emoji: '🚗',
    },
    {
      label: 'modeling',
      emoji: '📸',
    },
    {
      label: 'sushi-eating',
      emoji: '🍣',
    },
  ],
  portfolio: [
    {
      title: 'Hotel California',
      description:
        'Connects event planners with the hotel banquet crew. Next.js, Prisma ORM, MUI',
      live: 'https://github.com/juliasut/hotel-california',
      source: 'https://github.com/juliasut/hotel-california',
      image: mock5,
    },
    {
      title: 'Interview Scheduler',
      description:
        'A single-page app to schedule interview appointments. React, Storybook, Jest, Cypress',
      live: 'https://github.com/juliasut/scheduler',
      source: 'https://github.com/juliasut/scheduler',
      image: mock6,
    },
    {
      title: 'ICTapp (Institute for Career Transitions)',
      description:
        'Mini anti-ageism hackathon winner app written in React Native',
      live: 'https://github.com/juliasut/ICTapp.git',
      source: 'https://github.com/juliasut/ICTapp.git',
      image: mock3,
    },
    {
      title: 'Rhizone Learning Management System',
      description:
        'Allows mentees to post self-reflections and develop professional competencies. Typescript, React, NodeJS, Express, MySQL, MUI, Jest',
      live: 'https://rhi.zone/',
      source: 'https://github.com/OpenTree-Education/rhizone-lms',
      image: mock4,
    },
    {
      title: 'NASA-Project',
      description:
        'Back-end project for pre-packaged react front end. Allows schedule launches to habitable planets. Node, Jest, SuperTest',
      live: 'https://github.com/juliasut/NASA-Project', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/juliasut/NASA-Project', // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: 'Retired Not Tired',
      description:
        "Masterschool's group front-end project. Helps retired people stay active and in touch. React, Firebase, MUI",
      live: 'https://github.com/juliasut/Retired-Not-Tired.git',
      source: 'https://github.com/juliasut/Retired-Not-Tired.git',
      image: mock2,
    },
  ],
};
