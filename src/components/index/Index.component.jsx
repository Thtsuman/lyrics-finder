import React from 'react';
import Tracks from '../tracks/Tracks.component';
import Search from '../search/Search.component';

const Index = () => {
    return (
        <React.Fragment>
            <Search />
            <Tracks />
        </React.Fragment>
    )
}

export default Index;