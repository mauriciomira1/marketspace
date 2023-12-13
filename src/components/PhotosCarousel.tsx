import { Box, View } from "native-base";
import { Image } from "react-native";
import PagerView from "react-native-pager-view";

type Props = {
  photosUrl: Image[];
};

const PhotosCarousel = ({ photosUrl }: Props) => {
  return (
    <Box>
      <PagerView>
        {photosUrl.map((photo) => (
          <View key={1}>{photo}</View>
        ))}
      </PagerView>
    </Box>
  );
};

export default PhotosCarousel;
