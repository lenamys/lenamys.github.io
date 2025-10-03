// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'lenamys', 
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 5, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['lenamys/lenamys.github.io'],
      },
    },
    external: {
      header: 'About Me',
      projects: [
        // Keep only the fun facts, remove the playlists
        {
          title: 'Tea Lover in Denial',
          description: 'Drinking tea is my favorite way to relax... but coffee still owns my soul',
          link: '',
        },
        {
          title: 'Wikipedia Enthusiast', 
          description: 'I like to expand my knowledge by stumbling through random Wikipedia articles',
          link: '',
        },
        {
          title: 'Playlist Alchemist',
          description: 'Coding while listening to my playlist is when I feel the most productive',
          link: '',
        }, 
        {
          title: 'Regex Wizard',
          description: 'I write patterns that even future me won’t understand',
          link: '',
        },
        {
          title: 'Clean Code Advocate',
          description: 'Because future me deserves readable code too',
          link: '',
        }
      ],
    },
  },
  seo: { title: 'Portfolio of Lena', description: '', imageURL: '' },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', 
    discord: '',
    telegram: '',
    website: 'lenamys.github.io',
    phone: '',
    email: 'lena.schumacher@fu-berlin.de',
  },
  resume: {
    fileUrl:
      '', 
  },
  skills: [
    'Python',
    'PHP',
    'MySQL',
    'Machine Learning',
  ],
  educations: [
    {
      institution: 'Sungkyunkwan University - Exchange Student',
      degree: 'Computer Science (B.Sc.)',
      from: '08/2025',
      to: '12/2025',
      link: 'https://www.skku.edu/eng/',
    },
    {
      institution: 'Free University of Berlin',
      degree: 'Computer Science (B.Sc.)',
      from: '10/2023',
      to: '09/2026',
      link: 'https://www.fu-berlin.de/en/',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'light',         // or your favorite
    disableSwitch: true,           // hides the theme switcher
    respectPrefersColorScheme: false,
    displayAvatarRing: false,
    themes: ['light'],             // keep only one to avoid extras
  },
};

export default CONFIG;
