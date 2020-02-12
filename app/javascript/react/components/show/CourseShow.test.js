import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { BrowserRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

import CourseShow from "./CourseShow";

describe("CourseShow", () => {
  let wrapper;
  let course;

  beforeEach(() => {
    course = {
      name: "Neighborhood Golf Club",
      membership: "Private",
      holes: 18,
      par: 70,
      address: "45 Maple Street",
      city: "Worcester",
      state: "Massachusetts",
      website: "www.neighborhoodgolf.com",
      range: "Yes",
      carts: "Yes",
      rentals: "Yes",
      lessons: "Yes",
      url: "https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_3.0,f_auto,g_center,h_393,q_auto,w_713/v1/pgatour/editorial/2019/06/07/PebbleStoryTopper-1700-KK.jpg"
    };
    wrapper = mount(
      <BrowserRouter>
        <CourseShow course={course} />
      </BrowserRouter>
    );
  });

  it("should render an img tag with the image of the course", () => {
    expect(wrapper.find("img").props()["src"]).toBe(
      "https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_3.0,f_auto,g_center,h_393,q_auto,w_713/v1/pgatour/editorial/2019/06/07/PebbleStoryTopper-1700-KK.jpg"
    );
  });

  it("should render an h2 tag with the name of the course", () => {
    expect(wrapper.find("#course-name").text()).toBe("Neighborhood Golf Club");
  });

  it("should render an h4 tag with the type of course membership", () => {
    expect(wrapper.find("#membership").text()).toBe("Membership: Private");
  });

  it("should render an h4 tag with the holes and par of the course", () => {
    expect(wrapper.find("#holes").text()).toBe("Holes: 18 | Par: 70");
  });

  it("should render an h4 tag with the address of the course", () => {
    expect(wrapper.find("#address").text()).toBe("45 Maple Street");
  });

  it("should render an h4 tag with the address of the course", () => {
    expect(wrapper.find("#city-state").text()).toBe("Worcester, Massachusetts");
  });

  it("should render an h4 if the course has a driving range", () => {
    expect(wrapper.find("#range").text()).toBe(
      "Neighborhood Golf Club has a driving range"
    );
  });

  it("should render an h4 bullet if the course allows carts", () => {
    expect(wrapper.find("#carts").text()).toBe(
      "Neighborhood Golf Club allows golf carts"
    );
  });

  it("should render an h4 bullet if the course has rental clubs", () => {
    expect(wrapper.find("#rentals").text()).toBe(
      "Neighborhood Golf Club provides club rentals"
    );
  });

  it("should render an h4 bullet if the course offers lessons", () => {
    expect(wrapper.find("#lessons").text()).toBe(
      "Neighborhood Golf Club offers playing lessons"
    );
  });

  it("should render an anchor tag with a link to the course website", () => {
    expect(wrapper.find("#link").props()["href"]).toBe("www.neighborhoodgolf.com");
  });
});
