// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import loginDetails from '../fixtures/login.json'
Cypress.Commands.add('login', (email, password) => {
			
    cy.get('[for="email"] > .login__input').type(loginDetails.email);
    cy.get('[for="pwd"] > .login__input').type(loginDetails.password);
	  cy.get('.login__button').click();
})

import passDetails from '../fixtures/login1.json'
Cypress.Commands.add('wronglogin', (email1, password1) => {
			
    cy.get('[for="email"] > .login__input').type(passDetails.email1);
    cy.get('[for="pwd"] > .login__input').type(passDetails.password1);
	  cy.get('.login__button').click();
})


Cypress.Commands.add('createUser', (user) => {
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      body: {
    id: 0,
    username: "string",
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string",
    phone: "string",
    userStatus: 0
      },
    }).then((resp) => {
      cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user',
        //headers: { Authorization: 'Bearer ' + resp.body.token },
        body: {   
            code: 200,
            type: "unknown",
            message: "0"
            },
      })
    })
  })
  
  Cypress.Commands.add('getUser', (user) => {
    cy.request({
      method: 'GET',
      //url: 'https://petstore.swagger.io/v2/user',
      url:`/user/${username} `,
      body: {
    id: 0,
    username: "string",
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string",
    phone: "string",
    userStatus: 0
      },
    }).then((resp) => {
      cy.request({
        method: 'GET',
        url: `/user/${username} `,
        //headers: { Authorization: 'Bearer ' + resp.body.token },
        body: {   
            id: 0,
            username: "string",
            firstName: "string",
            lastName: "string",
            email: "string",
            password: "string",
            phone: "string",
            userStatus: 0
            },
      })
    })
  })
  


//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })