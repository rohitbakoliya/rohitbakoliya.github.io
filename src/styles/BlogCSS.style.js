import { css } from 'styled-components';

const BlogCSS = css`
    .blog__social-share {
        a {
            margin-right: 20px;
        }
    }
    .markdown-content {
        ${p => p.theme.spacing.sectionTopBottom};
        margin-top: 50px;
        line-height: 1.58;

        a {
            word-break: break-word;
        }
        p {
            font-size: 16.5px;
            margin: 1em auto;
            line-height: 160%;
        }
        blockquote p {
            word-break: break-word;
            margin: 0;
        }

        iframe {
            border-radius: 5px;
            border: none;
            height: 500px !important;
        }

        figure {
            margin: 50px 0;
        }
        figcaption {
            margin: 10px 0;
            font-style: italic;
            font-size: 12px;
            text-align: center;
        }

        @media ${p => p.theme.media.tablet} {
            pre {
                overflow-x: scroll;
            }
        }
        h1 {
            font-size: 1.8rem;
            margin-bottom: 50px;
        }
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: 2.1em 0 0.5em 0;
            color: ${p => p.theme.primaryColor};
            .gatsby-remark-autolink svg {
                scale: 1.3;
                margin-left: 18px;
                margin-right: 8px;
                fill: ${p => p.theme.primaryColor};
                visibility: visible !important;
                opacity: 0.5;
            }
            &:hover .gatsby-remark-autolink svg {
                opacity: 1;
            }
            @media ${p => p.theme.media.tablet} {
                .gatsby-remark-autolink svg {
                    margin-right: 4px;
                }
            }
        }

        ul,
        ol {
            font-family: ${p => p.theme.secondaryFontFamily};
            font-size: 16.5px;
            padding: 0 17px;
            line-height: 170%;
            text-indent: 0px;
        }
        ul {
            list-style: disc;
            ul {
                list-style: circle;
                ul {
                    list-style: square;
                    ul {
                        list-style: disc;
                    }
                }
            }
        }
    }
`;
export default BlogCSS;
