// goals.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('can set goal', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:4200/');
  cy.get(':nth-child(3) > .nav-link').click();
  cy.get('.form-control').clear();
  cy.get('.form-control').type('50');
  cy.get('.btn').click();
  cy.get('p').click();
  cy.get('.form-group > .alert').click();
  /* ==== End Cypress Studio ==== */
});
