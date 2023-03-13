import { ButtonsIcon } from "../button/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const List = [
  {
    name: "shop",
    link: "",
    submenu: true,
    list: [
      { name: "Women", link: "women" },
      { name: "Women", link: "women" },
      { name: "Women", link: "women" },
      { name: "Women", link: "women" },
      { name: "Women", link: "women" },
    ],
  },
  { name: "Most Wanted", link: "most_wanted" },
  { name: "New Arrival", link: "new_arrival" },
  { name: "Brands", link: "brand" },
];

export const Logo = () => {
  return (
    <div>
      <h1 className="font-bold uppercase text-xl">Nostra</h1>
    </div>
  );
};

export const DropDown = () => {
  return (
    <div className="top-10 -left-[5%] absolute hidden h-96 w-[110%] z-20 bg-[#1d242d] shadow-sm rounded-md  items-center p-1 "></div>
  );
};

export const NavList = () => {
  return (
    <ul className="flex gap-5 relative">
      {List.map((item, i) => (
        <li key={i} className="relative font-semibold flex items-end h-8">
          <Link to={item?.link} className="">
            {item?.name}
          </Link>
          {item.list && (
            <ButtonsIcon
              icon={
                <FontAwesomeIcon className="text-sm" icon={faChevronDown} />
              }
            />
          )}
        </li>
      ))}
    </ul>
  );
};
