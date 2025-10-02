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
          title: 'Coffee Consumption Champion',
          description: 'I can identify coffee beans by smell alone ☕',
          imageURL: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
          link: '',
          tech: 'Superpower: Coffee Bean Whisperer'
        },
        {
          title: 'Bug Hunter Extraordinaire', 
          description: 'I once debugged a 3-day issue that was just a missing semicolon 😅',
          imageURL: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
          link: '',
          tech: 'Specialty: Finding needles in haystacks'
        },
        {
          title: 'Stack Overflow Ninja',
          description: 'I can find the exact solution in under 30 seconds',
          imageURL: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
          link: '',
          tech: 'Specialty: Google-Fu Master'
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
  /*experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],*/
  educations: [
    {
      institution: 'Sungkyunkwan University - Exchange Student',
      degree: 'Computer Science (B.Sc.)',
      from: '08/2025',
      to: '12/2025',
    },
    {
      institution: 'Free University of Berlin',
      degree: 'Computer Science (B.Sc.)',
      from: '10/2023',
      to: '09/2026',
    },
  ],
  /* Noch keine Publikationen
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ], */
  // Display articles from your medium or dev account. (Optional)
  /*blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
   }, */
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'cmyk',
    ],
  },
};

export default CONFIG;
