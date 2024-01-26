import { IButton, ICheckbox, WinButton, WinCheckbox } from "./components";
import { IGUIFactory } from "./interfaces/IGUIFactory";

export class WinGUIFactory implements IGUIFactory {
  createButton(): IButton {
    return new WinButton();
  }

  createCheckbox(): ICheckbox {
    return new WinCheckbox();
  }
}
