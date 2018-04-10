import { VerifierNombresValidator } from "./caracteres-validator";
import { AbstractControl } from "@angular/forms";

describe('sansEspaces Validator', () => {
    it('plage pour la valeur invalide avec 50 espaces', () => {
        let control = {value: ' '.repeat(50)};
        let validator = VerifierNombresValidator.sansEspaces();
        let result= validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);
    });

    it('plage pour la valeur invalide null', () => {
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
//------------------------- TP 09 -------------------------------------------------------------------------------------------------
    it('une expression avec 1 espace et 2 caractère est invalide', () => {
        let control = {value: ' xx'};
        let validator = VerifierNombresValidator.longueurMinimum(3);
        let result= validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(false);
    });

    it('une expression avec 2 espaces et 1 caractère est invalide ', () => {
        let control = {value: '  x'};
        let validator = VerifierNombresValidator.longueurMinimum(3);
        let result= validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(false);
    });

    it('une phrase avec 3 espaces et 3 caractères est valide', () => {
        let control = {value: '   xxx'};
        let validator = VerifierNombresValidator.longueurMinimum(3);
        let result= validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(true);
    });

    it('une phrase avec 5 espaces, 5 caractères et 5 espaces est valide', () => {
        let control = {value: '     xxxxx     '};
        let validator = VerifierNombresValidator.longueurMinimum(3);
        let result= validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(true);
    });
})