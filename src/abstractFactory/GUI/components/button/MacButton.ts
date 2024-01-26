import { IButton } from "../interfaces/IButton";

export class MacButton implements IButton {
  paint(): void {
    console.log("Mac Button was rendered!");
  }
}
