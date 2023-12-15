import { ScrollView, Text, VStack } from "native-base";

import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import Button from "@components/Button";
import HomeHeader from "@components/HomeHeader";
import Input from "@components/Input";

const SignIn = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const handleNewAccount = () => {
    navigation.navigate("signUp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
            onPress={handleNewAccount}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default SignIn;
