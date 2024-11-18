import Image from "next/image";

import { Menu } from "./menu";

type HeaderPops = {};

export function Header({}: HeaderPops) {
  return (
    <header>
      Header works
      <Image width="24" height="24" src="/logo.svg" alt="CC's Proj Mgmt" />
      <Menu />
    </header>
  );
}
