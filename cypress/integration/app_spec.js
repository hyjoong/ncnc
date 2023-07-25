const BASE_URL = "http://localhost:3000/";
const API_URL = "https://api2.ncnc.app/";
const BRAND_ID = 67;
const ITEMLIST_ID = 63;
const ITEM_ID = 137;

describe("E2E Test", () => {
  before(() => {
    cy.visit(`${BASE_URL}`);
  });

  it("페이지에 처음 접속하면  오늘의 떙처리콘! 글자를 확인할 수 있다", () => {
    cy.contains("오늘의 떙처리콘!", { timeout: 10000 }).should("be.visible");
  });

  it("페이지에 처음 접속하면 카테고리 탭을 볼 수 있다.", () => {
    cy.get(".categoryBox", { timeout: 10000 }).should("be.visible");
  });

  it("사용자는 카테고리를 클릭해서 브랜드 페이지로 이동할 수 있다.", () => {
    cy.get(".categoryBox", { timeout: 10000 }).eq(1).click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq(`/brand/${BRAND_ID}`);
    });
  });

  it("사용자는 브랜드 페이지에서 특정 브랜드를 선택하면 해당하는 선택한 브랜드의 itemList 페이지로 이동할 수 있다.", () => {
    cy.get(".categoryBox", { timeout: 10000 }).first().click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq(`/itemlist/${ITEMLIST_ID}`);
    });
  });

  it("사용자는 상품들 리스트에서 상품을 클릭해서 상품 상세페이지를 볼 수 있다.", () => {
    cy.get(".itemListBox", { timeout: 10000 }).first().click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq(`/item/${ITEM_ID}`);
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
