import omo1 from '../assets/omo/1.png'
import omo2 from '../assets/omo/2.png'
import goAlberta1 from '../assets/go-alberta/1.png'
import goAlberta2 from '../assets/go-alberta/2.png'
import goAlberta3 from '../assets/go-alberta/3.png'
import goAlberta4 from '../assets/go-alberta/4.png'
import goAlberta5 from '../assets/go-alberta/5.png'

import weather2 from '../assets/weather-app/2.png'
import onlineZoo1 from '../assets/online-zoo/1.png'
import onlineZoo2 from '../assets/online-zoo/2.png'
import onlineZoo3 from '../assets/online-zoo/3.png'
import seatBooking2 from '../assets/seat-booking/2.png'

export type Project = {
  title: string
  tech: string[]
  images: string[]
  description: string
  liveLink: string
  githubLink: string
}

export const projects = {
  work: [
    {
      title: 'Omo',
      tech: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Styled Components',
        'HTML/CSS',
      ],
      images: [omo1, omo2],
      description:
        'An onboarding web platform for a mobile weight loss app Omo, leading users through a personalized flow to purchase plans and manage subscriptions.',
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
      images: [goAlberta1, goAlberta2, goAlberta3, goAlberta4, goAlberta5],
      description:
        'A sophisticated rewards-based crowdfunding platform, enabling local entrepreneurs to showcase their ventures and connect with potential investors.',
      liveLink: 'https://go-alberta.vercel.app/',
      githubLink: 'https://github.com/vakulinina/go-alberta',
    },
  ],
  side: [
    {
      title: 'Online Zoo',
      tech: ['JavaScript', 'HTML/CSS'],
      images: [onlineZoo1, onlineZoo2, onlineZoo3],
      description:
        '🐼 Adaptive layout for a zoo website where you can choose and watch animals online.',
      liveLink: 'https://vakulinina.github.io/online-zoo/pages/main',
      githubLink: 'https://github.com/vakulinina/online-zoo',
    },
    {
      title: 'Weather Forecast',
      tech: ['React', 'TypeScript', 'Redux', 'SCSS', 'Vitest', 'HTML/CSS'],
      images: [weather2],
      description:
        '🌦️ A simple weather forecast app, providing real-time weather data with a clean, responsive interface. Accessibility features implemented.',
      liveLink: 'https://weather-app-gilt-nu-16.vercel.app/',
      githubLink: 'https://github.com/vakulinina/weather-app',
    },
    {
      title: 'Movie Seat Booking',
      tech: ['JavaScript', 'HTML/CSS'],
      images: [seatBooking2],
      description: '🍿 A sleek movie theatre seat booking interface.',
      liveLink: 'https://vakulinina.github.io/movie-seat-booking/',
      githubLink: 'https://github.com/vakulinina/movie-seat-booking',
    },
  ],
}
