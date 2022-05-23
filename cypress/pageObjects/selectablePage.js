import BasePage from "./BasePage";

class selectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }
  static get textButton() {
    return cy.get(".list-group-item-action");
  }
  static get gridButton() {
    return cy.get("#demo-tab-grid");
  }
}

export default selectablePage;