import React, { useState } from 'react'
import AgitoNavTabs from "./AgitoNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"
import { Box, Text, Flex, Card, Image } from "rebass";
import { Slider } from "@rebass/forms";

import FireAgitoSword from "../Images/Fire_Agito_Sword.png";
import FireAgitoBlade from "../Images/Fire_Agito_Blade.png";
import FireAgitoDagger from "../Images/Fire_Agito_Dagger.png";
import FireAgitoAxe from "../Images/Fire_Agito_Axe.png";
import FireAgitoLance from "../Images/Fire_Agito_Lance.png";
import FireAgitoBow from "../Images/Fire_Agito_Bow.png";
import FireAgitoWand from "../Images/Fire_Agito_Wand.png";
import FireAgitoStaff from "../Images/Fire_Agito_Staff.png";
import FireAgitoManacaster from "../Images/Fire_Agito_Manacaster.png";

import FireAgitoSilverMask from "../Images/Fire_Agito_Silver_Mask.png";
import FireAgitoGoldMask from "../Images/Fire_Agito_Gold_Mask.png";
import FireAgitoInsanity from "../Images/Fire_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";

import Refine from "../Images/Refine.PNG";
import Unbind from "../Images/Unbind.PNG";
import WyrmprintSlots from "../Images/Wyrmprint_Slots.PNG";
import WeaponBonus from "../Images/Weapon_Bonus.PNG";

import FireAgitoSwordCost from "./FireAgitoSwordMats"
import FireAgitoBladeCost from "./FireAgitoBladeMats"
import FireAgitoDaggerCost from "./FireAgitoDaggerMats"
import FireAgitoAxeCost from "./FireAgitoAxeMats"
import FireAgitoLanceCost from "./FireAgitoLanceMats"
import FireAgitoBowCost from "./FireAgitoBowMats"
import FireAgitoWandCost from "./FireAgitoWandMats"
import FireAgitoStaffCost from "./FireAgitoStaffMats"
import FireAgitoManacasterCost from "./FireAgitoManacasterMats"

export default function FireAgitoWeapons() {
    const [fireWeaponChoice, setFireWeaponChoiceState] = useLocalStorage("fireWeaponChoice", "sword")

    const [allmubFASilverMaskCount, setallmubFASilverMaskCount] = useLocalStorage("allmubFASilverMaskState", 4644)
    const [allmubFAGoldMaskCount, setallmubFAGoldMaskCount] = useLocalStorage("allmubFAGoldMaskState", 3690)
    const [allmubFAInsanityCount, setallmubFAInsanityCount] = useLocalStorage("allmubFAInsanityCount", 801)
    const [allmubFAGaleCount, setallmubFAGaleCount] = useLocalStorage("allmubFAGaleCount", 270)
    const [allmubFASandCount, setallmubFASandCount] = useLocalStorage("allmubFASandCount", 45)
    const [allmubFAOriCount, setallmubFAOriCount] = useLocalStorage("allmubFAOriCount", 594)
    const [allmubFARupeeCost, setallmubFARupeeCost] = useLocalStorage("allmubFARupeeCost", 535.5)

    const [fireSwordCraftState, setFireSwordCraftState] = useLocalStorage("fireSwordCraftState", "grayscale(100%)")
    const [fireSwordWeaponBonusState, setFireSwordWeaponBonusState] = useLocalStorage("fireSwordWeaponBonusState", "grayscale(100%)")
    const [fireSwordWyrmprintSlotState, setFireSwordWyrmprintSlotState] = useLocalStorage("fireSwordWyrmprintSlotState", "grayscale(100%)")
    const [fireSwordUnbindState, setFireSwordUnbindState] = useLocalStorage("fireSwordUnbindState", 0);
    const [fireSwordRefineState, setFireSwordRefineState] = useLocalStorage("fireSwordRefineState", 0);

    const [mubFASSilverMaskCount, setmubFASSilverMaskCountState] = useLocalStorage("mubFASSilverMaskCount", 516);
    const [mubFASGoldMaskCount, setmubFASGoldMaskCountState] = useLocalStorage("mubFASGoldMaskCount", 410);
    const [mubFASInsanityCount, setmubFASInsanityCountState] = useLocalStorage("mubFASInsanityCount", 89);
    const [mubFASGaleCount, setmubFASGaleCountState] = useLocalStorage("mubFASGaleCount", 30);
    const [mubFASSandCount, setmubFASSandCountState] = useLocalStorage("mubFASSandCount", 5);
    const [mubFASOriCount, setmubFASOriCountState] = useLocalStorage("mubFASOriCount", 66);
    const [mubFASRupeeCost, setmubFASRupeeCost] = useLocalStorage("mubFASRupeeCost", 59.5);

    const [wbFASSilverMaskCount, setwbFASSilverMaskCountState] = useLocalStorage("wbFASSilverMaskCount", 332);
    const [wbFASGoldMaskCount, setwbFASGoldMaskCountState] = useLocalStorage("wbFASGoldMaskCount", 270);
    const [wbFASInsanityCount, setwbFASInsanityCountState] = useLocalStorage("wbFASInsanityCount", 28);
    const [wbFASSandCount, setwbFASSandCountState] = useLocalStorage("wbFASSandCount", 5);
    const [wbFASOriCount, setwbFASOriCountState] = useLocalStorage("wbFASOriCount", 32);
    const [wbFASRupeeCost, setwbFASRupeeCost] = useLocalStorage("wbFASRupeeCost", 30);

    const [fireBladeCraftState, setFireBladeCraftState] = useLocalStorage("fireBladeCraftState", "grayscale(100%)")
    const [fireBladeWeaponBonusState, setFireBladeWeaponBonusState] = useLocalStorage("fireBladeWeaponBonusState", "grayscale(100%)")
    const [fireBladeWyrmprintSlotState, setFireBladeWyrmprintSlotState] = useLocalStorage("fireBladeWyrmprintSlotState", "grayscale(100%)")
    const [fireBladeUnbindState, setFireBladeUnbindState] = useLocalStorage("fireBladeUnbindState", 0);
    const [fireBladeRefineState, setFireBladeRefineState] = useLocalStorage("fireBladeRefineState", 0);

    const [mubFABlSilverMaskCount, setmubFABlSilverMaskCountState] = useLocalStorage("mubFABlSilverMaskCount", 516);
    const [mubFABlGoldMaskCount, setmubFABlGoldMaskCountState] = useLocalStorage("mubFABlGoldMaskCount", 410);
    const [mubFABlInsanityCount, setmubFABlInsanityCountState] = useLocalStorage("mubFABlInsanityCount", 89);
    const [mubFABlGaleCount, setmubFABlGaleCountState] = useLocalStorage("mubFABlGaleCount", 30);
    const [mubFABlSandCount, setmubFABlSandCountState] = useLocalStorage("mubFABlSandCount", 5);
    const [mubFABlOriCount, setmubFABlOriCountState] = useLocalStorage("mubFABlOriCount", 66);
    const [mubFABlRupeeCost, setmubFABlRupeeCost] = useLocalStorage("mubFABlRupeeCost", 59.5);

    const [wbFABlSilverMaskCount, setwbFABlSilverMaskCountState] = useLocalStorage("wbFABlSilverMaskCount", 332);
    const [wbFABlGoldMaskCount, setwbFABlGoldMaskCountState] = useLocalStorage("wbFABlGoldMaskCount", 270);
    const [wbFABlInsanityCount, setwbFABlInsanityCountState] = useLocalStorage("wbFABlInsanityCount", 28);
    const [wbFABlSandCount, setwbFABlSandCountState] = useLocalStorage("wbFABlSandCount", 5);
    const [wbFABlOriCount, setwbFABlOriCountState] = useLocalStorage("wbFABlOriCount", 32);
    const [wbFABlRupeeCost, setwbFABlRupeeCost] = useLocalStorage("wbFABlRupeeCost", 30);

    const [fireDaggerCraftState, setFireDaggerCraftState] = useLocalStorage("fireDaggerCraftState", "grayscale(100%)")
    const [fireDaggerWeaponBonusState, setFireDaggerWeaponBonusState] = useLocalStorage("fireDaggerWeaponBonusState", "grayscale(100%)")
    const [fireDaggerWyrmprintSlotState, setFireDaggerWyrmprintSlotState] = useLocalStorage("fireDaggerWyrmprintSlotState", "grayscale(100%)")
    const [fireDaggerUnbindState, setFireDaggerUnbindState] = useLocalStorage("fireDaggerUnbindState", 0);
    const [fireDaggerRefineState, setFireDaggerRefineState] = useLocalStorage("fireDaggerRefineState", 0);

    const [mubFADSilverMaskCount, setmubFADSilverMaskCountState] = useLocalStorage("mubFADSilverMaskCount", 516);
    const [mubFADGoldMaskCount, setmubFADGoldMaskCountState] = useLocalStorage("mubFADASGoldMaskCount", 410);
    const [mubFADInsanityCount, setmubFADInsanityCountState] = useLocalStorage("mubFADInsanityCount", 89);
    const [mubFADGaleCount, setmubFADGaleCountState] = useLocalStorage("mubFADGaleCount", 30);
    const [mubFADSandCount, setmubFADSandCountState] = useLocalStorage("mubFADSandCount", 5);
    const [mubFADOriCount, setmubFADOriCountState] = useLocalStorage("mubFADOriCount", 66);
    const [mubFADRupeeCost, setmubFADRupeeCost] = useLocalStorage("mubFADRupeeCost", 59.5);

    const [wbFADSilverMaskCount, setwbFADSilverMaskCountState] = useLocalStorage("wbFADSilverMaskCount", 332);
    const [wbFADGoldMaskCount, setwbFADGoldMaskCountState] = useLocalStorage("wbFADGoldMaskCount", 270);
    const [wbFADInsanityCount, setwbFADInsanityCountState] = useLocalStorage("wbFADInsanityCount", 28);
    const [wbFADSandCount, setwbFADSandCountState] = useLocalStorage("wbFADSandCount", 5);
    const [wbFADOriCount, setwbFADOriCountState] = useLocalStorage("wbFADOriCount", 32);
    const [wbFADRupeeCost, setwbFADRupeeCost] = useLocalStorage("wbFADRupeeCost", 30);

    const [fireAxeCraftState, setFireAxeCraftState] = useLocalStorage("fireAxeCraftState", "grayscale(100%)")
    const [fireAxeWeaponBonusState, setFireAxeWeaponBonusState] = useLocalStorage("fireAxeWeaponBonusState", "grayscale(100%)")
    const [fireAxeWyrmprintSlotState, setFireAxeWyrmprintSlotState] = useLocalStorage("fireAxeWyrmprintSlotState", "grayscale(100%)")
    const [fireAxeUnbindState, setFireAxeUnbindState] = useLocalStorage("fireAxeUnbindState", 0);
    const [fireAxeRefineState, setFireAxeRefineState] = useLocalStorage("fireAxeRefineState", 0);

    const [mubFAASilverMaskCount, setmubFAASilverMaskCountState] = useLocalStorage("mubFAASilverMaskCount", 516);
    const [mubFAAGoldMaskCount, setmubFAAGoldMaskCountState] = useLocalStorage("mubFAAASGoldMaskCount", 410);
    const [mubFAAInsanityCount, setmubFAAInsanityCountState] = useLocalStorage("mubFAAInsanityCount", 89);
    const [mubFAAGaleCount, setmubFAAGaleCountState] = useLocalStorage("mubFAAGaleCount", 30);
    const [mubFAASandCount, setmubFAASandCountState] = useLocalStorage("mubFAASandCount", 5);
    const [mubFAAOriCount, setmubFAAOriCountState] = useLocalStorage("mubFAAOriCount", 66);
    const [mubFAARupeeCost, setmubFAARupeeCost] = useLocalStorage("mubFAARupeeCost", 59.5);

    const [wbFAASilverMaskCount, setwbFAASilverMaskCountState] = useLocalStorage("wbFAASilverMaskCount", 332);
    const [wbFAAGoldMaskCount, setwbFAAGoldMaskCountState] = useLocalStorage("wbFAAGoldMaskCount", 270);
    const [wbFAAInsanityCount, setwbFAAInsanityCountState] = useLocalStorage("wbFAAInsanityCount", 28);
    const [wbFAASandCount, setwbFAASandCountState] = useLocalStorage("wbFAASandCount", 5);
    const [wbFAAOriCount, setwbFAAOriCountState] = useLocalStorage("wbFAAOriCount", 32);
    const [wbFAARupeeCost, setwbFAARupeeCost] = useLocalStorage("wbFAARupeeCost", 30);

    const [fireLanceCraftState, setFireLanceCraftState] = useLocalStorage("fireLanceCraftState", "grayscale(100%)")
    const [fireLanceWeaponBonusState, setFireLanceWeaponBonusState] = useLocalStorage("fireLanceWeaponBonusState", "grayscale(100%)")
    const [fireLanceWyrmprintSlotState, setFireLanceWyrmprintSlotState] = useLocalStorage("fireLanceWyrmprintSlotState", "grayscale(100%)")
    const [fireLanceUnbindState, setFireLanceUnbindState] = useLocalStorage("fireLanceUnbindState", 0);
    const [fireLanceRefineState, setFireLanceRefineState] = useLocalStorage("fireLanceRefineState", 0);

    const [mubFALSilverMaskCount, setmubFALSilverMaskCountState] = useLocalStorage("mubFALSilverMaskCount", 516);
    const [mubFALGoldMaskCount, setmubFALGoldMaskCountState] = useLocalStorage("mubFALASGoldMaskCount", 410);
    const [mubFALInsanityCount, setmubFALInsanityCountState] = useLocalStorage("mubFALInsanityCount", 89);
    const [mubFALGaleCount, setmubFALGaleCountState] = useLocalStorage("mubFALGaleCount", 30);
    const [mubFALSandCount, setmubFALSandCountState] = useLocalStorage("mubFALSandCount", 5);
    const [mubFALOriCount, setmubFALOriCountState] = useLocalStorage("mubFALOriCount", 66);
    const [mubFALRupeeCost, setmubFALRupeeCost] = useLocalStorage("mubFALRupeeCost", 59.5);

    const [wbFALSilverMaskCount, setwbFALSilverMaskCountState] = useLocalStorage("wbFALSilverMaskCount", 332);
    const [wbFALGoldMaskCount, setwbFALGoldMaskCountState] = useLocalStorage("wbFALGoldMaskCount", 270);
    const [wbFALInsanityCount, setwbFALInsanityCountState] = useLocalStorage("wbFALInsanityCount", 28);
    const [wbFALSandCount, setwbFALSandCountState] = useLocalStorage("wbFALSandCount", 5);
    const [wbFALOriCount, setwbFALOriCountState] = useLocalStorage("wbFALOriCount", 32);
    const [wbFALRupeeCost, setwbFALRupeeCost] = useLocalStorage("wbFALRupeeCost", 30);

    const [fireBowCraftState, setFireBowCraftState] = useLocalStorage("fireBowCraftState", "grayscale(100%)")
    const [fireBowWeaponBonusState, setFireBowWeaponBonusState] = useLocalStorage("fireBowWeaponBonusState", "grayscale(100%)")
    const [fireBowWyrmprintSlotState, setFireBowWyrmprintSlotState] = useLocalStorage("fireBowWyrmprintSlotState", "grayscale(100%)")
    const [fireBowUnbindState, setFireBowUnbindState] = useLocalStorage("fireBowUnbindState", 0);
    const [fireBowRefineState, setFireBowRefineState] = useLocalStorage("fireBowRefineState", 0);

    const [mubFABoSilverMaskCount, setmubFABoSilverMaskCountState] = useLocalStorage("mubFABoSilverMaskCount", 516);
    const [mubFABoGoldMaskCount, setmubFABoGoldMaskCountState] = useLocalStorage("mubFABoASGoldMaskCount", 410);
    const [mubFABoInsanityCount, setmubFABoInsanityCountState] = useLocalStorage("mubFABoInsanityCount", 89);
    const [mubFABoGaleCount, setmubFABoGaleCountState] = useLocalStorage("mubFABoGaleCount", 30);
    const [mubFABoSandCount, setmubFABoSandCountState] = useLocalStorage("mubFABoSandCount", 5);
    const [mubFABoOriCount, setmubFABoOriCountState] = useLocalStorage("mubFABoOriCount", 66);
    const [mubFABoRupeeCost, setmubFABoRupeeCost] = useLocalStorage("mubFABoRupeeCost", 59.5);

    const [wbFABoSilverMaskCount, setwbFABoSilverMaskCountState] = useLocalStorage("wbFABoSilverMaskCount", 332);
    const [wbFABoGoldMaskCount, setwbFABoGoldMaskCountState] = useLocalStorage("wbFABoGoldMaskCount", 270);
    const [wbFABoInsanityCount, setwbFABoInsanityCountState] = useLocalStorage("wbFABoInsanityCount", 28);
    const [wbFABoSandCount, setwbFABoSandCountState] = useLocalStorage("wbFABoSandCount", 5);
    const [wbFABoOriCount, setwbFABoOriCountState] = useLocalStorage("wbFABoOriCount", 32);
    const [wbFABoRupeeCost, setwbFABoRupeeCost] = useLocalStorage("wbFABoRupeeCost", 30);

    const [fireWandCraftState, setFireWandCraftState] = useLocalStorage("fireWandCraftState", "grayscale(100%)")
    const [fireWandWeaponBonusState, setFireWandWeaponBonusState] = useLocalStorage("fireWandWeaponBonusState", "grayscale(100%)")
    const [fireWandWyrmprintSlotState, setFireWandWyrmprintSlotState] = useLocalStorage("fireWandWyrmprintSlotState", "grayscale(100%)")
    const [fireWandUnbindState, setFireWandUnbindState] = useLocalStorage("fireWandUnbindState", 0);
    const [fireWandRefineState, setFireWandRefineState] = useLocalStorage("fireWandRefineState", 0);

    const [mubFAWSilverMaskCount, setmubFAWSilverMaskCountState] = useLocalStorage("mubFAWSilverMaskCount", 516);
    const [mubFAWGoldMaskCount, setmubFAWGoldMaskCountState] = useLocalStorage("mubFAWASGoldMaskCount", 410);
    const [mubFAWInsanityCount, setmubFAWInsanityCountState] = useLocalStorage("mubFAWInsanityCount", 89);
    const [mubFAWGaleCount, setmubFAWGaleCountState] = useLocalStorage("mubFAWGaleCount", 30);
    const [mubFAWSandCount, setmubFAWSandCountState] = useLocalStorage("mubFAWSandCount", 5);
    const [mubFAWOriCount, setmubFAWOriCountState] = useLocalStorage("mubFAWOriCount", 66);
    const [mubFAWRupeeCost, setmubFAWRupeeCost] = useLocalStorage("mubFAWRupeeCost", 59.5);

    const [wbFAWSilverMaskCount, setwbFAWSilverMaskCountState] = useLocalStorage("wbFAWSilverMaskCount", 332);
    const [wbFAWGoldMaskCount, setwbFAWGoldMaskCountState] = useLocalStorage("wbFAWGoldMaskCount", 270);
    const [wbFAWInsanityCount, setwbFAWInsanityCountState] = useLocalStorage("wbFAWInsanityCount", 28);
    const [wbFAWSandCount, setwbFAWSandCountState] = useLocalStorage("wbFAWSandCount", 5);
    const [wbFAWOriCount, setwbFAWOriCountState] = useLocalStorage("wbFAWOriCount", 32);
    const [wbFAWRupeeCost, setwbFAWRupeeCost] = useLocalStorage("wbFAWRupeeCost", 30);

    const [fireStaffCraftState, setFireStaffCraftState] = useLocalStorage("fireStaffCraftState", "grayscale(100%)")
    const [fireStaffWeaponBonusState, setFireStaffWeaponBonusState] = useLocalStorage("fireStaffWeaponBonusState", "grayscale(100%)")
    const [fireStaffWyrmprintSlotState, setFireStaffWyrmprintSlotState] = useLocalStorage("fireStaffWyrmprintSlotState", "grayscale(100%)")
    const [fireStaffUnbindState, setFireStaffUnbindState] = useLocalStorage("fireStaffUnbindState", 0);
    const [fireStaffRefineState, setFireStaffRefineState] = useLocalStorage("fireStaffRefineState", 0);

    const [mubFAStSilverMaskCount, setmubFAStSilverMaskCountState] = useLocalStorage("mubFAStSilverMaskCount", 516);
    const [mubFAStGoldMaskCount, setmubFAStGoldMaskCountState] = useLocalStorage("mubFAStASGoldMaskCount", 410);
    const [mubFAStInsanityCount, setmubFAStInsanityCountState] = useLocalStorage("mubFAStInsanityCount", 89);
    const [mubFAStGaleCount, setmubFAStGaleCountState] = useLocalStorage("mubFAStGaleCount", 30);
    const [mubFAStSandCount, setmubFAStSandCountState] = useLocalStorage("mubFAStSandCount", 5);
    const [mubFAStOriCount, setmubFAStOriCountState] = useLocalStorage("mubFAStOriCount", 66);
    const [mubFAStRupeeCost, setmubFAStRupeeCost] = useLocalStorage("mubFAStRupeeCost", 59.5);

    const [wbFAStSilverMaskCount, setwbFAStSilverMaskCountState] = useLocalStorage("wbFAStSilverMaskCount", 332);
    const [wbFAStGoldMaskCount, setwbFAStGoldMaskCountState] = useLocalStorage("wbFAStGoldMaskCount", 270);
    const [wbFAStInsanityCount, setwbFAStInsanityCountState] = useLocalStorage("wbFAStInsanityCount", 28);
    const [wbFAStSandCount, setwbFAStSandCountState] = useLocalStorage("wbFAStSandCount", 5);
    const [wbFAStOriCount, setwbFAStOriCountState] = useLocalStorage("wbFAStOriCount", 32);
    const [wbFAStRupeeCost, setwbFAStRupeeCost] = useLocalStorage("wbFAStRupeeCost", 30);

    const [fireManacasterCraftState, setFireManacasterCraftState] = useLocalStorage("fireManacasterCraftState", "grayscale(100%)")
    const [fireManacasterWeaponBonusState, setFireManacasterWeaponBonusState] = useLocalStorage("fireManacasterWeaponBonusState", "grayscale(100%)")
    const [fireManacasterWyrmprintSlotState, setFireManacasterWyrmprintSlotState] = useLocalStorage("fireManacasterWyrmprintSlotState", "grayscale(100%)")
    const [fireManacasterUnbindState, setFireManacasterUnbindState] = useLocalStorage("fireManacasterUnbindState", 0);
    const [fireManacasterRefineState, setFireManacasterRefineState] = useLocalStorage("fireManacasterRefineState", 0);

    const [mubFAMSilverMaskCount, setmubFAMSilverMaskCountState] = useLocalStorage("mubFAMSilverMaskCount", 516);
    const [mubFAMGoldMaskCount, setmubFAMGoldMaskCountState] = useLocalStorage("mubFAMASGoldMaskCount", 410);
    const [mubFAMInsanityCount, setmubFAMInsanityCountState] = useLocalStorage("mubFAMInsanityCount", 89);
    const [mubFAMGaleCount, setmubFAMGaleCountState] = useLocalStorage("mubFAMGaleCount", 30);
    const [mubFAMSandCount, setmubFAMSandCountState] = useLocalStorage("mubFAMSandCount", 5);
    const [mubFAMOriCount, setmubFAMOriCountState] = useLocalStorage("mubFAMOriCount", 66);
    const [mubFAMRupeeCost, setmubFAMRupeeCost] = useLocalStorage("mubFAMRupeeCost", 59.5);

    const [wbFAMSilverMaskCount, setwbFAMSilverMaskCountState] = useLocalStorage("wbFAMSilverMaskCount", 332);
    const [wbFAMGoldMaskCount, setwbFAMGoldMaskCountState] = useLocalStorage("wbFAMGoldMaskCount", 270);
    const [wbFAMInsanityCount, setwbFAMInsanityCountState] = useLocalStorage("wbFAMInsanityCount", 28);
    const [wbFAMSandCount, setwbFAMSandCountState] = useLocalStorage("wbFAMSandCount", 5);
    const [wbFAMOriCount, setwbFAMOriCountState] = useLocalStorage("wbFAMOriCount", 32);
    const [wbFAMRupeeCost, setwbFAMRupeeCost] = useLocalStorage("wbFAMRupeeCost", 30);

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

    function fireWeaponSelection() {
        if (fireWeaponChoice == "sword") {
            return <FireAgitoSwordCost mubFASSilverMaskCount={mubFASSilverMaskCount} mubFASGoldMaskCount={mubFASGoldMaskCount} mubFASInsanityCount={mubFASInsanityCount} mubFASGaleCount={mubFASGaleCount} mubFASSandCount={mubFASSandCount} mubFASOriCount={mubFASOriCount} mubFASRupeeCost={mubFASRupeeCost} wbFASSilverMaskCount={wbFASSilverMaskCount} wbFASGoldMaskCount={wbFASGoldMaskCount} wbFASInsanityCount={wbFASInsanityCount} wbFASSandCount={wbFASSandCount} wbFASOriCount={wbFASOriCount} wbFASRupeeCost={wbFASRupeeCost} />
        }
        if (fireWeaponChoice == "blade") {
            return <FireAgitoBladeCost mubFABlSilverMaskCount={mubFABlSilverMaskCount} mubFABlGoldMaskCount={mubFABlGoldMaskCount} mubFABlInsanityCount={mubFABlInsanityCount} mubFABlGaleCount={mubFABlGaleCount} mubFABlSandCount={mubFABlSandCount} mubFABlOriCount={mubFABlOriCount} mubFABlRupeeCost={mubFABlRupeeCost} wbFABlSilverMaskCount={wbFABlSilverMaskCount} wbFABlGoldMaskCount={wbFABlGoldMaskCount} wbFABlInsanityCount={wbFABlInsanityCount} wbFABlSandCount={wbFABlSandCount} wbFABlOriCount={wbFABlOriCount} wbFABlRupeeCost={wbFABlRupeeCost} />
        }
        if (fireWeaponChoice == "dagger") {
            return <FireAgitoDaggerCost mubFADSilverMaskCount={mubFADSilverMaskCount} mubFADGoldMaskCount={mubFADGoldMaskCount} mubFADInsanityCount={mubFADInsanityCount} mubFADGaleCount={mubFADGaleCount} mubFADSandCount={mubFADSandCount} mubFADOriCount={mubFADOriCount} mubFADRupeeCost={mubFADRupeeCost} wbFADSilverMaskCount={wbFADSilverMaskCount} wbFADGoldMaskCount={wbFADGoldMaskCount} wbFADInsanityCount={wbFADInsanityCount} wbFADSandCount={wbFADSandCount} wbFADOriCount={wbFADOriCount} wbFADRupeeCost={wbFADRupeeCost} />
        }
        if (fireWeaponChoice == "axe") {
            return <FireAgitoAxeCost mubFAASilverMaskCount={mubFAASilverMaskCount} mubFAAGoldMaskCount={mubFAAGoldMaskCount} mubFAAInsanityCount={mubFAAInsanityCount} mubFAAGaleCount={mubFAAGaleCount} mubFAASandCount={mubFAASandCount} mubFAAOriCount={mubFAAOriCount} mubFAARupeeCost={mubFAARupeeCost} wbFAASilverMaskCount={wbFAASilverMaskCount} wbFAAGoldMaskCount={wbFAAGoldMaskCount} wbFAAInsanityCount={wbFAAInsanityCount} wbFAASandCount={wbFAASandCount} wbFAAOriCount={wbFAAOriCount} wbFAARupeeCost={wbFAARupeeCost} />
        }
        if (fireWeaponChoice == "lance") {
            return <FireAgitoLanceCost mubFALSilverMaskCount={mubFALSilverMaskCount} mubFALGoldMaskCount={mubFALGoldMaskCount} mubFALInsanityCount={mubFALInsanityCount} mubFALGaleCount={mubFALGaleCount} mubFALSandCount={mubFALSandCount} mubFALOriCount={mubFALOriCount} mubFALRupeeCost={mubFALRupeeCost} wbFALSilverMaskCount={wbFALSilverMaskCount} wbFALGoldMaskCount={wbFALGoldMaskCount} wbFALInsanityCount={wbFALInsanityCount} wbFALSandCount={wbFALSandCount} wbFALOriCount={wbFALOriCount} wbFALRupeeCost={wbFALRupeeCost} />
        }
        if (fireWeaponChoice == "bow") {
            return <FireAgitoBowCost mubFABoSilverMaskCount={mubFABoSilverMaskCount} mubFABoGoldMaskCount={mubFABoGoldMaskCount} mubFABoInsanityCount={mubFABoInsanityCount} mubFABoGaleCount={mubFABoGaleCount} mubFABoSandCount={mubFABoSandCount} mubFABoOriCount={mubFABoOriCount} mubFABoRupeeCost={mubFABoRupeeCost} wbFABoSilverMaskCount={wbFABoSilverMaskCount} wbFABoGoldMaskCount={wbFABoGoldMaskCount} wbFABoInsanityCount={wbFABoInsanityCount} wbFABoSandCount={wbFABoSandCount} wbFABoOriCount={wbFABoOriCount} wbFABoRupeeCost={wbFABoRupeeCost} />
        }
        if (fireWeaponChoice == "wand") {
            return <FireAgitoWandCost mubFAWSilverMaskCount={mubFAWSilverMaskCount} mubFAWGoldMaskCount={mubFAWGoldMaskCount} mubFAWInsanityCount={mubFAWInsanityCount} mubFAWGaleCount={mubFAWGaleCount} mubFAWSandCount={mubFAWSandCount} mubFAWOriCount={mubFAWOriCount} mubFAWRupeeCost={mubFAWRupeeCost} wbFAWSilverMaskCount={wbFAWSilverMaskCount} wbFAWGoldMaskCount={wbFAWGoldMaskCount} wbFAWInsanityCount={wbFAWInsanityCount} wbFAWSandCount={wbFAWSandCount} wbFAWOriCount={wbFAWOriCount} wbFAWRupeeCost={wbFAWRupeeCost} />
        }
        if (fireWeaponChoice == "staff") {
            return <FireAgitoStaffCost mubFAStSilverMaskCount={mubFAStSilverMaskCount} mubFAStGoldMaskCount={mubFAStGoldMaskCount} mubFAStInsanityCount={mubFAStInsanityCount} mubFAStGaleCount={mubFAStGaleCount} mubFAStSandCount={mubFAStSandCount} mubFAStOriCount={mubFAStOriCount} mubFAStRupeeCost={mubFAStRupeeCost} wbFAStSilverMaskCount={wbFAStSilverMaskCount} wbFAStGoldMaskCount={wbFAStGoldMaskCount} wbFAStInsanityCount={wbFAStInsanityCount} wbFAStSandCount={wbFAStSandCount} wbFAStOriCount={wbFAStOriCount} wbFAStRupeeCost={wbFAStRupeeCost} />
        }
        if (fireWeaponChoice == "manacaster") {
            return <FireAgitoManacasterCost mubFAMSilverMaskCount={mubFAMSilverMaskCount} mubFAMGoldMaskCount={mubFAMGoldMaskCount} mubFAMInsanityCount={mubFAMInsanityCount} mubFAMGaleCount={mubFAMGaleCount} mubFAMSandCount={mubFAMSandCount} mubFAMOriCount={mubFAMOriCount} mubFAMRupeeCost={mubFAMRupeeCost} wbFAMSilverMaskCount={wbFAMSilverMaskCount} wbFAMGoldMaskCount={wbFAMGoldMaskCount} wbFAMInsanityCount={wbFAMInsanityCount} wbFAMSandCount={wbFAMSandCount} wbFAMOriCount={wbFAMOriCount} wbFAMRupeeCost={wbFAMRupeeCost} />
        }
    }

    function craftFireSword() {
        if (fireSwordCraftState == "grayscale(100%)") {
            setFireSwordCraftState("grayscale(0%)")
            setFireWeaponChoiceState("sword")
            setmubFASSilverMaskCountState(mubFASSilverMaskCount - 40)
            setwbFASSilverMaskCountState(wbFASSilverMaskCount - 40)
            setmubFASGoldMaskCountState(mubFASGoldMaskCount - 30)
            setwbFASGoldMaskCountState(wbFASGoldMaskCount - 30)
            setmubFASSandCountState(mubFASSandCount - 1)
            setwbFASSandCountState(wbFASSandCount - 1)
            setmubFASRupeeCost(mubFASRupeeCost - 2)
            setwbFASRupeeCost(wbFASRupeeCost - 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
            setallmubFASandCount(allmubFASandCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2)
        }
        else if (fireSwordCraftState == "grayscale(0%)") {
            setFireSwordCraftState("grayscale(100%)")
            setFireWeaponChoiceState("sword")
            setmubFASSilverMaskCountState(mubFASSilverMaskCount + 40)
            setwbFASSilverMaskCountState(wbFASSilverMaskCount + 40)
            setmubFASGoldMaskCountState(mubFASGoldMaskCount + 30)
            setwbFASGoldMaskCountState(wbFASGoldMaskCount + 30)
            setmubFASSandCountState(mubFASSandCount + 1)
            setwbFASSandCountState(wbFASSandCount + 1)
            setmubFASRupeeCost(mubFASRupeeCost + 2)
            setwbFASRupeeCost(wbFASRupeeCost + 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
            setallmubFASandCount(allmubFASandCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2)
        }
    }

    function fireSwordWeaponBonus() {
        if (fireSwordWeaponBonusState == "grayscale(100%)") {
            setFireSwordWeaponBonusState("grayscale(0%)");
            setFireWeaponChoiceState("sword");
            setmubFASSilverMaskCountState(mubFASSilverMaskCount - 100)
            setwbFASSilverMaskCountState(wbFASSilverMaskCount - 100)
            setmubFASGoldMaskCountState(mubFASGoldMaskCount - 100)
            setwbFASGoldMaskCountState(wbFASGoldMaskCount - 100)
            setmubFASInsanityCountState(mubFASInsanityCount - 14)
            setwbFASInsanityCountState(wbFASInsanityCount - 14)
            setmubFASOriCountState(mubFASOriCount - 30)
            setwbFASOriCountState(wbFASOriCount - 30)
            setmubFASRupeeCost(mubFASRupeeCost - 10)
            setwbFASRupeeCost(wbFASRupeeCost - 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 100)
            setallmubFAInsanityCount(allmubFAInsanityCount - 14)
            setallmubFAOriCount(allmubFAOriCount - 30)
            setallmubFARupeeCost(allmubFARupeeCost - 10)
        }
        else if (fireSwordWeaponBonusState == "grayscale(0%)") {
            setFireSwordWeaponBonusState("grayscale(100%)");
            setFireWeaponChoiceState("sword");
            setmubFASSilverMaskCountState(mubFASSilverMaskCount + 100)
            setwbFASSilverMaskCountState(wbFASSilverMaskCount + 100)
            setmubFASGoldMaskCountState(mubFASGoldMaskCount + 100)
            setwbFASGoldMaskCountState(wbFASGoldMaskCount + 100)
            setmubFASInsanityCountState(mubFASInsanityCount + 14)
            setwbFASInsanityCountState(wbFASInsanityCount + 14)
            setmubFASOriCountState(mubFASOriCount + 30)
            setwbFASOriCountState(wbFASOriCount + 30)
            setmubFASRupeeCost(mubFASRupeeCost + 10)
            setwbFASRupeeCost(wbFASRupeeCost + 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 100)
            setallmubFAInsanityCount(allmubFAInsanityCount + 14)
            setallmubFAOriCount(allmubFAOriCount + 30)
            setallmubFARupeeCost(allmubFARupeeCost + 10)
        }
    }

    function fireSwordWyrmprintSlot() {
        if (fireSwordWyrmprintSlotState == "grayscale(100%)") {
            setFireSwordWyrmprintSlotState("grayscale(0%)");
            setFireWeaponChoiceState("sword");
            setmubFASSilverMaskCountState(mubFASSilverMaskCount - 16)
            setmubFASGoldMaskCountState(mubFASGoldMaskCount - 10)
            setmubFASOriCountState(mubFASOriCount - 1)
            setmubFASRupeeCost(mubFASRupeeCost - 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
            setallmubFAOriCount(allmubFAOriCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2.5)
        }
        else if (fireSwordWyrmprintSlotState == "grayscale(0%)") {
            setFireSwordWyrmprintSlotState("grayscale(100%)");
            setFireWeaponChoiceState("sword");
            setmubFASSilverMaskCountState(mubFASSilverMaskCount + 16)
            setmubFASGoldMaskCountState(mubFASGoldMaskCount + 10)
            setmubFASOriCountState(mubFASOriCount + 1)
            setmubFASRupeeCost(mubFASRupeeCost + 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
            setallmubFAOriCount(allmubFAOriCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2.5)
        }
    }

    function handleFireSwordUnbindIncrement(event) {
        setFireWeaponChoiceState("sword");
        if (fireSwordUnbindState < event.target.value) {
            if (event.target.value - fireSwordUnbindState == 1) {
                setFireSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount - 40)
                    setwbFASSilverMaskCountState(wbFASSilverMaskCount - 40)
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount - 30)
                    setwbFASGoldMaskCountState(wbFASGoldMaskCount - 30)
                    setmubFASSandCountState(mubFASSandCount - 1)
                    setwbFASSandCountState(wbFASSandCount - 1)
                    setmubFASRupeeCost(mubFASRupeeCost - 2)
                    setwbFASRupeeCost(wbFASRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFASandCount(allmubFASandCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount - 16)
                    setwbFASSilverMaskCountState(wbFASSilverMaskCount - 16)
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount - 10)
                    setwbFASGoldMaskCountState(wbFASGoldMaskCount - 10)
                    setmubFASInsanityCountState(mubFASInsanityCount - 7)
                    setwbFASInsanityCountState(wbFASInsanityCount - 7)
                    setmubFASOriCountState(mubFASOriCount - 1)
                    setwbFASOriCountState(wbFASOriCount - 1)
                    setmubFASRupeeCost(mubFASRupeeCost - 7.5)
                    setwbFASRupeeCost(wbFASRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount - 16)
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount - 10)
                    setmubFASInsanityCountState(mubFASInsanityCount - 7)
                    setmubFASOriCountState(mubFASOriCount - 1)
                    setmubFASRupeeCost(mubFASRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount - 80)
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount - 70)
                    setmubFASInsanityCountState(mubFASInsanityCount - 30)
                    setmubFASGaleCountState(mubFASGaleCount - 20)
                    setmubFASOriCountState(mubFASOriCount - 20)
                    setmubFASRupeeCost(mubFASRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 30)
                    setallmubFAGaleCount(allmubFAGaleCount - 20)
                    setallmubFAOriCount(allmubFAOriCount - 20)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
            }
        }
        else if (fireSwordUnbindState > event.target.value) {
            if (fireSwordUnbindState - event.target.value == 1) {
                setFireSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount + 40)
                    setwbFASSilverMaskCountState(wbFASSilverMaskCount + 40)
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount + 30)
                    setwbFASGoldMaskCountState(wbFASGoldMaskCount + 30)
                    setmubFASSandCountState(mubFASSandCount + 1)
                    setwbFASSandCountState(wbFASSandCount + 1)
                    setmubFASRupeeCost(mubFASRupeeCost + 2)
                    setwbFASRupeeCost(wbFASRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFASandCount(allmubFASandCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount + 16)
                    setwbFASSilverMaskCountState(wbFASSilverMaskCount + 16)
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount + 10)
                    setwbFASGoldMaskCountState(wbFASGoldMaskCount + 10)
                    setmubFASInsanityCountState(mubFASInsanityCount + 7)
                    setwbFASInsanityCountState(wbFASInsanityCount + 7)
                    setmubFASOriCountState(mubFASOriCount + 1)
                    setwbFASOriCountState(wbFASOriCount + 1)
                    setmubFASRupeeCost(mubFASRupeeCost + 7.5)
                    setwbFASRupeeCost(wbFASRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount + 16)
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount + 10)
                    setmubFASInsanityCountState(mubFASInsanityCount + 7)
                    setmubFASOriCountState(mubFASOriCount + 1)
                    setmubFASRupeeCost(mubFASRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount + 80)
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount + 70)
                    setmubFASInsanityCountState(mubFASInsanityCount + 30)
                    setmubFASGaleCountState(mubFASGaleCount + 20)
                    setmubFASOriCountState(mubFASOriCount + 20)
                    setmubFASRupeeCost(mubFASRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 30)
                    setallmubFAGaleCount(allmubFAGaleCount + 20)
                    setallmubFAOriCount(allmubFAOriCount + 20)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
            }
        }
    }

    function handleFireSwordRefineIncrement(event) {
        setFireWeaponChoiceState("sword");
        if (fireSwordRefineState < event.target.value) {
            if (event.target.value - fireSwordRefineState == 1) {
                setFireSwordRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount - 16);
                    setwbFASSilverMaskCountState(wbFASSilverMaskCount - 16);
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount - 10);
                    setwbFASGoldMaskCountState(wbFASGoldMaskCount - 10);
                    setmubFASInsanityCountState(mubFASInsanityCount - 7);
                    setwbFASInsanityCountState(wbFASInsanityCount - 7);
                    setmubFASOriCountState(mubFASOriCount - 1);
                    setwbFASOriCountState(wbFASOriCount - 1);
                    setmubFASRupeeCost(mubFASRupeeCost - 2.5);
                    setwbFASRupeeCost(wbFASRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount - 40)
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount - 30);
                    setmubFASInsanityCountState(mubFASInsanityCount - 10);
                    setmubFASGaleCountState(mubFASGaleCount - 10);
                    setmubFASOriCountState(mubFASOriCount - 10);
                    setmubFASRupeeCost(mubFASRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 10)
                    setallmubFAGaleCount(allmubFAGaleCount - 10)
                    setallmubFAOriCount(allmubFAOriCount - 10)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
            }
        }
        else if (fireSwordRefineState > event.target.value) {
            if (fireSwordRefineState - event.target.value == 1) {
                setFireSwordRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount + 16);
                    setwbFASSilverMaskCountState(wbFASSilverMaskCount + 16);
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount + 10);
                    setwbFASGoldMaskCountState(wbFASGoldMaskCount + 10);
                    setmubFASInsanityCountState(mubFASInsanityCount + 7);
                    setwbFASInsanityCountState(wbFASInsanityCount + 7);
                    setmubFASOriCountState(mubFASOriCount + 1);
                    setwbFASOriCountState(wbFASOriCount + 1);
                    setmubFASRupeeCost(mubFASRupeeCost + 2.5);
                    setwbFASRupeeCost(wbFASRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount + 40)
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount + 30);
                    setmubFASInsanityCountState(mubFASInsanityCount + 10);
                    setmubFASGaleCountState(mubFASGaleCount + 10);
                    setmubFASOriCountState(mubFASOriCount + 10);
                    setmubFASRupeeCost(mubFASRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 10)
                    setallmubFAGaleCount(allmubFAGaleCount + 10)
                    setallmubFAOriCount(allmubFAOriCount + 10)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
            }
        }
    }

    function craftFireBlade() {
        if (fireBladeCraftState == "grayscale(100%)") {
            setFireBladeCraftState("grayscale(0%)")
            setFireWeaponChoiceState("blade")
            setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - 40)
            setwbFABlSilverMaskCountState(wbFABlSilverMaskCount - 40)
            setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - 30)
            setwbFABlGoldMaskCountState(wbFABlGoldMaskCount - 30)
            setmubFABlSandCountState(mubFABlSandCount - 1)
            setwbFABlSandCountState(wbFABlSandCount - 1)
            setmubFABlRupeeCost(mubFABlRupeeCost - 2)
            setwbFABlRupeeCost(wbFABlRupeeCost - 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
            setallmubFASandCount(allmubFASandCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2)
        }
        else if (fireBladeCraftState == "grayscale(0%)") {
            setFireBladeCraftState("grayscale(100%)")
            setFireWeaponChoiceState("blade")
            setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + 40)
            setwbFABlSilverMaskCountState(wbFABlSilverMaskCount + 40)
            setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + 30)
            setwbFABlGoldMaskCountState(wbFABlGoldMaskCount + 30)
            setmubFABlSandCountState(mubFABlSandCount + 1)
            setwbFABlSandCountState(wbFABlSandCount + 1)
            setmubFABlRupeeCost(mubFABlRupeeCost + 2)
            setwbFABlRupeeCost(wbFABlRupeeCost + 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
            setallmubFASandCount(allmubFASandCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2)
        }
    }

    function fireBladeWeaponBonus() {
        if (fireBladeWeaponBonusState == "grayscale(100%)") {
            setFireBladeWeaponBonusState("grayscale(0%)");
            setFireWeaponChoiceState("blade");
            setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - 100)
            setwbFABlSilverMaskCountState(wbFABlSilverMaskCount - 100)
            setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - 100)
            setwbFABlGoldMaskCountState(wbFABlGoldMaskCount - 100)
            setmubFABlInsanityCountState(mubFABlInsanityCount - 14)
            setwbFABlInsanityCountState(wbFABlInsanityCount - 14)
            setmubFABlOriCountState(mubFABlOriCount - 30)
            setwbFABlOriCountState(wbFABlOriCount - 30)
            setmubFABlRupeeCost(mubFABlRupeeCost - 10)
            setwbFABlRupeeCost(wbFABlRupeeCost - 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 100)
            setallmubFAInsanityCount(allmubFAInsanityCount - 14)
            setallmubFAOriCount(allmubFAOriCount - 30)
            setallmubFARupeeCost(allmubFARupeeCost - 10)
        }
        else if (fireBladeWeaponBonusState == "grayscale(0%)") {
            setFireBladeWeaponBonusState("grayscale(100%)");
            setFireWeaponChoiceState("blade");
            setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + 100)
            setwbFABlSilverMaskCountState(wbFABlSilverMaskCount + 100)
            setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + 100)
            setwbFABlGoldMaskCountState(wbFABlGoldMaskCount + 100)
            setmubFABlInsanityCountState(mubFABlInsanityCount + 14)
            setwbFABlInsanityCountState(wbFABlInsanityCount + 14)
            setmubFABlOriCountState(mubFABlOriCount + 30)
            setwbFABlOriCountState(wbFABlOriCount + 30)
            setmubFABlRupeeCost(mubFABlRupeeCost + 10)
            setwbFABlRupeeCost(wbFABlRupeeCost + 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 100)
            setallmubFAInsanityCount(allmubFAInsanityCount + 14)
            setallmubFAOriCount(allmubFAOriCount + 30)
            setallmubFARupeeCost(allmubFARupeeCost + 10)
        }
    }

    function fireBladeWyrmprintSlot() {
        if (fireBladeWyrmprintSlotState == "grayscale(100%)") {
            setFireBladeWyrmprintSlotState("grayscale(0%)");
            setFireWeaponChoiceState("blade");
            setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - 16)
            setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - 10)
            setmubFABlOriCountState(mubFABlOriCount - 1)
            setmubFABlRupeeCost(mubFABlRupeeCost - 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
            setallmubFAOriCount(allmubFAOriCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2.5)
        }
        else if (fireBladeWyrmprintSlotState == "grayscale(0%)") {
            setFireBladeWyrmprintSlotState("grayscale(100%)");
            setFireWeaponChoiceState("blade");
            setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + 16)
            setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + 10)
            setmubFABlOriCountState(mubFABlOriCount + 1)
            setmubFABlRupeeCost(mubFABlRupeeCost + 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
            setallmubFAOriCount(allmubFAOriCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2.5)
        }
    }

    function handleFireBladeUnbindIncrement(event) {
        setFireWeaponChoiceState("blade")
        if (fireBladeUnbindState < event.target.value) {
            if (event.target.value - fireBladeUnbindState == 1) {
                setFireBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - 40)
                    setwbFABlSilverMaskCountState(wbFABlSilverMaskCount - 40)
                    setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - 30)
                    setwbFABlGoldMaskCountState(wbFABlGoldMaskCount - 30)
                    setmubFABlSandCountState(mubFABlSandCount - 1)
                    setwbFABlSandCountState(wbFABlSandCount - 1)
                    setmubFABlRupeeCost(mubFABlRupeeCost - 2)
                    setwbFABlRupeeCost(wbFABlRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFASandCount(allmubFASandCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - 16)
                    setwbFABlSilverMaskCountState(wbFABlSilverMaskCount - 16)
                    setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - 10)
                    setwbFABlGoldMaskCountState(wbFABlGoldMaskCount - 10)
                    setmubFABlInsanityCountState(mubFABlInsanityCount - 7)
                    setwbFABlInsanityCountState(wbFABlInsanityCount - 7)
                    setmubFABlOriCountState(mubFABlOriCount - 1)
                    setwbFABlOriCountState(wbFABlOriCount - 1)
                    setmubFABlRupeeCost(mubFABlRupeeCost - 7.5)
                    setwbFABlRupeeCost(wbFABlRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - 16)
                    setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - 10)
                    setmubFABlInsanityCountState(mubFABlInsanityCount - 7)
                    setmubFABlOriCountState(mubFABlOriCount - 1)
                    setmubFABlRupeeCost(mubFABlRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - 80)
                    setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - 70)
                    setmubFABlInsanityCountState(mubFABlInsanityCount - 30)
                    setmubFABlGaleCountState(mubFABlGaleCount - 20)
                    setmubFABlOriCountState(mubFABlOriCount - 20)
                    setmubFABlRupeeCost(mubFABlRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 30)
                    setallmubFAGaleCount(allmubFAGaleCount - 20)
                    setallmubFAOriCount(allmubFAOriCount - 20)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
            }
        }
        else if (fireBladeUnbindState > event.target.value) {
            if (fireBladeUnbindState - event.target.value == 1) {
                setFireBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + 40)
                    setwbFABlSilverMaskCountState(wbFABlSilverMaskCount + 40)
                    setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + 30)
                    setwbFABlGoldMaskCountState(wbFABlGoldMaskCount + 30)
                    setmubFABlSandCountState(mubFABlSandCount + 1)
                    setwbFABlSandCountState(wbFABlSandCount + 1)
                    setmubFABlRupeeCost(mubFABlRupeeCost + 2)
                    setwbFABlRupeeCost(wbFABlRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFASandCount(allmubFASandCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + 16)
                    setwbFABlSilverMaskCountState(wbFABlSilverMaskCount + 16)
                    setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + 10)
                    setwbFABlGoldMaskCountState(wbFABlGoldMaskCount + 10)
                    setmubFABlInsanityCountState(mubFABlInsanityCount + 7)
                    setwbFABlInsanityCountState(wbFABlInsanityCount + 7)
                    setmubFABlOriCountState(mubFABlOriCount + 1)
                    setwbFABlOriCountState(wbFABlOriCount + 1)
                    setmubFABlRupeeCost(mubFABlRupeeCost + 7.5)
                    setwbFABlRupeeCost(wbFABlRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + 16)
                    setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + 10)
                    setmubFABlInsanityCountState(mubFABlInsanityCount + 7)
                    setmubFABlOriCountState(mubFABlOriCount + 1)
                    setmubFABlRupeeCost(mubFABlRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + 80)
                    setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + 70)
                    setmubFABlInsanityCountState(mubFABlInsanityCount + 30)
                    setmubFABlGaleCountState(mubFABlGaleCount + 20)
                    setmubFABlOriCountState(mubFABlOriCount + 20)
                    setmubFABlRupeeCost(mubFABlRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 30)
                    setallmubFAGaleCount(allmubFAGaleCount + 20)
                    setallmubFAOriCount(allmubFAOriCount + 20)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
            }
        }
    }

    function handleFireBladeRefineIncrement(event) {
        setFireWeaponChoiceState("blade");
        if (fireBladeRefineState < event.target.value) {
            if (event.target.value - fireBladeRefineState == 1) {
                setFireBladeRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - 16);
                    setwbFABlSilverMaskCountState(wbFABlSilverMaskCount - 16);
                    setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - 10);
                    setwbFABlGoldMaskCountState(wbFABlGoldMaskCount - 10);
                    setmubFABlInsanityCountState(mubFABlInsanityCount - 7);
                    setwbFABlInsanityCountState(wbFABlInsanityCount - 7);
                    setmubFABlOriCountState(mubFABlOriCount - 1);
                    setwbFABlOriCountState(wbFABlOriCount - 1);
                    setmubFABlRupeeCost(mubFABlRupeeCost - 2.5);
                    setwbFABlRupeeCost(wbFABlRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - 40)
                    setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - 30);
                    setmubFABlInsanityCountState(mubFABlInsanityCount - 10);
                    setmubFABlGaleCountState(mubFABlGaleCount - 10);
                    setmubFABlOriCountState(mubFABlOriCount - 10);
                    setmubFABlRupeeCost(mubFABlRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 10)
                    setallmubFAGaleCount(allmubFAGaleCount - 10)
                    setallmubFAOriCount(allmubFAOriCount - 10)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
            }
        }
        else if (fireBladeRefineState > event.target.value) {
            if (fireBladeRefineState - event.target.value == 1) {
                setFireBladeRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + 16);
                    setwbFABlSilverMaskCountState(wbFABlSilverMaskCount + 16);
                    setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + 10);
                    setwbFABlGoldMaskCountState(wbFABlGoldMaskCount + 10);
                    setmubFABlInsanityCountState(mubFABlInsanityCount + 7);
                    setwbFABlInsanityCountState(wbFABlInsanityCount + 7);
                    setmubFABlOriCountState(mubFABlOriCount + 1);
                    setwbFABlOriCountState(wbFABlOriCount + 1);
                    setmubFABlRupeeCost(mubFABlRupeeCost + 2.5);
                    setwbFABlRupeeCost(wbFABlRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + 40)
                    setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + 30);
                    setmubFABlInsanityCountState(mubFABlInsanityCount + 10);
                    setmubFABlGaleCountState(mubFABlGaleCount + 10);
                    setmubFABlOriCountState(mubFABlOriCount + 10);
                    setmubFABlRupeeCost(mubFABlRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 10)
                    setallmubFAGaleCount(allmubFAGaleCount + 10)
                    setallmubFAOriCount(allmubFAOriCount + 10)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
            }
        }
    }

    function craftFireDagger() {
        if (fireDaggerCraftState == "grayscale(100%)") {
            setFireDaggerCraftState("grayscale(0%)")
            setFireWeaponChoiceState("dagger")
            setmubFADSilverMaskCountState(mubFADSilverMaskCount - 40)
            setwbFADSilverMaskCountState(wbFADSilverMaskCount - 40)
            setmubFADGoldMaskCountState(mubFADGoldMaskCount - 30)
            setwbFADGoldMaskCountState(wbFADGoldMaskCount - 30)
            setmubFADSandCountState(mubFADSandCount - 1)
            setwbFADSandCountState(wbFADSandCount - 1)
            setmubFADRupeeCost(mubFADRupeeCost - 2)
            setwbFADRupeeCost(wbFADRupeeCost - 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
            setallmubFASandCount(allmubFASandCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2)
        }
        else if (fireDaggerCraftState == "grayscale(0%)") {
            setFireDaggerCraftState("grayscale(100%)")
            setFireWeaponChoiceState("dagger")
            setmubFADSilverMaskCountState(mubFADSilverMaskCount + 40)
            setwbFADSilverMaskCountState(wbFADSilverMaskCount + 40)
            setmubFADGoldMaskCountState(mubFADGoldMaskCount + 30)
            setwbFADGoldMaskCountState(wbFADGoldMaskCount + 30)
            setmubFADSandCountState(mubFADSandCount + 1)
            setwbFADSandCountState(wbFADSandCount + 1)
            setmubFADRupeeCost(mubFADRupeeCost + 2)
            setwbFADRupeeCost(wbFADRupeeCost + 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
            setallmubFASandCount(allmubFASandCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2)
        }
    }

    function fireDaggerWeaponBonus() {
        if (fireDaggerWeaponBonusState == "grayscale(100%)") {
            setFireDaggerWeaponBonusState("grayscale(0%)");
            setFireWeaponChoiceState("dagger");
            setmubFADSilverMaskCountState(mubFADSilverMaskCount - 100)
            setwbFADSilverMaskCountState(wbFADSilverMaskCount - 100)
            setmubFADGoldMaskCountState(mubFADGoldMaskCount - 100)
            setwbFADGoldMaskCountState(wbFADGoldMaskCount - 100)
            setmubFADInsanityCountState(mubFADInsanityCount - 14)
            setwbFADInsanityCountState(wbFADInsanityCount - 14)
            setmubFADOriCountState(mubFADOriCount - 30)
            setwbFADOriCountState(wbFADOriCount - 30)
            setmubFADRupeeCost(mubFADRupeeCost - 10)
            setwbFADRupeeCost(wbFADRupeeCost - 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 100)
            setallmubFAInsanityCount(allmubFAInsanityCount - 14)
            setallmubFAOriCount(allmubFAOriCount - 30)
            setallmubFARupeeCost(allmubFARupeeCost - 10)
        }
        else if (fireDaggerWeaponBonusState == "grayscale(0%)") {
            setFireDaggerWeaponBonusState("grayscale(100%)");
            setFireWeaponChoiceState("dagger");
            setmubFADSilverMaskCountState(mubFADSilverMaskCount + 100)
            setwbFADSilverMaskCountState(wbFADSilverMaskCount + 100)
            setmubFADGoldMaskCountState(mubFADGoldMaskCount + 100)
            setwbFADGoldMaskCountState(wbFADGoldMaskCount + 100)
            setmubFADInsanityCountState(mubFADInsanityCount + 14)
            setwbFADInsanityCountState(wbFADInsanityCount + 14)
            setmubFADOriCountState(mubFADOriCount + 30)
            setwbFADOriCountState(wbFADOriCount + 30)
            setmubFADRupeeCost(mubFADRupeeCost + 10)
            setwbFADRupeeCost(wbFADRupeeCost + 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 100)
            setallmubFAInsanityCount(allmubFAInsanityCount + 14)
            setallmubFAOriCount(allmubFAOriCount + 30)
            setallmubFARupeeCost(allmubFARupeeCost + 10)
        }
    }

    function fireDaggerWyrmprintSlot() {
        if (fireDaggerWyrmprintSlotState == "grayscale(100%)") {
            setFireDaggerWyrmprintSlotState("grayscale(0%)");
            setFireWeaponChoiceState("dagger");
            setmubFADSilverMaskCountState(mubFADSilverMaskCount - 16)
            setmubFADGoldMaskCountState(mubFADGoldMaskCount - 10)
            setmubFADOriCountState(mubFADOriCount - 1)
            setmubFADRupeeCost(mubFADRupeeCost - 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
            setallmubFAOriCount(allmubFAOriCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2.5)
        }
        else if (fireDaggerWyrmprintSlotState == "grayscale(0%)") {
            setFireDaggerWyrmprintSlotState("grayscale(100%)");
            setFireWeaponChoiceState("dagger");
            setmubFADSilverMaskCountState(mubFADSilverMaskCount + 16)
            setmubFADGoldMaskCountState(mubFADGoldMaskCount + 10)
            setmubFADOriCountState(mubFADOriCount + 1)
            setmubFADRupeeCost(mubFADRupeeCost + 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
            setallmubFAOriCount(allmubFAOriCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2.5)
        }
    }

    function handleFireDaggerUnbindIncrement(event) {
        setFireWeaponChoiceState("dagger")
        if (fireDaggerUnbindState < event.target.value) {
            if (event.target.value - fireDaggerUnbindState == 1) {
                setFireDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubFADSilverMaskCountState(mubFADSilverMaskCount - 40)
                    setwbFADSilverMaskCountState(wbFADSilverMaskCount - 40)
                    setmubFADGoldMaskCountState(mubFADGoldMaskCount - 30)
                    setwbFADGoldMaskCountState(wbFADGoldMaskCount - 30)
                    setmubFADSandCountState(mubFADSandCount - 1)
                    setwbFADSandCountState(wbFADSandCount - 1)
                    setmubFADRupeeCost(mubFADRupeeCost - 2)
                    setwbFADRupeeCost(wbFADRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFASandCount(allmubFASandCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubFADSilverMaskCountState(mubFADSilverMaskCount - 16)
                    setwbFADSilverMaskCountState(wbFADSilverMaskCount - 16)
                    setmubFADGoldMaskCountState(mubFADGoldMaskCount - 10)
                    setwbFADGoldMaskCountState(wbFADGoldMaskCount - 10)
                    setmubFADInsanityCountState(mubFADInsanityCount - 7)
                    setwbFADInsanityCountState(wbFADInsanityCount - 7)
                    setmubFADOriCountState(mubFADOriCount - 1)
                    setwbFADOriCountState(wbFADOriCount - 1)
                    setmubFADRupeeCost(mubFADRupeeCost - 7.5)
                    setwbFADRupeeCost(wbFADRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubFADSilverMaskCountState(mubFADSilverMaskCount - 16)
                    setmubFADGoldMaskCountState(mubFADGoldMaskCount - 10)
                    setmubFADInsanityCountState(mubFADInsanityCount - 7)
                    setmubFADOriCountState(mubFADOriCount - 1)
                    setmubFADRupeeCost(mubFADRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubFADSilverMaskCountState(mubFADSilverMaskCount - 80)
                    setmubFADGoldMaskCountState(mubFADGoldMaskCount - 70)
                    setmubFADInsanityCountState(mubFADInsanityCount - 30)
                    setmubFADGaleCountState(mubFADGaleCount - 20)
                    setmubFADOriCountState(mubFADOriCount - 20)
                    setmubFADRupeeCost(mubFADRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 30)
                    setallmubFAGaleCount(allmubFAGaleCount - 20)
                    setallmubFAOriCount(allmubFAOriCount - 20)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
            }
        }
        else if (fireDaggerUnbindState > event.target.value) {
            if (fireDaggerUnbindState - event.target.value == 1) {
                setFireDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubFADSilverMaskCountState(mubFADSilverMaskCount + 40)
                    setwbFADSilverMaskCountState(wbFADSilverMaskCount + 40)
                    setmubFADGoldMaskCountState(mubFADGoldMaskCount + 30)
                    setwbFADGoldMaskCountState(wbFADGoldMaskCount + 30)
                    setmubFADSandCountState(mubFADSandCount + 1)
                    setwbFADSandCountState(wbFADSandCount + 1)
                    setmubFADRupeeCost(mubFADRupeeCost + 2)
                    setwbFADRupeeCost(wbFADRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFASandCount(allmubFASandCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubFADSilverMaskCountState(mubFADSilverMaskCount + 16)
                    setwbFADSilverMaskCountState(wbFADSilverMaskCount + 16)
                    setmubFADGoldMaskCountState(mubFADGoldMaskCount + 10)
                    setwbFADGoldMaskCountState(wbFADGoldMaskCount + 10)
                    setmubFADInsanityCountState(mubFADInsanityCount + 7)
                    setwbFADInsanityCountState(wbFADInsanityCount + 7)
                    setmubFADOriCountState(mubFADOriCount + 1)
                    setwbFADOriCountState(wbFADOriCount + 1)
                    setmubFADRupeeCost(mubFADRupeeCost + 7.5)
                    setwbFADRupeeCost(wbFADRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubFADSilverMaskCountState(mubFADSilverMaskCount + 16)
                    setmubFADGoldMaskCountState(mubFADGoldMaskCount + 10)
                    setmubFADInsanityCountState(mubFADInsanityCount + 7)
                    setmubFADOriCountState(mubFADOriCount + 1)
                    setmubFADRupeeCost(mubFADRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubFADSilverMaskCountState(mubFADSilverMaskCount + 80)
                    setmubFADGoldMaskCountState(mubFADGoldMaskCount + 70)
                    setmubFADInsanityCountState(mubFADInsanityCount + 30)
                    setmubFADGaleCountState(mubFADGaleCount + 20)
                    setmubFADOriCountState(mubFADOriCount + 20)
                    setmubFADRupeeCost(mubFADRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 30)
                    setallmubFAGaleCount(allmubFAGaleCount + 20)
                    setallmubFAOriCount(allmubFAOriCount + 20)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
            }
        }
    }

    function handleFireDaggerRefineIncrement(event) {
        setFireWeaponChoiceState("dagger");
        if (fireDaggerRefineState < event.target.value) {
            if (event.target.value - fireDaggerRefineState == 1) {
                setFireDaggerRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubFADSilverMaskCountState(mubFADSilverMaskCount - 16);
                    setwbFADSilverMaskCountState(wbFADSilverMaskCount - 16);
                    setmubFADGoldMaskCountState(mubFADGoldMaskCount - 10);
                    setwbFADGoldMaskCountState(wbFADGoldMaskCount - 10);
                    setmubFADInsanityCountState(mubFADInsanityCount - 7);
                    setwbFADInsanityCountState(wbFADInsanityCount - 7);
                    setmubFADOriCountState(mubFADOriCount - 1);
                    setwbFADOriCountState(wbFADOriCount - 1);
                    setmubFADRupeeCost(mubFADRupeeCost - 2.5);
                    setwbFADRupeeCost(wbFADRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubFADSilverMaskCountState(mubFADSilverMaskCount - 40)
                    setmubFADGoldMaskCountState(mubFADGoldMaskCount - 30);
                    setmubFADInsanityCountState(mubFADInsanityCount - 10);
                    setmubFADGaleCountState(mubFADGaleCount - 10);
                    setmubFADOriCountState(mubFADOriCount - 10);
                    setmubFADRupeeCost(mubFADRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 10)
                    setallmubFAGaleCount(allmubFAGaleCount - 10)
                    setallmubFAOriCount(allmubFAOriCount - 10)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
            }
        }
        else if (fireDaggerRefineState > event.target.value) {
            if (fireDaggerRefineState - event.target.value == 1) {
                setFireDaggerRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubFADSilverMaskCountState(mubFADSilverMaskCount + 16);
                    setwbFADSilverMaskCountState(wbFADSilverMaskCount + 16);
                    setmubFADGoldMaskCountState(mubFADGoldMaskCount + 10);
                    setwbFADGoldMaskCountState(wbFADGoldMaskCount + 10);
                    setmubFADInsanityCountState(mubFADInsanityCount + 7);
                    setwbFADInsanityCountState(wbFADInsanityCount + 7);
                    setmubFADOriCountState(mubFADOriCount + 1);
                    setwbFADOriCountState(wbFADOriCount + 1);
                    setmubFADRupeeCost(mubFADRupeeCost + 2.5);
                    setwbFADRupeeCost(wbFADRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubFADSilverMaskCountState(mubFADSilverMaskCount + 40)
                    setmubFADGoldMaskCountState(mubFADGoldMaskCount + 30);
                    setmubFADInsanityCountState(mubFADInsanityCount + 10);
                    setmubFADGaleCountState(mubFADGaleCount + 10);
                    setmubFADOriCountState(mubFADOriCount + 10);
                    setmubFADRupeeCost(mubFADRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 10)
                    setallmubFAGaleCount(allmubFAGaleCount + 10)
                    setallmubFAOriCount(allmubFAOriCount + 10)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
            }
        }
    }

    function craftFireAxe() {
        if (fireAxeCraftState == "grayscale(100%)") {
            setFireAxeCraftState("grayscale(0%)")
            setFireWeaponChoiceState("axe")
            setmubFAASilverMaskCountState(mubFAASilverMaskCount - 40)
            setwbFAASilverMaskCountState(wbFAASilverMaskCount - 40)
            setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - 30)
            setwbFAAGoldMaskCountState(wbFAAGoldMaskCount - 30)
            setmubFAASandCountState(mubFAASandCount - 1)
            setwbFAASandCountState(wbFAASandCount - 1)
            setmubFAARupeeCost(mubFAARupeeCost - 2)
            setwbFAARupeeCost(wbFAARupeeCost - 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
            setallmubFASandCount(allmubFASandCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2)
        }
        else if (fireAxeCraftState == "grayscale(0%)") {
            setFireAxeCraftState("grayscale(100%)")
            setFireWeaponChoiceState("axe")
            setmubFAASilverMaskCountState(mubFAASilverMaskCount + 40)
            setwbFAASilverMaskCountState(wbFAASilverMaskCount + 40)
            setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + 30)
            setwbFAAGoldMaskCountState(wbFAAGoldMaskCount + 30)
            setmubFAASandCountState(mubFAASandCount + 1)
            setwbFAASandCountState(wbFAASandCount + 1)
            setmubFAARupeeCost(mubFAARupeeCost + 2)
            setwbFAARupeeCost(wbFAARupeeCost + 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
            setallmubFASandCount(allmubFASandCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2)
        }
    }

    function fireAxeWeaponBonus() {
        if (fireAxeWeaponBonusState == "grayscale(100%)") {
            setFireAxeWeaponBonusState("grayscale(0%)");
            setFireWeaponChoiceState("axe");
            setmubFAASilverMaskCountState(mubFAASilverMaskCount - 100)
            setwbFAASilverMaskCountState(wbFAASilverMaskCount - 100)
            setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - 100)
            setwbFAAGoldMaskCountState(wbFAAGoldMaskCount - 100)
            setmubFAAInsanityCountState(mubFAAInsanityCount - 14)
            setwbFAAInsanityCountState(wbFAAInsanityCount - 14)
            setmubFAAOriCountState(mubFAAOriCount - 30)
            setwbFAAOriCountState(wbFAAOriCount - 30)
            setmubFAARupeeCost(mubFAARupeeCost - 10)
            setwbFAARupeeCost(wbFAARupeeCost - 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 100)
            setallmubFAInsanityCount(allmubFAInsanityCount - 14)
            setallmubFAOriCount(allmubFAOriCount - 30)
            setallmubFARupeeCost(allmubFARupeeCost - 10)
        }
        else if (fireAxeWeaponBonusState == "grayscale(0%)") {
            setFireAxeWeaponBonusState("grayscale(100%)");
            setFireWeaponChoiceState("axe");
            setmubFAASilverMaskCountState(mubFAASilverMaskCount + 100)
            setwbFAASilverMaskCountState(wbFAASilverMaskCount + 100)
            setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + 100)
            setwbFAAGoldMaskCountState(wbFAAGoldMaskCount + 100)
            setmubFAAInsanityCountState(mubFAAInsanityCount + 14)
            setwbFAAInsanityCountState(wbFAAInsanityCount + 14)
            setmubFAAOriCountState(mubFAAOriCount + 30)
            setwbFAAOriCountState(wbFAAOriCount + 30)
            setmubFAARupeeCost(mubFAARupeeCost + 10)
            setwbFAARupeeCost(wbFAARupeeCost + 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 100)
            setallmubFAInsanityCount(allmubFAInsanityCount + 14)
            setallmubFAOriCount(allmubFAOriCount + 30)
            setallmubFARupeeCost(allmubFARupeeCost + 10)
        }
    }

    function fireAxeWyrmprintSlot() {
        if (fireAxeWyrmprintSlotState == "grayscale(100%)") {
            setFireAxeWyrmprintSlotState("grayscale(0%)");
            setFireWeaponChoiceState("axe");
            setmubFAASilverMaskCountState(mubFAASilverMaskCount - 16)
            setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - 10)
            setmubFAAOriCountState(mubFAAOriCount - 1)
            setmubFAARupeeCost(mubFAARupeeCost - 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
            setallmubFAOriCount(allmubFAOriCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2.5)
        }
        else if (fireAxeWyrmprintSlotState == "grayscale(0%)") {
            setFireAxeWyrmprintSlotState("grayscale(100%)");
            setFireWeaponChoiceState("axe");
            setmubFAASilverMaskCountState(mubFAASilverMaskCount + 16)
            setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + 10)
            setmubFAAOriCountState(mubFAAOriCount + 1)
            setmubFAARupeeCost(mubFAARupeeCost + 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
            setallmubFAOriCount(allmubFAOriCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2.5)
        }
    }

    function handleFireAxeUnbindIncrement(event) {
        setFireWeaponChoiceState("axe")
        if (fireAxeUnbindState < event.target.value) {
            if (event.target.value - fireAxeUnbindState == 1) {
                setFireAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubFAASilverMaskCountState(mubFAASilverMaskCount - 40)
                    setwbFAASilverMaskCountState(wbFAASilverMaskCount - 40)
                    setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - 30)
                    setwbFAAGoldMaskCountState(wbFAAGoldMaskCount - 30)
                    setmubFAASandCountState(mubFAASandCount - 1)
                    setwbFAASandCountState(wbFAASandCount - 1)
                    setmubFAARupeeCost(mubFAARupeeCost - 2)
                    setwbFAARupeeCost(wbFAARupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFASandCount(allmubFASandCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubFAASilverMaskCountState(mubFAASilverMaskCount - 16)
                    setwbFAASilverMaskCountState(wbFAASilverMaskCount - 16)
                    setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - 10)
                    setwbFAAGoldMaskCountState(wbFAAGoldMaskCount - 10)
                    setmubFAAInsanityCountState(mubFAAInsanityCount - 7)
                    setwbFAAInsanityCountState(wbFAAInsanityCount - 7)
                    setmubFAAOriCountState(mubFAAOriCount - 1)
                    setwbFAAOriCountState(wbFAAOriCount - 1)
                    setmubFAARupeeCost(mubFAARupeeCost - 7.5)
                    setwbFAARupeeCost(wbFAARupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubFAASilverMaskCountState(mubFAASilverMaskCount - 16)
                    setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - 10)
                    setmubFAAInsanityCountState(mubFAAInsanityCount - 7)
                    setmubFAAOriCountState(mubFAAOriCount - 1)
                    setmubFAARupeeCost(mubFAARupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubFAASilverMaskCountState(mubFAASilverMaskCount - 80)
                    setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - 70)
                    setmubFAAInsanityCountState(mubFAAInsanityCount - 30)
                    setmubFAAGaleCountState(mubFAAGaleCount - 20)
                    setmubFAAOriCountState(mubFAAOriCount - 20)
                    setmubFAARupeeCost(mubFAARupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 30)
                    setallmubFAGaleCount(allmubFAGaleCount - 20)
                    setallmubFAOriCount(allmubFAOriCount - 20)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
            }
        }
        else if (fireAxeUnbindState > event.target.value) {
            if (fireAxeUnbindState - event.target.value == 1) {
                setFireAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubFAASilverMaskCountState(mubFAASilverMaskCount + 40)
                    setwbFAASilverMaskCountState(wbFAASilverMaskCount + 40)
                    setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + 30)
                    setwbFAAGoldMaskCountState(wbFAAGoldMaskCount + 30)
                    setmubFAASandCountState(mubFAASandCount + 1)
                    setwbFAASandCountState(wbFAASandCount + 1)
                    setmubFAARupeeCost(mubFAARupeeCost + 2)
                    setwbFAARupeeCost(wbFAARupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFASandCount(allmubFASandCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubFAASilverMaskCountState(mubFAASilverMaskCount + 16)
                    setwbFAASilverMaskCountState(wbFAASilverMaskCount + 16)
                    setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + 10)
                    setwbFAAGoldMaskCountState(wbFAAGoldMaskCount + 10)
                    setmubFAAInsanityCountState(mubFAAInsanityCount + 7)
                    setwbFAAInsanityCountState(wbFAAInsanityCount + 7)
                    setmubFAAOriCountState(mubFAAOriCount + 1)
                    setwbFAAOriCountState(wbFAAOriCount + 1)
                    setmubFAARupeeCost(mubFAARupeeCost + 7.5)
                    setwbFAARupeeCost(wbFAARupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubFAASilverMaskCountState(mubFAASilverMaskCount + 16)
                    setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + 10)
                    setmubFAAInsanityCountState(mubFAAInsanityCount + 7)
                    setmubFAAOriCountState(mubFAAOriCount + 1)
                    setmubFAARupeeCost(mubFAARupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubFAASilverMaskCountState(mubFAASilverMaskCount + 80)
                    setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + 70)
                    setmubFAAInsanityCountState(mubFAAInsanityCount + 30)
                    setmubFAAGaleCountState(mubFAAGaleCount + 20)
                    setmubFAAOriCountState(mubFAAOriCount + 20)
                    setmubFAARupeeCost(mubFAARupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 30)
                    setallmubFAGaleCount(allmubFAGaleCount + 20)
                    setallmubFAOriCount(allmubFAOriCount + 20)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
            }
        }
    }

    function handleFireAxeRefineIncrement(event) {
        setFireWeaponChoiceState("axe");
        if (fireAxeRefineState < event.target.value) {
            if (event.target.value - fireAxeRefineState == 1) {
                setFireAxeRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubFAASilverMaskCountState(mubFAASilverMaskCount - 16);
                    setwbFAASilverMaskCountState(wbFAASilverMaskCount - 16);
                    setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - 10);
                    setwbFAAGoldMaskCountState(wbFAAGoldMaskCount - 10);
                    setmubFAAInsanityCountState(mubFAAInsanityCount - 7);
                    setwbFAAInsanityCountState(wbFAAInsanityCount - 7);
                    setmubFAAOriCountState(mubFAAOriCount - 1);
                    setwbFAAOriCountState(wbFAAOriCount - 1);
                    setmubFAARupeeCost(mubFAARupeeCost - 2.5);
                    setwbFAARupeeCost(wbFAARupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubFAASilverMaskCountState(mubFAASilverMaskCount - 40)
                    setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - 30);
                    setmubFAAInsanityCountState(mubFAAInsanityCount - 10);
                    setmubFAAGaleCountState(mubFAAGaleCount - 10);
                    setmubFAAOriCountState(mubFAAOriCount - 10);
                    setmubFAARupeeCost(mubFAARupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 10)
                    setallmubFAGaleCount(allmubFAGaleCount - 10)
                    setallmubFAOriCount(allmubFAOriCount - 10)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
            }
        }
        else if (fireAxeRefineState > event.target.value) {
            if (fireAxeRefineState - event.target.value == 1) {
                setFireAxeRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubFAASilverMaskCountState(mubFAASilverMaskCount + 16);
                    setwbFAASilverMaskCountState(wbFAASilverMaskCount + 16);
                    setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + 10);
                    setwbFAAGoldMaskCountState(wbFAAGoldMaskCount + 10);
                    setmubFAAInsanityCountState(mubFAAInsanityCount + 7);
                    setwbFAAInsanityCountState(wbFAAInsanityCount + 7);
                    setmubFAAOriCountState(mubFAAOriCount + 1);
                    setwbFAAOriCountState(wbFAAOriCount + 1);
                    setmubFAARupeeCost(mubFAARupeeCost + 2.5);
                    setwbFAARupeeCost(wbFAARupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubFAASilverMaskCountState(mubFAASilverMaskCount + 40)
                    setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + 30);
                    setmubFAAInsanityCountState(mubFAAInsanityCount + 10);
                    setmubFAAGaleCountState(mubFAAGaleCount + 10);
                    setmubFAAOriCountState(mubFAAOriCount + 10);
                    setmubFAARupeeCost(mubFAARupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 10)
                    setallmubFAGaleCount(allmubFAGaleCount + 10)
                    setallmubFAOriCount(allmubFAOriCount + 10)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
            }
        }
    }

    function craftFireLance() {
        if (fireLanceCraftState == "grayscale(100%)") {
            setFireLanceCraftState("grayscale(0%)")
            setFireWeaponChoiceState("lance")
            setmubFALSilverMaskCountState(mubFALSilverMaskCount - 40)
            setwbFALSilverMaskCountState(wbFALSilverMaskCount - 40)
            setmubFALGoldMaskCountState(mubFALGoldMaskCount - 30)
            setwbFALGoldMaskCountState(wbFALGoldMaskCount - 30)
            setmubFALSandCountState(mubFALSandCount - 1)
            setwbFALSandCountState(wbFALSandCount - 1)
            setmubFALRupeeCost(mubFALRupeeCost - 2)
            setwbFALRupeeCost(wbFALRupeeCost - 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
            setallmubFASandCount(allmubFASandCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2)
        }
        else if (fireLanceCraftState == "grayscale(0%)") {
            setFireLanceCraftState("grayscale(100%)")
            setFireWeaponChoiceState("lance")
            setmubFALSilverMaskCountState(mubFALSilverMaskCount + 40)
            setwbFALSilverMaskCountState(wbFALSilverMaskCount + 40)
            setmubFALGoldMaskCountState(mubFALGoldMaskCount + 30)
            setwbFALGoldMaskCountState(wbFALGoldMaskCount + 30)
            setmubFALSandCountState(mubFALSandCount + 1)
            setwbFALSandCountState(wbFALSandCount + 1)
            setmubFALRupeeCost(mubFALRupeeCost + 2)
            setwbFALRupeeCost(wbFALRupeeCost + 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
            setallmubFASandCount(allmubFASandCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2)
        }
    }

    function fireLanceWeaponBonus() {
        if (fireLanceWeaponBonusState == "grayscale(100%)") {
            setFireLanceWeaponBonusState("grayscale(0%)");
            setFireWeaponChoiceState("lance");
            setmubFALSilverMaskCountState(mubFALSilverMaskCount - 100)
            setwbFALSilverMaskCountState(wbFALSilverMaskCount - 100)
            setmubFALGoldMaskCountState(mubFALGoldMaskCount - 100)
            setwbFALGoldMaskCountState(wbFALGoldMaskCount - 100)
            setmubFALInsanityCountState(mubFALInsanityCount - 14)
            setwbFALInsanityCountState(wbFALInsanityCount - 14)
            setmubFALOriCountState(mubFALOriCount - 30)
            setwbFALOriCountState(wbFALOriCount - 30)
            setmubFALRupeeCost(mubFALRupeeCost - 10)
            setwbFALRupeeCost(wbFALRupeeCost - 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 100)
            setallmubFAInsanityCount(allmubFAInsanityCount - 14)
            setallmubFAOriCount(allmubFAOriCount - 30)
            setallmubFARupeeCost(allmubFARupeeCost - 10)
        }
        else if (fireLanceWeaponBonusState == "grayscale(0%)") {
            setFireLanceWeaponBonusState("grayscale(100%)");
            setFireWeaponChoiceState("lance");
            setmubFALSilverMaskCountState(mubFALSilverMaskCount + 100)
            setwbFALSilverMaskCountState(wbFALSilverMaskCount + 100)
            setmubFALGoldMaskCountState(mubFALGoldMaskCount + 100)
            setwbFALGoldMaskCountState(wbFALGoldMaskCount + 100)
            setmubFALInsanityCountState(mubFALInsanityCount + 14)
            setwbFALInsanityCountState(wbFALInsanityCount + 14)
            setmubFALOriCountState(mubFALOriCount + 30)
            setwbFALOriCountState(wbFALOriCount + 30)
            setmubFALRupeeCost(mubFALRupeeCost + 10)
            setwbFALRupeeCost(wbFALRupeeCost + 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 100)
            setallmubFAInsanityCount(allmubFAInsanityCount + 14)
            setallmubFAOriCount(allmubFAOriCount + 30)
            setallmubFARupeeCost(allmubFARupeeCost + 10)
        }
    }

    function fireLanceWyrmprintSlot() {
        if (fireLanceWyrmprintSlotState == "grayscale(100%)") {
            setFireLanceWyrmprintSlotState("grayscale(0%)");
            setFireWeaponChoiceState("lance");
            setmubFALSilverMaskCountState(mubFALSilverMaskCount - 16)
            setmubFALGoldMaskCountState(mubFALGoldMaskCount - 10)
            setmubFALOriCountState(mubFALOriCount - 1)
            setmubFALRupeeCost(mubFALRupeeCost - 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
            setallmubFAOriCount(allmubFAOriCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2.5)
        }
        else if (fireLanceWyrmprintSlotState == "grayscale(0%)") {
            setFireLanceWyrmprintSlotState("grayscale(100%)");
            setFireWeaponChoiceState("lance");
            setmubFALSilverMaskCountState(mubFALSilverMaskCount + 16)
            setmubFALGoldMaskCountState(mubFALGoldMaskCount + 10)
            setmubFALOriCountState(mubFALOriCount + 1)
            setmubFALRupeeCost(mubFALRupeeCost + 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
            setallmubFAOriCount(allmubFAOriCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2.5)
        }
    }

    function handleFireLanceUnbindIncrement(event) {
        setFireWeaponChoiceState("lance")
        if (fireLanceUnbindState < event.target.value) {
            if (event.target.value - fireLanceUnbindState == 1) {
                setFireLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubFALSilverMaskCountState(mubFALSilverMaskCount - 40)
                    setwbFALSilverMaskCountState(wbFALSilverMaskCount - 40)
                    setmubFALGoldMaskCountState(mubFALGoldMaskCount - 30)
                    setwbFALGoldMaskCountState(wbFALGoldMaskCount - 30)
                    setmubFALSandCountState(mubFALSandCount - 1)
                    setwbFALSandCountState(wbFALSandCount - 1)
                    setmubFALRupeeCost(mubFALRupeeCost - 2)
                    setwbFALRupeeCost(wbFALRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFASandCount(allmubFASandCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubFALSilverMaskCountState(mubFALSilverMaskCount - 16)
                    setwbFALSilverMaskCountState(wbFALSilverMaskCount - 16)
                    setmubFALGoldMaskCountState(mubFALGoldMaskCount - 10)
                    setwbFALGoldMaskCountState(wbFALGoldMaskCount - 10)
                    setmubFALInsanityCountState(mubFALInsanityCount - 7)
                    setwbFALInsanityCountState(wbFALInsanityCount - 7)
                    setmubFALOriCountState(mubFALOriCount - 1)
                    setwbFALOriCountState(wbFALOriCount - 1)
                    setmubFALRupeeCost(mubFALRupeeCost - 7.5)
                    setwbFALRupeeCost(wbFALRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubFALSilverMaskCountState(mubFALSilverMaskCount - 16)
                    setmubFALGoldMaskCountState(mubFALGoldMaskCount - 10)
                    setmubFALInsanityCountState(mubFALInsanityCount - 7)
                    setmubFALOriCountState(mubFALOriCount - 1)
                    setmubFALRupeeCost(mubFALRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubFALSilverMaskCountState(mubFALSilverMaskCount - 80)
                    setmubFALGoldMaskCountState(mubFALGoldMaskCount - 70)
                    setmubFALInsanityCountState(mubFALInsanityCount - 30)
                    setmubFALGaleCountState(mubFALGaleCount - 20)
                    setmubFALOriCountState(mubFALOriCount - 20)
                    setmubFALRupeeCost(mubFALRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 30)
                    setallmubFAGaleCount(allmubFAGaleCount - 20)
                    setallmubFAOriCount(allmubFAOriCount - 20)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
            }
        }
        else if (fireLanceUnbindState > event.target.value) {
            if (fireLanceUnbindState - event.target.value == 1) {
                setFireLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubFALSilverMaskCountState(mubFALSilverMaskCount + 40)
                    setwbFALSilverMaskCountState(wbFALSilverMaskCount + 40)
                    setmubFALGoldMaskCountState(mubFALGoldMaskCount + 30)
                    setwbFALGoldMaskCountState(wbFALGoldMaskCount + 30)
                    setmubFALSandCountState(mubFALSandCount + 1)
                    setwbFALSandCountState(wbFALSandCount + 1)
                    setmubFALRupeeCost(mubFALRupeeCost + 2)
                    setwbFALRupeeCost(wbFALRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFASandCount(allmubFASandCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubFALSilverMaskCountState(mubFALSilverMaskCount + 16)
                    setwbFALSilverMaskCountState(wbFALSilverMaskCount + 16)
                    setmubFALGoldMaskCountState(mubFALGoldMaskCount + 10)
                    setwbFALGoldMaskCountState(wbFALGoldMaskCount + 10)
                    setmubFALInsanityCountState(mubFALInsanityCount + 7)
                    setwbFALInsanityCountState(wbFALInsanityCount + 7)
                    setmubFALOriCountState(mubFALOriCount + 1)
                    setwbFALOriCountState(wbFALOriCount + 1)
                    setmubFALRupeeCost(mubFALRupeeCost + 7.5)
                    setwbFALRupeeCost(wbFALRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubFALSilverMaskCountState(mubFALSilverMaskCount + 16)
                    setmubFALGoldMaskCountState(mubFALGoldMaskCount + 10)
                    setmubFALInsanityCountState(mubFALInsanityCount + 7)
                    setmubFALOriCountState(mubFALOriCount + 1)
                    setmubFALRupeeCost(mubFALRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubFALSilverMaskCountState(mubFALSilverMaskCount + 80)
                    setmubFALGoldMaskCountState(mubFALGoldMaskCount + 70)
                    setmubFALInsanityCountState(mubFALInsanityCount + 30)
                    setmubFALGaleCountState(mubFALGaleCount + 20)
                    setmubFALOriCountState(mubFALOriCount + 20)
                    setmubFALRupeeCost(mubFALRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 30)
                    setallmubFAGaleCount(allmubFAGaleCount + 20)
                    setallmubFAOriCount(allmubFAOriCount + 20)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
            }
        }
    }

    function handleFireLanceRefineIncrement(event) {
        setFireWeaponChoiceState("lance");
        if (fireLanceRefineState < event.target.value) {
            if (event.target.value - fireLanceRefineState == 1) {
                setFireLanceRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubFALSilverMaskCountState(mubFALSilverMaskCount - 16);
                    setwbFALSilverMaskCountState(wbFALSilverMaskCount - 16);
                    setmubFALGoldMaskCountState(mubFALGoldMaskCount - 10);
                    setwbFALGoldMaskCountState(wbFALGoldMaskCount - 10);
                    setmubFALInsanityCountState(mubFALInsanityCount - 7);
                    setwbFALInsanityCountState(wbFALInsanityCount - 7);
                    setmubFALOriCountState(mubFALOriCount - 1);
                    setwbFALOriCountState(wbFALOriCount - 1);
                    setmubFALRupeeCost(mubFALRupeeCost - 2.5);
                    setwbFALRupeeCost(wbFALRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubFALSilverMaskCountState(mubFALSilverMaskCount - 40)
                    setmubFALGoldMaskCountState(mubFALGoldMaskCount - 30);
                    setmubFALInsanityCountState(mubFALInsanityCount - 10);
                    setmubFALGaleCountState(mubFALGaleCount - 10);
                    setmubFALOriCountState(mubFALOriCount - 10);
                    setmubFALRupeeCost(mubFALRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 10)
                    setallmubFAGaleCount(allmubFAGaleCount - 10)
                    setallmubFAOriCount(allmubFAOriCount - 10)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
            }
        }
        else if (fireLanceRefineState > event.target.value) {
            if (fireLanceRefineState - event.target.value == 1) {
                setFireLanceRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubFALSilverMaskCountState(mubFALSilverMaskCount + 16);
                    setwbFALSilverMaskCountState(wbFALSilverMaskCount + 16);
                    setmubFALGoldMaskCountState(mubFALGoldMaskCount + 10);
                    setwbFALGoldMaskCountState(wbFALGoldMaskCount + 10);
                    setmubFALInsanityCountState(mubFALInsanityCount + 7);
                    setwbFALInsanityCountState(wbFALInsanityCount + 7);
                    setmubFALOriCountState(mubFALOriCount + 1);
                    setwbFALOriCountState(wbFALOriCount + 1);
                    setmubFALRupeeCost(mubFALRupeeCost + 2.5);
                    setwbFALRupeeCost(wbFALRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubFALSilverMaskCountState(mubFALSilverMaskCount + 40)
                    setmubFALGoldMaskCountState(mubFALGoldMaskCount + 30);
                    setmubFALInsanityCountState(mubFALInsanityCount + 10);
                    setmubFALGaleCountState(mubFALGaleCount + 10);
                    setmubFALOriCountState(mubFALOriCount + 10);
                    setmubFALRupeeCost(mubFALRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 10)
                    setallmubFAGaleCount(allmubFAGaleCount + 10)
                    setallmubFAOriCount(allmubFAOriCount + 10)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
            }
        }
    }

    function craftFireWand() {
        if (fireWandCraftState == "grayscale(100%)") {
            setFireWandCraftState("grayscale(0%)")
            setFireWeaponChoiceState("wand")
            setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - 40)
            setwbFAWSilverMaskCountState(wbFAWSilverMaskCount - 40)
            setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - 30)
            setwbFAWGoldMaskCountState(wbFAWGoldMaskCount - 30)
            setmubFAWSandCountState(mubFAWSandCount - 1)
            setwbFAWSandCountState(wbFAWSandCount - 1)
            setmubFAWRupeeCost(mubFAWRupeeCost - 2)
            setwbFAWRupeeCost(wbFAWRupeeCost - 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
            setallmubFASandCount(allmubFASandCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2)
        }
        else if (fireWandCraftState == "grayscale(0%)") {
            setFireWandCraftState("grayscale(100%)")
            setFireWeaponChoiceState("wand")
            setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + 40)
            setwbFAWSilverMaskCountState(wbFAWSilverMaskCount + 40)
            setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + 30)
            setwbFAWGoldMaskCountState(wbFAWGoldMaskCount + 30)
            setmubFAWSandCountState(mubFAWSandCount + 1)
            setwbFAWSandCountState(wbFAWSandCount + 1)
            setmubFAWRupeeCost(mubFAWRupeeCost + 2)
            setwbFAWRupeeCost(wbFAWRupeeCost + 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
            setallmubFASandCount(allmubFASandCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2)
        }
    }

    function fireWandWeaponBonus() {
        if (fireWandWeaponBonusState == "grayscale(100%)") {
            setFireWandWeaponBonusState("grayscale(0%)");
            setFireWeaponChoiceState("wand");
            setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - 100)
            setwbFAWSilverMaskCountState(wbFAWSilverMaskCount - 100)
            setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - 100)
            setwbFAWGoldMaskCountState(wbFAWGoldMaskCount - 100)
            setmubFAWInsanityCountState(mubFAWInsanityCount - 14)
            setwbFAWInsanityCountState(wbFAWInsanityCount - 14)
            setmubFAWOriCountState(mubFAWOriCount - 30)
            setwbFAWOriCountState(wbFAWOriCount - 30)
            setmubFAWRupeeCost(mubFAWRupeeCost - 10)
            setwbFAWRupeeCost(wbFAWRupeeCost - 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 100)
            setallmubFAInsanityCount(allmubFAInsanityCount - 14)
            setallmubFAOriCount(allmubFAOriCount - 30)
            setallmubFARupeeCost(allmubFARupeeCost - 10)
        }
        else if (fireWandWeaponBonusState == "grayscale(0%)") {
            setFireWandWeaponBonusState("grayscale(100%)");
            setFireWeaponChoiceState("wand");
            setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + 100)
            setwbFAWSilverMaskCountState(wbFAWSilverMaskCount + 100)
            setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + 100)
            setwbFAWGoldMaskCountState(wbFAWGoldMaskCount + 100)
            setmubFAWInsanityCountState(mubFAWInsanityCount + 14)
            setwbFAWInsanityCountState(wbFAWInsanityCount + 14)
            setmubFAWOriCountState(mubFAWOriCount + 30)
            setwbFAWOriCountState(wbFAWOriCount + 30)
            setmubFAWRupeeCost(mubFAWRupeeCost + 10)
            setwbFAWRupeeCost(wbFAWRupeeCost + 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 100)
            setallmubFAInsanityCount(allmubFAInsanityCount + 14)
            setallmubFAOriCount(allmubFAOriCount + 30)
            setallmubFARupeeCost(allmubFARupeeCost + 10)
        }
    }

    function fireWandWyrmprintSlot() {
        if (fireWandWyrmprintSlotState == "grayscale(100%)") {
            setFireWandWyrmprintSlotState("grayscale(0%)");
            setFireWeaponChoiceState("wand");
            setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - 16)
            setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - 10)
            setmubFAWOriCountState(mubFAWOriCount - 1)
            setmubFAWRupeeCost(mubFAWRupeeCost - 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
            setallmubFAOriCount(allmubFAOriCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2.5)
        }
        else if (fireWandWyrmprintSlotState == "grayscale(0%)") {
            setFireWandWyrmprintSlotState("grayscale(100%)");
            setFireWeaponChoiceState("wand");
            setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + 16)
            setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + 10)
            setmubFAWOriCountState(mubFAWOriCount + 1)
            setmubFAWRupeeCost(mubFAWRupeeCost + 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
            setallmubFAOriCount(allmubFAOriCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2.5)
        }
    }

    function handleFireWandUnbindIncrement(event) {
        setFireWeaponChoiceState("wand")
        if (fireWandUnbindState < event.target.value) {
            if (event.target.value - fireWandUnbindState == 1) {
                setFireWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - 40)
                    setwbFAWSilverMaskCountState(wbFAWSilverMaskCount - 40)
                    setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - 30)
                    setwbFAWGoldMaskCountState(wbFAWGoldMaskCount - 30)
                    setmubFAWSandCountState(mubFAWSandCount - 1)
                    setwbFAWSandCountState(wbFAWSandCount - 1)
                    setmubFAWRupeeCost(mubFAWRupeeCost - 2)
                    setwbFAWRupeeCost(wbFAWRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFASandCount(allmubFASandCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - 16)
                    setwbFAWSilverMaskCountState(wbFAWSilverMaskCount - 16)
                    setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - 10)
                    setwbFAWGoldMaskCountState(wbFAWGoldMaskCount - 10)
                    setmubFAWInsanityCountState(mubFAWInsanityCount - 7)
                    setwbFAWInsanityCountState(wbFAWInsanityCount - 7)
                    setmubFAWOriCountState(mubFAWOriCount - 1)
                    setwbFAWOriCountState(wbFAWOriCount - 1)
                    setmubFAWRupeeCost(mubFAWRupeeCost - 7.5)
                    setwbFAWRupeeCost(wbFAWRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - 16)
                    setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - 10)
                    setmubFAWInsanityCountState(mubFAWInsanityCount - 7)
                    setmubFAWOriCountState(mubFAWOriCount - 1)
                    setmubFAWRupeeCost(mubFAWRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - 80)
                    setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - 70)
                    setmubFAWInsanityCountState(mubFAWInsanityCount - 30)
                    setmubFAWGaleCountState(mubFAWGaleCount - 20)
                    setmubFAWOriCountState(mubFAWOriCount - 20)
                    setmubFAWRupeeCost(mubFAWRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 30)
                    setallmubFAGaleCount(allmubFAGaleCount - 20)
                    setallmubFAOriCount(allmubFAOriCount - 20)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
            }
        }
        else if (fireWandUnbindState > event.target.value) {
            if (fireWandUnbindState - event.target.value == 1) {
                setFireWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + 40)
                    setwbFAWSilverMaskCountState(wbFAWSilverMaskCount + 40)
                    setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + 30)
                    setwbFAWGoldMaskCountState(wbFAWGoldMaskCount + 30)
                    setmubFAWSandCountState(mubFAWSandCount + 1)
                    setwbFAWSandCountState(wbFAWSandCount + 1)
                    setmubFAWRupeeCost(mubFAWRupeeCost + 2)
                    setwbFAWRupeeCost(wbFAWRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFASandCount(allmubFASandCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + 16)
                    setwbFAWSilverMaskCountState(wbFAWSilverMaskCount + 16)
                    setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + 10)
                    setwbFAWGoldMaskCountState(wbFAWGoldMaskCount + 10)
                    setmubFAWInsanityCountState(mubFAWInsanityCount + 7)
                    setwbFAWInsanityCountState(wbFAWInsanityCount + 7)
                    setmubFAWOriCountState(mubFAWOriCount + 1)
                    setwbFAWOriCountState(wbFAWOriCount + 1)
                    setmubFAWRupeeCost(mubFAWRupeeCost + 7.5)
                    setwbFAWRupeeCost(wbFAWRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + 16)
                    setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + 10)
                    setmubFAWInsanityCountState(mubFAWInsanityCount + 7)
                    setmubFAWOriCountState(mubFAWOriCount + 1)
                    setmubFAWRupeeCost(mubFAWRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + 80)
                    setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + 70)
                    setmubFAWInsanityCountState(mubFAWInsanityCount + 30)
                    setmubFAWGaleCountState(mubFAWGaleCount + 20)
                    setmubFAWOriCountState(mubFAWOriCount + 20)
                    setmubFAWRupeeCost(mubFAWRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 30)
                    setallmubFAGaleCount(allmubFAGaleCount + 20)
                    setallmubFAOriCount(allmubFAOriCount + 20)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
            }
        }
    }

    function handleFireWandRefineIncrement(event) {
        setFireWeaponChoiceState("wand");
        if (fireWandRefineState < event.target.value) {
            if (event.target.value - fireWandRefineState == 1) {
                setFireWandRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - 16);
                    setwbFAWSilverMaskCountState(wbFAWSilverMaskCount - 16);
                    setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - 10);
                    setwbFAWGoldMaskCountState(wbFAWGoldMaskCount - 10);
                    setmubFAWInsanityCountState(mubFAWInsanityCount - 7);
                    setwbFAWInsanityCountState(wbFAWInsanityCount - 7);
                    setmubFAWOriCountState(mubFAWOriCount - 1);
                    setwbFAWOriCountState(wbFAWOriCount - 1);
                    setmubFAWRupeeCost(mubFAWRupeeCost - 2.5);
                    setwbFAWRupeeCost(wbFAWRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - 40)
                    setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - 30);
                    setmubFAWInsanityCountState(mubFAWInsanityCount - 10);
                    setmubFAWGaleCountState(mubFAWGaleCount - 10);
                    setmubFAWOriCountState(mubFAWOriCount - 10);
                    setmubFAWRupeeCost(mubFAWRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 10)
                    setallmubFAGaleCount(allmubFAGaleCount - 10)
                    setallmubFAOriCount(allmubFAOriCount - 10)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
            }
        }
        else if (fireWandRefineState > event.target.value) {
            if (fireWandRefineState - event.target.value == 1) {
                setFireWandRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + 16);
                    setwbFAWSilverMaskCountState(wbFAWSilverMaskCount + 16);
                    setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + 10);
                    setwbFAWGoldMaskCountState(wbFAWGoldMaskCount + 10);
                    setmubFAWInsanityCountState(mubFAWInsanityCount + 7);
                    setwbFAWInsanityCountState(wbFAWInsanityCount + 7);
                    setmubFAWOriCountState(mubFAWOriCount + 1);
                    setwbFAWOriCountState(wbFAWOriCount + 1);
                    setmubFAWRupeeCost(mubFAWRupeeCost + 2.5);
                    setwbFAWRupeeCost(wbFAWRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + 40)
                    setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + 30);
                    setmubFAWInsanityCountState(mubFAWInsanityCount + 10);
                    setmubFAWGaleCountState(mubFAWGaleCount + 10);
                    setmubFAWOriCountState(mubFAWOriCount + 10);
                    setmubFAWRupeeCost(mubFAWRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 10)
                    setallmubFAGaleCount(allmubFAGaleCount + 10)
                    setallmubFAOriCount(allmubFAOriCount + 10)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
            }
        }
    }

    function craftFireBow() {
        if (fireBowCraftState == "grayscale(100%)") {
            setFireBowCraftState("grayscale(0%)")
            setFireWeaponChoiceState("bow")
            setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - 40)
            setwbFABoSilverMaskCountState(wbFABoSilverMaskCount - 40)
            setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - 30)
            setwbFABoGoldMaskCountState(wbFABoGoldMaskCount - 30)
            setmubFABoSandCountState(mubFABoSandCount - 1)
            setwbFABoSandCountState(wbFABoSandCount - 1)
            setmubFABoRupeeCost(mubFABoRupeeCost - 2)
            setwbFABoRupeeCost(wbFABoRupeeCost - 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
            setallmubFASandCount(allmubFASandCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2)
        }
        else if (fireBowCraftState == "grayscale(0%)") {
            setFireBowCraftState("grayscale(100%)")
            setFireWeaponChoiceState("bow")
            setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + 40)
            setwbFABoSilverMaskCountState(wbFABoSilverMaskCount + 40)
            setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + 30)
            setwbFABoGoldMaskCountState(wbFABoGoldMaskCount + 30)
            setmubFABoSandCountState(mubFABoSandCount + 1)
            setwbFABoSandCountState(wbFABoSandCount + 1)
            setmubFABoRupeeCost(mubFABoRupeeCost + 2)
            setwbFABoRupeeCost(wbFABoRupeeCost + 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
            setallmubFASandCount(allmubFASandCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2)
        }
    }

    function fireBowWeaponBonus() {
        if (fireBowWeaponBonusState == "grayscale(100%)") {
            setFireBowWeaponBonusState("grayscale(0%)");
            setFireWeaponChoiceState("bow");
            setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - 100)
            setwbFABoSilverMaskCountState(wbFABoSilverMaskCount - 100)
            setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - 100)
            setwbFABoGoldMaskCountState(wbFABoGoldMaskCount - 100)
            setmubFABoInsanityCountState(mubFABoInsanityCount - 14)
            setwbFABoInsanityCountState(wbFABoInsanityCount - 14)
            setmubFABoOriCountState(mubFABoOriCount - 30)
            setwbFABoOriCountState(wbFABoOriCount - 30)
            setmubFABoRupeeCost(mubFABoRupeeCost - 10)
            setwbFABoRupeeCost(wbFABoRupeeCost - 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 100)
            setallmubFAInsanityCount(allmubFAInsanityCount - 14)
            setallmubFAOriCount(allmubFAOriCount - 30)
            setallmubFARupeeCost(allmubFARupeeCost - 10)
        }
        else if (fireBowWeaponBonusState == "grayscale(0%)") {
            setFireBowWeaponBonusState("grayscale(100%)");
            setFireWeaponChoiceState("bow");
            setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + 100)
            setwbFABoSilverMaskCountState(wbFABoSilverMaskCount + 100)
            setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + 100)
            setwbFABoGoldMaskCountState(wbFABoGoldMaskCount + 100)
            setmubFABoInsanityCountState(mubFABoInsanityCount + 14)
            setwbFABoInsanityCountState(wbFABoInsanityCount + 14)
            setmubFABoOriCountState(mubFABoOriCount + 30)
            setwbFABoOriCountState(wbFABoOriCount + 30)
            setmubFABoRupeeCost(mubFABoRupeeCost + 10)
            setwbFABoRupeeCost(wbFABoRupeeCost + 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 100)
            setallmubFAInsanityCount(allmubFAInsanityCount + 14)
            setallmubFAOriCount(allmubFAOriCount + 30)
            setallmubFARupeeCost(allmubFARupeeCost + 10)
        }
    }

    function fireBowWyrmprintSlot() {
        if (fireBowWyrmprintSlotState == "grayscale(100%)") {
            setFireBowWyrmprintSlotState("grayscale(0%)");
            setFireWeaponChoiceState("bow");
            setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - 16)
            setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - 10)
            setmubFABoOriCountState(mubFABoOriCount - 1)
            setmubFABoRupeeCost(mubFABoRupeeCost - 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
            setallmubFAOriCount(allmubFAOriCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2.5)
        }
        else if (fireBowWyrmprintSlotState == "grayscale(0%)") {
            setFireBowWyrmprintSlotState("grayscale(100%)");
            setFireWeaponChoiceState("bow");
            setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + 16)
            setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + 10)
            setmubFABoOriCountState(mubFABoOriCount + 1)
            setmubFABoRupeeCost(mubFABoRupeeCost + 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
            setallmubFAOriCount(allmubFAOriCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2.5)
        }
    }

    function handleFireBowUnbindIncrement(event) {
        setFireWeaponChoiceState("bow")
        if (fireBowUnbindState < event.target.value) {
            if (event.target.value - fireBowUnbindState == 1) {
                setFireBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - 40)
                    setwbFABoSilverMaskCountState(wbFABoSilverMaskCount - 40)
                    setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - 30)
                    setwbFABoGoldMaskCountState(wbFABoGoldMaskCount - 30)
                    setmubFABoSandCountState(mubFABoSandCount - 1)
                    setwbFABoSandCountState(wbFABoSandCount - 1)
                    setmubFABoRupeeCost(mubFABoRupeeCost - 2)
                    setwbFABoRupeeCost(wbFABoRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFASandCount(allmubFASandCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - 16)
                    setwbFABoSilverMaskCountState(wbFABoSilverMaskCount - 16)
                    setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - 10)
                    setwbFABoGoldMaskCountState(wbFABoGoldMaskCount - 10)
                    setmubFABoInsanityCountState(mubFABoInsanityCount - 7)
                    setwbFABoInsanityCountState(wbFABoInsanityCount - 7)
                    setmubFABoOriCountState(mubFABoOriCount - 1)
                    setwbFABoOriCountState(wbFABoOriCount - 1)
                    setmubFABoRupeeCost(mubFABoRupeeCost - 7.5)
                    setwbFABoRupeeCost(wbFABoRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - 16)
                    setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - 10)
                    setmubFABoInsanityCountState(mubFABoInsanityCount - 7)
                    setmubFABoOriCountState(mubFABoOriCount - 1)
                    setmubFABoRupeeCost(mubFABoRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - 80)
                    setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - 70)
                    setmubFABoInsanityCountState(mubFABoInsanityCount - 30)
                    setmubFABoGaleCountState(mubFABoGaleCount - 20)
                    setmubFABoOriCountState(mubFABoOriCount - 20)
                    setmubFABoRupeeCost(mubFABoRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 30)
                    setallmubFAGaleCount(allmubFAGaleCount - 20)
                    setallmubFAOriCount(allmubFAOriCount - 20)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
            }
        }
        else if (fireBowUnbindState > event.target.value) {
            if (fireBowUnbindState - event.target.value == 1) {
                setFireBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + 40)
                    setwbFABoSilverMaskCountState(wbFABoSilverMaskCount + 40)
                    setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + 30)
                    setwbFABoGoldMaskCountState(wbFABoGoldMaskCount + 30)
                    setmubFABoSandCountState(mubFABoSandCount + 1)
                    setwbFABoSandCountState(wbFABoSandCount + 1)
                    setmubFABoRupeeCost(mubFABoRupeeCost + 2)
                    setwbFABoRupeeCost(wbFABoRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFASandCount(allmubFASandCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + 16)
                    setwbFABoSilverMaskCountState(wbFABoSilverMaskCount + 16)
                    setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + 10)
                    setwbFABoGoldMaskCountState(wbFABoGoldMaskCount + 10)
                    setmubFABoInsanityCountState(mubFABoInsanityCount + 7)
                    setwbFABoInsanityCountState(wbFABoInsanityCount + 7)
                    setmubFABoOriCountState(mubFABoOriCount + 1)
                    setwbFABoOriCountState(wbFABoOriCount + 1)
                    setmubFABoRupeeCost(mubFABoRupeeCost + 7.5)
                    setwbFABoRupeeCost(wbFABoRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + 16)
                    setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + 10)
                    setmubFABoInsanityCountState(mubFABoInsanityCount + 7)
                    setmubFABoOriCountState(mubFABoOriCount + 1)
                    setmubFABoRupeeCost(mubFABoRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + 80)
                    setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + 70)
                    setmubFABoInsanityCountState(mubFABoInsanityCount + 30)
                    setmubFABoGaleCountState(mubFABoGaleCount + 20)
                    setmubFABoOriCountState(mubFABoOriCount + 20)
                    setmubFABoRupeeCost(mubFABoRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 30)
                    setallmubFAGaleCount(allmubFAGaleCount + 20)
                    setallmubFAOriCount(allmubFAOriCount + 20)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
            }
        }
    }

    function handleFireBowRefineIncrement(event) {
        setFireWeaponChoiceState("bow");
        if (fireBowRefineState < event.target.value) {
            if (event.target.value - fireBowRefineState == 1) {
                setFireBowRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - 16);
                    setwbFABoSilverMaskCountState(wbFABoSilverMaskCount - 16);
                    setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - 10);
                    setwbFABoGoldMaskCountState(wbFABoGoldMaskCount - 10);
                    setmubFABoInsanityCountState(mubFABoInsanityCount - 7);
                    setwbFABoInsanityCountState(wbFABoInsanityCount - 7);
                    setmubFABoOriCountState(mubFABoOriCount - 1);
                    setwbFABoOriCountState(wbFABoOriCount - 1);
                    setmubFABoRupeeCost(mubFABoRupeeCost - 2.5);
                    setwbFABoRupeeCost(wbFABoRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - 40)
                    setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - 30);
                    setmubFABoInsanityCountState(mubFABoInsanityCount - 10);
                    setmubFABoGaleCountState(mubFABoGaleCount - 10);
                    setmubFABoOriCountState(mubFABoOriCount - 10);
                    setmubFABoRupeeCost(mubFABoRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 10)
                    setallmubFAGaleCount(allmubFAGaleCount - 10)
                    setallmubFAOriCount(allmubFAOriCount - 10)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
            }
        }
        else if (fireBowRefineState > event.target.value) {
            if (event.target.value - fireBowRefineState == 1) {
                setFireBowRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + 16);
                    setwbFABoSilverMaskCountState(wbFABoSilverMaskCount + 16);
                    setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + 10);
                    setwbFABoGoldMaskCountState(wbFABoGoldMaskCount + 10);
                    setmubFABoInsanityCountState(mubFABoInsanityCount + 7);
                    setwbFABoInsanityCountState(wbFABoInsanityCount + 7);
                    setmubFABoOriCountState(mubFABoOriCount + 1);
                    setwbFABoOriCountState(wbFABoOriCount + 1);
                    setmubFABoRupeeCost(mubFABoRupeeCost + 2.5);
                    setwbFABoRupeeCost(wbFABoRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + 40)
                    setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + 30);
                    setmubFABoInsanityCountState(mubFABoInsanityCount + 10);
                    setmubFABoGaleCountState(mubFABoGaleCount + 10);
                    setmubFABoOriCountState(mubFABoOriCount + 10);
                    setmubFABoRupeeCost(mubFABoRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 10)
                    setallmubFAGaleCount(allmubFAGaleCount + 10)
                    setallmubFAOriCount(allmubFAOriCount + 10)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
            }
        }
    }

    function craftFireStaff() {
        if (fireStaffCraftState == "grayscale(100%)") {
            setFireStaffCraftState("grayscale(0%)")
            setFireWeaponChoiceState("staff")
            setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - 40)
            setwbFAStSilverMaskCountState(wbFAStSilverMaskCount - 40)
            setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - 30)
            setwbFAStGoldMaskCountState(wbFAStGoldMaskCount - 30)
            setmubFAStSandCountState(mubFAStSandCount - 1)
            setwbFAStSandCountState(wbFAStSandCount - 1)
            setmubFAStRupeeCost(mubFAStRupeeCost - 2)
            setwbFAStRupeeCost(wbFAStRupeeCost - 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
            setallmubFASandCount(allmubFASandCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2)
        }
        else if (fireStaffCraftState == "grayscale(0%)") {
            setFireStaffCraftState("grayscale(100%)")
            setFireWeaponChoiceState("staff")
            setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + 40)
            setwbFAStSilverMaskCountState(wbFAStSilverMaskCount + 40)
            setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + 30)
            setwbFAStGoldMaskCountState(wbFAStGoldMaskCount + 30)
            setmubFAStSandCountState(mubFAStSandCount + 1)
            setwbFAStSandCountState(wbFAStSandCount + 1)
            setmubFAStRupeeCost(mubFAStRupeeCost + 2)
            setwbFAStRupeeCost(wbFAStRupeeCost + 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
            setallmubFASandCount(allmubFASandCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2)
        }
    }

    function fireStaffWeaponBonus() {
        if (fireStaffWeaponBonusState == "grayscale(100%)") {
            setFireStaffWeaponBonusState("grayscale(0%)");
            setFireWeaponChoiceState("staff");
            setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - 100)
            setwbFAStSilverMaskCountState(wbFAStSilverMaskCount - 100)
            setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - 100)
            setwbFAStGoldMaskCountState(wbFAStGoldMaskCount - 100)
            setmubFAStInsanityCountState(mubFAStInsanityCount - 14)
            setwbFAStInsanityCountState(wbFAStInsanityCount - 14)
            setmubFAStOriCountState(mubFAStOriCount - 30)
            setwbFAStOriCountState(wbFAStOriCount - 30)
            setmubFAStRupeeCost(mubFAStRupeeCost - 10)
            setwbFAStRupeeCost(wbFAStRupeeCost - 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 100)
            setallmubFAInsanityCount(allmubFAInsanityCount - 14)
            setallmubFAOriCount(allmubFAOriCount - 30)
            setallmubFARupeeCost(allmubFARupeeCost - 10)
        }
        else if (fireStaffWeaponBonusState == "grayscale(0%)") {
            setFireStaffWeaponBonusState("grayscale(100%)");
            setFireWeaponChoiceState("staff");
            setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + 100)
            setwbFAStSilverMaskCountState(wbFAStSilverMaskCount + 100)
            setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + 100)
            setwbFAStGoldMaskCountState(wbFAStGoldMaskCount + 100)
            setmubFAStInsanityCountState(mubFAStInsanityCount + 14)
            setwbFAStInsanityCountState(wbFAStInsanityCount + 14)
            setmubFAStOriCountState(mubFAStOriCount + 30)
            setwbFAStOriCountState(wbFAStOriCount + 30)
            setmubFAStRupeeCost(mubFAStRupeeCost + 10)
            setwbFAStRupeeCost(wbFAStRupeeCost + 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 100)
            setallmubFAInsanityCount(allmubFAInsanityCount + 14)
            setallmubFAOriCount(allmubFAOriCount + 30)
            setallmubFARupeeCost(allmubFARupeeCost + 10)
        }
    }

    function fireStaffWyrmprintSlot() {
        if (fireStaffWyrmprintSlotState == "grayscale(100%)") {
            setFireStaffWyrmprintSlotState("grayscale(0%)");
            setFireWeaponChoiceState("staff");
            setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - 16)
            setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - 10)
            setmubFAStOriCountState(mubFAStOriCount - 1)
            setmubFAStRupeeCost(mubFAStRupeeCost - 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
            setallmubFAOriCount(allmubFAOriCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2.5)
        }
        else if (fireStaffWyrmprintSlotState == "grayscale(0%)") {
            setFireStaffWyrmprintSlotState("grayscale(100%)");
            setFireWeaponChoiceState("staff");
            setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + 16)
            setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + 10)
            setmubFAStOriCountState(mubFAStOriCount + 1)
            setmubFAStRupeeCost(mubFAStRupeeCost + 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
            setallmubFAOriCount(allmubFAOriCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2.5)
        }
    }

    function handleFireStaffUnbindIncrement(event) {
        setFireWeaponChoiceState("staff")
        if (fireStaffUnbindState < event.target.value) {
            if (event.target.value - fireStaffUnbindState == 1) {
                setFireStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - 40)
                    setwbFAStSilverMaskCountState(wbFAStSilverMaskCount - 40)
                    setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - 30)
                    setwbFAStGoldMaskCountState(wbFAStGoldMaskCount - 30)
                    setmubFAStSandCountState(mubFAStSandCount - 1)
                    setwbFAStSandCountState(wbFAStSandCount - 1)
                    setmubFAStRupeeCost(mubFAStRupeeCost - 2)
                    setwbFAStRupeeCost(wbFAStRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFASandCount(allmubFASandCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - 16)
                    setwbFAStSilverMaskCountState(wbFAStSilverMaskCount - 16)
                    setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - 10)
                    setwbFAStGoldMaskCountState(wbFAStGoldMaskCount - 10)
                    setmubFAStInsanityCountState(mubFAStInsanityCount - 7)
                    setwbFAStInsanityCountState(wbFAStInsanityCount - 7)
                    setmubFAStOriCountState(mubFAStOriCount - 1)
                    setwbFAStOriCountState(wbFAStOriCount - 1)
                    setmubFAStRupeeCost(mubFAStRupeeCost - 7.5)
                    setwbFAStRupeeCost(wbFAStRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - 16)
                    setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - 10)
                    setmubFAStInsanityCountState(mubFAStInsanityCount - 7)
                    setmubFAStOriCountState(mubFAStOriCount - 1)
                    setmubFAStRupeeCost(mubFAStRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - 80)
                    setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - 70)
                    setmubFAStInsanityCountState(mubFAStInsanityCount - 30)
                    setmubFAStGaleCountState(mubFAStGaleCount - 20)
                    setmubFAStOriCountState(mubFAStOriCount - 20)
                    setmubFAStRupeeCost(mubFAStRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 30)
                    setallmubFAGaleCount(allmubFAGaleCount - 20)
                    setallmubFAOriCount(allmubFAOriCount - 20)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
            }
        }
        else if (fireStaffUnbindState > event.target.value) {
            if (fireStaffUnbindState - event.target.value == 1) {
                setFireStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + 40)
                    setwbFAStSilverMaskCountState(wbFAStSilverMaskCount + 40)
                    setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + 30)
                    setwbFAStGoldMaskCountState(wbFAStGoldMaskCount + 30)
                    setmubFAStSandCountState(mubFAStSandCount + 1)
                    setwbFAStSandCountState(wbFAStSandCount + 1)
                    setmubFAStRupeeCost(mubFAStRupeeCost + 2)
                    setwbFAStRupeeCost(wbFAStRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFASandCount(allmubFASandCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + 16)
                    setwbFAStSilverMaskCountState(wbFAStSilverMaskCount + 16)
                    setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + 10)
                    setwbFAStGoldMaskCountState(wbFAStGoldMaskCount + 10)
                    setmubFAStInsanityCountState(mubFAStInsanityCount + 7)
                    setwbFAStInsanityCountState(wbFAStInsanityCount + 7)
                    setmubFAStOriCountState(mubFAStOriCount + 1)
                    setwbFAStOriCountState(wbFAStOriCount + 1)
                    setmubFAStRupeeCost(mubFAStRupeeCost + 7.5)
                    setwbFAStRupeeCost(wbFAStRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + 16)
                    setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + 10)
                    setmubFAStInsanityCountState(mubFAStInsanityCount + 7)
                    setmubFAStOriCountState(mubFAStOriCount + 1)
                    setmubFAStRupeeCost(mubFAStRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + 80)
                    setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + 70)
                    setmubFAStInsanityCountState(mubFAStInsanityCount + 30)
                    setmubFAStGaleCountState(mubFAStGaleCount + 20)
                    setmubFAStOriCountState(mubFAStOriCount + 20)
                    setmubFAStRupeeCost(mubFAStRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 30)
                    setallmubFAGaleCount(allmubFAGaleCount + 20)
                    setallmubFAOriCount(allmubFAOriCount + 20)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
            }
        }
    }

    function handleFireStaffRefineIncrement(event) {
        setFireWeaponChoiceState("staff");
        if (fireStaffRefineState < event.target.value) {
            if (event.target.value - fireStaffRefineState == 1) {
                setFireStaffRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - 16);
                    setwbFAStSilverMaskCountState(wbFAStSilverMaskCount - 16);
                    setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - 10);
                    setwbFAStGoldMaskCountState(wbFAStGoldMaskCount - 10);
                    setmubFAStInsanityCountState(mubFAStInsanityCount - 7);
                    setwbFAStInsanityCountState(wbFAStInsanityCount - 7);
                    setmubFAStOriCountState(mubFAStOriCount - 1);
                    setwbFAStOriCountState(wbFAStOriCount - 1);
                    setmubFAStRupeeCost(mubFAStRupeeCost - 2.5);
                    setwbFAStRupeeCost(wbFAStRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - 40)
                    setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - 30);
                    setmubFAStInsanityCountState(mubFAStInsanityCount - 10);
                    setmubFAStGaleCountState(mubFAStGaleCount - 10);
                    setmubFAStOriCountState(mubFAStOriCount - 10);
                    setmubFAStRupeeCost(mubFAStRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 10)
                    setallmubFAGaleCount(allmubFAGaleCount - 10)
                    setallmubFAOriCount(allmubFAOriCount - 10)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
            }
        }
        else if (fireStaffRefineState > event.target.value) {
            if (fireStaffRefineState - event.target.value == 1) {
                setFireStaffRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + 16);
                    setwbFAStSilverMaskCountState(wbFAStSilverMaskCount + 16);
                    setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + 10);
                    setwbFAStGoldMaskCountState(wbFAStGoldMaskCount + 10);
                    setmubFAStInsanityCountState(mubFAStInsanityCount + 7);
                    setwbFAStInsanityCountState(wbFAStInsanityCount + 7);
                    setmubFAStOriCountState(mubFAStOriCount + 1);
                    setwbFAStOriCountState(wbFAStOriCount + 1);
                    setmubFAStRupeeCost(mubFAStRupeeCost + 2.5);
                    setwbFAStRupeeCost(wbFAStRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + 40)
                    setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + 30);
                    setmubFAStInsanityCountState(mubFAStInsanityCount + 10);
                    setmubFAStGaleCountState(mubFAStGaleCount + 10);
                    setmubFAStOriCountState(mubFAStOriCount + 10);
                    setmubFAStRupeeCost(mubFAStRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 10)
                    setallmubFAGaleCount(allmubFAGaleCount + 10)
                    setallmubFAOriCount(allmubFAOriCount + 10)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
            }
        }
    }

    function craftFireManacaster() {
        if (fireManacasterCraftState == "grayscale(100%)") {
            setFireManacasterCraftState("grayscale(0%)")
            setFireWeaponChoiceState("manacaster")
            setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - 40)
            setwbFAMSilverMaskCountState(wbFAMSilverMaskCount - 40)
            setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - 30)
            setwbFAMGoldMaskCountState(wbFAMGoldMaskCount - 30)
            setmubFAMSandCountState(mubFAMSandCount - 1)
            setwbFAMSandCountState(wbFAMSandCount - 1)
            setmubFAMRupeeCost(mubFAMRupeeCost - 2)
            setwbFAMRupeeCost(wbFAMRupeeCost - 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
            setallmubFASandCount(allmubFASandCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2)
        }
        else if (fireManacasterCraftState == "grayscale(0%)") {
            setFireManacasterCraftState("grayscale(100%)")
            setFireWeaponChoiceState("manacaster")
            setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + 40)
            setwbFAMSilverMaskCountState(wbFAMSilverMaskCount + 40)
            setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + 30)
            setwbFAMGoldMaskCountState(wbFAMGoldMaskCount + 30)
            setmubFAMSandCountState(mubFAMSandCount + 1)
            setwbFAMSandCountState(wbFAMSandCount + 1)
            setmubFAMRupeeCost(mubFAMRupeeCost + 2)
            setwbFAMRupeeCost(wbFAMRupeeCost + 2)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
            setallmubFASandCount(allmubFASandCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2)
        }
    }

    function fireManacasterWeaponBonus() {
        if (fireManacasterWeaponBonusState == "grayscale(100%)") {
            setFireManacasterWeaponBonusState("grayscale(0%)");
            setFireWeaponChoiceState("manacaster");
            setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - 100)
            setwbFAMSilverMaskCountState(wbFAMSilverMaskCount - 100)
            setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - 100)
            setwbFAMGoldMaskCountState(wbFAMGoldMaskCount - 100)
            setmubFAMInsanityCountState(mubFAMInsanityCount - 14)
            setwbFAMInsanityCountState(wbFAMInsanityCount - 14)
            setmubFAMOriCountState(mubFAMOriCount - 30)
            setwbFAMOriCountState(wbFAMOriCount - 30)
            setmubFAMRupeeCost(mubFAMRupeeCost - 10)
            setwbFAMRupeeCost(wbFAMRupeeCost - 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 100)
            setallmubFAInsanityCount(allmubFAInsanityCount - 14)
            setallmubFAOriCount(allmubFAOriCount - 30)
            setallmubFARupeeCost(allmubFARupeeCost - 10)
        }
        else if (fireManacasterWeaponBonusState == "grayscale(0%)") {
            setFireManacasterWeaponBonusState("grayscale(100%)");
            setFireWeaponChoiceState("manacaster");
            setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + 100)
            setwbFAMSilverMaskCountState(wbFAMSilverMaskCount + 100)
            setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + 100)
            setwbFAMGoldMaskCountState(wbFAMGoldMaskCount + 100)
            setmubFAMInsanityCountState(mubFAMInsanityCount + 14)
            setwbFAMInsanityCountState(wbFAMInsanityCount + 14)
            setmubFAMOriCountState(mubFAMOriCount + 30)
            setwbFAMOriCountState(wbFAMOriCount + 30)
            setmubFAMRupeeCost(mubFAMRupeeCost + 10)
            setwbFAMRupeeCost(wbFAMRupeeCost + 10)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 100)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 100)
            setallmubFAInsanityCount(allmubFAInsanityCount + 14)
            setallmubFAOriCount(allmubFAOriCount + 30)
            setallmubFARupeeCost(allmubFARupeeCost + 10)
        }
    }

    function fireManacasterWyrmprintSlot() {
        if (fireManacasterWyrmprintSlotState == "grayscale(100%)") {
            setFireManacasterWyrmprintSlotState("grayscale(0%)");
            setFireWeaponChoiceState("manacaster");
            setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - 16)
            setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - 10)
            setmubFAMOriCountState(mubFAMOriCount - 1)
            setmubFAMRupeeCost(mubFAMRupeeCost - 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
            setallmubFAOriCount(allmubFAOriCount - 1)
            setallmubFARupeeCost(allmubFARupeeCost - 2.5)
        }
        else if (fireManacasterWyrmprintSlotState == "grayscale(0%)") {
            setFireManacasterWyrmprintSlotState("grayscale(100%)");
            setFireWeaponChoiceState("manacaster");
            setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + 16)
            setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + 10)
            setmubFAMOriCountState(mubFAMOriCount + 1)
            setmubFAMRupeeCost(mubFAMRupeeCost + 2.5)
            setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
            setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
            setallmubFAOriCount(allmubFAOriCount + 1)
            setallmubFARupeeCost(allmubFARupeeCost + 2.5)
        }
    }

    function handleFireManacasterUnbindIncrement(event) {
        setFireWeaponChoiceState("manacaster")
        if (fireManacasterUnbindState < event.target.value) {
            if (event.target.value - fireManacasterUnbindState == 1) {
                setFireManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - 40)
                    setwbFAMSilverMaskCountState(wbFAMSilverMaskCount - 40)
                    setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - 30)
                    setwbFAMGoldMaskCountState(wbFAMGoldMaskCount - 30)
                    setmubFAMSandCountState(mubFAMSandCount - 1)
                    setwbFAMSandCountState(wbFAMSandCount - 1)
                    setmubFAMRupeeCost(mubFAMRupeeCost - 2)
                    setwbFAMRupeeCost(wbFAMRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFASandCount(allmubFASandCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - 16)
                    setwbFAMSilverMaskCountState(wbFAMSilverMaskCount - 16)
                    setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - 10)
                    setwbFAMGoldMaskCountState(wbFAMGoldMaskCount - 10)
                    setmubFAMInsanityCountState(mubFAMInsanityCount - 7)
                    setwbFAMInsanityCountState(wbFAMInsanityCount - 7)
                    setmubFAMOriCountState(mubFAMOriCount - 1)
                    setwbFAMOriCountState(wbFAMOriCount - 1)
                    setmubFAMRupeeCost(mubFAMRupeeCost - 7.5)
                    setwbFAMRupeeCost(wbFAMRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - 16)
                    setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - 10)
                    setmubFAMInsanityCountState(mubFAMInsanityCount - 7)
                    setmubFAMOriCountState(mubFAMOriCount - 1)
                    setmubFAMRupeeCost(mubFAMRupeeCost - 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - 80)
                    setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - 70)
                    setmubFAMInsanityCountState(mubFAMInsanityCount - 30)
                    setmubFAMGaleCountState(mubFAMGaleCount - 20)
                    setmubFAMOriCountState(mubFAMOriCount - 20)
                    setmubFAMRupeeCost(mubFAMRupeeCost - 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 30)
                    setallmubFAGaleCount(allmubFAGaleCount - 20)
                    setallmubFAOriCount(allmubFAOriCount - 20)
                    setallmubFARupeeCost(allmubFARupeeCost - 2)
                }
            }
        }
        else if (fireManacasterUnbindState > event.target.value) {
            if (fireManacasterUnbindState - event.target.value == 1) {
                setFireManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + 40)
                    setwbFAMSilverMaskCountState(wbFAMSilverMaskCount + 40)
                    setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + 30)
                    setwbFAMGoldMaskCountState(wbFAMGoldMaskCount + 30)
                    setmubFAMSandCountState(mubFAMSandCount + 1)
                    setwbFAMSandCountState(wbFAMSandCount + 1)
                    setmubFAMRupeeCost(mubFAMRupeeCost + 2)
                    setwbFAMRupeeCost(wbFAMRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFASandCount(allmubFASandCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + 16)
                    setwbFAMSilverMaskCountState(wbFAMSilverMaskCount + 16)
                    setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + 10)
                    setwbFAMGoldMaskCountState(wbFAMGoldMaskCount + 10)
                    setmubFAMInsanityCountState(mubFAMInsanityCount + 7)
                    setwbFAMInsanityCountState(wbFAMInsanityCount + 7)
                    setmubFAMOriCountState(mubFAMOriCount + 1)
                    setwbFAMOriCountState(wbFAMOriCount + 1)
                    setmubFAMRupeeCost(mubFAMRupeeCost + 7.5)
                    setwbFAMRupeeCost(wbFAMRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + 16)
                    setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + 10)
                    setmubFAMInsanityCountState(mubFAMInsanityCount + 7)
                    setmubFAMOriCountState(mubFAMOriCount + 1)
                    setmubFAMRupeeCost(mubFAMRupeeCost + 7.5)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + 80)
                    setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + 70)
                    setmubFAMInsanityCountState(mubFAMInsanityCount + 30)
                    setmubFAMGaleCountState(mubFAMGaleCount + 20)
                    setmubFAMOriCountState(mubFAMOriCount + 20)
                    setmubFAMRupeeCost(mubFAMRupeeCost + 2)
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 80)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 30)
                    setallmubFAGaleCount(allmubFAGaleCount + 20)
                    setallmubFAOriCount(allmubFAOriCount + 20)
                    setallmubFARupeeCost(allmubFARupeeCost + 2)
                }
            }
        }
    }

    function handleFireManacasterRefineIncrement(event) {
        setFireWeaponChoiceState("manacaster");
        if (fireManacasterRefineState < event.target.value) {
            if (event.target.value - fireManacasterRefineState == 1) {
                setFireManacasterRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - 16);
                    setwbFAMSilverMaskCountState(wbFAMSilverMaskCount - 16);
                    setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - 10);
                    setwbFAMGoldMaskCountState(wbFAMGoldMaskCount - 10);
                    setmubFAMInsanityCountState(mubFAMInsanityCount - 7);
                    setwbFAMInsanityCountState(wbFAMInsanityCount - 7);
                    setmubFAMOriCountState(mubFAMOriCount - 1);
                    setwbFAMOriCountState(wbFAMOriCount - 1);
                    setmubFAMRupeeCost(mubFAMRupeeCost - 2.5);
                    setwbFAMRupeeCost(wbFAMRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 7)
                    setallmubFAOriCount(allmubFAOriCount - 1)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - 40)
                    setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - 30);
                    setmubFAMInsanityCountState(mubFAMInsanityCount - 10);
                    setmubFAMGaleCountState(mubFAMGaleCount - 10);
                    setmubFAMOriCountState(mubFAMOriCount - 10);
                    setmubFAMRupeeCost(mubFAMRupeeCost - 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount - 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount - 10)
                    setallmubFAGaleCount(allmubFAGaleCount - 10)
                    setallmubFAOriCount(allmubFAOriCount - 10)
                    setallmubFARupeeCost(allmubFARupeeCost - 2.5)
                }
            }
        }
        else if (fireManacasterRefineState > event.target.value) {
            if (fireManacasterRefineState - event.target.value == 1) {
                setFireManacasterRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + 16);
                    setwbFAMSilverMaskCountState(wbFAMSilverMaskCount + 16);
                    setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + 10);
                    setwbFAMGoldMaskCountState(wbFAMGoldMaskCount + 10);
                    setmubFAMInsanityCountState(mubFAMInsanityCount + 7);
                    setwbFAMInsanityCountState(wbFAMInsanityCount + 7);
                    setmubFAMOriCountState(mubFAMOriCount + 1);
                    setwbFAMOriCountState(wbFAMOriCount + 1);
                    setmubFAMRupeeCost(mubFAMRupeeCost + 2.5);
                    setwbFAMRupeeCost(wbFAMRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 16)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 10)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 7)
                    setallmubFAOriCount(allmubFAOriCount + 1)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + 40)
                    setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + 30);
                    setmubFAMInsanityCountState(mubFAMInsanityCount + 10);
                    setmubFAMGaleCountState(mubFAMGaleCount + 10);
                    setmubFAMOriCountState(mubFAMOriCount + 10);
                    setmubFAMRupeeCost(mubFAMRupeeCost + 2.5);
                    setallmubFASilverMaskCount(allmubFASilverMaskCount + 40)
                    setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 30)
                    setallmubFAInsanityCount(allmubFAInsanityCount + 10)
                    setallmubFAGaleCount(allmubFAGaleCount + 10)
                    setallmubFAOriCount(allmubFAOriCount + 10)
                    setallmubFARupeeCost(allmubFARupeeCost + 2.5)
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
                            <Text fontSize={[1, 3]} ml="auto" mr="auto" color="crimson">Fire Agito Weapons</Text>
                        </Box>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={FireAgitoSword} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: fireSwordCraftState }} onClick={craftFireSword} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Nothung</Text>
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
                                        onChange={handleFireSwordUnbindIncrement}
                                        defaultValue={fireSwordUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireSwordUnbindState}</Text>
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
                                        onChange={handleFireSwordRefineIncrement}
                                        defaultValue={fireSwordRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireSwordRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: fireSwordWeaponBonusState }} onClick={fireSwordWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: fireSwordWyrmprintSlotState }} onClick={fireSwordWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={FireAgitoBlade} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: fireBladeCraftState }} onClick={craftFireBlade} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Tyrfing</Text>
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
                                        onChange={handleFireBladeUnbindIncrement}
                                        defaultValue={fireBladeUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireBladeUnbindState}</Text>
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
                                        onChange={handleFireBladeRefineIncrement}
                                        defaultValue={fireBladeRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireBladeRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: fireBladeWeaponBonusState }} onClick={fireBladeWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: fireBladeWyrmprintSlotState }} onClick={fireBladeWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={FireAgitoDagger} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: fireDaggerCraftState }} onClick={craftFireDagger} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Hrotti</Text>
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
                                        onChange={handleFireDaggerUnbindIncrement}
                                        defaultValue={fireDaggerUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireDaggerUnbindState}</Text>
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
                                        onChange={handleFireDaggerRefineIncrement}
                                        defaultValue={fireDaggerRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireDaggerRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: fireDaggerWeaponBonusState }} onClick={fireDaggerWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: fireDaggerWyrmprintSlotState }} onClick={fireDaggerWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={FireAgitoAxe} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: fireAxeCraftState }} onClick={craftFireAxe} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Mjolnir</Text>
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
                                        onChange={handleFireAxeUnbindIncrement}
                                        defaultValue={fireAxeUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireAxeUnbindState}</Text>
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
                                        onChange={handleFireAxeRefineIncrement}
                                        defaultValue={fireAxeRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireAxeRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: fireAxeWeaponBonusState }} onClick={fireAxeWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: fireAxeWyrmprintSlotState }} onClick={fireAxeWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={FireAgitoLance} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: fireLanceCraftState }} onClick={craftFireLance} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Gungnir</Text>
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
                                        onChange={handleFireLanceUnbindIncrement}
                                        defaultValue={fireLanceUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireLanceUnbindState}</Text>
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
                                        onChange={handleFireLanceRefineIncrement}
                                        defaultValue={fireLanceRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireLanceRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: fireLanceWeaponBonusState }} onClick={fireLanceWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: fireLanceWyrmprintSlotState }} onClick={fireLanceWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={FireAgitoBow} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: fireBowCraftState }} onClick={craftFireBow} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Ydalir</Text>
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
                                        onChange={handleFireBowUnbindIncrement}
                                        defaultValue={fireBowUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireBowUnbindState}</Text>
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
                                        onChange={handleFireBowRefineIncrement}
                                        defaultValue={fireBowRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireBowRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: fireBowWeaponBonusState }} onClick={fireBowWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: fireBowWyrmprintSlotState }} onClick={fireBowWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={FireAgitoWand} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: fireWandCraftState }} onClick={craftFireWand} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Brisingr</Text>
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
                                        onChange={handleFireWandUnbindIncrement}
                                        defaultValue={fireWandUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireWandUnbindState}</Text>
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
                                        onChange={handleFireWandRefineIncrement}
                                        defaultValue={fireWandRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireWandRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: fireWandWeaponBonusState }} onClick={fireWandWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: fireWandWyrmprintSlotState }} onClick={fireWandWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={FireAgitoStaff} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: fireStaffCraftState }} onClick={craftFireStaff} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Gjallarhorn</Text>
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
                                        onChange={handleFireStaffUnbindIncrement}
                                        defaultValue={fireStaffUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireStaffUnbindState}</Text>
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
                                        onChange={handleFireStaffRefineIncrement}
                                        defaultValue={fireStaffRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireStaffRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: fireStaffWeaponBonusState }} onClick={fireStaffWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: fireStaffWyrmprintSlotState }} onClick={fireStaffWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={FireAgitoManacaster} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: fireManacasterCraftState }} onClick={craftFireManacaster} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Draupnir</Text>
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
                                        onChange={handleFireManacasterUnbindIncrement}
                                        defaultValue={fireManacasterUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireManacasterUnbindState}</Text>
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
                                        onChange={handleFireManacasterRefineIncrement}
                                        defaultValue={fireManacasterRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="crimson"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="crimson" fontSize={[1, 3]}>{fireManacasterRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: fireManacasterWeaponBonusState }} onClick={fireManacasterWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: fireManacasterWyrmprintSlotState }} onClick={fireManacasterWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                </Box>
                {/* The box for the materials needed to 100% a weapon */}
                {fireWeaponSelection()}
            </Flex>
            <Flex>
                <Box width={[6 / 7, 1 / 2]} p={3} m={3} bg={"#152238"} sx={{ border: "3px solid blue" }}>
                    <Flex>
                        {/* <Box width={1 / 4}></Box> */}
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Materials Needed to MUB all Weapons</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{allmubFASilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{allmubFAGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{allmubFAInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{allmubFAGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{allmubFASandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{allmubFAOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{allmubFARupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Flex>
            <Flex>&nbsp;</Flex>
            <WeaponTypeNavTabs />
        </div>
    )
}