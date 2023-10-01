import React from 'react';

import HistoryCard from '../../components/About/HistoryCard';
import Title from '../../components/common/Title';
import { CarouselCustom } from '../../components/Carosol/Carousel';
import TextAndImg from '../../components/TextAndImg/TextAndImg';

import { about } from '../../constants/data';

const AboutPage = () => {
    return (
        <div className="px-4 py-2 m-2 font-bold rounded-lg bg-slate-900">
            <section>
                <CarouselCustom imageUrls={about.carouselImages} />
                <TextAndImg
                    text={about.more.description}
                    imageUrl={about.more.image}
                />
            </section>
            <section className="flex flex-col items-center my-72">
                <Title
                    title={about.history.title}
                    shadowTitle={about.history.shadowTitle}
                />

                <div className="flex flex-row gap-3 flex-wrap justify-center items-center">
                    {about.history.cards.map((item, index) => (
                        <HistoryCard key={index} {...item} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
