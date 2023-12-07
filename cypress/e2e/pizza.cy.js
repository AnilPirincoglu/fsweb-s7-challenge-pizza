describe('challenge test', () => {
  it("open home page test", () => {
    cy.visit("localhost:3000");
  })

  it("open pizza order page test", () => {
    cy.visit("localhost:3000");
    cy.get("[data-cy=pizzaOrder]").click();
    cy.contains("Ana Sayfa- Sipariş Oluştur");
  });

  it("size choose test", () => {
    cy.visit("localhost:3000/pizza");

    cy.get("[data-cy=small]").should("not.have.class", "active");
    cy.get("[data-cy=medium]").should("not.have.class", "active");
    cy.get("[data-cy=large]").should("not.have.class", "active");


    cy.get("[data-cy=small]").click().should("have.class", "active");
    cy.get("[data-cy=medium]").should("not.have.class", "active");
    cy.get("[data-cy=large]").should("not.have.class", "active");

    cy.get("[data-cy=medium]").click().should("have.class", "active");
    cy.get("[data-cy=small]").should("not.have.class", "active");
    cy.get("[data-cy=large]").should("not.have.class", "active");

    cy.get("[data-cy=large]").click().should("have.class", "active");
    cy.get("[data-cy=small]").should("not.have.class", "active");
    cy.get("[data-cy=medium]").should("not.have.class", "active");

  })

  it("e2e submit test", () => {

    cy.visit("localhost:3000");
    cy.get("[data-cy=pizzaOrder]").click();

    cy.get("[data-cy=submitButton]").should("be.disabled");

    cy.get("[data-cy=small]").click().should("have.class", "active");
    cy.get("[data-cy=dough]").select("Normal Hamur");

    cy.get("[data-cy=peperoni]").check().should("be.checked");
    cy.get("[data-cy=sucuk]").check().should("be.checked");
    cy.get("[data-cy=onion]").check().should("be.checked");
    cy.get("[data-cy=corn]").check().should("be.checked");

    cy.get("[data-cy=name]").type("a");
    cy.contains("İsim en az 2 karakter olmalıdır");

    cy.get("[data-cy=name]").clear();
    cy.contains("İsim alanı boş bırakılamaz.");

    cy.get("[data-cy=submitButton]").should("be.disabled");

    cy.get("[data-cy=name]").type("Anıl");
    cy.get("[data-cy=submitButton]").should("be.enabled").click();


  })



})