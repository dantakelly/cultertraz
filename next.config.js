const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: 'https://payhip.com',
      },
      {
        protocol: 'https',
        hostname: '*',
        port: ''
      },
    ],
  },
};

export default nextConfig;