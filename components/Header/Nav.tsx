import Link from "next/link";

interface Props {
  currentNav: number;
  handleClick: (index: number) => void;
}

const Nav = ({ currentNav, handleClick }: Props): JSX.Element => {
  const nav: string[] = ["About", "Works", "Contact"];

  return (
    <nav className="w-56">
      <ul className="flex justify-between w-full">
        {nav.map((navItem, index) => {
          return (
            <li key={index}>
              <Link
                className={
                  currentNav === index
                    ? "border-b-2 border-white text-white tracking-wide py-4"
                    : "hover:text-white transition duration-100 text-purple-900 tracking-wide py-4"
                }
                href={"/" + navItem}
                key={index}
                onClick={() => handleClick(index)}
              >
                {navItem}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
