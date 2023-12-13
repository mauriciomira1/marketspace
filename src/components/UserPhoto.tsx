import { Box, IImageProps, Image } from "native-base";
import { PencilSimpleLine } from "phosphor-react-native";
import DefaultAvatar from "@assets/user-avatar.png";

type Props = IImageProps & {
  showEditIcon?: boolean;
  UserAvatar?: string;
};

const UserPhoto = ({ showEditIcon, UserAvatar, ...rest }: Props) => {
  return (
    <Box alignItems="center" pb={6}>
      <Image
        source={UserAvatar ? UserAvatar : DefaultAvatar}
        defaultSource={UserAvatar ? UserAvatar : DefaultAvatar}
        alt="Foto do usuário"
        resizeMode="contain"
        w={24}
        h={24}
        rounded="full"
        borderColor="blue.500"
        borderWidth={3}
        {...rest}
      />

      {showEditIcon && (
        <Box
          rounded="full"
          backgroundColor="blue.500"
          w={10}
          h={10}
          alignItems="center"
          justifyContent="center"
          position="absolute"
          bottom={6}
          right={-10}
        >
          <PencilSimpleLine size={16} color="white" />
        </Box>
      )}
    </Box>
  );
};

export default UserPhoto;
