import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { VerifierNombresValidator } from '../shared/caracteres-validator';
import { emailMatcherValidator } from '../shared/emailMatcher-validator';
import { TypeService } from './type.service';
import { IType } from './typeprobleme';

@Component({
  selector: 'inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {

  problemeForm: FormGroup;
  typeProbleme: IType[];
  errorMessage: string;
  constructor(private fb: FormBuilder, private type: TypeService) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
      prenom: ['',[Validators.required, VerifierNombresValidator.longueurMinimum(3)]],
      nom: ['',[Validators.required, VerifierNombresValidator.longueurMinimum(3)]],
      noType:['', [Validators.required]],
      notifier:['NePasMeNotifier'],
      telephoneUsager: [{value: '', disabled: true}],
      notifierGroup: this.fb.group({
        adresseCourriel: [{value: '', disabled: true}],
        confirmerCourriel: [{value: '', disabled: true}]
      })
    });

    this.type.obtenirType()
    .subscribe(cat => this.typeProbleme = cat,
              error => this.errorMessage = <any>error);

    this.problemeForm.get('notifier').valueChanges
    .subscribe(value => this.appliquerNotifications(value));
  } // ngOnInit

  appliquerNotifications(typeNotifier: string): void {
    const telephoneUsagerControl = this.problemeForm.get('telephoneUsager');
    const adresseCourrielControl = this.problemeForm.get('notifierGroup.adresseCourriel');
    const confirmerCourrielControl = this.problemeForm.get('notifierGroup.confirmerCourriel');
    const notifierGroupControl = this.problemeForm.get('notifierGroup');

    telephoneUsagerControl.clearValidators();
    telephoneUsagerControl.reset();

    adresseCourrielControl.clearValidators();
    adresseCourrielControl.reset();

    confirmerCourrielControl.clearValidators();
    confirmerCourrielControl.reset();

    telephoneUsagerControl.disable();
    adresseCourrielControl.disable();
    confirmerCourrielControl.disable();

    if(typeNotifier === 'MeNotifierTelephone'){
      telephoneUsagerControl.enable();
      telephoneUsagerControl.setValidators([Validators.required, Validators.pattern('[0-9]+'),Validators.minLength(10),Validators.maxLength(10)]);
    }

    if(typeNotifier === 'MeNotifierCourriel'){
      adresseCourrielControl.enable();
      adresseCourrielControl.setValidators([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]);
      confirmerCourrielControl.enable();
      confirmerCourrielControl.setValidators([Validators.required]);
      notifierGroupControl.setValidators([Validators.compose([emailMatcherValidator.courrielDifferents()])]);
    }

    telephoneUsagerControl.updateValueAndValidity();
    adresseCourrielControl.updateValueAndValidity();
    confirmerCourrielControl.updateValueAndValidity();
    notifierGroupControl.updateValueAndValidity();
  }
}
