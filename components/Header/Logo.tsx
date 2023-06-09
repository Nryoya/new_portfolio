import Link from "next/link";

interface Props {
  handleChange: (index: number) => void;
}

const Logo = ({ handleChange }: Props) => {
  return (
    <h1>
      <Link className="font-bold text-2xl text-white tracking-wide" href="/" onClick={() => handleChange(-1)}>Portfolio</Link>
    </h1>
  );
};

export default Logo;
