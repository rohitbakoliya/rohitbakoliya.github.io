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

module.exports = {
    meta,
    manifest,
    analytics,
};
