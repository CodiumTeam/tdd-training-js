describe('Coffee Machine', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Can select "Coffee" without Sugar', () => {
    cy.findByText('Coffee').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();

    cy.get('.drink-maker-image img')
      .should('have.attr', 'src')
      .should('include', 'coffee.png');
  });

  it('Can select "Tea" without Sugar', () => {
    cy.findByText('Tea').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.get('.drink-maker-image img')
      .should('have.attr', 'src')
      .should('include', 'tea.png');
  });

  it('Can select "Chocolate" without Sugar', () => {
    cy.findByText('Chocolate').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.get('.drink-maker-image img')
      .should('have.attr', 'src')
      .should('include', 'chocolate.png');
  });

  it('Can select "Tea" with 1 Sugar', () => {
    cy.findByText('Tea').click();
    cy.findByText('+').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.get('.drink-maker-image img')
      .should('have.attr', 'src')
      .should('include', 'tea-with-sugar-stick.png');
  });

  it('Can select "Coffee" with 1 Sugar', () => {
    cy.findByText('Coffee').click();
    cy.findByText('+').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.get('.drink-maker-image img')
      .should('have.attr', 'src')
      .should('include', 'coffee-with-sugar-stick.png');
  });

  it('Can select "Chocolate" with 1 Sugar', () => {
    cy.findByText('Chocolate').click();
    cy.findByText('+').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.get('.drink-maker-image img')
      .should('have.attr', 'src')
      .should('include', 'chocolate-with-sugar-stick.png');
  });

  it('Can select "Tea" with 2 Sugar', () => {
    cy.findByText('Tea').click();
    cy.findByText('+').click();
    cy.findByText('+').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.get('.drink-maker-image img')
      .should('have.attr', 'src')
      .should('include', 'tea-with-two-sugar-stick.png');
  });

  it('Can select "Coffee" with 2 Sugar', () => {
    cy.findByText('Coffee').click();
    cy.findByText('+').click();
    cy.findByText('+').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.get('.drink-maker-image img')
      .should('have.attr', 'src')
      .should('include', 'coffee-with-two-sugar-stick.png');
  });

  it('Can select "Chocolate" with 2 Sugar', () => {
    cy.findByText('Chocolate').click();
    cy.findByText('+').click();
    cy.findByText('+').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.get('.drink-maker-image img')
      .should('have.attr', 'src')
      .should('include', 'chocolate-with-two-sugar-stick.png');
  });

  it('Can\'t select "Tea" without enougth money', () => {
    cy.findByText('Tea').click();
    cy.findByText('+').click();
    cy.findByText('+').click();
    cy.findByRole('spinbutton').type(0.3);
    cy.findByText('Start').click();
    cy.findByText('You need 0.1 to buy "Tea"').should('be.visible');
  });

  it('Can\'t select "Coffee" without enougth money', () => {
    cy.findByText('Coffee').click();
    cy.findByText('+').click();
    cy.findByText('+').click();
    cy.findByRole('spinbutton').type(0.3);
    cy.findByText('Start').click();
    cy.findByText('You need 0.3 to buy "Coffee"').should('be.visible');
  });

  it('Can\'t select "Chocolate" without enougth money', () => {
    cy.findByText('Chocolate').click();
    cy.findByText('+').click();
    cy.findByText('+').click();
    cy.findByRole('spinbutton').type(0.3);
    cy.findByText('Start').click();
    cy.findByText('You need 0.2 to buy "Chocolate"').should('be.visible');
  });
});
