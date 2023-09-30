import { CarouselCustom } from "../../components/Carosol/Carousel";
import TextAndImg from "../../components/TextAndImg/TextAndImg";

const AboutPage = () => {
    const imageUrls = [
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    ];

    const textContent = "Some text content goes here...";
    const imageURL = "https://via.placeholder.com/300";

    return (
        <div className="px-4 py-2 m-2 font-bold rounded-lg bg-slate-900">
            <h1 className="text-lg text-white">Top Section</h1>

            <CarouselCustom imageUrls={imageUrls} />
            <TextAndImg text={textContent} imageUrl={imageURL} />
        </div>
    );
};

export default AboutPage;
