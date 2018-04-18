import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
    expect(errors['longueurMinimum']).toBeTruthy();
    });

  it('Zone NOM valide avec 200 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.controls['nom'];
    zone.setValue('a'.repeat(200));
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeTruthy();
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

    it('Zone TELEPHONE est désactivée quand ne pas me notifier', () => {
      component.appliquerNotifications('NePasMeNotifier');

      let zone = component.problemeForm.get('notifierGroup.telephoneUsager');
      expect(zone.status).toEqual('DISABLED');
      });

      it('Zone TELEPHONE est activée quand me notifier', () => {
        component.appliquerNotifications('MeNotifier');
  
        let zone = component.problemeForm.get('notifierGroup.telephoneUsager');
        expect(zone.status).not.toEqual('DISABLED');
        });

        it('Zone TELEPHONE est invalide sans valeur si MeNotifier', () => {
          component.appliquerNotifications('MeNotifier');

          let errors = {};
          let zone = component.problemeForm.get('notifierGroup.telephoneUsager');
          zone.setValue('');
          errors = zone.errors || {};
          expect(errors['required']).toBeTruthy();
          });
});
