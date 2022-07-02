import React from 'react';
import PropTypes from 'prop-types';
import SplitLayout from '../common/SplitLayout';
import Tags from './Tags';

const BlogLayout = ({ children, sideContent }) => {
    return (
        <SplitLayout
            content={children}
            aside={
                <>
                    <section>
                        <h4>Tags</h4>
                        <Tags />
                        <br />
                    </section>
                    {sideContent && sideContent}
                </>
            }
        />
    );
};
BlogLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BlogLayout;
