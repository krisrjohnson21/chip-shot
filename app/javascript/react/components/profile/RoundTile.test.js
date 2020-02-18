import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import RoundTile from "./RoundTile";

Enzyme.configure({ adapter: new Adapter() });

describe("Round", () => {
  let wrapper;
  let round = {
    score: 85,
    birdies: 0,
    pars: 2
  }

  beforeEach(() => {
    wrapper = mount(
      <RoundTile
        round={round}
      />
    );
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
