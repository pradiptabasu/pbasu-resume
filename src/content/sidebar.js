/* eslint max-len: "off" */

const sidebar = {
  name: {
    title: 'Telecom Architect',
    name: 'Pradipta Basu',
  },
  // workauthorization: {
  //   country: 'Germany',
  //   visaType: 'EU BLue Card',
  // },
  contact: {
    email: { value: 'pradiptabasu.cse@gmail.com', icon: 'far fa-envelope' },
    phone: { value: '+91 943 2166 106', icon: 'fas fa-phone' },
    website: { value: 'pradipta.basu.com', icon: 'fas fa-globe' },
    linkedin: { value: 'linkedin.com/in/pradiptabasu', icon: 'fab fa-linkedin' },
    linkedin_DE: { value: 'linkedin.com/in/pradiptabasu/de', icon: 'fab fa-linkedin' },
    github: { value: 'https://github.com/pradiptabasu', icon: 'fab fa-github' },
    //npm: { value: 'npmjs.com', icon: 'fab fa-npm' },
  },
  certifications: {
    title: 'Certifications',
    list: [
      { name: 'Oracle AIA 11g Certified Implementation Specialist', icon: 'fab fa-aws', description: 'Oracle - 2015' },
      { name: 'Oracle SOA Suite 11g Certified Implementation Specialist.', icon: 'fab fa-aws', description: 'Oracle - 2015' },
      { name: 'Oracle Communications OSM Server 7 Certified Implementation Specialist', icon: 'fab fa-aws', description: 'Oracle - 2013' },
    ],
  },
  education: {
    title: 'Education',
    list: [
      {
        degree: 'B.Tech Computer Science  Engineering',
        school: 'West Bengal University of Technology',
        date: '2007-2011',
        courses: 'Automata, Alogorithms, Distributed Computing, Computer Networks, Cryptography & Network Security',
      },
    ],
  },
  skills: {
    title: 'Skills',
    list: {
      languages: [
        'Java',
        'Javascript',
        'HTML5',
      ],
      frameworks: [
        'NodeJS',
        'ReactJS',
        'Spring',
      ],
      solutions: [
        'AWS',
        'Azure',
        'Docker',
        'ELK',
        'Git',
        'Kubernetes',
        'Electron',
        'MongoDB',
      ],
      COTS: [
        'Oracle SOA',
        'Oracle AIA',
        'Oracle OSM',
      ],
    },
  },
  languages: {
    title: 'Languages',
    list: [{ name: 'English', level: 'Native' }, { name: 'Bengali', level: 'Native' }, { name: 'Hindi', level: 'Expert' }],
  },
  interests: {
    title: 'Interests',
    list: [
      {
        name: 'Circuitry & IoT',
        description: 'Design and implement DIY Smart Home, via Arduino',
      },
      {
        name: 'Photography',
        description: 'Nature, Timelapses',
      }],
  },
};

export default sidebar;
