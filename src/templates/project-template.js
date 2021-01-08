import React from 'react';
import { graphql } from 'gatsby';
import { ProjectWrapper, InfoTitle } from './project-template.style';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import Flex from '../components/common/Flex';
import { ProjectLinks } from '../components/Projects/MajorProjects.style';
import Button, { IconButton } from '../components/common/Button';
import IFrame from '../components/common/IFrame';
import SplitLayout from '../components/common/SplitLayout';
import SocialShareSection from '../components/common/SocialShareSection';

const Project = props => {
    const { data } = props;
    const projectFrontmatter = data.markdownRemark.frontmatter;

    return (
        <Layout>
            <SEO
                title={projectFrontmatter.title}
                description={projectFrontmatter.excerpt}
                slug={data.markdownRemark.fields.slug}
            />
            <ProjectWrapper>
                <Flex className="project__title">
                    <h1>{projectFrontmatter.title}</h1>

                    <ProjectLinks className="project__links">
                        <Button target="__blank" as="a" href={projectFrontmatter.demo}>
                            Live Demo
                        </Button>
                        <IconButton label="github" icon={['fab', 'github']} href={projectFrontmatter.src} />
                    </ProjectLinks>
                </Flex>

                <section className="project__info">
                    <div>
                        {projectFrontmatter.info.idea && (
                            <aside>
                                <InfoTitle>Idea</InfoTitle>
                                <p>{projectFrontmatter.info.idea}</p>
                            </aside>
                        )}
                        {projectFrontmatter.info.tech && (
                            <aside>
                                <InfoTitle>Core Technologies</InfoTitle>
                                <ul>
                                    {projectFrontmatter.info.tech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                            </aside>
                        )}
                        {projectFrontmatter.info.links && (
                            <div>
                                <InfoTitle>Links & Resources</InfoTitle>
                                <ul>
                                    {projectFrontmatter.info.links.map((link, i) => (
                                        <li key={i}>
                                            <a href={link[1]}>{link[0]}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="project__iframe-container">
                        <IFrame
                            src={projectFrontmatter.iframe}
                            livedemo={!!projectFrontmatter.iframe.match('youtube')}
                        />
                    </div>
                </section>

                <SplitLayout
                    content={
                        <article
                            className="markdown-content"
                            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                        />
                    }
                    aside={
                        <div>
                            <h4>Share on</h4>
                            <SocialShareSection url={props.location.href} title={projectFrontmatter.title} />
                        </div>
                    }
                />
            </ProjectWrapper>
        </Layout>
    );
};

export const query = graphql`
    query findProject($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            fields {
                slug
            }
            frontmatter {
                excerpt
                demo
                iframe
                src
                title
                date(formatString: "MMMM DD, YYYY", locale: "en")
                info {
                    idea
                    tech
                    links
                }
            }
        }
    }
`;

export default Project;
