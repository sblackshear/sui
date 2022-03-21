import admaWelc from '../assets/images/people/Adam Welc.png';
import adenyiAbiodun from '../assets/images/people/Adenyi Abiodun.png';
import allyMedina from '../assets/images/people/Ally Medina.png';
import alonsoDeGortari from '../assets/images/people/Alonso de Gortari.png';
import andrewBurnie from '../assets/images/people/Andrew Burnie.png';
import arunKoshy from '../assets/images/people/Arun Koshy.png';
import bauerWann from '../assets/images/people/Bauer Wann.png';
import chrisLi from '../assets/images/people/Chris Li.png';
import clayMurphy from '../assets/images/people/Clay Murphy.png';
import evanChan from '../assets/images/people/Evan Chan.png';
import evanCheng from '../assets/images/people/Evan Cheng.png';
import francoisGarillot from '../assets/images/people/François Garillot.png';
import georgeDanezis from '../assets/images/people/George Danezis.png';
import jenniferKye from '../assets/images/people/Jennifer Kye.png';
import kohKim from '../assets/images/people/Koh Kim.png';
import kostasChalkias from '../assets/images/people/Kostas Chalkias.png';
import patrickKuo from '../assets/images/people/Patrick Kuo.png';
import pavlosChrysochoidis from '../assets/images/people/Pavlos Chrysochoidis.png';
import samBlackshear from '../assets/images/people/Sam Blackshear.png';
import seanAsir from '../assets/images/people/Sean Asir.png';
import stellaCannefax from '../assets/images/people/Stella Cannefax.png';
import tasos from '../assets/images/people/Tasos .png';
import toddFiala from '../assets/images/people/Todd Fiala.png';
import xunLi from '../assets/images/people/Xun Li.png';

function makeTeamMember(
    name: string,
    position: string,
    img?: string,
    linkedInHref?: string,
    twitterHref?: string
) {
    return {
        name,
        position,
        img,
        linkedInHref,
        twitterHref,
    };
}

const manualOrder = [
    makeTeamMember(
        'Evan Cheng',
        'Co-Founder, CEO',
        evanCheng.src,
        'https://www.linkedin.com/in/chengevan/',
        'https://twitter.com/EvanWeb3'
    ),
    makeTeamMember(
        'Adeniyi Abiodun',
        'Co-Founder, CPO',
        adenyiAbiodun.src,
        'https://www.linkedin.com/in/emmanuel-abiodun/',
        'https://twitter.com/EmanAbio'
    ),
    makeTeamMember(
        'Sam Blackshear',
        'Co-Founder, CTO',
        samBlackshear.src,
        'https://www.linkedin.com/in/sam-blackshear-599b3965/',
        'https://twitter.com/b1ackd0g'
    ),
    makeTeamMember(
        'George Danezis',
        'Co-Founder, Chief Scientist',
        georgeDanezis.src,
        'https://www.linkedin.com/in/gdanezis/',
        'https://twitter.com/gdanezis'
    ),
    makeTeamMember(
        'Kostas Chalkias',
        'Co-Founder, Chief Cryptographer',
        kostasChalkias.src,
        'https://www.linkedin.com/in/chalkiaskostas',
        'https://twitter.com/kostascrypto'
    ),
    makeTeamMember(
        'Koh Kim',
        'Head of Ecosystem',
        kohKim.src,
        'https://www.linkedin.com/in/kohkim/',
        'https://twitter.com/kohkim'
    ),
    makeTeamMember(
        'Todd Fiala',
        'Head of Engineering',
        toddFiala.src,
        'https://www.linkedin.com/in/todd-fiala/',
        'https://twitter.com/trfiala'
    ),
    makeTeamMember(
        'Ally Medina',
        'Head of Operations',
        allyMedina.src,
        'https://www.linkedin.com/in/allymedina/',
        'https://twitter.com/evilleally'
    ),
];

const alphabeticalOrder = [
    makeTeamMember(
        'Evan Chan',
        'Software Engineer',
        evanChan.src,
        'https://www.linkedin.com/in/evanfchan/',
        'https://twitter.com/Evanfchan'
    ),
    makeTeamMember(
        'François Garillot',
        'Software Engineer',
        francoisGarillot.src,
        'https://www.linkedin.com/in/huitseeker',
        'https://twitter.com/huitseeker'
    ),
    makeTeamMember(
        'Alonso de Gortari',
        'Product Manager',
        alonsoDeGortari.src,
        'http://www.linkedin.com/in/alonsodegortari',
        'https://twitter.com/alonsodegortari'
    ),
    makeTeamMember(
        'Godwin Jibs',
        'Software Engineer',
        undefined,
        'http://linkedin.com/in/godwin-jibs-706bb31b',
        ''
    ),
    makeTeamMember(
        'Damir Shamanaev',
        'Software Engineer',
        undefined,
        'https://www.linkedin.com/in/damir-s-151888101/',
        ''
    ),
    makeTeamMember('Brandon Williams', 'Software Engineer', undefined, '', ''), //****
    makeTeamMember(
        'Laura Makdah',
        'Software Engineer',
        undefined,
        'https://www.linkedin.com/in/laura-makdah-8b2333aa/',
        ''
    ),
    makeTeamMember(
        'Patrick Kuo',
        'Software Engineer',
        patrickKuo.src,
        'https://www.linkedin.com/in/patrick-kuo/',
        ''
    ),
    makeTeamMember(
        'Andrew Burnie',
        'Software Engineer',
        andrewBurnie.src,
        'https://www.linkedin.com/in/apburnie/',
        ''
    ),
    makeTeamMember(
        'Alberto Sonnino',
        'Research Scientist',
        undefined,
        'https://www.linkedin.com/in/asonnino/',
        'https://twitter.com/alberto_sonnino'
    ),
    makeTeamMember(
        'Tasos Kichidis',
        'Software Engineer',
        tasos.src,
        'https://www.linkedin.com/in/akichidis/',
        'https://twitter.com/akihidis'
    ),
    makeTeamMember(
        'Pavlos Chrysochoidis',
        'Software Engineer',
        pavlosChrysochoidis.src,
        'https://www.linkedin.com/in/pavlos-chrysochoidis/',
        ''
    ),
    makeTeamMember(
        'Ade A.',
        'Software Engineer',
        undefined,
        'https://www.linkedin.com/in/ade-ade/',
        'https://twitter.com/itachee_x'
    ),
    makeTeamMember(
        'Xun Li',
        'Software Engineer',
        xunLi.src,
        'https://www.linkedin.com/in/lxfind/',
        ''
    ),
    makeTeamMember('Todd Nowacki', 'Software Engineer', undefined, '', ''), // ***
    makeTeamMember(
        'Rob Fullen',
        'Executive Assistant',
        undefined,
        'https://www.linkedin.com/in/rob-fullen/',
        ''
    ),
    makeTeamMember(
        'Adam Welc',
        'Software Engineer',
        admaWelc.src,
        'https://www.linkedin.com/in/adamwelc',
        ''
    ),
    makeTeamMember(
        'Sean Asir',
        'Head of Recruiting',
        seanAsir.src,
        'https://www.linkedin.com/in/asirsn126/',
        'https://twitter.com/seannyboy126'
    ),
    makeTeamMember(
        'Clay Murphy',
        'Technical Writer',
        clayMurphy.src,
        'https://www.linkedin.com/in/clay-murphy-158511',
        ''
    ),
    makeTeamMember(
        'Bauer Wann',
        'Product Manager',
        bauerWann.src,
        'https://www.linkedin.com/in/bauerwann/',
        ''
    ),
    makeTeamMember(
        'Arun Koshy',
        'Software Engineer',
        arunKoshy.src,
        'https://www.linkedin.com/in/arun-koshy-510a3a36',
        ''
    ),
    makeTeamMember(
        'Stella Cannefax',
        'Software Engineer',
        stellaCannefax.src,
        'https://www.linkedin.com/in/stellacannefax',
        'https://twitter.com/0xstella'
    ),
    makeTeamMember(
        'Chris Li',
        'Software Engineer',
        chrisLi.src,
        'https://www.linkedin.com/in/chongzhang-li/',
        'https://twitter.com/chrisliweb3'
    ),
    makeTeamMember(
        'Jen Kye',
        'Head of Social',
        jenniferKye.src,
        'https://www.linkedin.com/in/jhkye/',
        'https://twitter.com/jinkwell'
    ),
    makeTeamMember(
        'Lefteris Kokoris Kogias',
        'Research Advisor',
        undefined,
        'https://www.linkedin.com/in/eleftherios-kokoris-kogias-52836274/',
        'https://twitter.com/LefKok'
    ),
    makeTeamMember('Ben Holcomb', 'Product Manager', undefined, '', ''),
];

export const teamMembers = [
    ...manualOrder,
    ...alphabeticalOrder.sort((m1, m2) => m1.name.localeCompare(m2.name)),
];
