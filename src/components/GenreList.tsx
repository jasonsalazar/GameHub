import { Heading, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { FaCheckSquare } from "react-icons/fa";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (isLoading) return <Spinner size="lg" />;

  if (error) throw error;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root unstyled>
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <Link
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize="lg"
                variant="plain"
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
                {genre.id === selectedGenreId && <FaCheckSquare />}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};
export default GenreList;
