import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { type Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId,
  );

  if (error) console.log(error);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="sm">
          {selectedPlatform?.name || "Platforms"} <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {data?.results.map((platform) => (
            <Menu.Item
              key={platform.id}
              value={platform.slug}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
export default PlatformSelector;
