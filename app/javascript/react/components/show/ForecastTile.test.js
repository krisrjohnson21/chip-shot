import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import ForecastTile from "./ForecastTile";

Enzyme.configure({ adapter: new Adapter() });

describe("Forecast", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ForecastTile
        day={"Overcast in the afternoon"}
        date={"Wednesday"}
        classy={"fas fa-3x fa-cloud"}
      />
    );
  });

  it("should render an h4 tag with the day and the forecast", () => {
    expect(wrapper.find("#day-name").text()).toBe("Wednesday");
  });

  it("should render an h4 tag with the day and the forecast", () => {
    expect(wrapper.find("#summary").text()).toBe("Overcast in the afternoon");
  });

  it("should render an icon that corresponds to the forecast", () => {
    expect(wrapper.find("#weather-icon").props()["className"]).toBe("fas fa-3x fa-cloud");
  });
});
