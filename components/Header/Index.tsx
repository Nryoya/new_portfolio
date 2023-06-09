"use client";
import Link from "next/link";
import Nav from "./Nav";
import Logo from "./Logo";
import { useState } from "react";

const Header = () => {
  const [currentNav, setCurrentNav] = useState(-1);

  return (
    <header className="bg-purple-600 fixed w-screen">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-3 px-6">
        <Logo handleClick={setCurrentNav} />
        <Nav currentNav={currentNav} handleClick={setCurrentNav} />
      </div>
    </header>
  );
};

export default Header;
