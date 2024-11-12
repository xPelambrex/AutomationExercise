import {expect} from '@playwright/test'

export default class HomePage {
    constructor(page){
        this.page = page
        this.loginHomeBtn = page.locator('.fa-lock')
        this.txtBoxEmail = page.locator('[data-qa="login-email"]')
        this.txtBoxPassword = page.locator('[data-qa="login-password"]')
        this.lblLoginPage = page.getByText('Login to your account')
        this.loginBtn = page.locator('[data-qa="login-button"]')
        this.lblUsername = page.getByText('Logged in as Wizeline')
    }

    async clickLoginButton(){
        await this.loginHomeBtn.click()
    }

    async fillCredentials(email,password){
        await expect(this.lblLoginPage).toBeVisible(true)
        await this.txtBoxEmail.fill(email)
        await this.txtBoxPassword.fill(password)
        await this.loginBtn.click()
    }

    async verifyLoginSucces(){
        await expect(this.lblUsername).toBeVisible(true)
    }
}