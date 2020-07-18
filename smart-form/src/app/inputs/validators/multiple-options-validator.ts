import { FormControl } from '@angular/forms';

export class MultipleOpsValidator {
  static minOptions(min: number) {
    return (form: FormControl) => {
      if (form.value.length >= min) {
        return null;
      }
      return { minOptions: { min, current: form.value.length } };
    };
  }

  static maxOptions(max: number) {
    return (form: FormControl) => {
      if (form.value.length > max) {
        return { maxOptions: { max, current: form.value.length } };
      }
      return null;
    };
  }
}
