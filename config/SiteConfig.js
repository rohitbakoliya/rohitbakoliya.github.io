const meta = {
    title: 'Rohit Bakoliya - Software Engineer',
    description: `Rohit Bakoliya - a passionate software engineer who loves building robust and scalable applications using modern web and mobile technologies. I also enjoy developing web apps and utility tools and solving real-world problems.`,
    author: 'Rohit Bakoliya',
    email: 'bakoliyarohit00@gmail.com',
    siteUrl: 'https://rohitbakoliya.github.io',
    siteLogo: 'src/static/logo.svg',
    twitter: '@Rohit_Bakoliya',
};

const manifest = {
    name: 'Rohit Bakoliya',
    short_name: 'Rohit Bakoliya',
    description: meta.description,
    orientation: 'portrait',
    start_url: '/',
    lang: 'en',
    display: 'standalone',
    icon: meta.siteLogo,
    theme_color: '#6D83F2',
    background_color: '#6D83F2',
};

const analytics = {
    trackingId: 'UA-185840418-1',
    head: true,
};

const quickLinks = {
    email: 'mailto:bakoliyarohit00@gmail.com',
    resume: '#',
    github: 'https://github.com/rohitbakoliya',
    facebook: 'https://www.facebook.com/rohit.bakoliya.75/',
    linkedin: 'https://www.linkedin.com/in/rohitbakoliya',
    codeforce: 'https://codeforces.com/profile/rohitbakoliya',
    codechef: 'https://www.codechef.com/users/rohitbakoliya',
    hackerearth: 'https://www.hackerearth.com/@rohitbakoliya',
};
module.exports = {
    meta,
    manifest,
    analytics,
    quickLinks,
};
