import { Dialog } from "./Dialog";
import { HTMLButton, IButton } from "./buttons";

export class WebDialog extends Dialog {
  protected createButton(): IButton {
    return new HTMLButton();
  }
}
