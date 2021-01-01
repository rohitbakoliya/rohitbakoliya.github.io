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
} from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faJs, faHtml5, faCss3, faCodepen, faReact, faNode, faLinkedinIn, faFacebookF);

config.autoAddCss = false;
