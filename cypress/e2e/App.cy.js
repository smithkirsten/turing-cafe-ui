describe('Landing page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', { fixture: 'reservations.json'})
    cy.visit('http://localhost:3000/')
  })

  it('Has a title', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations')
  })

  it('Has a form', () => {
    cy.get('input').should('have.length', 4)
    cy.get('.submit-button').should('exist')
  })

  it('should display reservations', () => {
    cy.get('.res-card').should('have.length', 3)
    cy.get('#1').contains('Christie')
    cy.get('#3').contains('Lars')
  })

  it('should take in form inputs and display new card with info', () => {
    cy.get('#name').type('Bruce').should('have.value', 'Bruce')
    cy.get('#date').type('02/21').should('have.value', '02/21')
    cy.get('#time').type('7:00').should('have.value', '7:00')
    cy.get('#number').type('4').should('have.value', '4')
    
    cy.get('.submit-button').click()
    cy.get('.resy-container').contains('Bruce')
    cy.get('.resy-container').contains('02/21')
    cy.get('.resy-container').contains('7:00')
    cy.get('.resy-container').contains('4')
  })
})