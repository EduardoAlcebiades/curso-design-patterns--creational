import { IButton } from "../interfaces/IButton";

export class WinButton implements IButton {
  paint(): void {
    console.log("Windows Button was rendered!");
  }
}
