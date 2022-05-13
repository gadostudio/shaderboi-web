import React from "react";

const descriptions = [
    {
        title: "Cross Platform",
        desc: "A game engine that can run on nearly any platforms!",
        image: "/img/misc/placeholder.jpg",
    },
    {
        title: "Documented",
        desc: "Man! Even The Arch Wiki will envy our documentation!",
        image: "/img/misc/placeholder.jpg",
    },
    {
        title: "Easy to Use",
        desc: "Have you ever breathe? Then you can use this!",
        image: "/img/misc/placeholder.jpg",
    },
];

export const AboutTempeh = () => {
    return(
        <>
            <section className="pb-12 relative bg-blueGray-100">
                <div className="block md:flex pt-12 gap-44 justify-center text-center">
                    {descriptions.map((description, idx) => {
                        return (
                            <div key={idx} className="w-auto">
                                <img src={description.image} className="pb-5 object-cover w-44 mx-auto" />
                                <h3 className="font-semibold text-4xl pb-2">{ description.title }</h3>
                                <p className="pb-10 text-5l w-52 mx-auto">{ description.desc }</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    )
}