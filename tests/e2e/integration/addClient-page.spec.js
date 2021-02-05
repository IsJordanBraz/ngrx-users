/// <reference types="Cypress" />

describe('Add Client Page', () => {
    it('should display the page title', () => {
      cy.visit('/cadastrar'); 
      cy.get('h4')
        .should('contain.text', 'ADICIONAR NOVO CLIENTE');
    });
});