(() => {
    const axios = require('axios');
    const cheerio = require('cheerio');
    const fs = require('fs');
    const ParseProfi = async () =>{
        const url = 'https://profi.ru/backoffice/n.php?o=';
        let startURL = 64648964;
        let ordersData = [];
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
        
            for(let i = 0; i < 100;i++){
              let currentURL = startURL + i;
        
              await page.setViewport({width: 1080, height: 1024});
        
              await page.setDefaultNavigationTimeout(2 * 60 * 1000);
        
              await page.goto(url+currentURL);
              
              const title = await el.$eval(".order-card-header__title-container > p",(el) =>el.textContext);
              const price = await el.$eval(".order-card-header__title-container > div > div:nth-child(1) > span",(el) =>el.textContext);
              const status = await el.$eval(".ui-notice__content-container ui-notice__content-container-with-content > p",(el) =>el.textContext);
              const url = await page.url;
              ordersData.push({
                title,
                price,
                status,
                url
              });
        
              if(index === ordersData.length - 1){
                console.log(ordersData);
                fs.writeFileSync("orders.json", ordersData);
                await browser.close();
              }
            }
    
        }catch (error) {
            
            console.log(error);
          }
    };
            
            

    
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, Id } = obj;
    
        if (type === "NEW") {
          ParseProfi();
        }
      });
    
})();

