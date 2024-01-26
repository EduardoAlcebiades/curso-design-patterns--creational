import { IButton, ICheckbox } from "../components";

export interface IGUIFactory {
  createButton(): IButton;
  createCheckbox(): ICheckbox;
}
