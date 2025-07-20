import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import AddSongForm from "../Components/AddSongForm";
import store from "../redux/store"; // adjust the path based on your project

test("renders add song form and submits data", () => {
  render(
    <Provider store={store}>
      <AddSongForm />
    </Provider>
  );

  fireEvent.change(screen.getByLabelText(/title/i), {
    target: { value: "Test Song" }
  });

  fireEvent.change(screen.getByLabelText(/artist/i), {
    target: { value: "Test Artist" }
  });

  fireEvent.click(screen.getByRole("button", { name: /add song/i }));

  expect(screen.getByLabelText(/title/i).value).toBe(""); // assuming the form resets
});
