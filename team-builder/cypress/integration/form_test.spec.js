// write tests here

describe("Team Builder App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const nameInput = () => cy.get("input[name=name]");
  const emailInput = () => cy.get("input[name=email]");
  const roleInput = () => cy.get("input[name=role]");
  const submitBtn = () => cy.get(`button[id="submitBtn"]`);

  it("should do some basic math", () => {
    expect(1 + 1).to.equal(2);
    expect(1 + 2).not.to.equal(4);
    expect({}).not.to.equal({}); // ===
    expect({}).to.eql({}); // ==
  });

  it("should display the expected elemets", () => {
    nameInput().should("exist");
    emailInput().should("exist");
    roleInput().should("exist");
    submitBtn().should("exist");
  });

  describe("Filling out inputs and submitting", () => {
    it("should type stuff in the inputs", () => {
      nameInput()
        .should("have.value", "")
        .type("Lee Dami")
        .should("have.value", "Lee Dami");

      emailInput()
        .should("have.value", "")
        .type("Dami@dreamcatcher.com")
        .should("have.value", "Dami@dreamcatcher.com");

      roleInput()
        .should("have.value", "")
        .type("Rapper")
        .should("have.value", "Rapper");
    });

    it("should type and submit int he inputs", () => {
      nameInput().type("Lee Dami");
      emailInput().type("Dami@dreamcatcher.com");
      roleInput().type("Rapper");
      submitBtn().click();
    });
  });
});
