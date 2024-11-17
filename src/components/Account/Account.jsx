import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import accountData from "../../assets/data/accountData.json";

import "./account.scss";

function Account() {
    const navigate = useNavigate();
    const { id } = useParams();
    const accountId = id;

    const [account, setAccount] = useState(null);

    useEffect(() => {
        const selectedAccount = accountData.accounts.find(
            (account) => account.id === accountId
        );

        if (!selectedAccount) {
            navigate("*");
            console.log("Compte introuvable.");
        } else {
            setAccount(selectedAccount);
        }
    }, [navigate, accountId]);

    return (
        <>
            <h1 className="sr-only">UserAccount</h1>

            {account ? (
                <section className="accountPage" key={account.id}>
                    <h2 className="sr-only">Accounts</h2>
                    <div className="account-content-wrapper">
                        <h3 className="account-title">{account.title}</h3>
                        <p className="account-amount">
                            {account.amount}{" "}
                            <Link to={`/argent_bank/user`}>
                                <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                ></i>
                            </Link>
                        </p>
                        <p className="account-amount-description">
                            {account.description}
                        </p>
                    </div>
                    <div className="account-content-wrapper cta"></div>
                </section>
            ) : (
                <></>
            )}
        </>
    );
}

export default Account;
