describe("Logar com API", () => {
  beforeEach(() => {
    cy.login("fulano@qa.com", "teste")
  })
  it("Login com sucesso", () => {
    cy.visit('front.serverest.dev/admin/home');
  });
});
