import {
  Badge,
  Box,
  HStack,
  Image,
  Tag,
  Text,
  VStack,
  useTheme,
} from "native-base";
import ProductPhoto from "@assets/productsImages/tenis-vermelho-5564/tenis-vermelho.jpg";
import UserPhoto from "./UserPhoto";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

type Props = {
  tag: "usado" | "novo";
  userPhotoSrc?: string;
  deactivated?: boolean;
};

const ProductOnSellCard = ({ tag = "usado", deactivated = false }: Props) => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleGoToProductPage = () => {
    navigation.navigate("adNewPreview");
  };

  return (
    <VStack mb={4}>
      <Badge
        bgColor={tag === "novo" ? "blue.600" : "gray.300"}
        borderRadius="full"
        position="absolute"
        top={1}
        right={1}
        zIndex={10}
        px={2}
      >
        <Text
          color="white"
          fontFamily="body"
          fontSize={10}
          fontWeight="bold"
          textTransform="uppercase"
        >
          {tag}
        </Text>
      </Badge>
      {deactivated && (
        <Text
          color="white"
          fontFamily="body"
          fontSize={10}
          fontWeight="bold"
          textTransform="uppercase"
          position="absolute"
          top="72px"
          left={2}
          zIndex={10}
        >
          Anúncio desativado
        </Text>
      )}

      <TouchableOpacity onPress={handleGoToProductPage}>
        <Box w={40} h={24} rounded="md" bgColor="black">
          <Image
            source={ProductPhoto}
            defaultSource={ProductPhoto}
            resizeMode="cover"
            alt="Tênis vermelho"
            flex={1}
            rounded="md"
            opacity={deactivated ? 50 : 100}
          />
        </Box>
      </TouchableOpacity>
      <Text
        fontFamily="body"
        fontSize="sm"
        mb={-1}
        color={deactivated ? "gray.400" : "black"}
      >
        Tênis vermelho
      </Text>
      <HStack alignItems="baseline" space={1}>
        <Text
          fontFamily="body"
          fontSize="xs"
          fontWeight={deactivated ? "normal" : "bold"}
          color={deactivated ? "gray.400" : "black"}
        >
          R$
        </Text>
        <Text
          fontFamily="body"
          fontSize="md"
          fontWeight={deactivated ? "normal" : "bold"}
          color={deactivated ? "gray.400" : "black"}
        >
          59,90
        </Text>
      </HStack>
    </VStack>
  );
};

export default ProductOnSellCard;
