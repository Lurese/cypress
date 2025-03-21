describe('LOGIN', ()=>{

    it('standard user', ()=>{

        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Lurese')
        cy.get('[data-test="lastName"]').type('Liora')
        cy.get('[data-test="postalCode"]').type(16009)
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="back-to-products"]').click()
    })
})