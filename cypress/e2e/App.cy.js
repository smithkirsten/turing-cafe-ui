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
})