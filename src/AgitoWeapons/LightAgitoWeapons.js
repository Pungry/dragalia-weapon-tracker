import React, { useState } from 'react'
import AgitoNavTabs from "./AgitoNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"
import { Box, Text, Flex, Card, Image } from "rebass";
import { Slider } from "@rebass/forms";

import LightAgitoSword from "../Images/Light_Agito_Sword.png";
import LightAgitoBlade from "../Images/Light_Agito_Blade.png";
import LightAgitoDagger from "../Images/Light_Agito_Dagger.png";
import LightAgitoAxe from "../Images/Light_Agito_Axe.png";
import LightAgitoLance from "../Images/Light_Agito_Lance.png";
import LightAgitoBow from "../Images/Light_Agito_Bow.png";
import LightAgitoWand from "../Images/Light_Agito_Wand.png";
import LightAgitoStaff from "../Images/Light_Agito_Staff.png";
import LightAgitoManacaster from "../Images/Light_Agito_Manacaster.png";

import Refine from "../Images/Refine.PNG";
import Unbind from "../Images/Unbind.PNG";
import WyrmprintSlots from "../Images/Wyrmprint_Slots.PNG";
import WeaponBonus from "../Images/Weapon_Bonus.PNG";

import LightAgitoSwordCost from "./LightAgitoSwordMats"
import LightAgitoBladeCost from "./LightAgitoBladeMats"
import LightAgitoDaggerCost from "./LightAgitoDaggerMats"
import LightAgitoAxeCost from "./LightAgitoAxeMats"
import LightAgitoLanceCost from "./LightAgitoLanceMats"
import LightAgitoBowCost from "./LightAgitoBowMats"
import LightAgitoWandCost from "./LightAgitoWandMats"
import LightAgitoStaffCost from "./LightAgitoStaffMats"
import LightAgitoManacasterCost from "./LightAgitoManacasterMats"

export default function LightAgitoWeapons() {
    const [lightWeaponChoice, setLightWeaponChoiceState] = useLocalStorage("lightWeaponChoice", "sword")

    const [lightSwordCraftState, setLightSwordCraftState] = useLocalStorage("lightSwordCraftState", "grayscale(100%)")
    const [lightSwordWeaponBonusState, setLightSwordWeaponBonusState] = useLocalStorage("lightSwordWeaponBonusState", "grayscale(100%)")
    const [lightSwordWyrmprintSlotState, setLightSwordWyrmprintSlotState] = useLocalStorage("lightSwordWyrmprintSlotState", "grayscale(100%)")
    const [lightSwordUnbindState, setLightSwordUnbindState] = useLocalStorage("lightSwordUnbindState", 0);
    const [lightSwordRefineState, setLightSwordRefineState] = useLocalStorage("lightSwordRefineState", 0);

    const [mubLASSilverMaskCount, setmubLASSilverMaskCountState] = useLocalStorage("mubLASSilverMaskCount", 516);
    const [mubLASGoldMaskCount, setmubLASGoldMaskCountState] = useLocalStorage("mubLASGoldMaskCount", 410);
    const [mubLASInsanityCount, setmubLASInsanityCountState] = useLocalStorage("mubLASInsanityCount", 89);
    const [mubLASGaleCount, setmubLASGaleCountState] = useLocalStorage("mubLASGaleCount", 30);
    const [mubLASSandCount, setmubLASSandCountState] = useLocalStorage("mubLASSandCount", 5);
    const [mubLASOriCount, setmubLASOriCountState] = useLocalStorage("mubLASOriCount", 66);
    const [mubLASRupeeCost, setmubLASRupeeCost] = useLocalStorage("mubLASRupeeCost", 59.5);

    const [wbLASSilverMaskCount, setwbLASSilverMaskCountState] = useLocalStorage("wbLASSilverMaskCount", 332);
    const [wbLASGoldMaskCount, setwbLASGoldMaskCountState] = useLocalStorage("wbLASGoldMaskCount", 270);
    const [wbLASInsanityCount, setwbLASInsanityCountState] = useLocalStorage("wbLASInsanityCount", 28);
    const [wbLASSandCount, setwbLASSandCountState] = useLocalStorage("wbLASSandCount", 5);
    const [wbLASOriCount, setwbLASOriCountState] = useLocalStorage("wbLASOriCount", 32);
    const [wbLASRupeeCost, setwbLASRupeeCost] = useLocalStorage("wbLASRupeeCost", 30);

    const [lightBladeCraftState, setLightBladeCraftState] = useLocalStorage("lightBladeCraftState", "grayscale(100%)")
    const [lightBladeWeaponBonusState, setLightBladeWeaponBonusState] = useLocalStorage("lightBladeWeaponBonusState", "grayscale(100%)")
    const [lightBladeWyrmprintSlotState, setLightBladeWyrmprintSlotState] = useLocalStorage("lightBladeWyrmprintSlotState", "grayscale(100%)")
    const [lightBladeUnbindState, setLightBladeUnbindState] = useLocalStorage("lightBladeUnbindState", 0);
    const [lightBladeRefineState, setLightBladeRefineState] = useLocalStorage("lightBladeRefineState", 0);

    const [mubLABlSilverMaskCount, setmubLABlSilverMaskCountState] = useLocalStorage("mubLABlSilverMaskCount", 516);
    const [mubLABlGoldMaskCount, setmubLABlGoldMaskCountState] = useLocalStorage("mubLABlGoldMaskCount", 410);
    const [mubLABlInsanityCount, setmubLABlInsanityCountState] = useLocalStorage("mubLABlInsanityCount", 89);
    const [mubLABlGaleCount, setmubLABlGaleCountState] = useLocalStorage("mubLABlGaleCount", 30);
    const [mubLABlSandCount, setmubLABlSandCountState] = useLocalStorage("mubLABlSandCount", 5);
    const [mubLABlOriCount, setmubLABlOriCountState] = useLocalStorage("mubLABlOriCount", 66);
    const [mubLABlRupeeCost, setmubLABlRupeeCost] = useLocalStorage("mubLABlRupeeCost", 59.5);

    const [wbLABlSilverMaskCount, setwbLABlSilverMaskCountState] = useLocalStorage("wbLABlSilverMaskCount", 332);
    const [wbLABlGoldMaskCount, setwbLABlGoldMaskCountState] = useLocalStorage("wbLABlGoldMaskCount", 270);
    const [wbLABlInsanityCount, setwbLABlInsanityCountState] = useLocalStorage("wbLABlInsanityCount", 28);
    const [wbLABlSandCount, setwbLABlSandCountState] = useLocalStorage("wbLABlSandCount", 5);
    const [wbLABlOriCount, setwbLABlOriCountState] = useLocalStorage("wbLABlOriCount", 32);
    const [wbLABlRupeeCost, setwbLABlRupeeCost] = useLocalStorage("wbLABlRupeeCost", 30);

    const [lightDaggerCraftState, setLightDaggerCraftState] = useLocalStorage("lightDaggerCraftState", "grayscale(100%)")
    const [lightDaggerWeaponBonusState, setLightDaggerWeaponBonusState] = useLocalStorage("lightDaggerWeaponBonusState", "grayscale(100%)")
    const [lightDaggerWyrmprintSlotState, setLightDaggerWyrmprintSlotState] = useLocalStorage("lightDaggerWyrmprintSlotState", "grayscale(100%)")
    const [lightDaggerUnbindState, setLightDaggerUnbindState] = useLocalStorage("lightDaggerUnbindState", 0);
    const [lightDaggerRefineState, setLightDaggerRefineState] = useLocalStorage("lightDaggerRefineState", 0);

    const [mubLADSilverMaskCount, setmubLADSilverMaskCountState] = useLocalStorage("mubLADSilverMaskCount", 516);
    const [mubLADGoldMaskCount, setmubLADGoldMaskCountState] = useLocalStorage("mubLADASGoldMaskCount", 410);
    const [mubLADInsanityCount, setmubLADInsanityCountState] = useLocalStorage("mubLADInsanityCount", 89);
    const [mubLADGaleCount, setmubLADGaleCountState] = useLocalStorage("mubLADGaleCount", 30);
    const [mubLADSandCount, setmubLADSandCountState] = useLocalStorage("mubLADSandCount", 5);
    const [mubLADOriCount, setmubLADOriCountState] = useLocalStorage("mubLADOriCount", 66);
    const [mubLADRupeeCost, setmubLADRupeeCost] = useLocalStorage("mubLADRupeeCost", 59.5);

    const [wbLADSilverMaskCount, setwbLADSilverMaskCountState] = useLocalStorage("wbLADSilverMaskCount", 332);
    const [wbLADGoldMaskCount, setwbLADGoldMaskCountState] = useLocalStorage("wbLADGoldMaskCount", 270);
    const [wbLADInsanityCount, setwbLADInsanityCountState] = useLocalStorage("wbLADInsanityCount", 28);
    const [wbLADSandCount, setwbLADSandCountState] = useLocalStorage("wbLADSandCount", 5);
    const [wbLADOriCount, setwbLADOriCountState] = useLocalStorage("wbLADOriCount", 32);
    const [wbLADRupeeCost, setwbLADRupeeCost] = useLocalStorage("wbLADRupeeCost", 30);

    const [lightAxeCraftState, setLightAxeCraftState] = useLocalStorage("lightAxeCraftState", "grayscale(100%)")
    const [lightAxeWeaponBonusState, setLightAxeWeaponBonusState] = useLocalStorage("lightAxeWeaponBonusState", "grayscale(100%)")
    const [lightAxeWyrmprintSlotState, setLightAxeWyrmprintSlotState] = useLocalStorage("lightAxeWyrmprintSlotState", "grayscale(100%)")
    const [lightAxeUnbindState, setLightAxeUnbindState] = useLocalStorage("lightAxeUnbindState", 0);
    const [lightAxeRefineState, setLightAxeRefineState] = useLocalStorage("lightAxeRefineState", 0);

    const [mubLAASilverMaskCount, setmubLAASilverMaskCountState] = useLocalStorage("mubLAASilverMaskCount", 516);
    const [mubLAAGoldMaskCount, setmubLAAGoldMaskCountState] = useLocalStorage("mubLAAASGoldMaskCount", 410);
    const [mubLAAInsanityCount, setmubLAAInsanityCountState] = useLocalStorage("mubLAAInsanityCount", 89);
    const [mubLAAGaleCount, setmubLAAGaleCountState] = useLocalStorage("mubLAAGaleCount", 30);
    const [mubLAASandCount, setmubLAASandCountState] = useLocalStorage("mubLAASandCount", 5);
    const [mubLAAOriCount, setmubLAAOriCountState] = useLocalStorage("mubLAAOriCount", 66);
    const [mubLAARupeeCost, setmubLAARupeeCost] = useLocalStorage("mubLAARupeeCost", 59.5);

    const [wbLAASilverMaskCount, setwbLAASilverMaskCountState] = useLocalStorage("wbLAASilverMaskCount", 332);
    const [wbLAAGoldMaskCount, setwbLAAGoldMaskCountState] = useLocalStorage("wbLAAGoldMaskCount", 270);
    const [wbLAAInsanityCount, setwbLAAInsanityCountState] = useLocalStorage("wbLAAInsanityCount", 28);
    const [wbLAASandCount, setwbLAASandCountState] = useLocalStorage("wbLAASandCount", 5);
    const [wbLAAOriCount, setwbLAAOriCountState] = useLocalStorage("wbLAAOriCount", 32);
    const [wbLAARupeeCost, setwbLAARupeeCost] = useLocalStorage("wbLAARupeeCost", 30);

    const [lightLanceCraftState, setLightLanceCraftState] = useLocalStorage("lightLanceCraftState", "grayscale(100%)")
    const [lightLanceWeaponBonusState, setLightLanceWeaponBonusState] = useLocalStorage("lightLanceWeaponBonusState", "grayscale(100%)")
    const [lightLanceWyrmprintSlotState, setLightLanceWyrmprintSlotState] = useLocalStorage("lightLanceWyrmprintSlotState", "grayscale(100%)")
    const [lightLanceUnbindState, setLightLanceUnbindState] = useLocalStorage("lightLanceUnbindState", 0);
    const [lightLanceRefineState, setLightLanceRefineState] = useLocalStorage("lightLanceRefineState", 0);

    const [mubLALSilverMaskCount, setmubLALSilverMaskCountState] = useLocalStorage("mubLALSilverMaskCount", 516);
    const [mubLALGoldMaskCount, setmubLALGoldMaskCountState] = useLocalStorage("mubLALASGoldMaskCount", 410);
    const [mubLALInsanityCount, setmubLALInsanityCountState] = useLocalStorage("mubLALInsanityCount", 89);
    const [mubLALGaleCount, setmubLALGaleCountState] = useLocalStorage("mubLALGaleCount", 30);
    const [mubLALSandCount, setmubLALSandCountState] = useLocalStorage("mubLALSandCount", 5);
    const [mubLALOriCount, setmubLALOriCountState] = useLocalStorage("mubLALOriCount", 66);
    const [mubLALRupeeCost, setmubLALRupeeCost] = useLocalStorage("mubLALRupeeCost", 59.5);

    const [wbLALSilverMaskCount, setwbLALSilverMaskCountState] = useLocalStorage("wbLALSilverMaskCount", 332);
    const [wbLALGoldMaskCount, setwbLALGoldMaskCountState] = useLocalStorage("wbLALGoldMaskCount", 270);
    const [wbLALInsanityCount, setwbLALInsanityCountState] = useLocalStorage("wbLALInsanityCount", 28);
    const [wbLALSandCount, setwbLALSandCountState] = useLocalStorage("wbLALSandCount", 5);
    const [wbLALOriCount, setwbLALOriCountState] = useLocalStorage("wbLALOriCount", 32);
    const [wbLALRupeeCost, setwbLALRupeeCost] = useLocalStorage("wbLALRupeeCost", 30);

    const [lightBowCraftState, setLightBowCraftState] = useLocalStorage("lightBowCraftState", "grayscale(100%)")
    const [lightBowWeaponBonusState, setLightBowWeaponBonusState] = useLocalStorage("lightBowWeaponBonusState", "grayscale(100%)")
    const [lightBowWyrmprintSlotState, setLightBowWyrmprintSlotState] = useLocalStorage("lightBowWyrmprintSlotState", "grayscale(100%)")
    const [lightBowUnbindState, setLightBowUnbindState] = useLocalStorage("lightBowUnbindState", 0);
    const [lightBowRefineState, setLightBowRefineState] = useLocalStorage("lightBowRefineState", 0);

    const [mubLABoSilverMaskCount, setmubLABoSilverMaskCountState] = useLocalStorage("mubLABoSilverMaskCount", 516);
    const [mubLABoGoldMaskCount, setmubLABoGoldMaskCountState] = useLocalStorage("mubLABoASGoldMaskCount", 410);
    const [mubLABoInsanityCount, setmubLABoInsanityCountState] = useLocalStorage("mubLABoInsanityCount", 89);
    const [mubLABoGaleCount, setmubLABoGaleCountState] = useLocalStorage("mubLABoGaleCount", 30);
    const [mubLABoSandCount, setmubLABoSandCountState] = useLocalStorage("mubLABoSandCount", 5);
    const [mubLABoOriCount, setmubLABoOriCountState] = useLocalStorage("mubLABoOriCount", 66);
    const [mubLABoRupeeCost, setmubLABoRupeeCost] = useLocalStorage("mubLABoRupeeCost", 59.5);

    const [wbLABoSilverMaskCount, setwbLABoSilverMaskCountState] = useLocalStorage("wbLABoSilverMaskCount", 332);
    const [wbLABoGoldMaskCount, setwbLABoGoldMaskCountState] = useLocalStorage("wbLABoGoldMaskCount", 270);
    const [wbLABoInsanityCount, setwbLABoInsanityCountState] = useLocalStorage("wbLABoInsanityCount", 28);
    const [wbLABoSandCount, setwbLABoSandCountState] = useLocalStorage("wbLABoSandCount", 5);
    const [wbLABoOriCount, setwbLABoOriCountState] = useLocalStorage("wbLABoOriCount", 32);
    const [wbLABoRupeeCost, setwbLABoRupeeCost] = useLocalStorage("wbLABoRupeeCost", 30);

    const [lightWandCraftState, setLightWandCraftState] = useLocalStorage("lightWandCraftState", "grayscale(100%)")
    const [lightWandWeaponBonusState, setLightWandWeaponBonusState] = useLocalStorage("lightWandWeaponBonusState", "grayscale(100%)")
    const [lightWandWyrmprintSlotState, setLightWandWyrmprintSlotState] = useLocalStorage("lightWandWyrmprintSlotState", "grayscale(100%)")
    const [lightWandUnbindState, setLightWandUnbindState] = useLocalStorage("lightWandUnbindState", 0);
    const [lightWandRefineState, setLightWandRefineState] = useLocalStorage("lightWandRefineState", 0);

    const [mubLAWSilverMaskCount, setmubLAWSilverMaskCountState] = useLocalStorage("mubLAWSilverMaskCount", 516);
    const [mubLAWGoldMaskCount, setmubLAWGoldMaskCountState] = useLocalStorage("mubLAWASGoldMaskCount", 410);
    const [mubLAWInsanityCount, setmubLAWInsanityCountState] = useLocalStorage("mubLAWInsanityCount", 89);
    const [mubLAWGaleCount, setmubLAWGaleCountState] = useLocalStorage("mubLAWGaleCount", 30);
    const [mubLAWSandCount, setmubLAWSandCountState] = useLocalStorage("mubLAWSandCount", 5);
    const [mubLAWOriCount, setmubLAWOriCountState] = useLocalStorage("mubLAWOriCount", 66);
    const [mubLAWRupeeCost, setmubLAWRupeeCost] = useLocalStorage("mubLAWRupeeCost", 59.5);

    const [wbLAWSilverMaskCount, setwbLAWSilverMaskCountState] = useLocalStorage("wbLAWSilverMaskCount", 332);
    const [wbLAWGoldMaskCount, setwbLAWGoldMaskCountState] = useLocalStorage("wbLAWGoldMaskCount", 270);
    const [wbLAWInsanityCount, setwbLAWInsanityCountState] = useLocalStorage("wbLAWInsanityCount", 28);
    const [wbLAWSandCount, setwbLAWSandCountState] = useLocalStorage("wbLAWSandCount", 5);
    const [wbLAWOriCount, setwbLAWOriCountState] = useLocalStorage("wbLAWOriCount", 32);
    const [wbLAWRupeeCost, setwbLAWRupeeCost] = useLocalStorage("wbLAWRupeeCost", 30);

    const [lightStaffCraftState, setLightStaffCraftState] = useLocalStorage("lightStaffCraftState", "grayscale(100%)")
    const [lightStaffWeaponBonusState, setLightStaffWeaponBonusState] = useLocalStorage("lightStaffWeaponBonusState", "grayscale(100%)")
    const [lightStaffWyrmprintSlotState, setLightStaffWyrmprintSlotState] = useLocalStorage("lightStaffWyrmprintSlotState", "grayscale(100%)")
    const [lightStaffUnbindState, setLightStaffUnbindState] = useLocalStorage("lightStaffUnbindState", 0);
    const [lightStaffRefineState, setLightStaffRefineState] = useLocalStorage("lightStaffRefineState", 0);

    const [mubLAStSilverMaskCount, setmubLAStSilverMaskCountState] = useLocalStorage("mubLAStSilverMaskCount", 516);
    const [mubLAStGoldMaskCount, setmubLAStGoldMaskCountState] = useLocalStorage("mubLAStASGoldMaskCount", 410);
    const [mubLAStInsanityCount, setmubLAStInsanityCountState] = useLocalStorage("mubLAStInsanityCount", 89);
    const [mubLAStGaleCount, setmubLAStGaleCountState] = useLocalStorage("mubLAStGaleCount", 30);
    const [mubLAStSandCount, setmubLAStSandCountState] = useLocalStorage("mubLAStSandCount", 5);
    const [mubLAStOriCount, setmubLAStOriCountState] = useLocalStorage("mubLAStOriCount", 66);
    const [mubLAStRupeeCost, setmubLAStRupeeCost] = useLocalStorage("mubLAStRupeeCost", 59.5);

    const [wbLAStSilverMaskCount, setwbLAStSilverMaskCountState] = useLocalStorage("wbLAStSilverMaskCount", 332);
    const [wbLAStGoldMaskCount, setwbLAStGoldMaskCountState] = useLocalStorage("wbLAStGoldMaskCount", 270);
    const [wbLAStInsanityCount, setwbLAStInsanityCountState] = useLocalStorage("wbLAStInsanityCount", 28);
    const [wbLAStSandCount, setwbLAStSandCountState] = useLocalStorage("wbLAStSandCount", 5);
    const [wbLAStOriCount, setwbLAStOriCountState] = useLocalStorage("wbLAStOriCount", 32);
    const [wbLAStRupeeCost, setwbLAStRupeeCost] = useLocalStorage("wbLAStRupeeCost", 30);

    const [lightManacasterCraftState, setLightManacasterCraftState] = useLocalStorage("lightManacasterCraftState", "grayscale(100%)")
    const [lightManacasterWeaponBonusState, setLightManacasterWeaponBonusState] = useLocalStorage("lightManacasterWeaponBonusState", "grayscale(100%)")
    const [lightManacasterWyrmprintSlotState, setLightManacasterWyrmprintSlotState] = useLocalStorage("lightManacasterWyrmprintSlotState", "grayscale(100%)")
    const [lightManacasterUnbindState, setLightManacasterUnbindState] = useLocalStorage("lightManacasterUnbindState", 0);
    const [lightManacasterRefineState, setLightManacasterRefineState] = useLocalStorage("lightManacasterRefineState", 0);

    const [mubLAMSilverMaskCount, setmubLAMSilverMaskCountState] = useLocalStorage("mubLAMSilverMaskCount", 516);
    const [mubLAMGoldMaskCount, setmubLAMGoldMaskCountState] = useLocalStorage("mubLAMASGoldMaskCount", 410);
    const [mubLAMInsanityCount, setmubLAMInsanityCountState] = useLocalStorage("mubLAMInsanityCount", 89);
    const [mubLAMGaleCount, setmubLAMGaleCountState] = useLocalStorage("mubLAMGaleCount", 30);
    const [mubLAMSandCount, setmubLAMSandCountState] = useLocalStorage("mubLAMSandCount", 5);
    const [mubLAMOriCount, setmubLAMOriCountState] = useLocalStorage("mubLAMOriCount", 66);
    const [mubLAMRupeeCost, setmubLAMRupeeCost] = useLocalStorage("mubLAMRupeeCost", 59.5);

    const [wbLAMSilverMaskCount, setwbLAMSilverMaskCountState] = useLocalStorage("wbLAMSilverMaskCount", 332);
    const [wbLAMGoldMaskCount, setwbLAMGoldMaskCountState] = useLocalStorage("wbLAMGoldMaskCount", 270);
    const [wbLAMInsanityCount, setwbLAMInsanityCountState] = useLocalStorage("wbLAMInsanityCount", 28);
    const [wbLAMSandCount, setwbLAMSandCountState] = useLocalStorage("wbLAMSandCount", 5);
    const [wbLAMOriCount, setwbLAMOriCountState] = useLocalStorage("wbLAMOriCount", 32);
    const [wbLAMRupeeCost, setwbLAMRupeeCost] = useLocalStorage("wbLAMRupeeCost", 30);

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

    function lightWeaponSelection() {
        if (lightWeaponChoice == "sword") {
            return <LightAgitoSwordCost mubLASSilverMaskCount={mubLASSilverMaskCount} mubLASGoldMaskCount={mubLASGoldMaskCount} mubLASInsanityCount={mubLASInsanityCount} mubLASGaleCount={mubLASGaleCount} mubLASSandCount={mubLASSandCount} mubLASOriCount={mubLASOriCount} mubLASRupeeCost={mubLASRupeeCost} wbLASSilverMaskCount={wbLASSilverMaskCount} wbLASGoldMaskCount={wbLASGoldMaskCount} wbLASInsanityCount={wbLASInsanityCount} wbLASSandCount={wbLASSandCount} wbLASOriCount={wbLASOriCount} wbLASRupeeCost={wbLASRupeeCost} />
        }
        if (lightWeaponChoice == "blade") {
            return <LightAgitoBladeCost mubLABlSilverMaskCount={mubLABlSilverMaskCount} mubLABlGoldMaskCount={mubLABlGoldMaskCount} mubLABlInsanityCount={mubLABlInsanityCount} mubLABlGaleCount={mubLABlGaleCount} mubLABlSandCount={mubLABlSandCount} mubLABlOriCount={mubLABlOriCount} mubLABlRupeeCost={mubLABlRupeeCost} wbLABlSilverMaskCount={wbLABlSilverMaskCount} wbLABlGoldMaskCount={wbLABlGoldMaskCount} wbLABlInsanityCount={wbLABlInsanityCount} wbLABlSandCount={wbLABlSandCount} wbLABlOriCount={wbLABlOriCount} wbLABlRupeeCost={wbLABlRupeeCost} />
        }
        if (lightWeaponChoice == "dagger") {
            return <LightAgitoDaggerCost mubLADSilverMaskCount={mubLADSilverMaskCount} mubLADGoldMaskCount={mubLADGoldMaskCount} mubLADInsanityCount={mubLADInsanityCount} mubLADGaleCount={mubLADGaleCount} mubLADSandCount={mubLADSandCount} mubLADOriCount={mubLADOriCount} mubLADRupeeCost={mubLADRupeeCost} wbLADSilverMaskCount={wbLADSilverMaskCount} wbLADGoldMaskCount={wbLADGoldMaskCount} wbLADInsanityCount={wbLADInsanityCount} wbLADSandCount={wbLADSandCount} wbLADOriCount={wbLADOriCount} wbLADRupeeCost={wbLADRupeeCost} />
        }
        if (lightWeaponChoice == "axe") {
            return <LightAgitoAxeCost mubLAASilverMaskCount={mubLAASilverMaskCount} mubLAAGoldMaskCount={mubLAAGoldMaskCount} mubLAAInsanityCount={mubLAAInsanityCount} mubLAAGaleCount={mubLAAGaleCount} mubLAASandCount={mubLAASandCount} mubLAAOriCount={mubLAAOriCount} mubLAARupeeCost={mubLAARupeeCost} wbLAASilverMaskCount={wbLAASilverMaskCount} wbLAAGoldMaskCount={wbLAAGoldMaskCount} wbLAAInsanityCount={wbLAAInsanityCount} wbLAASandCount={wbLAASandCount} wbLAAOriCount={wbLAAOriCount} wbLAARupeeCost={wbLAARupeeCost} />
        }
        if (lightWeaponChoice == "lance") {
            return <LightAgitoLanceCost mubLALSilverMaskCount={mubLALSilverMaskCount} mubLALGoldMaskCount={mubLALGoldMaskCount} mubLALInsanityCount={mubLALInsanityCount} mubLALGaleCount={mubLALGaleCount} mubLALSandCount={mubLALSandCount} mubLALOriCount={mubLALOriCount} mubLALRupeeCost={mubLALRupeeCost} wbLALSilverMaskCount={wbLALSilverMaskCount} wbLALGoldMaskCount={wbLALGoldMaskCount} wbLALInsanityCount={wbLALInsanityCount} wbLALSandCount={wbLALSandCount} wbLALOriCount={wbLALOriCount} wbLALRupeeCost={wbLALRupeeCost} />
        }
        if (lightWeaponChoice == "bow") {
            return <LightAgitoBowCost mubLABoSilverMaskCount={mubLABoSilverMaskCount} mubLABoGoldMaskCount={mubLABoGoldMaskCount} mubLABoInsanityCount={mubLABoInsanityCount} mubLABoGaleCount={mubLABoGaleCount} mubLABoSandCount={mubLABoSandCount} mubLABoOriCount={mubLABoOriCount} mubLABoRupeeCost={mubLABoRupeeCost} wbLABoSilverMaskCount={wbLABoSilverMaskCount} wbLABoGoldMaskCount={wbLABoGoldMaskCount} wbLABoInsanityCount={wbLABoInsanityCount} wbLABoSandCount={wbLABoSandCount} wbLABoOriCount={wbLABoOriCount} wbLABoRupeeCost={wbLABoRupeeCost} />
        }
        if (lightWeaponChoice == "wand") {
            return <LightAgitoWandCost mubLAWSilverMaskCount={mubLAWSilverMaskCount} mubLAWGoldMaskCount={mubLAWGoldMaskCount} mubLAWInsanityCount={mubLAWInsanityCount} mubLAWGaleCount={mubLAWGaleCount} mubLAWSandCount={mubLAWSandCount} mubLAWOriCount={mubLAWOriCount} mubLAWRupeeCost={mubLAWRupeeCost} wbLAWSilverMaskCount={wbLAWSilverMaskCount} wbLAWGoldMaskCount={wbLAWGoldMaskCount} wbLAWInsanityCount={wbLAWInsanityCount} wbLAWSandCount={wbLAWSandCount} wbLAWOriCount={wbLAWOriCount} wbLAWRupeeCost={wbLAWRupeeCost} />
        }
        if (lightWeaponChoice == "staff") {
            return <LightAgitoStaffCost mubLAStSilverMaskCount={mubLAStSilverMaskCount} mubLAStGoldMaskCount={mubLAStGoldMaskCount} mubLAStInsanityCount={mubLAStInsanityCount} mubLAStGaleCount={mubLAStGaleCount} mubLAStSandCount={mubLAStSandCount} mubLAStOriCount={mubLAStOriCount} mubLAStRupeeCost={mubLAStRupeeCost} wbLAStSilverMaskCount={wbLAStSilverMaskCount} wbLAStGoldMaskCount={wbLAStGoldMaskCount} wbLAStInsanityCount={wbLAStInsanityCount} wbLAStSandCount={wbLAStSandCount} wbLAStOriCount={wbLAStOriCount} wbLAStRupeeCost={wbLAStRupeeCost} />
        }
        if (lightWeaponChoice == "manacaster") {
            return <LightAgitoManacasterCost mubLAMSilverMaskCount={mubLAMSilverMaskCount} mubLAMGoldMaskCount={mubLAMGoldMaskCount} mubLAMInsanityCount={mubLAMInsanityCount} mubLAMGaleCount={mubLAMGaleCount} mubLAMSandCount={mubLAMSandCount} mubLAMOriCount={mubLAMOriCount} mubLAMRupeeCost={mubLAMRupeeCost} wbLAMSilverMaskCount={wbLAMSilverMaskCount} wbLAMGoldMaskCount={wbLAMGoldMaskCount} wbLAMInsanityCount={wbLAMInsanityCount} wbLAMSandCount={wbLAMSandCount} wbLAMOriCount={wbLAMOriCount} wbLAMRupeeCost={wbLAMRupeeCost} />
        }
    }

    function craftLightSword() {
        if (lightSwordCraftState == "grayscale(100%)") {
            setLightSwordCraftState("grayscale(0%)")
            setLightWeaponChoiceState("sword")
            setmubLASSilverMaskCountState(mubLASSilverMaskCount - 40)
            setwbLASSilverMaskCountState(wbLASSilverMaskCount - 40)
            setmubLASGoldMaskCountState(mubLASGoldMaskCount - 30)
            setwbLASGoldMaskCountState(wbLASGoldMaskCount - 30)
            setmubLASSandCountState(mubLASSandCount - 1)
            setwbLASSandCountState(wbLASSandCount - 1)
            setmubLASRupeeCost(mubLASRupeeCost - 2)
            setwbLASRupeeCost(wbLASRupeeCost - 2)
        }
        else if (lightSwordCraftState == "grayscale(0%)") {
            setLightSwordCraftState("grayscale(100%)")
            setLightWeaponChoiceState("sword")
            setmubLASSilverMaskCountState(mubLASSilverMaskCount + 40)
            setwbLASSilverMaskCountState(wbLASSilverMaskCount + 40)
            setmubLASGoldMaskCountState(mubLASGoldMaskCount + 30)
            setwbLASGoldMaskCountState(wbLASGoldMaskCount + 30)
            setmubLASSandCountState(mubLASSandCount + 1)
            setwbLASSandCountState(wbLASSandCount + 1)
            setmubLASRupeeCost(mubLASRupeeCost + 2)
            setwbLASRupeeCost(wbLASRupeeCost + 2)
        }
    }

    function lightSwordWeaponBonus() {
        if (lightSwordWeaponBonusState == "grayscale(100%)") {
            setLightSwordWeaponBonusState("grayscale(0%)");
            setLightWeaponChoiceState("sword");
            setmubLASSilverMaskCountState(mubLASSilverMaskCount - 100)
            setwbLASSilverMaskCountState(wbLASSilverMaskCount - 100)
            setmubLASGoldMaskCountState(mubLASGoldMaskCount - 100)
            setwbLASGoldMaskCountState(wbLASGoldMaskCount - 100)
            setmubLASInsanityCountState(mubLASInsanityCount - 14)
            setwbLASInsanityCountState(wbLASInsanityCount - 14)
            setmubLASOriCountState(mubLASOriCount - 30)
            setwbLASOriCountState(wbLASOriCount - 30)
            setmubLASRupeeCost(mubLASRupeeCost - 10)
            setwbLASRupeeCost(wbLASRupeeCost - 10)
        }
        else if (lightSwordWeaponBonusState == "grayscale(0%)") {
            setLightSwordWeaponBonusState("grayscale(100%)");
            setLightWeaponChoiceState("sword");
            setmubLASSilverMaskCountState(mubLASSilverMaskCount + 100)
            setwbLASSilverMaskCountState(wbLASSilverMaskCount + 100)
            setmubLASGoldMaskCountState(mubLASGoldMaskCount + 100)
            setwbLASGoldMaskCountState(wbLASGoldMaskCount + 100)
            setmubLASInsanityCountState(mubLASInsanityCount + 14)
            setwbLASInsanityCountState(wbLASInsanityCount + 14)
            setmubLASOriCountState(mubLASOriCount + 30)
            setwbLASOriCountState(wbLASOriCount + 30)
            setmubLASRupeeCost(mubLASRupeeCost + 10)
            setwbLASRupeeCost(wbLASRupeeCost + 10)
        }
    }

    function lightSwordWyrmprintSlot() {
        if (lightSwordWyrmprintSlotState == "grayscale(100%)") {
            setLightSwordWyrmprintSlotState("grayscale(0%)");
            setLightWeaponChoiceState("sword");
            setmubLASSilverMaskCountState(mubLASSilverMaskCount - 16)
            setmubLASGoldMaskCountState(mubLASGoldMaskCount - 10)
            setmubLASOriCountState(mubLASOriCount - 1)
            setmubLASRupeeCost(mubLASRupeeCost - 2.5)
        }
        else if (lightSwordWyrmprintSlotState == "grayscale(0%)") {
            setLightSwordWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("sword");
            setmubLASSilverMaskCountState(mubLASSilverMaskCount + 16)
            setmubLASGoldMaskCountState(mubLASGoldMaskCount + 10)
            setmubLASOriCountState(mubLASOriCount + 1)
            setmubLASRupeeCost(mubLASRupeeCost + 2.5)
        }
    }

    function handleLightSwordUnbindIncrement(event) {
        setLightWeaponChoiceState("sword");
        if (lightSwordUnbindState < event.target.value) {
            if (event.target.value - lightSwordUnbindState == 1) {
                setLightSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubLASSilverMaskCountState(mubLASSilverMaskCount - 40)
                    setwbLASSilverMaskCountState(wbLASSilverMaskCount - 40)
                    setmubLASGoldMaskCountState(mubLASGoldMaskCount - 30)
                    setwbLASGoldMaskCountState(wbLASGoldMaskCount - 30)
                    setmubLASSandCountState(mubLASSandCount - 1)
                    setwbLASSandCountState(wbLASSandCount - 1)
                    setmubLASRupeeCost(mubLASRupeeCost - 2)
                    setwbLASRupeeCost(wbLASRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubLASSilverMaskCountState(mubLASSilverMaskCount - 16)
                    setwbLASSilverMaskCountState(wbLASSilverMaskCount - 16)
                    setmubLASGoldMaskCountState(mubLASGoldMaskCount - 10)
                    setwbLASGoldMaskCountState(wbLASGoldMaskCount - 10)
                    setmubLASInsanityCountState(mubLASInsanityCount - 7)
                    setwbLASInsanityCountState(wbLASInsanityCount - 7)
                    setmubLASOriCountState(mubLASOriCount - 1)
                    setwbLASOriCountState(wbLASOriCount - 1)
                    setmubLASRupeeCost(mubLASRupeeCost - 7.5)
                    setwbLASRupeeCost(wbLASRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubLASSilverMaskCountState(mubLASSilverMaskCount - 16)
                    setmubLASGoldMaskCountState(mubLASGoldMaskCount - 10)
                    setmubLASInsanityCountState(mubLASInsanityCount - 7)
                    setmubLASOriCountState(mubLASOriCount - 1)
                    setmubLASRupeeCost(mubLASRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubLASSilverMaskCountState(mubLASSilverMaskCount - 80)
                    setmubLASGoldMaskCountState(mubLASGoldMaskCount - 70)
                    setmubLASInsanityCountState(mubLASInsanityCount - 30)
                    setmubLASGaleCountState(mubLASGaleCount - 20)
                    setmubLASOriCountState(mubLASOriCount - 20)
                    setmubLASRupeeCost(mubLASRupeeCost - 2)
                }
            }
        }
        else if (lightSwordUnbindState > event.target.value) {
            if (lightSwordUnbindState - event.target.value == 1) {
                setLightSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubLASSilverMaskCountState(mubLASSilverMaskCount + 40)
                    setwbLASSilverMaskCountState(wbLASSilverMaskCount + 40)
                    setmubLASGoldMaskCountState(mubLASGoldMaskCount + 30)
                    setwbLASGoldMaskCountState(wbLASGoldMaskCount + 30)
                    setmubLASSandCountState(mubLASSandCount + 1)
                    setwbLASSandCountState(wbLASSandCount + 1)
                    setmubLASRupeeCost(mubLASRupeeCost + 2)
                    setwbLASRupeeCost(wbLASRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubLASSilverMaskCountState(mubLASSilverMaskCount + 16)
                    setwbLASSilverMaskCountState(wbLASSilverMaskCount + 16)
                    setmubLASGoldMaskCountState(mubLASGoldMaskCount + 10)
                    setwbLASGoldMaskCountState(wbLASGoldMaskCount + 10)
                    setmubLASInsanityCountState(mubLASInsanityCount + 7)
                    setwbLASInsanityCountState(wbLASInsanityCount + 7)
                    setmubLASOriCountState(mubLASOriCount + 1)
                    setwbLASOriCountState(wbLASOriCount + 1)
                    setmubLASRupeeCost(mubLASRupeeCost + 7.5)
                    setwbLASRupeeCost(wbLASRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubLASSilverMaskCountState(mubLASSilverMaskCount + 16)
                    setmubLASGoldMaskCountState(mubLASGoldMaskCount + 10)
                    setmubLASInsanityCountState(mubLASInsanityCount + 7)
                    setmubLASOriCountState(mubLASOriCount + 1)
                    setmubLASRupeeCost(mubLASRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubLASSilverMaskCountState(mubLASSilverMaskCount + 80)
                    setmubLASGoldMaskCountState(mubLASGoldMaskCount + 70)
                    setmubLASInsanityCountState(mubLASInsanityCount + 30)
                    setmubLASGaleCountState(mubLASGaleCount + 20)
                    setmubLASOriCountState(mubLASOriCount + 20)
                    setmubLASRupeeCost(mubLASRupeeCost + 2)
                }
            }
        }
    }

    function handleLightSwordRefineIncrement(event) {
        setLightWeaponChoiceState("sword");
        if (lightSwordRefineState < event.target.value) {
            if (event.target.value - lightSwordRefineState == 1) {
                setLightSwordRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubLASSilverMaskCountState(mubLASSilverMaskCount - 16);
                    setwbLASSilverMaskCountState(wbLASSilverMaskCount - 16);
                    setmubLASGoldMaskCountState(mubLASGoldMaskCount - 10);
                    setwbLASGoldMaskCountState(wbLASGoldMaskCount - 10);
                    setmubLASInsanityCountState(mubLASInsanityCount - 7);
                    setwbLASInsanityCountState(wbLASInsanityCount - 7);
                    setmubLASOriCountState(mubLASOriCount - 1);
                    setwbLASOriCountState(wbLASOriCount - 1);
                    setmubLASRupeeCost(mubLASRupeeCost - 2.5);
                    setwbLASRupeeCost(wbLASRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubLASSilverMaskCountState(mubLASSilverMaskCount - 40)
                    setmubLASGoldMaskCountState(mubLASGoldMaskCount - 30);
                    setmubLASInsanityCountState(mubLASInsanityCount - 10);
                    setmubLASGaleCountState(mubLASGaleCount - 10);
                    setmubLASOriCountState(mubLASOriCount - 10);
                    setmubLASRupeeCost(mubLASRupeeCost - 2.5);
                }
            }
        }
        else if (lightSwordRefineState > event.target.value) {
            if (lightSwordRefineState - event.target.value == 1) {
                setLightSwordRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubLASSilverMaskCountState(mubLASSilverMaskCount + 16);
                    setwbLASSilverMaskCountState(wbLASSilverMaskCount + 16);
                    setmubLASGoldMaskCountState(mubLASGoldMaskCount + 10);
                    setwbLASGoldMaskCountState(wbLASGoldMaskCount + 10);
                    setmubLASInsanityCountState(mubLASInsanityCount + 7);
                    setwbLASInsanityCountState(wbLASInsanityCount + 7);
                    setmubLASOriCountState(mubLASOriCount + 1);
                    setwbLASOriCountState(wbLASOriCount + 1);
                    setmubLASRupeeCost(mubLASRupeeCost + 2.5);
                    setwbLASRupeeCost(wbLASRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubLASSilverMaskCountState(mubLASSilverMaskCount + 40)
                    setmubLASGoldMaskCountState(mubLASGoldMaskCount + 30);
                    setmubLASInsanityCountState(mubLASInsanityCount + 10);
                    setmubLASGaleCountState(mubLASGaleCount + 10);
                    setmubLASOriCountState(mubLASOriCount + 10);
                    setmubLASRupeeCost(mubLASRupeeCost + 2.5);
                }
            }
        }
    }

    function craftLightBlade() {
        if (lightBladeCraftState == "grayscale(100%)") {
            setLightBladeCraftState("grayscale(0%)")
            setLightWeaponChoiceState("blade")
            setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - 40)
            setwbLABlSilverMaskCountState(wbLABlSilverMaskCount - 40)
            setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - 30)
            setwbLABlGoldMaskCountState(wbLABlGoldMaskCount - 30)
            setmubLABlSandCountState(mubLABlSandCount - 1)
            setwbLABlSandCountState(wbLABlSandCount - 1)
            setmubLABlRupeeCost(mubLABlRupeeCost - 2)
            setwbLABlRupeeCost(wbLABlRupeeCost - 2)
        }
        else if (lightBladeCraftState == "grayscale(0%)") {
            setLightBladeCraftState("grayscale(100%)")
            setLightWeaponChoiceState("blade")
            setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + 40)
            setwbLABlSilverMaskCountState(wbLABlSilverMaskCount + 40)
            setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + 30)
            setwbLABlGoldMaskCountState(wbLABlGoldMaskCount + 30)
            setmubLABlSandCountState(mubLABlSandCount + 1)
            setwbLABlSandCountState(wbLABlSandCount + 1)
            setmubLABlRupeeCost(mubLABlRupeeCost + 2)
            setwbLABlRupeeCost(wbLABlRupeeCost + 2)
        }
    }

    function lightBladeWeaponBonus() {
        if (lightBladeWeaponBonusState == "grayscale(100%)") {
            setLightBladeWeaponBonusState("grayscale(0%)");
            setLightWeaponChoiceState("blade");
            setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - 100)
            setwbLABlSilverMaskCountState(wbLABlSilverMaskCount - 100)
            setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - 100)
            setwbLABlGoldMaskCountState(wbLABlGoldMaskCount - 100)
            setmubLABlInsanityCountState(mubLABlInsanityCount - 14)
            setwbLABlInsanityCountState(wbLABlInsanityCount - 14)
            setmubLABlOriCountState(mubLABlOriCount - 30)
            setwbLABlOriCountState(wbLABlOriCount - 30)
            setmubLABlRupeeCost(mubLABlRupeeCost - 10)
            setwbLABlRupeeCost(wbLABlRupeeCost - 10)
        }
        else if (lightBladeWeaponBonusState == "grayscale(0%)") {
            setLightBladeWeaponBonusState("grayscale(100%)");
            setLightWeaponChoiceState("blade");
            setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + 100)
            setwbLABlSilverMaskCountState(wbLABlSilverMaskCount + 100)
            setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + 100)
            setwbLABlGoldMaskCountState(wbLABlGoldMaskCount + 100)
            setmubLABlInsanityCountState(mubLABlInsanityCount + 14)
            setwbLABlInsanityCountState(wbLABlInsanityCount + 14)
            setmubLABlOriCountState(mubLABlOriCount + 30)
            setwbLABlOriCountState(wbLABlOriCount + 30)
            setmubLABlRupeeCost(mubLABlRupeeCost + 10)
            setwbLABlRupeeCost(wbLABlRupeeCost + 10)
        }
    }

    function lightBladeWyrmprintSlot() {
        if (lightBladeWyrmprintSlotState == "grayscale(100%)") {
            setLightBladeWyrmprintSlotState("grayscale(0%)");
            setLightWeaponChoiceState("blade");
            setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - 16)
            setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - 10)
            setmubLABlOriCountState(mubLABlOriCount - 1)
            setmubLABlRupeeCost(mubLABlRupeeCost - 2.5)
        }
        else if (lightBladeWyrmprintSlotState == "grayscale(0%)") {
            setLightBladeWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("blade");
            setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + 16)
            setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + 10)
            setmubLABlOriCountState(mubLABlOriCount + 1)
            setmubLABlRupeeCost(mubLABlRupeeCost + 2.5)
        }
    }

    function handleLightBladeUnbindIncrement(event) {
        setLightWeaponChoiceState("blade")
        if (lightBladeUnbindState < event.target.value) {
            if (event.target.value - lightBladeUnbindState == 1) {
                setLightBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - 40)
                    setwbLABlSilverMaskCountState(wbLABlSilverMaskCount - 40)
                    setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - 30)
                    setwbLABlGoldMaskCountState(wbLABlGoldMaskCount - 30)
                    setmubLABlSandCountState(mubLABlSandCount - 1)
                    setwbLABlSandCountState(wbLABlSandCount - 1)
                    setmubLABlRupeeCost(mubLABlRupeeCost - 2)
                    setwbLABlRupeeCost(wbLABlRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - 16)
                    setwbLABlSilverMaskCountState(wbLABlSilverMaskCount - 16)
                    setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - 10)
                    setwbLABlGoldMaskCountState(wbLABlGoldMaskCount - 10)
                    setmubLABlInsanityCountState(mubLABlInsanityCount - 7)
                    setwbLABlInsanityCountState(wbLABlInsanityCount - 7)
                    setmubLABlOriCountState(mubLABlOriCount - 1)
                    setwbLABlOriCountState(wbLABlOriCount - 1)
                    setmubLABlRupeeCost(mubLABlRupeeCost - 7.5)
                    setwbLABlRupeeCost(wbLABlRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - 16)
                    setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - 10)
                    setmubLABlInsanityCountState(mubLABlInsanityCount - 7)
                    setmubLABlOriCountState(mubLABlOriCount - 1)
                    setmubLABlRupeeCost(mubLABlRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - 80)
                    setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - 70)
                    setmubLABlInsanityCountState(mubLABlInsanityCount - 30)
                    setmubLABlGaleCountState(mubLABlGaleCount - 20)
                    setmubLABlOriCountState(mubLABlOriCount - 20)
                    setmubLABlRupeeCost(mubLABlRupeeCost - 2)
                }
            }
        }
        else if (lightBladeUnbindState > event.target.value) {
            if (lightBladeUnbindState - event.target.value == 1) {
                setLightBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + 40)
                    setwbLABlSilverMaskCountState(wbLABlSilverMaskCount + 40)
                    setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + 30)
                    setwbLABlGoldMaskCountState(wbLABlGoldMaskCount + 30)
                    setmubLABlSandCountState(mubLABlSandCount + 1)
                    setwbLABlSandCountState(wbLABlSandCount + 1)
                    setmubLABlRupeeCost(mubLABlRupeeCost + 2)
                    setwbLABlRupeeCost(wbLABlRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + 16)
                    setwbLABlSilverMaskCountState(wbLABlSilverMaskCount + 16)
                    setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + 10)
                    setwbLABlGoldMaskCountState(wbLABlGoldMaskCount + 10)
                    setmubLABlInsanityCountState(mubLABlInsanityCount + 7)
                    setwbLABlInsanityCountState(wbLABlInsanityCount + 7)
                    setmubLABlOriCountState(mubLABlOriCount + 1)
                    setwbLABlOriCountState(wbLABlOriCount + 1)
                    setmubLABlRupeeCost(mubLABlRupeeCost + 7.5)
                    setwbLABlRupeeCost(wbLABlRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + 16)
                    setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + 10)
                    setmubLABlInsanityCountState(mubLABlInsanityCount + 7)
                    setmubLABlOriCountState(mubLABlOriCount + 1)
                    setmubLABlRupeeCost(mubLABlRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + 80)
                    setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + 70)
                    setmubLABlInsanityCountState(mubLABlInsanityCount + 30)
                    setmubLABlGaleCountState(mubLABlGaleCount + 20)
                    setmubLABlOriCountState(mubLABlOriCount + 20)
                    setmubLABlRupeeCost(mubLABlRupeeCost + 2)
                }
            }
        }
    }

    function handleLightBladeRefineIncrement(event) {
        setLightWeaponChoiceState("blade");
        if (lightBladeRefineState < event.target.value) {
            if (event.target.value - lightBladeRefineState == 1) {
                setLightBladeRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - 16);
                    setwbLABlSilverMaskCountState(wbLABlSilverMaskCount - 16);
                    setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - 10);
                    setwbLABlGoldMaskCountState(wbLABlGoldMaskCount - 10);
                    setmubLABlInsanityCountState(mubLABlInsanityCount - 7);
                    setwbLABlInsanityCountState(wbLABlInsanityCount - 7);
                    setmubLABlOriCountState(mubLABlOriCount - 1);
                    setwbLABlOriCountState(wbLABlOriCount - 1);
                    setmubLABlRupeeCost(mubLABlRupeeCost - 2.5);
                    setwbLABlRupeeCost(wbLABlRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - 40)
                    setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - 30);
                    setmubLABlInsanityCountState(mubLABlInsanityCount - 10);
                    setmubLABlGaleCountState(mubLABlGaleCount - 10);
                    setmubLABlOriCountState(mubLABlOriCount - 10);
                    setmubLABlRupeeCost(mubLABlRupeeCost - 2.5);
                }
            }
        }
        else if (lightBladeRefineState > event.target.value) {
            if (lightBladeRefineState - event.target.value == 1) {
                setLightBladeRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + 16);
                    setwbLABlSilverMaskCountState(wbLABlSilverMaskCount + 16);
                    setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + 10);
                    setwbLABlGoldMaskCountState(wbLABlGoldMaskCount + 10);
                    setmubLABlInsanityCountState(mubLABlInsanityCount + 7);
                    setwbLABlInsanityCountState(wbLABlInsanityCount + 7);
                    setmubLABlOriCountState(mubLABlOriCount + 1);
                    setwbLABlOriCountState(wbLABlOriCount + 1);
                    setmubLABlRupeeCost(mubLABlRupeeCost + 2.5);
                    setwbLABlRupeeCost(wbLABlRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + 40)
                    setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + 30);
                    setmubLABlInsanityCountState(mubLABlInsanityCount + 10);
                    setmubLABlGaleCountState(mubLABlGaleCount + 10);
                    setmubLABlOriCountState(mubLABlOriCount + 10);
                    setmubLABlRupeeCost(mubLABlRupeeCost + 2.5);
                }
            }
        }
    }

    function craftLightDagger() {
        if (lightDaggerCraftState == "grayscale(100%)") {
            setLightDaggerCraftState("grayscale(0%)")
            setLightWeaponChoiceState("dagger")
            setmubLADSilverMaskCountState(mubLADSilverMaskCount - 40)
            setwbLADSilverMaskCountState(wbLADSilverMaskCount - 40)
            setmubLADGoldMaskCountState(mubLADGoldMaskCount - 30)
            setwbLADGoldMaskCountState(wbLADGoldMaskCount - 30)
            setmubLADSandCountState(mubLADSandCount - 1)
            setwbLADSandCountState(wbLADSandCount - 1)
            setmubLADRupeeCost(mubLADRupeeCost - 2)
            setwbLADRupeeCost(wbLADRupeeCost - 2)
        }
        else if (lightDaggerCraftState == "grayscale(0%)") {
            setLightDaggerCraftState("grayscale(100%)")
            setLightWeaponChoiceState("dagger")
            setmubLADSilverMaskCountState(mubLADSilverMaskCount + 40)
            setwbLADSilverMaskCountState(wbLADSilverMaskCount + 40)
            setmubLADGoldMaskCountState(mubLADGoldMaskCount + 30)
            setwbLADGoldMaskCountState(wbLADGoldMaskCount + 30)
            setmubLADSandCountState(mubLADSandCount + 1)
            setwbLADSandCountState(wbLADSandCount + 1)
            setmubLADRupeeCost(mubLADRupeeCost + 2)
            setwbLADRupeeCost(wbLADRupeeCost + 2)
        }
    }

    function lightDaggerWeaponBonus() {
        if (lightDaggerWeaponBonusState == "grayscale(100%)") {
            setLightDaggerWeaponBonusState("grayscale(0%)");
            setLightWeaponChoiceState("dagger");
            setmubLADSilverMaskCountState(mubLADSilverMaskCount - 100)
            setwbLADSilverMaskCountState(wbLADSilverMaskCount - 100)
            setmubLADGoldMaskCountState(mubLADGoldMaskCount - 100)
            setwbLADGoldMaskCountState(wbLADGoldMaskCount - 100)
            setmubLADInsanityCountState(mubLADInsanityCount - 14)
            setwbLADInsanityCountState(wbLADInsanityCount - 14)
            setmubLADOriCountState(mubLADOriCount - 30)
            setwbLADOriCountState(wbLADOriCount - 30)
            setmubLADRupeeCost(mubLADRupeeCost - 10)
            setwbLADRupeeCost(wbLADRupeeCost - 10)
        }
        else if (lightDaggerWeaponBonusState == "grayscale(0%)") {
            setLightDaggerWeaponBonusState("grayscale(100%)");
            setLightWeaponChoiceState("dagger");
            setmubLADSilverMaskCountState(mubLADSilverMaskCount + 100)
            setwbLADSilverMaskCountState(wbLADSilverMaskCount + 100)
            setmubLADGoldMaskCountState(mubLADGoldMaskCount + 100)
            setwbLADGoldMaskCountState(wbLADGoldMaskCount + 100)
            setmubLADInsanityCountState(mubLADInsanityCount + 14)
            setwbLADInsanityCountState(wbLADInsanityCount + 14)
            setmubLADOriCountState(mubLADOriCount + 30)
            setwbLADOriCountState(wbLADOriCount + 30)
            setmubLADRupeeCost(mubLADRupeeCost + 10)
            setwbLADRupeeCost(wbLADRupeeCost + 10)
        }
    }

    function lightDaggerWyrmprintSlot() {
        if (lightDaggerWyrmprintSlotState == "grayscale(100%)") {
            setLightDaggerWyrmprintSlotState("grayscale(0%)");
            setLightWeaponChoiceState("dagger");
            setmubLADSilverMaskCountState(mubLADSilverMaskCount - 16)
            setmubLADGoldMaskCountState(mubLADGoldMaskCount - 10)
            setmubLADOriCountState(mubLADOriCount - 1)
            setmubLADRupeeCost(mubLADRupeeCost - 2.5)
        }
        else if (lightDaggerWyrmprintSlotState == "grayscale(0%)") {
            setLightDaggerWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("dagger");
            setmubLADSilverMaskCountState(mubLADSilverMaskCount + 16)
            setmubLADGoldMaskCountState(mubLADGoldMaskCount + 10)
            setmubLADOriCountState(mubLADOriCount + 1)
            setmubLADRupeeCost(mubLADRupeeCost + 2.5)
        }
    }

    function handleLightDaggerUnbindIncrement(event) {
        setLightWeaponChoiceState("dagger")
        if (lightDaggerUnbindState < event.target.value) {
            if (event.target.value - lightDaggerUnbindState == 1) {
                setLightDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubLADSilverMaskCountState(mubLADSilverMaskCount - 40)
                    setwbLADSilverMaskCountState(wbLADSilverMaskCount - 40)
                    setmubLADGoldMaskCountState(mubLADGoldMaskCount - 30)
                    setwbLADGoldMaskCountState(wbLADGoldMaskCount - 30)
                    setmubLADSandCountState(mubLADSandCount - 1)
                    setwbLADSandCountState(wbLADSandCount - 1)
                    setmubLADRupeeCost(mubLADRupeeCost - 2)
                    setwbLADRupeeCost(wbLADRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubLADSilverMaskCountState(mubLADSilverMaskCount - 16)
                    setwbLADSilverMaskCountState(wbLADSilverMaskCount - 16)
                    setmubLADGoldMaskCountState(mubLADGoldMaskCount - 10)
                    setwbLADGoldMaskCountState(wbLADGoldMaskCount - 10)
                    setmubLADInsanityCountState(mubLADInsanityCount - 7)
                    setwbLADInsanityCountState(wbLADInsanityCount - 7)
                    setmubLADOriCountState(mubLADOriCount - 1)
                    setwbLADOriCountState(wbLADOriCount - 1)
                    setmubLADRupeeCost(mubLADRupeeCost - 7.5)
                    setwbLADRupeeCost(wbLADRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubLADSilverMaskCountState(mubLADSilverMaskCount - 16)
                    setmubLADGoldMaskCountState(mubLADGoldMaskCount - 10)
                    setmubLADInsanityCountState(mubLADInsanityCount - 7)
                    setmubLADOriCountState(mubLADOriCount - 1)
                    setmubLADRupeeCost(mubLADRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubLADSilverMaskCountState(mubLADSilverMaskCount - 80)
                    setmubLADGoldMaskCountState(mubLADGoldMaskCount - 70)
                    setmubLADInsanityCountState(mubLADInsanityCount - 30)
                    setmubLADGaleCountState(mubLADGaleCount - 20)
                    setmubLADOriCountState(mubLADOriCount - 20)
                    setmubLADRupeeCost(mubLADRupeeCost - 2)
                }
            }
        }
        else if (lightDaggerUnbindState > event.target.value) {
            if (lightDaggerUnbindState - event.target.value == 1) {
                setLightDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubLADSilverMaskCountState(mubLADSilverMaskCount + 40)
                    setwbLADSilverMaskCountState(wbLADSilverMaskCount + 40)
                    setmubLADGoldMaskCountState(mubLADGoldMaskCount + 30)
                    setwbLADGoldMaskCountState(wbLADGoldMaskCount + 30)
                    setmubLADSandCountState(mubLADSandCount + 1)
                    setwbLADSandCountState(wbLADSandCount + 1)
                    setmubLADRupeeCost(mubLADRupeeCost + 2)
                    setwbLADRupeeCost(wbLADRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubLADSilverMaskCountState(mubLADSilverMaskCount + 16)
                    setwbLADSilverMaskCountState(wbLADSilverMaskCount + 16)
                    setmubLADGoldMaskCountState(mubLADGoldMaskCount + 10)
                    setwbLADGoldMaskCountState(wbLADGoldMaskCount + 10)
                    setmubLADInsanityCountState(mubLADInsanityCount + 7)
                    setwbLADInsanityCountState(wbLADInsanityCount + 7)
                    setmubLADOriCountState(mubLADOriCount + 1)
                    setwbLADOriCountState(wbLADOriCount + 1)
                    setmubLADRupeeCost(mubLADRupeeCost + 7.5)
                    setwbLADRupeeCost(wbLADRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubLADSilverMaskCountState(mubLADSilverMaskCount + 16)
                    setmubLADGoldMaskCountState(mubLADGoldMaskCount + 10)
                    setmubLADInsanityCountState(mubLADInsanityCount + 7)
                    setmubLADOriCountState(mubLADOriCount + 1)
                    setmubLADRupeeCost(mubLADRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubLADSilverMaskCountState(mubLADSilverMaskCount + 80)
                    setmubLADGoldMaskCountState(mubLADGoldMaskCount + 70)
                    setmubLADInsanityCountState(mubLADInsanityCount + 30)
                    setmubLADGaleCountState(mubLADGaleCount + 20)
                    setmubLADOriCountState(mubLADOriCount + 20)
                    setmubLADRupeeCost(mubLADRupeeCost + 2)
                }
            }
        }
    }

    function handleLightDaggerRefineIncrement(event) {
        setLightWeaponChoiceState("dagger");
        if (lightDaggerRefineState < event.target.value) {
            if (event.target.value - lightDaggerRefineState == 1) {
                setLightDaggerRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubLADSilverMaskCountState(mubLADSilverMaskCount - 16);
                    setwbLADSilverMaskCountState(wbLADSilverMaskCount - 16);
                    setmubLADGoldMaskCountState(mubLADGoldMaskCount - 10);
                    setwbLADGoldMaskCountState(wbLADGoldMaskCount - 10);
                    setmubLADInsanityCountState(mubLADInsanityCount - 7);
                    setwbLADInsanityCountState(wbLADInsanityCount - 7);
                    setmubLADOriCountState(mubLADOriCount - 1);
                    setwbLADOriCountState(wbLADOriCount - 1);
                    setmubLADRupeeCost(mubLADRupeeCost - 2.5);
                    setwbLADRupeeCost(wbLADRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubLADSilverMaskCountState(mubLADSilverMaskCount - 40)
                    setmubLADGoldMaskCountState(mubLADGoldMaskCount - 30);
                    setmubLADInsanityCountState(mubLADInsanityCount - 10);
                    setmubLADGaleCountState(mubLADGaleCount - 10);
                    setmubLADOriCountState(mubLADOriCount - 10);
                    setmubLADRupeeCost(mubLADRupeeCost - 2.5);
                }
            }
        }
        else if (lightDaggerRefineState > event.target.value) {
            if (lightDaggerRefineState - event.target.value == 1) {
                setLightDaggerRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubLADSilverMaskCountState(mubLADSilverMaskCount + 16);
                    setwbLADSilverMaskCountState(wbLADSilverMaskCount + 16);
                    setmubLADGoldMaskCountState(mubLADGoldMaskCount + 10);
                    setwbLADGoldMaskCountState(wbLADGoldMaskCount + 10);
                    setmubLADInsanityCountState(mubLADInsanityCount + 7);
                    setwbLADInsanityCountState(wbLADInsanityCount + 7);
                    setmubLADOriCountState(mubLADOriCount + 1);
                    setwbLADOriCountState(wbLADOriCount + 1);
                    setmubLADRupeeCost(mubLADRupeeCost + 2.5);
                    setwbLADRupeeCost(wbLADRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubLADSilverMaskCountState(mubLADSilverMaskCount + 40)
                    setmubLADGoldMaskCountState(mubLADGoldMaskCount + 30);
                    setmubLADInsanityCountState(mubLADInsanityCount + 10);
                    setmubLADGaleCountState(mubLADGaleCount + 10);
                    setmubLADOriCountState(mubLADOriCount + 10);
                    setmubLADRupeeCost(mubLADRupeeCost + 2.5);
                }
            }
        }
    }

    function craftLightAxe() {
        if (lightAxeCraftState == "grayscale(100%)") {
            setLightAxeCraftState("grayscale(0%)")
            setLightWeaponChoiceState("axe")
            setmubLAASilverMaskCountState(mubLAASilverMaskCount - 40)
            setwbLAASilverMaskCountState(wbLAASilverMaskCount - 40)
            setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - 30)
            setwbLAAGoldMaskCountState(wbLAAGoldMaskCount - 30)
            setmubLAASandCountState(mubLAASandCount - 1)
            setwbLAASandCountState(wbLAASandCount - 1)
            setmubLAARupeeCost(mubLAARupeeCost - 2)
            setwbLAARupeeCost(wbLAARupeeCost - 2)
        }
        else if (lightAxeCraftState == "grayscale(0%)") {
            setLightAxeCraftState("grayscale(100%)")
            setLightWeaponChoiceState("axe")
            setmubLAASilverMaskCountState(mubLAASilverMaskCount + 40)
            setwbLAASilverMaskCountState(wbLAASilverMaskCount + 40)
            setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + 30)
            setwbLAAGoldMaskCountState(wbLAAGoldMaskCount + 30)
            setmubLAASandCountState(mubLAASandCount + 1)
            setwbLAASandCountState(wbLAASandCount + 1)
            setmubLAARupeeCost(mubLAARupeeCost + 2)
            setwbLAARupeeCost(wbLAARupeeCost + 2)
        }
    }

    function lightAxeWeaponBonus() {
        if (lightAxeWeaponBonusState == "grayscale(100%)") {
            setLightAxeWeaponBonusState("grayscale(0%)");
            setLightWeaponChoiceState("axe");
            setmubLAASilverMaskCountState(mubLAASilverMaskCount - 100)
            setwbLAASilverMaskCountState(wbLAASilverMaskCount - 100)
            setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - 100)
            setwbLAAGoldMaskCountState(wbLAAGoldMaskCount - 100)
            setmubLAAInsanityCountState(mubLAAInsanityCount - 14)
            setwbLAAInsanityCountState(wbLAAInsanityCount - 14)
            setmubLAAOriCountState(mubLAAOriCount - 30)
            setwbLAAOriCountState(wbLAAOriCount - 30)
            setmubLAARupeeCost(mubLAARupeeCost - 10)
            setwbLAARupeeCost(wbLAARupeeCost - 10)
        }
        else if (lightAxeWeaponBonusState == "grayscale(0%)") {
            setLightAxeWeaponBonusState("grayscale(100%)");
            setLightWeaponChoiceState("axe");
            setmubLAASilverMaskCountState(mubLAASilverMaskCount + 100)
            setwbLAASilverMaskCountState(wbLAASilverMaskCount + 100)
            setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + 100)
            setwbLAAGoldMaskCountState(wbLAAGoldMaskCount + 100)
            setmubLAAInsanityCountState(mubLAAInsanityCount + 14)
            setwbLAAInsanityCountState(wbLAAInsanityCount + 14)
            setmubLAAOriCountState(mubLAAOriCount + 30)
            setwbLAAOriCountState(wbLAAOriCount + 30)
            setmubLAARupeeCost(mubLAARupeeCost + 10)
            setwbLAARupeeCost(wbLAARupeeCost + 10)
        }
    }

    function lightAxeWyrmprintSlot() {
        if (lightAxeWyrmprintSlotState == "grayscale(100%)") {
            setLightAxeWyrmprintSlotState("grayscale(0%)");
            setLightWeaponChoiceState("axe");
            setmubLAASilverMaskCountState(mubLAASilverMaskCount - 16)
            setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - 10)
            setmubLAAOriCountState(mubLAAOriCount - 1)
            setmubLAARupeeCost(mubLAARupeeCost - 2.5)
        }
        else if (lightAxeWyrmprintSlotState == "grayscale(0%)") {
            setLightAxeWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("axe");
            setmubLAASilverMaskCountState(mubLAASilverMaskCount + 16)
            setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + 10)
            setmubLAAOriCountState(mubLAAOriCount + 1)
            setmubLAARupeeCost(mubLAARupeeCost + 2.5)
        }
    }

    function handleLightAxeUnbindIncrement(event) {
        setLightWeaponChoiceState("axe")
        if (lightAxeUnbindState < event.target.value) {
            if (event.target.value - lightAxeUnbindState == 1) {
                setLightAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubLAASilverMaskCountState(mubLAASilverMaskCount - 40)
                    setwbLAASilverMaskCountState(wbLAASilverMaskCount - 40)
                    setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - 30)
                    setwbLAAGoldMaskCountState(wbLAAGoldMaskCount - 30)
                    setmubLAASandCountState(mubLAASandCount - 1)
                    setwbLAASandCountState(wbLAASandCount - 1)
                    setmubLAARupeeCost(mubLAARupeeCost - 2)
                    setwbLAARupeeCost(wbLAARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubLAASilverMaskCountState(mubLAASilverMaskCount - 16)
                    setwbLAASilverMaskCountState(wbLAASilverMaskCount - 16)
                    setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - 10)
                    setwbLAAGoldMaskCountState(wbLAAGoldMaskCount - 10)
                    setmubLAAInsanityCountState(mubLAAInsanityCount - 7)
                    setwbLAAInsanityCountState(wbLAAInsanityCount - 7)
                    setmubLAAOriCountState(mubLAAOriCount - 1)
                    setwbLAAOriCountState(wbLAAOriCount - 1)
                    setmubLAARupeeCost(mubLAARupeeCost - 7.5)
                    setwbLAARupeeCost(wbLAARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubLAASilverMaskCountState(mubLAASilverMaskCount - 16)
                    setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - 10)
                    setmubLAAInsanityCountState(mubLAAInsanityCount - 7)
                    setmubLAAOriCountState(mubLAAOriCount - 1)
                    setmubLAARupeeCost(mubLAARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubLAASilverMaskCountState(mubLAASilverMaskCount - 80)
                    setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - 70)
                    setmubLAAInsanityCountState(mubLAAInsanityCount - 30)
                    setmubLAAGaleCountState(mubLAAGaleCount - 20)
                    setmubLAAOriCountState(mubLAAOriCount - 20)
                    setmubLAARupeeCost(mubLAARupeeCost - 2)
                }
            }
        }
        else if (lightAxeUnbindState > event.target.value) {
            if (lightAxeUnbindState - event.target.value == 1) {
                setLightAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubLAASilverMaskCountState(mubLAASilverMaskCount + 40)
                    setwbLAASilverMaskCountState(wbLAASilverMaskCount + 40)
                    setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + 30)
                    setwbLAAGoldMaskCountState(wbLAAGoldMaskCount + 30)
                    setmubLAASandCountState(mubLAASandCount + 1)
                    setwbLAASandCountState(wbLAASandCount + 1)
                    setmubLAARupeeCost(mubLAARupeeCost + 2)
                    setwbLAARupeeCost(wbLAARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubLAASilverMaskCountState(mubLAASilverMaskCount + 16)
                    setwbLAASilverMaskCountState(wbLAASilverMaskCount + 16)
                    setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + 10)
                    setwbLAAGoldMaskCountState(wbLAAGoldMaskCount + 10)
                    setmubLAAInsanityCountState(mubLAAInsanityCount + 7)
                    setwbLAAInsanityCountState(wbLAAInsanityCount + 7)
                    setmubLAAOriCountState(mubLAAOriCount + 1)
                    setwbLAAOriCountState(wbLAAOriCount + 1)
                    setmubLAARupeeCost(mubLAARupeeCost + 7.5)
                    setwbLAARupeeCost(wbLAARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubLAASilverMaskCountState(mubLAASilverMaskCount + 16)
                    setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + 10)
                    setmubLAAInsanityCountState(mubLAAInsanityCount + 7)
                    setmubLAAOriCountState(mubLAAOriCount + 1)
                    setmubLAARupeeCost(mubLAARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubLAASilverMaskCountState(mubLAASilverMaskCount + 80)
                    setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + 70)
                    setmubLAAInsanityCountState(mubLAAInsanityCount + 30)
                    setmubLAAGaleCountState(mubLAAGaleCount + 20)
                    setmubLAAOriCountState(mubLAAOriCount + 20)
                    setmubLAARupeeCost(mubLAARupeeCost + 2)
                }
            }
        }
    }

    function handleLightAxeRefineIncrement(event) {
        setLightWeaponChoiceState("axe");
        if (lightAxeRefineState < event.target.value) {
            if (event.target.value - lightAxeRefineState == 1) {
                setLightAxeRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubLAASilverMaskCountState(mubLAASilverMaskCount - 16);
                    setwbLAASilverMaskCountState(wbLAASilverMaskCount - 16);
                    setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - 10);
                    setwbLAAGoldMaskCountState(wbLAAGoldMaskCount - 10);
                    setmubLAAInsanityCountState(mubLAAInsanityCount - 7);
                    setwbLAAInsanityCountState(wbLAAInsanityCount - 7);
                    setmubLAAOriCountState(mubLAAOriCount - 1);
                    setwbLAAOriCountState(wbLAAOriCount - 1);
                    setmubLAARupeeCost(mubLAARupeeCost - 2.5);
                    setwbLAARupeeCost(wbLAARupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubLAASilverMaskCountState(mubLAASilverMaskCount - 40)
                    setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - 30);
                    setmubLAAInsanityCountState(mubLAAInsanityCount - 10);
                    setmubLAAGaleCountState(mubLAAGaleCount - 10);
                    setmubLAAOriCountState(mubLAAOriCount - 10);
                    setmubLAARupeeCost(mubLAARupeeCost - 2.5);
                }
            }
        }
        else if (lightAxeRefineState > event.target.value) {
            if (lightAxeRefineState - event.target.value == 1) {
                setLightAxeRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubLAASilverMaskCountState(mubLAASilverMaskCount + 16);
                    setwbLAASilverMaskCountState(wbLAASilverMaskCount + 16);
                    setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + 10);
                    setwbLAAGoldMaskCountState(wbLAAGoldMaskCount + 10);
                    setmubLAAInsanityCountState(mubLAAInsanityCount + 7);
                    setwbLAAInsanityCountState(wbLAAInsanityCount + 7);
                    setmubLAAOriCountState(mubLAAOriCount + 1);
                    setwbLAAOriCountState(wbLAAOriCount + 1);
                    setmubLAARupeeCost(mubLAARupeeCost + 2.5);
                    setwbLAARupeeCost(wbLAARupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubLAASilverMaskCountState(mubLAASilverMaskCount + 40)
                    setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + 30);
                    setmubLAAInsanityCountState(mubLAAInsanityCount + 10);
                    setmubLAAGaleCountState(mubLAAGaleCount + 10);
                    setmubLAAOriCountState(mubLAAOriCount + 10);
                    setmubLAARupeeCost(mubLAARupeeCost + 2.5);
                }
            }
        }
    }

    function craftLightLance() {
        if (lightLanceCraftState == "grayscale(100%)") {
            setLightLanceCraftState("grayscale(0%)")
            setLightWeaponChoiceState("lance")
            setmubLALSilverMaskCountState(mubLALSilverMaskCount - 40)
            setwbLALSilverMaskCountState(wbLALSilverMaskCount - 40)
            setmubLALGoldMaskCountState(mubLALGoldMaskCount - 30)
            setwbLALGoldMaskCountState(wbLALGoldMaskCount - 30)
            setmubLALSandCountState(mubLALSandCount - 1)
            setwbLALSandCountState(wbLALSandCount - 1)
            setmubLALRupeeCost(mubLALRupeeCost - 2)
            setwbLALRupeeCost(wbLALRupeeCost - 2)
        }
        else if (lightLanceCraftState == "grayscale(0%)") {
            setLightLanceCraftState("grayscale(100%)")
            setLightWeaponChoiceState("lance")
            setmubLALSilverMaskCountState(mubLALSilverMaskCount + 40)
            setwbLALSilverMaskCountState(wbLALSilverMaskCount + 40)
            setmubLALGoldMaskCountState(mubLALGoldMaskCount + 30)
            setwbLALGoldMaskCountState(wbLALGoldMaskCount + 30)
            setmubLALSandCountState(mubLALSandCount + 1)
            setwbLALSandCountState(wbLALSandCount + 1)
            setmubLALRupeeCost(mubLALRupeeCost + 2)
            setwbLALRupeeCost(wbLALRupeeCost + 2)
        }
    }

    function lightLanceWeaponBonus() {
        if (lightLanceWeaponBonusState == "grayscale(100%)") {
            setLightLanceWeaponBonusState("grayscale(0%)");
            setLightWeaponChoiceState("lance");
            setmubLALSilverMaskCountState(mubLALSilverMaskCount - 100)
            setwbLALSilverMaskCountState(wbLALSilverMaskCount - 100)
            setmubLALGoldMaskCountState(mubLALGoldMaskCount - 100)
            setwbLALGoldMaskCountState(wbLALGoldMaskCount - 100)
            setmubLALInsanityCountState(mubLALInsanityCount - 14)
            setwbLALInsanityCountState(wbLALInsanityCount - 14)
            setmubLALOriCountState(mubLALOriCount - 30)
            setwbLALOriCountState(wbLALOriCount - 30)
            setmubLALRupeeCost(mubLALRupeeCost - 10)
            setwbLALRupeeCost(wbLALRupeeCost - 10)
        }
        else if (lightLanceWeaponBonusState == "grayscale(0%)") {
            setLightLanceWeaponBonusState("grayscale(100%)");
            setLightWeaponChoiceState("lance");
            setmubLALSilverMaskCountState(mubLALSilverMaskCount + 100)
            setwbLALSilverMaskCountState(wbLALSilverMaskCount + 100)
            setmubLALGoldMaskCountState(mubLALGoldMaskCount + 100)
            setwbLALGoldMaskCountState(wbLALGoldMaskCount + 100)
            setmubLALInsanityCountState(mubLALInsanityCount + 14)
            setwbLALInsanityCountState(wbLALInsanityCount + 14)
            setmubLALOriCountState(mubLALOriCount + 30)
            setwbLALOriCountState(wbLALOriCount + 30)
            setmubLALRupeeCost(mubLALRupeeCost + 10)
            setwbLALRupeeCost(wbLALRupeeCost + 10)
        }
    }

    function lightLanceWyrmprintSlot() {
        if (lightLanceWyrmprintSlotState == "grayscale(100%)") {
            setLightLanceWyrmprintSlotState("grayscale(0%)");
            setLightWeaponChoiceState("lance");
            setmubLALSilverMaskCountState(mubLALSilverMaskCount - 16)
            setmubLALGoldMaskCountState(mubLALGoldMaskCount - 10)
            setmubLALOriCountState(mubLALOriCount - 1)
            setmubLALRupeeCost(mubLALRupeeCost - 2.5)
        }
        else if (lightLanceWyrmprintSlotState == "grayscale(0%)") {
            setLightLanceWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("lance");
            setmubLALSilverMaskCountState(mubLALSilverMaskCount + 16)
            setmubLALGoldMaskCountState(mubLALGoldMaskCount + 10)
            setmubLALOriCountState(mubLALOriCount + 1)
            setmubLALRupeeCost(mubLALRupeeCost + 2.5)
        }
    }

    function handleLightLanceUnbindIncrement(event) {
        setLightWeaponChoiceState("lance")
        if (lightLanceUnbindState < event.target.value) {
            if (event.target.value - lightLanceUnbindState == 1) {
                setLightLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubLALSilverMaskCountState(mubLALSilverMaskCount - 40)
                    setwbLALSilverMaskCountState(wbLALSilverMaskCount - 40)
                    setmubLALGoldMaskCountState(mubLALGoldMaskCount - 30)
                    setwbLALGoldMaskCountState(wbLALGoldMaskCount - 30)
                    setmubLALSandCountState(mubLALSandCount - 1)
                    setwbLALSandCountState(wbLALSandCount - 1)
                    setmubLALRupeeCost(mubLALRupeeCost - 2)
                    setwbLALRupeeCost(wbLALRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubLALSilverMaskCountState(mubLALSilverMaskCount - 16)
                    setwbLALSilverMaskCountState(wbLALSilverMaskCount - 16)
                    setmubLALGoldMaskCountState(mubLALGoldMaskCount - 10)
                    setwbLALGoldMaskCountState(wbLALGoldMaskCount - 10)
                    setmubLALInsanityCountState(mubLALInsanityCount - 7)
                    setwbLALInsanityCountState(wbLALInsanityCount - 7)
                    setmubLALOriCountState(mubLALOriCount - 1)
                    setwbLALOriCountState(wbLALOriCount - 1)
                    setmubLALRupeeCost(mubLALRupeeCost - 7.5)
                    setwbLALRupeeCost(wbLALRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubLALSilverMaskCountState(mubLALSilverMaskCount - 16)
                    setmubLALGoldMaskCountState(mubLALGoldMaskCount - 10)
                    setmubLALInsanityCountState(mubLALInsanityCount - 7)
                    setmubLALOriCountState(mubLALOriCount - 1)
                    setmubLALRupeeCost(mubLALRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubLALSilverMaskCountState(mubLALSilverMaskCount - 80)
                    setmubLALGoldMaskCountState(mubLALGoldMaskCount - 70)
                    setmubLALInsanityCountState(mubLALInsanityCount - 30)
                    setmubLALGaleCountState(mubLALGaleCount - 20)
                    setmubLALOriCountState(mubLALOriCount - 20)
                    setmubLALRupeeCost(mubLALRupeeCost - 2)
                }
            }
        }
        else if (lightLanceUnbindState > event.target.value) {
            if (lightLanceUnbindState - event.target.value == 1) {
                setLightLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubLALSilverMaskCountState(mubLALSilverMaskCount + 40)
                    setwbLALSilverMaskCountState(wbLALSilverMaskCount + 40)
                    setmubLALGoldMaskCountState(mubLALGoldMaskCount + 30)
                    setwbLALGoldMaskCountState(wbLALGoldMaskCount + 30)
                    setmubLALSandCountState(mubLALSandCount + 1)
                    setwbLALSandCountState(wbLALSandCount + 1)
                    setmubLALRupeeCost(mubLALRupeeCost + 2)
                    setwbLALRupeeCost(wbLALRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubLALSilverMaskCountState(mubLALSilverMaskCount + 16)
                    setwbLALSilverMaskCountState(wbLALSilverMaskCount + 16)
                    setmubLALGoldMaskCountState(mubLALGoldMaskCount + 10)
                    setwbLALGoldMaskCountState(wbLALGoldMaskCount + 10)
                    setmubLALInsanityCountState(mubLALInsanityCount + 7)
                    setwbLALInsanityCountState(wbLALInsanityCount + 7)
                    setmubLALOriCountState(mubLALOriCount + 1)
                    setwbLALOriCountState(wbLALOriCount + 1)
                    setmubLALRupeeCost(mubLALRupeeCost + 7.5)
                    setwbLALRupeeCost(wbLALRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubLALSilverMaskCountState(mubLALSilverMaskCount + 16)
                    setmubLALGoldMaskCountState(mubLALGoldMaskCount + 10)
                    setmubLALInsanityCountState(mubLALInsanityCount + 7)
                    setmubLALOriCountState(mubLALOriCount + 1)
                    setmubLALRupeeCost(mubLALRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubLALSilverMaskCountState(mubLALSilverMaskCount + 80)
                    setmubLALGoldMaskCountState(mubLALGoldMaskCount + 70)
                    setmubLALInsanityCountState(mubLALInsanityCount + 30)
                    setmubLALGaleCountState(mubLALGaleCount + 20)
                    setmubLALOriCountState(mubLALOriCount + 20)
                    setmubLALRupeeCost(mubLALRupeeCost + 2)
                }
            }
        }
    }

    function handleLightLanceRefineIncrement(event) {
        setLightWeaponChoiceState("lance");
        if (lightLanceRefineState < event.target.value) {
            if (event.target.value - lightLanceRefineState == 1) {
                setLightLanceRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubLALSilverMaskCountState(mubLALSilverMaskCount - 16);
                    setwbLALSilverMaskCountState(wbLALSilverMaskCount - 16);
                    setmubLALGoldMaskCountState(mubLALGoldMaskCount - 10);
                    setwbLALGoldMaskCountState(wbLALGoldMaskCount - 10);
                    setmubLALInsanityCountState(mubLALInsanityCount - 7);
                    setwbLALInsanityCountState(wbLALInsanityCount - 7);
                    setmubLALOriCountState(mubLALOriCount - 1);
                    setwbLALOriCountState(wbLALOriCount - 1);
                    setmubLALRupeeCost(mubLALRupeeCost - 2.5);
                    setwbLALRupeeCost(wbLALRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubLALSilverMaskCountState(mubLALSilverMaskCount - 40)
                    setmubLALGoldMaskCountState(mubLALGoldMaskCount - 30);
                    setmubLALInsanityCountState(mubLALInsanityCount - 10);
                    setmubLALGaleCountState(mubLALGaleCount - 10);
                    setmubLALOriCountState(mubLALOriCount - 10);
                    setmubLALRupeeCost(mubLALRupeeCost - 2.5);
                }
            }
        }
        else if (lightLanceRefineState > event.target.value) {
            if (lightLanceRefineState - event.target.value == 1) {
                setLightLanceRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubLALSilverMaskCountState(mubLALSilverMaskCount + 16);
                    setwbLALSilverMaskCountState(wbLALSilverMaskCount + 16);
                    setmubLALGoldMaskCountState(mubLALGoldMaskCount + 10);
                    setwbLALGoldMaskCountState(wbLALGoldMaskCount + 10);
                    setmubLALInsanityCountState(mubLALInsanityCount + 7);
                    setwbLALInsanityCountState(wbLALInsanityCount + 7);
                    setmubLALOriCountState(mubLALOriCount + 1);
                    setwbLALOriCountState(wbLALOriCount + 1);
                    setmubLALRupeeCost(mubLALRupeeCost + 2.5);
                    setwbLALRupeeCost(wbLALRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubLALSilverMaskCountState(mubLALSilverMaskCount + 40)
                    setmubLALGoldMaskCountState(mubLALGoldMaskCount + 30);
                    setmubLALInsanityCountState(mubLALInsanityCount + 10);
                    setmubLALGaleCountState(mubLALGaleCount + 10);
                    setmubLALOriCountState(mubLALOriCount + 10);
                    setmubLALRupeeCost(mubLALRupeeCost + 2.5);
                }
            }
        }
    }

    function craftLightWand() {
        if (lightWandCraftState == "grayscale(100%)") {
            setLightWandCraftState("grayscale(0%)")
            setLightWeaponChoiceState("wand")
            setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - 40)
            setwbLAWSilverMaskCountState(wbLAWSilverMaskCount - 40)
            setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - 30)
            setwbLAWGoldMaskCountState(wbLAWGoldMaskCount - 30)
            setmubLAWSandCountState(mubLAWSandCount - 1)
            setwbLAWSandCountState(wbLAWSandCount - 1)
            setmubLAWRupeeCost(mubLAWRupeeCost - 2)
            setwbLAWRupeeCost(wbLAWRupeeCost - 2)
        }
        else if (lightWandCraftState == "grayscale(0%)") {
            setLightWandCraftState("grayscale(100%)")
            setLightWeaponChoiceState("wand")
            setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + 40)
            setwbLAWSilverMaskCountState(wbLAWSilverMaskCount + 40)
            setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + 30)
            setwbLAWGoldMaskCountState(wbLAWGoldMaskCount + 30)
            setmubLAWSandCountState(mubLAWSandCount + 1)
            setwbLAWSandCountState(wbLAWSandCount + 1)
            setmubLAWRupeeCost(mubLAWRupeeCost + 2)
            setwbLAWRupeeCost(wbLAWRupeeCost + 2)
        }
    }

    function lightWandWeaponBonus() {
        if (lightWandWeaponBonusState == "grayscale(100%)") {
            setLightWandWeaponBonusState("grayscale(0%)");
            setLightWeaponChoiceState("wand");
            setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - 100)
            setwbLAWSilverMaskCountState(wbLAWSilverMaskCount - 100)
            setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - 100)
            setwbLAWGoldMaskCountState(wbLAWGoldMaskCount - 100)
            setmubLAWInsanityCountState(mubLAWInsanityCount - 14)
            setwbLAWInsanityCountState(wbLAWInsanityCount - 14)
            setmubLAWOriCountState(mubLAWOriCount - 30)
            setwbLAWOriCountState(wbLAWOriCount - 30)
            setmubLAWRupeeCost(mubLAWRupeeCost - 10)
            setwbLAWRupeeCost(wbLAWRupeeCost - 10)
        }
        else if (lightWandWeaponBonusState == "grayscale(0%)") {
            setLightWandWeaponBonusState("grayscale(100%)");
            setLightWeaponChoiceState("wand");
            setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + 100)
            setwbLAWSilverMaskCountState(wbLAWSilverMaskCount + 100)
            setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + 100)
            setwbLAWGoldMaskCountState(wbLAWGoldMaskCount + 100)
            setmubLAWInsanityCountState(mubLAWInsanityCount + 14)
            setwbLAWInsanityCountState(wbLAWInsanityCount + 14)
            setmubLAWOriCountState(mubLAWOriCount + 30)
            setwbLAWOriCountState(wbLAWOriCount + 30)
            setmubLAWRupeeCost(mubLAWRupeeCost + 10)
            setwbLAWRupeeCost(wbLAWRupeeCost + 10)
        }
    }

    function lightWandWyrmprintSlot() {
        if (lightWandWyrmprintSlotState == "grayscale(100%)") {
            setLightWandWyrmprintSlotState("grayscale(0%)");
            setLightWeaponChoiceState("wand");
            setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - 16)
            setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - 10)
            setmubLAWOriCountState(mubLAWOriCount - 1)
            setmubLAWRupeeCost(mubLAWRupeeCost - 2.5)
        }
        else if (lightWandWyrmprintSlotState == "grayscale(0%)") {
            setLightWandWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("wand");
            setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + 16)
            setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + 10)
            setmubLAWOriCountState(mubLAWOriCount + 1)
            setmubLAWRupeeCost(mubLAWRupeeCost + 2.5)
        }
    }

    function handleLightWandUnbindIncrement(event) {
        setLightWeaponChoiceState("wand")
        if (lightWandUnbindState < event.target.value) {
            if (event.target.value - lightWandUnbindState == 1) {
                setLightWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - 40)
                    setwbLAWSilverMaskCountState(wbLAWSilverMaskCount - 40)
                    setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - 30)
                    setwbLAWGoldMaskCountState(wbLAWGoldMaskCount - 30)
                    setmubLAWSandCountState(mubLAWSandCount - 1)
                    setwbLAWSandCountState(wbLAWSandCount - 1)
                    setmubLAWRupeeCost(mubLAWRupeeCost - 2)
                    setwbLAWRupeeCost(wbLAWRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - 16)
                    setwbLAWSilverMaskCountState(wbLAWSilverMaskCount - 16)
                    setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - 10)
                    setwbLAWGoldMaskCountState(wbLAWGoldMaskCount - 10)
                    setmubLAWInsanityCountState(mubLAWInsanityCount - 7)
                    setwbLAWInsanityCountState(wbLAWInsanityCount - 7)
                    setmubLAWOriCountState(mubLAWOriCount - 1)
                    setwbLAWOriCountState(wbLAWOriCount - 1)
                    setmubLAWRupeeCost(mubLAWRupeeCost - 7.5)
                    setwbLAWRupeeCost(wbLAWRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - 16)
                    setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - 10)
                    setmubLAWInsanityCountState(mubLAWInsanityCount - 7)
                    setmubLAWOriCountState(mubLAWOriCount - 1)
                    setmubLAWRupeeCost(mubLAWRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - 80)
                    setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - 70)
                    setmubLAWInsanityCountState(mubLAWInsanityCount - 30)
                    setmubLAWGaleCountState(mubLAWGaleCount - 20)
                    setmubLAWOriCountState(mubLAWOriCount - 20)
                    setmubLAWRupeeCost(mubLAWRupeeCost - 2)
                }
            }
        }
        else if (lightWandUnbindState > event.target.value) {
            if (lightWandUnbindState - event.target.value == 1) {
                setLightWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + 40)
                    setwbLAWSilverMaskCountState(wbLAWSilverMaskCount + 40)
                    setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + 30)
                    setwbLAWGoldMaskCountState(wbLAWGoldMaskCount + 30)
                    setmubLAWSandCountState(mubLAWSandCount + 1)
                    setwbLAWSandCountState(wbLAWSandCount + 1)
                    setmubLAWRupeeCost(mubLAWRupeeCost + 2)
                    setwbLAWRupeeCost(wbLAWRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + 16)
                    setwbLAWSilverMaskCountState(wbLAWSilverMaskCount + 16)
                    setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + 10)
                    setwbLAWGoldMaskCountState(wbLAWGoldMaskCount + 10)
                    setmubLAWInsanityCountState(mubLAWInsanityCount + 7)
                    setwbLAWInsanityCountState(wbLAWInsanityCount + 7)
                    setmubLAWOriCountState(mubLAWOriCount + 1)
                    setwbLAWOriCountState(wbLAWOriCount + 1)
                    setmubLAWRupeeCost(mubLAWRupeeCost + 7.5)
                    setwbLAWRupeeCost(wbLAWRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + 16)
                    setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + 10)
                    setmubLAWInsanityCountState(mubLAWInsanityCount + 7)
                    setmubLAWOriCountState(mubLAWOriCount + 1)
                    setmubLAWRupeeCost(mubLAWRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + 80)
                    setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + 70)
                    setmubLAWInsanityCountState(mubLAWInsanityCount + 30)
                    setmubLAWGaleCountState(mubLAWGaleCount + 20)
                    setmubLAWOriCountState(mubLAWOriCount + 20)
                    setmubLAWRupeeCost(mubLAWRupeeCost + 2)
                }
            }
        }
    }

    function handleLightWandRefineIncrement(event) {
        setLightWeaponChoiceState("wand");
        if (lightWandRefineState < event.target.value) {
            if (event.target.value - lightWandRefineState == 1) {
                setLightWandRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - 16);
                    setwbLAWSilverMaskCountState(wbLAWSilverMaskCount - 16);
                    setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - 10);
                    setwbLAWGoldMaskCountState(wbLAWGoldMaskCount - 10);
                    setmubLAWInsanityCountState(mubLAWInsanityCount - 7);
                    setwbLAWInsanityCountState(wbLAWInsanityCount - 7);
                    setmubLAWOriCountState(mubLAWOriCount - 1);
                    setwbLAWOriCountState(wbLAWOriCount - 1);
                    setmubLAWRupeeCost(mubLAWRupeeCost - 2.5);
                    setwbLAWRupeeCost(wbLAWRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - 40)
                    setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - 30);
                    setmubLAWInsanityCountState(mubLAWInsanityCount - 10);
                    setmubLAWGaleCountState(mubLAWGaleCount - 10);
                    setmubLAWOriCountState(mubLAWOriCount - 10);
                    setmubLAWRupeeCost(mubLAWRupeeCost - 2.5);
                }
            }
        }
        else if (lightWandRefineState > event.target.value) {
            if (lightWandRefineState - event.target.value == 1) {
                setLightWandRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + 16);
                    setwbLAWSilverMaskCountState(wbLAWSilverMaskCount + 16);
                    setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + 10);
                    setwbLAWGoldMaskCountState(wbLAWGoldMaskCount + 10);
                    setmubLAWInsanityCountState(mubLAWInsanityCount + 7);
                    setwbLAWInsanityCountState(wbLAWInsanityCount + 7);
                    setmubLAWOriCountState(mubLAWOriCount + 1);
                    setwbLAWOriCountState(wbLAWOriCount + 1);
                    setmubLAWRupeeCost(mubLAWRupeeCost + 2.5);
                    setwbLAWRupeeCost(wbLAWRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + 40)
                    setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + 30);
                    setmubLAWInsanityCountState(mubLAWInsanityCount + 10);
                    setmubLAWGaleCountState(mubLAWGaleCount + 10);
                    setmubLAWOriCountState(mubLAWOriCount + 10);
                    setmubLAWRupeeCost(mubLAWRupeeCost + 2.5);
                }
            }
        }
    }

    function craftLightBow() {
        if (lightBowCraftState == "grayscale(100%)") {
            setLightBowCraftState("grayscale(0%)")
            setLightWeaponChoiceState("bow")
            setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - 40)
            setwbLABoSilverMaskCountState(wbLABoSilverMaskCount - 40)
            setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - 30)
            setwbLABoGoldMaskCountState(wbLABoGoldMaskCount - 30)
            setmubLABoSandCountState(mubLABoSandCount - 1)
            setwbLABoSandCountState(wbLABoSandCount - 1)
            setmubLABoRupeeCost(mubLABoRupeeCost - 2)
            setwbLABoRupeeCost(wbLABoRupeeCost - 2)
        }
        else if (lightBowCraftState == "grayscale(0%)") {
            setLightBowCraftState("grayscale(100%)")
            setLightWeaponChoiceState("bow")
            setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + 40)
            setwbLABoSilverMaskCountState(wbLABoSilverMaskCount + 40)
            setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + 30)
            setwbLABoGoldMaskCountState(wbLABoGoldMaskCount + 30)
            setmubLABoSandCountState(mubLABoSandCount + 1)
            setwbLABoSandCountState(wbLABoSandCount + 1)
            setmubLABoRupeeCost(mubLABoRupeeCost + 2)
            setwbLABoRupeeCost(wbLABoRupeeCost + 2)
        }
    }

    function lightBowWeaponBonus() {
        if (lightBowWeaponBonusState == "grayscale(100%)") {
            setLightBowWeaponBonusState("grayscale(0%)");
            setLightWeaponChoiceState("bow");
            setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - 100)
            setwbLABoSilverMaskCountState(wbLABoSilverMaskCount - 100)
            setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - 100)
            setwbLABoGoldMaskCountState(wbLABoGoldMaskCount - 100)
            setmubLABoInsanityCountState(mubLABoInsanityCount - 14)
            setwbLABoInsanityCountState(wbLABoInsanityCount - 14)
            setmubLABoOriCountState(mubLABoOriCount - 30)
            setwbLABoOriCountState(wbLABoOriCount - 30)
            setmubLABoRupeeCost(mubLABoRupeeCost - 10)
            setwbLABoRupeeCost(wbLABoRupeeCost - 10)
        }
        else if (lightBowWeaponBonusState == "grayscale(0%)") {
            setLightBowWeaponBonusState("grayscale(100%)");
            setLightWeaponChoiceState("bow");
            setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + 100)
            setwbLABoSilverMaskCountState(wbLABoSilverMaskCount + 100)
            setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + 100)
            setwbLABoGoldMaskCountState(wbLABoGoldMaskCount + 100)
            setmubLABoInsanityCountState(mubLABoInsanityCount + 14)
            setwbLABoInsanityCountState(wbLABoInsanityCount + 14)
            setmubLABoOriCountState(mubLABoOriCount + 30)
            setwbLABoOriCountState(wbLABoOriCount + 30)
            setmubLABoRupeeCost(mubLABoRupeeCost + 10)
            setwbLABoRupeeCost(wbLABoRupeeCost + 10)
        }
    }

    function lightBowWyrmprintSlot() {
        if (lightBowWyrmprintSlotState == "grayscale(100%)") {
            setLightBowWyrmprintSlotState("grayscale(0%)");
            setLightWeaponChoiceState("bow");
            setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - 16)
            setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - 10)
            setmubLABoOriCountState(mubLABoOriCount - 1)
            setmubLABoRupeeCost(mubLABoRupeeCost - 2.5)
        }
        else if (lightBowWyrmprintSlotState == "grayscale(0%)") {
            setLightBowWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("bow");
            setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + 16)
            setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + 10)
            setmubLABoOriCountState(mubLABoOriCount + 1)
            setmubLABoRupeeCost(mubLABoRupeeCost + 2.5)
        }
    }

    function handleLightBowUnbindIncrement(event) {
        setLightWeaponChoiceState("bow")
        if (lightBowUnbindState < event.target.value) {
            if (event.target.value - lightBowUnbindState == 1) {
                setLightBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - 40)
                    setwbLABoSilverMaskCountState(wbLABoSilverMaskCount - 40)
                    setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - 30)
                    setwbLABoGoldMaskCountState(wbLABoGoldMaskCount - 30)
                    setmubLABoSandCountState(mubLABoSandCount - 1)
                    setwbLABoSandCountState(wbLABoSandCount - 1)
                    setmubLABoRupeeCost(mubLABoRupeeCost - 2)
                    setwbLABoRupeeCost(wbLABoRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - 16)
                    setwbLABoSilverMaskCountState(wbLABoSilverMaskCount - 16)
                    setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - 10)
                    setwbLABoGoldMaskCountState(wbLABoGoldMaskCount - 10)
                    setmubLABoInsanityCountState(mubLABoInsanityCount - 7)
                    setwbLABoInsanityCountState(wbLABoInsanityCount - 7)
                    setmubLABoOriCountState(mubLABoOriCount - 1)
                    setwbLABoOriCountState(wbLABoOriCount - 1)
                    setmubLABoRupeeCost(mubLABoRupeeCost - 7.5)
                    setwbLABoRupeeCost(wbLABoRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - 16)
                    setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - 10)
                    setmubLABoInsanityCountState(mubLABoInsanityCount - 7)
                    setmubLABoOriCountState(mubLABoOriCount - 1)
                    setmubLABoRupeeCost(mubLABoRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - 80)
                    setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - 70)
                    setmubLABoInsanityCountState(mubLABoInsanityCount - 30)
                    setmubLABoGaleCountState(mubLABoGaleCount - 20)
                    setmubLABoOriCountState(mubLABoOriCount - 20)
                    setmubLABoRupeeCost(mubLABoRupeeCost - 2)
                }
            }
        }
        else if (lightBowUnbindState > event.target.value) {
            if (lightBowUnbindState - event.target.value == 1) {
                setLightBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + 40)
                    setwbLABoSilverMaskCountState(wbLABoSilverMaskCount + 40)
                    setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + 30)
                    setwbLABoGoldMaskCountState(wbLABoGoldMaskCount + 30)
                    setmubLABoSandCountState(mubLABoSandCount + 1)
                    setwbLABoSandCountState(wbLABoSandCount + 1)
                    setmubLABoRupeeCost(mubLABoRupeeCost + 2)
                    setwbLABoRupeeCost(wbLABoRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + 16)
                    setwbLABoSilverMaskCountState(wbLABoSilverMaskCount + 16)
                    setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + 10)
                    setwbLABoGoldMaskCountState(wbLABoGoldMaskCount + 10)
                    setmubLABoInsanityCountState(mubLABoInsanityCount + 7)
                    setwbLABoInsanityCountState(wbLABoInsanityCount + 7)
                    setmubLABoOriCountState(mubLABoOriCount + 1)
                    setwbLABoOriCountState(wbLABoOriCount + 1)
                    setmubLABoRupeeCost(mubLABoRupeeCost + 7.5)
                    setwbLABoRupeeCost(wbLABoRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + 16)
                    setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + 10)
                    setmubLABoInsanityCountState(mubLABoInsanityCount + 7)
                    setmubLABoOriCountState(mubLABoOriCount + 1)
                    setmubLABoRupeeCost(mubLABoRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + 80)
                    setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + 70)
                    setmubLABoInsanityCountState(mubLABoInsanityCount + 30)
                    setmubLABoGaleCountState(mubLABoGaleCount + 20)
                    setmubLABoOriCountState(mubLABoOriCount + 20)
                    setmubLABoRupeeCost(mubLABoRupeeCost + 2)
                }
            }
        }
    }

    function handleLightBowRefineIncrement(event) {
        setLightWeaponChoiceState("bow");
        if (lightBowRefineState < event.target.value) {
            if (event.target.value - lightBowRefineState == 1) {
                setLightBowRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - 16);
                    setwbLABoSilverMaskCountState(wbLABoSilverMaskCount - 16);
                    setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - 10);
                    setwbLABoGoldMaskCountState(wbLABoGoldMaskCount - 10);
                    setmubLABoInsanityCountState(mubLABoInsanityCount - 7);
                    setwbLABoInsanityCountState(wbLABoInsanityCount - 7);
                    setmubLABoOriCountState(mubLABoOriCount - 1);
                    setwbLABoOriCountState(wbLABoOriCount - 1);
                    setmubLABoRupeeCost(mubLABoRupeeCost - 2.5);
                    setwbLABoRupeeCost(wbLABoRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - 40)
                    setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - 30);
                    setmubLABoInsanityCountState(mubLABoInsanityCount - 10);
                    setmubLABoGaleCountState(mubLABoGaleCount - 10);
                    setmubLABoOriCountState(mubLABoOriCount - 10);
                    setmubLABoRupeeCost(mubLABoRupeeCost - 2.5);
                }
            }
        }
        else if (lightBowRefineState > event.target.value) {
            if (event.target.value - lightBowRefineState == 1) {
                setLightBowRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + 16);
                    setwbLABoSilverMaskCountState(wbLABoSilverMaskCount + 16);
                    setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + 10);
                    setwbLABoGoldMaskCountState(wbLABoGoldMaskCount + 10);
                    setmubLABoInsanityCountState(mubLABoInsanityCount + 7);
                    setwbLABoInsanityCountState(wbLABoInsanityCount + 7);
                    setmubLABoOriCountState(mubLABoOriCount + 1);
                    setwbLABoOriCountState(wbLABoOriCount + 1);
                    setmubLABoRupeeCost(mubLABoRupeeCost + 2.5);
                    setwbLABoRupeeCost(wbLABoRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + 40)
                    setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + 30);
                    setmubLABoInsanityCountState(mubLABoInsanityCount + 10);
                    setmubLABoGaleCountState(mubLABoGaleCount + 10);
                    setmubLABoOriCountState(mubLABoOriCount + 10);
                    setmubLABoRupeeCost(mubLABoRupeeCost + 2.5);
                }
            }
        }
    }

    function craftLightStaff() {
        if (lightStaffCraftState == "grayscale(100%)") {
            setLightStaffCraftState("grayscale(0%)")
            setLightWeaponChoiceState("staff")
            setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - 40)
            setwbLAStSilverMaskCountState(wbLAStSilverMaskCount - 40)
            setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - 30)
            setwbLAStGoldMaskCountState(wbLAStGoldMaskCount - 30)
            setmubLAStSandCountState(mubLAStSandCount - 1)
            setwbLAStSandCountState(wbLAStSandCount - 1)
            setmubLAStRupeeCost(mubLAStRupeeCost - 2)
            setwbLAStRupeeCost(wbLAStRupeeCost - 2)
        }
        else if (lightStaffCraftState == "grayscale(0%)") {
            setLightStaffCraftState("grayscale(100%)")
            setLightWeaponChoiceState("staff")
            setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + 40)
            setwbLAStSilverMaskCountState(wbLAStSilverMaskCount + 40)
            setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + 30)
            setwbLAStGoldMaskCountState(wbLAStGoldMaskCount + 30)
            setmubLAStSandCountState(mubLAStSandCount + 1)
            setwbLAStSandCountState(wbLAStSandCount + 1)
            setmubLAStRupeeCost(mubLAStRupeeCost + 2)
            setwbLAStRupeeCost(wbLAStRupeeCost + 2)
        }
    }

    function lightStaffWeaponBonus() {
        if (lightStaffWeaponBonusState == "grayscale(100%)") {
            setLightStaffWeaponBonusState("grayscale(0%)");
            setLightWeaponChoiceState("staff");
            setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - 100)
            setwbLAStSilverMaskCountState(wbLAStSilverMaskCount - 100)
            setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - 100)
            setwbLAStGoldMaskCountState(wbLAStGoldMaskCount - 100)
            setmubLAStInsanityCountState(mubLAStInsanityCount - 14)
            setwbLAStInsanityCountState(wbLAStInsanityCount - 14)
            setmubLAStOriCountState(mubLAStOriCount - 30)
            setwbLAStOriCountState(wbLAStOriCount - 30)
            setmubLAStRupeeCost(mubLAStRupeeCost - 10)
            setwbLAStRupeeCost(wbLAStRupeeCost - 10)
        }
        else if (lightStaffWeaponBonusState == "grayscale(0%)") {
            setLightStaffWeaponBonusState("grayscale(100%)");
            setLightWeaponChoiceState("staff");
            setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + 100)
            setwbLAStSilverMaskCountState(wbLAStSilverMaskCount + 100)
            setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + 100)
            setwbLAStGoldMaskCountState(wbLAStGoldMaskCount + 100)
            setmubLAStInsanityCountState(mubLAStInsanityCount + 14)
            setwbLAStInsanityCountState(wbLAStInsanityCount + 14)
            setmubLAStOriCountState(mubLAStOriCount + 30)
            setwbLAStOriCountState(wbLAStOriCount + 30)
            setmubLAStRupeeCost(mubLAStRupeeCost + 10)
            setwbLAStRupeeCost(wbLAStRupeeCost + 10)
        }
    }

    function lightStaffWyrmprintSlot() {
        if (lightStaffWyrmprintSlotState == "grayscale(100%)") {
            setLightStaffWyrmprintSlotState("grayscale(0%)");
            setLightWeaponChoiceState("staff");
            setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - 16)
            setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - 10)
            setmubLAStOriCountState(mubLAStOriCount - 1)
            setmubLAStRupeeCost(mubLAStRupeeCost - 2.5)
        }
        else if (lightStaffWyrmprintSlotState == "grayscale(0%)") {
            setLightStaffWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("staff");
            setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + 16)
            setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + 10)
            setmubLAStOriCountState(mubLAStOriCount + 1)
            setmubLAStRupeeCost(mubLAStRupeeCost + 2.5)
        }
    }

    function handleLightStaffUnbindIncrement(event) {
        setLightWeaponChoiceState("staff")
        if (lightStaffUnbindState < event.target.value) {
            if (event.target.value - lightStaffUnbindState == 1) {
                setLightStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - 40)
                    setwbLAStSilverMaskCountState(wbLAStSilverMaskCount - 40)
                    setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - 30)
                    setwbLAStGoldMaskCountState(wbLAStGoldMaskCount - 30)
                    setmubLAStSandCountState(mubLAStSandCount - 1)
                    setwbLAStSandCountState(wbLAStSandCount - 1)
                    setmubLAStRupeeCost(mubLAStRupeeCost - 2)
                    setwbLAStRupeeCost(wbLAStRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - 16)
                    setwbLAStSilverMaskCountState(wbLAStSilverMaskCount - 16)
                    setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - 10)
                    setwbLAStGoldMaskCountState(wbLAStGoldMaskCount - 10)
                    setmubLAStInsanityCountState(mubLAStInsanityCount - 7)
                    setwbLAStInsanityCountState(wbLAStInsanityCount - 7)
                    setmubLAStOriCountState(mubLAStOriCount - 1)
                    setwbLAStOriCountState(wbLAStOriCount - 1)
                    setmubLAStRupeeCost(mubLAStRupeeCost - 7.5)
                    setwbLAStRupeeCost(wbLAStRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - 16)
                    setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - 10)
                    setmubLAStInsanityCountState(mubLAStInsanityCount - 7)
                    setmubLAStOriCountState(mubLAStOriCount - 1)
                    setmubLAStRupeeCost(mubLAStRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - 80)
                    setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - 70)
                    setmubLAStInsanityCountState(mubLAStInsanityCount - 30)
                    setmubLAStGaleCountState(mubLAStGaleCount - 20)
                    setmubLAStOriCountState(mubLAStOriCount - 20)
                    setmubLAStRupeeCost(mubLAStRupeeCost - 2)
                }
            }
        }
        else if (lightStaffUnbindState > event.target.value) {
            if (lightStaffUnbindState - event.target.value == 1) {
                setLightStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + 40)
                    setwbLAStSilverMaskCountState(wbLAStSilverMaskCount + 40)
                    setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + 30)
                    setwbLAStGoldMaskCountState(wbLAStGoldMaskCount + 30)
                    setmubLAStSandCountState(mubLAStSandCount + 1)
                    setwbLAStSandCountState(wbLAStSandCount + 1)
                    setmubLAStRupeeCost(mubLAStRupeeCost + 2)
                    setwbLAStRupeeCost(wbLAStRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + 16)
                    setwbLAStSilverMaskCountState(wbLAStSilverMaskCount + 16)
                    setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + 10)
                    setwbLAStGoldMaskCountState(wbLAStGoldMaskCount + 10)
                    setmubLAStInsanityCountState(mubLAStInsanityCount + 7)
                    setwbLAStInsanityCountState(wbLAStInsanityCount + 7)
                    setmubLAStOriCountState(mubLAStOriCount + 1)
                    setwbLAStOriCountState(wbLAStOriCount + 1)
                    setmubLAStRupeeCost(mubLAStRupeeCost + 7.5)
                    setwbLAStRupeeCost(wbLAStRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + 16)
                    setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + 10)
                    setmubLAStInsanityCountState(mubLAStInsanityCount + 7)
                    setmubLAStOriCountState(mubLAStOriCount + 1)
                    setmubLAStRupeeCost(mubLAStRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + 80)
                    setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + 70)
                    setmubLAStInsanityCountState(mubLAStInsanityCount + 30)
                    setmubLAStGaleCountState(mubLAStGaleCount + 20)
                    setmubLAStOriCountState(mubLAStOriCount + 20)
                    setmubLAStRupeeCost(mubLAStRupeeCost + 2)
                }
            }
        }
    }

    function handleLightStaffRefineIncrement(event) {
        setLightWeaponChoiceState("staff");
        if (lightStaffRefineState < event.target.value) {
            if (event.target.value - lightStaffRefineState == 1) {
                setLightStaffRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - 16);
                    setwbLAStSilverMaskCountState(wbLAStSilverMaskCount - 16);
                    setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - 10);
                    setwbLAStGoldMaskCountState(wbLAStGoldMaskCount - 10);
                    setmubLAStInsanityCountState(mubLAStInsanityCount - 7);
                    setwbLAStInsanityCountState(wbLAStInsanityCount - 7);
                    setmubLAStOriCountState(mubLAStOriCount - 1);
                    setwbLAStOriCountState(wbLAStOriCount - 1);
                    setmubLAStRupeeCost(mubLAStRupeeCost - 2.5);
                    setwbLAStRupeeCost(wbLAStRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - 40)
                    setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - 30);
                    setmubLAStInsanityCountState(mubLAStInsanityCount - 10);
                    setmubLAStGaleCountState(mubLAStGaleCount - 10);
                    setmubLAStOriCountState(mubLAStOriCount - 10);
                    setmubLAStRupeeCost(mubLAStRupeeCost - 2.5);
                }
            }
        }
        else if (lightStaffRefineState > event.target.value) {
            if (lightStaffRefineState - event.target.value == 1) {
                setLightStaffRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + 16);
                    setwbLAStSilverMaskCountState(wbLAStSilverMaskCount + 16);
                    setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + 10);
                    setwbLAStGoldMaskCountState(wbLAStGoldMaskCount + 10);
                    setmubLAStInsanityCountState(mubLAStInsanityCount + 7);
                    setwbLAStInsanityCountState(wbLAStInsanityCount + 7);
                    setmubLAStOriCountState(mubLAStOriCount + 1);
                    setwbLAStOriCountState(wbLAStOriCount + 1);
                    setmubLAStRupeeCost(mubLAStRupeeCost + 2.5);
                    setwbLAStRupeeCost(wbLAStRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + 40)
                    setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + 30);
                    setmubLAStInsanityCountState(mubLAStInsanityCount + 10);
                    setmubLAStGaleCountState(mubLAStGaleCount + 10);
                    setmubLAStOriCountState(mubLAStOriCount + 10);
                    setmubLAStRupeeCost(mubLAStRupeeCost + 2.5);
                }
            }
        }
    }

    function craftLightManacaster() {
        if (lightManacasterCraftState == "grayscale(100%)") {
            setLightManacasterCraftState("grayscale(0%)")
            setLightWeaponChoiceState("manacaster")
            setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - 40)
            setwbLAMSilverMaskCountState(wbLAMSilverMaskCount - 40)
            setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - 30)
            setwbLAMGoldMaskCountState(wbLAMGoldMaskCount - 30)
            setmubLAMSandCountState(mubLAMSandCount - 1)
            setwbLAMSandCountState(wbLAMSandCount - 1)
            setmubLAMRupeeCost(mubLAMRupeeCost - 2)
            setwbLAMRupeeCost(wbLAMRupeeCost - 2)
        }
        else if (lightManacasterCraftState == "grayscale(0%)") {
            setLightManacasterCraftState("grayscale(100%)")
            setLightWeaponChoiceState("manacaster")
            setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + 40)
            setwbLAMSilverMaskCountState(wbLAMSilverMaskCount + 40)
            setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + 30)
            setwbLAMGoldMaskCountState(wbLAMGoldMaskCount + 30)
            setmubLAMSandCountState(mubLAMSandCount + 1)
            setwbLAMSandCountState(wbLAMSandCount + 1)
            setmubLAMRupeeCost(mubLAMRupeeCost + 2)
            setwbLAMRupeeCost(wbLAMRupeeCost + 2)
        }
    }

    function lightManacasterWeaponBonus() {
        if (lightManacasterWeaponBonusState == "grayscale(100%)") {
            setLightManacasterWeaponBonusState("grayscale(0%)");
            setLightWeaponChoiceState("manacaster");
            setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - 100)
            setwbLAMSilverMaskCountState(wbLAMSilverMaskCount - 100)
            setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - 100)
            setwbLAMGoldMaskCountState(wbLAMGoldMaskCount - 100)
            setmubLAMInsanityCountState(mubLAMInsanityCount - 14)
            setwbLAMInsanityCountState(wbLAMInsanityCount - 14)
            setmubLAMOriCountState(mubLAMOriCount - 30)
            setwbLAMOriCountState(wbLAMOriCount - 30)
            setmubLAMRupeeCost(mubLAMRupeeCost - 10)
            setwbLAMRupeeCost(wbLAMRupeeCost - 10)
        }
        else if (lightManacasterWeaponBonusState == "grayscale(0%)") {
            setLightManacasterWeaponBonusState("grayscale(100%)");
            setLightWeaponChoiceState("manacaster");
            setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + 100)
            setwbLAMSilverMaskCountState(wbLAMSilverMaskCount + 100)
            setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + 100)
            setwbLAMGoldMaskCountState(wbLAMGoldMaskCount + 100)
            setmubLAMInsanityCountState(mubLAMInsanityCount + 14)
            setwbLAMInsanityCountState(wbLAMInsanityCount + 14)
            setmubLAMOriCountState(mubLAMOriCount + 30)
            setwbLAMOriCountState(wbLAMOriCount + 30)
            setmubLAMRupeeCost(mubLAMRupeeCost + 10)
            setwbLAMRupeeCost(wbLAMRupeeCost + 10)
        }
    }

    function lightManacasterWyrmprintSlot() {
        if (lightManacasterWyrmprintSlotState == "grayscale(100%)") {
            setLightManacasterWyrmprintSlotState("grayscale(0%)");
            setLightWeaponChoiceState("manacaster");
            setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - 16)
            setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - 10)
            setmubLAMOriCountState(mubLAMOriCount - 1)
            setmubLAMRupeeCost(mubLAMRupeeCost - 2.5)
        }
        else if (lightManacasterWyrmprintSlotState == "grayscale(0%)") {
            setLightManacasterWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("manacaster");
            setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + 16)
            setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + 10)
            setmubLAMOriCountState(mubLAMOriCount + 1)
            setmubLAMRupeeCost(mubLAMRupeeCost + 2.5)
        }
    }

    function handleLightManacasterUnbindIncrement(event) {
        setLightWeaponChoiceState("manacaster")
        if (lightManacasterUnbindState < event.target.value) {
            if (event.target.value - lightManacasterUnbindState == 1) {
                setLightManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - 40)
                    setwbLAMSilverMaskCountState(wbLAMSilverMaskCount - 40)
                    setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - 30)
                    setwbLAMGoldMaskCountState(wbLAMGoldMaskCount - 30)
                    setmubLAMSandCountState(mubLAMSandCount - 1)
                    setwbLAMSandCountState(wbLAMSandCount - 1)
                    setmubLAMRupeeCost(mubLAMRupeeCost - 2)
                    setwbLAMRupeeCost(wbLAMRupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - 16)
                    setwbLAMSilverMaskCountState(wbLAMSilverMaskCount - 16)
                    setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - 10)
                    setwbLAMGoldMaskCountState(wbLAMGoldMaskCount - 10)
                    setmubLAMInsanityCountState(mubLAMInsanityCount - 7)
                    setwbLAMInsanityCountState(wbLAMInsanityCount - 7)
                    setmubLAMOriCountState(mubLAMOriCount - 1)
                    setwbLAMOriCountState(wbLAMOriCount - 1)
                    setmubLAMRupeeCost(mubLAMRupeeCost - 7.5)
                    setwbLAMRupeeCost(wbLAMRupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - 16)
                    setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - 10)
                    setmubLAMInsanityCountState(mubLAMInsanityCount - 7)
                    setmubLAMOriCountState(mubLAMOriCount - 1)
                    setmubLAMRupeeCost(mubLAMRupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - 80)
                    setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - 70)
                    setmubLAMInsanityCountState(mubLAMInsanityCount - 30)
                    setmubLAMGaleCountState(mubLAMGaleCount - 20)
                    setmubLAMOriCountState(mubLAMOriCount - 20)
                    setmubLAMRupeeCost(mubLAMRupeeCost - 2)
                }
            }
        }
        else if (lightManacasterUnbindState > event.target.value) {
            if (lightManacasterUnbindState - event.target.value == 1) {
                setLightManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + 40)
                    setwbLAMSilverMaskCountState(wbLAMSilverMaskCount + 40)
                    setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + 30)
                    setwbLAMGoldMaskCountState(wbLAMGoldMaskCount + 30)
                    setmubLAMSandCountState(mubLAMSandCount + 1)
                    setwbLAMSandCountState(wbLAMSandCount + 1)
                    setmubLAMRupeeCost(mubLAMRupeeCost + 2)
                    setwbLAMRupeeCost(wbLAMRupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + 16)
                    setwbLAMSilverMaskCountState(wbLAMSilverMaskCount + 16)
                    setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + 10)
                    setwbLAMGoldMaskCountState(wbLAMGoldMaskCount + 10)
                    setmubLAMInsanityCountState(mubLAMInsanityCount + 7)
                    setwbLAMInsanityCountState(wbLAMInsanityCount + 7)
                    setmubLAMOriCountState(mubLAMOriCount + 1)
                    setwbLAMOriCountState(wbLAMOriCount + 1)
                    setmubLAMRupeeCost(mubLAMRupeeCost + 7.5)
                    setwbLAMRupeeCost(wbLAMRupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + 16)
                    setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + 10)
                    setmubLAMInsanityCountState(mubLAMInsanityCount + 7)
                    setmubLAMOriCountState(mubLAMOriCount + 1)
                    setmubLAMRupeeCost(mubLAMRupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + 80)
                    setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + 70)
                    setmubLAMInsanityCountState(mubLAMInsanityCount + 30)
                    setmubLAMGaleCountState(mubLAMGaleCount + 20)
                    setmubLAMOriCountState(mubLAMOriCount + 20)
                    setmubLAMRupeeCost(mubLAMRupeeCost + 2)
                }
            }
        }
    }

    function handleLightManacasterRefineIncrement(event) {
        setLightWeaponChoiceState("manacaster");
        if (lightManacasterRefineState < event.target.value) {
            if (event.target.value - lightManacasterRefineState == 1) {
                setLightManacasterRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - 16);
                    setwbLAMSilverMaskCountState(wbLAMSilverMaskCount - 16);
                    setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - 10);
                    setwbLAMGoldMaskCountState(wbLAMGoldMaskCount - 10);
                    setmubLAMInsanityCountState(mubLAMInsanityCount - 7);
                    setwbLAMInsanityCountState(wbLAMInsanityCount - 7);
                    setmubLAMOriCountState(mubLAMOriCount - 1);
                    setwbLAMOriCountState(wbLAMOriCount - 1);
                    setmubLAMRupeeCost(mubLAMRupeeCost - 2.5);
                    setwbLAMRupeeCost(wbLAMRupeeCost - 2.5);
                }
                if (event.target.value == 2) {
                    setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - 40)
                    setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - 30);
                    setmubLAMInsanityCountState(mubLAMInsanityCount - 10);
                    setmubLAMGaleCountState(mubLAMGaleCount - 10);
                    setmubLAMOriCountState(mubLAMOriCount - 10);
                    setmubLAMRupeeCost(mubLAMRupeeCost - 2.5);
                }
            }
        }
        else if (lightManacasterRefineState > event.target.value) {
            if (lightManacasterRefineState - event.target.value == 1) {
                setLightManacasterRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + 16);
                    setwbLAMSilverMaskCountState(wbLAMSilverMaskCount + 16);
                    setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + 10);
                    setwbLAMGoldMaskCountState(wbLAMGoldMaskCount + 10);
                    setmubLAMInsanityCountState(mubLAMInsanityCount + 7);
                    setwbLAMInsanityCountState(wbLAMInsanityCount + 7);
                    setmubLAMOriCountState(mubLAMOriCount + 1);
                    setwbLAMOriCountState(wbLAMOriCount + 1);
                    setmubLAMRupeeCost(mubLAMRupeeCost + 2.5);
                    setwbLAMRupeeCost(wbLAMRupeeCost + 2.5);
                }
                if (event.target.value == 1) {
                    setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + 40)
                    setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + 30);
                    setmubLAMInsanityCountState(mubLAMInsanityCount + 10);
                    setmubLAMGaleCountState(mubLAMGaleCount + 10);
                    setmubLAMOriCountState(mubLAMOriCount + 10);
                    setmubLAMRupeeCost(mubLAMRupeeCost + 2.5);
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
                            <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Light Agito Weapons</Text>
                        </Box>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={LightAgitoSword} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightSwordCraftState }} onClick={craftLightSword} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Caladbolg</Text>
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
                                        onChange={handleLightSwordUnbindIncrement}
                                        defaultValue={lightSwordUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightSwordUnbindState}</Text>
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
                                        onChange={handleLightSwordRefineIncrement}
                                        defaultValue={lightSwordRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightSwordRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: lightSwordWeaponBonusState }} onClick={lightSwordWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: lightSwordWyrmprintSlotState }} onClick={lightSwordWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={LightAgitoBlade} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightBladeCraftState }} onClick={craftLightBlade} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Fragarach</Text>
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
                                        onChange={handleLightBladeUnbindIncrement}
                                        defaultValue={lightBladeUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightBladeUnbindState}</Text>
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
                                        onChange={handleLightBladeRefineIncrement}
                                        defaultValue={lightBladeRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightBladeRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: lightBladeWeaponBonusState }} onClick={lightBladeWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: lightBladeWyrmprintSlotState }} onClick={lightBladeWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={LightAgitoDagger} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightDaggerCraftState }} onClick={craftLightDagger} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Claiomh Solais</Text>
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
                                        onChange={handleLightDaggerUnbindIncrement}
                                        defaultValue={lightDaggerUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightDaggerUnbindState}</Text>
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
                                        onChange={handleLightDaggerRefineIncrement}
                                        defaultValue={lightDaggerRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightDaggerRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: lightDaggerWeaponBonusState }} onClick={lightDaggerWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: lightDaggerWyrmprintSlotState }} onClick={lightDaggerWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={LightAgitoAxe} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightAxeCraftState }} onClick={craftLightAxe} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Rog Mol</Text>
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
                                        onChange={handleLightAxeUnbindIncrement}
                                        defaultValue={lightAxeUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightAxeUnbindState}</Text>
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
                                        onChange={handleLightAxeRefineIncrement}
                                        defaultValue={lightAxeRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightAxeRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: lightAxeWeaponBonusState }} onClick={lightAxeWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: lightAxeWyrmprintSlotState }} onClick={lightAxeWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={LightAgitoLance} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightLanceCraftState }} onClick={craftLightLance} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Areadbhar</Text>
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
                                        onChange={handleLightLanceUnbindIncrement}
                                        defaultValue={lightLanceUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightLanceUnbindState}</Text>
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
                                        onChange={handleLightLanceRefineIncrement}
                                        defaultValue={lightLanceRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightLanceRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: lightLanceWeaponBonusState }} onClick={lightLanceWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: lightLanceWyrmprintSlotState }} onClick={lightLanceWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={LightAgitoBow} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightBowCraftState }} onClick={craftLightBow} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Tathlum</Text>
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
                                        onChange={handleLightBowUnbindIncrement}
                                        defaultValue={lightBowUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightBowUnbindState}</Text>
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
                                        onChange={handleLightBowRefineIncrement}
                                        defaultValue={lightBowRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightBowRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: lightBowWeaponBonusState }} onClick={lightBowWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: lightBowWyrmprintSlotState }} onClick={lightBowWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={LightAgitoWand} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightWandCraftState }} onClick={craftLightWand} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Brionac</Text>
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
                                        onChange={handleLightWandUnbindIncrement}
                                        defaultValue={lightWandUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightWandUnbindState}</Text>
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
                                        onChange={handleLightWandRefineIncrement}
                                        defaultValue={lightWandRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightWandRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: lightWandWeaponBonusState }} onClick={lightWandWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: lightWandWyrmprintSlotState }} onClick={lightWandWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={LightAgitoStaff} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightStaffCraftState }} onClick={craftLightStaff} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Del Frith</Text>
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
                                        onChange={handleLightStaffUnbindIncrement}
                                        defaultValue={lightStaffUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightStaffUnbindState}</Text>
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
                                        onChange={handleLightStaffRefineIncrement}
                                        defaultValue={lightStaffRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightStaffRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: lightStaffWeaponBonusState }} onClick={lightStaffWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: lightStaffWyrmprintSlotState }} onClick={lightStaffWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={LightAgitoManacaster} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightManacasterCraftState }} onClick={craftLightManacaster} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Gae Assail</Text>
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
                                        onChange={handleLightManacasterUnbindIncrement}
                                        defaultValue={lightManacasterUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightManacasterUnbindState}</Text>
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
                                        onChange={handleLightManacasterRefineIncrement}
                                        defaultValue={lightManacasterRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="gold"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="gold" fontSize={[1, 3]}>{lightManacasterRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: lightManacasterWeaponBonusState }} onClick={lightManacasterWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: lightManacasterWyrmprintSlotState }} onClick={lightManacasterWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                </Box>
                {/* The box for the materials needed to 100% a weapon */}
                {lightWeaponSelection()}
            </Flex>
            <Flex>&nbsp;</Flex>
            <WeaponTypeNavTabs />
        </div>
    )
}