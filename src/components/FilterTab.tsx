import { useState } from "react";

import {
  Badge,
  Button,
  Checkbox,
  HStack,
  Pressable,
  Switch,
  Text,
  VStack,
} from "native-base";

import { X } from "phosphor-react-native";

type PaymentMethodsProps =
  | "boleto"
  | "pix"
  | "dinheiro"
  | "credito"
  | "deposito";

const FilterTab = () => {
  const [isNewActive, setIsNewActive] = useState(false);
  const [isUsableActive, setIsUsableActive] = useState(false);
  const [AcceptExchange, setAcceptExchange] = useState(false);
  const [paymentsMethods, setPaymentsMethods] = useState<PaymentMethodsProps[]>(
    []
  );

  return (
    <VStack w="full" px={4}>
      <HStack justifyContent="space-between">
        <Text fontFamily="heading" fontSize="md">
          Filtrar anúncios
        </Text>
        <Pressable
          _pressed={{
            opacity: 50,
          }}
        >
          <X color="gray.500" />
        </Pressable>
      </HStack>

      <Text
        fontFamily="body"
        fontSize="xs"
        fontWeight="bold"
        color="gray.200"
        pb={2}
        pt={4}
      >
        Condição
      </Text>

      <HStack space={3}>
        <Button
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
        </Button>

        <Button
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
        </Button>
      </HStack>

      <Text
        fontFamily="body"
        fontSize="xs"
        fontWeight="bold"
        color="gray.200"
        pt={4}
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
        fontSize="xs"
        fontWeight="bold"
        color="gray.200"
        pt={4}
      >
        Meios de pagamento aceitos
      </Text>

      <HStack alignItems="center">
        <Checkbox.Group>
          <Checkbox
            value="boleto"
            _checked={{
              bgColor: "blue.500",
              borderColor: "blue.500",
            }}
            defaultIsChecked
          >
            Boleto
          </Checkbox>

          <Checkbox
            value="pix"
            _checked={{
              bgColor: "blue.500",
              borderColor: "blue.500",
            }}
            defaultIsChecked
          >
            Pix
          </Checkbox>

          <Checkbox
            value="dinheiro"
            _checked={{
              bgColor: "blue.500",
              borderColor: "blue.500",
            }}
            defaultIsChecked
          >
            Dinheiro
          </Checkbox>

          <Checkbox
            value="credito"
            _checked={{
              bgColor: "blue.500",
              borderColor: "blue.500",
            }}
            defaultIsChecked
          >
            Crédito
          </Checkbox>

          <Checkbox
            value="deposito"
            _checked={{
              bgColor: "blue.500",
              borderColor: "blue.500",
            }}
            defaultIsChecked
          >
            Depósito
          </Checkbox>
        </Checkbox.Group>
      </HStack>

      {/*   | "boleto"
  | "pix"
  | "dinheiro"
  | "credito"
  | "deposito"; */}
    </VStack>
  );
};

export default FilterTab;
