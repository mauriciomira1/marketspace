import PhotosCarousel from "@components/PhotosCarousel";
import { VStack } from "native-base";
import photo01 from "@assets/productsImages/tenis-vermelho-5564/tenis-vermelho.jpg";
import photo02 from "@assets/productsImages/tenis-vermelho-5564/1.jpg";
import photo03 from "@assets/productsImages/tenis-vermelho-5564/2.jpg";
import photo04 from "@assets/productsImages/tenis-vermelho-5564/3.jpg";

const ItemDetails = () => {
  const photosUrl = [photo01, photo02, photo03, photo04];

  return (
    <VStack>
      <PhotosCarousel photosUrl={photosUrl} />
    </VStack>
  );
};

export default ItemDetails;
