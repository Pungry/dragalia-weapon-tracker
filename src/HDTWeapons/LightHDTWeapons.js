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
    const [lightWeaponChoice, setLightWeaponChoiceState] = useLocalStorage("lightHWeaponChoice", "sword")

    const [lightSwordCraftState, setLightSwordCraftState] = useLocalStorage("lightHSwordCraftState", "grayscale(100%)")
    const [lightSwordWeaponBonusState, setLightSwordWeaponBonusState] = useLocalStorage("lightHSwordWeaponBonusState", "grayscale(100%)")
    const [lightSwordRefineState, setLightSwordRefineState] = useLocalStorage("lightHSwordRefineState", "grayscale(100%)");
    const [lightSwordUnbindState, setLightSwordUnbindState] = useLocalStorage("lightHSwordUnbindState", 0);

    const [wbLHSphereCount, setwbLHSphereCountState] = useLocalStorage("wbLHSphereCount", 500);
    const [wbLHTailCount, setwbLHTailCountState] = useLocalStorage("wbLHTailCount", 360);
    const [wbLHHeartCount, setwbLHHeartCountState] = useLocalStorage("wbLHHeartCount", 80);
    const [wbLHOriCount, setwbLHOriCountState] = useLocalStorage("wbLHOriCount", 46);
    const [wbLHRupeeCost, setwbLHRupeeCost] = useLocalStorage("wbLHRupeeCost", 25);
    const [wbLHHornCount, setwbLHHornCountState] = useLocalStorage("wbLHHornCount", 90);

    const [lightBladeCraftState, setLightBladeCraftState] = useLocalStorage("lightHBladeCraftState", "grayscale(100%)")
    const [lightBladeWeaponBonusState, setLightBladeWeaponBonusState] = useLocalStorage("lightHBladeWeaponBonusState", "grayscale(100%)")
    const [lightBladeRefineState, setLightBladeRefineState] = useLocalStorage("lightHBladeRefineState", "grayscale(100%)");
    const [lightBladeUnbindState, setLightBladeUnbindState] = useLocalStorage("lightHBladeUnbindState", 0);

    const [wbLHBlSphereCount, setwbLHBlSphereCountState] = useLocalStorage("wbLHBlSphereCount", 500);
    const [wbLHBlTailCount, setwbLHBlTailCountState] = useLocalStorage("wbLHBlTailCount", 360);
    const [wbLHBlHeartCount, setwbLHBlHeartCountState] = useLocalStorage("wbLHBlHeartCount", 80);
    const [wbLHBlOriCount, setwbLHBlOriCountState] = useLocalStorage("wbLHBlOriCount", 46);
    const [wbLHBlRupeeCost, setwbLHBlRupeeCost] = useLocalStorage("wbLHBlRupeeCost", 25);
    const [wbLHBlHornCount, setwbLHBlHornCountState] = useLocalStorage("wbLHBlHornCount", 90);

    const [lightDaggerCraftState, setLightDaggerCraftState] = useLocalStorage("lightHDaggerCraftState", "grayscale(100%)")
    const [lightDaggerWeaponBonusState, setLightDaggerWeaponBonusState] = useLocalStorage("lightHDaggerWeaponBonusState", "grayscale(100%)")
    const [lightDaggerRefineState, setLightDaggerRefineState] = useLocalStorage("lightHDaggerRefineState", "grayscale(100%)");
    const [lightDaggerUnbindState, setLightDaggerUnbindState] = useLocalStorage("lightHDaggerUnbindState", 0);

    const [wbLHDSphereCount, setwbLHDSphereCountState] = useLocalStorage("wbLHDSphereCount", 500);
    const [wbLHDTailCount, setwbLHDTailCountState] = useLocalStorage("wbLHDTailCount", 360);
    const [wbLHDHeartCount, setwbLHDHeartCountState] = useLocalStorage("wbLHDHeartCount", 80);
    const [wbLHDOriCount, setwbLHDOriCountState] = useLocalStorage("wbLHDOriCount", 46);
    const [wbLHDRupeeCost, setwbLHDRupeeCost] = useLocalStorage("wbLHDRupeeCost", 25);
    const [wbLHDHornCount, setwbLHDHornCountState] = useLocalStorage("wbLHDHornCount", 90);

    const [lightAxeCraftState, setLightAxeCraftState] = useLocalStorage("lightHAxeCraftState", "grayscale(100%)")
    const [lightAxeWeaponBonusState, setLightAxeWeaponBonusState] = useLocalStorage("lightHAxeWeaponBonusState", "grayscale(100%)")
    const [lightAxeRefineState, setLightAxeRefineState] = useLocalStorage("lightHAxeRefineState", "grayscale(100%)");
    const [lightAxeUnbindState, setLightAxeUnbindState] = useLocalStorage("lightHAxeUnbindState", 0);

    const [wbLHASphereCount, setwbLHASphereCountState] = useLocalStorage("wbLHASphereCount", 500);
    const [wbLHATailCount, setwbLHATailCountState] = useLocalStorage("wbLHATailCount", 360);
    const [wbLHAHeartCount, setwbLHAHeartCountState] = useLocalStorage("wbLHAHeartCount", 80);
    const [wbLHAOriCount, setwbLHAOriCountState] = useLocalStorage("wbLHAOriCount", 46);
    const [wbLHARupeeCost, setwbLHARupeeCost] = useLocalStorage("wbLHARupeeCost", 25);
    const [wbLHAHornCount, setwbLHAHornCountState] = useLocalStorage("wbLHAHornCount", 90);

    const [lightLanceCraftState, setLightLanceCraftState] = useLocalStorage("lightHLanceCraftState", "grayscale(100%)")
    const [lightLanceWeaponBonusState, setLightLanceWeaponBonusState] = useLocalStorage("lightHLanceWeaponBonusState", "grayscale(100%)")
    const [lightLanceRefineState, setLightLanceRefineState] = useLocalStorage("lightHLanceRefineState", "grayscale(100%)");
    const [lightLanceUnbindState, setLightLanceUnbindState] = useLocalStorage("lightHLanceUnbindState", 0);

    const [wbLHLSphereCount, setwbLHLSphereCountState] = useLocalStorage("wbLHLSphereCount", 500);
    const [wbLHLTailCount, setwbLHLTailCountState] = useLocalStorage("wbLHLTailCount", 360);
    const [wbLHLHeartCount, setwbLHLHeartCountState] = useLocalStorage("wbLHLHeartCount", 80);
    const [wbLHLOriCount, setwbLHLOriCountState] = useLocalStorage("wbLHLOriCount", 46);
    const [wbLHLRupeeCost, setwbLHLRupeeCost] = useLocalStorage("wbLHLRupeeCost", 25);
    const [wbLHLHornCount, setwbLHLHornCountState] = useLocalStorage("wbLHLHornCount", 90);

    const [lightBowCraftState, setLightBowCraftState] = useLocalStorage("lightHBowCraftState", "grayscale(100%)")
    const [lightBowWeaponBonusState, setLightBowWeaponBonusState] = useLocalStorage("lightHBowWeaponBonusState", "grayscale(100%)")
    const [lightBowRefineState, setLightBowRefineState] = useLocalStorage("lightHBowRefineState", "grayscale(100%)");
    const [lightBowUnbindState, setLightBowUnbindState] = useLocalStorage("lightHBowUnbindState", 0);

    const [wbLHBoSphereCount, setwbLHBoSphereCountState] = useLocalStorage("wbLHBoSphereCount", 500);
    const [wbLHBoTailCount, setwbLHBoTailCountState] = useLocalStorage("wbLHBoTailCount", 360);
    const [wbLHBoHeartCount, setwbLHBoHeartCountState] = useLocalStorage("wbLHBoHeartCount", 80);
    const [wbLHBoOriCount, setwbLHBoOriCountState] = useLocalStorage("wbLHBoOriCount", 46);
    const [wbLHBoRupeeCost, setwbLHBoRupeeCost] = useLocalStorage("wbLHBoRupeeCost", 25);
    const [wbLHBoHornCount, setwbLHBoHornCountState] = useLocalStorage("wbLHBoHornCount", 90);

    const [lightWandCraftState, setLightWandCraftState] = useLocalStorage("lightHWandCraftState", "grayscale(100%)")
    const [lightWandWeaponBonusState, setLightWandWeaponBonusState] = useLocalStorage("lightHWandWeaponBonusState", "grayscale(100%)")
    const [lightWandRefineState, setLightWandRefineState] = useLocalStorage("lightHWandRefineState", "grayscale(100%)");
    const [lightWandUnbindState, setLightWandUnbindState] = useLocalStorage("lightHWandUnbindState", 0);

    const [wbLHWSphereCount, setwbLHWSphereCountState] = useLocalStorage("wbLHWSphereCount", 500);
    const [wbLHWTailCount, setwbLHWTailCountState] = useLocalStorage("wbLHWTailCount", 360);
    const [wbLHWHeartCount, setwbLHWHeartCountState] = useLocalStorage("wbLHWHeartCount", 80);
    const [wbLHWOriCount, setwbLHWOriCountState] = useLocalStorage("wbLHWOriCount", 46);
    const [wbLHWRupeeCost, setwbLHWRupeeCost] = useLocalStorage("wbLHWRupeeCost", 25);
    const [wbLHWHornCount, setwbLHWHornCountState] = useLocalStorage("wbLHWHornCount", 90);

    const [lightStaffCraftState, setLightStaffCraftState] = useLocalStorage("lightHStaffCraftState", "grayscale(100%)")
    const [lightStaffWeaponBonusState, setLightStaffWeaponBonusState] = useLocalStorage("lightHStaffWeaponBonusState", "grayscale(100%)")
    const [lightStaffRefineState, setLightStaffRefineState] = useLocalStorage("lightHStaffRefineState", "grayscale(100%)");
    const [lightStaffUnbindState, setLightStaffUnbindState] = useLocalStorage("lightHStaffUnbindState", 0);

    const [wbLHStSphereCount, setwbLHStSphereCountState] = useLocalStorage("wbLHStSphereCount", 500);
    const [wbLHStTailCount, setwbLHStTailCountState] = useLocalStorage("wbLHStTailCount", 360);
    const [wbLHStHeartCount, setwbLHStHeartCountState] = useLocalStorage("wbLHStHeartCount", 80);
    const [wbLHStOriCount, setwbLHStOriCountState] = useLocalStorage("wbLHStOriCount", 46);
    const [wbLHStRupeeCost, setwbLHStRupeeCost] = useLocalStorage("wbLHStRupeeCost", 25);
    const [wbLHStHornCount, setwbLHStHornCountState] = useLocalStorage("wbLHStHornCount", 90);

    const [lightManacasterCraftState, setLightManacasterCraftState] = useLocalStorage("lightHManacasterCraftState", "grayscale(100%)")
    const [lightManacasterWeaponBonusState, setLightManacasterWeaponBonusState] = useLocalStorage("lightHManacasterWeaponBonusState", "grayscale(100%)")
    const [lightManacasterRefineState, setLightManacasterRefineState] = useLocalStorage("lightHManacasterRefineState", "grayscale(100%)");
    const [lightManacasterUnbindState, setLightManacasterUnbindState] = useLocalStorage("lightHManacasterUnbindState", 0);

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
        if (lightWeaponChoice == "sword") {
            return <LightHDTSwordCost wbLHSphereCount={wbLHSphereCount} wbLHTailCount={wbLHTailCount} wbLHHeartCount={wbLHHeartCount} wbLHOriCount={wbLHOriCount} wbLHRupeeCost={wbLHRupeeCost.toFixed(1)} wbLHHornCount={wbLHHornCount} />
        }
        if (lightWeaponChoice == "blade") {
            return <LightHDTBladeCost wbLHBlSphereCount={wbLHBlSphereCount} wbLHBlTailCount={wbLHBlTailCount} wbLHBlHeartCount={wbLHBlHeartCount} wbLHBlOriCount={wbLHBlOriCount} wbLHBlRupeeCost={wbLHBlRupeeCost.toFixed(1)} wbLHBlHornCount={wbLHBlHornCount} />
        }
        if (lightWeaponChoice == "dagger") {
            return <LightHDTDaggerCost wbLHDSphereCount={wbLHDSphereCount} wbLHDTailCount={wbLHDTailCount} wbLHDHeartCount={wbLHDHeartCount} wbLHDOriCount={wbLHDOriCount} wbLHDRupeeCost={wbLHDRupeeCost.toFixed(1)} wbLHDHornCount={wbLHDHornCount} />
        }
        if (lightWeaponChoice == "axe") {
            return <LightHDTAxeCost wbLHASphereCount={wbLHASphereCount} wbLHATailCount={wbLHATailCount} wbLHAHeartCount={wbLHAHeartCount} wbLHAOriCount={wbLHAOriCount} wbLHARupeeCost={wbLHARupeeCost.toFixed(1)} wbLHAHornCount={wbLHAHornCount} />
        }
        if (lightWeaponChoice == "lance") {
            return <LightHDTLanceCost wbLHLSphereCount={wbLHLSphereCount} wbLHLTailCount={wbLHLTailCount} wbLHLHeartCount={wbLHLHeartCount} wbLHLOriCount={wbLHLOriCount} wbLHLRupeeCost={wbLHLRupeeCost.toFixed(1)} wbLHLHornCount={wbLHLHornCount} />
        }
        if (lightWeaponChoice == "bow") {
            return <LightHDTBowCost wbLHBoSphereCount={wbLHBoSphereCount} wbLHBoTailCount={wbLHBoTailCount} wbLHBoHeartCount={wbLHBoHeartCount} wbLHBoOriCount={wbLHBoOriCount} wbLHBoRupeeCost={wbLHBoRupeeCost.toFixed(1)} wbLHBoHornCount={wbLHBoHornCount} />
        }
        if (lightWeaponChoice == "wand") {
            return <LightHDTWandCost wbLHWSphereCount={wbLHWSphereCount} wbLHWTailCount={wbLHWTailCount} wbLHWHeartCount={wbLHWHeartCount} wbLHWOriCount={wbLHWOriCount} wbLHWRupeeCost={wbLHWRupeeCost.toFixed(1)} wbLHWHornCount={wbLHWHornCount} />
        }
        if (lightWeaponChoice == "staff") {
            return <LightHDTStaffCost wbLHStSphereCount={wbLHStSphereCount} wbLHStTailCount={wbLHStTailCount} wbLHStHeartCount={wbLHStHeartCount} wbLHStOriCount={wbLHStOriCount} wbLHStRupeeCost={wbLHStRupeeCost.toFixed(1)} wbLHStHornCount={wbLHStHornCount} />
        }
        if (lightWeaponChoice == "manacaster") {
            return <LightHDTManacasterCost wbLHMSphereCount={wbLHMSphereCount} wbLHMTailCount={wbLHMTailCount} wbLHMHeartCount={wbLHMHeartCount} wbLHMOriCount={wbLHMOriCount} wbLHMRupeeCost={wbLHMRupeeCost.toFixed(1)} wbLHMHornCount={wbLHMHornCount} />
        }
    }

    function craftLightSword() {
        if (lightSwordCraftState == "grayscale(100%)") {
            setLightSwordCraftState("grayscale(0%)")
            setLightWeaponChoiceState("sword")
            setwbLHSphereCountState(wbLHSphereCount - 25)
            setwbLHTailCountState(wbLHTailCount - 18)
            setwbLHHeartCountState(wbLHHeartCount - 5)
            setwbLHOriCountState(wbLHOriCount - 1)
            setwbLHRupeeCost(parseFloat(wbLHRupeeCost - 1.2))
        }
        else if (lightSwordCraftState == "grayscale(0%)") {
            setLightSwordCraftState("grayscale(100%)")
            setLightWeaponChoiceState("sword")
            setwbLHSphereCountState(wbLHSphereCount + 25)
            setwbLHTailCountState(wbLHTailCount + 18)
            setwbLHHeartCountState(wbLHHeartCount + 5)
            setwbLHOriCountState(wbLHOriCount + 1)
            setwbLHRupeeCost(parseFloat(wbLHRupeeCost + 1.2))
        }
    }

    function lightSwordWeaponBonus() {
        if (lightSwordWeaponBonusState == "grayscale(100%)") {
            setLightSwordWeaponBonusState("grayscale(0%)")
            setLightWeaponChoiceState("sword")
            setwbLHSphereCountState(wbLHSphereCount - 150)
            setwbLHTailCountState(wbLHTailCount - 100)
            setwbLHHornCountState(wbLHHornCount - 30)
            setwbLHHeartCountState(wbLHHeartCount - 10)
            setwbLHOriCountState(wbLHOriCount - 30)
            setwbLHRupeeCost(parseFloat(wbLHRupeeCost - 10))
        }
        else if (lightSwordWeaponBonusState == "grayscale(0%)") {
            setLightSwordWeaponBonusState("grayscale(100%)")
            setLightWeaponChoiceState("sword")
            setwbLHSphereCountState(wbLHSphereCount + 150)
            setwbLHTailCountState(wbLHTailCount + 100)
            setwbLHHornCountState(wbLHHornCount + 30)
            setwbLHHeartCountState(wbLHHeartCount + 10)
            setwbLHOriCountState(wbLHOriCount + 30)
            setwbLHRupeeCost(parseFloat(wbLHRupeeCost + 10))
        }
    }

    function lightSwordRefine() {
        if (lightSwordRefineState == "grayscale(100%)") {
            setLightSwordRefineState("grayscale(0%)")
            setLightWeaponChoiceState("sword")
            setwbLHSphereCountState(wbLHSphereCount - 50)
            setwbLHTailCountState(wbLHTailCount - 40)
            setwbLHHornCountState(wbLHHornCount - 30)
            setwbLHHeartCountState(wbLHHeartCount - 10)
            setwbLHOriCountState(wbLHOriCount - 3)
            setwbLHRupeeCost(parseFloat(wbLHRupeeCost - 1.5))
        }
        else if (lightSwordRefineState == "grayscale(0%)") {
            setLightSwordRefineState("grayscale(100%)")
            setLightWeaponChoiceState("sword")
            setwbLHSphereCountState(wbLHSphereCount + 50)
            setwbLHTailCountState(wbLHTailCount + 40)
            setwbLHHornCountState(wbLHHornCount + 30)
            setwbLHHeartCountState(wbLHHeartCount + 10)
            setwbLHOriCountState(wbLHOriCount + 3)
            setwbLHRupeeCost(parseFloat(wbLHRupeeCost + 1.5))
        }
    }

    function handleLightSwordUnbindIncrement(event) {
        setLightWeaponChoiceState("sword");
        if (lightSwordUnbindState < event.target.value) {
            if (event.target.value - lightSwordUnbindState == 1) {
                setLightSwordUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHSphereCountState(wbLHSphereCount - 25)
                    setwbLHTailCountState(wbLHTailCount - 18)
                    setwbLHHeartCountState(wbLHHeartCount - 5)
                    setwbLHOriCountState(wbLHOriCount - 1)
                    setwbLHRupeeCost(parseFloat(wbLHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHSphereCountState(wbLHSphereCount - 175)
                    setwbLHTailCountState(wbLHTailCount - 130)
                    setwbLHHornCountState(wbLHHornCount - 30)
                    setwbLHHeartCountState(wbLHHeartCount - 35)
                    setwbLHOriCountState(wbLHOriCount - 8)
                    setwbLHRupeeCost(parseFloat(wbLHRupeeCost - 7.5))
                }
            }
        }
        else if (lightSwordUnbindState > event.target.value) {
            if (lightSwordUnbindState - event.target.value == 1) {
                setLightSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHSphereCountState(wbLHSphereCount + 25)
                    setwbLHTailCountState(wbLHTailCount + 18)
                    setwbLHHeartCountState(wbLHHeartCount + 5)
                    setwbLHOriCountState(wbLHOriCount + 1)
                    setwbLHRupeeCost(parseFloat(wbLHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHSphereCountState(wbLHSphereCount + 175)
                    setwbLHTailCountState(wbLHTailCount + 130)
                    setwbLHHornCountState(wbLHHornCount + 30)
                    setwbLHHeartCountState(wbLHHeartCount + 35)
                    setwbLHOriCountState(wbLHOriCount + 8)
                    setwbLHRupeeCost(parseFloat(wbLHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightBlade() {
        if (lightBladeCraftState == "grayscale(100%)") {
            setLightBladeCraftState("grayscale(0%)")
            setLightWeaponChoiceState("blade")
            setwbLHBlSphereCountState(wbLHBlSphereCount - 25)
            setwbLHBlTailCountState(wbLHBlTailCount - 18)
            setwbLHBlHeartCountState(wbLHBlHeartCount - 5)
            setwbLHBlOriCountState(wbLHBlOriCount - 1)
            setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost - 1.2))
        }
        else if (lightBladeCraftState == "grayscale(0%)") {
            setLightBladeCraftState("grayscale(100%)")
            setLightWeaponChoiceState("blade")
            setwbLHBlSphereCountState(wbLHBlSphereCount + 25)
            setwbLHBlTailCountState(wbLHBlTailCount + 18)
            setwbLHBlHeartCountState(wbLHBlHeartCount + 5)
            setwbLHBlOriCountState(wbLHBlOriCount + 1)
            setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost + 1.2))
        }
    }

    function lightBladeWeaponBonus() {
        if (lightBladeWeaponBonusState == "grayscale(100%)") {
            setLightBladeWeaponBonusState("grayscale(0%)")
            setLightWeaponChoiceState("blade")
            setwbLHBlSphereCountState(wbLHBlSphereCount - 150)
            setwbLHBlTailCountState(wbLHBlTailCount - 100)
            setwbLHBlHornCountState(wbLHBlHornCount - 30)
            setwbLHBlHeartCountState(wbLHBlHeartCount - 10)
            setwbLHBlOriCountState(wbLHBlOriCount - 30)
            setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost - 10))
        }
        else if (lightBladeWeaponBonusState == "grayscale(0%)") {
            setLightBladeWeaponBonusState("grayscale(100%)")
            setLightWeaponChoiceState("blade")
            setwbLHBlSphereCountState(wbLHBlSphereCount + 150)
            setwbLHBlTailCountState(wbLHBlTailCount + 100)
            setwbLHBlHornCountState(wbLHBlHornCount + 30)
            setwbLHBlHeartCountState(wbLHBlHeartCount + 10)
            setwbLHBlOriCountState(wbLHBlOriCount + 30)
            setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost + 10))
        }
    }

    function lightBladeRefine() {
        if (lightBladeRefineState == "grayscale(100%)") {
            setLightBladeRefineState("grayscale(0%)")
            setLightWeaponChoiceState("blade")
            setwbLHBlSphereCountState(wbLHBlSphereCount - 50)
            setwbLHBlTailCountState(wbLHBlTailCount - 40)
            setwbLHBlHornCountState(wbLHBlHornCount - 30)
            setwbLHBlHeartCountState(wbLHBlHeartCount - 10)
            setwbLHBlOriCountState(wbLHBlOriCount - 3)
            setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost - 1.5))
        }
        else if (lightBladeRefineState == "grayscale(0%)") {
            setLightBladeRefineState("grayscale(100%)")
            setLightWeaponChoiceState("blade")
            setwbLHBlSphereCountState(wbLHBlSphereCount + 50)
            setwbLHBlTailCountState(wbLHBlTailCount + 40)
            setwbLHBlHornCountState(wbLHBlHornCount + 30)
            setwbLHBlHeartCountState(wbLHBlHeartCount + 10)
            setwbLHBlOriCountState(wbLHBlOriCount + 3)
            setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost + 1.5))
        }
    }

    function handleLightBladeUnbindIncrement(event) {
        setLightWeaponChoiceState("blade");
        if (lightBladeUnbindState < event.target.value) {
            if (event.target.value - lightBladeUnbindState == 1) {
                setLightBladeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHBlSphereCountState(wbLHBlSphereCount - 25)
                    setwbLHBlTailCountState(wbLHBlTailCount - 18)
                    setwbLHBlHeartCountState(wbLHBlHeartCount - 5)
                    setwbLHBlOriCountState(wbLHBlOriCount - 1)
                    setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHBlSphereCountState(wbLHBlSphereCount - 175)
                    setwbLHBlTailCountState(wbLHBlTailCount - 130)
                    setwbLHBlHornCountState(wbLHBlHornCount - 30)
                    setwbLHBlHeartCountState(wbLHBlHeartCount - 35)
                    setwbLHBlOriCountState(wbLHBlOriCount - 8)
                    setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost - 7.5))
                }
            }
        }
        else if (lightBladeUnbindState > event.target.value) {
            if (lightBladeUnbindState - event.target.value == 1) {
                setLightBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHBlSphereCountState(wbLHBlSphereCount + 25)
                    setwbLHBlTailCountState(wbLHBlTailCount + 18)
                    setwbLHBlHeartCountState(wbLHBlHeartCount + 5)
                    setwbLHBlOriCountState(wbLHBlOriCount + 1)
                    setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHBlSphereCountState(wbLHBlSphereCount + 175)
                    setwbLHBlTailCountState(wbLHBlTailCount + 130)
                    setwbLHBlHornCountState(wbLHBlHornCount + 30)
                    setwbLHBlHeartCountState(wbLHBlHeartCount + 35)
                    setwbLHBlOriCountState(wbLHBlOriCount + 8)
                    setwbLHBlRupeeCost(parseFloat(wbLHBlRupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightDagger() {
        if (lightDaggerCraftState == "grayscale(100%)") {
            setLightDaggerCraftState("grayscale(0%)")
            setLightWeaponChoiceState("dagger")
            setwbLHDSphereCountState(wbLHDSphereCount - 25)
            setwbLHDTailCountState(wbLHDTailCount - 18)
            setwbLHDHeartCountState(wbLHDHeartCount - 5)
            setwbLHDOriCountState(wbLHDOriCount - 1)
            setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost - 1.2))
        }
        else if (lightDaggerCraftState == "grayscale(0%)") {
            setLightDaggerCraftState("grayscale(100%)")
            setLightWeaponChoiceState("dagger")
            setwbLHDSphereCountState(wbLHDSphereCount + 25)
            setwbLHDTailCountState(wbLHDTailCount + 18)
            setwbLHDHeartCountState(wbLHDHeartCount + 5)
            setwbLHDOriCountState(wbLHDOriCount + 1)
            setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost + 1.2))
        }
    }

    function lightDaggerWeaponBonus() {
        if (lightDaggerWeaponBonusState == "grayscale(100%)") {
            setLightDaggerWeaponBonusState("grayscale(0%)")
            setLightWeaponChoiceState("dagger")
            setwbLHDSphereCountState(wbLHDSphereCount - 150)
            setwbLHDTailCountState(wbLHDTailCount - 100)
            setwbLHDHornCountState(wbLHDHornCount - 30)
            setwbLHDHeartCountState(wbLHDHeartCount - 10)
            setwbLHDOriCountState(wbLHDOriCount - 30)
            setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost - 10))
        }
        else if (lightDaggerWeaponBonusState == "grayscale(0%)") {
            setLightDaggerWeaponBonusState("grayscale(100%)")
            setLightWeaponChoiceState("dagger")
            setwbLHDSphereCountState(wbLHDSphereCount + 150)
            setwbLHDTailCountState(wbLHDTailCount + 100)
            setwbLHDHornCountState(wbLHDHornCount + 30)
            setwbLHDHeartCountState(wbLHDHeartCount + 10)
            setwbLHDOriCountState(wbLHDOriCount + 30)
            setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost + 10))
        }
    }

    function lightDaggerRefine() {
        if (lightDaggerRefineState == "grayscale(100%)") {
            setLightDaggerRefineState("grayscale(0%)")
            setLightWeaponChoiceState("dagger")
            setwbLHDSphereCountState(wbLHDSphereCount - 50)
            setwbLHDTailCountState(wbLHDTailCount - 40)
            setwbLHDHornCountState(wbLHDHornCount - 30)
            setwbLHDHeartCountState(wbLHDHeartCount - 10)
            setwbLHDOriCountState(wbLHDOriCount - 3)
            setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost - 1.5))
        }
        else if (lightDaggerRefineState == "grayscale(0%)") {
            setLightDaggerRefineState("grayscale(100%)")
            setLightWeaponChoiceState("dagger")
            setwbLHDSphereCountState(wbLHDSphereCount + 50)
            setwbLHDTailCountState(wbLHDTailCount + 40)
            setwbLHDHornCountState(wbLHDHornCount + 30)
            setwbLHDHeartCountState(wbLHDHeartCount + 10)
            setwbLHDOriCountState(wbLHDOriCount + 3)
            setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost + 1.5))
        }
    }

    function handleLightDaggerUnbindIncrement(event) {
        setLightWeaponChoiceState("dagger");
        if (lightDaggerUnbindState < event.target.value) {
            if (event.target.value - lightDaggerUnbindState == 1) {
                setLightDaggerUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHDSphereCountState(wbLHDSphereCount - 25)
                    setwbLHDTailCountState(wbLHDTailCount - 18)
                    setwbLHDHeartCountState(wbLHDHeartCount - 5)
                    setwbLHDOriCountState(wbLHDOriCount - 1)
                    setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHDSphereCountState(wbLHDSphereCount - 175)
                    setwbLHDTailCountState(wbLHDTailCount - 130)
                    setwbLHDHornCountState(wbLHDHornCount - 30)
                    setwbLHDHeartCountState(wbLHDHeartCount - 35)
                    setwbLHDOriCountState(wbLHDOriCount - 8)
                    setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost - 7.5))
                }
            }
        }
        else if (lightDaggerUnbindState > event.target.value) {
            if (lightDaggerUnbindState - event.target.value == 1) {
                setLightDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHDSphereCountState(wbLHDSphereCount + 25)
                    setwbLHDTailCountState(wbLHDTailCount + 18)
                    setwbLHDHeartCountState(wbLHDHeartCount + 5)
                    setwbLHDOriCountState(wbLHDOriCount + 1)
                    setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHDSphereCountState(wbLHDSphereCount + 175)
                    setwbLHDTailCountState(wbLHDTailCount + 130)
                    setwbLHDHornCountState(wbLHDHornCount + 30)
                    setwbLHDHeartCountState(wbLHDHeartCount + 35)
                    setwbLHDOriCountState(wbLHDOriCount + 8)
                    setwbLHDRupeeCost(parseFloat(wbLHDRupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightAxe() {
        if (lightAxeCraftState == "grayscale(100%)") {
            setLightAxeCraftState("grayscale(0%)")
            setLightWeaponChoiceState("axe")
            setwbLHASphereCountState(wbLHASphereCount - 25)
            setwbLHATailCountState(wbLHATailCount - 18)
            setwbLHAHeartCountState(wbLHAHeartCount - 5)
            setwbLHAOriCountState(wbLHAOriCount - 1)
            setwbLHARupeeCost(parseFloat(wbLHARupeeCost - 1.2))
        }
        else if (lightAxeCraftState == "grayscale(0%)") {
            setLightAxeCraftState("grayscale(100%)")
            setLightWeaponChoiceState("axe")
            setwbLHASphereCountState(wbLHASphereCount + 25)
            setwbLHATailCountState(wbLHATailCount + 18)
            setwbLHAHeartCountState(wbLHAHeartCount + 5)
            setwbLHAOriCountState(wbLHAOriCount + 1)
            setwbLHARupeeCost(parseFloat(wbLHARupeeCost + 1.2))
        }
    }

    function lightAxeWeaponBonus() {
        if (lightAxeWeaponBonusState == "grayscale(100%)") {
            setLightAxeWeaponBonusState("grayscale(0%)")
            setLightWeaponChoiceState("axe")
            setwbLHASphereCountState(wbLHASphereCount - 150)
            setwbLHATailCountState(wbLHATailCount - 100)
            setwbLHAHornCountState(wbLHAHornCount - 30)
            setwbLHAHeartCountState(wbLHAHeartCount - 10)
            setwbLHAOriCountState(wbLHAOriCount - 30)
            setwbLHARupeeCost(parseFloat(wbLHARupeeCost - 10))
        }
        else if (lightAxeWeaponBonusState == "grayscale(0%)") {
            setLightAxeWeaponBonusState("grayscale(100%)")
            setLightWeaponChoiceState("axe")
            setwbLHASphereCountState(wbLHASphereCount + 150)
            setwbLHATailCountState(wbLHATailCount + 100)
            setwbLHAHornCountState(wbLHAHornCount + 30)
            setwbLHAHeartCountState(wbLHAHeartCount + 10)
            setwbLHAOriCountState(wbLHAOriCount + 30)
            setwbLHARupeeCost(parseFloat(wbLHARupeeCost + 10))
        }
    }

    function lightAxeRefine() {
        if (lightAxeRefineState == "grayscale(100%)") {
            setLightAxeRefineState("grayscale(0%)")
            setLightWeaponChoiceState("axe")
            setwbLHASphereCountState(wbLHASphereCount - 50)
            setwbLHATailCountState(wbLHATailCount - 40)
            setwbLHAHornCountState(wbLHAHornCount - 30)
            setwbLHAHeartCountState(wbLHAHeartCount - 10)
            setwbLHAOriCountState(wbLHAOriCount - 3)
            setwbLHARupeeCost(parseFloat(wbLHARupeeCost - 1.5))
        }
        else if (lightAxeRefineState == "grayscale(0%)") {
            setLightAxeRefineState("grayscale(100%)")
            setLightWeaponChoiceState("axe")
            setwbLHASphereCountState(wbLHASphereCount + 50)
            setwbLHATailCountState(wbLHATailCount + 40)
            setwbLHAHornCountState(wbLHAHornCount + 30)
            setwbLHAHeartCountState(wbLHAHeartCount + 10)
            setwbLHAOriCountState(wbLHAOriCount + 3)
            setwbLHARupeeCost(parseFloat(wbLHARupeeCost + 1.5))
        }
    }

    function handleLightAxeUnbindIncrement(event) {
        setLightWeaponChoiceState("axe");
        if (lightAxeUnbindState < event.target.value) {
            if (event.target.value - lightAxeUnbindState == 1) {
                setLightAxeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHASphereCountState(wbLHASphereCount - 25)
                    setwbLHATailCountState(wbLHATailCount - 18)
                    setwbLHAHeartCountState(wbLHAHeartCount - 5)
                    setwbLHAOriCountState(wbLHAOriCount - 1)
                    setwbLHARupeeCost(parseFloat(wbLHARupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHASphereCountState(wbLHASphereCount - 175)
                    setwbLHATailCountState(wbLHATailCount - 130)
                    setwbLHAHornCountState(wbLHAHornCount - 30)
                    setwbLHAHeartCountState(wbLHAHeartCount - 35)
                    setwbLHAOriCountState(wbLHAOriCount - 8)
                    setwbLHARupeeCost(parseFloat(wbLHARupeeCost - 7.5))
                }
            }
        }
        else if (lightAxeUnbindState > event.target.value) {
            if (lightAxeUnbindState - event.target.value == 1) {
                setLightAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHASphereCountState(wbLHASphereCount + 25)
                    setwbLHATailCountState(wbLHATailCount + 18)
                    setwbLHAHeartCountState(wbLHAHeartCount + 5)
                    setwbLHAOriCountState(wbLHAOriCount + 1)
                    setwbLHARupeeCost(parseFloat(wbLHARupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHASphereCountState(wbLHASphereCount + 175)
                    setwbLHATailCountState(wbLHATailCount + 130)
                    setwbLHAHornCountState(wbLHAHornCount + 30)
                    setwbLHAHeartCountState(wbLHAHeartCount + 35)
                    setwbLHAOriCountState(wbLHAOriCount + 8)
                    setwbLHARupeeCost(parseFloat(wbLHARupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightLance() {
        if (lightLanceCraftState == "grayscale(100%)") {
            setLightLanceCraftState("grayscale(0%)")
            setLightWeaponChoiceState("lance")
            setwbLHLSphereCountState(wbLHLSphereCount - 25)
            setwbLHLTailCountState(wbLHLTailCount - 18)
            setwbLHLHeartCountState(wbLHLHeartCount - 5)
            setwbLHLOriCountState(wbLHLOriCount - 1)
            setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost - 1.2))
        }
        else if (lightLanceCraftState == "grayscale(0%)") {
            setLightLanceCraftState("grayscale(100%)")
            setLightWeaponChoiceState("lance")
            setwbLHLSphereCountState(wbLHLSphereCount + 25)
            setwbLHLTailCountState(wbLHLTailCount + 18)
            setwbLHLHeartCountState(wbLHLHeartCount + 5)
            setwbLHLOriCountState(wbLHLOriCount + 1)
            setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost + 1.2))
        }
    }

    function lightLanceWeaponBonus() {
        if (lightLanceWeaponBonusState == "grayscale(100%)") {
            setLightLanceWeaponBonusState("grayscale(0%)")
            setLightWeaponChoiceState("lance")
            setwbLHLSphereCountState(wbLHLSphereCount - 150)
            setwbLHLTailCountState(wbLHLTailCount - 100)
            setwbLHLHornCountState(wbLHLHornCount - 30)
            setwbLHLHeartCountState(wbLHLHeartCount - 10)
            setwbLHLOriCountState(wbLHLOriCount - 30)
            setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost - 10))
        }
        else if (lightLanceWeaponBonusState == "grayscale(0%)") {
            setLightLanceWeaponBonusState("grayscale(100%)")
            setLightWeaponChoiceState("lance")
            setwbLHLSphereCountState(wbLHLSphereCount + 150)
            setwbLHLTailCountState(wbLHLTailCount + 100)
            setwbLHLHornCountState(wbLHLHornCount + 30)
            setwbLHLHeartCountState(wbLHLHeartCount + 10)
            setwbLHLOriCountState(wbLHLOriCount + 30)
            setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost + 10))
        }
    }

    function lightLanceRefine() {
        if (lightLanceRefineState == "grayscale(100%)") {
            setLightLanceRefineState("grayscale(0%)")
            setLightWeaponChoiceState("lance")
            setwbLHLSphereCountState(wbLHLSphereCount - 50)
            setwbLHLTailCountState(wbLHLTailCount - 40)
            setwbLHLHornCountState(wbLHLHornCount - 30)
            setwbLHLHeartCountState(wbLHLHeartCount - 10)
            setwbLHLOriCountState(wbLHLOriCount - 3)
            setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost - 1.5))
        }
        else if (lightLanceRefineState == "grayscale(0%)") {
            setLightLanceRefineState("grayscale(100%)")
            setLightWeaponChoiceState("lance")
            setwbLHLSphereCountState(wbLHLSphereCount + 50)
            setwbLHLTailCountState(wbLHLTailCount + 40)
            setwbLHLHornCountState(wbLHLHornCount + 30)
            setwbLHLHeartCountState(wbLHLHeartCount + 10)
            setwbLHLOriCountState(wbLHLOriCount + 3)
            setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost + 1.5))
        }
    }

    function handleLightLanceUnbindIncrement(event) {
        setLightWeaponChoiceState("lance");
        if (lightLanceUnbindState < event.target.value) {
            if (event.target.value - lightLanceUnbindState == 1) {
                setLightLanceUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHLSphereCountState(wbLHLSphereCount - 25)
                    setwbLHLTailCountState(wbLHLTailCount - 18)
                    setwbLHLHeartCountState(wbLHLHeartCount - 5)
                    setwbLHLOriCountState(wbLHLOriCount - 1)
                    setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHLSphereCountState(wbLHLSphereCount - 175)
                    setwbLHLTailCountState(wbLHLTailCount - 130)
                    setwbLHLHornCountState(wbLHLHornCount - 30)
                    setwbLHLHeartCountState(wbLHLHeartCount - 35)
                    setwbLHLOriCountState(wbLHLOriCount - 8)
                    setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost - 7.5))
                }
            }
        }
        else if (lightLanceUnbindState > event.target.value) {
            if (lightLanceUnbindState - event.target.value == 1) {
                setLightLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHLSphereCountState(wbLHLSphereCount + 25)
                    setwbLHLTailCountState(wbLHLTailCount + 18)
                    setwbLHLHeartCountState(wbLHLHeartCount + 5)
                    setwbLHLOriCountState(wbLHLOriCount + 1)
                    setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHLSphereCountState(wbLHLSphereCount + 175)
                    setwbLHLTailCountState(wbLHLTailCount + 130)
                    setwbLHLHornCountState(wbLHLHornCount + 30)
                    setwbLHLHeartCountState(wbLHLHeartCount + 35)
                    setwbLHLOriCountState(wbLHLOriCount + 8)
                    setwbLHLRupeeCost(parseFloat(wbLHLRupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightBow() {
        if (lightBowCraftState == "grayscale(100%)") {
            setLightBowCraftState("grayscale(0%)")
            setLightWeaponChoiceState("bow")
            setwbLHBoSphereCountState(wbLHBoSphereCount - 25)
            setwbLHBoTailCountState(wbLHBoTailCount - 18)
            setwbLHBoHeartCountState(wbLHBoHeartCount - 5)
            setwbLHBoOriCountState(wbLHBoOriCount - 1)
            setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost - 1.2))
        }
        else if (lightBowCraftState == "grayscale(0%)") {
            setLightBowCraftState("grayscale(100%)")
            setLightWeaponChoiceState("bow")
            setwbLHBoSphereCountState(wbLHBoSphereCount + 25)
            setwbLHBoTailCountState(wbLHBoTailCount + 18)
            setwbLHBoHeartCountState(wbLHBoHeartCount + 5)
            setwbLHBoOriCountState(wbLHBoOriCount + 1)
            setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost + 1.2))
        }
    }

    function lightBowWeaponBonus() {
        if (lightBowWeaponBonusState == "grayscale(100%)") {
            setLightBowWeaponBonusState("grayscale(0%)")
            setLightWeaponChoiceState("bow")
            setwbLHBoSphereCountState(wbLHBoSphereCount - 150)
            setwbLHBoTailCountState(wbLHBoTailCount - 100)
            setwbLHBoHornCountState(wbLHBoHornCount - 30)
            setwbLHBoHeartCountState(wbLHBoHeartCount - 10)
            setwbLHBoOriCountState(wbLHBoOriCount - 30)
            setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost - 10))
        }
        else if (lightBowWeaponBonusState == "grayscale(0%)") {
            setLightBowWeaponBonusState("grayscale(100%)")
            setLightWeaponChoiceState("bow")
            setwbLHBoSphereCountState(wbLHBoSphereCount + 150)
            setwbLHBoTailCountState(wbLHBoTailCount + 100)
            setwbLHBoHornCountState(wbLHBoHornCount + 30)
            setwbLHBoHeartCountState(wbLHBoHeartCount + 10)
            setwbLHBoOriCountState(wbLHBoOriCount + 30)
            setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost + 10))
        }
    }

    function lightBowRefine() {
        if (lightBowRefineState == "grayscale(100%)") {
            setLightBowRefineState("grayscale(0%)")
            setLightWeaponChoiceState("bow")
            setwbLHBoSphereCountState(wbLHBoSphereCount - 50)
            setwbLHBoTailCountState(wbLHBoTailCount - 40)
            setwbLHBoHornCountState(wbLHBoHornCount - 30)
            setwbLHBoHeartCountState(wbLHBoHeartCount - 10)
            setwbLHBoOriCountState(wbLHBoOriCount - 3)
            setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost - 1.5))
        }
        else if (lightBowRefineState == "grayscale(0%)") {
            setLightBowRefineState("grayscale(100%)")
            setLightWeaponChoiceState("bow")
            setwbLHBoSphereCountState(wbLHBoSphereCount + 50)
            setwbLHBoTailCountState(wbLHBoTailCount + 40)
            setwbLHBoHornCountState(wbLHBoHornCount + 30)
            setwbLHBoHeartCountState(wbLHBoHeartCount + 10)
            setwbLHBoOriCountState(wbLHBoOriCount + 3)
            setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost + 1.5))
        }
    }

    function handleLightBowUnbindIncrement(event) {
        setLightWeaponChoiceState("bow");
        if (lightBowUnbindState < event.target.value) {
            if (event.target.value - lightBowUnbindState == 1) {
                setLightBowUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHBoSphereCountState(wbLHBoSphereCount - 25)
                    setwbLHBoTailCountState(wbLHBoTailCount - 18)
                    setwbLHBoHeartCountState(wbLHBoHeartCount - 5)
                    setwbLHBoOriCountState(wbLHBoOriCount - 1)
                    setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHBoSphereCountState(wbLHBoSphereCount - 175)
                    setwbLHBoTailCountState(wbLHBoTailCount - 130)
                    setwbLHBoHornCountState(wbLHBoHornCount - 30)
                    setwbLHBoHeartCountState(wbLHBoHeartCount - 35)
                    setwbLHBoOriCountState(wbLHBoOriCount - 8)
                    setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost - 7.5))
                }
            }
        }
        else if (lightBowUnbindState > event.target.value) {
            if (lightBowUnbindState - event.target.value == 1) {
                setLightBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHBoSphereCountState(wbLHBoSphereCount + 25)
                    setwbLHBoTailCountState(wbLHBoTailCount + 18)
                    setwbLHBoHeartCountState(wbLHBoHeartCount + 5)
                    setwbLHBoOriCountState(wbLHBoOriCount + 1)
                    setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHBoSphereCountState(wbLHBoSphereCount + 175)
                    setwbLHBoTailCountState(wbLHBoTailCount + 130)
                    setwbLHBoHornCountState(wbLHBoHornCount + 30)
                    setwbLHBoHeartCountState(wbLHBoHeartCount + 35)
                    setwbLHBoOriCountState(wbLHBoOriCount + 8)
                    setwbLHBoRupeeCost(parseFloat(wbLHBoRupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightWand() {
        if (lightWandCraftState == "grayscale(100%)") {
            setLightWandCraftState("grayscale(0%)")
            setLightWeaponChoiceState("wand")
            setwbLHWSphereCountState(wbLHWSphereCount - 25)
            setwbLHWTailCountState(wbLHWTailCount - 18)
            setwbLHWHeartCountState(wbLHWHeartCount - 5)
            setwbLHWOriCountState(wbLHWOriCount - 1)
            setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost - 1.2))
        }
        else if (lightWandCraftState == "grayscale(0%)") {
            setLightWandCraftState("grayscale(100%)")
            setLightWeaponChoiceState("wand")
            setwbLHWSphereCountState(wbLHWSphereCount + 25)
            setwbLHWTailCountState(wbLHWTailCount + 18)
            setwbLHWHeartCountState(wbLHWHeartCount + 5)
            setwbLHWOriCountState(wbLHWOriCount + 1)
            setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost + 1.2))
        }
    }

    function lightWandWeaponBonus() {
        if (lightWandWeaponBonusState == "grayscale(100%)") {
            setLightWandWeaponBonusState("grayscale(0%)")
            setLightWeaponChoiceState("wand")
            setwbLHWSphereCountState(wbLHWSphereCount - 150)
            setwbLHWTailCountState(wbLHWTailCount - 100)
            setwbLHWHornCountState(wbLHWHornCount - 30)
            setwbLHWHeartCountState(wbLHWHeartCount - 10)
            setwbLHWOriCountState(wbLHWOriCount - 30)
            setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost - 10))
        }
        else if (lightWandWeaponBonusState == "grayscale(0%)") {
            setLightWandWeaponBonusState("grayscale(100%)")
            setLightWeaponChoiceState("wand")
            setwbLHWSphereCountState(wbLHWSphereCount + 150)
            setwbLHWTailCountState(wbLHWTailCount + 100)
            setwbLHWHornCountState(wbLHWHornCount + 30)
            setwbLHWHeartCountState(wbLHWHeartCount + 10)
            setwbLHWOriCountState(wbLHWOriCount + 30)
            setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost + 10))
        }
    }

    function lightWandRefine() {
        if (lightWandRefineState == "grayscale(100%)") {
            setLightWandRefineState("grayscale(0%)")
            setLightWeaponChoiceState("wand")
            setwbLHWSphereCountState(wbLHWSphereCount - 50)
            setwbLHWTailCountState(wbLHWTailCount - 40)
            setwbLHWHornCountState(wbLHWHornCount - 30)
            setwbLHWHeartCountState(wbLHWHeartCount - 10)
            setwbLHWOriCountState(wbLHWOriCount - 3)
            setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost - 1.5))
        }
        else if (lightWandRefineState == "grayscale(0%)") {
            setLightWandRefineState("grayscale(100%)")
            setLightWeaponChoiceState("wand")
            setwbLHWSphereCountState(wbLHWSphereCount + 50)
            setwbLHWTailCountState(wbLHWTailCount + 40)
            setwbLHWHornCountState(wbLHWHornCount + 30)
            setwbLHWHeartCountState(wbLHWHeartCount + 10)
            setwbLHWOriCountState(wbLHWOriCount + 3)
            setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost + 1.5))
        }
    }

    function handleLightWandUnbindIncrement(event) {
        setLightWeaponChoiceState("wand");
        if (lightWandUnbindState < event.target.value) {
            if (event.target.value - lightWandUnbindState == 1) {
                setLightWandUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHWSphereCountState(wbLHWSphereCount - 25)
                    setwbLHWTailCountState(wbLHWTailCount - 18)
                    setwbLHWHeartCountState(wbLHWHeartCount - 5)
                    setwbLHWOriCountState(wbLHWOriCount - 1)
                    setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHWSphereCountState(wbLHWSphereCount - 175)
                    setwbLHWTailCountState(wbLHWTailCount - 130)
                    setwbLHWHornCountState(wbLHWHornCount - 30)
                    setwbLHWHeartCountState(wbLHWHeartCount - 35)
                    setwbLHWOriCountState(wbLHWOriCount - 8)
                    setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost - 7.5))
                }
            }
        }
        else if (lightWandUnbindState > event.target.value) {
            if (lightWandUnbindState - event.target.value == 1) {
                setLightWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHWSphereCountState(wbLHWSphereCount + 25)
                    setwbLHWTailCountState(wbLHWTailCount + 18)
                    setwbLHWHeartCountState(wbLHWHeartCount + 5)
                    setwbLHWOriCountState(wbLHWOriCount + 1)
                    setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHWSphereCountState(wbLHWSphereCount + 175)
                    setwbLHWTailCountState(wbLHWTailCount + 130)
                    setwbLHWHornCountState(wbLHWHornCount + 30)
                    setwbLHWHeartCountState(wbLHWHeartCount + 35)
                    setwbLHWOriCountState(wbLHWOriCount + 8)
                    setwbLHWRupeeCost(parseFloat(wbLHWRupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightStaff() {
        if (lightStaffCraftState == "grayscale(100%)") {
            setLightStaffCraftState("grayscale(0%)")
            setLightWeaponChoiceState("staff")
            setwbLHStSphereCountState(wbLHStSphereCount - 25)
            setwbLHStTailCountState(wbLHStTailCount - 18)
            setwbLHStHeartCountState(wbLHStHeartCount - 5)
            setwbLHStOriCountState(wbLHStOriCount - 1)
            setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost - 1.2))
        }
        else if (lightStaffCraftState == "grayscale(0%)") {
            setLightStaffCraftState("grayscale(100%)")
            setLightWeaponChoiceState("staff")
            setwbLHStSphereCountState(wbLHStSphereCount + 25)
            setwbLHStTailCountState(wbLHStTailCount + 18)
            setwbLHStHeartCountState(wbLHStHeartCount + 5)
            setwbLHStOriCountState(wbLHStOriCount + 1)
            setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost + 1.2))
        }
    }

    function lightStaffWeaponBonus() {
        if (lightStaffWeaponBonusState == "grayscale(100%)") {
            setLightStaffWeaponBonusState("grayscale(0%)")
            setLightWeaponChoiceState("staff")
            setwbLHStSphereCountState(wbLHStSphereCount - 150)
            setwbLHStTailCountState(wbLHStTailCount - 100)
            setwbLHStHornCountState(wbLHStHornCount - 30)
            setwbLHStHeartCountState(wbLHStHeartCount - 10)
            setwbLHStOriCountState(wbLHStOriCount - 30)
            setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost - 10))
        }
        else if (lightStaffWeaponBonusState == "grayscale(0%)") {
            setLightStaffWeaponBonusState("grayscale(100%)")
            setLightWeaponChoiceState("staff")
            setwbLHStSphereCountState(wbLHStSphereCount + 150)
            setwbLHStTailCountState(wbLHStTailCount + 100)
            setwbLHStHornCountState(wbLHStHornCount + 30)
            setwbLHStHeartCountState(wbLHStHeartCount + 10)
            setwbLHStOriCountState(wbLHStOriCount + 30)
            setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost + 10))
        }
    }

    function lightStaffRefine() {
        if (lightStaffRefineState == "grayscale(100%)") {
            setLightStaffRefineState("grayscale(0%)")
            setLightWeaponChoiceState("staff")
            setwbLHStSphereCountState(wbLHStSphereCount - 50)
            setwbLHStTailCountState(wbLHStTailCount - 40)
            setwbLHStHornCountState(wbLHStHornCount - 30)
            setwbLHStHeartCountState(wbLHStHeartCount - 10)
            setwbLHStOriCountState(wbLHStOriCount - 3)
            setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost - 1.5))
        }
        else if (lightStaffRefineState == "grayscale(0%)") {
            setLightStaffRefineState("grayscale(100%)")
            setLightWeaponChoiceState("staff")
            setwbLHStSphereCountState(wbLHStSphereCount + 50)
            setwbLHStTailCountState(wbLHStTailCount + 40)
            setwbLHStHornCountState(wbLHStHornCount + 30)
            setwbLHStHeartCountState(wbLHStHeartCount + 10)
            setwbLHStOriCountState(wbLHStOriCount + 3)
            setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost + 1.5))
        }
    }

    function handleLightStaffUnbindIncrement(event) {
        setLightWeaponChoiceState("staff");
        if (lightStaffUnbindState < event.target.value) {
            if (event.target.value - lightStaffUnbindState == 1) {
                setLightStaffUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHStSphereCountState(wbLHStSphereCount - 25)
                    setwbLHStTailCountState(wbLHStTailCount - 18)
                    setwbLHStHeartCountState(wbLHStHeartCount - 5)
                    setwbLHStOriCountState(wbLHStOriCount - 1)
                    setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHStSphereCountState(wbLHStSphereCount - 175)
                    setwbLHStTailCountState(wbLHStTailCount - 130)
                    setwbLHStHornCountState(wbLHStHornCount - 30)
                    setwbLHStHeartCountState(wbLHStHeartCount - 35)
                    setwbLHStOriCountState(wbLHStOriCount - 8)
                    setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost - 7.5))
                }
            }
        }
        else if (lightStaffUnbindState > event.target.value) {
            if (lightStaffUnbindState - event.target.value == 1) {
                setLightStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHStSphereCountState(wbLHStSphereCount + 25)
                    setwbLHStTailCountState(wbLHStTailCount + 18)
                    setwbLHStHeartCountState(wbLHStHeartCount + 5)
                    setwbLHStOriCountState(wbLHStOriCount + 1)
                    setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHStSphereCountState(wbLHStSphereCount + 175)
                    setwbLHStTailCountState(wbLHStTailCount + 130)
                    setwbLHStHornCountState(wbLHStHornCount + 30)
                    setwbLHStHeartCountState(wbLHStHeartCount + 35)
                    setwbLHStOriCountState(wbLHStOriCount + 8)
                    setwbLHStRupeeCost(parseFloat(wbLHStRupeeCost + 7.5))
                }
            }
        }
    }

    function craftLightManacaster() {
        if (lightManacasterCraftState == "grayscale(100%)") {
            setLightManacasterCraftState("grayscale(0%)")
            setLightWeaponChoiceState("manacaster")
            setwbLHMSphereCountState(wbLHMSphereCount - 25)
            setwbLHMTailCountState(wbLHMTailCount - 18)
            setwbLHMHeartCountState(wbLHMHeartCount - 5)
            setwbLHMOriCountState(wbLHMOriCount - 1)
            setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost - 1.2))
        }
        else if (lightManacasterCraftState == "grayscale(0%)") {
            setLightManacasterCraftState("grayscale(100%)")
            setLightWeaponChoiceState("manacaster")
            setwbLHMSphereCountState(wbLHMSphereCount + 25)
            setwbLHMTailCountState(wbLHMTailCount + 18)
            setwbLHMHeartCountState(wbLHMHeartCount + 5)
            setwbLHMOriCountState(wbLHMOriCount + 1)
            setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost + 1.2))
        }
    }

    function lightManacasterWeaponBonus() {
        if (lightManacasterWeaponBonusState == "grayscale(100%)") {
            setLightManacasterWeaponBonusState("grayscale(0%)")
            setLightWeaponChoiceState("manacaster")
            setwbLHMSphereCountState(wbLHMSphereCount - 150)
            setwbLHMTailCountState(wbLHMTailCount - 100)
            setwbLHMHornCountState(wbLHMHornCount - 30)
            setwbLHMHeartCountState(wbLHMHeartCount - 10)
            setwbLHMOriCountState(wbLHMOriCount - 30)
            setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost - 10))
        }
        else if (lightManacasterWeaponBonusState == "grayscale(0%)") {
            setLightManacasterWeaponBonusState("grayscale(100%)")
            setLightWeaponChoiceState("manacaster")
            setwbLHMSphereCountState(wbLHMSphereCount + 150)
            setwbLHMTailCountState(wbLHMTailCount + 100)
            setwbLHMHornCountState(wbLHMHornCount + 30)
            setwbLHMHeartCountState(wbLHMHeartCount + 10)
            setwbLHMOriCountState(wbLHMOriCount + 30)
            setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost + 10))
        }
    }

    function lightManacasterRefine() {
        if (lightManacasterRefineState == "grayscale(100%)") {
            setLightManacasterRefineState("grayscale(0%)")
            setLightWeaponChoiceState("manacaster")
            setwbLHMSphereCountState(wbLHMSphereCount - 50)
            setwbLHMTailCountState(wbLHMTailCount - 40)
            setwbLHMHornCountState(wbLHMHornCount - 30)
            setwbLHMHeartCountState(wbLHMHeartCount - 10)
            setwbLHMOriCountState(wbLHMOriCount - 3)
            setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost - 1.5))
        }
        else if (lightManacasterRefineState == "grayscale(0%)") {
            setLightManacasterRefineState("grayscale(100%)")
            setLightWeaponChoiceState("manacaster")
            setwbLHMSphereCountState(wbLHMSphereCount + 50)
            setwbLHMTailCountState(wbLHMTailCount + 40)
            setwbLHMHornCountState(wbLHMHornCount + 30)
            setwbLHMHeartCountState(wbLHMHeartCount + 10)
            setwbLHMOriCountState(wbLHMOriCount + 3)
            setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost + 1.5))
        }
    }

    function handleLightManacasterUnbindIncrement(event) {
        setLightWeaponChoiceState("manacaster");
        if (lightManacasterUnbindState < event.target.value) {
            if (event.target.value - lightManacasterUnbindState == 1) {
                setLightManacasterUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbLHMSphereCountState(wbLHMSphereCount - 25)
                    setwbLHMTailCountState(wbLHMTailCount - 18)
                    setwbLHMHeartCountState(wbLHMHeartCount - 5)
                    setwbLHMOriCountState(wbLHMOriCount - 1)
                    setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbLHMSphereCountState(wbLHMSphereCount - 175)
                    setwbLHMTailCountState(wbLHMTailCount - 130)
                    setwbLHMHornCountState(wbLHMHornCount - 30)
                    setwbLHMHeartCountState(wbLHMHeartCount - 35)
                    setwbLHMOriCountState(wbLHMOriCount - 8)
                    setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost - 7.5))
                }
            }
        }
        else if (lightManacasterUnbindState > event.target.value) {
            if (lightManacasterUnbindState - event.target.value == 1) {
                setLightManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbLHMSphereCountState(wbLHMSphereCount + 25)
                    setwbLHMTailCountState(wbLHMTailCount + 18)
                    setwbLHMHeartCountState(wbLHMHeartCount + 5)
                    setwbLHMOriCountState(wbLHMOriCount + 1)
                    setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbLHMSphereCountState(wbLHMSphereCount + 175)
                    setwbLHMTailCountState(wbLHMTailCount + 130)
                    setwbLHMHornCountState(wbLHMHornCount + 30)
                    setwbLHMHeartCountState(wbLHMHeartCount + 35)
                    setwbLHMOriCountState(wbLHMOriCount + 8)
                    setwbLHMRupeeCost(parseFloat(wbLHMRupeeCost + 7.5))
                }
            }
        }
    }

    return (
        <div>
            <HDTNavTabs />
            <Flex>
                <Box width={1 / 2}>
                    <Flex>
                        <Box width={2 / 5}>

                        </Box>
                        <Box width={3 / 5}>
                            Light HDT Weapons
                        </Box>
                    </Flex>
                        <Flex>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={LightHDTSword} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: lightSwordCraftState }} onClick={craftLightSword} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Absolute Lightning</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={1 / 3}>

                                        </Box>
                                        <Image src={Unbind} />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 10}></Box>
                                        <Slider
                                            onChange={handleLightSwordUnbindIncrement}
                                            defaultValue={lightSwordUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{lightSwordUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightSwordWeaponBonusState }} onClick={lightSwordWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: lightSwordRefineState }} onClick={lightSwordRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={LightHDTBlade} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: lightBladeCraftState }} onClick={craftLightBlade} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Brilliant Flash</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={1 / 3}>

                                        </Box>
                                        <Image src={Unbind} />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 10}></Box>
                                        <Slider
                                            onChange={handleLightBladeUnbindIncrement}
                                            defaultValue={lightBladeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{lightBladeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightBladeWeaponBonusState }} onClick={lightBladeWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: lightBladeRefineState }} onClick={lightBladeRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={LightHDTDagger} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: lightDaggerCraftState }} onClick={craftLightDagger} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Fulminator's Maw</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={1 / 3}>

                                        </Box>
                                        <Image src={Unbind} />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 10}></Box>
                                        <Slider
                                            onChange={handleLightDaggerUnbindIncrement}
                                            defaultValue={lightDaggerUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{lightDaggerUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightDaggerWeaponBonusState }} onClick={lightDaggerWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: lightDaggerRefineState }} onClick={lightDaggerRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={LightHDTAxe} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: lightAxeCraftState }} onClick={craftLightAxe} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">MIghty Thundercrash</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={1 / 3}>

                                        </Box>
                                        <Image src={Unbind} />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 10}></Box>
                                        <Slider
                                            onChange={handleLightAxeUnbindIncrement}
                                            defaultValue={lightAxeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{lightAxeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightAxeWeaponBonusState }} onClick={lightAxeWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: lightAxeRefineState }} onClick={lightAxeRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={LightHDTLance} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: lightLanceCraftState }} onClick={craftLightLance} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Brilliant Lightflash</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={1 / 3}>

                                        </Box>
                                        <Image src={Unbind} />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 10}></Box>
                                        <Slider
                                            onChange={handleLightLanceUnbindIncrement}
                                            defaultValue={lightLanceUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{lightLanceUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightLanceWeaponBonusState }} onClick={lightLanceWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: lightLanceRefineState }} onClick={lightLanceRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={LightHDTBow} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: lightBowCraftState }} onClick={craftLightBow} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Jupiter's Sky</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={1 / 3}>

                                        </Box>
                                        <Image src={Unbind} />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 10}></Box>
                                        <Slider
                                            onChange={handleLightBowUnbindIncrement}
                                            defaultValue={lightBowUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{lightBowUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightBowWeaponBonusState }} onClick={lightBowWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: lightBowRefineState }} onClick={lightBowRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={LightHDTWand} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: lightWandCraftState }} onClick={craftLightWand} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Primeval Thunder</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={1 / 3}>

                                        </Box>
                                        <Image src={Unbind} />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 10}></Box>
                                        <Slider
                                            onChange={handleLightWandUnbindIncrement}
                                            defaultValue={lightWandUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{lightWandUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightWandWeaponBonusState }} onClick={lightWandWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: lightWandRefineState }} onClick={lightWandRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={LightHDTStaff} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: lightStaffCraftState }} onClick={craftLightStaff} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Heavensneer</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={1 / 3}>

                                        </Box>
                                        <Image src={Unbind} />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 10}></Box>
                                        <Slider
                                            onChange={handleLightStaffUnbindIncrement}
                                            defaultValue={lightStaffUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{lightStaffUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightStaffWeaponBonusState }} onClick={lightStaffWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: lightStaffRefineState }} onClick={lightStaffRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={LightHDTManacaster} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: lightManacasterCraftState }} onClick={craftLightManacaster} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="gold">Thunder Trigger</Text>
                                </Flex>
                                <Box width={[125, 150]}>
                                    <Flex>
                                        <Box width={1 / 3}>

                                        </Box>
                                        <Image src={Unbind} />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 10}></Box>
                                        <Slider
                                            onChange={handleLightManacasterUnbindIncrement}
                                            defaultValue={lightManacasterUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{lightManacasterUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: lightManacasterWeaponBonusState }} onClick={lightManacasterWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: lightManacasterRefineState }} onClick={lightManacasterRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                </Box>
                {lightHDTWeaponSelection()}
            </Flex>
            <WeaponTypeNavTabs />
        </div>
    )
}
