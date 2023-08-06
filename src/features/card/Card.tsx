import { Character } from 'features/characters';
import CardActions from './CardActions';
import CardContent from './CardContent';
import CardPicture from './CardPicture';

interface CardProps {
  character: Character;
}
const Card = ({ character }: CardProps): JSX.Element => (
  <div className={'card'}>
    <CardPicture
      src={character.image}
      alt={`${character.name}, ${character.gender}, ${character.origin.name}`}
    />
    <div className="card-body">
      <CardContent name={character.name} />
      <CardActions id={character.id} />
    </div>
  </div>
);

export default Card;
