import {
  Github,
  Facebook,
  Linkedin,
} from 'lucide-react';

import {
  TechDetails,
  ExperienceDetails,
  ProjectDetails,
} from '@/lib/types';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoDocker from '/public/images/logos/logo-docker.svg';
import LogoCss3 from '/public/images/logos/icon-css3.svg';
import LogoHTML from '/public/images/logos/icon-html.svg';
import LogoAngular from '/public/images/logos/icon-angular.svg';
import LogoRiverCrane from '/public/images/logos/logo-rivercrane.png';
import VNG_LOGO from '/public/images/logos/VNG-LOGO.jpeg';
import CMC_LOGO from '/public/images/logos/cmc-global.jpeg';
import ECOTRUCK_LOGO from '/public/images/logos/EcoTruck.png';
import APPVITY_LOGO from '/public/images/logos/Appvity.jpg';
import ProjectIMGUP from '/public/images/logos/project-img-up.png';
import LogoEC2 from '/public/images/logos/icon-aws-ec2.svg';

export const NAV_LINKS = [
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Skills',
    href: '/#skills',
  },
  {
    label: 'Contact',
    href: 'https://www.linkedin.com/in/tmp-dev79/',
  },
];


export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'HTML5',
    logo: LogoHTML,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    label: 'CSS3',
    logo: LogoCss3,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'Angular',
    logo: LogoAngular,
    url: 'https://angular.dev/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwind',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'NodeJS',
    logo: LogoNodejs,
    url: 'https://nodejs.org/',
  },
  {
    label: 'ExpressJs',
    logo: LogoExpress,
    url: 'https://expressjs.com/',
  },
  {
    label: 'NestJs',
    logo: LogoNest,
    url: 'https://nestjs.com/',
  },
  {
    label: 'ReactJS',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  // {
  //   label: 'NextJS',
  //   logo: LogoNextjs,
  //   darkModeLogo: LogoNextjsLight,
  //   url: 'https://nextjs.org/',
  // },
  // {
  //   label: 'Java',
  //   logo: LogoJava,
  //   url: 'https://www.java.com/',
  // },
  // {
  //   label: 'PHP',
  //   logo: LogoPHP,
  //   url: 'https://git-scm.com/',
  // },
  // {
  //   label: 'Laravel',
  //   logo: LogoLaravel,
  //   url: 'https://git-scm.com/',
  // },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  // {
  //   label: 'MySQL',
  //   logo: LogoMysql,
  //   url: 'https://www.mysql.com/',
  // },
  // {
  //   label: 'MariaDB',
  //   logo: LogoMariadb,
  //   url: 'https://www.mysql.com/',
  // },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    darkModeLogo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Docker',
    logo: LogoDocker,
    url: 'https://www.docker.com/',
  },
  {
    label: 'Amazon EC2',
    logo: LogoEC2,
    url: 'https://aws.amazon.com/',
  },
  // {
  //   label: 'Amazon S3',
  //   logo: LogoS3,
  //   url: 'https://aws.amazon.com/',
  // },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    companyName: 'CMC Global',
    logo: CMC_LOGO,
    darkModeLogo: CMC_LOGO,
    logoAlt: 'CMC Global',
    position: 'Senior Frontend Developer',
    startDate: '11/2024',
    endDate: 'Present',
    currentlyWorkHere: true,
    summarys: [
      'Tobe continue....'
      // 'Collaborating closely with various teams to analyze and refine client requirements',
      // 'Preparing and presenting daily or weekly reports to clients based in Singapore',
      // 'Managed and implemented new features while resolving bugs across two projects',
      // 'Developing and maintaining comprehensive unit tests to ensure code quality and reliability',
      // 'Providing guidance and mentorship to junior developers to enhance their technical skills',
      // 'Actively participated in the recruitment process by conducting interviews and assessing candidates'
    ],
    techstack: ['Angular 17+', 'Typescript', 'Javascript', 'Ngrx Store', 'PrimeNg', 'AmCharts', "Unit Test"]
  },
  {
    companyName: 'VNG Corporation',
    logo: VNG_LOGO,
    darkModeLogo: VNG_LOGO,
    logoAlt: 'VNG Corporation',
    position: 'Software Engineer',
    startDate: '6/2023',
    endDate: '11/2024',
    currentlyWorkHere: true,
    summarys: [
      'Developed and deployed two projects using Angular 16+, integrating Restful API, GraphQL, and AWS',
      `Collaborated closely with Business Analysts, Database, and Backend teams to analyze requirements and
      implement features`,
      `Seamlessly migrated current projects from Angular 12 to Angular 16+`,
      `Enhanced application performance by leveraging OnPush change detection, Signal, Standalone and
      Service Workers & PWAs, resulting in a significant reduction in initial bundle size and improved runtime
      efficiency`,
      `Researched and implemented NX - Monorepo architecture to streamline development and reduce
      coding time across projects`
    ],
    techstack: ['Angular 16', 'Typescript', 'Javascript', 'GraphQL', 'ReactJs', 'AWS', 'Nx Monorepo',]
  },
  {
    companyName: 'Ecotruck',
    logo: ECOTRUCK_LOGO,
    darkModeLogo: ECOTRUCK_LOGO,
    logoAlt: 'Ecotruck Logo',
    position: 'Frontend Engineer',
    startDate: '05/2022',
    endDate: '05/2023',
    summarys: [
      'Analyzed and implemented requirements from Business Analysts.',
      `Collaborated closely with designers to enhance UI/UX, ensuring a seamless and intuitive user
      experience.`,
      'Worked with backend teams to ensure seamless API integration.',
      `Participated in code reviews and feedback to team members to ensure code quality.`
    ],
    techstack: ['Angular 13', 'Typescript', 'Javascript', 'Angular Material', 'HTML/CSS/SCSS']
  },
  {
    companyName: 'Appvity',
    logo: APPVITY_LOGO,
    darkModeLogo: APPVITY_LOGO,
    logoAlt: 'Appvity Logo',
    position: 'Frontend Engineer',
    startDate: '01/2021',
    endDate: '05/2022',
    summarys: [
      'Resolved bugs and developed new features following Business Analyst specifications.',
      'Collaborated with designers to optimize UI/UX for improved user engagement.',
      'Worked closely with backend teams to ensure seamless API integration',
    ],
    techstack: ['Angular 12', 'Typescript', 'Javascript', 'Angular Material', 'HTML/CSS/SCSS', 'SyncFusion UI']
  }
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'WePro',
    description:
      'Internal project to manage employee information, work, projects,...',
    url: '',
    previewImage: LogoRiverCrane,
    technologies: [
      'Laravel',
      'Laravel Modules',
      'Bootstrap',
      'jQuery',
      'MariaDB',
      'Docker',
    ],
  },
  {
    name: 'IMG-UP',
    description:
      'New project with features to automatically create images for products and automatically update to Rakuten site.',
    url: 'https://img-up.greenwich.co.jp/',
    previewImage: ProjectIMGUP,
    technologies: [
      'NextJS',
      'Typescript',
      'React Bootstrap',
      'SCSS',
      'Redux',
      'MariaDB',
      'Laravel',
      'Docker',
      'Load Balancer',
      'AWS EC2',
    ],
  },
  {
    name: 'Order Cheese',
    description:
      'Pet food order management project.',
    url: '',
    previewImage: LogoRiverCrane,
    technologies: [
      'NuxtJS',
      'JavaScript',
      'Bootstrap Vue',
      'SCSS',
      'Redux',
      'MariaDB',
      'Laravel',
      'Docker',
    ],
  },
  {
    name: 'Editor',
    description:
      'Product management support system on Rakuten e-commerce platform.',
    url: '',
    previewImage: LogoRiverCrane,
    technologies: [
      'ReactJS',
      'JavaScript',
      'Material UI',
      'SCSS',
      'Redux',
      'MariaDB',
      'Java',
      'IndexedDB',
    ],
  },
];

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/trminhphu79',
  GITHUB_REPO: 'https://github.com/trminhphu79',
};