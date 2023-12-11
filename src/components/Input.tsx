import { Input as NativeBaseInput, IInputProps } from "native-base";

type Props = IInputProps;

const Input = ({ ...rest }: Props) => {
  return (
    <NativeBaseInput
      px={3}
      py={2.5}
      backgroundColor="white"
      my={1}
      w="full"
      rounded={8}
      borderWidth={0}
      fontFamily="body"
      fontSize="md"
      placeholderTextColor="gray.400"
      {...rest}
    />
  );
};

export default Input;
