import React from "react";

export function Input({label, type, placeholder, id, name, value, onChange}) {


    return (
        <div className="pt-3">
            <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                    <label htmlFor={id} className="col-form-label">{label}</label>
                </div>
                <div className="col-9">
                    <input 
                        type={type} 
                        id={id} 
                        className="form-control rounded-pill border-0 px-4 py-3" 
                        placeholder={placeholder} 
                        name={name}
                        value={value}
                        onChange={onChange} 
                    />
                </div>
            </div>
        </div>
    )
}