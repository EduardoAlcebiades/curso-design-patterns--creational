import { Dialog } from "./Dialog";
import { IButton, WindowsButton } from "./buttons";

export class WindowsDialog extends Dialog {
  protected createButton(): IButton {
    return new WindowsButton();
  }
}
