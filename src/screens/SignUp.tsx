import Logotipo from "@assets/logo.svg";
import Button from "@components/Button";
import Input from "@components/Input";
import UserPhoto from "@components/UserPhoto";
import { VStack, Text, ScrollView } from "native-base";

const SignUp = () => {
  return (
    <ScrollView bgColor="gray.600">
      <VStack flex={1} p={8} alignItems="center">
        <VStack alignItems="center" pb={4}>
          <Logotipo width={72} />
          <Text fontFamily="heading" fontSize="xl">
            Boas vindas!
          </Text>
          <Text fontFamily="body" fontSize="sm" textAlign="center">
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtos
          </Text>
        </VStack>
        <UserPhoto showEditIcon />
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Telefone" />
        <Input placeholder="Senha" />
        <Input placeholder="Confirmar senha" />
        <Button
          title="Criar"
          bgColor="gray.100"
          titleColor="white"
          bgOnPress="gray.200"
          mt={4}
          w="full"
        />
        <Text pt={4}>Já tem uma conta?</Text>
        <Button
          title="Ir para login"
          bgColor="gray.500"
          titleColor="gray.200"
          bgOnPress="gray.400"
          w="full"
        />
      </VStack>
    </ScrollView>
  );
};

export default SignUp;
