import React from "react";

import UserWelcome from "../../components/UserWelcome/UserWelcome";
import UserAccounts from "../../components/UserAccounts/UserAccounts";

import "./userAccount.scss";


function UserAccount() {


    return (
        <main className="main bg-dark">
            <UserWelcome />
            <UserAccounts />
        </main>
    );
}

export default UserAccount;
