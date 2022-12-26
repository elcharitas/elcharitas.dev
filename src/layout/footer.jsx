const Footer = () => (
    <section
        className="bg-coolGray-900"
        style={{
            backgroundImage: 'url("assets/elements/pattern-dark.svg")',
            backgroundPosition: "center",
        }}
    >
        <div className="border-b border-coolGray-800" />
        <div className="container px-4 mx-auto">
            <p className="text-md text-coolGray-400 font-medium text-center py-10">
                © 2015-2022 Jonathan Irhodia. All rights reserved. Built with
                Solid
            </p>
        </div>
    </section>
);

export default Footer;
