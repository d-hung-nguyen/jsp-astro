import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/nd-hung/',
  mail: 'mailto:nd.hung@me.com',
  medium: '/',
  discord: '/',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Hung Nguyen',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'PhD, Chemistry, Materials Science',
    institution: 'Syddansk Universitet - University of Southern Denmark',
    link: 'Activities and societies: Durability studies with PEM fuel cell electrocatalysts, characterization of corrosion problems associated with the PEM fuel cell operation.',
    date: '2005 - 2010',
  },
  {
    title: 'Erasmus Student',
    institution: 'Vrije Universiteit Brussel',
    link: 'Activities and societies: Determination of trace metal profiles in porewaters of riverine sediments by DGT and DET gel technique.',
    date: '2005 - 2005',
  },
  {
    title: 'MSc, Environmental Sciences-Chemistry',
    institution: 'Debreceni Egyetem',
    link: 'Activities and societies: The reconstruction of the evolution of Tisza oxbows based on the element composition of their sediment.',
    date: '2000 - 2005',
  },
]

export const EXPERIENCE = [
  {
    company: 'Greenerity GmbH',
    location: 'Alzenau in Unterfranken, Bavaria, Germany',
    position: 'Team Leader PEM Fuel Cell Research',
    start: 'Apr 2023',
    end: 'Present',
    tasks: [
      'Leading the research team in PEM fuel cell technology to innovate and enhance product efficiency and sustainability.',
    ],
  },
  {
    company: 'Greenerity GmbH',
    location: 'Hanau Am Main Area, Germany',
    position: 'Project Manager - Product Development & Research',
    start: 'Jan 2018',
    end: 'Present',
    tasks: [
      'Managing product development projects focusing on pioneering research and practical application in renewable energy technologies.',
    ],
  },
  {
    company: 'Greenerity GmbH',
    location: 'Hanau Am Main Area, Germany',
    position: 'Process Development Researcher',
    start: 'Jan 2016',
    end: 'Present',
    tasks: [
      'Conducting advanced research and process development to improve production methodologies and increase efficiency.',
    ],
  },
  {
    company: 'SolviCore GmbH & Co. KG',
    location: 'Hanau Am Main Area, Germany',
    position: 'Process Development Researcher',
    start: 'Apr 2014',
    end: 'Jan 2016',
    tasks: [
      'Developing new processes and refining existing ones in the field of solid oxide fuel cells to enhance performance and cost-effectiveness.',
    ],
  },
]
