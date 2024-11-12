// @ts-check
//const { test, expect } = require('@playwright/test');
import {test,expect} from '@playwright/test'
import HomePage from "../tests/pages/home"
test.describe('Automation exercise',() =>{
    const username ='wl.interview@test.com'
    const password ='Test1234'
    test.beforeEach('Go to',async(page)=>{
        await page.goto('https://automationexercise.com/')
    })
    test('Login test', async(page)=>{
        const homePage = new HomePage(page)
        test.step('Click Login button', async() =>{
            await homePage.clickLoginButton()
        })
        test.step('Fill credentials', async()=>{
            await homePage.fillCredentials(username,password)
        })
        test.step('Verify Login succesful', async()=>{
            await homePage.verifyLoginSucces()
        })
        
    })
})