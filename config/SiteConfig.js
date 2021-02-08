const meta = {
    title: 'Rohit Bakoliya - Portfolio',
    description: 'Software developer and Competitive programmer',
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
    resume: 'https://drive.google.com/file/d/1porrnfQ33l1Qy7kcr7S4r6Ont_Mki-PZ/view?usp=sharing',
    github: 'https://github.com/rohitbakoliya',
    facebook: 'https://www.facebook.com/rohit.bakoliya.75/',
    linkedin: 'https://www.linkedin.com/in/rohit-bakoliya',
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
