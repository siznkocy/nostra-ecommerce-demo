import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Desktop } from "../navbar/Desktop";
import { NavList } from "../navbar/NavData";
import { BrowserRouter } from "react-router-dom";

describe("navbar", () => {
  describe("desktop navbar", () => {
    //  check it see it the list exists.
    test("check the nav list", async () => {
      render(
        <BrowserRouter>
          <Desktop />
        </BrowserRouter>
      );

      const user = userEvent.setup();

      expect(screen.getByText(/shop/i)).toBeInTheDocument();

      await user.hover(screen.getByText(/shop/i));
    });
  });
});
