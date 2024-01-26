import { IButton, ICheckbox, MacButton, MacCheckbox } from "./components";
import { IGUIFactory } from "./interfaces/IGUIFactory";

export class MacGUIFactory implements IGUIFactory {
  createButton(): IButton {
    return new MacButton();
  }

  createCheckbox(): ICheckbox {
    return new MacCheckbox();
  }
}
