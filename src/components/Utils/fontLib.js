import '@fortawesome/fontawesome-svg-core/styles.css';
import { library, config } from '@fortawesome/fontawesome-svg-core';

import {
    faGithub,
    faCodepen,
    faFacebookF,
    faLinkedinIn,
    faInstagram,
    faTwitter,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';

import { faHandshake, faPaperPlane, faHeart, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
library.add(
    // brand icons
    faGithub,
    faCodepen,
    faGoogle,
    faLinkedinIn,
    faFacebookF,
    faInstagram,
    faTwitter,

    //other icons
    faHandshake,
    faPaperPlane,
    faHeart,
    faAngleDoubleRight
);

config.autoAddCss = false;
