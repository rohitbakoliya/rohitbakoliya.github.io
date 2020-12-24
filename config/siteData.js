const meta = {
    title: 'Rohit Bakoliya - Portfolio',
    discription: 'Rohit Bakoliya - Full stack web developer and Competitive programmer',
    author: 'Rohit Bakoliya',
    siteUrl: 'https://rohitbakoliya.github.io',
    siteLogo: 'src/static/icon.png',
    // siteBanner: 'src/static/site-banner.png'
};

const manifest = {
    name: 'Rohit Bakoliya',
    short_name: 'Rohit Bakoliya',
    discription: meta.discription,
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
