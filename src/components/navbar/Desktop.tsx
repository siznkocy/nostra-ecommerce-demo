import { Logo, NavList, menu } from "./NavData";
import { BsSearch } from "react-icons/bs";
import { NavIcons } from "./NavIcons";
import { useSelector } from "react-redux";
import {
  currentMouseState,
  mouseLeave,
  mouseOver,
} from "../../features/menu/menuSlice";
import { useAppDispatch } from "../../hook/useApp";
import { searchBar } from "../../features/menu/popupSlice";

export const DesktopSubmenu = () => {
  const dispatch = useAppDispatch();

  const dropDown = useSelector(currentMouseState);

  return (
    <div
      onMouseOver={() => dispatch(mouseOver())}
      onMouseLeave={() => dispatch(mouseLeave())}
      className={`top-[62px] absolute min-h-[24rem] max-h-screen w-screen border-t-2 border-black border-opacity-10 shadow-md items-center p-1 bg-[#1D242D] bg-opacity-90 ${
        dropDown
          ? "lg:block hidden transform duration-700 ease-out translate-y-0"
          : "-translate-y-[2%] opacity-0 invisible"
      } `}
    >
      <div className="py-5 max-w-5xl mx-auto overflow-y-auto text-white">
        <div className="flex gap-20 fris">
          {menu.map((first, i) => (
            <ul key={i}>
              {first.map((second, i) => (
                <li key={i} className="my-5">
                  {second.map((third, i) => (
                    <p
                      key={i}
                      className="text-white text-base first:mb-2 first:text-lg first:font-semibold font-light first:border-b capitalize first:border-red-500 w-fit cursor-pointer"
                    >
                      {third}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Desktop = () => {
  const dispatch = useAppDispatch();

  const openSearchBar = () => {
    dispatch(searchBar());
  };

  return (
    <nav className="lg:flex justify-between items-center w-full hidden bg-yellow-40">
      <Logo />
      <NavList />
      <div className="flex gap-2 items-baseline">
        <button
          className="flex flex-nowrap gap-2 items-center bg-[#F9FBFC] px-2 rounded-md h-10 border-2 border-gray-200 text-gray-400 focus:border-[#1D242D]  hover:bg-opacity-20 hover:text-[#1D242D] hover:border-[#1D242D] hover:text-opacity-90 pl-4 pr-20"
          onClick={openSearchBar}
        >
          <span className="text-lg">{<BsSearch />}</span>
          <p className="text-base text-inherit">Search...</p>
        </button>
        <NavIcons />
      </div>
    </nav>
  );
};
