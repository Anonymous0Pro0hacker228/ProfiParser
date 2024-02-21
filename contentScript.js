(() => {
    const axios = require('axios');
    const cheerio = require('cheerio');
    const fs = require('fs');
    const ParseProfi = async () =>{
        const url = 'https://profi.ru/backoffice/n.php?o=';
        let startURL = 64648964;
        let ordersData = [];
        for(let i = 0; i < 10;i++){
            let currentURL = startURL + i;
            async function getHTML(){
                const {data: html} = await axios.get(url+currentURL);
                return html;
            }
        
            getHTML.then((res) => {
                const $ = cheerio.load(res);
                $('.ContentStyles__Card-sc-19y55e6-0 duuUtg').each((i,offers) => {
                        const title = $(offers).find('.bo_text__24 bo_text bo_text-extra-bold').text();
                        console.log(title);
                        const status = $(offers).find('.bo_text__16 bo_text ui-notice__text p').text();
                        console.log(status);
                        if(staus =  'В этом заказе ваш отклик будет 1-м по рейтингу.'){
                            ordersData.push(
                                title,
                                status,
                                url+currentURL
                            )
                        }
                        console.log(ordersData)
                        
                        
                });
            })
        }

    };
    
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, Id } = obj;
    
        if (type === "NEW") {
          ParseProfi();
        }
      });
    
})();

