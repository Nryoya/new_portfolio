import Link from "next/link";

interface Props {
  handleClick: (index: number) => void;
}

const Logo = ({ handleClick }: Props): JSX.Element => {
  return (
    <h1>
      <Link
        className="font-bold text-2xl text-white tracking-wide"
        href="/"
        onClick={() => handleClick(-1)}
      >
        Portfolio
      </Link>
    </h1>
  );
};

export default Logo;
