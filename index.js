import fetch from "node-fetch";
import * as cheerio from 'cheerio';
import {faker} from '@faker-js/faker';
import readline from 'readline-sync';

const randstr = length =>
    new Promise((resolve, reject) => {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            
        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            
        resolve(text);
});

const getEmailRandom = () => new Promise((resolve, reject) => {
    fetch(`https://generator.email/`, {
        method: "get",
        headers: {
            accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "accept-encoding": "gzip, deflate, br"
        }
    })
        .then(res => res.text())
        .then(text => {
            const $ = cheerio.load(text);
            const result = [];
            $('.e7m.tt-suggestions').find('div > p').each(function (index, element) {
                result.push($(element).text());
            });
            resolve(result);
        })
        .catch(err => reject(err));
});

const GetOtp = (email, domain) => new Promise((resolve, reject) => {
        fetch(`https://generator.email/${domain}/${email}`, {
            method: "get",
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3",
                "accept-encoding": "gzip, deflate, br",
                "cookie": `_ga=GA1.2.659238676.1567004853; _gid=GA1.2.273162863.1569757277; embx=%5B%22${email}%40${domain}%22%2C%22hcycl%40nongzaa.tk%22%5D; _gat=1; io=io=tIcarRGNgwqgtn40O${randstr(3)}; surl=${domain}%2F${email}`,
                "upgrade-insecure-requests": 1,
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
             }
        })
        .then(res => res.text())
        .then(text => {
            let $ = cheerio.load(text);
            let src = $('#blueOverride');
            const srcc = src.attr('href')
            resolve(srcc);
        })
        .catch(err => console.log(err));
});

async function getHeartbeatUuid(reff){
    const response = await fetch('https://api.getwaitlist.com/api/v1/widget_heartbeats',{
        method:"POST",
        headers:{
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "Referer": "https://www.peer.money/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
            "user-agent":"er-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
        },
        body:JSON.stringify({
            "location": reff,
            "waitlist_id": "5413",
            "referrer": ""
        })
    })
    return response.json()
}

async function goRegist(email, reff, uuid){
    const response = await fetch('https://api.getwaitlist.com/api/v1/waiter',{
        method:"POST",
        headers:{
            "accept": "application/json",
            "accept-language": "en-US,en;q=0.9,id;q=0.8",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "Referer": "https://www.peer.money/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
            "user-agent":"er-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
        },
        body:JSON.stringify({
            "api_key": "XIACJ5",
            "referral_link": reff,
            "heartbeat_uuid": uuid,
            "email": email
        })
    })
    return response.json()
}

async function getURL(linkconfirm){
    const res = await fetch(linkconfirm,{
        method:"GET",
        headers:{
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent":"er-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
        }
    })
    return res
}

async function verifAccount(urlverif){
    const res = await fetch(urlverif,{
        method:"GET",
        headers:{
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent":"er-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
        }
    })
    return res
}

(async()=>{
    console.clear()
    console.log(`
++++++++++++++++++++++++++++++++++++++++++++++++
+               BOT AUTO REFF PEER             +
================================================
+                Author: Conny                 +
+                                              +
++++++++++++++++++++++++++++++++++++++++++++++++
  `);
    console.info(' ')
    let tanyareff = readline.question('Link reff : ');
    while (true) {
        try {
            const reff = tanyareff
            const domainList = await getEmailRandom();
            const domain = domainList[Math.floor(Math.random() * domainList.length)];
            const firstName = faker.name.firstName();
            const lastName = faker.name.lastName();
            const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}${await randstr(5)}`;
            const email = `${username}${await randstr(5)}@${domain}`.toLowerCase();

            const getHeartbeat = await getHeartbeatUuid(reff)
            const heartbeat = getHeartbeat.uuid
            console.log(`--> Try regist using email ${email}`)
            const regist = await goRegist(email,reff,heartbeat)
            if(regist.verified == false){
                console.log('--> Success regist')

                let linkConfirm;
                    do {
                        linkConfirm = await GetOtp(email.split("@")[0], email.split("@")[1]);
                        console.log(`---> Wait for veriff link..`)

                    } while (!linkConfirm);
                
                const rulget = await getURL(linkConfirm)
                const url = rulget.url
                
                console.log('--> Verifying account')
                const verif = await verifAccount(url)
                if(verif.status == 200){
                    console.log('--> Success Reff\n')
                }
            }
        
        } catch (error) {
            console.log(error)
        }
    }
    
    
})()