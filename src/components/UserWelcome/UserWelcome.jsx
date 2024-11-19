import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserData } from "../../redux/selector/selector";
import EditForm from "../UserProfile/EditForm";
import Loader from "../Loader/Loader";
import "./UserWelcome.scss";

function UserProfile() {
    const userData = useSelector(selectUserData);

    const [isEditing, setIsEditing] = useState(false);
    const [loadingText, setLoadingText] = useState("");

    const navigate = useNavigate();

    const handleEditClick = () => {
        setIsEditing(true);
        navigate("/user/profile");
    };

    const handleEditFormClose = () => {
        setIsEditing(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingText((prevText) => {
                if (prevText === "...") {
                    return "";
                } else {
                    return prevText + ".";
                }
            });
        }, 333);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="main_head">
            {isEditing ? (
                <EditForm onClose={handleEditFormClose} />
            ) : (
                <>
                    {userData ? (
                        <>
                            <h1>
                                Welcome back
                                <br />
                                {userData.firstName} {userData.lastName} !
                            </h1>
                        </>
                    ) : (
                        <>
                            <h1 className="fixed_loading-dots">
                                Loading
                                <span className="loading-dots">
                                    {loadingText}
                                </span>
                                <br />
                                <Loader />
                            </h1>
                        </>
                    )}

                    <button className="edit-button" onClick={handleEditClick}>
                        Edit Name
                    </button>
                </>
            )}
        </div>
    );
}

export default UserProfile;
const a1 = "3px 3px";
const a2 = "5px 3px";
const a3 = "7px 10px";
const a4 = "9px 30px";
const a5 = "10px 50px";
