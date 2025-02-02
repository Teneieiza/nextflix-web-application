import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      's3-alpha-sig.figma.com',
      'occ-0-448-444.1.nflxso.net',
      'nflxso.net',
      'occ-0-2433-2430.1.nflxso.net',
      'occ-0-444-448.1.nflxso.net',
      'occ-0-3418-3419.1.nflxso.net',
    ],
  },
  // env: {
  //   NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  // },
}

export default nextConfig
