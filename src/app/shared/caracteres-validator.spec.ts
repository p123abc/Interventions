import { VerifierNombresValidator } from "./caracteres-validator";
import { AbstractControl } from "@angular/forms";

describe('sansEspaces Validator', () => {
    it('plage pour la valeur valide limite 1', () => {
        let control = {value: ''};
        let validator = VerifierNombresValidator.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);
    });
    
    it('plage pour la valeur invalide avec 10 espaces', () => {
        let control = {value: '          '};
        let validator = VerifierNombresValidator.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);
    });

    it('plage pour la valeur valide avec une phrase avec des mots est valide', () => {
        let control = {value: 'Une phrase avec des mots est valide'};
        let validator = VerifierNombresValidator.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(true);
    });

    it('plage pour la valeur valide avec une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide ', () => {
        let control = {value: '      une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide      '};
        let validator = VerifierNombresValidator.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(true);
    });
})