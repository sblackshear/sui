import blockworks from '../assets/images/articles/blockworks.webp';

function make(
    title: string,
    sourceTitle: string,
    dateTXT: string,
    hRef: string,
    img?: string
) {
    return {
        img,
        title,
        sourceTitle,
        dateTXT,
        hRef,
    };
}

// first is primary
export const latestNews = [
    make(
        'Four Ex-Facebook Developers Join Forces to Build Future of Web3',
        'Blockworks',
        'Feb 1, 2022',
        'https://blockworks.co/four-former-facebook-developers-launch-web3-startup/',
        blockworks.src
    ),
    make(
        "Why Mysten Labs' Founders Left Meta to Launch Their Own Blockchain",
        'The Information',
        'Dec 27, 2021',
        'https://www.theinformation.com/articles/why-mysten-labs-founders-left-meta-to-launch-their-own-blockchain'
    ),
    make(
        'The New Get-Rich-Faster Job in Silicon Valley: Crypto Start-Ups',
        'NYTimes',
        'Dec 20, 2021',
        'https://www.nytimes.com/2021/12/20/technology/silicon-valley-cryptocurrency-start-ups.html'
    ),
    make(
        'Former Facebook engineers at Mysten Labs raise $36M for Web3 infrastructure',
        'CoinTelegraph',
        'Dec 06, 2021',
        'https://cointelegraph.com/news/former-facebook-engineers-at-mysten-labs-raise-36m-for-web3-infrastructure'
    ),
    make(
        'A16z Leads $36M Bet on Web 3 Startup From Facebook Crypto Vets',
        'CoinDesk',
        'Dec 06, 2021',
        'https://www.coindesk.com/business/2021/12/06/a16z-leads-36m-bet-on-web-3-startup-from-facebook-crypto-vets/'
    ),
];
