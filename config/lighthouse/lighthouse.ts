module.exports = {
  LHCI_GOOGLE_SPREAD_SHEET_ID: "1AwekCNLh7PNe7SV62NRwqvyPyAy1gRr-3cW4i2t4nE0",

  // Lighthouse 점수 색상 기준
  LHCI_GREEN_MIN_SCORE: 90,
  LHCI_ORANGE_MIN_SCORE: 50,
  LHCI_RED_MIN_SCORE: 0,

  // lighthouse 성능 측정할 페이지 이름 목록
  LHCI_MONITORING_PAGE_NAMES: ["/", "brand", "itemlist", "item"],

  // lighthouse 성능 측정할 페이지 이름 - url 매핑
  LHCI_PAGE_NAME_TO_URL: {
    MainPage: "/",
    BrandPage: "/brand/67",
    ItemListPage: "/itemlist/63",
    ItemPage: "/item/137",
  },

  // lighthouse 성능 측정할 페이지 이름 - 시트 id 매핑
  LHCI_PAGE_NAME_TO_SHEET_ID: {
    MainPage: 0,
    BrandPage: 1,
    ItemListPage: 2,
    ItemPage: 3,
  },

  /**
   * 페이지 URL을 받아 페이지 이름을 반환
   * @param {string} url
   * @returns {string} 페이지 이름
   */
  getLhciPageNameFromUrl(url: string): string | undefined {
    const decodedUrl = decodeURIComponent(url);
    return Object.keys(this.LHCI_PAGE_NAME_TO_URL).find(
      (name) =>
        decodeURIComponent(this.LHCI_PAGE_NAME_TO_URL[name]) === decodedUrl,
    );
  },

  /**
   * 페이지 이름을 받아 페이지 URL을 반환
   * @param {string} name
   * @returns {string} 페이지 URL
   */
  getLhciUrlFromPageName: (name) => {
    return module.exports.LHCI_PAGE_NAME_TO_URL[name];
  },

  /**
   * 페이지 이름을 받아 시트 ID를 반환
   * @param {string} name
   * @returns {number} 시트 ID
   */
  getLhciSheetIdFromPageName: (name) => {
    return module.exports.LHCI_PAGE_NAME_TO_SHEET_ID[name];
  },
};
