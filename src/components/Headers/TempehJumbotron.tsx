import React from "react";

export const TempehJumbotron = () => {
    return (
        <section className="header relative items-center flex h-screen max-h-860-px bg-[url('/img/portfolios/tempe.webp')] bg-cover">
            <div className="container mx-auto items-center flex flex-col md:flex-row">
                <div className="w-full">
                    <div className="pt-32 sm:pt-0 text-center">
                        <h2 className="font-semibold text-4xl md:text-7xl text-white">
                            Tempeh Engine
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-white">
                            An Experimental Game Engine.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};