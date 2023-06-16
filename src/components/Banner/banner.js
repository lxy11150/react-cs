import React from "react";
import Carousels from "./Carousel/carousel";
import './banner.scss'
export default class Banner extends React.Component {
    render() {
        return (
            <div className="banner clearfix">
                <Carousels></Carousels>
            </div>
        )
    }
}