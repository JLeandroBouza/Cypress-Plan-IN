import { homepage } from "../pages/home";

describe('Pruebas E2E sobre Aplicación Web Plant - IN', () => {

  beforeEach (function () {
    cy.visit('')
  });
  
  it('Validar el ingreso correcto a la web de Plant - IN', () => {
    
    homepage.validarHome();
  })

  it('Validar elementos visibles en el Home', () =>{

    homepage.validarElementosHome();

  })

})