import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Button, { IconButton } from '../common/Button';
import IconsLib from '../common/IconsLib';
import IFrame from '../common/IFrame';
import {
    ProjectsContent,
    ProjectsWrapper,
    ProjectsDetails,
    ProjectLinks,
    ProjectPreview,
    Tags,
} from './MajorProjects.style';

const PinnedProject = () => {
    // can use default sort: { fields: frontmatter___date, order: DESC }
    let pinnedProjects = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: { fields: { posttype: { eq: "projects" } }, frontmatter: { pinned: { eq: true } } }
                sort: { fields: fields___fileIndex, order: DESC }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            excerpt
                            date
                            iframe
                            demo
                            src
                            tags
                            pinned
                            info {
                                idea
                                tech
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    return (
        <>
            {pinnedProjects.allMarkdownRemark.edges.map(({ node }) => (
                <ProjectsWrapper key={node.id}>
                    <ProjectsContent>
                        <ProjectsDetails>
                            <div className="project__detail-container">
                                <h2>{node.frontmatter.title}</h2>
                                <p>{node.frontmatter.excerpt}</p>
                                <ProjectLinks>
                                    <Button as={Link} to={node.fields.slug}>
                                        Details
                                    </Button>
                                    <Button target="__blank" as="a" href={node.frontmatter.demo}>
                                        Live Demo
                                    </Button>
                                    <IconButton label="github" icon={['fab', 'github']} href={node.frontmatter.src} />
                                </ProjectLinks>
                            </div>
                        </ProjectsDetails>
                        <ProjectPreview>
                            <IFrame
                                livedemo={!!node.frontmatter.iframe.match('youtube')}
                                src={node.frontmatter.iframe}
                            />
                            <Tags>
                                {/* Converting array to object */}
                                <IconsLib {...node.frontmatter.tags.reduce((x, y) => ((x[y] = true), x), {})} />
                            </Tags>
                        </ProjectPreview>
                    </ProjectsContent>
                </ProjectsWrapper>
            ))}
        </>
    );
};

export default PinnedProject;
