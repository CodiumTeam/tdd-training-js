
describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/todo')
  })

  it('displays two todo items by default', () => {
    cy.get('.todo-list li').should('have.length', 2)
    
    cy.get('.todo-list li').first().should('have.text', 'Learn TDD')
    cy.get('.todo-list li').last().should('have.text', 'Start writing a test')
  })

  it('can add new todo items', () => {
    const newItem = 'Do not create falsy tests'

    cy.findByRole('textbox').type(`${newItem}{enter}`)

    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
  })

  it.skip('can check off an item as completed', () => {
    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()

    cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed')
  })
})
