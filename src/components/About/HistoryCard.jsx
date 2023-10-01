import React from 'react';

const HistoryCard = ({ title, image, alt }) => {
    return (
        <div className="w-[180px] flex flex-col justify-center items-center p-2 rounded-5xl bg-slate-50 bg-opacity-40 md:w-[200px]">
            <img className='w-full object-cover' src={image} alt={alt} />
            <h3 className="uppercase text-3xl text-white font-bold my-2">
                {title}
            </h3>
        </div>
    );
};

export default HistoryCard;
