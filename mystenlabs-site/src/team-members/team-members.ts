import adeniyiImg from '../assets/images/people/Adenyi-Abiodun.png';
import allyImg from '../assets/images/people/Ally-Medina.png';
import evanImg from '../assets/images/people/Evan-Cheng.png';
import kohImg from '../assets/images/people/Koh-Kim.png';
import samImg from '../assets/images/people/Sam-Blackshear.png';
import georgeImg from '../assets/images/people/george-danezis.png';
import todImg from '../assets/images/people/todd-fiala.png';

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
export const teamMembers = [
    makeTeamMember(
        'Evan Cheng',
        'Co-Founder, CEO',
        evanImg.src,
        'https://www.linkedin.com/in/chengevan/',
        'https://twitter.com/EvanWeb3'
    ),
    makeTeamMember(
        'Adeniyi Abiodun',
        'Co-Founder, CPO',
        adeniyiImg.src,
        'https://www.linkedin.com/in/emmanuel-abiodun/',
        'https://twitter.com/EmanAbio'
    ),
    makeTeamMember(
        'Sam Blackshear',
        'Co-Founder, CTO',
        samImg.src,
        'https://www.linkedin.com/in/sam-blackshear-599b3965/',
        'https://twitter.com/b1ackd0g'
    ),
    makeTeamMember(
        'George Danezis',
        'Co-Founder, Chief Scientist',
        georgeImg.src,
        'https://www.linkedin.com/in/gdanezis/',
        'https://twitter.com/gdanezis'
    ),
    makeTeamMember(
        'Kostas Chalkias',
        'Co-Founder, Chief Cryptographer',
        undefined,
        'https://www.linkedin.com/in/chalkiaskostas',
        'https://twitter.com/kostascrypto'
    ),
    makeTeamMember(
        'Koh Kim',
        'Head of Ecosystem',
        kohImg.src,
        'https://www.linkedin.com/in/kohkim/',
        'https://twitter.com/kohkim'
    ),
    makeTeamMember(
        'Todd Fiala',
        'Head of Engineering',
        todImg.src,
        'https://www.linkedin.com/in/todd-fiala/',
        'https://twitter.com/trfiala'
    ),
    makeTeamMember(
        'Ally Medina',
        'Head of Operations',
        allyImg.src,
        'https://www.linkedin.com/in/allymedina/',
        'https://twitter.com/evilleally'
    ),
];
