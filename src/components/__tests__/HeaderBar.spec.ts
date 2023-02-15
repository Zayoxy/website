import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SocialMedias from "@/components/SocialMedias.vue";

describe("SocialMedias", () => {
  it("if the list renders properly", () => {
    const wrapper = mount(SocialMedias);
    expect(wrapper.html()).toContain("header-list");
  });
});
