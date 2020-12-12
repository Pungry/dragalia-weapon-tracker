import React, { useState } from 'react'
import HDTNavTabs from "./HDTNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"
import { Box, Text, Flex, Card, Image } from "rebass";
import { Slider } from "@rebass/forms";

import LightHDTSword from "../Images/Light_HDT_Sword.png";
import LightHDTBlade from "../Images/Light_HDT_Blade.png";
import LightHDTDagger from "../Images/Light_HDT_Dagger.png";
import LightHDTAxe from "../Images/Light_HDT_Axe.png";
import LightHDTLance from "../Images/Light_HDT_Lance.png";
import LightHDTBow from "../Images/Light_HDT_Bow.png";
import LightHDTWand from "../Images/Light_HDT_Wand.png";
import LightHDTStaff from "../Images/Light_HDT_Staff.png";
import LightHDTManacaster from "../Images/Light_HDT_Manacaster.png";

import LightHDTSphere from "../Images/Light_HDT_Sphere.png";
import LightHDTTail from "../Images/Light_HDT_Tail.png";
import LightHDTHorn from "../Images/Light_HDT_Horn.png";
import LightHDTHeart from "../Images/Light_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";

import Refine from "../Images/Refine.PNG";
import Unbind from "../Images/Unbind.PNG";
import WeaponBonus from "../Images/Weapon_Bonus.PNG";

import LightHDTSwordCost from "./LightHDTSwordMats"
import LightHDTBladeCost from "./LightHDTBladeMats"
import LightHDTDaggerCost from "./LightHDTDaggerMats"
import LightHDTAxeCost from "./LightHDTAxeMats"
import LightHDTLanceCost from "./LightHDTLanceMats"
import LightHDTBowCost from "./LightHDTBowMats"
import LightHDTWandCost from "./LightHDTWandMats"
import LightHDTStaffCost from "./LightHDTStaffMats"
import LightHDTManacasterCost from "./LightHDTManacasterMats"

export default function LightHDTWeapons() {
    const [lightHWeaponChoice, setLightHWeaponChoiceState] = useLocalStorage("lightHWeaponChoice", "sword")

    const [allwbLHSphereCount, setallwbLHSphereCount] = useLocalStorage("allwbLHSphereCount", 4500)
    const [allwbLHTailCount, setallwbLHTailCount] = useLocalStorage("allwbLHTailCount", 3240)
    const [allwbLHHeartCount, setallwbLHHeartCount] = useLocalStorage("allwbLHHeartCount", 720)
    const [allwbLHHornCount, setallwbLHHornCount] = useLocalStorage("allwbLHHornCount", 810)
    const [allwbLHOriCount, setallwbLHOriCount] = useLocalStorage("allwbLHOriCount", 414)
    const [allwbLHRupeeCost, setallwbLHRupeeCost] = useLocalStorage("allwbLHRupeeCost", 225)

    const [lightHSwordCraftState, setLightHSwordCraftState] = useLocalStorage("lightHSwordCraftState", "grayscale(100%)")
    const [lightHSwordWeaponBonusState, setLightHSwordWeaponBonusState] = useLocalStorage("lightHSwordWeaponBonusState", "grayscale(100%)")
    const [lightHSwordRefineState, setLightHSwordRefineState] = useLocalStorage("lightHSwordRefineState", "grayscale(100%)");
    const [lightHSwordUnbindState, setLightHSwordUnbindState] = useLocalStorage("lightHSwordUnbindState", 0);

    const [wbLHSphereCount, setwbLHSphereCountState] = useLocalStorage("wbLHSphereCount", 500);
    const [wbLHTailCount, setwbLHTailCountState] = useLocalStorage("wbLHTailCount", 360);
    const [wbLHHeartCount, setwbLHHeartCountState] = useLocalStorage("wbLHHeartCount", 80);
    const [wbLHOriCount, setwbLHOriCountState] = useLocalStorage("wbLHOriCount", 46);
    const [wbLHRupeeCost, setwbLHRupeeCost] = useLocalStorage("wbLHRupeeCost", 25);
    const [wbLHHornCount, setwbLHHornCountState] = useLocalStorage("wbLHHornCount", 90);

    const [lightHBladeCraftState, setLightHBladeCraftState] = useLocalStorage("lightHBladeCraftState", "grayscale(100%)")
    const [lightHBladeWeaponBonusState, setLightHBladeWeaponBonusState] = useLocalStorage("lightHBladeWeaponBonusState", "grayscale(100%)")
    const [lightHBladeRefineState, setLightHBladeRefineState] = useLocalStorage("lightHBladeRefineState", "grayscale(100%)");
    const [lightHBladeUnbindState, setLightHBladeUnbindState] = useLocalStorage("lightHBladeUnbindState", 0);

    const [wbLHBlSphereCount, setwbLHBlSphereCountState] = useLocalStorage("wbLHBlSphereCount", 500);
    const [wbLHBlTailCount, setwbLHBlTailCountState] = useLocalStorage("wbLHBlTailCount", 360);
    const [wbLHBlHeartCount, setwbLHBlHeartCountState] = useLocalStorage("wbLHBlHeartCount", 80);
    const [wbLHBlOriCount, setwbLHBlOriCountState] = useLocalStorage("wbLHBlOriCount", 46);
    const [wbLHBlRupeeCost, setwbLHBlRupeeCost] = useLocalStorage("wbLHBlRupeeCost", 25);
    const [wbLHBlHornCount, setwbLHBlHornCountState] = useLocalStorage("wbLHBlHornCount", 90);

    const [lightHDaggerCraftState, setLightHDaggerCraftState] = useLocalStorage("lightHDaggerCraftState", "grayscale(100%)")
    const [lightHDaggerWeaponBonusState, setLightHDaggerWeaponBonusState] = useLocalStorage("lightHDaggerWeaponBonusState", "grayscale(100%)")
    const [lightHDaggerRefineState, setLightHDaggerRefineState] = useLocalStorage("lightHDaggerRefineState", "grayscale(100%)");
    const [lightHDaggerUnbindState, setLightHDaggerUnbindState] = useLocalStorage("lightHDaggerUnbindState", 0);

    const [wbLHDSphereCount, setwbLHDSphereCountState] = useLocalStorage("wbLHDSphereCount", 500);
    const [wbLHDTailCount, setwbLHDTailCountState] = useLocalStorage("wbLHDTailCount", 360);
    const [wbLHDHeartCount, setwbLHDHeartCountState] = useLocalStorage("wbLHDHeartCount", 80);
    const [wbLHDOriCount, setwbLHDOriCountState] = useLocalStorage("wbLHDOriCount", 46);
    const [wbLHDRupeeCost, setwbLHDRupeeCost] = useLocalStorage("wbLHDRupeeCost", 25);
    const [wbLHDHornCount, setwbLHDHornCountState] = useLocalStorage("wbLHDHornCount", 90);

    const [lightHAxeCraftState, setLightHAxeCraftState] = useLocalStorage("lightHAxeCraftState", "grayscale(100%)")
    const [lightHAxeWeaponBonusState, setLightHAxeWeaponBonusState] = useLocalStorage("lightHAxeWeaponBonusState", "grayscale(100%)")
    const [lightHAxeRefineState, setLightHAxeRefineState] = useLocalStorage("lightHAxeRefineState", "grayscale(100%)");
    const [lightHAxeUnbindState, setLightHAxeUnbindState] = useLocalStorage("lightHAxeUnbindState", 0);

    const [wbLHASphereCount, setwbLHASphereCountState] = useLocalStorage("wbLHASphereCount", 500);
    const [wbLHATailCount, setwbLHATailCountState] = useLocalStorage("wbLHATailCount", 360);
    const [wbLHAHeartCount, setwbLHAHeartCountState] = useLocalStorage("wbLHAHeartCount", 80);
    const [wbLHAOriCount, setwbLHAOriCountState] = useLocalStorage("wbLHAOriCount", 46);
    const [wbLHARupeeCost, setwbLHARupeeCost] = useLocalStorage("wbLHARupeeCost", 25);
    const [wbLHAHornCount, setwbLHAHornCountState] = useLocalStorage("wbLHAHornCount", 90);

    const [lightHLanceCraftState, setLightHLanceCraftState] = useLocalStorage("lightHLanceCraftState", "grayscale(100%)")
    const [lightHLanceWeaponBonusState, setLightHLanceWeaponBonusState] = useLocalStorage("lightHLanceWeaponBonusState", "grayscale(100%)")
    const [lightHLanceRefineState, setLightHLanceRefineState] = useLocalStorage("lightHLanceRefineState", "grayscale(100%)");
    const [lightHLanceUnbindState, setLightHLanceUnbindState] = useLocalStorage("lightHLanceUnbindState", 0);

    const [wbLHLSphereCount, setwbLHLSphereCountState] = useLocalStorage("wbLHLSphereCount", 500);
    const [wbLHLTailCount, setwbLHLTailCountState] = useLocalStorage("wbLHLTailCount", 360);
    const [wbLHLHeartCount, setwbLHLHeartCountState] = useLocalStorage("wbLHLHeartCount", 80);
    const [wbLHLOriCount, setwbLHLOriCountState] = useLocalStorage("wbLHLOriCount", 46);
    const [wbLHLRupeeCost, setwbLHLRupeeCost] = useLocalStorage("wbLHLRupeeCost", 25);
    const [wbLHLHornCount, setwbLHLHornCountState] = useLocalStorage("wbLHLHornCount", 90);

    const [lightHBowCraftState, setLightHBowCraftState] = useLocalStorage("lightHBowCraftState", "grayscale(100%)")
    const [lightHBowWeaponBonusState, setLightHBowWeaponBonusState] = useLocalStorage("lightHBowWeaponBonusState", "grayscale(100%)")
    const [lightHBowRefineState, setLightHBowRefineState] = useLocalStorage("lightHBowRefineState", "grayscale(100%)");
    const [lightHBowUnbindState, setLightHBowUnbindState] = useLocalStorage("lightHBowUnbindState", 0);

    const [wbLHBoSphereCount, setwbLHBoSphereCountState] = useLocalStorage("wbLHBoSphereCount", 500);
    const [wbLHBoTailCount, setwbLHBoTailCountState] = useLocalStorage("wbLHBoTailCount", 360);
    const [wbLHBoHeartCount, setwbLHBoHeartCountState] = useLocalStorage("wbLHBoHeartCount", 80);
    const [wbLHBoOriCount, setwbLHBoOriCountState] = useLocalStorage("wbLHBoOriCount", 46);
    const [wbLHBoRupeeCost, setwbLHBoRupeeCost] = useLocalStorage("wbLHBoRupeeCost", 25);
    const [wbLHBoHornCount, setwbLHBoHornCountState] = useLocalStorage("wbLHBoHornCount", 90);

    const [lightHWandCraftState, setLightHWandCraftState] = useLocalStorage("lightHWandCraftState", "grayscale(100%)")
    const [lightHWandWeaponBonusState, setLightHWandWeaponBonusState] = useLocalStorage("lightHWandWeaponBonusState", "grayscale(100%)")
    const [lightHWandRefineState, setLightHWandRefineState] = useLocalStorage("lightHWandRefineState", "grayscale(100%)");
    const [lightHWandUnbindState, setLightHWandUnbindState] = useLocalStorage("lightHWandUnbindState", 0);

    const [wbLHWSphereCount, setwbLHWSphereCountState] = useLocalStorage("wbLHWSphereCount", 500);
    const [wbLHWTailCount, setwbLHWTailCountState] = useLocalStorage("wbLHWTailCount", 360);
    const [wbLHWHeartCount, setwbLHWHeartCountState] = useLocalStorage("wbLHWHeartCount", 80);
    const [wbLHWOriCount, setwbLHWOriCountState] = useLocalStorage("wbLHWOriCount", 46);
    const [wbLHWRupeeCost, setwbLHWRupeeCost] = useLocalStorage("wbLHWRupeeCost", 25);
    const [wbLHWHornCount, setwbLHWHornCountState] = useLocalStorage("wbLHWHornCount", 90);

    const [lightHStaffCraftState, setLightHStaffCraftState] = useLocalStorage("lightHStaffCraftState", "grayscale(100%)")
    const [lightHStaffWeaponBonusState, setLightHStaffWeaponBonusState] = useLocalStorage("lightHStaffWeaponBonusState", "grayscale(100%)")
    const [lightHStaffRefineState, setLightHStaffRefineState] = useLocalStorage("lightHStaffRefineState", "grayscale(100%)");
    const [lightHStaffUnbindState, setLightHStaffUnbindState] = useLocalStorage("lightHStaffUnbindState", 0);

    const [wbLHStSphereCount, setwbLHStSphereCountState] = useLocalStorage("wbLHStSphereCount", 500);
    const [wbLHStTailCount, setwbLHStTailCountState] = useLocalStorage("wbLHStTailCount", 360);
    const [wbLHStHeartCount, setwbLHStHeartCountState] = useLocalStorage("wbLHStHeartCount", 80);
    const [wbLHStOriCount, setwbLHStOriCountState] = useLocalStorage("wbLHStOriCount", 46);
    const [wbLHStRupeeCost, setwbLHStRupeeCost] = useLocalStorage("wbLHStRupeeCost", 25);
    const [wbLHStHornCount, setwbLHStHornCountState] = useLocalStorage("wbLHStHornCount", 90);

    const [lightHManacasterCraftState, setLightHManacasterCraftState] = useLocalStorage("lightHManacasterCraftState", "grayscale(100%)")
    const [lightHManacasterWeaponBonusState, setLightHManacasterWeaponBonusState] = useLocalStorage("lightHManacasterWeaponBonusState", "grayscale(100%)")
    const [lightHManacasterRefineState, setLightHManacasterRefineState] = useLocalStorage("lightHManacasterRefineState", "grayscale(100%)");
    const [lightHManacasterUnbindState, setLightHManacasterUnbindState] = useLocalStorage("lightHManacasterUnbindState", 0);

    const [wbLHMSphereCount, setwbLHMSphereCountState] = useLocalStorage("wbLHMSphereCount", 500);
    const [wbLHMTailCount, setwbLHMTailCountState] = useLocalStorage("wbLHMTailCount", 360);
    const [wbLHMHeartCount, setwbLHMHeartCountState] = useLocalStorage("wbLHMHeartCount", 80);
    const [wbLHMOriCount, setwbLHMOriCountState] = useLocalStorage("wbLHMOriCount", 46);
    const [wbLHMRupeeCost, setwbLHMRupeeCost] = useLocalStorage("wbLHMRupeeCost", 25);
    const [wbLHMHornCount, setwbLHMHornCountState] = useLocalStorage("wbLHMHornCount", 90);

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

    function lightHDTWeaponSelection() {
        if (lightHWeaponChoice == "sword") {
            return <LightHDTSwordCost wbLHSphereCount={wbLHSphereCount} wbLHTailCount={wbLHTailCount} wbLHHeartCount={wbLHHeartCount} wbLHOriCount={wbLHOriCount} wbLHRupeeCost={wbLHRupeeCost.toFixed(1)} wbLHHornCount={wbLHHornCount} />
        }
        if (lightHWeaponChoice == "blade") {
            return <LightHDTBladeCost wbLHBlSphereCount={wbLHBlSphereCount} wbLHBlTailCount={wbLHBlTailCount} wbLHBlHeartCount={wbLHBlHeartCount} wbLHBlOriCount={wbLHBlOriCount} wbLHBlRupeeCost={wbLHBlRupeeCost.toFixed(1)} wbLHBlHornCount={wbLHBlHornCount} />
        }
        if (lightHWeaponChoice == "dagger") {
            return <LightHDTDaggerCost wbLHDSphereCount={wbLHDSphereCount} wbLHDTailCount={wbLHDTailCount} wbLHDHeartCount={wbLHDHeartCount} wbLHDOriCount={wbLHDOriCount} wbLHDRupeeCost={wbLHDRupeeCost.toFixed(1)} wbLHDHornCount={wbLHDHornCount} />
        }
        if (lightHWeaponChoice == "axe") {
            return <LightHDTAxeCost wbLHASphereCount={wbLHASphereCount} wbLHATailCount={wbLHATailCount} wbLHAHeartCount={wbLHAHeartCount} wbLHAOriCount={wbLHAOriCount} wbLHARupeeCost={wbLHARupeeCost.toFixed(1)} wbLHAHornCount={wbLHAHornCount} />
        }
        if (lightHWeaponChoice == "lance") {
            return <LightHDTLanceCost wbLHLSphereCount={wbLHLSphereCount} wbLHLTailCount={wbLHLTailCount} wbLHLHeartCount={wbLHLHeartCount} wbLHLOriCount={wbLHLOriCount} wbLHLRupeeCost={wbLHLRupeeCost.toFixed(1)} wbLHLHornCount={wbLHLHornCount} />
        }
        if (lightHWeaponChoice == "bow") {
            return <LightHDTBowCost wbLHBoSphereCount={wbLHBoSphereCount} wbLHBoTailCount={wbLHBoTailCount} wbLHBoHeartCount={wbLHBoHeartCount} wbLHBoOriCount={wbLHBoOriCount} wbLHBoRupeeCost={wbLHBoRupeeCost.toFixed(1)} wbLHBoHornCount={wbLHBoHornCount} />
        }
        if (lightHWeaponChoice == "wand") {
            return <LightHDTWandCost wbLHWSphereCount={wbLHWSphereCount} wbLHWTailCount={wbLHWTailCount} wbLHWHeartCount={wbLHWHeartCount} wbLHWOriCount={wbLHWOriCount} wbLHWRupeeCost={wbLHWRupeeCost.toFixed(1)} wbLHWHornCount={wbLHWHornCount} />
        }
        if (lightHWeaponChoice == "staff") {
            return <LightHDTStaffCost wbLHStSphereCount={wbLHStSphereCount} wbLHStTailCount={wbLHStTailCount} wbLHStHeartCount={wbLHStHeartCount} wbLHStOriCount={wbLHStOriCount} wbLHStRupeeCost={wbLHStRupeeCost.toFixed(1)} wbLHStHornCount={wbLHStHornCount} />
        }
        if (lightHWeaponChoice == "manacaster") {
            return <LightHDTManacasterCost wbLHMSphereCount={wbLHMSphereCount} wbLHMTailCount={wbLHMTailCount} wbLHMHeartCount={wbLHMHeartCount} wbLHMOriCount={wbLHMOriCount} wbLHMRupeeCost={wbLHMRupeeCost.toFixed(1)} wbLHMHornCount={wbLHMHornCount} />
        }
    }

    function craftLightSword() {
        if (lightHSwordCraftState == "grayscale(100%)") {
            setLightHSwordCraftState("grayscale(0%)")
            setLightHWeaponChoiceState("sword")
            setwbLHSphereCountState(wbLHSphereCount - 25)
            setwbLHTailCountState(wbLHTailCount - 18)
            setwbLHHeartCountState(wbLHHeartCount - 5)
            setwbLHOriCountState(wbLHOriCount - 1)
            setwbLHRupeeCost(parseFloat(wbLHRupeeCost - 1.2))
            setallwbLHSphereCount(allwbLHSphereCount - 25)
            setallwbLHTailCount(allwbLHTailCount - 18)
            setallwbLHHeartCount(allwbLHHeartCount - 5)
            setallwbLHOriCount(allwbLHOriCount - 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
        }
        else if (lightHSwordCraftState == "grayscale(0%)") {
            setLightHSwordCraftState("grayscale(100%)")
            setLightHWeaponChoiceState("sword")
            setwbLHSphereCountState(wbLHSphereCount + 25)
            setwbLHTailCountState(wbLHTailCount + 18)
            setwbLHHeartCountState(wbLHHeartCount + 5)
            setwbLHOriCountState(wbLHOriCount + 1)
            setwbLHRupeeCost(parseFloat(wbLHRupeeCost + 1.2))
            setallwbLHSphereCount(allwbLHSphereCount + 25)
            setallwbLHTailCount(allwbLHTailCount + 18)
            setallwbLHHeartCount(allwbLHHeartCount + 5)
            setallwbLHOriCount(allwbLHOriCount + 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
        }
    }

    function lightSwordWeaponBonus() {
        if (lightHSwordWeaponBonusState == "grayscale(100%)") {
            setLightHSwordWeaponBonusState("grayscale(0%)")
            setLightHWeaponChoiceState("sword")
            setwbLHSphereCountState(wbLHSphereCount - 150)
            setwbLHTailCountState(wbLHTailCount - 100)
            setwbLHHornCountState(wbLHHornCount - 30)
            setwbLHHeartCountState(wbLHHeartCount - 10)
            setwbLHOriCountState(wbLHOriCount - 30)
            setwbLHRupeeCost(parseFloat(wbLHRupeeCost - 10))
            setallwbLHSphereCount(allwbLHSphereCount - 150)
            setallwbLHTailCount(allwbLHTailCount - 100)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 10))
        }
        else if (lightHSwordWeaponBonusState == "grayscale(0%)") {
            setLightHSwordWeaponBonusState("grayscale(100%)")
            setLightHWeaponChoiceState("sword")
            setwbLHSphereCountState(wbLHSphereCount + 150)
            setwbLHTailCountState(wbLHTailCount + 100)
            setwbLHHornCountState(wbLHHornCount + 30)
            setwbLHHeartCountState(wbLHHeartCount + 10)
            setwbLHOriCountState(wbLHOriCount + 30)
            setwbLHRupeeCost(parseFloat(wbLHRupeeCost + 10))
            setallwbLHSphereCount(allwbLHSphereCount + 150)
            setallwbLHTailCount(allwbLHTailCount + 100)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 10))
        }
    }

    function lightSwordRefine() {
        if (lightHSwordRefineState == "grayscale(100%)") {
            setLightHSwordRefineState("grayscale(0%)")
            setLightHWeaponChoiceState("sword")
            setwbLHSphereCountState(wbLHSphereCount - 50)
            setwbLHTailCountState(wbLHTailCount - 40)
            setwbLHHornCountState(wbLHHornCount - 30)
            setwbLHHeartCountState(wbLHHeartCount - 10)
            setwbLHOriCountState(wbLHOriCount - 3)
            setwbLHRupeeCost(parseFloat(wbLHRupeeCost - 1.5))
            setallwbLHSphereCount(allwbLHSphereCount - 50)
            setallwbLHTailCount(allwbLHTailCount - 40)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.5))
        }
        else if (lightHSwordRefineState == "grayscale(0%)") {
            setLightHSwordRefineState("grayscale(100%)")
            setLightHWeaponChoiceState("sword")
            setwbLHSphereCountState(wbLHSphereCount + 50)
            setwbLHTailCountState(wbLHTailCount + 40)
            setwbLHHornCountState(wbLHHornCount + 30)
            setwbLHHeartCountState(wbLHHeartCount + 10)
            setwbLHOriCountState(wbLHOriCount + 3)
            setwbLHRupeeCost(parseFloat(wbLHRupeeCost + 1.5))
            setallwbLHSphereCount(allwbLHSphereCount + 50)
            setallwbLHTailCount(allwbLHTailCount + 40)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.5))
        }
    }

    function handleLightSwordUnbindIncrement(event) {
        setLightHWeaponChoiceState("sword");
        if (lightHSwordUnbindState < event.target.value) {
            if (event.target.value - lightHSwordUnbindState == 1) {
                setLightHSwordUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHSphereCountState(wbLHSphereCount - 25)
                    setwbLHTailCountState(wbLHTailCount - 18)
                    setwbLHHeartCountState(wbLHHeartCount - 5)
                    setwbLHOriCountState(wbLHOriCount - 1)
                    setwbLHRupeeCost(parseFloat(wbLHRupeeCost - 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount - 25)
                    setallwbLHTailCount(allwbLHTailCount - 18)
                    setallwbLHHeartCount(allwbLHHeartCount - 5)
                    setallwbLHOriCount(allwbLHOriCount - 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHSphereCountState(wbLHSphereCount - 175)
                    setwbLHTailCountState(wbLHTailCount - 130)
                    setwbLHHornCountState(wbLHHornCount - 30)
                    setwbLHHeartCountState(wbLHHeartCount - 35)
                    setwbLHOriCountState(wbLHOriCount - 8)
                    setwbLHRupeeCost(parseFloat(wbLHRupeeCost - 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount - 175)
                    setallwbLHTailCount(allwbLHTailCount - 130)
                    setallwbLHHornCount(allwbLHHornCount - 30)
                    setallwbLHHeartCount(allwbLHHeartCount - 35)
                    setallwbLHOriCount(allwbLHOriCount - 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 7.5))
                }
            }
        }
        else if (lightHSwordUnbindState > event.target.value) {
            if (lightHSwordUnbindState - event.target.value == 1) {
                setLightHSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHSphereCountState(wbLHSphereCount + 25)
                    setwbLHTailCountState(wbLHTailCount + 18)
                    setwbLHHeartCountState(wbLHHeartCount + 5)
                    setwbLHOriCountState(wbLHOriCount + 1)
                    setwbLHRupeeCost(parseFloat(wbLHRupeeCost + 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount + 25)
                    setallwbLHTailCount(allwbLHTailCount + 18)
                    setallwbLHHeartCount(allwbLHHeartCount + 5)
                    setallwbLHOriCount(allwbLHOriCount + 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHSphereCountState(wbLHSphereCount + 175)
                    setwbLHTailCountState(wbLHTailCount + 130)
                    setwbLHHornCountState(wbLHHornCount + 30)
                    setwbLHHeartCountState(wbLHHeartCount + 35)
                    setwbLHOriCountState(wbLHOriCount + 8)
                    setwbLHRupeeCost(parseFloat(wbLHRupeeCost + 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount + 175)
                    setallwbLHTailCount(allwbLHTailCount + 130)
                    setallwbLHHornCount(allwbLHHornCount + 30)
                    setallwbLHHeartCount(allwbLHHeartCount + 35)
                    setallwbLHOriCount(allwbLHOriCount + 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightBlade() {
        if (lightHBladeCraftState == "grayscale(100%)") {
            setLightHBladeCraftState("grayscale(0%)")
            setLightHWeaponChoiceState("blade")
            setwbLHBlSphereCountState(wbLHBlSphereCount - 25)
            setwbLHBlTailCountState(wbLHBlTailCount - 18)
            setwbLHBlHeartCountState(wbLHBlHeartCount - 5)
            setwbLHBlOriCountState(wbLHBlOriCount - 1)
            setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost - 1.2))
            setallwbLHSphereCount(allwbLHSphereCount - 25)
            setallwbLHTailCount(allwbLHTailCount - 18)
            setallwbLHHeartCount(allwbLHHeartCount - 5)
            setallwbLHOriCount(allwbLHOriCount - 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
        }
        else if (lightHBladeCraftState == "grayscale(0%)") {
            setLightHBladeCraftState("grayscale(100%)")
            setLightHWeaponChoiceState("blade")
            setwbLHBlSphereCountState(wbLHBlSphereCount + 25)
            setwbLHBlTailCountState(wbLHBlTailCount + 18)
            setwbLHBlHeartCountState(wbLHBlHeartCount + 5)
            setwbLHBlOriCountState(wbLHBlOriCount + 1)
            setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost + 1.2))
            setallwbLHSphereCount(allwbLHSphereCount + 25)
            setallwbLHTailCount(allwbLHTailCount + 18)
            setallwbLHHeartCount(allwbLHHeartCount + 5)
            setallwbLHOriCount(allwbLHOriCount + 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
        }
    }

    function lightBladeWeaponBonus() {
        if (lightHBladeWeaponBonusState == "grayscale(100%)") {
            setLightHBladeWeaponBonusState("grayscale(0%)")
            setLightHWeaponChoiceState("blade")
            setwbLHBlSphereCountState(wbLHBlSphereCount - 150)
            setwbLHBlTailCountState(wbLHBlTailCount - 100)
            setwbLHBlHornCountState(wbLHBlHornCount - 30)
            setwbLHBlHeartCountState(wbLHBlHeartCount - 10)
            setwbLHBlOriCountState(wbLHBlOriCount - 30)
            setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost - 10))
            setallwbLHSphereCount(allwbLHSphereCount - 150)
            setallwbLHTailCount(allwbLHTailCount - 100)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 10))
        }
        else if (lightHBladeWeaponBonusState == "grayscale(0%)") {
            setLightHBladeWeaponBonusState("grayscale(100%)")
            setLightHWeaponChoiceState("blade")
            setwbLHBlSphereCountState(wbLHBlSphereCount + 150)
            setwbLHBlTailCountState(wbLHBlTailCount + 100)
            setwbLHBlHornCountState(wbLHBlHornCount + 30)
            setwbLHBlHeartCountState(wbLHBlHeartCount + 10)
            setwbLHBlOriCountState(wbLHBlOriCount + 30)
            setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost + 10))
            setallwbLHSphereCount(allwbLHSphereCount + 150)
            setallwbLHTailCount(allwbLHTailCount + 100)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 10))
        }
    }

    function lightBladeRefine() {
        if (lightHBladeRefineState == "grayscale(100%)") {
            setLightHBladeRefineState("grayscale(0%)")
            setLightHWeaponChoiceState("blade")
            setwbLHBlSphereCountState(wbLHBlSphereCount - 50)
            setwbLHBlTailCountState(wbLHBlTailCount - 40)
            setwbLHBlHornCountState(wbLHBlHornCount - 30)
            setwbLHBlHeartCountState(wbLHBlHeartCount - 10)
            setwbLHBlOriCountState(wbLHBlOriCount - 3)
            setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost - 1.5))
            setallwbLHSphereCount(allwbLHSphereCount - 50)
            setallwbLHTailCount(allwbLHTailCount - 40)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.5))
        }
        else if (lightHBladeRefineState == "grayscale(0%)") {
            setLightHBladeRefineState("grayscale(100%)")
            setLightHWeaponChoiceState("blade")
            setwbLHBlSphereCountState(wbLHBlSphereCount + 50)
            setwbLHBlTailCountState(wbLHBlTailCount + 40)
            setwbLHBlHornCountState(wbLHBlHornCount + 30)
            setwbLHBlHeartCountState(wbLHBlHeartCount + 10)
            setwbLHBlOriCountState(wbLHBlOriCount + 3)
            setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost + 1.5))
            setallwbLHSphereCount(allwbLHSphereCount + 50)
            setallwbLHTailCount(allwbLHTailCount + 40)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.5))
        }
    }

    function handleLightBladeUnbindIncrement(event) {
        setLightHWeaponChoiceState("blade");
        if (lightHBladeUnbindState < event.target.value) {
            if (event.target.value - lightHBladeUnbindState == 1) {
                setLightHBladeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHBlSphereCountState(wbLHBlSphereCount - 25)
                    setwbLHBlTailCountState(wbLHBlTailCount - 18)
                    setwbLHBlHeartCountState(wbLHBlHeartCount - 5)
                    setwbLHBlOriCountState(wbLHBlOriCount - 1)
                    setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost - 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount - 25)
                    setallwbLHTailCount(allwbLHTailCount - 18)
                    setallwbLHHeartCount(allwbLHHeartCount - 5)
                    setallwbLHOriCount(allwbLHOriCount - 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHBlSphereCountState(wbLHBlSphereCount - 175)
                    setwbLHBlTailCountState(wbLHBlTailCount - 130)
                    setwbLHBlHornCountState(wbLHBlHornCount - 30)
                    setwbLHBlHeartCountState(wbLHBlHeartCount - 35)
                    setwbLHBlOriCountState(wbLHBlOriCount - 8)
                    setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost - 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount - 175)
                    setallwbLHTailCount(allwbLHTailCount - 130)
                    setallwbLHHornCount(allwbLHHornCount - 30)
                    setallwbLHHeartCount(allwbLHHeartCount - 35)
                    setallwbLHOriCount(allwbLHOriCount - 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 7.5))
                }
            }
        }
        else if (lightHBladeUnbindState > event.target.value) {
            if (lightHBladeUnbindState - event.target.value == 1) {
                setLightHBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHBlSphereCountState(wbLHBlSphereCount + 25)
                    setwbLHBlTailCountState(wbLHBlTailCount + 18)
                    setwbLHBlHeartCountState(wbLHBlHeartCount + 5)
                    setwbLHBlOriCountState(wbLHBlOriCount + 1)
                    setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost + 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount + 25)
                    setallwbLHTailCount(allwbLHTailCount + 18)
                    setallwbLHHeartCount(allwbLHHeartCount + 5)
                    setallwbLHOriCount(allwbLHOriCount + 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHBlSphereCountState(wbLHBlSphereCount + 175)
                    setwbLHBlTailCountState(wbLHBlTailCount + 130)
                    setwbLHBlHornCountState(wbLHBlHornCount + 30)
                    setwbLHBlHeartCountState(wbLHBlHeartCount + 35)
                    setwbLHBlOriCountState(wbLHBlOriCount + 8)
                    setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost + 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount + 175)
                    setallwbLHTailCount(allwbLHTailCount + 130)
                    setallwbLHHornCount(allwbLHHornCount + 30)
                    setallwbLHHeartCount(allwbLHHeartCount + 35)
                    setallwbLHOriCount(allwbLHOriCount + 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightDagger() {
        if (lightHDaggerCraftState == "grayscale(100%)") {
            setLightHDaggerCraftState("grayscale(0%)")
            setLightHWeaponChoiceState("dagger")
            setwbLHDSphereCountState(wbLHDSphereCount - 25)
            setwbLHDTailCountState(wbLHDTailCount - 18)
            setwbLHDHeartCountState(wbLHDHeartCount - 5)
            setwbLHDOriCountState(wbLHDOriCount - 1)
            setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost - 1.2))
            setallwbLHSphereCount(allwbLHSphereCount - 25)
            setallwbLHTailCount(allwbLHTailCount - 18)
            setallwbLHHeartCount(allwbLHHeartCount - 5)
            setallwbLHOriCount(allwbLHOriCount - 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
        }
        else if (lightHDaggerCraftState == "grayscale(0%)") {
            setLightHDaggerCraftState("grayscale(100%)")
            setLightHWeaponChoiceState("dagger")
            setwbLHDSphereCountState(wbLHDSphereCount + 25)
            setwbLHDTailCountState(wbLHDTailCount + 18)
            setwbLHDHeartCountState(wbLHDHeartCount + 5)
            setwbLHDOriCountState(wbLHDOriCount + 1)
            setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost + 1.2))
            setallwbLHSphereCount(allwbLHSphereCount + 25)
            setallwbLHTailCount(allwbLHTailCount + 18)
            setallwbLHHeartCount(allwbLHHeartCount + 5)
            setallwbLHOriCount(allwbLHOriCount + 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
        }
    }

    function lightDaggerWeaponBonus() {
        if (lightHDaggerWeaponBonusState == "grayscale(100%)") {
            setLightHDaggerWeaponBonusState("grayscale(0%)")
            setLightHWeaponChoiceState("dagger")
            setwbLHDSphereCountState(wbLHDSphereCount - 150)
            setwbLHDTailCountState(wbLHDTailCount - 100)
            setwbLHDHornCountState(wbLHDHornCount - 30)
            setwbLHDHeartCountState(wbLHDHeartCount - 10)
            setwbLHDOriCountState(wbLHDOriCount - 30)
            setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost - 10))
            setallwbLHSphereCount(allwbLHSphereCount - 150)
            setallwbLHTailCount(allwbLHTailCount - 100)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 10))
        }
        else if (lightHDaggerWeaponBonusState == "grayscale(0%)") {
            setLightHDaggerWeaponBonusState("grayscale(100%)")
            setLightHWeaponChoiceState("dagger")
            setwbLHDSphereCountState(wbLHDSphereCount + 150)
            setwbLHDTailCountState(wbLHDTailCount + 100)
            setwbLHDHornCountState(wbLHDHornCount + 30)
            setwbLHDHeartCountState(wbLHDHeartCount + 10)
            setwbLHDOriCountState(wbLHDOriCount + 30)
            setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost + 10))
            setallwbLHSphereCount(allwbLHSphereCount + 150)
            setallwbLHTailCount(allwbLHTailCount + 100)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 10))
        }
    }

    function lightDaggerRefine() {
        if (lightHDaggerRefineState == "grayscale(100%)") {
            setLightHDaggerRefineState("grayscale(0%)")
            setLightHWeaponChoiceState("dagger")
            setwbLHDSphereCountState(wbLHDSphereCount - 50)
            setwbLHDTailCountState(wbLHDTailCount - 40)
            setwbLHDHornCountState(wbLHDHornCount - 30)
            setwbLHDHeartCountState(wbLHDHeartCount - 10)
            setwbLHDOriCountState(wbLHDOriCount - 3)
            setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost - 1.5))
            setallwbLHSphereCount(allwbLHSphereCount - 50)
            setallwbLHTailCount(allwbLHTailCount - 40)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.5))
        }
        else if (lightHDaggerRefineState == "grayscale(0%)") {
            setLightHDaggerRefineState("grayscale(100%)")
            setLightHWeaponChoiceState("dagger")
            setwbLHDSphereCountState(wbLHDSphereCount + 50)
            setwbLHDTailCountState(wbLHDTailCount + 40)
            setwbLHDHornCountState(wbLHDHornCount + 30)
            setwbLHDHeartCountState(wbLHDHeartCount + 10)
            setwbLHDOriCountState(wbLHDOriCount + 3)
            setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost + 1.5))
            setallwbLHSphereCount(allwbLHSphereCount + 50)
            setallwbLHTailCount(allwbLHTailCount + 40)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.5))
        }
    }

    function handleLightDaggerUnbindIncrement(event) {
        setLightHWeaponChoiceState("dagger");
        if (lightHDaggerUnbindState < event.target.value) {
            if (event.target.value - lightHDaggerUnbindState == 1) {
                setLightHDaggerUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHDSphereCountState(wbLHDSphereCount - 25)
                    setwbLHDTailCountState(wbLHDTailCount - 18)
                    setwbLHDHeartCountState(wbLHDHeartCount - 5)
                    setwbLHDOriCountState(wbLHDOriCount - 1)
                    setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost - 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount - 25)
                    setallwbLHTailCount(allwbLHTailCount - 18)
                    setallwbLHHeartCount(allwbLHHeartCount - 5)
                    setallwbLHOriCount(allwbLHOriCount - 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHDSphereCountState(wbLHDSphereCount - 175)
                    setwbLHDTailCountState(wbLHDTailCount - 130)
                    setwbLHDHornCountState(wbLHDHornCount - 30)
                    setwbLHDHeartCountState(wbLHDHeartCount - 35)
                    setwbLHDOriCountState(wbLHDOriCount - 8)
                    setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost - 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount - 175)
                    setallwbLHTailCount(allwbLHTailCount - 130)
                    setallwbLHHornCount(allwbLHHornCount - 30)
                    setallwbLHHeartCount(allwbLHHeartCount - 35)
                    setallwbLHOriCount(allwbLHOriCount - 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 7.5))
                }
            }
        }
        else if (lightHDaggerUnbindState > event.target.value) {
            if (lightHDaggerUnbindState - event.target.value == 1) {
                setLightHDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHDSphereCountState(wbLHDSphereCount + 25)
                    setwbLHDTailCountState(wbLHDTailCount + 18)
                    setwbLHDHeartCountState(wbLHDHeartCount + 5)
                    setwbLHDOriCountState(wbLHDOriCount + 1)
                    setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost + 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount + 25)
                    setallwbLHTailCount(allwbLHTailCount + 18)
                    setallwbLHHeartCount(allwbLHHeartCount + 5)
                    setallwbLHOriCount(allwbLHOriCount + 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHDSphereCountState(wbLHDSphereCount + 175)
                    setwbLHDTailCountState(wbLHDTailCount + 130)
                    setwbLHDHornCountState(wbLHDHornCount + 30)
                    setwbLHDHeartCountState(wbLHDHeartCount + 35)
                    setwbLHDOriCountState(wbLHDOriCount + 8)
                    setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost + 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount + 175)
                    setallwbLHTailCount(allwbLHTailCount + 130)
                    setallwbLHHornCount(allwbLHHornCount + 30)
                    setallwbLHHeartCount(allwbLHHeartCount + 35)
                    setallwbLHOriCount(allwbLHOriCount + 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightAxe() {
        if (lightHAxeCraftState == "grayscale(100%)") {
            setLightHAxeCraftState("grayscale(0%)")
            setLightHWeaponChoiceState("axe")
            setwbLHASphereCountState(wbLHASphereCount - 25)
            setwbLHATailCountState(wbLHATailCount - 18)
            setwbLHAHeartCountState(wbLHAHeartCount - 5)
            setwbLHAOriCountState(wbLHAOriCount - 1)
            setwbLHARupeeCost(parseFloat(wbLHARupeeCost - 1.2))
            setallwbLHSphereCount(allwbLHSphereCount - 25)
            setallwbLHTailCount(allwbLHTailCount - 18)
            setallwbLHHeartCount(allwbLHHeartCount - 5)
            setallwbLHOriCount(allwbLHOriCount - 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
        }
        else if (lightHAxeCraftState == "grayscale(0%)") {
            setLightHAxeCraftState("grayscale(100%)")
            setLightHWeaponChoiceState("axe")
            setwbLHASphereCountState(wbLHASphereCount + 25)
            setwbLHATailCountState(wbLHATailCount + 18)
            setwbLHAHeartCountState(wbLHAHeartCount + 5)
            setwbLHAOriCountState(wbLHAOriCount + 1)
            setwbLHARupeeCost(parseFloat(wbLHARupeeCost + 1.2))
            setallwbLHSphereCount(allwbLHSphereCount + 25)
            setallwbLHTailCount(allwbLHTailCount + 18)
            setallwbLHHeartCount(allwbLHHeartCount + 5)
            setallwbLHOriCount(allwbLHOriCount + 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
        }
    }

    function lightAxeWeaponBonus() {
        if (lightHAxeWeaponBonusState == "grayscale(100%)") {
            setLightHAxeWeaponBonusState("grayscale(0%)")
            setLightHWeaponChoiceState("axe")
            setwbLHASphereCountState(wbLHASphereCount - 150)
            setwbLHATailCountState(wbLHATailCount - 100)
            setwbLHAHornCountState(wbLHAHornCount - 30)
            setwbLHAHeartCountState(wbLHAHeartCount - 10)
            setwbLHAOriCountState(wbLHAOriCount - 30)
            setwbLHARupeeCost(parseFloat(wbLHARupeeCost - 10))
            setallwbLHSphereCount(allwbLHSphereCount - 150)
            setallwbLHTailCount(allwbLHTailCount - 100)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 10))
        }
        else if (lightHAxeWeaponBonusState == "grayscale(0%)") {
            setLightHAxeWeaponBonusState("grayscale(100%)")
            setLightHWeaponChoiceState("axe")
            setwbLHASphereCountState(wbLHASphereCount + 150)
            setwbLHATailCountState(wbLHATailCount + 100)
            setwbLHAHornCountState(wbLHAHornCount + 30)
            setwbLHAHeartCountState(wbLHAHeartCount + 10)
            setwbLHAOriCountState(wbLHAOriCount + 30)
            setwbLHARupeeCost(parseFloat(wbLHARupeeCost + 10))
            setallwbLHSphereCount(allwbLHSphereCount + 150)
            setallwbLHTailCount(allwbLHTailCount + 100)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 10))
        }
    }

    function lightAxeRefine() {
        if (lightHAxeRefineState == "grayscale(100%)") {
            setLightHAxeRefineState("grayscale(0%)")
            setLightHWeaponChoiceState("axe")
            setwbLHASphereCountState(wbLHASphereCount - 50)
            setwbLHATailCountState(wbLHATailCount - 40)
            setwbLHAHornCountState(wbLHAHornCount - 30)
            setwbLHAHeartCountState(wbLHAHeartCount - 10)
            setwbLHAOriCountState(wbLHAOriCount - 3)
            setwbLHARupeeCost(parseFloat(wbLHARupeeCost - 1.5))
            setallwbLHSphereCount(allwbLHSphereCount - 50)
            setallwbLHTailCount(allwbLHTailCount - 40)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.5))
        }
        else if (lightHAxeRefineState == "grayscale(0%)") {
            setLightHAxeRefineState("grayscale(100%)")
            setLightHWeaponChoiceState("axe")
            setwbLHASphereCountState(wbLHASphereCount + 50)
            setwbLHATailCountState(wbLHATailCount + 40)
            setwbLHAHornCountState(wbLHAHornCount + 30)
            setwbLHAHeartCountState(wbLHAHeartCount + 10)
            setwbLHAOriCountState(wbLHAOriCount + 3)
            setwbLHARupeeCost(parseFloat(wbLHARupeeCost + 1.5))
            setallwbLHSphereCount(allwbLHSphereCount + 50)
            setallwbLHTailCount(allwbLHTailCount + 40)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.5))
        }
    }

    function handleLightAxeUnbindIncrement(event) {
        setLightHWeaponChoiceState("axe");
        if (lightHAxeUnbindState < event.target.value) {
            if (event.target.value - lightHAxeUnbindState == 1) {
                setLightHAxeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHASphereCountState(wbLHASphereCount - 25)
                    setwbLHATailCountState(wbLHATailCount - 18)
                    setwbLHAHeartCountState(wbLHAHeartCount - 5)
                    setwbLHAOriCountState(wbLHAOriCount - 1)
                    setwbLHARupeeCost(parseFloat(wbLHARupeeCost - 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount - 25)
                    setallwbLHTailCount(allwbLHTailCount - 18)
                    setallwbLHHeartCount(allwbLHHeartCount - 5)
                    setallwbLHOriCount(allwbLHOriCount - 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHASphereCountState(wbLHASphereCount - 175)
                    setwbLHATailCountState(wbLHATailCount - 130)
                    setwbLHAHornCountState(wbLHAHornCount - 30)
                    setwbLHAHeartCountState(wbLHAHeartCount - 35)
                    setwbLHAOriCountState(wbLHAOriCount - 8)
                    setwbLHARupeeCost(parseFloat(wbLHARupeeCost - 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount - 175)
                    setallwbLHTailCount(allwbLHTailCount - 130)
                    setallwbLHHornCount(allwbLHHornCount - 30)
                    setallwbLHHeartCount(allwbLHHeartCount - 35)
                    setallwbLHOriCount(allwbLHOriCount - 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 7.5))
                }
            }
        }
        else if (lightHAxeUnbindState > event.target.value) {
            if (lightHAxeUnbindState - event.target.value == 1) {
                setLightHAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHASphereCountState(wbLHASphereCount + 25)
                    setwbLHATailCountState(wbLHATailCount + 18)
                    setwbLHAHeartCountState(wbLHAHeartCount + 5)
                    setwbLHAOriCountState(wbLHAOriCount + 1)
                    setwbLHARupeeCost(parseFloat(wbLHARupeeCost + 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount + 25)
                    setallwbLHTailCount(allwbLHTailCount + 18)
                    setallwbLHHeartCount(allwbLHHeartCount + 5)
                    setallwbLHOriCount(allwbLHOriCount + 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHASphereCountState(wbLHASphereCount + 175)
                    setwbLHATailCountState(wbLHATailCount + 130)
                    setwbLHAHornCountState(wbLHAHornCount + 30)
                    setwbLHAHeartCountState(wbLHAHeartCount + 35)
                    setwbLHAOriCountState(wbLHAOriCount + 8)
                    setwbLHARupeeCost(parseFloat(wbLHARupeeCost + 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount + 175)
                    setallwbLHTailCount(allwbLHTailCount + 130)
                    setallwbLHHornCount(allwbLHHornCount + 30)
                    setallwbLHHeartCount(allwbLHHeartCount + 35)
                    setallwbLHOriCount(allwbLHOriCount + 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightLance() {
        if (lightHLanceCraftState == "grayscale(100%)") {
            setLightHLanceCraftState("grayscale(0%)")
            setLightHWeaponChoiceState("lance")
            setwbLHLSphereCountState(wbLHLSphereCount - 25)
            setwbLHLTailCountState(wbLHLTailCount - 18)
            setwbLHLHeartCountState(wbLHLHeartCount - 5)
            setwbLHLOriCountState(wbLHLOriCount - 1)
            setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost - 1.2))
            setallwbLHSphereCount(allwbLHSphereCount - 25)
            setallwbLHTailCount(allwbLHTailCount - 18)
            setallwbLHHeartCount(allwbLHHeartCount - 5)
            setallwbLHOriCount(allwbLHOriCount - 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
        }
        else if (lightHLanceCraftState == "grayscale(0%)") {
            setLightHLanceCraftState("grayscale(100%)")
            setLightHWeaponChoiceState("lance")
            setwbLHLSphereCountState(wbLHLSphereCount + 25)
            setwbLHLTailCountState(wbLHLTailCount + 18)
            setwbLHLHeartCountState(wbLHLHeartCount + 5)
            setwbLHLOriCountState(wbLHLOriCount + 1)
            setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost + 1.2))
            setallwbLHSphereCount(allwbLHSphereCount + 25)
            setallwbLHTailCount(allwbLHTailCount + 18)
            setallwbLHHeartCount(allwbLHHeartCount + 5)
            setallwbLHOriCount(allwbLHOriCount + 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
        }
    }

    function lightLanceWeaponBonus() {
        if (lightHLanceWeaponBonusState == "grayscale(100%)") {
            setLightHLanceWeaponBonusState("grayscale(0%)")
            setLightHWeaponChoiceState("lance")
            setwbLHLSphereCountState(wbLHLSphereCount - 150)
            setwbLHLTailCountState(wbLHLTailCount - 100)
            setwbLHLHornCountState(wbLHLHornCount - 30)
            setwbLHLHeartCountState(wbLHLHeartCount - 10)
            setwbLHLOriCountState(wbLHLOriCount - 30)
            setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost - 10))
            setallwbLHSphereCount(allwbLHSphereCount - 150)
            setallwbLHTailCount(allwbLHTailCount - 100)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 10))
        }
        else if (lightHLanceWeaponBonusState == "grayscale(0%)") {
            setLightHLanceWeaponBonusState("grayscale(100%)")
            setLightHWeaponChoiceState("lance")
            setwbLHLSphereCountState(wbLHLSphereCount + 150)
            setwbLHLTailCountState(wbLHLTailCount + 100)
            setwbLHLHornCountState(wbLHLHornCount + 30)
            setwbLHLHeartCountState(wbLHLHeartCount + 10)
            setwbLHLOriCountState(wbLHLOriCount + 30)
            setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost + 10))
            setallwbLHSphereCount(allwbLHSphereCount + 150)
            setallwbLHTailCount(allwbLHTailCount + 100)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 10))
        }
    }

    function lightLanceRefine() {
        if (lightHLanceRefineState == "grayscale(100%)") {
            setLightHLanceRefineState("grayscale(0%)")
            setLightHWeaponChoiceState("lance")
            setwbLHLSphereCountState(wbLHLSphereCount - 50)
            setwbLHLTailCountState(wbLHLTailCount - 40)
            setwbLHLHornCountState(wbLHLHornCount - 30)
            setwbLHLHeartCountState(wbLHLHeartCount - 10)
            setwbLHLOriCountState(wbLHLOriCount - 3)
            setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost - 1.5))
            setallwbLHSphereCount(allwbLHSphereCount - 50)
            setallwbLHTailCount(allwbLHTailCount - 40)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.5))
        }
        else if (lightHLanceRefineState == "grayscale(0%)") {
            setLightHLanceRefineState("grayscale(100%)")
            setLightHWeaponChoiceState("lance")
            setwbLHLSphereCountState(wbLHLSphereCount + 50)
            setwbLHLTailCountState(wbLHLTailCount + 40)
            setwbLHLHornCountState(wbLHLHornCount + 30)
            setwbLHLHeartCountState(wbLHLHeartCount + 10)
            setwbLHLOriCountState(wbLHLOriCount + 3)
            setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost + 1.5))
            setallwbLHSphereCount(allwbLHSphereCount + 50)
            setallwbLHTailCount(allwbLHTailCount + 40)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.5))
        }
    }

    function handleLightLanceUnbindIncrement(event) {
        setLightHWeaponChoiceState("lance");
        if (lightHLanceUnbindState < event.target.value) {
            if (event.target.value - lightHLanceUnbindState == 1) {
                setLightHLanceUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHLSphereCountState(wbLHLSphereCount - 25)
                    setwbLHLTailCountState(wbLHLTailCount - 18)
                    setwbLHLHeartCountState(wbLHLHeartCount - 5)
                    setwbLHLOriCountState(wbLHLOriCount - 1)
                    setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost - 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount - 25)
                    setallwbLHTailCount(allwbLHTailCount - 18)
                    setallwbLHHeartCount(allwbLHHeartCount - 5)
                    setallwbLHOriCount(allwbLHOriCount - 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHLSphereCountState(wbLHLSphereCount - 175)
                    setwbLHLTailCountState(wbLHLTailCount - 130)
                    setwbLHLHornCountState(wbLHLHornCount - 30)
                    setwbLHLHeartCountState(wbLHLHeartCount - 35)
                    setwbLHLOriCountState(wbLHLOriCount - 8)
                    setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost - 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount - 175)
                    setallwbLHTailCount(allwbLHTailCount - 130)
                    setallwbLHHornCount(allwbLHHornCount - 30)
                    setallwbLHHeartCount(allwbLHHeartCount - 35)
                    setallwbLHOriCount(allwbLHOriCount - 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 7.5))
                }
            }
        }
        else if (lightHLanceUnbindState > event.target.value) {
            if (lightHLanceUnbindState - event.target.value == 1) {
                setLightHLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHLSphereCountState(wbLHLSphereCount + 25)
                    setwbLHLTailCountState(wbLHLTailCount + 18)
                    setwbLHLHeartCountState(wbLHLHeartCount + 5)
                    setwbLHLOriCountState(wbLHLOriCount + 1)
                    setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost + 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount + 25)
                    setallwbLHTailCount(allwbLHTailCount + 18)
                    setallwbLHHeartCount(allwbLHHeartCount + 5)
                    setallwbLHOriCount(allwbLHOriCount + 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHLSphereCountState(wbLHLSphereCount + 175)
                    setwbLHLTailCountState(wbLHLTailCount + 130)
                    setwbLHLHornCountState(wbLHLHornCount + 30)
                    setwbLHLHeartCountState(wbLHLHeartCount + 35)
                    setwbLHLOriCountState(wbLHLOriCount + 8)
                    setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost + 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount + 175)
                    setallwbLHTailCount(allwbLHTailCount + 130)
                    setallwbLHHornCount(allwbLHHornCount + 30)
                    setallwbLHHeartCount(allwbLHHeartCount + 35)
                    setallwbLHOriCount(allwbLHOriCount + 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightBow() {
        if (lightHBowCraftState == "grayscale(100%)") {
            setLightHBowCraftState("grayscale(0%)")
            setLightHWeaponChoiceState("bow")
            setwbLHBoSphereCountState(wbLHBoSphereCount - 25)
            setwbLHBoTailCountState(wbLHBoTailCount - 18)
            setwbLHBoHeartCountState(wbLHBoHeartCount - 5)
            setwbLHBoOriCountState(wbLHBoOriCount - 1)
            setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost - 1.2))
            setallwbLHSphereCount(allwbLHSphereCount - 25)
            setallwbLHTailCount(allwbLHTailCount - 18)
            setallwbLHHeartCount(allwbLHHeartCount - 5)
            setallwbLHOriCount(allwbLHOriCount - 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
        }
        else if (lightHBowCraftState == "grayscale(0%)") {
            setLightHBowCraftState("grayscale(100%)")
            setLightHWeaponChoiceState("bow")
            setwbLHBoSphereCountState(wbLHBoSphereCount + 25)
            setwbLHBoTailCountState(wbLHBoTailCount + 18)
            setwbLHBoHeartCountState(wbLHBoHeartCount + 5)
            setwbLHBoOriCountState(wbLHBoOriCount + 1)
            setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost + 1.2))
            setallwbLHSphereCount(allwbLHSphereCount + 25)
            setallwbLHTailCount(allwbLHTailCount + 18)
            setallwbLHHeartCount(allwbLHHeartCount + 5)
            setallwbLHOriCount(allwbLHOriCount + 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
        }
    }

    function lightBowWeaponBonus() {
        if (lightHBowWeaponBonusState == "grayscale(100%)") {
            setLightHBowWeaponBonusState("grayscale(0%)")
            setLightHWeaponChoiceState("bow")
            setwbLHBoSphereCountState(wbLHBoSphereCount - 150)
            setwbLHBoTailCountState(wbLHBoTailCount - 100)
            setwbLHBoHornCountState(wbLHBoHornCount - 30)
            setwbLHBoHeartCountState(wbLHBoHeartCount - 10)
            setwbLHBoOriCountState(wbLHBoOriCount - 30)
            setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost - 10))
            setallwbLHSphereCount(allwbLHSphereCount - 150)
            setallwbLHTailCount(allwbLHTailCount - 100)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 10))
        }
        else if (lightHBowWeaponBonusState == "grayscale(0%)") {
            setLightHBowWeaponBonusState("grayscale(100%)")
            setLightHWeaponChoiceState("bow")
            setwbLHBoSphereCountState(wbLHBoSphereCount + 150)
            setwbLHBoTailCountState(wbLHBoTailCount + 100)
            setwbLHBoHornCountState(wbLHBoHornCount + 30)
            setwbLHBoHeartCountState(wbLHBoHeartCount + 10)
            setwbLHBoOriCountState(wbLHBoOriCount + 30)
            setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost + 10))
            setallwbLHSphereCount(allwbLHSphereCount + 150)
            setallwbLHTailCount(allwbLHTailCount + 100)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 10))
        }
    }

    function lightBowRefine() {
        if (lightHBowRefineState == "grayscale(100%)") {
            setLightHBowRefineState("grayscale(0%)")
            setLightHWeaponChoiceState("bow")
            setwbLHBoSphereCountState(wbLHBoSphereCount - 50)
            setwbLHBoTailCountState(wbLHBoTailCount - 40)
            setwbLHBoHornCountState(wbLHBoHornCount - 30)
            setwbLHBoHeartCountState(wbLHBoHeartCount - 10)
            setwbLHBoOriCountState(wbLHBoOriCount - 3)
            setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost - 1.5))
            setallwbLHSphereCount(allwbLHSphereCount - 50)
            setallwbLHTailCount(allwbLHTailCount - 40)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.5))
        }
        else if (lightHBowRefineState == "grayscale(0%)") {
            setLightHBowRefineState("grayscale(100%)")
            setLightHWeaponChoiceState("bow")
            setwbLHBoSphereCountState(wbLHBoSphereCount + 50)
            setwbLHBoTailCountState(wbLHBoTailCount + 40)
            setwbLHBoHornCountState(wbLHBoHornCount + 30)
            setwbLHBoHeartCountState(wbLHBoHeartCount + 10)
            setwbLHBoOriCountState(wbLHBoOriCount + 3)
            setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost + 1.5))
            setallwbLHSphereCount(allwbLHSphereCount + 50)
            setallwbLHTailCount(allwbLHTailCount + 40)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.5))
        }
    }

    function handleLightBowUnbindIncrement(event) {
        setLightHWeaponChoiceState("bow");
        if (lightHBowUnbindState < event.target.value) {
            if (event.target.value - lightHBowUnbindState == 1) {
                setLightHBowUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHBoSphereCountState(wbLHBoSphereCount - 25)
                    setwbLHBoTailCountState(wbLHBoTailCount - 18)
                    setwbLHBoHeartCountState(wbLHBoHeartCount - 5)
                    setwbLHBoOriCountState(wbLHBoOriCount - 1)
                    setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost - 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount - 25)
                    setallwbLHTailCount(allwbLHTailCount - 18)
                    setallwbLHHeartCount(allwbLHHeartCount - 5)
                    setallwbLHOriCount(allwbLHOriCount - 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHBoSphereCountState(wbLHBoSphereCount - 175)
                    setwbLHBoTailCountState(wbLHBoTailCount - 130)
                    setwbLHBoHornCountState(wbLHBoHornCount - 30)
                    setwbLHBoHeartCountState(wbLHBoHeartCount - 35)
                    setwbLHBoOriCountState(wbLHBoOriCount - 8)
                    setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost - 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount - 175)
                    setallwbLHTailCount(allwbLHTailCount - 130)
                    setallwbLHHornCount(allwbLHHornCount - 30)
                    setallwbLHHeartCount(allwbLHHeartCount - 35)
                    setallwbLHOriCount(allwbLHOriCount - 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 7.5))
                }
            }
        }
        else if (lightHBowUnbindState > event.target.value) {
            if (lightHBowUnbindState - event.target.value == 1) {
                setLightHBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHBoSphereCountState(wbLHBoSphereCount + 25)
                    setwbLHBoTailCountState(wbLHBoTailCount + 18)
                    setwbLHBoHeartCountState(wbLHBoHeartCount + 5)
                    setwbLHBoOriCountState(wbLHBoOriCount + 1)
                    setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost + 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount + 25)
                    setallwbLHTailCount(allwbLHTailCount + 18)
                    setallwbLHHeartCount(allwbLHHeartCount + 5)
                    setallwbLHOriCount(allwbLHOriCount + 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHBoSphereCountState(wbLHBoSphereCount + 175)
                    setwbLHBoTailCountState(wbLHBoTailCount + 130)
                    setwbLHBoHornCountState(wbLHBoHornCount + 30)
                    setwbLHBoHeartCountState(wbLHBoHeartCount + 35)
                    setwbLHBoOriCountState(wbLHBoOriCount + 8)
                    setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost + 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount + 175)
                    setallwbLHTailCount(allwbLHTailCount + 130)
                    setallwbLHHornCount(allwbLHHornCount + 30)
                    setallwbLHHeartCount(allwbLHHeartCount + 35)
                    setallwbLHOriCount(allwbLHOriCount + 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightWand() {
        if (lightHWandCraftState == "grayscale(100%)") {
            setLightHWandCraftState("grayscale(0%)")
            setLightHWeaponChoiceState("wand")
            setwbLHWSphereCountState(wbLHWSphereCount - 25)
            setwbLHWTailCountState(wbLHWTailCount - 18)
            setwbLHWHeartCountState(wbLHWHeartCount - 5)
            setwbLHWOriCountState(wbLHWOriCount - 1)
            setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost - 1.2))
            setallwbLHSphereCount(allwbLHSphereCount - 25)
            setallwbLHTailCount(allwbLHTailCount - 18)
            setallwbLHHeartCount(allwbLHHeartCount - 5)
            setallwbLHOriCount(allwbLHOriCount - 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
        }
        else if (lightHWandCraftState == "grayscale(0%)") {
            setLightHWandCraftState("grayscale(100%)")
            setLightHWeaponChoiceState("wand")
            setwbLHWSphereCountState(wbLHWSphereCount + 25)
            setwbLHWTailCountState(wbLHWTailCount + 18)
            setwbLHWHeartCountState(wbLHWHeartCount + 5)
            setwbLHWOriCountState(wbLHWOriCount + 1)
            setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost + 1.2))
            setallwbLHSphereCount(allwbLHSphereCount + 25)
            setallwbLHTailCount(allwbLHTailCount + 18)
            setallwbLHHeartCount(allwbLHHeartCount + 5)
            setallwbLHOriCount(allwbLHOriCount + 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
        }
    }

    function lightWandWeaponBonus() {
        if (lightHWandWeaponBonusState == "grayscale(100%)") {
            setLightHWandWeaponBonusState("grayscale(0%)")
            setLightHWeaponChoiceState("wand")
            setwbLHWSphereCountState(wbLHWSphereCount - 150)
            setwbLHWTailCountState(wbLHWTailCount - 100)
            setwbLHWHornCountState(wbLHWHornCount - 30)
            setwbLHWHeartCountState(wbLHWHeartCount - 10)
            setwbLHWOriCountState(wbLHWOriCount - 30)
            setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost - 10))
            setallwbLHSphereCount(allwbLHSphereCount - 150)
            setallwbLHTailCount(allwbLHTailCount - 100)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 10))
        }
        else if (lightHWandWeaponBonusState == "grayscale(0%)") {
            setLightHWandWeaponBonusState("grayscale(100%)")
            setLightHWeaponChoiceState("wand")
            setwbLHWSphereCountState(wbLHWSphereCount + 150)
            setwbLHWTailCountState(wbLHWTailCount + 100)
            setwbLHWHornCountState(wbLHWHornCount + 30)
            setwbLHWHeartCountState(wbLHWHeartCount + 10)
            setwbLHWOriCountState(wbLHWOriCount + 30)
            setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost + 10))
            setallwbLHSphereCount(allwbLHSphereCount + 150)
            setallwbLHTailCount(allwbLHTailCount + 100)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 10))
        }
    }

    function lightWandRefine() {
        if (lightHWandRefineState == "grayscale(100%)") {
            setLightHWandRefineState("grayscale(0%)")
            setLightHWeaponChoiceState("wand")
            setwbLHWSphereCountState(wbLHWSphereCount - 50)
            setwbLHWTailCountState(wbLHWTailCount - 40)
            setwbLHWHornCountState(wbLHWHornCount - 30)
            setwbLHWHeartCountState(wbLHWHeartCount - 10)
            setwbLHWOriCountState(wbLHWOriCount - 3)
            setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost - 1.5))
            setallwbLHSphereCount(allwbLHSphereCount - 50)
            setallwbLHTailCount(allwbLHTailCount - 40)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.5))
        }
        else if (lightHWandRefineState == "grayscale(0%)") {
            setLightHWandRefineState("grayscale(100%)")
            setLightHWeaponChoiceState("wand")
            setwbLHWSphereCountState(wbLHWSphereCount + 50)
            setwbLHWTailCountState(wbLHWTailCount + 40)
            setwbLHWHornCountState(wbLHWHornCount + 30)
            setwbLHWHeartCountState(wbLHWHeartCount + 10)
            setwbLHWOriCountState(wbLHWOriCount + 3)
            setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost + 1.5))
            setallwbLHSphereCount(allwbLHSphereCount + 50)
            setallwbLHTailCount(allwbLHTailCount + 40)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.5))
        }
    }

    function handleLightWandUnbindIncrement(event) {
        setLightHWeaponChoiceState("wand");
        if (lightHWandUnbindState < event.target.value) {
            if (event.target.value - lightHWandUnbindState == 1) {
                setLightHWandUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHWSphereCountState(wbLHWSphereCount - 25)
                    setwbLHWTailCountState(wbLHWTailCount - 18)
                    setwbLHWHeartCountState(wbLHWHeartCount - 5)
                    setwbLHWOriCountState(wbLHWOriCount - 1)
                    setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost - 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount - 25)
                    setallwbLHTailCount(allwbLHTailCount - 18)
                    setallwbLHHeartCount(allwbLHHeartCount - 5)
                    setallwbLHOriCount(allwbLHOriCount - 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHWSphereCountState(wbLHWSphereCount - 175)
                    setwbLHWTailCountState(wbLHWTailCount - 130)
                    setwbLHWHornCountState(wbLHWHornCount - 30)
                    setwbLHWHeartCountState(wbLHWHeartCount - 35)
                    setwbLHWOriCountState(wbLHWOriCount - 8)
                    setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost - 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount - 175)
                    setallwbLHTailCount(allwbLHTailCount - 130)
                    setallwbLHHornCount(allwbLHHornCount - 30)
                    setallwbLHHeartCount(allwbLHHeartCount - 35)
                    setallwbLHOriCount(allwbLHOriCount - 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 7.5))
                }
            }
        }
        else if (lightHWandUnbindState > event.target.value) {
            if (lightHWandUnbindState - event.target.value == 1) {
                setLightHWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHWSphereCountState(wbLHWSphereCount + 25)
                    setwbLHWTailCountState(wbLHWTailCount + 18)
                    setwbLHWHeartCountState(wbLHWHeartCount + 5)
                    setwbLHWOriCountState(wbLHWOriCount + 1)
                    setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost + 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount + 25)
                    setallwbLHTailCount(allwbLHTailCount + 18)
                    setallwbLHHeartCount(allwbLHHeartCount + 5)
                    setallwbLHOriCount(allwbLHOriCount + 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHWSphereCountState(wbLHWSphereCount + 175)
                    setwbLHWTailCountState(wbLHWTailCount + 130)
                    setwbLHWHornCountState(wbLHWHornCount + 30)
                    setwbLHWHeartCountState(wbLHWHeartCount + 35)
                    setwbLHWOriCountState(wbLHWOriCount + 8)
                    setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost + 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount + 175)
                    setallwbLHTailCount(allwbLHTailCount + 130)
                    setallwbLHHornCount(allwbLHHornCount + 30)
                    setallwbLHHeartCount(allwbLHHeartCount + 35)
                    setallwbLHOriCount(allwbLHOriCount + 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightStaff() {
        if (lightHStaffCraftState == "grayscale(100%)") {
            setLightHStaffCraftState("grayscale(0%)")
            setLightHWeaponChoiceState("staff")
            setwbLHStSphereCountState(wbLHStSphereCount - 25)
            setwbLHStTailCountState(wbLHStTailCount - 18)
            setwbLHStHeartCountState(wbLHStHeartCount - 5)
            setwbLHStOriCountState(wbLHStOriCount - 1)
            setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost - 1.2))
            setallwbLHSphereCount(allwbLHSphereCount - 25)
            setallwbLHTailCount(allwbLHTailCount - 18)
            setallwbLHHeartCount(allwbLHHeartCount - 5)
            setallwbLHOriCount(allwbLHOriCount - 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
        }
        else if (lightHStaffCraftState == "grayscale(0%)") {
            setLightHStaffCraftState("grayscale(100%)")
            setLightHWeaponChoiceState("staff")
            setwbLHStSphereCountState(wbLHStSphereCount + 25)
            setwbLHStTailCountState(wbLHStTailCount + 18)
            setwbLHStHeartCountState(wbLHStHeartCount + 5)
            setwbLHStOriCountState(wbLHStOriCount + 1)
            setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost + 1.2))
            setallwbLHSphereCount(allwbLHSphereCount + 25)
            setallwbLHTailCount(allwbLHTailCount + 18)
            setallwbLHHeartCount(allwbLHHeartCount + 5)
            setallwbLHOriCount(allwbLHOriCount + 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
        }
    }

    function lightStaffWeaponBonus() {
        if (lightHStaffWeaponBonusState == "grayscale(100%)") {
            setLightHStaffWeaponBonusState("grayscale(0%)")
            setLightHWeaponChoiceState("staff")
            setwbLHStSphereCountState(wbLHStSphereCount - 150)
            setwbLHStTailCountState(wbLHStTailCount - 100)
            setwbLHStHornCountState(wbLHStHornCount - 30)
            setwbLHStHeartCountState(wbLHStHeartCount - 10)
            setwbLHStOriCountState(wbLHStOriCount - 30)
            setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost - 10))
            setallwbLHSphereCount(allwbLHSphereCount - 150)
            setallwbLHTailCount(allwbLHTailCount - 100)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 10))
        }
        else if (lightHStaffWeaponBonusState == "grayscale(0%)") {
            setLightHStaffWeaponBonusState("grayscale(100%)")
            setLightHWeaponChoiceState("staff")
            setwbLHStSphereCountState(wbLHStSphereCount + 150)
            setwbLHStTailCountState(wbLHStTailCount + 100)
            setwbLHStHornCountState(wbLHStHornCount + 30)
            setwbLHStHeartCountState(wbLHStHeartCount + 10)
            setwbLHStOriCountState(wbLHStOriCount + 30)
            setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost + 10))
            setallwbLHSphereCount(allwbLHSphereCount + 150)
            setallwbLHTailCount(allwbLHTailCount + 100)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 10))
        }
    }

    function lightStaffRefine() {
        if (lightHStaffRefineState == "grayscale(100%)") {
            setLightHStaffRefineState("grayscale(0%)")
            setLightHWeaponChoiceState("staff")
            setwbLHStSphereCountState(wbLHStSphereCount - 50)
            setwbLHStTailCountState(wbLHStTailCount - 40)
            setwbLHStHornCountState(wbLHStHornCount - 30)
            setwbLHStHeartCountState(wbLHStHeartCount - 10)
            setwbLHStOriCountState(wbLHStOriCount - 3)
            setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost - 1.5))
            setallwbLHSphereCount(allwbLHSphereCount - 50)
            setallwbLHTailCount(allwbLHTailCount - 40)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.5))
        }
        else if (lightHStaffRefineState == "grayscale(0%)") {
            setLightHStaffRefineState("grayscale(100%)")
            setLightHWeaponChoiceState("staff")
            setwbLHStSphereCountState(wbLHStSphereCount + 50)
            setwbLHStTailCountState(wbLHStTailCount + 40)
            setwbLHStHornCountState(wbLHStHornCount + 30)
            setwbLHStHeartCountState(wbLHStHeartCount + 10)
            setwbLHStOriCountState(wbLHStOriCount + 3)
            setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost + 1.5))
            setallwbLHSphereCount(allwbLHSphereCount + 50)
            setallwbLHTailCount(allwbLHTailCount + 40)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.5))
        }
    }

    function handleLightStaffUnbindIncrement(event) {
        setLightHWeaponChoiceState("staff");
        if (lightHStaffUnbindState < event.target.value) {
            if (event.target.value - lightHStaffUnbindState == 1) {
                setLightHStaffUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHStSphereCountState(wbLHStSphereCount - 25)
                    setwbLHStTailCountState(wbLHStTailCount - 18)
                    setwbLHStHeartCountState(wbLHStHeartCount - 5)
                    setwbLHStOriCountState(wbLHStOriCount - 1)
                    setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost - 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount - 25)
                    setallwbLHTailCount(allwbLHTailCount - 18)
                    setallwbLHHeartCount(allwbLHHeartCount - 5)
                    setallwbLHOriCount(allwbLHOriCount - 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHStSphereCountState(wbLHStSphereCount - 175)
                    setwbLHStTailCountState(wbLHStTailCount - 130)
                    setwbLHStHornCountState(wbLHStHornCount - 30)
                    setwbLHStHeartCountState(wbLHStHeartCount - 35)
                    setwbLHStOriCountState(wbLHStOriCount - 8)
                    setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost - 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount - 175)
                    setallwbLHTailCount(allwbLHTailCount - 130)
                    setallwbLHHornCount(allwbLHHornCount - 30)
                    setallwbLHHeartCount(allwbLHHeartCount - 35)
                    setallwbLHOriCount(allwbLHOriCount - 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 7.5))
                }
            }
        }
        else if (lightHStaffUnbindState > event.target.value) {
            if (lightHStaffUnbindState - event.target.value == 1) {
                setLightHStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHStSphereCountState(wbLHStSphereCount + 25)
                    setwbLHStTailCountState(wbLHStTailCount + 18)
                    setwbLHStHeartCountState(wbLHStHeartCount + 5)
                    setwbLHStOriCountState(wbLHStOriCount + 1)
                    setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost + 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount + 25)
                    setallwbLHTailCount(allwbLHTailCount + 18)
                    setallwbLHHeartCount(allwbLHHeartCount + 5)
                    setallwbLHOriCount(allwbLHOriCount + 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHStSphereCountState(wbLHStSphereCount + 175)
                    setwbLHStTailCountState(wbLHStTailCount + 130)
                    setwbLHStHornCountState(wbLHStHornCount + 30)
                    setwbLHStHeartCountState(wbLHStHeartCount + 35)
                    setwbLHStOriCountState(wbLHStOriCount + 8)
                    setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost + 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount + 175)
                    setallwbLHTailCount(allwbLHTailCount + 130)
                    setallwbLHHornCount(allwbLHHornCount + 30)
                    setallwbLHHeartCount(allwbLHHeartCount + 35)
                    setallwbLHOriCount(allwbLHOriCount + 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightManacaster() {
        if (lightHManacasterCraftState == "grayscale(100%)") {
            setLightHManacasterCraftState("grayscale(0%)")
            setLightHWeaponChoiceState("manacaster")
            setwbLHMSphereCountState(wbLHMSphereCount - 25)
            setwbLHMTailCountState(wbLHMTailCount - 18)
            setwbLHMHeartCountState(wbLHMHeartCount - 5)
            setwbLHMOriCountState(wbLHMOriCount - 1)
            setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost - 1.2))
            setallwbLHSphereCount(allwbLHSphereCount - 25)
            setallwbLHTailCount(allwbLHTailCount - 18)
            setallwbLHHeartCount(allwbLHHeartCount - 5)
            setallwbLHOriCount(allwbLHOriCount - 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
        }
        else if (lightHManacasterCraftState == "grayscale(0%)") {
            setLightHManacasterCraftState("grayscale(100%)")
            setLightHWeaponChoiceState("manacaster")
            setwbLHMSphereCountState(wbLHMSphereCount + 25)
            setwbLHMTailCountState(wbLHMTailCount + 18)
            setwbLHMHeartCountState(wbLHMHeartCount + 5)
            setwbLHMOriCountState(wbLHMOriCount + 1)
            setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost + 1.2))
            setallwbLHSphereCount(allwbLHSphereCount + 25)
            setallwbLHTailCount(allwbLHTailCount + 18)
            setallwbLHHeartCount(allwbLHHeartCount + 5)
            setallwbLHOriCount(allwbLHOriCount + 1)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
        }
    }

    function lightManacasterWeaponBonus() {
        if (lightHManacasterWeaponBonusState == "grayscale(100%)") {
            setLightHManacasterWeaponBonusState("grayscale(0%)")
            setLightHWeaponChoiceState("manacaster")
            setwbLHMSphereCountState(wbLHMSphereCount - 150)
            setwbLHMTailCountState(wbLHMTailCount - 100)
            setwbLHMHornCountState(wbLHMHornCount - 30)
            setwbLHMHeartCountState(wbLHMHeartCount - 10)
            setwbLHMOriCountState(wbLHMOriCount - 30)
            setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost - 10))
            setallwbLHSphereCount(allwbLHSphereCount - 150)
            setallwbLHTailCount(allwbLHTailCount - 100)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 10))
        }
        else if (lightHManacasterWeaponBonusState == "grayscale(0%)") {
            setLightHManacasterWeaponBonusState("grayscale(100%)")
            setLightHWeaponChoiceState("manacaster")
            setwbLHMSphereCountState(wbLHMSphereCount + 150)
            setwbLHMTailCountState(wbLHMTailCount + 100)
            setwbLHMHornCountState(wbLHMHornCount + 30)
            setwbLHMHeartCountState(wbLHMHeartCount + 10)
            setwbLHMOriCountState(wbLHMOriCount + 30)
            setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost + 10))
            setallwbLHSphereCount(allwbLHSphereCount + 150)
            setallwbLHTailCount(allwbLHTailCount + 100)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 30)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 10))
        }
    }

    function lightManacasterRefine() {
        if (lightHManacasterRefineState == "grayscale(100%)") {
            setLightHManacasterRefineState("grayscale(0%)")
            setLightHWeaponChoiceState("manacaster")
            setwbLHMSphereCountState(wbLHMSphereCount - 50)
            setwbLHMTailCountState(wbLHMTailCount - 40)
            setwbLHMHornCountState(wbLHMHornCount - 30)
            setwbLHMHeartCountState(wbLHMHeartCount - 10)
            setwbLHMOriCountState(wbLHMOriCount - 3)
            setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost - 1.5))
            setallwbLHSphereCount(allwbLHSphereCount - 50)
            setallwbLHTailCount(allwbLHTailCount - 40)
            setallwbLHHornCount(allwbLHHornCount - 30)
            setallwbLHHeartCount(allwbLHHeartCount - 10)
            setallwbLHOriCount(allwbLHOriCount - 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.5))
        }
        else if (lightHManacasterRefineState == "grayscale(0%)") {
            setLightHManacasterRefineState("grayscale(100%)")
            setLightHWeaponChoiceState("manacaster")
            setwbLHMSphereCountState(wbLHMSphereCount + 50)
            setwbLHMTailCountState(wbLHMTailCount + 40)
            setwbLHMHornCountState(wbLHMHornCount + 30)
            setwbLHMHeartCountState(wbLHMHeartCount + 10)
            setwbLHMOriCountState(wbLHMOriCount + 3)
            setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost + 1.5))
            setallwbLHSphereCount(allwbLHSphereCount + 50)
            setallwbLHTailCount(allwbLHTailCount + 40)
            setallwbLHHornCount(allwbLHHornCount + 30)
            setallwbLHHeartCount(allwbLHHeartCount + 10)
            setallwbLHOriCount(allwbLHOriCount + 3)
            setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.5))
        }
    }

    function handleLightManacasterUnbindIncrement(event) {
        setLightHWeaponChoiceState("manacaster");
        if (lightHManacasterUnbindState < event.target.value) {
            if (event.target.value - lightHManacasterUnbindState == 1) {
                setLightHManacasterUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHMSphereCountState(wbLHMSphereCount - 25)
                    setwbLHMTailCountState(wbLHMTailCount - 18)
                    setwbLHMHeartCountState(wbLHMHeartCount - 5)
                    setwbLHMOriCountState(wbLHMOriCount - 1)
                    setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost - 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount - 25)
                    setallwbLHTailCount(allwbLHTailCount - 18)
                    setallwbLHHeartCount(allwbLHHeartCount - 5)
                    setallwbLHOriCount(allwbLHOriCount - 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHMSphereCountState(wbLHMSphereCount - 175)
                    setwbLHMTailCountState(wbLHMTailCount - 130)
                    setwbLHMHornCountState(wbLHMHornCount - 30)
                    setwbLHMHeartCountState(wbLHMHeartCount - 35)
                    setwbLHMOriCountState(wbLHMOriCount - 8)
                    setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost - 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount - 175)
                    setallwbLHTailCount(allwbLHTailCount - 130)
                    setallwbLHHornCount(allwbLHHornCount - 30)
                    setallwbLHHeartCount(allwbLHHeartCount - 35)
                    setallwbLHOriCount(allwbLHOriCount - 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost - 7.5))
                }
            }
        }
        else if (lightHManacasterUnbindState > event.target.value) {
            if (lightHManacasterUnbindState - event.target.value == 1) {
                setLightHManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHMSphereCountState(wbLHMSphereCount + 25)
                    setwbLHMTailCountState(wbLHMTailCount + 18)
                    setwbLHMHeartCountState(wbLHMHeartCount + 5)
                    setwbLHMOriCountState(wbLHMOriCount + 1)
                    setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost + 1.2))
                    setallwbLHSphereCount(allwbLHSphereCount + 25)
                    setallwbLHTailCount(allwbLHTailCount + 18)
                    setallwbLHHeartCount(allwbLHHeartCount + 5)
                    setallwbLHOriCount(allwbLHOriCount + 1)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHMSphereCountState(wbLHMSphereCount + 175)
                    setwbLHMTailCountState(wbLHMTailCount + 130)
                    setwbLHMHornCountState(wbLHMHornCount + 30)
                    setwbLHMHeartCountState(wbLHMHeartCount + 35)
                    setwbLHMOriCountState(wbLHMOriCount + 8)
                    setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost + 7.5))
                    setallwbLHSphereCount(allwbLHSphereCount + 175)
                    setallwbLHTailCount(allwbLHTailCount + 130)
                    setallwbLHHornCount(allwbLHHornCount + 30)
                    setallwbLHHeartCount(allwbLHHeartCount + 35)
                    setallwbLHOriCount(allwbLHOriCount + 8)
                    setallwbLHRupeeCost(parseFloat(allwbLHRupeeCost + 7.5))
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
                            <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Light HDT Weapons</Text>
                        </Box>
                    </Flex>
                        <Flex>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={LightHDTSword} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightHSwordCraftState }} onClick={craftLightSword} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Absolute Lightning</Text>
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
                                            onChange={handleLightSwordUnbindIncrement}
                                            defaultValue={lightHSwordUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="gold"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="gold" fontSize={[1, 3]}>{lightHSwordUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightHSwordWeaponBonusState }} onClick={lightSwordWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: lightHSwordRefineState }} onClick={lightSwordRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={LightHDTBlade} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightHBladeCraftState }} onClick={craftLightBlade} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Brilliant Flash</Text>
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
                                            onChange={handleLightBladeUnbindIncrement}
                                            defaultValue={lightHBladeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="gold"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="gold" fontSize={[1, 3]}>{lightHBladeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightHBladeWeaponBonusState }} onClick={lightBladeWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: lightHBladeRefineState }} onClick={lightBladeRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={LightHDTDagger} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightHDaggerCraftState }} onClick={craftLightDagger} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Fulminator's Maw</Text>
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
                                            onChange={handleLightDaggerUnbindIncrement}
                                            defaultValue={lightHDaggerUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="gold"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="gold" fontSize={[1, 3]}>{lightHDaggerUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightHDaggerWeaponBonusState }} onClick={lightDaggerWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: lightHDaggerRefineState }} onClick={lightDaggerRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={LightHDTAxe} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightHAxeCraftState }} onClick={craftLightAxe} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Mighty Thundercrash</Text>
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
                                            onChange={handleLightAxeUnbindIncrement}
                                            defaultValue={lightHAxeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="gold"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="gold" fontSize={[1, 3]}>{lightHAxeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightHAxeWeaponBonusState }} onClick={lightAxeWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: lightHAxeRefineState }} onClick={lightAxeRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={LightHDTLance} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightHLanceCraftState }} onClick={craftLightLance} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Brilliant Lightflash</Text>
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
                                            onChange={handleLightLanceUnbindIncrement}
                                            defaultValue={lightHLanceUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="gold"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="gold" fontSize={[1, 3]}>{lightHLanceUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightHLanceWeaponBonusState }} onClick={lightLanceWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: lightHLanceRefineState }} onClick={lightLanceRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={LightHDTBow} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightHBowCraftState }} onClick={craftLightBow} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Jupiter's Sky</Text>
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
                                            onChange={handleLightBowUnbindIncrement}
                                            defaultValue={lightHBowUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="gold"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="gold" fontSize={[1, 3]}>{lightHBowUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightHBowWeaponBonusState }} onClick={lightBowWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: lightHBowRefineState }} onClick={lightBowRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={LightHDTWand} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightHWandCraftState }} onClick={craftLightWand} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Primeval Thunder</Text>
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
                                            onChange={handleLightWandUnbindIncrement}
                                            defaultValue={lightHWandUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="gold"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="gold" fontSize={[1, 3]}>{lightHWandUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightHWandWeaponBonusState }} onClick={lightWandWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: lightHWandRefineState }} onClick={lightWandRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={LightHDTStaff} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightHStaffCraftState }} onClick={craftLightStaff} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Heavensneer</Text>
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
                                            onChange={handleLightStaffUnbindIncrement}
                                            defaultValue={lightHStaffUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="gold"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="gold" fontSize={[1, 3]}>{lightHStaffUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightHStaffWeaponBonusState }} onClick={lightStaffWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: lightHStaffRefineState }} onClick={lightStaffRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={LightHDTManacaster} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: lightHManacasterCraftState }} onClick={craftLightManacaster} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Thunder Trigger</Text>
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
                                            onChange={handleLightManacasterUnbindIncrement}
                                            defaultValue={lightHManacasterUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="gold"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="gold" fontSize={[1, 3]}>{lightHManacasterUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightHManacasterWeaponBonusState }} onClick={lightManacasterWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: lightHManacasterRefineState }} onClick={lightManacasterRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                        </Flex>
                </Box>
                {lightHDTWeaponSelection()}
            </Flex>
            <Box width={[3/4, 1 / 2]} p={3} m={3} bg={"#152238"} sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Materials Needed to get all Weapon Bonuses</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 175]}>
                            <Image src={LightHDTSphere} sx={{ width: ["80%","70%"], height: ["75%", "55%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{allwbLHSphereCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={LightHDTTail} sx={{ width: ["80%","70%"], height: ["75%", "55%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{allwbLHTailCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={LightHDTHorn} sx={{ width: ["80%","70%"], height: ["75%", "55%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{allwbLHHornCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={LightHDTHeart} sx={{ width: ["80%", "70%"], height: ["70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{allwbLHHeartCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["80%", "70%"], height: ["70%"]}} />
                            <Text color={"gold"} fontSize={[1, 2]}>{allwbLHOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["80%", "70%"], height: ["70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{allwbLHRupeeCost.toFixed(1)} million</Text>
                        </Card>
                    </Flex>
            </Box>
            <WeaponTypeNavTabs />
        </div>
    )
}
