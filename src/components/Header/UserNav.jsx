import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/reducers/authSlice";
import { clearStoredToken } from "../../utils/token";
import { selectUserData, selectIsLoading } from "../../redux/selector/selector";

import LoaderRod from "../Loader/LoaderRod";
import "./header.scss";

function UserNav() {
    const userData = useSelector(selectUserData);
    const isLoading = useSelector(selectIsLoading);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isSignedIn = !!userData?.userName;

    const handleSignOut = (e) => {
        e.preventDefault();
        clearStoredToken();
        dispatch(logoutUser());
        navigate("/");
    };

    if (isLoading) {
        return <LoaderRod />;
    }

    if (isSignedIn) {
        return (
            <div className="main-nav-col">
                <Link to="/user" className="main-nav-item">
                    <i className="fa fa-user-circle"></i> {userData.userName}
                </Link>
                <button
                    className="main-nav-item button"
                    onClick={handleSignOut}
                >
                    <i className="fa fa-sign-out"></i> Sign Out
                </button>
            </div>
        );
    }

    return (
        <div className="main-nav-col">
            <Link to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i> Sign In
            </Link>
        </div>
    );
}

export default UserNav;
