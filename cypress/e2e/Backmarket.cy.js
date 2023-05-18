describe("backmarket.fr", () => {
  it("connexion-échoué mdp incorret", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
    cy.get('[data-qa="accept-cta"] > .MkLAMntR').type("c'est ok pour moi");
    cy.get('#signin-email').type("coseb1620@gmail.com");
    cy.get('#signin-password').type("furoauy");
    cy.get('[data-qa="signin-submit-button"] > .MkLAMntR > ._2GvJDBxS').click();
    cy.get('.text-red-700').should('contain.text', "Saisissez un e-mail et un mot de passe valides.");
  });

  it("connexion-réussite", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
    cy.get('[data-qa="accept-cta"] > .MkLAMntR').type("c'est ok pour moi");
    cy.get('#signin-email').type("coseb1620@gmail.com");
    cy.get('#signin-password').type("Furious0677");
    cy.get('[data-qa="signin-submit-button"] > .MkLAMntR > ._2GvJDBxS').click();
  });

  it("connexion-deconnexion", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
    cy.get('[data-qa="accept-cta"] > .MkLAMntR').type("c'est ok pour moi");
    cy.get('#signin-email').type("coseb1620@gmail.com");
    cy.get('#signin-password').type("Furious0677");
    cy.get('[data-qa="signin-submit-button"] > .MkLAMntR > ._2GvJDBxS').click();
    cy.get('.mr-3 > span').click();
    cy.get(':nth-child(4) > :nth-child(1) > .bg-transparent > .body-2-light').click();
  });
});