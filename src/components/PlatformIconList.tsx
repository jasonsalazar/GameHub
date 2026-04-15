import { HStack, Icon } from "@chakra-ui/react";
import {
  FaAndroid,
  FaApple,
  FaGlobe,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import type { IconType } from "react-icons";
import { CgUnavailable } from "react-icons/cg";
import type { Platform } from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: FaGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) =>
        iconMap[platform.slug] !== undefined ? (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color="gray.500"
          />
        ) : (
          <Icon key={platform.id} as={CgUnavailable} color="gray.500"></Icon>
        ),
      )}
    </HStack>
  );
};
export default PlatformIconList;
