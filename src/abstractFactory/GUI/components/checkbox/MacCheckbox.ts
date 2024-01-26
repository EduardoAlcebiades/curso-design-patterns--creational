import { ICheckbox } from "../interfaces/ICheckbox";

export class MacCheckbox implements ICheckbox {
  paint(): void {
    console.log("Mac Checkbox was rendered!");
  }
}
