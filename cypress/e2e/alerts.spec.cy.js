describe('template spec', () => {}
)
    it('passes', () => {}
    )
      Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
      cy.visit('https://demoqa.com/alerts', {timeout: 120000})
      cy.get('#Button').should('contain', 'Click me')
      cy.get('#alert-button').click();
      it('should show "this alert appeared after 5 seconds"', () => {
        cy.on('window:confirm', (text) => {
          expect(text).to.contains('Do you confirm action?');

    })
  
  })