describe('Coffee Machine Kata', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
});
describe('Coffee Machine', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Can select "Tea" without Sugar', () => {
    cy.findByText('Tea').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.findByRole('alert').should('have.class', 'T::');
  });

  it('Can select "Coffee" without Sugar', () => {
    cy.findByText('Coffee').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.findByRole('alert').should('have.class', 'C::');
  });

  it('Can select "Chocolate" without Sugar', () => {
    cy.findByText('Chocolate').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.findByRole('alert').should('have.class', 'H::');
  });

  it('Can select "Tea" with 1 Sugar', () => {
    cy.findByText('Tea').click();
    cy.findByText('+').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.findByRole('alert').should('have.class', 'T:1:0');
  });

  it('Can select "Coffee" with 1 Sugar', () => {
    cy.findByText('Coffee').click();
    cy.findByText('+').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.findByRole('alert').should('have.class', 'C:1:0');
  });

  it('Can select "Chocolate" with 1 Sugar', () => {
    cy.findByText('Chocolate').click();
    cy.findByText('+').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.findByRole('alert').should('have.class', 'H:1:0');
  });

  it('Can select "Tea" with 2 Sugar', () => {
    cy.findByText('Tea').click();
    cy.findByText('+').click();
    cy.findByText('+').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.findByRole('alert').should('have.class', 'T:2:0');
  });

  it('Can select "Coffee" with 2 Sugar', () => {
    cy.findByText('Coffee').click();
    cy.findByText('+').click();
    cy.findByText('+').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.findByRole('alert').should('have.class', 'C:2:0');
  });

  it('Can select "Chocolate" with 2 Sugar', () => {
    cy.findByText('Chocolate').click();
    cy.findByText('+').click();
    cy.findByText('+').click();
    cy.findByRole('spinbutton').type(1);
    cy.findByText('Start').click();
    cy.findByRole('alert').should('have.class', 'H:2:0');
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
