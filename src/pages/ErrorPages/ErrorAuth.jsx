import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./error.scss";

function ErrorAuth() {
    const navigate = useNavigate();

    const [countdown, setCountdown] = useState(4);

    const num = 399 + countdown;

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate("/login");
        }, countdown * 1000);

        const intervalId = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1250);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [navigate, countdown]);

    return (
        <main className="error-404">
            <div className="borderError">
                <h1 className="error-404_h1">{num}</h1>
                <p className="error-404_p">
                    Access denied, this page requires authorization.
                    <br />
                    <br />
                    <span>Authenticate yourself.</span>
                </p>

                <p className="error-404_countdown">
                    Redirecting in {countdown} seconds...
                </p>

                <Link to="/login" className="error-404_a">
                    Return to the login page
                </Link>
            </div>
        </main>
    );
}

export default ErrorAuth;
