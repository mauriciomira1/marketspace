import { Badge, Box, HStack, Image, Tag, Text, VStack } from "native-base";
import ProductPhoto from "@assets/tenis-vermelho.jpg";
import UserPhoto from "./UserPhoto";

type Props = {
  tag: "usado" | "novo";
  userPhotoSrc?: string;
};

const ProductCard = ({ tag = "usado", userPhotoSrc }: Props) => {
  return (
    <VStack>
      <UserPhoto
        w={6}
        h={6}
        borderColor="white"
        borderWidth={2}
        position="absolute"
        top={7}
        left={1}
        zIndex={10}
      />

      <Badge
        bgColor={tag === "novo" ? "blue.600" : "gray.300"}
        borderRadius="full"
        position="absolute"
        top={7}
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

      <Box w={40} h={24} rounded="md" bgColor="red.300">
        <Image
          source={ProductPhoto}
          defaultSource={ProductPhoto}
          resizeMode="cover"
          alt="Tênis vermelho"
          flex={1}
          rounded="md"
        />
      </Box>
      <Text fontFamily="body" fontSize="sm" mb={-1}>
        Tênis vermelho
      </Text>
      <HStack alignItems="baseline" space={1}>
        <Text fontFamily="body" fontSize="xs" fontWeight="bold">
          R$
        </Text>
        <Text fontFamily="body" fontSize="md" fontWeight="bold">
          59,90
        </Text>
      </HStack>
    </VStack>
  );
};

export default ProductCard;
