import React from "react";
import { Menubar } from "primereact/menubar";
import { PrimeIcons } from "primereact/api";

const items = [
  { Label: "Home", icon: PrimeIcons.HOME },
  { Label: "Settings", icon: PrimeIcons.COG },
  { Label: "Power-Off", icon: PrimeIcons.POWER_OFF }
];

const Navbar = () => {
  return (
    <>
      <Menubar model={items} />
    </>
  );
};

export default Navbar;
