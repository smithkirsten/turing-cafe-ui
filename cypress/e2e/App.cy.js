describe('Landing page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/reservations', { fixture: 'reservations.json'})
    cy.visit('http://localhost:3000/')
  })
  it('Has a title', () => {
    cy.get('')
  })
})