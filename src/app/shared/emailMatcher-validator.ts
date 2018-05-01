import { AbstractControl, ValidatorFn } from '@angular/forms';

export class emailMatcherValidator {

    static courrielDifferents(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            // const email = c.get('courriel');
            // const confirm = c.get('courrielConfirmation');
            if (!c['controls'].adresseCourriel.value || !c['controls'].confirmerCourriel.value) {
              return null;
            }
            return c['controls'].adresseCourriel.value === c['controls'].confirmerCourriel.value ? null : { match: true };
        };
    }     
}