export class homePage {

    constructor(){
        this.botonIngresar = '//*[@id="root"]/div/header/div[1]/div[3]/nav/ul/li[1]/a/button'
        this.botonRegistrate= '//*[@id="root"]/div/header/div[1]/div[3]/nav/ul/li[2]/a/button'
        this.botonHome = '//*[@id="root"]/div/header/div[2]/nav/ul/li[1]/a/button'
        this.botonPublicaciones = '//*[@id="root"]/div/header/div[2]/nav/ul/li[2]/button'
        this.botonForo = '//*[@id="root"]/div/header/div[2]/nav/ul/li[3]/button'
        this.SomoCartel = '//*[@id="root"]/main/div[1]/div/div[1]/h2'
        this.registroModal = '//*[@id="root"]/main/div[3]/div/a/button'
        this.testimonios = '//*[@id="root"]/main/div[4]/div/h2'
        this.cardTestimonios = '//*[@id="root"]/main/div[4]/div/div/div/div[2]'
        this.botonInstagram = 'a[aria-label="Compartir en Instagram"]'
        this.botonFacebook = 'a[aria-label="Compartir en Facebook"]'
        this.botonLinkedin = 'a[aria-label="Compartir en Linkedin"]'
        this.botonTwitter = 'a[aria-label="Compartir en Twitter"]'
    }

    validarHome(){
        cy.url().should('eq', 'https://plant-in.netlify.app/')
    }

    validarElementosHome(){
        cy.xpath(this.botonIngresar).should('be.visible')
        cy.xpath(this.botonRegistrate).should('be.visible')
        cy.xpath(this.botonHome).should('be.visible')
        cy.xpath(this.botonPublicaciones).should('be.visible')
        cy.xpath(this.botonForo).should('be.visible')
        cy.xpath(this.SomoCartel).should('be.visible')
        cy.xpath(this.registroModal).should('be.visible')
        cy.xpath(this.testimonios).should('be.visible')
        cy.xpath(this.cardTestimonios).should('be.visible')
        cy.get(this.botonInstagram).should('be.visible')
        cy.get(this.botonFacebook).should('be.visible')
        cy.get(this.botonLinkedin).should('be.visible')
        cy.get(this.botonTwitter).should('be.visible')
    }

    ingresarRegistro(){
        cy.xpath(this.botonRegistrate).click()
        cy.url().should('eq', 'https://plant-in.netlify.app/register')
    }

    ingresarLogin(){
        cy.xpath(this.botonIngresar).click()
        cy.url().should('eq', 'https://plant-in.netlify.app/login')
    }

}

export const homepage = new homePage()