describe('template spec', () => {}
)
    it('passes', () => {}
    )
      Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
      cy.visit('https://demoqa.com/frames', {timeout: 120000})
      cy.contains("samplepage")
  <   cy.click(iframe)