import { useState } from "react";

import { TouchableOpacity } from "react-native";

import {
  Box,
  HStack,
  Radio,
  ScrollView,
  Text,
  TextArea,
  VStack,
  Input as NativeBaseInput,
  Switch,
  Checkbox,
} from "native-base";

import { ArrowLeft, Plus } from "phosphor-react-native";

import Input from "@components/Input";
import CheckboxFilterTab from "@components/CheckboxFilterTab";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

type ProductStateProps = "new" | "used";

export type PaymentMethodsProps =
  | "boleto"
  | "pix"
  | "dinheiro"
  | "credito"
  | "deposito";

const AdNew = () => {
  const [productState, setProductState] = useState<ProductStateProps>();
  const [productValue, setProductValue] = useState("");
  const [AcceptExchange, setAcceptExchange] = useState(false);
  const [paymentsMethods, setPaymentsMethods] = useState<PaymentMethodsProps[]>(
    []
  );

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleChangeText = (text: string) => {
    // Remove o prefixo R$ se o usuário tentar digitá-lo
    const cleanedText = text.replace(/R\$/g, "");
    setProductValue(cleanedText);
  };

  const handleCheckboxChange = (
    method: PaymentMethodsProps,
    isChecked: boolean
  ) => {
    setPaymentsMethods((prev) => {
      if (isChecked) {
        return [...prev, method];
      } else {
        return prev.filter((prevItens) => prevItens !== method);
      }
    });
  };

  const goToBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <ScrollView>
        <VStack py={10} px={6} flex={1}>
          <HStack alignItems="center" justifyContent="space-between">
            <TouchableOpacity onPress={goToBack}>
              <ArrowLeft />
            </TouchableOpacity>
            <Text fontFamily="heading" fontSize="lg">
              Criar anúncio
            </Text>
            <Box w={8}></Box>
          </HStack>

          <Text fontFamily="body" fontWeight="bold" fontSize="sm" mt={6}>
            Imagens
          </Text>

          <Text fontFamily="body" fontSize="sm" color="gray.400">
            Escolha até 3 imagens para mostrar o quanto o seu produto é
            incrível!
          </Text>

          <TouchableOpacity>
            <Box
              my={3}
              w={24}
              h={24}
              rounded={6}
              bgColor="gray.500"
              alignItems="center"
              justifyContent="center"
            >
              <Plus color="gray" />
            </Box>
          </TouchableOpacity>

          <Text fontFamily="heading" fontSize="sm" fontWeight="bold" mt={4}>
            Sobre o produto
          </Text>

          <Input placeholder="Título do anúncio" mt={2} />

          <TextArea
            autoCompleteType="false"
            h={40}
            placeholder="Descrição do produto"
            w="full"
            bgColor="white"
            borderWidth={0}
            rounded={6}
            fontSize="md"
            mt={2}
          />

          <HStack>
            <Radio.Group
              name="productNewOrUsed"
              value={productState}
              onChange={(nextValue) => {
                if (nextValue === "new" || nextValue === "used") {
                  setProductState(nextValue);
                }
              }}
            >
              <HStack space={6} py={4}>
                <Radio value="new" size="sm">
                  Produto novo
                </Radio>
                <Radio value="used" size="sm">
                  Produto usado
                </Radio>
              </HStack>
            </Radio.Group>
          </HStack>

          <Text
            fontFamily="body"
            fontSize="sm"
            fontWeight="bold"
            color="gray.200"
            pt={2}
          >
            Venda
          </Text>

          <HStack bgColor="white" alignItems="center" px={2} rounded={6} mt={2}>
            <Text fontSize="md" fontFamily="body" px={1}>
              R$
            </Text>
            <NativeBaseInput
              px={3}
              py={2.5}
              my={1}
              borderWidth={0}
              fontFamily="body"
              fontSize="md"
              placeholderTextColor="gray.400"
              keyboardType="numeric"
              value={productValue}
              onChangeText={handleChangeText}
            />
          </HStack>

          <Text
            fontFamily="body"
            fontSize="sm"
            fontWeight="bold"
            color="gray.200"
            pt={2}
          >
            Aceita troca?
          </Text>

          <HStack mt={-2}>
            <Switch
              size="lg"
              m={0}
              onTrackColor="blue.500"
              onThumbColor="gray.600"
              offThumbColor="gray.600"
              value={AcceptExchange}
              onToggle={() => {
                setAcceptExchange(!AcceptExchange);
              }}
            />
          </HStack>

          <Text
            fontFamily="body"
            fontSize="sm"
            fontWeight="bold"
            color="gray.200"
            pt={4}
            mb={3}
          >
            Meios de pagamento aceitos
          </Text>

          <HStack alignItems="center">
            <Checkbox.Group>
              <CheckboxFilterTab
                title="Boleto"
                value="boleto"
                handleCheckboxChange={handleCheckboxChange}
              />

              <CheckboxFilterTab
                title="Pix"
                value="pix"
                handleCheckboxChange={handleCheckboxChange}
              />

              <CheckboxFilterTab
                title="Dinheiro"
                value="dinheiro"
                handleCheckboxChange={handleCheckboxChange}
              />

              <CheckboxFilterTab
                title="Crédito"
                value="credito"
                handleCheckboxChange={handleCheckboxChange}
              />

              <CheckboxFilterTab
                title="Depósito"
                value="deposito"
                handleCheckboxChange={handleCheckboxChange}
              />
            </Checkbox.Group>
          </HStack>
        </VStack>
      </ScrollView>

      <HStack
        mt={6}
        bgColor="white"
        space={4}
        justifyContent="center"
        alignItems="center"
        px={8}
        py={5}
      >
        <Button
          title="Cancelar"
          bgColor="gray.500"
          bgOnPress="gray.400"
          flex={1}
        />
        <Button
          title="Avançar"
          bgColor="gray.100"
          bgOnPress="gray.200"
          titleColor="white"
          flex={1}
        />
      </HStack>
    </>
  );
};

export default AdNew;
