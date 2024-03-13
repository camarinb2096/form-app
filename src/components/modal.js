import React from "react";

const ConfirmModal = ({ show, close, message }) => {
    return (
        <div className="Modal" style={{ display: show ? 'flex' : 'none' }}>
            <div className="Modal-Content">
                <h2>{message.title}!!</h2>
                <p>{message.body}</p>
                <button onClick={close} className="Modal-Button">Cerrar</button>
            </div>
        </div>
    );
}

export default ConfirmModal;