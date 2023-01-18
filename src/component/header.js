import React from "react";
import Gush from "./logo512.png"
export default function Header() {
    return (
        <div>
            <nav>
            <img className = "g" src={Gush} alt = 'reac' width={88} />
                <header>
                    <h1 className="k">Ahmed Saeed</h1>
                </header>
            </nav>
        </div>
    )
}

