"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { HomeIcon } from "./ui/icons/HomeIcon";
import { HomeFillIcon } from "./ui/icons/HomeFillIcon";
import { SearchIcon } from "./ui/icons/SearchIcon";
import { SearchFillIcon } from "./ui/icons/SearchFillIcon";
import { NewIcon } from "./ui/icons/NewIcon";
import { NewFillIcon } from "./ui/icons/NewFillIcon";
import { usePathname } from "next/navigation";
import { ColorButton } from "./ui/ColorButton";
import { Avatar } from "./Avatar";

const menu = [
  { href: "/", icon: <HomeIcon />, clickedIcon: <HomeFillIcon /> },
  { href: "/search", icon: <SearchIcon />, clickedIcon: <SearchFillIcon /> },
  { href: "/new", icon: <NewIcon />, clickedIcon: <NewFillIcon /> },
];

export const Navbar = () => {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="font-bold">TRAVLR</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Avatar image={user.image} />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <ColorButton text={"Sign Out"} onClick={() => signOut()} />
            ) : (
              <ColorButton text={"Sign In"} onClick={() => signIn()} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};
