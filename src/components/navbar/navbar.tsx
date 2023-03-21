import { currentSearchBarState } from "../../features/menu/popupSlice";
import { useAppSelector } from "../../hook/useApp";
import { SearchResult } from "../modals/SearchResult";
import { Desktop, DesktopSubmenu } from "./Desktop";
import { Mobile, MobileSubmenu } from "./Mobile";

const Navbar = () => {
  let searchBar: boolean = useAppSelector(currentSearchBarState);

  return (
    <div className="w-full sticky top-0 z-20 ">
      <div className="w-full bg-whit z-20">
        <header className="max-w-5xl w mx-auto flex justify-between items-center  py-2 bg-white bg-opacity-95 ">
          <div className="flex w-full justify-between px-3 items-center text-[#1D242D] ">
            <Desktop />
            <Mobile />
          </div>
        </header>
      </div>
      {searchBar ? <SearchResult /> : null}
      <DesktopSubmenu />
      <MobileSubmenu />
    </div>
  );
};

export default Navbar;
