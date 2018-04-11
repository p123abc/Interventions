import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { VerifierNombresValidator } from '../shared/caracteres-validator';
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
      noType:['']
    });

    this.type.obtenirType()
    .subscribe(cat => this.typeProbleme = cat,
              error => this.errorMessage = <any>error);
  }

}
