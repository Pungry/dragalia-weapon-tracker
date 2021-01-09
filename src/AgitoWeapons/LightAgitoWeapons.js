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
import LightAgitoSilverMask from "../Images/Light_Agito_Silver_Mask.png";
import LightAgitoGoldMask from "../Images/Light_Agito_Gold_Mask.png";
import LightAgitoInsanity from "../Images/Light_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";

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

    const [allmubLASilverMaskCount, setallmubLASilverMaskCount] = useLocalStorage("allmubLASilverMaskState", 4644)
    const [allmubLAGoldMaskCount, setallmubLAGoldMaskCount] = useLocalStorage("allmubLAGoldMaskState", 3690)
    const [allmubLAInsanityCount, setallmubLAInsanityCount] = useLocalStorage("allmubLAInsanityCount", 801)
    const [allmubLAGaleCount, setallmubLAGaleCount] = useLocalStorage("allmubLAGaleCount", 270)
    const [allmubLASandCount, setallmubLASandCount] = useLocalStorage("allmubLASandCount", 45)
    const [allmubLAOriCount, setallmubLAOriCount] = useLocalStorage("allmubLAOriCount", 594)
    const [allmubLARupeeCost, setallmubLARupeeCost] = useLocalStorage("allmubLARupeeCost", 535.5)

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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
            setallmubLASandCount(allmubLASandCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
            setallmubLASandCount(allmubLASandCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 100)
            setallmubLAInsanityCount(allmubLAInsanityCount - 14)
            setallmubLAOriCount(allmubLAOriCount - 30)
            setallmubLARupeeCost(allmubLARupeeCost - 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 100)
            setallmubLAInsanityCount(allmubLAInsanityCount + 14)
            setallmubLAOriCount(allmubLAOriCount + 30)
            setallmubLARupeeCost(allmubLARupeeCost + 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
            setallmubLAOriCount(allmubLAOriCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2.5)
        }
        else if (lightSwordWyrmprintSlotState == "grayscale(0%)") {
            setLightSwordWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("sword");
            setmubLASSilverMaskCountState(mubLASSilverMaskCount + 16)
            setmubLASGoldMaskCountState(mubLASGoldMaskCount + 10)
            setmubLASOriCountState(mubLASOriCount + 1)
            setmubLASRupeeCost(mubLASRupeeCost + 2.5)
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
            setallmubLAOriCount(allmubLAOriCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2.5)
        }
    }

    function handleLightSwordUnbindIncrement(event) {
        setLightWeaponChoiceState("sword");
        if (lightSwordUnbindState < event.target.value) {
            if (event.target.value == 9 && lightSwordUnbindState == 0) {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount - 304);
                setwbLASSilverMaskCountState(wbLASSilverMaskCount - 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 304);
                setmubLASGoldMaskCountState(mubLASGoldMaskCount - 230);
                setwbLASGoldMaskCountState(wbLASGoldMaskCount - 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 230);
                setmubLASInsanityCountState(mubLASInsanityCount - 58);
                setwbLASInsanityCountState(wbLASInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLASGaleCountState(mubLASGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLASSandCountState(mubLASSandCount - 4);
                setwbLASSandCountState(wbLASSandCount - 4);
                setallmubLASandCount(allmubLASandCount - 4);
                setmubLASOriCountState(mubLASOriCount - 24);
                setwbLASOriCountState(wbLASOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLASRupeeCost(mubLASRupeeCost - 40);
                setwbLASRupeeCost(wbLASRupeeCost - 15.5);
                setallmubLARupeeCost(allmubLARupeeCost - 40);
                setLightSwordUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightSwordUnbindState >= 1 && lightSwordUnbindState <= 4) {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount - 144 - ((4 - lightSwordUnbindState) * 40));
                setwbLASSilverMaskCountState(wbLASSilverMaskCount - 16 - ((4 - lightSwordUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 144 - ((4 - lightSwordUnbindState) * 40));
                setmubLASGoldMaskCountState(mubLASGoldMaskCount - 110 - ((4 - lightSwordUnbindState) * 30));
                setwbLASGoldMaskCountState(wbLASGoldMaskCount - 10 - ((4 - lightSwordUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 110 - ((4 - lightSwordUnbindState) * 30));
                setmubLASInsanityCountState(mubLASInsanityCount - 58);
                setwbLASInsanityCountState(wbLASInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLASGaleCountState(mubLASGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLASSandCountState(mubLASSandCount - (4 - lightSwordUnbindState));
                setwbLASSandCountState(wbLASSandCount - (4 - lightSwordUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightSwordUnbindState));
                setmubLASOriCountState(mubLASOriCount - 24);
                setwbLASOriCountState(wbLASOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLASRupeeCost(mubLASRupeeCost - 32 - ((4 - lightSwordUnbindState) * 2));
                setwbLASRupeeCost(wbLASRupeeCost - 7.5 - ((4 - lightSwordUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - 32 - ((4 - lightSwordUnbindState) * 2));
                setLightSwordUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightSwordUnbindState >= 5 && lightSwordUnbindState <= 8) {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount - 80 - ((8 - lightSwordUnbindState) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 80 - ((8 - lightSwordUnbindState) * 16));
                setmubLASGoldMaskCountState(mubLASGoldMaskCount - 70 - ((8 - lightSwordUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 70 - ((8 - lightSwordUnbindState) * 10));
                setmubLASInsanityCountState(mubLASInsanityCount - 30 - ((8 - lightSwordUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - 30 - ((8 - lightSwordUnbindState) * 7));
                setmubLASGaleCountState(mubLASGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLASOriCountState(mubLASOriCount - 20 - ((8 - lightSwordUnbindState) * 1));
                setallmubLAOriCount(allmubLAOriCount - 20 - ((8 - lightSwordUnbindState) * 1));
                setmubLASRupeeCost(mubLASRupeeCost - 2 - ((8 - lightSwordUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - 2 - ((8 - lightSwordUnbindState) * 7.5));
                setLightSwordUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightSwordUnbindState <= 7 && lightSwordUnbindState >= 5) {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount - ((event.target.value - lightSwordUnbindState) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightSwordUnbindState) * 16));
                setmubLASGoldMaskCountState(mubLASGoldMaskCount - ((event.target.value - lightSwordUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightSwordUnbindState) * 10));
                setmubLASInsanityCountState(mubLASInsanityCount - ((event.target.value - lightSwordUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - ((event.target.value - lightSwordUnbindState) * 7));
                setmubLASOriCountState(mubLASOriCount - (event.target.value - lightSwordUnbindState));
                setallmubLAOriCount(allmubLAOriCount - (event.target.value - lightSwordUnbindState));
                setmubLASRupeeCost(mubLASRupeeCost - ((event.target.value - lightSwordUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightSwordUnbindState) * 7.5));
                setLightSwordUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightSwordUnbindState <= 4 && lightSwordUnbindState >= 0) {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount - ((4 - lightSwordUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbLASSilverMaskCountState(wbLASSilverMaskCount - 16 - ((4 - lightSwordUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((4 - lightSwordUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubLASGoldMaskCountState(mubLASGoldMaskCount - ((4 - lightSwordUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbLASGoldMaskCountState(wbLASGoldMaskCount - 10 - ((4 - lightSwordUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((4 - lightSwordUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubLASInsanityCountState(mubLASInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbLASInsanityCountState(wbLASInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubLASSandCountState(mubLASSandCount - (4 - lightSwordUnbindState));
                setwbLASSandCountState(wbLASSandCount - (4 - lightSwordUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightSwordUnbindState));
                setmubLASOriCountState(mubLASOriCount - (-1 * (4 - event.target.value)));
                setwbLASOriCountState(wbLASOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - (-1 * (4 - event.target.value)));
                setmubLASRupeeCost(mubLASRupeeCost - ((4 - lightSwordUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbLASRupeeCost(wbLASRupeeCost - 7.5 - ((4 - lightSwordUnbindState) * 2))
                setLightSwordUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && lightSwordUnbindState <= 3 && lightSwordUnbindState >= 0) {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount - ((event.target.value - lightSwordUnbindState) * 40));
                setwbLASSilverMaskCountState(wbLASSilverMaskCount - ((event.target.value - lightSwordUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightSwordUnbindState) * 40));
                setmubLASGoldMaskCountState(mubLASGoldMaskCount - ((event.target.value - lightSwordUnbindState) * 30));
                setwbLASGoldMaskCountState(wbLASGoldMaskCount - ((event.target.value - lightSwordUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightSwordUnbindState) * 30));
                setmubLASSandCountState(mubLASSandCount - (event.target.value - lightSwordUnbindState));
                setwbLASSandCountState(wbLASSandCount - (event.target.value - lightSwordUnbindState));
                setallmubLASandCount(allmubLASandCount - (event.target.value - lightSwordUnbindState));
                setmubLASRupeeCost(mubLASRupeeCost - ((event.target.value - lightSwordUnbindState) * 2));
                setwbLASRupeeCost(wbLASRupeeCost - ((event.target.value - lightSwordUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightSwordUnbindState) * 2));
                setLightSwordUnbindState(event.target.value)
            }
        }
        else if (lightSwordUnbindState > event.target.value) {
            if (event.target.value == 0 && lightSwordUnbindState == 9) {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount + 304);
                setwbLASSilverMaskCountState(wbLASSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 304);
                setmubLASGoldMaskCountState(mubLASGoldMaskCount + 230);
                setwbLASGoldMaskCountState(wbLASGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 230);
                setmubLASInsanityCountState(mubLASInsanityCount + 58);
                setwbLASInsanityCountState(wbLASInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 58);
                setmubLASGaleCountState(mubLASGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLASSandCountState(mubLASSandCount + 4);
                setwbLASSandCountState(wbLASSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLASOriCountState(mubLASOriCount + 24);
                setwbLASOriCountState(wbLASOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + 24);
                setmubLASRupeeCost(mubLASRupeeCost + 40);
                setwbLASRupeeCost(wbLASRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 40);
                setLightSwordUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightSwordUnbindState >= 5 && lightSwordUnbindState <= 8) {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount + 160 + ((-1 * (4 - lightSwordUnbindState)) * 16));
                setwbLASSilverMaskCountState(wbLASSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 160 + ((-1 * (4 - lightSwordUnbindState)) * 16));
                setmubLASGoldMaskCountState(mubLASGoldMaskCount + 120 + ((-1 * (4 - lightSwordUnbindState)) * 10));
                setwbLASGoldMaskCountState(wbLASGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 120 + ((-1 * (4 - lightSwordUnbindState)) * 10));
                setmubLASInsanityCountState(mubLASInsanityCount + ((-1 * (4 - lightSwordUnbindState)) * 7));
                setwbLASInsanityCountState(wbLASInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((-1 * (4 - lightSwordUnbindState)) * 7));
                setmubLASSandCountState(mubLASSandCount + 4);
                setwbLASSandCountState(wbLASSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLASOriCountState(mubLASOriCount + (-1 * (4 - lightSwordUnbindState)));
                setwbLASOriCountState(wbLASOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + (-1 * (4 - lightSwordUnbindState)));
                setmubLASRupeeCost(mubLASRupeeCost + 8 + (-1 * (4 - lightSwordUnbindState) * 7.5));
                setwbLASRupeeCost(wbLASRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 8 + (-1 * (4 - lightSwordUnbindState) * 7.5));
                setLightSwordUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightSwordUnbindState >= 1 && lightSwordUnbindState <= 4) {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount + (lightSwordUnbindState * 40));
                setwbLASSilverMaskCountState(wbLASSilverMaskCount + (lightSwordUnbindState * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + (lightSwordUnbindState * 40));
                setmubLASGoldMaskCountState(mubLASGoldMaskCount + (lightSwordUnbindState * 30));
                setwbLASGoldMaskCountState(wbLASGoldMaskCount + (lightSwordUnbindState * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + (lightSwordUnbindState * 30));
                setmubLASSandCountState(mubLASSandCount + (lightSwordUnbindState * 1));
                setwbLASSandCountState(wbLASSandCount + (lightSwordUnbindState * 1));
                setallmubLASandCount(allmubLASandCount + (lightSwordUnbindState * 1));
                setmubLASRupeeCost(mubLASRupeeCost + (lightSwordUnbindState * 2));
                setwbLASRupeeCost(wbLASRupeeCost + (lightSwordUnbindState * 2));
                setallmubLARupeeCost(allmubLARupeeCost + (lightSwordUnbindState * 2));
                setLightSwordUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightSwordUnbindState >= 1 && lightSwordUnbindState <= 4) {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount + ((lightSwordUnbindState - event.target.value) * 40))
                setwbLASSilverMaskCountState(wbLASSilverMaskCount + ((lightSwordUnbindState - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightSwordUnbindState - event.target.value) * 40));
                setmubLASGoldMaskCountState(mubLASGoldMaskCount + ((lightSwordUnbindState - event.target.value) * 30));
                setwbLASGoldMaskCountState(wbLASGoldMaskCount + ((lightSwordUnbindState - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightSwordUnbindState - event.target.value) * 30));
                setmubLASSandCountState(mubLASSandCount + (lightSwordUnbindState - event.target.value));
                setwbLASSandCountState(wbLASSandCount + (lightSwordUnbindState - event.target.value));
                setallmubLASandCount(allmubLASandCount + (lightSwordUnbindState - event.target.value));
                setmubLASRupeeCost(mubLASRupeeCost + ((lightSwordUnbindState - event.target.value) * 2));
                setwbLASRupeeCost(wbLASRupeeCost + ((lightSwordUnbindState - event.target.value) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightSwordUnbindState - event.target.value) * 2))
                setLightSwordUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightSwordUnbindState >= 5 && lightSwordUnbindState <= 8) {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount + ((lightSwordUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbLASSilverMaskCountState(wbLASSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightSwordUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubLASGoldMaskCountState(mubLASGoldMaskCount + ((lightSwordUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbLASGoldMaskCountState(wbLASGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightSwordUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubLASInsanityCountState(mubLASInsanityCount + ((lightSwordUnbindState - 4) * 7));
                setwbLASInsanityCountState(wbLASInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightSwordUnbindState - 4) * 7));
                setmubLASSandCountState(mubLASSandCount + (4 - event.target.value));
                setwbLASSandCountState(wbLASSandCount + (4 - event.target.value));
                setallmubLASandCount(allmubLASandCount + (4 - event.target.value));
                setmubLASOriCountState(mubLASOriCount + (lightSwordUnbindState - 4));
                setwbLASOriCountState(wbLASOriCount + (lightSwordUnbindState - 4));
                setallmubLAOriCount(allmubLAOriCount + (lightSwordUnbindState - 4));
                setmubLASRupeeCost(mubLASRupeeCost + ((lightSwordUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbLASRupeeCost(wbLASRupeeCost + 7.5 + ((lightSwordUnbindState - 4) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightSwordUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setLightSwordUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightSwordUnbindState == 9) {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubLASGoldMaskCountState(mubLASGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubLASInsanityCountState(mubLASInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubLASGaleCountState(mubLASGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLASOriCountState(mubLASOriCount + 20 + (8 - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + 20 + (8 - event.target.value));
                setmubLASRupeeCost(mubLASRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setLightSwordUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightSwordUnbindState >= 5 && lightSwordUnbindState <= 8) {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount + ((lightSwordUnbindState - event.target.value) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightSwordUnbindState - event.target.value) * 16));
                setmubLASGoldMaskCountState(mubLASGoldMaskCount + ((lightSwordUnbindState - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightSwordUnbindState - event.target.value) * 10));
                setmubLASInsanityCountState(mubLASInsanityCount + ((lightSwordUnbindState - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightSwordUnbindState - event.target.value) * 7));
                setmubLASOriCountState(mubLASOriCount + (lightSwordUnbindState - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + (lightSwordUnbindState - event.target.value));
                setmubLASRupeeCost(mubLASRupeeCost + ((lightSwordUnbindState - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightSwordUnbindState - event.target.value) * 7.5));
                setLightSwordUnbindState(event.target.value)
            }
        }
    }

    function handleLightSwordRefineIncrement(event) {
        setLightWeaponChoiceState("sword");
        if (lightSwordRefineState < event.target.value) {
            if (lightSwordRefineState == 0 && event.target.value == 1) {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
                setallmubLAInsanityCount(allmubLAInsanityCount - 7)
                setallmubLAOriCount(allmubLAOriCount - 1)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightSwordRefineState(event.target.value);
            }
            else if (lightSwordRefineState == 0 && event.target.value == 2) {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount - 56);
                setwbLASSilverMaskCountState(wbLASSilverMaskCount - 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 56);
                setmubLASGoldMaskCountState(mubLASGoldMaskCount - 40);
                setwbLASGoldMaskCountState(wbLASGoldMaskCount - 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 40);
                setmubLASInsanityCountState(mubLASInsanityCount - 17);
                setwbLASInsanityCountState(wbLASInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 17);
                setmubLASGaleCountState(mubLASGaleCount - 10);
                setallmubLAGaleCount(allmubLAGaleCount - 10);
                setmubLASOriCountState(mubLASOriCount - 11);
                setwbLASOriCountState(wbLASOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 11);
                setmubLASRupeeCost(mubLASRupeeCost - 5);
                setwbLASRupeeCost(wbLASRupeeCost - 2.5);
                setallmubLARupeeCost(allmubLARupeeCost - 5);
                setLightSwordRefineState(event.target.value);
            }
            else if (lightSwordRefineState == 1 && event.target.value == 2) {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount - 40)
                setmubLASGoldMaskCountState(mubLASGoldMaskCount - 30);
                setmubLASInsanityCountState(mubLASInsanityCount - 10);
                setmubLASGaleCountState(mubLASGaleCount - 10);
                setmubLASOriCountState(mubLASOriCount - 10);
                setmubLASRupeeCost(mubLASRupeeCost - 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
                setallmubLAInsanityCount(allmubLAInsanityCount - 10)
                setallmubLAGaleCount(allmubLAGaleCount - 10)
                setallmubLAOriCount(allmubLAOriCount - 10)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightSwordRefineState(event.target.value);
            }
        }
        else if (lightSwordRefineState > event.target.value) {
            if (lightSwordRefineState == 2 && event.target.value == 1) 
            {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount + 40)
                setmubLASGoldMaskCountState(mubLASGoldMaskCount + 30);
                setmubLASInsanityCountState(mubLASInsanityCount + 10);
                setmubLASGaleCountState(mubLASGaleCount + 10);
                setmubLASOriCountState(mubLASOriCount + 10);
                setmubLASRupeeCost(mubLASRupeeCost + 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
                setallmubLAInsanityCount(allmubLAInsanityCount + 10)
                setallmubLAGaleCount(allmubLAGaleCount + 10)
                setallmubLAOriCount(allmubLAOriCount + 10)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightSwordRefineState(event.target.value);
            }
            else if (lightSwordRefineState == 2 && event.target.value == 0) 
            {
                setmubLASSilverMaskCountState(mubLASSilverMaskCount + 56);
                setwbLASSilverMaskCountState(wbLASSilverMaskCount + 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 56);
                setmubLASGoldMaskCountState(mubLASGoldMaskCount + 40);
                setwbLASGoldMaskCountState(wbLASGoldMaskCount + 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 40);
                setmubLASInsanityCountState(mubLASInsanityCount + 17);
                setwbLASInsanityCountState(wbLASInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 17);
                setmubLASGaleCountState(mubLASGaleCount + 10);
                setallmubLAGaleCount(allmubLAGaleCount + 10);
                setmubLASOriCountState(mubLASOriCount + 11);
                setwbLASOriCountState(wbLASOriCount + 1); 
                setallmubLAOriCount(allmubLAOriCount + 11);
                setmubLASRupeeCost(mubLASRupeeCost + 5);
                setwbLASRupeeCost(wbLASRupeeCost + 2.5);
                setallmubLARupeeCost(allmubLARupeeCost + 5)
                setLightSwordRefineState(event.target.value);
            }
            else if (lightSwordRefineState == 1 && event.target.value == 0) 
            {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
                setallmubLAInsanityCount(allmubLAInsanityCount + 7)
                setallmubLAOriCount(allmubLAOriCount + 1)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightSwordRefineState(event.target.value);
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
            setallmubLASandCount(allmubLASandCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
            setallmubLASandCount(allmubLASandCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 100)
            setallmubLAInsanityCount(allmubLAInsanityCount - 14)
            setallmubLAOriCount(allmubLAOriCount - 30)
            setallmubLARupeeCost(allmubLARupeeCost - 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 100)
            setallmubLAInsanityCount(allmubLAInsanityCount + 14)
            setallmubLAOriCount(allmubLAOriCount + 30)
            setallmubLARupeeCost(allmubLARupeeCost + 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
            setallmubLAOriCount(allmubLAOriCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2.5)
        }
        else if (lightBladeWyrmprintSlotState == "grayscale(0%)") {
            setLightBladeWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("blade");
            setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + 16)
            setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + 10)
            setmubLABlOriCountState(mubLABlOriCount + 1)
            setmubLABlRupeeCost(mubLABlRupeeCost + 2.5)
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
            setallmubLAOriCount(allmubLAOriCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2.5)
        }
    }

    function handleLightBladeUnbindIncrement(event) {
        setLightWeaponChoiceState("blade");
        if (lightBladeUnbindState < event.target.value) {
            if (event.target.value == 9 && lightBladeUnbindState == 0) {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - 304);
                setwbLABlSilverMaskCountState(wbLABlSilverMaskCount - 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 304);
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - 230);
                setwbLABlGoldMaskCountState(wbLABlGoldMaskCount - 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 230);
                setmubLABlInsanityCountState(mubLABlInsanityCount - 58);
                setwbLABlInsanityCountState(wbLABlInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLABlGaleCountState(mubLABlGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLABlSandCountState(mubLABlSandCount - 4);
                setwbLABlSandCountState(wbLABlSandCount - 4);
                setallmubLASandCount(allmubLASandCount - 4);
                setmubLABlOriCountState(mubLABlOriCount - 24);
                setwbLABlOriCountState(wbLABlOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLABlRupeeCost(mubLABlRupeeCost - 40);
                setwbLABlRupeeCost(wbLABlRupeeCost - 15.5);
                setallmubLARupeeCost(allmubLARupeeCost - 40);
                setLightBladeUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightBladeUnbindState >= 1 && lightBladeUnbindState <= 4) {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - 144 - ((4 - lightBladeUnbindState) * 40));
                setwbLABlSilverMaskCountState(wbLABlSilverMaskCount - 16 - ((4 - lightBladeUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 144 - ((4 - lightBladeUnbindState) * 40));
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - 110 - ((4 - lightBladeUnbindState) * 30));
                setwbLABlGoldMaskCountState(wbLABlGoldMaskCount - 10 - ((4 - lightBladeUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 110 - ((4 - lightBladeUnbindState) * 30));
                setmubLABlInsanityCountState(mubLABlInsanityCount - 58);
                setwbLABlInsanityCountState(wbLABlInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLABlGaleCountState(mubLABlGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLABlSandCountState(mubLABlSandCount - (4 - lightBladeUnbindState));
                setwbLABlSandCountState(wbLABlSandCount - (4 - lightBladeUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightBladeUnbindState));
                setmubLABlOriCountState(mubLABlOriCount - 24);
                setwbLABlOriCountState(wbLABlOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLABlRupeeCost(mubLABlRupeeCost - 32 - ((4 - lightBladeUnbindState) * 2));
                setwbLABlRupeeCost(wbLABlRupeeCost - 7.5 - ((4 - lightBladeUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - 32 - ((4 - lightBladeUnbindState) * 2));
                setLightBladeUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightBladeUnbindState >= 5 && lightBladeUnbindState <= 8) {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - 80 - ((8 - lightBladeUnbindState) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 80 - ((8 - lightBladeUnbindState) * 16));
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - 70 - ((8 - lightBladeUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 70 - ((8 - lightBladeUnbindState) * 10));
                setmubLABlInsanityCountState(mubLABlInsanityCount - 30 - ((8 - lightBladeUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - 30 - ((8 - lightBladeUnbindState) * 7));
                setmubLABlGaleCountState(mubLABlGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLABlOriCountState(mubLABlOriCount - 20 - ((8 - lightBladeUnbindState) * 1));
                setallmubLAOriCount(allmubLAOriCount - 20 - ((8 - lightBladeUnbindState) * 1));
                setmubLABlRupeeCost(mubLABlRupeeCost - 2 - ((8 - lightBladeUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - 2 - ((8 - lightBladeUnbindState) * 7.5));
                setLightBladeUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightBladeUnbindState <= 7 && lightBladeUnbindState >= 5) {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - ((event.target.value - lightBladeUnbindState) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightBladeUnbindState) * 16));
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - ((event.target.value - lightBladeUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightBladeUnbindState) * 10));
                setmubLABlInsanityCountState(mubLABlInsanityCount - ((event.target.value - lightBladeUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - ((event.target.value - lightBladeUnbindState) * 7));
                setmubLABlOriCountState(mubLABlOriCount - (event.target.value - lightBladeUnbindState));
                setallmubLAOriCount(allmubLAOriCount - (event.target.value - lightBladeUnbindState));
                setmubLABlRupeeCost(mubLABlRupeeCost - ((event.target.value - lightBladeUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightBladeUnbindState) * 7.5));
                setLightBladeUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightBladeUnbindState <= 4 && lightBladeUnbindState >= 0) {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - ((4 - lightBladeUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbLABlSilverMaskCountState(wbLABlSilverMaskCount - 16 - ((4 - lightBladeUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((4 - lightBladeUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - ((4 - lightBladeUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbLABlGoldMaskCountState(wbLABlGoldMaskCount - 10 - ((4 - lightBladeUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((4 - lightBladeUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubLABlInsanityCountState(mubLABlInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbLABlInsanityCountState(wbLABlInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubLABlSandCountState(mubLABlSandCount - (4 - lightBladeUnbindState));
                setwbLABlSandCountState(wbLABlSandCount - (4 - lightBladeUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightBladeUnbindState));
                setmubLABlOriCountState(mubLABlOriCount - (-1 * (4 - event.target.value)));
                setwbLABlOriCountState(wbLABlOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - (-1 * (4 - event.target.value)));
                setmubLABlRupeeCost(mubLABlRupeeCost - ((4 - lightBladeUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbLABlRupeeCost(wbLABlRupeeCost - 7.5 - ((4 - lightBladeUnbindState) * 2))
                setLightBladeUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && lightBladeUnbindState <= 3 && lightBladeUnbindState >= 0) {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - ((event.target.value - lightBladeUnbindState) * 40));
                setwbLABlSilverMaskCountState(wbLABlSilverMaskCount - ((event.target.value - lightBladeUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightBladeUnbindState) * 40));
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - ((event.target.value - lightBladeUnbindState) * 30));
                setwbLABlGoldMaskCountState(wbLABlGoldMaskCount - ((event.target.value - lightBladeUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightBladeUnbindState) * 30));
                setmubLABlSandCountState(mubLABlSandCount - (event.target.value - lightBladeUnbindState));
                setwbLABlSandCountState(wbLABlSandCount - (event.target.value - lightBladeUnbindState));
                setallmubLASandCount(allmubLASandCount - (event.target.value - lightBladeUnbindState));
                setmubLABlRupeeCost(mubLABlRupeeCost - ((event.target.value - lightBladeUnbindState) * 2));
                setwbLABlRupeeCost(wbLABlRupeeCost - ((event.target.value - lightBladeUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightBladeUnbindState) * 2));
                setLightBladeUnbindState(event.target.value)
            }
        }
        else if (lightBladeUnbindState > event.target.value) {
            if (event.target.value == 0 && lightBladeUnbindState == 9) {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + 304);
                setwbLABlSilverMaskCountState(wbLABlSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 304);
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + 230);
                setwbLABlGoldMaskCountState(wbLABlGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 230);
                setmubLABlInsanityCountState(mubLABlInsanityCount + 58);
                setwbLABlInsanityCountState(wbLABlInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 58);
                setmubLABlGaleCountState(mubLABlGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLABlSandCountState(mubLABlSandCount + 4);
                setwbLABlSandCountState(wbLABlSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLABlOriCountState(mubLABlOriCount + 24);
                setwbLABlOriCountState(wbLABlOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + 24);
                setmubLABlRupeeCost(mubLABlRupeeCost + 40);
                setwbLABlRupeeCost(wbLABlRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 40);
                setLightBladeUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightBladeUnbindState >= 5 && lightBladeUnbindState <= 8) {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + 160 + ((-1 * (4 - lightBladeUnbindState)) * 16));
                setwbLABlSilverMaskCountState(wbLABlSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 160 + ((-1 * (4 - lightBladeUnbindState)) * 16));
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + 120 + ((-1 * (4 - lightBladeUnbindState)) * 10));
                setwbLABlGoldMaskCountState(wbLABlGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 120 + ((-1 * (4 - lightBladeUnbindState)) * 10));
                setmubLABlInsanityCountState(mubLABlInsanityCount + ((-1 * (4 - lightBladeUnbindState)) * 7));
                setwbLABlInsanityCountState(wbLABlInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((-1 * (4 - lightBladeUnbindState)) * 7));
                setmubLABlSandCountState(mubLABlSandCount + 4);
                setwbLABlSandCountState(wbLABlSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLABlOriCountState(mubLABlOriCount + (-1 * (4 - lightBladeUnbindState)));
                setwbLABlOriCountState(wbLABlOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + (-1 * (4 - lightBladeUnbindState)));
                setmubLABlRupeeCost(mubLABlRupeeCost + 8 + (-1 * (4 - lightBladeUnbindState) * 7.5));
                setwbLABlRupeeCost(wbLABlRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 8 + (-1 * (4 - lightBladeUnbindState) * 7.5));
                setLightBladeUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightBladeUnbindState >= 1 && lightBladeUnbindState <= 4) {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + (lightBladeUnbindState * 40));
                setwbLABlSilverMaskCountState(wbLABlSilverMaskCount + (lightBladeUnbindState * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + (lightBladeUnbindState * 40));
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + (lightBladeUnbindState * 30));
                setwbLABlGoldMaskCountState(wbLABlGoldMaskCount + (lightBladeUnbindState * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + (lightBladeUnbindState * 30));
                setmubLABlSandCountState(mubLABlSandCount + (lightBladeUnbindState * 1));
                setwbLABlSandCountState(wbLABlSandCount + (lightBladeUnbindState * 1));
                setallmubLASandCount(allmubLASandCount + (lightBladeUnbindState * 1));
                setmubLABlRupeeCost(mubLABlRupeeCost + (lightBladeUnbindState * 2));
                setwbLABlRupeeCost(wbLABlRupeeCost + (lightBladeUnbindState * 2));
                setallmubLARupeeCost(allmubLARupeeCost + (lightBladeUnbindState * 2));
                setLightBladeUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightBladeUnbindState >= 1 && lightBladeUnbindState <= 4) {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + ((lightBladeUnbindState - event.target.value) * 40))
                setwbLABlSilverMaskCountState(wbLABlSilverMaskCount + ((lightBladeUnbindState - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightBladeUnbindState - event.target.value) * 40));
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + ((lightBladeUnbindState - event.target.value) * 30));
                setwbLABlGoldMaskCountState(wbLABlGoldMaskCount + ((lightBladeUnbindState - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightBladeUnbindState - event.target.value) * 30));
                setmubLABlSandCountState(mubLABlSandCount + (lightBladeUnbindState - event.target.value));
                setwbLABlSandCountState(wbLABlSandCount + (lightBladeUnbindState - event.target.value));
                setallmubLASandCount(allmubLASandCount + (lightBladeUnbindState - event.target.value));
                setmubLABlRupeeCost(mubLABlRupeeCost + ((lightBladeUnbindState - event.target.value) * 2));
                setwbLABlRupeeCost(wbLABlRupeeCost + ((lightBladeUnbindState - event.target.value) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightBladeUnbindState - event.target.value) * 2))
                setLightBladeUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightBladeUnbindState >= 5 && lightBladeUnbindState <= 8) {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + ((lightBladeUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbLABlSilverMaskCountState(wbLABlSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightBladeUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + ((lightBladeUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbLABlGoldMaskCountState(wbLABlGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightBladeUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubLABlInsanityCountState(mubLABlInsanityCount + ((lightBladeUnbindState - 4) * 7));
                setwbLABlInsanityCountState(wbLABlInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightBladeUnbindState - 4) * 7));
                setmubLABlSandCountState(mubLABlSandCount + (4 - event.target.value));
                setwbLABlSandCountState(wbLABlSandCount + (4 - event.target.value));
                setallmubLASandCount(allmubLASandCount + (4 - event.target.value));
                setmubLABlOriCountState(mubLABlOriCount + (lightBladeUnbindState - 4));
                setwbLABlOriCountState(wbLABlOriCount + (lightBladeUnbindState - 4));
                setallmubLAOriCount(allmubLAOriCount + (lightBladeUnbindState - 4));
                setmubLABlRupeeCost(mubLABlRupeeCost + ((lightBladeUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbLABlRupeeCost(wbLABlRupeeCost + 7.5 + ((lightBladeUnbindState - 4) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightBladeUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setLightBladeUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightBladeUnbindState == 9) {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubLABlInsanityCountState(mubLABlInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubLABlGaleCountState(mubLABlGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLABlOriCountState(mubLABlOriCount + 20 + (8 - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + 20 + (8 - event.target.value));
                setmubLABlRupeeCost(mubLABlRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setLightBladeUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightBladeUnbindState >= 5 && lightBladeUnbindState <= 8) {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + ((lightBladeUnbindState - event.target.value) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightBladeUnbindState - event.target.value) * 16));
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + ((lightBladeUnbindState - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightBladeUnbindState - event.target.value) * 10));
                setmubLABlInsanityCountState(mubLABlInsanityCount + ((lightBladeUnbindState - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightBladeUnbindState - event.target.value) * 7));
                setmubLABlOriCountState(mubLABlOriCount + (lightBladeUnbindState - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + (lightBladeUnbindState - event.target.value));
                setmubLABlRupeeCost(mubLABlRupeeCost + ((lightBladeUnbindState - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightBladeUnbindState - event.target.value) * 7.5));
                setLightBladeUnbindState(event.target.value)
            }
        }
    }

    function handleLightBladeRefineIncrement(event) {
        setLightWeaponChoiceState("blade");
        if (lightBladeRefineState < event.target.value) {
            if (lightBladeRefineState == 0 && event.target.value == 1) {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
                setallmubLAInsanityCount(allmubLAInsanityCount - 7)
                setallmubLAOriCount(allmubLAOriCount - 1)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightBladeRefineState(event.target.value);
            }
            else if (lightBladeRefineState == 0 && event.target.value == 2) {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - 56);
                setwbLABlSilverMaskCountState(wbLABlSilverMaskCount - 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 56);
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - 40);
                setwbLABlGoldMaskCountState(wbLABlGoldMaskCount - 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 40);
                setmubLABlInsanityCountState(mubLABlInsanityCount - 17);
                setwbLABlInsanityCountState(wbLABlInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 17);
                setmubLABlGaleCountState(mubLABlGaleCount - 10);
                setallmubLAGaleCount(allmubLAGaleCount - 10);
                setmubLABlOriCountState(mubLABlOriCount - 11);
                setwbLABlOriCountState(wbLABlOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 11);
                setmubLABlRupeeCost(mubLABlRupeeCost - 5);
                setwbLABlRupeeCost(wbLABlRupeeCost - 2.5);
                setallmubLARupeeCost(allmubLARupeeCost - 5);
                setLightBladeRefineState(event.target.value);
            }
            else if (lightBladeRefineState == 1 && event.target.value == 2) {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount - 40)
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount - 30);
                setmubLABlInsanityCountState(mubLABlInsanityCount - 10);
                setmubLABlGaleCountState(mubLABlGaleCount - 10);
                setmubLABlOriCountState(mubLABlOriCount - 10);
                setmubLABlRupeeCost(mubLABlRupeeCost - 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
                setallmubLAInsanityCount(allmubLAInsanityCount - 10)
                setallmubLAGaleCount(allmubLAGaleCount - 10)
                setallmubLAOriCount(allmubLAOriCount - 10)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightBladeRefineState(event.target.value);
            }
        }
        else if (lightBladeRefineState > event.target.value) {
            if (lightBladeRefineState == 2 && event.target.value == 1) 
            {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + 40)
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + 30);
                setmubLABlInsanityCountState(mubLABlInsanityCount + 10);
                setmubLABlGaleCountState(mubLABlGaleCount + 10);
                setmubLABlOriCountState(mubLABlOriCount + 10);
                setmubLABlRupeeCost(mubLABlRupeeCost + 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
                setallmubLAInsanityCount(allmubLAInsanityCount + 10)
                setallmubLAGaleCount(allmubLAGaleCount + 10)
                setallmubLAOriCount(allmubLAOriCount + 10)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightBladeRefineState(event.target.value);
            }
            else if (lightBladeRefineState == 2 && event.target.value == 0) 
            {
                setmubLABlSilverMaskCountState(mubLABlSilverMaskCount + 56);
                setwbLABlSilverMaskCountState(wbLABlSilverMaskCount + 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 56);
                setmubLABlGoldMaskCountState(mubLABlGoldMaskCount + 40);
                setwbLABlGoldMaskCountState(wbLABlGoldMaskCount + 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 40);
                setmubLABlInsanityCountState(mubLABlInsanityCount + 17);
                setwbLABlInsanityCountState(wbLABlInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 17);
                setmubLABlGaleCountState(mubLABlGaleCount + 10);
                setallmubLAGaleCount(allmubLAGaleCount + 10);
                setmubLABlOriCountState(mubLABlOriCount + 11);
                setwbLABlOriCountState(wbLABlOriCount + 1); 
                setallmubLAOriCount(allmubLAOriCount + 11);
                setmubLABlRupeeCost(mubLABlRupeeCost + 5);
                setwbLABlRupeeCost(wbLABlRupeeCost + 2.5);
                setallmubLARupeeCost(allmubLARupeeCost + 5)
                setLightBladeRefineState(event.target.value);
            }
            else if (lightBladeRefineState == 1 && event.target.value == 0) 
            {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
                setallmubLAInsanityCount(allmubLAInsanityCount + 7)
                setallmubLAOriCount(allmubLAOriCount + 1)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightBladeRefineState(event.target.value);
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
            setallmubLASandCount(allmubLASandCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
            setallmubLASandCount(allmubLASandCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 100)
            setallmubLAInsanityCount(allmubLAInsanityCount - 14)
            setallmubLAOriCount(allmubLAOriCount - 30)
            setallmubLARupeeCost(allmubLARupeeCost - 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 100)
            setallmubLAInsanityCount(allmubLAInsanityCount + 14)
            setallmubLAOriCount(allmubLAOriCount + 30)
            setallmubLARupeeCost(allmubLARupeeCost + 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
            setallmubLAOriCount(allmubLAOriCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2.5)
        }
        else if (lightDaggerWyrmprintSlotState == "grayscale(0%)") {
            setLightDaggerWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("dagger");
            setmubLADSilverMaskCountState(mubLADSilverMaskCount + 16)
            setmubLADGoldMaskCountState(mubLADGoldMaskCount + 10)
            setmubLADOriCountState(mubLADOriCount + 1)
            setmubLADRupeeCost(mubLADRupeeCost + 2.5)
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
            setallmubLAOriCount(allmubLAOriCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2.5)
        }
    }

    function handleLightDaggerUnbindIncrement(event) {
        setLightWeaponChoiceState("dagger");
        if (lightDaggerUnbindState < event.target.value) {
            if (event.target.value == 9 && lightDaggerUnbindState == 0) {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount - 304);
                setwbLADSilverMaskCountState(wbLADSilverMaskCount - 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 304);
                setmubLADGoldMaskCountState(mubLADGoldMaskCount - 230);
                setwbLADGoldMaskCountState(wbLADGoldMaskCount - 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 230);
                setmubLADInsanityCountState(mubLADInsanityCount - 58);
                setwbLADInsanityCountState(wbLADInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLADGaleCountState(mubLADGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLADSandCountState(mubLADSandCount - 4);
                setwbLADSandCountState(wbLADSandCount - 4);
                setallmubLASandCount(allmubLASandCount - 4);
                setmubLADOriCountState(mubLADOriCount - 24);
                setwbLADOriCountState(wbLADOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLADRupeeCost(mubLADRupeeCost - 40);
                setwbLADRupeeCost(wbLADRupeeCost - 15.5);
                setallmubLARupeeCost(allmubLARupeeCost - 40);
                setLightDaggerUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightDaggerUnbindState >= 1 && lightDaggerUnbindState <= 4) {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount - 144 - ((4 - lightDaggerUnbindState) * 40));
                setwbLADSilverMaskCountState(wbLADSilverMaskCount - 16 - ((4 - lightDaggerUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 144 - ((4 - lightDaggerUnbindState) * 40));
                setmubLADGoldMaskCountState(mubLADGoldMaskCount - 110 - ((4 - lightDaggerUnbindState) * 30));
                setwbLADGoldMaskCountState(wbLADGoldMaskCount - 10 - ((4 - lightDaggerUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 110 - ((4 - lightDaggerUnbindState) * 30));
                setmubLADInsanityCountState(mubLADInsanityCount - 58);
                setwbLADInsanityCountState(wbLADInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLADGaleCountState(mubLADGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLADSandCountState(mubLADSandCount - (4 - lightDaggerUnbindState));
                setwbLADSandCountState(wbLADSandCount - (4 - lightDaggerUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightDaggerUnbindState));
                setmubLADOriCountState(mubLADOriCount - 24);
                setwbLADOriCountState(wbLADOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLADRupeeCost(mubLADRupeeCost - 32 - ((4 - lightDaggerUnbindState) * 2));
                setwbLADRupeeCost(wbLADRupeeCost - 7.5 - ((4 - lightDaggerUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - 32 - ((4 - lightDaggerUnbindState) * 2));
                setLightDaggerUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightDaggerUnbindState >= 5 && lightDaggerUnbindState <= 8) {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount - 80 - ((8 - lightDaggerUnbindState) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 80 - ((8 - lightDaggerUnbindState) * 16));
                setmubLADGoldMaskCountState(mubLADGoldMaskCount - 70 - ((8 - lightDaggerUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 70 - ((8 - lightDaggerUnbindState) * 10));
                setmubLADInsanityCountState(mubLADInsanityCount - 30 - ((8 - lightDaggerUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - 30 - ((8 - lightDaggerUnbindState) * 7));
                setmubLADGaleCountState(mubLADGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLADOriCountState(mubLADOriCount - 20 - ((8 - lightDaggerUnbindState) * 1));
                setallmubLAOriCount(allmubLAOriCount - 20 - ((8 - lightDaggerUnbindState) * 1));
                setmubLADRupeeCost(mubLADRupeeCost - 2 - ((8 - lightDaggerUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - 2 - ((8 - lightDaggerUnbindState) * 7.5));
                setLightDaggerUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightDaggerUnbindState <= 7 && lightDaggerUnbindState >= 5) {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount - ((event.target.value - lightDaggerUnbindState) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightDaggerUnbindState) * 16));
                setmubLADGoldMaskCountState(mubLADGoldMaskCount - ((event.target.value - lightDaggerUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightDaggerUnbindState) * 10));
                setmubLADInsanityCountState(mubLADInsanityCount - ((event.target.value - lightDaggerUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - ((event.target.value - lightDaggerUnbindState) * 7));
                setmubLADOriCountState(mubLADOriCount - (event.target.value - lightDaggerUnbindState));
                setallmubLAOriCount(allmubLAOriCount - (event.target.value - lightDaggerUnbindState));
                setmubLADRupeeCost(mubLADRupeeCost - ((event.target.value - lightDaggerUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightDaggerUnbindState) * 7.5));
                setLightDaggerUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightDaggerUnbindState <= 4 && lightDaggerUnbindState >= 0) {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount - ((4 - lightDaggerUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbLADSilverMaskCountState(wbLADSilverMaskCount - 16 - ((4 - lightDaggerUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((4 - lightDaggerUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubLADGoldMaskCountState(mubLADGoldMaskCount - ((4 - lightDaggerUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbLADGoldMaskCountState(wbLADGoldMaskCount - 10 - ((4 - lightDaggerUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((4 - lightDaggerUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubLADInsanityCountState(mubLADInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbLADInsanityCountState(wbLADInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubLADSandCountState(mubLADSandCount - (4 - lightDaggerUnbindState));
                setwbLADSandCountState(wbLADSandCount - (4 - lightDaggerUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightDaggerUnbindState));
                setmubLADOriCountState(mubLADOriCount - (-1 * (4 - event.target.value)));
                setwbLADOriCountState(wbLADOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - (-1 * (4 - event.target.value)));
                setmubLADRupeeCost(mubLADRupeeCost - ((4 - lightDaggerUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbLADRupeeCost(wbLADRupeeCost - 7.5 - ((4 - lightDaggerUnbindState) * 2))
                setLightDaggerUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && lightDaggerUnbindState <= 3 && lightDaggerUnbindState >= 0) {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount - ((event.target.value - lightDaggerUnbindState) * 40));
                setwbLADSilverMaskCountState(wbLADSilverMaskCount - ((event.target.value - lightDaggerUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightDaggerUnbindState) * 40));
                setmubLADGoldMaskCountState(mubLADGoldMaskCount - ((event.target.value - lightDaggerUnbindState) * 30));
                setwbLADGoldMaskCountState(wbLADGoldMaskCount - ((event.target.value - lightDaggerUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightDaggerUnbindState) * 30));
                setmubLADSandCountState(mubLADSandCount - (event.target.value - lightDaggerUnbindState));
                setwbLADSandCountState(wbLADSandCount - (event.target.value - lightDaggerUnbindState));
                setallmubLASandCount(allmubLASandCount - (event.target.value - lightDaggerUnbindState));
                setmubLADRupeeCost(mubLADRupeeCost - ((event.target.value - lightDaggerUnbindState) * 2));
                setwbLADRupeeCost(wbLADRupeeCost - ((event.target.value - lightDaggerUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightDaggerUnbindState) * 2));
                setLightDaggerUnbindState(event.target.value)
            }
        }
        else if (lightDaggerUnbindState > event.target.value) {
            if (event.target.value == 0 && lightDaggerUnbindState == 9) {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount + 304);
                setwbLADSilverMaskCountState(wbLADSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 304);
                setmubLADGoldMaskCountState(mubLADGoldMaskCount + 230);
                setwbLADGoldMaskCountState(wbLADGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 230);
                setmubLADInsanityCountState(mubLADInsanityCount + 58);
                setwbLADInsanityCountState(wbLADInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 58);
                setmubLADGaleCountState(mubLADGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLADSandCountState(mubLADSandCount + 4);
                setwbLADSandCountState(wbLADSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLADOriCountState(mubLADOriCount + 24);
                setwbLADOriCountState(wbLADOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + 24);
                setmubLADRupeeCost(mubLADRupeeCost + 40);
                setwbLADRupeeCost(wbLADRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 40);
                setLightDaggerUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightDaggerUnbindState >= 5 && lightDaggerUnbindState <= 8) {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount + 160 + ((-1 * (4 - lightDaggerUnbindState)) * 16));
                setwbLADSilverMaskCountState(wbLADSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 160 + ((-1 * (4 - lightDaggerUnbindState)) * 16));
                setmubLADGoldMaskCountState(mubLADGoldMaskCount + 120 + ((-1 * (4 - lightDaggerUnbindState)) * 10));
                setwbLADGoldMaskCountState(wbLADGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 120 + ((-1 * (4 - lightDaggerUnbindState)) * 10));
                setmubLADInsanityCountState(mubLADInsanityCount + ((-1 * (4 - lightDaggerUnbindState)) * 7));
                setwbLADInsanityCountState(wbLADInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((-1 * (4 - lightDaggerUnbindState)) * 7));
                setmubLADSandCountState(mubLADSandCount + 4);
                setwbLADSandCountState(wbLADSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLADOriCountState(mubLADOriCount + (-1 * (4 - lightDaggerUnbindState)));
                setwbLADOriCountState(wbLADOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + (-1 * (4 - lightDaggerUnbindState)));
                setmubLADRupeeCost(mubLADRupeeCost + 8 + (-1 * (4 - lightDaggerUnbindState) * 7.5));
                setwbLADRupeeCost(wbLADRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 8 + (-1 * (4 - lightDaggerUnbindState) * 7.5));
                setLightDaggerUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightDaggerUnbindState >= 1 && lightDaggerUnbindState <= 4) {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount + (lightDaggerUnbindState * 40));
                setwbLADSilverMaskCountState(wbLADSilverMaskCount + (lightDaggerUnbindState * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + (lightDaggerUnbindState * 40));
                setmubLADGoldMaskCountState(mubLADGoldMaskCount + (lightDaggerUnbindState * 30));
                setwbLADGoldMaskCountState(wbLADGoldMaskCount + (lightDaggerUnbindState * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + (lightDaggerUnbindState * 30));
                setmubLADSandCountState(mubLADSandCount + (lightDaggerUnbindState * 1));
                setwbLADSandCountState(wbLADSandCount + (lightDaggerUnbindState * 1));
                setallmubLASandCount(allmubLASandCount + (lightDaggerUnbindState * 1));
                setmubLADRupeeCost(mubLADRupeeCost + (lightDaggerUnbindState * 2));
                setwbLADRupeeCost(wbLADRupeeCost + (lightDaggerUnbindState * 2));
                setallmubLARupeeCost(allmubLARupeeCost + (lightDaggerUnbindState * 2));
                setLightDaggerUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightDaggerUnbindState >= 1 && lightDaggerUnbindState <= 4) {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount + ((lightDaggerUnbindState - event.target.value) * 40))
                setwbLADSilverMaskCountState(wbLADSilverMaskCount + ((lightDaggerUnbindState - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightDaggerUnbindState - event.target.value) * 40));
                setmubLADGoldMaskCountState(mubLADGoldMaskCount + ((lightDaggerUnbindState - event.target.value) * 30));
                setwbLADGoldMaskCountState(wbLADGoldMaskCount + ((lightDaggerUnbindState - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightDaggerUnbindState - event.target.value) * 30));
                setmubLADSandCountState(mubLADSandCount + (lightDaggerUnbindState - event.target.value));
                setwbLADSandCountState(wbLADSandCount + (lightDaggerUnbindState - event.target.value));
                setallmubLASandCount(allmubLASandCount + (lightDaggerUnbindState - event.target.value));
                setmubLADRupeeCost(mubLADRupeeCost + ((lightDaggerUnbindState - event.target.value) * 2));
                setwbLADRupeeCost(wbLADRupeeCost + ((lightDaggerUnbindState - event.target.value) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightDaggerUnbindState - event.target.value) * 2))
                setLightDaggerUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightDaggerUnbindState >= 5 && lightDaggerUnbindState <= 8) {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount + ((lightDaggerUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbLADSilverMaskCountState(wbLADSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightDaggerUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubLADGoldMaskCountState(mubLADGoldMaskCount + ((lightDaggerUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbLADGoldMaskCountState(wbLADGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightDaggerUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubLADInsanityCountState(mubLADInsanityCount + ((lightDaggerUnbindState - 4) * 7));
                setwbLADInsanityCountState(wbLADInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightDaggerUnbindState - 4) * 7));
                setmubLADSandCountState(mubLADSandCount + (4 - event.target.value));
                setwbLADSandCountState(wbLADSandCount + (4 - event.target.value));
                setallmubLASandCount(allmubLASandCount + (4 - event.target.value));
                setmubLADOriCountState(mubLADOriCount + (lightDaggerUnbindState - 4));
                setwbLADOriCountState(wbLADOriCount + (lightDaggerUnbindState - 4));
                setallmubLAOriCount(allmubLAOriCount + (lightDaggerUnbindState - 4));
                setmubLADRupeeCost(mubLADRupeeCost + ((lightDaggerUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbLADRupeeCost(wbLADRupeeCost + 7.5 + ((lightDaggerUnbindState - 4) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightDaggerUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setLightDaggerUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightDaggerUnbindState == 9) {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubLADGoldMaskCountState(mubLADGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubLADInsanityCountState(mubLADInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubLADGaleCountState(mubLADGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLADOriCountState(mubLADOriCount + 20 + (8 - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + 20 + (8 - event.target.value));
                setmubLADRupeeCost(mubLADRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setLightDaggerUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightDaggerUnbindState >= 5 && lightDaggerUnbindState <= 8) {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount + ((lightDaggerUnbindState - event.target.value) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightDaggerUnbindState - event.target.value) * 16));
                setmubLADGoldMaskCountState(mubLADGoldMaskCount + ((lightDaggerUnbindState - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightDaggerUnbindState - event.target.value) * 10));
                setmubLADInsanityCountState(mubLADInsanityCount + ((lightDaggerUnbindState - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightDaggerUnbindState - event.target.value) * 7));
                setmubLADOriCountState(mubLADOriCount + (lightDaggerUnbindState - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + (lightDaggerUnbindState - event.target.value));
                setmubLADRupeeCost(mubLADRupeeCost + ((lightDaggerUnbindState - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightDaggerUnbindState - event.target.value) * 7.5));
                setLightDaggerUnbindState(event.target.value)
            }
        }
    }

    function handleLightDaggerRefineIncrement(event) {
        setLightWeaponChoiceState("dagger");
        if (lightDaggerRefineState < event.target.value) {
            if (lightDaggerRefineState == 0 && event.target.value == 1) {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
                setallmubLAInsanityCount(allmubLAInsanityCount - 7)
                setallmubLAOriCount(allmubLAOriCount - 1)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightDaggerRefineState(event.target.value);
            }
            else if (lightDaggerRefineState == 0 && event.target.value == 2) {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount - 56);
                setwbLADSilverMaskCountState(wbLADSilverMaskCount - 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 56);
                setmubLADGoldMaskCountState(mubLADGoldMaskCount - 40);
                setwbLADGoldMaskCountState(wbLADGoldMaskCount - 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 40);
                setmubLADInsanityCountState(mubLADInsanityCount - 17);
                setwbLADInsanityCountState(wbLADInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 17);
                setmubLADGaleCountState(mubLADGaleCount - 10);
                setallmubLAGaleCount(allmubLAGaleCount - 10);
                setmubLADOriCountState(mubLADOriCount - 11);
                setwbLADOriCountState(wbLADOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 11);
                setmubLADRupeeCost(mubLADRupeeCost - 5);
                setwbLADRupeeCost(wbLADRupeeCost - 2.5);
                setallmubLARupeeCost(allmubLARupeeCost - 5);
                setLightDaggerRefineState(event.target.value);
            }
            else if (lightDaggerRefineState == 1 && event.target.value == 2) {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount - 40)
                setmubLADGoldMaskCountState(mubLADGoldMaskCount - 30);
                setmubLADInsanityCountState(mubLADInsanityCount - 10);
                setmubLADGaleCountState(mubLADGaleCount - 10);
                setmubLADOriCountState(mubLADOriCount - 10);
                setmubLADRupeeCost(mubLADRupeeCost - 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
                setallmubLAInsanityCount(allmubLAInsanityCount - 10)
                setallmubLAGaleCount(allmubLAGaleCount - 10)
                setallmubLAOriCount(allmubLAOriCount - 10)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightDaggerRefineState(event.target.value);
            }
        }
        else if (lightDaggerRefineState > event.target.value) {
            if (lightDaggerRefineState == 2 && event.target.value == 1) 
            {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount + 40)
                setmubLADGoldMaskCountState(mubLADGoldMaskCount + 30);
                setmubLADInsanityCountState(mubLADInsanityCount + 10);
                setmubLADGaleCountState(mubLADGaleCount + 10);
                setmubLADOriCountState(mubLADOriCount + 10);
                setmubLADRupeeCost(mubLADRupeeCost + 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
                setallmubLAInsanityCount(allmubLAInsanityCount + 10)
                setallmubLAGaleCount(allmubLAGaleCount + 10)
                setallmubLAOriCount(allmubLAOriCount + 10)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightDaggerRefineState(event.target.value);
            }
            else if (lightDaggerRefineState == 2 && event.target.value == 0) 
            {
                setmubLADSilverMaskCountState(mubLADSilverMaskCount + 56);
                setwbLADSilverMaskCountState(wbLADSilverMaskCount + 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 56);
                setmubLADGoldMaskCountState(mubLADGoldMaskCount + 40);
                setwbLADGoldMaskCountState(wbLADGoldMaskCount + 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 40);
                setmubLADInsanityCountState(mubLADInsanityCount + 17);
                setwbLADInsanityCountState(wbLADInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 17);
                setmubLADGaleCountState(mubLADGaleCount + 10);
                setallmubLAGaleCount(allmubLAGaleCount + 10);
                setmubLADOriCountState(mubLADOriCount + 11);
                setwbLADOriCountState(wbLADOriCount + 1); 
                setallmubLAOriCount(allmubLAOriCount + 11);
                setmubLADRupeeCost(mubLADRupeeCost + 5);
                setwbLADRupeeCost(wbLADRupeeCost + 2.5);
                setallmubLARupeeCost(allmubLARupeeCost + 5)
                setLightDaggerRefineState(event.target.value);
            }
            else if (lightDaggerRefineState == 1 && event.target.value == 0) 
            {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
                setallmubLAInsanityCount(allmubLAInsanityCount + 7)
                setallmubLAOriCount(allmubLAOriCount + 1)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightDaggerRefineState(event.target.value);
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
            setallmubLASandCount(allmubLASandCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
            setallmubLASandCount(allmubLASandCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 100)
            setallmubLAInsanityCount(allmubLAInsanityCount - 14)
            setallmubLAOriCount(allmubLAOriCount - 30)
            setallmubLARupeeCost(allmubLARupeeCost - 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 100)
            setallmubLAInsanityCount(allmubLAInsanityCount + 14)
            setallmubLAOriCount(allmubLAOriCount + 30)
            setallmubLARupeeCost(allmubLARupeeCost + 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
            setallmubLAOriCount(allmubLAOriCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2.5)
        }
        else if (lightAxeWyrmprintSlotState == "grayscale(0%)") {
            setLightAxeWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("axe");
            setmubLAASilverMaskCountState(mubLAASilverMaskCount + 16)
            setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + 10)
            setmubLAAOriCountState(mubLAAOriCount + 1)
            setmubLAARupeeCost(mubLAARupeeCost + 2.5)
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
            setallmubLAOriCount(allmubLAOriCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2.5)
        }
    }

    function handleLightAxeUnbindIncrement(event) {
        setLightWeaponChoiceState("axe");
        if (lightAxeUnbindState < event.target.value) {
            if (event.target.value == 9 && lightAxeUnbindState == 0) {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount - 304);
                setwbLAASilverMaskCountState(wbLAASilverMaskCount - 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 304);
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - 230);
                setwbLAAGoldMaskCountState(wbLAAGoldMaskCount - 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 230);
                setmubLAAInsanityCountState(mubLAAInsanityCount - 58);
                setwbLAAInsanityCountState(wbLAAInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLAAGaleCountState(mubLAAGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLAASandCountState(mubLAASandCount - 4);
                setwbLAASandCountState(wbLAASandCount - 4);
                setallmubLASandCount(allmubLASandCount - 4);
                setmubLAAOriCountState(mubLAAOriCount - 24);
                setwbLAAOriCountState(wbLAAOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLAARupeeCost(mubLAARupeeCost - 40);
                setwbLAARupeeCost(wbLAARupeeCost - 15.5);
                setallmubLARupeeCost(allmubLARupeeCost - 40);
                setLightAxeUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightAxeUnbindState >= 1 && lightAxeUnbindState <= 4) {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount - 144 - ((4 - lightAxeUnbindState) * 40));
                setwbLAASilverMaskCountState(wbLAASilverMaskCount - 16 - ((4 - lightAxeUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 144 - ((4 - lightAxeUnbindState) * 40));
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - 110 - ((4 - lightAxeUnbindState) * 30));
                setwbLAAGoldMaskCountState(wbLAAGoldMaskCount - 10 - ((4 - lightAxeUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 110 - ((4 - lightAxeUnbindState) * 30));
                setmubLAAInsanityCountState(mubLAAInsanityCount - 58);
                setwbLAAInsanityCountState(wbLAAInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLAAGaleCountState(mubLAAGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLAASandCountState(mubLAASandCount - (4 - lightAxeUnbindState));
                setwbLAASandCountState(wbLAASandCount - (4 - lightAxeUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightAxeUnbindState));
                setmubLAAOriCountState(mubLAAOriCount - 24);
                setwbLAAOriCountState(wbLAAOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLAARupeeCost(mubLAARupeeCost - 32 - ((4 - lightAxeUnbindState) * 2));
                setwbLAARupeeCost(wbLAARupeeCost - 7.5 - ((4 - lightAxeUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - 32 - ((4 - lightAxeUnbindState) * 2));
                setLightAxeUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightAxeUnbindState >= 5 && lightAxeUnbindState <= 8) {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount - 80 - ((8 - lightAxeUnbindState) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 80 - ((8 - lightAxeUnbindState) * 16));
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - 70 - ((8 - lightAxeUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 70 - ((8 - lightAxeUnbindState) * 10));
                setmubLAAInsanityCountState(mubLAAInsanityCount - 30 - ((8 - lightAxeUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - 30 - ((8 - lightAxeUnbindState) * 7));
                setmubLAAGaleCountState(mubLAAGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLAAOriCountState(mubLAAOriCount - 20 - ((8 - lightAxeUnbindState) * 1));
                setallmubLAOriCount(allmubLAOriCount - 20 - ((8 - lightAxeUnbindState) * 1));
                setmubLAARupeeCost(mubLAARupeeCost - 2 - ((8 - lightAxeUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - 2 - ((8 - lightAxeUnbindState) * 7.5));
                setLightAxeUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightAxeUnbindState <= 7 && lightAxeUnbindState >= 5) {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount - ((event.target.value - lightAxeUnbindState) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightAxeUnbindState) * 16));
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - ((event.target.value - lightAxeUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightAxeUnbindState) * 10));
                setmubLAAInsanityCountState(mubLAAInsanityCount - ((event.target.value - lightAxeUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - ((event.target.value - lightAxeUnbindState) * 7));
                setmubLAAOriCountState(mubLAAOriCount - (event.target.value - lightAxeUnbindState));
                setallmubLAOriCount(allmubLAOriCount - (event.target.value - lightAxeUnbindState));
                setmubLAARupeeCost(mubLAARupeeCost - ((event.target.value - lightAxeUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightAxeUnbindState) * 7.5));
                setLightAxeUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightAxeUnbindState <= 4 && lightAxeUnbindState >= 0) {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount - ((4 - lightAxeUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbLAASilverMaskCountState(wbLAASilverMaskCount - 16 - ((4 - lightAxeUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((4 - lightAxeUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - ((4 - lightAxeUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbLAAGoldMaskCountState(wbLAAGoldMaskCount - 10 - ((4 - lightAxeUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((4 - lightAxeUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubLAAInsanityCountState(mubLAAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbLAAInsanityCountState(wbLAAInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubLAASandCountState(mubLAASandCount - (4 - lightAxeUnbindState));
                setwbLAASandCountState(wbLAASandCount - (4 - lightAxeUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightAxeUnbindState));
                setmubLAAOriCountState(mubLAAOriCount - (-1 * (4 - event.target.value)));
                setwbLAAOriCountState(wbLAAOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - (-1 * (4 - event.target.value)));
                setmubLAARupeeCost(mubLAARupeeCost - ((4 - lightAxeUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbLAARupeeCost(wbLAARupeeCost - 7.5 - ((4 - lightAxeUnbindState) * 2))
                setLightAxeUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && lightAxeUnbindState <= 3 && lightAxeUnbindState >= 0) {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount - ((event.target.value - lightAxeUnbindState) * 40));
                setwbLAASilverMaskCountState(wbLAASilverMaskCount - ((event.target.value - lightAxeUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightAxeUnbindState) * 40));
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - ((event.target.value - lightAxeUnbindState) * 30));
                setwbLAAGoldMaskCountState(wbLAAGoldMaskCount - ((event.target.value - lightAxeUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightAxeUnbindState) * 30));
                setmubLAASandCountState(mubLAASandCount - (event.target.value - lightAxeUnbindState));
                setwbLAASandCountState(wbLAASandCount - (event.target.value - lightAxeUnbindState));
                setallmubLASandCount(allmubLASandCount - (event.target.value - lightAxeUnbindState));
                setmubLAARupeeCost(mubLAARupeeCost - ((event.target.value - lightAxeUnbindState) * 2));
                setwbLAARupeeCost(wbLAARupeeCost - ((event.target.value - lightAxeUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightAxeUnbindState) * 2));
                setLightAxeUnbindState(event.target.value)
            }
        }
        else if (lightAxeUnbindState > event.target.value) {
            if (event.target.value == 0 && lightAxeUnbindState == 9) {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount + 304);
                setwbLAASilverMaskCountState(wbLAASilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 304);
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + 230);
                setwbLAAGoldMaskCountState(wbLAAGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 230);
                setmubLAAInsanityCountState(mubLAAInsanityCount + 58);
                setwbLAAInsanityCountState(wbLAAInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 58);
                setmubLAAGaleCountState(mubLAAGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLAASandCountState(mubLAASandCount + 4);
                setwbLAASandCountState(wbLAASandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLAAOriCountState(mubLAAOriCount + 24);
                setwbLAAOriCountState(wbLAAOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + 24);
                setmubLAARupeeCost(mubLAARupeeCost + 40);
                setwbLAARupeeCost(wbLAARupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 40);
                setLightAxeUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightAxeUnbindState >= 5 && lightAxeUnbindState <= 8) {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount + 160 + ((-1 * (4 - lightAxeUnbindState)) * 16));
                setwbLAASilverMaskCountState(wbLAASilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 160 + ((-1 * (4 - lightAxeUnbindState)) * 16));
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + 120 + ((-1 * (4 - lightAxeUnbindState)) * 10));
                setwbLAAGoldMaskCountState(wbLAAGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 120 + ((-1 * (4 - lightAxeUnbindState)) * 10));
                setmubLAAInsanityCountState(mubLAAInsanityCount + ((-1 * (4 - lightAxeUnbindState)) * 7));
                setwbLAAInsanityCountState(wbLAAInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((-1 * (4 - lightAxeUnbindState)) * 7));
                setmubLAASandCountState(mubLAASandCount + 4);
                setwbLAASandCountState(wbLAASandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLAAOriCountState(mubLAAOriCount + (-1 * (4 - lightAxeUnbindState)));
                setwbLAAOriCountState(wbLAAOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + (-1 * (4 - lightAxeUnbindState)));
                setmubLAARupeeCost(mubLAARupeeCost + 8 + (-1 * (4 - lightAxeUnbindState) * 7.5));
                setwbLAARupeeCost(wbLAARupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 8 + (-1 * (4 - lightAxeUnbindState) * 7.5));
                setLightAxeUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightAxeUnbindState >= 1 && lightAxeUnbindState <= 4) {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount + (lightAxeUnbindState * 40));
                setwbLAASilverMaskCountState(wbLAASilverMaskCount + (lightAxeUnbindState * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + (lightAxeUnbindState * 40));
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + (lightAxeUnbindState * 30));
                setwbLAAGoldMaskCountState(wbLAAGoldMaskCount + (lightAxeUnbindState * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + (lightAxeUnbindState * 30));
                setmubLAASandCountState(mubLAASandCount + (lightAxeUnbindState * 1));
                setwbLAASandCountState(wbLAASandCount + (lightAxeUnbindState * 1));
                setallmubLASandCount(allmubLASandCount + (lightAxeUnbindState * 1));
                setmubLAARupeeCost(mubLAARupeeCost + (lightAxeUnbindState * 2));
                setwbLAARupeeCost(wbLAARupeeCost + (lightAxeUnbindState * 2));
                setallmubLARupeeCost(allmubLARupeeCost + (lightAxeUnbindState * 2));
                setLightAxeUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightAxeUnbindState >= 1 && lightAxeUnbindState <= 4) {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount + ((lightAxeUnbindState - event.target.value) * 40))
                setwbLAASilverMaskCountState(wbLAASilverMaskCount + ((lightAxeUnbindState - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightAxeUnbindState - event.target.value) * 40));
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + ((lightAxeUnbindState - event.target.value) * 30));
                setwbLAAGoldMaskCountState(wbLAAGoldMaskCount + ((lightAxeUnbindState - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightAxeUnbindState - event.target.value) * 30));
                setmubLAASandCountState(mubLAASandCount + (lightAxeUnbindState - event.target.value));
                setwbLAASandCountState(wbLAASandCount + (lightAxeUnbindState - event.target.value));
                setallmubLASandCount(allmubLASandCount + (lightAxeUnbindState - event.target.value));
                setmubLAARupeeCost(mubLAARupeeCost + ((lightAxeUnbindState - event.target.value) * 2));
                setwbLAARupeeCost(wbLAARupeeCost + ((lightAxeUnbindState - event.target.value) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightAxeUnbindState - event.target.value) * 2))
                setLightAxeUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightAxeUnbindState >= 5 && lightAxeUnbindState <= 8) {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount + ((lightAxeUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbLAASilverMaskCountState(wbLAASilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightAxeUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + ((lightAxeUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbLAAGoldMaskCountState(wbLAAGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightAxeUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubLAAInsanityCountState(mubLAAInsanityCount + ((lightAxeUnbindState - 4) * 7));
                setwbLAAInsanityCountState(wbLAAInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightAxeUnbindState - 4) * 7));
                setmubLAASandCountState(mubLAASandCount + (4 - event.target.value));
                setwbLAASandCountState(wbLAASandCount + (4 - event.target.value));
                setallmubLASandCount(allmubLASandCount + (4 - event.target.value));
                setmubLAAOriCountState(mubLAAOriCount + (lightAxeUnbindState - 4));
                setwbLAAOriCountState(wbLAAOriCount + (lightAxeUnbindState - 4));
                setallmubLAOriCount(allmubLAOriCount + (lightAxeUnbindState - 4));
                setmubLAARupeeCost(mubLAARupeeCost + ((lightAxeUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbLAARupeeCost(wbLAARupeeCost + 7.5 + ((lightAxeUnbindState - 4) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightAxeUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setLightAxeUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightAxeUnbindState == 9) {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubLAAInsanityCountState(mubLAAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubLAAGaleCountState(mubLAAGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLAAOriCountState(mubLAAOriCount + 20 + (8 - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + 20 + (8 - event.target.value));
                setmubLAARupeeCost(mubLAARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setLightAxeUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightAxeUnbindState >= 5 && lightAxeUnbindState <= 8) {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount + ((lightAxeUnbindState - event.target.value) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightAxeUnbindState - event.target.value) * 16));
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + ((lightAxeUnbindState - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightAxeUnbindState - event.target.value) * 10));
                setmubLAAInsanityCountState(mubLAAInsanityCount + ((lightAxeUnbindState - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightAxeUnbindState - event.target.value) * 7));
                setmubLAAOriCountState(mubLAAOriCount + (lightAxeUnbindState - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + (lightAxeUnbindState - event.target.value));
                setmubLAARupeeCost(mubLAARupeeCost + ((lightAxeUnbindState - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightAxeUnbindState - event.target.value) * 7.5));
                setLightAxeUnbindState(event.target.value)
            }
        }
    }

    function handleLightAxeRefineIncrement(event) {
        setLightWeaponChoiceState("axe");
        if (lightAxeRefineState < event.target.value) {
            if (lightAxeRefineState == 0 && event.target.value == 1) {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
                setallmubLAInsanityCount(allmubLAInsanityCount - 7)
                setallmubLAOriCount(allmubLAOriCount - 1)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightAxeRefineState(event.target.value);
            }
            else if (lightAxeRefineState == 0 && event.target.value == 2) {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount - 56);
                setwbLAASilverMaskCountState(wbLAASilverMaskCount - 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 56);
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - 40);
                setwbLAAGoldMaskCountState(wbLAAGoldMaskCount - 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 40);
                setmubLAAInsanityCountState(mubLAAInsanityCount - 17);
                setwbLAAInsanityCountState(wbLAAInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 17);
                setmubLAAGaleCountState(mubLAAGaleCount - 10);
                setallmubLAGaleCount(allmubLAGaleCount - 10);
                setmubLAAOriCountState(mubLAAOriCount - 11);
                setwbLAAOriCountState(wbLAAOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 11);
                setmubLAARupeeCost(mubLAARupeeCost - 5);
                setwbLAARupeeCost(wbLAARupeeCost - 2.5);
                setallmubLARupeeCost(allmubLARupeeCost - 5);
                setLightAxeRefineState(event.target.value);
            }
            else if (lightAxeRefineState == 1 && event.target.value == 2) {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount - 40)
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount - 30);
                setmubLAAInsanityCountState(mubLAAInsanityCount - 10);
                setmubLAAGaleCountState(mubLAAGaleCount - 10);
                setmubLAAOriCountState(mubLAAOriCount - 10);
                setmubLAARupeeCost(mubLAARupeeCost - 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
                setallmubLAInsanityCount(allmubLAInsanityCount - 10)
                setallmubLAGaleCount(allmubLAGaleCount - 10)
                setallmubLAOriCount(allmubLAOriCount - 10)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightAxeRefineState(event.target.value);
            }
        }
        else if (lightAxeRefineState > event.target.value) {
            if (lightAxeRefineState == 2 && event.target.value == 1) 
            {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount + 40)
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + 30);
                setmubLAAInsanityCountState(mubLAAInsanityCount + 10);
                setmubLAAGaleCountState(mubLAAGaleCount + 10);
                setmubLAAOriCountState(mubLAAOriCount + 10);
                setmubLAARupeeCost(mubLAARupeeCost + 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
                setallmubLAInsanityCount(allmubLAInsanityCount + 10)
                setallmubLAGaleCount(allmubLAGaleCount + 10)
                setallmubLAOriCount(allmubLAOriCount + 10)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightAxeRefineState(event.target.value);
            }
            else if (lightAxeRefineState == 2 && event.target.value == 0) 
            {
                setmubLAASilverMaskCountState(mubLAASilverMaskCount + 56);
                setwbLAASilverMaskCountState(wbLAASilverMaskCount + 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 56);
                setmubLAAGoldMaskCountState(mubLAAGoldMaskCount + 40);
                setwbLAAGoldMaskCountState(wbLAAGoldMaskCount + 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 40);
                setmubLAAInsanityCountState(mubLAAInsanityCount + 17);
                setwbLAAInsanityCountState(wbLAAInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 17);
                setmubLAAGaleCountState(mubLAAGaleCount + 10);
                setallmubLAGaleCount(allmubLAGaleCount + 10);
                setmubLAAOriCountState(mubLAAOriCount + 11);
                setwbLAAOriCountState(wbLAAOriCount + 1); 
                setallmubLAOriCount(allmubLAOriCount + 11);
                setmubLAARupeeCost(mubLAARupeeCost + 5);
                setwbLAARupeeCost(wbLAARupeeCost + 2.5);
                setallmubLARupeeCost(allmubLARupeeCost + 5)
                setLightAxeRefineState(event.target.value);
            }
            else if (lightAxeRefineState == 1 && event.target.value == 0) 
            {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
                setallmubLAInsanityCount(allmubLAInsanityCount + 7)
                setallmubLAOriCount(allmubLAOriCount + 1)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightAxeRefineState(event.target.value);
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
            setallmubLASandCount(allmubLASandCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
            setallmubLASandCount(allmubLASandCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 100)
            setallmubLAInsanityCount(allmubLAInsanityCount - 14)
            setallmubLAOriCount(allmubLAOriCount - 30)
            setallmubLARupeeCost(allmubLARupeeCost - 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 100)
            setallmubLAInsanityCount(allmubLAInsanityCount + 14)
            setallmubLAOriCount(allmubLAOriCount + 30)
            setallmubLARupeeCost(allmubLARupeeCost + 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
            setallmubLAOriCount(allmubLAOriCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2.5)
        }
        else if (lightLanceWyrmprintSlotState == "grayscale(0%)") {
            setLightLanceWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("lance");
            setmubLALSilverMaskCountState(mubLALSilverMaskCount + 16)
            setmubLALGoldMaskCountState(mubLALGoldMaskCount + 10)
            setmubLALOriCountState(mubLALOriCount + 1)
            setmubLALRupeeCost(mubLALRupeeCost + 2.5)
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
            setallmubLAOriCount(allmubLAOriCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2.5)
        }
    }

    function handleLightLanceUnbindIncrement(event) {
        setLightWeaponChoiceState("lance");
        if (lightLanceUnbindState < event.target.value) {
            if (event.target.value == 9 && lightLanceUnbindState == 0) {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount - 304);
                setwbLALSilverMaskCountState(wbLALSilverMaskCount - 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 304);
                setmubLALGoldMaskCountState(mubLALGoldMaskCount - 230);
                setwbLALGoldMaskCountState(wbLALGoldMaskCount - 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 230);
                setmubLALInsanityCountState(mubLALInsanityCount - 58);
                setwbLALInsanityCountState(wbLALInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLALGaleCountState(mubLALGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLALSandCountState(mubLALSandCount - 4);
                setwbLALSandCountState(wbLALSandCount - 4);
                setallmubLASandCount(allmubLASandCount - 4);
                setmubLALOriCountState(mubLALOriCount - 24);
                setwbLALOriCountState(wbLALOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLALRupeeCost(mubLALRupeeCost - 40);
                setwbLALRupeeCost(wbLALRupeeCost - 15.5);
                setallmubLARupeeCost(allmubLARupeeCost - 40);
                setLightLanceUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightLanceUnbindState >= 1 && lightLanceUnbindState <= 4) {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount - 144 - ((4 - lightLanceUnbindState) * 40));
                setwbLALSilverMaskCountState(wbLALSilverMaskCount - 16 - ((4 - lightLanceUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 144 - ((4 - lightLanceUnbindState) * 40));
                setmubLALGoldMaskCountState(mubLALGoldMaskCount - 110 - ((4 - lightLanceUnbindState) * 30));
                setwbLALGoldMaskCountState(wbLALGoldMaskCount - 10 - ((4 - lightLanceUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 110 - ((4 - lightLanceUnbindState) * 30));
                setmubLALInsanityCountState(mubLALInsanityCount - 58);
                setwbLALInsanityCountState(wbLALInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLALGaleCountState(mubLALGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLALSandCountState(mubLALSandCount - (4 - lightLanceUnbindState));
                setwbLALSandCountState(wbLALSandCount - (4 - lightLanceUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightLanceUnbindState));
                setmubLALOriCountState(mubLALOriCount - 24);
                setwbLALOriCountState(wbLALOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLALRupeeCost(mubLALRupeeCost - 32 - ((4 - lightLanceUnbindState) * 2));
                setwbLALRupeeCost(wbLALRupeeCost - 7.5 - ((4 - lightLanceUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - 32 - ((4 - lightLanceUnbindState) * 2));
                setLightLanceUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightLanceUnbindState >= 5 && lightLanceUnbindState <= 8) {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount - 80 - ((8 - lightLanceUnbindState) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 80 - ((8 - lightLanceUnbindState) * 16));
                setmubLALGoldMaskCountState(mubLALGoldMaskCount - 70 - ((8 - lightLanceUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 70 - ((8 - lightLanceUnbindState) * 10));
                setmubLALInsanityCountState(mubLALInsanityCount - 30 - ((8 - lightLanceUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - 30 - ((8 - lightLanceUnbindState) * 7));
                setmubLALGaleCountState(mubLALGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLALOriCountState(mubLALOriCount - 20 - ((8 - lightLanceUnbindState) * 1));
                setallmubLAOriCount(allmubLAOriCount - 20 - ((8 - lightLanceUnbindState) * 1));
                setmubLALRupeeCost(mubLALRupeeCost - 2 - ((8 - lightLanceUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - 2 - ((8 - lightLanceUnbindState) * 7.5));
                setLightLanceUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightLanceUnbindState <= 7 && lightLanceUnbindState >= 5) {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount - ((event.target.value - lightLanceUnbindState) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightLanceUnbindState) * 16));
                setmubLALGoldMaskCountState(mubLALGoldMaskCount - ((event.target.value - lightLanceUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightLanceUnbindState) * 10));
                setmubLALInsanityCountState(mubLALInsanityCount - ((event.target.value - lightLanceUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - ((event.target.value - lightLanceUnbindState) * 7));
                setmubLALOriCountState(mubLALOriCount - (event.target.value - lightLanceUnbindState));
                setallmubLAOriCount(allmubLAOriCount - (event.target.value - lightLanceUnbindState));
                setmubLALRupeeCost(mubLALRupeeCost - ((event.target.value - lightLanceUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightLanceUnbindState) * 7.5));
                setLightLanceUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightLanceUnbindState <= 4 && lightLanceUnbindState >= 0) {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount - ((4 - lightLanceUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbLALSilverMaskCountState(wbLALSilverMaskCount - 16 - ((4 - lightLanceUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((4 - lightLanceUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubLALGoldMaskCountState(mubLALGoldMaskCount - ((4 - lightLanceUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbLALGoldMaskCountState(wbLALGoldMaskCount - 10 - ((4 - lightLanceUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((4 - lightLanceUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubLALInsanityCountState(mubLALInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbLALInsanityCountState(wbLALInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubLALSandCountState(mubLALSandCount - (4 - lightLanceUnbindState));
                setwbLALSandCountState(wbLALSandCount - (4 - lightLanceUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightLanceUnbindState));
                setmubLALOriCountState(mubLALOriCount - (-1 * (4 - event.target.value)));
                setwbLALOriCountState(wbLALOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - (-1 * (4 - event.target.value)));
                setmubLALRupeeCost(mubLALRupeeCost - ((4 - lightLanceUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbLALRupeeCost(wbLALRupeeCost - 7.5 - ((4 - lightLanceUnbindState) * 2))
                setLightLanceUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && lightLanceUnbindState <= 3 && lightLanceUnbindState >= 0) {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount - ((event.target.value - lightLanceUnbindState) * 40));
                setwbLALSilverMaskCountState(wbLALSilverMaskCount - ((event.target.value - lightLanceUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightLanceUnbindState) * 40));
                setmubLALGoldMaskCountState(mubLALGoldMaskCount - ((event.target.value - lightLanceUnbindState) * 30));
                setwbLALGoldMaskCountState(wbLALGoldMaskCount - ((event.target.value - lightLanceUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightLanceUnbindState) * 30));
                setmubLALSandCountState(mubLALSandCount - (event.target.value - lightLanceUnbindState));
                setwbLALSandCountState(wbLALSandCount - (event.target.value - lightLanceUnbindState));
                setallmubLASandCount(allmubLASandCount - (event.target.value - lightLanceUnbindState));
                setmubLALRupeeCost(mubLALRupeeCost - ((event.target.value - lightLanceUnbindState) * 2));
                setwbLALRupeeCost(wbLALRupeeCost - ((event.target.value - lightLanceUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightLanceUnbindState) * 2));
                setLightLanceUnbindState(event.target.value)
            }
        }
        else if (lightLanceUnbindState > event.target.value) {
            if (event.target.value == 0 && lightLanceUnbindState == 9) {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount + 304);
                setwbLALSilverMaskCountState(wbLALSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 304);
                setmubLALGoldMaskCountState(mubLALGoldMaskCount + 230);
                setwbLALGoldMaskCountState(wbLALGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 230);
                setmubLALInsanityCountState(mubLALInsanityCount + 58);
                setwbLALInsanityCountState(wbLALInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 58);
                setmubLALGaleCountState(mubLALGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLALSandCountState(mubLALSandCount + 4);
                setwbLALSandCountState(wbLALSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLALOriCountState(mubLALOriCount + 24);
                setwbLALOriCountState(wbLALOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + 24);
                setmubLALRupeeCost(mubLALRupeeCost + 40);
                setwbLALRupeeCost(wbLALRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 40);
                setLightLanceUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightLanceUnbindState >= 5 && lightLanceUnbindState <= 8) {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount + 160 + ((-1 * (4 - lightLanceUnbindState)) * 16));
                setwbLALSilverMaskCountState(wbLALSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 160 + ((-1 * (4 - lightLanceUnbindState)) * 16));
                setmubLALGoldMaskCountState(mubLALGoldMaskCount + 120 + ((-1 * (4 - lightLanceUnbindState)) * 10));
                setwbLALGoldMaskCountState(wbLALGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 120 + ((-1 * (4 - lightLanceUnbindState)) * 10));
                setmubLALInsanityCountState(mubLALInsanityCount + ((-1 * (4 - lightLanceUnbindState)) * 7));
                setwbLALInsanityCountState(wbLALInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((-1 * (4 - lightLanceUnbindState)) * 7));
                setmubLALSandCountState(mubLALSandCount + 4);
                setwbLALSandCountState(wbLALSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLALOriCountState(mubLALOriCount + (-1 * (4 - lightLanceUnbindState)));
                setwbLALOriCountState(wbLALOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + (-1 * (4 - lightLanceUnbindState)));
                setmubLALRupeeCost(mubLALRupeeCost + 8 + (-1 * (4 - lightLanceUnbindState) * 7.5));
                setwbLALRupeeCost(wbLALRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 8 + (-1 * (4 - lightLanceUnbindState) * 7.5));
                setLightLanceUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightLanceUnbindState >= 1 && lightLanceUnbindState <= 4) {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount + (lightLanceUnbindState * 40));
                setwbLALSilverMaskCountState(wbLALSilverMaskCount + (lightLanceUnbindState * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + (lightLanceUnbindState * 40));
                setmubLALGoldMaskCountState(mubLALGoldMaskCount + (lightLanceUnbindState * 30));
                setwbLALGoldMaskCountState(wbLALGoldMaskCount + (lightLanceUnbindState * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + (lightLanceUnbindState * 30));
                setmubLALSandCountState(mubLALSandCount + (lightLanceUnbindState * 1));
                setwbLALSandCountState(wbLALSandCount + (lightLanceUnbindState * 1));
                setallmubLASandCount(allmubLASandCount + (lightLanceUnbindState * 1));
                setmubLALRupeeCost(mubLALRupeeCost + (lightLanceUnbindState * 2));
                setwbLALRupeeCost(wbLALRupeeCost + (lightLanceUnbindState * 2));
                setallmubLARupeeCost(allmubLARupeeCost + (lightLanceUnbindState * 2));
                setLightLanceUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightLanceUnbindState >= 1 && lightLanceUnbindState <= 4) {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount + ((lightLanceUnbindState - event.target.value) * 40))
                setwbLALSilverMaskCountState(wbLALSilverMaskCount + ((lightLanceUnbindState - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightLanceUnbindState - event.target.value) * 40));
                setmubLALGoldMaskCountState(mubLALGoldMaskCount + ((lightLanceUnbindState - event.target.value) * 30));
                setwbLALGoldMaskCountState(wbLALGoldMaskCount + ((lightLanceUnbindState - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightLanceUnbindState - event.target.value) * 30));
                setmubLALSandCountState(mubLALSandCount + (lightLanceUnbindState - event.target.value));
                setwbLALSandCountState(wbLALSandCount + (lightLanceUnbindState - event.target.value));
                setallmubLASandCount(allmubLASandCount + (lightLanceUnbindState - event.target.value));
                setmubLALRupeeCost(mubLALRupeeCost + ((lightLanceUnbindState - event.target.value) * 2));
                setwbLALRupeeCost(wbLALRupeeCost + ((lightLanceUnbindState - event.target.value) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightLanceUnbindState - event.target.value) * 2))
                setLightLanceUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightLanceUnbindState >= 5 && lightLanceUnbindState <= 8) {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount + ((lightLanceUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbLALSilverMaskCountState(wbLALSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightLanceUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubLALGoldMaskCountState(mubLALGoldMaskCount + ((lightLanceUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbLALGoldMaskCountState(wbLALGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightLanceUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubLALInsanityCountState(mubLALInsanityCount + ((lightLanceUnbindState - 4) * 7));
                setwbLALInsanityCountState(wbLALInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightLanceUnbindState - 4) * 7));
                setmubLALSandCountState(mubLALSandCount + (4 - event.target.value));
                setwbLALSandCountState(wbLALSandCount + (4 - event.target.value));
                setallmubLASandCount(allmubLASandCount + (4 - event.target.value));
                setmubLALOriCountState(mubLALOriCount + (lightLanceUnbindState - 4));
                setwbLALOriCountState(wbLALOriCount + (lightLanceUnbindState - 4));
                setallmubLAOriCount(allmubLAOriCount + (lightLanceUnbindState - 4));
                setmubLALRupeeCost(mubLALRupeeCost + ((lightLanceUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbLALRupeeCost(wbLALRupeeCost + 7.5 + ((lightLanceUnbindState - 4) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightLanceUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setLightLanceUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightLanceUnbindState == 9) {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubLALGoldMaskCountState(mubLALGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubLALInsanityCountState(mubLALInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubLALGaleCountState(mubLALGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLALOriCountState(mubLALOriCount + 20 + (8 - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + 20 + (8 - event.target.value));
                setmubLALRupeeCost(mubLALRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setLightLanceUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightLanceUnbindState >= 5 && lightLanceUnbindState <= 8) {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount + ((lightLanceUnbindState - event.target.value) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightLanceUnbindState - event.target.value) * 16));
                setmubLALGoldMaskCountState(mubLALGoldMaskCount + ((lightLanceUnbindState - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightLanceUnbindState - event.target.value) * 10));
                setmubLALInsanityCountState(mubLALInsanityCount + ((lightLanceUnbindState - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightLanceUnbindState - event.target.value) * 7));
                setmubLALOriCountState(mubLALOriCount + (lightLanceUnbindState - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + (lightLanceUnbindState - event.target.value));
                setmubLALRupeeCost(mubLALRupeeCost + ((lightLanceUnbindState - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightLanceUnbindState - event.target.value) * 7.5));
                setLightLanceUnbindState(event.target.value)
            }
        }
    }

    function handleLightLanceRefineIncrement(event) {
        setLightWeaponChoiceState("lance");
        if (lightLanceRefineState < event.target.value) {
            if (lightLanceRefineState == 0 && event.target.value == 1) {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
                setallmubLAInsanityCount(allmubLAInsanityCount - 7)
                setallmubLAOriCount(allmubLAOriCount - 1)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightLanceRefineState(event.target.value);
            }
            else if (lightLanceRefineState == 0 && event.target.value == 2) {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount - 56);
                setwbLALSilverMaskCountState(wbLALSilverMaskCount - 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 56);
                setmubLALGoldMaskCountState(mubLALGoldMaskCount - 40);
                setwbLALGoldMaskCountState(wbLALGoldMaskCount - 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 40);
                setmubLALInsanityCountState(mubLALInsanityCount - 17);
                setwbLALInsanityCountState(wbLALInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 17);
                setmubLALGaleCountState(mubLALGaleCount - 10);
                setallmubLAGaleCount(allmubLAGaleCount - 10);
                setmubLALOriCountState(mubLALOriCount - 11);
                setwbLALOriCountState(wbLALOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 11);
                setmubLALRupeeCost(mubLALRupeeCost - 5);
                setwbLALRupeeCost(wbLALRupeeCost - 2.5);
                setallmubLARupeeCost(allmubLARupeeCost - 5);
                setLightLanceRefineState(event.target.value);
            }
            else if (lightLanceRefineState == 1 && event.target.value == 2) {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount - 40)
                setmubLALGoldMaskCountState(mubLALGoldMaskCount - 30);
                setmubLALInsanityCountState(mubLALInsanityCount - 10);
                setmubLALGaleCountState(mubLALGaleCount - 10);
                setmubLALOriCountState(mubLALOriCount - 10);
                setmubLALRupeeCost(mubLALRupeeCost - 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
                setallmubLAInsanityCount(allmubLAInsanityCount - 10)
                setallmubLAGaleCount(allmubLAGaleCount - 10)
                setallmubLAOriCount(allmubLAOriCount - 10)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightLanceRefineState(event.target.value);
            }
        }
        else if (lightLanceRefineState > event.target.value) {
            if (lightLanceRefineState == 2 && event.target.value == 1) 
            {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount + 40)
                setmubLALGoldMaskCountState(mubLALGoldMaskCount + 30);
                setmubLALInsanityCountState(mubLALInsanityCount + 10);
                setmubLALGaleCountState(mubLALGaleCount + 10);
                setmubLALOriCountState(mubLALOriCount + 10);
                setmubLALRupeeCost(mubLALRupeeCost + 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
                setallmubLAInsanityCount(allmubLAInsanityCount + 10)
                setallmubLAGaleCount(allmubLAGaleCount + 10)
                setallmubLAOriCount(allmubLAOriCount + 10)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightLanceRefineState(event.target.value);
            }
            else if (lightLanceRefineState == 2 && event.target.value == 0) 
            {
                setmubLALSilverMaskCountState(mubLALSilverMaskCount + 56);
                setwbLALSilverMaskCountState(wbLALSilverMaskCount + 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 56);
                setmubLALGoldMaskCountState(mubLALGoldMaskCount + 40);
                setwbLALGoldMaskCountState(wbLALGoldMaskCount + 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 40);
                setmubLALInsanityCountState(mubLALInsanityCount + 17);
                setwbLALInsanityCountState(wbLALInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 17);
                setmubLALGaleCountState(mubLALGaleCount + 10);
                setallmubLAGaleCount(allmubLAGaleCount + 10);
                setmubLALOriCountState(mubLALOriCount + 11);
                setwbLALOriCountState(wbLALOriCount + 1); 
                setallmubLAOriCount(allmubLAOriCount + 11);
                setmubLALRupeeCost(mubLALRupeeCost + 5);
                setwbLALRupeeCost(wbLALRupeeCost + 2.5);
                setallmubLARupeeCost(allmubLARupeeCost + 5)
                setLightLanceRefineState(event.target.value);
            }
            else if (lightLanceRefineState == 1 && event.target.value == 0) 
            {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
                setallmubLAInsanityCount(allmubLAInsanityCount + 7)
                setallmubLAOriCount(allmubLAOriCount + 1)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightLanceRefineState(event.target.value);
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
            setallmubLASandCount(allmubLASandCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
            setallmubLASandCount(allmubLASandCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 100)
            setallmubLAInsanityCount(allmubLAInsanityCount - 14)
            setallmubLAOriCount(allmubLAOriCount - 30)
            setallmubLARupeeCost(allmubLARupeeCost - 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 100)
            setallmubLAInsanityCount(allmubLAInsanityCount + 14)
            setallmubLAOriCount(allmubLAOriCount + 30)
            setallmubLARupeeCost(allmubLARupeeCost + 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
            setallmubLAOriCount(allmubLAOriCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2.5)
        }
        else if (lightWandWyrmprintSlotState == "grayscale(0%)") {
            setLightWandWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("wand");
            setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + 16)
            setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + 10)
            setmubLAWOriCountState(mubLAWOriCount + 1)
            setmubLAWRupeeCost(mubLAWRupeeCost + 2.5)
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
            setallmubLAOriCount(allmubLAOriCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2.5)
        }
    }

    function handleLightWandUnbindIncrement(event) {
        setLightWeaponChoiceState("wand");
        if (lightWandUnbindState < event.target.value) {
            if (event.target.value == 9 && lightWandUnbindState == 0) {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - 304);
                setwbLAWSilverMaskCountState(wbLAWSilverMaskCount - 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 304);
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - 230);
                setwbLAWGoldMaskCountState(wbLAWGoldMaskCount - 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 230);
                setmubLAWInsanityCountState(mubLAWInsanityCount - 58);
                setwbLAWInsanityCountState(wbLAWInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLAWGaleCountState(mubLAWGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLAWSandCountState(mubLAWSandCount - 4);
                setwbLAWSandCountState(wbLAWSandCount - 4);
                setallmubLASandCount(allmubLASandCount - 4);
                setmubLAWOriCountState(mubLAWOriCount - 24);
                setwbLAWOriCountState(wbLAWOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLAWRupeeCost(mubLAWRupeeCost - 40);
                setwbLAWRupeeCost(wbLAWRupeeCost - 15.5);
                setallmubLARupeeCost(allmubLARupeeCost - 40);
                setLightWandUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightWandUnbindState >= 1 && lightWandUnbindState <= 4) {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - 144 - ((4 - lightWandUnbindState) * 40));
                setwbLAWSilverMaskCountState(wbLAWSilverMaskCount - 16 - ((4 - lightWandUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 144 - ((4 - lightWandUnbindState) * 40));
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - 110 - ((4 - lightWandUnbindState) * 30));
                setwbLAWGoldMaskCountState(wbLAWGoldMaskCount - 10 - ((4 - lightWandUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 110 - ((4 - lightWandUnbindState) * 30));
                setmubLAWInsanityCountState(mubLAWInsanityCount - 58);
                setwbLAWInsanityCountState(wbLAWInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLAWGaleCountState(mubLAWGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLAWSandCountState(mubLAWSandCount - (4 - lightWandUnbindState));
                setwbLAWSandCountState(wbLAWSandCount - (4 - lightWandUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightWandUnbindState));
                setmubLAWOriCountState(mubLAWOriCount - 24);
                setwbLAWOriCountState(wbLAWOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLAWRupeeCost(mubLAWRupeeCost - 32 - ((4 - lightWandUnbindState) * 2));
                setwbLAWRupeeCost(wbLAWRupeeCost - 7.5 - ((4 - lightWandUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - 32 - ((4 - lightWandUnbindState) * 2));
                setLightWandUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightWandUnbindState >= 5 && lightWandUnbindState <= 8) {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - 80 - ((8 - lightWandUnbindState) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 80 - ((8 - lightWandUnbindState) * 16));
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - 70 - ((8 - lightWandUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 70 - ((8 - lightWandUnbindState) * 10));
                setmubLAWInsanityCountState(mubLAWInsanityCount - 30 - ((8 - lightWandUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - 30 - ((8 - lightWandUnbindState) * 7));
                setmubLAWGaleCountState(mubLAWGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLAWOriCountState(mubLAWOriCount - 20 - ((8 - lightWandUnbindState) * 1));
                setallmubLAOriCount(allmubLAOriCount - 20 - ((8 - lightWandUnbindState) * 1));
                setmubLAWRupeeCost(mubLAWRupeeCost - 2 - ((8 - lightWandUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - 2 - ((8 - lightWandUnbindState) * 7.5));
                setLightWandUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightWandUnbindState <= 7 && lightWandUnbindState >= 5) {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - ((event.target.value - lightWandUnbindState) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightWandUnbindState) * 16));
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - ((event.target.value - lightWandUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightWandUnbindState) * 10));
                setmubLAWInsanityCountState(mubLAWInsanityCount - ((event.target.value - lightWandUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - ((event.target.value - lightWandUnbindState) * 7));
                setmubLAWOriCountState(mubLAWOriCount - (event.target.value - lightWandUnbindState));
                setallmubLAOriCount(allmubLAOriCount - (event.target.value - lightWandUnbindState));
                setmubLAWRupeeCost(mubLAWRupeeCost - ((event.target.value - lightWandUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightWandUnbindState) * 7.5));
                setLightWandUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightWandUnbindState <= 4 && lightWandUnbindState >= 0) {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - ((4 - lightWandUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbLAWSilverMaskCountState(wbLAWSilverMaskCount - 16 - ((4 - lightWandUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((4 - lightWandUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - ((4 - lightWandUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbLAWGoldMaskCountState(wbLAWGoldMaskCount - 10 - ((4 - lightWandUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((4 - lightWandUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubLAWInsanityCountState(mubLAWInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbLAWInsanityCountState(wbLAWInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubLAWSandCountState(mubLAWSandCount - (4 - lightWandUnbindState));
                setwbLAWSandCountState(wbLAWSandCount - (4 - lightWandUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightWandUnbindState));
                setmubLAWOriCountState(mubLAWOriCount - (-1 * (4 - event.target.value)));
                setwbLAWOriCountState(wbLAWOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - (-1 * (4 - event.target.value)));
                setmubLAWRupeeCost(mubLAWRupeeCost - ((4 - lightWandUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbLAWRupeeCost(wbLAWRupeeCost - 7.5 - ((4 - lightWandUnbindState) * 2))
                setLightWandUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && lightWandUnbindState <= 3 && lightWandUnbindState >= 0) {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - ((event.target.value - lightWandUnbindState) * 40));
                setwbLAWSilverMaskCountState(wbLAWSilverMaskCount - ((event.target.value - lightWandUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightWandUnbindState) * 40));
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - ((event.target.value - lightWandUnbindState) * 30));
                setwbLAWGoldMaskCountState(wbLAWGoldMaskCount - ((event.target.value - lightWandUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightWandUnbindState) * 30));
                setmubLAWSandCountState(mubLAWSandCount - (event.target.value - lightWandUnbindState));
                setwbLAWSandCountState(wbLAWSandCount - (event.target.value - lightWandUnbindState));
                setallmubLASandCount(allmubLASandCount - (event.target.value - lightWandUnbindState));
                setmubLAWRupeeCost(mubLAWRupeeCost - ((event.target.value - lightWandUnbindState) * 2));
                setwbLAWRupeeCost(wbLAWRupeeCost - ((event.target.value - lightWandUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightWandUnbindState) * 2));
                setLightWandUnbindState(event.target.value)
            }
        }
        else if (lightWandUnbindState > event.target.value) {
            if (event.target.value == 0 && lightWandUnbindState == 9) {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + 304);
                setwbLAWSilverMaskCountState(wbLAWSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 304);
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + 230);
                setwbLAWGoldMaskCountState(wbLAWGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 230);
                setmubLAWInsanityCountState(mubLAWInsanityCount + 58);
                setwbLAWInsanityCountState(wbLAWInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 58);
                setmubLAWGaleCountState(mubLAWGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLAWSandCountState(mubLAWSandCount + 4);
                setwbLAWSandCountState(wbLAWSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLAWOriCountState(mubLAWOriCount + 24);
                setwbLAWOriCountState(wbLAWOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + 24);
                setmubLAWRupeeCost(mubLAWRupeeCost + 40);
                setwbLAWRupeeCost(wbLAWRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 40);
                setLightWandUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightWandUnbindState >= 5 && lightWandUnbindState <= 8) {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + 160 + ((-1 * (4 - lightWandUnbindState)) * 16));
                setwbLAWSilverMaskCountState(wbLAWSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 160 + ((-1 * (4 - lightWandUnbindState)) * 16));
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + 120 + ((-1 * (4 - lightWandUnbindState)) * 10));
                setwbLAWGoldMaskCountState(wbLAWGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 120 + ((-1 * (4 - lightWandUnbindState)) * 10));
                setmubLAWInsanityCountState(mubLAWInsanityCount + ((-1 * (4 - lightWandUnbindState)) * 7));
                setwbLAWInsanityCountState(wbLAWInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((-1 * (4 - lightWandUnbindState)) * 7));
                setmubLAWSandCountState(mubLAWSandCount + 4);
                setwbLAWSandCountState(wbLAWSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLAWOriCountState(mubLAWOriCount + (-1 * (4 - lightWandUnbindState)));
                setwbLAWOriCountState(wbLAWOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + (-1 * (4 - lightWandUnbindState)));
                setmubLAWRupeeCost(mubLAWRupeeCost + 8 + (-1 * (4 - lightWandUnbindState) * 7.5));
                setwbLAWRupeeCost(wbLAWRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 8 + (-1 * (4 - lightWandUnbindState) * 7.5));
                setLightWandUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightWandUnbindState >= 1 && lightWandUnbindState <= 4) {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + (lightWandUnbindState * 40));
                setwbLAWSilverMaskCountState(wbLAWSilverMaskCount + (lightWandUnbindState * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + (lightWandUnbindState * 40));
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + (lightWandUnbindState * 30));
                setwbLAWGoldMaskCountState(wbLAWGoldMaskCount + (lightWandUnbindState * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + (lightWandUnbindState * 30));
                setmubLAWSandCountState(mubLAWSandCount + (lightWandUnbindState * 1));
                setwbLAWSandCountState(wbLAWSandCount + (lightWandUnbindState * 1));
                setallmubLASandCount(allmubLASandCount + (lightWandUnbindState * 1));
                setmubLAWRupeeCost(mubLAWRupeeCost + (lightWandUnbindState * 2));
                setwbLAWRupeeCost(wbLAWRupeeCost + (lightWandUnbindState * 2));
                setallmubLARupeeCost(allmubLARupeeCost + (lightWandUnbindState * 2));
                setLightWandUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightWandUnbindState >= 1 && lightWandUnbindState <= 4) {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + ((lightWandUnbindState - event.target.value) * 40))
                setwbLAWSilverMaskCountState(wbLAWSilverMaskCount + ((lightWandUnbindState - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightWandUnbindState - event.target.value) * 40));
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + ((lightWandUnbindState - event.target.value) * 30));
                setwbLAWGoldMaskCountState(wbLAWGoldMaskCount + ((lightWandUnbindState - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightWandUnbindState - event.target.value) * 30));
                setmubLAWSandCountState(mubLAWSandCount + (lightWandUnbindState - event.target.value));
                setwbLAWSandCountState(wbLAWSandCount + (lightWandUnbindState - event.target.value));
                setallmubLASandCount(allmubLASandCount + (lightWandUnbindState - event.target.value));
                setmubLAWRupeeCost(mubLAWRupeeCost + ((lightWandUnbindState - event.target.value) * 2));
                setwbLAWRupeeCost(wbLAWRupeeCost + ((lightWandUnbindState - event.target.value) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightWandUnbindState - event.target.value) * 2))
                setLightWandUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightWandUnbindState >= 5 && lightWandUnbindState <= 8) {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + ((lightWandUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbLAWSilverMaskCountState(wbLAWSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightWandUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + ((lightWandUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbLAWGoldMaskCountState(wbLAWGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightWandUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubLAWInsanityCountState(mubLAWInsanityCount + ((lightWandUnbindState - 4) * 7));
                setwbLAWInsanityCountState(wbLAWInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightWandUnbindState - 4) * 7));
                setmubLAWSandCountState(mubLAWSandCount + (4 - event.target.value));
                setwbLAWSandCountState(wbLAWSandCount + (4 - event.target.value));
                setallmubLASandCount(allmubLASandCount + (4 - event.target.value));
                setmubLAWOriCountState(mubLAWOriCount + (lightWandUnbindState - 4));
                setwbLAWOriCountState(wbLAWOriCount + (lightWandUnbindState - 4));
                setallmubLAOriCount(allmubLAOriCount + (lightWandUnbindState - 4));
                setmubLAWRupeeCost(mubLAWRupeeCost + ((lightWandUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbLAWRupeeCost(wbLAWRupeeCost + 7.5 + ((lightWandUnbindState - 4) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightWandUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setLightWandUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightWandUnbindState == 9) {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubLAWInsanityCountState(mubLAWInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubLAWGaleCountState(mubLAWGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLAWOriCountState(mubLAWOriCount + 20 + (8 - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + 20 + (8 - event.target.value));
                setmubLAWRupeeCost(mubLAWRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setLightWandUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightWandUnbindState >= 5 && lightWandUnbindState <= 8) {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + ((lightWandUnbindState - event.target.value) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightWandUnbindState - event.target.value) * 16));
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + ((lightWandUnbindState - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightWandUnbindState - event.target.value) * 10));
                setmubLAWInsanityCountState(mubLAWInsanityCount + ((lightWandUnbindState - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightWandUnbindState - event.target.value) * 7));
                setmubLAWOriCountState(mubLAWOriCount + (lightWandUnbindState - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + (lightWandUnbindState - event.target.value));
                setmubLAWRupeeCost(mubLAWRupeeCost + ((lightWandUnbindState - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightWandUnbindState - event.target.value) * 7.5));
                setLightWandUnbindState(event.target.value)
            }
        }
    }

    function handleLightWandRefineIncrement(event) {
        setLightWeaponChoiceState("wand");
        if (lightWandRefineState < event.target.value) {
            if (lightWandRefineState == 0 && event.target.value == 1) {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
                setallmubLAInsanityCount(allmubLAInsanityCount - 7)
                setallmubLAOriCount(allmubLAOriCount - 1)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightWandRefineState(event.target.value);
            }
            else if (lightWandRefineState == 0 && event.target.value == 2) {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - 56);
                setwbLAWSilverMaskCountState(wbLAWSilverMaskCount - 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 56);
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - 40);
                setwbLAWGoldMaskCountState(wbLAWGoldMaskCount - 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 40);
                setmubLAWInsanityCountState(mubLAWInsanityCount - 17);
                setwbLAWInsanityCountState(wbLAWInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 17);
                setmubLAWGaleCountState(mubLAWGaleCount - 10);
                setallmubLAGaleCount(allmubLAGaleCount - 10);
                setmubLAWOriCountState(mubLAWOriCount - 11);
                setwbLAWOriCountState(wbLAWOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 11);
                setmubLAWRupeeCost(mubLAWRupeeCost - 5);
                setwbLAWRupeeCost(wbLAWRupeeCost - 2.5);
                setallmubLARupeeCost(allmubLARupeeCost - 5);
                setLightWandRefineState(event.target.value);
            }
            else if (lightWandRefineState == 1 && event.target.value == 2) {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount - 40)
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount - 30);
                setmubLAWInsanityCountState(mubLAWInsanityCount - 10);
                setmubLAWGaleCountState(mubLAWGaleCount - 10);
                setmubLAWOriCountState(mubLAWOriCount - 10);
                setmubLAWRupeeCost(mubLAWRupeeCost - 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
                setallmubLAInsanityCount(allmubLAInsanityCount - 10)
                setallmubLAGaleCount(allmubLAGaleCount - 10)
                setallmubLAOriCount(allmubLAOriCount - 10)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightWandRefineState(event.target.value);
            }
        }
        else if (lightWandRefineState > event.target.value) {
            if (lightWandRefineState == 2 && event.target.value == 1) 
            {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + 40)
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + 30);
                setmubLAWInsanityCountState(mubLAWInsanityCount + 10);
                setmubLAWGaleCountState(mubLAWGaleCount + 10);
                setmubLAWOriCountState(mubLAWOriCount + 10);
                setmubLAWRupeeCost(mubLAWRupeeCost + 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
                setallmubLAInsanityCount(allmubLAInsanityCount + 10)
                setallmubLAGaleCount(allmubLAGaleCount + 10)
                setallmubLAOriCount(allmubLAOriCount + 10)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightWandRefineState(event.target.value);
            }
            else if (lightWandRefineState == 2 && event.target.value == 0) 
            {
                setmubLAWSilverMaskCountState(mubLAWSilverMaskCount + 56);
                setwbLAWSilverMaskCountState(wbLAWSilverMaskCount + 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 56);
                setmubLAWGoldMaskCountState(mubLAWGoldMaskCount + 40);
                setwbLAWGoldMaskCountState(wbLAWGoldMaskCount + 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 40);
                setmubLAWInsanityCountState(mubLAWInsanityCount + 17);
                setwbLAWInsanityCountState(wbLAWInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 17);
                setmubLAWGaleCountState(mubLAWGaleCount + 10);
                setallmubLAGaleCount(allmubLAGaleCount + 10);
                setmubLAWOriCountState(mubLAWOriCount + 11);
                setwbLAWOriCountState(wbLAWOriCount + 1); 
                setallmubLAOriCount(allmubLAOriCount + 11);
                setmubLAWRupeeCost(mubLAWRupeeCost + 5);
                setwbLAWRupeeCost(wbLAWRupeeCost + 2.5);
                setallmubLARupeeCost(allmubLARupeeCost + 5)
                setLightWandRefineState(event.target.value);
            }
            else if (lightWandRefineState == 1 && event.target.value == 0) 
            {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
                setallmubLAInsanityCount(allmubLAInsanityCount + 7)
                setallmubLAOriCount(allmubLAOriCount + 1)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightWandRefineState(event.target.value);
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
            setallmubLASandCount(allmubLASandCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
            setallmubLASandCount(allmubLASandCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 100)
            setallmubLAInsanityCount(allmubLAInsanityCount - 14)
            setallmubLAOriCount(allmubLAOriCount - 30)
            setallmubLARupeeCost(allmubLARupeeCost - 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 100)
            setallmubLAInsanityCount(allmubLAInsanityCount + 14)
            setallmubLAOriCount(allmubLAOriCount + 30)
            setallmubLARupeeCost(allmubLARupeeCost + 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
            setallmubLAOriCount(allmubLAOriCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2.5)
        }
        else if (lightBowWyrmprintSlotState == "grayscale(0%)") {
            setLightBowWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("bow");
            setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + 16)
            setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + 10)
            setmubLABoOriCountState(mubLABoOriCount + 1)
            setmubLABoRupeeCost(mubLABoRupeeCost + 2.5)
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
            setallmubLAOriCount(allmubLAOriCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2.5)
        }
    }

    function handleLightBowUnbindIncrement(event) {
        setLightWeaponChoiceState("bow");
        if (lightBowUnbindState < event.target.value) {
            if (event.target.value == 9 && lightBowUnbindState == 0) {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - 304);
                setwbLABoSilverMaskCountState(wbLABoSilverMaskCount - 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 304);
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - 230);
                setwbLABoGoldMaskCountState(wbLABoGoldMaskCount - 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 230);
                setmubLABoInsanityCountState(mubLABoInsanityCount - 58);
                setwbLABoInsanityCountState(wbLABoInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLABoGaleCountState(mubLABoGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLABoSandCountState(mubLABoSandCount - 4);
                setwbLABoSandCountState(wbLABoSandCount - 4);
                setallmubLASandCount(allmubLASandCount - 4);
                setmubLABoOriCountState(mubLABoOriCount - 24);
                setwbLABoOriCountState(wbLABoOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLABoRupeeCost(mubLABoRupeeCost - 40);
                setwbLABoRupeeCost(wbLABoRupeeCost - 15.5);
                setallmubLARupeeCost(allmubLARupeeCost - 40);
                setLightBowUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightBowUnbindState >= 1 && lightBowUnbindState <= 4) {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - 144 - ((4 - lightBowUnbindState) * 40));
                setwbLABoSilverMaskCountState(wbLABoSilverMaskCount - 16 - ((4 - lightBowUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 144 - ((4 - lightBowUnbindState) * 40));
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - 110 - ((4 - lightBowUnbindState) * 30));
                setwbLABoGoldMaskCountState(wbLABoGoldMaskCount - 10 - ((4 - lightBowUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 110 - ((4 - lightBowUnbindState) * 30));
                setmubLABoInsanityCountState(mubLABoInsanityCount - 58);
                setwbLABoInsanityCountState(wbLABoInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLABoGaleCountState(mubLABoGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLABoSandCountState(mubLABoSandCount - (4 - lightBowUnbindState));
                setwbLABoSandCountState(wbLABoSandCount - (4 - lightBowUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightBowUnbindState));
                setmubLABoOriCountState(mubLABoOriCount - 24);
                setwbLABoOriCountState(wbLABoOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLABoRupeeCost(mubLABoRupeeCost - 32 - ((4 - lightBowUnbindState) * 2));
                setwbLABoRupeeCost(wbLABoRupeeCost - 7.5 - ((4 - lightBowUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - 32 - ((4 - lightBowUnbindState) * 2));
                setLightBowUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightBowUnbindState >= 5 && lightBowUnbindState <= 8) {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - 80 - ((8 - lightBowUnbindState) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 80 - ((8 - lightBowUnbindState) * 16));
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - 70 - ((8 - lightBowUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 70 - ((8 - lightBowUnbindState) * 10));
                setmubLABoInsanityCountState(mubLABoInsanityCount - 30 - ((8 - lightBowUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - 30 - ((8 - lightBowUnbindState) * 7));
                setmubLABoGaleCountState(mubLABoGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLABoOriCountState(mubLABoOriCount - 20 - ((8 - lightBowUnbindState) * 1));
                setallmubLAOriCount(allmubLAOriCount - 20 - ((8 - lightBowUnbindState) * 1));
                setmubLABoRupeeCost(mubLABoRupeeCost - 2 - ((8 - lightBowUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - 2 - ((8 - lightBowUnbindState) * 7.5));
                setLightBowUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightBowUnbindState <= 7 && lightBowUnbindState >= 5) {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - ((event.target.value - lightBowUnbindState) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightBowUnbindState) * 16));
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - ((event.target.value - lightBowUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightBowUnbindState) * 10));
                setmubLABoInsanityCountState(mubLABoInsanityCount - ((event.target.value - lightBowUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - ((event.target.value - lightBowUnbindState) * 7));
                setmubLABoOriCountState(mubLABoOriCount - (event.target.value - lightBowUnbindState));
                setallmubLAOriCount(allmubLAOriCount - (event.target.value - lightBowUnbindState));
                setmubLABoRupeeCost(mubLABoRupeeCost - ((event.target.value - lightBowUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightBowUnbindState) * 7.5));
                setLightBowUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightBowUnbindState <= 4 && lightBowUnbindState >= 0) {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - ((4 - lightBowUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbLABoSilverMaskCountState(wbLABoSilverMaskCount - 16 - ((4 - lightBowUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((4 - lightBowUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - ((4 - lightBowUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbLABoGoldMaskCountState(wbLABoGoldMaskCount - 10 - ((4 - lightBowUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((4 - lightBowUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubLABoInsanityCountState(mubLABoInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbLABoInsanityCountState(wbLABoInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubLABoSandCountState(mubLABoSandCount - (4 - lightBowUnbindState));
                setwbLABoSandCountState(wbLABoSandCount - (4 - lightBowUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightBowUnbindState));
                setmubLABoOriCountState(mubLABoOriCount - (-1 * (4 - event.target.value)));
                setwbLABoOriCountState(wbLABoOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - (-1 * (4 - event.target.value)));
                setmubLABoRupeeCost(mubLABoRupeeCost - ((4 - lightBowUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbLABoRupeeCost(wbLABoRupeeCost - 7.5 - ((4 - lightBowUnbindState) * 2))
                setLightBowUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && lightBowUnbindState <= 3 && lightBowUnbindState >= 0) {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - ((event.target.value - lightBowUnbindState) * 40));
                setwbLABoSilverMaskCountState(wbLABoSilverMaskCount - ((event.target.value - lightBowUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightBowUnbindState) * 40));
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - ((event.target.value - lightBowUnbindState) * 30));
                setwbLABoGoldMaskCountState(wbLABoGoldMaskCount - ((event.target.value - lightBowUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightBowUnbindState) * 30));
                setmubLABoSandCountState(mubLABoSandCount - (event.target.value - lightBowUnbindState));
                setwbLABoSandCountState(wbLABoSandCount - (event.target.value - lightBowUnbindState));
                setallmubLASandCount(allmubLASandCount - (event.target.value - lightBowUnbindState));
                setmubLABoRupeeCost(mubLABoRupeeCost - ((event.target.value - lightBowUnbindState) * 2));
                setwbLABoRupeeCost(wbLABoRupeeCost - ((event.target.value - lightBowUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightBowUnbindState) * 2));
                setLightBowUnbindState(event.target.value)
            }
        }
        else if (lightBowUnbindState > event.target.value) {
            if (event.target.value == 0 && lightBowUnbindState == 9) {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + 304);
                setwbLABoSilverMaskCountState(wbLABoSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 304);
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + 230);
                setwbLABoGoldMaskCountState(wbLABoGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 230);
                setmubLABoInsanityCountState(mubLABoInsanityCount + 58);
                setwbLABoInsanityCountState(wbLABoInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 58);
                setmubLABoGaleCountState(mubLABoGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLABoSandCountState(mubLABoSandCount + 4);
                setwbLABoSandCountState(wbLABoSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLABoOriCountState(mubLABoOriCount + 24);
                setwbLABoOriCountState(wbLABoOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + 24);
                setmubLABoRupeeCost(mubLABoRupeeCost + 40);
                setwbLABoRupeeCost(wbLABoRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 40);
                setLightBowUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightBowUnbindState >= 5 && lightBowUnbindState <= 8) {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + 160 + ((-1 * (4 - lightBowUnbindState)) * 16));
                setwbLABoSilverMaskCountState(wbLABoSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 160 + ((-1 * (4 - lightBowUnbindState)) * 16));
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + 120 + ((-1 * (4 - lightBowUnbindState)) * 10));
                setwbLABoGoldMaskCountState(wbLABoGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 120 + ((-1 * (4 - lightBowUnbindState)) * 10));
                setmubLABoInsanityCountState(mubLABoInsanityCount + ((-1 * (4 - lightBowUnbindState)) * 7));
                setwbLABoInsanityCountState(wbLABoInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((-1 * (4 - lightBowUnbindState)) * 7));
                setmubLABoSandCountState(mubLABoSandCount + 4);
                setwbLABoSandCountState(wbLABoSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLABoOriCountState(mubLABoOriCount + (-1 * (4 - lightBowUnbindState)));
                setwbLABoOriCountState(wbLABoOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + (-1 * (4 - lightBowUnbindState)));
                setmubLABoRupeeCost(mubLABoRupeeCost + 8 + (-1 * (4 - lightBowUnbindState) * 7.5));
                setwbLABoRupeeCost(wbLABoRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 8 + (-1 * (4 - lightBowUnbindState) * 7.5));
                setLightBowUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightBowUnbindState >= 1 && lightBowUnbindState <= 4) {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + (lightBowUnbindState * 40));
                setwbLABoSilverMaskCountState(wbLABoSilverMaskCount + (lightBowUnbindState * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + (lightBowUnbindState * 40));
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + (lightBowUnbindState * 30));
                setwbLABoGoldMaskCountState(wbLABoGoldMaskCount + (lightBowUnbindState * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + (lightBowUnbindState * 30));
                setmubLABoSandCountState(mubLABoSandCount + (lightBowUnbindState * 1));
                setwbLABoSandCountState(wbLABoSandCount + (lightBowUnbindState * 1));
                setallmubLASandCount(allmubLASandCount + (lightBowUnbindState * 1));
                setmubLABoRupeeCost(mubLABoRupeeCost + (lightBowUnbindState * 2));
                setwbLABoRupeeCost(wbLABoRupeeCost + (lightBowUnbindState * 2));
                setallmubLARupeeCost(allmubLARupeeCost + (lightBowUnbindState * 2));
                setLightBowUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightBowUnbindState >= 1 && lightBowUnbindState <= 4) {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + ((lightBowUnbindState - event.target.value) * 40))
                setwbLABoSilverMaskCountState(wbLABoSilverMaskCount + ((lightBowUnbindState - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightBowUnbindState - event.target.value) * 40));
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + ((lightBowUnbindState - event.target.value) * 30));
                setwbLABoGoldMaskCountState(wbLABoGoldMaskCount + ((lightBowUnbindState - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightBowUnbindState - event.target.value) * 30));
                setmubLABoSandCountState(mubLABoSandCount + (lightBowUnbindState - event.target.value));
                setwbLABoSandCountState(wbLABoSandCount + (lightBowUnbindState - event.target.value));
                setallmubLASandCount(allmubLASandCount + (lightBowUnbindState - event.target.value));
                setmubLABoRupeeCost(mubLABoRupeeCost + ((lightBowUnbindState - event.target.value) * 2));
                setwbLABoRupeeCost(wbLABoRupeeCost + ((lightBowUnbindState - event.target.value) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightBowUnbindState - event.target.value) * 2))
                setLightBowUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightBowUnbindState >= 5 && lightBowUnbindState <= 8) {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + ((lightBowUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbLABoSilverMaskCountState(wbLABoSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightBowUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + ((lightBowUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbLABoGoldMaskCountState(wbLABoGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightBowUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubLABoInsanityCountState(mubLABoInsanityCount + ((lightBowUnbindState - 4) * 7));
                setwbLABoInsanityCountState(wbLABoInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightBowUnbindState - 4) * 7));
                setmubLABoSandCountState(mubLABoSandCount + (4 - event.target.value));
                setwbLABoSandCountState(wbLABoSandCount + (4 - event.target.value));
                setallmubLASandCount(allmubLASandCount + (4 - event.target.value));
                setmubLABoOriCountState(mubLABoOriCount + (lightBowUnbindState - 4));
                setwbLABoOriCountState(wbLABoOriCount + (lightBowUnbindState - 4));
                setallmubLAOriCount(allmubLAOriCount + (lightBowUnbindState - 4));
                setmubLABoRupeeCost(mubLABoRupeeCost + ((lightBowUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbLABoRupeeCost(wbLABoRupeeCost + 7.5 + ((lightBowUnbindState - 4) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightBowUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setLightBowUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightBowUnbindState == 9) {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubLABoInsanityCountState(mubLABoInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubLABoGaleCountState(mubLABoGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLABoOriCountState(mubLABoOriCount + 20 + (8 - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + 20 + (8 - event.target.value));
                setmubLABoRupeeCost(mubLABoRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setLightBowUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightBowUnbindState >= 5 && lightBowUnbindState <= 8) {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + ((lightBowUnbindState - event.target.value) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightBowUnbindState - event.target.value) * 16));
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + ((lightBowUnbindState - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightBowUnbindState - event.target.value) * 10));
                setmubLABoInsanityCountState(mubLABoInsanityCount + ((lightBowUnbindState - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightBowUnbindState - event.target.value) * 7));
                setmubLABoOriCountState(mubLABoOriCount + (lightBowUnbindState - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + (lightBowUnbindState - event.target.value));
                setmubLABoRupeeCost(mubLABoRupeeCost + ((lightBowUnbindState - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightBowUnbindState - event.target.value) * 7.5));
                setLightBowUnbindState(event.target.value)
            }
        }
    }

    function handleLightBowRefineIncrement(event) {
        setLightWeaponChoiceState("bow");
        if (lightBowRefineState < event.target.value) {
            if (lightBowRefineState == 0 && event.target.value == 1) {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
                setallmubLAInsanityCount(allmubLAInsanityCount - 7)
                setallmubLAOriCount(allmubLAOriCount - 1)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightBowRefineState(event.target.value);
            }
            else if (lightBowRefineState == 0 && event.target.value == 2) {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - 56);
                setwbLABoSilverMaskCountState(wbLABoSilverMaskCount - 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 56);
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - 40);
                setwbLABoGoldMaskCountState(wbLABoGoldMaskCount - 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 40);
                setmubLABoInsanityCountState(mubLABoInsanityCount - 17);
                setwbLABoInsanityCountState(wbLABoInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 17);
                setmubLABoGaleCountState(mubLABoGaleCount - 10);
                setallmubLAGaleCount(allmubLAGaleCount - 10);
                setmubLABoOriCountState(mubLABoOriCount - 11);
                setwbLABoOriCountState(wbLABoOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 11);
                setmubLABoRupeeCost(mubLABoRupeeCost - 5);
                setwbLABoRupeeCost(wbLABoRupeeCost - 2.5);
                setallmubLARupeeCost(allmubLARupeeCost - 5);
                setLightBowRefineState(event.target.value);
            }
            else if (lightBowRefineState == 1 && event.target.value == 2) {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount - 40)
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount - 30);
                setmubLABoInsanityCountState(mubLABoInsanityCount - 10);
                setmubLABoGaleCountState(mubLABoGaleCount - 10);
                setmubLABoOriCountState(mubLABoOriCount - 10);
                setmubLABoRupeeCost(mubLABoRupeeCost - 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
                setallmubLAInsanityCount(allmubLAInsanityCount - 10)
                setallmubLAGaleCount(allmubLAGaleCount - 10)
                setallmubLAOriCount(allmubLAOriCount - 10)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightBowRefineState(event.target.value);
            }
        }
        else if (lightBowRefineState > event.target.value) {
            if (lightBowRefineState == 2 && event.target.value == 1) 
            {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + 40)
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + 30);
                setmubLABoInsanityCountState(mubLABoInsanityCount + 10);
                setmubLABoGaleCountState(mubLABoGaleCount + 10);
                setmubLABoOriCountState(mubLABoOriCount + 10);
                setmubLABoRupeeCost(mubLABoRupeeCost + 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
                setallmubLAInsanityCount(allmubLAInsanityCount + 10)
                setallmubLAGaleCount(allmubLAGaleCount + 10)
                setallmubLAOriCount(allmubLAOriCount + 10)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightBowRefineState(event.target.value);
            }
            else if (lightBowRefineState == 2 && event.target.value == 0) 
            {
                setmubLABoSilverMaskCountState(mubLABoSilverMaskCount + 56);
                setwbLABoSilverMaskCountState(wbLABoSilverMaskCount + 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 56);
                setmubLABoGoldMaskCountState(mubLABoGoldMaskCount + 40);
                setwbLABoGoldMaskCountState(wbLABoGoldMaskCount + 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 40);
                setmubLABoInsanityCountState(mubLABoInsanityCount + 17);
                setwbLABoInsanityCountState(wbLABoInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 17);
                setmubLABoGaleCountState(mubLABoGaleCount + 10);
                setallmubLAGaleCount(allmubLAGaleCount + 10);
                setmubLABoOriCountState(mubLABoOriCount + 11);
                setwbLABoOriCountState(wbLABoOriCount + 1); 
                setallmubLAOriCount(allmubLAOriCount + 11);
                setmubLABoRupeeCost(mubLABoRupeeCost + 5);
                setwbLABoRupeeCost(wbLABoRupeeCost + 2.5);
                setallmubLARupeeCost(allmubLARupeeCost + 5)
                setLightBowRefineState(event.target.value);
            }
            else if (lightBowRefineState == 1 && event.target.value == 0) 
            {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
                setallmubLAInsanityCount(allmubLAInsanityCount + 7)
                setallmubLAOriCount(allmubLAOriCount + 1)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightBowRefineState(event.target.value);
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
            setallmubLASandCount(allmubLASandCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
            setallmubLASandCount(allmubLASandCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 100)
            setallmubLAInsanityCount(allmubLAInsanityCount - 14)
            setallmubLAOriCount(allmubLAOriCount - 30)
            setallmubLARupeeCost(allmubLARupeeCost - 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 100)
            setallmubLAInsanityCount(allmubLAInsanityCount + 14)
            setallmubLAOriCount(allmubLAOriCount + 30)
            setallmubLARupeeCost(allmubLARupeeCost + 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
            setallmubLAOriCount(allmubLAOriCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2.5)
        }
        else if (lightStaffWyrmprintSlotState == "grayscale(0%)") {
            setLightStaffWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("staff");
            setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + 16)
            setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + 10)
            setmubLAStOriCountState(mubLAStOriCount + 1)
            setmubLAStRupeeCost(mubLAStRupeeCost + 2.5)
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
            setallmubLAOriCount(allmubLAOriCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2.5)
        }
    }

    function handleLightStaffUnbindIncrement(event) {
        setLightWeaponChoiceState("staff");
        if (lightStaffUnbindState < event.target.value) {
            if (event.target.value == 9 && lightStaffUnbindState == 0) {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - 304);
                setwbLAStSilverMaskCountState(wbLAStSilverMaskCount - 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 304);
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - 230);
                setwbLAStGoldMaskCountState(wbLAStGoldMaskCount - 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 230);
                setmubLAStInsanityCountState(mubLAStInsanityCount - 58);
                setwbLAStInsanityCountState(wbLAStInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLAStGaleCountState(mubLAStGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLAStSandCountState(mubLAStSandCount - 4);
                setwbLAStSandCountState(wbLAStSandCount - 4);
                setallmubLASandCount(allmubLASandCount - 4);
                setmubLAStOriCountState(mubLAStOriCount - 24);
                setwbLAStOriCountState(wbLAStOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLAStRupeeCost(mubLAStRupeeCost - 40);
                setwbLAStRupeeCost(wbLAStRupeeCost - 15.5);
                setallmubLARupeeCost(allmubLARupeeCost - 40);
                setLightStaffUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightStaffUnbindState >= 1 && lightStaffUnbindState <= 4) {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - 144 - ((4 - lightStaffUnbindState) * 40));
                setwbLAStSilverMaskCountState(wbLAStSilverMaskCount - 16 - ((4 - lightStaffUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 144 - ((4 - lightStaffUnbindState) * 40));
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - 110 - ((4 - lightStaffUnbindState) * 30));
                setwbLAStGoldMaskCountState(wbLAStGoldMaskCount - 10 - ((4 - lightStaffUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 110 - ((4 - lightStaffUnbindState) * 30));
                setmubLAStInsanityCountState(mubLAStInsanityCount - 58);
                setwbLAStInsanityCountState(wbLAStInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLAStGaleCountState(mubLAStGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLAStSandCountState(mubLAStSandCount - (4 - lightStaffUnbindState));
                setwbLAStSandCountState(wbLAStSandCount - (4 - lightStaffUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightStaffUnbindState));
                setmubLAStOriCountState(mubLAStOriCount - 24);
                setwbLAStOriCountState(wbLAStOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLAStRupeeCost(mubLAStRupeeCost - 32 - ((4 - lightStaffUnbindState) * 2));
                setwbLAStRupeeCost(wbLAStRupeeCost - 7.5 - ((4 - lightStaffUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - 32 - ((4 - lightStaffUnbindState) * 2));
                setLightStaffUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightStaffUnbindState >= 5 && lightStaffUnbindState <= 8) {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - 80 - ((8 - lightStaffUnbindState) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 80 - ((8 - lightStaffUnbindState) * 16));
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - 70 - ((8 - lightStaffUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 70 - ((8 - lightStaffUnbindState) * 10));
                setmubLAStInsanityCountState(mubLAStInsanityCount - 30 - ((8 - lightStaffUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - 30 - ((8 - lightStaffUnbindState) * 7));
                setmubLAStGaleCountState(mubLAStGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLAStOriCountState(mubLAStOriCount - 20 - ((8 - lightStaffUnbindState) * 1));
                setallmubLAOriCount(allmubLAOriCount - 20 - ((8 - lightStaffUnbindState) * 1));
                setmubLAStRupeeCost(mubLAStRupeeCost - 2 - ((8 - lightStaffUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - 2 - ((8 - lightStaffUnbindState) * 7.5));
                setLightStaffUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightStaffUnbindState <= 7 && lightStaffUnbindState >= 5) {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - ((event.target.value - lightStaffUnbindState) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightStaffUnbindState) * 16));
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - ((event.target.value - lightStaffUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightStaffUnbindState) * 10));
                setmubLAStInsanityCountState(mubLAStInsanityCount - ((event.target.value - lightStaffUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - ((event.target.value - lightStaffUnbindState) * 7));
                setmubLAStOriCountState(mubLAStOriCount - (event.target.value - lightStaffUnbindState));
                setallmubLAOriCount(allmubLAOriCount - (event.target.value - lightStaffUnbindState));
                setmubLAStRupeeCost(mubLAStRupeeCost - ((event.target.value - lightStaffUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightStaffUnbindState) * 7.5));
                setLightStaffUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightStaffUnbindState <= 4 && lightStaffUnbindState >= 0) {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - ((4 - lightStaffUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbLAStSilverMaskCountState(wbLAStSilverMaskCount - 16 - ((4 - lightStaffUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((4 - lightStaffUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - ((4 - lightStaffUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbLAStGoldMaskCountState(wbLAStGoldMaskCount - 10 - ((4 - lightStaffUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((4 - lightStaffUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubLAStInsanityCountState(mubLAStInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbLAStInsanityCountState(wbLAStInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubLAStSandCountState(mubLAStSandCount - (4 - lightStaffUnbindState));
                setwbLAStSandCountState(wbLAStSandCount - (4 - lightStaffUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightStaffUnbindState));
                setmubLAStOriCountState(mubLAStOriCount - (-1 * (4 - event.target.value)));
                setwbLAStOriCountState(wbLAStOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - (-1 * (4 - event.target.value)));
                setmubLAStRupeeCost(mubLAStRupeeCost - ((4 - lightStaffUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbLAStRupeeCost(wbLAStRupeeCost - 7.5 - ((4 - lightStaffUnbindState) * 2))
                setLightStaffUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && lightStaffUnbindState <= 3 && lightStaffUnbindState >= 0) {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - ((event.target.value - lightStaffUnbindState) * 40));
                setwbLAStSilverMaskCountState(wbLAStSilverMaskCount - ((event.target.value - lightStaffUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightStaffUnbindState) * 40));
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - ((event.target.value - lightStaffUnbindState) * 30));
                setwbLAStGoldMaskCountState(wbLAStGoldMaskCount - ((event.target.value - lightStaffUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightStaffUnbindState) * 30));
                setmubLAStSandCountState(mubLAStSandCount - (event.target.value - lightStaffUnbindState));
                setwbLAStSandCountState(wbLAStSandCount - (event.target.value - lightStaffUnbindState));
                setallmubLASandCount(allmubLASandCount - (event.target.value - lightStaffUnbindState));
                setmubLAStRupeeCost(mubLAStRupeeCost - ((event.target.value - lightStaffUnbindState) * 2));
                setwbLAStRupeeCost(wbLAStRupeeCost - ((event.target.value - lightStaffUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightStaffUnbindState) * 2));
                setLightStaffUnbindState(event.target.value)
            }
        }
        else if (lightStaffUnbindState > event.target.value) {
            if (event.target.value == 0 && lightStaffUnbindState == 9) {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + 304);
                setwbLAStSilverMaskCountState(wbLAStSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 304);
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + 230);
                setwbLAStGoldMaskCountState(wbLAStGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 230);
                setmubLAStInsanityCountState(mubLAStInsanityCount + 58);
                setwbLAStInsanityCountState(wbLAStInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 58);
                setmubLAStGaleCountState(mubLAStGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLAStSandCountState(mubLAStSandCount + 4);
                setwbLAStSandCountState(wbLAStSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLAStOriCountState(mubLAStOriCount + 24);
                setwbLAStOriCountState(wbLAStOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + 24);
                setmubLAStRupeeCost(mubLAStRupeeCost + 40);
                setwbLAStRupeeCost(wbLAStRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 40);
                setLightStaffUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightStaffUnbindState >= 5 && lightStaffUnbindState <= 8) {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + 160 + ((-1 * (4 - lightStaffUnbindState)) * 16));
                setwbLAStSilverMaskCountState(wbLAStSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 160 + ((-1 * (4 - lightStaffUnbindState)) * 16));
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + 120 + ((-1 * (4 - lightStaffUnbindState)) * 10));
                setwbLAStGoldMaskCountState(wbLAStGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 120 + ((-1 * (4 - lightStaffUnbindState)) * 10));
                setmubLAStInsanityCountState(mubLAStInsanityCount + ((-1 * (4 - lightStaffUnbindState)) * 7));
                setwbLAStInsanityCountState(wbLAStInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((-1 * (4 - lightStaffUnbindState)) * 7));
                setmubLAStSandCountState(mubLAStSandCount + 4);
                setwbLAStSandCountState(wbLAStSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLAStOriCountState(mubLAStOriCount + (-1 * (4 - lightStaffUnbindState)));
                setwbLAStOriCountState(wbLAStOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + (-1 * (4 - lightStaffUnbindState)));
                setmubLAStRupeeCost(mubLAStRupeeCost + 8 + (-1 * (4 - lightStaffUnbindState) * 7.5));
                setwbLAStRupeeCost(wbLAStRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 8 + (-1 * (4 - lightStaffUnbindState) * 7.5));
                setLightStaffUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightStaffUnbindState >= 1 && lightStaffUnbindState <= 4) {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + (lightStaffUnbindState * 40));
                setwbLAStSilverMaskCountState(wbLAStSilverMaskCount + (lightStaffUnbindState * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + (lightStaffUnbindState * 40));
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + (lightStaffUnbindState * 30));
                setwbLAStGoldMaskCountState(wbLAStGoldMaskCount + (lightStaffUnbindState * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + (lightStaffUnbindState * 30));
                setmubLAStSandCountState(mubLAStSandCount + (lightStaffUnbindState * 1));
                setwbLAStSandCountState(wbLAStSandCount + (lightStaffUnbindState * 1));
                setallmubLASandCount(allmubLASandCount + (lightStaffUnbindState * 1));
                setmubLAStRupeeCost(mubLAStRupeeCost + (lightStaffUnbindState * 2));
                setwbLAStRupeeCost(wbLAStRupeeCost + (lightStaffUnbindState * 2));
                setallmubLARupeeCost(allmubLARupeeCost + (lightStaffUnbindState * 2));
                setLightStaffUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightStaffUnbindState >= 1 && lightStaffUnbindState <= 4) {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + ((lightStaffUnbindState - event.target.value) * 40))
                setwbLAStSilverMaskCountState(wbLAStSilverMaskCount + ((lightStaffUnbindState - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightStaffUnbindState - event.target.value) * 40));
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + ((lightStaffUnbindState - event.target.value) * 30));
                setwbLAStGoldMaskCountState(wbLAStGoldMaskCount + ((lightStaffUnbindState - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightStaffUnbindState - event.target.value) * 30));
                setmubLAStSandCountState(mubLAStSandCount + (lightStaffUnbindState - event.target.value));
                setwbLAStSandCountState(wbLAStSandCount + (lightStaffUnbindState - event.target.value));
                setallmubLASandCount(allmubLASandCount + (lightStaffUnbindState - event.target.value));
                setmubLAStRupeeCost(mubLAStRupeeCost + ((lightStaffUnbindState - event.target.value) * 2));
                setwbLAStRupeeCost(wbLAStRupeeCost + ((lightStaffUnbindState - event.target.value) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightStaffUnbindState - event.target.value) * 2))
                setLightStaffUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightStaffUnbindState >= 5 && lightStaffUnbindState <= 8) {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + ((lightStaffUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbLAStSilverMaskCountState(wbLAStSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightStaffUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + ((lightStaffUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbLAStGoldMaskCountState(wbLAStGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightStaffUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubLAStInsanityCountState(mubLAStInsanityCount + ((lightStaffUnbindState - 4) * 7));
                setwbLAStInsanityCountState(wbLAStInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightStaffUnbindState - 4) * 7));
                setmubLAStSandCountState(mubLAStSandCount + (4 - event.target.value));
                setwbLAStSandCountState(wbLAStSandCount + (4 - event.target.value));
                setallmubLASandCount(allmubLASandCount + (4 - event.target.value));
                setmubLAStOriCountState(mubLAStOriCount + (lightStaffUnbindState - 4));
                setwbLAStOriCountState(wbLAStOriCount + (lightStaffUnbindState - 4));
                setallmubLAOriCount(allmubLAOriCount + (lightStaffUnbindState - 4));
                setmubLAStRupeeCost(mubLAStRupeeCost + ((lightStaffUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbLAStRupeeCost(wbLAStRupeeCost + 7.5 + ((lightStaffUnbindState - 4) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightStaffUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setLightStaffUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightStaffUnbindState == 9) {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubLAStInsanityCountState(mubLAStInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubLAStGaleCountState(mubLAStGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLAStOriCountState(mubLAStOriCount + 20 + (8 - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + 20 + (8 - event.target.value));
                setmubLAStRupeeCost(mubLAStRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setLightStaffUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightStaffUnbindState >= 5 && lightStaffUnbindState <= 8) {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + ((lightStaffUnbindState - event.target.value) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightStaffUnbindState - event.target.value) * 16));
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + ((lightStaffUnbindState - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightStaffUnbindState - event.target.value) * 10));
                setmubLAStInsanityCountState(mubLAStInsanityCount + ((lightStaffUnbindState - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightStaffUnbindState - event.target.value) * 7));
                setmubLAStOriCountState(mubLAStOriCount + (lightStaffUnbindState - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + (lightStaffUnbindState - event.target.value));
                setmubLAStRupeeCost(mubLAStRupeeCost + ((lightStaffUnbindState - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightStaffUnbindState - event.target.value) * 7.5));
                setLightStaffUnbindState(event.target.value)
            }
        }
    }

    function handleLightStaffRefineIncrement(event) {
        setLightWeaponChoiceState("staff");
        if (lightStaffRefineState < event.target.value) {
            if (lightStaffRefineState == 0 && event.target.value == 1) {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
                setallmubLAInsanityCount(allmubLAInsanityCount - 7)
                setallmubLAOriCount(allmubLAOriCount - 1)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightStaffRefineState(event.target.value);
            }
            else if (lightStaffRefineState == 0 && event.target.value == 2) {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - 56);
                setwbLAStSilverMaskCountState(wbLAStSilverMaskCount - 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 56);
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - 40);
                setwbLAStGoldMaskCountState(wbLAStGoldMaskCount - 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 40);
                setmubLAStInsanityCountState(mubLAStInsanityCount - 17);
                setwbLAStInsanityCountState(wbLAStInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 17);
                setmubLAStGaleCountState(mubLAStGaleCount - 10);
                setallmubLAGaleCount(allmubLAGaleCount - 10);
                setmubLAStOriCountState(mubLAStOriCount - 11);
                setwbLAStOriCountState(wbLAStOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 11);
                setmubLAStRupeeCost(mubLAStRupeeCost - 5);
                setwbLAStRupeeCost(wbLAStRupeeCost - 2.5);
                setallmubLARupeeCost(allmubLARupeeCost - 5);
                setLightStaffRefineState(event.target.value);
            }
            else if (lightStaffRefineState == 1 && event.target.value == 2) {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount - 40)
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount - 30);
                setmubLAStInsanityCountState(mubLAStInsanityCount - 10);
                setmubLAStGaleCountState(mubLAStGaleCount - 10);
                setmubLAStOriCountState(mubLAStOriCount - 10);
                setmubLAStRupeeCost(mubLAStRupeeCost - 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
                setallmubLAInsanityCount(allmubLAInsanityCount - 10)
                setallmubLAGaleCount(allmubLAGaleCount - 10)
                setallmubLAOriCount(allmubLAOriCount - 10)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightStaffRefineState(event.target.value);
            }
        }
        else if (lightStaffRefineState > event.target.value) {
            if (lightStaffRefineState == 2 && event.target.value == 1) 
            {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + 40)
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + 30);
                setmubLAStInsanityCountState(mubLAStInsanityCount + 10);
                setmubLAStGaleCountState(mubLAStGaleCount + 10);
                setmubLAStOriCountState(mubLAStOriCount + 10);
                setmubLAStRupeeCost(mubLAStRupeeCost + 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
                setallmubLAInsanityCount(allmubLAInsanityCount + 10)
                setallmubLAGaleCount(allmubLAGaleCount + 10)
                setallmubLAOriCount(allmubLAOriCount + 10)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightStaffRefineState(event.target.value);
            }
            else if (lightStaffRefineState == 2 && event.target.value == 0) 
            {
                setmubLAStSilverMaskCountState(mubLAStSilverMaskCount + 56);
                setwbLAStSilverMaskCountState(wbLAStSilverMaskCount + 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 56);
                setmubLAStGoldMaskCountState(mubLAStGoldMaskCount + 40);
                setwbLAStGoldMaskCountState(wbLAStGoldMaskCount + 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 40);
                setmubLAStInsanityCountState(mubLAStInsanityCount + 17);
                setwbLAStInsanityCountState(wbLAStInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 17);
                setmubLAStGaleCountState(mubLAStGaleCount + 10);
                setallmubLAGaleCount(allmubLAGaleCount + 10);
                setmubLAStOriCountState(mubLAStOriCount + 11);
                setwbLAStOriCountState(wbLAStOriCount + 1); 
                setallmubLAOriCount(allmubLAOriCount + 11);
                setmubLAStRupeeCost(mubLAStRupeeCost + 5);
                setwbLAStRupeeCost(wbLAStRupeeCost + 2.5);
                setallmubLARupeeCost(allmubLARupeeCost + 5)
                setLightStaffRefineState(event.target.value);
            }
            else if (lightStaffRefineState == 1 && event.target.value == 0) 
            {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
                setallmubLAInsanityCount(allmubLAInsanityCount + 7)
                setallmubLAOriCount(allmubLAOriCount + 1)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightStaffRefineState(event.target.value);
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
            setallmubLASandCount(allmubLASandCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
            setallmubLASandCount(allmubLASandCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 100)
            setallmubLAInsanityCount(allmubLAInsanityCount - 14)
            setallmubLAOriCount(allmubLAOriCount - 30)
            setallmubLARupeeCost(allmubLARupeeCost - 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 100)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 100)
            setallmubLAInsanityCount(allmubLAInsanityCount + 14)
            setallmubLAOriCount(allmubLAOriCount + 30)
            setallmubLARupeeCost(allmubLARupeeCost + 10)
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
            setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
            setallmubLAOriCount(allmubLAOriCount - 1)
            setallmubLARupeeCost(allmubLARupeeCost - 2.5)
        }
        else if (lightManacasterWyrmprintSlotState == "grayscale(0%)") {
            setLightManacasterWyrmprintSlotState("grayscale(100%)");
            setLightWeaponChoiceState("manacaster");
            setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + 16)
            setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + 10)
            setmubLAMOriCountState(mubLAMOriCount + 1)
            setmubLAMRupeeCost(mubLAMRupeeCost + 2.5)
            setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
            setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
            setallmubLAOriCount(allmubLAOriCount + 1)
            setallmubLARupeeCost(allmubLARupeeCost + 2.5)
        }
    }

    function handleLightManacasterUnbindIncrement(event) {
        setLightWeaponChoiceState("manacaster");
        if (lightManacasterUnbindState < event.target.value) {
            if (event.target.value == 9 && lightManacasterUnbindState == 0) {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - 304);
                setwbLAMSilverMaskCountState(wbLAMSilverMaskCount - 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 304);
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - 230);
                setwbLAMGoldMaskCountState(wbLAMGoldMaskCount - 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 230);
                setmubLAMInsanityCountState(mubLAMInsanityCount - 58);
                setwbLAMInsanityCountState(wbLAMInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLAMGaleCountState(mubLAMGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLAMSandCountState(mubLAMSandCount - 4);
                setwbLAMSandCountState(wbLAMSandCount - 4);
                setallmubLASandCount(allmubLASandCount - 4);
                setmubLAMOriCountState(mubLAMOriCount - 24);
                setwbLAMOriCountState(wbLAMOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLAMRupeeCost(mubLAMRupeeCost - 40);
                setwbLAMRupeeCost(wbLAMRupeeCost - 15.5);
                setallmubLARupeeCost(allmubLARupeeCost - 40);
                setLightManacasterUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightManacasterUnbindState >= 1 && lightManacasterUnbindState <= 4) {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - 144 - ((4 - lightManacasterUnbindState) * 40));
                setwbLAMSilverMaskCountState(wbLAMSilverMaskCount - 16 - ((4 - lightManacasterUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 144 - ((4 - lightManacasterUnbindState) * 40));
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - 110 - ((4 - lightManacasterUnbindState) * 30));
                setwbLAMGoldMaskCountState(wbLAMGoldMaskCount - 10 - ((4 - lightManacasterUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 110 - ((4 - lightManacasterUnbindState) * 30));
                setmubLAMInsanityCountState(mubLAMInsanityCount - 58);
                setwbLAMInsanityCountState(wbLAMInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 58);
                setmubLAMGaleCountState(mubLAMGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLAMSandCountState(mubLAMSandCount - (4 - lightManacasterUnbindState));
                setwbLAMSandCountState(wbLAMSandCount - (4 - lightManacasterUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightManacasterUnbindState));
                setmubLAMOriCountState(mubLAMOriCount - 24);
                setwbLAMOriCountState(wbLAMOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 24);
                setmubLAMRupeeCost(mubLAMRupeeCost - 32 - ((4 - lightManacasterUnbindState) * 2));
                setwbLAMRupeeCost(wbLAMRupeeCost - 7.5 - ((4 - lightManacasterUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - 32 - ((4 - lightManacasterUnbindState) * 2));
                setLightManacasterUnbindState(event.target.value);
            }
            else if (event.target.value == 9 && lightManacasterUnbindState >= 5 && lightManacasterUnbindState <= 8) {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - 80 - ((8 - lightManacasterUnbindState) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 80 - ((8 - lightManacasterUnbindState) * 16));
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - 70 - ((8 - lightManacasterUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 70 - ((8 - lightManacasterUnbindState) * 10));
                setmubLAMInsanityCountState(mubLAMInsanityCount - 30 - ((8 - lightManacasterUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - 30 - ((8 - lightManacasterUnbindState) * 7));
                setmubLAMGaleCountState(mubLAMGaleCount - 20);
                setallmubLAGaleCount(allmubLAGaleCount - 20);
                setmubLAMOriCountState(mubLAMOriCount - 20 - ((8 - lightManacasterUnbindState) * 1));
                setallmubLAOriCount(allmubLAOriCount - 20 - ((8 - lightManacasterUnbindState) * 1));
                setmubLAMRupeeCost(mubLAMRupeeCost - 2 - ((8 - lightManacasterUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - 2 - ((8 - lightManacasterUnbindState) * 7.5));
                setLightManacasterUnbindState(event.target.value);
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightManacasterUnbindState <= 7 && lightManacasterUnbindState >= 5) {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - ((event.target.value - lightManacasterUnbindState) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightManacasterUnbindState) * 16));
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - ((event.target.value - lightManacasterUnbindState) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightManacasterUnbindState) * 10));
                setmubLAMInsanityCountState(mubLAMInsanityCount - ((event.target.value - lightManacasterUnbindState) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount - ((event.target.value - lightManacasterUnbindState) * 7));
                setmubLAMOriCountState(mubLAMOriCount - (event.target.value - lightManacasterUnbindState));
                setallmubLAOriCount(allmubLAOriCount - (event.target.value - lightManacasterUnbindState));
                setmubLAMRupeeCost(mubLAMRupeeCost - ((event.target.value - lightManacasterUnbindState) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightManacasterUnbindState) * 7.5));
                setLightManacasterUnbindState(event.target.value)
            }
            else if (event.target.value <= 8 && event.target.value >= 5 && lightManacasterUnbindState <= 4 && lightManacasterUnbindState >= 0) {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - ((4 - lightManacasterUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setwbLAMSilverMaskCountState(wbLAMSilverMaskCount - 16 - ((4 - lightManacasterUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((4 - lightManacasterUnbindState) * 40) - (-1 * (4 - event.target.value) * 16));
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - ((4 - lightManacasterUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setwbLAMGoldMaskCountState(wbLAMGoldMaskCount - 10 - ((4 - lightManacasterUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((4 - lightManacasterUnbindState) * 30) - (-1 * (4 - event.target.value) * 10));
                setmubLAMInsanityCountState(mubLAMInsanityCount - (-1 * (4 - event.target.value) * 7));
                setwbLAMInsanityCountState(wbLAMInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - (-1 * (4 - event.target.value) * 7));
                setmubLAMSandCountState(mubLAMSandCount - (4 - lightManacasterUnbindState));
                setwbLAMSandCountState(wbLAMSandCount - (4 - lightManacasterUnbindState));
                setallmubLASandCount(allmubLASandCount - (4 - lightManacasterUnbindState));
                setmubLAMOriCountState(mubLAMOriCount - (-1 * (4 - event.target.value)));
                setwbLAMOriCountState(wbLAMOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - (-1 * (4 - event.target.value)));
                setmubLAMRupeeCost(mubLAMRupeeCost - ((4 - lightManacasterUnbindState) * 2) - (-1 * (4 - event.target.value) * 7.5))
                setwbLAMRupeeCost(wbLAMRupeeCost - 7.5 - ((4 - lightManacasterUnbindState) * 2))
                setLightManacasterUnbindState(event.target.value)
            }
            else if (event.target.value <= 4 && event.target.value >= 1 && lightManacasterUnbindState <= 3 && lightManacasterUnbindState >= 0) {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - ((event.target.value - lightManacasterUnbindState) * 40));
                setwbLAMSilverMaskCountState(wbLAMSilverMaskCount - ((event.target.value - lightManacasterUnbindState) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount - ((event.target.value - lightManacasterUnbindState) * 40));
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - ((event.target.value - lightManacasterUnbindState) * 30));
                setwbLAMGoldMaskCountState(wbLAMGoldMaskCount - ((event.target.value - lightManacasterUnbindState) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - ((event.target.value - lightManacasterUnbindState) * 30));
                setmubLAMSandCountState(mubLAMSandCount - (event.target.value - lightManacasterUnbindState));
                setwbLAMSandCountState(wbLAMSandCount - (event.target.value - lightManacasterUnbindState));
                setallmubLASandCount(allmubLASandCount - (event.target.value - lightManacasterUnbindState));
                setmubLAMRupeeCost(mubLAMRupeeCost - ((event.target.value - lightManacasterUnbindState) * 2));
                setwbLAMRupeeCost(wbLAMRupeeCost - ((event.target.value - lightManacasterUnbindState) * 2));
                setallmubLARupeeCost(allmubLARupeeCost - ((event.target.value - lightManacasterUnbindState) * 2));
                setLightManacasterUnbindState(event.target.value)
            }
        }
        else if (lightManacasterUnbindState > event.target.value) {
            if (event.target.value == 0 && lightManacasterUnbindState == 9) {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + 304);
                setwbLAMSilverMaskCountState(wbLAMSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 304);
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + 230);
                setwbLAMGoldMaskCountState(wbLAMGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 230);
                setmubLAMInsanityCountState(mubLAMInsanityCount + 58);
                setwbLAMInsanityCountState(wbLAMInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 58);
                setmubLAMGaleCountState(mubLAMGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLAMSandCountState(mubLAMSandCount + 4);
                setwbLAMSandCountState(wbLAMSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLAMOriCountState(mubLAMOriCount + 24);
                setwbLAMOriCountState(wbLAMOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + 24);
                setmubLAMRupeeCost(mubLAMRupeeCost + 40);
                setwbLAMRupeeCost(wbLAMRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 40);
                setLightManacasterUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightManacasterUnbindState >= 5 && lightManacasterUnbindState <= 8) {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + 160 + ((-1 * (4 - lightManacasterUnbindState)) * 16));
                setwbLAMSilverMaskCountState(wbLAMSilverMaskCount + 176);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 160 + ((-1 * (4 - lightManacasterUnbindState)) * 16));
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + 120 + ((-1 * (4 - lightManacasterUnbindState)) * 10));
                setwbLAMGoldMaskCountState(wbLAMGoldMaskCount + 130);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 120 + ((-1 * (4 - lightManacasterUnbindState)) * 10));
                setmubLAMInsanityCountState(mubLAMInsanityCount + ((-1 * (4 - lightManacasterUnbindState)) * 7));
                setwbLAMInsanityCountState(wbLAMInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((-1 * (4 - lightManacasterUnbindState)) * 7));
                setmubLAMSandCountState(mubLAMSandCount + 4);
                setwbLAMSandCountState(wbLAMSandCount + 4);
                setallmubLASandCount(allmubLASandCount + 4);
                setmubLAMOriCountState(mubLAMOriCount + (-1 * (4 - lightManacasterUnbindState)));
                setwbLAMOriCountState(wbLAMOriCount + 1);
                setallmubLAOriCount(allmubLAOriCount + (-1 * (4 - lightManacasterUnbindState)));
                setmubLAMRupeeCost(mubLAMRupeeCost + 8 + (-1 * (4 - lightManacasterUnbindState) * 7.5));
                setwbLAMRupeeCost(wbLAMRupeeCost + 15.5);
                setallmubLARupeeCost(allmubLARupeeCost + 8 + (-1 * (4 - lightManacasterUnbindState) * 7.5));
                setLightManacasterUnbindState(event.target.value);
            }
            else if (event.target.value == 0 && lightManacasterUnbindState >= 1 && lightManacasterUnbindState <= 4) {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + (lightManacasterUnbindState * 40));
                setwbLAMSilverMaskCountState(wbLAMSilverMaskCount + (lightManacasterUnbindState * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + (lightManacasterUnbindState * 40));
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + (lightManacasterUnbindState * 30));
                setwbLAMGoldMaskCountState(wbLAMGoldMaskCount + (lightManacasterUnbindState * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + (lightManacasterUnbindState * 30));
                setmubLAMSandCountState(mubLAMSandCount + (lightManacasterUnbindState * 1));
                setwbLAMSandCountState(wbLAMSandCount + (lightManacasterUnbindState * 1));
                setallmubLASandCount(allmubLASandCount + (lightManacasterUnbindState * 1));
                setmubLAMRupeeCost(mubLAMRupeeCost + (lightManacasterUnbindState * 2));
                setwbLAMRupeeCost(wbLAMRupeeCost + (lightManacasterUnbindState * 2));
                setallmubLARupeeCost(allmubLARupeeCost + (lightManacasterUnbindState * 2));
                setLightManacasterUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightManacasterUnbindState >= 1 && lightManacasterUnbindState <= 4) {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + ((lightManacasterUnbindState - event.target.value) * 40))
                setwbLAMSilverMaskCountState(wbLAMSilverMaskCount + ((lightManacasterUnbindState - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightManacasterUnbindState - event.target.value) * 40));
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + ((lightManacasterUnbindState - event.target.value) * 30));
                setwbLAMGoldMaskCountState(wbLAMGoldMaskCount + ((lightManacasterUnbindState - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightManacasterUnbindState - event.target.value) * 30));
                setmubLAMSandCountState(mubLAMSandCount + (lightManacasterUnbindState - event.target.value));
                setwbLAMSandCountState(wbLAMSandCount + (lightManacasterUnbindState - event.target.value));
                setallmubLASandCount(allmubLASandCount + (lightManacasterUnbindState - event.target.value));
                setmubLAMRupeeCost(mubLAMRupeeCost + ((lightManacasterUnbindState - event.target.value) * 2));
                setwbLAMRupeeCost(wbLAMRupeeCost + ((lightManacasterUnbindState - event.target.value) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightManacasterUnbindState - event.target.value) * 2))
                setLightManacasterUnbindState(event.target.value);
            }
            else if (event.target.value >= 1 && event.target.value <= 4 && lightManacasterUnbindState >= 5 && lightManacasterUnbindState <= 8) {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + ((lightManacasterUnbindState - 4) * 16) + ((4 - event.target.value) * 40))
                setwbLAMSilverMaskCountState(wbLAMSilverMaskCount + 16 + ((4 - event.target.value) * 40));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightManacasterUnbindState - 4) * 16) + ((4 - event.target.value) * 40));
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + ((lightManacasterUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setwbLAMGoldMaskCountState(wbLAMGoldMaskCount + 10 + ((4 - event.target.value) * 30));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightManacasterUnbindState - 4) * 10) + ((4 - event.target.value) * 30));
                setmubLAMInsanityCountState(mubLAMInsanityCount + ((lightManacasterUnbindState - 4) * 7));
                setwbLAMInsanityCountState(wbLAMInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightManacasterUnbindState - 4) * 7));
                setmubLAMSandCountState(mubLAMSandCount + (4 - event.target.value));
                setwbLAMSandCountState(wbLAMSandCount + (4 - event.target.value));
                setallmubLASandCount(allmubLASandCount + (4 - event.target.value));
                setmubLAMOriCountState(mubLAMOriCount + (lightManacasterUnbindState - 4));
                setwbLAMOriCountState(wbLAMOriCount + (lightManacasterUnbindState - 4));
                setallmubLAOriCount(allmubLAOriCount + (lightManacasterUnbindState - 4));
                setmubLAMRupeeCost(mubLAMRupeeCost + ((lightManacasterUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setwbLAMRupeeCost(wbLAMRupeeCost + 7.5 + ((lightManacasterUnbindState - 4) * 2));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightManacasterUnbindState - 4) * 7.5) + ((4 - event.target.value) * 2));
                setLightManacasterUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightManacasterUnbindState == 9) {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 80 + ((8 - event.target.value) * 16));
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 70 + ((8 - event.target.value) * 10));
                setmubLAMInsanityCountState(mubLAMInsanityCount + 30 + ((8 - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + 30 + ((8 - event.target.value) * 7));
                setmubLAMGaleCountState(mubLAMGaleCount + 20);
                setallmubLAGaleCount(allmubLAGaleCount + 20);
                setmubLAMOriCountState(mubLAMOriCount + 20 + (8 - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + 20 + (8 - event.target.value));
                setmubLAMRupeeCost(mubLAMRupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + 2 + ((8 - event.target.value) * 7.5));
                setLightManacasterUnbindState(event.target.value)
            }
            else if (event.target.value >= 5 && event.target.value <= 8 && lightManacasterUnbindState >= 5 && lightManacasterUnbindState <= 8) {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + ((lightManacasterUnbindState - event.target.value) * 16))
                setallmubLASilverMaskCount(allmubLASilverMaskCount + ((lightManacasterUnbindState - event.target.value) * 16));
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + ((lightManacasterUnbindState - event.target.value) * 10));
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + ((lightManacasterUnbindState - event.target.value) * 10));
                setmubLAMInsanityCountState(mubLAMInsanityCount + ((lightManacasterUnbindState - event.target.value) * 7));
                setallmubLAInsanityCount(allmubLAInsanityCount + ((lightManacasterUnbindState - event.target.value) * 7));
                setmubLAMOriCountState(mubLAMOriCount + (lightManacasterUnbindState - event.target.value));
                setallmubLAOriCount(allmubLAOriCount + (lightManacasterUnbindState - event.target.value));
                setmubLAMRupeeCost(mubLAMRupeeCost + ((lightManacasterUnbindState - event.target.value) * 7.5));
                setallmubLARupeeCost(allmubLARupeeCost + ((lightManacasterUnbindState - event.target.value) * 7.5));
                setLightManacasterUnbindState(event.target.value)
            }
        }
    }

    function handleLightManacasterRefineIncrement(event) {
        setLightWeaponChoiceState("manacaster");
        if (lightManacasterRefineState < event.target.value) {
            if (lightManacasterRefineState == 0 && event.target.value == 1) {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 10)
                setallmubLAInsanityCount(allmubLAInsanityCount - 7)
                setallmubLAOriCount(allmubLAOriCount - 1)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightManacasterRefineState(event.target.value);
            }
            else if (lightManacasterRefineState == 0 && event.target.value == 2) {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - 56);
                setwbLAMSilverMaskCountState(wbLAMSilverMaskCount - 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 56);
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - 40);
                setwbLAMGoldMaskCountState(wbLAMGoldMaskCount - 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 40);
                setmubLAMInsanityCountState(mubLAMInsanityCount - 17);
                setwbLAMInsanityCountState(wbLAMInsanityCount - 7);
                setallmubLAInsanityCount(allmubLAInsanityCount - 17);
                setmubLAMGaleCountState(mubLAMGaleCount - 10);
                setallmubLAGaleCount(allmubLAGaleCount - 10);
                setmubLAMOriCountState(mubLAMOriCount - 11);
                setwbLAMOriCountState(wbLAMOriCount - 1);
                setallmubLAOriCount(allmubLAOriCount - 11);
                setmubLAMRupeeCost(mubLAMRupeeCost - 5);
                setwbLAMRupeeCost(wbLAMRupeeCost - 2.5);
                setallmubLARupeeCost(allmubLARupeeCost - 5);
                setLightManacasterRefineState(event.target.value);
            }
            else if (lightManacasterRefineState == 1 && event.target.value == 2) {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount - 40)
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount - 30);
                setmubLAMInsanityCountState(mubLAMInsanityCount - 10);
                setmubLAMGaleCountState(mubLAMGaleCount - 10);
                setmubLAMOriCountState(mubLAMOriCount - 10);
                setmubLAMRupeeCost(mubLAMRupeeCost - 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount - 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount - 30)
                setallmubLAInsanityCount(allmubLAInsanityCount - 10)
                setallmubLAGaleCount(allmubLAGaleCount - 10)
                setallmubLAOriCount(allmubLAOriCount - 10)
                setallmubLARupeeCost(allmubLARupeeCost - 2.5)
                setLightManacasterRefineState(event.target.value);
            }
        }
        else if (lightManacasterRefineState > event.target.value) {
            if (lightManacasterRefineState == 2 && event.target.value == 1) 
            {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + 40)
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + 30);
                setmubLAMInsanityCountState(mubLAMInsanityCount + 10);
                setmubLAMGaleCountState(mubLAMGaleCount + 10);
                setmubLAMOriCountState(mubLAMOriCount + 10);
                setmubLAMRupeeCost(mubLAMRupeeCost + 2.5);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 40)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 30)
                setallmubLAInsanityCount(allmubLAInsanityCount + 10)
                setallmubLAGaleCount(allmubLAGaleCount + 10)
                setallmubLAOriCount(allmubLAOriCount + 10)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightManacasterRefineState(event.target.value);
            }
            else if (lightManacasterRefineState == 2 && event.target.value == 0) 
            {
                setmubLAMSilverMaskCountState(mubLAMSilverMaskCount + 56);
                setwbLAMSilverMaskCountState(wbLAMSilverMaskCount + 16);
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 56);
                setmubLAMGoldMaskCountState(mubLAMGoldMaskCount + 40);
                setwbLAMGoldMaskCountState(wbLAMGoldMaskCount + 10);
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 40);
                setmubLAMInsanityCountState(mubLAMInsanityCount + 17);
                setwbLAMInsanityCountState(wbLAMInsanityCount + 7);
                setallmubLAInsanityCount(allmubLAInsanityCount + 17);
                setmubLAMGaleCountState(mubLAMGaleCount + 10);
                setallmubLAGaleCount(allmubLAGaleCount + 10);
                setmubLAMOriCountState(mubLAMOriCount + 11);
                setwbLAMOriCountState(wbLAMOriCount + 1); 
                setallmubLAOriCount(allmubLAOriCount + 11);
                setmubLAMRupeeCost(mubLAMRupeeCost + 5);
                setwbLAMRupeeCost(wbLAMRupeeCost + 2.5);
                setallmubLARupeeCost(allmubLARupeeCost + 5)
                setLightManacasterRefineState(event.target.value);
            }
            else if (lightManacasterRefineState == 1 && event.target.value == 0) 
            {
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
                setallmubLASilverMaskCount(allmubLASilverMaskCount + 16)
                setallmubLAGoldMaskCount(allmubLAGoldMaskCount + 10)
                setallmubLAInsanityCount(allmubLAInsanityCount + 7)
                setallmubLAOriCount(allmubLAOriCount + 1)
                setallmubLARupeeCost(allmubLARupeeCost + 2.5)
                setLightManacasterRefineState(event.target.value);
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
            <Flex>
                <Box width={[6 / 7, 1 / 2]} p={3} m={3} bg={"#152238"} sx={{ border: "3px solid blue" }}>
                    <Flex>
                        {/* <Box width={1 / 4}></Box> */}
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Materials Needed to MUB all Weapons</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{allmubLASilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{allmubLAGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{allmubLAInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{allmubLAGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{allmubLASandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{allmubLAOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{allmubLARupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Flex>
            <Flex>&nbsp;</Flex>
            <WeaponTypeNavTabs />
        </div>
    )
}