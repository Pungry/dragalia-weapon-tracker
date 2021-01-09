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
            if (event.target.value == 9 && fireSwordUnbindState == 0) {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount - 304);
                setwbFASSilverMaskCountState(wbFASSilverMaskCount - 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 304);
                setmubFASGoldMaskCountState(mubFASGoldMaskCount - 230);
                setwbFASGoldMaskCountState(wbFASGoldMaskCount - 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 230);
                setmubFASInsanityCountState(mubFASInsanityCount - 58);
                setwbFASInsanityCountState(wbFASInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFASGaleCountState(mubFASGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFASSandCountState(mubFASSandCount - 4);
                setwbFASSandCountState(wbFASSandCount - 4);
                setallmubFASandCount(allmubFASandCount - 4);
                setmubFASOriCountState(mubFASOriCount - 24);
                setwbFASOriCountState(wbFASOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFASRupeeCost(mubFASRupeeCost - 40);
                setwbFASRupeeCost(wbFASRupeeCost - 15.5);
                setallmubFARupeeCost(allmubFARupeeCost - 40);
                setFireSwordUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireSwordUnbindState >= 1 && fireSwordUnbindState <= 4) {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount - 144 - ((4 - fireSwordUnbindState) * 40));
                setwbFASSilverMaskCountState(wbFASSilverMaskCount - 16 - ((4 - fireSwordUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 144 - ((4 - fireSwordUnbindState) * 40));
                setmubFASGoldMaskCountState(mubFASGoldMaskCount - 110 - ((4 - fireSwordUnbindState) * 30));
                setwbFASGoldMaskCountState(wbFASGoldMaskCount - 10 - ((4 - fireSwordUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 110 - ((4 - fireSwordUnbindState) * 30));
                setmubFASInsanityCountState(mubFASInsanityCount - 58);
                setwbFASInsanityCountState(wbFASInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFASGaleCountState(mubFASGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFASSandCountState(mubFASSandCount - (4 - fireSwordUnbindState));
                setwbFASSandCountState(wbFASSandCount - (4 - fireSwordUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireSwordUnbindState));
                setmubFASOriCountState(mubFASOriCount - 24);
                setwbFASOriCountState(wbFASOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFASRupeeCost(mubFASRupeeCost - 32 - ((4 - fireSwordUnbindState) * 2));
                setwbFASRupeeCost(wbFASRupeeCost - 7.5 - ((4 - fireSwordUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - 32 - ((4 - fireSwordUnbindState) * 2));
                setFireSwordUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireSwordUnbindState >= 5 && fireSwordUnbindState <= 8) {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount - 80 - ((8 - fireSwordUnbindState) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 80 - ((8 - fireSwordUnbindState) * 16));
                setmubFASGoldMaskCountState(mubFASGoldMaskCount - 70 - ((8 - fireSwordUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70 - ((8 - fireSwordUnbindState) * 10));
                setmubFASInsanityCountState(mubFASInsanityCount - 30 - ((8 - fireSwordUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - 30 - ((8 - fireSwordUnbindState) * 7));
                setmubFASGaleCountState(mubFASGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFASOriCountState(mubFASOriCount - 20 - ((8 - fireSwordUnbindState) * 1));
                setallmubFAOriCount(allmubFAOriCount - 20 - ((8 - fireSwordUnbindState) * 1));
                setmubFASRupeeCost(mubFASRupeeCost - 2 - ((8 - fireSwordUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - 2 - ((8 - fireSwordUnbindState) * 7.5));
                setFireSwordUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireSwordUnbindState <= 7 && fireSwordUnbindState >= 5) {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount - ((event.target.value - fireSwordUnbindState) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireSwordUnbindState) * 16));
                setmubFASGoldMaskCountState(mubFASGoldMaskCount - ((event.target.value - fireSwordUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireSwordUnbindState) * 10));
                setmubFASInsanityCountState(mubFASInsanityCount - ((event.target.value - fireSwordUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - ((event.target.value - fireSwordUnbindState) * 7));
                setmubFASOriCountState(mubFASOriCount - (event.target.value - fireSwordUnbindState));
                setallmubFAOriCount(allmubFAOriCount - (event.target.value - fireSwordUnbindState));
                setmubFASRupeeCost(mubFASRupeeCost - ((event.target.value - fireSwordUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireSwordUnbindState) * 7.5));
                setFireSwordUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireSwordUnbindState <= 4 && fireSwordUnbindState >= 0) {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount - ((4 - fireSwordUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbFASSilverMaskCountState(wbFASSilverMaskCount - 16 - ((4 - fireSwordUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((4 - fireSwordUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubFASGoldMaskCountState(mubFASGoldMaskCount - ((4 - fireSwordUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbFASGoldMaskCountState(wbFASGoldMaskCount - 10 - ((4 - fireSwordUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((4 - fireSwordUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubFASInsanityCountState(mubFASInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbFASInsanityCountState(wbFASInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubFASSandCountState(mubFASSandCount - (4 - fireSwordUnbindState));
                setwbFASSandCountState(wbFASSandCount - (4 - fireSwordUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireSwordUnbindState));
                setmubFASOriCountState(mubFASOriCount - (-1 * (4 - event.target.value)));
                setwbFASOriCountState(wbFASOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - (-1 * (4 - event.target.value)));
                setmubFASRupeeCost(mubFASRupeeCost - ((4 - fireSwordUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbFASRupeeCost(wbFASRupeeCost - 7.5 - ((4 - fireSwordUnbindState) * 2))
                setFireSwordUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && fireSwordUnbindState <= 3 && fireSwordUnbindState >= 0) {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount - ((event.target.value - fireSwordUnbindState) * 40));
                setwbFASSilverMaskCountState(wbFASSilverMaskCount - ((event.target.value - fireSwordUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireSwordUnbindState) * 40));
                setmubFASGoldMaskCountState(mubFASGoldMaskCount - ((event.target.value - fireSwordUnbindState) * 30));
                setwbFASGoldMaskCountState(wbFASGoldMaskCount - ((event.target.value - fireSwordUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireSwordUnbindState) * 30));
                setmubFASSandCountState(mubFASSandCount - (event.target.value - fireSwordUnbindState));
                setwbFASSandCountState(wbFASSandCount - (event.target.value - fireSwordUnbindState));
                setallmubFASandCount(allmubFASandCount - (event.target.value - fireSwordUnbindState));
                setmubFASRupeeCost(mubFASRupeeCost - ((event.target.value - fireSwordUnbindState) * 2));
                setwbFASRupeeCost(wbFASRupeeCost - ((event.target.value - fireSwordUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireSwordUnbindState) * 2));
                setFireSwordUnbindState(event.target.value)
            }
        }
        else if (fireSwordUnbindState > event.target.value) {
            if (event.target.value == 0 && fireSwordUnbindState == 9) {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount + 304);
                setwbFASSilverMaskCountState(wbFASSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 304);
                setmubFASGoldMaskCountState(mubFASGoldMaskCount + 230);
                setwbFASGoldMaskCountState(wbFASGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 230);
                setmubFASInsanityCountState(mubFASInsanityCount + 58);
                setwbFASInsanityCountState(wbFASInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 58);
                setmubFASGaleCountState(mubFASGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFASSandCountState(mubFASSandCount + 4);
                setwbFASSandCountState(wbFASSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFASOriCountState(mubFASOriCount + 24);
                setwbFASOriCountState(wbFASOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + 24);
                setmubFASRupeeCost(mubFASRupeeCost + 40);
                setwbFASRupeeCost(wbFASRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 40);
                setFireSwordUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireSwordUnbindState >= 5 && fireSwordUnbindState <= 8) {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount + 160 + ((-1 * (4 - fireSwordUnbindState)) * 16));
                setwbFASSilverMaskCountState(wbFASSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 160 + ((-1 * (4 - fireSwordUnbindState)) * 16));
                setmubFASGoldMaskCountState(mubFASGoldMaskCount + 120 + ((-1 * (4 - fireSwordUnbindState)) * 10));
                setwbFASGoldMaskCountState(wbFASGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 120 + ((-1 * (4 - fireSwordUnbindState)) * 10));
                setmubFASInsanityCountState(mubFASInsanityCount + ((-1 * (4 - fireSwordUnbindState)) * 7));
                setwbFASInsanityCountState(wbFASInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((-1 * (4 - fireSwordUnbindState)) * 7));
                setmubFASSandCountState(mubFASSandCount + 4);
                setwbFASSandCountState(wbFASSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFASOriCountState(mubFASOriCount + (-1 * (4 - fireSwordUnbindState)));
                setwbFASOriCountState(wbFASOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + (-1 * (4 - fireSwordUnbindState)));
                setmubFASRupeeCost(mubFASRupeeCost + 8 + (-1 * (4 - fireSwordUnbindState) * 7.5));
                setwbFASRupeeCost(wbFASRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 8 + (-1 * (4 - fireSwordUnbindState) * 7.5));
                setFireSwordUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireSwordUnbindState >= 1 && fireSwordUnbindState <= 4) {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount + (fireSwordUnbindState * 40));
                setwbFASSilverMaskCountState(wbFASSilverMaskCount + (fireSwordUnbindState * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + (fireSwordUnbindState * 40));
                setmubFASGoldMaskCountState(mubFASGoldMaskCount + (fireSwordUnbindState * 30));
                setwbFASGoldMaskCountState(wbFASGoldMaskCount + (fireSwordUnbindState * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + (fireSwordUnbindState * 30));
                setmubFASSandCountState(mubFASSandCount + (fireSwordUnbindState * 1));
                setwbFASSandCountState(wbFASSandCount + (fireSwordUnbindState * 1));
                setallmubFASandCount(allmubFASandCount + (fireSwordUnbindState * 1));
                setmubFASRupeeCost(mubFASRupeeCost + (fireSwordUnbindState * 2));
                setwbFASRupeeCost(wbFASRupeeCost + (fireSwordUnbindState * 2));
                setallmubFARupeeCost(allmubFARupeeCost + (fireSwordUnbindState * 2));
                setFireSwordUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireSwordUnbindState >= 1 && fireSwordUnbindState <= 4) {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount + ((fireSwordUnbindState - event.target.value) * 40))
                setwbFASSilverMaskCountState(wbFASSilverMaskCount + ((fireSwordUnbindState - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireSwordUnbindState - event.target.value) * 40));
                setmubFASGoldMaskCountState(mubFASGoldMaskCount + ((fireSwordUnbindState - event.target.value) * 30));
                setwbFASGoldMaskCountState(wbFASGoldMaskCount + ((fireSwordUnbindState - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireSwordUnbindState - event.target.value) * 30));
                setmubFASSandCountState(mubFASSandCount + (fireSwordUnbindState - event.target.value));
                setwbFASSandCountState(wbFASSandCount + (fireSwordUnbindState - event.target.value));
                setallmubFASandCount(allmubFASandCount + (fireSwordUnbindState - event.target.value));
                setmubFASRupeeCost(mubFASRupeeCost + ((fireSwordUnbindState - event.target.value) * 2));
                setwbFASRupeeCost(wbFASRupeeCost + ((fireSwordUnbindState - event.target.value) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireSwordUnbindState - event.target.value) * 2))
                setFireSwordUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireSwordUnbindState >= 5 && fireSwordUnbindState <= 8) {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount + ((fireSwordUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbFASSilverMaskCountState(wbFASSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireSwordUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubFASGoldMaskCountState(mubFASGoldMaskCount + ((fireSwordUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbFASGoldMaskCountState(wbFASGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireSwordUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubFASInsanityCountState(mubFASInsanityCount + ((fireSwordUnbindState - 4) * 7));
                setwbFASInsanityCountState(wbFASInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireSwordUnbindState - 4) * 7));
                setmubFASSandCountState(mubFASSandCount + (4 - event.target.value));
                setwbFASSandCountState(wbFASSandCount + (4 - event.target.value));
                setallmubFASandCount(allmubFASandCount + (4 - event.target.value));
                setmubFASOriCountState(mubFASOriCount + (fireSwordUnbindState - 4));
                setwbFASOriCountState(wbFASOriCount + (fireSwordUnbindState - 4));
                setallmubFAOriCount(allmubFAOriCount + (fireSwordUnbindState - 4));
                setmubFASRupeeCost(mubFASRupeeCost + ((fireSwordUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbFASRupeeCost(wbFASRupeeCost + 7.5 + ((fireSwordUnbindState - 4) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireSwordUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setFireSwordUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireSwordUnbindState == 9) {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubFASGoldMaskCountState(mubFASGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubFASInsanityCountState(mubFASInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubFASGaleCountState(mubFASGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFASOriCountState(mubFASOriCount + 20 + (8 - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + 20 + (8 - event.target.value));
                setmubFASRupeeCost(mubFASRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setFireSwordUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireSwordUnbindState >= 5 && fireSwordUnbindState <= 8) {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount + ((fireSwordUnbindState - event.target.value) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireSwordUnbindState - event.target.value) * 16));
                setmubFASGoldMaskCountState(mubFASGoldMaskCount + ((fireSwordUnbindState - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireSwordUnbindState - event.target.value) * 10));
                setmubFASInsanityCountState(mubFASInsanityCount + ((fireSwordUnbindState - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireSwordUnbindState - event.target.value) * 7));
                setmubFASOriCountState(mubFASOriCount + (fireSwordUnbindState - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + (fireSwordUnbindState - event.target.value));
                setmubFASRupeeCost(mubFASRupeeCost + ((fireSwordUnbindState - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireSwordUnbindState - event.target.value) * 7.5));
                setFireSwordUnbindState(event.target.value)
            }
        }
    }

    function handleFireSwordRefineIncrement(event) {
        setFireWeaponChoiceState("sword");
        if (fireSwordRefineState < event.target.value) {
            if (fireSwordRefineState == 0 && event.target.value == 1) {
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
                setFireSwordRefineState(event.target.value);
            }
            else if (fireSwordRefineState == 0 && event.target.value == 2) {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount - 56);
                setwbFASSilverMaskCountState(wbFASSilverMaskCount - 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 56);
                setmubFASGoldMaskCountState(mubFASGoldMaskCount - 40);
                setwbFASGoldMaskCountState(wbFASGoldMaskCount - 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 40);
                setmubFASInsanityCountState(mubFASInsanityCount - 17);
                setwbFASInsanityCountState(wbFASInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 17);
                setmubFASGaleCountState(mubFASGaleCount - 10);
                setallmubFAGaleCount(allmubFAGaleCount - 10);
                setmubFASOriCountState(mubFASOriCount - 11);
                setwbFASOriCountState(wbFASOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 11);
                setmubFASRupeeCost(mubFASRupeeCost - 5);
                setwbFASRupeeCost(wbFASRupeeCost - 2.5);
                setallmubFARupeeCost(allmubFARupeeCost - 5);
                setFireSwordRefineState(event.target.value);
            }
            else if (fireSwordRefineState == 1 && event.target.value == 2) {
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
                setFireSwordRefineState(event.target.value);
            }
        }
        else if (fireSwordRefineState > event.target.value) {
            if (fireSwordRefineState == 2 && event.target.value == 1) 
            {
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
                setFireSwordRefineState(event.target.value);
            }
            else if (fireSwordRefineState == 2 && event.target.value == 0) 
            {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount + 56);
                setwbFASSilverMaskCountState(wbFASSilverMaskCount + 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 56);
                setmubFASGoldMaskCountState(mubFASGoldMaskCount + 40);
                setwbFASGoldMaskCountState(wbFASGoldMaskCount + 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 40);
                setmubFASInsanityCountState(mubFASInsanityCount + 17);
                setwbFASInsanityCountState(wbFASInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 17);
                setmubFASGaleCountState(mubFASGaleCount + 10);
                setallmubFAGaleCount(allmubFAGaleCount + 10);
                setmubFASOriCountState(mubFASOriCount + 11);
                setwbFASOriCountState(wbFASOriCount + 1); 
                setallmubFAOriCount(allmubFAOriCount + 11);
                setmubFASRupeeCost(mubFASRupeeCost + 5);
                setwbFASRupeeCost(wbFASRupeeCost + 2.5);
                setallmubFARupeeCost(allmubFARupeeCost + 5)
                setFireSwordRefineState(event.target.value);
            }
            else if (fireSwordRefineState == 1 && event.target.value == 0) 
            {
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
                setFireSwordRefineState(event.target.value);
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
        setFireWeaponChoiceState("blade");
        if (fireBladeUnbindState < event.target.value) {
            if (event.target.value == 9 && fireBladeUnbindState == 0) {
                setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - 304);
                setwbFABlSilverMaskCountState(wbFABlSilverMaskCount - 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 304);
                setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - 230);
                setwbFABlGoldMaskCountState(wbFABlGoldMaskCount - 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 230);
                setmubFABlInsanityCountState(mubFABlInsanityCount - 58);
                setwbFABlInsanityCountState(wbFABlInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFABlGaleCountState(mubFABlGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFABlSandCountState(mubFABlSandCount - 4);
                setwbFABlSandCountState(wbFABlSandCount - 4);
                setallmubFASandCount(allmubFASandCount - 4);
                setmubFABlOriCountState(mubFABlOriCount - 24);
                setwbFABlOriCountState(wbFABlOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFABlRupeeCost(mubFABlRupeeCost - 40);
                setwbFABlRupeeCost(wbFABlRupeeCost - 15.5);
                setallmubFARupeeCost(allmubFARupeeCost - 40);
                setFireBladeUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireBladeUnbindState >= 1 && fireBladeUnbindState <= 4) {
                setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - 144 - ((4 - fireBladeUnbindState) * 40));
                setwbFABlSilverMaskCountState(wbFABlSilverMaskCount - 16 - ((4 - fireBladeUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 144 - ((4 - fireBladeUnbindState) * 40));
                setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - 110 - ((4 - fireBladeUnbindState) * 30));
                setwbFABlGoldMaskCountState(wbFABlGoldMaskCount - 10 - ((4 - fireBladeUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 110 - ((4 - fireBladeUnbindState) * 30));
                setmubFABlInsanityCountState(mubFABlInsanityCount - 58);
                setwbFABlInsanityCountState(wbFABlInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFABlGaleCountState(mubFABlGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFABlSandCountState(mubFABlSandCount - (4 - fireBladeUnbindState));
                setwbFABlSandCountState(wbFABlSandCount - (4 - fireBladeUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireBladeUnbindState));
                setmubFABlOriCountState(mubFABlOriCount - 24);
                setwbFABlOriCountState(wbFABlOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFABlRupeeCost(mubFABlRupeeCost - 32 - ((4 - fireBladeUnbindState) * 2));
                setwbFABlRupeeCost(wbFABlRupeeCost - 7.5 - ((4 - fireBladeUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - 32 - ((4 - fireBladeUnbindState) * 2));
                setFireBladeUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireBladeUnbindState >= 5 && fireBladeUnbindState <= 8) {
                setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - 80 - ((8 - fireBladeUnbindState) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 80 - ((8 - fireBladeUnbindState) * 16));
                setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - 70 - ((8 - fireBladeUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70 - ((8 - fireBladeUnbindState) * 10));
                setmubFABlInsanityCountState(mubFABlInsanityCount - 30 - ((8 - fireBladeUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - 30 - ((8 - fireBladeUnbindState) * 7));
                setmubFABlGaleCountState(mubFABlGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFABlOriCountState(mubFABlOriCount - 20 - ((8 - fireBladeUnbindState) * 1));
                setallmubFAOriCount(allmubFAOriCount - 20 - ((8 - fireBladeUnbindState) * 1));
                setmubFABlRupeeCost(mubFABlRupeeCost - 2 - ((8 - fireBladeUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - 2 - ((8 - fireBladeUnbindState) * 7.5));
                setFireBladeUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireBladeUnbindState <= 7 && fireBladeUnbindState >= 5) {
                setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - ((event.target.value - fireBladeUnbindState) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireBladeUnbindState) * 16));
                setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - ((event.target.value - fireBladeUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireBladeUnbindState) * 10));
                setmubFABlInsanityCountState(mubFABlInsanityCount - ((event.target.value - fireBladeUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - ((event.target.value - fireBladeUnbindState) * 7));
                setmubFABlOriCountState(mubFABlOriCount - (event.target.value - fireBladeUnbindState));
                setallmubFAOriCount(allmubFAOriCount - (event.target.value - fireBladeUnbindState));
                setmubFABlRupeeCost(mubFABlRupeeCost - ((event.target.value - fireBladeUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireBladeUnbindState) * 7.5));
                setFireBladeUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireBladeUnbindState <= 4 && fireBladeUnbindState >= 0) {
                setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - ((4 - fireBladeUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbFABlSilverMaskCountState(wbFABlSilverMaskCount - 16 - ((4 - fireBladeUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((4 - fireBladeUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - ((4 - fireBladeUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbFABlGoldMaskCountState(wbFABlGoldMaskCount - 10 - ((4 - fireBladeUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((4 - fireBladeUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubFABlInsanityCountState(mubFABlInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbFABlInsanityCountState(wbFABlInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubFABlSandCountState(mubFABlSandCount - (4 - fireBladeUnbindState));
                setwbFABlSandCountState(wbFABlSandCount - (4 - fireBladeUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireBladeUnbindState));
                setmubFABlOriCountState(mubFABlOriCount - (-1 * (4 - event.target.value)));
                setwbFABlOriCountState(wbFABlOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - (-1 * (4 - event.target.value)));
                setmubFABlRupeeCost(mubFABlRupeeCost - ((4 - fireBladeUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbFABlRupeeCost(wbFABlRupeeCost - 7.5 - ((4 - fireBladeUnbindState) * 2))
                setFireBladeUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && fireBladeUnbindState <= 3 && fireBladeUnbindState >= 0) {
                setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - ((event.target.value - fireBladeUnbindState) * 40));
                setwbFABlSilverMaskCountState(wbFABlSilverMaskCount - ((event.target.value - fireBladeUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireBladeUnbindState) * 40));
                setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - ((event.target.value - fireBladeUnbindState) * 30));
                setwbFABlGoldMaskCountState(wbFABlGoldMaskCount - ((event.target.value - fireBladeUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireBladeUnbindState) * 30));
                setmubFABlSandCountState(mubFABlSandCount - (event.target.value - fireBladeUnbindState));
                setwbFABlSandCountState(wbFABlSandCount - (event.target.value - fireBladeUnbindState));
                setallmubFASandCount(allmubFASandCount - (event.target.value - fireBladeUnbindState));
                setmubFABlRupeeCost(mubFABlRupeeCost - ((event.target.value - fireBladeUnbindState) * 2));
                setwbFABlRupeeCost(wbFABlRupeeCost - ((event.target.value - fireBladeUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireBladeUnbindState) * 2));
                setFireBladeUnbindState(event.target.value)
            }
        }
        else if (fireBladeUnbindState > event.target.value) {
            if (event.target.value == 0 && fireBladeUnbindState == 9) {
                setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + 304);
                setwbFABlSilverMaskCountState(wbFABlSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 304);
                setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + 230);
                setwbFABlGoldMaskCountState(wbFABlGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 230);
                setmubFABlInsanityCountState(mubFABlInsanityCount + 58);
                setwbFABlInsanityCountState(wbFABlInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 58);
                setmubFABlGaleCountState(mubFABlGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFABlSandCountState(mubFABlSandCount + 4);
                setwbFABlSandCountState(wbFABlSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFABlOriCountState(mubFABlOriCount + 24);
                setwbFABlOriCountState(wbFABlOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + 24);
                setmubFABlRupeeCost(mubFABlRupeeCost + 40);
                setwbFABlRupeeCost(wbFABlRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 40);
                setFireBladeUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireBladeUnbindState >= 5 && fireBladeUnbindState <= 8) {
                setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + 160 + ((-1 * (4 - fireBladeUnbindState)) * 16));
                setwbFABlSilverMaskCountState(wbFABlSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 160 + ((-1 * (4 - fireBladeUnbindState)) * 16));
                setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + 120 + ((-1 * (4 - fireBladeUnbindState)) * 10));
                setwbFABlGoldMaskCountState(wbFABlGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 120 + ((-1 * (4 - fireBladeUnbindState)) * 10));
                setmubFABlInsanityCountState(mubFABlInsanityCount + ((-1 * (4 - fireBladeUnbindState)) * 7));
                setwbFABlInsanityCountState(wbFABlInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((-1 * (4 - fireBladeUnbindState)) * 7));
                setmubFABlSandCountState(mubFABlSandCount + 4);
                setwbFABlSandCountState(wbFABlSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFABlOriCountState(mubFABlOriCount + (-1 * (4 - fireBladeUnbindState)));
                setwbFABlOriCountState(wbFABlOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + (-1 * (4 - fireBladeUnbindState)));
                setmubFABlRupeeCost(mubFABlRupeeCost + 8 + (-1 * (4 - fireBladeUnbindState) * 7.5));
                setwbFABlRupeeCost(wbFABlRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 8 + (-1 * (4 - fireBladeUnbindState) * 7.5));
                setFireBladeUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireBladeUnbindState >= 1 && fireBladeUnbindState <= 4) {
                setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + (fireBladeUnbindState * 40));
                setwbFABlSilverMaskCountState(wbFABlSilverMaskCount + (fireBladeUnbindState * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + (fireBladeUnbindState * 40));
                setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + (fireBladeUnbindState * 30));
                setwbFABlGoldMaskCountState(wbFABlGoldMaskCount + (fireBladeUnbindState * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + (fireBladeUnbindState * 30));
                setmubFABlSandCountState(mubFABlSandCount + (fireBladeUnbindState * 1));
                setwbFABlSandCountState(wbFABlSandCount + (fireBladeUnbindState * 1));
                setallmubFASandCount(allmubFASandCount + (fireBladeUnbindState * 1));
                setmubFABlRupeeCost(mubFABlRupeeCost + (fireBladeUnbindState * 2));
                setwbFABlRupeeCost(wbFABlRupeeCost + (fireBladeUnbindState * 2));
                setallmubFARupeeCost(allmubFARupeeCost + (fireBladeUnbindState * 2));
                setFireBladeUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireBladeUnbindState >= 1 && fireBladeUnbindState <= 4) {
                setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + ((fireBladeUnbindState - event.target.value) * 40))
                setwbFABlSilverMaskCountState(wbFABlSilverMaskCount + ((fireBladeUnbindState - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireBladeUnbindState - event.target.value) * 40));
                setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + ((fireBladeUnbindState - event.target.value) * 30));
                setwbFABlGoldMaskCountState(wbFABlGoldMaskCount + ((fireBladeUnbindState - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireBladeUnbindState - event.target.value) * 30));
                setmubFABlSandCountState(mubFABlSandCount + (fireBladeUnbindState - event.target.value));
                setwbFABlSandCountState(wbFABlSandCount + (fireBladeUnbindState - event.target.value));
                setallmubFASandCount(allmubFASandCount + (fireBladeUnbindState - event.target.value));
                setmubFABlRupeeCost(mubFABlRupeeCost + ((fireBladeUnbindState - event.target.value) * 2));
                setwbFABlRupeeCost(wbFABlRupeeCost + ((fireBladeUnbindState - event.target.value) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireBladeUnbindState - event.target.value) * 2))
                setFireBladeUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireBladeUnbindState >= 5 && fireBladeUnbindState <= 8) {
                setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + ((fireBladeUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbFABlSilverMaskCountState(wbFABlSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireBladeUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + ((fireBladeUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbFABlGoldMaskCountState(wbFABlGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireBladeUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubFABlInsanityCountState(mubFABlInsanityCount + ((fireBladeUnbindState - 4) * 7));
                setwbFABlInsanityCountState(wbFABlInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireBladeUnbindState - 4) * 7));
                setmubFABlSandCountState(mubFABlSandCount + (4 - event.target.value));
                setwbFABlSandCountState(wbFABlSandCount + (4 - event.target.value));
                setallmubFASandCount(allmubFASandCount + (4 - event.target.value));
                setmubFABlOriCountState(mubFABlOriCount + (fireBladeUnbindState - 4));
                setwbFABlOriCountState(wbFABlOriCount + (fireBladeUnbindState - 4));
                setallmubFAOriCount(allmubFAOriCount + (fireBladeUnbindState - 4));
                setmubFABlRupeeCost(mubFABlRupeeCost + ((fireBladeUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbFABlRupeeCost(wbFABlRupeeCost + 7.5 + ((fireBladeUnbindState - 4) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireBladeUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setFireBladeUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireBladeUnbindState == 9) {
                setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubFABlInsanityCountState(mubFABlInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubFABlGaleCountState(mubFABlGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFABlOriCountState(mubFABlOriCount + 20 + (8 - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + 20 + (8 - event.target.value));
                setmubFABlRupeeCost(mubFABlRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setFireBladeUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireBladeUnbindState >= 5 && fireBladeUnbindState <= 8) {
                setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + ((fireBladeUnbindState - event.target.value) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireBladeUnbindState - event.target.value) * 16));
                setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + ((fireBladeUnbindState - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireBladeUnbindState - event.target.value) * 10));
                setmubFABlInsanityCountState(mubFABlInsanityCount + ((fireBladeUnbindState - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireBladeUnbindState - event.target.value) * 7));
                setmubFABlOriCountState(mubFABlOriCount + (fireBladeUnbindState - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + (fireBladeUnbindState - event.target.value));
                setmubFABlRupeeCost(mubFABlRupeeCost + ((fireBladeUnbindState - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireBladeUnbindState - event.target.value) * 7.5));
                setFireBladeUnbindState(event.target.value)
            }
        }
    }

    function handleFireBladeRefineIncrement(event) {
        setFireWeaponChoiceState("blade");
        if (fireBladeRefineState < event.target.value) {
            if (fireBladeRefineState == 0 && event.target.value == 1) {
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
                setFireBladeRefineState(event.target.value);
            }
            else if (fireBladeRefineState == 0 && event.target.value == 2) {
                setmubFABlSilverMaskCountState(mubFABlSilverMaskCount - 56);
                setwbFABlSilverMaskCountState(wbFABlSilverMaskCount - 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 56);
                setmubFABlGoldMaskCountState(mubFABlGoldMaskCount - 40);
                setwbFABlGoldMaskCountState(wbFABlGoldMaskCount - 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 40);
                setmubFABlInsanityCountState(mubFABlInsanityCount - 17);
                setwbFABlInsanityCountState(wbFABlInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 17);
                setmubFABlGaleCountState(mubFABlGaleCount - 10);
                setallmubFAGaleCount(allmubFAGaleCount - 10);
                setmubFABlOriCountState(mubFABlOriCount - 11);
                setwbFABlOriCountState(wbFABlOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 11);
                setmubFABlRupeeCost(mubFABlRupeeCost - 5);
                setwbFABlRupeeCost(wbFABlRupeeCost - 2.5);
                setallmubFARupeeCost(allmubFARupeeCost - 5);
                setFireBladeRefineState(event.target.value);
            }
            else if (fireBladeRefineState == 1 && event.target.value == 2) {
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
                setFireBladeRefineState(event.target.value);
            }
        }
        else if (fireBladeRefineState > event.target.value) {
            if (fireBladeRefineState == 2 && event.target.value == 1) 
            {
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
                setFireBladeRefineState(event.target.value);
            }
            else if (fireBladeRefineState == 2 && event.target.value == 0) 
            {
                setmubFABlSilverMaskCountState(mubFABlSilverMaskCount + 56);
                setwbFABlSilverMaskCountState(wbFABlSilverMaskCount + 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 56);
                setmubFABlGoldMaskCountState(mubFABlGoldMaskCount + 40);
                setwbFABlGoldMaskCountState(wbFABlGoldMaskCount + 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 40);
                setmubFABlInsanityCountState(mubFABlInsanityCount + 17);
                setwbFABlInsanityCountState(wbFABlInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 17);
                setmubFABlGaleCountState(mubFABlGaleCount + 10);
                setallmubFAGaleCount(allmubFAGaleCount + 10);
                setmubFABlOriCountState(mubFABlOriCount + 11);
                setwbFABlOriCountState(wbFABlOriCount + 1); 
                setallmubFAOriCount(allmubFAOriCount + 11);
                setmubFABlRupeeCost(mubFABlRupeeCost + 5);
                setwbFABlRupeeCost(wbFABlRupeeCost + 2.5);
                setallmubFARupeeCost(allmubFARupeeCost + 5)
                setFireBladeRefineState(event.target.value);
            }
            else if (fireBladeRefineState == 1 && event.target.value == 0) 
            {
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
                setFireBladeRefineState(event.target.value);
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
        setFireWeaponChoiceState("dagger");
        if (fireDaggerUnbindState < event.target.value) {
            if (event.target.value == 9 && fireDaggerUnbindState == 0) {
                setmubFADSilverMaskCountState(mubFADSilverMaskCount - 304);
                setwbFADSilverMaskCountState(wbFADSilverMaskCount - 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 304);
                setmubFADGoldMaskCountState(mubFADGoldMaskCount - 230);
                setwbFADGoldMaskCountState(wbFADGoldMaskCount - 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 230);
                setmubFADInsanityCountState(mubFADInsanityCount - 58);
                setwbFADInsanityCountState(wbFADInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFADGaleCountState(mubFADGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFADSandCountState(mubFADSandCount - 4);
                setwbFADSandCountState(wbFADSandCount - 4);
                setallmubFASandCount(allmubFASandCount - 4);
                setmubFADOriCountState(mubFADOriCount - 24);
                setwbFADOriCountState(wbFADOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFADRupeeCost(mubFADRupeeCost - 40);
                setwbFADRupeeCost(wbFADRupeeCost - 15.5);
                setallmubFARupeeCost(allmubFARupeeCost - 40);
                setFireDaggerUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireDaggerUnbindState >= 1 && fireDaggerUnbindState <= 4) {
                setmubFADSilverMaskCountState(mubFADSilverMaskCount - 144 - ((4 - fireDaggerUnbindState) * 40));
                setwbFADSilverMaskCountState(wbFADSilverMaskCount - 16 - ((4 - fireDaggerUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 144 - ((4 - fireDaggerUnbindState) * 40));
                setmubFADGoldMaskCountState(mubFADGoldMaskCount - 110 - ((4 - fireDaggerUnbindState) * 30));
                setwbFADGoldMaskCountState(wbFADGoldMaskCount - 10 - ((4 - fireDaggerUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 110 - ((4 - fireDaggerUnbindState) * 30));
                setmubFADInsanityCountState(mubFADInsanityCount - 58);
                setwbFADInsanityCountState(wbFADInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFADGaleCountState(mubFADGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFADSandCountState(mubFADSandCount - (4 - fireDaggerUnbindState));
                setwbFADSandCountState(wbFADSandCount - (4 - fireDaggerUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireDaggerUnbindState));
                setmubFADOriCountState(mubFADOriCount - 24);
                setwbFADOriCountState(wbFADOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFADRupeeCost(mubFADRupeeCost - 32 - ((4 - fireDaggerUnbindState) * 2));
                setwbFADRupeeCost(wbFADRupeeCost - 7.5 - ((4 - fireDaggerUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - 32 - ((4 - fireDaggerUnbindState) * 2));
                setFireDaggerUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireDaggerUnbindState >= 5 && fireDaggerUnbindState <= 8) {
                setmubFADSilverMaskCountState(mubFADSilverMaskCount - 80 - ((8 - fireDaggerUnbindState) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 80 - ((8 - fireDaggerUnbindState) * 16));
                setmubFADGoldMaskCountState(mubFADGoldMaskCount - 70 - ((8 - fireDaggerUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70 - ((8 - fireDaggerUnbindState) * 10));
                setmubFADInsanityCountState(mubFADInsanityCount - 30 - ((8 - fireDaggerUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - 30 - ((8 - fireDaggerUnbindState) * 7));
                setmubFADGaleCountState(mubFADGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFADOriCountState(mubFADOriCount - 20 - ((8 - fireDaggerUnbindState) * 1));
                setallmubFAOriCount(allmubFAOriCount - 20 - ((8 - fireDaggerUnbindState) * 1));
                setmubFADRupeeCost(mubFADRupeeCost - 2 - ((8 - fireDaggerUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - 2 - ((8 - fireDaggerUnbindState) * 7.5));
                setFireDaggerUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireDaggerUnbindState <= 7 && fireDaggerUnbindState >= 5) {
                setmubFADSilverMaskCountState(mubFADSilverMaskCount - ((event.target.value - fireDaggerUnbindState) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireDaggerUnbindState) * 16));
                setmubFADGoldMaskCountState(mubFADGoldMaskCount - ((event.target.value - fireDaggerUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireDaggerUnbindState) * 10));
                setmubFADInsanityCountState(mubFADInsanityCount - ((event.target.value - fireDaggerUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - ((event.target.value - fireDaggerUnbindState) * 7));
                setmubFADOriCountState(mubFADOriCount - (event.target.value - fireDaggerUnbindState));
                setallmubFAOriCount(allmubFAOriCount - (event.target.value - fireDaggerUnbindState));
                setmubFADRupeeCost(mubFADRupeeCost - ((event.target.value - fireDaggerUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireDaggerUnbindState) * 7.5));
                setFireDaggerUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireDaggerUnbindState <= 4 && fireDaggerUnbindState >= 0) {
                setmubFADSilverMaskCountState(mubFADSilverMaskCount - ((4 - fireDaggerUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbFADSilverMaskCountState(wbFADSilverMaskCount - 16 - ((4 - fireDaggerUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((4 - fireDaggerUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubFADGoldMaskCountState(mubFADGoldMaskCount - ((4 - fireDaggerUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbFADGoldMaskCountState(wbFADGoldMaskCount - 10 - ((4 - fireDaggerUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((4 - fireDaggerUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubFADInsanityCountState(mubFADInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbFADInsanityCountState(wbFADInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubFADSandCountState(mubFADSandCount - (4 - fireDaggerUnbindState));
                setwbFADSandCountState(wbFADSandCount - (4 - fireDaggerUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireDaggerUnbindState));
                setmubFADOriCountState(mubFADOriCount - (-1 * (4 - event.target.value)));
                setwbFADOriCountState(wbFADOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - (-1 * (4 - event.target.value)));
                setmubFADRupeeCost(mubFADRupeeCost - ((4 - fireDaggerUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbFADRupeeCost(wbFADRupeeCost - 7.5 - ((4 - fireDaggerUnbindState) * 2))
                setFireDaggerUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && fireDaggerUnbindState <= 3 && fireDaggerUnbindState >= 0) {
                setmubFADSilverMaskCountState(mubFADSilverMaskCount - ((event.target.value - fireDaggerUnbindState) * 40));
                setwbFADSilverMaskCountState(wbFADSilverMaskCount - ((event.target.value - fireDaggerUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireDaggerUnbindState) * 40));
                setmubFADGoldMaskCountState(mubFADGoldMaskCount - ((event.target.value - fireDaggerUnbindState) * 30));
                setwbFADGoldMaskCountState(wbFADGoldMaskCount - ((event.target.value - fireDaggerUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireDaggerUnbindState) * 30));
                setmubFADSandCountState(mubFADSandCount - (event.target.value - fireDaggerUnbindState));
                setwbFADSandCountState(wbFADSandCount - (event.target.value - fireDaggerUnbindState));
                setallmubFASandCount(allmubFASandCount - (event.target.value - fireDaggerUnbindState));
                setmubFADRupeeCost(mubFADRupeeCost - ((event.target.value - fireDaggerUnbindState) * 2));
                setwbFADRupeeCost(wbFADRupeeCost - ((event.target.value - fireDaggerUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireDaggerUnbindState) * 2));
                setFireDaggerUnbindState(event.target.value)
            }
        }
        else if (fireDaggerUnbindState > event.target.value) {
            if (event.target.value == 0 && fireDaggerUnbindState == 9) {
                setmubFADSilverMaskCountState(mubFADSilverMaskCount + 304);
                setwbFADSilverMaskCountState(wbFADSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 304);
                setmubFADGoldMaskCountState(mubFADGoldMaskCount + 230);
                setwbFADGoldMaskCountState(wbFADGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 230);
                setmubFADInsanityCountState(mubFADInsanityCount + 58);
                setwbFADInsanityCountState(wbFADInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 58);
                setmubFADGaleCountState(mubFADGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFADSandCountState(mubFADSandCount + 4);
                setwbFADSandCountState(wbFADSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFADOriCountState(mubFADOriCount + 24);
                setwbFADOriCountState(wbFADOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + 24);
                setmubFADRupeeCost(mubFADRupeeCost + 40);
                setwbFADRupeeCost(wbFADRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 40);
                setFireDaggerUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireDaggerUnbindState >= 5 && fireDaggerUnbindState <= 8) {
                setmubFADSilverMaskCountState(mubFADSilverMaskCount + 160 + ((-1 * (4 - fireDaggerUnbindState)) * 16));
                setwbFADSilverMaskCountState(wbFADSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 160 + ((-1 * (4 - fireDaggerUnbindState)) * 16));
                setmubFADGoldMaskCountState(mubFADGoldMaskCount + 120 + ((-1 * (4 - fireDaggerUnbindState)) * 10));
                setwbFADGoldMaskCountState(wbFADGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 120 + ((-1 * (4 - fireDaggerUnbindState)) * 10));
                setmubFADInsanityCountState(mubFADInsanityCount + ((-1 * (4 - fireDaggerUnbindState)) * 7));
                setwbFADInsanityCountState(wbFADInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((-1 * (4 - fireDaggerUnbindState)) * 7));
                setmubFADSandCountState(mubFADSandCount + 4);
                setwbFADSandCountState(wbFADSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFADOriCountState(mubFADOriCount + (-1 * (4 - fireDaggerUnbindState)));
                setwbFADOriCountState(wbFADOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + (-1 * (4 - fireDaggerUnbindState)));
                setmubFADRupeeCost(mubFADRupeeCost + 8 + (-1 * (4 - fireDaggerUnbindState) * 7.5));
                setwbFADRupeeCost(wbFADRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 8 + (-1 * (4 - fireDaggerUnbindState) * 7.5));
                setFireDaggerUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireDaggerUnbindState >= 1 && fireDaggerUnbindState <= 4) {
                setmubFADSilverMaskCountState(mubFADSilverMaskCount + (fireDaggerUnbindState * 40));
                setwbFADSilverMaskCountState(wbFADSilverMaskCount + (fireDaggerUnbindState * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + (fireDaggerUnbindState * 40));
                setmubFADGoldMaskCountState(mubFADGoldMaskCount + (fireDaggerUnbindState * 30));
                setwbFADGoldMaskCountState(wbFADGoldMaskCount + (fireDaggerUnbindState * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + (fireDaggerUnbindState * 30));
                setmubFADSandCountState(mubFADSandCount + (fireDaggerUnbindState * 1));
                setwbFADSandCountState(wbFADSandCount + (fireDaggerUnbindState * 1));
                setallmubFASandCount(allmubFASandCount + (fireDaggerUnbindState * 1));
                setmubFADRupeeCost(mubFADRupeeCost + (fireDaggerUnbindState * 2));
                setwbFADRupeeCost(wbFADRupeeCost + (fireDaggerUnbindState * 2));
                setallmubFARupeeCost(allmubFARupeeCost + (fireDaggerUnbindState * 2));
                setFireDaggerUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireDaggerUnbindState >= 1 && fireDaggerUnbindState <= 4) {
                setmubFADSilverMaskCountState(mubFADSilverMaskCount + ((fireDaggerUnbindState - event.target.value) * 40))
                setwbFADSilverMaskCountState(wbFADSilverMaskCount + ((fireDaggerUnbindState - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireDaggerUnbindState - event.target.value) * 40));
                setmubFADGoldMaskCountState(mubFADGoldMaskCount + ((fireDaggerUnbindState - event.target.value) * 30));
                setwbFADGoldMaskCountState(wbFADGoldMaskCount + ((fireDaggerUnbindState - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireDaggerUnbindState - event.target.value) * 30));
                setmubFADSandCountState(mubFADSandCount + (fireDaggerUnbindState - event.target.value));
                setwbFADSandCountState(wbFADSandCount + (fireDaggerUnbindState - event.target.value));
                setallmubFASandCount(allmubFASandCount + (fireDaggerUnbindState - event.target.value));
                setmubFADRupeeCost(mubFADRupeeCost + ((fireDaggerUnbindState - event.target.value) * 2));
                setwbFADRupeeCost(wbFADRupeeCost + ((fireDaggerUnbindState - event.target.value) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireDaggerUnbindState - event.target.value) * 2))
                setFireDaggerUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireDaggerUnbindState >= 5 && fireDaggerUnbindState <= 8) {
                setmubFADSilverMaskCountState(mubFADSilverMaskCount + ((fireDaggerUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbFADSilverMaskCountState(wbFADSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireDaggerUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubFADGoldMaskCountState(mubFADGoldMaskCount + ((fireDaggerUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbFADGoldMaskCountState(wbFADGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireDaggerUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubFADInsanityCountState(mubFADInsanityCount + ((fireDaggerUnbindState - 4) * 7));
                setwbFADInsanityCountState(wbFADInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireDaggerUnbindState - 4) * 7));
                setmubFADSandCountState(mubFADSandCount + (4 - event.target.value));
                setwbFADSandCountState(wbFADSandCount + (4 - event.target.value));
                setallmubFASandCount(allmubFASandCount + (4 - event.target.value));
                setmubFADOriCountState(mubFADOriCount + (fireDaggerUnbindState - 4));
                setwbFADOriCountState(wbFADOriCount + (fireDaggerUnbindState - 4));
                setallmubFAOriCount(allmubFAOriCount + (fireDaggerUnbindState - 4));
                setmubFADRupeeCost(mubFADRupeeCost + ((fireDaggerUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbFADRupeeCost(wbFADRupeeCost + 7.5 + ((fireDaggerUnbindState - 4) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireDaggerUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setFireDaggerUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireDaggerUnbindState == 9) {
                setmubFADSilverMaskCountState(mubFADSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubFADGoldMaskCountState(mubFADGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubFADInsanityCountState(mubFADInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubFADGaleCountState(mubFADGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFADOriCountState(mubFADOriCount + 20 + (8 - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + 20 + (8 - event.target.value));
                setmubFADRupeeCost(mubFADRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setFireDaggerUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireDaggerUnbindState >= 5 && fireDaggerUnbindState <= 8) {
                setmubFADSilverMaskCountState(mubFADSilverMaskCount + ((fireDaggerUnbindState - event.target.value) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireDaggerUnbindState - event.target.value) * 16));
                setmubFADGoldMaskCountState(mubFADGoldMaskCount + ((fireDaggerUnbindState - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireDaggerUnbindState - event.target.value) * 10));
                setmubFADInsanityCountState(mubFADInsanityCount + ((fireDaggerUnbindState - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireDaggerUnbindState - event.target.value) * 7));
                setmubFADOriCountState(mubFADOriCount + (fireDaggerUnbindState - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + (fireDaggerUnbindState - event.target.value));
                setmubFADRupeeCost(mubFADRupeeCost + ((fireDaggerUnbindState - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireDaggerUnbindState - event.target.value) * 7.5));
                setFireDaggerUnbindState(event.target.value)
            }
        }
    }

    function handleFireDaggerRefineIncrement(event) {
        setFireWeaponChoiceState("dagger");
        if (fireDaggerRefineState < event.target.value) {
            if (fireDaggerRefineState == 0 && event.target.value == 1) {
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
                setFireDaggerRefineState(event.target.value);
            }
            else if (fireDaggerRefineState == 0 && event.target.value == 2) {
                setmubFADSilverMaskCountState(mubFADSilverMaskCount - 56);
                setwbFADSilverMaskCountState(wbFADSilverMaskCount - 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 56);
                setmubFADGoldMaskCountState(mubFADGoldMaskCount - 40);
                setwbFADGoldMaskCountState(wbFADGoldMaskCount - 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 40);
                setmubFADInsanityCountState(mubFADInsanityCount - 17);
                setwbFADInsanityCountState(wbFADInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 17);
                setmubFADGaleCountState(mubFADGaleCount - 10);
                setallmubFAGaleCount(allmubFAGaleCount - 10);
                setmubFADOriCountState(mubFADOriCount - 11);
                setwbFADOriCountState(wbFADOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 11);
                setmubFADRupeeCost(mubFADRupeeCost - 5);
                setwbFADRupeeCost(wbFADRupeeCost - 2.5);
                setallmubFARupeeCost(allmubFARupeeCost - 5);
                setFireDaggerRefineState(event.target.value);
            }
            else if (fireDaggerRefineState == 1 && event.target.value == 2) {
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
                setFireDaggerRefineState(event.target.value);
            }
        }
        else if (fireDaggerRefineState > event.target.value) {
            if (fireDaggerRefineState == 2 && event.target.value == 1) 
            {
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
                setFireDaggerRefineState(event.target.value);
            }
            else if (fireDaggerRefineState == 2 && event.target.value == 0) 
            {
                setmubFADSilverMaskCountState(mubFADSilverMaskCount + 56);
                setwbFADSilverMaskCountState(wbFADSilverMaskCount + 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 56);
                setmubFADGoldMaskCountState(mubFADGoldMaskCount + 40);
                setwbFADGoldMaskCountState(wbFADGoldMaskCount + 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 40);
                setmubFADInsanityCountState(mubFADInsanityCount + 17);
                setwbFADInsanityCountState(wbFADInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 17);
                setmubFADGaleCountState(mubFADGaleCount + 10);
                setallmubFAGaleCount(allmubFAGaleCount + 10);
                setmubFADOriCountState(mubFADOriCount + 11);
                setwbFADOriCountState(wbFADOriCount + 1); 
                setallmubFAOriCount(allmubFAOriCount + 11);
                setmubFADRupeeCost(mubFADRupeeCost + 5);
                setwbFADRupeeCost(wbFADRupeeCost + 2.5);
                setallmubFARupeeCost(allmubFARupeeCost + 5)
                setFireDaggerRefineState(event.target.value);
            }
            else if (fireDaggerRefineState == 1 && event.target.value == 0) 
            {
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
                setFireDaggerRefineState(event.target.value);
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
        setFireWeaponChoiceState("axe");
        if (fireAxeUnbindState < event.target.value) {
            if (event.target.value == 9 && fireAxeUnbindState == 0) {
                setmubFAASilverMaskCountState(mubFAASilverMaskCount - 304);
                setwbFAASilverMaskCountState(wbFAASilverMaskCount - 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 304);
                setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - 230);
                setwbFAAGoldMaskCountState(wbFAAGoldMaskCount - 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 230);
                setmubFAAInsanityCountState(mubFAAInsanityCount - 58);
                setwbFAAInsanityCountState(wbFAAInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFAAGaleCountState(mubFAAGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFAASandCountState(mubFAASandCount - 4);
                setwbFAASandCountState(wbFAASandCount - 4);
                setallmubFASandCount(allmubFASandCount - 4);
                setmubFAAOriCountState(mubFAAOriCount - 24);
                setwbFAAOriCountState(wbFAAOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFAARupeeCost(mubFAARupeeCost - 40);
                setwbFAARupeeCost(wbFAARupeeCost - 15.5);
                setallmubFARupeeCost(allmubFARupeeCost - 40);
                setFireAxeUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireAxeUnbindState >= 1 && fireAxeUnbindState <= 4) {
                setmubFAASilverMaskCountState(mubFAASilverMaskCount - 144 - ((4 - fireAxeUnbindState) * 40));
                setwbFAASilverMaskCountState(wbFAASilverMaskCount - 16 - ((4 - fireAxeUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 144 - ((4 - fireAxeUnbindState) * 40));
                setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - 110 - ((4 - fireAxeUnbindState) * 30));
                setwbFAAGoldMaskCountState(wbFAAGoldMaskCount - 10 - ((4 - fireAxeUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 110 - ((4 - fireAxeUnbindState) * 30));
                setmubFAAInsanityCountState(mubFAAInsanityCount - 58);
                setwbFAAInsanityCountState(wbFAAInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFAAGaleCountState(mubFAAGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFAASandCountState(mubFAASandCount - (4 - fireAxeUnbindState));
                setwbFAASandCountState(wbFAASandCount - (4 - fireAxeUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireAxeUnbindState));
                setmubFAAOriCountState(mubFAAOriCount - 24);
                setwbFAAOriCountState(wbFAAOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFAARupeeCost(mubFAARupeeCost - 32 - ((4 - fireAxeUnbindState) * 2));
                setwbFAARupeeCost(wbFAARupeeCost - 7.5 - ((4 - fireAxeUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - 32 - ((4 - fireAxeUnbindState) * 2));
                setFireAxeUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireAxeUnbindState >= 5 && fireAxeUnbindState <= 8) {
                setmubFAASilverMaskCountState(mubFAASilverMaskCount - 80 - ((8 - fireAxeUnbindState) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 80 - ((8 - fireAxeUnbindState) * 16));
                setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - 70 - ((8 - fireAxeUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70 - ((8 - fireAxeUnbindState) * 10));
                setmubFAAInsanityCountState(mubFAAInsanityCount - 30 - ((8 - fireAxeUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - 30 - ((8 - fireAxeUnbindState) * 7));
                setmubFAAGaleCountState(mubFAAGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFAAOriCountState(mubFAAOriCount - 20 - ((8 - fireAxeUnbindState) * 1));
                setallmubFAOriCount(allmubFAOriCount - 20 - ((8 - fireAxeUnbindState) * 1));
                setmubFAARupeeCost(mubFAARupeeCost - 2 - ((8 - fireAxeUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - 2 - ((8 - fireAxeUnbindState) * 7.5));
                setFireAxeUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireAxeUnbindState <= 7 && fireAxeUnbindState >= 5) {
                setmubFAASilverMaskCountState(mubFAASilverMaskCount - ((event.target.value - fireAxeUnbindState) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireAxeUnbindState) * 16));
                setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - ((event.target.value - fireAxeUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireAxeUnbindState) * 10));
                setmubFAAInsanityCountState(mubFAAInsanityCount - ((event.target.value - fireAxeUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - ((event.target.value - fireAxeUnbindState) * 7));
                setmubFAAOriCountState(mubFAAOriCount - (event.target.value - fireAxeUnbindState));
                setallmubFAOriCount(allmubFAOriCount - (event.target.value - fireAxeUnbindState));
                setmubFAARupeeCost(mubFAARupeeCost - ((event.target.value - fireAxeUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireAxeUnbindState) * 7.5));
                setFireAxeUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireAxeUnbindState <= 4 && fireAxeUnbindState >= 0) {
                setmubFAASilverMaskCountState(mubFAASilverMaskCount - ((4 - fireAxeUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbFAASilverMaskCountState(wbFAASilverMaskCount - 16 - ((4 - fireAxeUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((4 - fireAxeUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - ((4 - fireAxeUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbFAAGoldMaskCountState(wbFAAGoldMaskCount - 10 - ((4 - fireAxeUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((4 - fireAxeUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubFAAInsanityCountState(mubFAAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbFAAInsanityCountState(wbFAAInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubFAASandCountState(mubFAASandCount - (4 - fireAxeUnbindState));
                setwbFAASandCountState(wbFAASandCount - (4 - fireAxeUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireAxeUnbindState));
                setmubFAAOriCountState(mubFAAOriCount - (-1 * (4 - event.target.value)));
                setwbFAAOriCountState(wbFAAOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - (-1 * (4 - event.target.value)));
                setmubFAARupeeCost(mubFAARupeeCost - ((4 - fireAxeUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbFAARupeeCost(wbFAARupeeCost - 7.5 - ((4 - fireAxeUnbindState) * 2))
                setFireAxeUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && fireAxeUnbindState <= 3 && fireAxeUnbindState >= 0) {
                setmubFAASilverMaskCountState(mubFAASilverMaskCount - ((event.target.value - fireAxeUnbindState) * 40));
                setwbFAASilverMaskCountState(wbFAASilverMaskCount - ((event.target.value - fireAxeUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireAxeUnbindState) * 40));
                setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - ((event.target.value - fireAxeUnbindState) * 30));
                setwbFAAGoldMaskCountState(wbFAAGoldMaskCount - ((event.target.value - fireAxeUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireAxeUnbindState) * 30));
                setmubFAASandCountState(mubFAASandCount - (event.target.value - fireAxeUnbindState));
                setwbFAASandCountState(wbFAASandCount - (event.target.value - fireAxeUnbindState));
                setallmubFASandCount(allmubFASandCount - (event.target.value - fireAxeUnbindState));
                setmubFAARupeeCost(mubFAARupeeCost - ((event.target.value - fireAxeUnbindState) * 2));
                setwbFAARupeeCost(wbFAARupeeCost - ((event.target.value - fireAxeUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireAxeUnbindState) * 2));
                setFireAxeUnbindState(event.target.value)
            }
        }
        else if (fireAxeUnbindState > event.target.value) {
            if (event.target.value == 0 && fireAxeUnbindState == 9) {
                setmubFAASilverMaskCountState(mubFAASilverMaskCount + 304);
                setwbFAASilverMaskCountState(wbFAASilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 304);
                setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + 230);
                setwbFAAGoldMaskCountState(wbFAAGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 230);
                setmubFAAInsanityCountState(mubFAAInsanityCount + 58);
                setwbFAAInsanityCountState(wbFAAInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 58);
                setmubFAAGaleCountState(mubFAAGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFAASandCountState(mubFAASandCount + 4);
                setwbFAASandCountState(wbFAASandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFAAOriCountState(mubFAAOriCount + 24);
                setwbFAAOriCountState(wbFAAOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + 24);
                setmubFAARupeeCost(mubFAARupeeCost + 40);
                setwbFAARupeeCost(wbFAARupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 40);
                setFireAxeUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireAxeUnbindState >= 5 && fireAxeUnbindState <= 8) {
                setmubFAASilverMaskCountState(mubFAASilverMaskCount + 160 + ((-1 * (4 - fireAxeUnbindState)) * 16));
                setwbFAASilverMaskCountState(wbFAASilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 160 + ((-1 * (4 - fireAxeUnbindState)) * 16));
                setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + 120 + ((-1 * (4 - fireAxeUnbindState)) * 10));
                setwbFAAGoldMaskCountState(wbFAAGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 120 + ((-1 * (4 - fireAxeUnbindState)) * 10));
                setmubFAAInsanityCountState(mubFAAInsanityCount + ((-1 * (4 - fireAxeUnbindState)) * 7));
                setwbFAAInsanityCountState(wbFAAInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((-1 * (4 - fireAxeUnbindState)) * 7));
                setmubFAASandCountState(mubFAASandCount + 4);
                setwbFAASandCountState(wbFAASandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFAAOriCountState(mubFAAOriCount + (-1 * (4 - fireAxeUnbindState)));
                setwbFAAOriCountState(wbFAAOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + (-1 * (4 - fireAxeUnbindState)));
                setmubFAARupeeCost(mubFAARupeeCost + 8 + (-1 * (4 - fireAxeUnbindState) * 7.5));
                setwbFAARupeeCost(wbFAARupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 8 + (-1 * (4 - fireAxeUnbindState) * 7.5));
                setFireAxeUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireAxeUnbindState >= 1 && fireAxeUnbindState <= 4) {
                setmubFAASilverMaskCountState(mubFAASilverMaskCount + (fireAxeUnbindState * 40));
                setwbFAASilverMaskCountState(wbFAASilverMaskCount + (fireAxeUnbindState * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + (fireAxeUnbindState * 40));
                setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + (fireAxeUnbindState * 30));
                setwbFAAGoldMaskCountState(wbFAAGoldMaskCount + (fireAxeUnbindState * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + (fireAxeUnbindState * 30));
                setmubFAASandCountState(mubFAASandCount + (fireAxeUnbindState * 1));
                setwbFAASandCountState(wbFAASandCount + (fireAxeUnbindState * 1));
                setallmubFASandCount(allmubFASandCount + (fireAxeUnbindState * 1));
                setmubFAARupeeCost(mubFAARupeeCost + (fireAxeUnbindState * 2));
                setwbFAARupeeCost(wbFAARupeeCost + (fireAxeUnbindState * 2));
                setallmubFARupeeCost(allmubFARupeeCost + (fireAxeUnbindState * 2));
                setFireAxeUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireAxeUnbindState >= 1 && fireAxeUnbindState <= 4) {
                setmubFAASilverMaskCountState(mubFAASilverMaskCount + ((fireAxeUnbindState - event.target.value) * 40))
                setwbFAASilverMaskCountState(wbFAASilverMaskCount + ((fireAxeUnbindState - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireAxeUnbindState - event.target.value) * 40));
                setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + ((fireAxeUnbindState - event.target.value) * 30));
                setwbFAAGoldMaskCountState(wbFAAGoldMaskCount + ((fireAxeUnbindState - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireAxeUnbindState - event.target.value) * 30));
                setmubFAASandCountState(mubFAASandCount + (fireAxeUnbindState - event.target.value));
                setwbFAASandCountState(wbFAASandCount + (fireAxeUnbindState - event.target.value));
                setallmubFASandCount(allmubFASandCount + (fireAxeUnbindState - event.target.value));
                setmubFAARupeeCost(mubFAARupeeCost + ((fireAxeUnbindState - event.target.value) * 2));
                setwbFAARupeeCost(wbFAARupeeCost + ((fireAxeUnbindState - event.target.value) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireAxeUnbindState - event.target.value) * 2))
                setFireAxeUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireAxeUnbindState >= 5 && fireAxeUnbindState <= 8) {
                setmubFAASilverMaskCountState(mubFAASilverMaskCount + ((fireAxeUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbFAASilverMaskCountState(wbFAASilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireAxeUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + ((fireAxeUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbFAAGoldMaskCountState(wbFAAGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireAxeUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubFAAInsanityCountState(mubFAAInsanityCount + ((fireAxeUnbindState - 4) * 7));
                setwbFAAInsanityCountState(wbFAAInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireAxeUnbindState - 4) * 7));
                setmubFAASandCountState(mubFAASandCount + (4 - event.target.value));
                setwbFAASandCountState(wbFAASandCount + (4 - event.target.value));
                setallmubFASandCount(allmubFASandCount + (4 - event.target.value));
                setmubFAAOriCountState(mubFAAOriCount + (fireAxeUnbindState - 4));
                setwbFAAOriCountState(wbFAAOriCount + (fireAxeUnbindState - 4));
                setallmubFAOriCount(allmubFAOriCount + (fireAxeUnbindState - 4));
                setmubFAARupeeCost(mubFAARupeeCost + ((fireAxeUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbFAARupeeCost(wbFAARupeeCost + 7.5 + ((fireAxeUnbindState - 4) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireAxeUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setFireAxeUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireAxeUnbindState == 9) {
                setmubFAASilverMaskCountState(mubFAASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubFAAInsanityCountState(mubFAAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubFAAGaleCountState(mubFAAGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFAAOriCountState(mubFAAOriCount + 20 + (8 - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + 20 + (8 - event.target.value));
                setmubFAARupeeCost(mubFAARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setFireAxeUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireAxeUnbindState >= 5 && fireAxeUnbindState <= 8) {
                setmubFAASilverMaskCountState(mubFAASilverMaskCount + ((fireAxeUnbindState - event.target.value) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireAxeUnbindState - event.target.value) * 16));
                setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + ((fireAxeUnbindState - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireAxeUnbindState - event.target.value) * 10));
                setmubFAAInsanityCountState(mubFAAInsanityCount + ((fireAxeUnbindState - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireAxeUnbindState - event.target.value) * 7));
                setmubFAAOriCountState(mubFAAOriCount + (fireAxeUnbindState - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + (fireAxeUnbindState - event.target.value));
                setmubFAARupeeCost(mubFAARupeeCost + ((fireAxeUnbindState - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireAxeUnbindState - event.target.value) * 7.5));
                setFireAxeUnbindState(event.target.value)
            }
        }
    }

    function handleFireAxeRefineIncrement(event) {
        setFireWeaponChoiceState("axe");
        if (fireAxeRefineState < event.target.value) {
            if (fireAxeRefineState == 0 && event.target.value == 1) {
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
                setFireAxeRefineState(event.target.value);
            }
            else if (fireAxeRefineState == 0 && event.target.value == 2) {
                setmubFAASilverMaskCountState(mubFAASilverMaskCount - 56);
                setwbFAASilverMaskCountState(wbFAASilverMaskCount - 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 56);
                setmubFAAGoldMaskCountState(mubFAAGoldMaskCount - 40);
                setwbFAAGoldMaskCountState(wbFAAGoldMaskCount - 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 40);
                setmubFAAInsanityCountState(mubFAAInsanityCount - 17);
                setwbFAAInsanityCountState(wbFAAInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 17);
                setmubFAAGaleCountState(mubFAAGaleCount - 10);
                setallmubFAGaleCount(allmubFAGaleCount - 10);
                setmubFAAOriCountState(mubFAAOriCount - 11);
                setwbFAAOriCountState(wbFAAOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 11);
                setmubFAARupeeCost(mubFAARupeeCost - 5);
                setwbFAARupeeCost(wbFAARupeeCost - 2.5);
                setallmubFARupeeCost(allmubFARupeeCost - 5);
                setFireAxeRefineState(event.target.value);
            }
            else if (fireAxeRefineState == 1 && event.target.value == 2) {
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
                setFireAxeRefineState(event.target.value);
            }
        }
        else if (fireAxeRefineState > event.target.value) {
            if (fireAxeRefineState == 2 && event.target.value == 1) 
            {
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
                setFireAxeRefineState(event.target.value);
            }
            else if (fireAxeRefineState == 2 && event.target.value == 0) 
            {
                setmubFAASilverMaskCountState(mubFAASilverMaskCount + 56);
                setwbFAASilverMaskCountState(wbFAASilverMaskCount + 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 56);
                setmubFAAGoldMaskCountState(mubFAAGoldMaskCount + 40);
                setwbFAAGoldMaskCountState(wbFAAGoldMaskCount + 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 40);
                setmubFAAInsanityCountState(mubFAAInsanityCount + 17);
                setwbFAAInsanityCountState(wbFAAInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 17);
                setmubFAAGaleCountState(mubFAAGaleCount + 10);
                setallmubFAGaleCount(allmubFAGaleCount + 10);
                setmubFAAOriCountState(mubFAAOriCount + 11);
                setwbFAAOriCountState(wbFAAOriCount + 1); 
                setallmubFAOriCount(allmubFAOriCount + 11);
                setmubFAARupeeCost(mubFAARupeeCost + 5);
                setwbFAARupeeCost(wbFAARupeeCost + 2.5);
                setallmubFARupeeCost(allmubFARupeeCost + 5)
                setFireAxeRefineState(event.target.value);
            }
            else if (fireAxeRefineState == 1 && event.target.value == 0) 
            {
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
                setFireAxeRefineState(event.target.value);
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
        setFireWeaponChoiceState("lance");
        if (fireLanceUnbindState < event.target.value) {
            if (event.target.value == 9 && fireLanceUnbindState == 0) {
                setmubFALSilverMaskCountState(mubFALSilverMaskCount - 304);
                setwbFALSilverMaskCountState(wbFALSilverMaskCount - 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 304);
                setmubFALGoldMaskCountState(mubFALGoldMaskCount - 230);
                setwbFALGoldMaskCountState(wbFALGoldMaskCount - 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 230);
                setmubFALInsanityCountState(mubFALInsanityCount - 58);
                setwbFALInsanityCountState(wbFALInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFALGaleCountState(mubFALGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFALSandCountState(mubFALSandCount - 4);
                setwbFALSandCountState(wbFALSandCount - 4);
                setallmubFASandCount(allmubFASandCount - 4);
                setmubFALOriCountState(mubFALOriCount - 24);
                setwbFALOriCountState(wbFALOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFALRupeeCost(mubFALRupeeCost - 40);
                setwbFALRupeeCost(wbFALRupeeCost - 15.5);
                setallmubFARupeeCost(allmubFARupeeCost - 40);
                setFireLanceUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireLanceUnbindState >= 1 && fireLanceUnbindState <= 4) {
                setmubFALSilverMaskCountState(mubFALSilverMaskCount - 144 - ((4 - fireLanceUnbindState) * 40));
                setwbFALSilverMaskCountState(wbFALSilverMaskCount - 16 - ((4 - fireLanceUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 144 - ((4 - fireLanceUnbindState) * 40));
                setmubFALGoldMaskCountState(mubFALGoldMaskCount - 110 - ((4 - fireLanceUnbindState) * 30));
                setwbFALGoldMaskCountState(wbFALGoldMaskCount - 10 - ((4 - fireLanceUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 110 - ((4 - fireLanceUnbindState) * 30));
                setmubFALInsanityCountState(mubFALInsanityCount - 58);
                setwbFALInsanityCountState(wbFALInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFALGaleCountState(mubFALGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFALSandCountState(mubFALSandCount - (4 - fireLanceUnbindState));
                setwbFALSandCountState(wbFALSandCount - (4 - fireLanceUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireLanceUnbindState));
                setmubFALOriCountState(mubFALOriCount - 24);
                setwbFALOriCountState(wbFALOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFALRupeeCost(mubFALRupeeCost - 32 - ((4 - fireLanceUnbindState) * 2));
                setwbFALRupeeCost(wbFALRupeeCost - 7.5 - ((4 - fireLanceUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - 32 - ((4 - fireLanceUnbindState) * 2));
                setFireLanceUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireLanceUnbindState >= 5 && fireLanceUnbindState <= 8) {
                setmubFALSilverMaskCountState(mubFALSilverMaskCount - 80 - ((8 - fireLanceUnbindState) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 80 - ((8 - fireLanceUnbindState) * 16));
                setmubFALGoldMaskCountState(mubFALGoldMaskCount - 70 - ((8 - fireLanceUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70 - ((8 - fireLanceUnbindState) * 10));
                setmubFALInsanityCountState(mubFALInsanityCount - 30 - ((8 - fireLanceUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - 30 - ((8 - fireLanceUnbindState) * 7));
                setmubFALGaleCountState(mubFALGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFALOriCountState(mubFALOriCount - 20 - ((8 - fireLanceUnbindState) * 1));
                setallmubFAOriCount(allmubFAOriCount - 20 - ((8 - fireLanceUnbindState) * 1));
                setmubFALRupeeCost(mubFALRupeeCost - 2 - ((8 - fireLanceUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - 2 - ((8 - fireLanceUnbindState) * 7.5));
                setFireLanceUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireLanceUnbindState <= 7 && fireLanceUnbindState >= 5) {
                setmubFALSilverMaskCountState(mubFALSilverMaskCount - ((event.target.value - fireLanceUnbindState) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireLanceUnbindState) * 16));
                setmubFALGoldMaskCountState(mubFALGoldMaskCount - ((event.target.value - fireLanceUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireLanceUnbindState) * 10));
                setmubFALInsanityCountState(mubFALInsanityCount - ((event.target.value - fireLanceUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - ((event.target.value - fireLanceUnbindState) * 7));
                setmubFALOriCountState(mubFALOriCount - (event.target.value - fireLanceUnbindState));
                setallmubFAOriCount(allmubFAOriCount - (event.target.value - fireLanceUnbindState));
                setmubFALRupeeCost(mubFALRupeeCost - ((event.target.value - fireLanceUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireLanceUnbindState) * 7.5));
                setFireLanceUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireLanceUnbindState <= 4 && fireLanceUnbindState >= 0) {
                setmubFALSilverMaskCountState(mubFALSilverMaskCount - ((4 - fireLanceUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbFALSilverMaskCountState(wbFALSilverMaskCount - 16 - ((4 - fireLanceUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((4 - fireLanceUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubFALGoldMaskCountState(mubFALGoldMaskCount - ((4 - fireLanceUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbFALGoldMaskCountState(wbFALGoldMaskCount - 10 - ((4 - fireLanceUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((4 - fireLanceUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubFALInsanityCountState(mubFALInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbFALInsanityCountState(wbFALInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubFALSandCountState(mubFALSandCount - (4 - fireLanceUnbindState));
                setwbFALSandCountState(wbFALSandCount - (4 - fireLanceUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireLanceUnbindState));
                setmubFALOriCountState(mubFALOriCount - (-1 * (4 - event.target.value)));
                setwbFALOriCountState(wbFALOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - (-1 * (4 - event.target.value)));
                setmubFALRupeeCost(mubFALRupeeCost - ((4 - fireLanceUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbFALRupeeCost(wbFALRupeeCost - 7.5 - ((4 - fireLanceUnbindState) * 2))
                setFireLanceUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && fireLanceUnbindState <= 3 && fireLanceUnbindState >= 0) {
                setmubFALSilverMaskCountState(mubFALSilverMaskCount - ((event.target.value - fireLanceUnbindState) * 40));
                setwbFALSilverMaskCountState(wbFALSilverMaskCount - ((event.target.value - fireLanceUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireLanceUnbindState) * 40));
                setmubFALGoldMaskCountState(mubFALGoldMaskCount - ((event.target.value - fireLanceUnbindState) * 30));
                setwbFALGoldMaskCountState(wbFALGoldMaskCount - ((event.target.value - fireLanceUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireLanceUnbindState) * 30));
                setmubFALSandCountState(mubFALSandCount - (event.target.value - fireLanceUnbindState));
                setwbFALSandCountState(wbFALSandCount - (event.target.value - fireLanceUnbindState));
                setallmubFASandCount(allmubFASandCount - (event.target.value - fireLanceUnbindState));
                setmubFALRupeeCost(mubFALRupeeCost - ((event.target.value - fireLanceUnbindState) * 2));
                setwbFALRupeeCost(wbFALRupeeCost - ((event.target.value - fireLanceUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireLanceUnbindState) * 2));
                setFireLanceUnbindState(event.target.value)
            }
        }
        else if (fireLanceUnbindState > event.target.value) {
            if (event.target.value == 0 && fireLanceUnbindState == 9) {
                setmubFALSilverMaskCountState(mubFALSilverMaskCount + 304);
                setwbFALSilverMaskCountState(wbFALSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 304);
                setmubFALGoldMaskCountState(mubFALGoldMaskCount + 230);
                setwbFALGoldMaskCountState(wbFALGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 230);
                setmubFALInsanityCountState(mubFALInsanityCount + 58);
                setwbFALInsanityCountState(wbFALInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 58);
                setmubFALGaleCountState(mubFALGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFALSandCountState(mubFALSandCount + 4);
                setwbFALSandCountState(wbFALSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFALOriCountState(mubFALOriCount + 24);
                setwbFALOriCountState(wbFALOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + 24);
                setmubFALRupeeCost(mubFALRupeeCost + 40);
                setwbFALRupeeCost(wbFALRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 40);
                setFireLanceUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireLanceUnbindState >= 5 && fireLanceUnbindState <= 8) {
                setmubFALSilverMaskCountState(mubFALSilverMaskCount + 160 + ((-1 * (4 - fireLanceUnbindState)) * 16));
                setwbFALSilverMaskCountState(wbFALSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 160 + ((-1 * (4 - fireLanceUnbindState)) * 16));
                setmubFALGoldMaskCountState(mubFALGoldMaskCount + 120 + ((-1 * (4 - fireLanceUnbindState)) * 10));
                setwbFALGoldMaskCountState(wbFALGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 120 + ((-1 * (4 - fireLanceUnbindState)) * 10));
                setmubFALInsanityCountState(mubFALInsanityCount + ((-1 * (4 - fireLanceUnbindState)) * 7));
                setwbFALInsanityCountState(wbFALInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((-1 * (4 - fireLanceUnbindState)) * 7));
                setmubFALSandCountState(mubFALSandCount + 4);
                setwbFALSandCountState(wbFALSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFALOriCountState(mubFALOriCount + (-1 * (4 - fireLanceUnbindState)));
                setwbFALOriCountState(wbFALOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + (-1 * (4 - fireLanceUnbindState)));
                setmubFALRupeeCost(mubFALRupeeCost + 8 + (-1 * (4 - fireLanceUnbindState) * 7.5));
                setwbFALRupeeCost(wbFALRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 8 + (-1 * (4 - fireLanceUnbindState) * 7.5));
                setFireLanceUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireLanceUnbindState >= 1 && fireLanceUnbindState <= 4) {
                setmubFALSilverMaskCountState(mubFALSilverMaskCount + (fireLanceUnbindState * 40));
                setwbFALSilverMaskCountState(wbFALSilverMaskCount + (fireLanceUnbindState * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + (fireLanceUnbindState * 40));
                setmubFALGoldMaskCountState(mubFALGoldMaskCount + (fireLanceUnbindState * 30));
                setwbFALGoldMaskCountState(wbFALGoldMaskCount + (fireLanceUnbindState * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + (fireLanceUnbindState * 30));
                setmubFALSandCountState(mubFALSandCount + (fireLanceUnbindState * 1));
                setwbFALSandCountState(wbFALSandCount + (fireLanceUnbindState * 1));
                setallmubFASandCount(allmubFASandCount + (fireLanceUnbindState * 1));
                setmubFALRupeeCost(mubFALRupeeCost + (fireLanceUnbindState * 2));
                setwbFALRupeeCost(wbFALRupeeCost + (fireLanceUnbindState * 2));
                setallmubFARupeeCost(allmubFARupeeCost + (fireLanceUnbindState * 2));
                setFireLanceUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireLanceUnbindState >= 1 && fireLanceUnbindState <= 4) {
                setmubFALSilverMaskCountState(mubFALSilverMaskCount + ((fireLanceUnbindState - event.target.value) * 40))
                setwbFALSilverMaskCountState(wbFALSilverMaskCount + ((fireLanceUnbindState - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireLanceUnbindState - event.target.value) * 40));
                setmubFALGoldMaskCountState(mubFALGoldMaskCount + ((fireLanceUnbindState - event.target.value) * 30));
                setwbFALGoldMaskCountState(wbFALGoldMaskCount + ((fireLanceUnbindState - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireLanceUnbindState - event.target.value) * 30));
                setmubFALSandCountState(mubFALSandCount + (fireLanceUnbindState - event.target.value));
                setwbFALSandCountState(wbFALSandCount + (fireLanceUnbindState - event.target.value));
                setallmubFASandCount(allmubFASandCount + (fireLanceUnbindState - event.target.value));
                setmubFALRupeeCost(mubFALRupeeCost + ((fireLanceUnbindState - event.target.value) * 2));
                setwbFALRupeeCost(wbFALRupeeCost + ((fireLanceUnbindState - event.target.value) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireLanceUnbindState - event.target.value) * 2))
                setFireLanceUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireLanceUnbindState >= 5 && fireLanceUnbindState <= 8) {
                setmubFALSilverMaskCountState(mubFALSilverMaskCount + ((fireLanceUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbFALSilverMaskCountState(wbFALSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireLanceUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubFALGoldMaskCountState(mubFALGoldMaskCount + ((fireLanceUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbFALGoldMaskCountState(wbFALGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireLanceUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubFALInsanityCountState(mubFALInsanityCount + ((fireLanceUnbindState - 4) * 7));
                setwbFALInsanityCountState(wbFALInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireLanceUnbindState - 4) * 7));
                setmubFALSandCountState(mubFALSandCount + (4 - event.target.value));
                setwbFALSandCountState(wbFALSandCount + (4 - event.target.value));
                setallmubFASandCount(allmubFASandCount + (4 - event.target.value));
                setmubFALOriCountState(mubFALOriCount + (fireLanceUnbindState - 4));
                setwbFALOriCountState(wbFALOriCount + (fireLanceUnbindState - 4));
                setallmubFAOriCount(allmubFAOriCount + (fireLanceUnbindState - 4));
                setmubFALRupeeCost(mubFALRupeeCost + ((fireLanceUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbFALRupeeCost(wbFALRupeeCost + 7.5 + ((fireLanceUnbindState - 4) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireLanceUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setFireLanceUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireLanceUnbindState == 9) {
                setmubFALSilverMaskCountState(mubFALSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubFALGoldMaskCountState(mubFALGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubFALInsanityCountState(mubFALInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubFALGaleCountState(mubFALGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFALOriCountState(mubFALOriCount + 20 + (8 - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + 20 + (8 - event.target.value));
                setmubFALRupeeCost(mubFALRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setFireLanceUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireLanceUnbindState >= 5 && fireLanceUnbindState <= 8) {
                setmubFALSilverMaskCountState(mubFALSilverMaskCount + ((fireLanceUnbindState - event.target.value) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireLanceUnbindState - event.target.value) * 16));
                setmubFALGoldMaskCountState(mubFALGoldMaskCount + ((fireLanceUnbindState - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireLanceUnbindState - event.target.value) * 10));
                setmubFALInsanityCountState(mubFALInsanityCount + ((fireLanceUnbindState - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireLanceUnbindState - event.target.value) * 7));
                setmubFALOriCountState(mubFALOriCount + (fireLanceUnbindState - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + (fireLanceUnbindState - event.target.value));
                setmubFALRupeeCost(mubFALRupeeCost + ((fireLanceUnbindState - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireLanceUnbindState - event.target.value) * 7.5));
                setFireLanceUnbindState(event.target.value)
            }
        }
    }

    function handleFireLanceRefineIncrement(event) {
        setFireWeaponChoiceState("lance");
        if (fireLanceRefineState < event.target.value) {
            if (fireLanceRefineState == 0 && event.target.value == 1) {
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
                setFireLanceRefineState(event.target.value);
            }
            else if (fireLanceRefineState == 0 && event.target.value == 2) {
                setmubFALSilverMaskCountState(mubFALSilverMaskCount - 56);
                setwbFALSilverMaskCountState(wbFALSilverMaskCount - 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 56);
                setmubFALGoldMaskCountState(mubFALGoldMaskCount - 40);
                setwbFALGoldMaskCountState(wbFALGoldMaskCount - 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 40);
                setmubFALInsanityCountState(mubFALInsanityCount - 17);
                setwbFALInsanityCountState(wbFALInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 17);
                setmubFALGaleCountState(mubFALGaleCount - 10);
                setallmubFAGaleCount(allmubFAGaleCount - 10);
                setmubFALOriCountState(mubFALOriCount - 11);
                setwbFALOriCountState(wbFALOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 11);
                setmubFALRupeeCost(mubFALRupeeCost - 5);
                setwbFALRupeeCost(wbFALRupeeCost - 2.5);
                setallmubFARupeeCost(allmubFARupeeCost - 5);
                setFireLanceRefineState(event.target.value);
            }
            else if (fireLanceRefineState == 1 && event.target.value == 2) {
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
                setFireLanceRefineState(event.target.value);
            }
        }
        else if (fireLanceRefineState > event.target.value) {
            if (fireLanceRefineState == 2 && event.target.value == 1) 
            {
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
                setFireLanceRefineState(event.target.value);
            }
            else if (fireLanceRefineState == 2 && event.target.value == 0) 
            {
                setmubFALSilverMaskCountState(mubFALSilverMaskCount + 56);
                setwbFALSilverMaskCountState(wbFALSilverMaskCount + 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 56);
                setmubFALGoldMaskCountState(mubFALGoldMaskCount + 40);
                setwbFALGoldMaskCountState(wbFALGoldMaskCount + 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 40);
                setmubFALInsanityCountState(mubFALInsanityCount + 17);
                setwbFALInsanityCountState(wbFALInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 17);
                setmubFALGaleCountState(mubFALGaleCount + 10);
                setallmubFAGaleCount(allmubFAGaleCount + 10);
                setmubFALOriCountState(mubFALOriCount + 11);
                setwbFALOriCountState(wbFALOriCount + 1); 
                setallmubFAOriCount(allmubFAOriCount + 11);
                setmubFALRupeeCost(mubFALRupeeCost + 5);
                setwbFALRupeeCost(wbFALRupeeCost + 2.5);
                setallmubFARupeeCost(allmubFARupeeCost + 5)
                setFireLanceRefineState(event.target.value);
            }
            else if (fireLanceRefineState == 1 && event.target.value == 0) 
            {
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
                setFireLanceRefineState(event.target.value);
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
        setFireWeaponChoiceState("wand");
        if (fireWandUnbindState < event.target.value) {
            if (event.target.value == 9 && fireWandUnbindState == 0) {
                setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - 304);
                setwbFAWSilverMaskCountState(wbFAWSilverMaskCount - 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 304);
                setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - 230);
                setwbFAWGoldMaskCountState(wbFAWGoldMaskCount - 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 230);
                setmubFAWInsanityCountState(mubFAWInsanityCount - 58);
                setwbFAWInsanityCountState(wbFAWInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFAWGaleCountState(mubFAWGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFAWSandCountState(mubFAWSandCount - 4);
                setwbFAWSandCountState(wbFAWSandCount - 4);
                setallmubFASandCount(allmubFASandCount - 4);
                setmubFAWOriCountState(mubFAWOriCount - 24);
                setwbFAWOriCountState(wbFAWOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFAWRupeeCost(mubFAWRupeeCost - 40);
                setwbFAWRupeeCost(wbFAWRupeeCost - 15.5);
                setallmubFARupeeCost(allmubFARupeeCost - 40);
                setFireWandUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireWandUnbindState >= 1 && fireWandUnbindState <= 4) {
                setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - 144 - ((4 - fireWandUnbindState) * 40));
                setwbFAWSilverMaskCountState(wbFAWSilverMaskCount - 16 - ((4 - fireWandUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 144 - ((4 - fireWandUnbindState) * 40));
                setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - 110 - ((4 - fireWandUnbindState) * 30));
                setwbFAWGoldMaskCountState(wbFAWGoldMaskCount - 10 - ((4 - fireWandUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 110 - ((4 - fireWandUnbindState) * 30));
                setmubFAWInsanityCountState(mubFAWInsanityCount - 58);
                setwbFAWInsanityCountState(wbFAWInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFAWGaleCountState(mubFAWGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFAWSandCountState(mubFAWSandCount - (4 - fireWandUnbindState));
                setwbFAWSandCountState(wbFAWSandCount - (4 - fireWandUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireWandUnbindState));
                setmubFAWOriCountState(mubFAWOriCount - 24);
                setwbFAWOriCountState(wbFAWOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFAWRupeeCost(mubFAWRupeeCost - 32 - ((4 - fireWandUnbindState) * 2));
                setwbFAWRupeeCost(wbFAWRupeeCost - 7.5 - ((4 - fireWandUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - 32 - ((4 - fireWandUnbindState) * 2));
                setFireWandUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireWandUnbindState >= 5 && fireWandUnbindState <= 8) {
                setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - 80 - ((8 - fireWandUnbindState) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 80 - ((8 - fireWandUnbindState) * 16));
                setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - 70 - ((8 - fireWandUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70 - ((8 - fireWandUnbindState) * 10));
                setmubFAWInsanityCountState(mubFAWInsanityCount - 30 - ((8 - fireWandUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - 30 - ((8 - fireWandUnbindState) * 7));
                setmubFAWGaleCountState(mubFAWGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFAWOriCountState(mubFAWOriCount - 20 - ((8 - fireWandUnbindState) * 1));
                setallmubFAOriCount(allmubFAOriCount - 20 - ((8 - fireWandUnbindState) * 1));
                setmubFAWRupeeCost(mubFAWRupeeCost - 2 - ((8 - fireWandUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - 2 - ((8 - fireWandUnbindState) * 7.5));
                setFireWandUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireWandUnbindState <= 7 && fireWandUnbindState >= 5) {
                setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - ((event.target.value - fireWandUnbindState) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireWandUnbindState) * 16));
                setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - ((event.target.value - fireWandUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireWandUnbindState) * 10));
                setmubFAWInsanityCountState(mubFAWInsanityCount - ((event.target.value - fireWandUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - ((event.target.value - fireWandUnbindState) * 7));
                setmubFAWOriCountState(mubFAWOriCount - (event.target.value - fireWandUnbindState));
                setallmubFAOriCount(allmubFAOriCount - (event.target.value - fireWandUnbindState));
                setmubFAWRupeeCost(mubFAWRupeeCost - ((event.target.value - fireWandUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireWandUnbindState) * 7.5));
                setFireWandUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireWandUnbindState <= 4 && fireWandUnbindState >= 0) {
                setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - ((4 - fireWandUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbFAWSilverMaskCountState(wbFAWSilverMaskCount - 16 - ((4 - fireWandUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((4 - fireWandUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - ((4 - fireWandUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbFAWGoldMaskCountState(wbFAWGoldMaskCount - 10 - ((4 - fireWandUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((4 - fireWandUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubFAWInsanityCountState(mubFAWInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbFAWInsanityCountState(wbFAWInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubFAWSandCountState(mubFAWSandCount - (4 - fireWandUnbindState));
                setwbFAWSandCountState(wbFAWSandCount - (4 - fireWandUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireWandUnbindState));
                setmubFAWOriCountState(mubFAWOriCount - (-1 * (4 - event.target.value)));
                setwbFAWOriCountState(wbFAWOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - (-1 * (4 - event.target.value)));
                setmubFAWRupeeCost(mubFAWRupeeCost - ((4 - fireWandUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbFAWRupeeCost(wbFAWRupeeCost - 7.5 - ((4 - fireWandUnbindState) * 2))
                setFireWandUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && fireWandUnbindState <= 3 && fireWandUnbindState >= 0) {
                setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - ((event.target.value - fireWandUnbindState) * 40));
                setwbFAWSilverMaskCountState(wbFAWSilverMaskCount - ((event.target.value - fireWandUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireWandUnbindState) * 40));
                setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - ((event.target.value - fireWandUnbindState) * 30));
                setwbFAWGoldMaskCountState(wbFAWGoldMaskCount - ((event.target.value - fireWandUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireWandUnbindState) * 30));
                setmubFAWSandCountState(mubFAWSandCount - (event.target.value - fireWandUnbindState));
                setwbFAWSandCountState(wbFAWSandCount - (event.target.value - fireWandUnbindState));
                setallmubFASandCount(allmubFASandCount - (event.target.value - fireWandUnbindState));
                setmubFAWRupeeCost(mubFAWRupeeCost - ((event.target.value - fireWandUnbindState) * 2));
                setwbFAWRupeeCost(wbFAWRupeeCost - ((event.target.value - fireWandUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireWandUnbindState) * 2));
                setFireWandUnbindState(event.target.value)
            }
        }
        else if (fireWandUnbindState > event.target.value) {
            if (event.target.value == 0 && fireWandUnbindState == 9) {
                setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + 304);
                setwbFAWSilverMaskCountState(wbFAWSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 304);
                setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + 230);
                setwbFAWGoldMaskCountState(wbFAWGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 230);
                setmubFAWInsanityCountState(mubFAWInsanityCount + 58);
                setwbFAWInsanityCountState(wbFAWInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 58);
                setmubFAWGaleCountState(mubFAWGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFAWSandCountState(mubFAWSandCount + 4);
                setwbFAWSandCountState(wbFAWSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFAWOriCountState(mubFAWOriCount + 24);
                setwbFAWOriCountState(wbFAWOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + 24);
                setmubFAWRupeeCost(mubFAWRupeeCost + 40);
                setwbFAWRupeeCost(wbFAWRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 40);
                setFireWandUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireWandUnbindState >= 5 && fireWandUnbindState <= 8) {
                setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + 160 + ((-1 * (4 - fireWandUnbindState)) * 16));
                setwbFAWSilverMaskCountState(wbFAWSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 160 + ((-1 * (4 - fireWandUnbindState)) * 16));
                setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + 120 + ((-1 * (4 - fireWandUnbindState)) * 10));
                setwbFAWGoldMaskCountState(wbFAWGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 120 + ((-1 * (4 - fireWandUnbindState)) * 10));
                setmubFAWInsanityCountState(mubFAWInsanityCount + ((-1 * (4 - fireWandUnbindState)) * 7));
                setwbFAWInsanityCountState(wbFAWInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((-1 * (4 - fireWandUnbindState)) * 7));
                setmubFAWSandCountState(mubFAWSandCount + 4);
                setwbFAWSandCountState(wbFAWSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFAWOriCountState(mubFAWOriCount + (-1 * (4 - fireWandUnbindState)));
                setwbFAWOriCountState(wbFAWOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + (-1 * (4 - fireWandUnbindState)));
                setmubFAWRupeeCost(mubFAWRupeeCost + 8 + (-1 * (4 - fireWandUnbindState) * 7.5));
                setwbFAWRupeeCost(wbFAWRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 8 + (-1 * (4 - fireWandUnbindState) * 7.5));
                setFireWandUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireWandUnbindState >= 1 && fireWandUnbindState <= 4) {
                setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + (fireWandUnbindState * 40));
                setwbFAWSilverMaskCountState(wbFAWSilverMaskCount + (fireWandUnbindState * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + (fireWandUnbindState * 40));
                setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + (fireWandUnbindState * 30));
                setwbFAWGoldMaskCountState(wbFAWGoldMaskCount + (fireWandUnbindState * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + (fireWandUnbindState * 30));
                setmubFAWSandCountState(mubFAWSandCount + (fireWandUnbindState * 1));
                setwbFAWSandCountState(wbFAWSandCount + (fireWandUnbindState * 1));
                setallmubFASandCount(allmubFASandCount + (fireWandUnbindState * 1));
                setmubFAWRupeeCost(mubFAWRupeeCost + (fireWandUnbindState * 2));
                setwbFAWRupeeCost(wbFAWRupeeCost + (fireWandUnbindState * 2));
                setallmubFARupeeCost(allmubFARupeeCost + (fireWandUnbindState * 2));
                setFireWandUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireWandUnbindState >= 1 && fireWandUnbindState <= 4) {
                setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + ((fireWandUnbindState - event.target.value) * 40))
                setwbFAWSilverMaskCountState(wbFAWSilverMaskCount + ((fireWandUnbindState - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireWandUnbindState - event.target.value) * 40));
                setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + ((fireWandUnbindState - event.target.value) * 30));
                setwbFAWGoldMaskCountState(wbFAWGoldMaskCount + ((fireWandUnbindState - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireWandUnbindState - event.target.value) * 30));
                setmubFAWSandCountState(mubFAWSandCount + (fireWandUnbindState - event.target.value));
                setwbFAWSandCountState(wbFAWSandCount + (fireWandUnbindState - event.target.value));
                setallmubFASandCount(allmubFASandCount + (fireWandUnbindState - event.target.value));
                setmubFAWRupeeCost(mubFAWRupeeCost + ((fireWandUnbindState - event.target.value) * 2));
                setwbFAWRupeeCost(wbFAWRupeeCost + ((fireWandUnbindState - event.target.value) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireWandUnbindState - event.target.value) * 2))
                setFireWandUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireWandUnbindState >= 5 && fireWandUnbindState <= 8) {
                setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + ((fireWandUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbFAWSilverMaskCountState(wbFAWSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireWandUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + ((fireWandUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbFAWGoldMaskCountState(wbFAWGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireWandUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubFAWInsanityCountState(mubFAWInsanityCount + ((fireWandUnbindState - 4) * 7));
                setwbFAWInsanityCountState(wbFAWInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireWandUnbindState - 4) * 7));
                setmubFAWSandCountState(mubFAWSandCount + (4 - event.target.value));
                setwbFAWSandCountState(wbFAWSandCount + (4 - event.target.value));
                setallmubFASandCount(allmubFASandCount + (4 - event.target.value));
                setmubFAWOriCountState(mubFAWOriCount + (fireWandUnbindState - 4));
                setwbFAWOriCountState(wbFAWOriCount + (fireWandUnbindState - 4));
                setallmubFAOriCount(allmubFAOriCount + (fireWandUnbindState - 4));
                setmubFAWRupeeCost(mubFAWRupeeCost + ((fireWandUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbFAWRupeeCost(wbFAWRupeeCost + 7.5 + ((fireWandUnbindState - 4) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireWandUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setFireWandUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireWandUnbindState == 9) {
                setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubFAWInsanityCountState(mubFAWInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubFAWGaleCountState(mubFAWGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFAWOriCountState(mubFAWOriCount + 20 + (8 - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + 20 + (8 - event.target.value));
                setmubFAWRupeeCost(mubFAWRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setFireWandUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireWandUnbindState >= 5 && fireWandUnbindState <= 8) {
                setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + ((fireWandUnbindState - event.target.value) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireWandUnbindState - event.target.value) * 16));
                setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + ((fireWandUnbindState - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireWandUnbindState - event.target.value) * 10));
                setmubFAWInsanityCountState(mubFAWInsanityCount + ((fireWandUnbindState - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireWandUnbindState - event.target.value) * 7));
                setmubFAWOriCountState(mubFAWOriCount + (fireWandUnbindState - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + (fireWandUnbindState - event.target.value));
                setmubFAWRupeeCost(mubFAWRupeeCost + ((fireWandUnbindState - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireWandUnbindState - event.target.value) * 7.5));
                setFireWandUnbindState(event.target.value)
            }
        }
    }

    function handleFireWandRefineIncrement(event) {
        setFireWeaponChoiceState("wand");
        if (fireWandRefineState < event.target.value) {
            if (fireWandRefineState == 0 && event.target.value == 1) {
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
                setFireWandRefineState(event.target.value);
            }
            else if (fireWandRefineState == 0 && event.target.value == 2) {
                setmubFAWSilverMaskCountState(mubFAWSilverMaskCount - 56);
                setwbFAWSilverMaskCountState(wbFAWSilverMaskCount - 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 56);
                setmubFAWGoldMaskCountState(mubFAWGoldMaskCount - 40);
                setwbFAWGoldMaskCountState(wbFAWGoldMaskCount - 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 40);
                setmubFAWInsanityCountState(mubFAWInsanityCount - 17);
                setwbFAWInsanityCountState(wbFAWInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 17);
                setmubFAWGaleCountState(mubFAWGaleCount - 10);
                setallmubFAGaleCount(allmubFAGaleCount - 10);
                setmubFAWOriCountState(mubFAWOriCount - 11);
                setwbFAWOriCountState(wbFAWOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 11);
                setmubFAWRupeeCost(mubFAWRupeeCost - 5);
                setwbFAWRupeeCost(wbFAWRupeeCost - 2.5);
                setallmubFARupeeCost(allmubFARupeeCost - 5);
                setFireWandRefineState(event.target.value);
            }
            else if (fireWandRefineState == 1 && event.target.value == 2) {
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
                setFireWandRefineState(event.target.value);
            }
        }
        else if (fireWandRefineState > event.target.value) {
            if (fireWandRefineState == 2 && event.target.value == 1) 
            {
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
                setFireWandRefineState(event.target.value);
            }
            else if (fireWandRefineState == 2 && event.target.value == 0) 
            {
                setmubFAWSilverMaskCountState(mubFAWSilverMaskCount + 56);
                setwbFAWSilverMaskCountState(wbFAWSilverMaskCount + 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 56);
                setmubFAWGoldMaskCountState(mubFAWGoldMaskCount + 40);
                setwbFAWGoldMaskCountState(wbFAWGoldMaskCount + 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 40);
                setmubFAWInsanityCountState(mubFAWInsanityCount + 17);
                setwbFAWInsanityCountState(wbFAWInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 17);
                setmubFAWGaleCountState(mubFAWGaleCount + 10);
                setallmubFAGaleCount(allmubFAGaleCount + 10);
                setmubFAWOriCountState(mubFAWOriCount + 11);
                setwbFAWOriCountState(wbFAWOriCount + 1); 
                setallmubFAOriCount(allmubFAOriCount + 11);
                setmubFAWRupeeCost(mubFAWRupeeCost + 5);
                setwbFAWRupeeCost(wbFAWRupeeCost + 2.5);
                setallmubFARupeeCost(allmubFARupeeCost + 5)
                setFireWandRefineState(event.target.value);
            }
            else if (fireWandRefineState == 1 && event.target.value == 0) 
            {
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
                setFireWandRefineState(event.target.value);
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
        setFireWeaponChoiceState("bow");
        if (fireBowUnbindState < event.target.value) {
            if (event.target.value == 9 && fireBowUnbindState == 0) {
                setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - 304);
                setwbFABoSilverMaskCountState(wbFABoSilverMaskCount - 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 304);
                setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - 230);
                setwbFABoGoldMaskCountState(wbFABoGoldMaskCount - 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 230);
                setmubFABoInsanityCountState(mubFABoInsanityCount - 58);
                setwbFABoInsanityCountState(wbFABoInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFABoGaleCountState(mubFABoGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFABoSandCountState(mubFABoSandCount - 4);
                setwbFABoSandCountState(wbFABoSandCount - 4);
                setallmubFASandCount(allmubFASandCount - 4);
                setmubFABoOriCountState(mubFABoOriCount - 24);
                setwbFABoOriCountState(wbFABoOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFABoRupeeCost(mubFABoRupeeCost - 40);
                setwbFABoRupeeCost(wbFABoRupeeCost - 15.5);
                setallmubFARupeeCost(allmubFARupeeCost - 40);
                setFireBowUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireBowUnbindState >= 1 && fireBowUnbindState <= 4) {
                setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - 144 - ((4 - fireBowUnbindState) * 40));
                setwbFABoSilverMaskCountState(wbFABoSilverMaskCount - 16 - ((4 - fireBowUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 144 - ((4 - fireBowUnbindState) * 40));
                setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - 110 - ((4 - fireBowUnbindState) * 30));
                setwbFABoGoldMaskCountState(wbFABoGoldMaskCount - 10 - ((4 - fireBowUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 110 - ((4 - fireBowUnbindState) * 30));
                setmubFABoInsanityCountState(mubFABoInsanityCount - 58);
                setwbFABoInsanityCountState(wbFABoInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFABoGaleCountState(mubFABoGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFABoSandCountState(mubFABoSandCount - (4 - fireBowUnbindState));
                setwbFABoSandCountState(wbFABoSandCount - (4 - fireBowUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireBowUnbindState));
                setmubFABoOriCountState(mubFABoOriCount - 24);
                setwbFABoOriCountState(wbFABoOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFABoRupeeCost(mubFABoRupeeCost - 32 - ((4 - fireBowUnbindState) * 2));
                setwbFABoRupeeCost(wbFABoRupeeCost - 7.5 - ((4 - fireBowUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - 32 - ((4 - fireBowUnbindState) * 2));
                setFireBowUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireBowUnbindState >= 5 && fireBowUnbindState <= 8) {
                setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - 80 - ((8 - fireBowUnbindState) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 80 - ((8 - fireBowUnbindState) * 16));
                setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - 70 - ((8 - fireBowUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70 - ((8 - fireBowUnbindState) * 10));
                setmubFABoInsanityCountState(mubFABoInsanityCount - 30 - ((8 - fireBowUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - 30 - ((8 - fireBowUnbindState) * 7));
                setmubFABoGaleCountState(mubFABoGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFABoOriCountState(mubFABoOriCount - 20 - ((8 - fireBowUnbindState) * 1));
                setallmubFAOriCount(allmubFAOriCount - 20 - ((8 - fireBowUnbindState) * 1));
                setmubFABoRupeeCost(mubFABoRupeeCost - 2 - ((8 - fireBowUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - 2 - ((8 - fireBowUnbindState) * 7.5));
                setFireBowUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireBowUnbindState <= 7 && fireBowUnbindState >= 5) {
                setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - ((event.target.value - fireBowUnbindState) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireBowUnbindState) * 16));
                setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - ((event.target.value - fireBowUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireBowUnbindState) * 10));
                setmubFABoInsanityCountState(mubFABoInsanityCount - ((event.target.value - fireBowUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - ((event.target.value - fireBowUnbindState) * 7));
                setmubFABoOriCountState(mubFABoOriCount - (event.target.value - fireBowUnbindState));
                setallmubFAOriCount(allmubFAOriCount - (event.target.value - fireBowUnbindState));
                setmubFABoRupeeCost(mubFABoRupeeCost - ((event.target.value - fireBowUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireBowUnbindState) * 7.5));
                setFireBowUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireBowUnbindState <= 4 && fireBowUnbindState >= 0) {
                setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - ((4 - fireBowUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbFABoSilverMaskCountState(wbFABoSilverMaskCount - 16 - ((4 - fireBowUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((4 - fireBowUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - ((4 - fireBowUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbFABoGoldMaskCountState(wbFABoGoldMaskCount - 10 - ((4 - fireBowUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((4 - fireBowUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubFABoInsanityCountState(mubFABoInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbFABoInsanityCountState(wbFABoInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubFABoSandCountState(mubFABoSandCount - (4 - fireBowUnbindState));
                setwbFABoSandCountState(wbFABoSandCount - (4 - fireBowUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireBowUnbindState));
                setmubFABoOriCountState(mubFABoOriCount - (-1 * (4 - event.target.value)));
                setwbFABoOriCountState(wbFABoOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - (-1 * (4 - event.target.value)));
                setmubFABoRupeeCost(mubFABoRupeeCost - ((4 - fireBowUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbFABoRupeeCost(wbFABoRupeeCost - 7.5 - ((4 - fireBowUnbindState) * 2))
                setFireBowUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && fireBowUnbindState <= 3 && fireBowUnbindState >= 0) {
                setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - ((event.target.value - fireBowUnbindState) * 40));
                setwbFABoSilverMaskCountState(wbFABoSilverMaskCount - ((event.target.value - fireBowUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireBowUnbindState) * 40));
                setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - ((event.target.value - fireBowUnbindState) * 30));
                setwbFABoGoldMaskCountState(wbFABoGoldMaskCount - ((event.target.value - fireBowUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireBowUnbindState) * 30));
                setmubFABoSandCountState(mubFABoSandCount - (event.target.value - fireBowUnbindState));
                setwbFABoSandCountState(wbFABoSandCount - (event.target.value - fireBowUnbindState));
                setallmubFASandCount(allmubFASandCount - (event.target.value - fireBowUnbindState));
                setmubFABoRupeeCost(mubFABoRupeeCost - ((event.target.value - fireBowUnbindState) * 2));
                setwbFABoRupeeCost(wbFABoRupeeCost - ((event.target.value - fireBowUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireBowUnbindState) * 2));
                setFireBowUnbindState(event.target.value)
            }
        }
        else if (fireBowUnbindState > event.target.value) {
            if (event.target.value == 0 && fireBowUnbindState == 9) {
                setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + 304);
                setwbFABoSilverMaskCountState(wbFABoSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 304);
                setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + 230);
                setwbFABoGoldMaskCountState(wbFABoGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 230);
                setmubFABoInsanityCountState(mubFABoInsanityCount + 58);
                setwbFABoInsanityCountState(wbFABoInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 58);
                setmubFABoGaleCountState(mubFABoGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFABoSandCountState(mubFABoSandCount + 4);
                setwbFABoSandCountState(wbFABoSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFABoOriCountState(mubFABoOriCount + 24);
                setwbFABoOriCountState(wbFABoOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + 24);
                setmubFABoRupeeCost(mubFABoRupeeCost + 40);
                setwbFABoRupeeCost(wbFABoRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 40);
                setFireBowUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireBowUnbindState >= 5 && fireBowUnbindState <= 8) {
                setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + 160 + ((-1 * (4 - fireBowUnbindState)) * 16));
                setwbFABoSilverMaskCountState(wbFABoSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 160 + ((-1 * (4 - fireBowUnbindState)) * 16));
                setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + 120 + ((-1 * (4 - fireBowUnbindState)) * 10));
                setwbFABoGoldMaskCountState(wbFABoGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 120 + ((-1 * (4 - fireBowUnbindState)) * 10));
                setmubFABoInsanityCountState(mubFABoInsanityCount + ((-1 * (4 - fireBowUnbindState)) * 7));
                setwbFABoInsanityCountState(wbFABoInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((-1 * (4 - fireBowUnbindState)) * 7));
                setmubFABoSandCountState(mubFABoSandCount + 4);
                setwbFABoSandCountState(wbFABoSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFABoOriCountState(mubFABoOriCount + (-1 * (4 - fireBowUnbindState)));
                setwbFABoOriCountState(wbFABoOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + (-1 * (4 - fireBowUnbindState)));
                setmubFABoRupeeCost(mubFABoRupeeCost + 8 + (-1 * (4 - fireBowUnbindState) * 7.5));
                setwbFABoRupeeCost(wbFABoRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 8 + (-1 * (4 - fireBowUnbindState) * 7.5));
                setFireBowUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireBowUnbindState >= 1 && fireBowUnbindState <= 4) {
                setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + (fireBowUnbindState * 40));
                setwbFABoSilverMaskCountState(wbFABoSilverMaskCount + (fireBowUnbindState * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + (fireBowUnbindState * 40));
                setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + (fireBowUnbindState * 30));
                setwbFABoGoldMaskCountState(wbFABoGoldMaskCount + (fireBowUnbindState * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + (fireBowUnbindState * 30));
                setmubFABoSandCountState(mubFABoSandCount + (fireBowUnbindState * 1));
                setwbFABoSandCountState(wbFABoSandCount + (fireBowUnbindState * 1));
                setallmubFASandCount(allmubFASandCount + (fireBowUnbindState * 1));
                setmubFABoRupeeCost(mubFABoRupeeCost + (fireBowUnbindState * 2));
                setwbFABoRupeeCost(wbFABoRupeeCost + (fireBowUnbindState * 2));
                setallmubFARupeeCost(allmubFARupeeCost + (fireBowUnbindState * 2));
                setFireBowUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireBowUnbindState >= 1 && fireBowUnbindState <= 4) {
                setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + ((fireBowUnbindState - event.target.value) * 40))
                setwbFABoSilverMaskCountState(wbFABoSilverMaskCount + ((fireBowUnbindState - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireBowUnbindState - event.target.value) * 40));
                setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + ((fireBowUnbindState - event.target.value) * 30));
                setwbFABoGoldMaskCountState(wbFABoGoldMaskCount + ((fireBowUnbindState - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireBowUnbindState - event.target.value) * 30));
                setmubFABoSandCountState(mubFABoSandCount + (fireBowUnbindState - event.target.value));
                setwbFABoSandCountState(wbFABoSandCount + (fireBowUnbindState - event.target.value));
                setallmubFASandCount(allmubFASandCount + (fireBowUnbindState - event.target.value));
                setmubFABoRupeeCost(mubFABoRupeeCost + ((fireBowUnbindState - event.target.value) * 2));
                setwbFABoRupeeCost(wbFABoRupeeCost + ((fireBowUnbindState - event.target.value) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireBowUnbindState - event.target.value) * 2))
                setFireBowUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireBowUnbindState >= 5 && fireBowUnbindState <= 8) {
                setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + ((fireBowUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbFABoSilverMaskCountState(wbFABoSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireBowUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + ((fireBowUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbFABoGoldMaskCountState(wbFABoGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireBowUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubFABoInsanityCountState(mubFABoInsanityCount + ((fireBowUnbindState - 4) * 7));
                setwbFABoInsanityCountState(wbFABoInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireBowUnbindState - 4) * 7));
                setmubFABoSandCountState(mubFABoSandCount + (4 - event.target.value));
                setwbFABoSandCountState(wbFABoSandCount + (4 - event.target.value));
                setallmubFASandCount(allmubFASandCount + (4 - event.target.value));
                setmubFABoOriCountState(mubFABoOriCount + (fireBowUnbindState - 4));
                setwbFABoOriCountState(wbFABoOriCount + (fireBowUnbindState - 4));
                setallmubFAOriCount(allmubFAOriCount + (fireBowUnbindState - 4));
                setmubFABoRupeeCost(mubFABoRupeeCost + ((fireBowUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbFABoRupeeCost(wbFABoRupeeCost + 7.5 + ((fireBowUnbindState - 4) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireBowUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setFireBowUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireBowUnbindState == 9) {
                setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubFABoInsanityCountState(mubFABoInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubFABoGaleCountState(mubFABoGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFABoOriCountState(mubFABoOriCount + 20 + (8 - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + 20 + (8 - event.target.value));
                setmubFABoRupeeCost(mubFABoRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setFireBowUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireBowUnbindState >= 5 && fireBowUnbindState <= 8) {
                setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + ((fireBowUnbindState - event.target.value) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireBowUnbindState - event.target.value) * 16));
                setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + ((fireBowUnbindState - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireBowUnbindState - event.target.value) * 10));
                setmubFABoInsanityCountState(mubFABoInsanityCount + ((fireBowUnbindState - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireBowUnbindState - event.target.value) * 7));
                setmubFABoOriCountState(mubFABoOriCount + (fireBowUnbindState - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + (fireBowUnbindState - event.target.value));
                setmubFABoRupeeCost(mubFABoRupeeCost + ((fireBowUnbindState - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireBowUnbindState - event.target.value) * 7.5));
                setFireBowUnbindState(event.target.value)
            }
        }
    }

    function handleFireBowRefineIncrement(event) {
        setFireWeaponChoiceState("bow");
        if (fireBowRefineState < event.target.value) {
            if (fireBowRefineState == 0 && event.target.value == 1) {
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
                setFireBowRefineState(event.target.value);
            }
            else if (fireBowRefineState == 0 && event.target.value == 2) {
                setmubFABoSilverMaskCountState(mubFABoSilverMaskCount - 56);
                setwbFABoSilverMaskCountState(wbFABoSilverMaskCount - 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 56);
                setmubFABoGoldMaskCountState(mubFABoGoldMaskCount - 40);
                setwbFABoGoldMaskCountState(wbFABoGoldMaskCount - 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 40);
                setmubFABoInsanityCountState(mubFABoInsanityCount - 17);
                setwbFABoInsanityCountState(wbFABoInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 17);
                setmubFABoGaleCountState(mubFABoGaleCount - 10);
                setallmubFAGaleCount(allmubFAGaleCount - 10);
                setmubFABoOriCountState(mubFABoOriCount - 11);
                setwbFABoOriCountState(wbFABoOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 11);
                setmubFABoRupeeCost(mubFABoRupeeCost - 5);
                setwbFABoRupeeCost(wbFABoRupeeCost - 2.5);
                setallmubFARupeeCost(allmubFARupeeCost - 5);
                setFireBowRefineState(event.target.value);
            }
            else if (fireBowRefineState == 1 && event.target.value == 2) {
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
                setFireBowRefineState(event.target.value);
            }
        }
        else if (fireBowRefineState > event.target.value) {
            if (fireBowRefineState == 2 && event.target.value == 1) 
            {
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
                setFireBowRefineState(event.target.value);
            }
            else if (fireBowRefineState == 2 && event.target.value == 0) 
            {
                setmubFABoSilverMaskCountState(mubFABoSilverMaskCount + 56);
                setwbFABoSilverMaskCountState(wbFABoSilverMaskCount + 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 56);
                setmubFABoGoldMaskCountState(mubFABoGoldMaskCount + 40);
                setwbFABoGoldMaskCountState(wbFABoGoldMaskCount + 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 40);
                setmubFABoInsanityCountState(mubFABoInsanityCount + 17);
                setwbFABoInsanityCountState(wbFABoInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 17);
                setmubFABoGaleCountState(mubFABoGaleCount + 10);
                setallmubFAGaleCount(allmubFAGaleCount + 10);
                setmubFABoOriCountState(mubFABoOriCount + 11);
                setwbFABoOriCountState(wbFABoOriCount + 1); 
                setallmubFAOriCount(allmubFAOriCount + 11);
                setmubFABoRupeeCost(mubFABoRupeeCost + 5);
                setwbFABoRupeeCost(wbFABoRupeeCost + 2.5);
                setallmubFARupeeCost(allmubFARupeeCost + 5)
                setFireBowRefineState(event.target.value);
            }
            else if (fireBowRefineState == 1 && event.target.value == 0) 
            {
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
                setFireBowRefineState(event.target.value);
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
        setFireWeaponChoiceState("staff");
        if (fireStaffUnbindState < event.target.value) {
            if (event.target.value == 9 && fireStaffUnbindState == 0) {
                setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - 304);
                setwbFAStSilverMaskCountState(wbFAStSilverMaskCount - 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 304);
                setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - 230);
                setwbFAStGoldMaskCountState(wbFAStGoldMaskCount - 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 230);
                setmubFAStInsanityCountState(mubFAStInsanityCount - 58);
                setwbFAStInsanityCountState(wbFAStInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFAStGaleCountState(mubFAStGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFAStSandCountState(mubFAStSandCount - 4);
                setwbFAStSandCountState(wbFAStSandCount - 4);
                setallmubFASandCount(allmubFASandCount - 4);
                setmubFAStOriCountState(mubFAStOriCount - 24);
                setwbFAStOriCountState(wbFAStOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFAStRupeeCost(mubFAStRupeeCost - 40);
                setwbFAStRupeeCost(wbFAStRupeeCost - 15.5);
                setallmubFARupeeCost(allmubFARupeeCost - 40);
                setFireStaffUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireStaffUnbindState >= 1 && fireStaffUnbindState <= 4) {
                setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - 144 - ((4 - fireStaffUnbindState) * 40));
                setwbFAStSilverMaskCountState(wbFAStSilverMaskCount - 16 - ((4 - fireStaffUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 144 - ((4 - fireStaffUnbindState) * 40));
                setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - 110 - ((4 - fireStaffUnbindState) * 30));
                setwbFAStGoldMaskCountState(wbFAStGoldMaskCount - 10 - ((4 - fireStaffUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 110 - ((4 - fireStaffUnbindState) * 30));
                setmubFAStInsanityCountState(mubFAStInsanityCount - 58);
                setwbFAStInsanityCountState(wbFAStInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFAStGaleCountState(mubFAStGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFAStSandCountState(mubFAStSandCount - (4 - fireStaffUnbindState));
                setwbFAStSandCountState(wbFAStSandCount - (4 - fireStaffUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireStaffUnbindState));
                setmubFAStOriCountState(mubFAStOriCount - 24);
                setwbFAStOriCountState(wbFAStOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFAStRupeeCost(mubFAStRupeeCost - 32 - ((4 - fireStaffUnbindState) * 2));
                setwbFAStRupeeCost(wbFAStRupeeCost - 7.5 - ((4 - fireStaffUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - 32 - ((4 - fireStaffUnbindState) * 2));
                setFireStaffUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireStaffUnbindState >= 5 && fireStaffUnbindState <= 8) {
                setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - 80 - ((8 - fireStaffUnbindState) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 80 - ((8 - fireStaffUnbindState) * 16));
                setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - 70 - ((8 - fireStaffUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70 - ((8 - fireStaffUnbindState) * 10));
                setmubFAStInsanityCountState(mubFAStInsanityCount - 30 - ((8 - fireStaffUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - 30 - ((8 - fireStaffUnbindState) * 7));
                setmubFAStGaleCountState(mubFAStGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFAStOriCountState(mubFAStOriCount - 20 - ((8 - fireStaffUnbindState) * 1));
                setallmubFAOriCount(allmubFAOriCount - 20 - ((8 - fireStaffUnbindState) * 1));
                setmubFAStRupeeCost(mubFAStRupeeCost - 2 - ((8 - fireStaffUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - 2 - ((8 - fireStaffUnbindState) * 7.5));
                setFireStaffUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireStaffUnbindState <= 7 && fireStaffUnbindState >= 5) {
                setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - ((event.target.value - fireStaffUnbindState) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireStaffUnbindState) * 16));
                setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - ((event.target.value - fireStaffUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireStaffUnbindState) * 10));
                setmubFAStInsanityCountState(mubFAStInsanityCount - ((event.target.value - fireStaffUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - ((event.target.value - fireStaffUnbindState) * 7));
                setmubFAStOriCountState(mubFAStOriCount - (event.target.value - fireStaffUnbindState));
                setallmubFAOriCount(allmubFAOriCount - (event.target.value - fireStaffUnbindState));
                setmubFAStRupeeCost(mubFAStRupeeCost - ((event.target.value - fireStaffUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireStaffUnbindState) * 7.5));
                setFireStaffUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireStaffUnbindState <= 4 && fireStaffUnbindState >= 0) {
                setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - ((4 - fireStaffUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbFAStSilverMaskCountState(wbFAStSilverMaskCount - 16 - ((4 - fireStaffUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((4 - fireStaffUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - ((4 - fireStaffUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbFAStGoldMaskCountState(wbFAStGoldMaskCount - 10 - ((4 - fireStaffUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((4 - fireStaffUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubFAStInsanityCountState(mubFAStInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbFAStInsanityCountState(wbFAStInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubFAStSandCountState(mubFAStSandCount - (4 - fireStaffUnbindState));
                setwbFAStSandCountState(wbFAStSandCount - (4 - fireStaffUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireStaffUnbindState));
                setmubFAStOriCountState(mubFAStOriCount - (-1 * (4 - event.target.value)));
                setwbFAStOriCountState(wbFAStOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - (-1 * (4 - event.target.value)));
                setmubFAStRupeeCost(mubFAStRupeeCost - ((4 - fireStaffUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbFAStRupeeCost(wbFAStRupeeCost - 7.5 - ((4 - fireStaffUnbindState) * 2))
                setFireStaffUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && fireStaffUnbindState <= 3 && fireStaffUnbindState >= 0) {
                setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - ((event.target.value - fireStaffUnbindState) * 40));
                setwbFAStSilverMaskCountState(wbFAStSilverMaskCount - ((event.target.value - fireStaffUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireStaffUnbindState) * 40));
                setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - ((event.target.value - fireStaffUnbindState) * 30));
                setwbFAStGoldMaskCountState(wbFAStGoldMaskCount - ((event.target.value - fireStaffUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireStaffUnbindState) * 30));
                setmubFAStSandCountState(mubFAStSandCount - (event.target.value - fireStaffUnbindState));
                setwbFAStSandCountState(wbFAStSandCount - (event.target.value - fireStaffUnbindState));
                setallmubFASandCount(allmubFASandCount - (event.target.value - fireStaffUnbindState));
                setmubFAStRupeeCost(mubFAStRupeeCost - ((event.target.value - fireStaffUnbindState) * 2));
                setwbFAStRupeeCost(wbFAStRupeeCost - ((event.target.value - fireStaffUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireStaffUnbindState) * 2));
                setFireStaffUnbindState(event.target.value)
            }
        }
        else if (fireStaffUnbindState > event.target.value) {
            if (event.target.value == 0 && fireStaffUnbindState == 9) {
                setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + 304);
                setwbFAStSilverMaskCountState(wbFAStSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 304);
                setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + 230);
                setwbFAStGoldMaskCountState(wbFAStGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 230);
                setmubFAStInsanityCountState(mubFAStInsanityCount + 58);
                setwbFAStInsanityCountState(wbFAStInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 58);
                setmubFAStGaleCountState(mubFAStGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFAStSandCountState(mubFAStSandCount + 4);
                setwbFAStSandCountState(wbFAStSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFAStOriCountState(mubFAStOriCount + 24);
                setwbFAStOriCountState(wbFAStOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + 24);
                setmubFAStRupeeCost(mubFAStRupeeCost + 40);
                setwbFAStRupeeCost(wbFAStRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 40);
                setFireStaffUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireStaffUnbindState >= 5 && fireStaffUnbindState <= 8) {
                setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + 160 + ((-1 * (4 - fireStaffUnbindState)) * 16));
                setwbFAStSilverMaskCountState(wbFAStSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 160 + ((-1 * (4 - fireStaffUnbindState)) * 16));
                setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + 120 + ((-1 * (4 - fireStaffUnbindState)) * 10));
                setwbFAStGoldMaskCountState(wbFAStGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 120 + ((-1 * (4 - fireStaffUnbindState)) * 10));
                setmubFAStInsanityCountState(mubFAStInsanityCount + ((-1 * (4 - fireStaffUnbindState)) * 7));
                setwbFAStInsanityCountState(wbFAStInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((-1 * (4 - fireStaffUnbindState)) * 7));
                setmubFAStSandCountState(mubFAStSandCount + 4);
                setwbFAStSandCountState(wbFAStSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFAStOriCountState(mubFAStOriCount + (-1 * (4 - fireStaffUnbindState)));
                setwbFAStOriCountState(wbFAStOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + (-1 * (4 - fireStaffUnbindState)));
                setmubFAStRupeeCost(mubFAStRupeeCost + 8 + (-1 * (4 - fireStaffUnbindState) * 7.5));
                setwbFAStRupeeCost(wbFAStRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 8 + (-1 * (4 - fireStaffUnbindState) * 7.5));
                setFireStaffUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireStaffUnbindState >= 1 && fireStaffUnbindState <= 4) {
                setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + (fireStaffUnbindState * 40));
                setwbFAStSilverMaskCountState(wbFAStSilverMaskCount + (fireStaffUnbindState * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + (fireStaffUnbindState * 40));
                setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + (fireStaffUnbindState * 30));
                setwbFAStGoldMaskCountState(wbFAStGoldMaskCount + (fireStaffUnbindState * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + (fireStaffUnbindState * 30));
                setmubFAStSandCountState(mubFAStSandCount + (fireStaffUnbindState * 1));
                setwbFAStSandCountState(wbFAStSandCount + (fireStaffUnbindState * 1));
                setallmubFASandCount(allmubFASandCount + (fireStaffUnbindState * 1));
                setmubFAStRupeeCost(mubFAStRupeeCost + (fireStaffUnbindState * 2));
                setwbFAStRupeeCost(wbFAStRupeeCost + (fireStaffUnbindState * 2));
                setallmubFARupeeCost(allmubFARupeeCost + (fireStaffUnbindState * 2));
                setFireStaffUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireStaffUnbindState >= 1 && fireStaffUnbindState <= 4) {
                setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + ((fireStaffUnbindState - event.target.value) * 40))
                setwbFAStSilverMaskCountState(wbFAStSilverMaskCount + ((fireStaffUnbindState - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireStaffUnbindState - event.target.value) * 40));
                setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + ((fireStaffUnbindState - event.target.value) * 30));
                setwbFAStGoldMaskCountState(wbFAStGoldMaskCount + ((fireStaffUnbindState - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireStaffUnbindState - event.target.value) * 30));
                setmubFAStSandCountState(mubFAStSandCount + (fireStaffUnbindState - event.target.value));
                setwbFAStSandCountState(wbFAStSandCount + (fireStaffUnbindState - event.target.value));
                setallmubFASandCount(allmubFASandCount + (fireStaffUnbindState - event.target.value));
                setmubFAStRupeeCost(mubFAStRupeeCost + ((fireStaffUnbindState - event.target.value) * 2));
                setwbFAStRupeeCost(wbFAStRupeeCost + ((fireStaffUnbindState - event.target.value) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireStaffUnbindState - event.target.value) * 2))
                setFireStaffUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireStaffUnbindState >= 5 && fireStaffUnbindState <= 8) {
                setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + ((fireStaffUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbFAStSilverMaskCountState(wbFAStSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireStaffUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + ((fireStaffUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbFAStGoldMaskCountState(wbFAStGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireStaffUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubFAStInsanityCountState(mubFAStInsanityCount + ((fireStaffUnbindState - 4) * 7));
                setwbFAStInsanityCountState(wbFAStInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireStaffUnbindState - 4) * 7));
                setmubFAStSandCountState(mubFAStSandCount + (4 - event.target.value));
                setwbFAStSandCountState(wbFAStSandCount + (4 - event.target.value));
                setallmubFASandCount(allmubFASandCount + (4 - event.target.value));
                setmubFAStOriCountState(mubFAStOriCount + (fireStaffUnbindState - 4));
                setwbFAStOriCountState(wbFAStOriCount + (fireStaffUnbindState - 4));
                setallmubFAOriCount(allmubFAOriCount + (fireStaffUnbindState - 4));
                setmubFAStRupeeCost(mubFAStRupeeCost + ((fireStaffUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbFAStRupeeCost(wbFAStRupeeCost + 7.5 + ((fireStaffUnbindState - 4) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireStaffUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setFireStaffUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireStaffUnbindState == 9) {
                setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubFAStInsanityCountState(mubFAStInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubFAStGaleCountState(mubFAStGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFAStOriCountState(mubFAStOriCount + 20 + (8 - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + 20 + (8 - event.target.value));
                setmubFAStRupeeCost(mubFAStRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setFireStaffUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireStaffUnbindState >= 5 && fireStaffUnbindState <= 8) {
                setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + ((fireStaffUnbindState - event.target.value) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireStaffUnbindState - event.target.value) * 16));
                setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + ((fireStaffUnbindState - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireStaffUnbindState - event.target.value) * 10));
                setmubFAStInsanityCountState(mubFAStInsanityCount + ((fireStaffUnbindState - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireStaffUnbindState - event.target.value) * 7));
                setmubFAStOriCountState(mubFAStOriCount + (fireStaffUnbindState - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + (fireStaffUnbindState - event.target.value));
                setmubFAStRupeeCost(mubFAStRupeeCost + ((fireStaffUnbindState - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireStaffUnbindState - event.target.value) * 7.5));
                setFireStaffUnbindState(event.target.value)
            }
        }
    }

    function handleFireStaffRefineIncrement(event) {
        setFireWeaponChoiceState("staff");
        if (fireStaffRefineState < event.target.value) {
            if (fireStaffRefineState == 0 && event.target.value == 1) {
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
                setFireStaffRefineState(event.target.value);
            }
            else if (fireStaffRefineState == 0 && event.target.value == 2) {
                setmubFAStSilverMaskCountState(mubFAStSilverMaskCount - 56);
                setwbFAStSilverMaskCountState(wbFAStSilverMaskCount - 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 56);
                setmubFAStGoldMaskCountState(mubFAStGoldMaskCount - 40);
                setwbFAStGoldMaskCountState(wbFAStGoldMaskCount - 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 40);
                setmubFAStInsanityCountState(mubFAStInsanityCount - 17);
                setwbFAStInsanityCountState(wbFAStInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 17);
                setmubFAStGaleCountState(mubFAStGaleCount - 10);
                setallmubFAGaleCount(allmubFAGaleCount - 10);
                setmubFAStOriCountState(mubFAStOriCount - 11);
                setwbFAStOriCountState(wbFAStOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 11);
                setmubFAStRupeeCost(mubFAStRupeeCost - 5);
                setwbFAStRupeeCost(wbFAStRupeeCost - 2.5);
                setallmubFARupeeCost(allmubFARupeeCost - 5);
                setFireStaffRefineState(event.target.value);
            }
            else if (fireStaffRefineState == 1 && event.target.value == 2) {
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
                setFireStaffRefineState(event.target.value);
            }
        }
        else if (fireStaffRefineState > event.target.value) {
            if (fireStaffRefineState == 2 && event.target.value == 1) 
            {
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
                setFireStaffRefineState(event.target.value);
            }
            else if (fireStaffRefineState == 2 && event.target.value == 0) 
            {
                setmubFAStSilverMaskCountState(mubFAStSilverMaskCount + 56);
                setwbFAStSilverMaskCountState(wbFAStSilverMaskCount + 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 56);
                setmubFAStGoldMaskCountState(mubFAStGoldMaskCount + 40);
                setwbFAStGoldMaskCountState(wbFAStGoldMaskCount + 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 40);
                setmubFAStInsanityCountState(mubFAStInsanityCount + 17);
                setwbFAStInsanityCountState(wbFAStInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 17);
                setmubFAStGaleCountState(mubFAStGaleCount + 10);
                setallmubFAGaleCount(allmubFAGaleCount + 10);
                setmubFAStOriCountState(mubFAStOriCount + 11);
                setwbFAStOriCountState(wbFAStOriCount + 1); 
                setallmubFAOriCount(allmubFAOriCount + 11);
                setmubFAStRupeeCost(mubFAStRupeeCost + 5);
                setwbFAStRupeeCost(wbFAStRupeeCost + 2.5);
                setallmubFARupeeCost(allmubFARupeeCost + 5)
                setFireStaffRefineState(event.target.value);
            }
            else if (fireStaffRefineState == 1 && event.target.value == 0) 
            {
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
                setFireStaffRefineState(event.target.value);
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
        setFireWeaponChoiceState("manacaster");
        if (fireManacasterUnbindState < event.target.value) {
            if (event.target.value == 9 && fireManacasterUnbindState == 0) {
                setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - 304);
                setwbFAMSilverMaskCountState(wbFAMSilverMaskCount - 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 304);
                setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - 230);
                setwbFAMGoldMaskCountState(wbFAMGoldMaskCount - 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 230);
                setmubFAMInsanityCountState(mubFAMInsanityCount - 58);
                setwbFAMInsanityCountState(wbFAMInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFAMGaleCountState(mubFAMGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFAMSandCountState(mubFAMSandCount - 4);
                setwbFAMSandCountState(wbFAMSandCount - 4);
                setallmubFASandCount(allmubFASandCount - 4);
                setmubFAMOriCountState(mubFAMOriCount - 24);
                setwbFAMOriCountState(wbFAMOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFAMRupeeCost(mubFAMRupeeCost - 40);
                setwbFAMRupeeCost(wbFAMRupeeCost - 15.5);
                setallmubFARupeeCost(allmubFARupeeCost - 40);
                setFireManacasterUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireManacasterUnbindState >= 1 && fireManacasterUnbindState <= 4) {
                setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - 144 - ((4 - fireManacasterUnbindState) * 40));
                setwbFAMSilverMaskCountState(wbFAMSilverMaskCount - 16 - ((4 - fireManacasterUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 144 - ((4 - fireManacasterUnbindState) * 40));
                setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - 110 - ((4 - fireManacasterUnbindState) * 30));
                setwbFAMGoldMaskCountState(wbFAMGoldMaskCount - 10 - ((4 - fireManacasterUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 110 - ((4 - fireManacasterUnbindState) * 30));
                setmubFAMInsanityCountState(mubFAMInsanityCount - 58);
                setwbFAMInsanityCountState(wbFAMInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 58);
                setmubFAMGaleCountState(mubFAMGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFAMSandCountState(mubFAMSandCount - (4 - fireManacasterUnbindState));
                setwbFAMSandCountState(wbFAMSandCount - (4 - fireManacasterUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireManacasterUnbindState));
                setmubFAMOriCountState(mubFAMOriCount - 24);
                setwbFAMOriCountState(wbFAMOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 24);
                setmubFAMRupeeCost(mubFAMRupeeCost - 32 - ((4 - fireManacasterUnbindState) * 2));
                setwbFAMRupeeCost(wbFAMRupeeCost - 7.5 - ((4 - fireManacasterUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - 32 - ((4 - fireManacasterUnbindState) * 2));
                setFireManacasterUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && fireManacasterUnbindState >= 5 && fireManacasterUnbindState <= 8) {
                setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - 80 - ((8 - fireManacasterUnbindState) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 80 - ((8 - fireManacasterUnbindState) * 16));
                setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - 70 - ((8 - fireManacasterUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 70 - ((8 - fireManacasterUnbindState) * 10));
                setmubFAMInsanityCountState(mubFAMInsanityCount - 30 - ((8 - fireManacasterUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - 30 - ((8 - fireManacasterUnbindState) * 7));
                setmubFAMGaleCountState(mubFAMGaleCount - 20);
                setallmubFAGaleCount(allmubFAGaleCount - 20);
                setmubFAMOriCountState(mubFAMOriCount - 20 - ((8 - fireManacasterUnbindState) * 1));
                setallmubFAOriCount(allmubFAOriCount - 20 - ((8 - fireManacasterUnbindState) * 1));
                setmubFAMRupeeCost(mubFAMRupeeCost - 2 - ((8 - fireManacasterUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - 2 - ((8 - fireManacasterUnbindState) * 7.5));
                setFireManacasterUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireManacasterUnbindState <= 7 && fireManacasterUnbindState >= 5) {
                setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - ((event.target.value - fireManacasterUnbindState) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireManacasterUnbindState) * 16));
                setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - ((event.target.value - fireManacasterUnbindState) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireManacasterUnbindState) * 10));
                setmubFAMInsanityCountState(mubFAMInsanityCount - ((event.target.value - fireManacasterUnbindState) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount - ((event.target.value - fireManacasterUnbindState) * 7));
                setmubFAMOriCountState(mubFAMOriCount - (event.target.value - fireManacasterUnbindState));
                setallmubFAOriCount(allmubFAOriCount - (event.target.value - fireManacasterUnbindState));
                setmubFAMRupeeCost(mubFAMRupeeCost - ((event.target.value - fireManacasterUnbindState) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireManacasterUnbindState) * 7.5));
                setFireManacasterUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && fireManacasterUnbindState <= 4 && fireManacasterUnbindState >= 0) {
                setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - ((4 - fireManacasterUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbFAMSilverMaskCountState(wbFAMSilverMaskCount - 16 - ((4 - fireManacasterUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((4 - fireManacasterUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - ((4 - fireManacasterUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbFAMGoldMaskCountState(wbFAMGoldMaskCount - 10 - ((4 - fireManacasterUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((4 - fireManacasterUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubFAMInsanityCountState(mubFAMInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbFAMInsanityCountState(wbFAMInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubFAMSandCountState(mubFAMSandCount - (4 - fireManacasterUnbindState));
                setwbFAMSandCountState(wbFAMSandCount - (4 - fireManacasterUnbindState));
                setallmubFASandCount(allmubFASandCount - (4 - fireManacasterUnbindState));
                setmubFAMOriCountState(mubFAMOriCount - (-1 * (4 - event.target.value)));
                setwbFAMOriCountState(wbFAMOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - (-1 * (4 - event.target.value)));
                setmubFAMRupeeCost(mubFAMRupeeCost - ((4 - fireManacasterUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbFAMRupeeCost(wbFAMRupeeCost - 7.5 - ((4 - fireManacasterUnbindState) * 2))
                setFireManacasterUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && fireManacasterUnbindState <= 3 && fireManacasterUnbindState >= 0) {
                setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - ((event.target.value - fireManacasterUnbindState) * 40));
                setwbFAMSilverMaskCountState(wbFAMSilverMaskCount - ((event.target.value - fireManacasterUnbindState) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount - ((event.target.value - fireManacasterUnbindState) * 40));
                setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - ((event.target.value - fireManacasterUnbindState) * 30));
                setwbFAMGoldMaskCountState(wbFAMGoldMaskCount - ((event.target.value - fireManacasterUnbindState) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - ((event.target.value - fireManacasterUnbindState) * 30));
                setmubFAMSandCountState(mubFAMSandCount - (event.target.value - fireManacasterUnbindState));
                setwbFAMSandCountState(wbFAMSandCount - (event.target.value - fireManacasterUnbindState));
                setallmubFASandCount(allmubFASandCount - (event.target.value - fireManacasterUnbindState));
                setmubFAMRupeeCost(mubFAMRupeeCost - ((event.target.value - fireManacasterUnbindState) * 2));
                setwbFAMRupeeCost(wbFAMRupeeCost - ((event.target.value - fireManacasterUnbindState) * 2));
                setallmubFARupeeCost(allmubFARupeeCost - ((event.target.value - fireManacasterUnbindState) * 2));
                setFireManacasterUnbindState(event.target.value)
            }
        }
        else if (fireManacasterUnbindState > event.target.value) {
            if (event.target.value == 0 && fireManacasterUnbindState == 9) {
                setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + 304);
                setwbFAMSilverMaskCountState(wbFAMSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 304);
                setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + 230);
                setwbFAMGoldMaskCountState(wbFAMGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 230);
                setmubFAMInsanityCountState(mubFAMInsanityCount + 58);
                setwbFAMInsanityCountState(wbFAMInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 58);
                setmubFAMGaleCountState(mubFAMGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFAMSandCountState(mubFAMSandCount + 4);
                setwbFAMSandCountState(wbFAMSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFAMOriCountState(mubFAMOriCount + 24);
                setwbFAMOriCountState(wbFAMOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + 24);
                setmubFAMRupeeCost(mubFAMRupeeCost + 40);
                setwbFAMRupeeCost(wbFAMRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 40);
                setFireManacasterUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireManacasterUnbindState >= 5 && fireManacasterUnbindState <= 8) {
                setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + 160 + ((-1 * (4 - fireManacasterUnbindState)) * 16));
                setwbFAMSilverMaskCountState(wbFAMSilverMaskCount + 176);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 160 + ((-1 * (4 - fireManacasterUnbindState)) * 16));
                setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + 120 + ((-1 * (4 - fireManacasterUnbindState)) * 10));
                setwbFAMGoldMaskCountState(wbFAMGoldMaskCount + 130);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 120 + ((-1 * (4 - fireManacasterUnbindState)) * 10));
                setmubFAMInsanityCountState(mubFAMInsanityCount + ((-1 * (4 - fireManacasterUnbindState)) * 7));
                setwbFAMInsanityCountState(wbFAMInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((-1 * (4 - fireManacasterUnbindState)) * 7));
                setmubFAMSandCountState(mubFAMSandCount + 4);
                setwbFAMSandCountState(wbFAMSandCount + 4);
                setallmubFASandCount(allmubFASandCount + 4);
                setmubFAMOriCountState(mubFAMOriCount + (-1 * (4 - fireManacasterUnbindState)));
                setwbFAMOriCountState(wbFAMOriCount + 1);
                setallmubFAOriCount(allmubFAOriCount + (-1 * (4 - fireManacasterUnbindState)));
                setmubFAMRupeeCost(mubFAMRupeeCost + 8 + (-1 * (4 - fireManacasterUnbindState) * 7.5));
                setwbFAMRupeeCost(wbFAMRupeeCost + 15.5);
                setallmubFARupeeCost(allmubFARupeeCost + 8 + (-1 * (4 - fireManacasterUnbindState) * 7.5));
                setFireManacasterUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && fireManacasterUnbindState >= 1 && fireManacasterUnbindState <= 4) {
                setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + (fireManacasterUnbindState * 40));
                setwbFAMSilverMaskCountState(wbFAMSilverMaskCount + (fireManacasterUnbindState * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + (fireManacasterUnbindState * 40));
                setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + (fireManacasterUnbindState * 30));
                setwbFAMGoldMaskCountState(wbFAMGoldMaskCount + (fireManacasterUnbindState * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + (fireManacasterUnbindState * 30));
                setmubFAMSandCountState(mubFAMSandCount + (fireManacasterUnbindState * 1));
                setwbFAMSandCountState(wbFAMSandCount + (fireManacasterUnbindState * 1));
                setallmubFASandCount(allmubFASandCount + (fireManacasterUnbindState * 1));
                setmubFAMRupeeCost(mubFAMRupeeCost + (fireManacasterUnbindState * 2));
                setwbFAMRupeeCost(wbFAMRupeeCost + (fireManacasterUnbindState * 2));
                setallmubFARupeeCost(allmubFARupeeCost + (fireManacasterUnbindState * 2));
                setFireManacasterUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireManacasterUnbindState >= 1 && fireManacasterUnbindState <= 4) {
                setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + ((fireManacasterUnbindState - event.target.value) * 40))
                setwbFAMSilverMaskCountState(wbFAMSilverMaskCount + ((fireManacasterUnbindState - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireManacasterUnbindState - event.target.value) * 40));
                setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + ((fireManacasterUnbindState - event.target.value) * 30));
                setwbFAMGoldMaskCountState(wbFAMGoldMaskCount + ((fireManacasterUnbindState - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireManacasterUnbindState - event.target.value) * 30));
                setmubFAMSandCountState(mubFAMSandCount + (fireManacasterUnbindState - event.target.value));
                setwbFAMSandCountState(wbFAMSandCount + (fireManacasterUnbindState - event.target.value));
                setallmubFASandCount(allmubFASandCount + (fireManacasterUnbindState - event.target.value));
                setmubFAMRupeeCost(mubFAMRupeeCost + ((fireManacasterUnbindState - event.target.value) * 2));
                setwbFAMRupeeCost(wbFAMRupeeCost + ((fireManacasterUnbindState - event.target.value) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireManacasterUnbindState - event.target.value) * 2))
                setFireManacasterUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && fireManacasterUnbindState >= 5 && fireManacasterUnbindState <= 8) {
                setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + ((fireManacasterUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbFAMSilverMaskCountState(wbFAMSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireManacasterUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + ((fireManacasterUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbFAMGoldMaskCountState(wbFAMGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireManacasterUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubFAMInsanityCountState(mubFAMInsanityCount + ((fireManacasterUnbindState - 4) * 7));
                setwbFAMInsanityCountState(wbFAMInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireManacasterUnbindState - 4) * 7));
                setmubFAMSandCountState(mubFAMSandCount + (4 - event.target.value));
                setwbFAMSandCountState(wbFAMSandCount + (4 - event.target.value));
                setallmubFASandCount(allmubFASandCount + (4 - event.target.value));
                setmubFAMOriCountState(mubFAMOriCount + (fireManacasterUnbindState - 4));
                setwbFAMOriCountState(wbFAMOriCount + (fireManacasterUnbindState - 4));
                setallmubFAOriCount(allmubFAOriCount + (fireManacasterUnbindState - 4));
                setmubFAMRupeeCost(mubFAMRupeeCost + ((fireManacasterUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbFAMRupeeCost(wbFAMRupeeCost + 7.5 + ((fireManacasterUnbindState - 4) * 2));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireManacasterUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setFireManacasterUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireManacasterUnbindState == 9) {
                setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubFAMInsanityCountState(mubFAMInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubFAMGaleCountState(mubFAMGaleCount + 20);
                setallmubFAGaleCount(allmubFAGaleCount + 20);
                setmubFAMOriCountState(mubFAMOriCount + 20 + (8 - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + 20 + (8 - event.target.value));
                setmubFAMRupeeCost(mubFAMRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setFireManacasterUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && fireManacasterUnbindState >= 5 && fireManacasterUnbindState <= 8) {
                setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + ((fireManacasterUnbindState - event.target.value) * 16))
                setallmubFASilverMaskCount(allmubFASilverMaskCount + ((fireManacasterUnbindState - event.target.value) * 16));
                setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + ((fireManacasterUnbindState - event.target.value) * 10));
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + ((fireManacasterUnbindState - event.target.value) * 10));
                setmubFAMInsanityCountState(mubFAMInsanityCount + ((fireManacasterUnbindState - event.target.value) * 7));
                setallmubFAInsanityCount(allmubFAInsanityCount + ((fireManacasterUnbindState - event.target.value) * 7));
                setmubFAMOriCountState(mubFAMOriCount + (fireManacasterUnbindState - event.target.value));
                setallmubFAOriCount(allmubFAOriCount + (fireManacasterUnbindState - event.target.value));
                setmubFAMRupeeCost(mubFAMRupeeCost + ((fireManacasterUnbindState - event.target.value) * 7.5));
                setallmubFARupeeCost(allmubFARupeeCost + ((fireManacasterUnbindState - event.target.value) * 7.5));
                setFireManacasterUnbindState(event.target.value)
            }
        }
    }

    function handleFireManacasterRefineIncrement(event) {
        setFireWeaponChoiceState("manacaster");
        if (fireManacasterRefineState < event.target.value) {
            if (fireManacasterRefineState == 0 && event.target.value == 1) {
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
                setFireManacasterRefineState(event.target.value);
            }
            else if (fireManacasterRefineState == 0 && event.target.value == 2) {
                setmubFAMSilverMaskCountState(mubFAMSilverMaskCount - 56);
                setwbFAMSilverMaskCountState(wbFAMSilverMaskCount - 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount - 56);
                setmubFAMGoldMaskCountState(mubFAMGoldMaskCount - 40);
                setwbFAMGoldMaskCountState(wbFAMGoldMaskCount - 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount - 40);
                setmubFAMInsanityCountState(mubFAMInsanityCount - 17);
                setwbFAMInsanityCountState(wbFAMInsanityCount - 7);
                setallmubFAInsanityCount(allmubFAInsanityCount - 17);
                setmubFAMGaleCountState(mubFAMGaleCount - 10);
                setallmubFAGaleCount(allmubFAGaleCount - 10);
                setmubFAMOriCountState(mubFAMOriCount - 11);
                setwbFAMOriCountState(wbFAMOriCount - 1);
                setallmubFAOriCount(allmubFAOriCount - 11);
                setmubFAMRupeeCost(mubFAMRupeeCost - 5);
                setwbFAMRupeeCost(wbFAMRupeeCost - 2.5);
                setallmubFARupeeCost(allmubFARupeeCost - 5);
                setFireManacasterRefineState(event.target.value);
            }
            else if (fireManacasterRefineState == 1 && event.target.value == 2) {
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
                setFireManacasterRefineState(event.target.value);
            }
        }
        else if (fireManacasterRefineState > event.target.value) {
            if (fireManacasterRefineState == 2 && event.target.value == 1) 
            {
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
                setFireManacasterRefineState(event.target.value);
            }
            else if (fireManacasterRefineState == 2 && event.target.value == 0) 
            {
                setmubFAMSilverMaskCountState(mubFAMSilverMaskCount + 56);
                setwbFAMSilverMaskCountState(wbFAMSilverMaskCount + 16);
                setallmubFASilverMaskCount(allmubFASilverMaskCount + 56);
                setmubFAMGoldMaskCountState(mubFAMGoldMaskCount + 40);
                setwbFAMGoldMaskCountState(wbFAMGoldMaskCount + 10);
                setallmubFAGoldMaskCount(allmubFAGoldMaskCount + 40);
                setmubFAMInsanityCountState(mubFAMInsanityCount + 17);
                setwbFAMInsanityCountState(wbFAMInsanityCount + 7);
                setallmubFAInsanityCount(allmubFAInsanityCount + 17);
                setmubFAMGaleCountState(mubFAMGaleCount + 10);
                setallmubFAGaleCount(allmubFAGaleCount + 10);
                setmubFAMOriCountState(mubFAMOriCount + 11);
                setwbFAMOriCountState(wbFAMOriCount + 1); 
                setallmubFAOriCount(allmubFAOriCount + 11);
                setmubFAMRupeeCost(mubFAMRupeeCost + 5);
                setwbFAMRupeeCost(wbFAMRupeeCost + 2.5);
                setallmubFARupeeCost(allmubFARupeeCost + 5)
                setFireManacasterRefineState(event.target.value);
            }
            else if (fireManacasterRefineState == 1 && event.target.value == 0) 
            {
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
                setFireManacasterRefineState(event.target.value);
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
                                <Image src={FireAgitoSword} sx={{ width: ["75px", "100px"] }, {height: ["75px", "100px"]}} filter="grayscale(100%)" style={{ filter: fireSwordCraftState }} onClick={craftFireSword} />
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
                                <Image src={FireAgitoBlade} sx={{ width: ["75px", "100px"] }, {height: ["75px", "100px"]}} filter="grayscale(100%)" style={{ filter: fireBladeCraftState }} onClick={craftFireBlade} />
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
                                <Image src={FireAgitoDagger} sx={{ width: ["75px", "100px"] }, {height: ["75px", "100px"]}} filter="grayscale(100%)" style={{ filter: fireDaggerCraftState }} onClick={craftFireDagger} />
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
                                <Image src={FireAgitoAxe} sx={{ width: ["75px", "100px"] }, {height: ["75px", "100px"]}} filter="grayscale(100%)" style={{ filter: fireAxeCraftState }} onClick={craftFireAxe} />
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
                                <Image src={FireAgitoLance} sx={{ width: ["75px", "100px"] }, {height: ["75px", "100px"]}} filter="grayscale(100%)" style={{ filter: fireLanceCraftState }} onClick={craftFireLance} />
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
                                <Image src={FireAgitoBow} sx={{ width: ["75px", "100px"] }, {height: ["75px", "100px"]}} filter="grayscale(100%)" style={{ filter: fireBowCraftState }} onClick={craftFireBow} />
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
                                <Image src={FireAgitoWand} sx={{ width: ["75px", "100px"] }, {height: ["75px", "100px"]}} filter="grayscale(100%)" style={{ filter: fireWandCraftState }} onClick={craftFireWand} />
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
                                <Image src={FireAgitoStaff} sx={{ width: ["75px", "100px"] }, {height: ["75px", "100px"]}} filter="grayscale(100%)" style={{ filter: fireStaffCraftState }} onClick={craftFireStaff} />
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
                                <Image src={FireAgitoManacaster} sx={{ width: ["75px", "100px"] }, {height: ["75px", "100px"]}} filter="grayscale(100%)" style={{ filter: fireManacasterCraftState }} onClick={craftFireManacaster} />
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