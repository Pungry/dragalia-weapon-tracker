import React, { useState } from 'react'
import HDTNavTabs from "./HDTNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"
import { Box, Text, Flex, Card, Image } from "rebass";
import { Slider } from "@rebass/forms";

import WindHDTSword from "../Images/Wind_HDT_Sword.png";
import WindHDTBlade from "../Images/Wind_HDT_Blade.png";
import WindHDTDagger from "../Images/Wind_HDT_Dagger.png";
import WindHDTAxe from "../Images/Wind_HDT_Axe.png";
import WindHDTLance from "../Images/Wind_HDT_Lance.png";
import WindHDTBow from "../Images/Wind_HDT_Bow.png";
import WindHDTWand from "../Images/Wind_HDT_Wand.png";
import WindHDTStaff from "../Images/Wind_HDT_Staff.png";
import WindHDTManacaster from "../Images/Wind_HDT_Manacaster.png";

import Refine from "../Images/Refine.PNG";
import Unbind from "../Images/Unbind.PNG";
import WeaponBonus from "../Images/Weapon_Bonus.PNG";

import WindHDTSwordCost from "./WindHDTSwordMats"
import WindHDTBladeCost from "./WindHDTBladeMats"
import WindHDTDaggerCost from "./WindHDTDaggerMats"
import WindHDTAxeCost from "./WindHDTAxeMats"
import WindHDTLanceCost from "./WindHDTLanceMats"
import WindHDTBowCost from "./WindHDTBowMats"
import WindHDTWandCost from "./WindHDTWandMats"
import WindHDTStaffCost from "./WindHDTStaffMats"
import WindHDTManacasterCost from "./WindHDTManacasterMats"

export default function WindHDTWeapons() {
    const [windWeaponChoice, setWindWeaponChoiceState] = useLocalStorage("windHWeaponChoice", "sword")

    const [windSwordCraftState, setWindSwordCraftState] = useLocalStorage("windHSwordCraftState", "grayscale(100%)")
    const [windSwordWeaponBonusState, setWindSwordWeaponBonusState] = useLocalStorage("windHSwordWeaponBonusState", "grayscale(100%)")
    const [windSwordRefineState, setWindSwordRefineState] = useLocalStorage("windHSwordRefineState", "grayscale(100%)");
    const [windSwordUnbindState, setWindSwordUnbindState] = useLocalStorage("windHSwordUnbindState", 0);

    const [wbWiHSphereCount, setwbWiHSphereCountState] = useLocalStorage("wbWiHSphereCount", 500);
    const [wbWiHTailCount, setwbWiHTailCountState] = useLocalStorage("wbWiHTailCount", 360);
    const [wbWiHHeartCount, setwbWiHHeartCountState] = useLocalStorage("wbWiHHeartCount", 80);
    const [wbWiHOriCount, setwbWiHOriCountState] = useLocalStorage("wbWiHOriCount", 46);
    const [wbWiHRupeeCost, setwbWiHRupeeCost] = useLocalStorage("wbWiHRupeeCost", 25);
    const [wbWiHHornCount, setwbWiHHornCountState] = useLocalStorage("wbWiHHornCount", 90);

    const [windBladeCraftState, setWindBladeCraftState] = useLocalStorage("windHBladeCraftState", "grayscale(100%)")
    const [windBladeWeaponBonusState, setWindBladeWeaponBonusState] = useLocalStorage("windHBladeWeaponBonusState", "grayscale(100%)")
    const [windBladeRefineState, setWindBladeRefineState] = useLocalStorage("windHBladeRefineState", "grayscale(100%)");
    const [windBladeUnbindState, setWindBladeUnbindState] = useLocalStorage("windHBladeUnbindState", 0);

    const [wbWiHBlSphereCount, setwbWiHBlSphereCountState] = useLocalStorage("wbWiHBlSphereCount", 500);
    const [wbWiHBlTailCount, setwbWiHBlTailCountState] = useLocalStorage("wbWiHBlTailCount", 360);
    const [wbWiHBlHeartCount, setwbWiHBlHeartCountState] = useLocalStorage("wbWiHBlHeartCount", 80);
    const [wbWiHBlOriCount, setwbWiHBlOriCountState] = useLocalStorage("wbWiHBlOriCount", 46);
    const [wbWiHBlRupeeCost, setwbWiHBlRupeeCost] = useLocalStorage("wbWiHBlRupeeCost", 25);
    const [wbWiHBlHornCount, setwbWiHBlHornCountState] = useLocalStorage("wbWiHBlHornCount", 90);

    const [windDaggerCraftState, setWindDaggerCraftState] = useLocalStorage("windHDaggerCraftState", "grayscale(100%)")
    const [windDaggerWeaponBonusState, setWindDaggerWeaponBonusState] = useLocalStorage("windHDaggerWeaponBonusState", "grayscale(100%)")
    const [windDaggerRefineState, setWindDaggerRefineState] = useLocalStorage("windHDaggerRefineState", "grayscale(100%)");
    const [windDaggerUnbindState, setWindDaggerUnbindState] = useLocalStorage("windHDaggerUnbindState", 0);

    const [wbWiHDSphereCount, setwbWiHDSphereCountState] = useLocalStorage("wbWiHDSphereCount", 500);
    const [wbWiHDTailCount, setwbWiHDTailCountState] = useLocalStorage("wbWiHDTailCount", 360);
    const [wbWiHDHeartCount, setwbWiHDHeartCountState] = useLocalStorage("wbWiHDHeartCount", 80);
    const [wbWiHDOriCount, setwbWiHDOriCountState] = useLocalStorage("wbWiHDOriCount", 46);
    const [wbWiHDRupeeCost, setwbWiHDRupeeCost] = useLocalStorage("wbWiHDRupeeCost", 25);
    const [wbWiHDHornCount, setwbWiHDHornCountState] = useLocalStorage("wbWiHDHornCount", 90);

    const [windAxeCraftState, setWindAxeCraftState] = useLocalStorage("windHAxeCraftState", "grayscale(100%)")
    const [windAxeWeaponBonusState, setWindAxeWeaponBonusState] = useLocalStorage("windHAxeWeaponBonusState", "grayscale(100%)")
    const [windAxeRefineState, setWindAxeRefineState] = useLocalStorage("windHAxeRefineState", "grayscale(100%)");
    const [windAxeUnbindState, setWindAxeUnbindState] = useLocalStorage("windHAxeUnbindState", 0);

    const [wbWiHASphereCount, setwbWiHASphereCountState] = useLocalStorage("wbWiHASphereCount", 500);
    const [wbWiHATailCount, setwbWiHATailCountState] = useLocalStorage("wbWiHATailCount", 360);
    const [wbWiHAHeartCount, setwbWiHAHeartCountState] = useLocalStorage("wbWiHAHeartCount", 80);
    const [wbWiHAOriCount, setwbWiHAOriCountState] = useLocalStorage("wbWiHAOriCount", 46);
    const [wbWiHARupeeCost, setwbWiHARupeeCost] = useLocalStorage("wbWiHARupeeCost", 25);
    const [wbWiHAHornCount, setwbWiHAHornCountState] = useLocalStorage("wbWiHAHornCount", 90);

    const [windLanceCraftState, setWindLanceCraftState] = useLocalStorage("windHLanceCraftState", "grayscale(100%)")
    const [windLanceWeaponBonusState, setWindLanceWeaponBonusState] = useLocalStorage("windHLanceWeaponBonusState", "grayscale(100%)")
    const [windLanceRefineState, setWindLanceRefineState] = useLocalStorage("windHLanceRefineState", "grayscale(100%)");
    const [windLanceUnbindState, setWindLanceUnbindState] = useLocalStorage("windHLanceUnbindState", 0);

    const [wbWiHLSphereCount, setwbWiHLSphereCountState] = useLocalStorage("wbWiHLSphereCount", 500);
    const [wbWiHLTailCount, setwbWiHLTailCountState] = useLocalStorage("wbWiHLTailCount", 360);
    const [wbWiHLHeartCount, setwbWiHLHeartCountState] = useLocalStorage("wbWiHLHeartCount", 80);
    const [wbWiHLOriCount, setwbWiHLOriCountState] = useLocalStorage("wbWiHLOriCount", 46);
    const [wbWiHLRupeeCost, setwbWiHLRupeeCost] = useLocalStorage("wbWiHLRupeeCost", 25);
    const [wbWiHLHornCount, setwbWiHLHornCountState] = useLocalStorage("wbWiHLHornCount", 90);

    const [windBowCraftState, setWindBowCraftState] = useLocalStorage("windHBowCraftState", "grayscale(100%)")
    const [windBowWeaponBonusState, setWindBowWeaponBonusState] = useLocalStorage("windHBowWeaponBonusState", "grayscale(100%)")
    const [windBowRefineState, setWindBowRefineState] = useLocalStorage("windHBowRefineState", "grayscale(100%)");
    const [windBowUnbindState, setWindBowUnbindState] = useLocalStorage("windHBowUnbindState", 0);

    const [wbWiHBoSphereCount, setwbWiHBoSphereCountState] = useLocalStorage("wbWiHBoSphereCount", 500);
    const [wbWiHBoTailCount, setwbWiHBoTailCountState] = useLocalStorage("wbWiHBoTailCount", 360);
    const [wbWiHBoHeartCount, setwbWiHBoHeartCountState] = useLocalStorage("wbWiHBoHeartCount", 80);
    const [wbWiHBoOriCount, setwbWiHBoOriCountState] = useLocalStorage("wbWiHBoOriCount", 46);
    const [wbWiHBoRupeeCost, setwbWiHBoRupeeCost] = useLocalStorage("wbWiHBoRupeeCost", 25);
    const [wbWiHBoHornCount, setwbWiHBoHornCountState] = useLocalStorage("wbWiHBoHornCount", 90);

    const [windWandCraftState, setWindWandCraftState] = useLocalStorage("windHWandCraftState", "grayscale(100%)")
    const [windWandWeaponBonusState, setWindWandWeaponBonusState] = useLocalStorage("windHWandWeaponBonusState", "grayscale(100%)")
    const [windWandRefineState, setWindWandRefineState] = useLocalStorage("windHWandRefineState", "grayscale(100%)");
    const [windWandUnbindState, setWindWandUnbindState] = useLocalStorage("windHWandUnbindState", 0);

    const [wbWiHWSphereCount, setwbWiHWSphereCountState] = useLocalStorage("wbWiHWSphereCount", 500);
    const [wbWiHWTailCount, setwbWiHWTailCountState] = useLocalStorage("wbWiHWTailCount", 360);
    const [wbWiHWHeartCount, setwbWiHWHeartCountState] = useLocalStorage("wbWiHWHeartCount", 80);
    const [wbWiHWOriCount, setwbWiHWOriCountState] = useLocalStorage("wbWiHWOriCount", 46);
    const [wbWiHWRupeeCost, setwbWiHWRupeeCost] = useLocalStorage("wbWiHWRupeeCost", 25);
    const [wbWiHWHornCount, setwbWiHWHornCountState] = useLocalStorage("wbWiHWHornCount", 90);

    const [windStaffCraftState, setWindStaffCraftState] = useLocalStorage("windHStaffCraftState", "grayscale(100%)")
    const [windStaffWeaponBonusState, setWindStaffWeaponBonusState] = useLocalStorage("windHStaffWeaponBonusState", "grayscale(100%)")
    const [windStaffRefineState, setWindStaffRefineState] = useLocalStorage("windHStaffRefineState", "grayscale(100%)");
    const [windStaffUnbindState, setWindStaffUnbindState] = useLocalStorage("windHStaffUnbindState", 0);

    const [wbWiHStSphereCount, setwbWiHStSphereCountState] = useLocalStorage("wbWiHStSphereCount", 500);
    const [wbWiHStTailCount, setwbWiHStTailCountState] = useLocalStorage("wbWiHStTailCount", 360);
    const [wbWiHStHeartCount, setwbWiHStHeartCountState] = useLocalStorage("wbWiHStHeartCount", 80);
    const [wbWiHStOriCount, setwbWiHStOriCountState] = useLocalStorage("wbWiHStOriCount", 46);
    const [wbWiHStRupeeCost, setwbWiHStRupeeCost] = useLocalStorage("wbWiHStRupeeCost", 25);
    const [wbWiHStHornCount, setwbWiHStHornCountState] = useLocalStorage("wbWiHStHornCount", 90);

    const [windManacasterCraftState, setWindManacasterCraftState] = useLocalStorage("windHManacasterCraftState", "grayscale(100%)")
    const [windManacasterWeaponBonusState, setWindManacasterWeaponBonusState] = useLocalStorage("windHManacasterWeaponBonusState", "grayscale(100%)")
    const [windManacasterRefineState, setWindManacasterRefineState] = useLocalStorage("windHManacasterRefineState", "grayscale(100%)");
    const [windManacasterUnbindState, setWindManacasterUnbindState] = useLocalStorage("windHManacasterUnbindState", 0);

    const [wbWiHMSphereCount, setwbWiHMSphereCountState] = useLocalStorage("wbWiHMSphereCount", 500);
    const [wbWiHMTailCount, setwbWiHMTailCountState] = useLocalStorage("wbWiHMTailCount", 360);
    const [wbWiHMHeartCount, setwbWiHMHeartCountState] = useLocalStorage("wbWiHMHeartCount", 80);
    const [wbWiHMOriCount, setwbWiHMOriCountState] = useLocalStorage("wbWiHMOriCount", 46);
    const [wbWiHMRupeeCost, setwbWiHMRupeeCost] = useLocalStorage("wbWiHMRupeeCost", 25);
    const [wbWiHMHornCount, setwbWiHMHornCountState] = useLocalStorage("wbWiHMHornCount", 90);

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

    function windHDTWeaponSelection() {
        if (windWeaponChoice == "sword") {
            return <WindHDTSwordCost wbWiHSphereCount={wbWiHSphereCount} wbWiHTailCount={wbWiHTailCount} wbWiHHeartCount={wbWiHHeartCount} wbWiHOriCount={wbWiHOriCount} wbWiHRupeeCost={wbWiHRupeeCost.toFixed(1)} wbWiHHornCount={wbWiHHornCount} />
        }
        if (windWeaponChoice == "blade") {
            return <WindHDTBladeCost wbWiHBlSphereCount={wbWiHBlSphereCount} wbWiHBlTailCount={wbWiHBlTailCount} wbWiHBlHeartCount={wbWiHBlHeartCount} wbWiHBlOriCount={wbWiHBlOriCount} wbWiHBlRupeeCost={wbWiHBlRupeeCost.toFixed(1)} wbWiHBlHornCount={wbWiHBlHornCount} />
        }
        if (windWeaponChoice == "dagger") {
            return <WindHDTDaggerCost wbWiHDSphereCount={wbWiHDSphereCount} wbWiHDTailCount={wbWiHDTailCount} wbWiHDHeartCount={wbWiHDHeartCount} wbWiHDOriCount={wbWiHDOriCount} wbWiHDRupeeCost={wbWiHDRupeeCost.toFixed(1)} wbWiHDHornCount={wbWiHDHornCount} />
        }
        if (windWeaponChoice == "axe") {
            return <WindHDTAxeCost wbWiHASphereCount={wbWiHASphereCount} wbWiHATailCount={wbWiHATailCount} wbWiHAHeartCount={wbWiHAHeartCount} wbWiHAOriCount={wbWiHAOriCount} wbWiHARupeeCost={wbWiHARupeeCost.toFixed(1)} wbWiHAHornCount={wbWiHAHornCount} />
        }
        if (windWeaponChoice == "lance") {
            return <WindHDTLanceCost wbWiHLSphereCount={wbWiHLSphereCount} wbWiHLTailCount={wbWiHLTailCount} wbWiHLHeartCount={wbWiHLHeartCount} wbWiHLOriCount={wbWiHLOriCount} wbWiHLRupeeCost={wbWiHLRupeeCost.toFixed(1)} wbWiHLHornCount={wbWiHLHornCount} />
        }
        if (windWeaponChoice == "bow") {
            return <WindHDTBowCost wbWiHBoSphereCount={wbWiHBoSphereCount} wbWiHBoTailCount={wbWiHBoTailCount} wbWiHBoHeartCount={wbWiHBoHeartCount} wbWiHBoOriCount={wbWiHBoOriCount} wbWiHBoRupeeCost={wbWiHBoRupeeCost.toFixed(1)} wbWiHBoHornCount={wbWiHBoHornCount} />
        }
        if (windWeaponChoice == "wand") {
            return <WindHDTWandCost wbWiHWSphereCount={wbWiHWSphereCount} wbWiHWTailCount={wbWiHWTailCount} wbWiHWHeartCount={wbWiHWHeartCount} wbWiHWOriCount={wbWiHWOriCount} wbWiHWRupeeCost={wbWiHWRupeeCost.toFixed(1)} wbWiHWHornCount={wbWiHWHornCount} />
        }
        if (windWeaponChoice == "staff") {
            return <WindHDTStaffCost wbWiHStSphereCount={wbWiHStSphereCount} wbWiHStTailCount={wbWiHStTailCount} wbWiHStHeartCount={wbWiHStHeartCount} wbWiHStOriCount={wbWiHStOriCount} wbWiHStRupeeCost={wbWiHStRupeeCost.toFixed(1)} wbWiHStHornCount={wbWiHStHornCount} />
        }
        if (windWeaponChoice == "manacaster") {
            return <WindHDTManacasterCost wbWiHMSphereCount={wbWiHMSphereCount} wbWiHMTailCount={wbWiHMTailCount} wbWiHMHeartCount={wbWiHMHeartCount} wbWiHMOriCount={wbWiHMOriCount} wbWiHMRupeeCost={wbWiHMRupeeCost.toFixed(1)} wbWiHMHornCount={wbWiHMHornCount} />
        }
    }

    function craftWindSword() {
        if (windSwordCraftState == "grayscale(100%)") {
            setWindSwordCraftState("grayscale(0%)")
            setWindWeaponChoiceState("sword")
            setwbWiHSphereCountState(wbWiHSphereCount - 25)
            setwbWiHTailCountState(wbWiHTailCount - 18)
            setwbWiHHeartCountState(wbWiHHeartCount - 5)
            setwbWiHOriCountState(wbWiHOriCount - 1)
            setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost - 1.2))
        }
        else if (windSwordCraftState == "grayscale(0%)") {
            setWindSwordCraftState("grayscale(100%)")
            setWindWeaponChoiceState("sword")
            setwbWiHSphereCountState(wbWiHSphereCount + 25)
            setwbWiHTailCountState(wbWiHTailCount + 18)
            setwbWiHHeartCountState(wbWiHHeartCount + 5)
            setwbWiHOriCountState(wbWiHOriCount + 1)
            setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost + 1.2))
        }
    }

    function windSwordWeaponBonus() {
        if (windSwordWeaponBonusState == "grayscale(100%)") {
            setWindSwordWeaponBonusState("grayscale(0%)")
            setWindWeaponChoiceState("sword")
            setwbWiHSphereCountState(wbWiHSphereCount - 150)
            setwbWiHTailCountState(wbWiHTailCount - 100)
            setwbWiHHornCountState(wbWiHHornCount - 30)
            setwbWiHHeartCountState(wbWiHHeartCount - 10)
            setwbWiHOriCountState(wbWiHOriCount - 30)
            setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost - 10))
        }
        else if (windSwordWeaponBonusState == "grayscale(0%)") {
            setWindSwordWeaponBonusState("grayscale(100%)")
            setWindWeaponChoiceState("sword")
            setwbWiHSphereCountState(wbWiHSphereCount + 150)
            setwbWiHTailCountState(wbWiHTailCount + 100)
            setwbWiHHornCountState(wbWiHHornCount + 30)
            setwbWiHHeartCountState(wbWiHHeartCount + 10)
            setwbWiHOriCountState(wbWiHOriCount + 30)
            setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost + 10))
        }
    }

    function windSwordRefine() {
        if (windSwordRefineState == "grayscale(100%)") {
            setWindSwordRefineState("grayscale(0%)")
            setWindWeaponChoiceState("sword")
            setwbWiHSphereCountState(wbWiHSphereCount - 50)
            setwbWiHTailCountState(wbWiHTailCount - 40)
            setwbWiHHornCountState(wbWiHHornCount - 30)
            setwbWiHHeartCountState(wbWiHHeartCount - 10)
            setwbWiHOriCountState(wbWiHOriCount - 3)
            setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost - 1.5))
        }
        else if (windSwordRefineState == "grayscale(0%)") {
            setWindSwordRefineState("grayscale(100%)")
            setWindWeaponChoiceState("sword")
            setwbWiHSphereCountState(wbWiHSphereCount + 50)
            setwbWiHTailCountState(wbWiHTailCount + 40)
            setwbWiHHornCountState(wbWiHHornCount + 30)
            setwbWiHHeartCountState(wbWiHHeartCount + 10)
            setwbWiHOriCountState(wbWiHOriCount + 3)
            setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost + 1.5))
        }
    }

    function handleWindSwordUnbindIncrement(event) {
        setWindWeaponChoiceState("sword");
        if (windSwordUnbindState < event.target.value) {
            if (event.target.value - windSwordUnbindState == 1) {
                setWindSwordUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHSphereCountState(wbWiHSphereCount - 25)
                    setwbWiHTailCountState(wbWiHTailCount - 18)
                    setwbWiHHeartCountState(wbWiHHeartCount - 5)
                    setwbWiHOriCountState(wbWiHOriCount - 1)
                    setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHSphereCountState(wbWiHSphereCount - 175)
                    setwbWiHTailCountState(wbWiHTailCount - 130)
                    setwbWiHHornCountState(wbWiHHornCount - 30)
                    setwbWiHHeartCountState(wbWiHHeartCount - 35)
                    setwbWiHOriCountState(wbWiHOriCount - 8)
                    setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost - 7.5))
                }
            }
        }
        else if (windSwordUnbindState > event.target.value) {
            if (windSwordUnbindState - event.target.value == 1) {
                setWindSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHSphereCountState(wbWiHSphereCount + 25)
                    setwbWiHTailCountState(wbWiHTailCount + 18)
                    setwbWiHHeartCountState(wbWiHHeartCount + 5)
                    setwbWiHOriCountState(wbWiHOriCount + 1)
                    setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHSphereCountState(wbWiHSphereCount + 175)
                    setwbWiHTailCountState(wbWiHTailCount + 130)
                    setwbWiHHornCountState(wbWiHHornCount + 30)
                    setwbWiHHeartCountState(wbWiHHeartCount + 35)
                    setwbWiHOriCountState(wbWiHOriCount + 8)
                    setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindBlade() {
        if (windBladeCraftState == "grayscale(100%)") {
            setWindBladeCraftState("grayscale(0%)")
            setWindWeaponChoiceState("blade")
            setwbWiHBlSphereCountState(wbWiHBlSphereCount - 25)
            setwbWiHBlTailCountState(wbWiHBlTailCount - 18)
            setwbWiHBlHeartCountState(wbWiHBlHeartCount - 5)
            setwbWiHBlOriCountState(wbWiHBlOriCount - 1)
            setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost - 1.2))
        }
        else if (windBladeCraftState == "grayscale(0%)") {
            setWindBladeCraftState("grayscale(100%)")
            setWindWeaponChoiceState("blade")
            setwbWiHBlSphereCountState(wbWiHBlSphereCount + 25)
            setwbWiHBlTailCountState(wbWiHBlTailCount + 18)
            setwbWiHBlHeartCountState(wbWiHBlHeartCount + 5)
            setwbWiHBlOriCountState(wbWiHBlOriCount + 1)
            setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost + 1.2))
        }
    }

    function windBladeWeaponBonus() {
        if (windBladeWeaponBonusState == "grayscale(100%)") {
            setWindBladeWeaponBonusState("grayscale(0%)")
            setWindWeaponChoiceState("blade")
            setwbWiHBlSphereCountState(wbWiHBlSphereCount - 150)
            setwbWiHBlTailCountState(wbWiHBlTailCount - 100)
            setwbWiHBlHornCountState(wbWiHBlHornCount - 30)
            setwbWiHBlHeartCountState(wbWiHBlHeartCount - 10)
            setwbWiHBlOriCountState(wbWiHBlOriCount - 30)
            setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost - 10))
        }
        else if (windBladeWeaponBonusState == "grayscale(0%)") {
            setWindBladeWeaponBonusState("grayscale(100%)")
            setWindWeaponChoiceState("blade")
            setwbWiHBlSphereCountState(wbWiHBlSphereCount + 150)
            setwbWiHBlTailCountState(wbWiHBlTailCount + 100)
            setwbWiHBlHornCountState(wbWiHBlHornCount + 30)
            setwbWiHBlHeartCountState(wbWiHBlHeartCount + 10)
            setwbWiHBlOriCountState(wbWiHBlOriCount + 30)
            setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost + 10))
        }
    }

    function windBladeRefine() {
        if (windBladeRefineState == "grayscale(100%)") {
            setWindBladeRefineState("grayscale(0%)")
            setWindWeaponChoiceState("blade")
            setwbWiHBlSphereCountState(wbWiHBlSphereCount - 50)
            setwbWiHBlTailCountState(wbWiHBlTailCount - 40)
            setwbWiHBlHornCountState(wbWiHBlHornCount - 30)
            setwbWiHBlHeartCountState(wbWiHBlHeartCount - 10)
            setwbWiHBlOriCountState(wbWiHBlOriCount - 3)
            setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost - 1.5))
        }
        else if (windBladeRefineState == "grayscale(0%)") {
            setWindBladeRefineState("grayscale(100%)")
            setWindWeaponChoiceState("blade")
            setwbWiHBlSphereCountState(wbWiHBlSphereCount + 50)
            setwbWiHBlTailCountState(wbWiHBlTailCount + 40)
            setwbWiHBlHornCountState(wbWiHBlHornCount + 30)
            setwbWiHBlHeartCountState(wbWiHBlHeartCount + 10)
            setwbWiHBlOriCountState(wbWiHBlOriCount + 3)
            setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost + 1.5))
        }
    }

    function handleWindBladeUnbindIncrement(event) {
        setWindWeaponChoiceState("blade");
        if (windBladeUnbindState < event.target.value) {
            if (event.target.value - windBladeUnbindState == 1) {
                setWindBladeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHBlSphereCountState(wbWiHBlSphereCount - 25)
                    setwbWiHBlTailCountState(wbWiHBlTailCount - 18)
                    setwbWiHBlHeartCountState(wbWiHBlHeartCount - 5)
                    setwbWiHBlOriCountState(wbWiHBlOriCount - 1)
                    setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHBlSphereCountState(wbWiHBlSphereCount - 175)
                    setwbWiHBlTailCountState(wbWiHBlTailCount - 130)
                    setwbWiHBlHornCountState(wbWiHBlHornCount - 30)
                    setwbWiHBlHeartCountState(wbWiHBlHeartCount - 35)
                    setwbWiHBlOriCountState(wbWiHBlOriCount - 8)
                    setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost - 7.5))
                }
            }
        }
        else if (windBladeUnbindState > event.target.value) {
            if (windBladeUnbindState - event.target.value == 1) {
                setWindBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHBlSphereCountState(wbWiHBlSphereCount + 25)
                    setwbWiHBlTailCountState(wbWiHBlTailCount + 18)
                    setwbWiHBlHeartCountState(wbWiHBlHeartCount + 5)
                    setwbWiHBlOriCountState(wbWiHBlOriCount + 1)
                    setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHBlSphereCountState(wbWiHBlSphereCount + 175)
                    setwbWiHBlTailCountState(wbWiHBlTailCount + 130)
                    setwbWiHBlHornCountState(wbWiHBlHornCount + 30)
                    setwbWiHBlHeartCountState(wbWiHBlHeartCount + 35)
                    setwbWiHBlOriCountState(wbWiHBlOriCount + 8)
                    setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindDagger() {
        if (windDaggerCraftState == "grayscale(100%)") {
            setWindDaggerCraftState("grayscale(0%)")
            setWindWeaponChoiceState("dagger")
            setwbWiHDSphereCountState(wbWiHDSphereCount - 25)
            setwbWiHDTailCountState(wbWiHDTailCount - 18)
            setwbWiHDHeartCountState(wbWiHDHeartCount - 5)
            setwbWiHDOriCountState(wbWiHDOriCount - 1)
            setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost - 1.2))
        }
        else if (windDaggerCraftState == "grayscale(0%)") {
            setWindDaggerCraftState("grayscale(100%)")
            setWindWeaponChoiceState("dagger")
            setwbWiHDSphereCountState(wbWiHDSphereCount + 25)
            setwbWiHDTailCountState(wbWiHDTailCount + 18)
            setwbWiHDHeartCountState(wbWiHDHeartCount + 5)
            setwbWiHDOriCountState(wbWiHDOriCount + 1)
            setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost + 1.2))
        }
    }

    function windDaggerWeaponBonus() {
        if (windDaggerWeaponBonusState == "grayscale(100%)") {
            setWindDaggerWeaponBonusState("grayscale(0%)")
            setWindWeaponChoiceState("dagger")
            setwbWiHDSphereCountState(wbWiHDSphereCount - 150)
            setwbWiHDTailCountState(wbWiHDTailCount - 100)
            setwbWiHDHornCountState(wbWiHDHornCount - 30)
            setwbWiHDHeartCountState(wbWiHDHeartCount - 10)
            setwbWiHDOriCountState(wbWiHDOriCount - 30)
            setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost - 10))
        }
        else if (windDaggerWeaponBonusState == "grayscale(0%)") {
            setWindDaggerWeaponBonusState("grayscale(100%)")
            setWindWeaponChoiceState("dagger")
            setwbWiHDSphereCountState(wbWiHDSphereCount + 150)
            setwbWiHDTailCountState(wbWiHDTailCount + 100)
            setwbWiHDHornCountState(wbWiHDHornCount + 30)
            setwbWiHDHeartCountState(wbWiHDHeartCount + 10)
            setwbWiHDOriCountState(wbWiHDOriCount + 30)
            setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost + 10))
        }
    }

    function windDaggerRefine() {
        if (windDaggerRefineState == "grayscale(100%)") {
            setWindDaggerRefineState("grayscale(0%)")
            setWindWeaponChoiceState("dagger")
            setwbWiHDSphereCountState(wbWiHDSphereCount - 50)
            setwbWiHDTailCountState(wbWiHDTailCount - 40)
            setwbWiHDHornCountState(wbWiHDHornCount - 30)
            setwbWiHDHeartCountState(wbWiHDHeartCount - 10)
            setwbWiHDOriCountState(wbWiHDOriCount - 3)
            setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost - 1.5))
        }
        else if (windDaggerRefineState == "grayscale(0%)") {
            setWindDaggerRefineState("grayscale(100%)")
            setWindWeaponChoiceState("dagger")
            setwbWiHDSphereCountState(wbWiHDSphereCount + 50)
            setwbWiHDTailCountState(wbWiHDTailCount + 40)
            setwbWiHDHornCountState(wbWiHDHornCount + 30)
            setwbWiHDHeartCountState(wbWiHDHeartCount + 10)
            setwbWiHDOriCountState(wbWiHDOriCount + 3)
            setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost + 1.5))
        }
    }

    function handleWindDaggerUnbindIncrement(event) {
        setWindWeaponChoiceState("dagger");
        if (windDaggerUnbindState < event.target.value) {
            if (event.target.value - windDaggerUnbindState == 1) {
                setWindDaggerUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHDSphereCountState(wbWiHDSphereCount - 25)
                    setwbWiHDTailCountState(wbWiHDTailCount - 18)
                    setwbWiHDHeartCountState(wbWiHDHeartCount - 5)
                    setwbWiHDOriCountState(wbWiHDOriCount - 1)
                    setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHDSphereCountState(wbWiHDSphereCount - 175)
                    setwbWiHDTailCountState(wbWiHDTailCount - 130)
                    setwbWiHDHornCountState(wbWiHDHornCount - 30)
                    setwbWiHDHeartCountState(wbWiHDHeartCount - 35)
                    setwbWiHDOriCountState(wbWiHDOriCount - 8)
                    setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost - 7.5))
                }
            }
        }
        else if (windDaggerUnbindState > event.target.value) {
            if (windDaggerUnbindState - event.target.value == 1) {
                setWindDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHDSphereCountState(wbWiHDSphereCount + 25)
                    setwbWiHDTailCountState(wbWiHDTailCount + 18)
                    setwbWiHDHeartCountState(wbWiHDHeartCount + 5)
                    setwbWiHDOriCountState(wbWiHDOriCount + 1)
                    setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHDSphereCountState(wbWiHDSphereCount + 175)
                    setwbWiHDTailCountState(wbWiHDTailCount + 130)
                    setwbWiHDHornCountState(wbWiHDHornCount + 30)
                    setwbWiHDHeartCountState(wbWiHDHeartCount + 35)
                    setwbWiHDOriCountState(wbWiHDOriCount + 8)
                    setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindAxe() {
        if (windAxeCraftState == "grayscale(100%)") {
            setWindAxeCraftState("grayscale(0%)")
            setWindWeaponChoiceState("axe")
            setwbWiHASphereCountState(wbWiHASphereCount - 25)
            setwbWiHATailCountState(wbWiHATailCount - 18)
            setwbWiHAHeartCountState(wbWiHAHeartCount - 5)
            setwbWiHAOriCountState(wbWiHAOriCount - 1)
            setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost - 1.2))
        }
        else if (windAxeCraftState == "grayscale(0%)") {
            setWindAxeCraftState("grayscale(100%)")
            setWindWeaponChoiceState("axe")
            setwbWiHASphereCountState(wbWiHASphereCount + 25)
            setwbWiHATailCountState(wbWiHATailCount + 18)
            setwbWiHAHeartCountState(wbWiHAHeartCount + 5)
            setwbWiHAOriCountState(wbWiHAOriCount + 1)
            setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost + 1.2))
        }
    }

    function windAxeWeaponBonus() {
        if (windAxeWeaponBonusState == "grayscale(100%)") {
            setWindAxeWeaponBonusState("grayscale(0%)")
            setWindWeaponChoiceState("axe")
            setwbWiHASphereCountState(wbWiHASphereCount - 150)
            setwbWiHATailCountState(wbWiHATailCount - 100)
            setwbWiHAHornCountState(wbWiHAHornCount - 30)
            setwbWiHAHeartCountState(wbWiHAHeartCount - 10)
            setwbWiHAOriCountState(wbWiHAOriCount - 30)
            setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost - 10))
        }
        else if (windAxeWeaponBonusState == "grayscale(0%)") {
            setWindAxeWeaponBonusState("grayscale(100%)")
            setWindWeaponChoiceState("axe")
            setwbWiHASphereCountState(wbWiHASphereCount + 150)
            setwbWiHATailCountState(wbWiHATailCount + 100)
            setwbWiHAHornCountState(wbWiHAHornCount + 30)
            setwbWiHAHeartCountState(wbWiHAHeartCount + 10)
            setwbWiHAOriCountState(wbWiHAOriCount + 30)
            setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost + 10))
        }
    }

    function windAxeRefine() {
        if (windAxeRefineState == "grayscale(100%)") {
            setWindAxeRefineState("grayscale(0%)")
            setWindWeaponChoiceState("axe")
            setwbWiHASphereCountState(wbWiHASphereCount - 50)
            setwbWiHATailCountState(wbWiHATailCount - 40)
            setwbWiHAHornCountState(wbWiHAHornCount - 30)
            setwbWiHAHeartCountState(wbWiHAHeartCount - 10)
            setwbWiHAOriCountState(wbWiHAOriCount - 3)
            setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost - 1.5))
        }
        else if (windAxeRefineState == "grayscale(0%)") {
            setWindAxeRefineState("grayscale(100%)")
            setWindWeaponChoiceState("axe")
            setwbWiHASphereCountState(wbWiHASphereCount + 50)
            setwbWiHATailCountState(wbWiHATailCount + 40)
            setwbWiHAHornCountState(wbWiHAHornCount + 30)
            setwbWiHAHeartCountState(wbWiHAHeartCount + 10)
            setwbWiHAOriCountState(wbWiHAOriCount + 3)
            setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost + 1.5))
        }
    }

    function handleWindAxeUnbindIncrement(event) {
        setWindWeaponChoiceState("axe");
        if (windAxeUnbindState < event.target.value) {
            if (event.target.value - windAxeUnbindState == 1) {
                setWindAxeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHASphereCountState(wbWiHASphereCount - 25)
                    setwbWiHATailCountState(wbWiHATailCount - 18)
                    setwbWiHAHeartCountState(wbWiHAHeartCount - 5)
                    setwbWiHAOriCountState(wbWiHAOriCount - 1)
                    setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHASphereCountState(wbWiHASphereCount - 175)
                    setwbWiHATailCountState(wbWiHATailCount - 130)
                    setwbWiHAHornCountState(wbWiHAHornCount - 30)
                    setwbWiHAHeartCountState(wbWiHAHeartCount - 35)
                    setwbWiHAOriCountState(wbWiHAOriCount - 8)
                    setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost - 7.5))
                }
            }
        }
        else if (windAxeUnbindState > event.target.value) {
            if (windAxeUnbindState - event.target.value == 1) {
                setWindAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHASphereCountState(wbWiHASphereCount + 25)
                    setwbWiHATailCountState(wbWiHATailCount + 18)
                    setwbWiHAHeartCountState(wbWiHAHeartCount + 5)
                    setwbWiHAOriCountState(wbWiHAOriCount + 1)
                    setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHASphereCountState(wbWiHASphereCount + 175)
                    setwbWiHATailCountState(wbWiHATailCount + 130)
                    setwbWiHAHornCountState(wbWiHAHornCount + 30)
                    setwbWiHAHeartCountState(wbWiHAHeartCount + 35)
                    setwbWiHAOriCountState(wbWiHAOriCount + 8)
                    setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindLance() {
        if (windLanceCraftState == "grayscale(100%)") {
            setWindLanceCraftState("grayscale(0%)")
            setWindWeaponChoiceState("lance")
            setwbWiHLSphereCountState(wbWiHLSphereCount - 25)
            setwbWiHLTailCountState(wbWiHLTailCount - 18)
            setwbWiHLHeartCountState(wbWiHLHeartCount - 5)
            setwbWiHLOriCountState(wbWiHLOriCount - 1)
            setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost - 1.2))
        }
        else if (windLanceCraftState == "grayscale(0%)") {
            setWindLanceCraftState("grayscale(100%)")
            setWindWeaponChoiceState("lance")
            setwbWiHLSphereCountState(wbWiHLSphereCount + 25)
            setwbWiHLTailCountState(wbWiHLTailCount + 18)
            setwbWiHLHeartCountState(wbWiHLHeartCount + 5)
            setwbWiHLOriCountState(wbWiHLOriCount + 1)
            setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost + 1.2))
        }
    }

    function windLanceWeaponBonus() {
        if (windLanceWeaponBonusState == "grayscale(100%)") {
            setWindLanceWeaponBonusState("grayscale(0%)")
            setWindWeaponChoiceState("lance")
            setwbWiHLSphereCountState(wbWiHLSphereCount - 150)
            setwbWiHLTailCountState(wbWiHLTailCount - 100)
            setwbWiHLHornCountState(wbWiHLHornCount - 30)
            setwbWiHLHeartCountState(wbWiHLHeartCount - 10)
            setwbWiHLOriCountState(wbWiHLOriCount - 30)
            setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost - 10))
        }
        else if (windLanceWeaponBonusState == "grayscale(0%)") {
            setWindLanceWeaponBonusState("grayscale(100%)")
            setWindWeaponChoiceState("lance")
            setwbWiHLSphereCountState(wbWiHLSphereCount + 150)
            setwbWiHLTailCountState(wbWiHLTailCount + 100)
            setwbWiHLHornCountState(wbWiHLHornCount + 30)
            setwbWiHLHeartCountState(wbWiHLHeartCount + 10)
            setwbWiHLOriCountState(wbWiHLOriCount + 30)
            setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost + 10))
        }
    }

    function windLanceRefine() {
        if (windLanceRefineState == "grayscale(100%)") {
            setWindLanceRefineState("grayscale(0%)")
            setWindWeaponChoiceState("lance")
            setwbWiHLSphereCountState(wbWiHLSphereCount - 50)
            setwbWiHLTailCountState(wbWiHLTailCount - 40)
            setwbWiHLHornCountState(wbWiHLHornCount - 30)
            setwbWiHLHeartCountState(wbWiHLHeartCount - 10)
            setwbWiHLOriCountState(wbWiHLOriCount - 3)
            setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost - 1.5))
        }
        else if (windLanceRefineState == "grayscale(0%)") {
            setWindLanceRefineState("grayscale(100%)")
            setWindWeaponChoiceState("lance")
            setwbWiHLSphereCountState(wbWiHLSphereCount + 50)
            setwbWiHLTailCountState(wbWiHLTailCount + 40)
            setwbWiHLHornCountState(wbWiHLHornCount + 30)
            setwbWiHLHeartCountState(wbWiHLHeartCount + 10)
            setwbWiHLOriCountState(wbWiHLOriCount + 3)
            setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost + 1.5))
        }
    }

    function handleWindLanceUnbindIncrement(event) {
        setWindWeaponChoiceState("lance");
        if (windLanceUnbindState < event.target.value) {
            if (event.target.value - windLanceUnbindState == 1) {
                setWindLanceUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHLSphereCountState(wbWiHLSphereCount - 25)
                    setwbWiHLTailCountState(wbWiHLTailCount - 18)
                    setwbWiHLHeartCountState(wbWiHLHeartCount - 5)
                    setwbWiHLOriCountState(wbWiHLOriCount - 1)
                    setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHLSphereCountState(wbWiHLSphereCount - 175)
                    setwbWiHLTailCountState(wbWiHLTailCount - 130)
                    setwbWiHLHornCountState(wbWiHLHornCount - 30)
                    setwbWiHLHeartCountState(wbWiHLHeartCount - 35)
                    setwbWiHLOriCountState(wbWiHLOriCount - 8)
                    setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost - 7.5))
                }
            }
        }
        else if (windLanceUnbindState > event.target.value) {
            if (windLanceUnbindState - event.target.value == 1) {
                setWindLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHLSphereCountState(wbWiHLSphereCount + 25)
                    setwbWiHLTailCountState(wbWiHLTailCount + 18)
                    setwbWiHLHeartCountState(wbWiHLHeartCount + 5)
                    setwbWiHLOriCountState(wbWiHLOriCount + 1)
                    setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHLSphereCountState(wbWiHLSphereCount + 175)
                    setwbWiHLTailCountState(wbWiHLTailCount + 130)
                    setwbWiHLHornCountState(wbWiHLHornCount + 30)
                    setwbWiHLHeartCountState(wbWiHLHeartCount + 35)
                    setwbWiHLOriCountState(wbWiHLOriCount + 8)
                    setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindBow() {
        if (windBowCraftState == "grayscale(100%)") {
            setWindBowCraftState("grayscale(0%)")
            setWindWeaponChoiceState("bow")
            setwbWiHBoSphereCountState(wbWiHBoSphereCount - 25)
            setwbWiHBoTailCountState(wbWiHBoTailCount - 18)
            setwbWiHBoHeartCountState(wbWiHBoHeartCount - 5)
            setwbWiHBoOriCountState(wbWiHBoOriCount - 1)
            setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost - 1.2))
        }
        else if (windBowCraftState == "grayscale(0%)") {
            setWindBowCraftState("grayscale(100%)")
            setWindWeaponChoiceState("bow")
            setwbWiHBoSphereCountState(wbWiHBoSphereCount + 25)
            setwbWiHBoTailCountState(wbWiHBoTailCount + 18)
            setwbWiHBoHeartCountState(wbWiHBoHeartCount + 5)
            setwbWiHBoOriCountState(wbWiHBoOriCount + 1)
            setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost + 1.2))
        }
    }

    function windBowWeaponBonus() {
        if (windBowWeaponBonusState == "grayscale(100%)") {
            setWindBowWeaponBonusState("grayscale(0%)")
            setWindWeaponChoiceState("bow")
            setwbWiHBoSphereCountState(wbWiHBoSphereCount - 150)
            setwbWiHBoTailCountState(wbWiHBoTailCount - 100)
            setwbWiHBoHornCountState(wbWiHBoHornCount - 30)
            setwbWiHBoHeartCountState(wbWiHBoHeartCount - 10)
            setwbWiHBoOriCountState(wbWiHBoOriCount - 30)
            setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost - 10))
        }
        else if (windBowWeaponBonusState == "grayscale(0%)") {
            setWindBowWeaponBonusState("grayscale(100%)")
            setWindWeaponChoiceState("bow")
            setwbWiHBoSphereCountState(wbWiHBoSphereCount + 150)
            setwbWiHBoTailCountState(wbWiHBoTailCount + 100)
            setwbWiHBoHornCountState(wbWiHBoHornCount + 30)
            setwbWiHBoHeartCountState(wbWiHBoHeartCount + 10)
            setwbWiHBoOriCountState(wbWiHBoOriCount + 30)
            setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost + 10))
        }
    }

    function windBowRefine() {
        if (windBowRefineState == "grayscale(100%)") {
            setWindBowRefineState("grayscale(0%)")
            setWindWeaponChoiceState("bow")
            setwbWiHBoSphereCountState(wbWiHBoSphereCount - 50)
            setwbWiHBoTailCountState(wbWiHBoTailCount - 40)
            setwbWiHBoHornCountState(wbWiHBoHornCount - 30)
            setwbWiHBoHeartCountState(wbWiHBoHeartCount - 10)
            setwbWiHBoOriCountState(wbWiHBoOriCount - 3)
            setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost - 1.5))
        }
        else if (windBowRefineState == "grayscale(0%)") {
            setWindBowRefineState("grayscale(100%)")
            setWindWeaponChoiceState("bow")
            setwbWiHBoSphereCountState(wbWiHBoSphereCount + 50)
            setwbWiHBoTailCountState(wbWiHBoTailCount + 40)
            setwbWiHBoHornCountState(wbWiHBoHornCount + 30)
            setwbWiHBoHeartCountState(wbWiHBoHeartCount + 10)
            setwbWiHBoOriCountState(wbWiHBoOriCount + 3)
            setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost + 1.5))
        }
    }

    function handleWindBowUnbindIncrement(event) {
        setWindWeaponChoiceState("bow");
        if (windBowUnbindState < event.target.value) {
            if (event.target.value - windBowUnbindState == 1) {
                setWindBowUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHBoSphereCountState(wbWiHBoSphereCount - 25)
                    setwbWiHBoTailCountState(wbWiHBoTailCount - 18)
                    setwbWiHBoHeartCountState(wbWiHBoHeartCount - 5)
                    setwbWiHBoOriCountState(wbWiHBoOriCount - 1)
                    setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHBoSphereCountState(wbWiHBoSphereCount - 175)
                    setwbWiHBoTailCountState(wbWiHBoTailCount - 130)
                    setwbWiHBoHornCountState(wbWiHBoHornCount - 30)
                    setwbWiHBoHeartCountState(wbWiHBoHeartCount - 35)
                    setwbWiHBoOriCountState(wbWiHBoOriCount - 8)
                    setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost - 7.5))
                }
            }
        }
        else if (windBowUnbindState > event.target.value) {
            if (windBowUnbindState - event.target.value == 1) {
                setWindBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHBoSphereCountState(wbWiHBoSphereCount + 25)
                    setwbWiHBoTailCountState(wbWiHBoTailCount + 18)
                    setwbWiHBoHeartCountState(wbWiHBoHeartCount + 5)
                    setwbWiHBoOriCountState(wbWiHBoOriCount + 1)
                    setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHBoSphereCountState(wbWiHBoSphereCount + 175)
                    setwbWiHBoTailCountState(wbWiHBoTailCount + 130)
                    setwbWiHBoHornCountState(wbWiHBoHornCount + 30)
                    setwbWiHBoHeartCountState(wbWiHBoHeartCount + 35)
                    setwbWiHBoOriCountState(wbWiHBoOriCount + 8)
                    setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindWand() {
        if (windWandCraftState == "grayscale(100%)") {
            setWindWandCraftState("grayscale(0%)")
            setWindWeaponChoiceState("wand")
            setwbWiHWSphereCountState(wbWiHWSphereCount - 25)
            setwbWiHWTailCountState(wbWiHWTailCount - 18)
            setwbWiHWHeartCountState(wbWiHWHeartCount - 5)
            setwbWiHWOriCountState(wbWiHWOriCount - 1)
            setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost - 1.2))
        }
        else if (windWandCraftState == "grayscale(0%)") {
            setWindWandCraftState("grayscale(100%)")
            setWindWeaponChoiceState("wand")
            setwbWiHWSphereCountState(wbWiHWSphereCount + 25)
            setwbWiHWTailCountState(wbWiHWTailCount + 18)
            setwbWiHWHeartCountState(wbWiHWHeartCount + 5)
            setwbWiHWOriCountState(wbWiHWOriCount + 1)
            setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost + 1.2))
        }
    }

    function windWandWeaponBonus() {
        if (windWandWeaponBonusState == "grayscale(100%)") {
            setWindWandWeaponBonusState("grayscale(0%)")
            setWindWeaponChoiceState("wand")
            setwbWiHWSphereCountState(wbWiHWSphereCount - 150)
            setwbWiHWTailCountState(wbWiHWTailCount - 100)
            setwbWiHWHornCountState(wbWiHWHornCount - 30)
            setwbWiHWHeartCountState(wbWiHWHeartCount - 10)
            setwbWiHWOriCountState(wbWiHWOriCount - 30)
            setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost - 10))
        }
        else if (windWandWeaponBonusState == "grayscale(0%)") {
            setWindWandWeaponBonusState("grayscale(100%)")
            setWindWeaponChoiceState("wand")
            setwbWiHWSphereCountState(wbWiHWSphereCount + 150)
            setwbWiHWTailCountState(wbWiHWTailCount + 100)
            setwbWiHWHornCountState(wbWiHWHornCount + 30)
            setwbWiHWHeartCountState(wbWiHWHeartCount + 10)
            setwbWiHWOriCountState(wbWiHWOriCount + 30)
            setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost + 10))
        }
    }

    function windWandRefine() {
        if (windWandRefineState == "grayscale(100%)") {
            setWindWandRefineState("grayscale(0%)")
            setWindWeaponChoiceState("wand")
            setwbWiHWSphereCountState(wbWiHWSphereCount - 50)
            setwbWiHWTailCountState(wbWiHWTailCount - 40)
            setwbWiHWHornCountState(wbWiHWHornCount - 30)
            setwbWiHWHeartCountState(wbWiHWHeartCount - 10)
            setwbWiHWOriCountState(wbWiHWOriCount - 3)
            setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost - 1.5))
        }
        else if (windWandRefineState == "grayscale(0%)") {
            setWindWandRefineState("grayscale(100%)")
            setWindWeaponChoiceState("wand")
            setwbWiHWSphereCountState(wbWiHWSphereCount + 50)
            setwbWiHWTailCountState(wbWiHWTailCount + 40)
            setwbWiHWHornCountState(wbWiHWHornCount + 30)
            setwbWiHWHeartCountState(wbWiHWHeartCount + 10)
            setwbWiHWOriCountState(wbWiHWOriCount + 3)
            setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost + 1.5))
        }
    }

    function handleWindWandUnbindIncrement(event) {
        setWindWeaponChoiceState("wand");
        if (windWandUnbindState < event.target.value) {
            if (event.target.value - windWandUnbindState == 1) {
                setWindWandUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHWSphereCountState(wbWiHWSphereCount - 25)
                    setwbWiHWTailCountState(wbWiHWTailCount - 18)
                    setwbWiHWHeartCountState(wbWiHWHeartCount - 5)
                    setwbWiHWOriCountState(wbWiHWOriCount - 1)
                    setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHWSphereCountState(wbWiHWSphereCount - 175)
                    setwbWiHWTailCountState(wbWiHWTailCount - 130)
                    setwbWiHWHornCountState(wbWiHWHornCount - 30)
                    setwbWiHWHeartCountState(wbWiHWHeartCount - 35)
                    setwbWiHWOriCountState(wbWiHWOriCount - 8)
                    setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost - 7.5))
                }
            }
        }
        else if (windWandUnbindState > event.target.value) {
            if (windWandUnbindState - event.target.value == 1) {
                setWindWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHWSphereCountState(wbWiHWSphereCount + 25)
                    setwbWiHWTailCountState(wbWiHWTailCount + 18)
                    setwbWiHWHeartCountState(wbWiHWHeartCount + 5)
                    setwbWiHWOriCountState(wbWiHWOriCount + 1)
                    setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHWSphereCountState(wbWiHWSphereCount + 175)
                    setwbWiHWTailCountState(wbWiHWTailCount + 130)
                    setwbWiHWHornCountState(wbWiHWHornCount + 30)
                    setwbWiHWHeartCountState(wbWiHWHeartCount + 35)
                    setwbWiHWOriCountState(wbWiHWOriCount + 8)
                    setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindStaff() {
        if (windStaffCraftState == "grayscale(100%)") {
            setWindStaffCraftState("grayscale(0%)")
            setWindWeaponChoiceState("staff")
            setwbWiHStSphereCountState(wbWiHStSphereCount - 25)
            setwbWiHStTailCountState(wbWiHStTailCount - 18)
            setwbWiHStHeartCountState(wbWiHStHeartCount - 5)
            setwbWiHStOriCountState(wbWiHStOriCount - 1)
            setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost - 1.2))
        }
        else if (windStaffCraftState == "grayscale(0%)") {
            setWindStaffCraftState("grayscale(100%)")
            setWindWeaponChoiceState("staff")
            setwbWiHStSphereCountState(wbWiHStSphereCount + 25)
            setwbWiHStTailCountState(wbWiHStTailCount + 18)
            setwbWiHStHeartCountState(wbWiHStHeartCount + 5)
            setwbWiHStOriCountState(wbWiHStOriCount + 1)
            setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost + 1.2))
        }
    }

    function windStaffWeaponBonus() {
        if (windStaffWeaponBonusState == "grayscale(100%)") {
            setWindStaffWeaponBonusState("grayscale(0%)")
            setWindWeaponChoiceState("staff")
            setwbWiHStSphereCountState(wbWiHStSphereCount - 150)
            setwbWiHStTailCountState(wbWiHStTailCount - 100)
            setwbWiHStHornCountState(wbWiHStHornCount - 30)
            setwbWiHStHeartCountState(wbWiHStHeartCount - 10)
            setwbWiHStOriCountState(wbWiHStOriCount - 30)
            setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost - 10))
        }
        else if (windStaffWeaponBonusState == "grayscale(0%)") {
            setWindStaffWeaponBonusState("grayscale(100%)")
            setWindWeaponChoiceState("staff")
            setwbWiHStSphereCountState(wbWiHStSphereCount + 150)
            setwbWiHStTailCountState(wbWiHStTailCount + 100)
            setwbWiHStHornCountState(wbWiHStHornCount + 30)
            setwbWiHStHeartCountState(wbWiHStHeartCount + 10)
            setwbWiHStOriCountState(wbWiHStOriCount + 30)
            setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost + 10))
        }
    }

    function windStaffRefine() {
        if (windStaffRefineState == "grayscale(100%)") {
            setWindStaffRefineState("grayscale(0%)")
            setWindWeaponChoiceState("staff")
            setwbWiHStSphereCountState(wbWiHStSphereCount - 50)
            setwbWiHStTailCountState(wbWiHStTailCount - 40)
            setwbWiHStHornCountState(wbWiHStHornCount - 30)
            setwbWiHStHeartCountState(wbWiHStHeartCount - 10)
            setwbWiHStOriCountState(wbWiHStOriCount - 3)
            setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost - 1.5))
        }
        else if (windStaffRefineState == "grayscale(0%)") {
            setWindStaffRefineState("grayscale(100%)")
            setWindWeaponChoiceState("staff")
            setwbWiHStSphereCountState(wbWiHStSphereCount + 50)
            setwbWiHStTailCountState(wbWiHStTailCount + 40)
            setwbWiHStHornCountState(wbWiHStHornCount + 30)
            setwbWiHStHeartCountState(wbWiHStHeartCount + 10)
            setwbWiHStOriCountState(wbWiHStOriCount + 3)
            setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost + 1.5))
        }
    }

    function handleWindStaffUnbindIncrement(event) {
        setWindWeaponChoiceState("staff");
        if (windStaffUnbindState < event.target.value) {
            if (event.target.value - windStaffUnbindState == 1) {
                setWindStaffUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHStSphereCountState(wbWiHStSphereCount - 25)
                    setwbWiHStTailCountState(wbWiHStTailCount - 18)
                    setwbWiHStHeartCountState(wbWiHStHeartCount - 5)
                    setwbWiHStOriCountState(wbWiHStOriCount - 1)
                    setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHStSphereCountState(wbWiHStSphereCount - 175)
                    setwbWiHStTailCountState(wbWiHStTailCount - 130)
                    setwbWiHStHornCountState(wbWiHStHornCount - 30)
                    setwbWiHStHeartCountState(wbWiHStHeartCount - 35)
                    setwbWiHStOriCountState(wbWiHStOriCount - 8)
                    setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost - 7.5))
                }
            }
        }
        else if (windStaffUnbindState > event.target.value) {
            if (windStaffUnbindState - event.target.value == 1) {
                setWindStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHStSphereCountState(wbWiHStSphereCount + 25)
                    setwbWiHStTailCountState(wbWiHStTailCount + 18)
                    setwbWiHStHeartCountState(wbWiHStHeartCount + 5)
                    setwbWiHStOriCountState(wbWiHStOriCount + 1)
                    setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHStSphereCountState(wbWiHStSphereCount + 175)
                    setwbWiHStTailCountState(wbWiHStTailCount + 130)
                    setwbWiHStHornCountState(wbWiHStHornCount + 30)
                    setwbWiHStHeartCountState(wbWiHStHeartCount + 35)
                    setwbWiHStOriCountState(wbWiHStOriCount + 8)
                    setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindManacaster() {
        if (windManacasterCraftState == "grayscale(100%)") {
            setWindManacasterCraftState("grayscale(0%)")
            setWindWeaponChoiceState("manacaster")
            setwbWiHMSphereCountState(wbWiHMSphereCount - 25)
            setwbWiHMTailCountState(wbWiHMTailCount - 18)
            setwbWiHMHeartCountState(wbWiHMHeartCount - 5)
            setwbWiHMOriCountState(wbWiHMOriCount - 1)
            setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost - 1.2))
        }
        else if (windManacasterCraftState == "grayscale(0%)") {
            setWindManacasterCraftState("grayscale(100%)")
            setWindWeaponChoiceState("manacaster")
            setwbWiHMSphereCountState(wbWiHMSphereCount + 25)
            setwbWiHMTailCountState(wbWiHMTailCount + 18)
            setwbWiHMHeartCountState(wbWiHMHeartCount + 5)
            setwbWiHMOriCountState(wbWiHMOriCount + 1)
            setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost + 1.2))
        }
    }

    function windManacasterWeaponBonus() {
        if (windManacasterWeaponBonusState == "grayscale(100%)") {
            setWindManacasterWeaponBonusState("grayscale(0%)")
            setWindWeaponChoiceState("manacaster")
            setwbWiHMSphereCountState(wbWiHMSphereCount - 150)
            setwbWiHMTailCountState(wbWiHMTailCount - 100)
            setwbWiHMHornCountState(wbWiHMHornCount - 30)
            setwbWiHMHeartCountState(wbWiHMHeartCount - 10)
            setwbWiHMOriCountState(wbWiHMOriCount - 30)
            setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost - 10))
        }
        else if (windManacasterWeaponBonusState == "grayscale(0%)") {
            setWindManacasterWeaponBonusState("grayscale(100%)")
            setWindWeaponChoiceState("manacaster")
            setwbWiHMSphereCountState(wbWiHMSphereCount + 150)
            setwbWiHMTailCountState(wbWiHMTailCount + 100)
            setwbWiHMHornCountState(wbWiHMHornCount + 30)
            setwbWiHMHeartCountState(wbWiHMHeartCount + 10)
            setwbWiHMOriCountState(wbWiHMOriCount + 30)
            setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost + 10))
        }
    }

    function windManacasterRefine() {
        if (windManacasterRefineState == "grayscale(100%)") {
            setWindManacasterRefineState("grayscale(0%)")
            setWindWeaponChoiceState("manacaster")
            setwbWiHMSphereCountState(wbWiHMSphereCount - 50)
            setwbWiHMTailCountState(wbWiHMTailCount - 40)
            setwbWiHMHornCountState(wbWiHMHornCount - 30)
            setwbWiHMHeartCountState(wbWiHMHeartCount - 10)
            setwbWiHMOriCountState(wbWiHMOriCount - 3)
            setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost - 1.5))
        }
        else if (windManacasterRefineState == "grayscale(0%)") {
            setWindManacasterRefineState("grayscale(100%)")
            setWindWeaponChoiceState("manacaster")
            setwbWiHMSphereCountState(wbWiHMSphereCount + 50)
            setwbWiHMTailCountState(wbWiHMTailCount + 40)
            setwbWiHMHornCountState(wbWiHMHornCount + 30)
            setwbWiHMHeartCountState(wbWiHMHeartCount + 10)
            setwbWiHMOriCountState(wbWiHMOriCount + 3)
            setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost + 1.5))
        }
    }

    function handleWindManacasterUnbindIncrement(event) {
        setWindWeaponChoiceState("manacaster");
        if (windManacasterUnbindState < event.target.value) {
            if (event.target.value - windManacasterUnbindState == 1) {
                setWindManacasterUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHMSphereCountState(wbWiHMSphereCount - 25)
                    setwbWiHMTailCountState(wbWiHMTailCount - 18)
                    setwbWiHMHeartCountState(wbWiHMHeartCount - 5)
                    setwbWiHMOriCountState(wbWiHMOriCount - 1)
                    setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHMSphereCountState(wbWiHMSphereCount - 175)
                    setwbWiHMTailCountState(wbWiHMTailCount - 130)
                    setwbWiHMHornCountState(wbWiHMHornCount - 30)
                    setwbWiHMHeartCountState(wbWiHMHeartCount - 35)
                    setwbWiHMOriCountState(wbWiHMOriCount - 8)
                    setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost - 7.5))
                }
            }
        }
        else if (windManacasterUnbindState > event.target.value) {
            if (windManacasterUnbindState - event.target.value == 1) {
                setWindManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHMSphereCountState(wbWiHMSphereCount + 25)
                    setwbWiHMTailCountState(wbWiHMTailCount + 18)
                    setwbWiHMHeartCountState(wbWiHMHeartCount + 5)
                    setwbWiHMOriCountState(wbWiHMOriCount + 1)
                    setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHMSphereCountState(wbWiHMSphereCount + 175)
                    setwbWiHMTailCountState(wbWiHMTailCount + 130)
                    setwbWiHMHornCountState(wbWiHMHornCount + 30)
                    setwbWiHMHeartCountState(wbWiHMHeartCount + 35)
                    setwbWiHMOriCountState(wbWiHMOriCount + 8)
                    setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost + 7.5))
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
                            Wind HDT Weapons
                        </Box>
                    </Flex>
                        <Flex>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WindHDTSword} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: windSwordCraftState }} onClick={craftWindSword} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Absolute Tempest</Text>
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
                                            onChange={handleWindSwordUnbindIncrement}
                                            defaultValue={windSwordUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{windSwordUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windSwordWeaponBonusState }} onClick={windSwordWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: windSwordRefineState }} onClick={windSwordRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WindHDTBlade} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: windBladeCraftState }} onClick={craftWindBlade} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Endless Horizon</Text>
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
                                            onChange={handleWindBladeUnbindIncrement}
                                            defaultValue={windBladeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{windBladeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windBladeWeaponBonusState }} onClick={windBladeWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: windBladeRefineState }} onClick={windBladeRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WindHDTDagger} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: windDaggerCraftState }} onClick={craftWindDagger} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Windruler's Maw</Text>
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
                                            onChange={handleWindDaggerUnbindIncrement}
                                            defaultValue={windDaggerUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{windDaggerUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windDaggerWeaponBonusState }} onClick={windDaggerWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: windDaggerRefineState }} onClick={windDaggerRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WindHDTAxe} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: windAxeCraftState }} onClick={craftWindAxe} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Glorystorm's Guide</Text>
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
                                            onChange={handleWindAxeUnbindIncrement}
                                            defaultValue={windAxeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{windAxeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windAxeWeaponBonusState }} onClick={windAxeWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: windAxeRefineState }} onClick={windAxeRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WindHDTLance} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: windLanceCraftState }} onClick={craftWindLance} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Guiding Gale</Text>
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
                                            onChange={handleWindLanceUnbindIncrement}
                                            defaultValue={windLanceUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{windLanceUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windLanceWeaponBonusState }} onClick={windLanceWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: windLanceRefineState }} onClick={windLanceRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WindHDTBow} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: windBowCraftState }} onClick={craftWindBow} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Jormungand's Fury</Text>
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
                                            onChange={handleWindBowUnbindIncrement}
                                            defaultValue={windBowUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{windBowUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windBowWeaponBonusState }} onClick={windBowWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: windBowRefineState }} onClick={windBowRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WindHDTWand} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: windWandCraftState }} onClick={craftWindWand} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Grand Tempest</Text>
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
                                            onChange={handleWindWandUnbindIncrement}
                                            defaultValue={windWandUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{windWandUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windWandWeaponBonusState }} onClick={windWandWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: windWandRefineState }} onClick={windWandRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WindHDTStaff} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: windStaffCraftState }} onClick={craftWindStaff} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Stormruler</Text>
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
                                            onChange={handleWindStaffUnbindIncrement}
                                            defaultValue={windStaffUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{windStaffUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windStaffWeaponBonusState }} onClick={windStaffWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: windStaffRefineState }} onClick={windStaffRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WindHDTManacaster} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: windManacasterCraftState }} onClick={craftWindManacaster} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Tempest Trigger</Text>
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
                                            onChange={handleWindManacasterUnbindIncrement}
                                            defaultValue={windManacasterUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{windManacasterUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windManacasterWeaponBonusState }} onClick={windManacasterWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: windManacasterRefineState }} onClick={windManacasterRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                </Box>
                {windHDTWeaponSelection()}
            </Flex>
            <WeaponTypeNavTabs />
        </div>
    )
}
