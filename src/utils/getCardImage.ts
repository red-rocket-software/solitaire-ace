import clubs01 from "@/../public/images/CardsFaces/Clubs/clubs01.jpg";
import clubs02 from "@/../public/images/CardsFaces/Clubs/clubs02.jpg";
import clubs03 from "@/../public/images/CardsFaces/Clubs/clubs03.jpg";
import clubs04 from "@/../public/images/CardsFaces/Clubs/clubs04.jpg";
import clubs05 from "@/../public/images/CardsFaces/Clubs/clubs05.jpg";
import clubs06 from "@/../public/images/CardsFaces/Clubs/clubs06.jpg";
import clubs07 from "@/../public/images/CardsFaces/Clubs/clubs07.jpg";
import clubs08 from "@/../public/images/CardsFaces/Clubs/clubs08.jpg";
import clubs09 from "@/../public/images/CardsFaces/Clubs/clubs09.jpg";
import clubs10 from "@/../public/images/CardsFaces/Clubs/clubs10.jpg";
import clubs11 from "@/../public/images/CardsFaces/Clubs/clubs11.jpg";
import clubs12 from "@/../public/images/CardsFaces/Clubs/clubs12.jpg";
import clubs13 from "@/../public/images/CardsFaces/Clubs/clubs13.jpg";

import diamonds01 from "@/../public/images/CardsFaces/Diamonds/diamonds01.jpg";
import diamonds02 from "@/../public/images/CardsFaces/Diamonds/diamonds02.jpg";
import diamonds03 from "@/../public/images/CardsFaces/Diamonds/diamonds03.jpg";
import diamonds04 from "@/../public/images/CardsFaces/Diamonds/diamonds04.jpg";
import diamonds05 from "@/../public/images/CardsFaces/Diamonds/diamonds05.jpg";
import diamonds06 from "@/../public/images/CardsFaces/Diamonds/diamonds06.jpg";
import diamonds07 from "@/../public/images/CardsFaces/Diamonds/diamonds07.jpg";
import diamonds08 from "@/../public/images/CardsFaces/Diamonds/diamonds08.jpg";
import diamonds09 from "@/../public/images/CardsFaces/Diamonds/diamonds09.jpg";
import diamonds10 from "@/../public/images/CardsFaces/Diamonds/diamonds10.jpg";
import diamonds11 from "@/../public/images/CardsFaces/Diamonds/diamonds11.jpg";
import diamonds12 from "@/../public/images/CardsFaces/Diamonds/diamonds12.jpg";
import diamonds13 from "@/../public/images/CardsFaces/Diamonds/diamonds13.jpg";

import hearts01 from "@/../public/images/CardsFaces/Hearts/hearts01.jpg";
import hearts02 from "@/../public/images/CardsFaces/Hearts/hearts02.jpg";
import hearts03 from "@/../public/images/CardsFaces/Hearts/hearts03.jpg";
import hearts04 from "@/../public/images/CardsFaces/Hearts/hearts04.jpg";
import hearts05 from "@/../public/images/CardsFaces/Hearts/hearts05.jpg";
import hearts06 from "@/../public/images/CardsFaces/Hearts/hearts06.jpg";
import hearts07 from "@/../public/images/CardsFaces/Hearts/hearts07.jpg";
import hearts08 from "@/../public/images/CardsFaces/Hearts/hearts08.jpg";
import hearts09 from "@/../public/images/CardsFaces/Hearts/hearts09.jpg";
import hearts10 from "@/../public/images/CardsFaces/Hearts/hearts10.jpg";
import hearts11 from "@/../public/images/CardsFaces/Hearts/hearts11.jpg";
import hearts12 from "@/../public/images/CardsFaces/Hearts/hearts12.jpg";
import hearts13 from "@/../public/images/CardsFaces/Hearts/hearts13.jpg";

import spades01 from "@/../public/images/CardsFaces/Spades/spades01.jpg";
import spades02 from "@/../public/images/CardsFaces/Spades/spades02.jpg";
import spades03 from "@/../public/images/CardsFaces/Spades/spades03.jpg";
import spades04 from "@/../public/images/CardsFaces/Spades/spades04.jpg";
import spades05 from "@/../public/images/CardsFaces/Spades/spades05.jpg";
import spades06 from "@/../public/images/CardsFaces/Spades/spades06.jpg";
import spades07 from "@/../public/images/CardsFaces/Spades/spades07.jpg";
import spades08 from "@/../public/images/CardsFaces/Spades/spades08.jpg";
import spades09 from "@/../public/images/CardsFaces/Spades/spades09.jpg";
import spades10 from "@/../public/images/CardsFaces/Spades/spades10.jpg";
import spades11 from "@/../public/images/CardsFaces/Spades/spades11.jpg";
import spades12 from "@/../public/images/CardsFaces/Spades/spades12.jpg";
import spades13 from "@/../public/images/CardsFaces/Spades/spades13.jpg";

const clubsCards = { clubs01, clubs02, clubs03, clubs04, clubs05, clubs06, clubs07, clubs08, clubs09, clubs10, clubs11, clubs12, clubs13 };
const diamondsCards = { diamonds01, diamonds02, diamonds03, diamonds04, diamonds05, diamonds06, diamonds07, diamonds08, diamonds09, diamonds10, diamonds11, diamonds12, diamonds13 };
const heartsCards = { hearts01, hearts02, hearts03, hearts04, hearts05, hearts06, hearts07, hearts08, hearts09, hearts10, hearts11, hearts12, hearts13 };
const spadesCards = { spades01, spades02, spades03, spades04, spades05, spades06, spades07, spades08, spades09, spades10, spades11, spades12, spades13 };

const getImageByName = (directory: string, image: string) => {
    if (!directory.includes('CardsFaces')) {
        return `/images/${directory}/${image}`;
    }
    if (image.includes('Clubs')) {
        return getImageFromObjofCards(clubsCards, image);
    }
    if (image.includes('Diamonds')) {
        return getImageFromObjofCards(diamondsCards, image);
    }
    if (image.includes('Hearts')) {
        return getImageFromObjofCards(heartsCards, image);
    }
    if (image.includes('Spades')) {
        return getImageFromObjofCards(spadesCards, image);
    }
    return `/images/${directory}/${image}`;
}

const getImageFromObjofCards = (images: any, image: string) => {
    let resultImg = undefined;
    for (const key in images) {
        if (image.includes(key)) {
            resultImg = images[key];
            break;
        }
    }
    return resultImg;
}

export default getImageByName;