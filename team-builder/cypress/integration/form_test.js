describe ('Star Wars Form', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    const textInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]')
    const submitBtn = () => cy.get(`button[type=submit]`)

    
    it('sanity check', () => {
        expect(1 + 2).to.equal(3)
        cy.get('input[name=name]').should('be.empty')
    })

    it('The proper elements are showing', () => {
        textInput().should('exist');
        emailInput().should('exist');
        submitBtn().should('exist');
        cy.get('[type="checkbox"]').check();
    })

    describe('Filling out the inputs', () => {
      it('can type in the inputs', () => {
        textInput()
          .should('have.value', '')
          .type('Boba Fett')
          .should('have.value', 'Boba Fett');
        
        emailInput()
          .should('have.value', '')
          .type('simpleman@trytomkway@uni.com')
          .should('have.value', 'simpleman@trytomkway@uni.com')
      })  

     it('the submit button enables when both inputs are filled out', () => {
         textInput().type('Boba!');
         emailInput().type('getonboard@slave1.com');
         submitBtn().should('not.be.disabled');
     }) 
    })
})