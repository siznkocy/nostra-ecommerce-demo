import { ButtonsIcon } from "../button/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  currentMouseState,
  mouseLeave,
  mouseOver,
} from "../../features/menu/menuSlice";

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

export const menu = [
  [["New"], ["Special", "beachwear", "active wears", "Sales", "Discount"]],
  [
    [
      "Women",
      "Shoes",
      "Dresses",
      "Summer Dresses",
      "Long Dress",
      "Blouses",
      "Tank Tops & Camis",
      "Women Tops",
      "Sport pants",
    ],
  ],
  [
    [
      "Men",
      "Demin",
      "Jeans",
      "Sport T-Shirts",
      "T-shirt",
      "Vest",
      "Sweatpants",
    ],
  ],
  [["Kids", "T-Shirt", "Demin", "pants", "Customes", "Shoes"]],
  [["Collection", "All", "Summer", "Winter", "Curated", "Brand"]],
];

export const Logo = () => {
  return (
    <div>
      <h1 className="font-bold uppercase text-xl whitespace-nowrap">
        <p className="font-bold text-xl text-[#1D242D] flex items-center">
          N
          <span className="relative left-0 -top-[1px] text-red-500 text-red- bottom-[1%] border-b-2 border-red-500 leading-none text-sm font-extrabold">
            o
          </span>
          stra
        </p>
      </h1>
    </div>
  );
};

export const NavList = () => {
  const dispatch = useDispatch();

  const dropDown = useSelector(currentMouseState);

  return (
    <ul className="flex gap-1 relative bg-lime-30">
      {List.map((item, i) => (
        <li
          key={i}
          className={`relative font-semibold flex  items-end p-3 bg-blue-30 border-b-2   hover:border-red-500 ${
            dropDown && item.name === "shop" ? "border-red-500" : "border-white"
          }
          }`}
          onMouseOver={() => {
            console.log("on");
            i === 0 && dispatch(mouseOver());
          }}
          onMouseLeave={() => {
            console.log("off");
            dispatch(mouseLeave());
          }}
        >
          <Link id={item?.name} to={item?.link}>
            {item?.name}
            {item.list && (
              <ButtonsIcon
                icon={
                  <FontAwesomeIcon
                    className={`text-sm ${dropDown && "rotate-180"}`}
                    icon={faChevronDown}
                  />
                }
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};
