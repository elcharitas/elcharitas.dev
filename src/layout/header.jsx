import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";

const Header = () => (
    <section className="overflow-hidden">
        <div
            className="relative bg-coolGray-900 overflow-hidden"
            style={{
                backgroundImage: 'url("assets/elements/pattern-dark2.svg")',
                backgroundPosition: "center",
            }}
        >
            <Navbar />
            <Hero />
        </div>
    </section>
);

export default Header;
