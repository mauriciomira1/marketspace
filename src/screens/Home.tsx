import UserPhoto from "@components/UserPhoto";
import {
  HStack,
  VStack,
  Text,
  useTheme,
  ScrollView,
  Input,
  Divider,
  Button as NativeBaseButton,
  Box,
  useDisclose,
  Actionsheet,
} from "native-base";

import {
  ArrowRight,
  MagnifyingGlass,
  Plus,
  Sliders,
  Tag,
} from "phosphor-react-native";

import Button from "@components/Button";
import ProductCard from "@components/ProductCard";
import FilterTab from "@components/FilterTab";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

const Home = () => {
  const { colors } = useTheme();

  const { isOpen, onOpen, onClose } = useDisclose();

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleOnCloseByButtonClose = () => {
    return onClose();
  };

  const goToMyAds = () => {
    navigation.navigate("myAds");
  };

  const goToNewAdPage = () => {
    navigation.navigate("adNew");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Actionsheet onClose={onClose} isOpen={isOpen}>
        <Actionsheet.Content>
          <FilterTab closeByButton={handleOnCloseByButtonClose} />
        </Actionsheet.Content>
      </Actionsheet>

      <VStack py={10} px={6} flex={1} bgColor="gray.600">
        <HStack justifyContent="space-between" pb={8}>
          <HStack>
            <UserPhoto w={12} h={12} />
            <VStack pl={2}>
              <Text fontFamily="body" fontSize="sm" mb={-1} mt={1}>
                Boas vindas,
              </Text>
              <Text fontFamily="body" fontSize="md" fontWeight="bold">
                Maria!
              </Text>
            </VStack>
          </HStack>

          <Button
            title="Criar anúncio"
            titleColor="white"
            bgColor="gray.100"
            bgOnPress="gray.200"
            icon={<Plus size={18} color="white" />}
            onPress={goToNewAdPage}
          />
        </HStack>

        <Text fontFamily="body" fontSize="sm" fontWeight="light">
          Seus produtos anunciados para venda
        </Text>

        <HStack
          alignItems="center"
          justifyContent="space-between"
          bgColor="blue.50"
          borderRadius={6}
          px={4}
          py={3}
          my={3}
        >
          <HStack alignItems="center" space={3}>
            <Tag size={24} color={colors.blue[600]} />

            <VStack mb={1}>
              <Text fontFamily="heading" fontSize="lg">
                4
              </Text>

              <Text fontFamily="body" fontSize="sm" fontWeight="light" mt={-1}>
                Anúncios ativos
              </Text>
            </VStack>
          </HStack>

          <TouchableOpacity onPress={goToMyAds}>
            <HStack alignItems="center" space={2}>
              <Text fontFamily="body" fontWeight="bold" color="blue.500">
                Meus anúncios
              </Text>
              <ArrowRight size={18} color={colors.blue[500]} />
            </HStack>
          </TouchableOpacity>
        </HStack>

        <Text fontFamily="body" fontSize="sm" fontWeight="light" mb={3} mt={5}>
          {" "}
          Compre produtos variados
        </Text>
        <HStack
          borderRadius={4}
          borderWidth={0}
          bgColor="white"
          alignItems="center"
          justifyContent="space-between"
          w="full"
          mb={6}
        >
          <Input
            borderWidth={0}
            borderLeftRadius={4}
            placeholder="Buscar anúncio"
            fontFamily="body"
            fontSize="md"
            flex={1}
            _focus={{
              bgColor: "white",
            }}
          />
          <HStack space={3} h={6} px={3}>
            <NativeBaseButton
              bg="transparent"
              px={0}
              _pressed={{
                bgColor: "transparent",
                opacity: 40,
              }}
            >
              <MagnifyingGlass size={24} />
            </NativeBaseButton>

            <Divider
              orientation="vertical"
              rounded="full"
              thickness={1.5}
              bgColor="gray.500"
            />

            <NativeBaseButton
              bg="transparent"
              px={0}
              _pressed={{
                bgColor: "transparent",
                opacity: 40,
              }}
              onPress={onOpen}
            >
              <Sliders size={24} />
            </NativeBaseButton>
          </HStack>
        </HStack>

        <Box
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <ProductCard tag="novo" />
          <ProductCard tag="novo" />
          <ProductCard tag="usado" />
          <ProductCard tag="novo" />
          <ProductCard tag="usado" />
          <ProductCard tag="novo" />
          <ProductCard tag="novo" />
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default Home;
