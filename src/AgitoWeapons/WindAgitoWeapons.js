import React, { useState } from 'react'
import AgitoNavTabs from "./AgitoNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"
import { Box, Text, Flex, Card, Image } from "rebass";
import { Slider } from "@rebass/forms";

import WindAgitoSword from "../Images/Wind_Agito_Sword.png";
import WindAgitoBlade from "../Images/Wind_Agito_Blade.png";
import WindAgitoDagger from "../Images/Wind_Agito_Dagger.png";
import WindAgitoAxe from "../Images/Wind_Agito_Axe.png";
import WindAgitoLance from "../Images/Wind_Agito_Lance.png";
import WindAgitoBow from "../Images/Wind_Agito_Bow.png";
import WindAgitoWand from "../Images/Wind_Agito_Wand.png";
import WindAgitoStaff from "../Images/Wind_Agito_Staff.png";
import WindAgitoManacaster from "../Images/Wind_Agito_Manacaster.png";

import Refine from "../Images/Refine.PNG";
import Unbind from "../Images/Unbind.PNG";
import WyrmprintSlots from "../Images/Wyrmprint_Slots.PNG";
import WeaponBonus from "../Images/Weapon_Bonus.PNG";

import WindAgitoSwordCost from "./WindAgitoSwordMats"
import WindAgitoBladeCost from "./WindAgitoBladeMats"
import WindAgitoDaggerCost from "./WindAgitoDaggerMats"
import WindAgitoAxeCost from "./WindAgitoAxeMats"
import WindAgitoLanceCost from "./WindAgitoLanceMats"
import WindAgitoBowCost from "./WindAgitoBowMats"
import WindAgitoWandCost from "./WindAgitoWandMats"
import WindAgitoStaffCost from "./WindAgitoStaffMats"
import WindAgitoManacasterCost from "./WindAgitoManacasterMats"

export default function WindAgitoWeapons() {
    const [windWeaponChoice, setWindWeaponChoiceState] = useLocalStorage("windWeaponChoice", "sword")

    const [windSwordCraftState, setWindSwordCraftState] = useLocalStorage("windSwordCraftState", "grayscale(100%)")
    const [windSwordWeaponBonusState, setWindSwordWeaponBonusState] = useLocalStorage("windSwordWeaponBonusState", "grayscale(100%)")
    const [windSwordWyrmprintSlotState, setWindSwordWyrmprintSlotState] = useLocalStorage("windSwordWyrmprintSlotState", "grayscale(100%)")
    const [windSwordUnbindState, setWindSwordUnbindState] = useLocalStorage("windSwordUnbindState", 0);
    const [windSwordRefineState, setWindSwordRefineState] = useLocalStorage("windSwordRefineState", 0);

    const [mubWiASSilverMaskCount, setmubWiASSilverMaskCountState] = useLocalStorage("mubWiASSilverMaskCount", 516);
    const [mubWiASGoldMaskCount, setmubWiASGoldMaskCountState] = useLocalStorage("mubWiASGoldMaskCount", 410);
    const [mubWiASInsanityCount, setmubWiASInsanityCountState] = useLocalStorage("mubWiASInsanityCount", 89);
    const [mubWiASGaleCount, setmubWiASGaleCountState] = useLocalStorage("mubWiASGaleCount", 30);
    const [mubWiASSandCount, setmubWiASSandCountState] = useLocalStorage("mubWiASSandCount", 5);
    const [mubWiASOriCount, setmubWiASOriCountState] = useLocalStorage("mubWiASOriCount", 66);
    const [mubWiASRupeeCost, setmubWiASRupeeCost] = useLocalStorage("mubWiASRupeeCost", 59.5);

    const [wbWiASSilverMaskCount, setwbWiASSilverMaskCountState] = useLocalStorage("wbWiASSilverMaskCount", 332);
    const [wbWiASGoldMaskCount, setwbWiASGoldMaskCountState] = useLocalStorage("wbWiASGoldMaskCount", 270);
    const [wbWiASInsanityCount, setwbWiASInsanityCountState] = useLocalStorage("wbWiASInsanityCount", 28);
    const [wbWiASSandCount, setwbWiASSandCountState] = useLocalStorage("wbWiASSandCount", 5);
    const [wbWiASOriCount, setwbWiASOriCountState] = useLocalStorage("wbWiASOriCount", 32);
    const [wbWiASRupeeCost, setwbWiASRupeeCost] = useLocalStorage("wbWiASRupeeCost", 30);

    const [windBladeCraftState, setWindBladeCraftState] = useLocalStorage("windBladeCraftState", "grayscale(100%)")
    const [windBladeWeaponBonusState, setWindBladeWeaponBonusState] = useLocalStorage("windBladeWeaponBonusState", "grayscale(100%)")
    const [windBladeWyrmprintSlotState, setWindBladeWyrmprintSlotState] = useLocalStorage("windBladeWyrmprintSlotState", "grayscale(100%)")
    const [windBladeUnbindState, setWindBladeUnbindState] = useLocalStorage("windBladeUnbindState", 0);
    const [windBladeRefineState, setWindBladeRefineState] = useLocalStorage("windBladeRefineState", 0);

    const [mubWiABlSilverMaskCount, setmubWiABlSilverMaskCountState] = useLocalStorage("mubWiABlSilverMaskCount", 516);
    const [mubWiABlGoldMaskCount, setmubWiABlGoldMaskCountState] = useLocalStorage("mubWiABlGoldMaskCount", 410);
    const [mubWiABlInsanityCount, setmubWiABlInsanityCountState] = useLocalStorage("mubWiABlInsanityCount", 89);
    const [mubWiABlGaleCount, setmubWiABlGaleCountState] = useLocalStorage("mubWiABlGaleCount", 30);
    const [mubWiABlSandCount, setmubWiABlSandCountState] = useLocalStorage("mubWiABlSandCount", 5);
    const [mubWiABlOriCount, setmubWiABlOriCountState] = useLocalStorage("mubWiABlOriCount", 66);
    const [mubWiABlRupeeCost, setmubWiABlRupeeCost] = useLocalStorage("mubWiABlRupeeCost", 59.5);

    const [wbWiABlSilverMaskCount, setwbWiABlSilverMaskCountState] = useLocalStorage("wbWiABlSilverMaskCount", 332);
    const [wbWiABlGoldMaskCount, setwbWiABlGoldMaskCountState] = useLocalStorage("wbWiABlGoldMaskCount", 270);
    const [wbWiABlInsanityCount, setwbWiABlInsanityCountState] = useLocalStorage("wbWiABlInsanityCount", 28);
    const [wbWiABlSandCount, setwbWiABlSandCountState] = useLocalStorage("wbWiABlSandCount", 5);
    const [wbWiABlOriCount, setwbWiABlOriCountState] = useLocalStorage("wbWiABlOriCount", 32);
    const [wbWiABlRupeeCost, setwbWiABlRupeeCost] = useLocalStorage("wbWiABlRupeeCost", 30);

    const [windDaggerCraftState, setWindDaggerCraftState] = useLocalStorage("windDaggerCraftState", "grayscale(100%)")
    const [windDaggerWeaponBonusState, setWindDaggerWeaponBonusState] = useLocalStorage("windDaggerWeaponBonusState", "grayscale(100%)")
    const [windDaggerWyrmprintSlotState, setWindDaggerWyrmprintSlotState] = useLocalStorage("windDaggerWyrmprintSlotState", "grayscale(100%)")
    const [windDaggerUnbindState, setWindDaggerUnbindState] = useLocalStorage("windDaggerUnbindState", 0);
    const [windDaggerRefineState, setWindDaggerRefineState] = useLocalStorage("windDaggerRefineState", 0);

    const [mubWiADSilverMaskCount, setmubWiADSilverMaskCountState] = useLocalStorage("mubWiADSilverMaskCount", 516);
    const [mubWiADGoldMaskCount, setmubWiADGoldMaskCountState] = useLocalStorage("mubWiADASGoldMaskCount", 410);
    const [mubWiADInsanityCount, setmubWiADInsanityCountState] = useLocalStorage("mubWiADInsanityCount", 89);
    const [mubWiADGaleCount, setmubWiADGaleCountState] = useLocalStorage("mubWiADGaleCount", 30);
    const [mubWiADSandCount, setmubWiADSandCountState] = useLocalStorage("mubWiADSandCount", 5);
    const [mubWiADOriCount, setmubWiADOriCountState] = useLocalStorage("mubWiADOriCount", 66);
    const [mubWiADRupeeCost, setmubWiADRupeeCost] = useLocalStorage("mubWiADRupeeCost", 59.5);

    const [wbWiADSilverMaskCount, setwbWiADSilverMaskCountState] = useLocalStorage("wbWiADSilverMaskCount", 332);
    const [wbWiADGoldMaskCount, setwbWiADGoldMaskCountState] = useLocalStorage("wbWiADGoldMaskCount", 270);
    const [wbWiADInsanityCount, setwbWiADInsanityCountState] = useLocalStorage("wbWiADInsanityCount", 28);
    const [wbWiADSandCount, setwbWiADSandCountState] = useLocalStorage("wbWiADSandCount", 5);
    const [wbWiADOriCount, setwbWiADOriCountState] = useLocalStorage("wbWiADOriCount", 32);
    const [wbWiADRupeeCost, setwbWiADRupeeCost] = useLocalStorage("wbWiADRupeeCost", 30);

    const [windAxeCraftState, setWindAxeCraftState] = useLocalStorage("windAxeCraftState", "grayscale(100%)")
    const [windAxeWeaponBonusState, setWindAxeWeaponBonusState] = useLocalStorage("windAxeWeaponBonusState", "grayscale(100%)")
    const [windAxeWyrmprintSlotState, setWindAxeWyrmprintSlotState] = useLocalStorage("windAxeWyrmprintSlotState", "grayscale(100%)")
    const [windAxeUnbindState, setWindAxeUnbindState] = useLocalStorage("windAxeUnbindState", 0);
    const [windAxeRefineState, setWindAxeRefineState] = useLocalStorage("windAxeRefineState", 0);

    const [mubWiAASilverMaskCount, setmubWiAASilverMaskCountState] = useLocalStorage("mubWiAASilverMaskCount", 516);
    const [mubWiAAGoldMaskCount, setmubWiAAGoldMaskCountState] = useLocalStorage("mubWiAAASGoldMaskCount", 410);
    const [mubWiAAInsanityCount, setmubWiAAInsanityCountState] = useLocalStorage("mubWiAAInsanityCount", 89);
    const [mubWiAAGaleCount, setmubWiAAGaleCountState] = useLocalStorage("mubWiAAGaleCount", 30);
    const [mubWiAASandCount, setmubWiAASandCountState] = useLocalStorage("mubWiAASandCount", 5);
    const [mubWiAAOriCount, setmubWiAAOriCountState] = useLocalStorage("mubWiAAOriCount", 66);
    const [mubWiAARupeeCost, setmubWiAARupeeCost] = useLocalStorage("mubWiAARupeeCost", 59.5);

    const [wbWiAASilverMaskCount, setwbWiAASilverMaskCountState] = useLocalStorage("wbWiAASilverMaskCount", 332);
    const [wbWiAAGoldMaskCount, setwbWiAAGoldMaskCountState] = useLocalStorage("wbWiAAGoldMaskCount", 270);
    const [wbWiAAInsanityCount, setwbWiAAInsanityCountState] = useLocalStorage("wbWiAAInsanityCount", 28);
    const [wbWiAASandCount, setwbWiAASandCountState] = useLocalStorage("wbWiAASandCount", 5);
    const [wbWiAAOriCount, setwbWiAAOriCountState] = useLocalStorage("wbWiAAOriCount", 32);
    const [wbWiAARupeeCost, setwbWiAARupeeCost] = useLocalStorage("wbWiAARupeeCost", 30);

    const [windLanceCraftState, setWindLanceCraftState] = useLocalStorage("windLanceCraftState", "grayscale(100%)")
    const [windLanceWeaponBonusState, setWindLanceWeaponBonusState] = useLocalStorage("windLanceWeaponBonusState", "grayscale(100%)")
    const [windLanceWyrmprintSlotState, setWindLanceWyrmprintSlotState] = useLocalStorage("windLanceWyrmprintSlotState", "grayscale(100%)")
    const [windLanceUnbindState, setWindLanceUnbindState] = useLocalStorage("windLanceUnbindState", 0);
    const [windLanceRefineState, setWindLanceRefineState] = useLocalStorage("windLanceRefineState", 0);

    const [mubWiALSilverMaskCount, setmubWiALSilverMaskCountState] = useLocalStorage("mubWiALSilverMaskCount", 516);
    const [mubWiALGoldMaskCount, setmubWiALGoldMaskCountState] = useLocalStorage("mubWiALASGoldMaskCount", 410);
    const [mubWiALInsanityCount, setmubWiALInsanityCountState] = useLocalStorage("mubWiALInsanityCount", 89);
    const [mubWiALGaleCount, setmubWiALGaleCountState] = useLocalStorage("mubWiALGaleCount", 30);
    const [mubWiALSandCount, setmubWiALSandCountState] = useLocalStorage("mubWiALSandCount", 5);
    const [mubWiALOriCount, setmubWiALOriCountState] = useLocalStorage("mubWiALOriCount", 66);
    const [mubWiALRupeeCost, setmubWiALRupeeCost] = useLocalStorage("mubWiALRupeeCost", 59.5);

    const [wbWiALSilverMaskCount, setwbWiALSilverMaskCountState] = useLocalStorage("wbWiALSilverMaskCount", 332);
    const [wbWiALGoldMaskCount, setwbWiALGoldMaskCountState] = useLocalStorage("wbWiALGoldMaskCount", 270);
    const [wbWiALInsanityCount, setwbWiALInsanityCountState] = useLocalStorage("wbWiALInsanityCount", 28);
    const [wbWiALSandCount, setwbWiALSandCountState] = useLocalStorage("wbWiALSandCount", 5);
    const [wbWiALOriCount, setwbWiALOriCountState] = useLocalStorage("wbWiALOriCount", 32);
    const [wbWiALRupeeCost, setwbWiALRupeeCost] = useLocalStorage("wbWiALRupeeCost", 30);

    const [windBowCraftState, setWindBowCraftState] = useLocalStorage("windBowCraftState", "grayscale(100%)")
    const [windBowWeaponBonusState, setWindBowWeaponBonusState] = useLocalStorage("windBowWeaponBonusState", "grayscale(100%)")
    const [windBowWyrmprintSlotState, setWindBowWyrmprintSlotState] = useLocalStorage("windBowWyrmprintSlotState", "grayscale(100%)")
    const [windBowUnbindState, setWindBowUnbindState] = useLocalStorage("windBowUnbindState", 0);
    const [windBowRefineState, setWindBowRefineState] = useLocalStorage("windBowRefineState", 0);

    const [mubWiABoSilverMaskCount, setmubWiABoSilverMaskCountState] = useLocalStorage("mubWiABoSilverMaskCount", 516);
    const [mubWiABoGoldMaskCount, setmubWiABoGoldMaskCountState] = useLocalStorage("mubWiABoASGoldMaskCount", 410);
    const [mubWiABoInsanityCount, setmubWiABoInsanityCountState] = useLocalStorage("mubWiABoInsanityCount", 89);
    const [mubWiABoGaleCount, setmubWiABoGaleCountState] = useLocalStorage("mubWiABoGaleCount", 30);
    const [mubWiABoSandCount, setmubWiABoSandCountState] = useLocalStorage("mubWiABoSandCount", 5);
    const [mubWiABoOriCount, setmubWiABoOriCountState] = useLocalStorage("mubWiABoOriCount", 66);
    const [mubWiABoRupeeCost, setmubWiABoRupeeCost] = useLocalStorage("mubWiABoRupeeCost", 59.5);

    const [wbWiABoSilverMaskCount, setwbWiABoSilverMaskCountState] = useLocalStorage("wbWiABoSilverMaskCount", 332);
    const [wbWiABoGoldMaskCount, setwbWiABoGoldMaskCountState] = useLocalStorage("wbWiABoGoldMaskCount", 270);
    const [wbWiABoInsanityCount, setwbWiABoInsanityCountState] = useLocalStorage("wbWiABoInsanityCount", 28);
    const [wbWiABoSandCount, setwbWiABoSandCountState] = useLocalStorage("wbWiABoSandCount", 5);
    const [wbWiABoOriCount, setwbWiABoOriCountState] = useLocalStorage("wbWiABoOriCount", 32);
    const [wbWiABoRupeeCost, setwbWiABoRupeeCost] = useLocalStorage("wbWiABoRupeeCost", 30);

    const [windWandCraftState, setWindWandCraftState] = useLocalStorage("windWandCraftState", "grayscale(100%)")
    const [windWandWeaponBonusState, setWindWandWeaponBonusState] = useLocalStorage("windWandWeaponBonusState", "grayscale(100%)")
    const [windWandWyrmprintSlotState, setWindWandWyrmprintSlotState] = useLocalStorage("windWandWyrmprintSlotState", "grayscale(100%)")
    const [windWandUnbindState, setWindWandUnbindState] = useLocalStorage("windWandUnbindState", 0);
    const [windWandRefineState, setWindWandRefineState] = useLocalStorage("windWandRefineState", 0);

    const [mubWiAWSilverMaskCount, setmubWiAWSilverMaskCountState] = useLocalStorage("mubWiAWSilverMaskCount", 516);
    const [mubWiAWGoldMaskCount, setmubWiAWGoldMaskCountState] = useLocalStorage("mubWiAWASGoldMaskCount", 410);
    const [mubWiAWInsanityCount, setmubWiAWInsanityCountState] = useLocalStorage("mubWiAWInsanityCount", 89);
    const [mubWiAWGaleCount, setmubWiAWGaleCountState] = useLocalStorage("mubWiAWGaleCount", 30);
    const [mubWiAWSandCount, setmubWiAWSandCountState] = useLocalStorage("mubWiAWSandCount", 5);
    const [mubWiAWOriCount, setmubWiAWOriCountState] = useLocalStorage("mubWiAWOriCount", 66);
    const [mubWiAWRupeeCost, setmubWiAWRupeeCost] = useLocalStorage("mubWiAWRupeeCost", 59.5);

    const [wbWiAWSilverMaskCount, setwbWiAWSilverMaskCountState] = useLocalStorage("wbWiAWSilverMaskCount", 332);
    const [wbWiAWGoldMaskCount, setwbWiAWGoldMaskCountState] = useLocalStorage("wbWiAWGoldMaskCount", 270);
    const [wbWiAWInsanityCount, setwbWiAWInsanityCountState] = useLocalStorage("wbWiAWInsanityCount", 28);
    const [wbWiAWSandCount, setwbWiAWSandCountState] = useLocalStorage("wbWiAWSandCount", 5);
    const [wbWiAWOriCount, setwbWiAWOriCountState] = useLocalStorage("wbWiAWOriCount", 32);
    const [wbWiAWRupeeCost, setwbWiAWRupeeCost] = useLocalStorage("wbWiAWRupeeCost", 30);

    const [windStaffCraftState, setWindStaffCraftState] = useLocalStorage("windStaffCraftState", "grayscale(100%)")
    const [windStaffWeaponBonusState, setWindStaffWeaponBonusState] = useLocalStorage("windStaffWeaponBonusState", "grayscale(100%)")
    const [windStaffWyrmprintSlotState, setWindStaffWyrmprintSlotState] = useLocalStorage("windStaffWyrmprintSlotState", "grayscale(100%)")
    const [windStaffUnbindState, setWindStaffUnbindState] = useLocalStorage("windStaffUnbindState", 0);
    const [windStaffRefineState, setWindStaffRefineState] = useLocalStorage("windStaffRefineState", 0);

    const [mubWiAStSilverMaskCount, setmubWiAStSilverMaskCountState] = useLocalStorage("mubWiAStSilverMaskCount", 516);
    const [mubWiAStGoldMaskCount, setmubWiAStGoldMaskCountState] = useLocalStorage("mubWiAStASGoldMaskCount", 410);
    const [mubWiAStInsanityCount, setmubWiAStInsanityCountState] = useLocalStorage("mubWiAStInsanityCount", 89);
    const [mubWiAStGaleCount, setmubWiAStGaleCountState] = useLocalStorage("mubWiAStGaleCount", 30);
    const [mubWiAStSandCount, setmubWiAStSandCountState] = useLocalStorage("mubWiAStSandCount", 5);
    const [mubWiAStOriCount, setmubWiAStOriCountState] = useLocalStorage("mubWiAStOriCount", 66);
    const [mubWiAStRupeeCost, setmubWiAStRupeeCost] = useLocalStorage("mubWiAStRupeeCost", 59.5);

    const [wbWiAStSilverMaskCount, setwbWiAStSilverMaskCountState] = useLocalStorage("wbWiAStSilverMaskCount", 332);
    const [wbWiAStGoldMaskCount, setwbWiAStGoldMaskCountState] = useLocalStorage("wbWiAStGoldMaskCount", 270);
    const [wbWiAStInsanityCount, setwbWiAStInsanityCountState] = useLocalStorage("wbWiAStInsanityCount", 28);
    const [wbWiAStSandCount, setwbWiAStSandCountState] = useLocalStorage("wbWiAStSandCount", 5);
    const [wbWiAStOriCount, setwbWiAStOriCountState] = useLocalStorage("wbWiAStOriCount", 32);
    const [wbWiAStRupeeCost, setwbWiAStRupeeCost] = useLocalStorage("wbWiAStRupeeCost", 30);

    const [windManacasterCraftState, setWindManacasterCraftState] = useLocalStorage("windManacasterCraftState", "grayscale(100%)")
    const [windManacasterWeaponBonusState, setWindManacasterWeaponBonusState] = useLocalStorage("windManacasterWeaponBonusState", "grayscale(100%)")
    const [windManacasterWyrmprintSlotState, setWindManacasterWyrmprintSlotState] = useLocalStorage("windManacasterWyrmprintSlotState", "grayscale(100%)")
    const [windManacasterUnbindState, setWindManacasterUnbindState] = useLocalStorage("windManacasterUnbindState", 0);
    const [windManacasterRefineState, setWindManacasterRefineState] = useLocalStorage("windManacasterRefineState", 0);

    const [mubWiAMSilverMaskCount, setmubWiAMSilverMaskCountState] = useLocalStorage("mubWiAMSilverMaskCount", 516);
    const [mubWiAMGoldMaskCount, setmubWiAMGoldMaskCountState] = useLocalStorage("mubWiAMASGoldMaskCount", 410);
    const [mubWiAMInsanityCount, setmubWiAMInsanityCountState] = useLocalStorage("mubWiAMInsanityCount", 89);
    const [mubWiAMGaleCount, setmubWiAMGaleCountState] = useLocalStorage("mubWiAMGaleCount", 30);
    const [mubWiAMSandCount, setmubWiAMSandCountState] = useLocalStorage("mubWiAMSandCount", 5);
    const [mubWiAMOriCount, setmubWiAMOriCountState] = useLocalStorage("mubWiAMOriCount", 66);
    const [mubWiAMRupeeCost, setmubWiAMRupeeCost] = useLocalStorage("mubWiAMRupeeCost", 59.5);

    const [wbWiAMSilverMaskCount, setwbWiAMSilverMaskCountState] = useLocalStorage("wbWiAMSilverMaskCount", 332);
    const [wbWiAMGoldMaskCount, setwbWiAMGoldMaskCountState] = useLocalStorage("wbWiAMGoldMaskCount", 270);
    const [wbWiAMInsanityCount, setwbWiAMInsanityCountState] = useLocalStorage("wbWiAMInsanityCount", 28);
    const [wbWiAMSandCount, setwbWiAMSandCountState] = useLocalStorage("wbWiAMSandCount", 5);
    const [wbWiAMOriCount, setwbWiAMOriCountState] = useLocalStorage("wbWiAMOriCount", 32);
    const [wbWiAMRupeeCost, setwbWiAMRupeeCost] = useLocalStorage("wbWiAMRupeeCost", 30);

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

    function windWeaponSelection() {
        if (windWeaponChoice == "sword") {
            return <WindAgitoSwordCost mubWiASSilverMaskCount={mubWiASSilverMaskCount} mubWiASGoldMaskCount={mubWiASGoldMaskCount} mubWiASInsanityCount={mubWiASInsanityCount} mubWiASGaleCount={mubWiASGaleCount} mubWiASSandCount={mubWiASSandCount} mubWiASOriCount={mubWiASOriCount} mubWiASRupeeCost={mubWiASRupeeCost} wbWiASSilverMaskCount={wbWiASSilverMaskCount} wbWiASGoldMaskCount={wbWiASGoldMaskCount} wbWiASInsanityCount={wbWiASInsanityCount} wbWiASSandCount={wbWiASSandCount} wbWiASOriCount={wbWiASOriCount} wbWiASRupeeCost={wbWiASRupeeCost} />
        }
        if (windWeaponChoice == "blade") {
            return <WindAgitoBladeCost mubWiABlSilverMaskCount={mubWiABlSilverMaskCount} mubWiABlGoldMaskCount={mubWiABlGoldMaskCount} mubWiABlInsanityCount={mubWiABlInsanityCount} mubWiABlGaleCount={mubWiABlGaleCount} mubWiABlSandCount={mubWiABlSandCount} mubWiABlOriCount={mubWiABlOriCount} mubWiABlRupeeCost={mubWiABlRupeeCost} wbWiABlSilverMaskCount={wbWiABlSilverMaskCount} wbWiABlGoldMaskCount={wbWiABlGoldMaskCount} wbWiABlInsanityCount={wbWiABlInsanityCount} wbWiABlSandCount={wbWiABlSandCount} wbWiABlOriCount={wbWiABlOriCount} wbWiABlRupeeCost={wbWiABlRupeeCost} />
        }
        if (windWeaponChoice == "dagger") {
            return <WindAgitoDaggerCost mubWiADSilverMaskCount={mubWiADSilverMaskCount} mubWiADGoldMaskCount={mubWiADGoldMaskCount} mubWiADInsanityCount={mubWiADInsanityCount} mubWiADGaleCount={mubWiADGaleCount} mubWiADSandCount={mubWiADSandCount} mubWiADOriCount={mubWiADOriCount} mubWiADRupeeCost={mubWiADRupeeCost} wbWiADSilverMaskCount={wbWiADSilverMaskCount} wbWiADGoldMaskCount={wbWiADGoldMaskCount} wbWiADInsanityCount={wbWiADInsanityCount} wbWiADSandCount={wbWiADSandCount} wbWiADOriCount={wbWiADOriCount} wbWiADRupeeCost={wbWiADRupeeCost} />
        }
        if (windWeaponChoice == "axe") {
            return <WindAgitoAxeCost mubWiAASilverMaskCount={mubWiAASilverMaskCount} mubWiAAGoldMaskCount={mubWiAAGoldMaskCount} mubWiAAInsanityCount={mubWiAAInsanityCount} mubWiAAGaleCount={mubWiAAGaleCount} mubWiAASandCount={mubWiAASandCount} mubWiAAOriCount={mubWiAAOriCount} mubWiAARupeeCost={mubWiAARupeeCost} wbWiAASilverMaskCount={wbWiAASilverMaskCount} wbWiAAGoldMaskCount={wbWiAAGoldMaskCount} wbWiAAInsanityCount={wbWiAAInsanityCount} wbWiAASandCount={wbWiAASandCount} wbWiAAOriCount={wbWiAAOriCount} wbWiAARupeeCost={wbWiAARupeeCost} />
        }
        if (windWeaponChoice == "lance") {
            return <WindAgitoLanceCost mubWiALSilverMaskCount={mubWiALSilverMaskCount} mubWiALGoldMaskCount={mubWiALGoldMaskCount} mubWiALInsanityCount={mubWiALInsanityCount} mubWiALGaleCount={mubWiALGaleCount} mubWiALSandCount={mubWiALSandCount} mubWiALOriCount={mubWiALOriCount} mubWiALRupeeCost={mubWiALRupeeCost} wbWiALSilverMaskCount={wbWiALSilverMaskCount} wbWiALGoldMaskCount={wbWiALGoldMaskCount} wbWiALInsanityCount={wbWiALInsanityCount} wbWiALSandCount={wbWiALSandCount} wbWiALOriCount={wbWiALOriCount} wbWiALRupeeCost={wbWiALRupeeCost} />
        }
        if (windWeaponChoice == "bow") {
            return <WindAgitoBowCost mubWiABoSilverMaskCount={mubWiABoSilverMaskCount} mubWiABoGoldMaskCount={mubWiABoGoldMaskCount} mubWiABoInsanityCount={mubWiABoInsanityCount} mubWiABoGaleCount={mubWiABoGaleCount} mubWiABoSandCount={mubWiABoSandCount} mubWiABoOriCount={mubWiABoOriCount} mubWiABoRupeeCost={mubWiABoRupeeCost} wbWiABoSilverMaskCount={wbWiABoSilverMaskCount} wbWiABoGoldMaskCount={wbWiABoGoldMaskCount} wbWiABoInsanityCount={wbWiABoInsanityCount} wbWiABoSandCount={wbWiABoSandCount} wbWiABoOriCount={wbWiABoOriCount} wbWiABoRupeeCost={wbWiABoRupeeCost} />
        }
        if (windWeaponChoice == "wand") {
            return <WindAgitoWandCost mubWiAWSilverMaskCount={mubWiAWSilverMaskCount} mubWiAWGoldMaskCount={mubWiAWGoldMaskCount} mubWiAWInsanityCount={mubWiAWInsanityCount} mubWiAWGaleCount={mubWiAWGaleCount} mubWiAWSandCount={mubWiAWSandCount} mubWiAWOriCount={mubWiAWOriCount} mubWiAWRupeeCost={mubWiAWRupeeCost} wbWiAWSilverMaskCount={wbWiAWSilverMaskCount} wbWiAWGoldMaskCount={wbWiAWGoldMaskCount} wbWiAWInsanityCount={wbWiAWInsanityCount} wbWiAWSandCount={wbWiAWSandCount} wbWiAWOriCount={wbWiAWOriCount} wbWiAWRupeeCost={wbWiAWRupeeCost} />
        }
        if (windWeaponChoice == "staff") {
            return <WindAgitoStaffCost mubWiAStSilverMaskCount={mubWiAStSilverMaskCount} mubWiAStGoldMaskCount={mubWiAStGoldMaskCount} mubWiAStInsanityCount={mubWiAStInsanityCount} mubWiAStGaleCount={mubWiAStGaleCount} mubWiAStSandCount={mubWiAStSandCount} mubWiAStOriCount={mubWiAStOriCount} mubWiAStRupeeCost={mubWiAStRupeeCost} wbWiAStSilverMaskCount={wbWiAStSilverMaskCount} wbWiAStGoldMaskCount={wbWiAStGoldMaskCount} wbWiAStInsanityCount={wbWiAStInsanityCount} wbWiAStSandCount={wbWiAStSandCount} wbWiAStOriCount={wbWiAStOriCount} wbWiAStRupeeCost={wbWiAStRupeeCost} />
        }
        if (windWeaponChoice == "manacaster") {
            return <WindAgitoManacasterCost mubWiAMSilverMaskCount={mubWiAMSilverMaskCount} mubWiAMGoldMaskCount={mubWiAMGoldMaskCount} mubWiAMInsanityCount={mubWiAMInsanityCount} mubWiAMGaleCount={mubWiAMGaleCount} mubWiAMSandCount={mubWiAMSandCount} mubWiAMOriCount={mubWiAMOriCount} mubWiAMRupeeCost={mubWiAMRupeeCost} wbWiAMSilverMaskCount={wbWiAMSilverMaskCount} wbWiAMGoldMaskCount={wbWiAMGoldMaskCount} wbWiAMInsanityCount={wbWiAMInsanityCount} wbWiAMSandCount={wbWiAMSandCount} wbWiAMOriCount={wbWiAMOriCount} wbWiAMRupeeCost={wbWiAMRupeeCost} />
        }
    }

    function craftWindSword() {
        if (windSwordCraftState == "grayscale(100%)") {
            setWindSwordCraftState("grayscale(0%)")
            setWindWeaponChoiceState("sword")
            setmubWiASSilverMaskCountState(mubWiASSilverMaskCount - 40)
            setwbWiASSilverMaskCountState(wbWiASSilverMaskCount - 40)
            setmubWiASGoldMaskCountState(mubWiASGoldMaskCount - 30)
            setwbWiASGoldMaskCountState(wbWiASGoldMaskCount - 30)
            setmubWiASSandCountState(mubWiASSandCount - 1)
            setwbWiASSandCountState(wbWiASSandCount - 1)
            setmubWiASRupeeCost(mubWiASRupeeCost - 2)
            setwbWiASRupeeCost(wbWiASRupeeCost - 2)
        }
        else if (windSwordCraftState == "grayscale(0%)") {
            setWindSwordCraftState("grayscale(100%)")
            setWindWeaponChoiceState("sword")
            setmubWiASSilverMaskCountState(mubWiASSilverMaskCount + 40)
            setwbWiASSilverMaskCountState(wbWiASSilverMaskCount + 40)
            setmubWiASGoldMaskCountState(mubWiASGoldMaskCount + 30)
            setwbWiASGoldMaskCountState(wbWiASGoldMaskCount + 30)
            setmubWiASSandCountState(mubWiASSandCount + 1)
            setwbWiASSandCountState(wbWiASSandCount + 1)
            setmubWiASRupeeCost(mubWiASRupeeCost + 2)
            setwbWiASRupeeCost(wbWiASRupeeCost + 2)
        }
    }

    function windSwordWeaponBonus() {
        if (windSwordWeaponBonusState == "grayscale(100%)") {
            setWindSwordWeaponBonusState("grayscale(0%)");
            setWindWeaponChoiceState("sword");
            setmubWiASSilverMaskCountState(mubWiASSilverMaskCount - 100)
            setwbWiASSilverMaskCountState(wbWiASSilverMaskCount - 100)
            setmubWiASGoldMaskCountState(mubWiASGoldMaskCount - 100)
            setwbWiASGoldMaskCountState(wbWiASGoldMaskCount - 100)
            setmubWiASInsanityCountState(mubWiASInsanityCount - 14)
            setwbWiASInsanityCountState(wbWiASInsanityCount - 14)
            setmubWiASOriCountState(mubWiASOriCount - 30)
            setwbWiASOriCountState(wbWiASOriCount - 30)
            setmubWiASRupeeCost(mubWiASRupeeCost - 10)
            setwbWiASRupeeCost(wbWiASRupeeCost - 10)
        }
        else if (windSwordWeaponBonusState == "grayscale(0%)") {
            setWindSwordWeaponBonusState("grayscale(100%)");
            setWindWeaponChoiceState("sword");
            setmubWiASSilverMaskCountState(mubWiASSilverMaskCount + 100)
            setwbWiASSilverMaskCountState(wbWiASSilverMaskCount + 100)
            setmubWiASGoldMaskCountState(mubWiASGoldMaskCount + 100)
            setwbWiASGoldMaskCountState(wbWiASGoldMaskCount + 100)
            setmubWiASInsanityCountState(mubWiASInsanityCount + 14)
            setwbWiASInsanityCountState(wbWiASInsanityCount + 14)
            setmubWiASOriCountState(mubWiASOriCount + 30)
            setwbWiASOriCountState(wbWiASOriCount + 30)
            setmubWiASRupeeCost(mubWiASRupeeCost + 10)
            setwbWiASRupeeCost(wbWiASRupeeCost + 10)
        }
    }

    function windSwordWyrmprintSlot() {
        if (windSwordWyrmprintSlotState == "grayscale(100%)") {
            setWindSwordWyrmprintSlotState("grayscale(0%)");
            setWindWeaponChoiceState("sword");
            setmubWiASSilverMaskCountState(mubWiASSilverMaskCount - 16)
            setmubWiASGoldMaskCountState(mubWiASGoldMaskCount - 10)
            setmubWiASOriCountState(mubWiASOriCount - 1)
            setmubWiASRupeeCost(mubWiASRupeeCost - 2.5)
        }
        else if (windSwordWyrmprintSlotState == "grayscale(0%)") {
            setWindSwordWyrmprintSlotState("grayscale(100%)");
            setWindWeaponChoiceState("sword");
            setmubWiASSilverMaskCountState(mubWiASSilverMaskCount + 16)
            setmubWiASGoldMaskCountState(mubWiASGoldMaskCount + 10)
            setmubWiASOriCountState(mubWiASOriCount + 1)
            setmubWiASRupeeCost(mubWiASRupeeCost + 2.5)
        }
    }

    function handleWindSwordUnbindIncrement(event) {
        setWindWeaponChoiceState("sword");
        if (windSwordUnbindState < event.target.value) {
            if (event.target.value - windSwordUnbindState == 1) {
                setWindSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWiASSilverMaskCountState(mubWiASSilverMaskCount - 40)
                    setwbWiASSilverMaskCountState(wbWiASSilverMaskCount - 40)
                    setmubWiASGoldMaskCountState(mubWiASGoldMaskCount - 30)
                    setwbWiASGoldMaskCountState(wbWiASGoldMaskCount - 30)
                    setmubWiASSandCountState(mubWiASSandCount - 1)
                    setwbWiASSandCountState(wbWiASSandCount - 1)
                    setmubWiASRupeeCost(mubWiASRupeeCost - 2)
                    setwbWiASRupeeCost(wbWiASRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWiASSilverMaskCountState(mubWiASSilverMaskCount - 16)
                    setwbWiASSilverMaskCountState(wbWiASSilverMaskCount - 16)
                    setmubWiASGoldMaskCountState(mubWiASGoldMaskCount - 10)
                    setwbWiASGoldMaskCountState(wbWiASGoldMaskCount - 10)
                    setmubWiASInsanityCountState(mubWiASInsanityCount - 7)
                    setwbWiASInsanityCountState(wbWiASInsanityCount - 7)
                    setmubWiASOriCountState(mubWiASOriCount - 1)
                    setwbWiASOriCountState(wbWiASOriCount - 1)
                    setmubWiASRupeeCost(mubWiASRupeeCost - 7.5)
                    setwbWiASRupeeCost(wbWiASRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWiASSilverMaskCountState(mubWiASSilverMaskCount - 16)
                    setmubWiASGoldMaskCountState(mubWiASGoldMaskCount - 10)
                    setmubWiASInsanityCountState(mubWiASInsanityCount - 7)
                    setmubWiASOriCountState(mubWiASOriCount - 1)
                    setmubWiASRupeeCost(mubWiASRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWiASSilverMaskCountState(mubWiASSilverMaskCount - 80)
                    setmubWiASGoldMaskCountState(mubWiASGoldMaskCount - 70)
                    setmubWiASInsanityCountState(mubWiASInsanityCount - 30)
                    setmubWiASGaleCountState(mubWiASGaleCount - 20)
                    setmubWiASOriCountState(mubWiASOriCount - 20)
                    setmubWiASRupeeCost(mubWiASRupeeCost - 2)
                }
            }
        }
        else if (windSwordUnbindState > event.target.value) {
            if (windSwordUnbindState - event.target.value == 1) {
                setWindSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWiASSilverMaskCountState(mubWiASSilverMaskCount + 40)
                    setwbWiASSilverMaskCountState(wbWiASSilverMaskCount + 40)
                    setmubWiASGoldMaskCountState(mubWiASGoldMaskCount + 30)
                    setwbWiASGoldMaskCountState(wbWiASGoldMaskCount + 30)
                    setmubWiASSandCountState(mubWiASSandCount + 1)
                    setwbWiASSandCountState(wbWiASSandCount + 1)
                    setmubWiASRupeeCost(mubWiASRupeeCost + 2)
                    setwbWiASRupeeCost(wbWiASRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWiASSilverMaskCountState(mubWiASSilverMaskCount + 16)
                    setwbWiASSilverMaskCountState(wbWiASSilverMaskCount + 16)
                    setmubWiASGoldMaskCountState(mubWiASGoldMaskCount + 10)
                    setwbWiASGoldMaskCountState(wbWiASGoldMaskCount + 10)
                    setmubWiASInsanityCountState(mubWiASInsanityCount + 7)
                    setwbWiASInsanityCountState(wbWiASInsanityCount + 7)
                    setmubWiASOriCountState(mubWiASOriCount + 1)
                    setwbWiASOriCountState(wbWiASOriCount + 1)
                    setmubWiASRupeeCost(mubWiASRupeeCost + 7.5)
                    setwbWiASRupeeCost(wbWiASRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWiASSilverMaskCountState(mubWiASSilverMaskCount + 16)
                    setmubWiASGoldMaskCountState(mubWiASGoldMaskCount + 10)
                    setmubWiASInsanityCountState(mubWiASInsanityCount + 7)
                    setmubWiASOriCountState(mubWiASOriCount + 1)
                    setmubWiASRupeeCost(mubWiASRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWiASSilverMaskCountState(mubWiASSilverMaskCount + 80)
                    setmubWiASGoldMaskCountState(mubWiASGoldMaskCount + 70)
                    setmubWiASInsanityCountState(mubWiASInsanityCount + 30)
                    setmubWiASGaleCountState(mubWiASGaleCount + 20)
                    setmubWiASOriCountState(mubWiASOriCount + 20)
                    setmubWiASRupeeCost(mubWiASRupeeCost + 2)
                }
            }
        }
    }

    function handleWindSwordRefineIncrement(event) {
        setWindWeaponChoiceState("sword");
        if (windSwordRefineState < event.target.value) {
            if (event.target.value - windSwordRefineState == 1) {
                setWindSwordRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWiASSilverMaskCountState(mubWiASSilverMaskCount - 16);
                    setwbWiASSilverMaskCountState(wbWiASSilverMaskCount - 16);
                    setmubWiASGoldMaskCountState(mubWiASGoldMaskCount - 10);
                    setwbWiASGoldMaskCountState(wbWiASGoldMaskCount - 10);
                    setmubWiASInsanityCountState(mubWiASInsanityCount - 7);
                    setwbWiASInsanityCountState(wbWiASInsanityCount - 7);
                    setmubWiASOriCountState(mubWiASOriCount - 1);
                    setwbWiASOriCountState(wbWiASOriCount - 1);
                    setmubWiASRupeeCost(mubWiASRupeeCost - 2.5);
                    setwbWiASRupeeCost(wbWiASRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubWiASSilverMaskCountState(mubWiASSilverMaskCount - 40)
                    setmubWiASGoldMaskCountState(mubWiASGoldMaskCount - 30);
                    setmubWiASInsanityCountState(mubWiASInsanityCount - 10);
                    setmubWiASGaleCountState(mubWiASGaleCount - 10);
                    setmubWiASOriCountState(mubWiASOriCount - 10);
                    setmubWiASRupeeCost(mubWiASRupeeCost - 2.5);
                }
            }
        }
        else if (windSwordRefineState > event.target.value) {
            if (windSwordRefineState - event.target.value == 1) {
                setWindSwordRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWiASSilverMaskCountState(mubWiASSilverMaskCount + 16);
                    setwbWiASSilverMaskCountState(wbWiASSilverMaskCount + 16);
                    setmubWiASGoldMaskCountState(mubWiASGoldMaskCount + 10);
                    setwbWiASGoldMaskCountState(wbWiASGoldMaskCount + 10);
                    setmubWiASInsanityCountState(mubWiASInsanityCount + 7);
                    setwbWiASInsanityCountState(wbWiASInsanityCount + 7);
                    setmubWiASOriCountState(mubWiASOriCount + 1);
                    setwbWiASOriCountState(wbWiASOriCount + 1);
                    setmubWiASRupeeCost(mubWiASRupeeCost + 2.5);
                    setwbWiASRupeeCost(wbWiASRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubWiASSilverMaskCountState(mubWiASSilverMaskCount + 40)
                    setmubWiASGoldMaskCountState(mubWiASGoldMaskCount + 30);
                    setmubWiASInsanityCountState(mubWiASInsanityCount + 10);
                    setmubWiASGaleCountState(mubWiASGaleCount + 10);
                    setmubWiASOriCountState(mubWiASOriCount + 10);
                    setmubWiASRupeeCost(mubWiASRupeeCost + 2.5);
                }
            }
        }
    }

    function craftWindBlade() {
        if (windBladeCraftState == "grayscale(100%)") {
            setWindBladeCraftState("grayscale(0%)")
            setWindWeaponChoiceState("blade")
            setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount - 40)
            setwbWiABlSilverMaskCountState(wbWiABlSilverMaskCount - 40)
            setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount - 30)
            setwbWiABlGoldMaskCountState(wbWiABlGoldMaskCount - 30)
            setmubWiABlSandCountState(mubWiABlSandCount - 1)
            setwbWiABlSandCountState(wbWiABlSandCount - 1)
            setmubWiABlRupeeCost(mubWiABlRupeeCost - 2)
            setwbWiABlRupeeCost(wbWiABlRupeeCost - 2)
        }
        else if (windBladeCraftState == "grayscale(0%)") {
            setWindBladeCraftState("grayscale(100%)")
            setWindWeaponChoiceState("blade")
            setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount + 40)
            setwbWiABlSilverMaskCountState(wbWiABlSilverMaskCount + 40)
            setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount + 30)
            setwbWiABlGoldMaskCountState(wbWiABlGoldMaskCount + 30)
            setmubWiABlSandCountState(mubWiABlSandCount + 1)
            setwbWiABlSandCountState(wbWiABlSandCount + 1)
            setmubWiABlRupeeCost(mubWiABlRupeeCost + 2)
            setwbWiABlRupeeCost(wbWiABlRupeeCost + 2)
        }
    }

    function windBladeWeaponBonus() {
        if (windBladeWeaponBonusState == "grayscale(100%)") {
            setWindBladeWeaponBonusState("grayscale(0%)");
            setWindWeaponChoiceState("blade");
            setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount - 100)
            setwbWiABlSilverMaskCountState(wbWiABlSilverMaskCount - 100)
            setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount - 100)
            setwbWiABlGoldMaskCountState(wbWiABlGoldMaskCount - 100)
            setmubWiABlInsanityCountState(mubWiABlInsanityCount - 14)
            setwbWiABlInsanityCountState(wbWiABlInsanityCount - 14)
            setmubWiABlOriCountState(mubWiABlOriCount - 30)
            setwbWiABlOriCountState(wbWiABlOriCount - 30)
            setmubWiABlRupeeCost(mubWiABlRupeeCost - 10)
            setwbWiABlRupeeCost(wbWiABlRupeeCost - 10)
        }
        else if (windBladeWeaponBonusState == "grayscale(0%)") {
            setWindBladeWeaponBonusState("grayscale(100%)");
            setWindWeaponChoiceState("blade");
            setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount + 100)
            setwbWiABlSilverMaskCountState(wbWiABlSilverMaskCount + 100)
            setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount + 100)
            setwbWiABlGoldMaskCountState(wbWiABlGoldMaskCount + 100)
            setmubWiABlInsanityCountState(mubWiABlInsanityCount + 14)
            setwbWiABlInsanityCountState(wbWiABlInsanityCount + 14)
            setmubWiABlOriCountState(mubWiABlOriCount + 30)
            setwbWiABlOriCountState(wbWiABlOriCount + 30)
            setmubWiABlRupeeCost(mubWiABlRupeeCost + 10)
            setwbWiABlRupeeCost(wbWiABlRupeeCost + 10)
        }
    }

    function windBladeWyrmprintSlot() {
        if (windBladeWyrmprintSlotState == "grayscale(100%)") {
            setWindBladeWyrmprintSlotState("grayscale(0%)");
            setWindWeaponChoiceState("blade");
            setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount - 16)
            setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount - 10)
            setmubWiABlOriCountState(mubWiABlOriCount - 1)
            setmubWiABlRupeeCost(mubWiABlRupeeCost - 2.5)
        }
        else if (windBladeWyrmprintSlotState == "grayscale(0%)") {
            setWindBladeWyrmprintSlotState("grayscale(100%)");
            setWindWeaponChoiceState("blade");
            setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount + 16)
            setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount + 10)
            setmubWiABlOriCountState(mubWiABlOriCount + 1)
            setmubWiABlRupeeCost(mubWiABlRupeeCost + 2.5)
        }
    }

    function handleWindBladeUnbindIncrement(event) {
        setWindWeaponChoiceState("blade")
        if (windBladeUnbindState < event.target.value) {
            if (event.target.value - windBladeUnbindState == 1) {
                setWindBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount - 40)
                    setwbWiABlSilverMaskCountState(wbWiABlSilverMaskCount - 40)
                    setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount - 30)
                    setwbWiABlGoldMaskCountState(wbWiABlGoldMaskCount - 30)
                    setmubWiABlSandCountState(mubWiABlSandCount - 1)
                    setwbWiABlSandCountState(wbWiABlSandCount - 1)
                    setmubWiABlRupeeCost(mubWiABlRupeeCost - 2)
                    setwbWiABlRupeeCost(wbWiABlRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount - 16)
                    setwbWiABlSilverMaskCountState(wbWiABlSilverMaskCount - 16)
                    setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount - 10)
                    setwbWiABlGoldMaskCountState(wbWiABlGoldMaskCount - 10)
                    setmubWiABlInsanityCountState(mubWiABlInsanityCount - 7)
                    setwbWiABlInsanityCountState(wbWiABlInsanityCount - 7)
                    setmubWiABlOriCountState(mubWiABlOriCount - 1)
                    setwbWiABlOriCountState(wbWiABlOriCount - 1)
                    setmubWiABlRupeeCost(mubWiABlRupeeCost - 7.5)
                    setwbWiABlRupeeCost(wbWiABlRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount - 16)
                    setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount - 10)
                    setmubWiABlInsanityCountState(mubWiABlInsanityCount - 7)
                    setmubWiABlOriCountState(mubWiABlOriCount - 1)
                    setmubWiABlRupeeCost(mubWiABlRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount - 80)
                    setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount - 70)
                    setmubWiABlInsanityCountState(mubWiABlInsanityCount - 30)
                    setmubWiABlGaleCountState(mubWiABlGaleCount - 20)
                    setmubWiABlOriCountState(mubWiABlOriCount - 20)
                    setmubWiABlRupeeCost(mubWiABlRupeeCost - 2)
                }
            }
        }
        else if (windBladeUnbindState > event.target.value) {
            if (windBladeUnbindState - event.target.value == 1) {
                setWindBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount + 40)
                    setwbWiABlSilverMaskCountState(wbWiABlSilverMaskCount + 40)
                    setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount + 30)
                    setwbWiABlGoldMaskCountState(wbWiABlGoldMaskCount + 30)
                    setmubWiABlSandCountState(mubWiABlSandCount + 1)
                    setwbWiABlSandCountState(wbWiABlSandCount + 1)
                    setmubWiABlRupeeCost(mubWiABlRupeeCost + 2)
                    setwbWiABlRupeeCost(wbWiABlRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount + 16)
                    setwbWiABlSilverMaskCountState(wbWiABlSilverMaskCount + 16)
                    setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount + 10)
                    setwbWiABlGoldMaskCountState(wbWiABlGoldMaskCount + 10)
                    setmubWiABlInsanityCountState(mubWiABlInsanityCount + 7)
                    setwbWiABlInsanityCountState(wbWiABlInsanityCount + 7)
                    setmubWiABlOriCountState(mubWiABlOriCount + 1)
                    setwbWiABlOriCountState(wbWiABlOriCount + 1)
                    setmubWiABlRupeeCost(mubWiABlRupeeCost + 7.5)
                    setwbWiABlRupeeCost(wbWiABlRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount + 16)
                    setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount + 10)
                    setmubWiABlInsanityCountState(mubWiABlInsanityCount + 7)
                    setmubWiABlOriCountState(mubWiABlOriCount + 1)
                    setmubWiABlRupeeCost(mubWiABlRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount + 80)
                    setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount + 70)
                    setmubWiABlInsanityCountState(mubWiABlInsanityCount + 30)
                    setmubWiABlGaleCountState(mubWiABlGaleCount + 20)
                    setmubWiABlOriCountState(mubWiABlOriCount + 20)
                    setmubWiABlRupeeCost(mubWiABlRupeeCost + 2)
                }
            }
        }
    }

    function handleWindBladeRefineIncrement(event) {
        setWindWeaponChoiceState("blade");
        if (windBladeRefineState < event.target.value) {
            if (event.target.value - windBladeRefineState == 1) {
                setWindBladeRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount - 16);
                    setwbWiABlSilverMaskCountState(wbWiABlSilverMaskCount - 16);
                    setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount - 10);
                    setwbWiABlGoldMaskCountState(wbWiABlGoldMaskCount - 10);
                    setmubWiABlInsanityCountState(mubWiABlInsanityCount - 7);
                    setwbWiABlInsanityCountState(wbWiABlInsanityCount - 7);
                    setmubWiABlOriCountState(mubWiABlOriCount - 1);
                    setwbWiABlOriCountState(wbWiABlOriCount - 1);
                    setmubWiABlRupeeCost(mubWiABlRupeeCost - 2.5);
                    setwbWiABlRupeeCost(wbWiABlRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount - 40)
                    setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount - 30);
                    setmubWiABlInsanityCountState(mubWiABlInsanityCount - 10);
                    setmubWiABlGaleCountState(mubWiABlGaleCount - 10);
                    setmubWiABlOriCountState(mubWiABlOriCount - 10);
                    setmubWiABlRupeeCost(mubWiABlRupeeCost - 2.5);
                }
            }
        }
        else if (windBladeRefineState > event.target.value) {
            if (windBladeRefineState - event.target.value == 1) {
                setWindBladeRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount + 16);
                    setwbWiABlSilverMaskCountState(wbWiABlSilverMaskCount + 16);
                    setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount + 10);
                    setwbWiABlGoldMaskCountState(wbWiABlGoldMaskCount + 10);
                    setmubWiABlInsanityCountState(mubWiABlInsanityCount + 7);
                    setwbWiABlInsanityCountState(wbWiABlInsanityCount + 7);
                    setmubWiABlOriCountState(mubWiABlOriCount + 1);
                    setwbWiABlOriCountState(wbWiABlOriCount + 1);
                    setmubWiABlRupeeCost(mubWiABlRupeeCost + 2.5);
                    setwbWiABlRupeeCost(wbWiABlRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubWiABlSilverMaskCountState(mubWiABlSilverMaskCount + 40)
                    setmubWiABlGoldMaskCountState(mubWiABlGoldMaskCount + 30);
                    setmubWiABlInsanityCountState(mubWiABlInsanityCount + 10);
                    setmubWiABlGaleCountState(mubWiABlGaleCount + 10);
                    setmubWiABlOriCountState(mubWiABlOriCount + 10);
                    setmubWiABlRupeeCost(mubWiABlRupeeCost + 2.5);
                }
            }
        }
    }

    function craftWindDagger() {
        if (windDaggerCraftState == "grayscale(100%)") {
            setWindDaggerCraftState("grayscale(0%)")
            setWindWeaponChoiceState("dagger")
            setmubWiADSilverMaskCountState(mubWiADSilverMaskCount - 40)
            setwbWiADSilverMaskCountState(wbWiADSilverMaskCount - 40)
            setmubWiADGoldMaskCountState(mubWiADGoldMaskCount - 30)
            setwbWiADGoldMaskCountState(wbWiADGoldMaskCount - 30)
            setmubWiADSandCountState(mubWiADSandCount - 1)
            setwbWiADSandCountState(wbWiADSandCount - 1)
            setmubWiADRupeeCost(mubWiADRupeeCost - 2)
            setwbWiADRupeeCost(wbWiADRupeeCost - 2)
        }
        else if (windDaggerCraftState == "grayscale(0%)") {
            setWindDaggerCraftState("grayscale(100%)")
            setWindWeaponChoiceState("dagger")
            setmubWiADSilverMaskCountState(mubWiADSilverMaskCount + 40)
            setwbWiADSilverMaskCountState(wbWiADSilverMaskCount + 40)
            setmubWiADGoldMaskCountState(mubWiADGoldMaskCount + 30)
            setwbWiADGoldMaskCountState(wbWiADGoldMaskCount + 30)
            setmubWiADSandCountState(mubWiADSandCount + 1)
            setwbWiADSandCountState(wbWiADSandCount + 1)
            setmubWiADRupeeCost(mubWiADRupeeCost + 2)
            setwbWiADRupeeCost(wbWiADRupeeCost + 2)
        }
    }

    function windDaggerWeaponBonus() {
        if (windDaggerWeaponBonusState == "grayscale(100%)") {
            setWindDaggerWeaponBonusState("grayscale(0%)");
            setWindWeaponChoiceState("dagger");
            setmubWiADSilverMaskCountState(mubWiADSilverMaskCount - 100)
            setwbWiADSilverMaskCountState(wbWiADSilverMaskCount - 100)
            setmubWiADGoldMaskCountState(mubWiADGoldMaskCount - 100)
            setwbWiADGoldMaskCountState(wbWiADGoldMaskCount - 100)
            setmubWiADInsanityCountState(mubWiADInsanityCount - 14)
            setwbWiADInsanityCountState(wbWiADInsanityCount - 14)
            setmubWiADOriCountState(mubWiADOriCount - 30)
            setwbWiADOriCountState(wbWiADOriCount - 30)
            setmubWiADRupeeCost(mubWiADRupeeCost - 10)
            setwbWiADRupeeCost(wbWiADRupeeCost - 10)
        }
        else if (windDaggerWeaponBonusState == "grayscale(0%)") {
            setWindDaggerWeaponBonusState("grayscale(100%)");
            setWindWeaponChoiceState("dagger");
            setmubWiADSilverMaskCountState(mubWiADSilverMaskCount + 100)
            setwbWiADSilverMaskCountState(wbWiADSilverMaskCount + 100)
            setmubWiADGoldMaskCountState(mubWiADGoldMaskCount + 100)
            setwbWiADGoldMaskCountState(wbWiADGoldMaskCount + 100)
            setmubWiADInsanityCountState(mubWiADInsanityCount + 14)
            setwbWiADInsanityCountState(wbWiADInsanityCount + 14)
            setmubWiADOriCountState(mubWiADOriCount + 30)
            setwbWiADOriCountState(wbWiADOriCount + 30)
            setmubWiADRupeeCost(mubWiADRupeeCost + 10)
            setwbWiADRupeeCost(wbWiADRupeeCost + 10)
        }
    }

    function windDaggerWyrmprintSlot() {
        if (windDaggerWyrmprintSlotState == "grayscale(100%)") {
            setWindDaggerWyrmprintSlotState("grayscale(0%)");
            setWindWeaponChoiceState("dagger");
            setmubWiADSilverMaskCountState(mubWiADSilverMaskCount - 16)
            setmubWiADGoldMaskCountState(mubWiADGoldMaskCount - 10)
            setmubWiADOriCountState(mubWiADOriCount - 1)
            setmubWiADRupeeCost(mubWiADRupeeCost - 2.5)
        }
        else if (windDaggerWyrmprintSlotState == "grayscale(0%)") {
            setWindDaggerWyrmprintSlotState("grayscale(100%)");
            setWindWeaponChoiceState("dagger");
            setmubWiADSilverMaskCountState(mubWiADSilverMaskCount + 16)
            setmubWiADGoldMaskCountState(mubWiADGoldMaskCount + 10)
            setmubWiADOriCountState(mubWiADOriCount + 1)
            setmubWiADRupeeCost(mubWiADRupeeCost + 2.5)
        }
    }

    function handleWindDaggerUnbindIncrement(event) {
        setWindWeaponChoiceState("dagger")
        if (windDaggerUnbindState < event.target.value) {
            if (event.target.value - windDaggerUnbindState == 1) {
                setWindDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWiADSilverMaskCountState(mubWiADSilverMaskCount - 40)
                    setwbWiADSilverMaskCountState(wbWiADSilverMaskCount - 40)
                    setmubWiADGoldMaskCountState(mubWiADGoldMaskCount - 30)
                    setwbWiADGoldMaskCountState(wbWiADGoldMaskCount - 30)
                    setmubWiADSandCountState(mubWiADSandCount - 1)
                    setwbWiADSandCountState(wbWiADSandCount - 1)
                    setmubWiADRupeeCost(mubWiADRupeeCost - 2)
                    setwbWiADRupeeCost(wbWiADRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWiADSilverMaskCountState(mubWiADSilverMaskCount - 16)
                    setwbWiADSilverMaskCountState(wbWiADSilverMaskCount - 16)
                    setmubWiADGoldMaskCountState(mubWiADGoldMaskCount - 10)
                    setwbWiADGoldMaskCountState(wbWiADGoldMaskCount - 10)
                    setmubWiADInsanityCountState(mubWiADInsanityCount - 7)
                    setwbWiADInsanityCountState(wbWiADInsanityCount - 7)
                    setmubWiADOriCountState(mubWiADOriCount - 1)
                    setwbWiADOriCountState(wbWiADOriCount - 1)
                    setmubWiADRupeeCost(mubWiADRupeeCost - 7.5)
                    setwbWiADRupeeCost(wbWiADRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWiADSilverMaskCountState(mubWiADSilverMaskCount - 16)
                    setmubWiADGoldMaskCountState(mubWiADGoldMaskCount - 10)
                    setmubWiADInsanityCountState(mubWiADInsanityCount - 7)
                    setmubWiADOriCountState(mubWiADOriCount - 1)
                    setmubWiADRupeeCost(mubWiADRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWiADSilverMaskCountState(mubWiADSilverMaskCount - 80)
                    setmubWiADGoldMaskCountState(mubWiADGoldMaskCount - 70)
                    setmubWiADInsanityCountState(mubWiADInsanityCount - 30)
                    setmubWiADGaleCountState(mubWiADGaleCount - 20)
                    setmubWiADOriCountState(mubWiADOriCount - 20)
                    setmubWiADRupeeCost(mubWiADRupeeCost - 2)
                }
            }
        }
        else if (windDaggerUnbindState > event.target.value) {
            if (windDaggerUnbindState - event.target.value == 1) {
                setWindDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWiADSilverMaskCountState(mubWiADSilverMaskCount + 40)
                    setwbWiADSilverMaskCountState(wbWiADSilverMaskCount + 40)
                    setmubWiADGoldMaskCountState(mubWiADGoldMaskCount + 30)
                    setwbWiADGoldMaskCountState(wbWiADGoldMaskCount + 30)
                    setmubWiADSandCountState(mubWiADSandCount + 1)
                    setwbWiADSandCountState(wbWiADSandCount + 1)
                    setmubWiADRupeeCost(mubWiADRupeeCost + 2)
                    setwbWiADRupeeCost(wbWiADRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWiADSilverMaskCountState(mubWiADSilverMaskCount + 16)
                    setwbWiADSilverMaskCountState(wbWiADSilverMaskCount + 16)
                    setmubWiADGoldMaskCountState(mubWiADGoldMaskCount + 10)
                    setwbWiADGoldMaskCountState(wbWiADGoldMaskCount + 10)
                    setmubWiADInsanityCountState(mubWiADInsanityCount + 7)
                    setwbWiADInsanityCountState(wbWiADInsanityCount + 7)
                    setmubWiADOriCountState(mubWiADOriCount + 1)
                    setwbWiADOriCountState(wbWiADOriCount + 1)
                    setmubWiADRupeeCost(mubWiADRupeeCost + 7.5)
                    setwbWiADRupeeCost(wbWiADRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWiADSilverMaskCountState(mubWiADSilverMaskCount + 16)
                    setmubWiADGoldMaskCountState(mubWiADGoldMaskCount + 10)
                    setmubWiADInsanityCountState(mubWiADInsanityCount + 7)
                    setmubWiADOriCountState(mubWiADOriCount + 1)
                    setmubWiADRupeeCost(mubWiADRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWiADSilverMaskCountState(mubWiADSilverMaskCount + 80)
                    setmubWiADGoldMaskCountState(mubWiADGoldMaskCount + 70)
                    setmubWiADInsanityCountState(mubWiADInsanityCount + 30)
                    setmubWiADGaleCountState(mubWiADGaleCount + 20)
                    setmubWiADOriCountState(mubWiADOriCount + 20)
                    setmubWiADRupeeCost(mubWiADRupeeCost + 2)
                }
            }
        }
    }

    function handleWindDaggerRefineIncrement(event) {
        setWindWeaponChoiceState("dagger");
        if (windDaggerRefineState < event.target.value) {
            if (event.target.value - windDaggerRefineState == 1) {
                setWindDaggerRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWiADSilverMaskCountState(mubWiADSilverMaskCount - 16);
                    setwbWiADSilverMaskCountState(wbWiADSilverMaskCount - 16);
                    setmubWiADGoldMaskCountState(mubWiADGoldMaskCount - 10);
                    setwbWiADGoldMaskCountState(wbWiADGoldMaskCount - 10);
                    setmubWiADInsanityCountState(mubWiADInsanityCount - 7);
                    setwbWiADInsanityCountState(wbWiADInsanityCount - 7);
                    setmubWiADOriCountState(mubWiADOriCount - 1);
                    setwbWiADOriCountState(wbWiADOriCount - 1);
                    setmubWiADRupeeCost(mubWiADRupeeCost - 2.5);
                    setwbWiADRupeeCost(wbWiADRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubWiADSilverMaskCountState(mubWiADSilverMaskCount - 40)
                    setmubWiADGoldMaskCountState(mubWiADGoldMaskCount - 30);
                    setmubWiADInsanityCountState(mubWiADInsanityCount - 10);
                    setmubWiADGaleCountState(mubWiADGaleCount - 10);
                    setmubWiADOriCountState(mubWiADOriCount - 10);
                    setmubWiADRupeeCost(mubWiADRupeeCost - 2.5);
                }
            }
        }
        else if (windDaggerRefineState > event.target.value) {
            if (windDaggerRefineState - event.target.value == 1) {
                setWindDaggerRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWiADSilverMaskCountState(mubWiADSilverMaskCount + 16);
                    setwbWiADSilverMaskCountState(wbWiADSilverMaskCount + 16);
                    setmubWiADGoldMaskCountState(mubWiADGoldMaskCount + 10);
                    setwbWiADGoldMaskCountState(wbWiADGoldMaskCount + 10);
                    setmubWiADInsanityCountState(mubWiADInsanityCount + 7);
                    setwbWiADInsanityCountState(wbWiADInsanityCount + 7);
                    setmubWiADOriCountState(mubWiADOriCount + 1);
                    setwbWiADOriCountState(wbWiADOriCount + 1);
                    setmubWiADRupeeCost(mubWiADRupeeCost + 2.5);
                    setwbWiADRupeeCost(wbWiADRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubWiADSilverMaskCountState(mubWiADSilverMaskCount + 40)
                    setmubWiADGoldMaskCountState(mubWiADGoldMaskCount + 30);
                    setmubWiADInsanityCountState(mubWiADInsanityCount + 10);
                    setmubWiADGaleCountState(mubWiADGaleCount + 10);
                    setmubWiADOriCountState(mubWiADOriCount + 10);
                    setmubWiADRupeeCost(mubWiADRupeeCost + 2.5);
                }
            }
        }
    }

    function craftWindAxe() {
        if (windAxeCraftState == "grayscale(100%)") {
            setWindAxeCraftState("grayscale(0%)")
            setWindWeaponChoiceState("axe")
            setmubWiAASilverMaskCountState(mubWiAASilverMaskCount - 40)
            setwbWiAASilverMaskCountState(wbWiAASilverMaskCount - 40)
            setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount - 30)
            setwbWiAAGoldMaskCountState(wbWiAAGoldMaskCount - 30)
            setmubWiAASandCountState(mubWiAASandCount - 1)
            setwbWiAASandCountState(wbWiAASandCount - 1)
            setmubWiAARupeeCost(mubWiAARupeeCost - 2)
            setwbWiAARupeeCost(wbWiAARupeeCost - 2)
        }
        else if (windAxeCraftState == "grayscale(0%)") {
            setWindAxeCraftState("grayscale(100%)")
            setWindWeaponChoiceState("axe")
            setmubWiAASilverMaskCountState(mubWiAASilverMaskCount + 40)
            setwbWiAASilverMaskCountState(wbWiAASilverMaskCount + 40)
            setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount + 30)
            setwbWiAAGoldMaskCountState(wbWiAAGoldMaskCount + 30)
            setmubWiAASandCountState(mubWiAASandCount + 1)
            setwbWiAASandCountState(wbWiAASandCount + 1)
            setmubWiAARupeeCost(mubWiAARupeeCost + 2)
            setwbWiAARupeeCost(wbWiAARupeeCost + 2)
        }
    }

    function windAxeWeaponBonus() {
        if (windAxeWeaponBonusState == "grayscale(100%)") {
            setWindAxeWeaponBonusState("grayscale(0%)");
            setWindWeaponChoiceState("axe");
            setmubWiAASilverMaskCountState(mubWiAASilverMaskCount - 100)
            setwbWiAASilverMaskCountState(wbWiAASilverMaskCount - 100)
            setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount - 100)
            setwbWiAAGoldMaskCountState(wbWiAAGoldMaskCount - 100)
            setmubWiAAInsanityCountState(mubWiAAInsanityCount - 14)
            setwbWiAAInsanityCountState(wbWiAAInsanityCount - 14)
            setmubWiAAOriCountState(mubWiAAOriCount - 30)
            setwbWiAAOriCountState(wbWiAAOriCount - 30)
            setmubWiAARupeeCost(mubWiAARupeeCost - 10)
            setwbWiAARupeeCost(wbWiAARupeeCost - 10)
        }
        else if (windAxeWeaponBonusState == "grayscale(0%)") {
            setWindAxeWeaponBonusState("grayscale(100%)");
            setWindWeaponChoiceState("axe");
            setmubWiAASilverMaskCountState(mubWiAASilverMaskCount + 100)
            setwbWiAASilverMaskCountState(wbWiAASilverMaskCount + 100)
            setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount + 100)
            setwbWiAAGoldMaskCountState(wbWiAAGoldMaskCount + 100)
            setmubWiAAInsanityCountState(mubWiAAInsanityCount + 14)
            setwbWiAAInsanityCountState(wbWiAAInsanityCount + 14)
            setmubWiAAOriCountState(mubWiAAOriCount + 30)
            setwbWiAAOriCountState(wbWiAAOriCount + 30)
            setmubWiAARupeeCost(mubWiAARupeeCost + 10)
            setwbWiAARupeeCost(wbWiAARupeeCost + 10)
        }
    }

    function windAxeWyrmprintSlot() {
        if (windAxeWyrmprintSlotState == "grayscale(100%)") {
            setWindAxeWyrmprintSlotState("grayscale(0%)");
            setWindWeaponChoiceState("axe");
            setmubWiAASilverMaskCountState(mubWiAASilverMaskCount - 16)
            setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount - 10)
            setmubWiAAOriCountState(mubWiAAOriCount - 1)
            setmubWiAARupeeCost(mubWiAARupeeCost - 2.5)
        }
        else if (windAxeWyrmprintSlotState == "grayscale(0%)") {
            setWindAxeWyrmprintSlotState("grayscale(100%)");
            setWindWeaponChoiceState("axe");
            setmubWiAASilverMaskCountState(mubWiAASilverMaskCount + 16)
            setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount + 10)
            setmubWiAAOriCountState(mubWiAAOriCount + 1)
            setmubWiAARupeeCost(mubWiAARupeeCost + 2.5)
        }
    }

    function handleWindAxeUnbindIncrement(event) {
        setWindWeaponChoiceState("axe")
        if (windAxeUnbindState < event.target.value) {
            if (event.target.value - windAxeUnbindState == 1) {
                setWindAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWiAASilverMaskCountState(mubWiAASilverMaskCount - 40)
                    setwbWiAASilverMaskCountState(wbWiAASilverMaskCount - 40)
                    setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount - 30)
                    setwbWiAAGoldMaskCountState(wbWiAAGoldMaskCount - 30)
                    setmubWiAASandCountState(mubWiAASandCount - 1)
                    setwbWiAASandCountState(wbWiAASandCount - 1)
                    setmubWiAARupeeCost(mubWiAARupeeCost - 2)
                    setwbWiAARupeeCost(wbWiAARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWiAASilverMaskCountState(mubWiAASilverMaskCount - 16)
                    setwbWiAASilverMaskCountState(wbWiAASilverMaskCount - 16)
                    setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount - 10)
                    setwbWiAAGoldMaskCountState(wbWiAAGoldMaskCount - 10)
                    setmubWiAAInsanityCountState(mubWiAAInsanityCount - 7)
                    setwbWiAAInsanityCountState(wbWiAAInsanityCount - 7)
                    setmubWiAAOriCountState(mubWiAAOriCount - 1)
                    setwbWiAAOriCountState(wbWiAAOriCount - 1)
                    setmubWiAARupeeCost(mubWiAARupeeCost - 7.5)
                    setwbWiAARupeeCost(wbWiAARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWiAASilverMaskCountState(mubWiAASilverMaskCount - 16)
                    setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount - 10)
                    setmubWiAAInsanityCountState(mubWiAAInsanityCount - 7)
                    setmubWiAAOriCountState(mubWiAAOriCount - 1)
                    setmubWiAARupeeCost(mubWiAARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWiAASilverMaskCountState(mubWiAASilverMaskCount - 80)
                    setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount - 70)
                    setmubWiAAInsanityCountState(mubWiAAInsanityCount - 30)
                    setmubWiAAGaleCountState(mubWiAAGaleCount - 20)
                    setmubWiAAOriCountState(mubWiAAOriCount - 20)
                    setmubWiAARupeeCost(mubWiAARupeeCost - 2)
                }
            }
        }
        else if (windAxeUnbindState > event.target.value) {
            if (windAxeUnbindState - event.target.value == 1) {
                setWindAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWiAASilverMaskCountState(mubWiAASilverMaskCount + 40)
                    setwbWiAASilverMaskCountState(wbWiAASilverMaskCount + 40)
                    setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount + 30)
                    setwbWiAAGoldMaskCountState(wbWiAAGoldMaskCount + 30)
                    setmubWiAASandCountState(mubWiAASandCount + 1)
                    setwbWiAASandCountState(wbWiAASandCount + 1)
                    setmubWiAARupeeCost(mubWiAARupeeCost + 2)
                    setwbWiAARupeeCost(wbWiAARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWiAASilverMaskCountState(mubWiAASilverMaskCount + 16)
                    setwbWiAASilverMaskCountState(wbWiAASilverMaskCount + 16)
                    setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount + 10)
                    setwbWiAAGoldMaskCountState(wbWiAAGoldMaskCount + 10)
                    setmubWiAAInsanityCountState(mubWiAAInsanityCount + 7)
                    setwbWiAAInsanityCountState(wbWiAAInsanityCount + 7)
                    setmubWiAAOriCountState(mubWiAAOriCount + 1)
                    setwbWiAAOriCountState(wbWiAAOriCount + 1)
                    setmubWiAARupeeCost(mubWiAARupeeCost + 7.5)
                    setwbWiAARupeeCost(wbWiAARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWiAASilverMaskCountState(mubWiAASilverMaskCount + 16)
                    setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount + 10)
                    setmubWiAAInsanityCountState(mubWiAAInsanityCount + 7)
                    setmubWiAAOriCountState(mubWiAAOriCount + 1)
                    setmubWiAARupeeCost(mubWiAARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWiAASilverMaskCountState(mubWiAASilverMaskCount + 80)
                    setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount + 70)
                    setmubWiAAInsanityCountState(mubWiAAInsanityCount + 30)
                    setmubWiAAGaleCountState(mubWiAAGaleCount + 20)
                    setmubWiAAOriCountState(mubWiAAOriCount + 20)
                    setmubWiAARupeeCost(mubWiAARupeeCost + 2)
                }
            }
        }
    }

    function handleWindAxeRefineIncrement(event) {
        setWindWeaponChoiceState("axe");
        if (windAxeRefineState < event.target.value) {
            if (event.target.value - windAxeRefineState == 1) {
                setWindAxeRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWiAASilverMaskCountState(mubWiAASilverMaskCount - 16);
                    setwbWiAASilverMaskCountState(wbWiAASilverMaskCount - 16);
                    setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount - 10);
                    setwbWiAAGoldMaskCountState(wbWiAAGoldMaskCount - 10);
                    setmubWiAAInsanityCountState(mubWiAAInsanityCount - 7);
                    setwbWiAAInsanityCountState(wbWiAAInsanityCount - 7);
                    setmubWiAAOriCountState(mubWiAAOriCount - 1);
                    setwbWiAAOriCountState(wbWiAAOriCount - 1);
                    setmubWiAARupeeCost(mubWiAARupeeCost - 2.5);
                    setwbWiAARupeeCost(wbWiAARupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubWiAASilverMaskCountState(mubWiAASilverMaskCount - 40)
                    setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount - 30);
                    setmubWiAAInsanityCountState(mubWiAAInsanityCount - 10);
                    setmubWiAAGaleCountState(mubWiAAGaleCount - 10);
                    setmubWiAAOriCountState(mubWiAAOriCount - 10);
                    setmubWiAARupeeCost(mubWiAARupeeCost - 2.5);
                }
            }
        }
        else if (windAxeRefineState > event.target.value) {
            if (windAxeRefineState - event.target.value == 1) {
                setWindAxeRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWiAASilverMaskCountState(mubWiAASilverMaskCount + 16);
                    setwbWiAASilverMaskCountState(wbWiAASilverMaskCount + 16);
                    setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount + 10);
                    setwbWiAAGoldMaskCountState(wbWiAAGoldMaskCount + 10);
                    setmubWiAAInsanityCountState(mubWiAAInsanityCount + 7);
                    setwbWiAAInsanityCountState(wbWiAAInsanityCount + 7);
                    setmubWiAAOriCountState(mubWiAAOriCount + 1);
                    setwbWiAAOriCountState(wbWiAAOriCount + 1);
                    setmubWiAARupeeCost(mubWiAARupeeCost + 2.5);
                    setwbWiAARupeeCost(wbWiAARupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubWiAASilverMaskCountState(mubWiAASilverMaskCount + 40)
                    setmubWiAAGoldMaskCountState(mubWiAAGoldMaskCount + 30);
                    setmubWiAAInsanityCountState(mubWiAAInsanityCount + 10);
                    setmubWiAAGaleCountState(mubWiAAGaleCount + 10);
                    setmubWiAAOriCountState(mubWiAAOriCount + 10);
                    setmubWiAARupeeCost(mubWiAARupeeCost + 2.5);
                }
            }
        }
    }

    function craftWindLance() {
        if (windLanceCraftState == "grayscale(100%)") {
            setWindLanceCraftState("grayscale(0%)")
            setWindWeaponChoiceState("lance")
            setmubWiALSilverMaskCountState(mubWiALSilverMaskCount - 40)
            setwbWiALSilverMaskCountState(wbWiALSilverMaskCount - 40)
            setmubWiALGoldMaskCountState(mubWiALGoldMaskCount - 30)
            setwbWiALGoldMaskCountState(wbWiALGoldMaskCount - 30)
            setmubWiALSandCountState(mubWiALSandCount - 1)
            setwbWiALSandCountState(wbWiALSandCount - 1)
            setmubWiALRupeeCost(mubWiALRupeeCost - 2)
            setwbWiALRupeeCost(wbWiALRupeeCost - 2)
        }
        else if (windLanceCraftState == "grayscale(0%)") {
            setWindLanceCraftState("grayscale(100%)")
            setWindWeaponChoiceState("lance")
            setmubWiALSilverMaskCountState(mubWiALSilverMaskCount + 40)
            setwbWiALSilverMaskCountState(wbWiALSilverMaskCount + 40)
            setmubWiALGoldMaskCountState(mubWiALGoldMaskCount + 30)
            setwbWiALGoldMaskCountState(wbWiALGoldMaskCount + 30)
            setmubWiALSandCountState(mubWiALSandCount + 1)
            setwbWiALSandCountState(wbWiALSandCount + 1)
            setmubWiALRupeeCost(mubWiALRupeeCost + 2)
            setwbWiALRupeeCost(wbWiALRupeeCost + 2)
        }
    }

    function windLanceWeaponBonus() {
        if (windLanceWeaponBonusState == "grayscale(100%)") {
            setWindLanceWeaponBonusState("grayscale(0%)");
            setWindWeaponChoiceState("lance");
            setmubWiALSilverMaskCountState(mubWiALSilverMaskCount - 100)
            setwbWiALSilverMaskCountState(wbWiALSilverMaskCount - 100)
            setmubWiALGoldMaskCountState(mubWiALGoldMaskCount - 100)
            setwbWiALGoldMaskCountState(wbWiALGoldMaskCount - 100)
            setmubWiALInsanityCountState(mubWiALInsanityCount - 14)
            setwbWiALInsanityCountState(wbWiALInsanityCount - 14)
            setmubWiALOriCountState(mubWiALOriCount - 30)
            setwbWiALOriCountState(wbWiALOriCount - 30)
            setmubWiALRupeeCost(mubWiALRupeeCost - 10)
            setwbWiALRupeeCost(wbWiALRupeeCost - 10)
        }
        else if (windLanceWeaponBonusState == "grayscale(0%)") {
            setWindLanceWeaponBonusState("grayscale(100%)");
            setWindWeaponChoiceState("lance");
            setmubWiALSilverMaskCountState(mubWiALSilverMaskCount + 100)
            setwbWiALSilverMaskCountState(wbWiALSilverMaskCount + 100)
            setmubWiALGoldMaskCountState(mubWiALGoldMaskCount + 100)
            setwbWiALGoldMaskCountState(wbWiALGoldMaskCount + 100)
            setmubWiALInsanityCountState(mubWiALInsanityCount + 14)
            setwbWiALInsanityCountState(wbWiALInsanityCount + 14)
            setmubWiALOriCountState(mubWiALOriCount + 30)
            setwbWiALOriCountState(wbWiALOriCount + 30)
            setmubWiALRupeeCost(mubWiALRupeeCost + 10)
            setwbWiALRupeeCost(wbWiALRupeeCost + 10)
        }
    }

    function windLanceWyrmprintSlot() {
        if (windLanceWyrmprintSlotState == "grayscale(100%)") {
            setWindLanceWyrmprintSlotState("grayscale(0%)");
            setWindWeaponChoiceState("lance");
            setmubWiALSilverMaskCountState(mubWiALSilverMaskCount - 16)
            setmubWiALGoldMaskCountState(mubWiALGoldMaskCount - 10)
            setmubWiALOriCountState(mubWiALOriCount - 1)
            setmubWiALRupeeCost(mubWiALRupeeCost - 2.5)
        }
        else if (windLanceWyrmprintSlotState == "grayscale(0%)") {
            setWindLanceWyrmprintSlotState("grayscale(100%)");
            setWindWeaponChoiceState("lance");
            setmubWiALSilverMaskCountState(mubWiALSilverMaskCount + 16)
            setmubWiALGoldMaskCountState(mubWiALGoldMaskCount + 10)
            setmubWiALOriCountState(mubWiALOriCount + 1)
            setmubWiALRupeeCost(mubWiALRupeeCost + 2.5)
        }
    }

    function handleWindLanceUnbindIncrement(event) {
        setWindWeaponChoiceState("lance")
        if (windLanceUnbindState < event.target.value) {
            if (event.target.value - windLanceUnbindState == 1) {
                setWindLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWiALSilverMaskCountState(mubWiALSilverMaskCount - 40)
                    setwbWiALSilverMaskCountState(wbWiALSilverMaskCount - 40)
                    setmubWiALGoldMaskCountState(mubWiALGoldMaskCount - 30)
                    setwbWiALGoldMaskCountState(wbWiALGoldMaskCount - 30)
                    setmubWiALSandCountState(mubWiALSandCount - 1)
                    setwbWiALSandCountState(wbWiALSandCount - 1)
                    setmubWiALRupeeCost(mubWiALRupeeCost - 2)
                    setwbWiALRupeeCost(wbWiALRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWiALSilverMaskCountState(mubWiALSilverMaskCount - 16)
                    setwbWiALSilverMaskCountState(wbWiALSilverMaskCount - 16)
                    setmubWiALGoldMaskCountState(mubWiALGoldMaskCount - 10)
                    setwbWiALGoldMaskCountState(wbWiALGoldMaskCount - 10)
                    setmubWiALInsanityCountState(mubWiALInsanityCount - 7)
                    setwbWiALInsanityCountState(wbWiALInsanityCount - 7)
                    setmubWiALOriCountState(mubWiALOriCount - 1)
                    setwbWiALOriCountState(wbWiALOriCount - 1)
                    setmubWiALRupeeCost(mubWiALRupeeCost - 7.5)
                    setwbWiALRupeeCost(wbWiALRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWiALSilverMaskCountState(mubWiALSilverMaskCount - 16)
                    setmubWiALGoldMaskCountState(mubWiALGoldMaskCount - 10)
                    setmubWiALInsanityCountState(mubWiALInsanityCount - 7)
                    setmubWiALOriCountState(mubWiALOriCount - 1)
                    setmubWiALRupeeCost(mubWiALRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWiALSilverMaskCountState(mubWiALSilverMaskCount - 80)
                    setmubWiALGoldMaskCountState(mubWiALGoldMaskCount - 70)
                    setmubWiALInsanityCountState(mubWiALInsanityCount - 30)
                    setmubWiALGaleCountState(mubWiALGaleCount - 20)
                    setmubWiALOriCountState(mubWiALOriCount - 20)
                    setmubWiALRupeeCost(mubWiALRupeeCost - 2)
                }
            }
        }
        else if (windLanceUnbindState > event.target.value) {
            if (windLanceUnbindState - event.target.value == 1) {
                setWindLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWiALSilverMaskCountState(mubWiALSilverMaskCount + 40)
                    setwbWiALSilverMaskCountState(wbWiALSilverMaskCount + 40)
                    setmubWiALGoldMaskCountState(mubWiALGoldMaskCount + 30)
                    setwbWiALGoldMaskCountState(wbWiALGoldMaskCount + 30)
                    setmubWiALSandCountState(mubWiALSandCount + 1)
                    setwbWiALSandCountState(wbWiALSandCount + 1)
                    setmubWiALRupeeCost(mubWiALRupeeCost + 2)
                    setwbWiALRupeeCost(wbWiALRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWiALSilverMaskCountState(mubWiALSilverMaskCount + 16)
                    setwbWiALSilverMaskCountState(wbWiALSilverMaskCount + 16)
                    setmubWiALGoldMaskCountState(mubWiALGoldMaskCount + 10)
                    setwbWiALGoldMaskCountState(wbWiALGoldMaskCount + 10)
                    setmubWiALInsanityCountState(mubWiALInsanityCount + 7)
                    setwbWiALInsanityCountState(wbWiALInsanityCount + 7)
                    setmubWiALOriCountState(mubWiALOriCount + 1)
                    setwbWiALOriCountState(wbWiALOriCount + 1)
                    setmubWiALRupeeCost(mubWiALRupeeCost + 7.5)
                    setwbWiALRupeeCost(wbWiALRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWiALSilverMaskCountState(mubWiALSilverMaskCount + 16)
                    setmubWiALGoldMaskCountState(mubWiALGoldMaskCount + 10)
                    setmubWiALInsanityCountState(mubWiALInsanityCount + 7)
                    setmubWiALOriCountState(mubWiALOriCount + 1)
                    setmubWiALRupeeCost(mubWiALRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWiALSilverMaskCountState(mubWiALSilverMaskCount + 80)
                    setmubWiALGoldMaskCountState(mubWiALGoldMaskCount + 70)
                    setmubWiALInsanityCountState(mubWiALInsanityCount + 30)
                    setmubWiALGaleCountState(mubWiALGaleCount + 20)
                    setmubWiALOriCountState(mubWiALOriCount + 20)
                    setmubWiALRupeeCost(mubWiALRupeeCost + 2)
                }
            }
        }
    }

    function handleWindLanceRefineIncrement(event) {
        setWindWeaponChoiceState("lance");
        if (windLanceRefineState < event.target.value) {
            if (event.target.value - windLanceRefineState == 1) {
                setWindLanceRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWiALSilverMaskCountState(mubWiALSilverMaskCount - 16);
                    setwbWiALSilverMaskCountState(wbWiALSilverMaskCount - 16);
                    setmubWiALGoldMaskCountState(mubWiALGoldMaskCount - 10);
                    setwbWiALGoldMaskCountState(wbWiALGoldMaskCount - 10);
                    setmubWiALInsanityCountState(mubWiALInsanityCount - 7);
                    setwbWiALInsanityCountState(wbWiALInsanityCount - 7);
                    setmubWiALOriCountState(mubWiALOriCount - 1);
                    setwbWiALOriCountState(wbWiALOriCount - 1);
                    setmubWiALRupeeCost(mubWiALRupeeCost - 2.5);
                    setwbWiALRupeeCost(wbWiALRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubWiALSilverMaskCountState(mubWiALSilverMaskCount - 40)
                    setmubWiALGoldMaskCountState(mubWiALGoldMaskCount - 30);
                    setmubWiALInsanityCountState(mubWiALInsanityCount - 10);
                    setmubWiALGaleCountState(mubWiALGaleCount - 10);
                    setmubWiALOriCountState(mubWiALOriCount - 10);
                    setmubWiALRupeeCost(mubWiALRupeeCost - 2.5);
                }
            }
        }
        else if (windLanceRefineState > event.target.value) {
            if (windLanceRefineState - event.target.value == 1) {
                setWindLanceRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWiALSilverMaskCountState(mubWiALSilverMaskCount + 16);
                    setwbWiALSilverMaskCountState(wbWiALSilverMaskCount + 16);
                    setmubWiALGoldMaskCountState(mubWiALGoldMaskCount + 10);
                    setwbWiALGoldMaskCountState(wbWiALGoldMaskCount + 10);
                    setmubWiALInsanityCountState(mubWiALInsanityCount + 7);
                    setwbWiALInsanityCountState(wbWiALInsanityCount + 7);
                    setmubWiALOriCountState(mubWiALOriCount + 1);
                    setwbWiALOriCountState(wbWiALOriCount + 1);
                    setmubWiALRupeeCost(mubWiALRupeeCost + 2.5);
                    setwbWiALRupeeCost(wbWiALRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubWiALSilverMaskCountState(mubWiALSilverMaskCount + 40)
                    setmubWiALGoldMaskCountState(mubWiALGoldMaskCount + 30);
                    setmubWiALInsanityCountState(mubWiALInsanityCount + 10);
                    setmubWiALGaleCountState(mubWiALGaleCount + 10);
                    setmubWiALOriCountState(mubWiALOriCount + 10);
                    setmubWiALRupeeCost(mubWiALRupeeCost + 2.5);
                }
            }
        }
    }

    function craftWindWand() {
        if (windWandCraftState == "grayscale(100%)") {
            setWindWandCraftState("grayscale(0%)")
            setWindWeaponChoiceState("wand")
            setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount - 40)
            setwbWiAWSilverMaskCountState(wbWiAWSilverMaskCount - 40)
            setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount - 30)
            setwbWiAWGoldMaskCountState(wbWiAWGoldMaskCount - 30)
            setmubWiAWSandCountState(mubWiAWSandCount - 1)
            setwbWiAWSandCountState(wbWiAWSandCount - 1)
            setmubWiAWRupeeCost(mubWiAWRupeeCost - 2)
            setwbWiAWRupeeCost(wbWiAWRupeeCost - 2)
        }
        else if (windWandCraftState == "grayscale(0%)") {
            setWindWandCraftState("grayscale(100%)")
            setWindWeaponChoiceState("wand")
            setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount + 40)
            setwbWiAWSilverMaskCountState(wbWiAWSilverMaskCount + 40)
            setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount + 30)
            setwbWiAWGoldMaskCountState(wbWiAWGoldMaskCount + 30)
            setmubWiAWSandCountState(mubWiAWSandCount + 1)
            setwbWiAWSandCountState(wbWiAWSandCount + 1)
            setmubWiAWRupeeCost(mubWiAWRupeeCost + 2)
            setwbWiAWRupeeCost(wbWiAWRupeeCost + 2)
        }
    }

    function windWandWeaponBonus() {
        if (windWandWeaponBonusState == "grayscale(100%)") {
            setWindWandWeaponBonusState("grayscale(0%)");
            setWindWeaponChoiceState("wand");
            setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount - 100)
            setwbWiAWSilverMaskCountState(wbWiAWSilverMaskCount - 100)
            setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount - 100)
            setwbWiAWGoldMaskCountState(wbWiAWGoldMaskCount - 100)
            setmubWiAWInsanityCountState(mubWiAWInsanityCount - 14)
            setwbWiAWInsanityCountState(wbWiAWInsanityCount - 14)
            setmubWiAWOriCountState(mubWiAWOriCount - 30)
            setwbWiAWOriCountState(wbWiAWOriCount - 30)
            setmubWiAWRupeeCost(mubWiAWRupeeCost - 10)
            setwbWiAWRupeeCost(wbWiAWRupeeCost - 10)
        }
        else if (windWandWeaponBonusState == "grayscale(0%)") {
            setWindWandWeaponBonusState("grayscale(100%)");
            setWindWeaponChoiceState("wand");
            setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount + 100)
            setwbWiAWSilverMaskCountState(wbWiAWSilverMaskCount + 100)
            setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount + 100)
            setwbWiAWGoldMaskCountState(wbWiAWGoldMaskCount + 100)
            setmubWiAWInsanityCountState(mubWiAWInsanityCount + 14)
            setwbWiAWInsanityCountState(wbWiAWInsanityCount + 14)
            setmubWiAWOriCountState(mubWiAWOriCount + 30)
            setwbWiAWOriCountState(wbWiAWOriCount + 30)
            setmubWiAWRupeeCost(mubWiAWRupeeCost + 10)
            setwbWiAWRupeeCost(wbWiAWRupeeCost + 10)
        }
    }

    function windWandWyrmprintSlot() {
        if (windWandWyrmprintSlotState == "grayscale(100%)") {
            setWindWandWyrmprintSlotState("grayscale(0%)");
            setWindWeaponChoiceState("wand");
            setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount - 16)
            setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount - 10)
            setmubWiAWOriCountState(mubWiAWOriCount - 1)
            setmubWiAWRupeeCost(mubWiAWRupeeCost - 2.5)
        }
        else if (windWandWyrmprintSlotState == "grayscale(0%)") {
            setWindWandWyrmprintSlotState("grayscale(100%)");
            setWindWeaponChoiceState("wand");
            setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount + 16)
            setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount + 10)
            setmubWiAWOriCountState(mubWiAWOriCount + 1)
            setmubWiAWRupeeCost(mubWiAWRupeeCost + 2.5)
        }
    }

    function handleWindWandUnbindIncrement(event) {
        setWindWeaponChoiceState("wand")
        if (windWandUnbindState < event.target.value) {
            if (event.target.value - windWandUnbindState == 1) {
                setWindWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount - 40)
                    setwbWiAWSilverMaskCountState(wbWiAWSilverMaskCount - 40)
                    setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount - 30)
                    setwbWiAWGoldMaskCountState(wbWiAWGoldMaskCount - 30)
                    setmubWiAWSandCountState(mubWiAWSandCount - 1)
                    setwbWiAWSandCountState(wbWiAWSandCount - 1)
                    setmubWiAWRupeeCost(mubWiAWRupeeCost - 2)
                    setwbWiAWRupeeCost(wbWiAWRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount - 16)
                    setwbWiAWSilverMaskCountState(wbWiAWSilverMaskCount - 16)
                    setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount - 10)
                    setwbWiAWGoldMaskCountState(wbWiAWGoldMaskCount - 10)
                    setmubWiAWInsanityCountState(mubWiAWInsanityCount - 7)
                    setwbWiAWInsanityCountState(wbWiAWInsanityCount - 7)
                    setmubWiAWOriCountState(mubWiAWOriCount - 1)
                    setwbWiAWOriCountState(wbWiAWOriCount - 1)
                    setmubWiAWRupeeCost(mubWiAWRupeeCost - 7.5)
                    setwbWiAWRupeeCost(wbWiAWRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount - 16)
                    setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount - 10)
                    setmubWiAWInsanityCountState(mubWiAWInsanityCount - 7)
                    setmubWiAWOriCountState(mubWiAWOriCount - 1)
                    setmubWiAWRupeeCost(mubWiAWRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount - 80)
                    setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount - 70)
                    setmubWiAWInsanityCountState(mubWiAWInsanityCount - 30)
                    setmubWiAWGaleCountState(mubWiAWGaleCount - 20)
                    setmubWiAWOriCountState(mubWiAWOriCount - 20)
                    setmubWiAWRupeeCost(mubWiAWRupeeCost - 2)
                }
            }
        }
        else if (windWandUnbindState > event.target.value) {
            if (windWandUnbindState - event.target.value == 1) {
                setWindWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount + 40)
                    setwbWiAWSilverMaskCountState(wbWiAWSilverMaskCount + 40)
                    setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount + 30)
                    setwbWiAWGoldMaskCountState(wbWiAWGoldMaskCount + 30)
                    setmubWiAWSandCountState(mubWiAWSandCount + 1)
                    setwbWiAWSandCountState(wbWiAWSandCount + 1)
                    setmubWiAWRupeeCost(mubWiAWRupeeCost + 2)
                    setwbWiAWRupeeCost(wbWiAWRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount + 16)
                    setwbWiAWSilverMaskCountState(wbWiAWSilverMaskCount + 16)
                    setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount + 10)
                    setwbWiAWGoldMaskCountState(wbWiAWGoldMaskCount + 10)
                    setmubWiAWInsanityCountState(mubWiAWInsanityCount + 7)
                    setwbWiAWInsanityCountState(wbWiAWInsanityCount + 7)
                    setmubWiAWOriCountState(mubWiAWOriCount + 1)
                    setwbWiAWOriCountState(wbWiAWOriCount + 1)
                    setmubWiAWRupeeCost(mubWiAWRupeeCost + 7.5)
                    setwbWiAWRupeeCost(wbWiAWRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount + 16)
                    setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount + 10)
                    setmubWiAWInsanityCountState(mubWiAWInsanityCount + 7)
                    setmubWiAWOriCountState(mubWiAWOriCount + 1)
                    setmubWiAWRupeeCost(mubWiAWRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount + 80)
                    setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount + 70)
                    setmubWiAWInsanityCountState(mubWiAWInsanityCount + 30)
                    setmubWiAWGaleCountState(mubWiAWGaleCount + 20)
                    setmubWiAWOriCountState(mubWiAWOriCount + 20)
                    setmubWiAWRupeeCost(mubWiAWRupeeCost + 2)
                }
            }
        }
    }

    function handleWindWandRefineIncrement(event) {
        setWindWeaponChoiceState("wand");
        if (windWandRefineState < event.target.value) {
            if (event.target.value - windWandRefineState == 1) {
                setWindWandRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount - 16);
                    setwbWiAWSilverMaskCountState(wbWiAWSilverMaskCount - 16);
                    setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount - 10);
                    setwbWiAWGoldMaskCountState(wbWiAWGoldMaskCount - 10);
                    setmubWiAWInsanityCountState(mubWiAWInsanityCount - 7);
                    setwbWiAWInsanityCountState(wbWiAWInsanityCount - 7);
                    setmubWiAWOriCountState(mubWiAWOriCount - 1);
                    setwbWiAWOriCountState(wbWiAWOriCount - 1);
                    setmubWiAWRupeeCost(mubWiAWRupeeCost - 2.5);
                    setwbWiAWRupeeCost(wbWiAWRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount - 40)
                    setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount - 30);
                    setmubWiAWInsanityCountState(mubWiAWInsanityCount - 10);
                    setmubWiAWGaleCountState(mubWiAWGaleCount - 10);
                    setmubWiAWOriCountState(mubWiAWOriCount - 10);
                    setmubWiAWRupeeCost(mubWiAWRupeeCost - 2.5);
                }
            }
        }
        else if (windWandRefineState > event.target.value) {
            if (windWandRefineState - event.target.value == 1) {
                setWindWandRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount + 16);
                    setwbWiAWSilverMaskCountState(wbWiAWSilverMaskCount + 16);
                    setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount + 10);
                    setwbWiAWGoldMaskCountState(wbWiAWGoldMaskCount + 10);
                    setmubWiAWInsanityCountState(mubWiAWInsanityCount + 7);
                    setwbWiAWInsanityCountState(wbWiAWInsanityCount + 7);
                    setmubWiAWOriCountState(mubWiAWOriCount + 1);
                    setwbWiAWOriCountState(wbWiAWOriCount + 1);
                    setmubWiAWRupeeCost(mubWiAWRupeeCost + 2.5);
                    setwbWiAWRupeeCost(wbWiAWRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubWiAWSilverMaskCountState(mubWiAWSilverMaskCount + 40)
                    setmubWiAWGoldMaskCountState(mubWiAWGoldMaskCount + 30);
                    setmubWiAWInsanityCountState(mubWiAWInsanityCount + 10);
                    setmubWiAWGaleCountState(mubWiAWGaleCount + 10);
                    setmubWiAWOriCountState(mubWiAWOriCount + 10);
                    setmubWiAWRupeeCost(mubWiAWRupeeCost + 2.5);
                }
            }
        }
    }

    function craftWindBow() {
        if (windBowCraftState == "grayscale(100%)") {
            setWindBowCraftState("grayscale(0%)")
            setWindWeaponChoiceState("bow")
            setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount - 40)
            setwbWiABoSilverMaskCountState(wbWiABoSilverMaskCount - 40)
            setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount - 30)
            setwbWiABoGoldMaskCountState(wbWiABoGoldMaskCount - 30)
            setmubWiABoSandCountState(mubWiABoSandCount - 1)
            setwbWiABoSandCountState(wbWiABoSandCount - 1)
            setmubWiABoRupeeCost(mubWiABoRupeeCost - 2)
            setwbWiABoRupeeCost(wbWiABoRupeeCost - 2)
        }
        else if (windBowCraftState == "grayscale(0%)") {
            setWindBowCraftState("grayscale(100%)")
            setWindWeaponChoiceState("bow")
            setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount + 40)
            setwbWiABoSilverMaskCountState(wbWiABoSilverMaskCount + 40)
            setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount + 30)
            setwbWiABoGoldMaskCountState(wbWiABoGoldMaskCount + 30)
            setmubWiABoSandCountState(mubWiABoSandCount + 1)
            setwbWiABoSandCountState(wbWiABoSandCount + 1)
            setmubWiABoRupeeCost(mubWiABoRupeeCost + 2)
            setwbWiABoRupeeCost(wbWiABoRupeeCost + 2)
        }
    }

    function windBowWeaponBonus() {
        if (windBowWeaponBonusState == "grayscale(100%)") {
            setWindBowWeaponBonusState("grayscale(0%)");
            setWindWeaponChoiceState("bow");
            setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount - 100)
            setwbWiABoSilverMaskCountState(wbWiABoSilverMaskCount - 100)
            setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount - 100)
            setwbWiABoGoldMaskCountState(wbWiABoGoldMaskCount - 100)
            setmubWiABoInsanityCountState(mubWiABoInsanityCount - 14)
            setwbWiABoInsanityCountState(wbWiABoInsanityCount - 14)
            setmubWiABoOriCountState(mubWiABoOriCount - 30)
            setwbWiABoOriCountState(wbWiABoOriCount - 30)
            setmubWiABoRupeeCost(mubWiABoRupeeCost - 10)
            setwbWiABoRupeeCost(wbWiABoRupeeCost - 10)
        }
        else if (windBowWeaponBonusState == "grayscale(0%)") {
            setWindBowWeaponBonusState("grayscale(100%)");
            setWindWeaponChoiceState("bow");
            setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount + 100)
            setwbWiABoSilverMaskCountState(wbWiABoSilverMaskCount + 100)
            setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount + 100)
            setwbWiABoGoldMaskCountState(wbWiABoGoldMaskCount + 100)
            setmubWiABoInsanityCountState(mubWiABoInsanityCount + 14)
            setwbWiABoInsanityCountState(wbWiABoInsanityCount + 14)
            setmubWiABoOriCountState(mubWiABoOriCount + 30)
            setwbWiABoOriCountState(wbWiABoOriCount + 30)
            setmubWiABoRupeeCost(mubWiABoRupeeCost + 10)
            setwbWiABoRupeeCost(wbWiABoRupeeCost + 10)
        }
    }

    function windBowWyrmprintSlot() {
        if (windBowWyrmprintSlotState == "grayscale(100%)") {
            setWindBowWyrmprintSlotState("grayscale(0%)");
            setWindWeaponChoiceState("bow");
            setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount - 16)
            setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount - 10)
            setmubWiABoOriCountState(mubWiABoOriCount - 1)
            setmubWiABoRupeeCost(mubWiABoRupeeCost - 2.5)
        }
        else if (windBowWyrmprintSlotState == "grayscale(0%)") {
            setWindBowWyrmprintSlotState("grayscale(100%)");
            setWindWeaponChoiceState("bow");
            setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount + 16)
            setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount + 10)
            setmubWiABoOriCountState(mubWiABoOriCount + 1)
            setmubWiABoRupeeCost(mubWiABoRupeeCost + 2.5)
        }
    }

    function handleWindBowUnbindIncrement(event) {
        setWindWeaponChoiceState("bow")
        if (windBowUnbindState < event.target.value) {
            if (event.target.value - windBowUnbindState == 1) {
                setWindBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount - 40)
                    setwbWiABoSilverMaskCountState(wbWiABoSilverMaskCount - 40)
                    setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount - 30)
                    setwbWiABoGoldMaskCountState(wbWiABoGoldMaskCount - 30)
                    setmubWiABoSandCountState(mubWiABoSandCount - 1)
                    setwbWiABoSandCountState(wbWiABoSandCount - 1)
                    setmubWiABoRupeeCost(mubWiABoRupeeCost - 2)
                    setwbWiABoRupeeCost(wbWiABoRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount - 16)
                    setwbWiABoSilverMaskCountState(wbWiABoSilverMaskCount - 16)
                    setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount - 10)
                    setwbWiABoGoldMaskCountState(wbWiABoGoldMaskCount - 10)
                    setmubWiABoInsanityCountState(mubWiABoInsanityCount - 7)
                    setwbWiABoInsanityCountState(wbWiABoInsanityCount - 7)
                    setmubWiABoOriCountState(mubWiABoOriCount - 1)
                    setwbWiABoOriCountState(wbWiABoOriCount - 1)
                    setmubWiABoRupeeCost(mubWiABoRupeeCost - 7.5)
                    setwbWiABoRupeeCost(wbWiABoRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount - 16)
                    setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount - 10)
                    setmubWiABoInsanityCountState(mubWiABoInsanityCount - 7)
                    setmubWiABoOriCountState(mubWiABoOriCount - 1)
                    setmubWiABoRupeeCost(mubWiABoRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount - 80)
                    setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount - 70)
                    setmubWiABoInsanityCountState(mubWiABoInsanityCount - 30)
                    setmubWiABoGaleCountState(mubWiABoGaleCount - 20)
                    setmubWiABoOriCountState(mubWiABoOriCount - 20)
                    setmubWiABoRupeeCost(mubWiABoRupeeCost - 2)
                }
            }
        }
        else if (windBowUnbindState > event.target.value) {
            if (windBowUnbindState - event.target.value == 1) {
                setWindBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount + 40)
                    setwbWiABoSilverMaskCountState(wbWiABoSilverMaskCount + 40)
                    setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount + 30)
                    setwbWiABoGoldMaskCountState(wbWiABoGoldMaskCount + 30)
                    setmubWiABoSandCountState(mubWiABoSandCount + 1)
                    setwbWiABoSandCountState(wbWiABoSandCount + 1)
                    setmubWiABoRupeeCost(mubWiABoRupeeCost + 2)
                    setwbWiABoRupeeCost(wbWiABoRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount + 16)
                    setwbWiABoSilverMaskCountState(wbWiABoSilverMaskCount + 16)
                    setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount + 10)
                    setwbWiABoGoldMaskCountState(wbWiABoGoldMaskCount + 10)
                    setmubWiABoInsanityCountState(mubWiABoInsanityCount + 7)
                    setwbWiABoInsanityCountState(wbWiABoInsanityCount + 7)
                    setmubWiABoOriCountState(mubWiABoOriCount + 1)
                    setwbWiABoOriCountState(wbWiABoOriCount + 1)
                    setmubWiABoRupeeCost(mubWiABoRupeeCost + 7.5)
                    setwbWiABoRupeeCost(wbWiABoRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount + 16)
                    setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount + 10)
                    setmubWiABoInsanityCountState(mubWiABoInsanityCount + 7)
                    setmubWiABoOriCountState(mubWiABoOriCount + 1)
                    setmubWiABoRupeeCost(mubWiABoRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount + 80)
                    setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount + 70)
                    setmubWiABoInsanityCountState(mubWiABoInsanityCount + 30)
                    setmubWiABoGaleCountState(mubWiABoGaleCount + 20)
                    setmubWiABoOriCountState(mubWiABoOriCount + 20)
                    setmubWiABoRupeeCost(mubWiABoRupeeCost + 2)
                }
            }
        }
    }

    function handleWindBowRefineIncrement(event) {
        setWindWeaponChoiceState("bow");
        if (windBowRefineState < event.target.value) {
            if (event.target.value - windBowRefineState == 1) {
                setWindBowRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount - 16);
                    setwbWiABoSilverMaskCountState(wbWiABoSilverMaskCount - 16);
                    setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount - 10);
                    setwbWiABoGoldMaskCountState(wbWiABoGoldMaskCount - 10);
                    setmubWiABoInsanityCountState(mubWiABoInsanityCount - 7);
                    setwbWiABoInsanityCountState(wbWiABoInsanityCount - 7);
                    setmubWiABoOriCountState(mubWiABoOriCount - 1);
                    setwbWiABoOriCountState(wbWiABoOriCount - 1);
                    setmubWiABoRupeeCost(mubWiABoRupeeCost - 2.5);
                    setwbWiABoRupeeCost(wbWiABoRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount - 40)
                    setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount - 30);
                    setmubWiABoInsanityCountState(mubWiABoInsanityCount - 10);
                    setmubWiABoGaleCountState(mubWiABoGaleCount - 10);
                    setmubWiABoOriCountState(mubWiABoOriCount - 10);
                    setmubWiABoRupeeCost(mubWiABoRupeeCost - 2.5);
                }
            }
        }
        else if (windBowRefineState > event.target.value) {
            if (event.target.value - windBowRefineState == 1) {
                setWindBowRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount + 16);
                    setwbWiABoSilverMaskCountState(wbWiABoSilverMaskCount + 16);
                    setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount + 10);
                    setwbWiABoGoldMaskCountState(wbWiABoGoldMaskCount + 10);
                    setmubWiABoInsanityCountState(mubWiABoInsanityCount + 7);
                    setwbWiABoInsanityCountState(wbWiABoInsanityCount + 7);
                    setmubWiABoOriCountState(mubWiABoOriCount + 1);
                    setwbWiABoOriCountState(wbWiABoOriCount + 1);
                    setmubWiABoRupeeCost(mubWiABoRupeeCost + 2.5);
                    setwbWiABoRupeeCost(wbWiABoRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubWiABoSilverMaskCountState(mubWiABoSilverMaskCount + 40)
                    setmubWiABoGoldMaskCountState(mubWiABoGoldMaskCount + 30);
                    setmubWiABoInsanityCountState(mubWiABoInsanityCount + 10);
                    setmubWiABoGaleCountState(mubWiABoGaleCount + 10);
                    setmubWiABoOriCountState(mubWiABoOriCount + 10);
                    setmubWiABoRupeeCost(mubWiABoRupeeCost + 2.5);
                }
            }
        }
    }

    function craftWindStaff() {
        if (windStaffCraftState == "grayscale(100%)") {
            setWindStaffCraftState("grayscale(0%)")
            setWindWeaponChoiceState("staff")
            setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount - 40)
            setwbWiAStSilverMaskCountState(wbWiAStSilverMaskCount - 40)
            setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount - 30)
            setwbWiAStGoldMaskCountState(wbWiAStGoldMaskCount - 30)
            setmubWiAStSandCountState(mubWiAStSandCount - 1)
            setwbWiAStSandCountState(wbWiAStSandCount - 1)
            setmubWiAStRupeeCost(mubWiAStRupeeCost - 2)
            setwbWiAStRupeeCost(wbWiAStRupeeCost - 2)
        }
        else if (windStaffCraftState == "grayscale(0%)") {
            setWindStaffCraftState("grayscale(100%)")
            setWindWeaponChoiceState("staff")
            setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount + 40)
            setwbWiAStSilverMaskCountState(wbWiAStSilverMaskCount + 40)
            setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount + 30)
            setwbWiAStGoldMaskCountState(wbWiAStGoldMaskCount + 30)
            setmubWiAStSandCountState(mubWiAStSandCount + 1)
            setwbWiAStSandCountState(wbWiAStSandCount + 1)
            setmubWiAStRupeeCost(mubWiAStRupeeCost + 2)
            setwbWiAStRupeeCost(wbWiAStRupeeCost + 2)
        }
    }

    function windStaffWeaponBonus() {
        if (windStaffWeaponBonusState == "grayscale(100%)") {
            setWindStaffWeaponBonusState("grayscale(0%)");
            setWindWeaponChoiceState("staff");
            setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount - 100)
            setwbWiAStSilverMaskCountState(wbWiAStSilverMaskCount - 100)
            setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount - 100)
            setwbWiAStGoldMaskCountState(wbWiAStGoldMaskCount - 100)
            setmubWiAStInsanityCountState(mubWiAStInsanityCount - 14)
            setwbWiAStInsanityCountState(wbWiAStInsanityCount - 14)
            setmubWiAStOriCountState(mubWiAStOriCount - 30)
            setwbWiAStOriCountState(wbWiAStOriCount - 30)
            setmubWiAStRupeeCost(mubWiAStRupeeCost - 10)
            setwbWiAStRupeeCost(wbWiAStRupeeCost - 10)
        }
        else if (windStaffWeaponBonusState == "grayscale(0%)") {
            setWindStaffWeaponBonusState("grayscale(100%)");
            setWindWeaponChoiceState("staff");
            setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount + 100)
            setwbWiAStSilverMaskCountState(wbWiAStSilverMaskCount + 100)
            setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount + 100)
            setwbWiAStGoldMaskCountState(wbWiAStGoldMaskCount + 100)
            setmubWiAStInsanityCountState(mubWiAStInsanityCount + 14)
            setwbWiAStInsanityCountState(wbWiAStInsanityCount + 14)
            setmubWiAStOriCountState(mubWiAStOriCount + 30)
            setwbWiAStOriCountState(wbWiAStOriCount + 30)
            setmubWiAStRupeeCost(mubWiAStRupeeCost + 10)
            setwbWiAStRupeeCost(wbWiAStRupeeCost + 10)
        }
    }

    function windStaffWyrmprintSlot() {
        if (windStaffWyrmprintSlotState == "grayscale(100%)") {
            setWindStaffWyrmprintSlotState("grayscale(0%)");
            setWindWeaponChoiceState("staff");
            setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount - 16)
            setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount - 10)
            setmubWiAStOriCountState(mubWiAStOriCount - 1)
            setmubWiAStRupeeCost(mubWiAStRupeeCost - 2.5)
        }
        else if (windStaffWyrmprintSlotState == "grayscale(0%)") {
            setWindStaffWyrmprintSlotState("grayscale(100%)");
            setWindWeaponChoiceState("staff");
            setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount + 16)
            setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount + 10)
            setmubWiAStOriCountState(mubWiAStOriCount + 1)
            setmubWiAStRupeeCost(mubWiAStRupeeCost + 2.5)
        }
    }

    function handleWindStaffUnbindIncrement(event) {
        setWindWeaponChoiceState("staff")
        if (windStaffUnbindState < event.target.value) {
            if (event.target.value - windStaffUnbindState == 1) {
                setWindStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount - 40)
                    setwbWiAStSilverMaskCountState(wbWiAStSilverMaskCount - 40)
                    setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount - 30)
                    setwbWiAStGoldMaskCountState(wbWiAStGoldMaskCount - 30)
                    setmubWiAStSandCountState(mubWiAStSandCount - 1)
                    setwbWiAStSandCountState(wbWiAStSandCount - 1)
                    setmubWiAStRupeeCost(mubWiAStRupeeCost - 2)
                    setwbWiAStRupeeCost(wbWiAStRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount - 16)
                    setwbWiAStSilverMaskCountState(wbWiAStSilverMaskCount - 16)
                    setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount - 10)
                    setwbWiAStGoldMaskCountState(wbWiAStGoldMaskCount - 10)
                    setmubWiAStInsanityCountState(mubWiAStInsanityCount - 7)
                    setwbWiAStInsanityCountState(wbWiAStInsanityCount - 7)
                    setmubWiAStOriCountState(mubWiAStOriCount - 1)
                    setwbWiAStOriCountState(wbWiAStOriCount - 1)
                    setmubWiAStRupeeCost(mubWiAStRupeeCost - 7.5)
                    setwbWiAStRupeeCost(wbWiAStRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount - 16)
                    setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount - 10)
                    setmubWiAStInsanityCountState(mubWiAStInsanityCount - 7)
                    setmubWiAStOriCountState(mubWiAStOriCount - 1)
                    setmubWiAStRupeeCost(mubWiAStRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount - 80)
                    setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount - 70)
                    setmubWiAStInsanityCountState(mubWiAStInsanityCount - 30)
                    setmubWiAStGaleCountState(mubWiAStGaleCount - 20)
                    setmubWiAStOriCountState(mubWiAStOriCount - 20)
                    setmubWiAStRupeeCost(mubWiAStRupeeCost - 2)
                }
            }
        }
        else if (windStaffUnbindState > event.target.value) {
            if (windStaffUnbindState - event.target.value == 1) {
                setWindStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount + 40)
                    setwbWiAStSilverMaskCountState(wbWiAStSilverMaskCount + 40)
                    setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount + 30)
                    setwbWiAStGoldMaskCountState(wbWiAStGoldMaskCount + 30)
                    setmubWiAStSandCountState(mubWiAStSandCount + 1)
                    setwbWiAStSandCountState(wbWiAStSandCount + 1)
                    setmubWiAStRupeeCost(mubWiAStRupeeCost + 2)
                    setwbWiAStRupeeCost(wbWiAStRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount + 16)
                    setwbWiAStSilverMaskCountState(wbWiAStSilverMaskCount + 16)
                    setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount + 10)
                    setwbWiAStGoldMaskCountState(wbWiAStGoldMaskCount + 10)
                    setmubWiAStInsanityCountState(mubWiAStInsanityCount + 7)
                    setwbWiAStInsanityCountState(wbWiAStInsanityCount + 7)
                    setmubWiAStOriCountState(mubWiAStOriCount + 1)
                    setwbWiAStOriCountState(wbWiAStOriCount + 1)
                    setmubWiAStRupeeCost(mubWiAStRupeeCost + 7.5)
                    setwbWiAStRupeeCost(wbWiAStRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount + 16)
                    setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount + 10)
                    setmubWiAStInsanityCountState(mubWiAStInsanityCount + 7)
                    setmubWiAStOriCountState(mubWiAStOriCount + 1)
                    setmubWiAStRupeeCost(mubWiAStRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount + 80)
                    setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount + 70)
                    setmubWiAStInsanityCountState(mubWiAStInsanityCount + 30)
                    setmubWiAStGaleCountState(mubWiAStGaleCount + 20)
                    setmubWiAStOriCountState(mubWiAStOriCount + 20)
                    setmubWiAStRupeeCost(mubWiAStRupeeCost + 2)
                }
            }
        }
    }

    function handleWindStaffRefineIncrement(event) {
        setWindWeaponChoiceState("staff");
        if (windStaffRefineState < event.target.value) {
            if (event.target.value - windStaffRefineState == 1) {
                setWindStaffRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount - 16);
                    setwbWiAStSilverMaskCountState(wbWiAStSilverMaskCount - 16);
                    setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount - 10);
                    setwbWiAStGoldMaskCountState(wbWiAStGoldMaskCount - 10);
                    setmubWiAStInsanityCountState(mubWiAStInsanityCount - 7);
                    setwbWiAStInsanityCountState(wbWiAStInsanityCount - 7);
                    setmubWiAStOriCountState(mubWiAStOriCount - 1);
                    setwbWiAStOriCountState(wbWiAStOriCount - 1);
                    setmubWiAStRupeeCost(mubWiAStRupeeCost - 2.5);
                    setwbWiAStRupeeCost(wbWiAStRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount - 40)
                    setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount - 30);
                    setmubWiAStInsanityCountState(mubWiAStInsanityCount - 10);
                    setmubWiAStGaleCountState(mubWiAStGaleCount - 10);
                    setmubWiAStOriCountState(mubWiAStOriCount - 10);
                    setmubWiAStRupeeCost(mubWiAStRupeeCost - 2.5);
                }
            }
        }
        else if (windStaffRefineState > event.target.value) {
            if (windStaffRefineState - event.target.value == 1) {
                setWindStaffRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount + 16);
                    setwbWiAStSilverMaskCountState(wbWiAStSilverMaskCount + 16);
                    setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount + 10);
                    setwbWiAStGoldMaskCountState(wbWiAStGoldMaskCount + 10);
                    setmubWiAStInsanityCountState(mubWiAStInsanityCount + 7);
                    setwbWiAStInsanityCountState(wbWiAStInsanityCount + 7);
                    setmubWiAStOriCountState(mubWiAStOriCount + 1);
                    setwbWiAStOriCountState(wbWiAStOriCount + 1);
                    setmubWiAStRupeeCost(mubWiAStRupeeCost + 2.5);
                    setwbWiAStRupeeCost(wbWiAStRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubWiAStSilverMaskCountState(mubWiAStSilverMaskCount + 40)
                    setmubWiAStGoldMaskCountState(mubWiAStGoldMaskCount + 30);
                    setmubWiAStInsanityCountState(mubWiAStInsanityCount + 10);
                    setmubWiAStGaleCountState(mubWiAStGaleCount + 10);
                    setmubWiAStOriCountState(mubWiAStOriCount + 10);
                    setmubWiAStRupeeCost(mubWiAStRupeeCost + 2.5);
                }
            }
        }
    }

    function craftWindManacaster() {
        if (windManacasterCraftState == "grayscale(100%)") {
            setWindManacasterCraftState("grayscale(0%)")
            setWindWeaponChoiceState("manacaster")
            setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount - 40)
            setwbWiAMSilverMaskCountState(wbWiAMSilverMaskCount - 40)
            setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount - 30)
            setwbWiAMGoldMaskCountState(wbWiAMGoldMaskCount - 30)
            setmubWiAMSandCountState(mubWiAMSandCount - 1)
            setwbWiAMSandCountState(wbWiAMSandCount - 1)
            setmubWiAMRupeeCost(mubWiAMRupeeCost - 2)
            setwbWiAMRupeeCost(wbWiAMRupeeCost - 2)
        }
        else if (windManacasterCraftState == "grayscale(0%)") {
            setWindManacasterCraftState("grayscale(100%)")
            setWindWeaponChoiceState("manacaster")
            setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount + 40)
            setwbWiAMSilverMaskCountState(wbWiAMSilverMaskCount + 40)
            setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount + 30)
            setwbWiAMGoldMaskCountState(wbWiAMGoldMaskCount + 30)
            setmubWiAMSandCountState(mubWiAMSandCount + 1)
            setwbWiAMSandCountState(wbWiAMSandCount + 1)
            setmubWiAMRupeeCost(mubWiAMRupeeCost + 2)
            setwbWiAMRupeeCost(wbWiAMRupeeCost + 2)
        }
    }

    function windManacasterWeaponBonus() {
        if (windManacasterWeaponBonusState == "grayscale(100%)") {
            setWindManacasterWeaponBonusState("grayscale(0%)");
            setWindWeaponChoiceState("manacaster");
            setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount - 100)
            setwbWiAMSilverMaskCountState(wbWiAMSilverMaskCount - 100)
            setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount - 100)
            setwbWiAMGoldMaskCountState(wbWiAMGoldMaskCount - 100)
            setmubWiAMInsanityCountState(mubWiAMInsanityCount - 14)
            setwbWiAMInsanityCountState(wbWiAMInsanityCount - 14)
            setmubWiAMOriCountState(mubWiAMOriCount - 30)
            setwbWiAMOriCountState(wbWiAMOriCount - 30)
            setmubWiAMRupeeCost(mubWiAMRupeeCost - 10)
            setwbWiAMRupeeCost(wbWiAMRupeeCost - 10)
        }
        else if (windManacasterWeaponBonusState == "grayscale(0%)") {
            setWindManacasterWeaponBonusState("grayscale(100%)");
            setWindWeaponChoiceState("manacaster");
            setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount + 100)
            setwbWiAMSilverMaskCountState(wbWiAMSilverMaskCount + 100)
            setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount + 100)
            setwbWiAMGoldMaskCountState(wbWiAMGoldMaskCount + 100)
            setmubWiAMInsanityCountState(mubWiAMInsanityCount + 14)
            setwbWiAMInsanityCountState(wbWiAMInsanityCount + 14)
            setmubWiAMOriCountState(mubWiAMOriCount + 30)
            setwbWiAMOriCountState(wbWiAMOriCount + 30)
            setmubWiAMRupeeCost(mubWiAMRupeeCost + 10)
            setwbWiAMRupeeCost(wbWiAMRupeeCost + 10)
        }
    }

    function windManacasterWyrmprintSlot() {
        if (windManacasterWyrmprintSlotState == "grayscale(100%)") {
            setWindManacasterWyrmprintSlotState("grayscale(0%)");
            setWindWeaponChoiceState("manacaster");
            setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount - 16)
            setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount - 10)
            setmubWiAMOriCountState(mubWiAMOriCount - 1)
            setmubWiAMRupeeCost(mubWiAMRupeeCost - 2.5)
        }
        else if (windManacasterWyrmprintSlotState == "grayscale(0%)") {
            setWindManacasterWyrmprintSlotState("grayscale(100%)");
            setWindWeaponChoiceState("manacaster");
            setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount + 16)
            setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount + 10)
            setmubWiAMOriCountState(mubWiAMOriCount + 1)
            setmubWiAMRupeeCost(mubWiAMRupeeCost + 2.5)
        }
    }

    function handleWindManacasterUnbindIncrement(event) {
        setWindWeaponChoiceState("manacaster")
        if (windManacasterUnbindState < event.target.value) {
            if (event.target.value - windManacasterUnbindState == 1) {
                setWindManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount - 40)
                    setwbWiAMSilverMaskCountState(wbWiAMSilverMaskCount - 40)
                    setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount - 30)
                    setwbWiAMGoldMaskCountState(wbWiAMGoldMaskCount - 30)
                    setmubWiAMSandCountState(mubWiAMSandCount - 1)
                    setwbWiAMSandCountState(wbWiAMSandCount - 1)
                    setmubWiAMRupeeCost(mubWiAMRupeeCost - 2)
                    setwbWiAMRupeeCost(wbWiAMRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount - 16)
                    setwbWiAMSilverMaskCountState(wbWiAMSilverMaskCount - 16)
                    setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount - 10)
                    setwbWiAMGoldMaskCountState(wbWiAMGoldMaskCount - 10)
                    setmubWiAMInsanityCountState(mubWiAMInsanityCount - 7)
                    setwbWiAMInsanityCountState(wbWiAMInsanityCount - 7)
                    setmubWiAMOriCountState(mubWiAMOriCount - 1)
                    setwbWiAMOriCountState(wbWiAMOriCount - 1)
                    setmubWiAMRupeeCost(mubWiAMRupeeCost - 7.5)
                    setwbWiAMRupeeCost(wbWiAMRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount - 16)
                    setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount - 10)
                    setmubWiAMInsanityCountState(mubWiAMInsanityCount - 7)
                    setmubWiAMOriCountState(mubWiAMOriCount - 1)
                    setmubWiAMRupeeCost(mubWiAMRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount - 80)
                    setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount - 70)
                    setmubWiAMInsanityCountState(mubWiAMInsanityCount - 30)
                    setmubWiAMGaleCountState(mubWiAMGaleCount - 20)
                    setmubWiAMOriCountState(mubWiAMOriCount - 20)
                    setmubWiAMRupeeCost(mubWiAMRupeeCost - 2)
                }
            }
        }
        else if (windManacasterUnbindState > event.target.value) {
            if (windManacasterUnbindState - event.target.value == 1) {
                setWindManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount + 40)
                    setwbWiAMSilverMaskCountState(wbWiAMSilverMaskCount + 40)
                    setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount + 30)
                    setwbWiAMGoldMaskCountState(wbWiAMGoldMaskCount + 30)
                    setmubWiAMSandCountState(mubWiAMSandCount + 1)
                    setwbWiAMSandCountState(wbWiAMSandCount + 1)
                    setmubWiAMRupeeCost(mubWiAMRupeeCost + 2)
                    setwbWiAMRupeeCost(wbWiAMRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount + 16)
                    setwbWiAMSilverMaskCountState(wbWiAMSilverMaskCount + 16)
                    setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount + 10)
                    setwbWiAMGoldMaskCountState(wbWiAMGoldMaskCount + 10)
                    setmubWiAMInsanityCountState(mubWiAMInsanityCount + 7)
                    setwbWiAMInsanityCountState(wbWiAMInsanityCount + 7)
                    setmubWiAMOriCountState(mubWiAMOriCount + 1)
                    setwbWiAMOriCountState(wbWiAMOriCount + 1)
                    setmubWiAMRupeeCost(mubWiAMRupeeCost + 7.5)
                    setwbWiAMRupeeCost(wbWiAMRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount + 16)
                    setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount + 10)
                    setmubWiAMInsanityCountState(mubWiAMInsanityCount + 7)
                    setmubWiAMOriCountState(mubWiAMOriCount + 1)
                    setmubWiAMRupeeCost(mubWiAMRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount + 80)
                    setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount + 70)
                    setmubWiAMInsanityCountState(mubWiAMInsanityCount + 30)
                    setmubWiAMGaleCountState(mubWiAMGaleCount + 20)
                    setmubWiAMOriCountState(mubWiAMOriCount + 20)
                    setmubWiAMRupeeCost(mubWiAMRupeeCost + 2)
                }
            }
        }
    }

    function handleWindManacasterRefineIncrement(event) {
        setWindWeaponChoiceState("manacaster");
        if (windManacasterRefineState < event.target.value) {
            if (event.target.value - windManacasterRefineState == 1) {
                setWindManacasterRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount - 16);
                    setwbWiAMSilverMaskCountState(wbWiAMSilverMaskCount - 16);
                    setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount - 10);
                    setwbWiAMGoldMaskCountState(wbWiAMGoldMaskCount - 10);
                    setmubWiAMInsanityCountState(mubWiAMInsanityCount - 7);
                    setwbWiAMInsanityCountState(wbWiAMInsanityCount - 7);
                    setmubWiAMOriCountState(mubWiAMOriCount - 1);
                    setwbWiAMOriCountState(wbWiAMOriCount - 1);
                    setmubWiAMRupeeCost(mubWiAMRupeeCost - 2.5);
                    setwbWiAMRupeeCost(wbWiAMRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount - 40)
                    setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount - 30);
                    setmubWiAMInsanityCountState(mubWiAMInsanityCount - 10);
                    setmubWiAMGaleCountState(mubWiAMGaleCount - 10);
                    setmubWiAMOriCountState(mubWiAMOriCount - 10);
                    setmubWiAMRupeeCost(mubWiAMRupeeCost - 2.5);
                }
            }
        }
        else if (windManacasterRefineState > event.target.value) {
            if (windManacasterRefineState - event.target.value == 1) {
                setWindManacasterRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount + 16);
                    setwbWiAMSilverMaskCountState(wbWiAMSilverMaskCount + 16);
                    setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount + 10);
                    setwbWiAMGoldMaskCountState(wbWiAMGoldMaskCount + 10);
                    setmubWiAMInsanityCountState(mubWiAMInsanityCount + 7);
                    setwbWiAMInsanityCountState(wbWiAMInsanityCount + 7);
                    setmubWiAMOriCountState(mubWiAMOriCount + 1);
                    setwbWiAMOriCountState(wbWiAMOriCount + 1);
                    setmubWiAMRupeeCost(mubWiAMRupeeCost + 2.5);
                    setwbWiAMRupeeCost(wbWiAMRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubWiAMSilverMaskCountState(mubWiAMSilverMaskCount + 40)
                    setmubWiAMGoldMaskCountState(mubWiAMGoldMaskCount + 30);
                    setmubWiAMInsanityCountState(mubWiAMInsanityCount + 10);
                    setmubWiAMGaleCountState(mubWiAMGaleCount + 10);
                    setmubWiAMOriCountState(mubWiAMOriCount + 10);
                    setmubWiAMRupeeCost(mubWiAMRupeeCost + 2.5);
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
                            <Text fontSize={[1, 3]} ml="auto" mr="auto" color="green">Wind Agito Weapons</Text>
                        </Box>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WindAgitoSword} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windSwordCraftState }} onClick={craftWindSword} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="green">Excalibur</Text>
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
                                        onChange={handleWindSwordUnbindIncrement}
                                        defaultValue={windSwordUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windSwordUnbindState}</Text>
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
                                        onChange={handleWindSwordRefineIncrement}
                                        defaultValue={windSwordRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windSwordRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: windSwordWeaponBonusState }} onClick={windSwordWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: windSwordWyrmprintSlotState }} onClick={windSwordWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WindAgitoBlade} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windBladeCraftState }} onClick={craftWindBlade} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="green">Arondight</Text>
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
                                        onChange={handleWindBladeUnbindIncrement}
                                        defaultValue={windBladeUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windBladeUnbindState}</Text>
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
                                        onChange={handleWindBladeRefineIncrement}
                                        defaultValue={windBladeRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windBladeRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: windBladeWeaponBonusState }} onClick={windBladeWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: windBladeWyrmprintSlotState }} onClick={windBladeWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WindAgitoDagger} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windDaggerCraftState }} onClick={craftWindDagger} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="green">Carnwennan</Text>
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
                                        onChange={handleWindDaggerUnbindIncrement}
                                        defaultValue={windDaggerUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windDaggerUnbindState}</Text>
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
                                        onChange={handleWindDaggerRefineIncrement}
                                        defaultValue={windDaggerRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windDaggerRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: windDaggerWeaponBonusState }} onClick={windDaggerWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: windDaggerWyrmprintSlotState }} onClick={windDaggerWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WindAgitoAxe} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windAxeCraftState }} onClick={craftWindAxe} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="green">Marmyadose</Text>
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
                                        onChange={handleWindAxeUnbindIncrement}
                                        defaultValue={windAxeUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windAxeUnbindState}</Text>
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
                                        onChange={handleWindAxeRefineIncrement}
                                        defaultValue={windAxeRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windAxeRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: windAxeWeaponBonusState }} onClick={windAxeWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: windAxeWyrmprintSlotState }} onClick={windAxeWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WindAgitoLance} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windLanceCraftState }} onClick={craftWindLance} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="green">Rhongomyniad</Text>
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
                                        onChange={handleWindLanceUnbindIncrement}
                                        defaultValue={windLanceUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windLanceUnbindState}</Text>
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
                                        onChange={handleWindLanceRefineIncrement}
                                        defaultValue={windLanceRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windLanceRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: windLanceWeaponBonusState }} onClick={windLanceWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: windLanceWyrmprintSlotState }} onClick={windLanceWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WindAgitoBow} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windBowCraftState }} onClick={craftWindBow} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="green">Failnaught</Text>
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
                                        onChange={handleWindBowUnbindIncrement}
                                        defaultValue={windBowUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windBowUnbindState}</Text>
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
                                        onChange={handleWindBowRefineIncrement}
                                        defaultValue={windBowRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windBowRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: windBowWeaponBonusState }} onClick={windBowWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: windBowWyrmprintSlotState }} onClick={windBowWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WindAgitoWand} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windWandCraftState }} onClick={craftWindWand} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="green">Camelot</Text>
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
                                        onChange={handleWindWandUnbindIncrement}
                                        defaultValue={windWandUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windWandUnbindState}</Text>
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
                                        onChange={handleWindWandRefineIncrement}
                                        defaultValue={windWandRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windWandRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: windWandWeaponBonusState }} onClick={windWandWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: windWandWyrmprintSlotState }} onClick={windWandWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WindAgitoStaff} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windStaffCraftState }} onClick={craftWindStaff} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="green">Avalon</Text>
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
                                        onChange={handleWindStaffUnbindIncrement}
                                        defaultValue={windStaffUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windStaffUnbindState}</Text>
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
                                        onChange={handleWindStaffRefineIncrement}
                                        defaultValue={windStaffRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windStaffRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: windStaffWeaponBonusState }} onClick={windStaffWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: windStaffWyrmprintSlotState }} onClick={windStaffWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WindAgitoManacaster} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windManacasterCraftState }} onClick={craftWindManacaster} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="green">Gallatin</Text>
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
                                        onChange={handleWindManacasterUnbindIncrement}
                                        defaultValue={windManacasterUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windManacasterUnbindState}</Text>
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
                                        onChange={handleWindManacasterRefineIncrement}
                                        defaultValue={windManacasterRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="green"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="green" fontSize={[1, 3]}>{windManacasterRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: windManacasterWeaponBonusState }} onClick={windManacasterWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: windManacasterWyrmprintSlotState }} onClick={windManacasterWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                </Box>
                {/* The box for the materials needed to 100% a weapon */}
                {windWeaponSelection()}
            </Flex>
            <Flex>&nbsp;</Flex>
            <WeaponTypeNavTabs />
        </div>
    )
}