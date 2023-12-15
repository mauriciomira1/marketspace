import {
  Box,
  CheckIcon,
  HStack,
  ScrollView,
  Select,
  Text,
  VStack,
} from "native-base";

import { Plus } from "phosphor-react-native";

import ProductOnSellCard from "@components/ProductOnSellCard";

const MyAds = () => {
  return (
    <VStack pt={12} px={6} flex={1} bgColor="gray.600">
      <HStack alignItems="center" space={16} justifyContent="flex-end">
        <Text fontFamily="heading" fontSize="lg">
          Meus anúncios
        </Text>
        <Plus size={24} />
      </HStack>
      <HStack pt={8} alignItems="center" justifyContent="space-between">
        <Text fontFamily="body" fontWeight="light">
          9 anúncios
        </Text>
        <Select
          selectedValue="all"
          minWidth={120}
          accessibilityLabel="Filtre os anúncios"
          size={10}
          _selectedItem={{
            fontWeight: "bold",
            bg: "gray.500",
            rounded: "8px",
          }}
        >
          <Select.Item label="Todos" value="all" />
          <Select.Item label="Ativos" value="actives" />
          <Select.Item label="Inativos" value="inactives" />
        </Select>
      </HStack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={12}
        >
          <ProductOnSellCard tag="novo" deactivated />
          <ProductOnSellCard tag="novo" />
          <ProductOnSellCard tag="usado" deactivated />
          <ProductOnSellCard tag="novo" deactivated />
          <ProductOnSellCard tag="usado" />
          <ProductOnSellCard tag="novo" />
          <ProductOnSellCard tag="novo" />
        </Box>
      </ScrollView>
    </VStack>
  );
};

export default MyAds;
