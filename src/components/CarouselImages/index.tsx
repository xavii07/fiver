import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface IImagenes {
  imagenes: string[];
}

const CauruselImages: React.FC<IImagenes> = ({ imagenes = [] }) => {
  console.log({ imagenes });

  return (
    <AliceCarousel
      animationType="slide"
      animationDuration={800}
      autoPlayInterval={3000}
      autoPlay={true}
      infinite
      mouseTracking
      items={imagenes.map((imagen) => (
        <img src={imagen} width={400} height={250} />
      ))}
    />
  );
};

export default CauruselImages;
