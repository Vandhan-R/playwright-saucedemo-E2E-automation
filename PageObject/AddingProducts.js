
const{expect}=require('@playwright/test')

class AddingProducts{

constructor(page)
{
    this.bikelights=page.locator('#add-to-cart-sauce-labs-bike-light')
    this.jacketfleece=page.locator('#add-to-cart-sauce-labs-fleece-jacket')
    this.cartbadge=page.locator('.shopping_cart_badge')
    this.cart=page.locator('.shopping_cart_link')
    this.itemlist=page.locator('div.inventory_item_name ')
}


async Addingtocart()
{
    await this.bikelights.click()
    await this.jacketfleece.click()
}

async validatingcartbadge()
{
    await expect(this.cartbadge).toHaveText('2')
}

async Clickingoncart()
{
    await this.cart.click()
}
}
module.exports={AddingProducts}