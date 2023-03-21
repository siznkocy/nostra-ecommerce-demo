import { ReactNode } from "react";
import { InputIconLine } from "../input/Input";
import { BiSearch } from "react-icons/bi";
import { ButtonsIcon } from "../button/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../hook/useApp";
import { searchBar } from "../../features/menu/popupSlice";

// - Modal template
const ModalWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className="absolute w-full p-10 h-screen bg-black bg-opacity-40 -top-14 left-0 z-40">
      {children}
    </section>
  );
};

// - Search Results
export const SearchResult = () => {
  const dispatch = useAppDispatch();

  // onChange request.
  const searchValue = () => {};

  // Close search bar fun.
  const closeSearchBar = () => {
    dispatch(searchBar());
  };

  return (
    <ModalWrapper>
      <section className="bg-white w-full max-w-5xl mx-auto px-10 py-4 rounded-md flex flex-col gap-0">
        <div className="w-full flex justify-end m-0">
          <ButtonsIcon
            icon={<FontAwesomeIcon icon={faClose} />}
            onClick={closeSearchBar}
          />
        </div>
        <InputIconLine
          placeholder="Search something..."
          onChange={searchValue}
          type="text"
          icon={<BiSearch />}
        />
      </section>
    </ModalWrapper>
  );
};
