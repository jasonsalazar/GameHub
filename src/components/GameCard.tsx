import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={"/games/" + game.slug}>
      <Card.Root>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
        />
        <Card.Body>
          <HStack justifyContent="space-between" marginBottom={3}>
            {game.parent_platforms && (
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
            )}
            {game.metacritic && <CriticScore score={game.metacritic} />}
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};
export default GameCard;
