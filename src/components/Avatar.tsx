type Props = {
  image?: string | null;
};
export const Avatar = ({ image }: Props) => {
  return <p>{image}</p>;
};
