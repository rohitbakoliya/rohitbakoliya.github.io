const meta = {
    title: 'Rohit Bakoliya - Software Engineer',
    description: `Backend engineer skilled in C++, Python, Go, and JavaScript. Passionate about scalable low-latency distributed systems, GenAI / LLM, and databases.`,
    author: 'Rohit Bakoliya',
    email: 'bakoliyarohit00@gmail.com',
    siteUrl: 'https://rohitbakoliya.com',
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
    email: `mailto:${meta.email}`,
    resume: 'https://resume.rohitbakoliya.com/',
    github: 'https://github.com/rohitbakoliya',
    facebook: 'https://www.facebook.com/rohit.bakoliya.75/',
    instagram: 'https://www.instagram.com/rohitbakoliya',
    linkedin: 'https://www.linkedin.com/in/rohitbakoliya',
    twitter: meta.twitter,
    codechef: 'https://www.codechef.com/users/rohitbakoliya',
};

module.exports = {
    meta,
    manifest,
    analytics,
    quickLinks,
};
