import { useCallback, useEffect, useState } from "react";
import Checkbox from "expo-checkbox";

import { PaymentMethodsProps } from "./FilterTab";
import { HStack, Text } from "native-base";
import { useFocusEffect } from "@react-navigation/native";

type Props = {
  handleCheckboxChange: (
    method: PaymentMethodsProps,
    isChecked: boolean
  ) => void;
  title: string;
  value: PaymentMethodsProps;
};

const CheckboxFilterTab = ({ title, value, handleCheckboxChange }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  useFocusEffect(
    useCallback(() => {
      handleCheckboxChange(value, isChecked);
    }, [isChecked])
  );

  return (
    <HStack space={2} pb={2}>
      <Checkbox value={isChecked} onValueChange={setIsChecked} />
      <Text fontFamily="body" fontSize="md">
        {title}
      </Text>
    </HStack>
  );
};

export default CheckboxFilterTab;
