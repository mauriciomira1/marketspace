import { Image, IImageProps, Box, IBoxProps } from "native-base";
import { Feather, AntDesign } from "@expo/vector-icons";

type Props = IBoxProps & {
  showEditIcon?: boolean;
  iconSize: number;
};

const UserPhoto = ({ showEditIcon, iconSize, ...rest }: Props) => {
  return (
    <Box alignItems="center" pb={6}>
      <Box
        rounded="full"
        borderColor="blue.500"
        borderWidth={3}
        backgroundColor="gray.500"
        w={20}
        h={20}
        alignItems="center"
        justifyContent="center"
        {...rest}
      >
        <AntDesign name="user" size={iconSize * 2.6} color="gray" />
        {showEditIcon && (
          <Box
            rounded="full"
            backgroundColor="blue.500"
            w={10}
            h={10}
            alignItems="center"
            justifyContent="center"
            position="absolute"
            bottom={-8}
            right={-14}
          >
            <Feather name="edit-3" size={18} color="white" />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default UserPhoto;
