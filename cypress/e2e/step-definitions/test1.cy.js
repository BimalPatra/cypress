import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

Given("starting test", () =>{ 
  cy.visit("https://google.com")
  console.log("starting test")
});

When("Start to type1", () => {
    cy.visit("https://google.com")
    console.log("Start to type1")

});

Then("Start to type2", () => {
    cy.visit("https://google.com")
    console.log("Start to type2")

});