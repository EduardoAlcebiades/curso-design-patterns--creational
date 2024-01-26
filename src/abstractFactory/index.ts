import { Client } from "./Client";
import { IGUIFactory, MacGUIFactory, WinGUIFactory } from "./GUI";
import { ApplicationEnum } from "./enums";

function getGUIFactory(
  argument: string,
  value?: ApplicationEnum
): IGUIFactory {
  switch (value) {
    case ApplicationEnum.MAC:
      return new MacGUIFactory();
    case ApplicationEnum.WINDOWS:
      return new WinGUIFactory();
    default:
      throw new Error(
        `Invalid value '${
          value ?? ""
        }' for argument '--${argument}'\n\nAvailable options:\n- ${Object.values(
          ApplicationEnum
        ).join(`\n- `)}`
      );
  }
}

export default function (argument: string, value?: string) {
  try {
    const factory = getGUIFactory(argument, value as ApplicationEnum);
    const app = new Client(factory);

    app.createUi();
    app.paint();
  } catch (err: any) {
    console.log(err?.message);
  }
}
