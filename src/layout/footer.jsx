import React from "react";

const Footer = () => (
    <section
        className="bg-coolGray-900"
        style={{
            backgroundImage: 'url("assets/elements/pattern-dark.svg")',
            backgroundPosition: "center",
        }}
    >
        <div className="container px-4 mx-auto">
            <div className="pt-24 pb-11 mx-auto max-w-4xl">
                <a className="block md:mx-auto mb-5 max-w-max" href="#"></a>
                <div className="flex flex-wrap justify-center -mx-3 lg:-mx-6">
                    <div className="w-full md:w-auto p-3 md:px-6">
                        <a
                            className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
                            href="#"
                        >
                            Product
                        </a>
                    </div>
                    <div className="w-full md:w-auto p-3 md:px-6">
                        <a
                            className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
                            href="#"
                        >
                            Features
                        </a>
                    </div>
                    <div className="w-full md:w-auto p-3 md:px-6">
                        <a
                            className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
                            href="#"
                        >
                            Pricing
                        </a>
                    </div>
                    <div className="w-full md:w-auto p-3 md:px-6">
                        <a
                            className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
                            href="#"
                        >
                            Resources
                        </a>
                    </div>
                    <div className="w-full md:w-auto p-3 md:px-6">
                        <a
                            className="inline-block text-lg md:text-xl text-coolGray-400 hover:text-coolGray-500 font-medium"
                            href="#"
                        >
                            Careers
                        </a>
                    </div>
                    <div className="w-full md:w-auto p-3 md:px-6" />
                    <div className="w-full md:w-auto p-3 md:px-6" />
                </div>
            </div>
        </div>
        <div className="border-b border-coolGray-800" />
        <div className="container px-4 mx-auto">
            <p className="text-lg md:text-xl text-coolGray-400 font-medium text-center py-10">
                © 2015-2022 Jonathan Irhodia. All rights reserved. Built with
                Solid
            </p>
        </div>
    </section>
);

export default Footer;
