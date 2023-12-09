import { VStack, Heading, Text } from "native-base";
import Logotipo from "@assets/logo.svg";

const HomeHeader = () => {
  return (
    <VStack alignItems="center" justifyContent="center" marginBottom={20}>
      <Logotipo />

      <Heading fontFamily="heading" fontSize="4xl">
        marketspace
      </Heading>
      <Text fontFamily="body" fontSize="sm">
        Seu espaço de compra e venda online.
      </Text>
    </VStack>
  );
};

export default HomeHeader;
