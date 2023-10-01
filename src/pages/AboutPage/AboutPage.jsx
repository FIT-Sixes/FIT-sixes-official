import React from 'react';

import HistoryCard from '../../components/About/HistoryCard';
import Title from '../../components/common/Title';

import { historyCards } from '../../constants/data';

const AboutPage = () => {
    return (
        <>
            <section className="h-[100vh]">{/* About */}</section>
            <section className="h-[100vh]">{/* Shawcase */}</section>

            <section className="flex flex-col items-center my-72">
                <Title title="history"/>

                <div className="flex flex-row gap-3 flex-wrap justify-center items-center">
                    {historyCards.map((item, index) => (
                        <HistoryCard key={index} {...item} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default AboutPage;
