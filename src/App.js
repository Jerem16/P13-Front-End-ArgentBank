import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

import UserAccount from "./pages/UserAccount/UserAccount";
import UserTransactions from "./pages/UserTransactions/UserTransactions";
import Error404 from "./pages/ErrorPages/Error404";
import ErrorAuth from "./pages/ErrorPages/ErrorAuth";
import Footer from "./components/Footer/Footer";
import { getUserProfile, rememberToken } from "./redux/reducers/authSlice";
import { combineStoredToken } from "./utils/token";
import {
    selectToken,
    selectUserData,
    selectAuth,
    selectError,
} from "./redux/selector/selector";

function App() {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const data = useSelector(selectUserData);
    const authenticated = useSelector(selectAuth);
    const error = useSelector(selectError);
    useEffect(() => {
        const memToken = combineStoredToken();

        if (memToken && !token) {
            dispatch(rememberToken(memToken));
        }
        if (token && !data) {
            dispatch(getUserProfile());
        }
    }, [dispatch, token, data]);

    return (
        <>
            <Header />
            <Routes>
                <>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />

                    {authenticated ? (
                        <>
                            <Route path="/user" element={<UserAccount />} />
                            <Route
                                path="/user/profile"
                                element={<UserAccount />}
                            />
                            <Route
                                path="/user/account/:id"
                                element={<UserTransactions />}
                            />
                        </>
                    ) : (
                        <Route path="/" element={<Home />} />
                    )}
                    
                    {error ? (
                        <Route path="*" element={<ErrorAuth />} />
                    ) : (
                        <Route path="*" element={<Error404 />} />
                    )}
                </>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
