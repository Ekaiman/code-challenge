describe('Game flows', () => {
  it('Should have form on load', () => {
    cy.visit('http://localhost:3000/')
      .get('input')
      .get('.title')
      .contains('Write a commerical!')
  })

  it('Should have a disabled button until while input is empty', () => {
    cy.visit('http://localhost:3000/')
      .get('input')
      .get('.submit-button')
      .should('be.disabled')
  })

  it('Should be able to type in input field', () => { 
    cy.get('input')
      .type('Yellow hard slippers')
      .should('have.value', 'Yellow hard slippers')
  })

  it('Should submit idea and have a card be returned', () => { 
    cy.get('.submit-button')
      .click()
      .get('.card')
      .contains('Yellow hard slippers')
  })

  it('Should clear input after submit is clicked', () => { 
    cy.get('input')
      .should('be.empty')
      .get('.submit-button')
      .should('be.disabled')
  })

  it('Should be able to delete a card', () => { 
    cy.get('.close')
      .click()
      .get('.card')
      .should('not.exist')
    
  })
})
