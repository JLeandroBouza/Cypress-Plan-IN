import { homepage } from "../pages/home";
import { registropage } from "../pages/registro";
import { loginpage } from "../pages/login";
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

  it('Registro Incorrecto: Campo Nombre Vacío | Mostrar Tooltips', () =>{

    registropage.registroIncorrectoNombre(datos.apellido,datos.email)
  })

  it('Registro Incorrecto: Campo Apellido Vacío | Mostrar Tooltips', () =>{

    registropage.registroIncorrectoApellido(datos.nombre,datos.email)
  })

  it('Registro Incorrecto: Campo Email Vacío | Mostrar Tooltips', () =>{

    registropage.registroIncorrectoEmail(datos.nombre,datos.apellido)
  })

  it('Registro Incorrecto: Campo Ciudad Vacío | Mostrar Tooltips', () =>{

    registropage.registroIncorrectoCiudad(datos.nombre,datos.apellido,datos.email)
  })

  it('Registro Incorrecto: Campo Provincia Vacío | Mostrar Tooltips', () =>{

    registropage.registroIncorrectoProvincia(datos.nombre,datos.apellido,datos.email)
  })

  it('Registro Incorrecto: Campo Contraseña Vacío | Mostrar Tooltips', () =>{

    registropage.registroIncorrectoContraseña(datos.nombre,datos.apellido,datos.email)
  })

  it('Registro Incorrecto: Campo Confirmar Contraseña Vacío | Mostrar Tooltips', () =>{

    registropage.registroIncorrectoConfirmarContraseña(datos.nombre,datos.apellido,datos.email)
  })

})

describe('Pruebas E2E sobre Aplicación Web Plant - IN : Login de Usuarios',() =>{

  it('Validar el ingreso al formulario de Login',() =>{

    homepage.ingresarLogin()
    loginpage.loginExitoso()

  })

  

  
})