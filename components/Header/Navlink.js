import React from "react";
import { linknavbar } from "../../constants";

const Navlink = () => {
  return (
    <ul className='list-none mobile:flex hidden justify-end items-center flex-1 px-2'>
      {linknavbar.map((link) => (
        <li key={link.id} className='group'>
          <a
            className='mx-3 flex py-2 text-base text-netral-verydarkblue transition duration-300 ease-in-out group-hover:text-primary-red '
            href={link.linkSite}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navlink;
