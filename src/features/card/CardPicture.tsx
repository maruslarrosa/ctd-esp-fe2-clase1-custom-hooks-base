interface CardPictureProps {
  src: string;
  alt: string;
}

const CardPicture = ({ src, alt }: CardPictureProps): JSX.Element => <img src={src} alt={alt} />
export default CardPicture;
