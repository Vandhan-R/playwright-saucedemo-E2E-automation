const{expect}=require('@playwright/test')
class Ordercompletepage{

constructor(page)
{
this.finalmsg=page.getByText('Thank you for your order!')
}

async ordercompletemsg()
{
 await expect(this.finalmsg).toBeVisible()
}
}
module.exports={Ordercompletepage}
