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
//----------------------- TP 09 ------------------------------------------------------------
    static longueurMinimum(min: number): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            // remove all space
            if (c.value.replace(/ /g,"").length >= min && c.value !== null){
                return{'longueurMinimum': true};
            }
            return { 'longueurMinimum': false};
        };
    }
}