/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.chrono24.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'cdn2.chrono24.com',
          pathname: '**',
        }        
      ],
    } 
  }

export default nextConfig;
