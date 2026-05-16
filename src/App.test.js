import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Particle", () => () => null);

beforeAll(() => {
  window.scrollTo = jest.fn();
});

test("renders navigation and backend-focused hero copy", async () => {
  render(<App />);

  expect(screen.getByRole("navigation")).toBeInTheDocument();
  expect(
    await screen.findByRole("heading", {
      name: /I build backend systems that stay understandable under growth/i
    })
  ).toBeInTheDocument();
});
