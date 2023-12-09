import Button from "@components/Button";
import HomeHeader from "@components/HomeHeader";
import Input from "@components/Input";
import { VStack, Text, ScrollView } from "native-base";

const Home = () => {
  return (
    <ScrollView>
      <VStack flex={1} alignItems="center" justifyContent="center">
        <VStack
          bgColor="gray.600"
          w="full"
          px={12}
          flex={1}
          borderBottomRadius={28}
          pt={20}
        >
          <HomeHeader />

          <VStack alignItems="center" w="full">
            <Text fontFamily="body" fontSize="md">
              Acesse sua conta
            </Text>
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" type="password" />
            <Button
              title="Entrar"
              titleColor="white"
              bgColor="blue.500"
              bgOnPress="blue.600"
              mt={6}
            />
          </VStack>
        </VStack>

        <VStack w="full" alignItems="center" mt={12} px={12}>
          <Text fontFamily="body" fontSize="md">
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar uma conta"
            color="gray.400"
            bgColor="gray.500"
            bgOnPress="gray.400"
            mt={4}
            mb={12}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Home;
