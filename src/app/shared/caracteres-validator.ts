import { ValidatorFn, AbstractControl } from "@angular/forms";

export class VerifierNombresValidator {
    static sansEspaces(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            // found something other than a space or line break
            if (/\S/.test(c.value) && c.value !== null){
                return{'sansEspaces': true};
            }
            return { 'sansEspaces': false};
        };
    }
}