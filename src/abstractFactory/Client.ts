import { IGUIFactory } from "./GUI";
import { IButton, ICheckbox } from "./GUI/components";

export class Client {
  private button?: IButton;
  private checkbox?: IButton;

  constructor(private factory: IGUIFactory) {}

  createUi() {
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }

  paint() {
    this.button?.paint();
    this.checkbox?.paint();
  }
}
