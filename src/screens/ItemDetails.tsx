import PhotosCarousel from "@components/PhotosCarousel";
import { Badge, Box, HStack, ScrollView, Text, VStack } from "native-base";
import photo01 from "@assets/productsImages/tenis-vermelho-5564/tenis-vermelho.jpg";
import photo02 from "@assets/productsImages/tenis-vermelho-5564/1.jpg";
import photo03 from "@assets/productsImages/tenis-vermelho-5564/2.jpg";
import photo04 from "@assets/productsImages/tenis-vermelho-5564/3.jpg";
import {
  ArrowLeft,
  Bank,
  Barcode,
  CreditCard,
  Money,
  QrCode,
} from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import UserPhoto from "@components/UserPhoto";
import { UserDTO } from "@dtos/UserDTO";
import { ProductDTO } from "@dtos/ProductDTO";

const ItemDetails = () => {
  const photosUrl = [photo01];

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const goToHome = () => {
    navigation.navigate("home");
  };

  const userData: UserDTO = {
    id: "123456",
    avatar: "http://",
    email: "user@example.com",
    name: "Maurício Gomes",
    password: "123456",
    tel: "619123456789",
  };

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

  return (
    <>
      <ScrollView bgColor="gray.600">
        <VStack p={6} pt={12} flex={1}>
          <TouchableOpacity onPress={goToHome}>
            <ArrowLeft color="black" />
          </TouchableOpacity>

          <PhotosCarousel photosUrl={photosUrl} />

          <HStack space={2} alignItems="center">
            <UserPhoto w={8} h={8} bgColor="amber.200" />
            <Text fontFamily="body" fontSize="sm">
              {userData.name}
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
      <Box bgColor="white"></Box>
    </>
  );
};

export default ItemDetails;
