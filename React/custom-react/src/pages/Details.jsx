import React from 'react'
import { useParams, useLocation } from "react-router-dom";
function Details() {
    let { id } = useParams();

    return (
        <div>
            <h1>Details</h1>
            <h2>{id}</h2>
        </div>
    )
}

export default Details