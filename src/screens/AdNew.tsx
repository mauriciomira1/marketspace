import UserPhoto from "@components/UserPhoto";
import { HStack, VStack, Text } from "native-base";
import Button from "@components/Button";

const AdNew = () => {
  return (
    <VStack py={10} px={6} flex={1}>
      <HStack flex={1} justifyContent="space-between">
        <HStack>
          <UserPhoto w={12} h={12} iconSize={12} />
          <VStack pl={2}>
            <Text fontFamily="body" fontSize="md" mb={-1}>
              Boas vindas,
            </Text>
            <Text fontFamily="body" fontSize="lg" fontWeight="bold">
              Maria!
            </Text>
          </VStack>
        </HStack>

        <Button
          title="Criar anúncio"
          titleColor="white"
          bgColor="gray.100"
          bgOnPress="gray.200"
        />
      </HStack>
    </VStack>
  );
};

export default AdNew;
