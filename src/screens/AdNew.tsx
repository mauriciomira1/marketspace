import UserPhoto from "@components/UserPhoto";
import { HStack, VStack, Text, useTheme } from "native-base";
import Button from "@components/Button";
import { ArrowRight, Plus, Tag } from "phosphor-react-native";

const AdNew = () => {
  const { colors } = useTheme();

  return <VStack py={10} px={6} flex={1}></VStack>;
};

export default AdNew;
