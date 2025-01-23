import React from "react";

function SaveButton({ onClick, label, isLoading }) {
    return (
        <button className="admin-save-button" onClick={onClick} disabled={isLoading}>
            {isLoading ? (
                <span className="spinner">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                    >
                        <circle cx="50" cy="50" r="35" strokeWidth="10" strokeDasharray="164.933" strokeDashoffset="0">
                            <animate
                                attributeName="stroke-dashoffset"
                                from="0"
                                to="164.933"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                        </circle>
                    </svg>
                </span>
            ) : (
                label
            )}
        </button>
    );
}

export default SaveButton;