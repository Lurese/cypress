
describe('LOGIN', ()=>{
  beforeEach(()=>{
    cy.visit('/')
    cy.title().should ('equal', 'Swag Labs')

  })

    it('Performance Glitch User', ()=> {
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
  
    it('Standard User', ()=> {
      cy.get('.login_logo').should('be.visible')
      cy.get('[data-test="username"]').should('be.visible').type('standard_user')
      cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
      cy.get('#login-button').should('be.enabled').click()
      cy.contains('Products').should('be.visible')
      cy.get('.inventory_list').should('not.be.empty')
      cy.get('.inventory_item_img').should('be.visible')
      cy.get('#add-to-cart-sauce-labs-backpack').should('contain', 'Add to cart').and('exist').click()
      cy.get('.shopping_cart_link').should('be.visible').click()
      cy.get('[data-test="continue-shopping"').should('have.text', 'Continue Shopping').click() 
    })
  
    it('Problem User', ()=> {
      cy.get('.login_logo').should('be.visible')
      cy.get('[data-test="username"]').should('be.visible').type('problem_user')
      cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
      cy.get('#login-button').should('be.enabled').click()
      cy.contains('Products').should('be.visible')
      cy.get('.inventory_list').should('not.be.empty')
      cy.get('.inventory_item_img').should('be.visible')
      cy.get('#add-to-cart-sauce-labs-backpack').should('contain', 'Add to cart').and('exist').click()
      cy.get('.shopping_cart_link').should('be.visible').click()
      cy.get('[data-test="continue-shopping"').should('have.text', 'Continue Shopping').click()  
    })
  
    it('Error User', ()=> {
      cy.get('.login_logo').should('be.visible')
      cy.get('[data-test="username"]').should('be.visible').type('error_user')
      cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
      cy.get('#login-button').should('be.enabled').click()
      cy.contains('Products').should('be.visible')
      cy.get('.inventory_list').should('not.be.empty')
      cy.get('.inventory_item_img').should('be.visible')
      cy.get('#add-to-cart-sauce-labs-backpack').should('contain', 'Add to cart').and('exist').click()
      cy.get('.shopping_cart_link').should('be.visible').click()
      cy.get('[data-test="continue-shopping"').should('have.text', 'Continue Shopping').click()  
    })
    
  })