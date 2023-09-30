import { CarouselCustom } from "../../components/Carosol/Carousel";
import TextAndImg from "../../components/TextAndImg/TextAndImg";

const AboutPage = () => {
    const imageUrls = [
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    ];

    const textContent = "In the year 2022, the \"FIT SIXES Cricket Fiesta\" was held for the last time. With the support of students from batches 15, 16, 17, and 18, as well as more than 100 industry visitors, it was successfully concluded. When compared to previously held cricket fiestas, this event had a unique fan base every year, both in the University of Moratuwa and in the businesses associated with the industry. In addition to the faculty of IT cricket teams, more than 40 teams from 30 different companies took part in the previous match, which benefited the relationship between the faculty of IT and its industry partners.";
    const imageURL = "https://via.placeholder.com/300";

    return (
        <div className="px-4 py-2 m-2 font-bold rounded-lg bg-slate-900">
            <section>{/*Hero*/}</section>
            <section>
                <CarouselCustom imageUrls={imageUrls} />
                <TextAndImg text={textContent} imageUrl={imageURL} />
            </section>
            <section>{/*History*/}</section>
        </div>
    );
};

export default AboutPage;
