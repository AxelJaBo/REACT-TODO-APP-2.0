import React from 'react';
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Tu lista no esta actualizada.</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={toggleShow}
                    >
                        Actualizar
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };