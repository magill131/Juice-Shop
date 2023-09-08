describe('template spec', () => {

    it('passes', () => {
  
      cy.visit('https://www.saucedemo.com/inventory.html')
      cy.get('.action-email')
      cy.type('standard@email.com').should('have.value', 'standard@email.com')
      cy.get('.action-password')
  .   cy.type('secretsauce').should('have.value', 'secretsauce')
      cy.contains('Add, to, cart').click()
      cy.get(h1)
      cy.get('query-btn').should('contain', 'Sauce, Labs, Backpack')
      cy.get('query-btn').should('contain', 'Cart')
      cy.get('query-btn').should('contain', 'Checkout')
      cy.get('.action-email')
      const validFirstName = 'yourFirstName'
      const validLastName = 'yourLastName'
      const validZipCode = 'yourZipCode'
      cy.get('query-btn').should('contain', 'Continue')
      cy.get('query-btn').should('contain', 'Finish')
      cy.visit('https://www.saucedemo.com/inventory.html')
      cy.get('.action-email')
      cy.type('standard@email.com').should('have.value', 'standard@email.com')
      cy.get('.action-password')
  .   cy.type('invalid').should('have.value', 'invalid')

    })
  
  })