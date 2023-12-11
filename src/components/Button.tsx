import {
  Text,
  Button as NativeBaseButton,
  IButtonProps,
  HStack,
} from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";
import { ReactElement } from "react";

type Props = IButtonProps & {
  title: string;
  bgOnPress: ColorType;
  titleColor?: ColorType;
  icon?: ReactElement;
};

const Button = ({
  icon,
  title,
  bgOnPress,
  titleColor = "gray.800",
  ...rest
}: Props) => {
  return (
    <NativeBaseButton
      h={12}
      px={4}
      rounded={8}
      fontFamily="heading"
      {...rest}
      _pressed={{
        bg: bgOnPress,
      }}
    >
      <HStack alignItems="center" justifyContent="center">
        {icon}
        <Text
          fontFamily="body"
          fontWeight="bold"
          color={titleColor}
          ml={1}
          fontSize="md"
        >
          {title}
        </Text>
      </HStack>
    </NativeBaseButton>
  );
};

export default Button;
