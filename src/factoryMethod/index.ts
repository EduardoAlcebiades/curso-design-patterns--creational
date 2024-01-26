import { Dialog, WebDialog, WindowsDialog } from "./dialog";
import { ApplicationEnum } from "./enums/ApplicationEnum";

function getDialog(argument: string, value?: ApplicationEnum): Dialog {
  switch (value) {
    case ApplicationEnum.WEB:
      return new WebDialog();
    case ApplicationEnum.WINDOWS:
      return new WindowsDialog();
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
    const dialog = getDialog(argument, value as ApplicationEnum);

    dialog.render();
  } catch (err: any) {
    console.log(err?.message);
  }
}
