const{expect}=require('@playwright/test')
class SauceDemoLogin
{
constructor(page)
{
    this.page=page
    this.Username= page.getByPlaceholder('Username')
    this.Password= page.getByPlaceholder('Password')
    this.Login= page.locator('#login-button')
    this.Errormessage=page.getByText('Epic sadface: Username and password do not match any user in this service')
    this.Homepagemsg= page.getByText('Swag Labs')
}

async LaunchingSuaceDemo()
{
        await this.page.goto('https://www.saucedemo.com/')
}

async InValidLogin(UserName)
{
    await this.Username.fill(UserName)
    await this.Password.fill('testing')
    await this.Login.click()
}

async ValidateErrormsg()
{
    await expect(this.Errormessage).toBeVisible()
    console.log(await this.Errormessage.textContent());
    await this.Password.fill(' ')
}

async Validlogin(Password)
{
    await this.Password.fill(Password)
    await this.Login.click()
}

async ValidateHomepage()
{
    await expect(this.Homepagemsg).toBeVisible()
}
}
module.exports={SauceDemoLogin}