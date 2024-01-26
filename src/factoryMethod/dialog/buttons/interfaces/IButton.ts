export interface IButton {
  render(): void;
  onClick(closeDialog: () => void): void;
}
