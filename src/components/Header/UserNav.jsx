import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deco } from "../../redux/reducers/authSlice";
import { clearStoredToken } from "../../redux/reducers/token";
import { selectUserData, selectIsLoading } from "../../redux/selector/selector"; // Incluez selectIsLoading ici

import LoaderRod from "../Loader/LoaderRod";
import "./header.scss";

function UserNav() {
    const userData = useSelector(selectUserData);
    const isLoading = useSelector(selectIsLoading); // Utilisez selectIsLoading ici

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = (e) => {
        e.preventDefault();
        navigate("/argent_bank/");
        clearStoredToken();
        dispatch(deco());
    };

    return (
        <div className="main-nav-col">
            {userData && userData.userName ? (
                <>
                    <Link to="/argent_bank/user" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>{" "}
                        {userData.userName}
                    </Link>
                    <Link className="main-nav-item" onClick={handleSignOut}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </>
            ) : isLoading ? (
                <LoaderRod />
            ) : (
                <Link to="/argent_bank/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i> Sign In
                </Link>
            )}
        </div>
    );
}

export default UserNav;
