const{test}= require('@playwright/test')
const{SauceDemoLogin}=require ('../PageObject/Login')
const{AddingProducts}=require('../PageObject/AddingProducts')
const{Checkingout}=require('../PageObject/CheckOut')
const{OrderDetails} = require('../PageObject/OrderPage')
const{checkoutoverview}=require('../PageObject/Checkoutoverpage')
const{Ordercompletepage} =require('../PageObject/OrderComplete')

test('SauceDemo',async({page})=>
{
    const UserName='visual_user'
    const Password='secret_sauce'

//Launching and login the website sauce demo
   const Login= new SauceDemoLogin(page)
   await Login.LaunchingSuaceDemo()
   await Login.InValidLogin(UserName)
   await Login.ValidateErrormsg()
   await Login.Validlogin(Password)
   await Login.ValidateHomepage()

//adding two products to the cart

   
   const addproducts=new AddingProducts(page)
   await addproducts.Addingtocart()
   await addproducts.validatingcartbadge()
   await addproducts.Clickingoncart()

//Validating cart page

   const checkoutpod=new Checkingout(page)
   await checkoutpod.validatingproducts()
   await checkoutpod.Checkout()

//filling order page
   const order=new OrderDetails(page)
   await order.fillorderdetails()
   await order.clickcontinue()
  
//validating the checkout overview page
   const checkoverview=new checkoutoverview(page)
   await checkoverview.validatingproducts()
   await checkoverview.validatingamount()
   await checkoverview.clickfinish()   

//Ordercomplete message
   const odrcomplete=new Ordercompletepage(page)
   await odrcomplete.ordercompletemsg()
})