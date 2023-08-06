interface CardContentProps {
  name: string;
}

const CardContent = ({ name }: CardContentProps): JSX.Element => <p>{name}</p>;

export default CardContent;
