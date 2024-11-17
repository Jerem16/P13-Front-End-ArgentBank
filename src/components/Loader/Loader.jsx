import React from "react";
import "./loader.scss";

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <Loading />
        </div>
    );
};

export default Loader;

export const Loading = () => {
    return <div className="loading"></div>;
};
