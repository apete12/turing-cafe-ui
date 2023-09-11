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

    cy.get('.resy-container').last().contains('Name: Leta')
      .get('.resy-container').last().contains('Date: 4/5')
      .get('.resy-container').last().contains('Time: 7:00')
      .get('.resy-container').last().contains('Party Size: 2')
  })

  it('Should see form to add new reservation on home page', () => {
    cy.get('.resy-form').get('.form').contains('h2', 'Make a New Reservation!')
    cy.get('.resy-form').get('.form').get('input[type="name"]')
      .type('Alex')
      .should('have.value', 'Alex')
    cy.get('.resy-form').get('.form').get('input[type="date"]')
      .type('2023-09-12')
      .should('have.value', '2023-09-12')
    cy.get('.resy-form').get('.form').get('input[type="time"]')
      .type('07:00')
      .should('have.value', '07:00')
  })

  it('Should add new reservation when user selects submit button, see reservation displayed on home page', () => {
    cy.intercept("POST", 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: "reservationsPost.json"
    })

    cy.get('.resy-form').get('.form').contains('h2', 'Make a New Reservation!')
    cy.get('.resy-form').get('.form').get('input[type="name"]')
      .type('Alex')
      .should('have.value', 'Alex')
    cy.get('.resy-form').get('.form').get('input[type="date"]')
      .type('2023-09-12')
      .should('have.value', '2023-09-12')
    cy.get('.resy-form').get('.form').get('input[type="time"]')
      .type('07:00')
      .should('have.value', '07:00')
    cy.get('.resy-form').get('.form').get('input[type="number"]')
      .type('3')
      .should('have.value', '3')

    cy.get('button').click()
    cy.get('.resy-container').children().should("have.length", 3)
    cy.get('.resy-container').last().contains('Name: Alex')
      .get('.resy-container').last().contains('Date: 2023-09-12')
      .get('.resy-container').last().contains('Time: 7:00')
      .get('.resy-container').last().contains('Party Size: 3')
  })
})