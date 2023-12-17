import { Badge, Box, HStack, ScrollView, Text, VStack } from "native-base";

import { ProductDTO } from "@dtos/ProductDTO";

import {
  ArrowLeft,
  Bank,
  Barcode,
  CreditCard,
  Money,
  PencilLine,
  QrCode,
} from "phosphor-react-native";

import photo01 from "@assets/productsImages/tenis-vermelho-5564/tenis-vermelho.jpg";
import photo02 from "@assets/productsImages/tenis-vermelho-5564/1.jpg";
import photo03 from "@assets/productsImages/tenis-vermelho-5564/2.jpg";
import photo04 from "@assets/productsImages/tenis-vermelho-5564/3.jpg";
import PhotosCarousel from "@components/PhotosCarousel";
import { TouchableOpacity } from "react-native";
import UserPhoto from "@components/UserPhoto";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

const AdDetails = () => {
  const photosUrl = [photo01];

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const productData: ProductDTO = {
    acceptTrade: true,
    description:
      "Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.",
    isNew: true,
    name: "Tênis adidas PX122",
    paymentMethods: ["boleto", "credito", "pix"],
    price: 360,
    productImages: [photo01],
  };

  const goToPreviousPage = () => {
    navigation.goBack();
  };

  return (
    <ScrollView bgColor="gray.600">
      <VStack w="full" pt={12}>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          mb={4}
          mx={6}
        >
          <TouchableOpacity onPress={goToPreviousPage}>
            <ArrowLeft color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <PencilLine color="black" />
          </TouchableOpacity>
        </HStack>

        <Box overflow="hidden" bgColor="red.300" w="full">
          <PhotosCarousel photosUrl={photosUrl} />
        </Box>
      </VStack>

      <VStack p={6} pt={4} flex={1}>
        <HStack space={2} alignItems="center">
          <UserPhoto w={8} h={8} bgColor="amber.200" />
          <Text fontFamily="body" fontSize="sm">
            Maurício Miranda
          </Text>
        </HStack>

        <Badge rounded="full" bgColor="gray.500" mt={5} px={2} w={16}>
          <Text fontFamily="body" fontSize="xs">
            {productData.isNew ? "NOVO" : "USADO"}
          </Text>
        </Badge>

        <HStack justifyContent="space-between" mt={2} alignItems="baseline">
          <Text
            fontFamily="heading"
            fontSize="lg"
            fontWeight="semibold"
            flexShrink={1}
          >
            {productData.name}
          </Text>
          <HStack alignItems="baseline" space={1}>
            <Text
              fontFamily="body"
              fontSize="sm"
              fontWeight="semibold"
              color="blue.500"
            >
              R$
            </Text>
            <Text
              fontFamily="body"
              fontSize="lg"
              fontWeight="bold"
              color="blue.500"
            >
              {productData.price}
            </Text>
          </HStack>
        </HStack>

        <Text fontFamily="body" mt={2}>
          {productData.description}
        </Text>

        <HStack space={2} mt={4}>
          <Text fontFamily="body" fontWeight="bold">
            Aceita troca?
          </Text>
          <Text>{productData.acceptTrade ? "Sim" : "Não"}</Text>
        </HStack>
        {productData.paymentMethods.map((method) => {
          switch (method) {
            case "boleto":
              return (
                <HStack alignItems="center" space={2} mt={1} key={method}>
                  <Barcode size={20} />
                  <Text>Boleto</Text>
                </HStack>
              );
            case "pix":
              return (
                <HStack alignItems="center" space={2} mt={1} key={method}>
                  <QrCode size={20} />
                  <Text>Pix</Text>
                </HStack>
              );
            case "dinheiro":
              return (
                <HStack alignItems="center" space={2} mt={1} key={method}>
                  <Money size={20} />
                  <Text>Dinheiro</Text>
                </HStack>
              );
            case "credito":
              return (
                <HStack alignItems="center" space={2} mt={1} key={method}>
                  <CreditCard size={20} />
                  <Text>Cartão de Crédito</Text>
                </HStack>
              );
            case "deposito":
              return (
                <HStack alignItems="center" space={2} mt={1} key={method}>
                  <Bank size={20} />
                  <Text>Depósito Bancário</Text>
                </HStack>
              );
            default:
              return null;
          }
        })}
      </VStack>
    </ScrollView>
  );
};

export default AdDetails;
