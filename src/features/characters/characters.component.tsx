import { FC } from 'react';
import { useGetCharactersQuery } from 'features/characters/characters.endpoints';
import Character from 'features/characters/characters.types';
import Card from 'features/card/Card';

export type CharactersComponentProps = {
  rickIDDS: number[];
};

const CharactersComponent: FC<CharactersComponentProps> = ({
  rickIDDS
}: CharactersComponentProps) => {
  const { data: characters, error, isLoading } = useGetCharactersQuery({ ids: rickIDDS });

  if (isLoading) return <div>Loading characters...</div>;
  if (error || !characters) return <div>Error when loading. Please try again later.</div>;
  const charactersArray: Character[] = Array.isArray(characters) ? characters : [characters];

  return (
    <div className={'characters'}>
      {charactersArray.map((character) => (
        <Card character={character} key={character.id} />
      ))}
    </div>
  );
};

export default CharactersComponent;
