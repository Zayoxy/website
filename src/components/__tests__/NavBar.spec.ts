import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Navbar from "@/components/NavBar.vue";

describe("Navbar", () => {
  it("renders properly", () => {
    const wrapper = mount(Navbar);
    expect(wrapper.text()).toContain("Home");
  });
});
