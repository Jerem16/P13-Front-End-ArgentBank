import React, { useState } from "react";
import { loginUser } from "../../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { selectIsLoading } from "../../redux/selector/selector";
import { useDispatch, useSelector } from "react-redux";
import { clearStoredToken } from "../../redux/reducers/token";
import "./loginForm.scss";
import Loader from "../Loader/Loader";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRememberMeChange = () => {
        if (!rememberMe) {
            clearStoredToken();
        }
        setRememberMe(!rememberMe);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please complete all fields.");
            return;
        }

        dispatch(loginUser(email, password))
            .then(() => {
                handleRememberMeChange();
                navigate("/user");
            })
            .catch((error) => {
                alert("Connection error. Please try Again.", error);
            });
    };
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>{" "}
            {isLoading ? (
                <Loader />
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                </form>
            )}
        </section>
    );
}

export default LoginForm;
