import { IType } from "./typeprobleme";
import{InMemoryDbService} from 'angular-in-memory-web-api'

export class TypeproblemeData implements InMemoryDbService{
    createDb() {
        let type: IType[] = [
            {
                'id': 1,
                'descriptionType': 'Problème avec la souris'
            },
            {
                'id': 2,
                'descriptionType': 'Problème de clavier'
            },
            {
                'id': 3,
                'descriptionType': 'Problème d\'accès Internet'
            },
            {
                'id': 4,
                'descriptionType': 'Problème avec un logiciel'
            },
            {
                'id': 5,
                'descriptionType': 'Problème d\'imprimante'
            },
            {
                'id': 6,
                'descriptionType': 'Carte graphique'
            },
            {
                'id': 7,
                'descriptionType': 'Carte mère'
            },
            {
                'id': 8,
                'descriptionType': 'Autre'
            }
        ];
        return {type};
    }
}