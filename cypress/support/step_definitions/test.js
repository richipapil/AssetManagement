/// <reference types="cypress" />

import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";

//Your test-case glue-code should be here :)

Given('I navigate to the website',()=>{

    cy.visit('http://localhost:3000/')

})

When('I click on the Add Asset tab',()=>{

    cy.get('[testid="add-asset"]').click()
    cy.contains("New Asset").should("be.visible")

}) 

And('I give type in a uniqiue combination name of 4 uppercase letters and 10 digits and click submit button',()=>{

    cy.get("input[placeholder='ISIN0000000045']").type("PAUL1212323434")
    cy.get('[data-test=button]').click()

})


Then('I receive a message as Correct Format in the Color Green',()=>{

     cy.contains('Correct format').should("be.visible")
            
}) 
