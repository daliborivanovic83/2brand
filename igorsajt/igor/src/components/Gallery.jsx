import React from "react";
import Productgallery from "../components/Productgallery";

import Tweezerman from "../Assets/tweezermanwhite.jpg";
import After from "../Assets/aftereightwhite.jpg";
import Paints from "../Assets/paintswhite.jpg";
import Vranac from "../Assets/vranacwhite.jpg";
import Eastsign from "../Assets/eastsignwhite.jpg";
import Nescafe from "../Assets/nescafewhite.jpg";
import firstcrack from "../Assets/firstcrackwhite.jpg";
import Bentzbarista from "../Assets/bentzbaristawhite.jpg";
import Excedrin from "../Assets/excedrinwhite.jpg";
import Axal from "../Assets/axalwhite.jpg";
import HS from "../Assets/headshoulderswhite.jpg";
import Beaute from "../Assets/beauteswisswhite.jpg";
import Prossecco from "../Assets/prossecowhite.jpg";
import Dunhill from "../Assets/dunhillwhite.jpg";
import hot from "../Assets/hotsaucewhite.jpg";
import nature from "../Assets/natureguruwhite.jpg";
import Katze from "../Assets/katzungenwhite.jpg";
import Bottle from "../Assets/bottlewhite.jpg";
import Paints2 from "../Assets/paints2white.jpg";
import Eastcapsule from "../Assets/eastsigncapsulewhite.jpg";
import Ethiopia from "../Assets/ethiopiawhite.jpg";
import BottleJungle from "../Assets/bocajungledesktop.jpg";

import DunhillMobile from "../Assets/dunhillcigarewhitemobile.jpg";
import ExcedrinMobile from "../Assets/excedrinwhitemobile.jpg";
import MugMobile from "../Assets/mugwhitemobile.jpg";
import EthiopiaMobile from "../Assets/ethiopiacoffeewhitemobile.jpg";
import TweezermanMobile from "../Assets/tweezermanwhitemobile.jpg";
import XpressMobile from "../Assets/xpresswhitemobile.jpg";
import ChardonnayMobile from "../Assets/chardonnaywhitemobile.jpg";
import MachineCoffeeMobile from "../Assets/masinazakafumobile.jpg";
import BottleKids from "../Assets/bocajunglemobilni.jpg";
import BentzMobile from "../Assets/benzbaristaMobile.jpg";

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: `${Tweezerman}`,
      alt: "Tweezerman",
    },

    {
      id: 3,
      src: `${After}`,
      alt: "After eight tea",
    },

    {
      id: 6,
      src: `${Paints}`,
      alt: "paints",
    },
    {
      id: 7,
      src: `${Excedrin}`,
      alt: "Excedrin",
    },
    {
      id: 8,
      src: `${Vranac}`,
      alt: "Vranac wine",
    },
    {
      id: 9,
      src: `${Eastsign}`,
      alt: "East sign coffe ",
    },
    {
      id: 10,
      src: `${Nescafe}`,
      alt: "Nescafe machine",
    },
    {
      id: 11,
      src: `${firstcrack}`,
      alt: "firsta Crack coffee",
    },
    {
      id: 12,
      src: `${Bentzbarista}`,
      alt: "Bentz barista coffee",
    },

    {
      id: 13,
      src: `${Axal}`,
      alt: "Axal detergent",
    },
    {
      id: 14,
      src: `${HS}`,
      alt: "Head and shoulders shampoo",
    },
    {
      id: 15,
      src: `${Beaute}`,
      alt: "Swiss Beaute",
    },
    {
      id: 16,
      src: `${Prossecco}`,
      alt: "Wine prossecco",
    },

    {
      id: 17,
      src: `${Dunhill}`,
      alt: "Cigars dunhill",
    },
    {
      id: 18,
      src: `${hot}`,
      alt: "Hot sauce",
    },
    {
      id: 19,
      src: `${nature}`,
      alt: "Nature`s guru tea",
    },
    {
      id: 20,
      src: `${Katze}`,
      alt: "Cat food",
    },
    {
      id: 21,
      src: `${Bottle}`,
      alt: "Water bottle",
    },
    {
      id: 22,
      src: `${Paints2}`,
      alt: "Paints part two",
    },
    {
      id: 23,
      src: `${Eastcapsule}`,
      alt: "Paints part two",
    },
    {
      id: 24,
      src: `${Ethiopia}`,
      alt: "Coffee from Ethiopia",
    },

    {
      id: 25,
      src: `${BottleJungle}`,
      alt: "Bottle for kids",
    },
  ];

  const imagesMobile = [
    {
      id: 1,
      src: `${MachineCoffeeMobile}`,
      alt: "Coffee capsule machine",
    },
    {
      id: 2,
      src: `${TweezermanMobile}`,
      alt: "Tweezerman",
    },

    {
      id: 3,
      src: `${MugMobile}`,
      alt: "Water mug",
    },

    {
      id: 4,
      src: `${XpressMobile}`,
      alt: "Xpress drink",
    },
    {
      id: 5,
      src: `${ExcedrinMobile}`,
      alt: "Excedrin medicine ",
    },
    {
      id: 6,
      src: `${DunhillMobile}`,
      alt: "Dunhill cigar pack ",
    },
    {
      id: 7,
      src: `${ChardonnayMobile}`,
      alt: "Chardonnay Wine",
    },
    {
      id: 8,
      src: `${EthiopiaMobile}`,
      alt: "Coffee from Ethiopia ",
    },
    {
      id: 9,
      src: `${BottleKids}`,
      alt: "water bottle ",
    },
    {
      id: 10,
      src: `${BentzMobile}`,
      alt: "Coffee capsule ",
    },
  ];

  return <Productgallery images={images} imagesMobile={imagesMobile} />;
};

export default Gallery;
