class OrderDetails{

constructor(page)
{
  this.firstname=page.getByPlaceholder('First Name')
  this.lastname=page.getByPlaceholder('Last Name')
  this.postalcode=page.getByPlaceholder('Zip/Postal Code')
  this.continue=page.locator('[id="continue"]')
}

async fillorderdetails()
{
  await this.firstname .fill('Tim')
  await this.lastname.fill('Kery')
  await  this.postalcode.fill('SHU67709')
}

async clickcontinue()
{
    await this.continue.click()
}
}
module.exports= {OrderDetails}