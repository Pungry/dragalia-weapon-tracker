import React, { useState } from 'react'
import AgitoNavTabs from "./AgitoNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"
import { Box, Text, Flex, Card, Image } from "rebass";
import { Slider } from "@rebass/forms";

import ShadowAgitoSword from "../Images/Shadow_Agito_Sword.png";
import ShadowAgitoBlade from "../Images/Shadow_Agito_Blade.png";
import ShadowAgitoDagger from "../Images/Shadow_Agito_Dagger.png";
import ShadowAgitoAxe from "../Images/Shadow_Agito_Axe.png";
import ShadowAgitoLance from "../Images/Shadow_Agito_Lance.png";
import ShadowAgitoBow from "../Images/Shadow_Agito_Bow.png";
import ShadowAgitoWand from "../Images/Shadow_Agito_Wand.png";
import ShadowAgitoStaff from "../Images/Shadow_Agito_Staff.png";
import FireAgitoManacaster from "../Images/Fire_Agito_Manacaster.png";

import Refine from "../Images/Refine.PNG";
import Unbind from "../Images/Unbind.PNG";
import WyrmprintSlots from "../Images/Wyrmprint_Slots.PNG";
import WeaponBonus from "../Images/Weapon_Bonus.PNG";

import ShadowAgitoSilverMask from "../Images/Shadow_Agito_Silver_Mask.png";
import ShadowAgitoGoldMask from "../Images/Shadow_Agito_Gold_Mask.png";
import ShadowAgitoInsanity from "../Images/Shadow_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";

import ShadowAgitoSwordCost from "./ShadowAgitoSwordMats"
import ShadowAgitoBladeCost from "./ShadowAgitoBladeMats"
import ShadowAgitoDaggerCost from "./ShadowAgitoDaggerMats"
import ShadowAgitoAxeCost from "./ShadowAgitoAxeMats"
import ShadowAgitoLanceCost from "./ShadowAgitoLanceMats"
import ShadowAgitoBowCost from "./ShadowAgitoBowMats"
import ShadowAgitoWandCost from "./ShadowAgitoWandMats"
import ShadowAgitoStaffCost from "./ShadowAgitoStaffMats"
import ShadowAgitoManacasterCost from "./ShadowAgitoManacasterMats"

export default function ShadowAgitoWeapons() {
    const [shadowWeaponChoice, setShadowWeaponChoiceState] = useLocalStorage("shadowWeaponChoice", "sword")

    const [allmubSASilverMaskCount, setallmubSASilverMaskCount] = useLocalStorage("allmubSASilverMaskState", 4644)
    const [allmubSAGoldMaskCount, setallmubSAGoldMaskCount] = useLocalStorage("allmubSAGoldMaskState", 3690)
    const [allmubSAInsanityCount, setallmubSAInsanityCount] = useLocalStorage("allmubSAInsanityCount", 801)
    const [allmubSAGaleCount, setallmubSAGaleCount] = useLocalStorage("allmubSAGaleCount", 270)
    const [allmubSASandCount, setallmubSASandCount] = useLocalStorage("allmubSASandCount", 45)
    const [allmubSAOriCount, setallmubSAOriCount] = useLocalStorage("allmubSAOriCount", 594)
    const [allmubSARupeeCost, setallmubSARupeeCost] = useLocalStorage("allmubSARupeeCost", 535.5)

    const [shadowSwordCraftState, setShadowSwordCraftState] = useLocalStorage("shadowSwordCraftState", "grayscale(100%)")
    const [shadowSwordWeaponBonusState, setShadowSwordWeaponBonusState] = useLocalStorage("shadowSwordWeaponBonusState", "grayscale(100%)")
    const [shadowSwordWyrmprintSlotState, setShadowSwordWyrmprintSlotState] = useLocalStorage("shadowSwordWyrmprintSlotState", "grayscale(100%)")
    const [shadowSwordUnbindState, setShadowSwordUnbindState] = useLocalStorage("shadowSwordUnbindState", 0);
    const [shadowSwordRefineState, setShadowSwordRefineState] = useLocalStorage("shadowSwordRefineState", 0);

    const [mubSASSilverMaskCount, setmubSASSilverMaskCountState] = useLocalStorage("mubSASSilverMaskCount", 516);
    const [mubSASGoldMaskCount, setmubSASGoldMaskCountState] = useLocalStorage("mubSASGoldMaskCount", 410);
    const [mubSASInsanityCount, setmubSASInsanityCountState] = useLocalStorage("mubSASInsanityCount", 89);
    const [mubSASGaleCount, setmubSASGaleCountState] = useLocalStorage("mubSASGaleCount", 30);
    const [mubSASSandCount, setmubSASSandCountState] = useLocalStorage("mubSASSandCount", 5);
    const [mubSASOriCount, setmubSASOriCountState] = useLocalStorage("mubSASOriCount", 66);
    const [mubSASRupeeCost, setmubSASRupeeCost] = useLocalStorage("mubSASRupeeCost", 59.5);

    const [wbSASSilverMaskCount, setwbSASSilverMaskCountState] = useLocalStorage("wbSASSilverMaskCount", 332);
    const [wbSASGoldMaskCount, setwbSASGoldMaskCountState] = useLocalStorage("wbSASGoldMaskCount", 270);
    const [wbSASInsanityCount, setwbSASInsanityCountState] = useLocalStorage("wbSASInsanityCount", 28);
    const [wbSASSandCount, setwbSASSandCountState] = useLocalStorage("wbSASSandCount", 5);
    const [wbSASOriCount, setwbSASOriCountState] = useLocalStorage("wbSASOriCount", 32);
    const [wbSASRupeeCost, setwbSASRupeeCost] = useLocalStorage("wbSASRupeeCost", 30);

    const [shadowBladeCraftState, setShadowBladeCraftState] = useLocalStorage("shadowBladeCraftState", "grayscale(100%)")
    const [shadowBladeWeaponBonusState, setShadowBladeWeaponBonusState] = useLocalStorage("shadowBladeWeaponBonusState", "grayscale(100%)")
    const [shadowBladeWyrmprintSlotState, setShadowBladeWyrmprintSlotState] = useLocalStorage("shadowBladeWyrmprintSlotState", "grayscale(100%)")
    const [shadowBladeUnbindState, setShadowBladeUnbindState] = useLocalStorage("shadowBladeUnbindState", 0);
    const [shadowBladeRefineState, setShadowBladeRefineState] = useLocalStorage("shadowBladeRefineState", 0);

    const [mubSABlSilverMaskCount, setmubSABlSilverMaskCountState] = useLocalStorage("mubSABlSilverMaskCount", 516);
    const [mubSABlGoldMaskCount, setmubSABlGoldMaskCountState] = useLocalStorage("mubSABlGoldMaskCount", 410);
    const [mubSABlInsanityCount, setmubSABlInsanityCountState] = useLocalStorage("mubSABlInsanityCount", 89);
    const [mubSABlGaleCount, setmubSABlGaleCountState] = useLocalStorage("mubSABlGaleCount", 30);
    const [mubSABlSandCount, setmubSABlSandCountState] = useLocalStorage("mubSABlSandCount", 5);
    const [mubSABlOriCount, setmubSABlOriCountState] = useLocalStorage("mubSABlOriCount", 66);
    const [mubSABlRupeeCost, setmubSABlRupeeCost] = useLocalStorage("mubSABlRupeeCost", 59.5);

    const [wbSABlSilverMaskCount, setwbSABlSilverMaskCountState] = useLocalStorage("wbSABlSilverMaskCount", 332);
    const [wbSABlGoldMaskCount, setwbSABlGoldMaskCountState] = useLocalStorage("wbSABlGoldMaskCount", 270);
    const [wbSABlInsanityCount, setwbSABlInsanityCountState] = useLocalStorage("wbSABlInsanityCount", 28);
    const [wbSABlSandCount, setwbSABlSandCountState] = useLocalStorage("wbSABlSandCount", 5);
    const [wbSABlOriCount, setwbSABlOriCountState] = useLocalStorage("wbSABlOriCount", 32);
    const [wbSABlRupeeCost, setwbSABlRupeeCost] = useLocalStorage("wbSABlRupeeCost", 30);

    const [shadowDaggerCraftState, setShadowDaggerCraftState] = useLocalStorage("shadowDaggerCraftState", "grayscale(100%)")
    const [shadowDaggerWeaponBonusState, setShadowDaggerWeaponBonusState] = useLocalStorage("shadowDaggerWeaponBonusState", "grayscale(100%)")
    const [shadowDaggerWyrmprintSlotState, setShadowDaggerWyrmprintSlotState] = useLocalStorage("shadowDaggerWyrmprintSlotState", "grayscale(100%)")
    const [shadowDaggerUnbindState, setShadowDaggerUnbindState] = useLocalStorage("shadowDaggerUnbindState", 0);
    const [shadowDaggerRefineState, setShadowDaggerRefineState] = useLocalStorage("shadowDaggerRefineState", 0);

    const [mubSADSilverMaskCount, setmubSADSilverMaskCountState] = useLocalStorage("mubSADSilverMaskCount", 516);
    const [mubSADGoldMaskCount, setmubSADGoldMaskCountState] = useLocalStorage("mubSADASGoldMaskCount", 410);
    const [mubSADInsanityCount, setmubSADInsanityCountState] = useLocalStorage("mubSADInsanityCount", 89);
    const [mubSADGaleCount, setmubSADGaleCountState] = useLocalStorage("mubSADGaleCount", 30);
    const [mubSADSandCount, setmubSADSandCountState] = useLocalStorage("mubSADSandCount", 5);
    const [mubSADOriCount, setmubSADOriCountState] = useLocalStorage("mubSADOriCount", 66);
    const [mubSADRupeeCost, setmubSADRupeeCost] = useLocalStorage("mubSADRupeeCost", 59.5);

    const [wbSADSilverMaskCount, setwbSADSilverMaskCountState] = useLocalStorage("wbSADSilverMaskCount", 332);
    const [wbSADGoldMaskCount, setwbSADGoldMaskCountState] = useLocalStorage("wbSADGoldMaskCount", 270);
    const [wbSADInsanityCount, setwbSADInsanityCountState] = useLocalStorage("wbSADInsanityCount", 28);
    const [wbSADSandCount, setwbSADSandCountState] = useLocalStorage("wbSADSandCount", 5);
    const [wbSADOriCount, setwbSADOriCountState] = useLocalStorage("wbSADOriCount", 32);
    const [wbSADRupeeCost, setwbSADRupeeCost] = useLocalStorage("wbSADRupeeCost", 30);

    const [shadowAxeCraftState, setShadowAxeCraftState] = useLocalStorage("shadowAxeCraftState", "grayscale(100%)")
    const [shadowAxeWeaponBonusState, setShadowAxeWeaponBonusState] = useLocalStorage("shadowAxeWeaponBonusState", "grayscale(100%)")
    const [shadowAxeWyrmprintSlotState, setShadowAxeWyrmprintSlotState] = useLocalStorage("shadowAxeWyrmprintSlotState", "grayscale(100%)")
    const [shadowAxeUnbindState, setShadowAxeUnbindState] = useLocalStorage("shadowAxeUnbindState", 0);
    const [shadowAxeRefineState, setShadowAxeRefineState] = useLocalStorage("shadowAxeRefineState", 0);

    const [mubSAASilverMaskCount, setmubSAASilverMaskCountState] = useLocalStorage("mubSAASilverMaskCount", 516);
    const [mubSAAGoldMaskCount, setmubSAAGoldMaskCountState] = useLocalStorage("mubSAAASGoldMaskCount", 410);
    const [mubSAAInsanityCount, setmubSAAInsanityCountState] = useLocalStorage("mubSAAInsanityCount", 89);
    const [mubSAAGaleCount, setmubSAAGaleCountState] = useLocalStorage("mubSAAGaleCount", 30);
    const [mubSAASandCount, setmubSAASandCountState] = useLocalStorage("mubSAASandCount", 5);
    const [mubSAAOriCount, setmubSAAOriCountState] = useLocalStorage("mubSAAOriCount", 66);
    const [mubSAARupeeCost, setmubSAARupeeCost] = useLocalStorage("mubSAARupeeCost", 59.5);

    const [wbSAASilverMaskCount, setwbSAASilverMaskCountState] = useLocalStorage("wbSAASilverMaskCount", 332);
    const [wbSAAGoldMaskCount, setwbSAAGoldMaskCountState] = useLocalStorage("wbSAAGoldMaskCount", 270);
    const [wbSAAInsanityCount, setwbSAAInsanityCountState] = useLocalStorage("wbSAAInsanityCount", 28);
    const [wbSAASandCount, setwbSAASandCountState] = useLocalStorage("wbSAASandCount", 5);
    const [wbSAAOriCount, setwbSAAOriCountState] = useLocalStorage("wbSAAOriCount", 32);
    const [wbSAARupeeCost, setwbSAARupeeCost] = useLocalStorage("wbSAARupeeCost", 30);

    const [shadowLanceCraftState, setShadowLanceCraftState] = useLocalStorage("shadowLanceCraftState", "grayscale(100%)")
    const [shadowLanceWeaponBonusState, setShadowLanceWeaponBonusState] = useLocalStorage("shadowLanceWeaponBonusState", "grayscale(100%)")
    const [shadowLanceWyrmprintSlotState, setShadowLanceWyrmprintSlotState] = useLocalStorage("shadowLanceWyrmprintSlotState", "grayscale(100%)")
    const [shadowLanceUnbindState, setShadowLanceUnbindState] = useLocalStorage("shadowLanceUnbindState", 0);
    const [shadowLanceRefineState, setShadowLanceRefineState] = useLocalStorage("shadowLanceRefineState", 0);

    const [mubSALSilverMaskCount, setmubSALSilverMaskCountState] = useLocalStorage("mubSALSilverMaskCount", 516);
    const [mubSALGoldMaskCount, setmubSALGoldMaskCountState] = useLocalStorage("mubSALASGoldMaskCount", 410);
    const [mubSALInsanityCount, setmubSALInsanityCountState] = useLocalStorage("mubSALInsanityCount", 89);
    const [mubSALGaleCount, setmubSALGaleCountState] = useLocalStorage("mubSALGaleCount", 30);
    const [mubSALSandCount, setmubSALSandCountState] = useLocalStorage("mubSALSandCount", 5);
    const [mubSALOriCount, setmubSALOriCountState] = useLocalStorage("mubSALOriCount", 66);
    const [mubSALRupeeCost, setmubSALRupeeCost] = useLocalStorage("mubSALRupeeCost", 59.5);

    const [wbSALSilverMaskCount, setwbSALSilverMaskCountState] = useLocalStorage("wbSALSilverMaskCount", 332);
    const [wbSALGoldMaskCount, setwbSALGoldMaskCountState] = useLocalStorage("wbSALGoldMaskCount", 270);
    const [wbSALInsanityCount, setwbSALInsanityCountState] = useLocalStorage("wbSALInsanityCount", 28);
    const [wbSALSandCount, setwbSALSandCountState] = useLocalStorage("wbSALSandCount", 5);
    const [wbSALOriCount, setwbSALOriCountState] = useLocalStorage("wbSALOriCount", 32);
    const [wbSALRupeeCost, setwbSALRupeeCost] = useLocalStorage("wbSALRupeeCost", 30);

    const [shadowBowCraftState, setShadowBowCraftState] = useLocalStorage("shadowBowCraftState", "grayscale(100%)")
    const [shadowBowWeaponBonusState, setShadowBowWeaponBonusState] = useLocalStorage("shadowBowWeaponBonusState", "grayscale(100%)")
    const [shadowBowWyrmprintSlotState, setShadowBowWyrmprintSlotState] = useLocalStorage("shadowBowWyrmprintSlotState", "grayscale(100%)")
    const [shadowBowUnbindState, setShadowBowUnbindState] = useLocalStorage("shadowBowUnbindState", 0);
    const [shadowBowRefineState, setShadowBowRefineState] = useLocalStorage("shadowBowRefineState", 0);

    const [mubSABoSilverMaskCount, setmubSABoSilverMaskCountState] = useLocalStorage("mubSABoSilverMaskCount", 516);
    const [mubSABoGoldMaskCount, setmubSABoGoldMaskCountState] = useLocalStorage("mubSABoASGoldMaskCount", 410);
    const [mubSABoInsanityCount, setmubSABoInsanityCountState] = useLocalStorage("mubSABoInsanityCount", 89);
    const [mubSABoGaleCount, setmubSABoGaleCountState] = useLocalStorage("mubSABoGaleCount", 30);
    const [mubSABoSandCount, setmubSABoSandCountState] = useLocalStorage("mubSABoSandCount", 5);
    const [mubSABoOriCount, setmubSABoOriCountState] = useLocalStorage("mubSABoOriCount", 66);
    const [mubSABoRupeeCost, setmubSABoRupeeCost] = useLocalStorage("mubSABoRupeeCost", 59.5);

    const [wbSABoSilverMaskCount, setwbSABoSilverMaskCountState] = useLocalStorage("wbSABoSilverMaskCount", 332);
    const [wbSABoGoldMaskCount, setwbSABoGoldMaskCountState] = useLocalStorage("wbSABoGoldMaskCount", 270);
    const [wbSABoInsanityCount, setwbSABoInsanityCountState] = useLocalStorage("wbSABoInsanityCount", 28);
    const [wbSABoSandCount, setwbSABoSandCountState] = useLocalStorage("wbSABoSandCount", 5);
    const [wbSABoOriCount, setwbSABoOriCountState] = useLocalStorage("wbSABoOriCount", 32);
    const [wbSABoRupeeCost, setwbSABoRupeeCost] = useLocalStorage("wbSABoRupeeCost", 30);

    const [shadowWandCraftState, setShadowWandCraftState] = useLocalStorage("shadowWandCraftState", "grayscale(100%)")
    const [shadowWandWeaponBonusState, setShadowWandWeaponBonusState] = useLocalStorage("shadowWandWeaponBonusState", "grayscale(100%)")
    const [shadowWandWyrmprintSlotState, setShadowWandWyrmprintSlotState] = useLocalStorage("shadowWandWyrmprintSlotState", "grayscale(100%)")
    const [shadowWandUnbindState, setShadowWandUnbindState] = useLocalStorage("shadowWandUnbindState", 0);
    const [shadowWandRefineState, setShadowWandRefineState] = useLocalStorage("shadowWandRefineState", 0);

    const [mubSAWSilverMaskCount, setmubSAWSilverMaskCountState] = useLocalStorage("mubSAWSilverMaskCount", 516);
    const [mubSAWGoldMaskCount, setmubSAWGoldMaskCountState] = useLocalStorage("mubSAWASGoldMaskCount", 410);
    const [mubSAWInsanityCount, setmubSAWInsanityCountState] = useLocalStorage("mubSAWInsanityCount", 89);
    const [mubSAWGaleCount, setmubSAWGaleCountState] = useLocalStorage("mubSAWGaleCount", 30);
    const [mubSAWSandCount, setmubSAWSandCountState] = useLocalStorage("mubSAWSandCount", 5);
    const [mubSAWOriCount, setmubSAWOriCountState] = useLocalStorage("mubSAWOriCount", 66);
    const [mubSAWRupeeCost, setmubSAWRupeeCost] = useLocalStorage("mubSAWRupeeCost", 59.5);

    const [wbSAWSilverMaskCount, setwbSAWSilverMaskCountState] = useLocalStorage("wbSAWSilverMaskCount", 332);
    const [wbSAWGoldMaskCount, setwbSAWGoldMaskCountState] = useLocalStorage("wbSAWGoldMaskCount", 270);
    const [wbSAWInsanityCount, setwbSAWInsanityCountState] = useLocalStorage("wbSAWInsanityCount", 28);
    const [wbSAWSandCount, setwbSAWSandCountState] = useLocalStorage("wbSAWSandCount", 5);
    const [wbSAWOriCount, setwbSAWOriCountState] = useLocalStorage("wbSAWOriCount", 32);
    const [wbSAWRupeeCost, setwbSAWRupeeCost] = useLocalStorage("wbSAWRupeeCost", 30);

    const [shadowStaffCraftState, setShadowStaffCraftState] = useLocalStorage("shadowStaffCraftState", "grayscale(100%)")
    const [shadowStaffWeaponBonusState, setShadowStaffWeaponBonusState] = useLocalStorage("shadowStaffWeaponBonusState", "grayscale(100%)")
    const [shadowStaffWyrmprintSlotState, setShadowStaffWyrmprintSlotState] = useLocalStorage("shadowStaffWyrmprintSlotState", "grayscale(100%)")
    const [shadowStaffUnbindState, setShadowStaffUnbindState] = useLocalStorage("shadowStaffUnbindState", 0);
    const [shadowStaffRefineState, setShadowStaffRefineState] = useLocalStorage("shadowStaffRefineState", 0);

    const [mubSAStSilverMaskCount, setmubSAStSilverMaskCountState] = useLocalStorage("mubSAStSilverMaskCount", 516);
    const [mubSAStGoldMaskCount, setmubSAStGoldMaskCountState] = useLocalStorage("mubSAStASGoldMaskCount", 410);
    const [mubSAStInsanityCount, setmubSAStInsanityCountState] = useLocalStorage("mubSAStInsanityCount", 89);
    const [mubSAStGaleCount, setmubSAStGaleCountState] = useLocalStorage("mubSAStGaleCount", 30);
    const [mubSAStSandCount, setmubSAStSandCountState] = useLocalStorage("mubSAStSandCount", 5);
    const [mubSAStOriCount, setmubSAStOriCountState] = useLocalStorage("mubSAStOriCount", 66);
    const [mubSAStRupeeCost, setmubSAStRupeeCost] = useLocalStorage("mubSAStRupeeCost", 59.5);

    const [wbSAStSilverMaskCount, setwbSAStSilverMaskCountState] = useLocalStorage("wbSAStSilverMaskCount", 332);
    const [wbSAStGoldMaskCount, setwbSAStGoldMaskCountState] = useLocalStorage("wbSAStGoldMaskCount", 270);
    const [wbSAStInsanityCount, setwbSAStInsanityCountState] = useLocalStorage("wbSAStInsanityCount", 28);
    const [wbSAStSandCount, setwbSAStSandCountState] = useLocalStorage("wbSAStSandCount", 5);
    const [wbSAStOriCount, setwbSAStOriCountState] = useLocalStorage("wbSAStOriCount", 32);
    const [wbSAStRupeeCost, setwbSAStRupeeCost] = useLocalStorage("wbSAStRupeeCost", 30);

    const [shadowManacasterCraftState, setShadowManacasterCraftState] = useLocalStorage("shadowManacasterCraftState", "grayscale(100%)")
    const [shadowManacasterWeaponBonusState, setShadowManacasterWeaponBonusState] = useLocalStorage("shadowManacasterWeaponBonusState", "grayscale(100%)")
    const [shadowManacasterWyrmprintSlotState, setShadowManacasterWyrmprintSlotState] = useLocalStorage("shadowManacasterWyrmprintSlotState", "grayscale(100%)")
    const [shadowManacasterUnbindState, setShadowManacasterUnbindState] = useLocalStorage("shadowManacasterUnbindState", 0);
    const [shadowManacasterRefineState, setShadowManacasterRefineState] = useLocalStorage("shadowManacasterRefineState", 0);

    const [mubSAMSilverMaskCount, setmubSAMSilverMaskCountState] = useLocalStorage("mubSAMSilverMaskCount", 516);
    const [mubSAMGoldMaskCount, setmubSAMGoldMaskCountState] = useLocalStorage("mubSAMASGoldMaskCount", 410);
    const [mubSAMInsanityCount, setmubSAMInsanityCountState] = useLocalStorage("mubSAMInsanityCount", 89);
    const [mubSAMGaleCount, setmubSAMGaleCountState] = useLocalStorage("mubSAMGaleCount", 30);
    const [mubSAMSandCount, setmubSAMSandCountState] = useLocalStorage("mubSAMSandCount", 5);
    const [mubSAMOriCount, setmubSAMOriCountState] = useLocalStorage("mubSAMOriCount", 66);
    const [mubSAMRupeeCost, setmubSAMRupeeCost] = useLocalStorage("mubSAMRupeeCost", 59.5);

    const [wbSAMSilverMaskCount, setwbSAMSilverMaskCountState] = useLocalStorage("wbSAMSilverMaskCount", 332);
    const [wbSAMGoldMaskCount, setwbSAMGoldMaskCountState] = useLocalStorage("wbSAMGoldMaskCount", 270);
    const [wbSAMInsanityCount, setwbSAMInsanityCountState] = useLocalStorage("wbSAMInsanityCount", 28);
    const [wbSAMSandCount, setwbSAMSandCountState] = useLocalStorage("wbSAMSandCount", 5);
    const [wbSAMOriCount, setwbSAMOriCountState] = useLocalStorage("wbSAMOriCount", 32);
    const [wbSAMRupeeCost, setwbSAMRupeeCost] = useLocalStorage("wbSAMRupeeCost", 30);

    function useLocalStorage(key, initialValue) {
        const [storedValue, setStoredValue] = useState(() => {
            try {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            } catch (error) {
                console.log(error);
                return initialValue;
            }
        });
        const setValue = value => {
            try {
                const valueToStore =
                    value instanceof Function ? value(storedValue) : value;
                setStoredValue(valueToStore);
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            } catch (error) {
                console.log(error);
            }
        };

        return [storedValue, setValue];
    }

    function shadowWeaponSelection() {
        if (shadowWeaponChoice == "sword") {
            return <ShadowAgitoSwordCost mubSASSilverMaskCount={mubSASSilverMaskCount} mubSASGoldMaskCount={mubSASGoldMaskCount} mubSASInsanityCount={mubSASInsanityCount} mubSASGaleCount={mubSASGaleCount} mubSASSandCount={mubSASSandCount} mubSASOriCount={mubSASOriCount} mubSASRupeeCost={mubSASRupeeCost} wbSASSilverMaskCount={wbSASSilverMaskCount} wbSASGoldMaskCount={wbSASGoldMaskCount} wbSASInsanityCount={wbSASInsanityCount} wbSASSandCount={wbSASSandCount} wbSASOriCount={wbSASOriCount} wbSASRupeeCost={wbSASRupeeCost} />
        }
        if (shadowWeaponChoice == "blade") {
            return <ShadowAgitoBladeCost mubSABlSilverMaskCount={mubSABlSilverMaskCount} mubSABlGoldMaskCount={mubSABlGoldMaskCount} mubSABlInsanityCount={mubSABlInsanityCount} mubSABlGaleCount={mubSABlGaleCount} mubSABlSandCount={mubSABlSandCount} mubSABlOriCount={mubSABlOriCount} mubSABlRupeeCost={mubSABlRupeeCost} wbSABlSilverMaskCount={wbSABlSilverMaskCount} wbSABlGoldMaskCount={wbSABlGoldMaskCount} wbSABlInsanityCount={wbSABlInsanityCount} wbSABlSandCount={wbSABlSandCount} wbSABlOriCount={wbSABlOriCount} wbSABlRupeeCost={wbSABlRupeeCost} />
        }
        if (shadowWeaponChoice == "dagger") {
            return <ShadowAgitoDaggerCost mubSADSilverMaskCount={mubSADSilverMaskCount} mubSADGoldMaskCount={mubSADGoldMaskCount} mubSADInsanityCount={mubSADInsanityCount} mubSADGaleCount={mubSADGaleCount} mubSADSandCount={mubSADSandCount} mubSADOriCount={mubSADOriCount} mubSADRupeeCost={mubSADRupeeCost} wbSADSilverMaskCount={wbSADSilverMaskCount} wbSADGoldMaskCount={wbSADGoldMaskCount} wbSADInsanityCount={wbSADInsanityCount} wbSADSandCount={wbSADSandCount} wbSADOriCount={wbSADOriCount} wbSADRupeeCost={wbSADRupeeCost} />
        }
        if (shadowWeaponChoice == "axe") {
            return <ShadowAgitoAxeCost mubSAASilverMaskCount={mubSAASilverMaskCount} mubSAAGoldMaskCount={mubSAAGoldMaskCount} mubSAAInsanityCount={mubSAAInsanityCount} mubSAAGaleCount={mubSAAGaleCount} mubSAASandCount={mubSAASandCount} mubSAAOriCount={mubSAAOriCount} mubSAARupeeCost={mubSAARupeeCost} wbSAASilverMaskCount={wbSAASilverMaskCount} wbSAAGoldMaskCount={wbSAAGoldMaskCount} wbSAAInsanityCount={wbSAAInsanityCount} wbSAASandCount={wbSAASandCount} wbSAAOriCount={wbSAAOriCount} wbSAARupeeCost={wbSAARupeeCost} />
        }
        if (shadowWeaponChoice == "lance") {
            return <ShadowAgitoLanceCost mubSALSilverMaskCount={mubSALSilverMaskCount} mubSALGoldMaskCount={mubSALGoldMaskCount} mubSALInsanityCount={mubSALInsanityCount} mubSALGaleCount={mubSALGaleCount} mubSALSandCount={mubSALSandCount} mubSALOriCount={mubSALOriCount} mubSALRupeeCost={mubSALRupeeCost} wbSALSilverMaskCount={wbSALSilverMaskCount} wbSALGoldMaskCount={wbSALGoldMaskCount} wbSALInsanityCount={wbSALInsanityCount} wbSALSandCount={wbSALSandCount} wbSALOriCount={wbSALOriCount} wbSALRupeeCost={wbSALRupeeCost} />
        }
        if (shadowWeaponChoice == "bow") {
            return <ShadowAgitoBowCost mubSABoSilverMaskCount={mubSABoSilverMaskCount} mubSABoGoldMaskCount={mubSABoGoldMaskCount} mubSABoInsanityCount={mubSABoInsanityCount} mubSABoGaleCount={mubSABoGaleCount} mubSABoSandCount={mubSABoSandCount} mubSABoOriCount={mubSABoOriCount} mubSABoRupeeCost={mubSABoRupeeCost} wbSABoSilverMaskCount={wbSABoSilverMaskCount} wbSABoGoldMaskCount={wbSABoGoldMaskCount} wbSABoInsanityCount={wbSABoInsanityCount} wbSABoSandCount={wbSABoSandCount} wbSABoOriCount={wbSABoOriCount} wbSABoRupeeCost={wbSABoRupeeCost} />
        }
        if (shadowWeaponChoice == "wand") {
            return <ShadowAgitoWandCost mubSAWSilverMaskCount={mubSAWSilverMaskCount} mubSAWGoldMaskCount={mubSAWGoldMaskCount} mubSAWInsanityCount={mubSAWInsanityCount} mubSAWGaleCount={mubSAWGaleCount} mubSAWSandCount={mubSAWSandCount} mubSAWOriCount={mubSAWOriCount} mubSAWRupeeCost={mubSAWRupeeCost} wbSAWSilverMaskCount={wbSAWSilverMaskCount} wbSAWGoldMaskCount={wbSAWGoldMaskCount} wbSAWInsanityCount={wbSAWInsanityCount} wbSAWSandCount={wbSAWSandCount} wbSAWOriCount={wbSAWOriCount} wbSAWRupeeCost={wbSAWRupeeCost} />
        }
        if (shadowWeaponChoice == "staff") {
            return <ShadowAgitoStaffCost mubSAStSilverMaskCount={mubSAStSilverMaskCount} mubSAStGoldMaskCount={mubSAStGoldMaskCount} mubSAStInsanityCount={mubSAStInsanityCount} mubSAStGaleCount={mubSAStGaleCount} mubSAStSandCount={mubSAStSandCount} mubSAStOriCount={mubSAStOriCount} mubSAStRupeeCost={mubSAStRupeeCost} wbSAStSilverMaskCount={wbSAStSilverMaskCount} wbSAStGoldMaskCount={wbSAStGoldMaskCount} wbSAStInsanityCount={wbSAStInsanityCount} wbSAStSandCount={wbSAStSandCount} wbSAStOriCount={wbSAStOriCount} wbSAStRupeeCost={wbSAStRupeeCost} />
        }
        if (shadowWeaponChoice == "manacaster") {
            return <ShadowAgitoManacasterCost mubSAMSilverMaskCount={mubSAMSilverMaskCount} mubSAMGoldMaskCount={mubSAMGoldMaskCount} mubSAMInsanityCount={mubSAMInsanityCount} mubSAMGaleCount={mubSAMGaleCount} mubSAMSandCount={mubSAMSandCount} mubSAMOriCount={mubSAMOriCount} mubSAMRupeeCost={mubSAMRupeeCost} wbSAMSilverMaskCount={wbSAMSilverMaskCount} wbSAMGoldMaskCount={wbSAMGoldMaskCount} wbSAMInsanityCount={wbSAMInsanityCount} wbSAMSandCount={wbSAMSandCount} wbSAMOriCount={wbSAMOriCount} wbSAMRupeeCost={wbSAMRupeeCost} />
        }
    }

    function craftShadowSword() {
        if (shadowSwordCraftState == "grayscale(100%)") {
            setShadowSwordCraftState("grayscale(0%)")
            setShadowWeaponChoiceState("sword")
            setmubSASSilverMaskCountState(mubSASSilverMaskCount - 40)
            setwbSASSilverMaskCountState(wbSASSilverMaskCount - 40)
            setmubSASGoldMaskCountState(mubSASGoldMaskCount - 30)
            setwbSASGoldMaskCountState(wbSASGoldMaskCount - 30)
            setmubSASSandCountState(mubSASSandCount - 1)
            setwbSASSandCountState(wbSASSandCount - 1)
            setmubSASRupeeCost(mubSASRupeeCost - 2)
            setwbSASRupeeCost(wbSASRupeeCost - 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
            setallmubSASandCount(allmubSASandCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2)
        }
        else if (shadowSwordCraftState == "grayscale(0%)") {
            setShadowSwordCraftState("grayscale(100%)")
            setShadowWeaponChoiceState("sword")
            setmubSASSilverMaskCountState(mubSASSilverMaskCount + 40)
            setwbSASSilverMaskCountState(wbSASSilverMaskCount + 40)
            setmubSASGoldMaskCountState(mubSASGoldMaskCount + 30)
            setwbSASGoldMaskCountState(wbSASGoldMaskCount + 30)
            setmubSASSandCountState(mubSASSandCount + 1)
            setwbSASSandCountState(wbSASSandCount + 1)
            setmubSASRupeeCost(mubSASRupeeCost + 2)
            setwbSASRupeeCost(wbSASRupeeCost + 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
            setallmubSASandCount(allmubSASandCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2)
        }
    }

    function shadowSwordWeaponBonus() {
        if (shadowSwordWeaponBonusState == "grayscale(100%)") {
            setShadowSwordWeaponBonusState("grayscale(0%)");
            setShadowWeaponChoiceState("sword");
            setmubSASSilverMaskCountState(mubSASSilverMaskCount - 100)
            setwbSASSilverMaskCountState(wbSASSilverMaskCount - 100)
            setmubSASGoldMaskCountState(mubSASGoldMaskCount - 100)
            setwbSASGoldMaskCountState(wbSASGoldMaskCount - 100)
            setmubSASInsanityCountState(mubSASInsanityCount - 14)
            setwbSASInsanityCountState(wbSASInsanityCount - 14)
            setmubSASOriCountState(mubSASOriCount - 30)
            setwbSASOriCountState(wbSASOriCount - 30)
            setmubSASRupeeCost(mubSASRupeeCost - 10)
            setwbSASRupeeCost(wbSASRupeeCost - 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 100)
            setallmubSAInsanityCount(allmubSAInsanityCount - 14)
            setallmubSAOriCount(allmubSAOriCount - 30)
            setallmubSARupeeCost(allmubSARupeeCost - 10)
        }
        else if (shadowSwordWeaponBonusState == "grayscale(0%)") {
            setShadowSwordWeaponBonusState("grayscale(100%)");
            setShadowWeaponChoiceState("sword");
            setmubSASSilverMaskCountState(mubSASSilverMaskCount + 100)
            setwbSASSilverMaskCountState(wbSASSilverMaskCount + 100)
            setmubSASGoldMaskCountState(mubSASGoldMaskCount + 100)
            setwbSASGoldMaskCountState(wbSASGoldMaskCount + 100)
            setmubSASInsanityCountState(mubSASInsanityCount + 14)
            setwbSASInsanityCountState(wbSASInsanityCount + 14)
            setmubSASOriCountState(mubSASOriCount + 30)
            setwbSASOriCountState(wbSASOriCount + 30)
            setmubSASRupeeCost(mubSASRupeeCost + 10)
            setwbSASRupeeCost(wbSASRupeeCost + 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 100)
            setallmubSAInsanityCount(allmubSAInsanityCount + 14)
            setallmubSAOriCount(allmubSAOriCount + 30)
            setallmubSARupeeCost(allmubSARupeeCost + 10)
        }
    }

    function shadowSwordWyrmprintSlot() {
        if (shadowSwordWyrmprintSlotState == "grayscale(100%)") {
            setShadowSwordWyrmprintSlotState("grayscale(0%)");
            setShadowWeaponChoiceState("sword");
            setmubSASSilverMaskCountState(mubSASSilverMaskCount - 16)
            setmubSASGoldMaskCountState(mubSASGoldMaskCount - 10)
            setmubSASOriCountState(mubSASOriCount - 1)
            setmubSASRupeeCost(mubSASRupeeCost - 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
            setallmubSAOriCount(allmubSAOriCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2.5)
        }
        else if (shadowSwordWyrmprintSlotState == "grayscale(0%)") {
            setShadowSwordWyrmprintSlotState("grayscale(100%)");
            setShadowWeaponChoiceState("sword");
            setmubSASSilverMaskCountState(mubSASSilverMaskCount + 16)
            setmubSASGoldMaskCountState(mubSASGoldMaskCount + 10)
            setmubSASOriCountState(mubSASOriCount + 1)
            setmubSASRupeeCost(mubSASRupeeCost + 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
            setallmubSAOriCount(allmubSAOriCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2.5)
        }
    }

    function handleShadowSwordUnbindIncrement(event) {
        setShadowWeaponChoiceState("sword");
        if (shadowSwordUnbindState < event.target.value) {
            if (event.target.value - shadowSwordUnbindState == 1) {
                setShadowSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubSASSilverMaskCountState(mubSASSilverMaskCount - 40)
                    setwbSASSilverMaskCountState(wbSASSilverMaskCount - 40)
                    setmubSASGoldMaskCountState(mubSASGoldMaskCount - 30)
                    setwbSASGoldMaskCountState(wbSASGoldMaskCount - 30)
                    setmubSASSandCountState(mubSASSandCount - 1)
                    setwbSASSandCountState(wbSASSandCount - 1)
                    setmubSASRupeeCost(mubSASRupeeCost - 2)
                    setwbSASRupeeCost(wbSASRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSASandCount(allmubSASandCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubSASSilverMaskCountState(mubSASSilverMaskCount - 16)
                    setwbSASSilverMaskCountState(wbSASSilverMaskCount - 16)
                    setmubSASGoldMaskCountState(mubSASGoldMaskCount - 10)
                    setwbSASGoldMaskCountState(wbSASGoldMaskCount - 10)
                    setmubSASInsanityCountState(mubSASInsanityCount - 7)
                    setwbSASInsanityCountState(wbSASInsanityCount - 7)
                    setmubSASOriCountState(mubSASOriCount - 1)
                    setwbSASOriCountState(wbSASOriCount - 1)
                    setmubSASRupeeCost(mubSASRupeeCost - 7.5)
                    setwbSASRupeeCost(wbSASRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubSASSilverMaskCountState(mubSASSilverMaskCount - 16)
                    setmubSASGoldMaskCountState(mubSASGoldMaskCount - 10)
                    setmubSASInsanityCountState(mubSASInsanityCount - 7)
                    setmubSASOriCountState(mubSASOriCount - 1)
                    setmubSASRupeeCost(mubSASRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubSASSilverMaskCountState(mubSASSilverMaskCount - 80)
                    setmubSASGoldMaskCountState(mubSASGoldMaskCount - 70)
                    setmubSASInsanityCountState(mubSASInsanityCount - 30)
                    setmubSASGaleCountState(mubSASGaleCount - 20)
                    setmubSASOriCountState(mubSASOriCount - 20)
                    setmubSASRupeeCost(mubSASRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 30)
                    setallmubSAGaleCount(allmubSAGaleCount - 20)
                    setallmubSAOriCount(allmubSAOriCount - 20)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
            }
        }
        else if (shadowSwordUnbindState > event.target.value) {
            if (shadowSwordUnbindState - event.target.value == 1) {
                setShadowSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubSASSilverMaskCountState(mubSASSilverMaskCount + 40)
                    setwbSASSilverMaskCountState(wbSASSilverMaskCount + 40)
                    setmubSASGoldMaskCountState(mubSASGoldMaskCount + 30)
                    setwbSASGoldMaskCountState(wbSASGoldMaskCount + 30)
                    setmubSASSandCountState(mubSASSandCount + 1)
                    setwbSASSandCountState(wbSASSandCount + 1)
                    setmubSASRupeeCost(mubSASRupeeCost + 2)
                    setwbSASRupeeCost(wbSASRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSASandCount(allmubSASandCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubSASSilverMaskCountState(mubSASSilverMaskCount + 16)
                    setwbSASSilverMaskCountState(wbSASSilverMaskCount + 16)
                    setmubSASGoldMaskCountState(mubSASGoldMaskCount + 10)
                    setwbSASGoldMaskCountState(wbSASGoldMaskCount + 10)
                    setmubSASInsanityCountState(mubSASInsanityCount + 7)
                    setwbSASInsanityCountState(wbSASInsanityCount + 7)
                    setmubSASOriCountState(mubSASOriCount + 1)
                    setwbSASOriCountState(wbSASOriCount + 1)
                    setmubSASRupeeCost(mubSASRupeeCost + 7.5)
                    setwbSASRupeeCost(wbSASRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubSASSilverMaskCountState(mubSASSilverMaskCount + 16)
                    setmubSASGoldMaskCountState(mubSASGoldMaskCount + 10)
                    setmubSASInsanityCountState(mubSASInsanityCount + 7)
                    setmubSASOriCountState(mubSASOriCount + 1)
                    setmubSASRupeeCost(mubSASRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubSASSilverMaskCountState(mubSASSilverMaskCount + 80)
                    setmubSASGoldMaskCountState(mubSASGoldMaskCount + 70)
                    setmubSASInsanityCountState(mubSASInsanityCount + 30)
                    setmubSASGaleCountState(mubSASGaleCount + 20)
                    setmubSASOriCountState(mubSASOriCount + 20)
                    setmubSASRupeeCost(mubSASRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 30)
                    setallmubSAGaleCount(allmubSAGaleCount + 20)
                    setallmubSAOriCount(allmubSAOriCount + 20)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
            }
        }
    }

    function handleShadowSwordRefineIncrement(event) {
        setShadowWeaponChoiceState("sword");
        if (shadowSwordRefineState < event.target.value) {
            if (event.target.value - shadowSwordRefineState == 1) {
                setShadowSwordRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubSASSilverMaskCountState(mubSASSilverMaskCount - 16);
                    setwbSASSilverMaskCountState(wbSASSilverMaskCount - 16);
                    setmubSASGoldMaskCountState(mubSASGoldMaskCount - 10);
                    setwbSASGoldMaskCountState(wbSASGoldMaskCount - 10);
                    setmubSASInsanityCountState(mubSASInsanityCount - 7);
                    setwbSASInsanityCountState(wbSASInsanityCount - 7);
                    setmubSASOriCountState(mubSASOriCount - 1);
                    setwbSASOriCountState(wbSASOriCount - 1);
                    setmubSASRupeeCost(mubSASRupeeCost - 2.5);
                    setwbSASRupeeCost(wbSASRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubSASSilverMaskCountState(mubSASSilverMaskCount - 40)
                    setmubSASGoldMaskCountState(mubSASGoldMaskCount - 30);
                    setmubSASInsanityCountState(mubSASInsanityCount - 10);
                    setmubSASGaleCountState(mubSASGaleCount - 10);
                    setmubSASOriCountState(mubSASOriCount - 10);
                    setmubSASRupeeCost(mubSASRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 10)
                    setallmubSAGaleCount(allmubSAGaleCount - 10)
                    setallmubSAOriCount(allmubSAOriCount - 10)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
            }
        }
        else if (shadowSwordRefineState > event.target.value) {
            if (shadowSwordRefineState - event.target.value == 1) {
                setShadowSwordRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubSASSilverMaskCountState(mubSASSilverMaskCount + 16);
                    setwbSASSilverMaskCountState(wbSASSilverMaskCount + 16);
                    setmubSASGoldMaskCountState(mubSASGoldMaskCount + 10);
                    setwbSASGoldMaskCountState(wbSASGoldMaskCount + 10);
                    setmubSASInsanityCountState(mubSASInsanityCount + 7);
                    setwbSASInsanityCountState(wbSASInsanityCount + 7);
                    setmubSASOriCountState(mubSASOriCount + 1);
                    setwbSASOriCountState(wbSASOriCount + 1);
                    setmubSASRupeeCost(mubSASRupeeCost + 2.5);
                    setwbSASRupeeCost(wbSASRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubSASSilverMaskCountState(mubSASSilverMaskCount + 40)
                    setmubSASGoldMaskCountState(mubSASGoldMaskCount + 30);
                    setmubSASInsanityCountState(mubSASInsanityCount + 10);
                    setmubSASGaleCountState(mubSASGaleCount + 10);
                    setmubSASOriCountState(mubSASOriCount + 10);
                    setmubSASRupeeCost(mubSASRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 10)
                    setallmubSAGaleCount(allmubSAGaleCount + 10)
                    setallmubSAOriCount(allmubSAOriCount + 10)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
            }
        }
    }

    function craftShadowBlade() {
        if (shadowBladeCraftState == "grayscale(100%)") {
            setShadowBladeCraftState("grayscale(0%)")
            setShadowWeaponChoiceState("blade")
            setmubSABlSilverMaskCountState(mubSABlSilverMaskCount - 40)
            setwbSABlSilverMaskCountState(wbSABlSilverMaskCount - 40)
            setmubSABlGoldMaskCountState(mubSABlGoldMaskCount - 30)
            setwbSABlGoldMaskCountState(wbSABlGoldMaskCount - 30)
            setmubSABlSandCountState(mubSABlSandCount - 1)
            setwbSABlSandCountState(wbSABlSandCount - 1)
            setmubSABlRupeeCost(mubSABlRupeeCost - 2)
            setwbSABlRupeeCost(wbSABlRupeeCost - 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
            setallmubSASandCount(allmubSASandCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2)
        }
        else if (shadowBladeCraftState == "grayscale(0%)") {
            setShadowBladeCraftState("grayscale(100%)")
            setShadowWeaponChoiceState("blade")
            setmubSABlSilverMaskCountState(mubSABlSilverMaskCount + 40)
            setwbSABlSilverMaskCountState(wbSABlSilverMaskCount + 40)
            setmubSABlGoldMaskCountState(mubSABlGoldMaskCount + 30)
            setwbSABlGoldMaskCountState(wbSABlGoldMaskCount + 30)
            setmubSABlSandCountState(mubSABlSandCount + 1)
            setwbSABlSandCountState(wbSABlSandCount + 1)
            setmubSABlRupeeCost(mubSABlRupeeCost + 2)
            setwbSABlRupeeCost(wbSABlRupeeCost + 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
            setallmubSASandCount(allmubSASandCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2)
        }
    }

    function shadowBladeWeaponBonus() {
        if (shadowBladeWeaponBonusState == "grayscale(100%)") {
            setShadowBladeWeaponBonusState("grayscale(0%)");
            setShadowWeaponChoiceState("blade");
            setmubSABlSilverMaskCountState(mubSABlSilverMaskCount - 100)
            setwbSABlSilverMaskCountState(wbSABlSilverMaskCount - 100)
            setmubSABlGoldMaskCountState(mubSABlGoldMaskCount - 100)
            setwbSABlGoldMaskCountState(wbSABlGoldMaskCount - 100)
            setmubSABlInsanityCountState(mubSABlInsanityCount - 14)
            setwbSABlInsanityCountState(wbSABlInsanityCount - 14)
            setmubSABlOriCountState(mubSABlOriCount - 30)
            setwbSABlOriCountState(wbSABlOriCount - 30)
            setmubSABlRupeeCost(mubSABlRupeeCost - 10)
            setwbSABlRupeeCost(wbSABlRupeeCost - 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 100)
            setallmubSAInsanityCount(allmubSAInsanityCount - 14)
            setallmubSAOriCount(allmubSAOriCount - 30)
            setallmubSARupeeCost(allmubSARupeeCost - 10)
        }
        else if (shadowBladeWeaponBonusState == "grayscale(0%)") {
            setShadowBladeWeaponBonusState("grayscale(100%)");
            setShadowWeaponChoiceState("blade");
            setmubSABlSilverMaskCountState(mubSABlSilverMaskCount + 100)
            setwbSABlSilverMaskCountState(wbSABlSilverMaskCount + 100)
            setmubSABlGoldMaskCountState(mubSABlGoldMaskCount + 100)
            setwbSABlGoldMaskCountState(wbSABlGoldMaskCount + 100)
            setmubSABlInsanityCountState(mubSABlInsanityCount + 14)
            setwbSABlInsanityCountState(wbSABlInsanityCount + 14)
            setmubSABlOriCountState(mubSABlOriCount + 30)
            setwbSABlOriCountState(wbSABlOriCount + 30)
            setmubSABlRupeeCost(mubSABlRupeeCost + 10)
            setwbSABlRupeeCost(wbSABlRupeeCost + 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 100)
            setallmubSAInsanityCount(allmubSAInsanityCount + 14)
            setallmubSAOriCount(allmubSAOriCount + 30)
            setallmubSARupeeCost(allmubSARupeeCost + 10)
        }
    }

    function shadowBladeWyrmprintSlot() {
        if (shadowBladeWyrmprintSlotState == "grayscale(100%)") {
            setShadowBladeWyrmprintSlotState("grayscale(0%)");
            setShadowWeaponChoiceState("blade");
            setmubSABlSilverMaskCountState(mubSABlSilverMaskCount - 16)
            setmubSABlGoldMaskCountState(mubSABlGoldMaskCount - 10)
            setmubSABlOriCountState(mubSABlOriCount - 1)
            setmubSABlRupeeCost(mubSABlRupeeCost - 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
            setallmubSAOriCount(allmubSAOriCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2.5)
        }
        else if (shadowBladeWyrmprintSlotState == "grayscale(0%)") {
            setShadowBladeWyrmprintSlotState("grayscale(100%)");
            setShadowWeaponChoiceState("blade");
            setmubSABlSilverMaskCountState(mubSABlSilverMaskCount + 16)
            setmubSABlGoldMaskCountState(mubSABlGoldMaskCount + 10)
            setmubSABlOriCountState(mubSABlOriCount + 1)
            setmubSABlRupeeCost(mubSABlRupeeCost + 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
            setallmubSAOriCount(allmubSAOriCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2.5)
        }
    }

    function handleShadowBladeUnbindIncrement(event) {
        setShadowWeaponChoiceState("blade")
        if (shadowBladeUnbindState < event.target.value) {
            if (event.target.value - shadowBladeUnbindState == 1) {
                setShadowBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubSABlSilverMaskCountState(mubSABlSilverMaskCount - 40)
                    setwbSABlSilverMaskCountState(wbSABlSilverMaskCount - 40)
                    setmubSABlGoldMaskCountState(mubSABlGoldMaskCount - 30)
                    setwbSABlGoldMaskCountState(wbSABlGoldMaskCount - 30)
                    setmubSABlSandCountState(mubSABlSandCount - 1)
                    setwbSABlSandCountState(wbSABlSandCount - 1)
                    setmubSABlRupeeCost(mubSABlRupeeCost - 2)
                    setwbSABlRupeeCost(wbSABlRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSASandCount(allmubSASandCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubSABlSilverMaskCountState(mubSABlSilverMaskCount - 16)
                    setwbSABlSilverMaskCountState(wbSABlSilverMaskCount - 16)
                    setmubSABlGoldMaskCountState(mubSABlGoldMaskCount - 10)
                    setwbSABlGoldMaskCountState(wbSABlGoldMaskCount - 10)
                    setmubSABlInsanityCountState(mubSABlInsanityCount - 7)
                    setwbSABlInsanityCountState(wbSABlInsanityCount - 7)
                    setmubSABlOriCountState(mubSABlOriCount - 1)
                    setwbSABlOriCountState(wbSABlOriCount - 1)
                    setmubSABlRupeeCost(mubSABlRupeeCost - 7.5)
                    setwbSABlRupeeCost(wbSABlRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubSABlSilverMaskCountState(mubSABlSilverMaskCount - 16)
                    setmubSABlGoldMaskCountState(mubSABlGoldMaskCount - 10)
                    setmubSABlInsanityCountState(mubSABlInsanityCount - 7)
                    setmubSABlOriCountState(mubSABlOriCount - 1)
                    setmubSABlRupeeCost(mubSABlRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubSABlSilverMaskCountState(mubSABlSilverMaskCount - 80)
                    setmubSABlGoldMaskCountState(mubSABlGoldMaskCount - 70)
                    setmubSABlInsanityCountState(mubSABlInsanityCount - 30)
                    setmubSABlGaleCountState(mubSABlGaleCount - 20)
                    setmubSABlOriCountState(mubSABlOriCount - 20)
                    setmubSABlRupeeCost(mubSABlRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 30)
                    setallmubSAGaleCount(allmubSAGaleCount - 20)
                    setallmubSAOriCount(allmubSAOriCount - 20)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
            }
        }
        else if (shadowBladeUnbindState > event.target.value) {
            if (shadowBladeUnbindState - event.target.value == 1) {
                setShadowBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubSABlSilverMaskCountState(mubSABlSilverMaskCount + 40)
                    setwbSABlSilverMaskCountState(wbSABlSilverMaskCount + 40)
                    setmubSABlGoldMaskCountState(mubSABlGoldMaskCount + 30)
                    setwbSABlGoldMaskCountState(wbSABlGoldMaskCount + 30)
                    setmubSABlSandCountState(mubSABlSandCount + 1)
                    setwbSABlSandCountState(wbSABlSandCount + 1)
                    setmubSABlRupeeCost(mubSABlRupeeCost + 2)
                    setwbSABlRupeeCost(wbSABlRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSASandCount(allmubSASandCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubSABlSilverMaskCountState(mubSABlSilverMaskCount + 16)
                    setwbSABlSilverMaskCountState(wbSABlSilverMaskCount + 16)
                    setmubSABlGoldMaskCountState(mubSABlGoldMaskCount + 10)
                    setwbSABlGoldMaskCountState(wbSABlGoldMaskCount + 10)
                    setmubSABlInsanityCountState(mubSABlInsanityCount + 7)
                    setwbSABlInsanityCountState(wbSABlInsanityCount + 7)
                    setmubSABlOriCountState(mubSABlOriCount + 1)
                    setwbSABlOriCountState(wbSABlOriCount + 1)
                    setmubSABlRupeeCost(mubSABlRupeeCost + 7.5)
                    setwbSABlRupeeCost(wbSABlRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubSABlSilverMaskCountState(mubSABlSilverMaskCount + 16)
                    setmubSABlGoldMaskCountState(mubSABlGoldMaskCount + 10)
                    setmubSABlInsanityCountState(mubSABlInsanityCount + 7)
                    setmubSABlOriCountState(mubSABlOriCount + 1)
                    setmubSABlRupeeCost(mubSABlRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubSABlSilverMaskCountState(mubSABlSilverMaskCount + 80)
                    setmubSABlGoldMaskCountState(mubSABlGoldMaskCount + 70)
                    setmubSABlInsanityCountState(mubSABlInsanityCount + 30)
                    setmubSABlGaleCountState(mubSABlGaleCount + 20)
                    setmubSABlOriCountState(mubSABlOriCount + 20)
                    setmubSABlRupeeCost(mubSABlRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 30)
                    setallmubSAGaleCount(allmubSAGaleCount + 20)
                    setallmubSAOriCount(allmubSAOriCount + 20)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
            }
        }
    }

    function handleShadowBladeRefineIncrement(event) {
        setShadowWeaponChoiceState("blade");
        if (shadowBladeRefineState < event.target.value) {
            if (event.target.value - shadowBladeRefineState == 1) {
                setShadowBladeRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubSABlSilverMaskCountState(mubSABlSilverMaskCount - 16);
                    setwbSABlSilverMaskCountState(wbSABlSilverMaskCount - 16);
                    setmubSABlGoldMaskCountState(mubSABlGoldMaskCount - 10);
                    setwbSABlGoldMaskCountState(wbSABlGoldMaskCount - 10);
                    setmubSABlInsanityCountState(mubSABlInsanityCount - 7);
                    setwbSABlInsanityCountState(wbSABlInsanityCount - 7);
                    setmubSABlOriCountState(mubSABlOriCount - 1);
                    setwbSABlOriCountState(wbSABlOriCount - 1);
                    setmubSABlRupeeCost(mubSABlRupeeCost - 2.5);
                    setwbSABlRupeeCost(wbSABlRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubSABlSilverMaskCountState(mubSABlSilverMaskCount - 40)
                    setmubSABlGoldMaskCountState(mubSABlGoldMaskCount - 30);
                    setmubSABlInsanityCountState(mubSABlInsanityCount - 10);
                    setmubSABlGaleCountState(mubSABlGaleCount - 10);
                    setmubSABlOriCountState(mubSABlOriCount - 10);
                    setmubSABlRupeeCost(mubSABlRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 10)
                    setallmubSAGaleCount(allmubSAGaleCount - 10)
                    setallmubSAOriCount(allmubSAOriCount - 10)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
            }
        }
        else if (shadowBladeRefineState > event.target.value) {
            if (shadowBladeRefineState - event.target.value == 1) {
                setShadowBladeRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubSABlSilverMaskCountState(mubSABlSilverMaskCount + 16);
                    setwbSABlSilverMaskCountState(wbSABlSilverMaskCount + 16);
                    setmubSABlGoldMaskCountState(mubSABlGoldMaskCount + 10);
                    setwbSABlGoldMaskCountState(wbSABlGoldMaskCount + 10);
                    setmubSABlInsanityCountState(mubSABlInsanityCount + 7);
                    setwbSABlInsanityCountState(wbSABlInsanityCount + 7);
                    setmubSABlOriCountState(mubSABlOriCount + 1);
                    setwbSABlOriCountState(wbSABlOriCount + 1);
                    setmubSABlRupeeCost(mubSABlRupeeCost + 2.5);
                    setwbSABlRupeeCost(wbSABlRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubSABlSilverMaskCountState(mubSABlSilverMaskCount + 40)
                    setmubSABlGoldMaskCountState(mubSABlGoldMaskCount + 30);
                    setmubSABlInsanityCountState(mubSABlInsanityCount + 10);
                    setmubSABlGaleCountState(mubSABlGaleCount + 10);
                    setmubSABlOriCountState(mubSABlOriCount + 10);
                    setmubSABlRupeeCost(mubSABlRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 10)
                    setallmubSAGaleCount(allmubSAGaleCount + 10)
                    setallmubSAOriCount(allmubSAOriCount + 10)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
            }
        }
    }

    function craftShadowDagger() {
        if (shadowDaggerCraftState == "grayscale(100%)") {
            setShadowDaggerCraftState("grayscale(0%)")
            setShadowWeaponChoiceState("dagger")
            setmubSADSilverMaskCountState(mubSADSilverMaskCount - 40)
            setwbSADSilverMaskCountState(wbSADSilverMaskCount - 40)
            setmubSADGoldMaskCountState(mubSADGoldMaskCount - 30)
            setwbSADGoldMaskCountState(wbSADGoldMaskCount - 30)
            setmubSADSandCountState(mubSADSandCount - 1)
            setwbSADSandCountState(wbSADSandCount - 1)
            setmubSADRupeeCost(mubSADRupeeCost - 2)
            setwbSADRupeeCost(wbSADRupeeCost - 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
            setallmubSASandCount(allmubSASandCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2)
        }
        else if (shadowDaggerCraftState == "grayscale(0%)") {
            setShadowDaggerCraftState("grayscale(100%)")
            setShadowWeaponChoiceState("dagger")
            setmubSADSilverMaskCountState(mubSADSilverMaskCount + 40)
            setwbSADSilverMaskCountState(wbSADSilverMaskCount + 40)
            setmubSADGoldMaskCountState(mubSADGoldMaskCount + 30)
            setwbSADGoldMaskCountState(wbSADGoldMaskCount + 30)
            setmubSADSandCountState(mubSADSandCount + 1)
            setwbSADSandCountState(wbSADSandCount + 1)
            setmubSADRupeeCost(mubSADRupeeCost + 2)
            setwbSADRupeeCost(wbSADRupeeCost + 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
            setallmubSASandCount(allmubSASandCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2)
        }
    }

    function shadowDaggerWeaponBonus() {
        if (shadowDaggerWeaponBonusState == "grayscale(100%)") {
            setShadowDaggerWeaponBonusState("grayscale(0%)");
            setShadowWeaponChoiceState("dagger");
            setmubSADSilverMaskCountState(mubSADSilverMaskCount - 100)
            setwbSADSilverMaskCountState(wbSADSilverMaskCount - 100)
            setmubSADGoldMaskCountState(mubSADGoldMaskCount - 100)
            setwbSADGoldMaskCountState(wbSADGoldMaskCount - 100)
            setmubSADInsanityCountState(mubSADInsanityCount - 14)
            setwbSADInsanityCountState(wbSADInsanityCount - 14)
            setmubSADOriCountState(mubSADOriCount - 30)
            setwbSADOriCountState(wbSADOriCount - 30)
            setmubSADRupeeCost(mubSADRupeeCost - 10)
            setwbSADRupeeCost(wbSADRupeeCost - 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 100)
            setallmubSAInsanityCount(allmubSAInsanityCount - 14)
            setallmubSAOriCount(allmubSAOriCount - 30)
            setallmubSARupeeCost(allmubSARupeeCost - 10)
        }
        else if (shadowDaggerWeaponBonusState == "grayscale(0%)") {
            setShadowDaggerWeaponBonusState("grayscale(100%)");
            setShadowWeaponChoiceState("dagger");
            setmubSADSilverMaskCountState(mubSADSilverMaskCount + 100)
            setwbSADSilverMaskCountState(wbSADSilverMaskCount + 100)
            setmubSADGoldMaskCountState(mubSADGoldMaskCount + 100)
            setwbSADGoldMaskCountState(wbSADGoldMaskCount + 100)
            setmubSADInsanityCountState(mubSADInsanityCount + 14)
            setwbSADInsanityCountState(wbSADInsanityCount + 14)
            setmubSADOriCountState(mubSADOriCount + 30)
            setwbSADOriCountState(wbSADOriCount + 30)
            setmubSADRupeeCost(mubSADRupeeCost + 10)
            setwbSADRupeeCost(wbSADRupeeCost + 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 100)
            setallmubSAInsanityCount(allmubSAInsanityCount + 14)
            setallmubSAOriCount(allmubSAOriCount + 30)
            setallmubSARupeeCost(allmubSARupeeCost + 10)
        }
    }

    function shadowDaggerWyrmprintSlot() {
        if (shadowDaggerWyrmprintSlotState == "grayscale(100%)") {
            setShadowDaggerWyrmprintSlotState("grayscale(0%)");
            setShadowWeaponChoiceState("dagger");
            setmubSADSilverMaskCountState(mubSADSilverMaskCount - 16)
            setmubSADGoldMaskCountState(mubSADGoldMaskCount - 10)
            setmubSADOriCountState(mubSADOriCount - 1)
            setmubSADRupeeCost(mubSADRupeeCost - 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
            setallmubSAOriCount(allmubSAOriCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2.5)
        }
        else if (shadowDaggerWyrmprintSlotState == "grayscale(0%)") {
            setShadowDaggerWyrmprintSlotState("grayscale(100%)");
            setShadowWeaponChoiceState("dagger");
            setmubSADSilverMaskCountState(mubSADSilverMaskCount + 16)
            setmubSADGoldMaskCountState(mubSADGoldMaskCount + 10)
            setmubSADOriCountState(mubSADOriCount + 1)
            setmubSADRupeeCost(mubSADRupeeCost + 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
            setallmubSAOriCount(allmubSAOriCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2.5)
        }
    }

    function handleShadowDaggerUnbindIncrement(event) {
        setShadowWeaponChoiceState("dagger")
        if (shadowDaggerUnbindState < event.target.value) {
            if (event.target.value - shadowDaggerUnbindState == 1) {
                setShadowDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubSADSilverMaskCountState(mubSADSilverMaskCount - 40)
                    setwbSADSilverMaskCountState(wbSADSilverMaskCount - 40)
                    setmubSADGoldMaskCountState(mubSADGoldMaskCount - 30)
                    setwbSADGoldMaskCountState(wbSADGoldMaskCount - 30)
                    setmubSADSandCountState(mubSADSandCount - 1)
                    setwbSADSandCountState(wbSADSandCount - 1)
                    setmubSADRupeeCost(mubSADRupeeCost - 2)
                    setwbSADRupeeCost(wbSADRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSASandCount(allmubSASandCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubSADSilverMaskCountState(mubSADSilverMaskCount - 16)
                    setwbSADSilverMaskCountState(wbSADSilverMaskCount - 16)
                    setmubSADGoldMaskCountState(mubSADGoldMaskCount - 10)
                    setwbSADGoldMaskCountState(wbSADGoldMaskCount - 10)
                    setmubSADInsanityCountState(mubSADInsanityCount - 7)
                    setwbSADInsanityCountState(wbSADInsanityCount - 7)
                    setmubSADOriCountState(mubSADOriCount - 1)
                    setwbSADOriCountState(wbSADOriCount - 1)
                    setmubSADRupeeCost(mubSADRupeeCost - 7.5)
                    setwbSADRupeeCost(wbSADRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubSADSilverMaskCountState(mubSADSilverMaskCount - 16)
                    setmubSADGoldMaskCountState(mubSADGoldMaskCount - 10)
                    setmubSADInsanityCountState(mubSADInsanityCount - 7)
                    setmubSADOriCountState(mubSADOriCount - 1)
                    setmubSADRupeeCost(mubSADRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubSADSilverMaskCountState(mubSADSilverMaskCount - 80)
                    setmubSADGoldMaskCountState(mubSADGoldMaskCount - 70)
                    setmubSADInsanityCountState(mubSADInsanityCount - 30)
                    setmubSADGaleCountState(mubSADGaleCount - 20)
                    setmubSADOriCountState(mubSADOriCount - 20)
                    setmubSADRupeeCost(mubSADRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 30)
                    setallmubSAGaleCount(allmubSAGaleCount - 20)
                    setallmubSAOriCount(allmubSAOriCount - 20)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
            }
        }
        else if (shadowDaggerUnbindState > event.target.value) {
            if (shadowDaggerUnbindState - event.target.value == 1) {
                setShadowDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubSADSilverMaskCountState(mubSADSilverMaskCount + 40)
                    setwbSADSilverMaskCountState(wbSADSilverMaskCount + 40)
                    setmubSADGoldMaskCountState(mubSADGoldMaskCount + 30)
                    setwbSADGoldMaskCountState(wbSADGoldMaskCount + 30)
                    setmubSADSandCountState(mubSADSandCount + 1)
                    setwbSADSandCountState(wbSADSandCount + 1)
                    setmubSADRupeeCost(mubSADRupeeCost + 2)
                    setwbSADRupeeCost(wbSADRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSASandCount(allmubSASandCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubSADSilverMaskCountState(mubSADSilverMaskCount + 16)
                    setwbSADSilverMaskCountState(wbSADSilverMaskCount + 16)
                    setmubSADGoldMaskCountState(mubSADGoldMaskCount + 10)
                    setwbSADGoldMaskCountState(wbSADGoldMaskCount + 10)
                    setmubSADInsanityCountState(mubSADInsanityCount + 7)
                    setwbSADInsanityCountState(wbSADInsanityCount + 7)
                    setmubSADOriCountState(mubSADOriCount + 1)
                    setwbSADOriCountState(wbSADOriCount + 1)
                    setmubSADRupeeCost(mubSADRupeeCost + 7.5)
                    setwbSADRupeeCost(wbSADRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubSADSilverMaskCountState(mubSADSilverMaskCount + 16)
                    setmubSADGoldMaskCountState(mubSADGoldMaskCount + 10)
                    setmubSADInsanityCountState(mubSADInsanityCount + 7)
                    setmubSADOriCountState(mubSADOriCount + 1)
                    setmubSADRupeeCost(mubSADRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubSADSilverMaskCountState(mubSADSilverMaskCount + 80)
                    setmubSADGoldMaskCountState(mubSADGoldMaskCount + 70)
                    setmubSADInsanityCountState(mubSADInsanityCount + 30)
                    setmubSADGaleCountState(mubSADGaleCount + 20)
                    setmubSADOriCountState(mubSADOriCount + 20)
                    setmubSADRupeeCost(mubSADRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 30)
                    setallmubSAGaleCount(allmubSAGaleCount + 20)
                    setallmubSAOriCount(allmubSAOriCount + 20)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
            }
        }
    }

    function handleShadowDaggerRefineIncrement(event) {
        setShadowWeaponChoiceState("dagger");
        if (shadowDaggerRefineState < event.target.value) {
            if (event.target.value - shadowDaggerRefineState == 1) {
                setShadowDaggerRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubSADSilverMaskCountState(mubSADSilverMaskCount - 16);
                    setwbSADSilverMaskCountState(wbSADSilverMaskCount - 16);
                    setmubSADGoldMaskCountState(mubSADGoldMaskCount - 10);
                    setwbSADGoldMaskCountState(wbSADGoldMaskCount - 10);
                    setmubSADInsanityCountState(mubSADInsanityCount - 7);
                    setwbSADInsanityCountState(wbSADInsanityCount - 7);
                    setmubSADOriCountState(mubSADOriCount - 1);
                    setwbSADOriCountState(wbSADOriCount - 1);
                    setmubSADRupeeCost(mubSADRupeeCost - 2.5);
                    setwbSADRupeeCost(wbSADRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubSADSilverMaskCountState(mubSADSilverMaskCount - 40)
                    setmubSADGoldMaskCountState(mubSADGoldMaskCount - 30);
                    setmubSADInsanityCountState(mubSADInsanityCount - 10);
                    setmubSADGaleCountState(mubSADGaleCount - 10);
                    setmubSADOriCountState(mubSADOriCount - 10);
                    setmubSADRupeeCost(mubSADRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 10)
                    setallmubSAGaleCount(allmubSAGaleCount - 10)
                    setallmubSAOriCount(allmubSAOriCount - 10)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
            }
        }
        else if (shadowDaggerRefineState > event.target.value) {
            if (shadowDaggerRefineState - event.target.value == 1) {
                setShadowDaggerRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubSADSilverMaskCountState(mubSADSilverMaskCount + 16);
                    setwbSADSilverMaskCountState(wbSADSilverMaskCount + 16);
                    setmubSADGoldMaskCountState(mubSADGoldMaskCount + 10);
                    setwbSADGoldMaskCountState(wbSADGoldMaskCount + 10);
                    setmubSADInsanityCountState(mubSADInsanityCount + 7);
                    setwbSADInsanityCountState(wbSADInsanityCount + 7);
                    setmubSADOriCountState(mubSADOriCount + 1);
                    setwbSADOriCountState(wbSADOriCount + 1);
                    setmubSADRupeeCost(mubSADRupeeCost + 2.5);
                    setwbSADRupeeCost(wbSADRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubSADSilverMaskCountState(mubSADSilverMaskCount + 40)
                    setmubSADGoldMaskCountState(mubSADGoldMaskCount + 30);
                    setmubSADInsanityCountState(mubSADInsanityCount + 10);
                    setmubSADGaleCountState(mubSADGaleCount + 10);
                    setmubSADOriCountState(mubSADOriCount + 10);
                    setmubSADRupeeCost(mubSADRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 10)
                    setallmubSAGaleCount(allmubSAGaleCount + 10)
                    setallmubSAOriCount(allmubSAOriCount + 10)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
            }
        }
    }

    function craftShadowAxe() {
        if (shadowAxeCraftState == "grayscale(100%)") {
            setShadowAxeCraftState("grayscale(0%)")
            setShadowWeaponChoiceState("axe")
            setmubSAASilverMaskCountState(mubSAASilverMaskCount - 40)
            setwbSAASilverMaskCountState(wbSAASilverMaskCount - 40)
            setmubSAAGoldMaskCountState(mubSAAGoldMaskCount - 30)
            setwbSAAGoldMaskCountState(wbSAAGoldMaskCount - 30)
            setmubSAASandCountState(mubSAASandCount - 1)
            setwbSAASandCountState(wbSAASandCount - 1)
            setmubSAARupeeCost(mubSAARupeeCost - 2)
            setwbSAARupeeCost(wbSAARupeeCost - 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
            setallmubSASandCount(allmubSASandCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2)
        }
        else if (shadowAxeCraftState == "grayscale(0%)") {
            setShadowAxeCraftState("grayscale(100%)")
            setShadowWeaponChoiceState("axe")
            setmubSAASilverMaskCountState(mubSAASilverMaskCount + 40)
            setwbSAASilverMaskCountState(wbSAASilverMaskCount + 40)
            setmubSAAGoldMaskCountState(mubSAAGoldMaskCount + 30)
            setwbSAAGoldMaskCountState(wbSAAGoldMaskCount + 30)
            setmubSAASandCountState(mubSAASandCount + 1)
            setwbSAASandCountState(wbSAASandCount + 1)
            setmubSAARupeeCost(mubSAARupeeCost + 2)
            setwbSAARupeeCost(wbSAARupeeCost + 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
            setallmubSASandCount(allmubSASandCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2)
        }
    }

    function shadowAxeWeaponBonus() {
        if (shadowAxeWeaponBonusState == "grayscale(100%)") {
            setShadowAxeWeaponBonusState("grayscale(0%)");
            setShadowWeaponChoiceState("axe");
            setmubSAASilverMaskCountState(mubSAASilverMaskCount - 100)
            setwbSAASilverMaskCountState(wbSAASilverMaskCount - 100)
            setmubSAAGoldMaskCountState(mubSAAGoldMaskCount - 100)
            setwbSAAGoldMaskCountState(wbSAAGoldMaskCount - 100)
            setmubSAAInsanityCountState(mubSAAInsanityCount - 14)
            setwbSAAInsanityCountState(wbSAAInsanityCount - 14)
            setmubSAAOriCountState(mubSAAOriCount - 30)
            setwbSAAOriCountState(wbSAAOriCount - 30)
            setmubSAARupeeCost(mubSAARupeeCost - 10)
            setwbSAARupeeCost(wbSAARupeeCost - 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 100)
            setallmubSAInsanityCount(allmubSAInsanityCount - 14)
            setallmubSAOriCount(allmubSAOriCount - 30)
            setallmubSARupeeCost(allmubSARupeeCost - 10)
        }
        else if (shadowAxeWeaponBonusState == "grayscale(0%)") {
            setShadowAxeWeaponBonusState("grayscale(100%)");
            setShadowWeaponChoiceState("axe");
            setmubSAASilverMaskCountState(mubSAASilverMaskCount + 100)
            setwbSAASilverMaskCountState(wbSAASilverMaskCount + 100)
            setmubSAAGoldMaskCountState(mubSAAGoldMaskCount + 100)
            setwbSAAGoldMaskCountState(wbSAAGoldMaskCount + 100)
            setmubSAAInsanityCountState(mubSAAInsanityCount + 14)
            setwbSAAInsanityCountState(wbSAAInsanityCount + 14)
            setmubSAAOriCountState(mubSAAOriCount + 30)
            setwbSAAOriCountState(wbSAAOriCount + 30)
            setmubSAARupeeCost(mubSAARupeeCost + 10)
            setwbSAARupeeCost(wbSAARupeeCost + 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 100)
            setallmubSAInsanityCount(allmubSAInsanityCount + 14)
            setallmubSAOriCount(allmubSAOriCount + 30)
            setallmubSARupeeCost(allmubSARupeeCost + 10)
        }
    }

    function shadowAxeWyrmprintSlot() {
        if (shadowAxeWyrmprintSlotState == "grayscale(100%)") {
            setShadowAxeWyrmprintSlotState("grayscale(0%)");
            setShadowWeaponChoiceState("axe");
            setmubSAASilverMaskCountState(mubSAASilverMaskCount - 16)
            setmubSAAGoldMaskCountState(mubSAAGoldMaskCount - 10)
            setmubSAAOriCountState(mubSAAOriCount - 1)
            setmubSAARupeeCost(mubSAARupeeCost - 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
            setallmubSAOriCount(allmubSAOriCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2.5)
        }
        else if (shadowAxeWyrmprintSlotState == "grayscale(0%)") {
            setShadowAxeWyrmprintSlotState("grayscale(100%)");
            setShadowWeaponChoiceState("axe");
            setmubSAASilverMaskCountState(mubSAASilverMaskCount + 16)
            setmubSAAGoldMaskCountState(mubSAAGoldMaskCount + 10)
            setmubSAAOriCountState(mubSAAOriCount + 1)
            setmubSAARupeeCost(mubSAARupeeCost + 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
            setallmubSAOriCount(allmubSAOriCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2.5)
        }
    }

    function handleShadowAxeUnbindIncrement(event) {
        setShadowWeaponChoiceState("axe")
        if (shadowAxeUnbindState < event.target.value) {
            if (event.target.value - shadowAxeUnbindState == 1) {
                setShadowAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubSAASilverMaskCountState(mubSAASilverMaskCount - 40)
                    setwbSAASilverMaskCountState(wbSAASilverMaskCount - 40)
                    setmubSAAGoldMaskCountState(mubSAAGoldMaskCount - 30)
                    setwbSAAGoldMaskCountState(wbSAAGoldMaskCount - 30)
                    setmubSAASandCountState(mubSAASandCount - 1)
                    setwbSAASandCountState(wbSAASandCount - 1)
                    setmubSAARupeeCost(mubSAARupeeCost - 2)
                    setwbSAARupeeCost(wbSAARupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSASandCount(allmubSASandCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubSAASilverMaskCountState(mubSAASilverMaskCount - 16)
                    setwbSAASilverMaskCountState(wbSAASilverMaskCount - 16)
                    setmubSAAGoldMaskCountState(mubSAAGoldMaskCount - 10)
                    setwbSAAGoldMaskCountState(wbSAAGoldMaskCount - 10)
                    setmubSAAInsanityCountState(mubSAAInsanityCount - 7)
                    setwbSAAInsanityCountState(wbSAAInsanityCount - 7)
                    setmubSAAOriCountState(mubSAAOriCount - 1)
                    setwbSAAOriCountState(wbSAAOriCount - 1)
                    setmubSAARupeeCost(mubSAARupeeCost - 7.5)
                    setwbSAARupeeCost(wbSAARupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubSAASilverMaskCountState(mubSAASilverMaskCount - 16)
                    setmubSAAGoldMaskCountState(mubSAAGoldMaskCount - 10)
                    setmubSAAInsanityCountState(mubSAAInsanityCount - 7)
                    setmubSAAOriCountState(mubSAAOriCount - 1)
                    setmubSAARupeeCost(mubSAARupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubSAASilverMaskCountState(mubSAASilverMaskCount - 80)
                    setmubSAAGoldMaskCountState(mubSAAGoldMaskCount - 70)
                    setmubSAAInsanityCountState(mubSAAInsanityCount - 30)
                    setmubSAAGaleCountState(mubSAAGaleCount - 20)
                    setmubSAAOriCountState(mubSAAOriCount - 20)
                    setmubSAARupeeCost(mubSAARupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 30)
                    setallmubSAGaleCount(allmubSAGaleCount - 20)
                    setallmubSAOriCount(allmubSAOriCount - 20)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
            }
        }
        else if (shadowAxeUnbindState > event.target.value) {
            if (shadowAxeUnbindState - event.target.value == 1) {
                setShadowAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubSAASilverMaskCountState(mubSAASilverMaskCount + 40)
                    setwbSAASilverMaskCountState(wbSAASilverMaskCount + 40)
                    setmubSAAGoldMaskCountState(mubSAAGoldMaskCount + 30)
                    setwbSAAGoldMaskCountState(wbSAAGoldMaskCount + 30)
                    setmubSAASandCountState(mubSAASandCount + 1)
                    setwbSAASandCountState(wbSAASandCount + 1)
                    setmubSAARupeeCost(mubSAARupeeCost + 2)
                    setwbSAARupeeCost(wbSAARupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSASandCount(allmubSASandCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubSAASilverMaskCountState(mubSAASilverMaskCount + 16)
                    setwbSAASilverMaskCountState(wbSAASilverMaskCount + 16)
                    setmubSAAGoldMaskCountState(mubSAAGoldMaskCount + 10)
                    setwbSAAGoldMaskCountState(wbSAAGoldMaskCount + 10)
                    setmubSAAInsanityCountState(mubSAAInsanityCount + 7)
                    setwbSAAInsanityCountState(wbSAAInsanityCount + 7)
                    setmubSAAOriCountState(mubSAAOriCount + 1)
                    setwbSAAOriCountState(wbSAAOriCount + 1)
                    setmubSAARupeeCost(mubSAARupeeCost + 7.5)
                    setwbSAARupeeCost(wbSAARupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubSAASilverMaskCountState(mubSAASilverMaskCount + 16)
                    setmubSAAGoldMaskCountState(mubSAAGoldMaskCount + 10)
                    setmubSAAInsanityCountState(mubSAAInsanityCount + 7)
                    setmubSAAOriCountState(mubSAAOriCount + 1)
                    setmubSAARupeeCost(mubSAARupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubSAASilverMaskCountState(mubSAASilverMaskCount + 80)
                    setmubSAAGoldMaskCountState(mubSAAGoldMaskCount + 70)
                    setmubSAAInsanityCountState(mubSAAInsanityCount + 30)
                    setmubSAAGaleCountState(mubSAAGaleCount + 20)
                    setmubSAAOriCountState(mubSAAOriCount + 20)
                    setmubSAARupeeCost(mubSAARupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 30)
                    setallmubSAGaleCount(allmubSAGaleCount + 20)
                    setallmubSAOriCount(allmubSAOriCount + 20)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
            }
        }
    }

    function handleShadowAxeRefineIncrement(event) {
        setShadowWeaponChoiceState("axe");
        if (shadowAxeRefineState < event.target.value) {
            if (event.target.value - shadowAxeRefineState == 1) {
                setShadowAxeRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubSAASilverMaskCountState(mubSAASilverMaskCount - 16);
                    setwbSAASilverMaskCountState(wbSAASilverMaskCount - 16);
                    setmubSAAGoldMaskCountState(mubSAAGoldMaskCount - 10);
                    setwbSAAGoldMaskCountState(wbSAAGoldMaskCount - 10);
                    setmubSAAInsanityCountState(mubSAAInsanityCount - 7);
                    setwbSAAInsanityCountState(wbSAAInsanityCount - 7);
                    setmubSAAOriCountState(mubSAAOriCount - 1);
                    setwbSAAOriCountState(wbSAAOriCount - 1);
                    setmubSAARupeeCost(mubSAARupeeCost - 2.5);
                    setwbSAARupeeCost(wbSAARupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubSAASilverMaskCountState(mubSAASilverMaskCount - 40)
                    setmubSAAGoldMaskCountState(mubSAAGoldMaskCount - 30);
                    setmubSAAInsanityCountState(mubSAAInsanityCount - 10);
                    setmubSAAGaleCountState(mubSAAGaleCount - 10);
                    setmubSAAOriCountState(mubSAAOriCount - 10);
                    setmubSAARupeeCost(mubSAARupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 10)
                    setallmubSAGaleCount(allmubSAGaleCount - 10)
                    setallmubSAOriCount(allmubSAOriCount - 10)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
            }
        }
        else if (shadowAxeRefineState > event.target.value) {
            if (shadowAxeRefineState - event.target.value == 1) {
                setShadowAxeRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubSAASilverMaskCountState(mubSAASilverMaskCount + 16);
                    setwbSAASilverMaskCountState(wbSAASilverMaskCount + 16);
                    setmubSAAGoldMaskCountState(mubSAAGoldMaskCount + 10);
                    setwbSAAGoldMaskCountState(wbSAAGoldMaskCount + 10);
                    setmubSAAInsanityCountState(mubSAAInsanityCount + 7);
                    setwbSAAInsanityCountState(wbSAAInsanityCount + 7);
                    setmubSAAOriCountState(mubSAAOriCount + 1);
                    setwbSAAOriCountState(wbSAAOriCount + 1);
                    setmubSAARupeeCost(mubSAARupeeCost + 2.5);
                    setwbSAARupeeCost(wbSAARupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubSAASilverMaskCountState(mubSAASilverMaskCount + 40)
                    setmubSAAGoldMaskCountState(mubSAAGoldMaskCount + 30);
                    setmubSAAInsanityCountState(mubSAAInsanityCount + 10);
                    setmubSAAGaleCountState(mubSAAGaleCount + 10);
                    setmubSAAOriCountState(mubSAAOriCount + 10);
                    setmubSAARupeeCost(mubSAARupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 10)
                    setallmubSAGaleCount(allmubSAGaleCount + 10)
                    setallmubSAOriCount(allmubSAOriCount + 10)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
            }
        }
    }

    function craftShadowLance() {
        if (shadowLanceCraftState == "grayscale(100%)") {
            setShadowLanceCraftState("grayscale(0%)")
            setShadowWeaponChoiceState("lance")
            setmubSALSilverMaskCountState(mubSALSilverMaskCount - 40)
            setwbSALSilverMaskCountState(wbSALSilverMaskCount - 40)
            setmubSALGoldMaskCountState(mubSALGoldMaskCount - 30)
            setwbSALGoldMaskCountState(wbSALGoldMaskCount - 30)
            setmubSALSandCountState(mubSALSandCount - 1)
            setwbSALSandCountState(wbSALSandCount - 1)
            setmubSALRupeeCost(mubSALRupeeCost - 2)
            setwbSALRupeeCost(wbSALRupeeCost - 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
            setallmubSASandCount(allmubSASandCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2)
        }
        else if (shadowLanceCraftState == "grayscale(0%)") {
            setShadowLanceCraftState("grayscale(100%)")
            setShadowWeaponChoiceState("lance")
            setmubSALSilverMaskCountState(mubSALSilverMaskCount + 40)
            setwbSALSilverMaskCountState(wbSALSilverMaskCount + 40)
            setmubSALGoldMaskCountState(mubSALGoldMaskCount + 30)
            setwbSALGoldMaskCountState(wbSALGoldMaskCount + 30)
            setmubSALSandCountState(mubSALSandCount + 1)
            setwbSALSandCountState(wbSALSandCount + 1)
            setmubSALRupeeCost(mubSALRupeeCost + 2)
            setwbSALRupeeCost(wbSALRupeeCost + 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
            setallmubSASandCount(allmubSASandCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2)
        }
    }

    function shadowLanceWeaponBonus() {
        if (shadowLanceWeaponBonusState == "grayscale(100%)") {
            setShadowLanceWeaponBonusState("grayscale(0%)");
            setShadowWeaponChoiceState("lance");
            setmubSALSilverMaskCountState(mubSALSilverMaskCount - 100)
            setwbSALSilverMaskCountState(wbSALSilverMaskCount - 100)
            setmubSALGoldMaskCountState(mubSALGoldMaskCount - 100)
            setwbSALGoldMaskCountState(wbSALGoldMaskCount - 100)
            setmubSALInsanityCountState(mubSALInsanityCount - 14)
            setwbSALInsanityCountState(wbSALInsanityCount - 14)
            setmubSALOriCountState(mubSALOriCount - 30)
            setwbSALOriCountState(wbSALOriCount - 30)
            setmubSALRupeeCost(mubSALRupeeCost - 10)
            setwbSALRupeeCost(wbSALRupeeCost - 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 100)
            setallmubSAInsanityCount(allmubSAInsanityCount - 14)
            setallmubSAOriCount(allmubSAOriCount - 30)
            setallmubSARupeeCost(allmubSARupeeCost - 10)
        }
        else if (shadowLanceWeaponBonusState == "grayscale(0%)") {
            setShadowLanceWeaponBonusState("grayscale(100%)");
            setShadowWeaponChoiceState("lance");
            setmubSALSilverMaskCountState(mubSALSilverMaskCount + 100)
            setwbSALSilverMaskCountState(wbSALSilverMaskCount + 100)
            setmubSALGoldMaskCountState(mubSALGoldMaskCount + 100)
            setwbSALGoldMaskCountState(wbSALGoldMaskCount + 100)
            setmubSALInsanityCountState(mubSALInsanityCount + 14)
            setwbSALInsanityCountState(wbSALInsanityCount + 14)
            setmubSALOriCountState(mubSALOriCount + 30)
            setwbSALOriCountState(wbSALOriCount + 30)
            setmubSALRupeeCost(mubSALRupeeCost + 10)
            setwbSALRupeeCost(wbSALRupeeCost + 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 100)
            setallmubSAInsanityCount(allmubSAInsanityCount + 14)
            setallmubSAOriCount(allmubSAOriCount + 30)
            setallmubSARupeeCost(allmubSARupeeCost + 10)
        }
    }

    function shadowLanceWyrmprintSlot() {
        if (shadowLanceWyrmprintSlotState == "grayscale(100%)") {
            setShadowLanceWyrmprintSlotState("grayscale(0%)");
            setShadowWeaponChoiceState("lance");
            setmubSALSilverMaskCountState(mubSALSilverMaskCount - 16)
            setmubSALGoldMaskCountState(mubSALGoldMaskCount - 10)
            setmubSALOriCountState(mubSALOriCount - 1)
            setmubSALRupeeCost(mubSALRupeeCost - 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
            setallmubSAOriCount(allmubSAOriCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2.5)
        }
        else if (shadowLanceWyrmprintSlotState == "grayscale(0%)") {
            setShadowLanceWyrmprintSlotState("grayscale(100%)");
            setShadowWeaponChoiceState("lance");
            setmubSALSilverMaskCountState(mubSALSilverMaskCount + 16)
            setmubSALGoldMaskCountState(mubSALGoldMaskCount + 10)
            setmubSALOriCountState(mubSALOriCount + 1)
            setmubSALRupeeCost(mubSALRupeeCost + 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
            setallmubSAOriCount(allmubSAOriCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2.5)
        }
    }

    function handleShadowLanceUnbindIncrement(event) {
        setShadowWeaponChoiceState("lance")
        if (shadowLanceUnbindState < event.target.value) {
            if (event.target.value - shadowLanceUnbindState == 1) {
                setShadowLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubSALSilverMaskCountState(mubSALSilverMaskCount - 40)
                    setwbSALSilverMaskCountState(wbSALSilverMaskCount - 40)
                    setmubSALGoldMaskCountState(mubSALGoldMaskCount - 30)
                    setwbSALGoldMaskCountState(wbSALGoldMaskCount - 30)
                    setmubSALSandCountState(mubSALSandCount - 1)
                    setwbSALSandCountState(wbSALSandCount - 1)
                    setmubSALRupeeCost(mubSALRupeeCost - 2)
                    setwbSALRupeeCost(wbSALRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSASandCount(allmubSASandCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubSALSilverMaskCountState(mubSALSilverMaskCount - 16)
                    setwbSALSilverMaskCountState(wbSALSilverMaskCount - 16)
                    setmubSALGoldMaskCountState(mubSALGoldMaskCount - 10)
                    setwbSALGoldMaskCountState(wbSALGoldMaskCount - 10)
                    setmubSALInsanityCountState(mubSALInsanityCount - 7)
                    setwbSALInsanityCountState(wbSALInsanityCount - 7)
                    setmubSALOriCountState(mubSALOriCount - 1)
                    setwbSALOriCountState(wbSALOriCount - 1)
                    setmubSALRupeeCost(mubSALRupeeCost - 7.5)
                    setwbSALRupeeCost(wbSALRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubSALSilverMaskCountState(mubSALSilverMaskCount - 16)
                    setmubSALGoldMaskCountState(mubSALGoldMaskCount - 10)
                    setmubSALInsanityCountState(mubSALInsanityCount - 7)
                    setmubSALOriCountState(mubSALOriCount - 1)
                    setmubSALRupeeCost(mubSALRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubSALSilverMaskCountState(mubSALSilverMaskCount - 80)
                    setmubSALGoldMaskCountState(mubSALGoldMaskCount - 70)
                    setmubSALInsanityCountState(mubSALInsanityCount - 30)
                    setmubSALGaleCountState(mubSALGaleCount - 20)
                    setmubSALOriCountState(mubSALOriCount - 20)
                    setmubSALRupeeCost(mubSALRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 30)
                    setallmubSAGaleCount(allmubSAGaleCount - 20)
                    setallmubSAOriCount(allmubSAOriCount - 20)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
            }
        }
        else if (shadowLanceUnbindState > event.target.value) {
            if (shadowLanceUnbindState - event.target.value == 1) {
                setShadowLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubSALSilverMaskCountState(mubSALSilverMaskCount + 40)
                    setwbSALSilverMaskCountState(wbSALSilverMaskCount + 40)
                    setmubSALGoldMaskCountState(mubSALGoldMaskCount + 30)
                    setwbSALGoldMaskCountState(wbSALGoldMaskCount + 30)
                    setmubSALSandCountState(mubSALSandCount + 1)
                    setwbSALSandCountState(wbSALSandCount + 1)
                    setmubSALRupeeCost(mubSALRupeeCost + 2)
                    setwbSALRupeeCost(wbSALRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSASandCount(allmubSASandCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubSALSilverMaskCountState(mubSALSilverMaskCount + 16)
                    setwbSALSilverMaskCountState(wbSALSilverMaskCount + 16)
                    setmubSALGoldMaskCountState(mubSALGoldMaskCount + 10)
                    setwbSALGoldMaskCountState(wbSALGoldMaskCount + 10)
                    setmubSALInsanityCountState(mubSALInsanityCount + 7)
                    setwbSALInsanityCountState(wbSALInsanityCount + 7)
                    setmubSALOriCountState(mubSALOriCount + 1)
                    setwbSALOriCountState(wbSALOriCount + 1)
                    setmubSALRupeeCost(mubSALRupeeCost + 7.5)
                    setwbSALRupeeCost(wbSALRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubSALSilverMaskCountState(mubSALSilverMaskCount + 16)
                    setmubSALGoldMaskCountState(mubSALGoldMaskCount + 10)
                    setmubSALInsanityCountState(mubSALInsanityCount + 7)
                    setmubSALOriCountState(mubSALOriCount + 1)
                    setmubSALRupeeCost(mubSALRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubSALSilverMaskCountState(mubSALSilverMaskCount + 80)
                    setmubSALGoldMaskCountState(mubSALGoldMaskCount + 70)
                    setmubSALInsanityCountState(mubSALInsanityCount + 30)
                    setmubSALGaleCountState(mubSALGaleCount + 20)
                    setmubSALOriCountState(mubSALOriCount + 20)
                    setmubSALRupeeCost(mubSALRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 30)
                    setallmubSAGaleCount(allmubSAGaleCount + 20)
                    setallmubSAOriCount(allmubSAOriCount + 20)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
            }
        }
    }

    function handleShadowLanceRefineIncrement(event) {
        setShadowWeaponChoiceState("lance");
        if (shadowLanceRefineState < event.target.value) {
            if (event.target.value - shadowLanceRefineState == 1) {
                setShadowLanceRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubSALSilverMaskCountState(mubSALSilverMaskCount - 16);
                    setwbSALSilverMaskCountState(wbSALSilverMaskCount - 16);
                    setmubSALGoldMaskCountState(mubSALGoldMaskCount - 10);
                    setwbSALGoldMaskCountState(wbSALGoldMaskCount - 10);
                    setmubSALInsanityCountState(mubSALInsanityCount - 7);
                    setwbSALInsanityCountState(wbSALInsanityCount - 7);
                    setmubSALOriCountState(mubSALOriCount - 1);
                    setwbSALOriCountState(wbSALOriCount - 1);
                    setmubSALRupeeCost(mubSALRupeeCost - 2.5);
                    setwbSALRupeeCost(wbSALRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubSALSilverMaskCountState(mubSALSilverMaskCount - 40)
                    setmubSALGoldMaskCountState(mubSALGoldMaskCount - 30);
                    setmubSALInsanityCountState(mubSALInsanityCount - 10);
                    setmubSALGaleCountState(mubSALGaleCount - 10);
                    setmubSALOriCountState(mubSALOriCount - 10);
                    setmubSALRupeeCost(mubSALRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 10)
                    setallmubSAGaleCount(allmubSAGaleCount - 10)
                    setallmubSAOriCount(allmubSAOriCount - 10)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
            }
        }
        else if (shadowLanceRefineState > event.target.value) {
            if (shadowLanceRefineState - event.target.value == 1) {
                setShadowLanceRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubSALSilverMaskCountState(mubSALSilverMaskCount + 16);
                    setwbSALSilverMaskCountState(wbSALSilverMaskCount + 16);
                    setmubSALGoldMaskCountState(mubSALGoldMaskCount + 10);
                    setwbSALGoldMaskCountState(wbSALGoldMaskCount + 10);
                    setmubSALInsanityCountState(mubSALInsanityCount + 7);
                    setwbSALInsanityCountState(wbSALInsanityCount + 7);
                    setmubSALOriCountState(mubSALOriCount + 1);
                    setwbSALOriCountState(wbSALOriCount + 1);
                    setmubSALRupeeCost(mubSALRupeeCost + 2.5);
                    setwbSALRupeeCost(wbSALRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubSALSilverMaskCountState(mubSALSilverMaskCount + 40)
                    setmubSALGoldMaskCountState(mubSALGoldMaskCount + 30);
                    setmubSALInsanityCountState(mubSALInsanityCount + 10);
                    setmubSALGaleCountState(mubSALGaleCount + 10);
                    setmubSALOriCountState(mubSALOriCount + 10);
                    setmubSALRupeeCost(mubSALRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 10)
                    setallmubSAGaleCount(allmubSAGaleCount + 10)
                    setallmubSAOriCount(allmubSAOriCount + 10)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
            }
        }
    }

    function craftShadowWand() {
        if (shadowWandCraftState == "grayscale(100%)") {
            setShadowWandCraftState("grayscale(0%)")
            setShadowWeaponChoiceState("wand")
            setmubSAWSilverMaskCountState(mubSAWSilverMaskCount - 40)
            setwbSAWSilverMaskCountState(wbSAWSilverMaskCount - 40)
            setmubSAWGoldMaskCountState(mubSAWGoldMaskCount - 30)
            setwbSAWGoldMaskCountState(wbSAWGoldMaskCount - 30)
            setmubSAWSandCountState(mubSAWSandCount - 1)
            setwbSAWSandCountState(wbSAWSandCount - 1)
            setmubSAWRupeeCost(mubSAWRupeeCost - 2)
            setwbSAWRupeeCost(wbSAWRupeeCost - 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
            setallmubSASandCount(allmubSASandCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2)
        }
        else if (shadowWandCraftState == "grayscale(0%)") {
            setShadowWandCraftState("grayscale(100%)")
            setShadowWeaponChoiceState("wand")
            setmubSAWSilverMaskCountState(mubSAWSilverMaskCount + 40)
            setwbSAWSilverMaskCountState(wbSAWSilverMaskCount + 40)
            setmubSAWGoldMaskCountState(mubSAWGoldMaskCount + 30)
            setwbSAWGoldMaskCountState(wbSAWGoldMaskCount + 30)
            setmubSAWSandCountState(mubSAWSandCount + 1)
            setwbSAWSandCountState(wbSAWSandCount + 1)
            setmubSAWRupeeCost(mubSAWRupeeCost + 2)
            setwbSAWRupeeCost(wbSAWRupeeCost + 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
            setallmubSASandCount(allmubSASandCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2)
        }
    }

    function shadowWandWeaponBonus() {
        if (shadowWandWeaponBonusState == "grayscale(100%)") {
            setShadowWandWeaponBonusState("grayscale(0%)");
            setShadowWeaponChoiceState("wand");
            setmubSAWSilverMaskCountState(mubSAWSilverMaskCount - 100)
            setwbSAWSilverMaskCountState(wbSAWSilverMaskCount - 100)
            setmubSAWGoldMaskCountState(mubSAWGoldMaskCount - 100)
            setwbSAWGoldMaskCountState(wbSAWGoldMaskCount - 100)
            setmubSAWInsanityCountState(mubSAWInsanityCount - 14)
            setwbSAWInsanityCountState(wbSAWInsanityCount - 14)
            setmubSAWOriCountState(mubSAWOriCount - 30)
            setwbSAWOriCountState(wbSAWOriCount - 30)
            setmubSAWRupeeCost(mubSAWRupeeCost - 10)
            setwbSAWRupeeCost(wbSAWRupeeCost - 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 100)
            setallmubSAInsanityCount(allmubSAInsanityCount - 14)
            setallmubSAOriCount(allmubSAOriCount - 30)
            setallmubSARupeeCost(allmubSARupeeCost - 10)
        }
        else if (shadowWandWeaponBonusState == "grayscale(0%)") {
            setShadowWandWeaponBonusState("grayscale(100%)");
            setShadowWeaponChoiceState("wand");
            setmubSAWSilverMaskCountState(mubSAWSilverMaskCount + 100)
            setwbSAWSilverMaskCountState(wbSAWSilverMaskCount + 100)
            setmubSAWGoldMaskCountState(mubSAWGoldMaskCount + 100)
            setwbSAWGoldMaskCountState(wbSAWGoldMaskCount + 100)
            setmubSAWInsanityCountState(mubSAWInsanityCount + 14)
            setwbSAWInsanityCountState(wbSAWInsanityCount + 14)
            setmubSAWOriCountState(mubSAWOriCount + 30)
            setwbSAWOriCountState(wbSAWOriCount + 30)
            setmubSAWRupeeCost(mubSAWRupeeCost + 10)
            setwbSAWRupeeCost(wbSAWRupeeCost + 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 100)
            setallmubSAInsanityCount(allmubSAInsanityCount + 14)
            setallmubSAOriCount(allmubSAOriCount + 30)
            setallmubSARupeeCost(allmubSARupeeCost + 10)
        }
    }

    function shadowWandWyrmprintSlot() {
        if (shadowWandWyrmprintSlotState == "grayscale(100%)") {
            setShadowWandWyrmprintSlotState("grayscale(0%)");
            setShadowWeaponChoiceState("wand");
            setmubSAWSilverMaskCountState(mubSAWSilverMaskCount - 16)
            setmubSAWGoldMaskCountState(mubSAWGoldMaskCount - 10)
            setmubSAWOriCountState(mubSAWOriCount - 1)
            setmubSAWRupeeCost(mubSAWRupeeCost - 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
            setallmubSAOriCount(allmubSAOriCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2.5)
        }
        else if (shadowWandWyrmprintSlotState == "grayscale(0%)") {
            setShadowWandWyrmprintSlotState("grayscale(100%)");
            setShadowWeaponChoiceState("wand");
            setmubSAWSilverMaskCountState(mubSAWSilverMaskCount + 16)
            setmubSAWGoldMaskCountState(mubSAWGoldMaskCount + 10)
            setmubSAWOriCountState(mubSAWOriCount + 1)
            setmubSAWRupeeCost(mubSAWRupeeCost + 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
            setallmubSAOriCount(allmubSAOriCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2.5)
        }
    }

    function handleShadowWandUnbindIncrement(event) {
        setShadowWeaponChoiceState("wand")
        if (shadowWandUnbindState < event.target.value) {
            if (event.target.value - shadowWandUnbindState == 1) {
                setShadowWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubSAWSilverMaskCountState(mubSAWSilverMaskCount - 40)
                    setwbSAWSilverMaskCountState(wbSAWSilverMaskCount - 40)
                    setmubSAWGoldMaskCountState(mubSAWGoldMaskCount - 30)
                    setwbSAWGoldMaskCountState(wbSAWGoldMaskCount - 30)
                    setmubSAWSandCountState(mubSAWSandCount - 1)
                    setwbSAWSandCountState(wbSAWSandCount - 1)
                    setmubSAWRupeeCost(mubSAWRupeeCost - 2)
                    setwbSAWRupeeCost(wbSAWRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSASandCount(allmubSASandCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubSAWSilverMaskCountState(mubSAWSilverMaskCount - 16)
                    setwbSAWSilverMaskCountState(wbSAWSilverMaskCount - 16)
                    setmubSAWGoldMaskCountState(mubSAWGoldMaskCount - 10)
                    setwbSAWGoldMaskCountState(wbSAWGoldMaskCount - 10)
                    setmubSAWInsanityCountState(mubSAWInsanityCount - 7)
                    setwbSAWInsanityCountState(wbSAWInsanityCount - 7)
                    setmubSAWOriCountState(mubSAWOriCount - 1)
                    setwbSAWOriCountState(wbSAWOriCount - 1)
                    setmubSAWRupeeCost(mubSAWRupeeCost - 7.5)
                    setwbSAWRupeeCost(wbSAWRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubSAWSilverMaskCountState(mubSAWSilverMaskCount - 16)
                    setmubSAWGoldMaskCountState(mubSAWGoldMaskCount - 10)
                    setmubSAWInsanityCountState(mubSAWInsanityCount - 7)
                    setmubSAWOriCountState(mubSAWOriCount - 1)
                    setmubSAWRupeeCost(mubSAWRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubSAWSilverMaskCountState(mubSAWSilverMaskCount - 80)
                    setmubSAWGoldMaskCountState(mubSAWGoldMaskCount - 70)
                    setmubSAWInsanityCountState(mubSAWInsanityCount - 30)
                    setmubSAWGaleCountState(mubSAWGaleCount - 20)
                    setmubSAWOriCountState(mubSAWOriCount - 20)
                    setmubSAWRupeeCost(mubSAWRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 30)
                    setallmubSAGaleCount(allmubSAGaleCount - 20)
                    setallmubSAOriCount(allmubSAOriCount - 20)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
            }
        }
        else if (shadowWandUnbindState > event.target.value) {
            if (shadowWandUnbindState - event.target.value == 1) {
                setShadowWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubSAWSilverMaskCountState(mubSAWSilverMaskCount + 40)
                    setwbSAWSilverMaskCountState(wbSAWSilverMaskCount + 40)
                    setmubSAWGoldMaskCountState(mubSAWGoldMaskCount + 30)
                    setwbSAWGoldMaskCountState(wbSAWGoldMaskCount + 30)
                    setmubSAWSandCountState(mubSAWSandCount + 1)
                    setwbSAWSandCountState(wbSAWSandCount + 1)
                    setmubSAWRupeeCost(mubSAWRupeeCost + 2)
                    setwbSAWRupeeCost(wbSAWRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSASandCount(allmubSASandCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubSAWSilverMaskCountState(mubSAWSilverMaskCount + 16)
                    setwbSAWSilverMaskCountState(wbSAWSilverMaskCount + 16)
                    setmubSAWGoldMaskCountState(mubSAWGoldMaskCount + 10)
                    setwbSAWGoldMaskCountState(wbSAWGoldMaskCount + 10)
                    setmubSAWInsanityCountState(mubSAWInsanityCount + 7)
                    setwbSAWInsanityCountState(wbSAWInsanityCount + 7)
                    setmubSAWOriCountState(mubSAWOriCount + 1)
                    setwbSAWOriCountState(wbSAWOriCount + 1)
                    setmubSAWRupeeCost(mubSAWRupeeCost + 7.5)
                    setwbSAWRupeeCost(wbSAWRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubSAWSilverMaskCountState(mubSAWSilverMaskCount + 16)
                    setmubSAWGoldMaskCountState(mubSAWGoldMaskCount + 10)
                    setmubSAWInsanityCountState(mubSAWInsanityCount + 7)
                    setmubSAWOriCountState(mubSAWOriCount + 1)
                    setmubSAWRupeeCost(mubSAWRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubSAWSilverMaskCountState(mubSAWSilverMaskCount + 80)
                    setmubSAWGoldMaskCountState(mubSAWGoldMaskCount + 70)
                    setmubSAWInsanityCountState(mubSAWInsanityCount + 30)
                    setmubSAWGaleCountState(mubSAWGaleCount + 20)
                    setmubSAWOriCountState(mubSAWOriCount + 20)
                    setmubSAWRupeeCost(mubSAWRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 30)
                    setallmubSAGaleCount(allmubSAGaleCount + 20)
                    setallmubSAOriCount(allmubSAOriCount + 20)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
            }
        }
    }

    function handleShadowWandRefineIncrement(event) {
        setShadowWeaponChoiceState("wand");
        if (shadowWandRefineState < event.target.value) {
            if (event.target.value - shadowWandRefineState == 1) {
                setShadowWandRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubSAWSilverMaskCountState(mubSAWSilverMaskCount - 16);
                    setwbSAWSilverMaskCountState(wbSAWSilverMaskCount - 16);
                    setmubSAWGoldMaskCountState(mubSAWGoldMaskCount - 10);
                    setwbSAWGoldMaskCountState(wbSAWGoldMaskCount - 10);
                    setmubSAWInsanityCountState(mubSAWInsanityCount - 7);
                    setwbSAWInsanityCountState(wbSAWInsanityCount - 7);
                    setmubSAWOriCountState(mubSAWOriCount - 1);
                    setwbSAWOriCountState(wbSAWOriCount - 1);
                    setmubSAWRupeeCost(mubSAWRupeeCost - 2.5);
                    setwbSAWRupeeCost(wbSAWRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubSAWSilverMaskCountState(mubSAWSilverMaskCount - 40)
                    setmubSAWGoldMaskCountState(mubSAWGoldMaskCount - 30);
                    setmubSAWInsanityCountState(mubSAWInsanityCount - 10);
                    setmubSAWGaleCountState(mubSAWGaleCount - 10);
                    setmubSAWOriCountState(mubSAWOriCount - 10);
                    setmubSAWRupeeCost(mubSAWRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 10)
                    setallmubSAGaleCount(allmubSAGaleCount - 10)
                    setallmubSAOriCount(allmubSAOriCount - 10)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
            }
        }
        else if (shadowWandRefineState > event.target.value) {
            if (shadowWandRefineState - event.target.value == 1) {
                setShadowWandRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubSAWSilverMaskCountState(mubSAWSilverMaskCount + 16);
                    setwbSAWSilverMaskCountState(wbSAWSilverMaskCount + 16);
                    setmubSAWGoldMaskCountState(mubSAWGoldMaskCount + 10);
                    setwbSAWGoldMaskCountState(wbSAWGoldMaskCount + 10);
                    setmubSAWInsanityCountState(mubSAWInsanityCount + 7);
                    setwbSAWInsanityCountState(wbSAWInsanityCount + 7);
                    setmubSAWOriCountState(mubSAWOriCount + 1);
                    setwbSAWOriCountState(wbSAWOriCount + 1);
                    setmubSAWRupeeCost(mubSAWRupeeCost + 2.5);
                    setwbSAWRupeeCost(wbSAWRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubSAWSilverMaskCountState(mubSAWSilverMaskCount + 40)
                    setmubSAWGoldMaskCountState(mubSAWGoldMaskCount + 30);
                    setmubSAWInsanityCountState(mubSAWInsanityCount + 10);
                    setmubSAWGaleCountState(mubSAWGaleCount + 10);
                    setmubSAWOriCountState(mubSAWOriCount + 10);
                    setmubSAWRupeeCost(mubSAWRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 10)
                    setallmubSAGaleCount(allmubSAGaleCount + 10)
                    setallmubSAOriCount(allmubSAOriCount + 10)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
            }
        }
    }

    function craftShadowBow() {
        if (shadowBowCraftState == "grayscale(100%)") {
            setShadowBowCraftState("grayscale(0%)")
            setShadowWeaponChoiceState("bow")
            setmubSABoSilverMaskCountState(mubSABoSilverMaskCount - 40)
            setwbSABoSilverMaskCountState(wbSABoSilverMaskCount - 40)
            setmubSABoGoldMaskCountState(mubSABoGoldMaskCount - 30)
            setwbSABoGoldMaskCountState(wbSABoGoldMaskCount - 30)
            setmubSABoSandCountState(mubSABoSandCount - 1)
            setwbSABoSandCountState(wbSABoSandCount - 1)
            setmubSABoRupeeCost(mubSABoRupeeCost - 2)
            setwbSABoRupeeCost(wbSABoRupeeCost - 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
            setallmubSASandCount(allmubSASandCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2)
        }
        else if (shadowBowCraftState == "grayscale(0%)") {
            setShadowBowCraftState("grayscale(100%)")
            setShadowWeaponChoiceState("bow")
            setmubSABoSilverMaskCountState(mubSABoSilverMaskCount + 40)
            setwbSABoSilverMaskCountState(wbSABoSilverMaskCount + 40)
            setmubSABoGoldMaskCountState(mubSABoGoldMaskCount + 30)
            setwbSABoGoldMaskCountState(wbSABoGoldMaskCount + 30)
            setmubSABoSandCountState(mubSABoSandCount + 1)
            setwbSABoSandCountState(wbSABoSandCount + 1)
            setmubSABoRupeeCost(mubSABoRupeeCost + 2)
            setwbSABoRupeeCost(wbSABoRupeeCost + 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
            setallmubSASandCount(allmubSASandCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2)
        }
    }

    function shadowBowWeaponBonus() {
        if (shadowBowWeaponBonusState == "grayscale(100%)") {
            setShadowBowWeaponBonusState("grayscale(0%)");
            setShadowWeaponChoiceState("bow");
            setmubSABoSilverMaskCountState(mubSABoSilverMaskCount - 100)
            setwbSABoSilverMaskCountState(wbSABoSilverMaskCount - 100)
            setmubSABoGoldMaskCountState(mubSABoGoldMaskCount - 100)
            setwbSABoGoldMaskCountState(wbSABoGoldMaskCount - 100)
            setmubSABoInsanityCountState(mubSABoInsanityCount - 14)
            setwbSABoInsanityCountState(wbSABoInsanityCount - 14)
            setmubSABoOriCountState(mubSABoOriCount - 30)
            setwbSABoOriCountState(wbSABoOriCount - 30)
            setmubSABoRupeeCost(mubSABoRupeeCost - 10)
            setwbSABoRupeeCost(wbSABoRupeeCost - 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 100)
            setallmubSAInsanityCount(allmubSAInsanityCount - 14)
            setallmubSAOriCount(allmubSAOriCount - 30)
            setallmubSARupeeCost(allmubSARupeeCost - 10)
        }
        else if (shadowBowWeaponBonusState == "grayscale(0%)") {
            setShadowBowWeaponBonusState("grayscale(100%)");
            setShadowWeaponChoiceState("bow");
            setmubSABoSilverMaskCountState(mubSABoSilverMaskCount + 100)
            setwbSABoSilverMaskCountState(wbSABoSilverMaskCount + 100)
            setmubSABoGoldMaskCountState(mubSABoGoldMaskCount + 100)
            setwbSABoGoldMaskCountState(wbSABoGoldMaskCount + 100)
            setmubSABoInsanityCountState(mubSABoInsanityCount + 14)
            setwbSABoInsanityCountState(wbSABoInsanityCount + 14)
            setmubSABoOriCountState(mubSABoOriCount + 30)
            setwbSABoOriCountState(wbSABoOriCount + 30)
            setmubSABoRupeeCost(mubSABoRupeeCost + 10)
            setwbSABoRupeeCost(wbSABoRupeeCost + 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 100)
            setallmubSAInsanityCount(allmubSAInsanityCount + 14)
            setallmubSAOriCount(allmubSAOriCount + 30)
            setallmubSARupeeCost(allmubSARupeeCost + 10)
        }
    }

    function shadowBowWyrmprintSlot() {
        if (shadowBowWyrmprintSlotState == "grayscale(100%)") {
            setShadowBowWyrmprintSlotState("grayscale(0%)");
            setShadowWeaponChoiceState("bow");
            setmubSABoSilverMaskCountState(mubSABoSilverMaskCount - 16)
            setmubSABoGoldMaskCountState(mubSABoGoldMaskCount - 10)
            setmubSABoOriCountState(mubSABoOriCount - 1)
            setmubSABoRupeeCost(mubSABoRupeeCost - 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
            setallmubSAOriCount(allmubSAOriCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2.5)
        }
        else if (shadowBowWyrmprintSlotState == "grayscale(0%)") {
            setShadowBowWyrmprintSlotState("grayscale(100%)");
            setShadowWeaponChoiceState("bow");
            setmubSABoSilverMaskCountState(mubSABoSilverMaskCount + 16)
            setmubSABoGoldMaskCountState(mubSABoGoldMaskCount + 10)
            setmubSABoOriCountState(mubSABoOriCount + 1)
            setmubSABoRupeeCost(mubSABoRupeeCost + 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
            setallmubSAOriCount(allmubSAOriCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2.5)
        }
    }

    function handleShadowBowUnbindIncrement(event) {
        setShadowWeaponChoiceState("bow")
        if (shadowBowUnbindState < event.target.value) {
            if (event.target.value - shadowBowUnbindState == 1) {
                setShadowBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubSABoSilverMaskCountState(mubSABoSilverMaskCount - 40)
                    setwbSABoSilverMaskCountState(wbSABoSilverMaskCount - 40)
                    setmubSABoGoldMaskCountState(mubSABoGoldMaskCount - 30)
                    setwbSABoGoldMaskCountState(wbSABoGoldMaskCount - 30)
                    setmubSABoSandCountState(mubSABoSandCount - 1)
                    setwbSABoSandCountState(wbSABoSandCount - 1)
                    setmubSABoRupeeCost(mubSABoRupeeCost - 2)
                    setwbSABoRupeeCost(wbSABoRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSASandCount(allmubSASandCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubSABoSilverMaskCountState(mubSABoSilverMaskCount - 16)
                    setwbSABoSilverMaskCountState(wbSABoSilverMaskCount - 16)
                    setmubSABoGoldMaskCountState(mubSABoGoldMaskCount - 10)
                    setwbSABoGoldMaskCountState(wbSABoGoldMaskCount - 10)
                    setmubSABoInsanityCountState(mubSABoInsanityCount - 7)
                    setwbSABoInsanityCountState(wbSABoInsanityCount - 7)
                    setmubSABoOriCountState(mubSABoOriCount - 1)
                    setwbSABoOriCountState(wbSABoOriCount - 1)
                    setmubSABoRupeeCost(mubSABoRupeeCost - 7.5)
                    setwbSABoRupeeCost(wbSABoRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubSABoSilverMaskCountState(mubSABoSilverMaskCount - 16)
                    setmubSABoGoldMaskCountState(mubSABoGoldMaskCount - 10)
                    setmubSABoInsanityCountState(mubSABoInsanityCount - 7)
                    setmubSABoOriCountState(mubSABoOriCount - 1)
                    setmubSABoRupeeCost(mubSABoRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubSABoSilverMaskCountState(mubSABoSilverMaskCount - 80)
                    setmubSABoGoldMaskCountState(mubSABoGoldMaskCount - 70)
                    setmubSABoInsanityCountState(mubSABoInsanityCount - 30)
                    setmubSABoGaleCountState(mubSABoGaleCount - 20)
                    setmubSABoOriCountState(mubSABoOriCount - 20)
                    setmubSABoRupeeCost(mubSABoRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 30)
                    setallmubSAGaleCount(allmubSAGaleCount - 20)
                    setallmubSAOriCount(allmubSAOriCount - 20)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
            }
        }
        else if (shadowBowUnbindState > event.target.value) {
            if (shadowBowUnbindState - event.target.value == 1) {
                setShadowBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubSABoSilverMaskCountState(mubSABoSilverMaskCount + 40)
                    setwbSABoSilverMaskCountState(wbSABoSilverMaskCount + 40)
                    setmubSABoGoldMaskCountState(mubSABoGoldMaskCount + 30)
                    setwbSABoGoldMaskCountState(wbSABoGoldMaskCount + 30)
                    setmubSABoSandCountState(mubSABoSandCount + 1)
                    setwbSABoSandCountState(wbSABoSandCount + 1)
                    setmubSABoRupeeCost(mubSABoRupeeCost + 2)
                    setwbSABoRupeeCost(wbSABoRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSASandCount(allmubSASandCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubSABoSilverMaskCountState(mubSABoSilverMaskCount + 16)
                    setwbSABoSilverMaskCountState(wbSABoSilverMaskCount + 16)
                    setmubSABoGoldMaskCountState(mubSABoGoldMaskCount + 10)
                    setwbSABoGoldMaskCountState(wbSABoGoldMaskCount + 10)
                    setmubSABoInsanityCountState(mubSABoInsanityCount + 7)
                    setwbSABoInsanityCountState(wbSABoInsanityCount + 7)
                    setmubSABoOriCountState(mubSABoOriCount + 1)
                    setwbSABoOriCountState(wbSABoOriCount + 1)
                    setmubSABoRupeeCost(mubSABoRupeeCost + 7.5)
                    setwbSABoRupeeCost(wbSABoRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubSABoSilverMaskCountState(mubSABoSilverMaskCount + 16)
                    setmubSABoGoldMaskCountState(mubSABoGoldMaskCount + 10)
                    setmubSABoInsanityCountState(mubSABoInsanityCount + 7)
                    setmubSABoOriCountState(mubSABoOriCount + 1)
                    setmubSABoRupeeCost(mubSABoRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubSABoSilverMaskCountState(mubSABoSilverMaskCount + 80)
                    setmubSABoGoldMaskCountState(mubSABoGoldMaskCount + 70)
                    setmubSABoInsanityCountState(mubSABoInsanityCount + 30)
                    setmubSABoGaleCountState(mubSABoGaleCount + 20)
                    setmubSABoOriCountState(mubSABoOriCount + 20)
                    setmubSABoRupeeCost(mubSABoRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 30)
                    setallmubSAGaleCount(allmubSAGaleCount + 20)
                    setallmubSAOriCount(allmubSAOriCount + 20)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
            }
        }
    }

    function handleShadowBowRefineIncrement(event) {
        setShadowWeaponChoiceState("bow");
        if (shadowBowRefineState < event.target.value) {
            if (event.target.value - shadowBowRefineState == 1) {
                setShadowBowRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubSABoSilverMaskCountState(mubSABoSilverMaskCount - 16);
                    setwbSABoSilverMaskCountState(wbSABoSilverMaskCount - 16);
                    setmubSABoGoldMaskCountState(mubSABoGoldMaskCount - 10);
                    setwbSABoGoldMaskCountState(wbSABoGoldMaskCount - 10);
                    setmubSABoInsanityCountState(mubSABoInsanityCount - 7);
                    setwbSABoInsanityCountState(wbSABoInsanityCount - 7);
                    setmubSABoOriCountState(mubSABoOriCount - 1);
                    setwbSABoOriCountState(wbSABoOriCount - 1);
                    setmubSABoRupeeCost(mubSABoRupeeCost - 2.5);
                    setwbSABoRupeeCost(wbSABoRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubSABoSilverMaskCountState(mubSABoSilverMaskCount - 40)
                    setmubSABoGoldMaskCountState(mubSABoGoldMaskCount - 30);
                    setmubSABoInsanityCountState(mubSABoInsanityCount - 10);
                    setmubSABoGaleCountState(mubSABoGaleCount - 10);
                    setmubSABoOriCountState(mubSABoOriCount - 10);
                    setmubSABoRupeeCost(mubSABoRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 10)
                    setallmubSAGaleCount(allmubSAGaleCount - 10)
                    setallmubSAOriCount(allmubSAOriCount - 10)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
            }
        }
        else if (shadowBowRefineState > event.target.value) {
            if (event.target.value - shadowBowRefineState == 1) {
                setShadowBowRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubSABoSilverMaskCountState(mubSABoSilverMaskCount + 16);
                    setwbSABoSilverMaskCountState(wbSABoSilverMaskCount + 16);
                    setmubSABoGoldMaskCountState(mubSABoGoldMaskCount + 10);
                    setwbSABoGoldMaskCountState(wbSABoGoldMaskCount + 10);
                    setmubSABoInsanityCountState(mubSABoInsanityCount + 7);
                    setwbSABoInsanityCountState(wbSABoInsanityCount + 7);
                    setmubSABoOriCountState(mubSABoOriCount + 1);
                    setwbSABoOriCountState(wbSABoOriCount + 1);
                    setmubSABoRupeeCost(mubSABoRupeeCost + 2.5);
                    setwbSABoRupeeCost(wbSABoRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubSABoSilverMaskCountState(mubSABoSilverMaskCount + 40)
                    setmubSABoGoldMaskCountState(mubSABoGoldMaskCount + 30);
                    setmubSABoInsanityCountState(mubSABoInsanityCount + 10);
                    setmubSABoGaleCountState(mubSABoGaleCount + 10);
                    setmubSABoOriCountState(mubSABoOriCount + 10);
                    setmubSABoRupeeCost(mubSABoRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 10)
                    setallmubSAGaleCount(allmubSAGaleCount + 10)
                    setallmubSAOriCount(allmubSAOriCount + 10)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
            }
        }
    }

    function craftShadowStaff() {
        if (shadowStaffCraftState == "grayscale(100%)") {
            setShadowStaffCraftState("grayscale(0%)")
            setShadowWeaponChoiceState("staff")
            setmubSAStSilverMaskCountState(mubSAStSilverMaskCount - 40)
            setwbSAStSilverMaskCountState(wbSAStSilverMaskCount - 40)
            setmubSAStGoldMaskCountState(mubSAStGoldMaskCount - 30)
            setwbSAStGoldMaskCountState(wbSAStGoldMaskCount - 30)
            setmubSAStSandCountState(mubSAStSandCount - 1)
            setwbSAStSandCountState(wbSAStSandCount - 1)
            setmubSAStRupeeCost(mubSAStRupeeCost - 2)
            setwbSAStRupeeCost(wbSAStRupeeCost - 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
            setallmubSASandCount(allmubSASandCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2)

        }
        else if (shadowStaffCraftState == "grayscale(0%)") {
            setShadowStaffCraftState("grayscale(100%)")
            setShadowWeaponChoiceState("staff")
            setmubSAStSilverMaskCountState(mubSAStSilverMaskCount + 40)
            setwbSAStSilverMaskCountState(wbSAStSilverMaskCount + 40)
            setmubSAStGoldMaskCountState(mubSAStGoldMaskCount + 30)
            setwbSAStGoldMaskCountState(wbSAStGoldMaskCount + 30)
            setmubSAStSandCountState(mubSAStSandCount + 1)
            setwbSAStSandCountState(wbSAStSandCount + 1)
            setmubSAStRupeeCost(mubSAStRupeeCost + 2)
            setwbSAStRupeeCost(wbSAStRupeeCost + 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
            setallmubSASandCount(allmubSASandCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2)
        }
    }

    function shadowStaffWeaponBonus() {
        if (shadowStaffWeaponBonusState == "grayscale(100%)") {
            setShadowStaffWeaponBonusState("grayscale(0%)");
            setShadowWeaponChoiceState("staff");
            setmubSAStSilverMaskCountState(mubSAStSilverMaskCount - 100)
            setwbSAStSilverMaskCountState(wbSAStSilverMaskCount - 100)
            setmubSAStGoldMaskCountState(mubSAStGoldMaskCount - 100)
            setwbSAStGoldMaskCountState(wbSAStGoldMaskCount - 100)
            setmubSAStInsanityCountState(mubSAStInsanityCount - 14)
            setwbSAStInsanityCountState(wbSAStInsanityCount - 14)
            setmubSAStOriCountState(mubSAStOriCount - 30)
            setwbSAStOriCountState(wbSAStOriCount - 30)
            setmubSAStRupeeCost(mubSAStRupeeCost - 10)
            setwbSAStRupeeCost(wbSAStRupeeCost - 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 100)
            setallmubSAInsanityCount(allmubSAInsanityCount - 14)
            setallmubSAOriCount(allmubSAOriCount - 30)
            setallmubSARupeeCost(allmubSARupeeCost - 10)
        }
        else if (shadowStaffWeaponBonusState == "grayscale(0%)") {
            setShadowStaffWeaponBonusState("grayscale(100%)");
            setShadowWeaponChoiceState("staff");
            setmubSAStSilverMaskCountState(mubSAStSilverMaskCount + 100)
            setwbSAStSilverMaskCountState(wbSAStSilverMaskCount + 100)
            setmubSAStGoldMaskCountState(mubSAStGoldMaskCount + 100)
            setwbSAStGoldMaskCountState(wbSAStGoldMaskCount + 100)
            setmubSAStInsanityCountState(mubSAStInsanityCount + 14)
            setwbSAStInsanityCountState(wbSAStInsanityCount + 14)
            setmubSAStOriCountState(mubSAStOriCount + 30)
            setwbSAStOriCountState(wbSAStOriCount + 30)
            setmubSAStRupeeCost(mubSAStRupeeCost + 10)
            setwbSAStRupeeCost(wbSAStRupeeCost + 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 100)
            setallmubSAInsanityCount(allmubSAInsanityCount + 14)
            setallmubSAOriCount(allmubSAOriCount + 30)
            setallmubSARupeeCost(allmubSARupeeCost + 10)
        }
    }

    function shadowStaffWyrmprintSlot() {
        if (shadowStaffWyrmprintSlotState == "grayscale(100%)") {
            setShadowStaffWyrmprintSlotState("grayscale(0%)");
            setShadowWeaponChoiceState("staff");
            setmubSAStSilverMaskCountState(mubSAStSilverMaskCount - 16)
            setmubSAStGoldMaskCountState(mubSAStGoldMaskCount - 10)
            setmubSAStOriCountState(mubSAStOriCount - 1)
            setmubSAStRupeeCost(mubSAStRupeeCost - 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
            setallmubSAOriCount(allmubSAOriCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2.5)
        }
        else if (shadowStaffWyrmprintSlotState == "grayscale(0%)") {
            setShadowStaffWyrmprintSlotState("grayscale(100%)");
            setShadowWeaponChoiceState("staff");
            setmubSAStSilverMaskCountState(mubSAStSilverMaskCount + 16)
            setmubSAStGoldMaskCountState(mubSAStGoldMaskCount + 10)
            setmubSAStOriCountState(mubSAStOriCount + 1)
            setmubSAStRupeeCost(mubSAStRupeeCost + 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
            setallmubSAOriCount(allmubSAOriCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2.5)
        }
    }

    function handleShadowStaffUnbindIncrement(event) {
        setShadowWeaponChoiceState("staff")
        if (shadowStaffUnbindState < event.target.value) {
            if (event.target.value - shadowStaffUnbindState == 1) {
                setShadowStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubSAStSilverMaskCountState(mubSAStSilverMaskCount - 40)
                    setwbSAStSilverMaskCountState(wbSAStSilverMaskCount - 40)
                    setmubSAStGoldMaskCountState(mubSAStGoldMaskCount - 30)
                    setwbSAStGoldMaskCountState(wbSAStGoldMaskCount - 30)
                    setmubSAStSandCountState(mubSAStSandCount - 1)
                    setwbSAStSandCountState(wbSAStSandCount - 1)
                    setmubSAStRupeeCost(mubSAStRupeeCost - 2)
                    setwbSAStRupeeCost(wbSAStRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSASandCount(allmubSASandCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubSAStSilverMaskCountState(mubSAStSilverMaskCount - 16)
                    setwbSAStSilverMaskCountState(wbSAStSilverMaskCount - 16)
                    setmubSAStGoldMaskCountState(mubSAStGoldMaskCount - 10)
                    setwbSAStGoldMaskCountState(wbSAStGoldMaskCount - 10)
                    setmubSAStInsanityCountState(mubSAStInsanityCount - 7)
                    setwbSAStInsanityCountState(wbSAStInsanityCount - 7)
                    setmubSAStOriCountState(mubSAStOriCount - 1)
                    setwbSAStOriCountState(wbSAStOriCount - 1)
                    setmubSAStRupeeCost(mubSAStRupeeCost - 7.5)
                    setwbSAStRupeeCost(wbSAStRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubSAStSilverMaskCountState(mubSAStSilverMaskCount - 16)
                    setmubSAStGoldMaskCountState(mubSAStGoldMaskCount - 10)
                    setmubSAStInsanityCountState(mubSAStInsanityCount - 7)
                    setmubSAStOriCountState(mubSAStOriCount - 1)
                    setmubSAStRupeeCost(mubSAStRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubSAStSilverMaskCountState(mubSAStSilverMaskCount - 80)
                    setmubSAStGoldMaskCountState(mubSAStGoldMaskCount - 70)
                    setmubSAStInsanityCountState(mubSAStInsanityCount - 30)
                    setmubSAStGaleCountState(mubSAStGaleCount - 20)
                    setmubSAStOriCountState(mubSAStOriCount - 20)
                    setmubSAStRupeeCost(mubSAStRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 30)
                    setallmubSAGaleCount(allmubSAGaleCount - 20)
                    setallmubSAOriCount(allmubSAOriCount - 20)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
            }
        }
        else if (shadowStaffUnbindState > event.target.value) {
            if (shadowStaffUnbindState - event.target.value == 1) {
                setShadowStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubSAStSilverMaskCountState(mubSAStSilverMaskCount + 40)
                    setwbSAStSilverMaskCountState(wbSAStSilverMaskCount + 40)
                    setmubSAStGoldMaskCountState(mubSAStGoldMaskCount + 30)
                    setwbSAStGoldMaskCountState(wbSAStGoldMaskCount + 30)
                    setmubSAStSandCountState(mubSAStSandCount + 1)
                    setwbSAStSandCountState(wbSAStSandCount + 1)
                    setmubSAStRupeeCost(mubSAStRupeeCost + 2)
                    setwbSAStRupeeCost(wbSAStRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSASandCount(allmubSASandCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubSAStSilverMaskCountState(mubSAStSilverMaskCount + 16)
                    setwbSAStSilverMaskCountState(wbSAStSilverMaskCount + 16)
                    setmubSAStGoldMaskCountState(mubSAStGoldMaskCount + 10)
                    setwbSAStGoldMaskCountState(wbSAStGoldMaskCount + 10)
                    setmubSAStInsanityCountState(mubSAStInsanityCount + 7)
                    setwbSAStInsanityCountState(wbSAStInsanityCount + 7)
                    setmubSAStOriCountState(mubSAStOriCount + 1)
                    setwbSAStOriCountState(wbSAStOriCount + 1)
                    setmubSAStRupeeCost(mubSAStRupeeCost + 7.5)
                    setwbSAStRupeeCost(wbSAStRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubSAStSilverMaskCountState(mubSAStSilverMaskCount + 16)
                    setmubSAStGoldMaskCountState(mubSAStGoldMaskCount + 10)
                    setmubSAStInsanityCountState(mubSAStInsanityCount + 7)
                    setmubSAStOriCountState(mubSAStOriCount + 1)
                    setmubSAStRupeeCost(mubSAStRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubSAStSilverMaskCountState(mubSAStSilverMaskCount + 80)
                    setmubSAStGoldMaskCountState(mubSAStGoldMaskCount + 70)
                    setmubSAStInsanityCountState(mubSAStInsanityCount + 30)
                    setmubSAStGaleCountState(mubSAStGaleCount + 20)
                    setmubSAStOriCountState(mubSAStOriCount + 20)
                    setmubSAStRupeeCost(mubSAStRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 30)
                    setallmubSAGaleCount(allmubSAGaleCount + 20)
                    setallmubSAOriCount(allmubSAOriCount + 20)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
            }
        }
    }

    function handleShadowStaffRefineIncrement(event) {
        setShadowWeaponChoiceState("staff");
        if (shadowStaffRefineState < event.target.value) {
            if (event.target.value - shadowStaffRefineState == 1) {
                setShadowStaffRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubSAStSilverMaskCountState(mubSAStSilverMaskCount - 16);
                    setwbSAStSilverMaskCountState(wbSAStSilverMaskCount - 16);
                    setmubSAStGoldMaskCountState(mubSAStGoldMaskCount - 10);
                    setwbSAStGoldMaskCountState(wbSAStGoldMaskCount - 10);
                    setmubSAStInsanityCountState(mubSAStInsanityCount - 7);
                    setwbSAStInsanityCountState(wbSAStInsanityCount - 7);
                    setmubSAStOriCountState(mubSAStOriCount - 1);
                    setwbSAStOriCountState(wbSAStOriCount - 1);
                    setmubSAStRupeeCost(mubSAStRupeeCost - 2.5);
                    setwbSAStRupeeCost(wbSAStRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubSAStSilverMaskCountState(mubSAStSilverMaskCount - 40)
                    setmubSAStGoldMaskCountState(mubSAStGoldMaskCount - 30);
                    setmubSAStInsanityCountState(mubSAStInsanityCount - 10);
                    setmubSAStGaleCountState(mubSAStGaleCount - 10);
                    setmubSAStOriCountState(mubSAStOriCount - 10);
                    setmubSAStRupeeCost(mubSAStRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 10)
                    setallmubSAGaleCount(allmubSAGaleCount - 10)
                    setallmubSAOriCount(allmubSAOriCount - 10)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
            }
        }
        else if (shadowStaffRefineState > event.target.value) {
            if (shadowStaffRefineState - event.target.value == 1) {
                setShadowStaffRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubSAStSilverMaskCountState(mubSAStSilverMaskCount + 16);
                    setwbSAStSilverMaskCountState(wbSAStSilverMaskCount + 16);
                    setmubSAStGoldMaskCountState(mubSAStGoldMaskCount + 10);
                    setwbSAStGoldMaskCountState(wbSAStGoldMaskCount + 10);
                    setmubSAStInsanityCountState(mubSAStInsanityCount + 7);
                    setwbSAStInsanityCountState(wbSAStInsanityCount + 7);
                    setmubSAStOriCountState(mubSAStOriCount + 1);
                    setwbSAStOriCountState(wbSAStOriCount + 1);
                    setmubSAStRupeeCost(mubSAStRupeeCost + 2.5);
                    setwbSAStRupeeCost(wbSAStRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubSAStSilverMaskCountState(mubSAStSilverMaskCount + 40)
                    setmubSAStGoldMaskCountState(mubSAStGoldMaskCount + 30);
                    setmubSAStInsanityCountState(mubSAStInsanityCount + 10);
                    setmubSAStGaleCountState(mubSAStGaleCount + 10);
                    setmubSAStOriCountState(mubSAStOriCount + 10);
                    setmubSAStRupeeCost(mubSAStRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 10)
                    setallmubSAGaleCount(allmubSAGaleCount + 10)
                    setallmubSAOriCount(allmubSAOriCount + 10)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
            }
        }
    }

    function craftShadowManacaster() {
        if (shadowManacasterCraftState == "grayscale(100%)") {
            setShadowManacasterCraftState("grayscale(0%)")
            setShadowWeaponChoiceState("manacaster")
            setmubSAMSilverMaskCountState(mubSAMSilverMaskCount - 40)
            setwbSAMSilverMaskCountState(wbSAMSilverMaskCount - 40)
            setmubSAMGoldMaskCountState(mubSAMGoldMaskCount - 30)
            setwbSAMGoldMaskCountState(wbSAMGoldMaskCount - 30)
            setmubSAMSandCountState(mubSAMSandCount - 1)
            setwbSAMSandCountState(wbSAMSandCount - 1)
            setmubSAMRupeeCost(mubSAMRupeeCost - 2)
            setwbSAMRupeeCost(wbSAMRupeeCost - 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
            setallmubSASandCount(allmubSASandCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2)
        }
        else if (shadowManacasterCraftState == "grayscale(0%)") {
            setShadowManacasterCraftState("grayscale(100%)")
            setShadowWeaponChoiceState("manacaster")
            setmubSAMSilverMaskCountState(mubSAMSilverMaskCount + 40)
            setwbSAMSilverMaskCountState(wbSAMSilverMaskCount + 40)
            setmubSAMGoldMaskCountState(mubSAMGoldMaskCount + 30)
            setwbSAMGoldMaskCountState(wbSAMGoldMaskCount + 30)
            setmubSAMSandCountState(mubSAMSandCount + 1)
            setwbSAMSandCountState(wbSAMSandCount + 1)
            setmubSAMRupeeCost(mubSAMRupeeCost + 2)
            setwbSAMRupeeCost(wbSAMRupeeCost + 2)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
            setallmubSASandCount(allmubSASandCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2)
        }
    }

    function shadowManacasterWeaponBonus() {
        if (shadowManacasterWeaponBonusState == "grayscale(100%)") {
            setShadowManacasterWeaponBonusState("grayscale(0%)");
            setShadowWeaponChoiceState("manacaster");
            setmubSAMSilverMaskCountState(mubSAMSilverMaskCount - 100)
            setwbSAMSilverMaskCountState(wbSAMSilverMaskCount - 100)
            setmubSAMGoldMaskCountState(mubSAMGoldMaskCount - 100)
            setwbSAMGoldMaskCountState(wbSAMGoldMaskCount - 100)
            setmubSAMInsanityCountState(mubSAMInsanityCount - 14)
            setwbSAMInsanityCountState(wbSAMInsanityCount - 14)
            setmubSAMOriCountState(mubSAMOriCount - 30)
            setwbSAMOriCountState(wbSAMOriCount - 30)
            setmubSAMRupeeCost(mubSAMRupeeCost - 10)
            setwbSAMRupeeCost(wbSAMRupeeCost - 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 100)
            setallmubSAInsanityCount(allmubSAInsanityCount - 14)
            setallmubSAOriCount(allmubSAOriCount - 30)
            setallmubSARupeeCost(allmubSARupeeCost - 10)
        }
        else if (shadowManacasterWeaponBonusState == "grayscale(0%)") {
            setShadowManacasterWeaponBonusState("grayscale(100%)");
            setShadowWeaponChoiceState("manacaster");
            setmubSAMSilverMaskCountState(mubSAMSilverMaskCount + 100)
            setwbSAMSilverMaskCountState(wbSAMSilverMaskCount + 100)
            setmubSAMGoldMaskCountState(mubSAMGoldMaskCount + 100)
            setwbSAMGoldMaskCountState(wbSAMGoldMaskCount + 100)
            setmubSAMInsanityCountState(mubSAMInsanityCount + 14)
            setwbSAMInsanityCountState(wbSAMInsanityCount + 14)
            setmubSAMOriCountState(mubSAMOriCount + 30)
            setwbSAMOriCountState(wbSAMOriCount + 30)
            setmubSAMRupeeCost(mubSAMRupeeCost + 10)
            setwbSAMRupeeCost(wbSAMRupeeCost + 10)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 100)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 100)
            setallmubSAInsanityCount(allmubSAInsanityCount + 14)
            setallmubSAOriCount(allmubSAOriCount + 30)
            setallmubSARupeeCost(allmubSARupeeCost + 10)
        }
    }

    function shadowManacasterWyrmprintSlot() {
        if (shadowManacasterWyrmprintSlotState == "grayscale(100%)") {
            setShadowManacasterWyrmprintSlotState("grayscale(0%)");
            setShadowWeaponChoiceState("manacaster");
            setmubSAMSilverMaskCountState(mubSAMSilverMaskCount - 16)
            setmubSAMGoldMaskCountState(mubSAMGoldMaskCount - 10)
            setmubSAMOriCountState(mubSAMOriCount - 1)
            setmubSAMRupeeCost(mubSAMRupeeCost - 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
            setallmubSAOriCount(allmubSAOriCount - 1)
            setallmubSARupeeCost(allmubSARupeeCost - 2.5)
        }
        else if (shadowManacasterWyrmprintSlotState == "grayscale(0%)") {
            setShadowManacasterWyrmprintSlotState("grayscale(100%)");
            setShadowWeaponChoiceState("manacaster");
            setmubSAMSilverMaskCountState(mubSAMSilverMaskCount + 16)
            setmubSAMGoldMaskCountState(mubSAMGoldMaskCount + 10)
            setmubSAMOriCountState(mubSAMOriCount + 1)
            setmubSAMRupeeCost(mubSAMRupeeCost + 2.5)
            setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
            setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
            setallmubSAOriCount(allmubSAOriCount + 1)
            setallmubSARupeeCost(allmubSARupeeCost + 2.5)
        }
    }

    function handleShadowManacasterUnbindIncrement(event) {
        setShadowWeaponChoiceState("manacaster")
        if (shadowManacasterUnbindState < event.target.value) {
            if (event.target.value - shadowManacasterUnbindState == 1) {
                setShadowManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubSAMSilverMaskCountState(mubSAMSilverMaskCount - 40)
                    setwbSAMSilverMaskCountState(wbSAMSilverMaskCount - 40)
                    setmubSAMGoldMaskCountState(mubSAMGoldMaskCount - 30)
                    setwbSAMGoldMaskCountState(wbSAMGoldMaskCount - 30)
                    setmubSAMSandCountState(mubSAMSandCount - 1)
                    setwbSAMSandCountState(wbSAMSandCount - 1)
                    setmubSAMRupeeCost(mubSAMRupeeCost - 2)
                    setwbSAMRupeeCost(wbSAMRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSASandCount(allmubSASandCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubSAMSilverMaskCountState(mubSAMSilverMaskCount - 16)
                    setwbSAMSilverMaskCountState(wbSAMSilverMaskCount - 16)
                    setmubSAMGoldMaskCountState(mubSAMGoldMaskCount - 10)
                    setwbSAMGoldMaskCountState(wbSAMGoldMaskCount - 10)
                    setmubSAMInsanityCountState(mubSAMInsanityCount - 7)
                    setwbSAMInsanityCountState(wbSAMInsanityCount - 7)
                    setmubSAMOriCountState(mubSAMOriCount - 1)
                    setwbSAMOriCountState(wbSAMOriCount - 1)
                    setmubSAMRupeeCost(mubSAMRupeeCost - 7.5)
                    setwbSAMRupeeCost(wbSAMRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubSAMSilverMaskCountState(mubSAMSilverMaskCount - 16)
                    setmubSAMGoldMaskCountState(mubSAMGoldMaskCount - 10)
                    setmubSAMInsanityCountState(mubSAMInsanityCount - 7)
                    setmubSAMOriCountState(mubSAMOriCount - 1)
                    setmubSAMRupeeCost(mubSAMRupeeCost - 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubSAMSilverMaskCountState(mubSAMSilverMaskCount - 80)
                    setmubSAMGoldMaskCountState(mubSAMGoldMaskCount - 70)
                    setmubSAMInsanityCountState(mubSAMInsanityCount - 30)
                    setmubSAMGaleCountState(mubSAMGaleCount - 20)
                    setmubSAMOriCountState(mubSAMOriCount - 20)
                    setmubSAMRupeeCost(mubSAMRupeeCost - 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 30)
                    setallmubSAGaleCount(allmubSAGaleCount - 20)
                    setallmubSAOriCount(allmubSAOriCount - 20)
                    setallmubSARupeeCost(allmubSARupeeCost - 2)
                }
            }
        }
        else if (shadowManacasterUnbindState > event.target.value) {
            if (shadowManacasterUnbindState - event.target.value == 1) {
                setShadowManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubSAMSilverMaskCountState(mubSAMSilverMaskCount + 40)
                    setwbSAMSilverMaskCountState(wbSAMSilverMaskCount + 40)
                    setmubSAMGoldMaskCountState(mubSAMGoldMaskCount + 30)
                    setwbSAMGoldMaskCountState(wbSAMGoldMaskCount + 30)
                    setmubSAMSandCountState(mubSAMSandCount + 1)
                    setwbSAMSandCountState(wbSAMSandCount + 1)
                    setmubSAMRupeeCost(mubSAMRupeeCost + 2)
                    setwbSAMRupeeCost(wbSAMRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSASandCount(allmubSASandCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubSAMSilverMaskCountState(mubSAMSilverMaskCount + 16)
                    setwbSAMSilverMaskCountState(wbSAMSilverMaskCount + 16)
                    setmubSAMGoldMaskCountState(mubSAMGoldMaskCount + 10)
                    setwbSAMGoldMaskCountState(wbSAMGoldMaskCount + 10)
                    setmubSAMInsanityCountState(mubSAMInsanityCount + 7)
                    setwbSAMInsanityCountState(wbSAMInsanityCount + 7)
                    setmubSAMOriCountState(mubSAMOriCount + 1)
                    setwbSAMOriCountState(wbSAMOriCount + 1)
                    setmubSAMRupeeCost(mubSAMRupeeCost + 7.5)
                    setwbSAMRupeeCost(wbSAMRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubSAMSilverMaskCountState(mubSAMSilverMaskCount + 16)
                    setmubSAMGoldMaskCountState(mubSAMGoldMaskCount + 10)
                    setmubSAMInsanityCountState(mubSAMInsanityCount + 7)
                    setmubSAMOriCountState(mubSAMOriCount + 1)
                    setmubSAMRupeeCost(mubSAMRupeeCost + 7.5)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubSAMSilverMaskCountState(mubSAMSilverMaskCount + 80)
                    setmubSAMGoldMaskCountState(mubSAMGoldMaskCount + 70)
                    setmubSAMInsanityCountState(mubSAMInsanityCount + 30)
                    setmubSAMGaleCountState(mubSAMGaleCount + 20)
                    setmubSAMOriCountState(mubSAMOriCount + 20)
                    setmubSAMRupeeCost(mubSAMRupeeCost + 2)
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 80)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 70)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 30)
                    setallmubSAGaleCount(allmubSAGaleCount + 20)
                    setallmubSAOriCount(allmubSAOriCount + 20)
                    setallmubSARupeeCost(allmubSARupeeCost + 2)
                }
            }
        }
    }

    function handleShadowManacasterRefineIncrement(event) {
        setShadowWeaponChoiceState("manacaster");
        if (shadowManacasterRefineState < event.target.value) {
            if (event.target.value - shadowManacasterRefineState == 1) {
                setShadowManacasterRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubSAMSilverMaskCountState(mubSAMSilverMaskCount - 16);
                    setwbSAMSilverMaskCountState(wbSAMSilverMaskCount - 16);
                    setmubSAMGoldMaskCountState(mubSAMGoldMaskCount - 10);
                    setwbSAMGoldMaskCountState(wbSAMGoldMaskCount - 10);
                    setmubSAMInsanityCountState(mubSAMInsanityCount - 7);
                    setwbSAMInsanityCountState(wbSAMInsanityCount - 7);
                    setmubSAMOriCountState(mubSAMOriCount - 1);
                    setwbSAMOriCountState(wbSAMOriCount - 1);
                    setmubSAMRupeeCost(mubSAMRupeeCost - 2.5);
                    setwbSAMRupeeCost(wbSAMRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 7)
                    setallmubSAOriCount(allmubSAOriCount - 1)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubSAMSilverMaskCountState(mubSAMSilverMaskCount - 40)
                    setmubSAMGoldMaskCountState(mubSAMGoldMaskCount - 30);
                    setmubSAMInsanityCountState(mubSAMInsanityCount - 10);
                    setmubSAMGaleCountState(mubSAMGaleCount - 10);
                    setmubSAMOriCountState(mubSAMOriCount - 10);
                    setmubSAMRupeeCost(mubSAMRupeeCost - 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount - 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount - 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount - 10)
                    setallmubSAGaleCount(allmubSAGaleCount - 10)
                    setallmubSAOriCount(allmubSAOriCount - 10)
                    setallmubSARupeeCost(allmubSARupeeCost - 2.5)
                }
            }
        }
        else if (shadowManacasterRefineState > event.target.value) {
            if (shadowManacasterRefineState - event.target.value == 1) {
                setShadowManacasterRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubSAMSilverMaskCountState(mubSAMSilverMaskCount + 16);
                    setwbSAMSilverMaskCountState(wbSAMSilverMaskCount + 16);
                    setmubSAMGoldMaskCountState(mubSAMGoldMaskCount + 10);
                    setwbSAMGoldMaskCountState(wbSAMGoldMaskCount + 10);
                    setmubSAMInsanityCountState(mubSAMInsanityCount + 7);
                    setwbSAMInsanityCountState(wbSAMInsanityCount + 7);
                    setmubSAMOriCountState(mubSAMOriCount + 1);
                    setwbSAMOriCountState(wbSAMOriCount + 1);
                    setmubSAMRupeeCost(mubSAMRupeeCost + 2.5);
                    setwbSAMRupeeCost(wbSAMRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 16)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 10)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 7)
                    setallmubSAOriCount(allmubSAOriCount + 1)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubSAMSilverMaskCountState(mubSAMSilverMaskCount + 40)
                    setmubSAMGoldMaskCountState(mubSAMGoldMaskCount + 30);
                    setmubSAMInsanityCountState(mubSAMInsanityCount + 10);
                    setmubSAMGaleCountState(mubSAMGaleCount + 10);
                    setmubSAMOriCountState(mubSAMOriCount + 10);
                    setmubSAMRupeeCost(mubSAMRupeeCost + 2.5);
                    setallmubSASilverMaskCount(allmubSASilverMaskCount + 40)
                    setallmubSAGoldMaskCount(allmubSAGoldMaskCount + 30)
                    setallmubSAInsanityCount(allmubSAInsanityCount + 10)
                    setallmubSAGaleCount(allmubSAGaleCount + 10)
                    setallmubSAOriCount(allmubSAOriCount + 10)
                    setallmubSARupeeCost(allmubSARupeeCost + 2.5)
                }
            }
        }
    }

    return (
        <div>
            <AgitoNavTabs />
            <Flex>&nbsp;</Flex>
            <Flex flexWrap="wrap">
                {/* The box for all the weapons */}
                <Box width={[6 / 7, 1 / 2]} p={3} m={3} bg={"#152238"} sx={{ border: "3px solid blue" }}>
                    <Flex alignItems="center">
                        <Box width={[2 / 5]}>

                        </Box>
                        <Box width={[0, 3 / 5]}>
                            <Text fontSize={[1, 3]} ml="auto" mr="auto" color="purple">Shadow Agito Weapons</Text>
                        </Box>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={ShadowAgitoSword} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: shadowSwordCraftState }} onClick={craftShadowSword} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="purple">Yitian Jian</Text>
                            </Flex>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 6, 1 / 3]}>

                                    </Box>
                                    <Image src={Unbind} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowSwordUnbindIncrement}
                                        defaultValue={shadowSwordUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowSwordUnbindState}</Text>
                                </Flex>
                            </Box>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 8, 1 / 3]}></Box>
                                    <Image src={Refine} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowSwordRefineIncrement}
                                        defaultValue={shadowSwordRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowSwordRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: shadowSwordWeaponBonusState }} onClick={shadowSwordWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: shadowSwordWyrmprintSlotState }} onClick={shadowSwordWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={ShadowAgitoBlade} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: shadowBladeCraftState }} onClick={craftShadowBlade} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="purple">Qixing Baodao</Text>
                            </Flex>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 6, 1 / 3]}>

                                    </Box>
                                    <Image src={Unbind} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowBladeUnbindIncrement}
                                        defaultValue={shadowBladeUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowBladeUnbindState}</Text>
                                </Flex>
                            </Box>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 8, 1 / 3]}></Box>
                                    <Image src={Refine} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowBladeRefineIncrement}
                                        defaultValue={shadowBladeRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowBladeRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: shadowBladeWeaponBonusState }} onClick={shadowBladeWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: shadowBladeWyrmprintSlotState }} onClick={shadowBladeWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={ShadowAgitoDagger} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: shadowDaggerCraftState }} onClick={craftShadowDagger} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="purple">Qinghong Jian</Text>
                            </Flex>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 6, 1 / 3]}>

                                    </Box>
                                    <Image src={Unbind} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowDaggerUnbindIncrement}
                                        defaultValue={shadowDaggerUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowDaggerUnbindState}</Text>
                                </Flex>
                            </Box>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 8, 1 / 3]}></Box>
                                    <Image src={Refine} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowDaggerRefineIncrement}
                                        defaultValue={shadowDaggerRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowDaggerRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: shadowDaggerWeaponBonusState }} onClick={shadowDaggerWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: shadowDaggerWyrmprintSlotState }} onClick={shadowDaggerWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={ShadowAgitoAxe} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: shadowAxeCraftState }} onClick={craftShadowAxe} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="purple">Fangtian Huaji</Text>
                            </Flex>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 6, 1 / 3]}>

                                    </Box>
                                    <Image src={Unbind} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowAxeUnbindIncrement}
                                        defaultValue={shadowAxeUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowAxeUnbindState}</Text>
                                </Flex>
                            </Box>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 8, 1 / 3]}></Box>
                                    <Image src={Refine} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowAxeRefineIncrement}
                                        defaultValue={shadowAxeRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowAxeRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: shadowAxeWeaponBonusState }} onClick={shadowAxeWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: shadowAxeWyrmprintSlotState }} onClick={shadowAxeWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={ShadowAgitoLance} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: shadowLanceCraftState }} onClick={craftShadowLance} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="purple">Qinglong Yanyuedao</Text>
                            </Flex>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 6, 1 / 3]}>

                                    </Box>
                                    <Image src={Unbind} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowLanceUnbindIncrement}
                                        defaultValue={shadowLanceUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowLanceUnbindState}</Text>
                                </Flex>
                            </Box>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 8, 1 / 3]}></Box>
                                    <Image src={Refine} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowLanceRefineIncrement}
                                        defaultValue={shadowLanceRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowLanceRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: shadowLanceWeaponBonusState }} onClick={shadowLanceWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: shadowLanceWyrmprintSlotState }} onClick={shadowLanceWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={ShadowAgitoBow} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: shadowBowCraftState }} onClick={craftShadowBow} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="purple">Longshe Gong</Text>
                            </Flex>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 6, 1 / 3]}>

                                    </Box>
                                    <Image src={Unbind} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowBowUnbindIncrement}
                                        defaultValue={shadowBowUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowBowUnbindState}</Text>
                                </Flex>
                            </Box>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 8, 1 / 3]}></Box>
                                    <Image src={Refine} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowBowRefineIncrement}
                                        defaultValue={shadowBowRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowBowRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: shadowBowWeaponBonusState }} onClick={shadowBowWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: shadowBowWyrmprintSlotState }} onClick={shadowBowWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={ShadowAgitoWand} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: shadowWandCraftState }} onClick={craftShadowWand} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="purple">Jiu Ci</Text>
                            </Flex>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 6, 1 / 3]}>

                                    </Box>
                                    <Image src={Unbind} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowWandUnbindIncrement}
                                        defaultValue={shadowWandUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowWandUnbindState}</Text>
                                </Flex>
                            </Box>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 8, 1 / 3]}></Box>
                                    <Image src={Refine} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowWandRefineIncrement}
                                        defaultValue={shadowWandRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowWandRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: shadowWandWeaponBonusState }} onClick={shadowWandWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: shadowWandWyrmprintSlotState }} onClick={shadowWandWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={ShadowAgitoStaff} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: shadowStaffCraftState }} onClick={craftShadowStaff} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="purple">Li Zhang</Text>
                            </Flex>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 6, 1 / 3]}>

                                    </Box>
                                    <Image src={Unbind} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowStaffUnbindIncrement}
                                        defaultValue={shadowStaffUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowStaffUnbindState}</Text>
                                </Flex>
                            </Box>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 8, 1 / 3]}></Box>
                                    <Image src={Refine} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowStaffRefineIncrement}
                                        defaultValue={shadowStaffRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowStaffRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: shadowStaffWeaponBonusState }} onClick={shadowStaffWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: shadowStaffWyrmprintSlotState }} onClick={shadowStaffWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={FireAgitoManacaster} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: shadowManacasterCraftState }} onClick={craftShadowManacaster} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="purple">???</Text>
                            </Flex>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 6, 1 / 3]}>

                                    </Box>
                                    <Image src={Unbind} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowManacasterUnbindIncrement}
                                        defaultValue={shadowManacasterUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowManacasterUnbindState}</Text>
                                </Flex>
                            </Box>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={[1 / 8, 1 / 3]}></Box>
                                    <Image src={Refine} sx={{ width: ["30%", "35%"] }} />
                                </Flex>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Slider
                                        onChange={handleShadowManacasterRefineIncrement}
                                        defaultValue={shadowManacasterRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="purple"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="purple" fontSize={[1, 3]}>{shadowManacasterRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: shadowManacasterWeaponBonusState }} onClick={shadowManacasterWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: shadowManacasterWyrmprintSlotState }} onClick={shadowManacasterWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                </Box>
                {/* The box for the materials needed to 100% a weapon */}
                {shadowWeaponSelection()}
            </Flex>
            <Flex>&nbsp;</Flex>
            <Flex>
                <Box width={[6 / 7, 1 / 2]} p={3} m={3} bg={"#152238"} sx={{ border: "3px solid blue" }}>
                    <Flex>
                        {/* <Box width={1 / 4}></Box> */}
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Materials Needed to MUB all Weapons</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{allmubSASilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{allmubSAGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{allmubSAInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{allmubSAGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{allmubSASandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{allmubSAOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{allmubSARupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Flex>
            <Flex>&nbsp;</Flex>
            <WeaponTypeNavTabs />
        </div>
    )
}