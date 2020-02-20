import Enzyme, { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import RoundTile from "./RoundTile";

Enzyme.configure({ adapter: new Adapter() });

describe("Round", () => {
  let wrapper;
  let roundId = 1
  let userId = 1
  let round = {
    score: 85,
    birdies: 0,
    pars: 2,
    date: "08/01/2019",
    course: "Mt Hood Municipal Golf Course"
  }

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <RoundTile
          round={round}
          />
      </BrowserRouter>
    );
  });

  it("should render an h4 tag with the date of the round", () => {
    expect(wrapper.find("#date").text()).toBe("Round Date: 08/01/2019");
  });

  it("should render an h4 tag with the name of the course played", () => {
    expect(wrapper.find("#course").text()).toBe("Course: Mt Hood Municipal Golf Course");
  });

  it("should render an h4 tag with the score from the round", () => {
    expect(wrapper.find("#score").text()).toBe("Round Score: 85");
  });

  it("should render an h4 tag with the number of birdies", () => {
    expect(wrapper.find("#birdies").text()).toBe("Birdies: 0");
  });

  it("should render an h4 tag with the number of pars", () => {
    expect(wrapper.find("#pars").text()).toBe("Pars: 2");
  });
});
