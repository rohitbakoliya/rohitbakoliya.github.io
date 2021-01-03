import '@fortawesome/fontawesome-svg-core/styles.css';
import { library, config } from '@fortawesome/fontawesome-svg-core';

import {
    faGithub,
    faJs,
    faHtml5,
    faCss3,
    faCodepen,
    faReact,
    faNode,
    faFacebookF,
    faLinkedinIn,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { faHandshake, faPaperPlane, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(
    // brand icons
    faGithub,
    faJs,
    faHtml5,
    faCss3,
    faCodepen,
    faReact,
    faNode,
    faLinkedinIn,
    faFacebookF,
    faInstagram,
    faTwitter,

    //other icons
    faHandshake,
    faPaperPlane,
    faHeart
);

config.autoAddCss = false;
