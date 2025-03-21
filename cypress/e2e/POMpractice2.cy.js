let el
describe('POM FIXTURE', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.title().should('equal', 'Swag Labs')
        cy.fixture('example').then((sel)=>{
            el=sel
        })
    })

    it('Performance Glitch User', ()=>{
        // cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.performanceglitchUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.wait(2000)
        // })
    })

    it('Standard User', ()=>{
        // cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.wait(2000)
        // })
    })

    it('PROBLEM USER', ()=>{
        // cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.problemUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
            cy.wait(2000)
        // })
    })

    it('error user', ()=>{
        // cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.errorUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
        // })
    })
})