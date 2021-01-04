const meta = {
    title: 'Rohit Bakoliya - Portfolio',
    description: 'Full stack web developer and Competitive programmer',
    author: 'Rohit Bakoliya',
    siteUrl: 'https://rohitbakoliya.github.io',
    siteLogo: 'src/static/icon.png',
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
    linkedin: 'https://www.linkedin.com/in/rohit-bakoliya-766097177',
    codeforce: 'https://codeforces.com/profile/rohitbakoliya',
    codechef: 'https://www.codechef.com/users/rohitbakoliya',
    hackerearth: 'https://www.hackerearth.com/@rohitbakoliya',
    stackoverflow: 'https://stackoverflow.com/users/11922517/rohit-bakoliya',
};
module.exports = {
    meta,
    manifest,
    analytics,
    quickLinks,
};
