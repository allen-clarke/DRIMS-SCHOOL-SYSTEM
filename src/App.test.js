import { render, screen } from "@testing-library/react";
import Navbar from "./Components/Navbar";

test("render the navbar", () => {
  render(<Navbar />);
  const navbar = document.querySelector("nav");
  const schoolName = screen.getByText(/drims school system/i);

  expect(navbar).toBeInTheDocument();
  expect(schoolName).toBeInTheDocument();
});
