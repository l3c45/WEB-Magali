import { render, screen } from "../utils/testUtils";
import Services from "../components/sections/Services";
import { services } from "./../data/services";

describe("Testing Services component", () => {
  beforeEach(() => {
    render(<Services />);
  });

  it("Should render correct amount of service cards ", () => {
    const servicesQuantity = services.length;
    const servicesQuantityRender = screen.getAllByRole("article").length;

    expect(servicesQuantityRender).toBe(servicesQuantity);
  });
});
