const seats = require('../fixtures/seats');
var loginDetails = require('../fixtures/login.json')
var passDetails = require('../fixtures/login1.json')
//import loginDetails from '../fixtures/login.json'
import tests from '../fixtures/seats.json'; //современный способ)

describe('movie tickets reservations', () => {
	beforeEach(() => {
		cy.visit('https://qamid.tmweb.ru/client/index.php');
		//cy.visit('/');
	})
	it('should display 7 days', () => {
		cy.get('.page-nav__day').should('have.length', 7);
	})


	tests.forEach(test => {
		it(test.name, () => {
			cy.get('.page-nav__day').eq(4).click();
			cy.get('.movie').first().contains('00:00').click();
			test.data.forEach(seat => {
				cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click();
			});
			cy.get('.acceptin-button').click();
			cy.contains("Вы выбрали билеты:").should('be.visible');
		});

	});
});

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



// tests.forEach(test => { // второй способ написания теста
// it.only(test.name, () => {
//   cy.visit('/');
//   cy.get('.page-nav__day').eq(4).click();
//   cy.get('.movie-seances__time').contains('12:00'). click();
//   test.data.forEach(seat => {
//         cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click(); 
//       })
//       cy.get('.acceptin-button').click();
//      cy. contains("Вы выбрали билеты:").should('be.visible');
//     });
//   });