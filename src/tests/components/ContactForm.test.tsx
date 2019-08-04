import React from "react";
import * as Enzyme from "enzyme";
import ContactForm from "../../main/components/contact/ContactForm";

describe("ContactForm Component", () => {
    const wrapper = Enzyme.shallow(<ContactForm/>);

    it("renders without crashing", () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe("State management", () => {
        const dummyNewValue: string = "Something";

        it("Sets the first name correctly", () => {
            wrapper.find("#firstName").simulate("change", {target: {value: dummyNewValue}});

            expect((wrapper.instance() as ContactForm).firstName).toEqual(dummyNewValue);
        });

        it("Sets the last name correctly", () => {
            wrapper.find("#lastName").simulate("change", {target: {value: dummyNewValue}});

            expect((wrapper.instance() as ContactForm).lastName).toEqual(dummyNewValue);
        });

        it("Sets the email address correctly", () => {
            wrapper.find("#emailAddress").simulate("change", {target: {value: dummyNewValue}});

            expect((wrapper.instance() as ContactForm).email).toEqual(dummyNewValue);
        });

        it("Sets the message correctly", () => {
            wrapper.find("#message").simulate("change", {target: {value: dummyNewValue}});

            expect((wrapper.instance() as ContactForm).message).toEqual(dummyNewValue);
        });
    });

    // Validation is performed by an external library so it is not being tested.
    it("Should handle submission correctly", () => {
        const formEvent = {
            preventDefault: () => {
                return;
            },
        } as React.FormEvent<HTMLFormElement>;

        // Currently submission does nothing useful, so there is nothing to test.
        (wrapper.instance() as ContactForm).handleSubmit(formEvent);
    });
});
