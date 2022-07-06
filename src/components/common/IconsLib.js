import React from 'react';
import {
    //tech icons
    Html5,
    Css3,
    Sass,
    StyledComponents,
    Javascript,
    Typescript,
    ReactJs,
    Redux,
    Gatsby,
    Angular,
    Flutter,
    NodeDotJs,
    Graphql,
    Mysql,
    Mongodb,
    Redis,
    Firebase,
    Nginx,
    Githubactions,
    Docker,
    Cplusplus,
    Python,
    Dart,
    Netlify,
    Heroku,
    Digitalocean,
    Amazonaws,
    Jest,
    Cypress,
    Flask,
    ScikitLearn,

    // tools
    Visualstudiocode,
    Git,
    Linux,
    Gnubash,
    Eslint,
    Adobeillustrator,
    Canva,
    Webpack,
    Codacy,

    //social icons
    Codechef,
    Codeforces,
    Hackerearth,
} from '@icons-pack/react-simple-icons';

const IconsLib = props => (
    <>
        {/* Skills */}
        {props.Html5 && <Html5 />}
        {props.Css3 && <Css3 />}
        {props.Sass && <Sass />}
        {props.StyledComponents && <StyledComponents />}
        {props.Javascript && <Javascript />}
        {props.Typescript && <Typescript />}
        {props.ReactJs && <ReactJs />}
        {props.Redux && <Redux />}
        {props.Gatsby && <Gatsby />}
        {props.Angular && <Angular />}
        {props.Flutter && <Flutter />}
        {props.NodeDotJs && <NodeDotJs />}
        {props.Graphql && <Graphql />}
        {props.Mysql && <Mysql />}
        {props.Mongodb && <Mongodb />}
        {props.Redis && <Redis />}
        {props.Firebase && <Firebase />}
        {props.Nginx && <Nginx />}
        {props.Docker && <Docker />}
        {props.Cplusplus && <Cplusplus />}
        {props.Python && <Python />}
        {props.Dart && <Dart />}
        {props.Amazonaws && <Amazonaws />}
        {props.Heroku && <Heroku />}
        {props.Netlify && <Netlify />}
        {props.Digitalocean && <Digitalocean />}
        {props.Githubactions && <Githubactions />}
        {props.Cypress && <Cypress />}
        {props.Jest && <Jest />}
        {props.Flask && <Flask />}
        {props.ScikitLearn && <ScikitLearn />}

        {/* Tools */}
        {props.Visualstudiocode && <Visualstudiocode />}
        {props.Git && <Git />}
        {props.Linux && <Linux />}
        {props.Gnubash && <Gnubash />}
        {props.Eslint && <Eslint />}
        {props.Adobeillustrator && <Adobeillustrator />}
        {props.Canva && <Canva />}
        {props.Webpack && <Webpack />}
        {props.Codacy && <Codacy />}

        {/* Social */}
        {props.Codechef && <Codechef />}
        {props.Codeforces && <Codeforces />}
        {props.Hackerearth && <Hackerearth />}
    </>
);

export default IconsLib;
