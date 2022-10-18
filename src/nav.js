import React from "react";
import logo from "./images/logo.png"

export default function Nav() {
    return (
        <nav>
            <img src={logo} alt="logo" />
            <h3>Meme Generator</h3>
        </nav>
    )
}