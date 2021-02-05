/// <reference types="Cypress" />

import {
    getFirstClientId,
    getFirstClientName,
    getFirstClientEmail,
    getFirstClientCpf
  } from './../support/global'
  
describe('Home Page', () => {
    it('should display the page title', () => {
      cy.visit('/'); 
      cy.get('h4')
        .should('contain.text', 'Lista de Clientes');
    });
    it('should show the first client info', () => {
        cy.visit('/');
        cy.fixture('first-client.json').then((client) => {
          getFirstClientId().should('contain.text', client.id)
          getFirstClientName().should('contain.text', client.name)
          getFirstClientEmail().should('contain.text', client.email)
          getFirstClientCpf().should('contain.text', client.cpf)            
        })      
    });
});
