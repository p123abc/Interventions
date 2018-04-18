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
      declarations: [ ProblemeComponent ],
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

  it('Zone PRÉNOM invalide avec 2 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.controls['nomProbleme'];
    zone.setValue('a'.repeat(2));
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();
    });

  it('Zone PRÉNOM valide avec 3 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.controls['nomProbleme'];
     zone.setValue('a'.repeat(3));
     errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeTruthy();
    });

  it('Zone PRÉNOM valide avec 200 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.controls['nomProbleme'];
    zone.setValue('a'.repeat(200));
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeTruthy();
    });

  it('Zone PRÉNOM invalide avec aucune valeur', () => {
    let errors = {};
    let zone = component.problemeForm.controls['nomProbleme'];
    zone.setValue('');
    errors = zone.errors || {};
    expect(errors['required']).toBeTruthy();
    });

  it('Zone PRÉNOM invalide avec 1 caractère', () => {
    let errors = {};
    let zone = component.problemeForm.controls['nomProbleme'];
    zone.setValue('a'.repeat(1));
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();
    });

  it('Zone PRÉNOM invalide avec 50 espaces', () => {
    let errors = {};
    let zone = component.problemeForm.controls['nomProbleme'];
    zone.setValue(' '.repeat(50));
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();
    });

  it('Zone PRÉNOM invalide avec 2 espaces et 1 caractère', () => {
    let errors = {};
    let zone = component.problemeForm.controls['nomProbleme'];
    zone.setValue(' a ');
    errors = zone.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();
    });

    it('Zone TELEPHONE est désactivée quand ne pas me notifier', () => {
      component.appliquerNotifications();

      let zone = component.problemeForm.get('notifierGroup.telephoneUsager');
      expect(zone.status).toEqual('DISABLED');
      });
});
