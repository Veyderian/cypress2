describe('template spec', () => {

	it('create pet', () => {

		const pet_id = 777;
		const pet_name = 'Usta';

		cy.request('POST', '/pet', {
			id: pet_id,
			name: pet_name
		}).then((response) => {
			expect(response.status).be.eql(200);
			cy.log(response.body);
			expect(response.body).be.eql({
				id: pet_id,
				tags: [],
				name: pet_name,
				photoUrls: []
			})

			var petId = response.body.id;

			cy.request(`https://petstore.swagger.io/v2/pet/${petId} `).then((response) => {
				expect(response.status).be.eql(200);
				expect(response.body).be.eql({
					id: petId,
					tags: [],
					name: pet_name,
					photoUrls: []
				})

				cy.request('DELETE', `https://petstore.swagger.io/v2/pet/${petId} `).then((response) => {
					expect(response.status).be.eql(200);

					cy.request({
						method: 'GET',
						url: `https://petstore.swagger.io/v2/pet/${petId}`,
						failOnStatusCode: false
					}).then((response) => {
						expect(response.status).be.eql(404);
					});

				});

			});

		});
	});
});