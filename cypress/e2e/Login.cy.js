/// <reference types = "Cypress"  />

import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { loginPageElemnets } from "../../PageObjects/PageActions/LoginPageActions";

const Login_Elements = new loginPageElemnets

describe('Page Object Model Tutorial', function(){

    it('Login Page', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        Login_Elements.username('Admin')
        Login_Elements.password('admin123')
        Login_Elements.LoginButton()


    });

    
})