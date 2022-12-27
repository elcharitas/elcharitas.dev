import React from "react";

const ErrorPage = () => (
    <div>
        <section
            className="relative py-24 md:py-44 lg:py-64 bg-coolGray-50"
            style={{
                backgroundImage: 'url("assets/elements/pattern-dark2.svg")',
                backgroundPosition: "center",
            }}
        >
            <div className="relative z-10 container px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-primary-900 bg-primary-100 font-medium rounded-full shadow-sm">
                        Error 404
                    </span>
                    <h2 className="mb-4 text-4xl md:text-5xl leading-tight text-white font-bold tracking-tighter">
                        Page not found
                    </h2>
                    <p className="mb-12 text-lg md:text-xl text-coolGray-400">
                        Something went wrong, so this page is broken.
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-auto py-1 md:py-0 md:mr-6">
                            <a
                                className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-primary-50 font-medium text-center bg-primary-500 hover:bg-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 rounded-md shadow-sm"
                                href="#"
                            >
                                Go back to Homepage
                            </a>
                        </div>
                        <div className="w-full md:w-auto py-1 md:py-0">
                            <a
                                className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-100 font-medium text-center bg-coolGray-600 hover:bg-coolGray-700 focus:ring-2 focus:ring-coolGray-700 focus:ring-opacity-50 rounded-md shadow-sm"
                                href="#"
                            >
                                Try Again
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default ErrorPage;
