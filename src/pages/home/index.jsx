import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/header";
import MainPanel from "../../components/main";

function Home() {
    return (
        <div>
            <Header />
            <MainPanel />
        </div>
    );
}

Home.propTypes = {};

export default Home;
