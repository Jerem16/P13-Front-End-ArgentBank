import React, { useState } from "react";
import { loginUser } from "../../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { selectIsLoading } from "../../redux/selector/selector";
import { useDispatch, useSelector } from "react-redux";
import { clearStoredToken } from "../../utils/token";
import { validateEmail, validatePassword } from "../../utils/validationForm"; // Adaptez le chemin si nécessaire
import "./loginForm.scss";
import Loader from "../Loader/Loader";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({});
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRememberMeChange = () => {
        if (!rememberMe) {
            clearStoredToken();
        }
        setRememberMe(!rememberMe);
    };

    const validateFields = () => {
        const newErrors = {};
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password); // Exemple, si vous voulez réutiliser validatePassword pour un autre champ

        if (emailError) newErrors.email = emailError;
        if (passwordError)
            newErrors.password =
                "Password must be at least 8 characters long and include letters, numbers, and the following special characters: !@#$%^&*_-";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateFields()) {
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
            <h1>Sign In</h1>
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
                        {errors.email && (
                            <p className="error-message">{errors.email}</p>
                        )}
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && (
                            <p className="error-message">{errors.password}</p>
                        )}
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
