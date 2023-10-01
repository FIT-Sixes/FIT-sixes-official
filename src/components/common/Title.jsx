import React from 'react';

const Title = ({ title }) => {
    return (
        <div className="flex flex-col justify-center items-center sm:-mb-5 md:-mb-10">
            <h3 className="text-2xl uppercase font-bold tracking-widest text-white -mb-8 md:text-4xl md:-mb-16">
                {title}
            </h3>
            <h1 className="text-7xl uppercase font-bold tracking-widest text-accent opacity-10 sm:text-8xl md:text-10xl">
                {title}
            </h1>
        </div>
    );
};

export default Title;
