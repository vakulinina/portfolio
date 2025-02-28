export type Project = {
  title: string
  tech: string[]
  images: string[]
  description: string
}

export const projects = {
  work: [
    {
      title: 'OMO',
      tech: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Styled Components',
        'HTML/CSS',
      ],
      images: [],
      description:
        'An onboarding web platform for a mobile weight loss app Omo. The application was designed to enhance user engagement through various features like onboarding, purchases, and a user cabinet. ',
      liveLink: 'https://omo-app.io/',
      githubLink: '',
    },
    {
      title: 'Go Alberta Booster',
      tech: [
        'Next.js',
        'SSR',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'HTML/CSS',
      ],
      images: [],
      description:
        'A sophisticated rewards-based crowdfunding platform, enabling local entrepreneurs to showcase their ventures and connect with potential investors',
      liveLink: 'https://go-alberta.vercel.app/',
      githubLink: 'https://github.com/vakulinina/go-alberta',
    },
  ],
  side: [
    {
      title: 'Weather Forecast',
      tech: ['React', 'TypeScript', 'Redux', 'SCSS', 'Vitest', 'HTML/CSS'],
      images: [],
      description:
        '🌦️ A simple weather forecast app, providing real-time weather data with a clean, responsive interface. Accessibility features implemented.',
      liveLink: 'https://weather-app-gilt-nu-16.vercel.app/',
      githubLink: 'https://github.com/vakulinina/weather-app',
    },
    {
      title: 'Online Zoo',
      tech: ['JavaScript', 'HTML/CSS'],
      images: [],
      description:
        '🐼 Adaptive layout for a zoo website where you can choose and watch animals online.',
      liveLink: 'https://vakulinina.github.io/online-zoo/pages/main',
      githubLink: 'https://github.com/vakulinina/online-zoo',
    },
    {
      title: 'Movie Seat Booking',
      tech: ['React', 'TypeScript', 'Redux', 'SCSS', 'Vitest', 'HTML/CSS'],
      images: [],
      description: '🍿 A sleek movie theatre seat booking interface',
      liveLink: 'https://vakulinina.github.io/movie-seat-booking/',
      githubLink: 'https://github.com/vakulinina/movie-seat-booking',
    },
  ],
}
