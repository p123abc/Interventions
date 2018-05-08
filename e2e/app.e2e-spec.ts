import { AppPage } from './app.po';

describe('interventions App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('doit afficher le titre du formulaire Déclarer un problèm', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Déclarer un problème');
  });

  it('doit activer le bouton Sauvegarder avec champs valides scénario nominal', () => {
    page.setChampsValidesScenarioNominal();                    
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  });  
  
  it('doit activer le bouton Sauvegarder avec champs valides scénario alternatif par message TEXTE', () => {
    page.setChampsValidesScenarioAlternatifParMessageTexte();                    
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  });  

  it('doit activer le bouton Sauvegarder avec champs valides scénario alternatif par message COURRIEL', () => {
    page.setChampsValidesScenarioAlternatifParCourriel();                    
    expect(page.boutonSubmit().isEnabled()).toBe(true);
  });  

  it('zone NOM DU PRODUIT a une bordure VERTE si nombre de caractères suffisant', () => {
    page.setZonePrenomProblemeCaracteresSuffisant();  
    expect(page.obtenirClasseZonePrenomProbleme()).toContain('is-valid');
  });  

  it('zone NOM DU PRODUIT a une bordure ROUGE si nombre de caractères insuffisant', () => {
    page.setZonePrenomProblemeCaracteresInsuffisant();  
    expect(page.obtenirClasseZonePrenomProbleme()).toContain('is-invalid');
  });

 

});
