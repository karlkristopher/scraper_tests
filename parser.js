const nightmare = require("nightmare")()


const url = "https://www.amazon.ca/dp/B075Y8ZVBB";

const id = "price_inside_buybox"

checkPrice();

async function checkPrice() {
    try {
    console.log("running")
    const priceString = await nightmare.goto(url)
                        .wait(id)
                        .evaluate(() => document.getElementById(id).innerText)
                        .end()
    console.log('priceString', priceString)
    const priceNumber = parseFloat(priceString.replace("CDN$nbsp;", ""));
    console.log("pricenumber", priceNumber);
    if (priceNumber < 70) {
      console.log(`Time to buy. Current Price:  $${priceNumber}CAD`);
    } else {
      console.log(`Too expensive. Current Price:  $${priceNumber}CAD`);
    }
  } catch (err) {
    console.log(err);
  }
}
