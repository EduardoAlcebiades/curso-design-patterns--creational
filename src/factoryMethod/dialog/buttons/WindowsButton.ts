import { IButton } from "./interfaces/IButton";

export class WindowsButton implements IButton {
  render(): void {
    console.log("Botão no estilo Windows renderizado!");
  }

  onClick(closeDialog: () => void): void {
    console.log("Evendo de click adicionado!");
  }
}
