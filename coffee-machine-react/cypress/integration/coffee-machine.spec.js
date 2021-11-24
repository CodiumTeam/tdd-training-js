describe('Coffee Machine', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Can select "Coffee"', () => {
    cy.findByText('Coffee').click();
    cy.get('.drink-maker-image img')
      .should('have.attr', 'src')
      .should('include', 'coffee');
  });
});
