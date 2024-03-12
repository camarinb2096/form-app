import React from 'react';
import './styles/input.css';

export default function Input({ Icon, className, style, placeholder, label, type, options }) {
    return (
      <div className="input-container">
        {label && <label className="input-label">{label}</label>}
        <div className="input-with-icon">
          {Icon && <Icon className="input-icon" />}
          {type === 'select' ? (
            <select style={style}>
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              style={style}
              placeholder={placeholder}
            />
          )}
        </div>
      </div>
    );
}
