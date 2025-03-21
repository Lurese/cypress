import {elements} from '../fixtures/selector'
describe('PAGE OBJECT MODEL', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Performance Glitch User', ()=>{
        cy.get(elements.usernameField).type(elements.performanceglitchUser)
        cy.get(elements.passwordField).type(elements.password)
        cy.get(elements.loginButton).click()
        cy.wait(2000)

    })
    it('standard user', ()=>{
        cy.get(elements.usernameField).type(elements.standardUser)
        cy.get(elements.passwordField).type(elements.password)
        cy.get(elements.loginButton).click()
        cy.wait(2000)
    })
    it('Problem User', ()=>{
        cy.get(elements.usernameField).type(elements.problemUser)
        cy.get(elements.passwordField).type(elements.password)
        cy.get(elements.loginButton).click()
        cy.wait(2000)
    })
    it('Error User', ()=>{
        cy.get(elements.usernameField).type(elements.errorUser)
        cy.get(elements.passwordField).type(elements.password)
        cy.get(elements.loginButton).click()
    })
})