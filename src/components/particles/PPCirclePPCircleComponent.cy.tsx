import React from "react";
import PPCircleComponent from "./PPCircle";
import PPImage from "../../assets/shortcut-icons/user_avatar.jpg";

describe("<PPCircleComponent />", () => {
  beforeEach(() => {
    cy.mount(<PPCircleComponent ppimage={PPImage} />);
  });

  it("counter", () => {
    cy.get("[data-cy=ppcircle]").should("contain.text", 0);
    for (let index = 0; index < 10; index++) {
      cy.get("[data-cy=ppcircle]").click();
    }
    cy.get("[data-cy=ppcircle]").click();
    cy.get("[data-cy=ppcircle]").should("contain.text", 11);
  });
});
