describe ('Star Wars Form', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    const textInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]')

    it('sanity check', () => {
        expect(1 + 2).to.equal(3)
    })

    it('The proper elements are showing', () => {
        textInput().should('exist');
        emailInput().should('exist');
    })
})