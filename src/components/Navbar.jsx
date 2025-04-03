import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function Navbar({ className }) {
  const [isUp, setIsUp] = useState(false);

  const menus = [
    {
      txt: "Bosh sahifa",
      url: "/",
    },
    {
      txt: "Nasr",
      url: "/",
    },
    {
      txt: "Nazm",
      url: "/",
    },
    {
      txt: "Maqola",
      url: "/",
    },
    {
      txt: "Forum",
      url: "/",
    },
  ];

  return (
    <div
      className={`${className} mt-[25px] flex items-center justify-between pb-[25px]`}
    >
      <h1 className="font-dancing ml-[81px] mr-96 text-[25px] uppercase text-[#C9AC8C]">
        <a href="/">badiiyat</a>
      </h1>

      <ul className="flex items-center gap-[35px]">
        {menus.map((menu, index) => (
          <li className="mb-[25px] hover:underline" key={index}>
            <a href={menu.url}>{menu.txt}</a>
          </li>
        ))}
      </ul>

      <div className="mr-[81px]">
        <DropdownMenu onOpenChange={(open) => setIsUp(open)}>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 focus:outline-none focus:ring-0">
              <img
                src="/public/account_img.png"
                className="h-[50px] w-[50px] rounded-full"
                alt="account_img"
              />
              {isUp ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Navbar;
