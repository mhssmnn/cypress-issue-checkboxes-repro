describe('issue reproduction', () => {
  it('unchecks all the checked check boxes so no checks are left', () => {
    cy.visit('/page.html');
    cy.get('input[type="checkbox"]:checked').uncheck();
    cy.get('input[type="checkbox"]:checked').should('not.exist');
  });
});
