import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import ReviewTile from "./ReviewTile";

Enzyme.configure({ adapter: new Adapter() });

describe("Review", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ReviewTile
        id={1}
        fullName={"Joe Smith"}
        body={"Lost a lot of golf balls here"}
        rating={2}
      />
    );
  });

  it("should render an h4 tag with the name of the review", () => {
    expect(wrapper.find("#reviewer").text()).toBe("Reviewer Name: Joe Smith");
  });

  it("should render a h4 tag with the rating and review of the cape", () => {
    expect(wrapper.find("#review").text()).toBe(
      "Rating: 2 | Review: Lost a lot of golf balls here"
    );
  });
});
