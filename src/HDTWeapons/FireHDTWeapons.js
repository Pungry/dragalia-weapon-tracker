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
    const [fireHWeaponChoice, setFireHWeaponChoiceState] = useLocalStorage("fireHWeaponChoice", "sword")

    const [fireHSwordCraftState, setFireHSwordCraftState] = useLocalStorage("fireHSwordCraftState", "grayscale(100%)")
    const [fireHSwordWeaponBonusState, setFireHSwordWeaponBonusState] = useLocalStorage("fireHSwordWeaponBonusState", "grayscale(100%)")
    const [fireHSwordRefineState, setFireHSwordRefineState] = useLocalStorage("fireHSwordRefineState", "grayscale(100%)");
    const [fireHSwordUnbindState, setFireHSwordUnbindState] = useLocalStorage("fireHSwordUnbindState", 0);

    const [wbFHSphereCount, setwbFHSphereCountState] = useLocalStorage("wbFHSphereCount", 500);
    const [wbFHTailCount, setwbFHTailCountState] = useLocalStorage("wbFHTailCount", 360);
    const [wbFHHeartCount, setwbFHHeartCountState] = useLocalStorage("wbFHHeartCount", 80);
    const [wbFHOriCount, setwbFHOriCountState] = useLocalStorage("wbFHOriCount", 46);
    const [wbFHRupeeCost, setwbFHRupeeCost] = useLocalStorage("wbFHRupeeCost", 25);
    const [wbFHHornCount, setwbFHHornCountState] = useLocalStorage("wbFHHornCount", 90);

    const [fireHBladeCraftState, setFireHBladeCraftState] = useLocalStorage("fireHBladeCraftState", "grayscale(100%)")
    const [fireHBladeWeaponBonusState, setFireHBladeWeaponBonusState] = useLocalStorage("fireHBladeWeaponBonusState", "grayscale(100%)")
    const [fireHBladeRefineState, setFireHBladeRefineState] = useLocalStorage("fireHBladeRefineState", "grayscale(100%)");
    const [fireHBladeUnbindState, setFireHBladeUnbindState] = useLocalStorage("fireHBladeUnbindState", 0);

    const [wbFHBlSphereCount, setwbFHBlSphereCountState] = useLocalStorage("wbFHBlSphereCount", 500);
    const [wbFHBlTailCount, setwbFHBlTailCountState] = useLocalStorage("wbFHBlTailCount", 360);
    const [wbFHBlHeartCount, setwbFHBlHeartCountState] = useLocalStorage("wbFHBlHeartCount", 80);
    const [wbFHBlOriCount, setwbFHBlOriCountState] = useLocalStorage("wbFHBlOriCount", 46);
    const [wbFHBlRupeeCost, setwbFHBlRupeeCost] = useLocalStorage("wbFHBlRupeeCost", 25);
    const [wbFHBlHornCount, setwbFHBlHornCountState] = useLocalStorage("wbFHBlHornCount", 90);

    const [fireHDaggerCraftState, setFireHDaggerCraftState] = useLocalStorage("fireHDaggerCraftState", "grayscale(100%)")
    const [fireHDaggerWeaponBonusState, setFireHDaggerWeaponBonusState] = useLocalStorage("fireHDaggerWeaponBonusState", "grayscale(100%)")
    const [fireHDaggerRefineState, setFireHDaggerRefineState] = useLocalStorage("fireHDaggerRefineState", "grayscale(100%)");
    const [fireHDaggerUnbindState, setFireHDaggerUnbindState] = useLocalStorage("fireHDaggerUnbindState", 0);

    const [wbFHDSphereCount, setwbFHDSphereCountState] = useLocalStorage("wbFHDSphereCount", 500);
    const [wbFHDTailCount, setwbFHDTailCountState] = useLocalStorage("wbFHDTailCount", 360);
    const [wbFHDHeartCount, setwbFHDHeartCountState] = useLocalStorage("wbFHDHeartCount", 80);
    const [wbFHDOriCount, setwbFHDOriCountState] = useLocalStorage("wbFHDOriCount", 46);
    const [wbFHDRupeeCost, setwbFHDRupeeCost] = useLocalStorage("wbFHDRupeeCost", 25);
    const [wbFHDHornCount, setwbFHDHornCountState] = useLocalStorage("wbFHDHornCount", 90);

    const [fireHAxeCraftState, setFireHAxeCraftState] = useLocalStorage("fireHAxeCraftState", "grayscale(100%)")
    const [fireHAxeWeaponBonusState, setFireHAxeWeaponBonusState] = useLocalStorage("fireHAxeWeaponBonusState", "grayscale(100%)")
    const [fireHAxeRefineState, setFireHAxeRefineState] = useLocalStorage("fireHAxeRefineState", "grayscale(100%)");
    const [fireHAxeUnbindState, setFireHAxeUnbindState] = useLocalStorage("fireHAxeUnbindState", 0);

    const [wbFHASphereCount, setwbFHASphereCountState] = useLocalStorage("wbFHASphereCount", 500);
    const [wbFHATailCount, setwbFHATailCountState] = useLocalStorage("wbFHATailCount", 360);
    const [wbFHAHeartCount, setwbFHAHeartCountState] = useLocalStorage("wbFHAHeartCount", 80);
    const [wbFHAOriCount, setwbFHAOriCountState] = useLocalStorage("wbFHAOriCount", 46);
    const [wbFHARupeeCost, setwbFHARupeeCost] = useLocalStorage("wbFHARupeeCost", 25);
    const [wbFHAHornCount, setwbFHAHornCountState] = useLocalStorage("wbFHAHornCount", 90);

    const [fireHLanceCraftState, setFireHLanceCraftState] = useLocalStorage("fireHLanceCraftState", "grayscale(100%)")
    const [fireHLanceWeaponBonusState, setFireHLanceWeaponBonusState] = useLocalStorage("fireHLanceWeaponBonusState", "grayscale(100%)")
    const [fireHLanceRefineState, setFireHLanceRefineState] = useLocalStorage("fireHLanceRefineState", "grayscale(100%)");
    const [fireHLanceUnbindState, setFireHLanceUnbindState] = useLocalStorage("fireHLanceUnbindState", 0);

    const [wbFHLSphereCount, setwbFHLSphereCountState] = useLocalStorage("wbFHLSphereCount", 500);
    const [wbFHLTailCount, setwbFHLTailCountState] = useLocalStorage("wbFHLTailCount", 360);
    const [wbFHLHeartCount, setwbFHLHeartCountState] = useLocalStorage("wbFHLHeartCount", 80);
    const [wbFHLOriCount, setwbFHLOriCountState] = useLocalStorage("wbFHLOriCount", 46);
    const [wbFHLRupeeCost, setwbFHLRupeeCost] = useLocalStorage("wbFHLRupeeCost", 25);
    const [wbFHLHornCount, setwbFHLHornCountState] = useLocalStorage("wbFHLHornCount", 90);

    const [fireHBowCraftState, setFireHBowCraftState] = useLocalStorage("fireHBowCraftState", "grayscale(100%)")
    const [fireHBowWeaponBonusState, setFireHBowWeaponBonusState] = useLocalStorage("fireHBowWeaponBonusState", "grayscale(100%)")
    const [fireHBowRefineState, setFireHBowRefineState] = useLocalStorage("fireHBowRefineState", "grayscale(100%)");
    const [fireHBowUnbindState, setFireHBowUnbindState] = useLocalStorage("fireHBowUnbindState", 0);

    const [wbFHBoSphereCount, setwbFHBoSphereCountState] = useLocalStorage("wbFHBoSphereCount", 500);
    const [wbFHBoTailCount, setwbFHBoTailCountState] = useLocalStorage("wbFHBoTailCount", 360);
    const [wbFHBoHeartCount, setwbFHBoHeartCountState] = useLocalStorage("wbFHBoHeartCount", 80);
    const [wbFHBoOriCount, setwbFHBoOriCountState] = useLocalStorage("wbFHBoOriCount", 46);
    const [wbFHBoRupeeCost, setwbFHBoRupeeCost] = useLocalStorage("wbFHBoRupeeCost", 25);
    const [wbFHBoHornCount, setwbFHBoHornCountState] = useLocalStorage("wbFHBoHornCount", 90);

    const [fireHWandCraftState, setFireHWandCraftState] = useLocalStorage("fireHWandCraftState", "grayscale(100%)")
    const [fireHWandWeaponBonusState, setFireHWandWeaponBonusState] = useLocalStorage("fireHWandWeaponBonusState", "grayscale(100%)")
    const [fireHWandRefineState, setFireHWandRefineState] = useLocalStorage("fireHWandRefineState", "grayscale(100%)");
    const [fireHWandUnbindState, setFireHWandUnbindState] = useLocalStorage("fireHWandUnbindState", 0);

    const [wbFHWSphereCount, setwbFHWSphereCountState] = useLocalStorage("wbFHWSphereCount", 500);
    const [wbFHWTailCount, setwbFHWTailCountState] = useLocalStorage("wbFHWTailCount", 360);
    const [wbFHWHeartCount, setwbFHWHeartCountState] = useLocalStorage("wbFHWHeartCount", 80);
    const [wbFHWOriCount, setwbFHWOriCountState] = useLocalStorage("wbFHWOriCount", 46);
    const [wbFHWRupeeCost, setwbFHWRupeeCost] = useLocalStorage("wbFHWRupeeCost", 25);
    const [wbFHWHornCount, setwbFHWHornCountState] = useLocalStorage("wbFHWHornCount", 90);

    const [fireHStaffCraftState, setFireHStaffCraftState] = useLocalStorage("fireHStaffCraftState", "grayscale(100%)")
    const [fireHStaffWeaponBonusState, setFireHStaffWeaponBonusState] = useLocalStorage("fireHStaffWeaponBonusState", "grayscale(100%)")
    const [fireHStaffRefineState, setFireHStaffRefineState] = useLocalStorage("fireHStaffRefineState", "grayscale(100%)");
    const [fireHStaffUnbindState, setFireHStaffUnbindState] = useLocalStorage("fireHStaffUnbindState", 0);

    const [wbFHStSphereCount, setwbFHStSphereCountState] = useLocalStorage("wbFHStSphereCount", 500);
    const [wbFHStTailCount, setwbFHStTailCountState] = useLocalStorage("wbFHStTailCount", 360);
    const [wbFHStHeartCount, setwbFHStHeartCountState] = useLocalStorage("wbFHStHeartCount", 80);
    const [wbFHStOriCount, setwbFHStOriCountState] = useLocalStorage("wbFHStOriCount", 46);
    const [wbFHStRupeeCost, setwbFHStRupeeCost] = useLocalStorage("wbFHStRupeeCost", 25);
    const [wbFHStHornCount, setwbFHStHornCountState] = useLocalStorage("wbFHStHornCount", 90);

    const [fireHManacasterCraftState, setFireHManacasterCraftState] = useLocalStorage("fireHManacasterCraftState", "grayscale(100%)")
    const [fireHManacasterWeaponBonusState, setFireHManacasterWeaponBonusState] = useLocalStorage("fireHManacasterWeaponBonusState", "grayscale(100%)")
    const [fireHManacasterRefineState, setFireHManacasterRefineState] = useLocalStorage("fireHManacasterRefineState", "grayscale(100%)");
    const [fireHManacasterUnbindState, setFireHManacasterUnbindState] = useLocalStorage("fireHManacasterUnbindState", 0);

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
        if (fireHWeaponChoice == "sword") {
            return <FireHDTSwordCost wbFHSphereCount={wbFHSphereCount} wbFHTailCount={wbFHTailCount} wbFHHeartCount={wbFHHeartCount} wbFHOriCount={wbFHOriCount} wbFHRupeeCost={wbFHRupeeCost.toFixed(1)} wbFHHornCount={wbFHHornCount} />
        }
        if (fireHWeaponChoice == "blade") {
            return <FireHDTBladeCost wbFHBlSphereCount={wbFHBlSphereCount} wbFHBlTailCount={wbFHBlTailCount} wbFHBlHeartCount={wbFHBlHeartCount} wbFHBlOriCount={wbFHBlOriCount} wbFHBlRupeeCost={wbFHBlRupeeCost.toFixed(1)} wbFHBlHornCount={wbFHBlHornCount} />
        }
        if (fireHWeaponChoice == "dagger") {
            return <FireHDTDaggerCost wbFHDSphereCount={wbFHDSphereCount} wbFHDTailCount={wbFHDTailCount} wbFHDHeartCount={wbFHDHeartCount} wbFHDOriCount={wbFHDOriCount} wbFHDRupeeCost={wbFHDRupeeCost.toFixed(1)} wbFHDHornCount={wbFHDHornCount} />
        }
        if (fireHWeaponChoice == "axe") {
            return <FireHDTAxeCost wbFHASphereCount={wbFHASphereCount} wbFHATailCount={wbFHATailCount} wbFHAHeartCount={wbFHAHeartCount} wbFHAOriCount={wbFHAOriCount} wbFHARupeeCost={wbFHARupeeCost.toFixed(1)} wbFHAHornCount={wbFHAHornCount} />
        }
        if (fireHWeaponChoice == "lance") {
            return <FireHDTLanceCost wbFHLSphereCount={wbFHLSphereCount} wbFHLTailCount={wbFHLTailCount} wbFHLHeartCount={wbFHLHeartCount} wbFHLOriCount={wbFHLOriCount} wbFHLRupeeCost={wbFHLRupeeCost.toFixed(1)} wbFHLHornCount={wbFHLHornCount} />
        }
        if (fireHWeaponChoice == "bow") {
            return <FireHDTBowCost wbFHBoSphereCount={wbFHBoSphereCount} wbFHBoTailCount={wbFHBoTailCount} wbFHBoHeartCount={wbFHBoHeartCount} wbFHBoOriCount={wbFHBoOriCount} wbFHBoRupeeCost={wbFHBoRupeeCost.toFixed(1)} wbFHBoHornCount={wbFHBoHornCount} />
        }
        if (fireHWeaponChoice == "wand") {
            return <FireHDTWandCost wbFHWSphereCount={wbFHWSphereCount} wbFHWTailCount={wbFHWTailCount} wbFHWHeartCount={wbFHWHeartCount} wbFHWOriCount={wbFHWOriCount} wbFHWRupeeCost={wbFHWRupeeCost.toFixed(1)} wbFHWHornCount={wbFHWHornCount} />
        }
        if (fireHWeaponChoice == "staff") {
            return <FireHDTStaffCost wbFHStSphereCount={wbFHStSphereCount} wbFHStTailCount={wbFHStTailCount} wbFHStHeartCount={wbFHStHeartCount} wbFHStOriCount={wbFHStOriCount} wbFHStRupeeCost={wbFHStRupeeCost.toFixed(1)} wbFHStHornCount={wbFHStHornCount} />
        }
        if (fireHWeaponChoice == "manacaster") {
            return <FireHDTManacasterCost wbFHMSphereCount={wbFHMSphereCount} wbFHMTailCount={wbFHMTailCount} wbFHMHeartCount={wbFHMHeartCount} wbFHMOriCount={wbFHMOriCount} wbFHMRupeeCost={wbFHMRupeeCost.toFixed(1)} wbFHMHornCount={wbFHMHornCount} />
        }
    }

    function craftFireSword() {
        if (fireHSwordCraftState == "grayscale(100%)") {
            setFireHSwordCraftState("grayscale(0%)")
            setFireHWeaponChoiceState("sword")
            setwbFHSphereCountState(wbFHSphereCount - 25)
            setwbFHTailCountState(wbFHTailCount - 18)
            setwbFHHeartCountState(wbFHHeartCount - 5)
            setwbFHOriCountState(wbFHOriCount - 1)
            setwbFHRupeeCost(parseFloat(wbFHRupeeCost - 1.2))
        }
        else if (fireHSwordCraftState == "grayscale(0%)") {
            setFireHSwordCraftState("grayscale(100%)")
            setFireHWeaponChoiceState("sword")
            setwbFHSphereCountState(wbFHSphereCount + 25)
            setwbFHTailCountState(wbFHTailCount + 18)
            setwbFHHeartCountState(wbFHHeartCount + 5)
            setwbFHOriCountState(wbFHOriCount + 1)
            setwbFHRupeeCost(parseFloat(wbFHRupeeCost + 1.2))
        }
    }

    function fireSwordWeaponBonus() {
        if (fireHSwordWeaponBonusState == "grayscale(100%)") {
            setFireHSwordWeaponBonusState("grayscale(0%)")
            setFireHWeaponChoiceState("sword")
            setwbFHSphereCountState(wbFHSphereCount - 150)
            setwbFHTailCountState(wbFHTailCount - 100)
            setwbFHHornCountState(wbFHHornCount - 30)
            setwbFHHeartCountState(wbFHHeartCount - 10)
            setwbFHOriCountState(wbFHOriCount - 30)
            setwbFHRupeeCost(parseFloat(wbFHRupeeCost - 10))
        }
        else if (fireHSwordWeaponBonusState == "grayscale(0%)") {
            setFireHSwordWeaponBonusState("grayscale(100%)")
            setFireHWeaponChoiceState("sword")
            setwbFHSphereCountState(wbFHSphereCount + 150)
            setwbFHTailCountState(wbFHTailCount + 100)
            setwbFHHornCountState(wbFHHornCount + 30)
            setwbFHHeartCountState(wbFHHeartCount + 10)
            setwbFHOriCountState(wbFHOriCount + 30)
            setwbFHRupeeCost(parseFloat(wbFHRupeeCost + 10))
        }
    }

    function fireSwordRefine() {
        if (fireHSwordRefineState == "grayscale(100%)") {
            setFireHSwordRefineState("grayscale(0%)")
            setFireHWeaponChoiceState("sword")
            setwbFHSphereCountState(wbFHSphereCount - 50)
            setwbFHTailCountState(wbFHTailCount - 40)
            setwbFHHornCountState(wbFHHornCount - 30)
            setwbFHHeartCountState(wbFHHeartCount - 10)
            setwbFHOriCountState(wbFHOriCount - 3)
            setwbFHRupeeCost(parseFloat(wbFHRupeeCost - 1.5))
        }
        else if (fireHSwordRefineState == "grayscale(0%)") {
            setFireHSwordRefineState("grayscale(100%)")
            setFireHWeaponChoiceState("sword")
            setwbFHSphereCountState(wbFHSphereCount + 50)
            setwbFHTailCountState(wbFHTailCount + 40)
            setwbFHHornCountState(wbFHHornCount + 30)
            setwbFHHeartCountState(wbFHHeartCount + 10)
            setwbFHOriCountState(wbFHOriCount + 3)
            setwbFHRupeeCost(parseFloat(wbFHRupeeCost + 1.5))
        }
    }

    function handleFireSwordUnbindIncrement(event) {
        setFireHWeaponChoiceState("sword");
        if (fireHSwordUnbindState < event.target.value) {
            if (event.target.value - fireHSwordUnbindState == 1) {
                setFireHSwordUnbindState(event.target.value);
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
        else if (fireHSwordUnbindState > event.target.value) {
            if (fireHSwordUnbindState - event.target.value == 1) {
                setFireHSwordUnbindState(event.target.value);
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
        if (fireHBladeCraftState == "grayscale(100%)") {
            setFireHBladeCraftState("grayscale(0%)")
            setFireHWeaponChoiceState("blade")
            setwbFHBlSphereCountState(wbFHBlSphereCount - 25)
            setwbFHBlTailCountState(wbFHBlTailCount - 18)
            setwbFHBlHeartCountState(wbFHBlHeartCount - 5)
            setwbFHBlOriCountState(wbFHBlOriCount - 1)
            setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost - 1.2))
        }
        else if (fireHBladeCraftState == "grayscale(0%)") {
            setFireHBladeCraftState("grayscale(100%)")
            setFireHWeaponChoiceState("blade")
            setwbFHBlSphereCountState(wbFHBlSphereCount + 25)
            setwbFHBlTailCountState(wbFHBlTailCount + 18)
            setwbFHBlHeartCountState(wbFHBlHeartCount + 5)
            setwbFHBlOriCountState(wbFHBlOriCount + 1)
            setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost + 1.2))
        }
    }

    function fireBladeWeaponBonus() {
        if (fireHBladeWeaponBonusState == "grayscale(100%)") {
            setFireHBladeWeaponBonusState("grayscale(0%)")
            setFireHWeaponChoiceState("blade")
            setwbFHBlSphereCountState(wbFHBlSphereCount - 150)
            setwbFHBlTailCountState(wbFHBlTailCount - 100)
            setwbFHBlHornCountState(wbFHBlHornCount - 30)
            setwbFHBlHeartCountState(wbFHBlHeartCount - 10)
            setwbFHBlOriCountState(wbFHBlOriCount - 30)
            setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost - 10))
        }
        else if (fireHBladeWeaponBonusState == "grayscale(0%)") {
            setFireHBladeWeaponBonusState("grayscale(100%)")
            setFireHWeaponChoiceState("blade")
            setwbFHBlSphereCountState(wbFHBlSphereCount + 150)
            setwbFHBlTailCountState(wbFHBlTailCount + 100)
            setwbFHBlHornCountState(wbFHBlHornCount + 30)
            setwbFHBlHeartCountState(wbFHBlHeartCount + 10)
            setwbFHBlOriCountState(wbFHBlOriCount + 30)
            setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost + 10))
        }
    }

    function fireBladeRefine() {
        if (fireHBladeRefineState == "grayscale(100%)") {
            setFireHBladeRefineState("grayscale(0%)")
            setFireHWeaponChoiceState("blade")
            setwbFHBlSphereCountState(wbFHBlSphereCount - 50)
            setwbFHBlTailCountState(wbFHBlTailCount - 40)
            setwbFHBlHornCountState(wbFHBlHornCount - 30)
            setwbFHBlHeartCountState(wbFHBlHeartCount - 10)
            setwbFHBlOriCountState(wbFHBlOriCount - 3)
            setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost - 1.5))
        }
        else if (fireHBladeRefineState == "grayscale(0%)") {
            setFireHBladeRefineState("grayscale(100%)")
            setFireHWeaponChoiceState("blade")
            setwbFHBlSphereCountState(wbFHBlSphereCount + 50)
            setwbFHBlTailCountState(wbFHBlTailCount + 40)
            setwbFHBlHornCountState(wbFHBlHornCount + 30)
            setwbFHBlHeartCountState(wbFHBlHeartCount + 10)
            setwbFHBlOriCountState(wbFHBlOriCount + 3)
            setwbFHBlRupeeCost(parseFloat(wbFHBlRupeeCost + 1.5))
        }
    }

    function handleFireBladeUnbindIncrement(event) {
        setFireHWeaponChoiceState("blade");
        if (fireHBladeUnbindState < event.target.value) {
            if (event.target.value - fireHBladeUnbindState == 1) {
                setFireHBladeUnbindState(event.target.value);
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
        else if (fireHBladeUnbindState > event.target.value) {
            if (fireHBladeUnbindState - event.target.value == 1) {
                setFireHBladeUnbindState(event.target.value);
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
        if (fireHDaggerCraftState == "grayscale(100%)") {
            setFireHDaggerCraftState("grayscale(0%)")
            setFireHWeaponChoiceState("dagger")
            setwbFHDSphereCountState(wbFHDSphereCount - 25)
            setwbFHDTailCountState(wbFHDTailCount - 18)
            setwbFHDHeartCountState(wbFHDHeartCount - 5)
            setwbFHDOriCountState(wbFHDOriCount - 1)
            setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost - 1.2))
        }
        else if (fireHDaggerCraftState == "grayscale(0%)") {
            setFireHDaggerCraftState("grayscale(100%)")
            setFireHWeaponChoiceState("dagger")
            setwbFHDSphereCountState(wbFHDSphereCount + 25)
            setwbFHDTailCountState(wbFHDTailCount + 18)
            setwbFHDHeartCountState(wbFHDHeartCount + 5)
            setwbFHDOriCountState(wbFHDOriCount + 1)
            setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost + 1.2))
        }
    }

    function fireDaggerWeaponBonus() {
        if (fireHDaggerWeaponBonusState == "grayscale(100%)") {
            setFireHDaggerWeaponBonusState("grayscale(0%)")
            setFireHWeaponChoiceState("dagger")
            setwbFHDSphereCountState(wbFHDSphereCount - 150)
            setwbFHDTailCountState(wbFHDTailCount - 100)
            setwbFHDHornCountState(wbFHDHornCount - 30)
            setwbFHDHeartCountState(wbFHDHeartCount - 10)
            setwbFHDOriCountState(wbFHDOriCount - 30)
            setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost - 10))
        }
        else if (fireHDaggerWeaponBonusState == "grayscale(0%)") {
            setFireHDaggerWeaponBonusState("grayscale(100%)")
            setFireHWeaponChoiceState("dagger")
            setwbFHDSphereCountState(wbFHDSphereCount + 150)
            setwbFHDTailCountState(wbFHDTailCount + 100)
            setwbFHDHornCountState(wbFHDHornCount + 30)
            setwbFHDHeartCountState(wbFHDHeartCount + 10)
            setwbFHDOriCountState(wbFHDOriCount + 30)
            setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost + 10))
        }
    }

    function fireDaggerRefine() {
        if (fireHDaggerRefineState == "grayscale(100%)") {
            setFireHDaggerRefineState("grayscale(0%)")
            setFireHWeaponChoiceState("dagger")
            setwbFHDSphereCountState(wbFHDSphereCount - 50)
            setwbFHDTailCountState(wbFHDTailCount - 40)
            setwbFHDHornCountState(wbFHDHornCount - 30)
            setwbFHDHeartCountState(wbFHDHeartCount - 10)
            setwbFHDOriCountState(wbFHDOriCount - 3)
            setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost - 1.5))
        }
        else if (fireHDaggerRefineState == "grayscale(0%)") {
            setFireHDaggerRefineState("grayscale(100%)")
            setFireHWeaponChoiceState("dagger")
            setwbFHDSphereCountState(wbFHDSphereCount + 50)
            setwbFHDTailCountState(wbFHDTailCount + 40)
            setwbFHDHornCountState(wbFHDHornCount + 30)
            setwbFHDHeartCountState(wbFHDHeartCount + 10)
            setwbFHDOriCountState(wbFHDOriCount + 3)
            setwbFHDRupeeCost(parseFloat(wbFHDRupeeCost + 1.5))
        }
    }

    function handleFireDaggerUnbindIncrement(event) {
        setFireHWeaponChoiceState("dagger");
        if (fireHDaggerUnbindState < event.target.value) {
            if (event.target.value - fireHDaggerUnbindState == 1) {
                setFireHDaggerUnbindState(event.target.value);
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
        else if (fireHDaggerUnbindState > event.target.value) {
            if (fireHDaggerUnbindState - event.target.value == 1) {
                setFireHDaggerUnbindState(event.target.value);
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
        if (fireHAxeCraftState == "grayscale(100%)") {
            setFireHAxeCraftState("grayscale(0%)")
            setFireHWeaponChoiceState("axe")
            setwbFHASphereCountState(wbFHASphereCount - 25)
            setwbFHATailCountState(wbFHATailCount - 18)
            setwbFHAHeartCountState(wbFHAHeartCount - 5)
            setwbFHAOriCountState(wbFHAOriCount - 1)
            setwbFHARupeeCost(parseFloat(wbFHARupeeCost - 1.2))
        }
        else if (fireHAxeCraftState == "grayscale(0%)") {
            setFireHAxeCraftState("grayscale(100%)")
            setFireHWeaponChoiceState("axe")
            setwbFHASphereCountState(wbFHASphereCount + 25)
            setwbFHATailCountState(wbFHATailCount + 18)
            setwbFHAHeartCountState(wbFHAHeartCount + 5)
            setwbFHAOriCountState(wbFHAOriCount + 1)
            setwbFHARupeeCost(parseFloat(wbFHARupeeCost + 1.2))
        }
    }

    function fireAxeWeaponBonus() {
        if (fireHAxeWeaponBonusState == "grayscale(100%)") {
            setFireHAxeWeaponBonusState("grayscale(0%)")
            setFireHWeaponChoiceState("axe")
            setwbFHASphereCountState(wbFHASphereCount - 150)
            setwbFHATailCountState(wbFHATailCount - 100)
            setwbFHAHornCountState(wbFHAHornCount - 30)
            setwbFHAHeartCountState(wbFHAHeartCount - 10)
            setwbFHAOriCountState(wbFHAOriCount - 30)
            setwbFHARupeeCost(parseFloat(wbFHARupeeCost - 10))
        }
        else if (fireHAxeWeaponBonusState == "grayscale(0%)") {
            setFireHAxeWeaponBonusState("grayscale(100%)")
            setFireHWeaponChoiceState("axe")
            setwbFHASphereCountState(wbFHASphereCount + 150)
            setwbFHATailCountState(wbFHATailCount + 100)
            setwbFHAHornCountState(wbFHAHornCount + 30)
            setwbFHAHeartCountState(wbFHAHeartCount + 10)
            setwbFHAOriCountState(wbFHAOriCount + 30)
            setwbFHARupeeCost(parseFloat(wbFHARupeeCost + 10))
        }
    }

    function fireAxeRefine() {
        if (fireHAxeRefineState == "grayscale(100%)") {
            setFireHAxeRefineState("grayscale(0%)")
            setFireHWeaponChoiceState("axe")
            setwbFHASphereCountState(wbFHASphereCount - 50)
            setwbFHATailCountState(wbFHATailCount - 40)
            setwbFHAHornCountState(wbFHAHornCount - 30)
            setwbFHAHeartCountState(wbFHAHeartCount - 10)
            setwbFHAOriCountState(wbFHAOriCount - 3)
            setwbFHARupeeCost(parseFloat(wbFHARupeeCost - 1.5))
        }
        else if (fireHAxeRefineState == "grayscale(0%)") {
            setFireHAxeRefineState("grayscale(100%)")
            setFireHWeaponChoiceState("axe")
            setwbFHASphereCountState(wbFHASphereCount + 50)
            setwbFHATailCountState(wbFHATailCount + 40)
            setwbFHAHornCountState(wbFHAHornCount + 30)
            setwbFHAHeartCountState(wbFHAHeartCount + 10)
            setwbFHAOriCountState(wbFHAOriCount + 3)
            setwbFHARupeeCost(parseFloat(wbFHARupeeCost + 1.5))
        }
    }

    function handleFireAxeUnbindIncrement(event) {
        setFireHWeaponChoiceState("axe");
        if (fireHAxeUnbindState < event.target.value) {
            if (event.target.value - fireHAxeUnbindState == 1) {
                setFireHAxeUnbindState(event.target.value);
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
        else if (fireHAxeUnbindState > event.target.value) {
            if (fireHAxeUnbindState - event.target.value == 1) {
                setFireHAxeUnbindState(event.target.value);
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
        if (fireHLanceCraftState == "grayscale(100%)") {
            setFireHLanceCraftState("grayscale(0%)")
            setFireHWeaponChoiceState("lance")
            setwbFHLSphereCountState(wbFHLSphereCount - 25)
            setwbFHLTailCountState(wbFHLTailCount - 18)
            setwbFHLHeartCountState(wbFHLHeartCount - 5)
            setwbFHLOriCountState(wbFHLOriCount - 1)
            setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost - 1.2))
        }
        else if (fireHLanceCraftState == "grayscale(0%)") {
            setFireHLanceCraftState("grayscale(100%)")
            setFireHWeaponChoiceState("lance")
            setwbFHLSphereCountState(wbFHLSphereCount + 25)
            setwbFHLTailCountState(wbFHLTailCount + 18)
            setwbFHLHeartCountState(wbFHLHeartCount + 5)
            setwbFHLOriCountState(wbFHLOriCount + 1)
            setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost + 1.2))
        }
    }

    function fireLanceWeaponBonus() {
        if (fireHLanceWeaponBonusState == "grayscale(100%)") {
            setFireHLanceWeaponBonusState("grayscale(0%)")
            setFireHWeaponChoiceState("lance")
            setwbFHLSphereCountState(wbFHLSphereCount - 150)
            setwbFHLTailCountState(wbFHLTailCount - 100)
            setwbFHLHornCountState(wbFHLHornCount - 30)
            setwbFHLHeartCountState(wbFHLHeartCount - 10)
            setwbFHLOriCountState(wbFHLOriCount - 30)
            setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost - 10))
        }
        else if (fireHLanceWeaponBonusState == "grayscale(0%)") {
            setFireHLanceWeaponBonusState("grayscale(100%)")
            setFireHWeaponChoiceState("lance")
            setwbFHLSphereCountState(wbFHLSphereCount + 150)
            setwbFHLTailCountState(wbFHLTailCount + 100)
            setwbFHLHornCountState(wbFHLHornCount + 30)
            setwbFHLHeartCountState(wbFHLHeartCount + 10)
            setwbFHLOriCountState(wbFHLOriCount + 30)
            setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost + 10))
        }
    }

    function fireLanceRefine() {
        if (fireHLanceRefineState == "grayscale(100%)") {
            setFireHLanceRefineState("grayscale(0%)")
            setFireHWeaponChoiceState("lance")
            setwbFHLSphereCountState(wbFHLSphereCount - 50)
            setwbFHLTailCountState(wbFHLTailCount - 40)
            setwbFHLHornCountState(wbFHLHornCount - 30)
            setwbFHLHeartCountState(wbFHLHeartCount - 10)
            setwbFHLOriCountState(wbFHLOriCount - 3)
            setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost - 1.5))
        }
        else if (fireHLanceRefineState == "grayscale(0%)") {
            setFireHLanceRefineState("grayscale(100%)")
            setFireHWeaponChoiceState("lance")
            setwbFHLSphereCountState(wbFHLSphereCount + 50)
            setwbFHLTailCountState(wbFHLTailCount + 40)
            setwbFHLHornCountState(wbFHLHornCount + 30)
            setwbFHLHeartCountState(wbFHLHeartCount + 10)
            setwbFHLOriCountState(wbFHLOriCount + 3)
            setwbFHLRupeeCost(parseFloat(wbFHLRupeeCost + 1.5))
        }
    }

    function handleFireLanceUnbindIncrement(event) {
        setFireHWeaponChoiceState("lance");
        if (fireHLanceUnbindState < event.target.value) {
            if (event.target.value - fireHLanceUnbindState == 1) {
                setFireHLanceUnbindState(event.target.value);
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
        else if (fireHLanceUnbindState > event.target.value) {
            if (fireHLanceUnbindState - event.target.value == 1) {
                setFireHLanceUnbindState(event.target.value);
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
        if (fireHBowCraftState == "grayscale(100%)") {
            setFireHBowCraftState("grayscale(0%)")
            setFireHWeaponChoiceState("bow")
            setwbFHBoSphereCountState(wbFHBoSphereCount - 25)
            setwbFHBoTailCountState(wbFHBoTailCount - 18)
            setwbFHBoHeartCountState(wbFHBoHeartCount - 5)
            setwbFHBoOriCountState(wbFHBoOriCount - 1)
            setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost - 1.2))
        }
        else if (fireHBowCraftState == "grayscale(0%)") {
            setFireHBowCraftState("grayscale(100%)")
            setFireHWeaponChoiceState("bow")
            setwbFHBoSphereCountState(wbFHBoSphereCount + 25)
            setwbFHBoTailCountState(wbFHBoTailCount + 18)
            setwbFHBoHeartCountState(wbFHBoHeartCount + 5)
            setwbFHBoOriCountState(wbFHBoOriCount + 1)
            setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost + 1.2))
        }
    }

    function fireBowWeaponBonus() {
        if (fireHBowWeaponBonusState == "grayscale(100%)") {
            setFireHBowWeaponBonusState("grayscale(0%)")
            setFireHWeaponChoiceState("bow")
            setwbFHBoSphereCountState(wbFHBoSphereCount - 150)
            setwbFHBoTailCountState(wbFHBoTailCount - 100)
            setwbFHBoHornCountState(wbFHBoHornCount - 30)
            setwbFHBoHeartCountState(wbFHBoHeartCount - 10)
            setwbFHBoOriCountState(wbFHBoOriCount - 30)
            setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost - 10))
        }
        else if (fireHBowWeaponBonusState == "grayscale(0%)") {
            setFireHBowWeaponBonusState("grayscale(100%)")
            setFireHWeaponChoiceState("bow")
            setwbFHBoSphereCountState(wbFHBoSphereCount + 150)
            setwbFHBoTailCountState(wbFHBoTailCount + 100)
            setwbFHBoHornCountState(wbFHBoHornCount + 30)
            setwbFHBoHeartCountState(wbFHBoHeartCount + 10)
            setwbFHBoOriCountState(wbFHBoOriCount + 30)
            setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost + 10))
        }
    }

    function fireBowRefine() {
        if (fireHBowRefineState == "grayscale(100%)") {
            setFireHBowRefineState("grayscale(0%)")
            setFireHWeaponChoiceState("bow")
            setwbFHBoSphereCountState(wbFHBoSphereCount - 50)
            setwbFHBoTailCountState(wbFHBoTailCount - 40)
            setwbFHBoHornCountState(wbFHBoHornCount - 30)
            setwbFHBoHeartCountState(wbFHBoHeartCount - 10)
            setwbFHBoOriCountState(wbFHBoOriCount - 3)
            setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost - 1.5))
        }
        else if (fireHBowRefineState == "grayscale(0%)") {
            setFireHBowRefineState("grayscale(100%)")
            setFireHWeaponChoiceState("bow")
            setwbFHBoSphereCountState(wbFHBoSphereCount + 50)
            setwbFHBoTailCountState(wbFHBoTailCount + 40)
            setwbFHBoHornCountState(wbFHBoHornCount + 30)
            setwbFHBoHeartCountState(wbFHBoHeartCount + 10)
            setwbFHBoOriCountState(wbFHBoOriCount + 3)
            setwbFHBoRupeeCost(parseFloat(wbFHBoRupeeCost + 1.5))
        }
    }

    function handleFireBowUnbindIncrement(event) {
        setFireHWeaponChoiceState("bow");
        if (fireHBowUnbindState < event.target.value) {
            if (event.target.value - fireHBowUnbindState == 1) {
                setFireHBowUnbindState(event.target.value);
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
        else if (fireHBowUnbindState > event.target.value) {
            if (fireHBowUnbindState - event.target.value == 1) {
                setFireHBowUnbindState(event.target.value);
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
        if (fireHWandCraftState == "grayscale(100%)") {
            setFireHWandCraftState("grayscale(0%)")
            setFireHWeaponChoiceState("wand")
            setwbFHWSphereCountState(wbFHWSphereCount - 25)
            setwbFHWTailCountState(wbFHWTailCount - 18)
            setwbFHWHeartCountState(wbFHWHeartCount - 5)
            setwbFHWOriCountState(wbFHWOriCount - 1)
            setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost - 1.2))
        }
        else if (fireHWandCraftState == "grayscale(0%)") {
            setFireHWandCraftState("grayscale(100%)")
            setFireHWeaponChoiceState("wand")
            setwbFHWSphereCountState(wbFHWSphereCount + 25)
            setwbFHWTailCountState(wbFHWTailCount + 18)
            setwbFHWHeartCountState(wbFHWHeartCount + 5)
            setwbFHWOriCountState(wbFHWOriCount + 1)
            setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost + 1.2))
        }
    }

    function fireWandWeaponBonus() {
        if (fireHWandWeaponBonusState == "grayscale(100%)") {
            setFireHWandWeaponBonusState("grayscale(0%)")
            setFireHWeaponChoiceState("wand")
            setwbFHWSphereCountState(wbFHWSphereCount - 150)
            setwbFHWTailCountState(wbFHWTailCount - 100)
            setwbFHWHornCountState(wbFHWHornCount - 30)
            setwbFHWHeartCountState(wbFHWHeartCount - 10)
            setwbFHWOriCountState(wbFHWOriCount - 30)
            setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost - 10))
        }
        else if (fireHWandWeaponBonusState == "grayscale(0%)") {
            setFireHWandWeaponBonusState("grayscale(100%)")
            setFireHWeaponChoiceState("wand")
            setwbFHWSphereCountState(wbFHWSphereCount + 150)
            setwbFHWTailCountState(wbFHWTailCount + 100)
            setwbFHWHornCountState(wbFHWHornCount + 30)
            setwbFHWHeartCountState(wbFHWHeartCount + 10)
            setwbFHWOriCountState(wbFHWOriCount + 30)
            setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost + 10))
        }
    }

    function fireWandRefine() {
        if (fireHWandRefineState == "grayscale(100%)") {
            setFireHWandRefineState("grayscale(0%)")
            setFireHWeaponChoiceState("wand")
            setwbFHWSphereCountState(wbFHWSphereCount - 50)
            setwbFHWTailCountState(wbFHWTailCount - 40)
            setwbFHWHornCountState(wbFHWHornCount - 30)
            setwbFHWHeartCountState(wbFHWHeartCount - 10)
            setwbFHWOriCountState(wbFHWOriCount - 3)
            setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost - 1.5))
        }
        else if (fireHWandRefineState == "grayscale(0%)") {
            setFireHWandRefineState("grayscale(100%)")
            setFireHWeaponChoiceState("wand")
            setwbFHWSphereCountState(wbFHWSphereCount + 50)
            setwbFHWTailCountState(wbFHWTailCount + 40)
            setwbFHWHornCountState(wbFHWHornCount + 30)
            setwbFHWHeartCountState(wbFHWHeartCount + 10)
            setwbFHWOriCountState(wbFHWOriCount + 3)
            setwbFHWRupeeCost(parseFloat(wbFHWRupeeCost + 1.5))
        }
    }

    function handleFireWandUnbindIncrement(event) {
        setFireHWeaponChoiceState("wand");
        if (fireHWandUnbindState < event.target.value) {
            if (event.target.value - fireHWandUnbindState == 1) {
                setFireHWandUnbindState(event.target.value);
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
        else if (fireHWandUnbindState > event.target.value) {
            if (fireHWandUnbindState - event.target.value == 1) {
                setFireHWandUnbindState(event.target.value);
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
        if (fireHStaffCraftState == "grayscale(100%)") {
            setFireHStaffCraftState("grayscale(0%)")
            setFireHWeaponChoiceState("staff")
            setwbFHStSphereCountState(wbFHStSphereCount - 25)
            setwbFHStTailCountState(wbFHStTailCount - 18)
            setwbFHStHeartCountState(wbFHStHeartCount - 5)
            setwbFHStOriCountState(wbFHStOriCount - 1)
            setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost - 1.2))
        }
        else if (fireHStaffCraftState == "grayscale(0%)") {
            setFireHStaffCraftState("grayscale(100%)")
            setFireHWeaponChoiceState("staff")
            setwbFHStSphereCountState(wbFHStSphereCount + 25)
            setwbFHStTailCountState(wbFHStTailCount + 18)
            setwbFHStHeartCountState(wbFHStHeartCount + 5)
            setwbFHStOriCountState(wbFHStOriCount + 1)
            setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost + 1.2))
        }
    }

    function fireStaffWeaponBonus() {
        if (fireHStaffWeaponBonusState == "grayscale(100%)") {
            setFireHStaffWeaponBonusState("grayscale(0%)")
            setFireHWeaponChoiceState("staff")
            setwbFHStSphereCountState(wbFHStSphereCount - 150)
            setwbFHStTailCountState(wbFHStTailCount - 100)
            setwbFHStHornCountState(wbFHStHornCount - 30)
            setwbFHStHeartCountState(wbFHStHeartCount - 10)
            setwbFHStOriCountState(wbFHStOriCount - 30)
            setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost - 10))
        }
        else if (fireHStaffWeaponBonusState == "grayscale(0%)") {
            setFireHStaffWeaponBonusState("grayscale(100%)")
            setFireHWeaponChoiceState("staff")
            setwbFHStSphereCountState(wbFHStSphereCount + 150)
            setwbFHStTailCountState(wbFHStTailCount + 100)
            setwbFHStHornCountState(wbFHStHornCount + 30)
            setwbFHStHeartCountState(wbFHStHeartCount + 10)
            setwbFHStOriCountState(wbFHStOriCount + 30)
            setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost + 10))
        }
    }

    function fireStaffRefine() {
        if (fireHStaffRefineState == "grayscale(100%)") {
            setFireHStaffRefineState("grayscale(0%)")
            setFireHWeaponChoiceState("staff")
            setwbFHStSphereCountState(wbFHStSphereCount - 50)
            setwbFHStTailCountState(wbFHStTailCount - 40)
            setwbFHStHornCountState(wbFHStHornCount - 30)
            setwbFHStHeartCountState(wbFHStHeartCount - 10)
            setwbFHStOriCountState(wbFHStOriCount - 3)
            setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost - 1.5))
        }
        else if (fireHStaffRefineState == "grayscale(0%)") {
            setFireHStaffRefineState("grayscale(100%)")
            setFireHWeaponChoiceState("staff")
            setwbFHStSphereCountState(wbFHStSphereCount + 50)
            setwbFHStTailCountState(wbFHStTailCount + 40)
            setwbFHStHornCountState(wbFHStHornCount + 30)
            setwbFHStHeartCountState(wbFHStHeartCount + 10)
            setwbFHStOriCountState(wbFHStOriCount + 3)
            setwbFHStRupeeCost(parseFloat(wbFHStRupeeCost + 1.5))
        }
    }

    function handleFireStaffUnbindIncrement(event) {
        setFireHWeaponChoiceState("staff");
        if (fireHStaffUnbindState < event.target.value) {
            if (event.target.value - fireHStaffUnbindState == 1) {
                setFireHStaffUnbindState(event.target.value);
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
        else if (fireHStaffUnbindState > event.target.value) {
            if (fireHStaffUnbindState - event.target.value == 1) {
                setFireHStaffUnbindState(event.target.value);
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
        if (fireHManacasterCraftState == "grayscale(100%)") {
            setFireHManacasterCraftState("grayscale(0%)")
            setFireHWeaponChoiceState("manacaster")
            setwbFHMSphereCountState(wbFHMSphereCount - 25)
            setwbFHMTailCountState(wbFHMTailCount - 18)
            setwbFHMHeartCountState(wbFHMHeartCount - 5)
            setwbFHMOriCountState(wbFHMOriCount - 1)
            setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost - 1.2))
        }
        else if (fireHManacasterCraftState == "grayscale(0%)") {
            setFireHManacasterCraftState("grayscale(100%)")
            setFireHWeaponChoiceState("manacaster")
            setwbFHMSphereCountState(wbFHMSphereCount + 25)
            setwbFHMTailCountState(wbFHMTailCount + 18)
            setwbFHMHeartCountState(wbFHMHeartCount + 5)
            setwbFHMOriCountState(wbFHMOriCount + 1)
            setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost + 1.2))
        }
    }

    function fireManacasterWeaponBonus() {
        if (fireHManacasterWeaponBonusState == "grayscale(100%)") {
            setFireHManacasterWeaponBonusState("grayscale(0%)")
            setFireHWeaponChoiceState("manacaster")
            setwbFHMSphereCountState(wbFHMSphereCount - 150)
            setwbFHMTailCountState(wbFHMTailCount - 100)
            setwbFHMHornCountState(wbFHMHornCount - 30)
            setwbFHMHeartCountState(wbFHMHeartCount - 10)
            setwbFHMOriCountState(wbFHMOriCount - 30)
            setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost - 10))
        }
        else if (fireHManacasterWeaponBonusState == "grayscale(0%)") {
            setFireHManacasterWeaponBonusState("grayscale(100%)")
            setFireHWeaponChoiceState("manacaster")
            setwbFHMSphereCountState(wbFHMSphereCount + 150)
            setwbFHMTailCountState(wbFHMTailCount + 100)
            setwbFHMHornCountState(wbFHMHornCount + 30)
            setwbFHMHeartCountState(wbFHMHeartCount + 10)
            setwbFHMOriCountState(wbFHMOriCount + 30)
            setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost + 10))
        }
    }

    function fireManacasterRefine() {
        if (fireHManacasterRefineState == "grayscale(100%)") {
            setFireHManacasterRefineState("grayscale(0%)")
            setFireHWeaponChoiceState("manacaster")
            setwbFHMSphereCountState(wbFHMSphereCount - 50)
            setwbFHMTailCountState(wbFHMTailCount - 40)
            setwbFHMHornCountState(wbFHMHornCount - 30)
            setwbFHMHeartCountState(wbFHMHeartCount - 10)
            setwbFHMOriCountState(wbFHMOriCount - 3)
            setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost - 1.5))
        }
        else if (fireHManacasterRefineState == "grayscale(0%)") {
            setFireHManacasterRefineState("grayscale(100%)")
            setFireHWeaponChoiceState("manacaster")
            setwbFHMSphereCountState(wbFHMSphereCount + 50)
            setwbFHMTailCountState(wbFHMTailCount + 40)
            setwbFHMHornCountState(wbFHMHornCount + 30)
            setwbFHMHeartCountState(wbFHMHeartCount + 10)
            setwbFHMOriCountState(wbFHMOriCount + 3)
            setwbFHMRupeeCost(parseFloat(wbFHMRupeeCost + 1.5))
        }
    }

    function handleFireManacasterUnbindIncrement(event) {
        setFireHWeaponChoiceState("manacaster");
        if (fireHManacasterUnbindState < event.target.value) {
            if (event.target.value - fireHManacasterUnbindState == 1) {
                setFireHManacasterUnbindState(event.target.value);
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
        else if (fireHManacasterUnbindState > event.target.value) {
            if (fireHManacasterUnbindState - event.target.value == 1) {
                setFireHManacasterUnbindState(event.target.value);
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
                                    <Image src={FireHDTSword} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireHSwordCraftState }} onClick={craftFireSword} />
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
                                            defaultValue={fireHSwordUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireHSwordUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireHSwordWeaponBonusState }} onClick={fireSwordWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireHSwordRefineState }} onClick={fireSwordRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTBlade} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireHBladeCraftState }} onClick={craftFireBlade} />
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
                                            defaultValue={fireHBladeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireHBladeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireHBladeWeaponBonusState }} onClick={fireBladeWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireHBladeRefineState }} onClick={fireBladeRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTDagger} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireHDaggerCraftState }} onClick={craftFireDagger} />
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
                                            defaultValue={fireHDaggerUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireHDaggerUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireHDaggerWeaponBonusState }} onClick={fireDaggerWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireHDaggerRefineState }} onClick={fireDaggerRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTAxe} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireHAxeCraftState }} onClick={craftFireAxe} />
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
                                            defaultValue={fireHAxeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireHAxeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireHAxeWeaponBonusState }} onClick={fireAxeWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireHAxeRefineState }} onClick={fireAxeRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTLance} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireHLanceCraftState }} onClick={craftFireLance} />
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
                                            defaultValue={fireHLanceUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireHLanceUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireHLanceWeaponBonusState }} onClick={fireLanceWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireHLanceRefineState }} onClick={fireLanceRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTBow} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireHBowCraftState }} onClick={craftFireBow} />
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
                                            defaultValue={fireHBowUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireHBowUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireHBowWeaponBonusState }} onClick={fireBowWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireHBowRefineState }} onClick={fireBowRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTWand} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireHWandCraftState }} onClick={craftFireWand} />
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
                                            defaultValue={fireHWandUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireHWandUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireHWandWeaponBonusState }} onClick={fireWandWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireHWandRefineState }} onClick={fireWandRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTStaff} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireHStaffCraftState }} onClick={craftFireStaff} />
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
                                            defaultValue={fireHStaffUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireHStaffUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireHStaffWeaponBonusState }} onClick={fireStaffWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireHStaffRefineState }} onClick={fireStaffRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTManacaster} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: fireHManacasterCraftState }} onClick={craftFireManacaster} />
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
                                            defaultValue={fireHManacasterUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{fireHManacasterUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: fireHManacasterWeaponBonusState }} onClick={fireManacasterWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: fireHManacasterRefineState }} onClick={fireManacasterRefine} />
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
