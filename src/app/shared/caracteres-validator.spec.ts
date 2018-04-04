import { VerifierNombresValidator } from "./caracteres-validator";

describe('sans espace', ()=> {
    it('plage pour la valeur valide limite 1', () => {
        let validator = VerifierNombresValidator.plage();
        let result= validator(null);
        expect(result['plage']).toBe(true);
    })
})