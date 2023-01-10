describe('Team Builder App', () => {
  //fresh state
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  //helpers
  const textInput = () => cy.get("input[name=name]");
  const emailInput = () => cy.get("input[name=email]");
  const roleInput = () => cy.get("input[name=role]");
  const foobarInput = () => cy.get("input[name=foobar]");
  const inputBtn = () => cy.get(`input[type="submit"]`);

  it("the proper elements are showing", () => {
    textInput().should("exist");
    emailInput().should("exist");
    roleInput().should("exist");
    foobarInput().should("not.exist");
    inputBtn().should("exist");

    cy.contains(/create your team!/i).should("exist");
  })

  describe("Filling out the inputs", () => {
    it("can navigate to the site", () => {
      cy.url().should("include", "localhost");
    })

    it("can type in the inputs", () => {
      textInput()
        .should('have.value', "")
        .type("Texi Schaeffer")
        .should("have.value", "Texi Schaeffer");
      
      emailInput()
        .should("have.value", "")
        .type("texirae.schaeffer@gmail.com")
        .should("have.value", "texirae.schaeffer@gmail.com");

      roleInput()
        .should("have.value", "")
        .type("software engineer")
        .should("have.value", "software engineer");
    })


  })

  
  
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})