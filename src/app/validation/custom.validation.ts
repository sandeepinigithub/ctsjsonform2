import { FormControlConfig } from '@rxweb/reactive-dynamic-forms';
import { AbstractControl } from '@angular/forms';
export class NonAsyncCustomValidation extends FormControlConfig {
      override validator:any = (control: AbstractControl):any => {        
        switch (control.value) {
            case 'india':
                return { custom: { message: 'Indian' } };
                break;
            case null:
                return { custom: { message: 'Please enter something' } };
                break;
        }
    };
}