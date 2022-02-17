const BASE_URL = "http://localhost:3000/";
const API_URL = "https://api2.ncnc.app/";
const BRAND_ID = 1;
const ITEMLIST_ID = 69;
const ITEM_ID = 7009;

describe("E2E Test", () => {
  before(() => {
    cy.visit(`${BASE_URL}`);
  });
  it("페이지에 처음 접속하면  헤더를 볼 수 있다", () => {
    cy.get(".header").should("be.visible");
  });

  it("페이지에 처음 접속하면 전체 게임 목록을 볼 수 있다.", () => {
    cy.get(".categoryBox", { timeout: 3000 }).should("be.visible");
  });

  it("사용자는 카테고리를 클릭해서 브랜드 목록 페이지로 들어갈 수 있다.", () => {
    cy.get(".categoryBox").first().click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq(`/brand/${BRAND_ID}`);
    });
  });

  it("사용자는 브랜드 목록 페이지에서 브랜드를 선택하면 해당하는 브랜드 상품들을 볼 수 있다..", () => {
    cy.get(".categoryBox").first().click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq(`/itemlist/${ITEMLIST_ID}`);
    });
  });

  it("사용자는 상품들 리스트에서 상품을 클릭해서 상품 상세페이지를 볼 수 있다..", () => {
    cy.get(".itemListBox").first().click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq(`/items/${ITEM_ID}`);
    });
  });

  it("사용자는 상세페이지에서 구매하기 버튼을 눌러 옵션리스트들을 조회한 후 옵션을 선택할 수 있다.", () => {
    cy.get(".optionBox").within(() => {
      cy.get(".buttonBuy").click();
      cy.get(".listContainer").first().click();
    });
  });
  it("사용자는 선택한 옵션을 구매할 수 있다", () => {
    cy.get(".buttonBuy").first().click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("구매 완료");
    });
    cy.on("window:confirm", () => true);
  });
});
