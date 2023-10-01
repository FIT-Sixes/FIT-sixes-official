import images from './images';

const about = {
    hero: {
        title: 'cricket fiesta',
        shadowTitle: 'fit sixes',
        description: `FIT SIXES is the annual cricket encounter organized by the IT Faculty Students’ Union of the University of Moratuwa. The "FIT SIXES" is coming to the field with the intention of going beyond the traditional cricket match in order to build a bridge to establish the collaboration with the industry and create a significant day in our university lives. Along with that, we also want to give our undergraduate students a chance to interact with others who share their interests and grow professionally through these connections. The goal of this effort is to bring the FIT family's hidden sportsmanship to light and help generations after generations tie together friendship and unity.`,
        image: '',
        alt: 'cricket fiesta',
    },

    carouselImages: [
        'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    ],

    more: {
        description:
            'In the year 2022, the "FIT SIXES Cricket Fiesta" was held for the last time. With the support of students from batches 15, 16, 17, and 18, as well as more than 100 industry visitors, it was successfully concluded. When compared to previously held cricket fiestas, this event had a unique fan base every year, both in the University of Moratuwa and in the businesses associated with the industry. In addition to the faculty of IT cricket teams, more than 40 teams from 30 different companies took part in the previous match, which benefited the relationship between the faculty of IT and its industry partners.',
        image: 'https://via.placeholder.com/300',
    },

    history: {
        title: 'history',
        shadowTitle: 'history',
        cards: [
            {
                title: '2K22',
                image: images.historyCard.image_2k22,
                alt: '2K22',
            },
            {
                title: '2K19',
                image: images.historyCard.image_2k19,
                alt: '2K19',
            },
            {
                title: '2K18',
                image: images.historyCard.image_2k18,
                alt: '2K18',
            },
            {
                title: '2K17',
                image: images.historyCard.image_2k17,
                alt: '2K17',
            },
            {
                title: '2K16',
                image: images.historyCard.image_2k16,
                alt: '2K16',
            },
        ],
    },
};

export { about };
