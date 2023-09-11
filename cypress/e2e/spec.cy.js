describe('Test home page', () => {

  beforeEach(() => {
    cy.intercept("GET", 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: "reservations.json"
    })
    cy.visit('http://localhost:3000/?')

  })

  it('Should see application title on homepage', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations')
  })

  it('Should see two reservations on homepage', () => {
    cy.get('.resy-container').children().should("have.length", 2)

    cy.get('.resy-container').first().contains('Name: Christie')
      .get('.resy-container').first().contains('Date: 12/29')
      .get('.resy-container').first().contains('Time: 7:00')
      .get('.resy-container').first().contains('Party Size: 12')
  })
})