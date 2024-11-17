// AccountTransactions.jsx
import React, { useState } from "react";
import TransactionDetails from "./TransactionDetails";
import { useParams } from "react-router-dom";
import accountData from "../../assets/data/accountData.json";
import "./AccountTransactions.scss";

function AccountTransactions() {
    const [openTransactionID, setOpenTransactionID] = useState(null);
    const [editableCategory, setEditableCategory] = useState("");
    const [editableNote, setEditableNote] = useState("");

    const handleTransactionClick = (transactionID) => {
        setOpenTransactionID((prevID) =>
            prevID === transactionID ? null : transactionID
        );
    };

    const { id } = useParams();
    let transactions = [];
    const selectedAccount = accountData.accounts.find(
        (account) => account.id === id
    );

    if (selectedAccount) {
        transactions = selectedAccount.transactions;
    } else {
        console.log("Compte introuvable.");
        return <div>Compte introuvable.</div>;
    }

    function formatDate(dateString) {
        const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    const handleSaveChanges = (newCategory, newNote, transactionID) => {
        const updatedData = { ...accountData };

        for (const account of updatedData.accounts) {
            for (const transaction of account.transactions) {
                if (transaction.transactionID === transactionID) {
                    transaction.category = newCategory;
                    transaction.note = newNote;
                    break;
                }
            }
        }
    };

    function handleSetEditableNote(selectedTransaction) {
        setEditableNote(selectedTransaction.note);
    }

    function handleSetEditableCategory(selectedTransaction) {
        setEditableCategory(selectedTransaction.category);
    }

    return (
        <section className="transactions" key={selectedAccount.id}>
            <h2 className="sr-only">Transactions</h2>
            <div className="account-content-wrapper">
                <div className="transactions-labels">
                    <p className="transaction-label">Date</p>
                    <p className="transaction-label">Description</p>
                    <p className="transaction-label">Amount</p>
                    <p className="transaction-label">Balance</p>
                    <p className="transaction-icone">&nbsp;</p>
                </div>
                <div>
                    {transactions.map((transaction, index) => (
                        <div
                            className="transactionsColumnDetail"
                            key={transaction.transactionID}
                        >
                            <span className="transactions-details">
                                <p className="transaction-value">
                                    {formatDate(transaction.date)}
                                </p>
                                <p className="transaction-value">
                                    {transaction.description}
                                </p>
                                <p className="transaction-value">
                                    {transaction.amount}
                                </p>
                                <p className="transaction-value">
                                    {transaction.balance}
                                </p>
                                <p
                                    className="transaction-icone"
                                    onClick={() =>
                                        handleTransactionClick(
                                            transaction.transactionID
                                        )
                                    }
                                >
                                    <i
                                        className={`fa fa-chevron-up`}
                                        style={{
                                            color: "lightgrey",
                                            transformOrigin: "center",
                                            transform: `rotate(${
                                                transaction.transactionID ===
                                                openTransactionID
                                                    ? "-180deg"
                                                    : "0deg"
                                            })`,
                                            transition: "all 0.3s ease-in-out",
                                        }}
                                    ></i>
                                </p>
                            </span>
                            <TransactionDetails
                                key={transaction.transactionID}
                                transaction={transaction}
                                handleSaveChanges={handleSaveChanges}
                                editableCategory={editableCategory}
                                editableNote={editableNote}
                                handleSetEditableCategory={
                                    handleSetEditableCategory
                                }
                                handleSetEditableNote={handleSetEditableNote}
                                isOpen={
                                    transaction.transactionID ===
                                    openTransactionID
                                }
                                onClick={() =>
                                    handleTransactionClick(
                                        transaction.transactionID
                                    )
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AccountTransactions;
