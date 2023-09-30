import { Carousel } from "@material-tailwind/react";

export function CarouselCustom({ imageUrls }) {
    return (
        <>
            <Carousel className="rounded-xl">
                {imageUrls.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt={`image ${index + 1}`}
                        className="h-full w-full object-cover"
                    />
                ))}
            </Carousel>
        </>
    );
}