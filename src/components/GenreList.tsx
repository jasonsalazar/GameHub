import { HStack, Image, Link, List, Spinner } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { FaCheckSquare } from "react-icons/fa";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner size="lg" />;

  if (error) console.log(error);

  return (
    <List.Root unstyled>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <Link
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize="lg"
              variant="plain"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
              {genre.id === selectedGenre?.id && <FaCheckSquare />}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};
export default GenreList;
