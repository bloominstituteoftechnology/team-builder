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

  //sanity test check
  if("sanity check", () => {
    expect(1+1).to.equal(2);
    expect(2+2).not.equal(5);
  })

  it("the proper elements are showing", () => {
    textInput().should("exist");
    emailInput().should("exist");
    roleInput().should("exist");
    foobarInput().should("not.exist");
  })




  
  
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})