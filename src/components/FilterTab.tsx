import { useState } from "react";

import {
  Badge,
  Checkbox,
  HStack,
  Button as NativeBaseButton,
  Pressable,
  Switch,
  Text,
  VStack,
} from "native-base";

import { X } from "phosphor-react-native";
import Button from "./Button";
import CheckboxFilterTab from "./CheckboxFilterTab";
import { ProductDTO } from "@dtos/ProductDTO";

export type PaymentMethodsProps =
  | "boleto"
  | "pix"
  | "dinheiro"
  | "credito"
  | "deposito";

type Props = {
  closeByButton: () => void;
};

const FilterTab = ({ closeByButton }: Props) => {
  const [isNewActive, setIsNewActive] = useState(false);
  const [isUsableActive, setIsUsableActive] = useState(false);
  const [AcceptExchange, setAcceptExchange] = useState(false);
  const [paymentsMethods, setPaymentsMethods] = useState<PaymentMethodsProps[]>(
    []
  );

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

  return (
    <VStack w="full" px={4}>
      <HStack justifyContent="space-between" alignItems="center">
        <Text fontFamily="heading" fontSize="lg" pt={2}>
          Filtrar anúncios
        </Text>
        <Pressable
          opacity={80}
          _pressed={{
            opacity: 40,
          }}
          onPress={closeByButton}
        >
          <X color="gray" size={24} />
        </Pressable>
      </HStack>

      <Text
        fontFamily="body"
        fontSize="sm"
        fontWeight="bold"
        color="gray.200"
        pb={2}
        pt={4}
      >
        Condição
      </Text>

      <HStack space={3}>
        <NativeBaseButton
          variant="unstyled"
          onPress={() => setIsNewActive(!isNewActive)}
          p={0}
        >
          <Badge
            bgColor={isNewActive ? "blue.500" : "gray.500"}
            rounded="full"
            h={7}
            w={20}
          >
            <HStack
              alignItems="center"
              justifyContent="space-between"
              space={3}
            >
              <Text
                color={isNewActive ? "white" : "gray.200"}
                fontSize="xs"
                fontWeight="bold"
              >
                NOVO
              </Text>
              {isNewActive && (
                <Pressable
                  alignItems="center"
                  justifyContent="center"
                  rounded="full"
                  w={4}
                  h={4}
                  bgColor="white"
                  _pressed={{
                    opacity: 50,
                  }}
                >
                  <X color="blue" size={10} weight="bold" />
                </Pressable>
              )}
            </HStack>
          </Badge>
        </NativeBaseButton>

        <NativeBaseButton
          variant="unstyled"
          onPress={() => setIsUsableActive(!isUsableActive)}
          p={0}
        >
          <Badge
            bgColor={isUsableActive ? "blue.500" : "gray.500"}
            rounded="full"
            h={7}
            w={20}
          >
            <HStack
              alignItems="center"
              justifyContent="space-between"
              space={2}
            >
              <Text
                color={isUsableActive ? "white" : "gray.200"}
                fontSize="xs"
                fontWeight="bold"
              >
                USADO
              </Text>
              {isUsableActive && (
                <Pressable
                  alignItems="center"
                  justifyContent="center"
                  rounded="full"
                  w={4}
                  h={4}
                  bgColor="white"
                  _pressed={{
                    opacity: 50,
                  }}
                >
                  <X color="blue" size={10} weight="bold" />
                </Pressable>
              )}
            </HStack>
          </Badge>
        </NativeBaseButton>
      </HStack>

      <Text
        fontFamily="body"
        fontSize="sm"
        fontWeight="bold"
        color="gray.200"
        pt={6}
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

      <HStack w="full" space={3} pb={8} mt={12}>
        <Button
          title="Resetar filtros"
          bgColor="gray.500"
          bgOnPress="gray.400"
          flex={1}
        />
        <Button
          title="Aplicar filtros"
          titleColor="white"
          bgColor="gray.100"
          bgOnPress="gray.300"
          flex={1}
        />
      </HStack>
    </VStack>
  );
};

export default FilterTab;
