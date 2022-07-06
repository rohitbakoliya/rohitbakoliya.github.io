import { navigate } from 'gatsby';
import { useEffect, useState } from 'react';
import { globalHistory } from '@reach/router';

const useFilterQuery = () => {
    const [query, setQuery] = useState(new URLSearchParams(location.search).get('q'));
    const [activeTags, setActiveTags] = useState(new Set());

    // https://stackoverflow.com/a/61664193/11922517
    useEffect(() => {
        return globalHistory.listen(() => {
            const nquery = new URLSearchParams(location.search).get('q');
            setQuery(nquery);
            let tags = [];
            if (nquery) tags = nquery.split(',');
            setActiveTags(new Set([...tags]));
        });
    }, [query]);

    useEffect(() => {
        if (!query) return;

        const tags = query.split(',');
        setActiveTags(new Set([...tags]));
    }, [query]);

    const toggleTag = tag => {
        let tags = Array.from(activeTags);

        if (activeTags.has(tag)) tags = tags.filter(x => x !== tag);
        else tags.push(tag);

        const nquery = tags.join(',');
        setQuery(nquery);
        setActiveTags(new Set([...tags]));

        // change query string in URL
        if (tags.length !== 0) {
            navigate(`/blogs?q=${encodeURIComponent(nquery)}`);
        } else {
            navigate('/blogs');
        }
    };

    return { query, activeTags, toggleTag };
};

export default useFilterQuery;
