const{expect}=require('@playwright/test')
class checkoutoverview{

constructor(page)
{
 this.pro1=page.locator('inventory_item_name',{hasText:'Sauce Labs Bike Light'})
 this.prodqunt=page.locator('.cart_quantity').nth(0)
 this.pro2=page.locator('.inventory_item_name',{hasText:'Sauce Labs Fleece Jacket'})
 this.prod2quan=page.locator('.cart_quantity').nth(1)
 this.subtotaltx=page.locator('.summary_subtotal_label')
 this.taxtx=page.locator('.summary_tax_label')
 this.totaltx=page.locator('.summary_total_label')
 this.finish=page.getByRole('button',{name:'Finish'})
}

async validatingproducts()
{
   await this.pro1.isVisible()
   await expect(this.prodqunt).toHaveText('1')
   await this.pro2.isVisible()
   await expect(this.prod2quan).toHaveText('1')
}

async validatingamount()
{
   const subtotaltext=await this.subtotaltx.textContent()
   const taxtext= await this.taxtx.textContent()
   const totaltext=await this.totaltx.textContent()
 
   const subtotal=parseFloat(subtotaltext.replace('Item total: $',''))
   const tax=parseFloat(taxtext.replace('Tax: $',''))
   const total=parseFloat(totaltext.replace('Total: $',''))

   if(subtotal+tax==total)
   {
      console.log('Total amount is correct')
   }
   else
   {
      console.log('Total amount is incorrect')
   }
}

async clickfinish()
{
    await this.finish.click()
}
}
module.exports={checkoutoverview}