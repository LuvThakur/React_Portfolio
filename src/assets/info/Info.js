import self from '../img/self.jpg';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Luv',
  lastName: 'Thakur',
  Aboutme: '👤',
  initials: '🏡', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Front-End Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '➤',
      text: 'based in the Jaipur, India',
    },
    {
      emoji: '💻',
      text: 'Front-End Developer',
    },
    {
      emoji: '📧',
      text: 'luvjadaun786@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://drive.google.com/file/d/1CgpeBjfsArIHH2IrvAcQTuO46drDTxs6/view?usp=sharing', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file',
      label: 'resume',
    },
    {
      link: 'https://www.youtube.com/@Laijyour',
      icon: 'fa fa-youtube',
      label: 'Yout-Tube',
    },
    {
      link: 'https://github.com/LuvThakur/',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/luv-thakur-623b09201/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://luvthakur.github.io/',
      icon: 'fa fa-globe',
      label: 'website',
    },
  ],
  bio: "Hello! I'm Luv (luv) Thakur. I'm a Front-End Developer. I studied CompSci at Arya College of Engineering & IT, I enjoy building web applications and learning new technologies. I'm a Fresher  and readdy to work. I'm also a Youtuber . I love to travel and explore new places. I'm currently based in Jaipur, India.",
  skills: {
    languages: ['TypeScript', 'JavaScript', 'C++', 'C', 'Python', 'HTML/CSS'],
    frameworks: [
      'React',
      'Redux',
      'Material UI',
      'Bootstrap',
    ],
    databases: ['MySQl', 'MongoDB',],
    tools: [
      'Git',
      'Postman',
      'Docker',
      'npm',
      'yarn',
    ],
  },
  hobbies: [
    {
      label: 'Anime',
      emoji: '🎞',
    },
    {
      label: 'Cricket',
      emoji: '🏏',
    },
    {
      label: 'Online Games',
      emoji: '🎮',
    },
    {
      label: 'Traveling',
      emoji: '✈️',
    },

  ],
  portfolio: [
    {
      title: 'Portfolio Website',
      live: 'https://luvthakur.github.io/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/LuvThakur/LuvThakur.github.io', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://i.pinimg.com/originals/a2/2a/5f/a22a5fd3097c705b55f2f0ef33100b06.png',
    },
    {
      title: 'News-App',
      live: 'https://news-app-ea67e.web.app/',
      source: 'https://github.com/LuvThakur/News-App',
      image: 'https://i.pinimg.com/originals/ac/34/6b/ac346bfb5edae33c8201ad6fd323643b.png'

    },
    {
      title: 'Window 11 UI',
      live: null,
      source: 'https://github.com/LuvThakur/window-11-ui',
      image: 'https://i.pinimg.com/originals/98/e7/ee/98e7eea2951d587a83882c5048d6620c.webp',
    },
    {
      title:'Weather-App',
      live:'https://weather-app-caacf.web.app/',
      source:'https://github.com/LuvThakur/Weather--App',
      image:'https://i.pinimg.com/originals/9d/91/20/9d9120893d3cd4d55509c318d43049a8.jpg'
    }
  ],
};
