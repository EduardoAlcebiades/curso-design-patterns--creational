import { IButton } from "./buttons";

export abstract class Dialog {
  protected abstract createButton(): IButton;

  render(): void {
    const okButton = this.createButton();

    okButton.onClick(() => {});
    okButton.render();
  }
}
