import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/probleme');
  }

  getParagraphText() {
    return element(by.css('inter-root h5')).getText();
  }

  setChampsValidesScenarioNominal() : void {
      element(by.id('prenom')).sendKeys('patrick');
      element(by.id('nom')).sendKeys('papineau');
      // Sélectionner le X élément dans la zone de liste déroulante
      element(by.id('noTypeId')).all(by.tagName('option')).get(2).click();
      // Cliquer sur le bouton radio voulu   
      element.all(by.id('notificationMoiId')).get(0).click();     
      element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...'); 
    }
    
    setChampsValidesScenarioAlternatifParMessageTexte() : void {   
      element(by.id('prenom')).sendKeys('patrick');   
      element(by.id('nom')).sendKeys('papineau');       
      // Sélectionner le X élément dans la zone de liste déroulante   
      element(by.id('noTypeId')).all(by.tagName('option')).get(2).click();         
      // Cliquer sur le bouton radio voulu   
      element.all(by.id('notificationMoiId')).get(2).click();   
      element(by.id('telephoneID')).sendKeys('5141231234');     
      element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...'); 
    }

    setChampsValidesScenarioAlternatifParCourriel() : void {   
      element(by.id('prenom')).sendKeys('patrick');   
      element(by.id('nom')).sendKeys('papineau');       
      // Sélectionner le X élément dans la zone de liste déroulante   
      element(by.id('noTypeProblemeId')).all(by.tagName('option')).get(2).click();         
      // Cliquer sur le bouton radio voulu   
      element.all(by.id('notificationMoiId')).get(1).click();   
      element(by.id('adresseCourrielID')).sendKeys('aa@bbb.com');   
      element(by.id('confirmerCourrielID')).sendKeys('aa@bbb.com');       
      element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...'); 
    }

    boutonSubmit() : ElementFinder { 
      return element(by.buttonText('Sauvegarder'));
    }   

    setZonePrenomProblemeCaracteresInsuffisant() : void {
      element(by.id('prenomProblemeId')).clear();
      element(by.id('prenomProblemeId')).sendKeys('XX');
    }
  
    setZonePrenomProblemeCaracteresSuffisant() : void {
      element(by.id('prenomProblemeId')).clear();
      element(by.id('prenomProblemeId')).sendKeys('XXXXX');
    }
  
    obtenirClasseZonePrenomProbleme()   { 
      return element(by.id('prenomProblemeId')).getAttribute("class");
    }

}
