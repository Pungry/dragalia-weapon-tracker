import React, { useState } from 'react'
import AgitoNavTabs from "./AgitoNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"
import { Box, Text, Flex, Card, Image } from "rebass";
import { Slider } from "@rebass/forms";

import WaterAgitoSword from "../Images/Water_Agito_Sword.png";
import WaterAgitoBlade from "../Images/Water_Agito_Blade.png";
import WaterAgitoDagger from "../Images/Water_Agito_Dagger.png";
import WaterAgitoAxe from "../Images/Water_Agito_Axe.png";
import WaterAgitoLance from "../Images/Water_Agito_Lance.png";
import WaterAgitoBow from "../Images/Water_Agito_Bow.png";
import WaterAgitoWand from "../Images/Water_Agito_Wand.png";
import WaterAgitoStaff from "../Images/Water_Agito_Staff.png";
import WaterAgitoManacaster from "../Images/Water_Agito_Manacaster.png";

import WaterAgitoSilverMask from "../Images/Water_Agito_Silver_Mask.png";
import WaterAgitoGoldMask from "../Images/Water_Agito_Gold_Mask.png";
import WaterAgitoInsanity from "../Images/Water_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";

import Refine from "../Images/Refine.PNG";
import Unbind from "../Images/Unbind.PNG";
import WyrmprintSlots from "../Images/Wyrmprint_Slots.PNG";
import WeaponBonus from "../Images/Weapon_Bonus.PNG";

import WaterAgitoSwordCost from "./WaterAgitoSwordMats"
import WaterAgitoBladeCost from "./WaterAgitoBladeMats"
import WaterAgitoDaggerCost from "./WaterAgitoDaggerMats"
import WaterAgitoAxeCost from "./WaterAgitoAxeMats"
import WaterAgitoLanceCost from "./WaterAgitoLanceMats"
import WaterAgitoBowCost from "./WaterAgitoBowMats"
import WaterAgitoWandCost from "./WaterAgitoWandMats"
import WaterAgitoStaffCost from "./WaterAgitoStaffMats"
import WaterAgitoManacasterCost from "./WaterAgitoManacasterMats"

export default function WaterAgitoWeapons() {
    const [waterWeaponChoice, setWaterWeaponChoiceState] = useLocalStorage("waterWeaponChoice", "sword")

    const [allmubWaASilverMaskCount, setallmubWaASilverMaskCount] = useLocalStorage("allmubWaASilverMaskState", 4644)
    const [allmubWaAGoldMaskCount, setallmubWaAGoldMaskCount] = useLocalStorage("allmubWaAGoldMaskState", 3690)
    const [allmubWaAInsanityCount, setallmubWaAInsanityCount] = useLocalStorage("allmubWaAInsanityCount", 801)
    const [allmubWaAGaleCount, setallmubWaAGaleCount] = useLocalStorage("allmubWaAGaleCount", 270)
    const [allmubWaASandCount, setallmubWaASandCount] = useLocalStorage("allmubWaASandCount", 45)
    const [allmubWaAOriCount, setallmubWaAOriCount] = useLocalStorage("allmubWaAOriCount", 594)
    const [allmubWaARupeeCost, setallmubWaARupeeCost] = useLocalStorage("allmubWaARupeeCost", 535.5)

    const [waterSwordCraftState, setWaterSwordCraftState] = useLocalStorage("waterSwordCraftState", "grayscale(100%)")
    const [waterSwordWeaponBonusState, setWaterSwordWeaponBonusState] = useLocalStorage("waterSwordWeaponBonusState", "grayscale(100%)")
    const [waterSwordWyrmprintSlotState, setWaterSwordWyrmprintSlotState] = useLocalStorage("waterSwordWyrmprintSlotState", "grayscale(100%)")
    const [waterSwordUnbindState, setWaterSwordUnbindState] = useLocalStorage("waterSwordUnbindState", 0);
    const [waterSwordRefineState, setWaterSwordRefineState] = useLocalStorage("waterSwordRefineState", 0);

    const [mubWaASSilverMaskCount, setmubWaASSilverMaskCountState] = useLocalStorage("mubWaASSilverMaskCount", 516);
    const [mubWaASGoldMaskCount, setmubWaASGoldMaskCountState] = useLocalStorage("mubWaASGoldMaskCount", 410);
    const [mubWaASInsanityCount, setmubWaASInsanityCountState] = useLocalStorage("mubWaASInsanityCount", 89);
    const [mubWaASGaleCount, setmubWaASGaleCountState] = useLocalStorage("mubWaASGaleCount", 30);
    const [mubWaASSandCount, setmubWaASSandCountState] = useLocalStorage("mubWaASSandCount", 5);
    const [mubWaASOriCount, setmubWaASOriCountState] = useLocalStorage("mubWaASOriCount", 66);
    const [mubWaASRupeeCost, setmubWaASRupeeCost] = useLocalStorage("mubWaASRupeeCost", 59.5);

    const [wbWaASSilverMaskCount, setwbWaASSilverMaskCountState] = useLocalStorage("wbWaASSilverMaskCount", 332);
    const [wbWaASGoldMaskCount, setwbWaASGoldMaskCountState] = useLocalStorage("wbWaASGoldMaskCount", 270);
    const [wbWaASInsanityCount, setwbWaASInsanityCountState] = useLocalStorage("wbWaASInsanityCount", 28);
    const [wbWaASSandCount, setwbWaASSandCountState] = useLocalStorage("wbWaASSandCount", 5);
    const [wbWaASOriCount, setwbWaASOriCountState] = useLocalStorage("wbWaASOriCount", 32);
    const [wbWaASRupeeCost, setwbWaASRupeeCost] = useLocalStorage("wbWaASRupeeCost", 30);

    const [waterBladeCraftState, setWaterBladeCraftState] = useLocalStorage("waterBladeCraftState", "grayscale(100%)")
    const [waterBladeWeaponBonusState, setWaterBladeWeaponBonusState] = useLocalStorage("waterBladeWeaponBonusState", "grayscale(100%)")
    const [waterBladeWyrmprintSlotState, setWaterBladeWyrmprintSlotState] = useLocalStorage("waterBladeWyrmprintSlotState", "grayscale(100%)")
    const [waterBladeUnbindState, setWaterBladeUnbindState] = useLocalStorage("waterBladeUnbindState", 0);
    const [waterBladeRefineState, setWaterBladeRefineState] = useLocalStorage("waterBladeRefineState", 0);

    const [mubWaABlSilverMaskCount, setmubWaABlSilverMaskCountState] = useLocalStorage("mubWaABlSilverMaskCount", 516);
    const [mubWaABlGoldMaskCount, setmubWaABlGoldMaskCountState] = useLocalStorage("mubWaABlGoldMaskCount", 410);
    const [mubWaABlInsanityCount, setmubWaABlInsanityCountState] = useLocalStorage("mubWaABlInsanityCount", 89);
    const [mubWaABlGaleCount, setmubWaABlGaleCountState] = useLocalStorage("mubWaABlGaleCount", 30);
    const [mubWaABlSandCount, setmubWaABlSandCountState] = useLocalStorage("mubWaABlSandCount", 5);
    const [mubWaABlOriCount, setmubWaABlOriCountState] = useLocalStorage("mubWaABlOriCount", 66);
    const [mubWaABlRupeeCost, setmubWaABlRupeeCost] = useLocalStorage("mubWaABlRupeeCost", 59.5);

    const [wbWaABlSilverMaskCount, setwbWaABlSilverMaskCountState] = useLocalStorage("wbWaABlSilverMaskCount", 332);
    const [wbWaABlGoldMaskCount, setwbWaABlGoldMaskCountState] = useLocalStorage("wbWaABlGoldMaskCount", 270);
    const [wbWaABlInsanityCount, setwbWaABlInsanityCountState] = useLocalStorage("wbWaABlInsanityCount", 28);
    const [wbWaABlSandCount, setwbWaABlSandCountState] = useLocalStorage("wbWaABlSandCount", 5);
    const [wbWaABlOriCount, setwbWaABlOriCountState] = useLocalStorage("wbWaABlOriCount", 32);
    const [wbWaABlRupeeCost, setwbWaABlRupeeCost] = useLocalStorage("wbWaABlRupeeCost", 30);

    const [waterDaggerCraftState, setWaterDaggerCraftState] = useLocalStorage("waterDaggerCraftState", "grayscale(100%)")
    const [waterDaggerWeaponBonusState, setWaterDaggerWeaponBonusState] = useLocalStorage("waterDaggerWeaponBonusState", "grayscale(100%)")
    const [waterDaggerWyrmprintSlotState, setWaterDaggerWyrmprintSlotState] = useLocalStorage("waterDaggerWyrmprintSlotState", "grayscale(100%)")
    const [waterDaggerUnbindState, setWaterDaggerUnbindState] = useLocalStorage("waterDaggerUnbindState", 0);
    const [waterDaggerRefineState, setWaterDaggerRefineState] = useLocalStorage("waterDaggerRefineState", 0);

    const [mubWaADSilverMaskCount, setmubWaADSilverMaskCountState] = useLocalStorage("mubWaADSilverMaskCount", 516);
    const [mubWaADGoldMaskCount, setmubWaADGoldMaskCountState] = useLocalStorage("mubWaADASGoldMaskCount", 410);
    const [mubWaADInsanityCount, setmubWaADInsanityCountState] = useLocalStorage("mubWaADInsanityCount", 89);
    const [mubWaADGaleCount, setmubWaADGaleCountState] = useLocalStorage("mubWaADGaleCount", 30);
    const [mubWaADSandCount, setmubWaADSandCountState] = useLocalStorage("mubWaADSandCount", 5);
    const [mubWaADOriCount, setmubWaADOriCountState] = useLocalStorage("mubWaADOriCount", 66);
    const [mubWaADRupeeCost, setmubWaADRupeeCost] = useLocalStorage("mubWaADRupeeCost", 59.5);

    const [wbWaADSilverMaskCount, setwbWaADSilverMaskCountState] = useLocalStorage("wbWaADSilverMaskCount", 332);
    const [wbWaADGoldMaskCount, setwbWaADGoldMaskCountState] = useLocalStorage("wbWaADGoldMaskCount", 270);
    const [wbWaADInsanityCount, setwbWaADInsanityCountState] = useLocalStorage("wbWaADInsanityCount", 28);
    const [wbWaADSandCount, setwbWaADSandCountState] = useLocalStorage("wbWaADSandCount", 5);
    const [wbWaADOriCount, setwbWaADOriCountState] = useLocalStorage("wbWaADOriCount", 32);
    const [wbWaADRupeeCost, setwbWaADRupeeCost] = useLocalStorage("wbWaADRupeeCost", 30);

    const [waterAxeCraftState, setWaterAxeCraftState] = useLocalStorage("waterAxeCraftState", "grayscale(100%)")
    const [waterAxeWeaponBonusState, setWaterAxeWeaponBonusState] = useLocalStorage("waterAxeWeaponBonusState", "grayscale(100%)")
    const [waterAxeWyrmprintSlotState, setWaterAxeWyrmprintSlotState] = useLocalStorage("waterAxeWyrmprintSlotState", "grayscale(100%)")
    const [waterAxeUnbindState, setWaterAxeUnbindState] = useLocalStorage("waterAxeUnbindState", 0);
    const [waterAxeRefineState, setWaterAxeRefineState] = useLocalStorage("waterAxeRefineState", 0);

    const [mubWaAASilverMaskCount, setmubWaAASilverMaskCountState] = useLocalStorage("mubWaAASilverMaskCount", 516);
    const [mubWaAAGoldMaskCount, setmubWaAAGoldMaskCountState] = useLocalStorage("mubWaAAASGoldMaskCount", 410);
    const [mubWaAAInsanityCount, setmubWaAAInsanityCountState] = useLocalStorage("mubWaAAInsanityCount", 89);
    const [mubWaAAGaleCount, setmubWaAAGaleCountState] = useLocalStorage("mubWaAAGaleCount", 30);
    const [mubWaAASandCount, setmubWaAASandCountState] = useLocalStorage("mubWaAASandCount", 5);
    const [mubWaAAOriCount, setmubWaAAOriCountState] = useLocalStorage("mubWaAAOriCount", 66);
    const [mubWaAARupeeCost, setmubWaAARupeeCost] = useLocalStorage("mubWaAARupeeCost", 59.5);

    const [wbWaAASilverMaskCount, setwbWaAASilverMaskCountState] = useLocalStorage("wbWaAASilverMaskCount", 332);
    const [wbWaAAGoldMaskCount, setwbWaAAGoldMaskCountState] = useLocalStorage("wbWaAAGoldMaskCount", 270);
    const [wbWaAAInsanityCount, setwbWaAAInsanityCountState] = useLocalStorage("wbWaAAInsanityCount", 28);
    const [wbWaAASandCount, setwbWaAASandCountState] = useLocalStorage("wbWaAASandCount", 5);
    const [wbWaAAOriCount, setwbWaAAOriCountState] = useLocalStorage("wbWaAAOriCount", 32);
    const [wbWaAARupeeCost, setwbWaAARupeeCost] = useLocalStorage("wbWaAARupeeCost", 30);

    const [waterLanceCraftState, setWaterLanceCraftState] = useLocalStorage("waterLanceCraftState", "grayscale(100%)")
    const [waterLanceWeaponBonusState, setWaterLanceWeaponBonusState] = useLocalStorage("waterLanceWeaponBonusState", "grayscale(100%)")
    const [waterLanceWyrmprintSlotState, setWaterLanceWyrmprintSlotState] = useLocalStorage("waterLanceWyrmprintSlotState", "grayscale(100%)")
    const [waterLanceUnbindState, setWaterLanceUnbindState] = useLocalStorage("waterLanceUnbindState", 0);
    const [waterLanceRefineState, setWaterLanceRefineState] = useLocalStorage("waterLanceRefineState", 0);

    const [mubWaALSilverMaskCount, setmubWaALSilverMaskCountState] = useLocalStorage("mubWaALSilverMaskCount", 516);
    const [mubWaALGoldMaskCount, setmubWaALGoldMaskCountState] = useLocalStorage("mubWaALASGoldMaskCount", 410);
    const [mubWaALInsanityCount, setmubWaALInsanityCountState] = useLocalStorage("mubWaALInsanityCount", 89);
    const [mubWaALGaleCount, setmubWaALGaleCountState] = useLocalStorage("mubWaALGaleCount", 30);
    const [mubWaALSandCount, setmubWaALSandCountState] = useLocalStorage("mubWaALSandCount", 5);
    const [mubWaALOriCount, setmubWaALOriCountState] = useLocalStorage("mubWaALOriCount", 66);
    const [mubWaALRupeeCost, setmubWaALRupeeCost] = useLocalStorage("mubWaALRupeeCost", 59.5);

    const [wbWaALSilverMaskCount, setwbWaALSilverMaskCountState] = useLocalStorage("wbWaALSilverMaskCount", 332);
    const [wbWaALGoldMaskCount, setwbWaALGoldMaskCountState] = useLocalStorage("wbWaALGoldMaskCount", 270);
    const [wbWaALInsanityCount, setwbWaALInsanityCountState] = useLocalStorage("wbWaALInsanityCount", 28);
    const [wbWaALSandCount, setwbWaALSandCountState] = useLocalStorage("wbWaALSandCount", 5);
    const [wbWaALOriCount, setwbWaALOriCountState] = useLocalStorage("wbWaALOriCount", 32);
    const [wbWaALRupeeCost, setwbWaALRupeeCost] = useLocalStorage("wbWaALRupeeCost", 30);

    const [waterBowCraftState, setWaterBowCraftState] = useLocalStorage("waterBowCraftState", "grayscale(100%)")
    const [waterBowWeaponBonusState, setWaterBowWeaponBonusState] = useLocalStorage("waterBowWeaponBonusState", "grayscale(100%)")
    const [waterBowWyrmprintSlotState, setWaterBowWyrmprintSlotState] = useLocalStorage("waterBowWyrmprintSlotState", "grayscale(100%)")
    const [waterBowUnbindState, setWaterBowUnbindState] = useLocalStorage("waterBowUnbindState", 0);
    const [waterBowRefineState, setWaterBowRefineState] = useLocalStorage("waterBowRefineState", 0);

    const [mubWaABoSilverMaskCount, setmubWaABoSilverMaskCountState] = useLocalStorage("mubWaABoSilverMaskCount", 516);
    const [mubWaABoGoldMaskCount, setmubWaABoGoldMaskCountState] = useLocalStorage("mubWaABoASGoldMaskCount", 410);
    const [mubWaABoInsanityCount, setmubWaABoInsanityCountState] = useLocalStorage("mubWaABoInsanityCount", 89);
    const [mubWaABoGaleCount, setmubWaABoGaleCountState] = useLocalStorage("mubWaABoGaleCount", 30);
    const [mubWaABoSandCount, setmubWaABoSandCountState] = useLocalStorage("mubWaABoSandCount", 5);
    const [mubWaABoOriCount, setmubWaABoOriCountState] = useLocalStorage("mubWaABoOriCount", 66);
    const [mubWaABoRupeeCost, setmubWaABoRupeeCost] = useLocalStorage("mubWaABoRupeeCost", 59.5);

    const [wbWaABoSilverMaskCount, setwbWaABoSilverMaskCountState] = useLocalStorage("wbWaABoSilverMaskCount", 332);
    const [wbWaABoGoldMaskCount, setwbWaABoGoldMaskCountState] = useLocalStorage("wbWaABoGoldMaskCount", 270);
    const [wbWaABoInsanityCount, setwbWaABoInsanityCountState] = useLocalStorage("wbWaABoInsanityCount", 28);
    const [wbWaABoSandCount, setwbWaABoSandCountState] = useLocalStorage("wbWaABoSandCount", 5);
    const [wbWaABoOriCount, setwbWaABoOriCountState] = useLocalStorage("wbWaABoOriCount", 32);
    const [wbWaABoRupeeCost, setwbWaABoRupeeCost] = useLocalStorage("wbWaABoRupeeCost", 30);

    const [waterWandCraftState, setWaterWandCraftState] = useLocalStorage("waterWandCraftState", "grayscale(100%)")
    const [waterWandWeaponBonusState, setWaterWandWeaponBonusState] = useLocalStorage("waterWandWeaponBonusState", "grayscale(100%)")
    const [waterWandWyrmprintSlotState, setWaterWandWyrmprintSlotState] = useLocalStorage("waterWandWyrmprintSlotState", "grayscale(100%)")
    const [waterWandUnbindState, setWaterWandUnbindState] = useLocalStorage("waterWandUnbindState", 0);
    const [waterWandRefineState, setWaterWandRefineState] = useLocalStorage("waterWandRefineState", 0);

    const [mubWaAWSilverMaskCount, setmubWaAWSilverMaskCountState] = useLocalStorage("mubWaAWSilverMaskCount", 516);
    const [mubWaAWGoldMaskCount, setmubWaAWGoldMaskCountState] = useLocalStorage("mubWaAWASGoldMaskCount", 410);
    const [mubWaAWInsanityCount, setmubWaAWInsanityCountState] = useLocalStorage("mubWaAWInsanityCount", 89);
    const [mubWaAWGaleCount, setmubWaAWGaleCountState] = useLocalStorage("mubWaAWGaleCount", 30);
    const [mubWaAWSandCount, setmubWaAWSandCountState] = useLocalStorage("mubWaAWSandCount", 5);
    const [mubWaAWOriCount, setmubWaAWOriCountState] = useLocalStorage("mubWaAWOriCount", 66);
    const [mubWaAWRupeeCost, setmubWaAWRupeeCost] = useLocalStorage("mubWaAWRupeeCost", 59.5);

    const [wbWaAWSilverMaskCount, setwbWaAWSilverMaskCountState] = useLocalStorage("wbWaAWSilverMaskCount", 332);
    const [wbWaAWGoldMaskCount, setwbWaAWGoldMaskCountState] = useLocalStorage("wbWaAWGoldMaskCount", 270);
    const [wbWaAWInsanityCount, setwbWaAWInsanityCountState] = useLocalStorage("wbWaAWInsanityCount", 28);
    const [wbWaAWSandCount, setwbWaAWSandCountState] = useLocalStorage("wbWaAWSandCount", 5);
    const [wbWaAWOriCount, setwbWaAWOriCountState] = useLocalStorage("wbWaAWOriCount", 32);
    const [wbWaAWRupeeCost, setwbWaAWRupeeCost] = useLocalStorage("wbWaAWRupeeCost", 30);

    const [waterStaffCraftState, setWaterStaffCraftState] = useLocalStorage("waterStaffCraftState", "grayscale(100%)")
    const [waterStaffWeaponBonusState, setWaterStaffWeaponBonusState] = useLocalStorage("waterStaffWeaponBonusState", "grayscale(100%)")
    const [waterStaffWyrmprintSlotState, setWaterStaffWyrmprintSlotState] = useLocalStorage("waterStaffWyrmprintSlotState", "grayscale(100%)")
    const [waterStaffUnbindState, setWaterStaffUnbindState] = useLocalStorage("waterStaffUnbindState", 0);
    const [waterStaffRefineState, setWaterStaffRefineState] = useLocalStorage("waterStaffRefineState", 0);

    const [mubWaAStSilverMaskCount, setmubWaAStSilverMaskCountState] = useLocalStorage("mubWaAStSilverMaskCount", 516);
    const [mubWaAStGoldMaskCount, setmubWaAStGoldMaskCountState] = useLocalStorage("mubWaAStASGoldMaskCount", 410);
    const [mubWaAStInsanityCount, setmubWaAStInsanityCountState] = useLocalStorage("mubWaAStInsanityCount", 89);
    const [mubWaAStGaleCount, setmubWaAStGaleCountState] = useLocalStorage("mubWaAStGaleCount", 30);
    const [mubWaAStSandCount, setmubWaAStSandCountState] = useLocalStorage("mubWaAStSandCount", 5);
    const [mubWaAStOriCount, setmubWaAStOriCountState] = useLocalStorage("mubWaAStOriCount", 66);
    const [mubWaAStRupeeCost, setmubWaAStRupeeCost] = useLocalStorage("mubWaAStRupeeCost", 59.5);

    const [wbWaAStSilverMaskCount, setwbWaAStSilverMaskCountState] = useLocalStorage("wbWaAStSilverMaskCount", 332);
    const [wbWaAStGoldMaskCount, setwbWaAStGoldMaskCountState] = useLocalStorage("wbWaAStGoldMaskCount", 270);
    const [wbWaAStInsanityCount, setwbWaAStInsanityCountState] = useLocalStorage("wbWaAStInsanityCount", 28);
    const [wbWaAStSandCount, setwbWaAStSandCountState] = useLocalStorage("wbWaAStSandCount", 5);
    const [wbWaAStOriCount, setwbWaAStOriCountState] = useLocalStorage("wbWaAStOriCount", 32);
    const [wbWaAStRupeeCost, setwbWaAStRupeeCost] = useLocalStorage("wbWaAStRupeeCost", 30);

    const [waterManacasterCraftState, setWaterManacasterCraftState] = useLocalStorage("waterManacasterCraftState", "grayscale(100%)")
    const [waterManacasterWeaponBonusState, setWaterManacasterWeaponBonusState] = useLocalStorage("waterManacasterWeaponBonusState", "grayscale(100%)")
    const [waterManacasterWyrmprintSlotState, setWaterManacasterWyrmprintSlotState] = useLocalStorage("waterManacasterWyrmprintSlotState", "grayscale(100%)")
    const [waterManacasterUnbindState, setWaterManacasterUnbindState] = useLocalStorage("waterManacasterUnbindState", 0);
    const [waterManacasterRefineState, setWaterManacasterRefineState] = useLocalStorage("waterManacasterRefineState", 0);

    const [mubWaAMSilverMaskCount, setmubWaAMSilverMaskCountState] = useLocalStorage("mubWaAMSilverMaskCount", 516);
    const [mubWaAMGoldMaskCount, setmubWaAMGoldMaskCountState] = useLocalStorage("mubWaAMASGoldMaskCount", 410);
    const [mubWaAMInsanityCount, setmubWaAMInsanityCountState] = useLocalStorage("mubWaAMInsanityCount", 89);
    const [mubWaAMGaleCount, setmubWaAMGaleCountState] = useLocalStorage("mubWaAMGaleCount", 30);
    const [mubWaAMSandCount, setmubWaAMSandCountState] = useLocalStorage("mubWaAMSandCount", 5);
    const [mubWaAMOriCount, setmubWaAMOriCountState] = useLocalStorage("mubWaAMOriCount", 66);
    const [mubWaAMRupeeCost, setmubWaAMRupeeCost] = useLocalStorage("mubWaAMRupeeCost", 59.5);

    const [wbWaAMSilverMaskCount, setwbWaAMSilverMaskCountState] = useLocalStorage("wbWaAMSilverMaskCount", 332);
    const [wbWaAMGoldMaskCount, setwbWaAMGoldMaskCountState] = useLocalStorage("wbWaAMGoldMaskCount", 270);
    const [wbWaAMInsanityCount, setwbWaAMInsanityCountState] = useLocalStorage("wbWaAMInsanityCount", 28);
    const [wbWaAMSandCount, setwbWaAMSandCountState] = useLocalStorage("wbWaAMSandCount", 5);
    const [wbWaAMOriCount, setwbWaAMOriCountState] = useLocalStorage("wbWaAMOriCount", 32);
    const [wbWaAMRupeeCost, setwbWaAMRupeeCost] = useLocalStorage("wbWaAMRupeeCost", 30);

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

    function waterWeaponSelection() {
        if (waterWeaponChoice == "sword") {
            return <WaterAgitoSwordCost mubWaASSilverMaskCount={mubWaASSilverMaskCount} mubWaASGoldMaskCount={mubWaASGoldMaskCount} mubWaASInsanityCount={mubWaASInsanityCount} mubWaASGaleCount={mubWaASGaleCount} mubWaASSandCount={mubWaASSandCount} mubWaASOriCount={mubWaASOriCount} mubWaASRupeeCost={mubWaASRupeeCost} wbWaASSilverMaskCount={wbWaASSilverMaskCount} wbWaASGoldMaskCount={wbWaASGoldMaskCount} wbWaASInsanityCount={wbWaASInsanityCount} wbWaASSandCount={wbWaASSandCount} wbWaASOriCount={wbWaASOriCount} wbWaASRupeeCost={wbWaASRupeeCost} />
        }
        if (waterWeaponChoice == "blade") {
            return <WaterAgitoBladeCost mubWaABlSilverMaskCount={mubWaABlSilverMaskCount} mubWaABlGoldMaskCount={mubWaABlGoldMaskCount} mubWaABlInsanityCount={mubWaABlInsanityCount} mubWaABlGaleCount={mubWaABlGaleCount} mubWaABlSandCount={mubWaABlSandCount} mubWaABlOriCount={mubWaABlOriCount} mubWaABlRupeeCost={mubWaABlRupeeCost} wbWaABlSilverMaskCount={wbWaABlSilverMaskCount} wbWaABlGoldMaskCount={wbWaABlGoldMaskCount} wbWaABlInsanityCount={wbWaABlInsanityCount} wbWaABlSandCount={wbWaABlSandCount} wbWaABlOriCount={wbWaABlOriCount} wbWaABlRupeeCost={wbWaABlRupeeCost} />
        }
        if (waterWeaponChoice == "dagger") {
            return <WaterAgitoDaggerCost mubWaADSilverMaskCount={mubWaADSilverMaskCount} mubWaADGoldMaskCount={mubWaADGoldMaskCount} mubWaADInsanityCount={mubWaADInsanityCount} mubWaADGaleCount={mubWaADGaleCount} mubWaADSandCount={mubWaADSandCount} mubWaADOriCount={mubWaADOriCount} mubWaADRupeeCost={mubWaADRupeeCost} wbWaADSilverMaskCount={wbWaADSilverMaskCount} wbWaADGoldMaskCount={wbWaADGoldMaskCount} wbWaADInsanityCount={wbWaADInsanityCount} wbWaADSandCount={wbWaADSandCount} wbWaADOriCount={wbWaADOriCount} wbWaADRupeeCost={wbWaADRupeeCost} />
        }
        if (waterWeaponChoice == "axe") {
            return <WaterAgitoAxeCost mubWaAASilverMaskCount={mubWaAASilverMaskCount} mubWaAAGoldMaskCount={mubWaAAGoldMaskCount} mubWaAAInsanityCount={mubWaAAInsanityCount} mubWaAAGaleCount={mubWaAAGaleCount} mubWaAASandCount={mubWaAASandCount} mubWaAAOriCount={mubWaAAOriCount} mubWaAARupeeCost={mubWaAARupeeCost} wbWaAASilverMaskCount={wbWaAASilverMaskCount} wbWaAAGoldMaskCount={wbWaAAGoldMaskCount} wbWaAAInsanityCount={wbWaAAInsanityCount} wbWaAASandCount={wbWaAASandCount} wbWaAAOriCount={wbWaAAOriCount} wbWaAARupeeCost={wbWaAARupeeCost} />
        }
        if (waterWeaponChoice == "lance") {
            return <WaterAgitoLanceCost mubWaALSilverMaskCount={mubWaALSilverMaskCount} mubWaALGoldMaskCount={mubWaALGoldMaskCount} mubWaALInsanityCount={mubWaALInsanityCount} mubWaALGaleCount={mubWaALGaleCount} mubWaALSandCount={mubWaALSandCount} mubWaALOriCount={mubWaALOriCount} mubWaALRupeeCost={mubWaALRupeeCost} wbWaALSilverMaskCount={wbWaALSilverMaskCount} wbWaALGoldMaskCount={wbWaALGoldMaskCount} wbWaALInsanityCount={wbWaALInsanityCount} wbWaALSandCount={wbWaALSandCount} wbWaALOriCount={wbWaALOriCount} wbWaALRupeeCost={wbWaALRupeeCost} />
        }
        if (waterWeaponChoice == "bow") {
            return <WaterAgitoBowCost mubWaABoSilverMaskCount={mubWaABoSilverMaskCount} mubWaABoGoldMaskCount={mubWaABoGoldMaskCount} mubWaABoInsanityCount={mubWaABoInsanityCount} mubWaABoGaleCount={mubWaABoGaleCount} mubWaABoSandCount={mubWaABoSandCount} mubWaABoOriCount={mubWaABoOriCount} mubWaABoRupeeCost={mubWaABoRupeeCost} wbWaABoSilverMaskCount={wbWaABoSilverMaskCount} wbWaABoGoldMaskCount={wbWaABoGoldMaskCount} wbWaABoInsanityCount={wbWaABoInsanityCount} wbWaABoSandCount={wbWaABoSandCount} wbWaABoOriCount={wbWaABoOriCount} wbWaABoRupeeCost={wbWaABoRupeeCost} />
        }
        if (waterWeaponChoice == "wand") {
            return <WaterAgitoWandCost mubWaAWSilverMaskCount={mubWaAWSilverMaskCount} mubWaAWGoldMaskCount={mubWaAWGoldMaskCount} mubWaAWInsanityCount={mubWaAWInsanityCount} mubWaAWGaleCount={mubWaAWGaleCount} mubWaAWSandCount={mubWaAWSandCount} mubWaAWOriCount={mubWaAWOriCount} mubWaAWRupeeCost={mubWaAWRupeeCost} wbWaAWSilverMaskCount={wbWaAWSilverMaskCount} wbWaAWGoldMaskCount={wbWaAWGoldMaskCount} wbWaAWInsanityCount={wbWaAWInsanityCount} wbWaAWSandCount={wbWaAWSandCount} wbWaAWOriCount={wbWaAWOriCount} wbWaAWRupeeCost={wbWaAWRupeeCost} />
        }
        if (waterWeaponChoice == "staff") {
            return <WaterAgitoStaffCost mubWaAStSilverMaskCount={mubWaAStSilverMaskCount} mubWaAStGoldMaskCount={mubWaAStGoldMaskCount} mubWaAStInsanityCount={mubWaAStInsanityCount} mubWaAStGaleCount={mubWaAStGaleCount} mubWaAStSandCount={mubWaAStSandCount} mubWaAStOriCount={mubWaAStOriCount} mubWaAStRupeeCost={mubWaAStRupeeCost} wbWaAStSilverMaskCount={wbWaAStSilverMaskCount} wbWaAStGoldMaskCount={wbWaAStGoldMaskCount} wbWaAStInsanityCount={wbWaAStInsanityCount} wbWaAStSandCount={wbWaAStSandCount} wbWaAStOriCount={wbWaAStOriCount} wbWaAStRupeeCost={wbWaAStRupeeCost} />
        }
        if (waterWeaponChoice == "manacaster") {
            return <WaterAgitoManacasterCost mubWaAMSilverMaskCount={mubWaAMSilverMaskCount} mubWaAMGoldMaskCount={mubWaAMGoldMaskCount} mubWaAMInsanityCount={mubWaAMInsanityCount} mubWaAMGaleCount={mubWaAMGaleCount} mubWaAMSandCount={mubWaAMSandCount} mubWaAMOriCount={mubWaAMOriCount} mubWaAMRupeeCost={mubWaAMRupeeCost} wbWaAMSilverMaskCount={wbWaAMSilverMaskCount} wbWaAMGoldMaskCount={wbWaAMGoldMaskCount} wbWaAMInsanityCount={wbWaAMInsanityCount} wbWaAMSandCount={wbWaAMSandCount} wbWaAMOriCount={wbWaAMOriCount} wbWaAMRupeeCost={wbWaAMRupeeCost} />
        }
    }

    function craftWaterSword() {
        if (waterSwordCraftState == "grayscale(100%)") {
            setWaterSwordCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("sword")
            setmubWaASSilverMaskCountState(mubWaASSilverMaskCount - 40)
            setwbWaASSilverMaskCountState(wbWaASSilverMaskCount - 40)
            setmubWaASGoldMaskCountState(mubWaASGoldMaskCount - 30)
            setwbWaASGoldMaskCountState(wbWaASGoldMaskCount - 30)
            setmubWaASSandCountState(mubWaASSandCount - 1)
            setwbWaASSandCountState(wbWaASSandCount - 1)
            setmubWaASRupeeCost(mubWaASRupeeCost - 2)
            setwbWaASRupeeCost(wbWaASRupeeCost - 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
            setallmubWaASandCount(allmubWaASandCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2)
        }
        else if (waterSwordCraftState == "grayscale(0%)") {
            setWaterSwordCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("sword")
            setmubWaASSilverMaskCountState(mubWaASSilverMaskCount + 40)
            setwbWaASSilverMaskCountState(wbWaASSilverMaskCount + 40)
            setmubWaASGoldMaskCountState(mubWaASGoldMaskCount + 30)
            setwbWaASGoldMaskCountState(wbWaASGoldMaskCount + 30)
            setmubWaASSandCountState(mubWaASSandCount + 1)
            setwbWaASSandCountState(wbWaASSandCount + 1)
            setmubWaASRupeeCost(mubWaASRupeeCost + 2)
            setwbWaASRupeeCost(wbWaASRupeeCost + 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
            setallmubWaASandCount(allmubWaASandCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2)
        }
    }

    function waterSwordWeaponBonus() {
        if (waterSwordWeaponBonusState == "grayscale(100%)") {
            setWaterSwordWeaponBonusState("grayscale(0%)");
            setWaterWeaponChoiceState("sword");
            setmubWaASSilverMaskCountState(mubWaASSilverMaskCount - 100)
            setwbWaASSilverMaskCountState(wbWaASSilverMaskCount - 100)
            setmubWaASGoldMaskCountState(mubWaASGoldMaskCount - 100)
            setwbWaASGoldMaskCountState(wbWaASGoldMaskCount - 100)
            setmubWaASInsanityCountState(mubWaASInsanityCount - 14)
            setwbWaASInsanityCountState(wbWaASInsanityCount - 14)
            setmubWaASOriCountState(mubWaASOriCount - 30)
            setwbWaASOriCountState(wbWaASOriCount - 30)
            setmubWaASRupeeCost(mubWaASRupeeCost - 10)
            setwbWaASRupeeCost(wbWaASRupeeCost - 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount - 14)
            setallmubWaAOriCount(allmubWaAOriCount - 30)
            setallmubWaARupeeCost(allmubWaARupeeCost - 10)
        }
        else if (waterSwordWeaponBonusState == "grayscale(0%)") {
            setWaterSwordWeaponBonusState("grayscale(100%)");
            setWaterWeaponChoiceState("sword");
            setmubWaASSilverMaskCountState(mubWaASSilverMaskCount + 100)
            setwbWaASSilverMaskCountState(wbWaASSilverMaskCount + 100)
            setmubWaASGoldMaskCountState(mubWaASGoldMaskCount + 100)
            setwbWaASGoldMaskCountState(wbWaASGoldMaskCount + 100)
            setmubWaASInsanityCountState(mubWaASInsanityCount + 14)
            setwbWaASInsanityCountState(wbWaASInsanityCount + 14)
            setmubWaASOriCountState(mubWaASOriCount + 30)
            setwbWaASOriCountState(wbWaASOriCount + 30)
            setmubWaASRupeeCost(mubWaASRupeeCost + 10)
            setwbWaASRupeeCost(wbWaASRupeeCost + 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount + 14)
            setallmubWaAOriCount(allmubWaAOriCount + 30)
            setallmubWaARupeeCost(allmubWaARupeeCost + 10)
        }
    }

    function waterSwordWyrmprintSlot() {
        if (waterSwordWyrmprintSlotState == "grayscale(100%)") {
            setWaterSwordWyrmprintSlotState("grayscale(0%)");
            setWaterWeaponChoiceState("sword");
            setmubWaASSilverMaskCountState(mubWaASSilverMaskCount - 16)
            setmubWaASGoldMaskCountState(mubWaASGoldMaskCount - 10)
            setmubWaASOriCountState(mubWaASOriCount - 1)
            setmubWaASRupeeCost(mubWaASRupeeCost - 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
            setallmubWaAOriCount(allmubWaAOriCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
        }
        else if (waterSwordWyrmprintSlotState == "grayscale(0%)") {
            setWaterSwordWyrmprintSlotState("grayscale(100%)");
            setWaterWeaponChoiceState("sword");
            setmubWaASSilverMaskCountState(mubWaASSilverMaskCount + 16)
            setmubWaASGoldMaskCountState(mubWaASGoldMaskCount + 10)
            setmubWaASOriCountState(mubWaASOriCount + 1)
            setmubWaASRupeeCost(mubWaASRupeeCost + 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
            setallmubWaAOriCount(allmubWaAOriCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
        }
    }

    function handleWaterSwordUnbindIncrement(event) {
        setWaterWeaponChoiceState("sword");
        if (waterSwordUnbindState < event.target.value) {
            if (event.target.value - waterSwordUnbindState == 1) {
                setWaterSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWaASSilverMaskCountState(mubWaASSilverMaskCount - 40)
                    setwbWaASSilverMaskCountState(wbWaASSilverMaskCount - 40)
                    setmubWaASGoldMaskCountState(mubWaASGoldMaskCount - 30)
                    setwbWaASGoldMaskCountState(wbWaASGoldMaskCount - 30)
                    setmubWaASSandCountState(mubWaASSandCount - 1)
                    setwbWaASSandCountState(wbWaASSandCount - 1)
                    setmubWaASRupeeCost(mubWaASRupeeCost - 2)
                    setwbWaASRupeeCost(wbWaASRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaASandCount(allmubWaASandCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWaASSilverMaskCountState(mubWaASSilverMaskCount - 16)
                    setwbWaASSilverMaskCountState(wbWaASSilverMaskCount - 16)
                    setmubWaASGoldMaskCountState(mubWaASGoldMaskCount - 10)
                    setwbWaASGoldMaskCountState(wbWaASGoldMaskCount - 10)
                    setmubWaASInsanityCountState(mubWaASInsanityCount - 7)
                    setwbWaASInsanityCountState(wbWaASInsanityCount - 7)
                    setmubWaASOriCountState(mubWaASOriCount - 1)
                    setwbWaASOriCountState(wbWaASOriCount - 1)
                    setmubWaASRupeeCost(mubWaASRupeeCost - 7.5)
                    setwbWaASRupeeCost(wbWaASRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWaASSilverMaskCountState(mubWaASSilverMaskCount - 16)
                    setmubWaASGoldMaskCountState(mubWaASGoldMaskCount - 10)
                    setmubWaASInsanityCountState(mubWaASInsanityCount - 7)
                    setmubWaASOriCountState(mubWaASOriCount - 1)
                    setmubWaASRupeeCost(mubWaASRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWaASSilverMaskCountState(mubWaASSilverMaskCount - 80)
                    setmubWaASGoldMaskCountState(mubWaASGoldMaskCount - 70)
                    setmubWaASInsanityCountState(mubWaASInsanityCount - 30)
                    setmubWaASGaleCountState(mubWaASGaleCount - 20)
                    setmubWaASOriCountState(mubWaASOriCount - 20)
                    setmubWaASRupeeCost(mubWaASRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 20)
                    setallmubWaAOriCount(allmubWaAOriCount - 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
            }
        }
        else if (waterSwordUnbindState > event.target.value) {
            if (waterSwordUnbindState - event.target.value == 1) {
                setWaterSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWaASSilverMaskCountState(mubWaASSilverMaskCount + 40)
                    setwbWaASSilverMaskCountState(wbWaASSilverMaskCount + 40)
                    setmubWaASGoldMaskCountState(mubWaASGoldMaskCount + 30)
                    setwbWaASGoldMaskCountState(wbWaASGoldMaskCount + 30)
                    setmubWaASSandCountState(mubWaASSandCount + 1)
                    setwbWaASSandCountState(wbWaASSandCount + 1)
                    setmubWaASRupeeCost(mubWaASRupeeCost + 2)
                    setwbWaASRupeeCost(wbWaASRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaASandCount(allmubWaASandCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWaASSilverMaskCountState(mubWaASSilverMaskCount + 16)
                    setwbWaASSilverMaskCountState(wbWaASSilverMaskCount + 16)
                    setmubWaASGoldMaskCountState(mubWaASGoldMaskCount + 10)
                    setwbWaASGoldMaskCountState(wbWaASGoldMaskCount + 10)
                    setmubWaASInsanityCountState(mubWaASInsanityCount + 7)
                    setwbWaASInsanityCountState(wbWaASInsanityCount + 7)
                    setmubWaASOriCountState(mubWaASOriCount + 1)
                    setwbWaASOriCountState(wbWaASOriCount + 1)
                    setmubWaASRupeeCost(mubWaASRupeeCost + 7.5)
                    setwbWaASRupeeCost(wbWaASRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWaASSilverMaskCountState(mubWaASSilverMaskCount + 16)
                    setmubWaASGoldMaskCountState(mubWaASGoldMaskCount + 10)
                    setmubWaASInsanityCountState(mubWaASInsanityCount + 7)
                    setmubWaASOriCountState(mubWaASOriCount + 1)
                    setmubWaASRupeeCost(mubWaASRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWaASSilverMaskCountState(mubWaASSilverMaskCount + 80)
                    setmubWaASGoldMaskCountState(mubWaASGoldMaskCount + 70)
                    setmubWaASInsanityCountState(mubWaASInsanityCount + 30)
                    setmubWaASGaleCountState(mubWaASGaleCount + 20)
                    setmubWaASOriCountState(mubWaASOriCount + 20)
                    setmubWaASRupeeCost(mubWaASRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 20)
                    setallmubWaAOriCount(allmubWaAOriCount + 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
            }
        }
    }

    function handleWaterSwordRefineIncrement(event) {
        setWaterWeaponChoiceState("sword");
        if (waterSwordRefineState < event.target.value) {
            if (event.target.value - waterSwordRefineState == 1) {
                setWaterSwordRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWaASSilverMaskCountState(mubWaASSilverMaskCount - 16);
                    setwbWaASSilverMaskCountState(wbWaASSilverMaskCount - 16);
                    setmubWaASGoldMaskCountState(mubWaASGoldMaskCount - 10);
                    setwbWaASGoldMaskCountState(wbWaASGoldMaskCount - 10);
                    setmubWaASInsanityCountState(mubWaASInsanityCount - 7);
                    setwbWaASInsanityCountState(wbWaASInsanityCount - 7);
                    setmubWaASOriCountState(mubWaASOriCount - 1);
                    setwbWaASOriCountState(wbWaASOriCount - 1);
                    setmubWaASRupeeCost(mubWaASRupeeCost - 2.5);
                    setwbWaASRupeeCost(wbWaASRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubWaASSilverMaskCountState(mubWaASSilverMaskCount - 40)
                    setmubWaASGoldMaskCountState(mubWaASGoldMaskCount - 30);
                    setmubWaASInsanityCountState(mubWaASInsanityCount - 10);
                    setmubWaASGaleCountState(mubWaASGaleCount - 10);
                    setmubWaASOriCountState(mubWaASOriCount - 10);
                    setmubWaASRupeeCost(mubWaASRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 10)
                    setallmubWaAOriCount(allmubWaAOriCount - 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
            }
        }
        else if (waterSwordRefineState > event.target.value) {
            if (waterSwordRefineState - event.target.value == 1) {
                setWaterSwordRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWaASSilverMaskCountState(mubWaASSilverMaskCount + 16);
                    setwbWaASSilverMaskCountState(wbWaASSilverMaskCount + 16);
                    setmubWaASGoldMaskCountState(mubWaASGoldMaskCount + 10);
                    setwbWaASGoldMaskCountState(wbWaASGoldMaskCount + 10);
                    setmubWaASInsanityCountState(mubWaASInsanityCount + 7);
                    setwbWaASInsanityCountState(wbWaASInsanityCount + 7);
                    setmubWaASOriCountState(mubWaASOriCount + 1);
                    setwbWaASOriCountState(wbWaASOriCount + 1);
                    setmubWaASRupeeCost(mubWaASRupeeCost + 2.5);
                    setwbWaASRupeeCost(wbWaASRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubWaASSilverMaskCountState(mubWaASSilverMaskCount + 40)
                    setmubWaASGoldMaskCountState(mubWaASGoldMaskCount + 30);
                    setmubWaASInsanityCountState(mubWaASInsanityCount + 10);
                    setmubWaASGaleCountState(mubWaASGaleCount + 10);
                    setmubWaASOriCountState(mubWaASOriCount + 10);
                    setmubWaASRupeeCost(mubWaASRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 10)
                    setallmubWaAOriCount(allmubWaAOriCount + 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
            }
        }
    }

    function craftWaterBlade() {
        if (waterBladeCraftState == "grayscale(100%)") {
            setWaterBladeCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("blade")
            setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount - 40)
            setwbWaABlSilverMaskCountState(wbWaABlSilverMaskCount - 40)
            setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount - 30)
            setwbWaABlGoldMaskCountState(wbWaABlGoldMaskCount - 30)
            setmubWaABlSandCountState(mubWaABlSandCount - 1)
            setwbWaABlSandCountState(wbWaABlSandCount - 1)
            setmubWaABlRupeeCost(mubWaABlRupeeCost - 2)
            setwbWaABlRupeeCost(wbWaABlRupeeCost - 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
            setallmubWaASandCount(allmubWaASandCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2)
        }
        else if (waterBladeCraftState == "grayscale(0%)") {
            setWaterBladeCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("blade")
            setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount + 40)
            setwbWaABlSilverMaskCountState(wbWaABlSilverMaskCount + 40)
            setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount + 30)
            setwbWaABlGoldMaskCountState(wbWaABlGoldMaskCount + 30)
            setmubWaABlSandCountState(mubWaABlSandCount + 1)
            setwbWaABlSandCountState(wbWaABlSandCount + 1)
            setmubWaABlRupeeCost(mubWaABlRupeeCost + 2)
            setwbWaABlRupeeCost(wbWaABlRupeeCost + 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
            setallmubWaASandCount(allmubWaASandCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2)
        }
    }

    function waterBladeWeaponBonus() {
        if (waterBladeWeaponBonusState == "grayscale(100%)") {
            setWaterBladeWeaponBonusState("grayscale(0%)");
            setWaterWeaponChoiceState("blade");
            setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount - 100)
            setwbWaABlSilverMaskCountState(wbWaABlSilverMaskCount - 100)
            setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount - 100)
            setwbWaABlGoldMaskCountState(wbWaABlGoldMaskCount - 100)
            setmubWaABlInsanityCountState(mubWaABlInsanityCount - 14)
            setwbWaABlInsanityCountState(wbWaABlInsanityCount - 14)
            setmubWaABlOriCountState(mubWaABlOriCount - 30)
            setwbWaABlOriCountState(wbWaABlOriCount - 30)
            setmubWaABlRupeeCost(mubWaABlRupeeCost - 10)
            setwbWaABlRupeeCost(wbWaABlRupeeCost - 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount - 14)
            setallmubWaAOriCount(allmubWaAOriCount - 30)
            setallmubWaARupeeCost(allmubWaARupeeCost - 10)
        }
        else if (waterBladeWeaponBonusState == "grayscale(0%)") {
            setWaterBladeWeaponBonusState("grayscale(100%)");
            setWaterWeaponChoiceState("blade");
            setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount + 100)
            setwbWaABlSilverMaskCountState(wbWaABlSilverMaskCount + 100)
            setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount + 100)
            setwbWaABlGoldMaskCountState(wbWaABlGoldMaskCount + 100)
            setmubWaABlInsanityCountState(mubWaABlInsanityCount + 14)
            setwbWaABlInsanityCountState(wbWaABlInsanityCount + 14)
            setmubWaABlOriCountState(mubWaABlOriCount + 30)
            setwbWaABlOriCountState(wbWaABlOriCount + 30)
            setmubWaABlRupeeCost(mubWaABlRupeeCost + 10)
            setwbWaABlRupeeCost(wbWaABlRupeeCost + 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount + 14)
            setallmubWaAOriCount(allmubWaAOriCount + 30)
            setallmubWaARupeeCost(allmubWaARupeeCost + 10)
        }
    }

    function waterBladeWyrmprintSlot() {
        if (waterBladeWyrmprintSlotState == "grayscale(100%)") {
            setWaterBladeWyrmprintSlotState("grayscale(0%)");
            setWaterWeaponChoiceState("blade");
            setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount - 16)
            setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount - 10)
            setmubWaABlOriCountState(mubWaABlOriCount - 1)
            setmubWaABlRupeeCost(mubWaABlRupeeCost - 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
            setallmubWaAOriCount(allmubWaAOriCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
        }
        else if (waterBladeWyrmprintSlotState == "grayscale(0%)") {
            setWaterBladeWyrmprintSlotState("grayscale(100%)");
            setWaterWeaponChoiceState("blade");
            setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount + 16)
            setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount + 10)
            setmubWaABlOriCountState(mubWaABlOriCount + 1)
            setmubWaABlRupeeCost(mubWaABlRupeeCost + 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
            setallmubWaAOriCount(allmubWaAOriCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
        }
    }

    function handleWaterBladeUnbindIncrement(event) {
        setWaterWeaponChoiceState("blade")
        if (waterBladeUnbindState < event.target.value) {
            if (event.target.value - waterBladeUnbindState == 1) {
                setWaterBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount - 40)
                    setwbWaABlSilverMaskCountState(wbWaABlSilverMaskCount - 40)
                    setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount - 30)
                    setwbWaABlGoldMaskCountState(wbWaABlGoldMaskCount - 30)
                    setmubWaABlSandCountState(mubWaABlSandCount - 1)
                    setwbWaABlSandCountState(wbWaABlSandCount - 1)
                    setmubWaABlRupeeCost(mubWaABlRupeeCost - 2)
                    setwbWaABlRupeeCost(wbWaABlRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaASandCount(allmubWaASandCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount - 16)
                    setwbWaABlSilverMaskCountState(wbWaABlSilverMaskCount - 16)
                    setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount - 10)
                    setwbWaABlGoldMaskCountState(wbWaABlGoldMaskCount - 10)
                    setmubWaABlInsanityCountState(mubWaABlInsanityCount - 7)
                    setwbWaABlInsanityCountState(wbWaABlInsanityCount - 7)
                    setmubWaABlOriCountState(mubWaABlOriCount - 1)
                    setwbWaABlOriCountState(wbWaABlOriCount - 1)
                    setmubWaABlRupeeCost(mubWaABlRupeeCost - 7.5)
                    setwbWaABlRupeeCost(wbWaABlRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount - 16)
                    setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount - 10)
                    setmubWaABlInsanityCountState(mubWaABlInsanityCount - 7)
                    setmubWaABlOriCountState(mubWaABlOriCount - 1)
                    setmubWaABlRupeeCost(mubWaABlRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount - 80)
                    setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount - 70)
                    setmubWaABlInsanityCountState(mubWaABlInsanityCount - 30)
                    setmubWaABlGaleCountState(mubWaABlGaleCount - 20)
                    setmubWaABlOriCountState(mubWaABlOriCount - 20)
                    setmubWaABlRupeeCost(mubWaABlRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 20)
                    setallmubWaAOriCount(allmubWaAOriCount - 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
            }
        }
        else if (waterBladeUnbindState > event.target.value) {
            if (waterBladeUnbindState - event.target.value == 1) {
                setWaterBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount + 40)
                    setwbWaABlSilverMaskCountState(wbWaABlSilverMaskCount + 40)
                    setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount + 30)
                    setwbWaABlGoldMaskCountState(wbWaABlGoldMaskCount + 30)
                    setmubWaABlSandCountState(mubWaABlSandCount + 1)
                    setwbWaABlSandCountState(wbWaABlSandCount + 1)
                    setmubWaABlRupeeCost(mubWaABlRupeeCost + 2)
                    setwbWaABlRupeeCost(wbWaABlRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaASandCount(allmubWaASandCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount + 16)
                    setwbWaABlSilverMaskCountState(wbWaABlSilverMaskCount + 16)
                    setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount + 10)
                    setwbWaABlGoldMaskCountState(wbWaABlGoldMaskCount + 10)
                    setmubWaABlInsanityCountState(mubWaABlInsanityCount + 7)
                    setwbWaABlInsanityCountState(wbWaABlInsanityCount + 7)
                    setmubWaABlOriCountState(mubWaABlOriCount + 1)
                    setwbWaABlOriCountState(wbWaABlOriCount + 1)
                    setmubWaABlRupeeCost(mubWaABlRupeeCost + 7.5)
                    setwbWaABlRupeeCost(wbWaABlRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount + 16)
                    setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount + 10)
                    setmubWaABlInsanityCountState(mubWaABlInsanityCount + 7)
                    setmubWaABlOriCountState(mubWaABlOriCount + 1)
                    setmubWaABlRupeeCost(mubWaABlRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount + 80)
                    setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount + 70)
                    setmubWaABlInsanityCountState(mubWaABlInsanityCount + 30)
                    setmubWaABlGaleCountState(mubWaABlGaleCount + 20)
                    setmubWaABlOriCountState(mubWaABlOriCount + 20)
                    setmubWaABlRupeeCost(mubWaABlRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 20)
                    setallmubWaAOriCount(allmubWaAOriCount + 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
            }
        }
    }

    function handleWaterBladeRefineIncrement(event) {
        setWaterWeaponChoiceState("blade");
        if (waterBladeRefineState < event.target.value) {
            if (event.target.value - waterBladeRefineState == 1) {
                setWaterBladeRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount - 16);
                    setwbWaABlSilverMaskCountState(wbWaABlSilverMaskCount - 16);
                    setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount - 10);
                    setwbWaABlGoldMaskCountState(wbWaABlGoldMaskCount - 10);
                    setmubWaABlInsanityCountState(mubWaABlInsanityCount - 7);
                    setwbWaABlInsanityCountState(wbWaABlInsanityCount - 7);
                    setmubWaABlOriCountState(mubWaABlOriCount - 1);
                    setwbWaABlOriCountState(wbWaABlOriCount - 1);
                    setmubWaABlRupeeCost(mubWaABlRupeeCost - 2.5);
                    setwbWaABlRupeeCost(wbWaABlRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount - 40)
                    setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount - 30);
                    setmubWaABlInsanityCountState(mubWaABlInsanityCount - 10);
                    setmubWaABlGaleCountState(mubWaABlGaleCount - 10);
                    setmubWaABlOriCountState(mubWaABlOriCount - 10);
                    setmubWaABlRupeeCost(mubWaABlRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 10)
                    setallmubWaAOriCount(allmubWaAOriCount - 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
            }
        }
        else if (waterBladeRefineState > event.target.value) {
            if (waterBladeRefineState - event.target.value == 1) {
                setWaterBladeRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount + 16);
                    setwbWaABlSilverMaskCountState(wbWaABlSilverMaskCount + 16);
                    setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount + 10);
                    setwbWaABlGoldMaskCountState(wbWaABlGoldMaskCount + 10);
                    setmubWaABlInsanityCountState(mubWaABlInsanityCount + 7);
                    setwbWaABlInsanityCountState(wbWaABlInsanityCount + 7);
                    setmubWaABlOriCountState(mubWaABlOriCount + 1);
                    setwbWaABlOriCountState(wbWaABlOriCount + 1);
                    setmubWaABlRupeeCost(mubWaABlRupeeCost + 2.5);
                    setwbWaABlRupeeCost(wbWaABlRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubWaABlSilverMaskCountState(mubWaABlSilverMaskCount + 40)
                    setmubWaABlGoldMaskCountState(mubWaABlGoldMaskCount + 30);
                    setmubWaABlInsanityCountState(mubWaABlInsanityCount + 10);
                    setmubWaABlGaleCountState(mubWaABlGaleCount + 10);
                    setmubWaABlOriCountState(mubWaABlOriCount + 10);
                    setmubWaABlRupeeCost(mubWaABlRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 10)
                    setallmubWaAOriCount(allmubWaAOriCount + 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
            }
        }
    }

    function craftWaterDagger() {
        if (waterDaggerCraftState == "grayscale(100%)") {
            setWaterDaggerCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("dagger")
            setmubWaADSilverMaskCountState(mubWaADSilverMaskCount - 40)
            setwbWaADSilverMaskCountState(wbWaADSilverMaskCount - 40)
            setmubWaADGoldMaskCountState(mubWaADGoldMaskCount - 30)
            setwbWaADGoldMaskCountState(wbWaADGoldMaskCount - 30)
            setmubWaADSandCountState(mubWaADSandCount - 1)
            setwbWaADSandCountState(wbWaADSandCount - 1)
            setmubWaADRupeeCost(mubWaADRupeeCost - 2)
            setwbWaADRupeeCost(wbWaADRupeeCost - 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
            setallmubWaASandCount(allmubWaASandCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2)
        }
        else if (waterDaggerCraftState == "grayscale(0%)") {
            setWaterDaggerCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("dagger")
            setmubWaADSilverMaskCountState(mubWaADSilverMaskCount + 40)
            setwbWaADSilverMaskCountState(wbWaADSilverMaskCount + 40)
            setmubWaADGoldMaskCountState(mubWaADGoldMaskCount + 30)
            setwbWaADGoldMaskCountState(wbWaADGoldMaskCount + 30)
            setmubWaADSandCountState(mubWaADSandCount + 1)
            setwbWaADSandCountState(wbWaADSandCount + 1)
            setmubWaADRupeeCost(mubWaADRupeeCost + 2)
            setwbWaADRupeeCost(wbWaADRupeeCost + 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
            setallmubWaASandCount(allmubWaASandCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2)
        }
    }

    function waterDaggerWeaponBonus() {
        if (waterDaggerWeaponBonusState == "grayscale(100%)") {
            setWaterDaggerWeaponBonusState("grayscale(0%)");
            setWaterWeaponChoiceState("dagger");
            setmubWaADSilverMaskCountState(mubWaADSilverMaskCount - 100)
            setwbWaADSilverMaskCountState(wbWaADSilverMaskCount - 100)
            setmubWaADGoldMaskCountState(mubWaADGoldMaskCount - 100)
            setwbWaADGoldMaskCountState(wbWaADGoldMaskCount - 100)
            setmubWaADInsanityCountState(mubWaADInsanityCount - 14)
            setwbWaADInsanityCountState(wbWaADInsanityCount - 14)
            setmubWaADOriCountState(mubWaADOriCount - 30)
            setwbWaADOriCountState(wbWaADOriCount - 30)
            setmubWaADRupeeCost(mubWaADRupeeCost - 10)
            setwbWaADRupeeCost(wbWaADRupeeCost - 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount - 14)
            setallmubWaAOriCount(allmubWaAOriCount - 30)
            setallmubWaARupeeCost(allmubWaARupeeCost - 10)
        }
        else if (waterDaggerWeaponBonusState == "grayscale(0%)") {
            setWaterDaggerWeaponBonusState("grayscale(100%)");
            setWaterWeaponChoiceState("dagger");
            setmubWaADSilverMaskCountState(mubWaADSilverMaskCount + 100)
            setwbWaADSilverMaskCountState(wbWaADSilverMaskCount + 100)
            setmubWaADGoldMaskCountState(mubWaADGoldMaskCount + 100)
            setwbWaADGoldMaskCountState(wbWaADGoldMaskCount + 100)
            setmubWaADInsanityCountState(mubWaADInsanityCount + 14)
            setwbWaADInsanityCountState(wbWaADInsanityCount + 14)
            setmubWaADOriCountState(mubWaADOriCount + 30)
            setwbWaADOriCountState(wbWaADOriCount + 30)
            setmubWaADRupeeCost(mubWaADRupeeCost + 10)
            setwbWaADRupeeCost(wbWaADRupeeCost + 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount + 14)
            setallmubWaAOriCount(allmubWaAOriCount + 30)
            setallmubWaARupeeCost(allmubWaARupeeCost + 10)
        }
    }

    function waterDaggerWyrmprintSlot() {
        if (waterDaggerWyrmprintSlotState == "grayscale(100%)") {
            setWaterDaggerWyrmprintSlotState("grayscale(0%)");
            setWaterWeaponChoiceState("dagger");
            setmubWaADSilverMaskCountState(mubWaADSilverMaskCount - 16)
            setmubWaADGoldMaskCountState(mubWaADGoldMaskCount - 10)
            setmubWaADOriCountState(mubWaADOriCount - 1)
            setmubWaADRupeeCost(mubWaADRupeeCost - 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
            setallmubWaAOriCount(allmubWaAOriCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
        }
        else if (waterDaggerWyrmprintSlotState == "grayscale(0%)") {
            setWaterDaggerWyrmprintSlotState("grayscale(100%)");
            setWaterWeaponChoiceState("dagger");
            setmubWaADSilverMaskCountState(mubWaADSilverMaskCount + 16)
            setmubWaADGoldMaskCountState(mubWaADGoldMaskCount + 10)
            setmubWaADOriCountState(mubWaADOriCount + 1)
            setmubWaADRupeeCost(mubWaADRupeeCost + 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
            setallmubWaAOriCount(allmubWaAOriCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
        }
    }

    function handleWaterDaggerUnbindIncrement(event) {
        setWaterWeaponChoiceState("dagger")
        if (waterDaggerUnbindState < event.target.value) {
            if (event.target.value - waterDaggerUnbindState == 1) {
                setWaterDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWaADSilverMaskCountState(mubWaADSilverMaskCount - 40)
                    setwbWaADSilverMaskCountState(wbWaADSilverMaskCount - 40)
                    setmubWaADGoldMaskCountState(mubWaADGoldMaskCount - 30)
                    setwbWaADGoldMaskCountState(wbWaADGoldMaskCount - 30)
                    setmubWaADSandCountState(mubWaADSandCount - 1)
                    setwbWaADSandCountState(wbWaADSandCount - 1)
                    setmubWaADRupeeCost(mubWaADRupeeCost - 2)
                    setwbWaADRupeeCost(wbWaADRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaASandCount(allmubWaASandCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWaADSilverMaskCountState(mubWaADSilverMaskCount - 16)
                    setwbWaADSilverMaskCountState(wbWaADSilverMaskCount - 16)
                    setmubWaADGoldMaskCountState(mubWaADGoldMaskCount - 10)
                    setwbWaADGoldMaskCountState(wbWaADGoldMaskCount - 10)
                    setmubWaADInsanityCountState(mubWaADInsanityCount - 7)
                    setwbWaADInsanityCountState(wbWaADInsanityCount - 7)
                    setmubWaADOriCountState(mubWaADOriCount - 1)
                    setwbWaADOriCountState(wbWaADOriCount - 1)
                    setmubWaADRupeeCost(mubWaADRupeeCost - 7.5)
                    setwbWaADRupeeCost(wbWaADRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWaADSilverMaskCountState(mubWaADSilverMaskCount - 16)
                    setmubWaADGoldMaskCountState(mubWaADGoldMaskCount - 10)
                    setmubWaADInsanityCountState(mubWaADInsanityCount - 7)
                    setmubWaADOriCountState(mubWaADOriCount - 1)
                    setmubWaADRupeeCost(mubWaADRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWaADSilverMaskCountState(mubWaADSilverMaskCount - 80)
                    setmubWaADGoldMaskCountState(mubWaADGoldMaskCount - 70)
                    setmubWaADInsanityCountState(mubWaADInsanityCount - 30)
                    setmubWaADGaleCountState(mubWaADGaleCount - 20)
                    setmubWaADOriCountState(mubWaADOriCount - 20)
                    setmubWaADRupeeCost(mubWaADRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 20)
                    setallmubWaAOriCount(allmubWaAOriCount - 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
            }
        }
        else if (waterDaggerUnbindState > event.target.value) {
            if (waterDaggerUnbindState - event.target.value == 1) {
                setWaterDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWaADSilverMaskCountState(mubWaADSilverMaskCount + 40)
                    setwbWaADSilverMaskCountState(wbWaADSilverMaskCount + 40)
                    setmubWaADGoldMaskCountState(mubWaADGoldMaskCount + 30)
                    setwbWaADGoldMaskCountState(wbWaADGoldMaskCount + 30)
                    setmubWaADSandCountState(mubWaADSandCount + 1)
                    setwbWaADSandCountState(wbWaADSandCount + 1)
                    setmubWaADRupeeCost(mubWaADRupeeCost + 2)
                    setwbWaADRupeeCost(wbWaADRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaASandCount(allmubWaASandCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWaADSilverMaskCountState(mubWaADSilverMaskCount + 16)
                    setwbWaADSilverMaskCountState(wbWaADSilverMaskCount + 16)
                    setmubWaADGoldMaskCountState(mubWaADGoldMaskCount + 10)
                    setwbWaADGoldMaskCountState(wbWaADGoldMaskCount + 10)
                    setmubWaADInsanityCountState(mubWaADInsanityCount + 7)
                    setwbWaADInsanityCountState(wbWaADInsanityCount + 7)
                    setmubWaADOriCountState(mubWaADOriCount + 1)
                    setwbWaADOriCountState(wbWaADOriCount + 1)
                    setmubWaADRupeeCost(mubWaADRupeeCost + 7.5)
                    setwbWaADRupeeCost(wbWaADRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWaADSilverMaskCountState(mubWaADSilverMaskCount + 16)
                    setmubWaADGoldMaskCountState(mubWaADGoldMaskCount + 10)
                    setmubWaADInsanityCountState(mubWaADInsanityCount + 7)
                    setmubWaADOriCountState(mubWaADOriCount + 1)
                    setmubWaADRupeeCost(mubWaADRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWaADSilverMaskCountState(mubWaADSilverMaskCount + 80)
                    setmubWaADGoldMaskCountState(mubWaADGoldMaskCount + 70)
                    setmubWaADInsanityCountState(mubWaADInsanityCount + 30)
                    setmubWaADGaleCountState(mubWaADGaleCount + 20)
                    setmubWaADOriCountState(mubWaADOriCount + 20)
                    setmubWaADRupeeCost(mubWaADRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 20)
                    setallmubWaAOriCount(allmubWaAOriCount + 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
            }
        }
    }

    function handleWaterDaggerRefineIncrement(event) {
        setWaterWeaponChoiceState("dagger");
        if (waterDaggerRefineState < event.target.value) {
            if (event.target.value - waterDaggerRefineState == 1) {
                setWaterDaggerRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWaADSilverMaskCountState(mubWaADSilverMaskCount - 16);
                    setwbWaADSilverMaskCountState(wbWaADSilverMaskCount - 16);
                    setmubWaADGoldMaskCountState(mubWaADGoldMaskCount - 10);
                    setwbWaADGoldMaskCountState(wbWaADGoldMaskCount - 10);
                    setmubWaADInsanityCountState(mubWaADInsanityCount - 7);
                    setwbWaADInsanityCountState(wbWaADInsanityCount - 7);
                    setmubWaADOriCountState(mubWaADOriCount - 1);
                    setwbWaADOriCountState(wbWaADOriCount - 1);
                    setmubWaADRupeeCost(mubWaADRupeeCost - 2.5);
                    setwbWaADRupeeCost(wbWaADRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubWaADSilverMaskCountState(mubWaADSilverMaskCount - 40)
                    setmubWaADGoldMaskCountState(mubWaADGoldMaskCount - 30);
                    setmubWaADInsanityCountState(mubWaADInsanityCount - 10);
                    setmubWaADGaleCountState(mubWaADGaleCount - 10);
                    setmubWaADOriCountState(mubWaADOriCount - 10);
                    setmubWaADRupeeCost(mubWaADRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 10)
                    setallmubWaAOriCount(allmubWaAOriCount - 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
            }
        }
        else if (waterDaggerRefineState > event.target.value) {
            if (waterDaggerRefineState - event.target.value == 1) {
                setWaterDaggerRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWaADSilverMaskCountState(mubWaADSilverMaskCount + 16);
                    setwbWaADSilverMaskCountState(wbWaADSilverMaskCount + 16);
                    setmubWaADGoldMaskCountState(mubWaADGoldMaskCount + 10);
                    setwbWaADGoldMaskCountState(wbWaADGoldMaskCount + 10);
                    setmubWaADInsanityCountState(mubWaADInsanityCount + 7);
                    setwbWaADInsanityCountState(wbWaADInsanityCount + 7);
                    setmubWaADOriCountState(mubWaADOriCount + 1);
                    setwbWaADOriCountState(wbWaADOriCount + 1);
                    setmubWaADRupeeCost(mubWaADRupeeCost + 2.5);
                    setwbWaADRupeeCost(wbWaADRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubWaADSilverMaskCountState(mubWaADSilverMaskCount + 40)
                    setmubWaADGoldMaskCountState(mubWaADGoldMaskCount + 30);
                    setmubWaADInsanityCountState(mubWaADInsanityCount + 10);
                    setmubWaADGaleCountState(mubWaADGaleCount + 10);
                    setmubWaADOriCountState(mubWaADOriCount + 10);
                    setmubWaADRupeeCost(mubWaADRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 10)
                    setallmubWaAOriCount(allmubWaAOriCount + 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
            }
        }
    }

    function craftWaterAxe() {
        if (waterAxeCraftState == "grayscale(100%)") {
            setWaterAxeCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("axe")
            setmubWaAASilverMaskCountState(mubWaAASilverMaskCount - 40)
            setwbWaAASilverMaskCountState(wbWaAASilverMaskCount - 40)
            setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount - 30)
            setwbWaAAGoldMaskCountState(wbWaAAGoldMaskCount - 30)
            setmubWaAASandCountState(mubWaAASandCount - 1)
            setwbWaAASandCountState(wbWaAASandCount - 1)
            setmubWaAARupeeCost(mubWaAARupeeCost - 2)
            setwbWaAARupeeCost(wbWaAARupeeCost - 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
            setallmubWaASandCount(allmubWaASandCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2)
        }
        else if (waterAxeCraftState == "grayscale(0%)") {
            setWaterAxeCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("axe")
            setmubWaAASilverMaskCountState(mubWaAASilverMaskCount + 40)
            setwbWaAASilverMaskCountState(wbWaAASilverMaskCount + 40)
            setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount + 30)
            setwbWaAAGoldMaskCountState(wbWaAAGoldMaskCount + 30)
            setmubWaAASandCountState(mubWaAASandCount + 1)
            setwbWaAASandCountState(wbWaAASandCount + 1)
            setmubWaAARupeeCost(mubWaAARupeeCost + 2)
            setwbWaAARupeeCost(wbWaAARupeeCost + 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
            setallmubWaASandCount(allmubWaASandCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2)
        }
    }

    function waterAxeWeaponBonus() {
        if (waterAxeWeaponBonusState == "grayscale(100%)") {
            setWaterAxeWeaponBonusState("grayscale(0%)");
            setWaterWeaponChoiceState("axe");
            setmubWaAASilverMaskCountState(mubWaAASilverMaskCount - 100)
            setwbWaAASilverMaskCountState(wbWaAASilverMaskCount - 100)
            setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount - 100)
            setwbWaAAGoldMaskCountState(wbWaAAGoldMaskCount - 100)
            setmubWaAAInsanityCountState(mubWaAAInsanityCount - 14)
            setwbWaAAInsanityCountState(wbWaAAInsanityCount - 14)
            setmubWaAAOriCountState(mubWaAAOriCount - 30)
            setwbWaAAOriCountState(wbWaAAOriCount - 30)
            setmubWaAARupeeCost(mubWaAARupeeCost - 10)
            setwbWaAARupeeCost(wbWaAARupeeCost - 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount - 14)
            setallmubWaAOriCount(allmubWaAOriCount - 30)
            setallmubWaARupeeCost(allmubWaARupeeCost - 10)
        }
        else if (waterAxeWeaponBonusState == "grayscale(0%)") {
            setWaterAxeWeaponBonusState("grayscale(100%)");
            setWaterWeaponChoiceState("axe");
            setmubWaAASilverMaskCountState(mubWaAASilverMaskCount + 100)
            setwbWaAASilverMaskCountState(wbWaAASilverMaskCount + 100)
            setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount + 100)
            setwbWaAAGoldMaskCountState(wbWaAAGoldMaskCount + 100)
            setmubWaAAInsanityCountState(mubWaAAInsanityCount + 14)
            setwbWaAAInsanityCountState(wbWaAAInsanityCount + 14)
            setmubWaAAOriCountState(mubWaAAOriCount + 30)
            setwbWaAAOriCountState(wbWaAAOriCount + 30)
            setmubWaAARupeeCost(mubWaAARupeeCost + 10)
            setwbWaAARupeeCost(wbWaAARupeeCost + 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount + 14)
            setallmubWaAOriCount(allmubWaAOriCount + 30)
            setallmubWaARupeeCost(allmubWaARupeeCost + 10)
        }
    }

    function waterAxeWyrmprintSlot() {
        if (waterAxeWyrmprintSlotState == "grayscale(100%)") {
            setWaterAxeWyrmprintSlotState("grayscale(0%)");
            setWaterWeaponChoiceState("axe");
            setmubWaAASilverMaskCountState(mubWaAASilverMaskCount - 16)
            setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount - 10)
            setmubWaAAOriCountState(mubWaAAOriCount - 1)
            setmubWaAARupeeCost(mubWaAARupeeCost - 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
            setallmubWaAOriCount(allmubWaAOriCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
        }
        else if (waterAxeWyrmprintSlotState == "grayscale(0%)") {
            setWaterAxeWyrmprintSlotState("grayscale(100%)");
            setWaterWeaponChoiceState("axe");
            setmubWaAASilverMaskCountState(mubWaAASilverMaskCount + 16)
            setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount + 10)
            setmubWaAAOriCountState(mubWaAAOriCount + 1)
            setmubWaAARupeeCost(mubWaAARupeeCost + 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
            setallmubWaAOriCount(allmubWaAOriCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
        }
    }

    function handleWaterAxeUnbindIncrement(event) {
        setWaterWeaponChoiceState("axe")
        if (waterAxeUnbindState < event.target.value) {
            if (event.target.value - waterAxeUnbindState == 1) {
                setWaterAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWaAASilverMaskCountState(mubWaAASilverMaskCount - 40)
                    setwbWaAASilverMaskCountState(wbWaAASilverMaskCount - 40)
                    setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount - 30)
                    setwbWaAAGoldMaskCountState(wbWaAAGoldMaskCount - 30)
                    setmubWaAASandCountState(mubWaAASandCount - 1)
                    setwbWaAASandCountState(wbWaAASandCount - 1)
                    setmubWaAARupeeCost(mubWaAARupeeCost - 2)
                    setwbWaAARupeeCost(wbWaAARupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaASandCount(allmubWaASandCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWaAASilverMaskCountState(mubWaAASilverMaskCount - 16)
                    setwbWaAASilverMaskCountState(wbWaAASilverMaskCount - 16)
                    setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount - 10)
                    setwbWaAAGoldMaskCountState(wbWaAAGoldMaskCount - 10)
                    setmubWaAAInsanityCountState(mubWaAAInsanityCount - 7)
                    setwbWaAAInsanityCountState(wbWaAAInsanityCount - 7)
                    setmubWaAAOriCountState(mubWaAAOriCount - 1)
                    setwbWaAAOriCountState(wbWaAAOriCount - 1)
                    setmubWaAARupeeCost(mubWaAARupeeCost - 7.5)
                    setwbWaAARupeeCost(wbWaAARupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWaAASilverMaskCountState(mubWaAASilverMaskCount - 16)
                    setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount - 10)
                    setmubWaAAInsanityCountState(mubWaAAInsanityCount - 7)
                    setmubWaAAOriCountState(mubWaAAOriCount - 1)
                    setmubWaAARupeeCost(mubWaAARupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWaAASilverMaskCountState(mubWaAASilverMaskCount - 80)
                    setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount - 70)
                    setmubWaAAInsanityCountState(mubWaAAInsanityCount - 30)
                    setmubWaAAGaleCountState(mubWaAAGaleCount - 20)
                    setmubWaAAOriCountState(mubWaAAOriCount - 20)
                    setmubWaAARupeeCost(mubWaAARupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 20)
                    setallmubWaAOriCount(allmubWaAOriCount - 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
            }
        }
        else if (waterAxeUnbindState > event.target.value) {
            if (waterAxeUnbindState - event.target.value == 1) {
                setWaterAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWaAASilverMaskCountState(mubWaAASilverMaskCount + 40)
                    setwbWaAASilverMaskCountState(wbWaAASilverMaskCount + 40)
                    setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount + 30)
                    setwbWaAAGoldMaskCountState(wbWaAAGoldMaskCount + 30)
                    setmubWaAASandCountState(mubWaAASandCount + 1)
                    setwbWaAASandCountState(wbWaAASandCount + 1)
                    setmubWaAARupeeCost(mubWaAARupeeCost + 2)
                    setwbWaAARupeeCost(wbWaAARupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaASandCount(allmubWaASandCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWaAASilverMaskCountState(mubWaAASilverMaskCount + 16)
                    setwbWaAASilverMaskCountState(wbWaAASilverMaskCount + 16)
                    setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount + 10)
                    setwbWaAAGoldMaskCountState(wbWaAAGoldMaskCount + 10)
                    setmubWaAAInsanityCountState(mubWaAAInsanityCount + 7)
                    setwbWaAAInsanityCountState(wbWaAAInsanityCount + 7)
                    setmubWaAAOriCountState(mubWaAAOriCount + 1)
                    setwbWaAAOriCountState(wbWaAAOriCount + 1)
                    setmubWaAARupeeCost(mubWaAARupeeCost + 7.5)
                    setwbWaAARupeeCost(wbWaAARupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWaAASilverMaskCountState(mubWaAASilverMaskCount + 16)
                    setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount + 10)
                    setmubWaAAInsanityCountState(mubWaAAInsanityCount + 7)
                    setmubWaAAOriCountState(mubWaAAOriCount + 1)
                    setmubWaAARupeeCost(mubWaAARupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWaAASilverMaskCountState(mubWaAASilverMaskCount + 80)
                    setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount + 70)
                    setmubWaAAInsanityCountState(mubWaAAInsanityCount + 30)
                    setmubWaAAGaleCountState(mubWaAAGaleCount + 20)
                    setmubWaAAOriCountState(mubWaAAOriCount + 20)
                    setmubWaAARupeeCost(mubWaAARupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 20)
                    setallmubWaAOriCount(allmubWaAOriCount + 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
            }
        }
    }

    function handleWaterAxeRefineIncrement(event) {
        setWaterWeaponChoiceState("axe");
        if (waterAxeRefineState < event.target.value) {
            if (event.target.value - waterAxeRefineState == 1) {
                setWaterAxeRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWaAASilverMaskCountState(mubWaAASilverMaskCount - 16);
                    setwbWaAASilverMaskCountState(wbWaAASilverMaskCount - 16);
                    setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount - 10);
                    setwbWaAAGoldMaskCountState(wbWaAAGoldMaskCount - 10);
                    setmubWaAAInsanityCountState(mubWaAAInsanityCount - 7);
                    setwbWaAAInsanityCountState(wbWaAAInsanityCount - 7);
                    setmubWaAAOriCountState(mubWaAAOriCount - 1);
                    setwbWaAAOriCountState(wbWaAAOriCount - 1);
                    setmubWaAARupeeCost(mubWaAARupeeCost - 2.5);
                    setwbWaAARupeeCost(wbWaAARupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubWaAASilverMaskCountState(mubWaAASilverMaskCount - 40)
                    setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount - 30);
                    setmubWaAAInsanityCountState(mubWaAAInsanityCount - 10);
                    setmubWaAAGaleCountState(mubWaAAGaleCount - 10);
                    setmubWaAAOriCountState(mubWaAAOriCount - 10);
                    setmubWaAARupeeCost(mubWaAARupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 10)
                    setallmubWaAOriCount(allmubWaAOriCount - 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
            }
        }
        else if (waterAxeRefineState > event.target.value) {
            if (waterAxeRefineState - event.target.value == 1) {
                setWaterAxeRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWaAASilverMaskCountState(mubWaAASilverMaskCount + 16);
                    setwbWaAASilverMaskCountState(wbWaAASilverMaskCount + 16);
                    setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount + 10);
                    setwbWaAAGoldMaskCountState(wbWaAAGoldMaskCount + 10);
                    setmubWaAAInsanityCountState(mubWaAAInsanityCount + 7);
                    setwbWaAAInsanityCountState(wbWaAAInsanityCount + 7);
                    setmubWaAAOriCountState(mubWaAAOriCount + 1);
                    setwbWaAAOriCountState(wbWaAAOriCount + 1);
                    setmubWaAARupeeCost(mubWaAARupeeCost + 2.5);
                    setwbWaAARupeeCost(wbWaAARupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubWaAASilverMaskCountState(mubWaAASilverMaskCount + 40)
                    setmubWaAAGoldMaskCountState(mubWaAAGoldMaskCount + 30);
                    setmubWaAAInsanityCountState(mubWaAAInsanityCount + 10);
                    setmubWaAAGaleCountState(mubWaAAGaleCount + 10);
                    setmubWaAAOriCountState(mubWaAAOriCount + 10);
                    setmubWaAARupeeCost(mubWaAARupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 10)
                    setallmubWaAOriCount(allmubWaAOriCount + 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
            }
        }
    }

    function craftWaterLance() {
        if (waterLanceCraftState == "grayscale(100%)") {
            setWaterLanceCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("lance")
            setmubWaALSilverMaskCountState(mubWaALSilverMaskCount - 40)
            setwbWaALSilverMaskCountState(wbWaALSilverMaskCount - 40)
            setmubWaALGoldMaskCountState(mubWaALGoldMaskCount - 30)
            setwbWaALGoldMaskCountState(wbWaALGoldMaskCount - 30)
            setmubWaALSandCountState(mubWaALSandCount - 1)
            setwbWaALSandCountState(wbWaALSandCount - 1)
            setmubWaALRupeeCost(mubWaALRupeeCost - 2)
            setwbWaALRupeeCost(wbWaALRupeeCost - 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
            setallmubWaASandCount(allmubWaASandCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2)
        }
        else if (waterLanceCraftState == "grayscale(0%)") {
            setWaterLanceCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("lance")
            setmubWaALSilverMaskCountState(mubWaALSilverMaskCount + 40)
            setwbWaALSilverMaskCountState(wbWaALSilverMaskCount + 40)
            setmubWaALGoldMaskCountState(mubWaALGoldMaskCount + 30)
            setwbWaALGoldMaskCountState(wbWaALGoldMaskCount + 30)
            setmubWaALSandCountState(mubWaALSandCount + 1)
            setwbWaALSandCountState(wbWaALSandCount + 1)
            setmubWaALRupeeCost(mubWaALRupeeCost + 2)
            setwbWaALRupeeCost(wbWaALRupeeCost + 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
            setallmubWaASandCount(allmubWaASandCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2)
        }
    }

    function waterLanceWeaponBonus() {
        if (waterLanceWeaponBonusState == "grayscale(100%)") {
            setWaterLanceWeaponBonusState("grayscale(0%)");
            setWaterWeaponChoiceState("lance");
            setmubWaALSilverMaskCountState(mubWaALSilverMaskCount - 100)
            setwbWaALSilverMaskCountState(wbWaALSilverMaskCount - 100)
            setmubWaALGoldMaskCountState(mubWaALGoldMaskCount - 100)
            setwbWaALGoldMaskCountState(wbWaALGoldMaskCount - 100)
            setmubWaALInsanityCountState(mubWaALInsanityCount - 14)
            setwbWaALInsanityCountState(wbWaALInsanityCount - 14)
            setmubWaALOriCountState(mubWaALOriCount - 30)
            setwbWaALOriCountState(wbWaALOriCount - 30)
            setmubWaALRupeeCost(mubWaALRupeeCost - 10)
            setwbWaALRupeeCost(wbWaALRupeeCost - 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount - 14)
            setallmubWaAOriCount(allmubWaAOriCount - 30)
            setallmubWaARupeeCost(allmubWaARupeeCost - 10)
        }
        else if (waterLanceWeaponBonusState == "grayscale(0%)") {
            setWaterLanceWeaponBonusState("grayscale(100%)");
            setWaterWeaponChoiceState("lance");
            setmubWaALSilverMaskCountState(mubWaALSilverMaskCount + 100)
            setwbWaALSilverMaskCountState(wbWaALSilverMaskCount + 100)
            setmubWaALGoldMaskCountState(mubWaALGoldMaskCount + 100)
            setwbWaALGoldMaskCountState(wbWaALGoldMaskCount + 100)
            setmubWaALInsanityCountState(mubWaALInsanityCount + 14)
            setwbWaALInsanityCountState(wbWaALInsanityCount + 14)
            setmubWaALOriCountState(mubWaALOriCount + 30)
            setwbWaALOriCountState(wbWaALOriCount + 30)
            setmubWaALRupeeCost(mubWaALRupeeCost + 10)
            setwbWaALRupeeCost(wbWaALRupeeCost + 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount + 14)
            setallmubWaAOriCount(allmubWaAOriCount + 30)
            setallmubWaARupeeCost(allmubWaARupeeCost + 10)
        }
    }

    function waterLanceWyrmprintSlot() {
        if (waterLanceWyrmprintSlotState == "grayscale(100%)") {
            setWaterLanceWyrmprintSlotState("grayscale(0%)");
            setWaterWeaponChoiceState("lance");
            setmubWaALSilverMaskCountState(mubWaALSilverMaskCount - 16)
            setmubWaALGoldMaskCountState(mubWaALGoldMaskCount - 10)
            setmubWaALOriCountState(mubWaALOriCount - 1)
            setmubWaALRupeeCost(mubWaALRupeeCost - 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
            setallmubWaAOriCount(allmubWaAOriCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
        }
        else if (waterLanceWyrmprintSlotState == "grayscale(0%)") {
            setWaterLanceWyrmprintSlotState("grayscale(100%)");
            setWaterWeaponChoiceState("lance");
            setmubWaALSilverMaskCountState(mubWaALSilverMaskCount + 16)
            setmubWaALGoldMaskCountState(mubWaALGoldMaskCount + 10)
            setmubWaALOriCountState(mubWaALOriCount + 1)
            setmubWaALRupeeCost(mubWaALRupeeCost + 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
            setallmubWaAOriCount(allmubWaAOriCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
        }
    }

    function handleWaterLanceUnbindIncrement(event) {
        setWaterWeaponChoiceState("lance")
        if (waterLanceUnbindState < event.target.value) {
            if (event.target.value - waterLanceUnbindState == 1) {
                setWaterLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWaALSilverMaskCountState(mubWaALSilverMaskCount - 40)
                    setwbWaALSilverMaskCountState(wbWaALSilverMaskCount - 40)
                    setmubWaALGoldMaskCountState(mubWaALGoldMaskCount - 30)
                    setwbWaALGoldMaskCountState(wbWaALGoldMaskCount - 30)
                    setmubWaALSandCountState(mubWaALSandCount - 1)
                    setwbWaALSandCountState(wbWaALSandCount - 1)
                    setmubWaALRupeeCost(mubWaALRupeeCost - 2)
                    setwbWaALRupeeCost(wbWaALRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaASandCount(allmubWaASandCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWaALSilverMaskCountState(mubWaALSilverMaskCount - 16)
                    setwbWaALSilverMaskCountState(wbWaALSilverMaskCount - 16)
                    setmubWaALGoldMaskCountState(mubWaALGoldMaskCount - 10)
                    setwbWaALGoldMaskCountState(wbWaALGoldMaskCount - 10)
                    setmubWaALInsanityCountState(mubWaALInsanityCount - 7)
                    setwbWaALInsanityCountState(wbWaALInsanityCount - 7)
                    setmubWaALOriCountState(mubWaALOriCount - 1)
                    setwbWaALOriCountState(wbWaALOriCount - 1)
                    setmubWaALRupeeCost(mubWaALRupeeCost - 7.5)
                    setwbWaALRupeeCost(wbWaALRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWaALSilverMaskCountState(mubWaALSilverMaskCount - 16)
                    setmubWaALGoldMaskCountState(mubWaALGoldMaskCount - 10)
                    setmubWaALInsanityCountState(mubWaALInsanityCount - 7)
                    setmubWaALOriCountState(mubWaALOriCount - 1)
                    setmubWaALRupeeCost(mubWaALRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWaALSilverMaskCountState(mubWaALSilverMaskCount - 80)
                    setmubWaALGoldMaskCountState(mubWaALGoldMaskCount - 70)
                    setmubWaALInsanityCountState(mubWaALInsanityCount - 30)
                    setmubWaALGaleCountState(mubWaALGaleCount - 20)
                    setmubWaALOriCountState(mubWaALOriCount - 20)
                    setmubWaALRupeeCost(mubWaALRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 20)
                    setallmubWaAOriCount(allmubWaAOriCount - 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
            }
        }
        else if (waterLanceUnbindState > event.target.value) {
            if (waterLanceUnbindState - event.target.value == 1) {
                setWaterLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWaALSilverMaskCountState(mubWaALSilverMaskCount + 40)
                    setwbWaALSilverMaskCountState(wbWaALSilverMaskCount + 40)
                    setmubWaALGoldMaskCountState(mubWaALGoldMaskCount + 30)
                    setwbWaALGoldMaskCountState(wbWaALGoldMaskCount + 30)
                    setmubWaALSandCountState(mubWaALSandCount + 1)
                    setwbWaALSandCountState(wbWaALSandCount + 1)
                    setmubWaALRupeeCost(mubWaALRupeeCost + 2)
                    setwbWaALRupeeCost(wbWaALRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaASandCount(allmubWaASandCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWaALSilverMaskCountState(mubWaALSilverMaskCount + 16)
                    setwbWaALSilverMaskCountState(wbWaALSilverMaskCount + 16)
                    setmubWaALGoldMaskCountState(mubWaALGoldMaskCount + 10)
                    setwbWaALGoldMaskCountState(wbWaALGoldMaskCount + 10)
                    setmubWaALInsanityCountState(mubWaALInsanityCount + 7)
                    setwbWaALInsanityCountState(wbWaALInsanityCount + 7)
                    setmubWaALOriCountState(mubWaALOriCount + 1)
                    setwbWaALOriCountState(wbWaALOriCount + 1)
                    setmubWaALRupeeCost(mubWaALRupeeCost + 7.5)
                    setwbWaALRupeeCost(wbWaALRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWaALSilverMaskCountState(mubWaALSilverMaskCount + 16)
                    setmubWaALGoldMaskCountState(mubWaALGoldMaskCount + 10)
                    setmubWaALInsanityCountState(mubWaALInsanityCount + 7)
                    setmubWaALOriCountState(mubWaALOriCount + 1)
                    setmubWaALRupeeCost(mubWaALRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWaALSilverMaskCountState(mubWaALSilverMaskCount + 80)
                    setmubWaALGoldMaskCountState(mubWaALGoldMaskCount + 70)
                    setmubWaALInsanityCountState(mubWaALInsanityCount + 30)
                    setmubWaALGaleCountState(mubWaALGaleCount + 20)
                    setmubWaALOriCountState(mubWaALOriCount + 20)
                    setmubWaALRupeeCost(mubWaALRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 20)
                    setallmubWaAOriCount(allmubWaAOriCount + 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
            }
        }
    }

    function handleWaterLanceRefineIncrement(event) {
        setWaterWeaponChoiceState("lance");
        if (waterLanceRefineState < event.target.value) {
            if (event.target.value - waterLanceRefineState == 1) {
                setWaterLanceRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWaALSilverMaskCountState(mubWaALSilverMaskCount - 16);
                    setwbWaALSilverMaskCountState(wbWaALSilverMaskCount - 16);
                    setmubWaALGoldMaskCountState(mubWaALGoldMaskCount - 10);
                    setwbWaALGoldMaskCountState(wbWaALGoldMaskCount - 10);
                    setmubWaALInsanityCountState(mubWaALInsanityCount - 7);
                    setwbWaALInsanityCountState(wbWaALInsanityCount - 7);
                    setmubWaALOriCountState(mubWaALOriCount - 1);
                    setwbWaALOriCountState(wbWaALOriCount - 1);
                    setmubWaALRupeeCost(mubWaALRupeeCost - 2.5);
                    setwbWaALRupeeCost(wbWaALRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubWaALSilverMaskCountState(mubWaALSilverMaskCount - 40)
                    setmubWaALGoldMaskCountState(mubWaALGoldMaskCount - 30);
                    setmubWaALInsanityCountState(mubWaALInsanityCount - 10);
                    setmubWaALGaleCountState(mubWaALGaleCount - 10);
                    setmubWaALOriCountState(mubWaALOriCount - 10);
                    setmubWaALRupeeCost(mubWaALRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 10)
                    setallmubWaAOriCount(allmubWaAOriCount - 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
            }
        }
        else if (waterLanceRefineState > event.target.value) {
            if (waterLanceRefineState - event.target.value == 1) {
                setWaterLanceRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWaALSilverMaskCountState(mubWaALSilverMaskCount + 16);
                    setwbWaALSilverMaskCountState(wbWaALSilverMaskCount + 16);
                    setmubWaALGoldMaskCountState(mubWaALGoldMaskCount + 10);
                    setwbWaALGoldMaskCountState(wbWaALGoldMaskCount + 10);
                    setmubWaALInsanityCountState(mubWaALInsanityCount + 7);
                    setwbWaALInsanityCountState(wbWaALInsanityCount + 7);
                    setmubWaALOriCountState(mubWaALOriCount + 1);
                    setwbWaALOriCountState(wbWaALOriCount + 1);
                    setmubWaALRupeeCost(mubWaALRupeeCost + 2.5);
                    setwbWaALRupeeCost(wbWaALRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubWaALSilverMaskCountState(mubWaALSilverMaskCount + 40)
                    setmubWaALGoldMaskCountState(mubWaALGoldMaskCount + 30);
                    setmubWaALInsanityCountState(mubWaALInsanityCount + 10);
                    setmubWaALGaleCountState(mubWaALGaleCount + 10);
                    setmubWaALOriCountState(mubWaALOriCount + 10);
                    setmubWaALRupeeCost(mubWaALRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 10)
                    setallmubWaAOriCount(allmubWaAOriCount + 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
            }
        }
    }

    function craftWaterWand() {
        if (waterWandCraftState == "grayscale(100%)") {
            setWaterWandCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("wand")
            setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount - 40)
            setwbWaAWSilverMaskCountState(wbWaAWSilverMaskCount - 40)
            setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount - 30)
            setwbWaAWGoldMaskCountState(wbWaAWGoldMaskCount - 30)
            setmubWaAWSandCountState(mubWaAWSandCount - 1)
            setwbWaAWSandCountState(wbWaAWSandCount - 1)
            setmubWaAWRupeeCost(mubWaAWRupeeCost - 2)
            setwbWaAWRupeeCost(wbWaAWRupeeCost - 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
            setallmubWaASandCount(allmubWaASandCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2)
        }
        else if (waterWandCraftState == "grayscale(0%)") {
            setWaterWandCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("wand")
            setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount + 40)
            setwbWaAWSilverMaskCountState(wbWaAWSilverMaskCount + 40)
            setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount + 30)
            setwbWaAWGoldMaskCountState(wbWaAWGoldMaskCount + 30)
            setmubWaAWSandCountState(mubWaAWSandCount + 1)
            setwbWaAWSandCountState(wbWaAWSandCount + 1)
            setmubWaAWRupeeCost(mubWaAWRupeeCost + 2)
            setwbWaAWRupeeCost(wbWaAWRupeeCost + 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
            setallmubWaASandCount(allmubWaASandCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2)
        }
    }

    function waterWandWeaponBonus() {
        if (waterWandWeaponBonusState == "grayscale(100%)") {
            setWaterWandWeaponBonusState("grayscale(0%)");
            setWaterWeaponChoiceState("wand");
            setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount - 100)
            setwbWaAWSilverMaskCountState(wbWaAWSilverMaskCount - 100)
            setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount - 100)
            setwbWaAWGoldMaskCountState(wbWaAWGoldMaskCount - 100)
            setmubWaAWInsanityCountState(mubWaAWInsanityCount - 14)
            setwbWaAWInsanityCountState(wbWaAWInsanityCount - 14)
            setmubWaAWOriCountState(mubWaAWOriCount - 30)
            setwbWaAWOriCountState(wbWaAWOriCount - 30)
            setmubWaAWRupeeCost(mubWaAWRupeeCost - 10)
            setwbWaAWRupeeCost(wbWaAWRupeeCost - 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount - 14)
            setallmubWaAOriCount(allmubWaAOriCount - 30)
            setallmubWaARupeeCost(allmubWaARupeeCost - 10)
        }
        else if (waterWandWeaponBonusState == "grayscale(0%)") {
            setWaterWandWeaponBonusState("grayscale(100%)");
            setWaterWeaponChoiceState("wand");
            setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount + 100)
            setwbWaAWSilverMaskCountState(wbWaAWSilverMaskCount + 100)
            setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount + 100)
            setwbWaAWGoldMaskCountState(wbWaAWGoldMaskCount + 100)
            setmubWaAWInsanityCountState(mubWaAWInsanityCount + 14)
            setwbWaAWInsanityCountState(wbWaAWInsanityCount + 14)
            setmubWaAWOriCountState(mubWaAWOriCount + 30)
            setwbWaAWOriCountState(wbWaAWOriCount + 30)
            setmubWaAWRupeeCost(mubWaAWRupeeCost + 10)
            setwbWaAWRupeeCost(wbWaAWRupeeCost + 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount + 14)
            setallmubWaAOriCount(allmubWaAOriCount + 30)
            setallmubWaARupeeCost(allmubWaARupeeCost + 10)
        }
    }

    function waterWandWyrmprintSlot() {
        if (waterWandWyrmprintSlotState == "grayscale(100%)") {
            setWaterWandWyrmprintSlotState("grayscale(0%)");
            setWaterWeaponChoiceState("wand");
            setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount - 16)
            setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount - 10)
            setmubWaAWOriCountState(mubWaAWOriCount - 1)
            setmubWaAWRupeeCost(mubWaAWRupeeCost - 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
            setallmubWaAOriCount(allmubWaAOriCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
        }
        else if (waterWandWyrmprintSlotState == "grayscale(0%)") {
            setWaterWandWyrmprintSlotState("grayscale(100%)");
            setWaterWeaponChoiceState("wand");
            setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount + 16)
            setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount + 10)
            setmubWaAWOriCountState(mubWaAWOriCount + 1)
            setmubWaAWRupeeCost(mubWaAWRupeeCost + 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
            setallmubWaAOriCount(allmubWaAOriCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
        }
    }

    function handleWaterWandUnbindIncrement(event) {
        setWaterWeaponChoiceState("wand")
        if (waterWandUnbindState < event.target.value) {
            if (event.target.value - waterWandUnbindState == 1) {
                setWaterWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount - 40)
                    setwbWaAWSilverMaskCountState(wbWaAWSilverMaskCount - 40)
                    setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount - 30)
                    setwbWaAWGoldMaskCountState(wbWaAWGoldMaskCount - 30)
                    setmubWaAWSandCountState(mubWaAWSandCount - 1)
                    setwbWaAWSandCountState(wbWaAWSandCount - 1)
                    setmubWaAWRupeeCost(mubWaAWRupeeCost - 2)
                    setwbWaAWRupeeCost(wbWaAWRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaASandCount(allmubWaASandCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount - 16)
                    setwbWaAWSilverMaskCountState(wbWaAWSilverMaskCount - 16)
                    setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount - 10)
                    setwbWaAWGoldMaskCountState(wbWaAWGoldMaskCount - 10)
                    setmubWaAWInsanityCountState(mubWaAWInsanityCount - 7)
                    setwbWaAWInsanityCountState(wbWaAWInsanityCount - 7)
                    setmubWaAWOriCountState(mubWaAWOriCount - 1)
                    setwbWaAWOriCountState(wbWaAWOriCount - 1)
                    setmubWaAWRupeeCost(mubWaAWRupeeCost - 7.5)
                    setwbWaAWRupeeCost(wbWaAWRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount - 16)
                    setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount - 10)
                    setmubWaAWInsanityCountState(mubWaAWInsanityCount - 7)
                    setmubWaAWOriCountState(mubWaAWOriCount - 1)
                    setmubWaAWRupeeCost(mubWaAWRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount - 80)
                    setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount - 70)
                    setmubWaAWInsanityCountState(mubWaAWInsanityCount - 30)
                    setmubWaAWGaleCountState(mubWaAWGaleCount - 20)
                    setmubWaAWOriCountState(mubWaAWOriCount - 20)
                    setmubWaAWRupeeCost(mubWaAWRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 20)
                    setallmubWaAOriCount(allmubWaAOriCount - 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
            }
        }
        else if (waterWandUnbindState > event.target.value) {
            if (waterWandUnbindState - event.target.value == 1) {
                setWaterWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount + 40)
                    setwbWaAWSilverMaskCountState(wbWaAWSilverMaskCount + 40)
                    setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount + 30)
                    setwbWaAWGoldMaskCountState(wbWaAWGoldMaskCount + 30)
                    setmubWaAWSandCountState(mubWaAWSandCount + 1)
                    setwbWaAWSandCountState(wbWaAWSandCount + 1)
                    setmubWaAWRupeeCost(mubWaAWRupeeCost + 2)
                    setwbWaAWRupeeCost(wbWaAWRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaASandCount(allmubWaASandCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount + 16)
                    setwbWaAWSilverMaskCountState(wbWaAWSilverMaskCount + 16)
                    setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount + 10)
                    setwbWaAWGoldMaskCountState(wbWaAWGoldMaskCount + 10)
                    setmubWaAWInsanityCountState(mubWaAWInsanityCount + 7)
                    setwbWaAWInsanityCountState(wbWaAWInsanityCount + 7)
                    setmubWaAWOriCountState(mubWaAWOriCount + 1)
                    setwbWaAWOriCountState(wbWaAWOriCount + 1)
                    setmubWaAWRupeeCost(mubWaAWRupeeCost + 7.5)
                    setwbWaAWRupeeCost(wbWaAWRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount + 16)
                    setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount + 10)
                    setmubWaAWInsanityCountState(mubWaAWInsanityCount + 7)
                    setmubWaAWOriCountState(mubWaAWOriCount + 1)
                    setmubWaAWRupeeCost(mubWaAWRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount + 80)
                    setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount + 70)
                    setmubWaAWInsanityCountState(mubWaAWInsanityCount + 30)
                    setmubWaAWGaleCountState(mubWaAWGaleCount + 20)
                    setmubWaAWOriCountState(mubWaAWOriCount + 20)
                    setmubWaAWRupeeCost(mubWaAWRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 20)
                    setallmubWaAOriCount(allmubWaAOriCount + 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
            }
        }
    }

    function handleWaterWandRefineIncrement(event) {
        setWaterWeaponChoiceState("wand");
        if (waterWandRefineState < event.target.value) {
            if (event.target.value - waterWandRefineState == 1) {
                setWaterWandRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount - 16);
                    setwbWaAWSilverMaskCountState(wbWaAWSilverMaskCount - 16);
                    setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount - 10);
                    setwbWaAWGoldMaskCountState(wbWaAWGoldMaskCount - 10);
                    setmubWaAWInsanityCountState(mubWaAWInsanityCount - 7);
                    setwbWaAWInsanityCountState(wbWaAWInsanityCount - 7);
                    setmubWaAWOriCountState(mubWaAWOriCount - 1);
                    setwbWaAWOriCountState(wbWaAWOriCount - 1);
                    setmubWaAWRupeeCost(mubWaAWRupeeCost - 2.5);
                    setwbWaAWRupeeCost(wbWaAWRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount - 40)
                    setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount - 30);
                    setmubWaAWInsanityCountState(mubWaAWInsanityCount - 10);
                    setmubWaAWGaleCountState(mubWaAWGaleCount - 10);
                    setmubWaAWOriCountState(mubWaAWOriCount - 10);
                    setmubWaAWRupeeCost(mubWaAWRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 10)
                    setallmubWaAOriCount(allmubWaAOriCount - 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
            }
        }
        else if (waterWandRefineState > event.target.value) {
            if (waterWandRefineState - event.target.value == 1) {
                setWaterWandRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount + 16);
                    setwbWaAWSilverMaskCountState(wbWaAWSilverMaskCount + 16);
                    setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount + 10);
                    setwbWaAWGoldMaskCountState(wbWaAWGoldMaskCount + 10);
                    setmubWaAWInsanityCountState(mubWaAWInsanityCount + 7);
                    setwbWaAWInsanityCountState(wbWaAWInsanityCount + 7);
                    setmubWaAWOriCountState(mubWaAWOriCount + 1);
                    setwbWaAWOriCountState(wbWaAWOriCount + 1);
                    setmubWaAWRupeeCost(mubWaAWRupeeCost + 2.5);
                    setwbWaAWRupeeCost(wbWaAWRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubWaAWSilverMaskCountState(mubWaAWSilverMaskCount + 40)
                    setmubWaAWGoldMaskCountState(mubWaAWGoldMaskCount + 30);
                    setmubWaAWInsanityCountState(mubWaAWInsanityCount + 10);
                    setmubWaAWGaleCountState(mubWaAWGaleCount + 10);
                    setmubWaAWOriCountState(mubWaAWOriCount + 10);
                    setmubWaAWRupeeCost(mubWaAWRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 10)
                    setallmubWaAOriCount(allmubWaAOriCount + 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
            }
        }
    }

    function craftWaterBow() {
        if (waterBowCraftState == "grayscale(100%)") {
            setWaterBowCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("bow")
            setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount - 40)
            setwbWaABoSilverMaskCountState(wbWaABoSilverMaskCount - 40)
            setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount - 30)
            setwbWaABoGoldMaskCountState(wbWaABoGoldMaskCount - 30)
            setmubWaABoSandCountState(mubWaABoSandCount - 1)
            setwbWaABoSandCountState(wbWaABoSandCount - 1)
            setmubWaABoRupeeCost(mubWaABoRupeeCost - 2)
            setwbWaABoRupeeCost(wbWaABoRupeeCost - 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
            setallmubWaASandCount(allmubWaASandCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2)
        }
        else if (waterBowCraftState == "grayscale(0%)") {
            setWaterBowCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("bow")
            setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount + 40)
            setwbWaABoSilverMaskCountState(wbWaABoSilverMaskCount + 40)
            setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount + 30)
            setwbWaABoGoldMaskCountState(wbWaABoGoldMaskCount + 30)
            setmubWaABoSandCountState(mubWaABoSandCount + 1)
            setwbWaABoSandCountState(wbWaABoSandCount + 1)
            setmubWaABoRupeeCost(mubWaABoRupeeCost + 2)
            setwbWaABoRupeeCost(wbWaABoRupeeCost + 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
            setallmubWaASandCount(allmubWaASandCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2)
        }
    }

    function waterBowWeaponBonus() {
        if (waterBowWeaponBonusState == "grayscale(100%)") {
            setWaterBowWeaponBonusState("grayscale(0%)");
            setWaterWeaponChoiceState("bow");
            setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount - 100)
            setwbWaABoSilverMaskCountState(wbWaABoSilverMaskCount - 100)
            setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount - 100)
            setwbWaABoGoldMaskCountState(wbWaABoGoldMaskCount - 100)
            setmubWaABoInsanityCountState(mubWaABoInsanityCount - 14)
            setwbWaABoInsanityCountState(wbWaABoInsanityCount - 14)
            setmubWaABoOriCountState(mubWaABoOriCount - 30)
            setwbWaABoOriCountState(wbWaABoOriCount - 30)
            setmubWaABoRupeeCost(mubWaABoRupeeCost - 10)
            setwbWaABoRupeeCost(wbWaABoRupeeCost - 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount - 14)
            setallmubWaAOriCount(allmubWaAOriCount - 30)
            setallmubWaARupeeCost(allmubWaARupeeCost - 10)
        }
        else if (waterBowWeaponBonusState == "grayscale(0%)") {
            setWaterBowWeaponBonusState("grayscale(100%)");
            setWaterWeaponChoiceState("bow");
            setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount + 100)
            setwbWaABoSilverMaskCountState(wbWaABoSilverMaskCount + 100)
            setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount + 100)
            setwbWaABoGoldMaskCountState(wbWaABoGoldMaskCount + 100)
            setmubWaABoInsanityCountState(mubWaABoInsanityCount + 14)
            setwbWaABoInsanityCountState(wbWaABoInsanityCount + 14)
            setmubWaABoOriCountState(mubWaABoOriCount + 30)
            setwbWaABoOriCountState(wbWaABoOriCount + 30)
            setmubWaABoRupeeCost(mubWaABoRupeeCost + 10)
            setwbWaABoRupeeCost(wbWaABoRupeeCost + 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount + 14)
            setallmubWaAOriCount(allmubWaAOriCount + 30)
            setallmubWaARupeeCost(allmubWaARupeeCost + 10)
        }
    }

    function waterBowWyrmprintSlot() {
        if (waterBowWyrmprintSlotState == "grayscale(100%)") {
            setWaterBowWyrmprintSlotState("grayscale(0%)");
            setWaterWeaponChoiceState("bow");
            setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount - 16)
            setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount - 10)
            setmubWaABoOriCountState(mubWaABoOriCount - 1)
            setmubWaABoRupeeCost(mubWaABoRupeeCost - 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
            setallmubWaAOriCount(allmubWaAOriCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
        }
        else if (waterBowWyrmprintSlotState == "grayscale(0%)") {
            setWaterBowWyrmprintSlotState("grayscale(100%)");
            setWaterWeaponChoiceState("bow");
            setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount + 16)
            setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount + 10)
            setmubWaABoOriCountState(mubWaABoOriCount + 1)
            setmubWaABoRupeeCost(mubWaABoRupeeCost + 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
            setallmubWaAOriCount(allmubWaAOriCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
        }
    }

    function handleWaterBowUnbindIncrement(event) {
        setWaterWeaponChoiceState("bow")
        if (waterBowUnbindState < event.target.value) {
            if (event.target.value - waterBowUnbindState == 1) {
                setWaterBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount - 40)
                    setwbWaABoSilverMaskCountState(wbWaABoSilverMaskCount - 40)
                    setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount - 30)
                    setwbWaABoGoldMaskCountState(wbWaABoGoldMaskCount - 30)
                    setmubWaABoSandCountState(mubWaABoSandCount - 1)
                    setwbWaABoSandCountState(wbWaABoSandCount - 1)
                    setmubWaABoRupeeCost(mubWaABoRupeeCost - 2)
                    setwbWaABoRupeeCost(wbWaABoRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaASandCount(allmubWaASandCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount - 16)
                    setwbWaABoSilverMaskCountState(wbWaABoSilverMaskCount - 16)
                    setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount - 10)
                    setwbWaABoGoldMaskCountState(wbWaABoGoldMaskCount - 10)
                    setmubWaABoInsanityCountState(mubWaABoInsanityCount - 7)
                    setwbWaABoInsanityCountState(wbWaABoInsanityCount - 7)
                    setmubWaABoOriCountState(mubWaABoOriCount - 1)
                    setwbWaABoOriCountState(wbWaABoOriCount - 1)
                    setmubWaABoRupeeCost(mubWaABoRupeeCost - 7.5)
                    setwbWaABoRupeeCost(wbWaABoRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount - 16)
                    setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount - 10)
                    setmubWaABoInsanityCountState(mubWaABoInsanityCount - 7)
                    setmubWaABoOriCountState(mubWaABoOriCount - 1)
                    setmubWaABoRupeeCost(mubWaABoRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount - 80)
                    setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount - 70)
                    setmubWaABoInsanityCountState(mubWaABoInsanityCount - 30)
                    setmubWaABoGaleCountState(mubWaABoGaleCount - 20)
                    setmubWaABoOriCountState(mubWaABoOriCount - 20)
                    setmubWaABoRupeeCost(mubWaABoRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 20)
                    setallmubWaAOriCount(allmubWaAOriCount - 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
            }
        }
        else if (waterBowUnbindState > event.target.value) {
            if (waterBowUnbindState - event.target.value == 1) {
                setWaterBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount + 40)
                    setwbWaABoSilverMaskCountState(wbWaABoSilverMaskCount + 40)
                    setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount + 30)
                    setwbWaABoGoldMaskCountState(wbWaABoGoldMaskCount + 30)
                    setmubWaABoSandCountState(mubWaABoSandCount + 1)
                    setwbWaABoSandCountState(wbWaABoSandCount + 1)
                    setmubWaABoRupeeCost(mubWaABoRupeeCost + 2)
                    setwbWaABoRupeeCost(wbWaABoRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaASandCount(allmubWaASandCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount + 16)
                    setwbWaABoSilverMaskCountState(wbWaABoSilverMaskCount + 16)
                    setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount + 10)
                    setwbWaABoGoldMaskCountState(wbWaABoGoldMaskCount + 10)
                    setmubWaABoInsanityCountState(mubWaABoInsanityCount + 7)
                    setwbWaABoInsanityCountState(wbWaABoInsanityCount + 7)
                    setmubWaABoOriCountState(mubWaABoOriCount + 1)
                    setwbWaABoOriCountState(wbWaABoOriCount + 1)
                    setmubWaABoRupeeCost(mubWaABoRupeeCost + 7.5)
                    setwbWaABoRupeeCost(wbWaABoRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount + 16)
                    setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount + 10)
                    setmubWaABoInsanityCountState(mubWaABoInsanityCount + 7)
                    setmubWaABoOriCountState(mubWaABoOriCount + 1)
                    setmubWaABoRupeeCost(mubWaABoRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount + 80)
                    setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount + 70)
                    setmubWaABoInsanityCountState(mubWaABoInsanityCount + 30)
                    setmubWaABoGaleCountState(mubWaABoGaleCount + 20)
                    setmubWaABoOriCountState(mubWaABoOriCount + 20)
                    setmubWaABoRupeeCost(mubWaABoRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 20)
                    setallmubWaAOriCount(allmubWaAOriCount + 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
            }
        }
    }

    function handleWaterBowRefineIncrement(event) {
        setWaterWeaponChoiceState("bow");
        if (waterBowRefineState < event.target.value) {
            if (event.target.value - waterBowRefineState == 1) {
                setWaterBowRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount - 16);
                    setwbWaABoSilverMaskCountState(wbWaABoSilverMaskCount - 16);
                    setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount - 10);
                    setwbWaABoGoldMaskCountState(wbWaABoGoldMaskCount - 10);
                    setmubWaABoInsanityCountState(mubWaABoInsanityCount - 7);
                    setwbWaABoInsanityCountState(wbWaABoInsanityCount - 7);
                    setmubWaABoOriCountState(mubWaABoOriCount - 1);
                    setwbWaABoOriCountState(wbWaABoOriCount - 1);
                    setmubWaABoRupeeCost(mubWaABoRupeeCost - 2.5);
                    setwbWaABoRupeeCost(wbWaABoRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount - 40)
                    setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount - 30);
                    setmubWaABoInsanityCountState(mubWaABoInsanityCount - 10);
                    setmubWaABoGaleCountState(mubWaABoGaleCount - 10);
                    setmubWaABoOriCountState(mubWaABoOriCount - 10);
                    setmubWaABoRupeeCost(mubWaABoRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 10)
                    setallmubWaAOriCount(allmubWaAOriCount - 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
            }
        }
        else if (waterBowRefineState > event.target.value) {
            if (event.target.value - waterBowRefineState == 1) {
                setWaterBowRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount + 16);
                    setwbWaABoSilverMaskCountState(wbWaABoSilverMaskCount + 16);
                    setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount + 10);
                    setwbWaABoGoldMaskCountState(wbWaABoGoldMaskCount + 10);
                    setmubWaABoInsanityCountState(mubWaABoInsanityCount + 7);
                    setwbWaABoInsanityCountState(wbWaABoInsanityCount + 7);
                    setmubWaABoOriCountState(mubWaABoOriCount + 1);
                    setwbWaABoOriCountState(wbWaABoOriCount + 1);
                    setmubWaABoRupeeCost(mubWaABoRupeeCost + 2.5);
                    setwbWaABoRupeeCost(wbWaABoRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubWaABoSilverMaskCountState(mubWaABoSilverMaskCount + 40)
                    setmubWaABoGoldMaskCountState(mubWaABoGoldMaskCount + 30);
                    setmubWaABoInsanityCountState(mubWaABoInsanityCount + 10);
                    setmubWaABoGaleCountState(mubWaABoGaleCount + 10);
                    setmubWaABoOriCountState(mubWaABoOriCount + 10);
                    setmubWaABoRupeeCost(mubWaABoRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 10)
                    setallmubWaAOriCount(allmubWaAOriCount + 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
            }
        }
    }

    function craftWaterStaff() {
        if (waterStaffCraftState == "grayscale(100%)") {
            setWaterStaffCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("staff")
            setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount - 40)
            setwbWaAStSilverMaskCountState(wbWaAStSilverMaskCount - 40)
            setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount - 30)
            setwbWaAStGoldMaskCountState(wbWaAStGoldMaskCount - 30)
            setmubWaAStSandCountState(mubWaAStSandCount - 1)
            setwbWaAStSandCountState(wbWaAStSandCount - 1)
            setmubWaAStRupeeCost(mubWaAStRupeeCost - 2)
            setwbWaAStRupeeCost(wbWaAStRupeeCost - 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
            setallmubWaASandCount(allmubWaASandCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2)
        }
        else if (waterStaffCraftState == "grayscale(0%)") {
            setWaterStaffCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("staff")
            setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount + 40)
            setwbWaAStSilverMaskCountState(wbWaAStSilverMaskCount + 40)
            setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount + 30)
            setwbWaAStGoldMaskCountState(wbWaAStGoldMaskCount + 30)
            setmubWaAStSandCountState(mubWaAStSandCount + 1)
            setwbWaAStSandCountState(wbWaAStSandCount + 1)
            setmubWaAStRupeeCost(mubWaAStRupeeCost + 2)
            setwbWaAStRupeeCost(wbWaAStRupeeCost + 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
            setallmubWaASandCount(allmubWaASandCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2)
        }
    }

    function waterStaffWeaponBonus() {
        if (waterStaffWeaponBonusState == "grayscale(100%)") {
            setWaterStaffWeaponBonusState("grayscale(0%)");
            setWaterWeaponChoiceState("staff");
            setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount - 100)
            setwbWaAStSilverMaskCountState(wbWaAStSilverMaskCount - 100)
            setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount - 100)
            setwbWaAStGoldMaskCountState(wbWaAStGoldMaskCount - 100)
            setmubWaAStInsanityCountState(mubWaAStInsanityCount - 14)
            setwbWaAStInsanityCountState(wbWaAStInsanityCount - 14)
            setmubWaAStOriCountState(mubWaAStOriCount - 30)
            setwbWaAStOriCountState(wbWaAStOriCount - 30)
            setmubWaAStRupeeCost(mubWaAStRupeeCost - 10)
            setwbWaAStRupeeCost(wbWaAStRupeeCost - 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount - 14)
            setallmubWaAOriCount(allmubWaAOriCount - 30)
            setallmubWaARupeeCost(allmubWaARupeeCost - 10)
        }
        else if (waterStaffWeaponBonusState == "grayscale(0%)") {
            setWaterStaffWeaponBonusState("grayscale(100%)");
            setWaterWeaponChoiceState("staff");
            setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount + 100)
            setwbWaAStSilverMaskCountState(wbWaAStSilverMaskCount + 100)
            setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount + 100)
            setwbWaAStGoldMaskCountState(wbWaAStGoldMaskCount + 100)
            setmubWaAStInsanityCountState(mubWaAStInsanityCount + 14)
            setwbWaAStInsanityCountState(wbWaAStInsanityCount + 14)
            setmubWaAStOriCountState(mubWaAStOriCount + 30)
            setwbWaAStOriCountState(wbWaAStOriCount + 30)
            setmubWaAStRupeeCost(mubWaAStRupeeCost + 10)
            setwbWaAStRupeeCost(wbWaAStRupeeCost + 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount + 14)
            setallmubWaAOriCount(allmubWaAOriCount + 30)
            setallmubWaARupeeCost(allmubWaARupeeCost + 10)
        }
    }

    function waterStaffWyrmprintSlot() {
        if (waterStaffWyrmprintSlotState == "grayscale(100%)") {
            setWaterStaffWyrmprintSlotState("grayscale(0%)");
            setWaterWeaponChoiceState("staff");
            setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount - 16)
            setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount - 10)
            setmubWaAStOriCountState(mubWaAStOriCount - 1)
            setmubWaAStRupeeCost(mubWaAStRupeeCost - 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
            setallmubWaAOriCount(allmubWaAOriCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
        }
        else if (waterStaffWyrmprintSlotState == "grayscale(0%)") {
            setWaterStaffWyrmprintSlotState("grayscale(100%)");
            setWaterWeaponChoiceState("staff");
            setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount + 16)
            setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount + 10)
            setmubWaAStOriCountState(mubWaAStOriCount + 1)
            setmubWaAStRupeeCost(mubWaAStRupeeCost + 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
            setallmubWaAOriCount(allmubWaAOriCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
        }
    }

    function handleWaterStaffUnbindIncrement(event) {
        setWaterWeaponChoiceState("staff")
        if (waterStaffUnbindState < event.target.value) {
            if (event.target.value - waterStaffUnbindState == 1) {
                setWaterStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount - 40)
                    setwbWaAStSilverMaskCountState(wbWaAStSilverMaskCount - 40)
                    setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount - 30)
                    setwbWaAStGoldMaskCountState(wbWaAStGoldMaskCount - 30)
                    setmubWaAStSandCountState(mubWaAStSandCount - 1)
                    setwbWaAStSandCountState(wbWaAStSandCount - 1)
                    setmubWaAStRupeeCost(mubWaAStRupeeCost - 2)
                    setwbWaAStRupeeCost(wbWaAStRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaASandCount(allmubWaASandCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount - 16)
                    setwbWaAStSilverMaskCountState(wbWaAStSilverMaskCount - 16)
                    setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount - 10)
                    setwbWaAStGoldMaskCountState(wbWaAStGoldMaskCount - 10)
                    setmubWaAStInsanityCountState(mubWaAStInsanityCount - 7)
                    setwbWaAStInsanityCountState(wbWaAStInsanityCount - 7)
                    setmubWaAStOriCountState(mubWaAStOriCount - 1)
                    setwbWaAStOriCountState(wbWaAStOriCount - 1)
                    setmubWaAStRupeeCost(mubWaAStRupeeCost - 7.5)
                    setwbWaAStRupeeCost(wbWaAStRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount - 16)
                    setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount - 10)
                    setmubWaAStInsanityCountState(mubWaAStInsanityCount - 7)
                    setmubWaAStOriCountState(mubWaAStOriCount - 1)
                    setmubWaAStRupeeCost(mubWaAStRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount - 80)
                    setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount - 70)
                    setmubWaAStInsanityCountState(mubWaAStInsanityCount - 30)
                    setmubWaAStGaleCountState(mubWaAStGaleCount - 20)
                    setmubWaAStOriCountState(mubWaAStOriCount - 20)
                    setmubWaAStRupeeCost(mubWaAStRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 20)
                    setallmubWaAOriCount(allmubWaAOriCount - 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
            }
        }
        else if (waterStaffUnbindState > event.target.value) {
            if (waterStaffUnbindState - event.target.value == 1) {
                setWaterStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount + 40)
                    setwbWaAStSilverMaskCountState(wbWaAStSilverMaskCount + 40)
                    setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount + 30)
                    setwbWaAStGoldMaskCountState(wbWaAStGoldMaskCount + 30)
                    setmubWaAStSandCountState(mubWaAStSandCount + 1)
                    setwbWaAStSandCountState(wbWaAStSandCount + 1)
                    setmubWaAStRupeeCost(mubWaAStRupeeCost + 2)
                    setwbWaAStRupeeCost(wbWaAStRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaASandCount(allmubWaASandCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount + 16)
                    setwbWaAStSilverMaskCountState(wbWaAStSilverMaskCount + 16)
                    setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount + 10)
                    setwbWaAStGoldMaskCountState(wbWaAStGoldMaskCount + 10)
                    setmubWaAStInsanityCountState(mubWaAStInsanityCount + 7)
                    setwbWaAStInsanityCountState(wbWaAStInsanityCount + 7)
                    setmubWaAStOriCountState(mubWaAStOriCount + 1)
                    setwbWaAStOriCountState(wbWaAStOriCount + 1)
                    setmubWaAStRupeeCost(mubWaAStRupeeCost + 7.5)
                    setwbWaAStRupeeCost(wbWaAStRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount + 16)
                    setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount + 10)
                    setmubWaAStInsanityCountState(mubWaAStInsanityCount + 7)
                    setmubWaAStOriCountState(mubWaAStOriCount + 1)
                    setmubWaAStRupeeCost(mubWaAStRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount + 80)
                    setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount + 70)
                    setmubWaAStInsanityCountState(mubWaAStInsanityCount + 30)
                    setmubWaAStGaleCountState(mubWaAStGaleCount + 20)
                    setmubWaAStOriCountState(mubWaAStOriCount + 20)
                    setmubWaAStRupeeCost(mubWaAStRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 20)
                    setallmubWaAOriCount(allmubWaAOriCount + 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
            }
        }
    }

    function handleWaterStaffRefineIncrement(event) {
        setWaterWeaponChoiceState("staff");
        if (waterStaffRefineState < event.target.value) {
            if (event.target.value - waterStaffRefineState == 1) {
                setWaterStaffRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount - 16);
                    setwbWaAStSilverMaskCountState(wbWaAStSilverMaskCount - 16);
                    setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount - 10);
                    setwbWaAStGoldMaskCountState(wbWaAStGoldMaskCount - 10);
                    setmubWaAStInsanityCountState(mubWaAStInsanityCount - 7);
                    setwbWaAStInsanityCountState(wbWaAStInsanityCount - 7);
                    setmubWaAStOriCountState(mubWaAStOriCount - 1);
                    setwbWaAStOriCountState(wbWaAStOriCount - 1);
                    setmubWaAStRupeeCost(mubWaAStRupeeCost - 2.5);
                    setwbWaAStRupeeCost(wbWaAStRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount - 40)
                    setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount - 30);
                    setmubWaAStInsanityCountState(mubWaAStInsanityCount - 10);
                    setmubWaAStGaleCountState(mubWaAStGaleCount - 10);
                    setmubWaAStOriCountState(mubWaAStOriCount - 10);
                    setmubWaAStRupeeCost(mubWaAStRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 10)
                    setallmubWaAOriCount(allmubWaAOriCount - 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
            }
        }
        else if (waterStaffRefineState > event.target.value) {
            if (waterStaffRefineState - event.target.value == 1) {
                setWaterStaffRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount + 16);
                    setwbWaAStSilverMaskCountState(wbWaAStSilverMaskCount + 16);
                    setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount + 10);
                    setwbWaAStGoldMaskCountState(wbWaAStGoldMaskCount + 10);
                    setmubWaAStInsanityCountState(mubWaAStInsanityCount + 7);
                    setwbWaAStInsanityCountState(wbWaAStInsanityCount + 7);
                    setmubWaAStOriCountState(mubWaAStOriCount + 1);
                    setwbWaAStOriCountState(wbWaAStOriCount + 1);
                    setmubWaAStRupeeCost(mubWaAStRupeeCost + 2.5);
                    setwbWaAStRupeeCost(wbWaAStRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubWaAStSilverMaskCountState(mubWaAStSilverMaskCount + 40)
                    setmubWaAStGoldMaskCountState(mubWaAStGoldMaskCount + 30);
                    setmubWaAStInsanityCountState(mubWaAStInsanityCount + 10);
                    setmubWaAStGaleCountState(mubWaAStGaleCount + 10);
                    setmubWaAStOriCountState(mubWaAStOriCount + 10);
                    setmubWaAStRupeeCost(mubWaAStRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 10)
                    setallmubWaAOriCount(allmubWaAOriCount + 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
            }
        }
    }

    function craftWaterManacaster() {
        if (waterManacasterCraftState == "grayscale(100%)") {
            setWaterManacasterCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("manacaster")
            setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount - 40)
            setwbWaAMSilverMaskCountState(wbWaAMSilverMaskCount - 40)
            setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount - 30)
            setwbWaAMGoldMaskCountState(wbWaAMGoldMaskCount - 30)
            setmubWaAMSandCountState(mubWaAMSandCount - 1)
            setwbWaAMSandCountState(wbWaAMSandCount - 1)
            setmubWaAMRupeeCost(mubWaAMRupeeCost - 2)
            setwbWaAMRupeeCost(wbWaAMRupeeCost - 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
            setallmubWaASandCount(allmubWaASandCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2)
        }
        else if (waterManacasterCraftState == "grayscale(0%)") {
            setWaterManacasterCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("manacaster")
            setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount + 40)
            setwbWaAMSilverMaskCountState(wbWaAMSilverMaskCount + 40)
            setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount + 30)
            setwbWaAMGoldMaskCountState(wbWaAMGoldMaskCount + 30)
            setmubWaAMSandCountState(mubWaAMSandCount + 1)
            setwbWaAMSandCountState(wbWaAMSandCount + 1)
            setmubWaAMRupeeCost(mubWaAMRupeeCost + 2)
            setwbWaAMRupeeCost(wbWaAMRupeeCost + 2)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
            setallmubWaASandCount(allmubWaASandCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2)
        }
    }

    function waterManacasterWeaponBonus() {
        if (waterManacasterWeaponBonusState == "grayscale(100%)") {
            setWaterManacasterWeaponBonusState("grayscale(0%)");
            setWaterWeaponChoiceState("manacaster");
            setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount - 100)
            setwbWaAMSilverMaskCountState(wbWaAMSilverMaskCount - 100)
            setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount - 100)
            setwbWaAMGoldMaskCountState(wbWaAMGoldMaskCount - 100)
            setmubWaAMInsanityCountState(mubWaAMInsanityCount - 14)
            setwbWaAMInsanityCountState(wbWaAMInsanityCount - 14)
            setmubWaAMOriCountState(mubWaAMOriCount - 30)
            setwbWaAMOriCountState(wbWaAMOriCount - 30)
            setmubWaAMRupeeCost(mubWaAMRupeeCost - 10)
            setwbWaAMRupeeCost(wbWaAMRupeeCost - 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount - 14)
            setallmubWaAOriCount(allmubWaAOriCount - 30)
            setallmubWaARupeeCost(allmubWaARupeeCost - 10)
        }
        else if (waterManacasterWeaponBonusState == "grayscale(0%)") {
            setWaterManacasterWeaponBonusState("grayscale(100%)");
            setWaterWeaponChoiceState("manacaster");
            setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount + 100)
            setwbWaAMSilverMaskCountState(wbWaAMSilverMaskCount + 100)
            setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount + 100)
            setwbWaAMGoldMaskCountState(wbWaAMGoldMaskCount + 100)
            setmubWaAMInsanityCountState(mubWaAMInsanityCount + 14)
            setwbWaAMInsanityCountState(wbWaAMInsanityCount + 14)
            setmubWaAMOriCountState(mubWaAMOriCount + 30)
            setwbWaAMOriCountState(wbWaAMOriCount + 30)
            setmubWaAMRupeeCost(mubWaAMRupeeCost + 10)
            setwbWaAMRupeeCost(wbWaAMRupeeCost + 10)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 100)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 100)
            setallmubWaAInsanityCount(allmubWaAInsanityCount + 14)
            setallmubWaAOriCount(allmubWaAOriCount + 30)
            setallmubWaARupeeCost(allmubWaARupeeCost + 10)
        }
    }

    function waterManacasterWyrmprintSlot() {
        if (waterManacasterWyrmprintSlotState == "grayscale(100%)") {
            setWaterManacasterWyrmprintSlotState("grayscale(0%)");
            setWaterWeaponChoiceState("manacaster");
            setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount - 16)
            setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount - 10)
            setmubWaAMOriCountState(mubWaAMOriCount - 1)
            setmubWaAMRupeeCost(mubWaAMRupeeCost - 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
            setallmubWaAOriCount(allmubWaAOriCount - 1)
            setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
        }
        else if (waterManacasterWyrmprintSlotState == "grayscale(0%)") {
            setWaterManacasterWyrmprintSlotState("grayscale(100%)");
            setWaterWeaponChoiceState("manacaster");
            setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount + 16)
            setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount + 10)
            setmubWaAMOriCountState(mubWaAMOriCount + 1)
            setmubWaAMRupeeCost(mubWaAMRupeeCost + 2.5)
            setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
            setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
            setallmubWaAOriCount(allmubWaAOriCount + 1)
            setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
        }
    }

    function handleWaterManacasterUnbindIncrement(event) {
        setWaterWeaponChoiceState("manacaster")
        if (waterManacasterUnbindState < event.target.value) {
            if (event.target.value - waterManacasterUnbindState == 1) {
                setWaterManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 4) {
                    setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount - 40)
                    setwbWaAMSilverMaskCountState(wbWaAMSilverMaskCount - 40)
                    setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount - 30)
                    setwbWaAMGoldMaskCountState(wbWaAMGoldMaskCount - 30)
                    setmubWaAMSandCountState(mubWaAMSandCount - 1)
                    setwbWaAMSandCountState(wbWaAMSandCount - 1)
                    setmubWaAMRupeeCost(mubWaAMRupeeCost - 2)
                    setwbWaAMRupeeCost(wbWaAMRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaASandCount(allmubWaASandCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
                else if (event.target.value == 5) {
                    setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount - 16)
                    setwbWaAMSilverMaskCountState(wbWaAMSilverMaskCount - 16)
                    setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount - 10)
                    setwbWaAMGoldMaskCountState(wbWaAMGoldMaskCount - 10)
                    setmubWaAMInsanityCountState(mubWaAMInsanityCount - 7)
                    setwbWaAMInsanityCountState(wbWaAMInsanityCount - 7)
                    setmubWaAMOriCountState(mubWaAMOriCount - 1)
                    setwbWaAMOriCountState(wbWaAMOriCount - 1)
                    setmubWaAMRupeeCost(mubWaAMRupeeCost - 7.5)
                    setwbWaAMRupeeCost(wbWaAMRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 8) {
                    setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount - 16)
                    setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount - 10)
                    setmubWaAMInsanityCountState(mubWaAMInsanityCount - 7)
                    setmubWaAMOriCountState(mubWaAMOriCount - 1)
                    setmubWaAMRupeeCost(mubWaAMRupeeCost - 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 7.5)
                }
                else if (event.target.value > 8) {
                    setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount - 80)
                    setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount - 70)
                    setmubWaAMInsanityCountState(mubWaAMInsanityCount - 30)
                    setmubWaAMGaleCountState(mubWaAMGaleCount - 20)
                    setmubWaAMOriCountState(mubWaAMOriCount - 20)
                    setmubWaAMRupeeCost(mubWaAMRupeeCost - 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 20)
                    setallmubWaAOriCount(allmubWaAOriCount - 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2)
                }
            }
        }
        else if (waterManacasterUnbindState > event.target.value) {
            if (waterManacasterUnbindState - event.target.value == 1) {
                setWaterManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount + 40)
                    setwbWaAMSilverMaskCountState(wbWaAMSilverMaskCount + 40)
                    setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount + 30)
                    setwbWaAMGoldMaskCountState(wbWaAMGoldMaskCount + 30)
                    setmubWaAMSandCountState(mubWaAMSandCount + 1)
                    setwbWaAMSandCountState(wbWaAMSandCount + 1)
                    setmubWaAMRupeeCost(mubWaAMRupeeCost + 2)
                    setwbWaAMRupeeCost(wbWaAMRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaASandCount(allmubWaASandCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
                else if (event.target.value == 4) {
                    setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount + 16)
                    setwbWaAMSilverMaskCountState(wbWaAMSilverMaskCount + 16)
                    setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount + 10)
                    setwbWaAMGoldMaskCountState(wbWaAMGoldMaskCount + 10)
                    setmubWaAMInsanityCountState(mubWaAMInsanityCount + 7)
                    setwbWaAMInsanityCountState(wbWaAMInsanityCount + 7)
                    setmubWaAMOriCountState(mubWaAMOriCount + 1)
                    setwbWaAMOriCountState(wbWaAMOriCount + 1)
                    setmubWaAMRupeeCost(mubWaAMRupeeCost + 7.5)
                    setwbWaAMRupeeCost(wbWaAMRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value >= 5 && event.target.value <= 7) {
                    setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount + 16)
                    setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount + 10)
                    setmubWaAMInsanityCountState(mubWaAMInsanityCount + 7)
                    setmubWaAMOriCountState(mubWaAMOriCount + 1)
                    setmubWaAMRupeeCost(mubWaAMRupeeCost + 7.5)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 7.5)
                }
                else if (event.target.value == 8) {
                    setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount + 80)
                    setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount + 70)
                    setmubWaAMInsanityCountState(mubWaAMInsanityCount + 30)
                    setmubWaAMGaleCountState(mubWaAMGaleCount + 20)
                    setmubWaAMOriCountState(mubWaAMOriCount + 20)
                    setmubWaAMRupeeCost(mubWaAMRupeeCost + 2)
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 80)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 70)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 30)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 20)
                    setallmubWaAOriCount(allmubWaAOriCount + 20)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2)
                }
            }
        }
    }

    function handleWaterManacasterRefineIncrement(event) {
        setWaterWeaponChoiceState("manacaster");
        if (waterManacasterRefineState < event.target.value) {
            if (event.target.value - waterManacasterRefineState == 1) {
                setWaterManacasterRefineState(event.target.value);
                if (event.target.value == 1) {
                    setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount - 16);
                    setwbWaAMSilverMaskCountState(wbWaAMSilverMaskCount - 16);
                    setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount - 10);
                    setwbWaAMGoldMaskCountState(wbWaAMGoldMaskCount - 10);
                    setmubWaAMInsanityCountState(mubWaAMInsanityCount - 7);
                    setwbWaAMInsanityCountState(wbWaAMInsanityCount - 7);
                    setmubWaAMOriCountState(mubWaAMOriCount - 1);
                    setwbWaAMOriCountState(wbWaAMOriCount - 1);
                    setmubWaAMRupeeCost(mubWaAMRupeeCost - 2.5);
                    setwbWaAMRupeeCost(wbWaAMRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 7)
                    setallmubWaAOriCount(allmubWaAOriCount - 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
                if (event.target.value == 2) {
                    setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount - 40)
                    setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount - 30);
                    setmubWaAMInsanityCountState(mubWaAMInsanityCount - 10);
                    setmubWaAMGaleCountState(mubWaAMGaleCount - 10);
                    setmubWaAMOriCountState(mubWaAMOriCount - 10);
                    setmubWaAMRupeeCost(mubWaAMRupeeCost - 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount - 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount - 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount - 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount - 10)
                    setallmubWaAOriCount(allmubWaAOriCount - 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost - 2.5)
                }
            }
        }
        else if (waterManacasterRefineState > event.target.value) {
            if (waterManacasterRefineState - event.target.value == 1) {
                setWaterManacasterRefineState(event.target.value)
                if (event.target.value == 0) {
                    setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount + 16);
                    setwbWaAMSilverMaskCountState(wbWaAMSilverMaskCount + 16);
                    setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount + 10);
                    setwbWaAMGoldMaskCountState(wbWaAMGoldMaskCount + 10);
                    setmubWaAMInsanityCountState(mubWaAMInsanityCount + 7);
                    setwbWaAMInsanityCountState(wbWaAMInsanityCount + 7);
                    setmubWaAMOriCountState(mubWaAMOriCount + 1);
                    setwbWaAMOriCountState(wbWaAMOriCount + 1);
                    setmubWaAMRupeeCost(mubWaAMRupeeCost + 2.5);
                    setwbWaAMRupeeCost(wbWaAMRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 16)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 10)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 7)
                    setallmubWaAOriCount(allmubWaAOriCount + 1)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
                }
                if (event.target.value == 1) {
                    setmubWaAMSilverMaskCountState(mubWaAMSilverMaskCount + 40)
                    setmubWaAMGoldMaskCountState(mubWaAMGoldMaskCount + 30);
                    setmubWaAMInsanityCountState(mubWaAMInsanityCount + 10);
                    setmubWaAMGaleCountState(mubWaAMGaleCount + 10);
                    setmubWaAMOriCountState(mubWaAMOriCount + 10);
                    setmubWaAMRupeeCost(mubWaAMRupeeCost + 2.5);
                    setallmubWaASilverMaskCount(allmubWaASilverMaskCount + 40)
                    setallmubWaAGoldMaskCount(allmubWaAGoldMaskCount + 30)
                    setallmubWaAInsanityCount(allmubWaAInsanityCount + 10)
                    setallmubWaAGaleCount(allmubWaAGaleCount + 10)
                    setallmubWaAOriCount(allmubWaAOriCount + 10)
                    setallmubWaARupeeCost(allmubWaARupeeCost + 2.5)
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
                <Box width={[6 / 7, 1 / 2]} p={3} m={3} bg={"#152238"} sx={{ border: "3px solid lightblue" }}>
                    <Flex alignItems="center">
                        <Box width={[2 / 5]}>

                        </Box>
                        <Box width={[0, 3 / 5]}>
                            <Text fontSize={[1, 3]} ml="auto" mr="auto" color="lightblue">Water Agito Weapons</Text>
                        </Box>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WaterAgitoSword} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterSwordCraftState }} onClick={craftWaterSword} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Ame no Murakumo</Text>
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
                                        onChange={handleWaterSwordUnbindIncrement}
                                        defaultValue={waterSwordUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterSwordUnbindState}</Text>
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
                                        onChange={handleWaterSwordRefineIncrement}
                                        defaultValue={waterSwordRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterSwordRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: waterSwordWeaponBonusState }} onClick={waterSwordWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: waterSwordWyrmprintSlotState }} onClick={waterSwordWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WaterAgitoBlade} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterBladeCraftState }} onClick={craftWaterBlade} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Ame no Habakiri</Text>
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
                                        onChange={handleWaterBladeUnbindIncrement}
                                        defaultValue={waterBladeUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterBladeUnbindState}</Text>
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
                                        onChange={handleWaterBladeRefineIncrement}
                                        defaultValue={waterBladeRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterBladeRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: waterBladeWeaponBonusState }} onClick={waterBladeWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: waterBladeWyrmprintSlotState }} onClick={waterBladeWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WaterAgitoDagger} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterDaggerCraftState }} onClick={craftWaterDagger} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Futsu no Mitama</Text>
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
                                        onChange={handleWaterDaggerUnbindIncrement}
                                        defaultValue={waterDaggerUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterDaggerUnbindState}</Text>
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
                                        onChange={handleWaterDaggerRefineIncrement}
                                        defaultValue={waterDaggerRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterDaggerRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: waterDaggerWeaponBonusState }} onClick={waterDaggerWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: waterDaggerWyrmprintSlotState }} onClick={waterDaggerWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WaterAgitoAxe} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterAxeCraftState }} onClick={craftWaterAxe} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Ohohagari</Text>
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
                                        onChange={handleWaterAxeUnbindIncrement}
                                        defaultValue={waterAxeUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterAxeUnbindState}</Text>
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
                                        onChange={handleWaterAxeRefineIncrement}
                                        defaultValue={waterAxeRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterAxeRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: waterAxeWeaponBonusState }} onClick={waterAxeWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: waterAxeWyrmprintSlotState }} onClick={waterAxeWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WaterAgitoLance} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterLanceCraftState }} onClick={craftWaterLance} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Ame no Nuhoko</Text>
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
                                        onChange={handleWaterLanceUnbindIncrement}
                                        defaultValue={waterLanceUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterLanceUnbindState}</Text>
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
                                        onChange={handleWaterLanceRefineIncrement}
                                        defaultValue={waterLanceRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterLanceRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: waterLanceWeaponBonusState }} onClick={waterLanceWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: waterLanceWyrmprintSlotState }} onClick={waterLanceWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WaterAgitoBow} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterBowCraftState }} onClick={craftWaterBow} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Ame no Hajiyumi</Text>
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
                                        onChange={handleWaterBowUnbindIncrement}
                                        defaultValue={waterBowUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterBowUnbindState}</Text>
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
                                        onChange={handleWaterBowRefineIncrement}
                                        defaultValue={waterBowRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterBowRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: waterBowWeaponBonusState }} onClick={waterBowWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: waterBowWyrmprintSlotState }} onClick={waterBowWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WaterAgitoWand} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterWandCraftState }} onClick={craftWaterWand} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Omizununo</Text>
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
                                        onChange={handleWaterWandUnbindIncrement}
                                        defaultValue={waterWandUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterWandUnbindState}</Text>
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
                                        onChange={handleWaterWandRefineIncrement}
                                        defaultValue={waterWandRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterWandRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: waterWandWeaponBonusState }} onClick={waterWandWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: waterWandWyrmprintSlotState }} onClick={waterWandWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WaterAgitoStaff} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterStaffCraftState }} onClick={craftWaterStaff} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Kunado</Text>
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
                                        onChange={handleWaterStaffUnbindIncrement}
                                        defaultValue={waterStaffUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterStaffUnbindState}</Text>
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
                                        onChange={handleWaterStaffRefineIncrement}
                                        defaultValue={waterStaffRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterStaffRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: waterStaffWeaponBonusState }} onClick={waterStaffWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: waterStaffWyrmprintSlotState }} onClick={waterStaffWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                        <Card width={[150, 200]}>
                            <Flex>
                                <Box width={[0, 1 / 10]}></Box>
                                <Image src={WaterAgitoManacaster} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterManacasterCraftState }} onClick={craftWaterManacaster} />
                            </Flex>
                            <Flex>
                                <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Ame no Torifune</Text>
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
                                        onChange={handleWaterManacasterUnbindIncrement}
                                        defaultValue={waterManacasterUnbindState}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterManacasterUnbindState}</Text>
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
                                        onChange={handleWaterManacasterRefineIncrement}
                                        defaultValue={waterManacasterRefineState}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                        width={[3 / 5, 1]}
                                        color="lightblue"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={[1 / 4, 1 / 2]}>

                                    </Box>
                                    <Text color="lightblue" fontSize={[1, 3]}>{waterManacasterRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WeaponBonus} style={{ filter: waterManacasterWeaponBonusState }} onClick={waterManacasterWeaponBonus} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                                <Box width={[0, 1 / 8]}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: waterManacasterWyrmprintSlotState }} onClick={waterManacasterWyrmprintSlot} sx={{ width: ["42%", "25%"], height: ["25%"] }} />
                            </Flex>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                </Box>
                {/* The box for the materials needed to 100% a weapon */}
                {waterWeaponSelection()}
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
                            <Image src={WaterAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{allmubWaASilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{allmubWaAGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{allmubWaAInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{allmubWaAGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{allmubWaASandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{allmubWaAOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{allmubWaARupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Flex>
            <Flex>&nbsp;</Flex>
            <WeaponTypeNavTabs />
        </div>
    )
}