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
            <Navbar></Navbar>
            <Hero></Hero>
        </div>
        <div className="container px-4 py-20 md:pb-32 mx-auto -mt-32 md:-mt-72">
            <div className="relative mx-auto max-w-max">
                <img
                    className="absolute -left-8 -top-8 w-28 md:w-auto text-yellow-400"
                    src="assets/elements/circle3-green.svg"
                    alt
                />
                <img
                    className="absolute -right-8 -bottom-8 w-28 md:w-auto text-primary-500"
                    src="assets/elements/wave-violet.svg"
                    alt
                />
                <div className="relative overflow-hidden rounded-7xl"></div>
            </div>
        </div>
    </section>
);

export default Header;
