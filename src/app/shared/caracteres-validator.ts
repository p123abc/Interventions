import { ValidatorFn } from "@angular/forms";

export class VerifierNombresValidator {
    static plage(): ValidatorFn {
        return (): { [key: string]: boolean } | null => {
            return { 'plage': true};
        };
    }
}