import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "../../components/UserWelcome/UserWelcome";
import AccountTransactions from "../../components/AccountTransactions/AccountTransactions";
import Account from "../../components/Account/Account";

import "./userTransactions.scss";
import { selectUserData, selectToken } from "../../redux/selector/selector";

function UserAccount() {
    return (
        <main className="main bg-dark">
            <Account />
            <AccountTransactions />
        </main>
    );
}

export default UserAccount;
