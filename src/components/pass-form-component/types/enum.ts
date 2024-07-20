export enum RegExpPasswordValidation {
  EASY = '^[a-zA-Z\\d!@#$%^&*()_+\\[\\]{};\':"\\\\|,.<>/?]+$',
  MEDIUM = '^(?=.*[a-zA-Z].*[!@#$%^&*()_+\\[\\]{};\':"\\\\|,.<>/?])|(?=.*[a-zA-Z].*\\d)|(?=.*\\d.*[!@#$%^&*()_+\\[\\]{};\':"\\\\|,.<>/?]).+$',
  HARD = '^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$',
}
