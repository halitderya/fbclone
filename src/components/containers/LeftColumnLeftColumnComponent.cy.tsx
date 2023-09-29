import React from "react";
import LeftColumnComponent from "./LeftColumn";

beforeEach = () => {
  cy.mount(<LeftColumnComponent />);
};
describe("<LeftColumnComponent />", () => {
  it("renders", () => {
    cy.mount(<LeftColumnComponent />);
  });
  it("is hidden", () => {
    cy.mount(<LeftColumnComponent />);

    cy.get("[data-cy=maindiv]").children(".icon2bhidden").should("contain.text", "Video");
  });
  it("test child", () => {
    cy.mount(<LeftColumnComponent />);
    cy.get("[data-cy=seee]").should("contain.text", "see me");
  });
});
