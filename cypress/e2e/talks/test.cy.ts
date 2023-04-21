describe('Talks', () => {
    it('should run the app', () => {
        cy.visit('/')
    })

    it('should get the table', () => {
        cy.visit('/')
        cy.get('table')
    })

    it('should get the list', () => {
        cy.visit('/')
        cy.get('[data-test-id="tabs-selector"] button').last().click()
        cy.get('[data-test-id="tab-list"] ul')
    })

    it('should get one result in table', () => {
        cy.visit('/')
        cy.get('#topic-selector').select('2')
        cy.get('tbody tr').should('have.length', 1)
    })

    it('should get one result in list', () => {
        cy.visit('/')
        cy.get('[data-test-id="tabs-selector"] button').last().click()
        cy.get('#topic-selector').select('2')
        cy.get('[data-test-id="tab-list"] ul li').should('have.length', 1)
    })

    it('should show the message saying no results found in table section', () => {
        cy.visit('/')
        cy.get('#topic-selector').select('2')
        cy.get('#speaker-selector').select('1')
        cy.get('[data-test-id="tab-table"] h3').should('have.length', 1)
    })

    it('should show the message saying no results found in list section', () => {
        cy.visit('/')
        cy.get('[data-test-id="tabs-selector"] button').last().click()
        cy.get('#topic-selector').select('2')
        cy.get('#speaker-selector').select('1')
        cy.get('[data-test-id="tab-list"] h3').should('have.length', 1)
    })
})
