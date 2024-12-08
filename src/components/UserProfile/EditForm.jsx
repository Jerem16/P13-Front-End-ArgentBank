import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    selectToken,
    selectUserName,
    selectFirstName,
    selectLastName,
} from "../../redux/selector/selector";
import { updateProfile } from "../../redux/reducers/authSlice";

import "./editForm.scss";

function EditForm({ onClose }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(selectToken);

    const userName = useSelector(selectUserName); // Ancien userName
    const firstName = useSelector(selectFirstName);
    const lastName = useSelector(selectLastName);

    const [newUserName, setNewUserName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const isAlphanumeric = (str) => /^[a-zA-Z0-9]*$/.test(str); // Fonction de validation

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation des caractères alphanumériques
        if (newUserName.trim() === "") {
            setErrorMessage("User Name cannot be empty.");
            return;
        }

        if (!isAlphanumeric(newUserName)) {
            setErrorMessage(
                "User Name can only contain alphanumeric characters."
            );
            setNewUserName(userName); // Restaurer l'ancien userName
            return;
        }

        const updatedUserName = { userName: newUserName };
        dispatch(updateProfile(token, updatedUserName))
            .then(() => {
                navigate("/user");
                onClose();
            })
            .catch(() => {
                setErrorMessage("Connection error. Please try again.");
            });
    };

    const cancel = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div>
            <h1>
                Edit user info
                <br />
            </h1>
            <form className="UserSettings" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="user_Name">User Name</label>
                    <input
                        type="text"
                        id="user_Name"
                        placeholder={userName}
                        value={newUserName} // Contrôle la valeur saisie
                        onChange={(e) => {
                            setNewUserName(e.target.value);
                            setErrorMessage(""); // Réinitialise le message d'erreur
                        }}
                        required
                    />
                </div>
                {errorMessage && (
                    <div className="error-message" style={{ color: "red" }}>
                        {errorMessage}
                    </div>
                )}
                <div>
                    <label htmlFor="first_Name">First name</label>
                    <input
                        type="text"
                        id="first_Name"
                        value={firstName ?? ""}
                        readOnly
                        disabled
                    />
                </div>
                <div>
                    <label htmlFor="last_Name">Last name</label>
                    <input
                        type="text"
                        id="last_Name"
                        value={lastName ?? ""}
                        readOnly
                        disabled
                    />
                </div>
                <div className="wrapper-button buttons">
                    <button type="submit" className="edit-button">
                        Save
                    </button>
                    <button
                        type="button"
                        className="edit-button"
                        onClick={cancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditForm;
