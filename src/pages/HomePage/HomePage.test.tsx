import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import HomePage from "./HomePage";

describe("Given a HomPage component", () => {
  describe("When instantiated", () => {
    test("Then it should show a list of robots", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const initialRobotName = "Bender";
      const robotHeading = screen.getByRole("heading", {
        name: initialRobotName,
      });

      expect(robotHeading).toBeInTheDocument();
    });
  });
});
