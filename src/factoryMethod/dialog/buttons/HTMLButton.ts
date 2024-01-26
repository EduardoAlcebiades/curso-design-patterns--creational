import { IButton } from "./interfaces/IButton";

export class HTMLButton implements IButton {
  render(): void {
    console.log("Botão no estilo HTML renderizado!");
  }

  onClick(closeDialog: () => void): void {
    console.log("Evendo de click adicionado!");
  }
}
