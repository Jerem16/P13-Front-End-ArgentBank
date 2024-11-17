// TransactionDetails.jsx
import React, { useState } from "react";

function TransactionDetails({
    transaction,
    handleSaveChanges, 
    isOpen,
    onClick,
}) {
    
    const [editableCategory, setEditableCategory] = useState("");
    const [editableNote, setEditableNote] = useState("");
    const [isEditingCategory, setIsEditingCategory] = useState(false);
    const [isEditingNote, setIsEditingNote] = useState(false);

    
    const startEditingCategory = () => {
        setEditableCategory(transaction.category);
        setIsEditingCategory(true);
    };

    
    const startEditingNote = () => {
        setEditableNote(transaction.note);
        setIsEditingNote(true);
    };

    
    const saveChanges = () => {
       
        handleSaveChanges(
            editableCategory,
            editableNote,
            transaction.transactionID
        );
        setIsEditingCategory(false);
        setIsEditingNote(false);
    };

    return (
        <form
            className={`collapse-content ${isOpen ? "opened" : "closed"}`}
            style={{
                maxHeight: isOpen ? "1000px" : "0",
                transform: `scaleY(${isOpen ? 1 : 0})`,
                transformOrigin: "top",
                transition: "all 0.3s ease-in-out",
            }}
        >
            <div className="transactions_Collapsed-Details">
                <label htmlFor="transaction_Type" className="transaction-value">
                    Transaction type
                </label>
                <input
                    className="transaction-input"
                    type="text"
                    id="transaction_Type"
                    value={transaction.type}
                    readOnly
                    disabled
                />
            </div>
            <div className="transactions_Collapsed-Details">
                <label htmlFor="Category" className="transaction-value">
                    Category
                </label>
                <div className="transaction-input">
                    {isEditingCategory ? (
                        <>
                            <input
                                className="transaction-input"
                                type="text"
                                id="Category"
                                value={editableCategory}
                                onChange={(e) =>
                                    setEditableCategory(e.target.value)
                                }
                            />
                            <i
                                onClick={saveChanges}
                                className="fa fa-check"
                                aria-hidden="true"
                            ></i>
                        </>
                    ) : (
                        <>
                            <span>{editableCategory}</span>
                            <i
                                onClick={startEditingCategory}
                                className="fa fa-pencil"
                                aria-hidden="true"
                            ></i>
                        </>
                    )}
                </div>
            </div>
            <div className="transactions_Collapsed-Details">
                <label htmlFor="Note" className="transaction-value">
                    Note
                </label>
                <div className="transaction-input">
                    {isEditingNote ? (
                        <>
                            <input
                                className="transaction-input"
                                type="text"
                                id="Note"
                                value={editableNote}
                                onChange={(e) =>
                                    setEditableNote(e.target.value)
                                }
                            />
                            <i
                                onClick={saveChanges}
                                className="fa fa-check"
                                aria-hidden="true"
                            ></i>
                        </>
                    ) : (
                        <>
                            <span>{editableNote}</span>
                            <i
                                onClick={startEditingNote}
                                className="fa fa-pencil"
                                aria-hidden="true"
                            ></i>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
}

export default TransactionDetails;
