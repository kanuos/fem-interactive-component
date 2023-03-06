// Integration testing
import { describe, it, expect, beforeEach, afterEach } from "vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/svelte"
import App from "../../App.svelte"

beforeEach(() => {
    render(App)
})

afterEach(cleanup);

describe('Integration Test App', () => {
    const { getByRole, getAllByRole, debug, findByRole } = screen;

    it("should render the main element", () => {
        const main = getByRole("main");
        expect(main).not.toBeFalsy();
    })

    it("should render the welcome/feedback form", () => {
        // the wrapper article element should exist
        const welcome = getByRole("article");
        expect(welcome).not.toBeFalsy();

        // the star icon on the welcome page should visible
        const startIcon = getByRole("img") as HTMLImageElement;
        expect(startIcon).toBeTruthy();
        expect(startIcon.tagName).toMatch(/img/i);
        expect(startIcon.src).toMatch(/icon-star/i)
        expect(startIcon.alt).toMatch(/welcome star icon/i)

        // heading of h1 and matching text must be visible
        const heading = getByRole("heading", { level: 1 });
        expect(heading).toBeTruthy();
        expect(heading.textContent).toMatch(/how did we do?/i);

        // paragraph text as h1 sibling should exist
        const paragraph = heading.nextElementSibling;
        expect(paragraph.tagName).toEqual("P");
        expect(paragraph.textContent).toMatch(/please let us know how we did with your support request/i)

        // button aria-label was incorrectly spelt as Feeback instead of Feedback
        // thus the same is used to query the buttons
        // five feedback buttons must exist
        const feedbackButtons = getAllByRole("button", { name: /Feeback/i });
        expect(feedbackButtons.length).toEqual(5);
        feedbackButtons.forEach((btn, i) => {
            expect(btn.getAttribute("aria-label")).toMatch(`Feeback-${i + 1}`);
            expect(btn.hasAttribute("disabled")).toBe(false);
            expect(btn.getAttribute("type")).toEqual("button")
        })

        // submit button must exist
        const submitBtn = getByRole("button", { name: /Submit/i });
        expect(submitBtn).toBeTruthy();
        expect(submitBtn.tagName).toMatch(/button/i);
        expect(submitBtn.hasAttribute("disabled")).toBe(true)
        expect(submitBtn.getAttribute("type")).toEqual("submit")
    })

    it("should display the thank you screen on user feedback 1", async () => {
        const feedbackButton = getByRole("button", { name: /feeback-1/i });
        const submitBtn = getByRole("button", { name: /Submit/i });
        await fireEvent.click(feedbackButton);
        expect(submitBtn.hasAttribute("disabled")).toBe(false);
        await fireEvent.click(submitBtn);
        expect((await findByRole("heading", { level: 1 })).textContent).toMatch(/thank you/i)
        expect((await findByRole("heading", { level: 2, name: 'result' })).textContent).toEqual(`You selected 1 out of 5`)
    })

    it("should display the thank you screen on user user feedback 2", async () => {
        const feedbackButton = getByRole("button", { name: /feeback-2/i });
        const submitBtn = getByRole("button", { name: /Submit/i });
        await fireEvent.click(feedbackButton);
        expect(submitBtn.hasAttribute("disabled")).toBe(false);
        await fireEvent.click(submitBtn);
        expect((await findByRole("heading", { level: 1 })).textContent).toMatch(/thank you/i)
        expect((await findByRole("heading", { level: 2, name: 'result' })).textContent).toEqual(`You selected 2 out of 5`)
    })

    it("should display the thank you screen on user user feedback 3", async () => {
        const feedbackButton = getByRole("button", { name: /feeback-3/i });
        const submitBtn = getByRole("button", { name: /Submit/i });
        await fireEvent.click(feedbackButton);
        expect(submitBtn.hasAttribute("disabled")).toBe(false);
        await fireEvent.click(submitBtn);
        expect((await findByRole("heading", { level: 1 })).textContent).toMatch(/thank you/i)
        expect((await findByRole("heading", { level: 2, name: 'result' })).textContent).toEqual(`You selected 3 out of 5`)
    })

    it("should display the thank you screen on user user feedback 4", async () => {
        const feedbackButton = getByRole("button", { name: /feeback-4/i });
        const submitBtn = getByRole("button", { name: /Submit/i });
        await fireEvent.click(feedbackButton);
        expect(submitBtn.hasAttribute("disabled")).toBe(false);
        await fireEvent.click(submitBtn);
        expect((await findByRole("heading", { level: 1 })).textContent).toMatch(/thank you/i)
        expect((await findByRole("heading", { level: 2, name: 'result' })).textContent).toEqual(`You selected 4 out of 5`)
    })

    it("should display the thank you screen on user user feedback 5", async () => {
        const feedbackButton = getByRole("button", { name: /feeback-5/i });
        const submitBtn = getByRole("button", { name: /Submit/i });
        await fireEvent.click(feedbackButton);
        expect(submitBtn.hasAttribute("disabled")).toBe(false);
        await fireEvent.click(submitBtn);
        expect((await findByRole("heading", { level: 1 })).textContent).toMatch(/thank you/i)
        expect((await findByRole("heading", { level: 2, name: 'result' })).textContent).toEqual(`You selected 5 out of 5`)
    })
})


