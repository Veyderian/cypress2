//const { method } = require("cypress/types/bluebird");

describe('template spec', () => {

	//создание пользователя
	it('create user', () => {

		const user_id = 777;

		// cy.request( 'POST', 'https://petstore.swagger.io/v2/user/', //создание пользователя
		cy.request('POST', "https://petstore.swagger.io/v2/user/",


			{
				id: user_id,
				username: "Petro",
				firstName: "Petr",
				lastName: "Petrov",
				email: "string@mail.ru",
				password: "string",
				phone: "+7978 002 00 00",
				userStatus: 20
			}

		).then((response) => {
			expect(response.status).be.eql(200);
			cy.log(JSON.stringify(response.body));
			expect(response.body).be.eql({
				code: 200,
				type: "unknown",
				message: "777"
			})


			var username = "Petro";
			var userId = response.body.id;


			cy.request('GET', `https://petstore.swagger.io/v2/user/${username} `).then((response) => { // просмотр данных
				expect(response.status).be.eql(200);
				expect(response.body).be.eql({
					id: response.body.id,
					username: "Petro",
					firstName: "Petr",
					lastName: "Petrov",
					email: "string@mail.ru",
					password: "string",
					phone: "+7978 002 00 00",
					userStatus: 20
				})
			})
		})
	})
})
