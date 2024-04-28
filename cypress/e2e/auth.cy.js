var loginDetails = require('../fixtures/login.json')
var passDetails = require('../fixtures/login1.json')


describe('auth', () => {
  beforeEach(() => {
    cy.visit('https://qamid.tmweb.ru/admin/');
  })

  it('form authorizations', () => {
    cy.login();
    cy.contains("Управление залами").should('be.visible');
  })

  it('unform authorizations', () => {
    cy.wronglogin();
    cy.contains("Ошибка авторизации!").should('be.visible');
  })
}); 
