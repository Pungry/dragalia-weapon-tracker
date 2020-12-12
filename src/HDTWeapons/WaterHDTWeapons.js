import React, { useState } from 'react'
import HDTNavTabs from "./HDTNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"
import { Box, Text, Flex, Card, Image } from "rebass";
import { Slider } from "@rebass/forms";

import WaterHDTSword from "../Images/Water_HDT_Sword.png";
import WaterHDTBlade from "../Images/Water_HDT_Blade.png";
import WaterHDTDagger from "../Images/Water_HDT_Dagger.png";
import WaterHDTAxe from "../Images/Water_HDT_Axe.png";
import WaterHDTLance from "../Images/Water_HDT_Lance.png";
import WaterHDTBow from "../Images/Water_HDT_Bow.png";
import WaterHDTWand from "../Images/Water_HDT_Wand.png";
import WaterHDTStaff from "../Images/Water_HDT_Staff.png";
import WaterHDTManacaster from "../Images/Water_HDT_Manacaster.png";

import WaterHDTSphere from "../Images/Water_HDT_Sphere.png";
import WaterHDTTail from "../Images/Water_HDT_Tail.png";
import WaterHDTHorn from "../Images/Water_HDT_Horn.png";
import WaterHDTHeart from "../Images/Water_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";

import Refine from "../Images/Refine.PNG";
import Unbind from "../Images/Unbind.PNG";
import WeaponBonus from "../Images/Weapon_Bonus.PNG";

import WaterHDTSwordCost from "./WaterHDTSwordMats"
import WaterHDTBladeCost from "./WaterHDTBladeMats"
import WaterHDTDaggerCost from "./WaterHDTDaggerMats"
import WaterHDTAxeCost from "./WaterHDTAxeMats"
import WaterHDTLanceCost from "./WaterHDTLanceMats"
import WaterHDTBowCost from "./WaterHDTBowMats"
import WaterHDTWandCost from "./WaterHDTWandMats"
import WaterHDTStaffCost from "./WaterHDTStaffMats"
import WaterHDTManacasterCost from "./WaterHDTManacasterMats"

export default function WaterHDTWeapons() {
    const [waterHWeaponChoice, setWaterHWeaponChoiceState] = useLocalStorage("waterHWeaponChoice", "sword")

    const [allwbWaHSphereCount, setallwbWaHSphereCount] = useLocalStorage("allwbWaHSphereCount", 4500)
    const [allwbWaHTailCount, setallwbWaHTailCount] = useLocalStorage("allwbWaHTailCount", 3240)
    const [allwbWaHHeartCount, setallwbWaHHeartCount] = useLocalStorage("allwbWaHHeartCount", 720)
    const [allwbWaHHornCount, setallwbWaHHornCount] = useLocalStorage("allwbWaHHornCount", 810)
    const [allwbWaHOriCount, setallwbWaHOriCount] = useLocalStorage("allwbWaHOriCount", 414)
    const [allwbWaHRupeeCost, setallwbWaHRupeeCost] = useLocalStorage("allwbWaHRupeeCost", 225)

    const [waterHSwordCraftState, setWaterHSwordCraftState] = useLocalStorage("waterHSwordCraftState", "grayscale(100%)")
    const [waterHSwordWeaponBonusState, setWaterHSwordWeaponBonusState] = useLocalStorage("waterHSwordWeaponBonusState", "grayscale(100%)")
    const [waterHSwordRefineState, setWaterHSwordRefineState] = useLocalStorage("waterHSwordRefineState", "grayscale(100%)");
    const [waterHSwordUnbindState, setWaterHSwordUnbindState] = useLocalStorage("waterHSwordUnbindState", 0);

    const [wbWaHSphereCount, setwbWaHSphereCountState] = useLocalStorage("wbWaHSphereCount", 500);
    const [wbWaHTailCount, setwbWaHTailCountState] = useLocalStorage("wbWaHTailCount", 360);
    const [wbWaHHeartCount, setwbWaHHeartCountState] = useLocalStorage("wbWaHHeartCount", 80);
    const [wbWaHOriCount, setwbWaHOriCountState] = useLocalStorage("wbWaHOriCount", 46);
    const [wbWaHRupeeCost, setwbWaHRupeeCost] = useLocalStorage("wbWaHRupeeCost", 25);
    const [wbWaHHornCount, setwbWaHHornCountState] = useLocalStorage("wbWaHHornCount", 90);

    const [waterHBladeCraftState, setWaterHBladeCraftState] = useLocalStorage("waterHBladeCraftState", "grayscale(100%)")
    const [waterHBladeWeaponBonusState, setWaterHBladeWeaponBonusState] = useLocalStorage("waterHBladeWeaponBonusState", "grayscale(100%)")
    const [waterHBladeRefineState, setWaterHBladeRefineState] = useLocalStorage("waterHBladeRefineState", "grayscale(100%)");
    const [waterHBladeUnbindState, setWaterHBladeUnbindState] = useLocalStorage("waterHBladeUnbindState", 0);

    const [wbWaHBlSphereCount, setwbWaHBlSphereCountState] = useLocalStorage("wbWaHBlSphereCount", 500);
    const [wbWaHBlTailCount, setwbWaHBlTailCountState] = useLocalStorage("wbWaHBlTailCount", 360);
    const [wbWaHBlHeartCount, setwbWaHBlHeartCountState] = useLocalStorage("wbWaHBlHeartCount", 80);
    const [wbWaHBlOriCount, setwbWaHBlOriCountState] = useLocalStorage("wbWaHBlOriCount", 46);
    const [wbWaHBlRupeeCost, setwbWaHBlRupeeCost] = useLocalStorage("wbWaHBlRupeeCost", 25);
    const [wbWaHBlHornCount, setwbWaHBlHornCountState] = useLocalStorage("wbWaHBlHornCount", 90);

    const [waterHDaggerCraftState, setWaterHDaggerCraftState] = useLocalStorage("waterHDaggerCraftState", "grayscale(100%)")
    const [waterHDaggerWeaponBonusState, setWaterHDaggerWeaponBonusState] = useLocalStorage("waterHDaggerWeaponBonusState", "grayscale(100%)")
    const [waterHDaggerRefineState, setWaterHDaggerRefineState] = useLocalStorage("waterHDaggerRefineState", "grayscale(100%)");
    const [waterHDaggerUnbindState, setWaterHDaggerUnbindState] = useLocalStorage("waterHDaggerUnbindState", 0);

    const [wbWaHDSphereCount, setwbWaHDSphereCountState] = useLocalStorage("wbWaHDSphereCount", 500);
    const [wbWaHDTailCount, setwbWaHDTailCountState] = useLocalStorage("wbWaHDTailCount", 360);
    const [wbWaHDHeartCount, setwbWaHDHeartCountState] = useLocalStorage("wbWaHDHeartCount", 80);
    const [wbWaHDOriCount, setwbWaHDOriCountState] = useLocalStorage("wbWaHDOriCount", 46);
    const [wbWaHDRupeeCost, setwbWaHDRupeeCost] = useLocalStorage("wbWaHDRupeeCost", 25);
    const [wbWaHDHornCount, setwbWaHDHornCountState] = useLocalStorage("wbWaHDHornCount", 90);

    const [waterHAxeCraftState, setWaterHAxeCraftState] = useLocalStorage("waterHAxeCraftState", "grayscale(100%)")
    const [waterHAxeWeaponBonusState, setWaterHAxeWeaponBonusState] = useLocalStorage("waterHAxeWeaponBonusState", "grayscale(100%)")
    const [waterHAxeRefineState, setWaterHAxeRefineState] = useLocalStorage("waterHAxeRefineState", "grayscale(100%)");
    const [waterHAxeUnbindState, setWaterHAxeUnbindState] = useLocalStorage("waterHAxeUnbindState", 0);

    const [wbWaHASphereCount, setwbWaHASphereCountState] = useLocalStorage("wbWaHASphereCount", 500);
    const [wbWaHATailCount, setwbWaHATailCountState] = useLocalStorage("wbWaHATailCount", 360);
    const [wbWaHAHeartCount, setwbWaHAHeartCountState] = useLocalStorage("wbWaHAHeartCount", 80);
    const [wbWaHAOriCount, setwbWaHAOriCountState] = useLocalStorage("wbWaHAOriCount", 46);
    const [wbWaHARupeeCost, setwbWaHARupeeCost] = useLocalStorage("wbWaHARupeeCost", 25);
    const [wbWaHAHornCount, setwbWaHAHornCountState] = useLocalStorage("wbWaHAHornCount", 90);

    const [waterHLanceCraftState, setWaterHLanceCraftState] = useLocalStorage("waterHLanceCraftState", "grayscale(100%)")
    const [waterHLanceWeaponBonusState, setWaterHLanceWeaponBonusState] = useLocalStorage("waterHLanceWeaponBonusState", "grayscale(100%)")
    const [waterHLanceRefineState, setWaterHLanceRefineState] = useLocalStorage("waterHLanceRefineState", "grayscale(100%)");
    const [waterHLanceUnbindState, setWaterHLanceUnbindState] = useLocalStorage("waterHLanceUnbindState", 0);

    const [wbWaHLSphereCount, setwbWaHLSphereCountState] = useLocalStorage("wbWaHLSphereCount", 500);
    const [wbWaHLTailCount, setwbWaHLTailCountState] = useLocalStorage("wbWaHLTailCount", 360);
    const [wbWaHLHeartCount, setwbWaHLHeartCountState] = useLocalStorage("wbWaHLHeartCount", 80);
    const [wbWaHLOriCount, setwbWaHLOriCountState] = useLocalStorage("wbWaHLOriCount", 46);
    const [wbWaHLRupeeCost, setwbWaHLRupeeCost] = useLocalStorage("wbWaHLRupeeCost", 25);
    const [wbWaHLHornCount, setwbWaHLHornCountState] = useLocalStorage("wbWaHLHornCount", 90);

    const [waterHBowCraftState, setWaterHBowCraftState] = useLocalStorage("waterHBowCraftState", "grayscale(100%)")
    const [waterHBowWeaponBonusState, setWaterHBowWeaponBonusState] = useLocalStorage("waterHBowWeaponBonusState", "grayscale(100%)")
    const [waterHBowRefineState, setWaterHBowRefineState] = useLocalStorage("waterHBowRefineState", "grayscale(100%)");
    const [waterHBowUnbindState, setWaterHBowUnbindState] = useLocalStorage("waterHBowUnbindState", 0);

    const [wbWaHBoSphereCount, setwbWaHBoSphereCountState] = useLocalStorage("wbWaHBoSphereCount", 500);
    const [wbWaHBoTailCount, setwbWaHBoTailCountState] = useLocalStorage("wbWaHBoTailCount", 360);
    const [wbWaHBoHeartCount, setwbWaHBoHeartCountState] = useLocalStorage("wbWaHBoHeartCount", 80);
    const [wbWaHBoOriCount, setwbWaHBoOriCountState] = useLocalStorage("wbWaHBoOriCount", 46);
    const [wbWaHBoRupeeCost, setwbWaHBoRupeeCost] = useLocalStorage("wbWaHBoRupeeCost", 25);
    const [wbWaHBoHornCount, setwbWaHBoHornCountState] = useLocalStorage("wbWaHBoHornCount", 90);

    const [waterHWandCraftState, setWaterHWandCraftState] = useLocalStorage("waterHWandCraftState", "grayscale(100%)")
    const [waterHWandWeaponBonusState, setWaterHWandWeaponBonusState] = useLocalStorage("waterHWandWeaponBonusState", "grayscale(100%)")
    const [waterHWandRefineState, setWaterHWandRefineState] = useLocalStorage("waterHWandRefineState", "grayscale(100%)");
    const [waterHWandUnbindState, setWaterHWandUnbindState] = useLocalStorage("waterHWandUnbindState", 0);

    const [wbWaHWSphereCount, setwbWaHWSphereCountState] = useLocalStorage("wbWaHWSphereCount", 500);
    const [wbWaHWTailCount, setwbWaHWTailCountState] = useLocalStorage("wbWaHWTailCount", 360);
    const [wbWaHWHeartCount, setwbWaHWHeartCountState] = useLocalStorage("wbWaHWHeartCount", 80);
    const [wbWaHWOriCount, setwbWaHWOriCountState] = useLocalStorage("wbWaHWOriCount", 46);
    const [wbWaHWRupeeCost, setwbWaHWRupeeCost] = useLocalStorage("wbWaHWRupeeCost", 25);
    const [wbWaHWHornCount, setwbWaHWHornCountState] = useLocalStorage("wbWaHWHornCount", 90);

    const [waterHStaffCraftState, setWaterHStaffCraftState] = useLocalStorage("waterHStaffCraftState", "grayscale(100%)")
    const [waterHStaffWeaponBonusState, setWaterHStaffWeaponBonusState] = useLocalStorage("waterHStaffWeaponBonusState", "grayscale(100%)")
    const [waterHStaffRefineState, setWaterHStaffRefineState] = useLocalStorage("waterHStaffRefineState", "grayscale(100%)");
    const [waterHStaffUnbindState, setWaterHStaffUnbindState] = useLocalStorage("waterHStaffUnbindState", 0);

    const [wbWaHStSphereCount, setwbWaHStSphereCountState] = useLocalStorage("wbWaHStSphereCount", 500);
    const [wbWaHStTailCount, setwbWaHStTailCountState] = useLocalStorage("wbWaHStTailCount", 360);
    const [wbWaHStHeartCount, setwbWaHStHeartCountState] = useLocalStorage("wbWaHStHeartCount", 80);
    const [wbWaHStOriCount, setwbWaHStOriCountState] = useLocalStorage("wbWaHStOriCount", 46);
    const [wbWaHStRupeeCost, setwbWaHStRupeeCost] = useLocalStorage("wbWaHStRupeeCost", 25);
    const [wbWaHStHornCount, setwbWaHStHornCountState] = useLocalStorage("wbWaHStHornCount", 90);

    const [waterHManacasterCraftState, setWaterHManacasterCraftState] = useLocalStorage("waterHManacasterCraftState", "grayscale(100%)")
    const [waterHManacasterWeaponBonusState, setWaterHManacasterWeaponBonusState] = useLocalStorage("waterHManacasterWeaponBonusState", "grayscale(100%)")
    const [waterHManacasterRefineState, setWaterHManacasterRefineState] = useLocalStorage("waterHManacasterRefineState", "grayscale(100%)");
    const [waterHManacasterUnbindState, setWaterHManacasterUnbindState] = useLocalStorage("waterHManacasterUnbindState", 0);

    const [wbWaHMSphereCount, setwbWaHMSphereCountState] = useLocalStorage("wbWaHMSphereCount", 500);
    const [wbWaHMTailCount, setwbWaHMTailCountState] = useLocalStorage("wbWaHMTailCount", 360);
    const [wbWaHMHeartCount, setwbWaHMHeartCountState] = useLocalStorage("wbWaHMHeartCount", 80);
    const [wbWaHMOriCount, setwbWaHMOriCountState] = useLocalStorage("wbWaHMOriCount", 46);
    const [wbWaHMRupeeCost, setwbWaHMRupeeCost] = useLocalStorage("wbWaHMRupeeCost", 25);
    const [wbWaHMHornCount, setwbWaHMHornCountState] = useLocalStorage("wbWaHMHornCount", 90);

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

    function waterHDTWeaponSelection() {
        if (waterHWeaponChoice == "sword") {
            return <WaterHDTSwordCost wbWaHSphereCount={wbWaHSphereCount} wbWaHTailCount={wbWaHTailCount} wbWaHHeartCount={wbWaHHeartCount} wbWaHOriCount={wbWaHOriCount} wbWaHRupeeCost={wbWaHRupeeCost.toFixed(1)} wbWaHHornCount={wbWaHHornCount} />
        }
        if (waterHWeaponChoice == "blade") {
            return <WaterHDTBladeCost wbWaHBlSphereCount={wbWaHBlSphereCount} wbWaHBlTailCount={wbWaHBlTailCount} wbWaHBlHeartCount={wbWaHBlHeartCount} wbWaHBlOriCount={wbWaHBlOriCount} wbWaHBlRupeeCost={wbWaHBlRupeeCost.toFixed(1)} wbWaHBlHornCount={wbWaHBlHornCount} />
        }
        if (waterHWeaponChoice == "dagger") {
            return <WaterHDTDaggerCost wbWaHDSphereCount={wbWaHDSphereCount} wbWaHDTailCount={wbWaHDTailCount} wbWaHDHeartCount={wbWaHDHeartCount} wbWaHDOriCount={wbWaHDOriCount} wbWaHDRupeeCost={wbWaHDRupeeCost.toFixed(1)} wbWaHDHornCount={wbWaHDHornCount} />
        }
        if (waterHWeaponChoice == "axe") {
            return <WaterHDTAxeCost wbWaHASphereCount={wbWaHASphereCount} wbWaHATailCount={wbWaHATailCount} wbWaHAHeartCount={wbWaHAHeartCount} wbWaHAOriCount={wbWaHAOriCount} wbWaHARupeeCost={wbWaHARupeeCost.toFixed(1)} wbWaHAHornCount={wbWaHAHornCount} />
        }
        if (waterHWeaponChoice == "lance") {
            return <WaterHDTLanceCost wbWaHLSphereCount={wbWaHLSphereCount} wbWaHLTailCount={wbWaHLTailCount} wbWaHLHeartCount={wbWaHLHeartCount} wbWaHLOriCount={wbWaHLOriCount} wbWaHLRupeeCost={wbWaHLRupeeCost.toFixed(1)} wbWaHLHornCount={wbWaHLHornCount} />
        }
        if (waterHWeaponChoice == "bow") {
            return <WaterHDTBowCost wbWaHBoSphereCount={wbWaHBoSphereCount} wbWaHBoTailCount={wbWaHBoTailCount} wbWaHBoHeartCount={wbWaHBoHeartCount} wbWaHBoOriCount={wbWaHBoOriCount} wbWaHBoRupeeCost={wbWaHBoRupeeCost.toFixed(1)} wbWaHBoHornCount={wbWaHBoHornCount} />
        }
        if (waterHWeaponChoice == "wand") {
            return <WaterHDTWandCost wbWaHWSphereCount={wbWaHWSphereCount} wbWaHWTailCount={wbWaHWTailCount} wbWaHWHeartCount={wbWaHWHeartCount} wbWaHWOriCount={wbWaHWOriCount} wbWaHWRupeeCost={wbWaHWRupeeCost.toFixed(1)} wbWaHWHornCount={wbWaHWHornCount} />
        }
        if (waterHWeaponChoice == "staff") {
            return <WaterHDTStaffCost wbWaHStSphereCount={wbWaHStSphereCount} wbWaHStTailCount={wbWaHStTailCount} wbWaHStHeartCount={wbWaHStHeartCount} wbWaHStOriCount={wbWaHStOriCount} wbWaHStRupeeCost={wbWaHStRupeeCost.toFixed(1)} wbWaHStHornCount={wbWaHStHornCount} />
        }
        if (waterHWeaponChoice == "manacaster") {
            return <WaterHDTManacasterCost wbWaHMSphereCount={wbWaHMSphereCount} wbWaHMTailCount={wbWaHMTailCount} wbWaHMHeartCount={wbWaHMHeartCount} wbWaHMOriCount={wbWaHMOriCount} wbWaHMRupeeCost={wbWaHMRupeeCost.toFixed(1)} wbWaHMHornCount={wbWaHMHornCount} />
        }
    }

    function craftWaterSword() {
        if (waterHSwordCraftState == "grayscale(100%)") {
            setWaterHSwordCraftState("grayscale(0%)")
            setWaterHWeaponChoiceState("sword")
            setwbWaHSphereCountState(wbWaHSphereCount - 25)
            setwbWaHTailCountState(wbWaHTailCount - 18)
            setwbWaHHeartCountState(wbWaHHeartCount - 5)
            setwbWaHOriCountState(wbWaHOriCount - 1)
            setwbWaHRupeeCost(parseFloat(wbWaHRupeeCost - 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount - 25)
            setallwbWaHTailCount(allwbWaHTailCount - 18)
            setallwbWaHHeartCount(allwbWaHHeartCount - 5)
            setallwbWaHOriCount(allwbWaHOriCount - 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
        }
        else if (waterHSwordCraftState == "grayscale(0%)") {
            setWaterHSwordCraftState("grayscale(100%)")
            setWaterHWeaponChoiceState("sword")
            setwbWaHSphereCountState(wbWaHSphereCount + 25)
            setwbWaHTailCountState(wbWaHTailCount + 18)
            setwbWaHHeartCountState(wbWaHHeartCount + 5)
            setwbWaHOriCountState(wbWaHOriCount + 1)
            setwbWaHRupeeCost(parseFloat(wbWaHRupeeCost + 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount + 25)
            setallwbWaHTailCount(allwbWaHTailCount + 18)
            setallwbWaHHeartCount(allwbWaHHeartCount + 5)
            setallwbWaHOriCount(allwbWaHOriCount + 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
        }
    }

    function waterSwordWeaponBonus() {
        if (waterHSwordWeaponBonusState == "grayscale(100%)") {
            setWaterHSwordWeaponBonusState("grayscale(0%)")
            setWaterHWeaponChoiceState("sword")
            setwbWaHSphereCountState(wbWaHSphereCount - 150)
            setwbWaHTailCountState(wbWaHTailCount - 100)
            setwbWaHHornCountState(wbWaHHornCount - 30)
            setwbWaHHeartCountState(wbWaHHeartCount - 10)
            setwbWaHOriCountState(wbWaHOriCount - 30)
            setwbWaHRupeeCost(parseFloat(wbWaHRupeeCost - 10))
            setallwbWaHSphereCount(allwbWaHSphereCount - 150)
            setallwbWaHTailCount(allwbWaHTailCount - 100)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 10))
        }
        else if (waterHSwordWeaponBonusState == "grayscale(0%)") {
            setWaterHSwordWeaponBonusState("grayscale(100%)")
            setWaterHWeaponChoiceState("sword")
            setwbWaHSphereCountState(wbWaHSphereCount + 150)
            setwbWaHTailCountState(wbWaHTailCount + 100)
            setwbWaHHornCountState(wbWaHHornCount + 30)
            setwbWaHHeartCountState(wbWaHHeartCount + 10)
            setwbWaHOriCountState(wbWaHOriCount + 30)
            setwbWaHRupeeCost(parseFloat(wbWaHRupeeCost + 10))
            setallwbWaHSphereCount(allwbWaHSphereCount + 150)
            setallwbWaHTailCount(allwbWaHTailCount + 100)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 10))
        }
    }

    function waterSwordRefine() {
        if (waterHSwordRefineState == "grayscale(100%)") {
            setWaterHSwordRefineState("grayscale(0%)")
            setWaterHWeaponChoiceState("sword")
            setwbWaHSphereCountState(wbWaHSphereCount - 50)
            setwbWaHTailCountState(wbWaHTailCount - 40)
            setwbWaHHornCountState(wbWaHHornCount - 30)
            setwbWaHHeartCountState(wbWaHHeartCount - 10)
            setwbWaHOriCountState(wbWaHOriCount - 3)
            setwbWaHRupeeCost(parseFloat(wbWaHRupeeCost - 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount - 50)
            setallwbWaHTailCount(allwbWaHTailCount - 40)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.5))
        }
        else if (waterHSwordRefineState == "grayscale(0%)") {
            setWaterHSwordRefineState("grayscale(100%)")
            setWaterHWeaponChoiceState("sword")
            setwbWaHSphereCountState(wbWaHSphereCount + 50)
            setwbWaHTailCountState(wbWaHTailCount + 40)
            setwbWaHHornCountState(wbWaHHornCount + 30)
            setwbWaHHeartCountState(wbWaHHeartCount + 10)
            setwbWaHOriCountState(wbWaHOriCount + 3)
            setwbWaHRupeeCost(parseFloat(wbWaHRupeeCost + 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount + 50)
            setallwbWaHTailCount(allwbWaHTailCount + 40)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.5))
        }
    }

    function handleWaterSwordUnbindIncrement(event) {
        setWaterHWeaponChoiceState("sword");
        if (waterHSwordUnbindState < event.target.value) {
            if (event.target.value - waterHSwordUnbindState == 1) {
                setWaterHSwordUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWaHSphereCountState(wbWaHSphereCount - 25)
                    setwbWaHTailCountState(wbWaHTailCount - 18)
                    setwbWaHHeartCountState(wbWaHHeartCount - 5)
                    setwbWaHOriCountState(wbWaHOriCount - 1)
                    setwbWaHRupeeCost(parseFloat(wbWaHRupeeCost - 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 25)
                    setallwbWaHTailCount(allwbWaHTailCount - 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 5)
                    setallwbWaHOriCount(allwbWaHOriCount - 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWaHSphereCountState(wbWaHSphereCount - 175)
                    setwbWaHTailCountState(wbWaHTailCount - 130)
                    setwbWaHHornCountState(wbWaHHornCount - 30)
                    setwbWaHHeartCountState(wbWaHHeartCount - 35)
                    setwbWaHOriCountState(wbWaHOriCount - 8)
                    setwbWaHRupeeCost(parseFloat(wbWaHRupeeCost - 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 175)
                    setallwbWaHTailCount(allwbWaHTailCount - 130)
                    setallwbWaHHornCount(allwbWaHHornCount - 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 35)
                    setallwbWaHOriCount(allwbWaHOriCount - 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 7.5))
                }
            }
        }
        else if (waterHSwordUnbindState > event.target.value) {
            if (waterHSwordUnbindState - event.target.value == 1) {
                setWaterHSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWaHSphereCountState(wbWaHSphereCount + 25)
                    setwbWaHTailCountState(wbWaHTailCount + 18)
                    setwbWaHHeartCountState(wbWaHHeartCount + 5)
                    setwbWaHOriCountState(wbWaHOriCount + 1)
                    setwbWaHRupeeCost(parseFloat(wbWaHRupeeCost + 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 25)
                    setallwbWaHTailCount(allwbWaHTailCount + 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 5)
                    setallwbWaHOriCount(allwbWaHOriCount + 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWaHSphereCountState(wbWaHSphereCount + 175)
                    setwbWaHTailCountState(wbWaHTailCount + 130)
                    setwbWaHHornCountState(wbWaHHornCount + 30)
                    setwbWaHHeartCountState(wbWaHHeartCount + 35)
                    setwbWaHOriCountState(wbWaHOriCount + 8)
                    setwbWaHRupeeCost(parseFloat(wbWaHRupeeCost + 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 175)
                    setallwbWaHTailCount(allwbWaHTailCount + 130)
                    setallwbWaHHornCount(allwbWaHHornCount + 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 35)
                    setallwbWaHOriCount(allwbWaHOriCount + 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterBlade() {
        if (waterHBladeCraftState == "grayscale(100%)") {
            setWaterHBladeCraftState("grayscale(0%)")
            setWaterHWeaponChoiceState("blade")
            setwbWaHBlSphereCountState(wbWaHBlSphereCount - 25)
            setwbWaHBlTailCountState(wbWaHBlTailCount - 18)
            setwbWaHBlHeartCountState(wbWaHBlHeartCount - 5)
            setwbWaHBlOriCountState(wbWaHBlOriCount - 1)
            setwbWaHBlRupeeCost(parseFloat(wbWaHBlRupeeCost - 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount - 25)
            setallwbWaHTailCount(allwbWaHTailCount - 18)
            setallwbWaHHeartCount(allwbWaHHeartCount - 5)
            setallwbWaHOriCount(allwbWaHOriCount - 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
        }
        else if (waterHBladeCraftState == "grayscale(0%)") {
            setWaterHBladeCraftState("grayscale(100%)")
            setWaterHWeaponChoiceState("blade")
            setwbWaHBlSphereCountState(wbWaHBlSphereCount + 25)
            setwbWaHBlTailCountState(wbWaHBlTailCount + 18)
            setwbWaHBlHeartCountState(wbWaHBlHeartCount + 5)
            setwbWaHBlOriCountState(wbWaHBlOriCount + 1)
            setwbWaHBlRupeeCost(parseFloat(wbWaHBlRupeeCost + 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount + 25)
            setallwbWaHTailCount(allwbWaHTailCount + 18)
            setallwbWaHHeartCount(allwbWaHHeartCount + 5)
            setallwbWaHOriCount(allwbWaHOriCount + 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
        }
    }

    function waterBladeWeaponBonus() {
        if (waterHBladeWeaponBonusState == "grayscale(100%)") {
            setWaterHBladeWeaponBonusState("grayscale(0%)")
            setWaterHWeaponChoiceState("blade")
            setwbWaHBlSphereCountState(wbWaHBlSphereCount - 150)
            setwbWaHBlTailCountState(wbWaHBlTailCount - 100)
            setwbWaHBlHornCountState(wbWaHBlHornCount - 30)
            setwbWaHBlHeartCountState(wbWaHBlHeartCount - 10)
            setwbWaHBlOriCountState(wbWaHBlOriCount - 30)
            setwbWaHBlRupeeCost(parseFloat(wbWaHBlRupeeCost - 10))
            setallwbWaHSphereCount(allwbWaHSphereCount - 150)
            setallwbWaHTailCount(allwbWaHTailCount - 100)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 10))
        }
        else if (waterHBladeWeaponBonusState == "grayscale(0%)") {
            setWaterHBladeWeaponBonusState("grayscale(100%)")
            setWaterHWeaponChoiceState("blade")
            setwbWaHBlSphereCountState(wbWaHBlSphereCount + 150)
            setwbWaHBlTailCountState(wbWaHBlTailCount + 100)
            setwbWaHBlHornCountState(wbWaHBlHornCount + 30)
            setwbWaHBlHeartCountState(wbWaHBlHeartCount + 10)
            setwbWaHBlOriCountState(wbWaHBlOriCount + 30)
            setwbWaHBlRupeeCost(parseFloat(wbWaHBlRupeeCost + 10))
            setallwbWaHSphereCount(allwbWaHSphereCount + 150)
            setallwbWaHTailCount(allwbWaHTailCount + 100)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 10))
        }
    }

    function waterBladeRefine() {
        if (waterHBladeRefineState == "grayscale(100%)") {
            setWaterHBladeRefineState("grayscale(0%)")
            setWaterHWeaponChoiceState("blade")
            setwbWaHBlSphereCountState(wbWaHBlSphereCount - 50)
            setwbWaHBlTailCountState(wbWaHBlTailCount - 40)
            setwbWaHBlHornCountState(wbWaHBlHornCount - 30)
            setwbWaHBlHeartCountState(wbWaHBlHeartCount - 10)
            setwbWaHBlOriCountState(wbWaHBlOriCount - 3)
            setwbWaHBlRupeeCost(parseFloat(wbWaHBlRupeeCost - 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount - 50)
            setallwbWaHTailCount(allwbWaHTailCount - 40)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.5))
        }
        else if (waterHBladeRefineState == "grayscale(0%)") {
            setWaterHBladeRefineState("grayscale(100%)")
            setWaterHWeaponChoiceState("blade")
            setwbWaHBlSphereCountState(wbWaHBlSphereCount + 50)
            setwbWaHBlTailCountState(wbWaHBlTailCount + 40)
            setwbWaHBlHornCountState(wbWaHBlHornCount + 30)
            setwbWaHBlHeartCountState(wbWaHBlHeartCount + 10)
            setwbWaHBlOriCountState(wbWaHBlOriCount + 3)
            setwbWaHBlRupeeCost(parseFloat(wbWaHBlRupeeCost + 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount + 50)
            setallwbWaHTailCount(allwbWaHTailCount + 40)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.5))
        }
    }

    function handleWaterBladeUnbindIncrement(event) {
        setWaterHWeaponChoiceState("blade");
        if (waterHBladeUnbindState < event.target.value) {
            if (event.target.value - waterHBladeUnbindState == 1) {
                setWaterHBladeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWaHBlSphereCountState(wbWaHBlSphereCount - 25)
                    setwbWaHBlTailCountState(wbWaHBlTailCount - 18)
                    setwbWaHBlHeartCountState(wbWaHBlHeartCount - 5)
                    setwbWaHBlOriCountState(wbWaHBlOriCount - 1)
                    setwbWaHBlRupeeCost(parseFloat(wbWaHBlRupeeCost - 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 25)
                    setallwbWaHTailCount(allwbWaHTailCount - 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 5)
                    setallwbWaHOriCount(allwbWaHOriCount - 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWaHBlSphereCountState(wbWaHBlSphereCount - 175)
                    setwbWaHBlTailCountState(wbWaHBlTailCount - 130)
                    setwbWaHBlHornCountState(wbWaHBlHornCount - 30)
                    setwbWaHBlHeartCountState(wbWaHBlHeartCount - 35)
                    setwbWaHBlOriCountState(wbWaHBlOriCount - 8)
                    setwbWaHBlRupeeCost(parseFloat(wbWaHBlRupeeCost - 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 175)
                    setallwbWaHTailCount(allwbWaHTailCount - 130)
                    setallwbWaHHornCount(allwbWaHHornCount - 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 35)
                    setallwbWaHOriCount(allwbWaHOriCount - 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 7.5))
                }
            }
        }
        else if (waterHBladeUnbindState > event.target.value) {
            if (waterHBladeUnbindState - event.target.value == 1) {
                setWaterHBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWaHBlSphereCountState(wbWaHBlSphereCount + 25)
                    setwbWaHBlTailCountState(wbWaHBlTailCount + 18)
                    setwbWaHBlHeartCountState(wbWaHBlHeartCount + 5)
                    setwbWaHBlOriCountState(wbWaHBlOriCount + 1)
                    setwbWaHBlRupeeCost(parseFloat(wbWaHBlRupeeCost + 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 25)
                    setallwbWaHTailCount(allwbWaHTailCount + 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 5)
                    setallwbWaHOriCount(allwbWaHOriCount + 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWaHBlSphereCountState(wbWaHBlSphereCount + 175)
                    setwbWaHBlTailCountState(wbWaHBlTailCount + 130)
                    setwbWaHBlHornCountState(wbWaHBlHornCount + 30)
                    setwbWaHBlHeartCountState(wbWaHBlHeartCount + 35)
                    setwbWaHBlOriCountState(wbWaHBlOriCount + 8)
                    setwbWaHBlRupeeCost(parseFloat(wbWaHBlRupeeCost + 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 175)
                    setallwbWaHTailCount(allwbWaHTailCount + 130)
                    setallwbWaHHornCount(allwbWaHHornCount + 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 35)
                    setallwbWaHOriCount(allwbWaHOriCount + 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterDagger() {
        if (waterHDaggerCraftState == "grayscale(100%)") {
            setWaterHDaggerCraftState("grayscale(0%)")
            setWaterHWeaponChoiceState("dagger")
            setwbWaHDSphereCountState(wbWaHDSphereCount - 25)
            setwbWaHDTailCountState(wbWaHDTailCount - 18)
            setwbWaHDHeartCountState(wbWaHDHeartCount - 5)
            setwbWaHDOriCountState(wbWaHDOriCount - 1)
            setwbWaHDRupeeCost(parseFloat(wbWaHDRupeeCost - 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount - 25)
            setallwbWaHTailCount(allwbWaHTailCount - 18)
            setallwbWaHHeartCount(allwbWaHHeartCount - 5)
            setallwbWaHOriCount(allwbWaHOriCount - 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
        }
        else if (waterHDaggerCraftState == "grayscale(0%)") {
            setWaterHDaggerCraftState("grayscale(100%)")
            setWaterHWeaponChoiceState("dagger")
            setwbWaHDSphereCountState(wbWaHDSphereCount + 25)
            setwbWaHDTailCountState(wbWaHDTailCount + 18)
            setwbWaHDHeartCountState(wbWaHDHeartCount + 5)
            setwbWaHDOriCountState(wbWaHDOriCount + 1)
            setwbWaHDRupeeCost(parseFloat(wbWaHDRupeeCost + 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount + 25)
            setallwbWaHTailCount(allwbWaHTailCount + 18)
            setallwbWaHHeartCount(allwbWaHHeartCount + 5)
            setallwbWaHOriCount(allwbWaHOriCount + 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
        }
    }

    function waterDaggerWeaponBonus() {
        if (waterHDaggerWeaponBonusState == "grayscale(100%)") {
            setWaterHDaggerWeaponBonusState("grayscale(0%)")
            setWaterHWeaponChoiceState("dagger")
            setwbWaHDSphereCountState(wbWaHDSphereCount - 150)
            setwbWaHDTailCountState(wbWaHDTailCount - 100)
            setwbWaHDHornCountState(wbWaHDHornCount - 30)
            setwbWaHDHeartCountState(wbWaHDHeartCount - 10)
            setwbWaHDOriCountState(wbWaHDOriCount - 30)
            setwbWaHDRupeeCost(parseFloat(wbWaHDRupeeCost - 10))
            setallwbWaHSphereCount(allwbWaHSphereCount - 150)
            setallwbWaHTailCount(allwbWaHTailCount - 100)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 10))
        }
        else if (waterHDaggerWeaponBonusState == "grayscale(0%)") {
            setWaterHDaggerWeaponBonusState("grayscale(100%)")
            setWaterHWeaponChoiceState("dagger")
            setwbWaHDSphereCountState(wbWaHDSphereCount + 150)
            setwbWaHDTailCountState(wbWaHDTailCount + 100)
            setwbWaHDHornCountState(wbWaHDHornCount + 30)
            setwbWaHDHeartCountState(wbWaHDHeartCount + 10)
            setwbWaHDOriCountState(wbWaHDOriCount + 30)
            setwbWaHDRupeeCost(parseFloat(wbWaHDRupeeCost + 10))
            setallwbWaHSphereCount(allwbWaHSphereCount + 150)
            setallwbWaHTailCount(allwbWaHTailCount + 100)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 10))
        }
    }

    function waterDaggerRefine() {
        if (waterHDaggerRefineState == "grayscale(100%)") {
            setWaterHDaggerRefineState("grayscale(0%)")
            setWaterHWeaponChoiceState("dagger")
            setwbWaHDSphereCountState(wbWaHDSphereCount - 50)
            setwbWaHDTailCountState(wbWaHDTailCount - 40)
            setwbWaHDHornCountState(wbWaHDHornCount - 30)
            setwbWaHDHeartCountState(wbWaHDHeartCount - 10)
            setwbWaHDOriCountState(wbWaHDOriCount - 3)
            setwbWaHDRupeeCost(parseFloat(wbWaHDRupeeCost - 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount - 50)
            setallwbWaHTailCount(allwbWaHTailCount - 40)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.5))
        }
        else if (waterHDaggerRefineState == "grayscale(0%)") {
            setWaterHDaggerRefineState("grayscale(100%)")
            setWaterHWeaponChoiceState("dagger")
            setwbWaHDSphereCountState(wbWaHDSphereCount + 50)
            setwbWaHDTailCountState(wbWaHDTailCount + 40)
            setwbWaHDHornCountState(wbWaHDHornCount + 30)
            setwbWaHDHeartCountState(wbWaHDHeartCount + 10)
            setwbWaHDOriCountState(wbWaHDOriCount + 3)
            setwbWaHDRupeeCost(parseFloat(wbWaHDRupeeCost + 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount + 50)
            setallwbWaHTailCount(allwbWaHTailCount + 40)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.5))
        }
    }

    function handleWaterDaggerUnbindIncrement(event) {
        setWaterHWeaponChoiceState("dagger");
        if (waterHDaggerUnbindState < event.target.value) {
            if (event.target.value - waterHDaggerUnbindState == 1) {
                setWaterHDaggerUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWaHDSphereCountState(wbWaHDSphereCount - 25)
                    setwbWaHDTailCountState(wbWaHDTailCount - 18)
                    setwbWaHDHeartCountState(wbWaHDHeartCount - 5)
                    setwbWaHDOriCountState(wbWaHDOriCount - 1)
                    setwbWaHDRupeeCost(parseFloat(wbWaHDRupeeCost - 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 25)
                    setallwbWaHTailCount(allwbWaHTailCount - 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 5)
                    setallwbWaHOriCount(allwbWaHOriCount - 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWaHDSphereCountState(wbWaHDSphereCount - 175)
                    setwbWaHDTailCountState(wbWaHDTailCount - 130)
                    setwbWaHDHornCountState(wbWaHDHornCount - 30)
                    setwbWaHDHeartCountState(wbWaHDHeartCount - 35)
                    setwbWaHDOriCountState(wbWaHDOriCount - 8)
                    setwbWaHDRupeeCost(parseFloat(wbWaHDRupeeCost - 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 175)
                    setallwbWaHTailCount(allwbWaHTailCount - 130)
                    setallwbWaHHornCount(allwbWaHHornCount - 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 35)
                    setallwbWaHOriCount(allwbWaHOriCount - 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 7.5))
                }
            }
        }
        else if (waterHDaggerUnbindState > event.target.value) {
            if (waterHDaggerUnbindState - event.target.value == 1) {
                setWaterHDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWaHDSphereCountState(wbWaHDSphereCount + 25)
                    setwbWaHDTailCountState(wbWaHDTailCount + 18)
                    setwbWaHDHeartCountState(wbWaHDHeartCount + 5)
                    setwbWaHDOriCountState(wbWaHDOriCount + 1)
                    setwbWaHDRupeeCost(parseFloat(wbWaHDRupeeCost + 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 25)
                    setallwbWaHTailCount(allwbWaHTailCount + 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 5)
                    setallwbWaHOriCount(allwbWaHOriCount + 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWaHDSphereCountState(wbWaHDSphereCount + 175)
                    setwbWaHDTailCountState(wbWaHDTailCount + 130)
                    setwbWaHDHornCountState(wbWaHDHornCount + 30)
                    setwbWaHDHeartCountState(wbWaHDHeartCount + 35)
                    setwbWaHDOriCountState(wbWaHDOriCount + 8)
                    setwbWaHDRupeeCost(parseFloat(wbWaHDRupeeCost + 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 175)
                    setallwbWaHTailCount(allwbWaHTailCount + 130)
                    setallwbWaHHornCount(allwbWaHHornCount + 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 35)
                    setallwbWaHOriCount(allwbWaHOriCount + 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterAxe() {
        if (waterHAxeCraftState == "grayscale(100%)") {
            setWaterHAxeCraftState("grayscale(0%)")
            setWaterHWeaponChoiceState("axe")
            setwbWaHASphereCountState(wbWaHASphereCount - 25)
            setwbWaHATailCountState(wbWaHATailCount - 18)
            setwbWaHAHeartCountState(wbWaHAHeartCount - 5)
            setwbWaHAOriCountState(wbWaHAOriCount - 1)
            setwbWaHARupeeCost(parseFloat(wbWaHARupeeCost - 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount - 25)
            setallwbWaHTailCount(allwbWaHTailCount - 18)
            setallwbWaHHeartCount(allwbWaHHeartCount - 5)
            setallwbWaHOriCount(allwbWaHOriCount - 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
        }
        else if (waterHAxeCraftState == "grayscale(0%)") {
            setWaterHAxeCraftState("grayscale(100%)")
            setWaterHWeaponChoiceState("axe")
            setwbWaHASphereCountState(wbWaHASphereCount + 25)
            setwbWaHATailCountState(wbWaHATailCount + 18)
            setwbWaHAHeartCountState(wbWaHAHeartCount + 5)
            setwbWaHAOriCountState(wbWaHAOriCount + 1)
            setwbWaHARupeeCost(parseFloat(wbWaHARupeeCost + 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount + 25)
            setallwbWaHTailCount(allwbWaHTailCount + 18)
            setallwbWaHHeartCount(allwbWaHHeartCount + 5)
            setallwbWaHOriCount(allwbWaHOriCount + 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
        }
    }

    function waterAxeWeaponBonus() {
        if (waterHAxeWeaponBonusState == "grayscale(100%)") {
            setWaterHAxeWeaponBonusState("grayscale(0%)")
            setWaterHWeaponChoiceState("axe")
            setwbWaHASphereCountState(wbWaHASphereCount - 150)
            setwbWaHATailCountState(wbWaHATailCount - 100)
            setwbWaHAHornCountState(wbWaHAHornCount - 30)
            setwbWaHAHeartCountState(wbWaHAHeartCount - 10)
            setwbWaHAOriCountState(wbWaHAOriCount - 30)
            setwbWaHARupeeCost(parseFloat(wbWaHARupeeCost - 10))
            setallwbWaHSphereCount(allwbWaHSphereCount - 150)
            setallwbWaHTailCount(allwbWaHTailCount - 100)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 10))
        }
        else if (waterHAxeWeaponBonusState == "grayscale(0%)") {
            setWaterHAxeWeaponBonusState("grayscale(100%)")
            setWaterHWeaponChoiceState("axe")
            setwbWaHASphereCountState(wbWaHASphereCount + 150)
            setwbWaHATailCountState(wbWaHATailCount + 100)
            setwbWaHAHornCountState(wbWaHAHornCount + 30)
            setwbWaHAHeartCountState(wbWaHAHeartCount + 10)
            setwbWaHAOriCountState(wbWaHAOriCount + 30)
            setwbWaHARupeeCost(parseFloat(wbWaHARupeeCost + 10))
            setallwbWaHSphereCount(allwbWaHSphereCount + 150)
            setallwbWaHTailCount(allwbWaHTailCount + 100)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 10))
        }
    }

    function waterAxeRefine() {
        if (waterHAxeRefineState == "grayscale(100%)") {
            setWaterHAxeRefineState("grayscale(0%)")
            setWaterHWeaponChoiceState("axe")
            setwbWaHASphereCountState(wbWaHASphereCount - 50)
            setwbWaHATailCountState(wbWaHATailCount - 40)
            setwbWaHAHornCountState(wbWaHAHornCount - 30)
            setwbWaHAHeartCountState(wbWaHAHeartCount - 10)
            setwbWaHAOriCountState(wbWaHAOriCount - 3)
            setwbWaHARupeeCost(parseFloat(wbWaHARupeeCost - 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount - 50)
            setallwbWaHTailCount(allwbWaHTailCount - 40)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.5))
        }
        else if (waterHAxeRefineState == "grayscale(0%)") {
            setWaterHAxeRefineState("grayscale(100%)")
            setWaterHWeaponChoiceState("axe")
            setwbWaHASphereCountState(wbWaHASphereCount + 50)
            setwbWaHATailCountState(wbWaHATailCount + 40)
            setwbWaHAHornCountState(wbWaHAHornCount + 30)
            setwbWaHAHeartCountState(wbWaHAHeartCount + 10)
            setwbWaHAOriCountState(wbWaHAOriCount + 3)
            setwbWaHARupeeCost(parseFloat(wbWaHARupeeCost + 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount + 50)
            setallwbWaHTailCount(allwbWaHTailCount + 40)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.5))
        }
    }

    function handleWaterAxeUnbindIncrement(event) {
        setWaterHWeaponChoiceState("axe");
        if (waterHAxeUnbindState < event.target.value) {
            if (event.target.value - waterHAxeUnbindState == 1) {
                setWaterHAxeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWaHASphereCountState(wbWaHASphereCount - 25)
                    setwbWaHATailCountState(wbWaHATailCount - 18)
                    setwbWaHAHeartCountState(wbWaHAHeartCount - 5)
                    setwbWaHAOriCountState(wbWaHAOriCount - 1)
                    setwbWaHARupeeCost(parseFloat(wbWaHARupeeCost - 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 25)
                    setallwbWaHTailCount(allwbWaHTailCount - 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 5)
                    setallwbWaHOriCount(allwbWaHOriCount - 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWaHASphereCountState(wbWaHASphereCount - 175)
                    setwbWaHATailCountState(wbWaHATailCount - 130)
                    setwbWaHAHornCountState(wbWaHAHornCount - 30)
                    setwbWaHAHeartCountState(wbWaHAHeartCount - 35)
                    setwbWaHAOriCountState(wbWaHAOriCount - 8)
                    setwbWaHARupeeCost(parseFloat(wbWaHARupeeCost - 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 175)
                    setallwbWaHTailCount(allwbWaHTailCount - 130)
                    setallwbWaHHornCount(allwbWaHHornCount - 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 35)
                    setallwbWaHOriCount(allwbWaHOriCount - 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 7.5))
                }
            }
        }
        else if (waterHAxeUnbindState > event.target.value) {
            if (waterHAxeUnbindState - event.target.value == 1) {
                setWaterHAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWaHASphereCountState(wbWaHASphereCount + 25)
                    setwbWaHATailCountState(wbWaHATailCount + 18)
                    setwbWaHAHeartCountState(wbWaHAHeartCount + 5)
                    setwbWaHAOriCountState(wbWaHAOriCount + 1)
                    setwbWaHARupeeCost(parseFloat(wbWaHARupeeCost + 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 25)
                    setallwbWaHTailCount(allwbWaHTailCount + 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 5)
                    setallwbWaHOriCount(allwbWaHOriCount + 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWaHASphereCountState(wbWaHASphereCount + 175)
                    setwbWaHATailCountState(wbWaHATailCount + 130)
                    setwbWaHAHornCountState(wbWaHAHornCount + 30)
                    setwbWaHAHeartCountState(wbWaHAHeartCount + 35)
                    setwbWaHAOriCountState(wbWaHAOriCount + 8)
                    setwbWaHARupeeCost(parseFloat(wbWaHARupeeCost + 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 175)
                    setallwbWaHTailCount(allwbWaHTailCount + 130)
                    setallwbWaHHornCount(allwbWaHHornCount + 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 35)
                    setallwbWaHOriCount(allwbWaHOriCount + 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterLance() {
        if (waterHLanceCraftState == "grayscale(100%)") {
            setWaterHLanceCraftState("grayscale(0%)")
            setWaterHWeaponChoiceState("lance")
            setwbWaHLSphereCountState(wbWaHLSphereCount - 25)
            setwbWaHLTailCountState(wbWaHLTailCount - 18)
            setwbWaHLHeartCountState(wbWaHLHeartCount - 5)
            setwbWaHLOriCountState(wbWaHLOriCount - 1)
            setwbWaHLRupeeCost(parseFloat(wbWaHLRupeeCost - 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount - 25)
            setallwbWaHTailCount(allwbWaHTailCount - 18)
            setallwbWaHHeartCount(allwbWaHHeartCount - 5)
            setallwbWaHOriCount(allwbWaHOriCount - 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
        }
        else if (waterHLanceCraftState == "grayscale(0%)") {
            setWaterHLanceCraftState("grayscale(100%)")
            setWaterHWeaponChoiceState("lance")
            setwbWaHLSphereCountState(wbWaHLSphereCount + 25)
            setwbWaHLTailCountState(wbWaHLTailCount + 18)
            setwbWaHLHeartCountState(wbWaHLHeartCount + 5)
            setwbWaHLOriCountState(wbWaHLOriCount + 1)
            setwbWaHLRupeeCost(parseFloat(wbWaHLRupeeCost + 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount + 25)
            setallwbWaHTailCount(allwbWaHTailCount + 18)
            setallwbWaHHeartCount(allwbWaHHeartCount + 5)
            setallwbWaHOriCount(allwbWaHOriCount + 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
        }
    }

    function waterLanceWeaponBonus() {
        if (waterHLanceWeaponBonusState == "grayscale(100%)") {
            setWaterHLanceWeaponBonusState("grayscale(0%)")
            setWaterHWeaponChoiceState("lance")
            setwbWaHLSphereCountState(wbWaHLSphereCount - 150)
            setwbWaHLTailCountState(wbWaHLTailCount - 100)
            setwbWaHLHornCountState(wbWaHLHornCount - 30)
            setwbWaHLHeartCountState(wbWaHLHeartCount - 10)
            setwbWaHLOriCountState(wbWaHLOriCount - 30)
            setwbWaHLRupeeCost(parseFloat(wbWaHLRupeeCost - 10))
            setallwbWaHSphereCount(allwbWaHSphereCount - 150)
            setallwbWaHTailCount(allwbWaHTailCount - 100)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 10))
        }
        else if (waterHLanceWeaponBonusState == "grayscale(0%)") {
            setWaterHLanceWeaponBonusState("grayscale(100%)")
            setWaterHWeaponChoiceState("lance")
            setwbWaHLSphereCountState(wbWaHLSphereCount + 150)
            setwbWaHLTailCountState(wbWaHLTailCount + 100)
            setwbWaHLHornCountState(wbWaHLHornCount + 30)
            setwbWaHLHeartCountState(wbWaHLHeartCount + 10)
            setwbWaHLOriCountState(wbWaHLOriCount + 30)
            setwbWaHLRupeeCost(parseFloat(wbWaHLRupeeCost + 10))
            setallwbWaHSphereCount(allwbWaHSphereCount + 150)
            setallwbWaHTailCount(allwbWaHTailCount + 100)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 10))
        }
    }

    function waterLanceRefine() {
        if (waterHLanceRefineState == "grayscale(100%)") {
            setWaterHLanceRefineState("grayscale(0%)")
            setWaterHWeaponChoiceState("lance")
            setwbWaHLSphereCountState(wbWaHLSphereCount - 50)
            setwbWaHLTailCountState(wbWaHLTailCount - 40)
            setwbWaHLHornCountState(wbWaHLHornCount - 30)
            setwbWaHLHeartCountState(wbWaHLHeartCount - 10)
            setwbWaHLOriCountState(wbWaHLOriCount - 3)
            setwbWaHLRupeeCost(parseFloat(wbWaHLRupeeCost - 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount - 50)
            setallwbWaHTailCount(allwbWaHTailCount - 40)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.5))
        }
        else if (waterHLanceRefineState == "grayscale(0%)") {
            setWaterHLanceRefineState("grayscale(100%)")
            setWaterHWeaponChoiceState("lance")
            setwbWaHLSphereCountState(wbWaHLSphereCount + 50)
            setwbWaHLTailCountState(wbWaHLTailCount + 40)
            setwbWaHLHornCountState(wbWaHLHornCount + 30)
            setwbWaHLHeartCountState(wbWaHLHeartCount + 10)
            setwbWaHLOriCountState(wbWaHLOriCount + 3)
            setwbWaHLRupeeCost(parseFloat(wbWaHLRupeeCost + 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount + 50)
            setallwbWaHTailCount(allwbWaHTailCount + 40)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.5))
        }
    }

    function handleWaterLanceUnbindIncrement(event) {
        setWaterHWeaponChoiceState("lance");
        if (waterHLanceUnbindState < event.target.value) {
            if (event.target.value - waterHLanceUnbindState == 1) {
                setWaterHLanceUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWaHLSphereCountState(wbWaHLSphereCount - 25)
                    setwbWaHLTailCountState(wbWaHLTailCount - 18)
                    setwbWaHLHeartCountState(wbWaHLHeartCount - 5)
                    setwbWaHLOriCountState(wbWaHLOriCount - 1)
                    setwbWaHLRupeeCost(parseFloat(wbWaHLRupeeCost - 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 25)
                    setallwbWaHTailCount(allwbWaHTailCount - 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 5)
                    setallwbWaHOriCount(allwbWaHOriCount - 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWaHLSphereCountState(wbWaHLSphereCount - 175)
                    setwbWaHLTailCountState(wbWaHLTailCount - 130)
                    setwbWaHLHornCountState(wbWaHLHornCount - 30)
                    setwbWaHLHeartCountState(wbWaHLHeartCount - 35)
                    setwbWaHLOriCountState(wbWaHLOriCount - 8)
                    setwbWaHLRupeeCost(parseFloat(wbWaHLRupeeCost - 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 175)
                    setallwbWaHTailCount(allwbWaHTailCount - 130)
                    setallwbWaHHornCount(allwbWaHHornCount - 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 35)
                    setallwbWaHOriCount(allwbWaHOriCount - 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 7.5))
                }
            }
        }
        else if (waterHLanceUnbindState > event.target.value) {
            if (waterHLanceUnbindState - event.target.value == 1) {
                setWaterHLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWaHLSphereCountState(wbWaHLSphereCount + 25)
                    setwbWaHLTailCountState(wbWaHLTailCount + 18)
                    setwbWaHLHeartCountState(wbWaHLHeartCount + 5)
                    setwbWaHLOriCountState(wbWaHLOriCount + 1)
                    setwbWaHLRupeeCost(parseFloat(wbWaHLRupeeCost + 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 25)
                    setallwbWaHTailCount(allwbWaHTailCount + 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 5)
                    setallwbWaHOriCount(allwbWaHOriCount + 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWaHLSphereCountState(wbWaHLSphereCount + 175)
                    setwbWaHLTailCountState(wbWaHLTailCount + 130)
                    setwbWaHLHornCountState(wbWaHLHornCount + 30)
                    setwbWaHLHeartCountState(wbWaHLHeartCount + 35)
                    setwbWaHLOriCountState(wbWaHLOriCount + 8)
                    setwbWaHLRupeeCost(parseFloat(wbWaHLRupeeCost + 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 175)
                    setallwbWaHTailCount(allwbWaHTailCount + 130)
                    setallwbWaHHornCount(allwbWaHHornCount + 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 35)
                    setallwbWaHOriCount(allwbWaHOriCount + 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterBow() {
        if (waterHBowCraftState == "grayscale(100%)") {
            setWaterHBowCraftState("grayscale(0%)")
            setWaterHWeaponChoiceState("bow")
            setwbWaHBoSphereCountState(wbWaHBoSphereCount - 25)
            setwbWaHBoTailCountState(wbWaHBoTailCount - 18)
            setwbWaHBoHeartCountState(wbWaHBoHeartCount - 5)
            setwbWaHBoOriCountState(wbWaHBoOriCount - 1)
            setwbWaHBoRupeeCost(parseFloat(wbWaHBoRupeeCost - 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount - 25)
            setallwbWaHTailCount(allwbWaHTailCount - 18)
            setallwbWaHHeartCount(allwbWaHHeartCount - 5)
            setallwbWaHOriCount(allwbWaHOriCount - 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
        }
        else if (waterHBowCraftState == "grayscale(0%)") {
            setWaterHBowCraftState("grayscale(100%)")
            setWaterHWeaponChoiceState("bow")
            setwbWaHBoSphereCountState(wbWaHBoSphereCount + 25)
            setwbWaHBoTailCountState(wbWaHBoTailCount + 18)
            setwbWaHBoHeartCountState(wbWaHBoHeartCount + 5)
            setwbWaHBoOriCountState(wbWaHBoOriCount + 1)
            setwbWaHBoRupeeCost(parseFloat(wbWaHBoRupeeCost + 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount + 25)
            setallwbWaHTailCount(allwbWaHTailCount + 18)
            setallwbWaHHeartCount(allwbWaHHeartCount + 5)
            setallwbWaHOriCount(allwbWaHOriCount + 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
        }
    }

    function waterBowWeaponBonus() {
        if (waterHBowWeaponBonusState == "grayscale(100%)") {
            setWaterHBowWeaponBonusState("grayscale(0%)")
            setWaterHWeaponChoiceState("bow")
            setwbWaHBoSphereCountState(wbWaHBoSphereCount - 150)
            setwbWaHBoTailCountState(wbWaHBoTailCount - 100)
            setwbWaHBoHornCountState(wbWaHBoHornCount - 30)
            setwbWaHBoHeartCountState(wbWaHBoHeartCount - 10)
            setwbWaHBoOriCountState(wbWaHBoOriCount - 30)
            setwbWaHBoRupeeCost(parseFloat(wbWaHBoRupeeCost - 10))
            setallwbWaHSphereCount(allwbWaHSphereCount - 150)
            setallwbWaHTailCount(allwbWaHTailCount - 100)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 10))
        }
        else if (waterHBowWeaponBonusState == "grayscale(0%)") {
            setWaterHBowWeaponBonusState("grayscale(100%)")
            setWaterHWeaponChoiceState("bow")
            setwbWaHBoSphereCountState(wbWaHBoSphereCount + 150)
            setwbWaHBoTailCountState(wbWaHBoTailCount + 100)
            setwbWaHBoHornCountState(wbWaHBoHornCount + 30)
            setwbWaHBoHeartCountState(wbWaHBoHeartCount + 10)
            setwbWaHBoOriCountState(wbWaHBoOriCount + 30)
            setwbWaHBoRupeeCost(parseFloat(wbWaHBoRupeeCost + 10))
            setallwbWaHSphereCount(allwbWaHSphereCount + 150)
            setallwbWaHTailCount(allwbWaHTailCount + 100)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 10))
        }
    }

    function waterBowRefine() {
        if (waterHBowRefineState == "grayscale(100%)") {
            setWaterHBowRefineState("grayscale(0%)")
            setWaterHWeaponChoiceState("bow")
            setwbWaHBoSphereCountState(wbWaHBoSphereCount - 50)
            setwbWaHBoTailCountState(wbWaHBoTailCount - 40)
            setwbWaHBoHornCountState(wbWaHBoHornCount - 30)
            setwbWaHBoHeartCountState(wbWaHBoHeartCount - 10)
            setwbWaHBoOriCountState(wbWaHBoOriCount - 3)
            setwbWaHBoRupeeCost(parseFloat(wbWaHBoRupeeCost - 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount - 50)
            setallwbWaHTailCount(allwbWaHTailCount - 40)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.5))
        }
        else if (waterHBowRefineState == "grayscale(0%)") {
            setWaterHBowRefineState("grayscale(100%)")
            setWaterHWeaponChoiceState("bow")
            setwbWaHBoSphereCountState(wbWaHBoSphereCount + 50)
            setwbWaHBoTailCountState(wbWaHBoTailCount + 40)
            setwbWaHBoHornCountState(wbWaHBoHornCount + 30)
            setwbWaHBoHeartCountState(wbWaHBoHeartCount + 10)
            setwbWaHBoOriCountState(wbWaHBoOriCount + 3)
            setwbWaHBoRupeeCost(parseFloat(wbWaHBoRupeeCost + 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount + 50)
            setallwbWaHTailCount(allwbWaHTailCount + 40)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.5))
        }
    }

    function handleWaterBowUnbindIncrement(event) {
        setWaterHWeaponChoiceState("bow");
        if (waterHBowUnbindState < event.target.value) {
            if (event.target.value - waterHBowUnbindState == 1) {
                setWaterHBowUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWaHBoSphereCountState(wbWaHBoSphereCount - 25)
                    setwbWaHBoTailCountState(wbWaHBoTailCount - 18)
                    setwbWaHBoHeartCountState(wbWaHBoHeartCount - 5)
                    setwbWaHBoOriCountState(wbWaHBoOriCount - 1)
                    setwbWaHBoRupeeCost(parseFloat(wbWaHBoRupeeCost - 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 25)
                    setallwbWaHTailCount(allwbWaHTailCount - 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 5)
                    setallwbWaHOriCount(allwbWaHOriCount - 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWaHBoSphereCountState(wbWaHBoSphereCount - 175)
                    setwbWaHBoTailCountState(wbWaHBoTailCount - 130)
                    setwbWaHBoHornCountState(wbWaHBoHornCount - 30)
                    setwbWaHBoHeartCountState(wbWaHBoHeartCount - 35)
                    setwbWaHBoOriCountState(wbWaHBoOriCount - 8)
                    setwbWaHBoRupeeCost(parseFloat(wbWaHBoRupeeCost - 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 175)
                    setallwbWaHTailCount(allwbWaHTailCount - 130)
                    setallwbWaHHornCount(allwbWaHHornCount - 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 35)
                    setallwbWaHOriCount(allwbWaHOriCount - 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 7.5))
                }
            }
        }
        else if (waterHBowUnbindState > event.target.value) {
            if (waterHBowUnbindState - event.target.value == 1) {
                setWaterHBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWaHBoSphereCountState(wbWaHBoSphereCount + 25)
                    setwbWaHBoTailCountState(wbWaHBoTailCount + 18)
                    setwbWaHBoHeartCountState(wbWaHBoHeartCount + 5)
                    setwbWaHBoOriCountState(wbWaHBoOriCount + 1)
                    setwbWaHBoRupeeCost(parseFloat(wbWaHBoRupeeCost + 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 25)
                    setallwbWaHTailCount(allwbWaHTailCount + 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 5)
                    setallwbWaHOriCount(allwbWaHOriCount + 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWaHBoSphereCountState(wbWaHBoSphereCount + 175)
                    setwbWaHBoTailCountState(wbWaHBoTailCount + 130)
                    setwbWaHBoHornCountState(wbWaHBoHornCount + 30)
                    setwbWaHBoHeartCountState(wbWaHBoHeartCount + 35)
                    setwbWaHBoOriCountState(wbWaHBoOriCount + 8)
                    setwbWaHBoRupeeCost(parseFloat(wbWaHBoRupeeCost + 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 175)
                    setallwbWaHTailCount(allwbWaHTailCount + 130)
                    setallwbWaHHornCount(allwbWaHHornCount + 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 35)
                    setallwbWaHOriCount(allwbWaHOriCount + 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterWand() {
        if (waterHWandCraftState == "grayscale(100%)") {
            setWaterHWandCraftState("grayscale(0%)")
            setWaterHWeaponChoiceState("wand")
            setwbWaHWSphereCountState(wbWaHWSphereCount - 25)
            setwbWaHWTailCountState(wbWaHWTailCount - 18)
            setwbWaHWHeartCountState(wbWaHWHeartCount - 5)
            setwbWaHWOriCountState(wbWaHWOriCount - 1)
            setwbWaHWRupeeCost(parseFloat(wbWaHWRupeeCost - 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount - 25)
            setallwbWaHTailCount(allwbWaHTailCount - 18)
            setallwbWaHHeartCount(allwbWaHHeartCount - 5)
            setallwbWaHOriCount(allwbWaHOriCount - 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
        }
        else if (waterHWandCraftState == "grayscale(0%)") {
            setWaterHWandCraftState("grayscale(100%)")
            setWaterHWeaponChoiceState("wand")
            setwbWaHWSphereCountState(wbWaHWSphereCount + 25)
            setwbWaHWTailCountState(wbWaHWTailCount + 18)
            setwbWaHWHeartCountState(wbWaHWHeartCount + 5)
            setwbWaHWOriCountState(wbWaHWOriCount + 1)
            setwbWaHWRupeeCost(parseFloat(wbWaHWRupeeCost + 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount + 25)
            setallwbWaHTailCount(allwbWaHTailCount + 18)
            setallwbWaHHeartCount(allwbWaHHeartCount + 5)
            setallwbWaHOriCount(allwbWaHOriCount + 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
        }
    }

    function waterWandWeaponBonus() {
        if (waterHWandWeaponBonusState == "grayscale(100%)") {
            setWaterHWandWeaponBonusState("grayscale(0%)")
            setWaterHWeaponChoiceState("wand")
            setwbWaHWSphereCountState(wbWaHWSphereCount - 150)
            setwbWaHWTailCountState(wbWaHWTailCount - 100)
            setwbWaHWHornCountState(wbWaHWHornCount - 30)
            setwbWaHWHeartCountState(wbWaHWHeartCount - 10)
            setwbWaHWOriCountState(wbWaHWOriCount - 30)
            setwbWaHWRupeeCost(parseFloat(wbWaHWRupeeCost - 10))
            setallwbWaHSphereCount(allwbWaHSphereCount - 150)
            setallwbWaHTailCount(allwbWaHTailCount - 100)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 10))
        }
        else if (waterHWandWeaponBonusState == "grayscale(0%)") {
            setWaterHWandWeaponBonusState("grayscale(100%)")
            setWaterHWeaponChoiceState("wand")
            setwbWaHWSphereCountState(wbWaHWSphereCount + 150)
            setwbWaHWTailCountState(wbWaHWTailCount + 100)
            setwbWaHWHornCountState(wbWaHWHornCount + 30)
            setwbWaHWHeartCountState(wbWaHWHeartCount + 10)
            setwbWaHWOriCountState(wbWaHWOriCount + 30)
            setwbWaHWRupeeCost(parseFloat(wbWaHWRupeeCost + 10))
            setallwbWaHSphereCount(allwbWaHSphereCount + 150)
            setallwbWaHTailCount(allwbWaHTailCount + 100)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 10))
        }
    }

    function waterWandRefine() {
        if (waterHWandRefineState == "grayscale(100%)") {
            setWaterHWandRefineState("grayscale(0%)")
            setWaterHWeaponChoiceState("wand")
            setwbWaHWSphereCountState(wbWaHWSphereCount - 50)
            setwbWaHWTailCountState(wbWaHWTailCount - 40)
            setwbWaHWHornCountState(wbWaHWHornCount - 30)
            setwbWaHWHeartCountState(wbWaHWHeartCount - 10)
            setwbWaHWOriCountState(wbWaHWOriCount - 3)
            setwbWaHWRupeeCost(parseFloat(wbWaHWRupeeCost - 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount - 50)
            setallwbWaHTailCount(allwbWaHTailCount - 40)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.5))
        }
        else if (waterHWandRefineState == "grayscale(0%)") {
            setWaterHWandRefineState("grayscale(100%)")
            setWaterHWeaponChoiceState("wand")
            setwbWaHWSphereCountState(wbWaHWSphereCount + 50)
            setwbWaHWTailCountState(wbWaHWTailCount + 40)
            setwbWaHWHornCountState(wbWaHWHornCount + 30)
            setwbWaHWHeartCountState(wbWaHWHeartCount + 10)
            setwbWaHWOriCountState(wbWaHWOriCount + 3)
            setwbWaHWRupeeCost(parseFloat(wbWaHWRupeeCost + 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount + 50)
            setallwbWaHTailCount(allwbWaHTailCount + 40)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.5))
        }
    }

    function handleWaterWandUnbindIncrement(event) {
        setWaterHWeaponChoiceState("wand");
        if (waterHWandUnbindState < event.target.value) {
            if (event.target.value - waterHWandUnbindState == 1) {
                setWaterHWandUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWaHWSphereCountState(wbWaHWSphereCount - 25)
                    setwbWaHWTailCountState(wbWaHWTailCount - 18)
                    setwbWaHWHeartCountState(wbWaHWHeartCount - 5)
                    setwbWaHWOriCountState(wbWaHWOriCount - 1)
                    setwbWaHWRupeeCost(parseFloat(wbWaHWRupeeCost - 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 25)
                    setallwbWaHTailCount(allwbWaHTailCount - 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 5)
                    setallwbWaHOriCount(allwbWaHOriCount - 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWaHWSphereCountState(wbWaHWSphereCount - 175)
                    setwbWaHWTailCountState(wbWaHWTailCount - 130)
                    setwbWaHWHornCountState(wbWaHWHornCount - 30)
                    setwbWaHWHeartCountState(wbWaHWHeartCount - 35)
                    setwbWaHWOriCountState(wbWaHWOriCount - 8)
                    setwbWaHWRupeeCost(parseFloat(wbWaHWRupeeCost - 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 175)
                    setallwbWaHTailCount(allwbWaHTailCount - 130)
                    setallwbWaHHornCount(allwbWaHHornCount - 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 35)
                    setallwbWaHOriCount(allwbWaHOriCount - 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 7.5))
                }
            }
        }
        else if (waterHWandUnbindState > event.target.value) {
            if (waterHWandUnbindState - event.target.value == 1) {
                setWaterHWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWaHWSphereCountState(wbWaHWSphereCount + 25)
                    setwbWaHWTailCountState(wbWaHWTailCount + 18)
                    setwbWaHWHeartCountState(wbWaHWHeartCount + 5)
                    setwbWaHWOriCountState(wbWaHWOriCount + 1)
                    setwbWaHWRupeeCost(parseFloat(wbWaHWRupeeCost + 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 25)
                    setallwbWaHTailCount(allwbWaHTailCount + 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 5)
                    setallwbWaHOriCount(allwbWaHOriCount + 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWaHWSphereCountState(wbWaHWSphereCount + 175)
                    setwbWaHWTailCountState(wbWaHWTailCount + 130)
                    setwbWaHWHornCountState(wbWaHWHornCount + 30)
                    setwbWaHWHeartCountState(wbWaHWHeartCount + 35)
                    setwbWaHWOriCountState(wbWaHWOriCount + 8)
                    setwbWaHWRupeeCost(parseFloat(wbWaHWRupeeCost + 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 175)
                    setallwbWaHTailCount(allwbWaHTailCount + 130)
                    setallwbWaHHornCount(allwbWaHHornCount + 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 35)
                    setallwbWaHOriCount(allwbWaHOriCount + 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterStaff() {
        if (waterHStaffCraftState == "grayscale(100%)") {
            setWaterHStaffCraftState("grayscale(0%)")
            setWaterHWeaponChoiceState("staff")
            setwbWaHStSphereCountState(wbWaHStSphereCount - 25)
            setwbWaHStTailCountState(wbWaHStTailCount - 18)
            setwbWaHStHeartCountState(wbWaHStHeartCount - 5)
            setwbWaHStOriCountState(wbWaHStOriCount - 1)
            setwbWaHStRupeeCost(parseFloat(wbWaHStRupeeCost - 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount - 25)
            setallwbWaHTailCount(allwbWaHTailCount - 18)
            setallwbWaHHeartCount(allwbWaHHeartCount - 5)
            setallwbWaHOriCount(allwbWaHOriCount - 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
        }
        else if (waterHStaffCraftState == "grayscale(0%)") {
            setWaterHStaffCraftState("grayscale(100%)")
            setWaterHWeaponChoiceState("staff")
            setwbWaHStSphereCountState(wbWaHStSphereCount + 25)
            setwbWaHStTailCountState(wbWaHStTailCount + 18)
            setwbWaHStHeartCountState(wbWaHStHeartCount + 5)
            setwbWaHStOriCountState(wbWaHStOriCount + 1)
            setwbWaHStRupeeCost(parseFloat(wbWaHStRupeeCost + 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount + 25)
            setallwbWaHTailCount(allwbWaHTailCount + 18)
            setallwbWaHHeartCount(allwbWaHHeartCount + 5)
            setallwbWaHOriCount(allwbWaHOriCount + 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
        }
    }

    function waterStaffWeaponBonus() {
        if (waterHStaffWeaponBonusState == "grayscale(100%)") {
            setWaterHStaffWeaponBonusState("grayscale(0%)")
            setWaterHWeaponChoiceState("staff")
            setwbWaHStSphereCountState(wbWaHStSphereCount - 150)
            setwbWaHStTailCountState(wbWaHStTailCount - 100)
            setwbWaHStHornCountState(wbWaHStHornCount - 30)
            setwbWaHStHeartCountState(wbWaHStHeartCount - 10)
            setwbWaHStOriCountState(wbWaHStOriCount - 30)
            setwbWaHStRupeeCost(parseFloat(wbWaHStRupeeCost - 10))
            setallwbWaHSphereCount(allwbWaHSphereCount - 150)
            setallwbWaHTailCount(allwbWaHTailCount - 100)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 10))
        }
        else if (waterHStaffWeaponBonusState == "grayscale(0%)") {
            setWaterHStaffWeaponBonusState("grayscale(100%)")
            setWaterHWeaponChoiceState("staff")
            setwbWaHStSphereCountState(wbWaHStSphereCount + 150)
            setwbWaHStTailCountState(wbWaHStTailCount + 100)
            setwbWaHStHornCountState(wbWaHStHornCount + 30)
            setwbWaHStHeartCountState(wbWaHStHeartCount + 10)
            setwbWaHStOriCountState(wbWaHStOriCount + 30)
            setwbWaHStRupeeCost(parseFloat(wbWaHStRupeeCost + 10))
            setallwbWaHSphereCount(allwbWaHSphereCount + 150)
            setallwbWaHTailCount(allwbWaHTailCount + 100)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 10))
        }
    }

    function waterStaffRefine() {
        if (waterHStaffRefineState == "grayscale(100%)") {
            setWaterHStaffRefineState("grayscale(0%)")
            setWaterHWeaponChoiceState("staff")
            setwbWaHStSphereCountState(wbWaHStSphereCount - 50)
            setwbWaHStTailCountState(wbWaHStTailCount - 40)
            setwbWaHStHornCountState(wbWaHStHornCount - 30)
            setwbWaHStHeartCountState(wbWaHStHeartCount - 10)
            setwbWaHStOriCountState(wbWaHStOriCount - 3)
            setwbWaHStRupeeCost(parseFloat(wbWaHStRupeeCost - 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount - 50)
            setallwbWaHTailCount(allwbWaHTailCount - 40)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.5))
        }
        else if (waterHStaffRefineState == "grayscale(0%)") {
            setWaterHStaffRefineState("grayscale(100%)")
            setWaterHWeaponChoiceState("staff")
            setwbWaHStSphereCountState(wbWaHStSphereCount + 50)
            setwbWaHStTailCountState(wbWaHStTailCount + 40)
            setwbWaHStHornCountState(wbWaHStHornCount + 30)
            setwbWaHStHeartCountState(wbWaHStHeartCount + 10)
            setwbWaHStOriCountState(wbWaHStOriCount + 3)
            setwbWaHStRupeeCost(parseFloat(wbWaHStRupeeCost + 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount + 50)
            setallwbWaHTailCount(allwbWaHTailCount + 40)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.5))
        }
    }

    function handleWaterStaffUnbindIncrement(event) {
        setWaterHWeaponChoiceState("staff");
        if (waterHStaffUnbindState < event.target.value) {
            if (event.target.value - waterHStaffUnbindState == 1) {
                setWaterHStaffUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWaHStSphereCountState(wbWaHStSphereCount - 25)
                    setwbWaHStTailCountState(wbWaHStTailCount - 18)
                    setwbWaHStHeartCountState(wbWaHStHeartCount - 5)
                    setwbWaHStOriCountState(wbWaHStOriCount - 1)
                    setwbWaHStRupeeCost(parseFloat(wbWaHStRupeeCost - 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 25)
                    setallwbWaHTailCount(allwbWaHTailCount - 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 5)
                    setallwbWaHOriCount(allwbWaHOriCount - 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWaHStSphereCountState(wbWaHStSphereCount - 175)
                    setwbWaHStTailCountState(wbWaHStTailCount - 130)
                    setwbWaHStHornCountState(wbWaHStHornCount - 30)
                    setwbWaHStHeartCountState(wbWaHStHeartCount - 35)
                    setwbWaHStOriCountState(wbWaHStOriCount - 8)
                    setwbWaHStRupeeCost(parseFloat(wbWaHStRupeeCost - 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 175)
                    setallwbWaHTailCount(allwbWaHTailCount - 130)
                    setallwbWaHHornCount(allwbWaHHornCount - 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 35)
                    setallwbWaHOriCount(allwbWaHOriCount - 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 7.5))
                }
            }
        }
        else if (waterHStaffUnbindState > event.target.value) {
            if (waterHStaffUnbindState - event.target.value == 1) {
                setWaterHStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWaHStSphereCountState(wbWaHStSphereCount + 25)
                    setwbWaHStTailCountState(wbWaHStTailCount + 18)
                    setwbWaHStHeartCountState(wbWaHStHeartCount + 5)
                    setwbWaHStOriCountState(wbWaHStOriCount + 1)
                    setwbWaHStRupeeCost(parseFloat(wbWaHStRupeeCost + 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 25)
                    setallwbWaHTailCount(allwbWaHTailCount + 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 5)
                    setallwbWaHOriCount(allwbWaHOriCount + 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWaHStSphereCountState(wbWaHStSphereCount + 175)
                    setwbWaHStTailCountState(wbWaHStTailCount + 130)
                    setwbWaHStHornCountState(wbWaHStHornCount + 30)
                    setwbWaHStHeartCountState(wbWaHStHeartCount + 35)
                    setwbWaHStOriCountState(wbWaHStOriCount + 8)
                    setwbWaHStRupeeCost(parseFloat(wbWaHStRupeeCost + 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 175)
                    setallwbWaHTailCount(allwbWaHTailCount + 130)
                    setallwbWaHHornCount(allwbWaHHornCount + 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 35)
                    setallwbWaHOriCount(allwbWaHOriCount + 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterManacaster() {
        if (waterHManacasterCraftState == "grayscale(100%)") {
            setWaterHManacasterCraftState("grayscale(0%)")
            setWaterHWeaponChoiceState("manacaster")
            setwbWaHMSphereCountState(wbWaHMSphereCount - 25)
            setwbWaHMTailCountState(wbWaHMTailCount - 18)
            setwbWaHMHeartCountState(wbWaHMHeartCount - 5)
            setwbWaHMOriCountState(wbWaHMOriCount - 1)
            setwbWaHMRupeeCost(parseFloat(wbWaHMRupeeCost - 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount - 25)
            setallwbWaHTailCount(allwbWaHTailCount - 18)
            setallwbWaHHeartCount(allwbWaHHeartCount - 5)
            setallwbWaHOriCount(allwbWaHOriCount - 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
        }
        else if (waterHManacasterCraftState == "grayscale(0%)") {
            setWaterHManacasterCraftState("grayscale(100%)")
            setWaterHWeaponChoiceState("manacaster")
            setwbWaHMSphereCountState(wbWaHMSphereCount + 25)
            setwbWaHMTailCountState(wbWaHMTailCount + 18)
            setwbWaHMHeartCountState(wbWaHMHeartCount + 5)
            setwbWaHMOriCountState(wbWaHMOriCount + 1)
            setwbWaHMRupeeCost(parseFloat(wbWaHMRupeeCost + 1.2))
            setallwbWaHSphereCount(allwbWaHSphereCount + 25)
            setallwbWaHTailCount(allwbWaHTailCount + 18)
            setallwbWaHHeartCount(allwbWaHHeartCount + 5)
            setallwbWaHOriCount(allwbWaHOriCount + 1)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
        }
    }

    function waterManacasterWeaponBonus() {
        if (waterHManacasterWeaponBonusState == "grayscale(100%)") {
            setWaterHManacasterWeaponBonusState("grayscale(0%)")
            setWaterHWeaponChoiceState("manacaster")
            setwbWaHMSphereCountState(wbWaHMSphereCount - 150)
            setwbWaHMTailCountState(wbWaHMTailCount - 100)
            setwbWaHMHornCountState(wbWaHMHornCount - 30)
            setwbWaHMHeartCountState(wbWaHMHeartCount - 10)
            setwbWaHMOriCountState(wbWaHMOriCount - 30)
            setwbWaHMRupeeCost(parseFloat(wbWaHMRupeeCost - 10))
            setallwbWaHSphereCount(allwbWaHSphereCount - 150)
            setallwbWaHTailCount(allwbWaHTailCount - 100)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 10))
        }
        else if (waterHManacasterWeaponBonusState == "grayscale(0%)") {
            setWaterHManacasterWeaponBonusState("grayscale(100%)")
            setWaterHWeaponChoiceState("manacaster")
            setwbWaHMSphereCountState(wbWaHMSphereCount + 150)
            setwbWaHMTailCountState(wbWaHMTailCount + 100)
            setwbWaHMHornCountState(wbWaHMHornCount + 30)
            setwbWaHMHeartCountState(wbWaHMHeartCount + 10)
            setwbWaHMOriCountState(wbWaHMOriCount + 30)
            setwbWaHMRupeeCost(parseFloat(wbWaHMRupeeCost + 10))
            setallwbWaHSphereCount(allwbWaHSphereCount + 150)
            setallwbWaHTailCount(allwbWaHTailCount + 100)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 30)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 10))
        }
    }

    function waterManacasterRefine() {
        if (waterHManacasterRefineState == "grayscale(100%)") {
            setWaterHManacasterRefineState("grayscale(0%)")
            setWaterHWeaponChoiceState("manacaster")
            setwbWaHMSphereCountState(wbWaHMSphereCount - 50)
            setwbWaHMTailCountState(wbWaHMTailCount - 40)
            setwbWaHMHornCountState(wbWaHMHornCount - 30)
            setwbWaHMHeartCountState(wbWaHMHeartCount - 10)
            setwbWaHMOriCountState(wbWaHMOriCount - 3)
            setwbWaHMRupeeCost(parseFloat(wbWaHMRupeeCost - 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount - 50)
            setallwbWaHTailCount(allwbWaHTailCount - 40)
            setallwbWaHHornCount(allwbWaHHornCount - 30)
            setallwbWaHHeartCount(allwbWaHHeartCount - 10)
            setallwbWaHOriCount(allwbWaHOriCount - 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.5))
        }
        else if (waterHManacasterRefineState == "grayscale(0%)") {
            setWaterHManacasterRefineState("grayscale(100%)")
            setWaterHWeaponChoiceState("manacaster")
            setwbWaHMSphereCountState(wbWaHMSphereCount + 50)
            setwbWaHMTailCountState(wbWaHMTailCount + 40)
            setwbWaHMHornCountState(wbWaHMHornCount + 30)
            setwbWaHMHeartCountState(wbWaHMHeartCount + 10)
            setwbWaHMOriCountState(wbWaHMOriCount + 3)
            setwbWaHMRupeeCost(parseFloat(wbWaHMRupeeCost + 1.5))
            setallwbWaHSphereCount(allwbWaHSphereCount + 50)
            setallwbWaHTailCount(allwbWaHTailCount + 40)
            setallwbWaHHornCount(allwbWaHHornCount + 30)
            setallwbWaHHeartCount(allwbWaHHeartCount + 10)
            setallwbWaHOriCount(allwbWaHOriCount + 3)
            setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.5))
        }
    }

    function handleWaterManacasterUnbindIncrement(event) {
        setWaterHWeaponChoiceState("manacaster");
        if (waterHManacasterUnbindState < event.target.value) {
            if (event.target.value - waterHManacasterUnbindState == 1) {
                setWaterHManacasterUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWaHMSphereCountState(wbWaHMSphereCount - 25)
                    setwbWaHMTailCountState(wbWaHMTailCount - 18)
                    setwbWaHMHeartCountState(wbWaHMHeartCount - 5)
                    setwbWaHMOriCountState(wbWaHMOriCount - 1)
                    setwbWaHMRupeeCost(parseFloat(wbWaHMRupeeCost - 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 25)
                    setallwbWaHTailCount(allwbWaHTailCount - 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 5)
                    setallwbWaHOriCount(allwbWaHOriCount - 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWaHMSphereCountState(wbWaHMSphereCount - 175)
                    setwbWaHMTailCountState(wbWaHMTailCount - 130)
                    setwbWaHMHornCountState(wbWaHMHornCount - 30)
                    setwbWaHMHeartCountState(wbWaHMHeartCount - 35)
                    setwbWaHMOriCountState(wbWaHMOriCount - 8)
                    setwbWaHMRupeeCost(parseFloat(wbWaHMRupeeCost - 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount - 175)
                    setallwbWaHTailCount(allwbWaHTailCount - 130)
                    setallwbWaHHornCount(allwbWaHHornCount - 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount - 35)
                    setallwbWaHOriCount(allwbWaHOriCount - 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost - 7.5))
                }
            }
        }
        else if (waterHManacasterUnbindState > event.target.value) {
            if (waterHManacasterUnbindState - event.target.value == 1) {
                setWaterHManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWaHMSphereCountState(wbWaHMSphereCount + 25)
                    setwbWaHMTailCountState(wbWaHMTailCount + 18)
                    setwbWaHMHeartCountState(wbWaHMHeartCount + 5)
                    setwbWaHMOriCountState(wbWaHMOriCount + 1)
                    setwbWaHMRupeeCost(parseFloat(wbWaHMRupeeCost + 1.2))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 25)
                    setallwbWaHTailCount(allwbWaHTailCount + 18)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 5)
                    setallwbWaHOriCount(allwbWaHOriCount + 1)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWaHMSphereCountState(wbWaHMSphereCount + 175)
                    setwbWaHMTailCountState(wbWaHMTailCount + 130)
                    setwbWaHMHornCountState(wbWaHMHornCount + 30)
                    setwbWaHMHeartCountState(wbWaHMHeartCount + 35)
                    setwbWaHMOriCountState(wbWaHMOriCount + 8)
                    setwbWaHMRupeeCost(parseFloat(wbWaHMRupeeCost + 7.5))
                    setallwbWaHSphereCount(allwbWaHSphereCount + 175)
                    setallwbWaHTailCount(allwbWaHTailCount + 130)
                    setallwbWaHHornCount(allwbWaHHornCount + 30)
                    setallwbWaHHeartCount(allwbWaHHeartCount + 35)
                    setallwbWaHOriCount(allwbWaHOriCount + 8)
                    setallwbWaHRupeeCost(parseFloat(allwbWaHRupeeCost + 7.5))
                }
            }
        }
    }

    return (
        <div>
            <HDTNavTabs />
            <Flex>&nbsp;</Flex>
            <Flex flexWrap="wrap">
                <Box width={[6/7, 1 / 2]} p={3} m={3} bg={"#152238"} sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Box width={2 / 5}>

                        </Box>
                        <Box width={[0, 3 / 5]}>
                            <Text fontSize={[1, 3]} ml="auto" mr="auto" color="lightblue">Water HDT Weapons</Text>
                        </Box>
                    </Flex>
                        <Flex>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WaterHDTSword} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterHSwordCraftState }} onClick={craftWaterSword} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Absolute Aqua</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={[1/6, 1 / 3]}>

                                        </Box>
                                        <Image src={Unbind} sx={{ width: ["30%", "35%"] }}/>
                                    </Flex>
                                    <Flex>
                                        <Box width={[0, 1 / 10]}></Box>
                                        <Slider
                                            onChange={handleWaterSwordUnbindIncrement}
                                            defaultValue={waterHSwordUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="lightblue"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="lightblue" fontSize={[1, 3]}>{waterHSwordUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterHSwordWeaponBonusState }} onClick={waterSwordWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: waterHSwordRefineState }} onClick={waterSwordRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WaterHDTBlade} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterHBladeCraftState }} onClick={craftWaterBlade} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Ruinous Torrent</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={[1/6, 1 / 3]}>

                                        </Box>
                                        <Image src={Unbind} sx={{ width: ["30%", "35%"] }}/>
                                    </Flex>
                                    <Flex>
                                        <Box width={[0, 1 / 10]}></Box>
                                        <Slider
                                            onChange={handleWaterBladeUnbindIncrement}
                                            defaultValue={waterHBladeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="lightblue"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="lightblue" fontSize={[1, 3]}>{waterHBladeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterHBladeWeaponBonusState }} onClick={waterBladeWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: waterHBladeRefineState }} onClick={waterBladeRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WaterHDTDagger} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterHDaggerCraftState }} onClick={craftWaterDagger} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Tideruler's Maw</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={[1/6, 1 / 3]}>

                                        </Box>
                                        <Image src={Unbind} sx={{ width: ["30%", "35%"] }}/>
                                    </Flex>
                                    <Flex>
                                        <Box width={[0, 1 / 10]}></Box>
                                        <Slider
                                            onChange={handleWaterDaggerUnbindIncrement}
                                            defaultValue={waterHDaggerUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="lightblue"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="lightblue" fontSize={[1, 3]}>{waterHDaggerUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterHDaggerWeaponBonusState }} onClick={waterDaggerWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: waterHDaggerRefineState }} onClick={waterDaggerRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WaterHDTAxe} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterHAxeCraftState }} onClick={craftWaterAxe} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Mercy's Azure Tide</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={[1/6, 1 / 3]}>

                                        </Box>
                                        <Image src={Unbind} sx={{ width: ["30%", "35%"] }}/>
                                    </Flex>
                                    <Flex>
                                        <Box width={[0, 1 / 10]}></Box>
                                        <Slider
                                            onChange={handleWaterAxeUnbindIncrement}
                                            defaultValue={waterHAxeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="lightblue"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="lightblue" fontSize={[1, 3]}>{waterHAxeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterHAxeWeaponBonusState }} onClick={waterAxeWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: waterHAxeRefineState }} onClick={waterAxeRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WaterHDTLance} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterHLanceCraftState }} onClick={craftWaterLance} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Limpid Rush</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={[1/6, 1 / 3]}>

                                        </Box>
                                        <Image src={Unbind} sx={{ width: ["30%", "35%"] }}/>
                                    </Flex>
                                    <Flex>
                                        <Box width={[0, 1 / 10]}></Box>
                                        <Slider
                                            onChange={handleWaterLanceUnbindIncrement}
                                            defaultValue={waterHLanceUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="lightblue"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="lightblue" fontSize={[1, 3]}>{waterHLanceUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterHLanceWeaponBonusState }} onClick={waterLanceWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: waterHLanceRefineState }} onClick={waterLanceRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WaterHDTBow} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterHBowCraftState }} onClick={craftWaterBow} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Azure Mercurius</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={[1/6, 1 / 3]}>

                                        </Box>
                                        <Image src={Unbind} sx={{ width: ["30%", "35%"] }}/>
                                    </Flex>
                                    <Flex>
                                        <Box width={[0, 1 / 10]}></Box>
                                        <Slider
                                            onChange={handleWaterBowUnbindIncrement}
                                            defaultValue={waterHBowUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="lightblue"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="lightblue" fontSize={[1, 3]}>{waterHBowUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterHBowWeaponBonusState }} onClick={waterBowWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: waterHBowRefineState }} onClick={waterBowRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WaterHDTWand} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterHWandCraftState }} onClick={craftWaterWand} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Aquatic Spiral</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={[1/6, 1 / 3]}>

                                        </Box>
                                        <Image src={Unbind} sx={{ width: ["30%", "35%"] }}/>
                                    </Flex>
                                    <Flex>
                                        <Box width={[0, 1 / 10]}></Box>
                                        <Slider
                                            onChange={handleWaterWandUnbindIncrement}
                                            defaultValue={waterHWandUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="lightblue"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="lightblue" fontSize={[1, 3]}>{waterHWandUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterHWandWeaponBonusState }} onClick={waterWandWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: waterHWandRefineState }} onClick={waterWandRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WaterHDTStaff} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterHStaffCraftState }} onClick={craftWaterStaff} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Ocean's Embrace</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={[1/6, 1 / 3]}>

                                        </Box>
                                        <Image src={Unbind} sx={{ width: ["30%", "35%"] }}/>
                                    </Flex>
                                    <Flex>
                                        <Box width={[0, 1 / 10]}></Box>
                                        <Slider
                                            onChange={handleWaterStaffUnbindIncrement}
                                            defaultValue={waterHStaffUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="lightblue"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="lightblue" fontSize={[1, 3]}>{waterHStaffUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterHStaffWeaponBonusState }} onClick={waterStaffWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: waterHStaffRefineState }} onClick={waterStaffRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WaterHDTManacaster} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: waterHManacasterCraftState }} onClick={craftWaterManacaster} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="lightblue">Aqua Trigger</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={[1/6, 1 / 3]}>

                                        </Box>
                                        <Image src={Unbind} sx={{ width: ["30%", "35%"] }}/>
                                    </Flex>
                                    <Flex>
                                        <Box width={[0, 1 / 10]}></Box>
                                        <Slider
                                            onChange={handleWaterManacasterUnbindIncrement}
                                            defaultValue={waterHManacasterUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="lightblue"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="lightblue" fontSize={[1, 3]}>{waterHManacasterUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterHManacasterWeaponBonusState }} onClick={waterManacasterWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: waterHManacasterRefineState }} onClick={waterManacasterRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                        </Flex>
                </Box>
                {waterHDTWeaponSelection()}
            </Flex>
            <Box width={[3/4, 1 / 2]} p={3} m={3} bg={"#152238"} sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Materials Needed to get all Weapon Bonuses</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 175]}>
                            <Image src={WaterHDTSphere} sx={{ width: ["80%","70%"], height: ["75%", "55%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{allwbWaHSphereCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={WaterHDTTail} sx={{ width: ["80%","70%"], height: ["75%", "55%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{allwbWaHTailCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={WaterHDTHorn} sx={{ width: ["80%","70%"], height: ["75%", "55%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{allwbWaHHornCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={WaterHDTHeart} sx={{ width: ["80%", "70%"], height: ["70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{allwbWaHHeartCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["80%", "70%"], height: ["70%"]}} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{allwbWaHOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["80%", "70%"], height: ["70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{allwbWaHRupeeCost.toFixed(1)} million</Text>
                        </Card>
                    </Flex>
            </Box>
            <WeaponTypeNavTabs />
        </div>
    )
}
