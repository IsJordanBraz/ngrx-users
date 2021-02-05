/* eslint-disable max-len */
// * Global

export const getFirstClientId = () => cy.get(':nth-child(2) > tr > :nth-child(1)');
export const getFirstClientName = () => cy.get(':nth-child(2) > tr > :nth-child(2)');
export const getFirstClientEmail = () => cy.get(':nth-child(2) > tr > :nth-child(3)');
export const getFirstClientCpf = () => cy.get(':nth-child(2) > tr > :nth-child(4)');