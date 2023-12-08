import { Center, Spinner } from "native-base";

const Loading = () => {
  return (
    <Center flex={1} bgColor="white">
      <Spinner color="blue.500" size={30} />
    </Center>
  );
};

export default Loading;
