

const loginElementLocators = require('../PageElements/LoginPageElements.json')

export class loginPageElemnets {

    
    username(usernamee){
        
        cy.get(loginElementLocators.LoginPageLocators.username_text).type(usernamee)
        return
    
    }

    password(passwordd){

        cy.get(loginElementLocators.LoginPageLocators.password_text).type(passwordd)
        return

    }

    LoginButton(){

        cy.get(loginElementLocators.LoginPageLocators.login_button).click()
        return

    }

}