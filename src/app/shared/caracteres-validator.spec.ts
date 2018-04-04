import { VerifierNombresValidator } from "./caracteres-validator";
import { AbstractControl } from "@angular/forms";

describe('sansEspaces Validator', () => {
    it('plage pour la valeur valide limite 1', () => {
        let control = {value: ''};
        let validator = VerifierNombresValidator.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);
    });
    
    it('plage pour la valeur valide limite 1', () => {
        let control = {value: '          '};
        let validator = VerifierNombresValidator.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);
    });

    it('plage pour la valeur valide limite 0', () => {
        let control = {value: '   '};
        let validator = VerifierNombresValidator.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);
    });
})