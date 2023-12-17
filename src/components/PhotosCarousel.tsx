import { Box, Image } from "native-base";
import { ImageSourcePropType } from "react-native";
import PagerView from "react-native-pager-view";

type Props = {
  photosUrl: ImageSourcePropType[];
};

const PhotosCarousel = ({ photosUrl }: Props) => {
  return photosUrl.map((photo, index) => (
    <Image
      source={photo}
      key={index}
      alt="Foto do produto"
      resizeMode="cover"
      w="full"
      h="full"
    />
  ));
};

export default PhotosCarousel;
