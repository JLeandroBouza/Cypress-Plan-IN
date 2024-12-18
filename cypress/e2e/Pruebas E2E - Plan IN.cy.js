import { homepage } from "../pages/home";
import { registropage } from "../pages/registro";
import {jsondata} from "../fixtures/jsondata.json";


describe('Pruebas E2E sobre Aplicación Web Plant - IN : Validación Elementos en la Home', () => {

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

describe('Pruebas E2E sobre Aplicación Web Plant - IN : Registro de Usuarios',() =>{

 let datos

  beforeEach (function () {
    cy.visit('')
    cy.generarDatosAleatorios().then((data) => {
      datos= data
      cy.log('Datos generados:', datos);
    })
    homepage.ingresarRegistro()
  });

  it('Validar el ingreso al formulario de Registro',() =>{

    
    registropage.validarElementos()
  })

  it('Registro Exitoso de un nuevo usuario',() =>{
    
    registropage.registroExitoso(datos.nombre,datos.apellido,datos.email)

  })

})