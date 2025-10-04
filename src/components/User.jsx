import React from "react";

export function User({username, info, extra}) {

    return (
        <>
            <img className="rounded-circle w-25" src={`https://avatar.iran.liara.run/username?username=${username}`} />
            <p className="fw-bold fs-5 m-0 pt-3">{extra}{username}</p>
            <p className="fw-lighter fs-6 m-0">{info}</p>
        </>
    )
}