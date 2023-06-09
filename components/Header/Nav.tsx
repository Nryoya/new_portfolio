import Link from "next/link";

interface Props {
  currentNav: number;
  handleChange: (index: number) => void;
}

const Nav = ({ currentNav, handleChange }: Props) => {
  const nav: string[] = ["About", "Jobs", "Contact"];

  return (
    <nav className="w-56">
      <ul className="flex justify-between w-full">
        {nav.map((navItem, index) => {
          return (
            <li>
              <Link
                className={
                  currentNav === index
                    ? "border-b-2 border-white text-white py-4"
                    : "hover:text-white  transition duration-100 text-purple-900 tracking-wide py-4"
                }
                href={"/" + navItem}
                key={index}
                onClick={() => handleChange(index)}
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
