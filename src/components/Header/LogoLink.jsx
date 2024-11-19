import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/argentBankLogo.svg";

function LogoLink() {
    return (
        <Link to="/" className="main-nav-logo">
            <img
                className="main-nav-logo-image"
                src={Logo}
                alt="Argent Bank Logo"
                width="200px"
                height="54.4px"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
    );
}

export default LogoLink;
