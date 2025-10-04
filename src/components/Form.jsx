import React from "react";
import { Input } from "./Input";

export function Form({ data, onChange }) {


    return (
        <div className="w-100 px-5 py-3">
            <form onSubmit={(e) => e.preventDefault()}>
                <Input
                    label="Full name"
                    placeholder="Full name"
                    type="text"
                    id="inputName"
                    name="name"
                    value={data.name} 
                    onChange={onChange}
                />
                <Input label="Email" placeholder="Email" type="email" id="inputEmail" name="email" value={data.email} onChange={onChange} />
                <Input label="Phone" placeholder="Phone number" type="text" id="inputPhone" name="phone" value={data.phone} onChange={onChange} />
                <Input label="Address" placeholder="Address" type="text" id="inputAddress" name="address" value={data.address} onChange={onChange} />
            </form>
        </div>
    )
}