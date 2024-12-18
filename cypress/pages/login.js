export class loginPage {

    constructor(){
        this.inputEmail = '#loginEmail'
        this.inputContraseña= '#loginFormPasswordField'
        this.botonIniciarSesion = '#loginFormSubmitButtonContainer'
    }

    loginExitoso(username,contraseña){
        cy.get(this.inputEmail).type(username)
        cy.get(this.inputContraseña).type(contraseña)
        cy.get(this.botonIniciarSesion).click()
    }

    validarElementos(){
        cy.get(this.inputEmail).should('be.visible')
        cy.get(this.inputContraseña).should('be.visible')
        cy.get(this.botonIniciarSesion).should('be.visible')
    }

}

export const loginpage = new loginPage ()