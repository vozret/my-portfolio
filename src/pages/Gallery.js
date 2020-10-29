import React from 'react';
import Gallery from "react-photo-gallery";
import {photos} from './photos';

class GalleryComponent extends React.Component {
    render() {
        return(
            <Gallery photos={photos} direction={"column"} />
        );
    }
}

export default GalleryComponent;