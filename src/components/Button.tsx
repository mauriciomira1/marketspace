import { Text, Button as NativeBaseButton, IButtonProps } from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";

type Props = IButtonProps & {
  title: string;
  bgOnPress: ColorType;
  titleColor?: ColorType;
};

const Button = ({
  title,
  bgOnPress,
  titleColor = "gray.800",
  ...rest
}: Props) => {
  return (
    <NativeBaseButton
      w="full"
      py={3}
      rounded={8}
      fontFamily="heading"
      {...rest}
      _pressed={{
        bg: bgOnPress,
      }}
    >
      <Text fontFamily="body" fontWeight="bold" color={titleColor}>
        {title}
      </Text>
    </NativeBaseButton>
  );
};

export default Button;
