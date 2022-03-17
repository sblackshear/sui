import a16zCrypto from '../assets/images/investors/a16zcrypto.png';
import bienville from '../assets/images/investors/bienville.png';
import coinbaseVentures from '../assets/images/investors/coinbase-ventures.png';
import eladGil from '../assets/images/investors/elad-gil.png';
import electricCapital from '../assets/images/investors/electric-capital.png';
import hackVc from '../assets/images/investors/hack-vc.png';
import lightspeed from '../assets/images/investors/lightspeed.png';
import lux from '../assets/images/investors/lux.png';
import nfx from '../assets/images/investors/nfx.png';
import redpoint from '../assets/images/investors/redpoint.png';
import samsungNext from '../assets/images/investors/samsung-next.png';
import scribbleVentures from '../assets/images/investors/scribble-ventures.png';
import slowVentures from '../assets/images/investors/slow-ventures.png';
import standardCrypto from '../assets/images/investors/standard-crypto.png';

function make(highlight: boolean, name: string, img: string, href: string) {
    return {
        highlight,
        name,
        img,
        href,
    };
}

export const allInvestors = [
    make(true, 'a16z Crypto', a16zCrypto.src, 'https://a16z.com/crypto/'),
    make(true, 'Redpoint', redpoint.src, 'https://www.redpoint.com/'),
    make(false, 'Lightspeed', lightspeed.src, 'https://lsvp.com/'),
    make(
        false,
        'Coinbase Ventures',
        coinbaseVentures.src,
        'https://www.coinbase.com/ventures'
    ),
    make(
        false,
        'Electric Capital',
        electricCapital.src,
        'https://www.electriccapital.com/'
    ),
    make(
        false,
        'Standard Crypto',
        standardCrypto.src,
        'https://standardcrypto.vc/'
    ),
    make(false, 'NfX', nfx.src, 'https://www.nfx.com/'),
    make(false, 'Slow Ventures', slowVentures.src, 'https://slow.co'),
    make(
        false,
        'Scribble Ventures',
        scribbleVentures.src,
        'https://www.scribble.vc/'
    ),
    make(
        false,
        'Samsung Next',
        samsungNext.src,
        'https://www.samsungnext.com/'
    ),
    make(false, 'Lux', lux.src, 'https://luxcapital.com/'),
    make(
        false,
        'Bienville',
        bienville.src,
        'https://www.bienvillecapital.com/'
    ),
    make(false, 'Hack VC', hackVc.src, 'https://hack.vc/'),
    make(false, 'Elad Gil', eladGil.src, 'http://eladgil.com/'),
];
