import { Image, ImageSourcePropType } from "react-native";
import PagerView from "react-native-pager-view";

type Props = {
  photosUrl: ImageSourcePropType[];
};

const PhotosCarousel = ({ photosUrl }: Props) => {
  return (
    <PagerView>
      {photosUrl.map((photo) => (
        <Image
          source={photo}
          width={36}
          height={36}
          key={photo.valueOf.name}
          alt="Foto do produto"
          resizeMode="cover"
        />
      ))}
    </PagerView>
  );
};

export default PhotosCarousel;
