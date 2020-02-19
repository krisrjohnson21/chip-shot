import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import UserReviewTile from "./UserReviewTile";

Enzyme.configure({ adapter: new Adapter() });

describe("Round", () => {
  let wrapper;
  let course = {
    name: "Cedar Glen Golf Course"
  }

  beforeEach(() => {
    wrapper = mount(
      <UserReviewTile
      id={1}
      course={course}
      body={"Flat and walkable"}
      rating={3}
      />
    );
  });

  it("should render an h4 tag with the name of the course played", () => {
    expect(wrapper.find("#course-name").text()).toBe("Course Name: Cedar Glen Golf Course");
  });

  it("should render an h4 tag with the rating of the round", () => {
    expect(wrapper.find("#rating").text()).toBe("Rating: 3");
  });

  it("should render an h4 tag with the review of the round", () => {
    expect(wrapper.find("#review").text()).toBe("Review: Flat and walkable");
  });
});
