
describe('LOGIN', ()=>{

  it('Performance Glitch User', ()=> {
    cy.visit('https://www.saucedemo.com/') 
    cy.title().should ('equal', 'Swag Labs')
    cy.get('.login_logo').should('be.visible')
    cy.get('[data-test="username"]').should('be.visible').type('performance_glitch_user')
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
    cy.get('#login-button').should('be.enabled').click()
    cy.contains('Products').should('be.visible')
    cy.get('.inventory_list').should('not.be.empty')
    cy.get('.inventory_item_img').should('be.visible')
    cy.get('#add-to-cart-sauce-labs-backpack').should('contain', 'Add to cart').and('exist').click()
    cy.get('.shopping_cart_link').should('be.visible').click()
    cy.get('[data-test="continue-shopping"').should('have.text', 'Continue Shopping').click()
    cy.screenshot()
  })  
})