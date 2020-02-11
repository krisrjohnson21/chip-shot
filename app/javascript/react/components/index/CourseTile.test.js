import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import CourseTile from "./CourseTile";

Enzyme.configure({ adapter: new Adapter() });

describe("CapeTile", () => {
  let wrapper;
  let course;

  beforeEach(() => {
    course = {
      name: "Boston Golf Course",
      membership: "Public",
      holes: 18,
      par: 72,
      address: "123 Main Street",
      city: "Boston",
      state: "Massachusetts",
      website: "www.golf.com",
      range: "Yes",
      carts: "Yes",
      rentals: "Yes",
      lessons: "Yes",
      url: "https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_3.0,f_auto,g_center,h_393,q_auto,w_713/v1/pgatour/editorial/2019/06/07/PebbleStoryTopper-1700-KK.jpg"
    };
    wrapper = mount(
      <BrowserRouter>
        <CourseTile course={course} />
      </BrowserRouter>
    );
  });

  it("should render an h2 tag with the name of the cape", () => {
    expect(wrapper.find("#course-name").text()).toBe("Boston Golf Course");
  });

  it("should render an img tag with an image of the coures", () => {
    expect(wrapper.find("img").props()["src"]).toBe(
      "https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_3.0,f_auto,g_center,h_393,q_auto,w_713/v1/pgatour/editorial/2019/06/07/PebbleStoryTopper-1700-KK.jpg"
    );
  });
});
