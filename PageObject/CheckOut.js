const{expect}=require('@playwright/test')
class Checkingout{

constructor(page)
{
this.cartpagemsg=page.getByTitle('Your Cart')
this.prod1text=page.locator('.cart_item_label').nth(0)
this.prod2text=page.locator('.cart_item_label').nth(1)
this.checkou=page.getByRole('button',{name:'Checkout'})
}

async validatingproducts()
{
  await this.cartpagemsg.isVisible()
  await expect(this.prod1text).toContainText('Sauce Labs Bike Light')
  await expect(this.prod2text).toContainText('Sauce Labs Fleece Jacket')
}

async Checkout()
{

  await this.checkou.click()

}

}
module.exports={Checkingout}