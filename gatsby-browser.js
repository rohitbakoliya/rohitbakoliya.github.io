require('typeface-montserrat');
require('typeface-mulish');
require('typeface-karla');

require('./src/styles/prism-purpleking-dark.css');
require('prismjs/plugins/line-numbers/prism-line-numbers.css');
require('prismjs/plugins/command-line/prism-command-line.css');

// polyfill for intersection Observer API
export const onClientEntry = async () => {
    if (typeof IntersectionObserver === `undefined`) {
        await import(`intersection-observer`);
    }
};
