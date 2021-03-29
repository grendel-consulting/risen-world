/// <reference types="cypress" />

it(`should render the home page`, () => {
  cy.visit(`/`);
  cy.contains(`Risen World`);
});

export {};
