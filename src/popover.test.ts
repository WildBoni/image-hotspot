import { beforeEach, expect, describe, it } from "vitest";
import { JSDOM } from "jsdom";
import { createPopover } from "./popover";
import { Popover } from "./popover.interface";

describe("createPopover", () => {
  let HTMLDivElement: typeof globalThis.HTMLDivElement;

  beforeEach(() => {
    // Setup jsdom
    const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
    global.document = dom.window.document;

    // Obtain HTMLDivElement from the jsdom window
    HTMLDivElement = dom.window.HTMLDivElement;
  });

  it("should create a Popover element with the correct id, text, and class", () => {
    const id = "test-popover";
    const text = "This is a test popover";

    const popover = createPopover(id, text);

    expect(popover).toBeInstanceOf(HTMLDivElement);
    expect(popover.id).toBe(id);
    expect(popover.textContent).toBe(text);
    expect(popover.classList.contains("popover-content")).toBe(true);
  });

  it("should assign the popover property correctly", () => {
    const id = "test-popover";
    const text = "This is a test popover";

    const popover = createPopover(id, text);

    expect(popover.popover).toBe("auto");
  });
});
