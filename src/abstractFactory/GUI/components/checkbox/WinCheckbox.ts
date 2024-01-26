import { ICheckbox } from "../interfaces/ICheckbox";

export class WinCheckbox implements ICheckbox {
  paint(): void {
    console.log("Windows Checkbox was rendered!");
  }
}
