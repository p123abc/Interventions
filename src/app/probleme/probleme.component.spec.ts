import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PatternValidator } from '@angular/forms';

import { ProblemeComponent } from './probleme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TypeService } from './type.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,AngularFontAwesomeModule, HttpClientModule],
      declarations: [ProblemeComponent],
      providers:[TypeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('Zone NOM invalide avec 2 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.controls['nom'];
    zone.setValue('a'.repeat(2));
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();
    });

  it('Zone NOM valide avec 3 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.controls['nom'];
     zone.setValue('a'.repeat(3));
     errors = zone.errors || {};
    expect(errors).toBeNull;
    });

  it('Zone NOM valide avec 200 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.controls['nom'];
    zone.setValue('a'.repeat(200));
    errors = zone.errors || {};
    expect(errors).toBeNull;
    });

  it('Zone NOM invalide avec aucune valeur', () => {
    let errors = {};
    let zone = component.problemeForm.controls['nom'];
    zone.setValue('');
    errors = zone.errors || {};
    expect(errors['required']).toBeTruthy();
    });

  it('Zone PRÉNOM invalide avec 1 caractère', () => {
    let errors = {};
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue('a'.repeat(1));
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();
    });

  it('Zone PRÉNOM invalide avec 50 espaces', () => {
    let errors = {};
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue(' '.repeat(50));
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();
    });

  it('Zone PRÉNOM invalide avec 2 espaces et 1 caractère', () => {
    let errors = {};
    let zone = component.problemeForm.controls['prenom'];
    zone.setValue(' a ');
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();
    });
// TP ----------------- TP 12 -----------------------
    it('Zone TELEPHONE est désactivée quand ne pas me notifier', () => {
     component.appliquerNotifications('NePasMeNotifier');

    let zone = component.problemeForm.controls['telephoneUsager'];
    expect(zone.status).toEqual('DISABLED');
    });

    it('Zone TELEPHONE est désactivée quand me notifier par courriel', () => {
      component.appliquerNotifications('MeNotifierCourriel');
 
     let zone = component.problemeForm.controls['telephoneUsager'];
     expect(zone.status).toEqual('DISABLED');
     });

    it('Zone TELEPHONE est activée quand me notifier par Telehpone', () => {
      component.appliquerNotifications('MeNotifierTelephone');
  
      let zone = component.problemeForm.controls['telephoneUsager'];
      expect(zone.status).not.toEqual('DISABLED');
     });

      it('Zone TELEPHONE est invalide sans valeur si MeNotifierTelephone', () => {
        component.appliquerNotifications('MeNotifierTelephone');

        let errors = {};
        let zone = component.problemeForm.controls['telephoneUsager'];
        zone.setValue('');
        errors = zone.errors || {};
        expect(errors['required']).toBeTruthy();
      });

      it('Zone ADRESSECOURRIEL est désactivée quand ne pas me notifier', () => {
        component.appliquerNotifications('NePasMeNotifier');
  
        let zone = component.problemeForm.get('notifierGroup.adresseCourriel');
        expect(zone.status).toEqual('DISABLED');
        });

        it('Zone ADRESSECOURRIEL est désactivée quand me notifier par telephone', () => {
          component.appliquerNotifications('MeNotifierTelephone');
    
          let zone = component.problemeForm.get('notifierGroup.adresseCourriel');
          expect(zone.status).toEqual('DISABLED');
          });
  
        it('Zone ADRESSECOURRIEL est activée quand me notifier par Courriel', () => {
          component.appliquerNotifications('MeNotifierCourriel');
    
          let zone = component.problemeForm.get('notifierGroup.adresseCourriel');
          expect(zone.status).not.toEqual('DISABLED');
          });
  
          it('Zone ADRESSECOURRIEL est invalide sans valeur si Me Notifier par courriel', () => {
            component.appliquerNotifications('MeNotifierCourriel');
  
            let errors = {};
            let zone = component.problemeForm.get('notifierGroup.adresseCourriel');
            zone.setValue('');
            errors = zone.errors || {};
            expect(errors['required']).toBeTruthy();
            });

            it('Zone CONFIRMERCOURRIEL est désactivée quand ne pas me notifier', () => {
              component.appliquerNotifications('NePasMeNotifier');
        
              let zone = component.problemeForm.get('notifierGroup.confirmerCourriel');
              expect(zone.status).toEqual('DISABLED');
              });
        
              it('Zone CONFIRMERCOURRIEL est activée quand me notifier', () => {
                component.appliquerNotifications('MeNotifierCourriel');
          
                let zone = component.problemeForm.get('notifierGroup.confirmerCourriel');
                expect(zone.status).not.toEqual('DISABLED');
                });
        // ----------------------- TP 13 -----------------------------------------------
                it('Zone CONFIRMERCOURRIEL est invalide sans valeur si MeNotifierCourriel', () => {
                  component.appliquerNotifications('MeNotifierCourriel');
        
                  let errors = {};
                  let zone = component.problemeForm.get('notifierGroup.confirmerCourriel');
                  zone.setValue('');
                  errors = zone.errors || {};
                  expect(errors['required']).toBeTruthy();
                  });

                  it('Zone COURRIEL est invalide si elle a un format non conforme a un Email', () => {
                    component.appliquerNotifications('MeNotifierCourriel');
                    
                    let errors = {};
                    let zone = component.problemeForm.get('notifierGroup.adresseCourriel');
                    zone.setValue('aaa');
                    errors = zone.errors || {};
                    expect(errors['pattern']).toBeTruthy();
                    
                  });

                  it('La methode retourne NULL si Zone COURRIEL est vide et si CONFIRMERCOURRIEL est valide', () => {
                    component.appliquerNotifications('MeNotifierCourriel');
                    
                    let zone1 = component.problemeForm.get('notifierGroup.adresseCourriel');
                    let zone2 = component.problemeForm.get('notifierGroup.confirmerCourriel');

                    zone1.setValue('');
                    zone2.setValue('test@hotmail.com');
                    
                    let errors = {};
                    let groupeNotifier = component.problemeForm.get('notifierGroup');
                    errors = groupeNotifier.errors || {};
                    expect(errors['courrielConfirmation']).toBeUndefined();
                  });

                  it('La methode retourne NULL si Zone COURRIEL est valide et si CONFIRMERCOURRIEL est vide', () => {
                    component.appliquerNotifications('MeNotifierCourriel');
                    
                    let zone1 = component.problemeForm.get('notifierGroup.adresseCourriel');
                    let zone2 = component.problemeForm.get('notifierGroup.confirmerCourriel');

                    zone1.setValue('test@hotmail.com');
                    zone2.setValue('');
                    
                    let errors = {};
                    let groupeNotifier = component.problemeForm.get('notifierGroup');
                    errors = groupeNotifier.errors || {};
                    expect(errors['courrielConfirmation']).toBeUndefined();
                  });

                  it('La methode retourne MATCH si Zone COURRIEL et  CONFIRMERCOURRIEL NE SONT PAS PAREIL', () => {
                    component.appliquerNotifications('MeNotifierCourriel');
                    
                    let zone1 = component.problemeForm.get('notifierGroup.adresseCourriel');
                    let zone2 = component.problemeForm.get('notifierGroup.confirmerCourriel');

                    zone1.setValue('test@hotmail.com');
                    zone2.setValue('allo@hotmail.com');
                    
                    let errors = {};
                    let groupeNotifier = component.problemeForm.get('notifierGroup');
                    errors = groupeNotifier.errors || {};
                    expect(errors['match']).toBe(true);
                  });

                  it('La methode courrielConfirmation si Zone COURRIEL est valide et si CONFIRMERCOURRIEL est valide ET IL SONT PAREIL', () => {
                    component.appliquerNotifications('MeNotifierCourriel');
                    
                    let zone1 = component.problemeForm.get('notifierGroup.adresseCourriel');
                    let zone2 = component.problemeForm.get('notifierGroup.confirmerCourriel');

                    zone1.setValue('valide@hotmail.com');
                    zone2.setValue('valide@hotmail.com');
                    
                    let errors = {};
                    let groupeNotifier = component.problemeForm.get('notifierGroup');
                    errors = groupeNotifier.errors || {};
                    expect(errors['match']).toBeUndefined();
                  });

                  it('Zone TELEPHONE est invalide avec des caractères npn-numériques', () => {
                    component.appliquerNotifications('MeNotifierTelephone');
                    
                    let errors = {};
                    let zone = component.problemeForm.controls['telephoneUsager'];
                    zone.setValue('450 5h6 3333');
                    errors = zone.errors || {};
                    expect(errors['pattern']).toBeTruthy();
                   });
                   it('Zone TELEPHONE est errors minlengh avec moin de 10 caractères', () => {
                    component.appliquerNotifications('MeNotifierTelephone');
                    
                    let errors = {};
                    let zone = component.problemeForm.controls['telephoneUsager'];
                    zone.setValue('4503333');
                    errors = zone.errors || {};
                    expect(errors['minlength']).toBeTruthy();
                   });
                   it('Zone TELEPHONE est errors maxlengh avec plus de 10 caractères', () => {
                    component.appliquerNotifications('MeNotifierTelephone');
                    
                    let errors = {};
                    let zone = component.problemeForm.controls['telephoneUsager'];
                    zone.setValue('450333312132141415151');
                    errors = zone.errors || {};
                    expect(errors['maxlength']).toBeTruthy();
                   });
                   it('Zone TELEPHONE na pas d erreur avec  10 caractères numériques', () => {
                    component.appliquerNotifications('MeNotifierTelephone');
                    
                    let errors = {};
                    let zone = component.problemeForm.controls['telephoneUsager'];
                    zone.setValue('4501234567');
                    errors = zone.errors || {};
                    expect(errors['maxlength']).toBeFalsy() && expect(errors['minlength']).toBeFalsy();
                   });

});
