import React, { useState } from 'react'
import HDTNavTabs from "./HDTNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"
import { Box, Text, Flex, Card, Image } from "rebass";
import { Slider } from "@rebass/forms";

import FireHDTSword from "../Images/Fire_HDT_Sword.png";
import FireHDTBlade from "../Images/Fire_HDT_Blade.png";
import FireHDTDagger from "../Images/Fire_HDT_Dagger.png";
import FireHDTAxe from "../Images/Fire_HDT_Axe.png";
import FireHDTLance from "../Images/Fire_HDT_Lance.png";
import FireHDTBow from "../Images/Fire_HDT_Bow.png";
import FireHDTWand from "../Images/Fire_HDT_Wand.png";
import FireHDTStaff from "../Images/Fire_HDT_Staff.png";
import FireHDTManacaster from "../Images/Fire_HDT_Manacaster.png";

import Refine from "../Images/Refine.PNG";
import Unbind from "../Images/Unbind.PNG";
import WeaponBonus from "../Images/Weapon_Bonus.PNG";

import FireHDTSwordCost from "./FireHDTSwordMats"
import FireHDTBladeCost from "./FireHDTBladeMats"
import FireHDTDaggerCost from "./FireHDTDaggerMats"
import FireHDTAxeCost from "./FireHDTAxeMats"
import FireHDTLanceCost from "./FireHDTLanceMats"
import FireHDTBowCost from "./FireHDTBowMats"
import FireHDTWandCost from "./FireHDTWandMats"
import FireHDTStaffCost from "./FireHDTStaffMats"
import FireHDTManacasterCost from "./FireHDTManacasterMats"

export default function FireHDTWeapons() {
    const [fireWeaponChoice, setFireWeaponChoiceState] = useLocalStorage("fireWeaponChoice", "sword")

    const [fireSwordCraftState, setFireSwordCraftState] = useLocalStorage("fireSwordCraftState", "grayscale(100%)")
    const [fireSwordWeaponBonusState, setFireSwordWeaponBonusState] = useLocalStorage("fireSwordWeaponBonusState", "grayscale(100%)")
    const [fireSwordRefineState, setFireSwordRefineState] = useLocalStorage("fireSwordRefineState", "grayscale(100%)");
    const [fireSwordUnbindState, setFireSwordUnbindState] = useLocalStorage("fireSwordUnbindState", 0);

    const [wbFHSphereCount, setwbFHSphereCountState] = useLocalStorage("wbFHSphereCount", 500);
    const [wbFHTailCount, setwbFHTailCountState] = useLocalStorage("wbFHTailCount", 360);
    const [wbFHHeartCount, setwbFHHeartCountState] = useLocalStorage("wbFHHeartCount", 80);
    const [wbFHOriCount, setwbFHOriCountState] = useLocalStorage("wbFHOriCount", 46);
    const [wbFHRupeeCost, setwbFHRupeeCost] = useLocalStorage("wbFHRupeeCost", 25);
    const [wbFHHornCount, setwbFHHornCountState] = useLocalStorage("wbFHHornCount", 90);

    const [fireBladeCraftState, setFireBladeCraftState] = useLocalStorage("fireBladeCraftState", "grayscale(100%)")
    const [fireBladeWeaponBonusState, setFireBladeWeaponBonusState] = useLocalStorage("fireBladeWeaponBonusState", "grayscale(100%)")
    const [fireBladeRefineState, setFireBladeRefineState] = useLocalStorage("fireBladeRefineState", "grayscale(100%)");
    const [fireBladeUnbindState, setFireBladeUnbindState] = useLocalStorage("fireBladeUnbindState", 0);

    const [wbFHBlSphereCount, setwbFHBlSphereCountState] = useLocalStorage("wbFHBlSphereCount", 500);
    const [wbFHBlTailCount, setwbFHBlTailCountState] = useLocalStorage("wbFHBlTailCount", 360);
    const [wbFHBlHeartCount, setwbFHBlHeartCountState] = useLocalStorage("wbFHBlHeartCount", 80);
    const [wbFHBlOriCount, setwbFHBlOriCountState] = useLocalStorage("wbFHBlOriCount", 46);
    const [wbFHBlRupeeCost, setwbFHBlRupeeCost] = useLocalStorage("wbFHBlRupeeCost", 25);
    const [wbFHBlHornCount, setwbFHBlHornCountState] = useLocalStorage("wbFHBlHornCount", 90);

    const [fireDaggerCraftState, setFireDaggerCraftState] = useLocalStorage("fireDaggerCraftState", "grayscale(100%)")
    const [fireDaggerWeaponBonusState, setFireDaggerWeaponBonusState] = useLocalStorage("fireDaggerWeaponBonusState", "grayscale(100%)")
    const [fireDaggerRefineState, setFireDaggerRefineState] = useLocalStorage("fireDaggerRefineState", "grayscale(100%)");
    const [fireDaggerUnbindState, setFireDaggerUnbindState] = useLocalStorage("fireDaggerUnbindState", 0);

    const [wbFHDSphereCount, setwbFHDSphereCountState] = useLocalStorage("wbFHDSphereCount", 500);
    const [wbFHDTailCount, setwbFHDTailCountState] = useLocalStorage("wbFHDTailCount", 360);
    const [wbFHDHeartCount, setwbFHDHeartCountState] = useLocalStorage("wbFHDHeartCount", 80);
    const [wbFHDOriCount, setwbFHDOriCountState] = useLocalStorage("wbFHDOriCount", 46);
    const [wbFHDRupeeCost, setwbFHDRupeeCost] = useLocalStorage("wbFHDRupeeCost", 25);
    const [wbFHDHornCount, setwbFHDHornCountState] = useLocalStorage("wbFHDHornCount", 90);

    const [fireAxeCraftState, setFireAxeCraftState] = useLocalStorage("fireAxeCraftState", "grayscale(100%)")
    const [fireAxeWeaponBonusState, setFireAxeWeaponBonusState] = useLocalStorage("fireAxeWeaponBonusState", "grayscale(100%)")
    const [fireAxeRefineState, setFireAxeRefineState] = useLocalStorage("fireAxeRefineState", "grayscale(100%)");
    const [fireAxeUnbindState, setFireAxeUnbindState] = useLocalStorage("fireAxeUnbindState", 0);

    const [wbFHASphereCount, setwbFHASphereCountState] = useLocalStorage("wbFHASphereCount", 500);
    const [wbFHATailCount, setwbFHATailCountState] = useLocalStorage("wbFHATailCount", 360);
    const [wbFHAHeartCount, setwbFHAHeartCountState] = useLocalStorage("wbFHAHeartCount", 80);
    const [wbFHAOriCount, setwbFHAOriCountState] = useLocalStorage("wbFHAOriCount", 46);
    const [wbFHARupeeCost, setwbFHARupeeCost] = useLocalStorage("wbFHARupeeCost", 25);
    const [wbFHAHornCount, setwbFHAHornCountState] = useLocalStorage("wbFHAHornCount", 90);

    const [fireLanceCraftState, setFireLanceCraftState] = useLocalStorage("fireLanceCraftState", "grayscale(100%)")
    const [fireLanceWeaponBonusState, setFireLanceWeaponBonusState] = useLocalStorage("fireLanceWeaponBonusState", "grayscale(100%)")
    const [fireLanceRefineState, setFireLanceRefineState] = useLocalStorage("fireLanceRefineState", "grayscale(100%)");
    const [fireLanceUnbindState, setFireLanceUnbindState] = useLocalStorage("fireLanceUnbindState", 0);

    const [wbFHLSphereCount, setwbFHLSphereCountState] = useLocalStorage("wbFHLSphereCount", 500);
    const [wbFHLTailCount, setwbFHLTailCountState] = useLocalStorage("wbFHLTailCount", 360);
    const [wbFHLHeartCount, setwbFHLHeartCountState] = useLocalStorage("wbFHLHeartCount", 80);
    const [wbFHLOriCount, setwbFHLOriCountState] = useLocalStorage("wbFHLOriCount", 46);
    const [wbFHLRupeeCost, setwbFHLRupeeCost] = useLocalStorage("wbFHLRupeeCost", 25);
    const [wbFHLHornCount, setwbFHLHornCountState] = useLocalStorage("wbFHLHornCount", 90);

    const [fireBowCraftState, setFireBowCraftState] = useLocalStorage("fireBowCraftState", "grayscale(100%)")
    const [fireBowWeaponBonusState, setFireBowWeaponBonusState] = useLocalStorage("fireBowWeaponBonusState", "grayscale(100%)")
    const [fireBowRefineState, setFireBowRefineState] = useLocalStorage("fireBowRefineState", "grayscale(100%)");
    const [fireBowUnbindState, setFireBowUnbindState] = useLocalStorage("fireBowUnbindState", 0);

    const [wbFHBoSphereCount, setwbFHBoSphereCountState] = useLocalStorage("wbFHBoSphereCount", 500);
    const [wbFHBoTailCount, setwbFHBoTailCountState] = useLocalStorage("wbFHBoTailCount", 360);
    const [wbFHBoHeartCount, setwbFHBoHeartCountState] = useLocalStorage("wbFHBoHeartCount", 80);
    const [wbFHBoOriCount, setwbFHBoOriCountState] = useLocalStorage("wbFHBoOriCount", 46);
    const [wbFHBoRupeeCost, setwbFHBoRupeeCost] = useLocalStorage("wbFHBoRupeeCost", 25);
    const [wbFHBoHornCount, setwbFHBoHornCountState] = useLocalStorage("wbFHBoHornCount", 90);

    const [fireWandCraftState, setFireWandCraftState] = useLocalStorage("fireWandCraftState", "grayscale(100%)")
    const [fireWandWeaponBonusState, setFireWandWeaponBonusState] = useLocalStorage("fireWandWeaponBonusState", "grayscale(100%)")
    const [fireWandRefineState, setFireWandRefineState] = useLocalStorage("fireWandRefineState", "grayscale(100%)");
    const [fireWandUnbindState, setFireWandUnbindState] = useLocalStorage("fireWandUnbindState", 0);

    const [wbFHWSphereCount, setwbFHWSphereCountState] = useLocalStorage("wbFHWSphereCount", 500);
    const [wbFHWTailCount, setwbFHWTailCountState] = useLocalStorage("wbFHWTailCount", 360);
    const [wbFHWHeartCount, setwbFHWHeartCountState] = useLocalStorage("wbFHWHeartCount", 80);
    const [wbFHWOriCount, setwbFHWOriCountState] = useLocalStorage("wbFHWOriCount", 46);
    const [wbFHWRupeeCost, setwbFHWRupeeCost] = useLocalStorage("wbFHWRupeeCost", 25);
    const [wbFHWHornCount, setwbFHWHornCountState] = useLocalStorage("wbFHWHornCount", 90);

    const [fireStaffCraftState, setFireStaffCraftState] = useLocalStorage("fireStaffCraftState", "grayscale(100%)")
    const [fireStaffWeaponBonusState, setFireStaffWeaponBonusState] = useLocalStorage("fireStaffWeaponBonusState", "grayscale(100%)")
    const [fireStaffRefineState, setFireStaffRefineState] = useLocalStorage("fireStaffRefineState", "grayscale(100%)");
    const [fireStaffUnbindState, setFireStaffUnbindState] = useLocalStorage("fireStaffUnbindState", 0);

    const [wbFHStSphereCount, setwbFHStSphereCountState] = useLocalStorage("wbFHStSphereCount", 500);
    const [wbFHStTailCount, setwbFHStTailCountState] = useLocalStorage("wbFHStTailCount", 360);
    const [wbFHStHeartCount, setwbFHStHeartCountState] = useLocalStorage("wbFHStHeartCount", 80);
    const [wbFHStOriCount, setwbFHStOriCountState] = useLocalStorage("wbFHStOriCount", 46);
    const [wbFHStRupeeCost, setwbFHStRupeeCost] = useLocalStorage("wbFHStRupeeCost", 25);
    const [wbFHStHornCount, setwbFHStHornCountState] = useLocalStorage("wbFHStHornCount", 90);

    const [fireManacasterCraftState, setFireManacasterCraftState] = useLocalStorage("fireManacasterCraftState", "grayscale(100%)")
    const [fireManacasterWeaponBonusState, setFireManacasterWeaponBonusState] = useLocalStorage("fireManacasterWeaponBonusState", "grayscale(100%)")
    const [fireManacasterRefineState, setFireManacasterRefineState] = useLocalStorage("fireManacasterRefineState", "grayscale(100%)");
    const [fireManacasterUnbindState, setFireManacasterUnbindState] = useLocalStorage("fireManacasterUnbindState", 0);

    const [wbFHMSphereCount, setwbFHMSphereCountState] = useLocalStorage("wbFHMSphereCount", 500);
    const [wbFHMTailCount, setwbFHMTailCountState] = useLocalStorage("wbFHMTailCount", 360);
    const [wbFHMHeartCount, setwbFHMHeartCountState] = useLocalStorage("wbFHMHeartCount", 80);
    const [wbFHMOriCount, setwbFHMOriCountState] = useLocalStorage("wbFHMOriCount", 46);
    const [wbFHMRupeeCost, setwbFHMRupeeCost] = useLocalStorage("wbFHMRupeeCost", 25);
    const [wbFHMHornCount, setwbFHMHornCountState] = useLocalStorage("wbFHMHornCount", 90);

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

    function fireHDTWeaponSelection() {
        if (fireWeaponChoice == "sword") {
            return <FireHDTSwordCost wbFHSphereCount={wbFHSphereCount} wbFHTailCount={wbFHTailCount} wbFHHeartCount={wbFHHeartCount} wbFHOriCount={wbFHOriCount} wbFHRupeeCost={wbFHRupeeCost.toFixed(1)} wbFHHornCount={wbFHHornCount} />
        }
        if (fireWeaponChoice == "blade") {
            return <FireHDTBladeCost wbFHBlSphereCount={wbFHBlSphereCount} wbFHBlTailCount={wbFHBlTailCount} wbFHBlHeartCount={wbFHBlHeartCount} wbFHBlOriCount={wbFHBlOriCount} wbFHBlRupeeCost={wbFHBlRupeeCost.toFixed(1)} wbFHBlHornCount={wbFHBlHornCount} />
        }
        if (fireWeaponChoice == "dagger") {
            return <FireHDTDaggerCost wbFHDSphereCount={wbFHDSphereCount} wbFHDTailCount={wbFHDTailCount} wbFHDHeartCount={wbFHDHeartCount} wbFHDOriCount={wbFHDOriCount} wbFHDRupeeCost={wbFHDRupeeCost.toFixed(1)} wbFHDHornCount={wbFHDHornCount} />
        }
        if (fireWeaponChoice == "axe") {
            return <FireHDTAxeCost wbFHASphereCount={wbFHASphereCount} wbFHATailCount={wbFHATailCount} wbFHAHeartCount={wbFHAHeartCount} wbFHAOriCount={wbFHAOriCount} wbFHARupeeCost={wbFHARupeeCost.toFixed(1)} wbFHAHornCount={wbFHAHornCount} />
        }
        if (fireWeaponChoice == "lance") {
            return <FireHDTLanceCost wbFHLSphereCount={wbFHLSphereCount} wbFHLTailCount={wbFHLTailCount} wbFHLHeartCount={wbFHLHeartCount} wbFHLOriCount={wbFHLOriCount} wbFHLRupeeCost={wbFHLRupeeCost.toFixed(1)} wbFHLHornCount={wbFHLHornCount} />
        }
        if (fireWeaponChoice == "bow") {
            return <FireHDTBowCost wbFHBoSphereCount={wbFHBoSphereCount} wbFHBoTailCount={wbFHBoTailCount} wbFHBoHeartCount={wbFHBoHeartCount} wbFHBoOriCount={wbFHBoOriCount} wbFHBoRupeeCost={wbFHBoRupeeCost.toFixed(1)} wbFHBoHornCount={wbFHBoHornCount} />
        }
        if (fireWeaponChoice == "wand") {
            return <FireHDTWandCost wbFHWSphereCount={wbFHWSphereCount} wbFHWTailCount={wbFHWTailCount} wbFHWHeartCount={wbFHWHeartCount} wbFHWOriCount={wbFHWOriCount} wbFHWRupeeCost={wbFHWRupeeCost.toFixed(1)} wbFHWHornCount={wbFHWHornCount} />
        }
        if (fireWeaponChoice == "staff") {
            return <FireHDTStaffCost wbFHStSphereCount={wbFHStSphereCount} wbFHStTailCount={wbFHStTailCount} wbFHStHeartCount={wbFHStHeartCount} wbFHStOriCount={wbFHStOriCount} wbFHStRupeeCost={wbFHStRupeeCost.toFixed(1)} wbFHStHornCount={wbFHStHornCount} />
        }
        if (fireWeaponChoice == "manacaster") {
            return <FireHDTManacasterCost wbFHMSphereCount={wbFHMSphereCount} wbFHMTailCount={wbFHMTailCount} wbFHMHeartCount={wbFHMHeartCount} wbFHMOriCount={wbFHMOriCount} wbFHMRupeeCost={wbFHMRupeeCost.toFixed(1)} wbFHMHornCount={wbFHMHornCount} />
        }
    }

    function craftFireSword() {
        if (fireSwordCraftState == "grayscale(100%)") {
            setFireSwordCraftState("grayscale(0%)")
            setFireWeaponChoiceState("sword")
            setwbFHSphereCountState(wbFHSphereCount - 25)
            setwbFHTailCountState(wbFHTailCount - 18)
            setwbFHHeartCountState(wbFHHeartCount - 5)
            setwbFHOriCountState(wbFHOriCount - 1)
            setwbFHRupeeCost(parseFloat(wbFHRupeeCost - 1.2))
        }
        else if (fireSwordCraftState == "grayscale(0%)") {
            setFireSwordCraftState("grayscale(100%)")
            setFireWeaponChoiceState("sword")
            setwbFHSphereCountState(wbFHSphereCount + 25)
            setwbFHTailCountState(wbFHTailCount + 18)
            setwbFHHeartCountState(wbFHHeartCount + 5)
            setwbFHOriCountState(wbFHOriCount + 1)
            setwbFHRupeeCost(parseFloat(wbFHRupeeCost + 1.2))
        }
    }

    function fireSwordWeaponBonus() {
        if (fireSwordWeaponBonusState == "grayscale(100%)") {
            setFireSwordWeaponBonusState("grayscale(0%)")
            setFireWeaponChoiceState("sword")
            setwbFHSphereCountState(wbFHSphereCount - 150)
            setwbFHTailCountState(wbFHTailCount - 100)
            setwbFHHornCountState(wbFHHornCount - 30)
            setwbFHHeartCountState(wbFHHeartCount - 10)
            setwbFHOriCountState(wbFHOriCount - 30)
            setwbFHRupeeCost(parseFloat(wbFHRupeeCost - 10))
        }
        else if (fireSwordWeaponBonusState == "grayscale(0%)") {
            setFireSwordWeaponBonusState("grayscale(100%)")
            setFireWeaponChoiceState("sword")
            setwbFHSphereCountState(wbFHSphereCount + 150)
            setwbFHTailCountState(wbFHTailCount + 100)
            setwbFHHornCountState(wbFHHornCount + 30)
            setwbFHHeartCountState(wbFHHeartCount + 10)
            setwbFHOriCountState(wbFHOriCount + 30)
            setwbFHRupeeCost(parseFloat(wbFHRupeeCost + 10))
        }
    }

    function fireSwordRefine() {
        if (fireSwordRefineState == "grayscale(100%)") {
            setFireSwordRefineState("grayscale(0%)")
            setFireWeaponChoiceState("sword")
            setwbFHSphereCountState(wbFHSphereCount - 50)
            setwbFHTailCountState(wbFHTailCount - 40)
            setwbFHHornCountState(wbFHHornCount - 30)
            setwbFHHeartCountState(wbFHHeartCount - 10)
            setwbFHOriCountState(wbFHOriCount - 3)
            setwbFHRupeeCost(parseFloat(wbFHRupeeCost - 1.5))
        }
        else if (fireSwordRefineState == "grayscale(0%)") {
            setFireSwordRefineState("grayscale(100%)")
            setFireWeaponChoiceState("sword")
            setwbFHSphereCountState(wbFHSphereCount + 50)
            setwbFHTailCountState(wbFHTailCount + 40)
            setwbFHHornCountState(wbFHHornCount + 30)
            setwbFHHeartCountState(wbFHHeartCount + 10)
            setwbFHOriCountState(wbFHOriCount + 3)
            setwbFHRupeeCost(parseFloat(wbFHRupeeCost + 1.5))
        }
    }

    function handleFireSwordUnbindIncrement(event) {
        setFireWeaponChoiceState("sword");
        if (fireSwordUnbindState < event.target.value) {
            if (event.target.value - fireSwordUnbindState == 1) {
                setFireSwordUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFHSphereCountState(wbFHSphereCount - 25)
                    setwbFHTailCountState(wbFHTailCount - 18)
                    setwbFHHeartCountState(wbFHHeartCount - 5)
                    setwbFHOriCountState(wbFHOriCount - 1)
                    setwbFHRupeeCost(parseFloat(wbFHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFHSphereCountState(wbFHSphereCount - 175)
                    setwbFHTailCountState(wbFHTailCount - 130)
                    setwbFHHornCountState(wbFHHornCount - 30)
                    setwbFHHeartCountState(wbFHHeartCount - 35)
                    setwbFHOriCountState(wbFHOriCount - 8)
                    setwbFHRupeeCost(parseFloat(wbFHRupeeCost - 7.5))
                }
            }
        }
        else if (fireSwordUnbindState > event.target.value) {
            if (fireSwordUnbindState - event.target.value == 1) {
                setFireSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFHSphereCountState(wbFHSphereCount + 25)
                    setwbFHTailCountState(wbFHTailCount + 18)
                    setwbFHHeartCountState(wbFHHeartCount + 5)
                    setwbFHOriCountState(wbFHOriCount + 1)
                    setwbFHRupeeCost(parseFloat(wbFHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFHSphereCountState(wbFHSphereCount + 175)
                    setwbFHTailCountState(wbFHTailCount + 130)
                    setwbFHHornCountState(wbFHHornCount + 30)
                    setwbFHHeartCountState(wbFHHeartCount + 35)
                    setwbFHOriCountState(wbFHOriCount + 8)
                    setwbFHRupeeCost(parseFloat(wbFHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftFireBlade() {
        if (fireBladeCraftState == "grayscale(100%)") {
            setFireBladeCraftState("grayscale(0%)")
            setFireWeaponChoiceState("blade")
            setwbFHBlSphereCountState(wbFHBlSphereCount - 25)
            setwbFHBlTailCountState(wbFHBlTailCount - 18)
            setwbFHBlHeartCountState(wbFHBlHeartCount - 5)
            setwbFHBlOriCountState(wbFHBlOriCount - 1)
            setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost - 1.2))
        }
        else if (fireBladeCraftState == "grayscale(0%)") {
            setFireBladeCraftState("grayscale(100%)")
            setFireWeaponChoiceState("blade")
            setwbFHBlSphereCountState(wbFHBlSphereCount + 25)
            setwbFHBlTailCountState(wbFHBlTailCount + 18)
            setwbFHBlHeartCountState(wbFHBlHeartCount + 5)
            setwbFHBlOriCountState(wbFHBlOriCount + 1)
            setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost + 1.2))
        }
    }

    function fireBladeWeaponBonus() {
        if (fireBladeWeaponBonusState == "grayscale(100%)") {
            setFireBladeWeaponBonusState("grayscale(0%)")
            setFireWeaponChoiceState("blade")
            setwbFHBlSphereCountState(wbFHBlSphereCount - 150)
            setwbFHBlTailCountState(wbFHBlTailCount - 100)
            setwbFHBlHornCountState(wbFHBlHornCount - 30)
            setwbFHBlHeartCountState(wbFHBlHeartCount - 10)
            setwbFHBlOriCountState(wbFHBlOriCount - 30)
            setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost - 10))
        }
        else if (fireBladeWeaponBonusState == "grayscale(0%)") {
            setFireBladeWeaponBonusState("grayscale(100%)")
            setFireWeaponChoiceState("blade")
            setwbFHBlSphereCountState(wbFHBlSphereCount + 150)
            setwbFHBlTailCountState(wbFHBlTailCount + 100)
            setwbFHBlHornCountState(wbFHBlHornCount + 30)
            setwbFHBlHeartCountState(wbFHBlHeartCount + 10)
            setwbFHBlOriCountState(wbFHBlOriCount + 30)
            setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost + 10))
        }
    }

    function fireBladeRefine() {
        if (fireBladeRefineState == "grayscale(100%)") {
            setFireBladeRefineState("grayscale(0%)")
            setFireWeaponChoiceState("blade")
            setwbFHBlSphereCountState(wbFHBlSphereCount - 50)
            setwbFHBlTailCountState(wbFHBlTailCount - 40)
            setwbFHBlHornCountState(wbFHBlHornCount - 30)
            setwbFHBlHeartCountState(wbFHBlHeartCount - 10)
            setwbFHBlOriCountState(wbFHBlOriCount - 3)
            setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost - 1.5))
        }
        else if (fireBladeRefineState == "grayscale(0%)") {
            setFireBladeRefineState("grayscale(100%)")
            setFireWeaponChoiceState("blade")
            setwbFHBlSphereCountState(wbFHBlSphereCount + 50)
            setwbFHBlTailCountState(wbFHBlTailCount + 40)
            setwbFHBlHornCountState(wbFHBlHornCount + 30)
            setwbFHBlHeartCountState(wbFHBlHeartCount + 10)
            setwbFHBlOriCountState(wbFHBlOriCount + 3)
            setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost + 1.5))
        }
    }

    function handleFireBladeUnbindIncrement(event) {
        setFireWeaponChoiceState("blade");
        if (fireBladeUnbindState < event.target.value) {
            if (event.target.value - fireBladeUnbindState == 1) {
                setFireBladeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFHBlSphereCountState(wbFHBlSphereCount - 25)
                    setwbFHBlTailCountState(wbFHBlTailCount - 18)
                    setwbFHBlHeartCountState(wbFHBlHeartCount - 5)
                    setwbFHBlOriCountState(wbFHBlOriCount - 1)
                    setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFHBlSphereCountState(wbFHBlSphereCount - 175)
                    setwbFHBlTailCountState(wbFHBlTailCount - 130)
                    setwbFHBlHornCountState(wbFHBlHornCount - 30)
                    setwbFHBlHeartCountState(wbFHBlHeartCount - 35)
                    setwbFHBlOriCountState(wbFHBlOriCount - 8)
                    setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost - 7.5))
                }
            }
        }
        else if (fireBladeUnbindState > event.target.value) {
            if (fireBladeUnbindState - event.target.value == 1) {
                setFireBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFHBlSphereCountState(wbFHBlSphereCount + 25)
                    setwbFHBlTailCountState(wbFHBlTailCount + 18)
                    setwbFHBlHeartCountState(wbFHBlHeartCount + 5)
                    setwbFHBlOriCountState(wbFHBlOriCount + 1)
                    setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFHBlSphereCountState(wbFHBlSphereCount + 175)
                    setwbFHBlTailCountState(wbFHBlTailCount + 130)
                    setwbFHBlHornCountState(wbFHBlHornCount + 30)
                    setwbFHBlHeartCountState(wbFHBlHeartCount + 35)
                    setwbFHBlOriCountState(wbFHBlOriCount + 8)
                    setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost + 7.5))
                }
            }
        }
    }

    function craftFireDagger() {
        if (fireDaggerCraftState == "grayscale(100%)") {
            setFireDaggerCraftState("grayscale(0%)")
            setFireWeaponChoiceState("dagger")
            setwbFHDSphereCountState(wbFHDSphereCount - 25)
            setwbFHDTailCountState(wbFHDTailCount - 18)
            setwbFHDHeartCountState(wbFHDHeartCount - 5)
            setwbFHDOriCountState(wbFHDOriCount - 1)
            setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost - 1.2))
        }
        else if (fireDaggerCraftState == "grayscale(0%)") {
            setFireDaggerCraftState("grayscale(100%)")
            setFireWeaponChoiceState("dagger")
            setwbFHDSphereCountState(wbFHDSphereCount + 25)
            setwbFHDTailCountState(wbFHDTailCount + 18)
            setwbFHDHeartCountState(wbFHDHeartCount + 5)
            setwbFHDOriCountState(wbFHDOriCount + 1)
            setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost + 1.2))
        }
    }

    function fireDaggerWeaponBonus() {
        if (fireDaggerWeaponBonusState == "grayscale(100%)") {
            setFireDaggerWeaponBonusState("grayscale(0%)")
            setFireWeaponChoiceState("dagger")
            setwbFHDSphereCountState(wbFHDSphereCount - 150)
            setwbFHDTailCountState(wbFHDTailCount - 100)
            setwbFHDHornCountState(wbFHDHornCount - 30)
            setwbFHDHeartCountState(wbFHDHeartCount - 10)
            setwbFHDOriCountState(wbFHDOriCount - 30)
            setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost - 10))
        }
        else if (fireDaggerWeaponBonusState == "grayscale(0%)") {
            setFireDaggerWeaponBonusState("grayscale(100%)")
            setFireWeaponChoiceState("dagger")
            setwbFHDSphereCountState(wbFHDSphereCount + 150)
            setwbFHDTailCountState(wbFHDTailCount + 100)
            setwbFHDHornCountState(wbFHDHornCount + 30)
            setwbFHDHeartCountState(wbFHDHeartCount + 10)
            setwbFHDOriCountState(wbFHDOriCount + 30)
            setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost + 10))
        }
    }

    function fireDaggerRefine() {
        if (fireDaggerRefineState == "grayscale(100%)") {
            setFireDaggerRefineState("grayscale(0%)")
            setFireWeaponChoiceState("dagger")
            setwbFHDSphereCountState(wbFHDSphereCount - 50)
            setwbFHDTailCountState(wbFHDTailCount - 40)
            setwbFHDHornCountState(wbFHDHornCount - 30)
            setwbFHDHeartCountState(wbFHDHeartCount - 10)
            setwbFHDOriCountState(wbFHDOriCount - 3)
            setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost - 1.5))
        }
        else if (fireDaggerRefineState == "grayscale(0%)") {
            setFireDaggerRefineState("grayscale(100%)")
            setFireWeaponChoiceState("dagger")
            setwbFHDSphereCountState(wbFHDSphereCount + 50)
            setwbFHDTailCountState(wbFHDTailCount + 40)
            setwbFHDHornCountState(wbFHDHornCount + 30)
            setwbFHDHeartCountState(wbFHDHeartCount + 10)
            setwbFHDOriCountState(wbFHDOriCount + 3)
            setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost + 1.5))
        }
    }

    function handleFireDaggerUnbindIncrement(event) {
        setFireWeaponChoiceState("dagger");
        if (fireDaggerUnbindState < event.target.value) {
            if (event.target.value - fireDaggerUnbindState == 1) {
                setFireDaggerUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFHDSphereCountState(wbFHDSphereCount - 25)
                    setwbFHDTailCountState(wbFHDTailCount - 18)
                    setwbFHDHeartCountState(wbFHDHeartCount - 5)
                    setwbFHDOriCountState(wbFHDOriCount - 1)
                    setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFHDSphereCountState(wbFHDSphereCount - 175)
                    setwbFHDTailCountState(wbFHDTailCount - 130)
                    setwbFHDHornCountState(wbFHDHornCount - 30)
                    setwbFHDHeartCountState(wbFHDHeartCount - 35)
                    setwbFHDOriCountState(wbFHDOriCount - 8)
                    setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost - 7.5))
                }
            }
        }
        else if (fireDaggerUnbindState > event.target.value) {
            if (fireDaggerUnbindState - event.target.value == 1) {
                setFireDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFHDSphereCountState(wbFHDSphereCount + 25)
                    setwbFHDTailCountState(wbFHDTailCount + 18)
                    setwbFHDHeartCountState(wbFHDHeartCount + 5)
                    setwbFHDOriCountState(wbFHDOriCount + 1)
                    setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFHDSphereCountState(wbFHDSphereCount + 175)
                    setwbFHDTailCountState(wbFHDTailCount + 130)
                    setwbFHDHornCountState(wbFHDHornCount + 30)
                    setwbFHDHeartCountState(wbFHDHeartCount + 35)
                    setwbFHDOriCountState(wbFHDOriCount + 8)
                    setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost + 7.5))
                }
            }
        }
    }

    function craftFireAxe() {
        if (fireAxeCraftState == "grayscale(100%)") {
            setFireAxeCraftState("grayscale(0%)")
            setFireWeaponChoiceState("axe")
            setwbFHASphereCountState(wbFHASphereCount - 25)
            setwbFHATailCountState(wbFHATailCount - 18)
            setwbFHAHeartCountState(wbFHAHeartCount - 5)
            setwbFHAOriCountState(wbFHAOriCount - 1)
            setwbFHARupeeCost(parseFloat(wbFHARupeeCost - 1.2))
        }
        else if (fireAxeCraftState == "grayscale(0%)") {
            setFireAxeCraftState("grayscale(100%)")
            setFireWeaponChoiceState("axe")
            setwbFHASphereCountState(wbFHASphereCount + 25)
            setwbFHATailCountState(wbFHATailCount + 18)
            setwbFHAHeartCountState(wbFHAHeartCount + 5)
            setwbFHAOriCountState(wbFHAOriCount + 1)
            setwbFHARupeeCost(parseFloat(wbFHARupeeCost + 1.2))
        }
    }

    function fireAxeWeaponBonus() {
        if (fireAxeWeaponBonusState == "grayscale(100%)") {
            setFireAxeWeaponBonusState("grayscale(0%)")
            setFireWeaponChoiceState("axe")
            setwbFHASphereCountState(wbFHASphereCount - 150)
            setwbFHATailCountState(wbFHATailCount - 100)
            setwbFHAHornCountState(wbFHAHornCount - 30)
            setwbFHAHeartCountState(wbFHAHeartCount - 10)
            setwbFHAOriCountState(wbFHAOriCount - 30)
            setwbFHARupeeCost(parseFloat(wbFHARupeeCost - 10))
        }
        else if (fireAxeWeaponBonusState == "grayscale(0%)") {
            setFireAxeWeaponBonusState("grayscale(100%)")
            setFireWeaponChoiceState("axe")
            setwbFHASphereCountState(wbFHASphereCount + 150)
            setwbFHATailCountState(wbFHATailCount + 100)
            setwbFHAHornCountState(wbFHAHornCount + 30)
            setwbFHAHeartCountState(wbFHAHeartCount + 10)
            setwbFHAOriCountState(wbFHAOriCount + 30)
            setwbFHARupeeCost(parseFloat(wbFHARupeeCost + 10))
        }
    }

    function fireAxeRefine() {
        if (fireAxeRefineState == "grayscale(100%)") {
            setFireAxeRefineState("grayscale(0%)")
            setFireWeaponChoiceState("axe")
            setwbFHASphereCountState(wbFHASphereCount - 50)
            setwbFHATailCountState(wbFHATailCount - 40)
            setwbFHAHornCountState(wbFHAHornCount - 30)
            setwbFHAHeartCountState(wbFHAHeartCount - 10)
            setwbFHAOriCountState(wbFHAOriCount - 3)
            setwbFHARupeeCost(parseFloat(wbFHARupeeCost - 1.5))
        }
        else if (fireAxeRefineState == "grayscale(0%)") {
            setFireAxeRefineState("grayscale(100%)")
            setFireWeaponChoiceState("axe")
            setwbFHASphereCountState(wbFHASphereCount + 50)
            setwbFHATailCountState(wbFHATailCount + 40)
            setwbFHAHornCountState(wbFHAHornCount + 30)
            setwbFHAHeartCountState(wbFHAHeartCount + 10)
            setwbFHAOriCountState(wbFHAOriCount + 3)
            setwbFHARupeeCost(parseFloat(wbFHARupeeCost + 1.5))
        }
    }

    function handleFireAxeUnbindIncrement(event) {
        setFireWeaponChoiceState("axe");
        if (fireAxeUnbindState < event.target.value) {
            if (event.target.value - fireAxeUnbindState == 1) {
                setFireAxeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFHASphereCountState(wbFHASphereCount - 25)
                    setwbFHATailCountState(wbFHATailCount - 18)
                    setwbFHAHeartCountState(wbFHAHeartCount - 5)
                    setwbFHAOriCountState(wbFHAOriCount - 1)
                    setwbFHARupeeCost(parseFloat(wbFHARupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFHASphereCountState(wbFHASphereCount - 175)
                    setwbFHATailCountState(wbFHATailCount - 130)
                    setwbFHAHornCountState(wbFHAHornCount - 30)
                    setwbFHAHeartCountState(wbFHAHeartCount - 35)
                    setwbFHAOriCountState(wbFHAOriCount - 8)
                    setwbFHARupeeCost(parseFloat(wbFHARupeeCost - 7.5))
                }
            }
        }
        else if (fireAxeUnbindState > event.target.value) {
            if (fireAxeUnbindState - event.target.value == 1) {
                setFireAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFHASphereCountState(wbFHASphereCount + 25)
                    setwbFHATailCountState(wbFHATailCount + 18)
                    setwbFHAHeartCountState(wbFHAHeartCount + 5)
                    setwbFHAOriCountState(wbFHAOriCount + 1)
                    setwbFHARupeeCost(parseFloat(wbFHARupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFHASphereCountState(wbFHASphereCount + 175)
                    setwbFHATailCountState(wbFHATailCount + 130)
                    setwbFHAHornCountState(wbFHAHornCount + 30)
                    setwbFHAHeartCountState(wbFHAHeartCount + 35)
                    setwbFHAOriCountState(wbFHAOriCount + 8)
                    setwbFHARupeeCost(parseFloat(wbFHARupeeCost + 7.5))
                }
            }
        }
    }

    function craftFireLance() {
        if (fireLanceCraftState == "grayscale(100%)") {
            setFireLanceCraftState("grayscale(0%)")
            setFireWeaponChoiceState("lance")
            setwbFHLSphereCountState(wbFHLSphereCount - 25)
            setwbFHLTailCountState(wbFHLTailCount - 18)
            setwbFHLHeartCountState(wbFHLHeartCount - 5)
            setwbFHLOriCountState(wbFHLOriCount - 1)
            setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost - 1.2))
        }
        else if (fireLanceCraftState == "grayscale(0%)") {
            setFireLanceCraftState("grayscale(100%)")
            setFireWeaponChoiceState("lance")
            setwbFHLSphereCountState(wbFHLSphereCount + 25)
            setwbFHLTailCountState(wbFHLTailCount + 18)
            setwbFHLHeartCountState(wbFHLHeartCount + 5)
            setwbFHLOriCountState(wbFHLOriCount + 1)
            setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost + 1.2))
        }
    }

    function fireLanceWeaponBonus() {
        if (fireLanceWeaponBonusState == "grayscale(100%)") {
            setFireLanceWeaponBonusState("grayscale(0%)")
            setFireWeaponChoiceState("lance")
            setwbFHLSphereCountState(wbFHLSphereCount - 150)
            setwbFHLTailCountState(wbFHLTailCount - 100)
            setwbFHLHornCountState(wbFHLHornCount - 30)
            setwbFHLHeartCountState(wbFHLHeartCount - 10)
            setwbFHLOriCountState(wbFHLOriCount - 30)
            setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost - 10))
        }
        else if (fireLanceWeaponBonusState == "grayscale(0%)") {
            setFireLanceWeaponBonusState("grayscale(100%)")
            setFireWeaponChoiceState("lance")
            setwbFHLSphereCountState(wbFHLSphereCount + 150)
            setwbFHLTailCountState(wbFHLTailCount + 100)
            setwbFHLHornCountState(wbFHLHornCount + 30)
            setwbFHLHeartCountState(wbFHLHeartCount + 10)
            setwbFHLOriCountState(wbFHLOriCount + 30)
            setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost + 10))
        }
    }

    function fireLanceRefine() {
        if (fireLanceRefineState == "grayscale(100%)") {
            setFireLanceRefineState("grayscale(0%)")
            setFireWeaponChoiceState("lance")
            setwbFHLSphereCountState(wbFHLSphereCount - 50)
            setwbFHLTailCountState(wbFHLTailCount - 40)
            setwbFHLHornCountState(wbFHLHornCount - 30)
            setwbFHLHeartCountState(wbFHLHeartCount - 10)
            setwbFHLOriCountState(wbFHLOriCount - 3)
            setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost - 1.5))
        }
        else if (fireLanceRefineState == "grayscale(0%)") {
            setFireLanceRefineState("grayscale(100%)")
            setFireWeaponChoiceState("lance")
            setwbFHLSphereCountState(wbFHLSphereCount + 50)
            setwbFHLTailCountState(wbFHLTailCount + 40)
            setwbFHLHornCountState(wbFHLHornCount + 30)
            setwbFHLHeartCountState(wbFHLHeartCount + 10)
            setwbFHLOriCountState(wbFHLOriCount + 3)
            setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost + 1.5))
        }
    }

    function handleFireLanceUnbindIncrement(event) {
        setFireWeaponChoiceState("lance");
        if (fireLanceUnbindState < event.target.value) {
            if (event.target.value - fireLanceUnbindState == 1) {
                setFireLanceUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFHLSphereCountState(wbFHLSphereCount - 25)
                    setwbFHLTailCountState(wbFHLTailCount - 18)
                    setwbFHLHeartCountState(wbFHLHeartCount - 5)
                    setwbFHLOriCountState(wbFHLOriCount - 1)
                    setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFHLSphereCountState(wbFHLSphereCount - 175)
                    setwbFHLTailCountState(wbFHLTailCount - 130)
                    setwbFHLHornCountState(wbFHLHornCount - 30)
                    setwbFHLHeartCountState(wbFHLHeartCount - 35)
                    setwbFHLOriCountState(wbFHLOriCount - 8)
                    setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost - 7.5))
                }
            }
        }
        else if (fireLanceUnbindState > event.target.value) {
            if (fireLanceUnbindState - event.target.value == 1) {
                setFireLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFHLSphereCountState(wbFHLSphereCount + 25)
                    setwbFHLTailCountState(wbFHLTailCount + 18)
                    setwbFHLHeartCountState(wbFHLHeartCount + 5)
                    setwbFHLOriCountState(wbFHLOriCount + 1)
                    setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFHLSphereCountState(wbFHLSphereCount + 175)
                    setwbFHLTailCountState(wbFHLTailCount + 130)
                    setwbFHLHornCountState(wbFHLHornCount + 30)
                    setwbFHLHeartCountState(wbFHLHeartCount + 35)
                    setwbFHLOriCountState(wbFHLOriCount + 8)
                    setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost + 7.5))
                }
            }
        }
    }

    function craftFireBow() {
        if (fireBowCraftState == "grayscale(100%)") {
            setFireBowCraftState("grayscale(0%)")
            setFireWeaponChoiceState("bow")
            setwbFHBoSphereCountState(wbFHBoSphereCount - 25)
            setwbFHBoTailCountState(wbFHBoTailCount - 18)
            setwbFHBoHeartCountState(wbFHBoHeartCount - 5)
            setwbFHBoOriCountState(wbFHBoOriCount - 1)
            setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost - 1.2))
        }
        else if (fireBowCraftState == "grayscale(0%)") {
            setFireBowCraftState("grayscale(100%)")
            setFireWeaponChoiceState("bow")
            setwbFHBoSphereCountState(wbFHBoSphereCount + 25)
            setwbFHBoTailCountState(wbFHBoTailCount + 18)
            setwbFHBoHeartCountState(wbFHBoHeartCount + 5)
            setwbFHBoOriCountState(wbFHBoOriCount + 1)
            setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost + 1.2))
        }
    }

    function fireBowWeaponBonus() {
        if (fireBowWeaponBonusState == "grayscale(100%)") {
            setFireBowWeaponBonusState("grayscale(0%)")
            setFireWeaponChoiceState("bow")
            setwbFHBoSphereCountState(wbFHBoSphereCount - 150)
            setwbFHBoTailCountState(wbFHBoTailCount - 100)
            setwbFHBoHornCountState(wbFHBoHornCount - 30)
            setwbFHBoHeartCountState(wbFHBoHeartCount - 10)
            setwbFHBoOriCountState(wbFHBoOriCount - 30)
            setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost - 10))
        }
        else if (fireBowWeaponBonusState == "grayscale(0%)") {
            setFireBowWeaponBonusState("grayscale(100%)")
            setFireWeaponChoiceState("bow")
            setwbFHBoSphereCountState(wbFHBoSphereCount + 150)
            setwbFHBoTailCountState(wbFHBoTailCount + 100)
            setwbFHBoHornCountState(wbFHBoHornCount + 30)
            setwbFHBoHeartCountState(wbFHBoHeartCount + 10)
            setwbFHBoOriCountState(wbFHBoOriCount + 30)
            setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost + 10))
        }
    }

    function fireBowRefine() {
        if (fireBowRefineState == "grayscale(100%)") {
            setFireBowRefineState("grayscale(0%)")
            setFireWeaponChoiceState("bow")
            setwbFHBoSphereCountState(wbFHBoSphereCount - 50)
            setwbFHBoTailCountState(wbFHBoTailCount - 40)
            setwbFHBoHornCountState(wbFHBoHornCount - 30)
            setwbFHBoHeartCountState(wbFHBoHeartCount - 10)
            setwbFHBoOriCountState(wbFHBoOriCount - 3)
            setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost - 1.5))
        }
        else if (fireBowRefineState == "grayscale(0%)") {
            setFireBowRefineState("grayscale(100%)")
            setFireWeaponChoiceState("bow")
            setwbFHBoSphereCountState(wbFHBoSphereCount + 50)
            setwbFHBoTailCountState(wbFHBoTailCount + 40)
            setwbFHBoHornCountState(wbFHBoHornCount + 30)
            setwbFHBoHeartCountState(wbFHBoHeartCount + 10)
            setwbFHBoOriCountState(wbFHBoOriCount + 3)
            setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost + 1.5))
        }
    }

    function handleFireBowUnbindIncrement(event) {
        setFireWeaponChoiceState("bow");
        if (fireBowUnbindState < event.target.value) {
            if (event.target.value - fireBowUnbindState == 1) {
                setFireBowUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFHBoSphereCountState(wbFHBoSphereCount - 25)
                    setwbFHBoTailCountState(wbFHBoTailCount - 18)
                    setwbFHBoHeartCountState(wbFHBoHeartCount - 5)
                    setwbFHBoOriCountState(wbFHBoOriCount - 1)
                    setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFHBoSphereCountState(wbFHBoSphereCount - 175)
                    setwbFHBoTailCountState(wbFHBoTailCount - 130)
                    setwbFHBoHornCountState(wbFHBoHornCount - 30)
                    setwbFHBoHeartCountState(wbFHBoHeartCount - 35)
                    setwbFHBoOriCountState(wbFHBoOriCount - 8)
                    setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost - 7.5))
                }
            }
        }
        else if (fireBowUnbindState > event.target.value) {
            if (fireBowUnbindState - event.target.value == 1) {
                setFireBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFHBoSphereCountState(wbFHBoSphereCount + 25)
                    setwbFHBoTailCountState(wbFHBoTailCount + 18)
                    setwbFHBoHeartCountState(wbFHBoHeartCount + 5)
                    setwbFHBoOriCountState(wbFHBoOriCount + 1)
                    setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFHBoSphereCountState(wbFHBoSphereCount + 175)
                    setwbFHBoTailCountState(wbFHBoTailCount + 130)
                    setwbFHBoHornCountState(wbFHBoHornCount + 30)
                    setwbFHBoHeartCountState(wbFHBoHeartCount + 35)
                    setwbFHBoOriCountState(wbFHBoOriCount + 8)
                    setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost + 7.5))
                }
            }
        }
    }

    function craftFireWand() {
        if (fireWandCraftState == "grayscale(100%)") {
            setFireWandCraftState("grayscale(0%)")
            setFireWeaponChoiceState("wand")
            setwbFHWSphereCountState(wbFHWSphereCount - 25)
            setwbFHWTailCountState(wbFHWTailCount - 18)
            setwbFHWHeartCountState(wbFHWHeartCount - 5)
            setwbFHWOriCountState(wbFHWOriCount - 1)
            setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost - 1.2))
        }
        else if (fireWandCraftState == "grayscale(0%)") {
            setFireWandCraftState("grayscale(100%)")
            setFireWeaponChoiceState("wand")
            setwbFHWSphereCountState(wbFHWSphereCount + 25)
            setwbFHWTailCountState(wbFHWTailCount + 18)
            setwbFHWHeartCountState(wbFHWHeartCount + 5)
            setwbFHWOriCountState(wbFHWOriCount + 1)
            setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost + 1.2))
        }
    }

    function fireWandWeaponBonus() {
        if (fireWandWeaponBonusState == "grayscale(100%)") {
            setFireWandWeaponBonusState("grayscale(0%)")
            setFireWeaponChoiceState("wand")
            setwbFHWSphereCountState(wbFHWSphereCount - 150)
            setwbFHWTailCountState(wbFHWTailCount - 100)
            setwbFHWHornCountState(wbFHWHornCount - 30)
            setwbFHWHeartCountState(wbFHWHeartCount - 10)
            setwbFHWOriCountState(wbFHWOriCount - 30)
            setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost - 10))
        }
        else if (fireWandWeaponBonusState == "grayscale(0%)") {
            setFireWandWeaponBonusState("grayscale(100%)")
            setFireWeaponChoiceState("wand")
            setwbFHWSphereCountState(wbFHWSphereCount + 150)
            setwbFHWTailCountState(wbFHWTailCount + 100)
            setwbFHWHornCountState(wbFHWHornCount + 30)
            setwbFHWHeartCountState(wbFHWHeartCount + 10)
            setwbFHWOriCountState(wbFHWOriCount + 30)
            setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost + 10))
        }
    }

    function fireWandRefine() {
        if (fireWandRefineState == "grayscale(100%)") {
            setFireWandRefineState("grayscale(0%)")
            setFireWeaponChoiceState("wand")
            setwbFHWSphereCountState(wbFHWSphereCount - 50)
            setwbFHWTailCountState(wbFHWTailCount - 40)
            setwbFHWHornCountState(wbFHWHornCount - 30)
            setwbFHWHeartCountState(wbFHWHeartCount - 10)
            setwbFHWOriCountState(wbFHWOriCount - 3)
            setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost - 1.5))
        }
        else if (fireWandRefineState == "grayscale(0%)") {
            setFireWandRefineState("grayscale(100%)")
            setFireWeaponChoiceState("wand")
            setwbFHWSphereCountState(wbFHWSphereCount + 50)
            setwbFHWTailCountState(wbFHWTailCount + 40)
            setwbFHWHornCountState(wbFHWHornCount + 30)
            setwbFHWHeartCountState(wbFHWHeartCount + 10)
            setwbFHWOriCountState(wbFHWOriCount + 3)
            setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost + 1.5))
        }
    }

    function handleFireWandUnbindIncrement(event) {
        setFireWeaponChoiceState("wand");
        if (fireWandUnbindState < event.target.value) {
            if (event.target.value - fireWandUnbindState == 1) {
                setFireWandUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFHWSphereCountState(wbFHWSphereCount - 25)
                    setwbFHWTailCountState(wbFHWTailCount - 18)
                    setwbFHWHeartCountState(wbFHWHeartCount - 5)
                    setwbFHWOriCountState(wbFHWOriCount - 1)
                    setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFHWSphereCountState(wbFHWSphereCount - 175)
                    setwbFHWTailCountState(wbFHWTailCount - 130)
                    setwbFHWHornCountState(wbFHWHornCount - 30)
                    setwbFHWHeartCountState(wbFHWHeartCount - 35)
                    setwbFHWOriCountState(wbFHWOriCount - 8)
                    setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost - 7.5))
                }
            }
        }
        else if (fireWandUnbindState > event.target.value) {
            if (fireWandUnbindState - event.target.value == 1) {
                setFireWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFHWSphereCountState(wbFHWSphereCount + 25)
                    setwbFHWTailCountState(wbFHWTailCount + 18)
                    setwbFHWHeartCountState(wbFHWHeartCount + 5)
                    setwbFHWOriCountState(wbFHWOriCount + 1)
                    setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFHWSphereCountState(wbFHWSphereCount + 175)
                    setwbFHWTailCountState(wbFHWTailCount + 130)
                    setwbFHWHornCountState(wbFHWHornCount + 30)
                    setwbFHWHeartCountState(wbFHWHeartCount + 35)
                    setwbFHWOriCountState(wbFHWOriCount + 8)
                    setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost + 7.5))
                }
            }
        }
    }

    function craftFireStaff() {
        if (fireStaffCraftState == "grayscale(100%)") {
            setFireStaffCraftState("grayscale(0%)")
            setFireWeaponChoiceState("staff")
            setwbFHStSphereCountState(wbFHStSphereCount - 25)
            setwbFHStTailCountState(wbFHStTailCount - 18)
            setwbFHStHeartCountState(wbFHStHeartCount - 5)
            setwbFHStOriCountState(wbFHStOriCount - 1)
            setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost - 1.2))
        }
        else if (fireStaffCraftState == "grayscale(0%)") {
            setFireStaffCraftState("grayscale(100%)")
            setFireWeaponChoiceState("staff")
            setwbFHStSphereCountState(wbFHStSphereCount + 25)
            setwbFHStTailCountState(wbFHStTailCount + 18)
            setwbFHStHeartCountState(wbFHStHeartCount + 5)
            setwbFHStOriCountState(wbFHStOriCount + 1)
            setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost + 1.2))
        }
    }

    function fireStaffWeaponBonus() {
        if (fireStaffWeaponBonusState == "grayscale(100%)") {
            setFireStaffWeaponBonusState("grayscale(0%)")
            setFireWeaponChoiceState("staff")
            setwbFHStSphereCountState(wbFHStSphereCount - 150)
            setwbFHStTailCountState(wbFHStTailCount - 100)
            setwbFHStHornCountState(wbFHStHornCount - 30)
            setwbFHStHeartCountState(wbFHStHeartCount - 10)
            setwbFHStOriCountState(wbFHStOriCount - 30)
            setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost - 10))
        }
        else if (fireStaffWeaponBonusState == "grayscale(0%)") {
            setFireStaffWeaponBonusState("grayscale(100%)")
            setFireWeaponChoiceState("staff")
            setwbFHStSphereCountState(wbFHStSphereCount + 150)
            setwbFHStTailCountState(wbFHStTailCount + 100)
            setwbFHStHornCountState(wbFHStHornCount + 30)
            setwbFHStHeartCountState(wbFHStHeartCount + 10)
            setwbFHStOriCountState(wbFHStOriCount + 30)
            setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost + 10))
        }
    }

    function fireStaffRefine() {
        if (fireStaffRefineState == "grayscale(100%)") {
            setFireStaffRefineState("grayscale(0%)")
            setFireWeaponChoiceState("staff")
            setwbFHStSphereCountState(wbFHStSphereCount - 50)
            setwbFHStTailCountState(wbFHStTailCount - 40)
            setwbFHStHornCountState(wbFHStHornCount - 30)
            setwbFHStHeartCountState(wbFHStHeartCount - 10)
            setwbFHStOriCountState(wbFHStOriCount - 3)
            setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost - 1.5))
        }
        else if (fireStaffRefineState == "grayscale(0%)") {
            setFireStaffRefineState("grayscale(100%)")
            setFireWeaponChoiceState("staff")
            setwbFHStSphereCountState(wbFHStSphereCount + 50)
            setwbFHStTailCountState(wbFHStTailCount + 40)
            setwbFHStHornCountState(wbFHStHornCount + 30)
            setwbFHStHeartCountState(wbFHStHeartCount + 10)
            setwbFHStOriCountState(wbFHStOriCount + 3)
            setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost + 1.5))
        }
    }

    function handleFireStaffUnbindIncrement(event) {
        setFireWeaponChoiceState("staff");
        if (fireStaffUnbindState < event.target.value) {
            if (event.target.value - fireStaffUnbindState == 1) {
                setFireStaffUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFHStSphereCountState(wbFHStSphereCount - 25)
                    setwbFHStTailCountState(wbFHStTailCount - 18)
                    setwbFHStHeartCountState(wbFHStHeartCount - 5)
                    setwbFHStOriCountState(wbFHStOriCount - 1)
                    setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFHStSphereCountState(wbFHStSphereCount - 175)
                    setwbFHStTailCountState(wbFHStTailCount - 130)
                    setwbFHStHornCountState(wbFHStHornCount - 30)
                    setwbFHStHeartCountState(wbFHStHeartCount - 35)
                    setwbFHStOriCountState(wbFHStOriCount - 8)
                    setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost - 7.5))
                }
            }
        }
        else if (fireStaffUnbindState > event.target.value) {
            if (fireStaffUnbindState - event.target.value == 1) {
                setFireStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFHStSphereCountState(wbFHStSphereCount + 25)
                    setwbFHStTailCountState(wbFHStTailCount + 18)
                    setwbFHStHeartCountState(wbFHStHeartCount + 5)
                    setwbFHStOriCountState(wbFHStOriCount + 1)
                    setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFHStSphereCountState(wbFHStSphereCount + 175)
                    setwbFHStTailCountState(wbFHStTailCount + 130)
                    setwbFHStHornCountState(wbFHStHornCount + 30)
                    setwbFHStHeartCountState(wbFHStHeartCount + 35)
                    setwbFHStOriCountState(wbFHStOriCount + 8)
                    setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost + 7.5))
                }
            }
        }
    }

    function craftFireManacaster() {
        if (fireManacasterCraftState == "grayscale(100%)") {
            setFireManacasterCraftState("grayscale(0%)")
            setFireWeaponChoiceState("manacaster")
            setwbFHMSphereCountState(wbFHMSphereCount - 25)
            setwbFHMTailCountState(wbFHMTailCount - 18)
            setwbFHMHeartCountState(wbFHMHeartCount - 5)
            setwbFHMOriCountState(wbFHMOriCount - 1)
            setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost - 1.2))
        }
        else if (fireManacasterCraftState == "grayscale(0%)") {
            setFireManacasterCraftState("grayscale(100%)")
            setFireWeaponChoiceState("manacaster")
            setwbFHMSphereCountState(wbFHMSphereCount + 25)
            setwbFHMTailCountState(wbFHMTailCount + 18)
            setwbFHMHeartCountState(wbFHMHeartCount + 5)
            setwbFHMOriCountState(wbFHMOriCount + 1)
            setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost + 1.2))
        }
    }

    function fireManacasterWeaponBonus() {
        if (fireManacasterWeaponBonusState == "grayscale(100%)") {
            setFireManacasterWeaponBonusState("grayscale(0%)")
            setFireWeaponChoiceState("manacaster")
            setwbFHMSphereCountState(wbFHMSphereCount - 150)
            setwbFHMTailCountState(wbFHMTailCount - 100)
            setwbFHMHornCountState(wbFHMHornCount - 30)
            setwbFHMHeartCountState(wbFHMHeartCount - 10)
            setwbFHMOriCountState(wbFHMOriCount - 30)
            setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost - 10))
        }
        else if (fireManacasterWeaponBonusState == "grayscale(0%)") {
            setFireManacasterWeaponBonusState("grayscale(100%)")
            setFireWeaponChoiceState("manacaster")
            setwbFHMSphereCountState(wbFHMSphereCount + 150)
            setwbFHMTailCountState(wbFHMTailCount + 100)
            setwbFHMHornCountState(wbFHMHornCount + 30)
            setwbFHMHeartCountState(wbFHMHeartCount + 10)
            setwbFHMOriCountState(wbFHMOriCount + 30)
            setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost + 10))
        }
    }

    function fireManacasterRefine() {
        if (fireManacasterRefineState == "grayscale(100%)") {
            setFireManacasterRefineState("grayscale(0%)")
            setFireWeaponChoiceState("manacaster")
            setwbFHMSphereCountState(wbFHMSphereCount - 50)
            setwbFHMTailCountState(wbFHMTailCount - 40)
            setwbFHMHornCountState(wbFHMHornCount - 30)
            setwbFHMHeartCountState(wbFHMHeartCount - 10)
            setwbFHMOriCountState(wbFHMOriCount - 3)
            setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost - 1.5))
        }
        else if (fireManacasterRefineState == "grayscale(0%)") {
            setFireManacasterRefineState("grayscale(100%)")
            setFireWeaponChoiceState("manacaster")
            setwbFHMSphereCountState(wbFHMSphereCount + 50)
            setwbFHMTailCountState(wbFHMTailCount + 40)
            setwbFHMHornCountState(wbFHMHornCount + 30)
            setwbFHMHeartCountState(wbFHMHeartCount + 10)
            setwbFHMOriCountState(wbFHMOriCount + 3)
            setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost + 1.5))
        }
    }

    function handleFireManacasterUnbindIncrement(event) {
        setFireWeaponChoiceState("manacaster");
        if (fireManacasterUnbindState < event.target.value) {
            if (event.target.value - fireManacasterUnbindState == 1) {
                setFireManacasterUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFHMSphereCountState(wbFHMSphereCount - 25)
                    setwbFHMTailCountState(wbFHMTailCount - 18)
                    setwbFHMHeartCountState(wbFHMHeartCount - 5)
                    setwbFHMOriCountState(wbFHMOriCount - 1)
                    setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFHMSphereCountState(wbFHMSphereCount - 175)
                    setwbFHMTailCountState(wbFHMTailCount - 130)
                    setwbFHMHornCountState(wbFHMHornCount - 30)
                    setwbFHMHeartCountState(wbFHMHeartCount - 35)
                    setwbFHMOriCountState(wbFHMOriCount - 8)
                    setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost - 7.5))
                }
            }
        }
        else if (fireManacasterUnbindState > event.target.value) {
            if (fireManacasterUnbindState - event.target.value == 1) {
                setFireManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFHMSphereCountState(wbFHMSphereCount + 25)
                    setwbFHMTailCountState(wbFHMTailCount + 18)
                    setwbFHMHeartCountState(wbFHMHeartCount + 5)
                    setwbFHMOriCountState(wbFHMOriCount + 1)
                    setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFHMSphereCountState(wbFHMSphereCount + 175)
                    setwbFHMTailCountState(wbFHMTailCount + 130)
                    setwbFHMHornCountState(wbFHMHornCount + 30)
                    setwbFHMHeartCountState(wbFHMHeartCount + 35)
                    setwbFHMOriCountState(wbFHMOriCount + 8)
                    setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost + 7.5))
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
                            Fire HDT Weapons
                        </Box>
                    </Flex>
                        <Flex>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTSword} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireSwordCraftState }} onClick={craftFireSword} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Absolute Crimson</Text>
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
                                            onChange={handleFireSwordUnbindIncrement}
                                            defaultValue={fireSwordUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireSwordUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireSwordWeaponBonusState }} onClick={fireSwordWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireSwordRefineState }} onClick={fireSwordRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTBlade} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireBladeCraftState }} onClick={craftFireBlade} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Blinding Conflagaration</Text>
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
                                            onChange={handleFireBladeUnbindIncrement}
                                            defaultValue={fireBladeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireBladeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireBladeWeaponBonusState }} onClick={fireBladeWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireBladeRefineState }} onClick={fireBladeRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTDagger} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireDaggerCraftState }} onClick={craftFireDagger} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Flameruler's Maw</Text>
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
                                            onChange={handleFireDaggerUnbindIncrement}
                                            defaultValue={fireDaggerUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireDaggerUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireDaggerWeaponBonusState }} onClick={fireDaggerWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireDaggerRefineState }} onClick={fireDaggerRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTAxe} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireAxeCraftState }} onClick={craftFireAxe} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Royal Crimson Heat</Text>
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
                                            onChange={handleFireAxeUnbindIncrement}
                                            defaultValue={fireAxeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireAxeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireAxeWeaponBonusState }} onClick={fireAxeWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireAxeRefineState }} onClick={fireAxeRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTLance} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireLanceCraftState }} onClick={craftFireLance} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Pureflame Lance</Text>
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
                                            onChange={handleFireLanceUnbindIncrement}
                                            defaultValue={fireLanceUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireLanceUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireLanceWeaponBonusState }} onClick={fireLanceWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireLanceRefineState }} onClick={fireLanceRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTBow} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireBowCraftState }} onClick={craftFireBow} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Valkyrie's Fire</Text>
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
                                            onChange={handleFireBowUnbindIncrement}
                                            defaultValue={fireBowUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireBowUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireBowWeaponBonusState }} onClick={fireBowWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireBowRefineState }} onClick={fireBowRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTWand} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireWandCraftState }} onClick={craftFireWand} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Infernoblaze</Text>
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
                                            onChange={handleFireWandUnbindIncrement}
                                            defaultValue={fireWandUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireWandUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireWandWeaponBonusState }} onClick={fireWandWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireWandRefineState }} onClick={fireWandRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTStaff} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireStaffCraftState }} onClick={craftFireStaff} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Blazegambol</Text>
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
                                            onChange={handleFireStaffUnbindIncrement}
                                            defaultValue={fireStaffUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireStaffUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireStaffWeaponBonusState }} onClick={fireStaffWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireStaffRefineState }} onClick={fireStaffRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTManacaster} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireManacasterCraftState }} onClick={craftFireManacaster} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Crimson Trigger</Text>
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
                                            onChange={handleFireManacasterUnbindIncrement}
                                            defaultValue={fireManacasterUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireManacasterUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireManacasterWeaponBonusState }} onClick={fireManacasterWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireManacasterRefineState }} onClick={fireManacasterRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                </Box>
                {fireHDTWeaponSelection()}
            </Flex>
            <WeaponTypeNavTabs />
        </div>
    )
}
