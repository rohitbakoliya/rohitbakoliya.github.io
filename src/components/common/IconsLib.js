import React from 'react';

// Languages
import { Cplusplus, Python, Go, Javascript, Typescript } from '@icons-pack/react-simple-icons';

// Backend & Infrastructure
import { NodeDotJs, Fastapi, Flask, Nginx, Firebase } from '@icons-pack/react-simple-icons';

// Web & Mobile Technologies
import { Angular, ReactJs, Webpack, Gatsby, Flutter } from '@icons-pack/react-simple-icons';

// Distributed Systems
import {
    Apachekafka,
    Redis,
    Rabbitmq,
    Elasticsearch,
    Apacheairflow,
    Celery,
    Apachesolr,
    Apachespark,
} from '@icons-pack/react-simple-icons';

// Databases
import { Postgresql, Mysql, Mongodb, Graphql, Apachecassandra } from '@icons-pack/react-simple-icons';

// Cloud & DevOps
import { Amazonaws, Docker, Kubernetes, Terraform } from '@icons-pack/react-simple-icons';

// Performance Engineering, Logging and Monitoring
import { Grafana, Prometheus, Datadog, Sentry } from '@icons-pack/react-simple-icons';

// AI / LLM Ecosystem
import { Openai } from '@icons-pack/react-simple-icons';

// CI/CD & Testing, Other tools
import { Githubactions, Jenkins, Postman } from '@icons-pack/react-simple-icons';

// Other tools
import { Linux, Git, Gnubash, Visualstudiocode } from '@icons-pack/react-simple-icons';

// Create a map of available icons
const ICONS = {
    Apacheairflow,
    Celery,
    Apachesolr,
    Apachespark,
    Apachecassandra,
    Cplusplus,
    Python,
    Go,
    Javascript,
    Typescript,
    NodeDotJs,
    Fastapi,
    Flask,
    Nginx,
    Firebase,
    Angular,
    ReactJs,
    Webpack,
    Gatsby,
    Flutter,
    Apachekafka,
    Redis,
    Rabbitmq,
    Elasticsearch,
    Postgresql,
    Mysql,
    Mongodb,
    Graphql,
    Amazonaws,
    Docker,
    Kubernetes,
    Terraform,
    Grafana,
    Prometheus,
    Datadog,
    Sentry,
    Githubactions,
    Jenkins,
    Postman,
    Openai,
    Linux,
    Git,
    Gnubash,
    Visualstudiocode,
};

const IconsLib = props => (
    <>
        {Object.keys(props).map(iconName => {
            const IconComponent = ICONS[iconName];
            if (!IconComponent) return null;
            return <IconComponent key={iconName} />;
        })}
    </>
);

export default IconsLib;
