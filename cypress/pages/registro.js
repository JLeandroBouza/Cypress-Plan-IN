export class registroPage {

    constructor(){
        this.inputNombre = '#userName'
        this.inputApellido = '#userLastName'
        this.inputEmail = '#userEmail'
        this.inputCiudad = '#userAddressCity'
        this.inputProvincia = '#userAddressProvince'
        this.inputContraseña='#userPassword'
        this.inputConfirmarContraseña= '#userPasswordConfirm'
        this.botonRegistrate = '#registerFormSubmitButtonDisabled'
    }

    validarElementos(){
        cy.get(this.inputNombre).should('be.visible')
        cy.get(this.inputApellido).should('be.visible')
        cy.get(this.inputEmail).should('be.visible')
        cy.get(this.inputCiudad).should('be.visible')
        cy.get(this.inputProvincia).should('be.visible')
        cy.get(this.inputContraseña).should('be.visible')
        cy.get(this.inputConfirmarContraseña).should('be.visible')
        cy.get(this.botonRegistrate).should('be.visible')

    }

    registroExitoso(nombre,apellido,email){
        cy.get(this.inputNombre).type(nombre)
        cy.get(this.inputApellido).type(apellido)
        cy.get(this.inputEmail).type(email)
        cy.get(this.inputCiudad).type('Villa Carlos Paz')
        cy.get(this.inputProvincia).type('Cordoba')
        cy.get(this.inputContraseña).type('123456789')
        cy.get(this.inputConfirmarContraseña).type('123456789')
        cy.get(this.botonRegistrate).click()
    }

}
export const registropage = new registroPage()