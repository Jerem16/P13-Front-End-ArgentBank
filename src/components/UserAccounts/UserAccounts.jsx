import React from "react";
import { Link } from "react-router-dom";

import accountData from "../../assets/data/accountData.json";

import "./UserAccounts.scss";

function Account() {
    return (
        <>
            <h2 className="sr-only">Accounts</h2>
            {accountData.accounts.map((account) => (
                <section className="account" key={account.id}>
                    <div className="account-content-wrapper">
                        <h3 className="account-title">{account.title}</h3>
                        <p className="account-amount">{account.amount}</p>
                        <p className="account-amount-description">
                            {account.description}
                        </p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <Link to={`/user/account/${account.id}`}>
                            <button className="transaction-button">
                                View transactions
                            </button>
                        </Link>
                    </div>
                </section>
            ))}
        </>
    );
}

export default Account;
