import React, { useEffect, useState } from 'react';
import { useScreenClass, Hidden } from 'react-grid-system';
import { ParallaxProvider } from 'react-scroll-parallax';

import Button from '../common/Button';

import IconsLib from '../common/IconsLib';
import PageHeader from '../common/PageHeader';
import SubHeading from '../common/SubHeading';
import { SkillsIconsWrapper, SkillsWrapper, SkillsWordClouds } from './Skills.style';

const WordClouds = () => {
    return (
        <SkillsWordClouds y={['-350px', '-150px']} speed={-10} aria-hidden="true">
            <p style={{ top: 50, left: '100%', fontSize: 23 }}>OpenAI</p>
            <p style={{ top: 0, left: 0, fontSize: 25 }}>ZooKeeper</p>
            <p style={{ top: 200, left: -60, fontSize: 14 }}>etcd</p>
            <p style={{ top: '30%', left: '35%', fontSize: 18 }}>gRPC</p>
            <p style={{ top: 40, left: '75%', fontSize: 12 }}>Comdb2</p>
            <p style={{ top: 380, left: '85%', fontSize: 18 }}>Nginx</p>
            <p style={{ top: 320, left: '65%', fontSize: 18 }}>Linux</p>
            <p style={{ top: 350, left: 150, fontSize: 20 }}>Duck DB</p>
            <p style={{ top: 120, left: '22%', fontSize: 12 }}>Ansible</p>
        </SkillsWordClouds>
    );
};
const Skills = () => {
    const screenClass = useScreenClass();
    const [showAllLang, setShowAllLang] = useState(screenClass !== `xs`);
    const [showAllDb, setShowAllDb] = useState(screenClass !== `xs`);
    const [showAllInfra, setShowAllInfra] = useState(screenClass !== `xs`);

    useEffect(() => {
        if (screenClass === 'xs') {
            setShowAllLang(false);
            setShowAllDb(false);
            setShowAllInfra(false);
        } else {
            setShowAllLang(true);
            setShowAllDb(true);
            setShowAllInfra(true);
        }
    }, [screenClass]);

    return (
        <>
            <SkillsWrapper id="skills">
                <ParallaxProvider>
                    <PageHeader>My Skillsets</PageHeader>

                    <SubHeading>Languages & Frameworks</SubHeading>

                    <SkillsIconsWrapper showAll={showAllLang} collapseHeight="450px">
                        <IconsLib Cplusplus Python Go Javascript ReactJs Graphql Fastapi NodeDotJs />

                        {!showAllLang && (
                            <Button onClick={() => setShowAllLang(true)} className="showall__button">
                                Show all
                            </Button>
                        )}
                    </SkillsIconsWrapper>

                    <Hidden md xs sm>
                        <WordClouds />
                    </Hidden>

                    <SubHeading>Data & Messaging Systems</SubHeading>

                    <SkillsIconsWrapper showAll={showAllDb} collapseHeight="450px">
                        <IconsLib Postgresql Mysql Mongodb ApacheCassandra Redis Apachekafka Rabbitmq Celery />

                        {!showAllDb && (
                            <Button onClick={() => setShowAllDb(true)} className="showall__button">
                                Show all
                            </Button>
                        )}
                    </SkillsIconsWrapper>

                    <SubHeading>Cloud, Infrastructure & Observability</SubHeading>

                    <SkillsIconsWrapper showAll={showAllInfra} collapseHeight="450px">
                        <IconsLib Amazonaws Docker Kubernetes Terraform Grafana Datadog Sentry />

                        {!showAllInfra && (
                            <Button onClick={() => setShowAllInfra(true)} className="showall__button">
                                Show all
                            </Button>
                        )}
                    </SkillsIconsWrapper>
                </ParallaxProvider>
            </SkillsWrapper>
        </>
    );
};

export default Skills;
