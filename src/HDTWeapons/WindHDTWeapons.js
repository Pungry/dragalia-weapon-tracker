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

import WindHDTSphere from "../Images/Wind_HDT_Sphere.png";
import WindHDTTail from "../Images/Wind_HDT_Tail.png";
import WindHDTHorn from "../Images/Wind_HDT_Horn.png";
import WindHDTHeart from "../Images/Wind_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";

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
    const [windHWeaponChoice, setWindHWeaponChoiceState] = useLocalStorage("windHWeaponChoice", "sword")

    const [allwbWiHSphereCount, setallwbWiHSphereCount] = useLocalStorage("allwbWiHSphereCount", 4500)
    const [allwbWiHTailCount, setallwbWiHTailCount] = useLocalStorage("allwbWiHTailCount", 3240)
    const [allwbWiHHeartCount, setallwbWiHHeartCount] = useLocalStorage("allwbWiHHeartCount", 720)
    const [allwbWiHHornCount, setallwbWiHHornCount] = useLocalStorage("allwbWiHHornCount", 810)
    const [allwbWiHOriCount, setallwbWiHOriCount] = useLocalStorage("allwbWiHOriCount", 414)
    const [allwbWiHRupeeCost, setallwbWiHRupeeCost] = useLocalStorage("allwbWiHRupeeCost", 225)

    const [windHSwordCraftState, setWindHSwordCraftState] = useLocalStorage("windHSwordCraftState", "grayscale(100%)")
    const [windHSwordWeaponBonusState, setWindHSwordWeaponBonusState] = useLocalStorage("windHSwordWeaponBonusState", "grayscale(100%)")
    const [windHSwordRefineState, setWindHSwordRefineState] = useLocalStorage("windHSwordRefineState", "grayscale(100%)");
    const [windHSwordUnbindState, setWindHSwordUnbindState] = useLocalStorage("windHSwordUnbindState", 0);

    const [wbWiHSphereCount, setwbWiHSphereCountState] = useLocalStorage("wbWiHSphereCount", 500);
    const [wbWiHTailCount, setwbWiHTailCountState] = useLocalStorage("wbWiHTailCount", 360);
    const [wbWiHHeartCount, setwbWiHHeartCountState] = useLocalStorage("wbWiHHeartCount", 80);
    const [wbWiHOriCount, setwbWiHOriCountState] = useLocalStorage("wbWiHOriCount", 46);
    const [wbWiHRupeeCost, setwbWiHRupeeCost] = useLocalStorage("wbWiHRupeeCost", 25);
    const [wbWiHHornCount, setwbWiHHornCountState] = useLocalStorage("wbWiHHornCount", 90);

    const [windHBladeCraftState, setWindHBladeCraftState] = useLocalStorage("windHBladeCraftState", "grayscale(100%)")
    const [windHBladeWeaponBonusState, setWindHBladeWeaponBonusState] = useLocalStorage("windHBladeWeaponBonusState", "grayscale(100%)")
    const [windHBladeRefineState, setWindHBladeRefineState] = useLocalStorage("windHBladeRefineState", "grayscale(100%)");
    const [windHBladeUnbindState, setWindHBladeUnbindState] = useLocalStorage("windHBladeUnbindState", 0);

    const [wbWiHBlSphereCount, setwbWiHBlSphereCountState] = useLocalStorage("wbWiHBlSphereCount", 500);
    const [wbWiHBlTailCount, setwbWiHBlTailCountState] = useLocalStorage("wbWiHBlTailCount", 360);
    const [wbWiHBlHeartCount, setwbWiHBlHeartCountState] = useLocalStorage("wbWiHBlHeartCount", 80);
    const [wbWiHBlOriCount, setwbWiHBlOriCountState] = useLocalStorage("wbWiHBlOriCount", 46);
    const [wbWiHBlRupeeCost, setwbWiHBlRupeeCost] = useLocalStorage("wbWiHBlRupeeCost", 25);
    const [wbWiHBlHornCount, setwbWiHBlHornCountState] = useLocalStorage("wbWiHBlHornCount", 90);

    const [windHDaggerCraftState, setWindHDaggerCraftState] = useLocalStorage("windHDaggerCraftState", "grayscale(100%)")
    const [windHDaggerWeaponBonusState, setWindHDaggerWeaponBonusState] = useLocalStorage("windHDaggerWeaponBonusState", "grayscale(100%)")
    const [windHDaggerRefineState, setWindHDaggerRefineState] = useLocalStorage("windHDaggerRefineState", "grayscale(100%)");
    const [windHDaggerUnbindState, setWindHDaggerUnbindState] = useLocalStorage("windHDaggerUnbindState", 0);

    const [wbWiHDSphereCount, setwbWiHDSphereCountState] = useLocalStorage("wbWiHDSphereCount", 500);
    const [wbWiHDTailCount, setwbWiHDTailCountState] = useLocalStorage("wbWiHDTailCount", 360);
    const [wbWiHDHeartCount, setwbWiHDHeartCountState] = useLocalStorage("wbWiHDHeartCount", 80);
    const [wbWiHDOriCount, setwbWiHDOriCountState] = useLocalStorage("wbWiHDOriCount", 46);
    const [wbWiHDRupeeCost, setwbWiHDRupeeCost] = useLocalStorage("wbWiHDRupeeCost", 25);
    const [wbWiHDHornCount, setwbWiHDHornCountState] = useLocalStorage("wbWiHDHornCount", 90);

    const [windHAxeCraftState, setWindHAxeCraftState] = useLocalStorage("windHAxeCraftState", "grayscale(100%)")
    const [windHAxeWeaponBonusState, setWindHAxeWeaponBonusState] = useLocalStorage("windHAxeWeaponBonusState", "grayscale(100%)")
    const [windHAxeRefineState, setWindHAxeRefineState] = useLocalStorage("windHAxeRefineState", "grayscale(100%)");
    const [windHAxeUnbindState, setWindHAxeUnbindState] = useLocalStorage("windHAxeUnbindState", 0);

    const [wbWiHASphereCount, setwbWiHASphereCountState] = useLocalStorage("wbWiHASphereCount", 500);
    const [wbWiHATailCount, setwbWiHATailCountState] = useLocalStorage("wbWiHATailCount", 360);
    const [wbWiHAHeartCount, setwbWiHAHeartCountState] = useLocalStorage("wbWiHAHeartCount", 80);
    const [wbWiHAOriCount, setwbWiHAOriCountState] = useLocalStorage("wbWiHAOriCount", 46);
    const [wbWiHARupeeCost, setwbWiHARupeeCost] = useLocalStorage("wbWiHARupeeCost", 25);
    const [wbWiHAHornCount, setwbWiHAHornCountState] = useLocalStorage("wbWiHAHornCount", 90);

    const [windHLanceCraftState, setWindHLanceCraftState] = useLocalStorage("windHLanceCraftState", "grayscale(100%)")
    const [windHLanceWeaponBonusState, setWindHLanceWeaponBonusState] = useLocalStorage("windHLanceWeaponBonusState", "grayscale(100%)")
    const [windHLanceRefineState, setWindHLanceRefineState] = useLocalStorage("windHLanceRefineState", "grayscale(100%)");
    const [windHLanceUnbindState, setWindHLanceUnbindState] = useLocalStorage("windHLanceUnbindState", 0);

    const [wbWiHLSphereCount, setwbWiHLSphereCountState] = useLocalStorage("wbWiHLSphereCount", 500);
    const [wbWiHLTailCount, setwbWiHLTailCountState] = useLocalStorage("wbWiHLTailCount", 360);
    const [wbWiHLHeartCount, setwbWiHLHeartCountState] = useLocalStorage("wbWiHLHeartCount", 80);
    const [wbWiHLOriCount, setwbWiHLOriCountState] = useLocalStorage("wbWiHLOriCount", 46);
    const [wbWiHLRupeeCost, setwbWiHLRupeeCost] = useLocalStorage("wbWiHLRupeeCost", 25);
    const [wbWiHLHornCount, setwbWiHLHornCountState] = useLocalStorage("wbWiHLHornCount", 90);

    const [windHBowCraftState, setWindHBowCraftState] = useLocalStorage("windHBowCraftState", "grayscale(100%)")
    const [windHBowWeaponBonusState, setWindHBowWeaponBonusState] = useLocalStorage("windHBowWeaponBonusState", "grayscale(100%)")
    const [windHBowRefineState, setWindHBowRefineState] = useLocalStorage("windHBowRefineState", "grayscale(100%)");
    const [windHBowUnbindState, setWindHBowUnbindState] = useLocalStorage("windHBowUnbindState", 0);

    const [wbWiHBoSphereCount, setwbWiHBoSphereCountState] = useLocalStorage("wbWiHBoSphereCount", 500);
    const [wbWiHBoTailCount, setwbWiHBoTailCountState] = useLocalStorage("wbWiHBoTailCount", 360);
    const [wbWiHBoHeartCount, setwbWiHBoHeartCountState] = useLocalStorage("wbWiHBoHeartCount", 80);
    const [wbWiHBoOriCount, setwbWiHBoOriCountState] = useLocalStorage("wbWiHBoOriCount", 46);
    const [wbWiHBoRupeeCost, setwbWiHBoRupeeCost] = useLocalStorage("wbWiHBoRupeeCost", 25);
    const [wbWiHBoHornCount, setwbWiHBoHornCountState] = useLocalStorage("wbWiHBoHornCount", 90);

    const [windHWandCraftState, setWindHWandCraftState] = useLocalStorage("windHWandCraftState", "grayscale(100%)")
    const [windHWandWeaponBonusState, setWindHWandWeaponBonusState] = useLocalStorage("windHWandWeaponBonusState", "grayscale(100%)")
    const [windHWandRefineState, setWindHWandRefineState] = useLocalStorage("windHWandRefineState", "grayscale(100%)");
    const [windHWandUnbindState, setWindHWandUnbindState] = useLocalStorage("windHWandUnbindState", 0);

    const [wbWiHWSphereCount, setwbWiHWSphereCountState] = useLocalStorage("wbWiHWSphereCount", 500);
    const [wbWiHWTailCount, setwbWiHWTailCountState] = useLocalStorage("wbWiHWTailCount", 360);
    const [wbWiHWHeartCount, setwbWiHWHeartCountState] = useLocalStorage("wbWiHWHeartCount", 80);
    const [wbWiHWOriCount, setwbWiHWOriCountState] = useLocalStorage("wbWiHWOriCount", 46);
    const [wbWiHWRupeeCost, setwbWiHWRupeeCost] = useLocalStorage("wbWiHWRupeeCost", 25);
    const [wbWiHWHornCount, setwbWiHWHornCountState] = useLocalStorage("wbWiHWHornCount", 90);

    const [windHStaffCraftState, setWindHStaffCraftState] = useLocalStorage("windHStaffCraftState", "grayscale(100%)")
    const [windHStaffWeaponBonusState, setWindHStaffWeaponBonusState] = useLocalStorage("windHStaffWeaponBonusState", "grayscale(100%)")
    const [windHStaffRefineState, setWindHStaffRefineState] = useLocalStorage("windHStaffRefineState", "grayscale(100%)");
    const [windHStaffUnbindState, setWindHStaffUnbindState] = useLocalStorage("windHStaffUnbindState", 0);

    const [wbWiHStSphereCount, setwbWiHStSphereCountState] = useLocalStorage("wbWiHStSphereCount", 500);
    const [wbWiHStTailCount, setwbWiHStTailCountState] = useLocalStorage("wbWiHStTailCount", 360);
    const [wbWiHStHeartCount, setwbWiHStHeartCountState] = useLocalStorage("wbWiHStHeartCount", 80);
    const [wbWiHStOriCount, setwbWiHStOriCountState] = useLocalStorage("wbWiHStOriCount", 46);
    const [wbWiHStRupeeCost, setwbWiHStRupeeCost] = useLocalStorage("wbWiHStRupeeCost", 25);
    const [wbWiHStHornCount, setwbWiHStHornCountState] = useLocalStorage("wbWiHStHornCount", 90);

    const [windHManacasterCraftState, setWindHManacasterCraftState] = useLocalStorage("windHManacasterCraftState", "grayscale(100%)")
    const [windHManacasterWeaponBonusState, setWindHManacasterWeaponBonusState] = useLocalStorage("windHManacasterWeaponBonusState", "grayscale(100%)")
    const [windHManacasterRefineState, setWindHManacasterRefineState] = useLocalStorage("windHManacasterRefineState", "grayscale(100%)");
    const [windHManacasterUnbindState, setWindHManacasterUnbindState] = useLocalStorage("windHManacasterUnbindState", 0);

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
        if (windHWeaponChoice == "sword") {
            return <WindHDTSwordCost wbWiHSphereCount={wbWiHSphereCount} wbWiHTailCount={wbWiHTailCount} wbWiHHeartCount={wbWiHHeartCount} wbWiHOriCount={wbWiHOriCount} wbWiHRupeeCost={wbWiHRupeeCost.toFixed(1)} wbWiHHornCount={wbWiHHornCount} />
        }
        if (windHWeaponChoice == "blade") {
            return <WindHDTBladeCost wbWiHBlSphereCount={wbWiHBlSphereCount} wbWiHBlTailCount={wbWiHBlTailCount} wbWiHBlHeartCount={wbWiHBlHeartCount} wbWiHBlOriCount={wbWiHBlOriCount} wbWiHBlRupeeCost={wbWiHBlRupeeCost.toFixed(1)} wbWiHBlHornCount={wbWiHBlHornCount} />
        }
        if (windHWeaponChoice == "dagger") {
            return <WindHDTDaggerCost wbWiHDSphereCount={wbWiHDSphereCount} wbWiHDTailCount={wbWiHDTailCount} wbWiHDHeartCount={wbWiHDHeartCount} wbWiHDOriCount={wbWiHDOriCount} wbWiHDRupeeCost={wbWiHDRupeeCost.toFixed(1)} wbWiHDHornCount={wbWiHDHornCount} />
        }
        if (windHWeaponChoice == "axe") {
            return <WindHDTAxeCost wbWiHASphereCount={wbWiHASphereCount} wbWiHATailCount={wbWiHATailCount} wbWiHAHeartCount={wbWiHAHeartCount} wbWiHAOriCount={wbWiHAOriCount} wbWiHARupeeCost={wbWiHARupeeCost.toFixed(1)} wbWiHAHornCount={wbWiHAHornCount} />
        }
        if (windHWeaponChoice == "lance") {
            return <WindHDTLanceCost wbWiHLSphereCount={wbWiHLSphereCount} wbWiHLTailCount={wbWiHLTailCount} wbWiHLHeartCount={wbWiHLHeartCount} wbWiHLOriCount={wbWiHLOriCount} wbWiHLRupeeCost={wbWiHLRupeeCost.toFixed(1)} wbWiHLHornCount={wbWiHLHornCount} />
        }
        if (windHWeaponChoice == "bow") {
            return <WindHDTBowCost wbWiHBoSphereCount={wbWiHBoSphereCount} wbWiHBoTailCount={wbWiHBoTailCount} wbWiHBoHeartCount={wbWiHBoHeartCount} wbWiHBoOriCount={wbWiHBoOriCount} wbWiHBoRupeeCost={wbWiHBoRupeeCost.toFixed(1)} wbWiHBoHornCount={wbWiHBoHornCount} />
        }
        if (windHWeaponChoice == "wand") {
            return <WindHDTWandCost wbWiHWSphereCount={wbWiHWSphereCount} wbWiHWTailCount={wbWiHWTailCount} wbWiHWHeartCount={wbWiHWHeartCount} wbWiHWOriCount={wbWiHWOriCount} wbWiHWRupeeCost={wbWiHWRupeeCost.toFixed(1)} wbWiHWHornCount={wbWiHWHornCount} />
        }
        if (windHWeaponChoice == "staff") {
            return <WindHDTStaffCost wbWiHStSphereCount={wbWiHStSphereCount} wbWiHStTailCount={wbWiHStTailCount} wbWiHStHeartCount={wbWiHStHeartCount} wbWiHStOriCount={wbWiHStOriCount} wbWiHStRupeeCost={wbWiHStRupeeCost.toFixed(1)} wbWiHStHornCount={wbWiHStHornCount} />
        }
        if (windHWeaponChoice == "manacaster") {
            return <WindHDTManacasterCost wbWiHMSphereCount={wbWiHMSphereCount} wbWiHMTailCount={wbWiHMTailCount} wbWiHMHeartCount={wbWiHMHeartCount} wbWiHMOriCount={wbWiHMOriCount} wbWiHMRupeeCost={wbWiHMRupeeCost.toFixed(1)} wbWiHMHornCount={wbWiHMHornCount} />
        }
    }

    function craftWindSword() {
        if (windHSwordCraftState == "grayscale(100%)") {
            setWindHSwordCraftState("grayscale(0%)")
            setWindHWeaponChoiceState("sword")
            setwbWiHSphereCountState(wbWiHSphereCount - 25)
            setwbWiHTailCountState(wbWiHTailCount - 18)
            setwbWiHHeartCountState(wbWiHHeartCount - 5)
            setwbWiHOriCountState(wbWiHOriCount - 1)
            setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost - 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount - 25)
            setallwbWiHTailCount(allwbWiHTailCount - 18)
            setallwbWiHHeartCount(allwbWiHHeartCount - 5)
            setallwbWiHOriCount(allwbWiHOriCount - 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
        }
        else if (windHSwordCraftState == "grayscale(0%)") {
            setWindHSwordCraftState("grayscale(100%)")
            setWindHWeaponChoiceState("sword")
            setwbWiHSphereCountState(wbWiHSphereCount + 25)
            setwbWiHTailCountState(wbWiHTailCount + 18)
            setwbWiHHeartCountState(wbWiHHeartCount + 5)
            setwbWiHOriCountState(wbWiHOriCount + 1)
            setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost + 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount + 25)
            setallwbWiHTailCount(allwbWiHTailCount + 18)
            setallwbWiHHeartCount(allwbWiHHeartCount + 5)
            setallwbWiHOriCount(allwbWiHOriCount + 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
        }
    }

    function windSwordWeaponBonus() {
        if (windHSwordWeaponBonusState == "grayscale(100%)") {
            setWindHSwordWeaponBonusState("grayscale(0%)")
            setWindHWeaponChoiceState("sword")
            setwbWiHSphereCountState(wbWiHSphereCount - 150)
            setwbWiHTailCountState(wbWiHTailCount - 100)
            setwbWiHHornCountState(wbWiHHornCount - 30)
            setwbWiHHeartCountState(wbWiHHeartCount - 10)
            setwbWiHOriCountState(wbWiHOriCount - 30)
            setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost - 10))
            setallwbWiHSphereCount(allwbWiHSphereCount - 150)
            setallwbWiHTailCount(allwbWiHTailCount - 100)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 10))
        }
        else if (windHSwordWeaponBonusState == "grayscale(0%)") {
            setWindHSwordWeaponBonusState("grayscale(100%)")
            setWindHWeaponChoiceState("sword")
            setwbWiHSphereCountState(wbWiHSphereCount + 150)
            setwbWiHTailCountState(wbWiHTailCount + 100)
            setwbWiHHornCountState(wbWiHHornCount + 30)
            setwbWiHHeartCountState(wbWiHHeartCount + 10)
            setwbWiHOriCountState(wbWiHOriCount + 30)
            setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost + 10))
            setallwbWiHSphereCount(allwbWiHSphereCount + 150)
            setallwbWiHTailCount(allwbWiHTailCount + 100)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 10))
        }
    }

    function windSwordRefine() {
        if (windHSwordRefineState == "grayscale(100%)") {
            setWindHSwordRefineState("grayscale(0%)")
            setWindHWeaponChoiceState("sword")
            setwbWiHSphereCountState(wbWiHSphereCount - 50)
            setwbWiHTailCountState(wbWiHTailCount - 40)
            setwbWiHHornCountState(wbWiHHornCount - 30)
            setwbWiHHeartCountState(wbWiHHeartCount - 10)
            setwbWiHOriCountState(wbWiHOriCount - 3)
            setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost - 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount - 50)
            setallwbWiHTailCount(allwbWiHTailCount - 40)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.5))
        }
        else if (windHSwordRefineState == "grayscale(0%)") {
            setWindHSwordRefineState("grayscale(100%)")
            setWindHWeaponChoiceState("sword")
            setwbWiHSphereCountState(wbWiHSphereCount + 50)
            setwbWiHTailCountState(wbWiHTailCount + 40)
            setwbWiHHornCountState(wbWiHHornCount + 30)
            setwbWiHHeartCountState(wbWiHHeartCount + 10)
            setwbWiHOriCountState(wbWiHOriCount + 3)
            setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost + 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount + 50)
            setallwbWiHTailCount(allwbWiHTailCount + 40)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.5))
        }
    }

    function handleWindSwordUnbindIncrement(event) {
        setWindHWeaponChoiceState("sword");
        if (windHSwordUnbindState < event.target.value) {
            if (event.target.value - windHSwordUnbindState == 1) {
                setWindHSwordUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHSphereCountState(wbWiHSphereCount - 25)
                    setwbWiHTailCountState(wbWiHTailCount - 18)
                    setwbWiHHeartCountState(wbWiHHeartCount - 5)
                    setwbWiHOriCountState(wbWiHOriCount - 1)
                    setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost - 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 25)
                    setallwbWiHTailCount(allwbWiHTailCount - 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 5)
                    setallwbWiHOriCount(allwbWiHOriCount - 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHSphereCountState(wbWiHSphereCount - 175)
                    setwbWiHTailCountState(wbWiHTailCount - 130)
                    setwbWiHHornCountState(wbWiHHornCount - 30)
                    setwbWiHHeartCountState(wbWiHHeartCount - 35)
                    setwbWiHOriCountState(wbWiHOriCount - 8)
                    setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost - 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 175)
                    setallwbWiHTailCount(allwbWiHTailCount - 130)
                    setallwbWiHHornCount(allwbWiHHornCount - 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 35)
                    setallwbWiHOriCount(allwbWiHOriCount - 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 7.5))
                }
            }
        }
        else if (windHSwordUnbindState > event.target.value) {
            if (windHSwordUnbindState - event.target.value == 1) {
                setWindHSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHSphereCountState(wbWiHSphereCount + 25)
                    setwbWiHTailCountState(wbWiHTailCount + 18)
                    setwbWiHHeartCountState(wbWiHHeartCount + 5)
                    setwbWiHOriCountState(wbWiHOriCount + 1)
                    setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost + 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 25)
                    setallwbWiHTailCount(allwbWiHTailCount + 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 5)
                    setallwbWiHOriCount(allwbWiHOriCount + 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHSphereCountState(wbWiHSphereCount + 175)
                    setwbWiHTailCountState(wbWiHTailCount + 130)
                    setwbWiHHornCountState(wbWiHHornCount + 30)
                    setwbWiHHeartCountState(wbWiHHeartCount + 35)
                    setwbWiHOriCountState(wbWiHOriCount + 8)
                    setwbWiHRupeeCost(parseFloat(wbWiHRupeeCost + 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 175)
                    setallwbWiHTailCount(allwbWiHTailCount + 130)
                    setallwbWiHHornCount(allwbWiHHornCount + 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 35)
                    setallwbWiHOriCount(allwbWiHOriCount + 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindBlade() {
        if (windHBladeCraftState == "grayscale(100%)") {
            setWindHBladeCraftState("grayscale(0%)")
            setWindHWeaponChoiceState("blade")
            setwbWiHBlSphereCountState(wbWiHBlSphereCount - 25)
            setwbWiHBlTailCountState(wbWiHBlTailCount - 18)
            setwbWiHBlHeartCountState(wbWiHBlHeartCount - 5)
            setwbWiHBlOriCountState(wbWiHBlOriCount - 1)
            setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost - 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount - 25)
            setallwbWiHTailCount(allwbWiHTailCount - 18)
            setallwbWiHHeartCount(allwbWiHHeartCount - 5)
            setallwbWiHOriCount(allwbWiHOriCount - 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
        }
        else if (windHBladeCraftState == "grayscale(0%)") {
            setWindHBladeCraftState("grayscale(100%)")
            setWindHWeaponChoiceState("blade")
            setwbWiHBlSphereCountState(wbWiHBlSphereCount + 25)
            setwbWiHBlTailCountState(wbWiHBlTailCount + 18)
            setwbWiHBlHeartCountState(wbWiHBlHeartCount + 5)
            setwbWiHBlOriCountState(wbWiHBlOriCount + 1)
            setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost + 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount + 25)
            setallwbWiHTailCount(allwbWiHTailCount + 18)
            setallwbWiHHeartCount(allwbWiHHeartCount + 5)
            setallwbWiHOriCount(allwbWiHOriCount + 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
        }
    }

    function windBladeWeaponBonus() {
        if (windHBladeWeaponBonusState == "grayscale(100%)") {
            setWindHBladeWeaponBonusState("grayscale(0%)")
            setWindHWeaponChoiceState("blade")
            setwbWiHBlSphereCountState(wbWiHBlSphereCount - 150)
            setwbWiHBlTailCountState(wbWiHBlTailCount - 100)
            setwbWiHBlHornCountState(wbWiHBlHornCount - 30)
            setwbWiHBlHeartCountState(wbWiHBlHeartCount - 10)
            setwbWiHBlOriCountState(wbWiHBlOriCount - 30)
            setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost - 10))
            setallwbWiHSphereCount(allwbWiHSphereCount - 150)
            setallwbWiHTailCount(allwbWiHTailCount - 100)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 10))
        }
        else if (windHBladeWeaponBonusState == "grayscale(0%)") {
            setWindHBladeWeaponBonusState("grayscale(100%)")
            setWindHWeaponChoiceState("blade")
            setwbWiHBlSphereCountState(wbWiHBlSphereCount + 150)
            setwbWiHBlTailCountState(wbWiHBlTailCount + 100)
            setwbWiHBlHornCountState(wbWiHBlHornCount + 30)
            setwbWiHBlHeartCountState(wbWiHBlHeartCount + 10)
            setwbWiHBlOriCountState(wbWiHBlOriCount + 30)
            setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost + 10))
            setallwbWiHSphereCount(allwbWiHSphereCount + 150)
            setallwbWiHTailCount(allwbWiHTailCount + 100)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 10))
        }
    }

    function windBladeRefine() {
        if (windHBladeRefineState == "grayscale(100%)") {
            setWindHBladeRefineState("grayscale(0%)")
            setWindHWeaponChoiceState("blade")
            setwbWiHBlSphereCountState(wbWiHBlSphereCount - 50)
            setwbWiHBlTailCountState(wbWiHBlTailCount - 40)
            setwbWiHBlHornCountState(wbWiHBlHornCount - 30)
            setwbWiHBlHeartCountState(wbWiHBlHeartCount - 10)
            setwbWiHBlOriCountState(wbWiHBlOriCount - 3)
            setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost - 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount - 50)
            setallwbWiHTailCount(allwbWiHTailCount - 40)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.5))
        }
        else if (windHBladeRefineState == "grayscale(0%)") {
            setWindHBladeRefineState("grayscale(100%)")
            setWindHWeaponChoiceState("blade")
            setwbWiHBlSphereCountState(wbWiHBlSphereCount + 50)
            setwbWiHBlTailCountState(wbWiHBlTailCount + 40)
            setwbWiHBlHornCountState(wbWiHBlHornCount + 30)
            setwbWiHBlHeartCountState(wbWiHBlHeartCount + 10)
            setwbWiHBlOriCountState(wbWiHBlOriCount + 3)
            setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost + 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount + 50)
            setallwbWiHTailCount(allwbWiHTailCount + 40)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.5))
        }
    }

    function handleWindBladeUnbindIncrement(event) {
        setWindHWeaponChoiceState("blade");
        if (windHBladeUnbindState < event.target.value) {
            if (event.target.value - windHBladeUnbindState == 1) {
                setWindHBladeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHBlSphereCountState(wbWiHBlSphereCount - 25)
                    setwbWiHBlTailCountState(wbWiHBlTailCount - 18)
                    setwbWiHBlHeartCountState(wbWiHBlHeartCount - 5)
                    setwbWiHBlOriCountState(wbWiHBlOriCount - 1)
                    setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost - 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 25)
                    setallwbWiHTailCount(allwbWiHTailCount - 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 5)
                    setallwbWiHOriCount(allwbWiHOriCount - 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHBlSphereCountState(wbWiHBlSphereCount - 175)
                    setwbWiHBlTailCountState(wbWiHBlTailCount - 130)
                    setwbWiHBlHornCountState(wbWiHBlHornCount - 30)
                    setwbWiHBlHeartCountState(wbWiHBlHeartCount - 35)
                    setwbWiHBlOriCountState(wbWiHBlOriCount - 8)
                    setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost - 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 175)
                    setallwbWiHTailCount(allwbWiHTailCount - 130)
                    setallwbWiHHornCount(allwbWiHHornCount - 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 35)
                    setallwbWiHOriCount(allwbWiHOriCount - 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 7.5))
                }
            }
        }
        else if (windHBladeUnbindState > event.target.value) {
            if (windHBladeUnbindState - event.target.value == 1) {
                setWindHBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHBlSphereCountState(wbWiHBlSphereCount + 25)
                    setwbWiHBlTailCountState(wbWiHBlTailCount + 18)
                    setwbWiHBlHeartCountState(wbWiHBlHeartCount + 5)
                    setwbWiHBlOriCountState(wbWiHBlOriCount + 1)
                    setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost + 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 25)
                    setallwbWiHTailCount(allwbWiHTailCount + 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 5)
                    setallwbWiHOriCount(allwbWiHOriCount + 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHBlSphereCountState(wbWiHBlSphereCount + 175)
                    setwbWiHBlTailCountState(wbWiHBlTailCount + 130)
                    setwbWiHBlHornCountState(wbWiHBlHornCount + 30)
                    setwbWiHBlHeartCountState(wbWiHBlHeartCount + 35)
                    setwbWiHBlOriCountState(wbWiHBlOriCount + 8)
                    setwbWiHBlRupeeCost(parseFloat(wbWiHBlRupeeCost + 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 175)
                    setallwbWiHTailCount(allwbWiHTailCount + 130)
                    setallwbWiHHornCount(allwbWiHHornCount + 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 35)
                    setallwbWiHOriCount(allwbWiHOriCount + 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindDagger() {
        if (windHDaggerCraftState == "grayscale(100%)") {
            setWindHDaggerCraftState("grayscale(0%)")
            setWindHWeaponChoiceState("dagger")
            setwbWiHDSphereCountState(wbWiHDSphereCount - 25)
            setwbWiHDTailCountState(wbWiHDTailCount - 18)
            setwbWiHDHeartCountState(wbWiHDHeartCount - 5)
            setwbWiHDOriCountState(wbWiHDOriCount - 1)
            setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost - 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount - 25)
            setallwbWiHTailCount(allwbWiHTailCount - 18)
            setallwbWiHHeartCount(allwbWiHHeartCount - 5)
            setallwbWiHOriCount(allwbWiHOriCount - 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
        }
        else if (windHDaggerCraftState == "grayscale(0%)") {
            setWindHDaggerCraftState("grayscale(100%)")
            setWindHWeaponChoiceState("dagger")
            setwbWiHDSphereCountState(wbWiHDSphereCount + 25)
            setwbWiHDTailCountState(wbWiHDTailCount + 18)
            setwbWiHDHeartCountState(wbWiHDHeartCount + 5)
            setwbWiHDOriCountState(wbWiHDOriCount + 1)
            setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost + 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount + 25)
            setallwbWiHTailCount(allwbWiHTailCount + 18)
            setallwbWiHHeartCount(allwbWiHHeartCount + 5)
            setallwbWiHOriCount(allwbWiHOriCount + 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
        }
    }

    function windDaggerWeaponBonus() {
        if (windHDaggerWeaponBonusState == "grayscale(100%)") {
            setWindHDaggerWeaponBonusState("grayscale(0%)")
            setWindHWeaponChoiceState("dagger")
            setwbWiHDSphereCountState(wbWiHDSphereCount - 150)
            setwbWiHDTailCountState(wbWiHDTailCount - 100)
            setwbWiHDHornCountState(wbWiHDHornCount - 30)
            setwbWiHDHeartCountState(wbWiHDHeartCount - 10)
            setwbWiHDOriCountState(wbWiHDOriCount - 30)
            setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost - 10))
            setallwbWiHSphereCount(allwbWiHSphereCount - 150)
            setallwbWiHTailCount(allwbWiHTailCount - 100)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 10))
        }
        else if (windHDaggerWeaponBonusState == "grayscale(0%)") {
            setWindHDaggerWeaponBonusState("grayscale(100%)")
            setWindHWeaponChoiceState("dagger")
            setwbWiHDSphereCountState(wbWiHDSphereCount + 150)
            setwbWiHDTailCountState(wbWiHDTailCount + 100)
            setwbWiHDHornCountState(wbWiHDHornCount + 30)
            setwbWiHDHeartCountState(wbWiHDHeartCount + 10)
            setwbWiHDOriCountState(wbWiHDOriCount + 30)
            setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost + 10))
            setallwbWiHSphereCount(allwbWiHSphereCount + 150)
            setallwbWiHTailCount(allwbWiHTailCount + 100)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 10))
        }
    }

    function windDaggerRefine() {
        if (windHDaggerRefineState == "grayscale(100%)") {
            setWindHDaggerRefineState("grayscale(0%)")
            setWindHWeaponChoiceState("dagger")
            setwbWiHDSphereCountState(wbWiHDSphereCount - 50)
            setwbWiHDTailCountState(wbWiHDTailCount - 40)
            setwbWiHDHornCountState(wbWiHDHornCount - 30)
            setwbWiHDHeartCountState(wbWiHDHeartCount - 10)
            setwbWiHDOriCountState(wbWiHDOriCount - 3)
            setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost - 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount - 50)
            setallwbWiHTailCount(allwbWiHTailCount - 40)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.5))
        }
        else if (windHDaggerRefineState == "grayscale(0%)") {
            setWindHDaggerRefineState("grayscale(100%)")
            setWindHWeaponChoiceState("dagger")
            setwbWiHDSphereCountState(wbWiHDSphereCount + 50)
            setwbWiHDTailCountState(wbWiHDTailCount + 40)
            setwbWiHDHornCountState(wbWiHDHornCount + 30)
            setwbWiHDHeartCountState(wbWiHDHeartCount + 10)
            setwbWiHDOriCountState(wbWiHDOriCount + 3)
            setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost + 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount + 50)
            setallwbWiHTailCount(allwbWiHTailCount + 40)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.5))
        }
    }

    function handleWindDaggerUnbindIncrement(event) {
        setWindHWeaponChoiceState("dagger");
        if (windHDaggerUnbindState < event.target.value) {
            if (event.target.value - windHDaggerUnbindState == 1) {
                setWindHDaggerUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHDSphereCountState(wbWiHDSphereCount - 25)
                    setwbWiHDTailCountState(wbWiHDTailCount - 18)
                    setwbWiHDHeartCountState(wbWiHDHeartCount - 5)
                    setwbWiHDOriCountState(wbWiHDOriCount - 1)
                    setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost - 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 25)
                    setallwbWiHTailCount(allwbWiHTailCount - 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 5)
                    setallwbWiHOriCount(allwbWiHOriCount - 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHDSphereCountState(wbWiHDSphereCount - 175)
                    setwbWiHDTailCountState(wbWiHDTailCount - 130)
                    setwbWiHDHornCountState(wbWiHDHornCount - 30)
                    setwbWiHDHeartCountState(wbWiHDHeartCount - 35)
                    setwbWiHDOriCountState(wbWiHDOriCount - 8)
                    setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost - 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 175)
                    setallwbWiHTailCount(allwbWiHTailCount - 130)
                    setallwbWiHHornCount(allwbWiHHornCount - 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 35)
                    setallwbWiHOriCount(allwbWiHOriCount - 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 7.5))
                }
            }
        }
        else if (windHDaggerUnbindState > event.target.value) {
            if (windHDaggerUnbindState - event.target.value == 1) {
                setWindHDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHDSphereCountState(wbWiHDSphereCount + 25)
                    setwbWiHDTailCountState(wbWiHDTailCount + 18)
                    setwbWiHDHeartCountState(wbWiHDHeartCount + 5)
                    setwbWiHDOriCountState(wbWiHDOriCount + 1)
                    setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost + 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 25)
                    setallwbWiHTailCount(allwbWiHTailCount + 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 5)
                    setallwbWiHOriCount(allwbWiHOriCount + 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHDSphereCountState(wbWiHDSphereCount + 175)
                    setwbWiHDTailCountState(wbWiHDTailCount + 130)
                    setwbWiHDHornCountState(wbWiHDHornCount + 30)
                    setwbWiHDHeartCountState(wbWiHDHeartCount + 35)
                    setwbWiHDOriCountState(wbWiHDOriCount + 8)
                    setwbWiHDRupeeCost(parseFloat(wbWiHDRupeeCost + 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 175)
                    setallwbWiHTailCount(allwbWiHTailCount + 130)
                    setallwbWiHHornCount(allwbWiHHornCount + 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 35)
                    setallwbWiHOriCount(allwbWiHOriCount + 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindAxe() {
        if (windHAxeCraftState == "grayscale(100%)") {
            setWindHAxeCraftState("grayscale(0%)")
            setWindHWeaponChoiceState("axe")
            setwbWiHASphereCountState(wbWiHASphereCount - 25)
            setwbWiHATailCountState(wbWiHATailCount - 18)
            setwbWiHAHeartCountState(wbWiHAHeartCount - 5)
            setwbWiHAOriCountState(wbWiHAOriCount - 1)
            setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost - 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount - 25)
            setallwbWiHTailCount(allwbWiHTailCount - 18)
            setallwbWiHHeartCount(allwbWiHHeartCount - 5)
            setallwbWiHOriCount(allwbWiHOriCount - 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
        }
        else if (windHAxeCraftState == "grayscale(0%)") {
            setWindHAxeCraftState("grayscale(100%)")
            setWindHWeaponChoiceState("axe")
            setwbWiHASphereCountState(wbWiHASphereCount + 25)
            setwbWiHATailCountState(wbWiHATailCount + 18)
            setwbWiHAHeartCountState(wbWiHAHeartCount + 5)
            setwbWiHAOriCountState(wbWiHAOriCount + 1)
            setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost + 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount + 25)
            setallwbWiHTailCount(allwbWiHTailCount + 18)
            setallwbWiHHeartCount(allwbWiHHeartCount + 5)
            setallwbWiHOriCount(allwbWiHOriCount + 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
        }
    }

    function windAxeWeaponBonus() {
        if (windHAxeWeaponBonusState == "grayscale(100%)") {
            setWindHAxeWeaponBonusState("grayscale(0%)")
            setWindHWeaponChoiceState("axe")
            setwbWiHASphereCountState(wbWiHASphereCount - 150)
            setwbWiHATailCountState(wbWiHATailCount - 100)
            setwbWiHAHornCountState(wbWiHAHornCount - 30)
            setwbWiHAHeartCountState(wbWiHAHeartCount - 10)
            setwbWiHAOriCountState(wbWiHAOriCount - 30)
            setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost - 10))
            setallwbWiHSphereCount(allwbWiHSphereCount - 150)
            setallwbWiHTailCount(allwbWiHTailCount - 100)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 10))
        }
        else if (windHAxeWeaponBonusState == "grayscale(0%)") {
            setWindHAxeWeaponBonusState("grayscale(100%)")
            setWindHWeaponChoiceState("axe")
            setwbWiHASphereCountState(wbWiHASphereCount + 150)
            setwbWiHATailCountState(wbWiHATailCount + 100)
            setwbWiHAHornCountState(wbWiHAHornCount + 30)
            setwbWiHAHeartCountState(wbWiHAHeartCount + 10)
            setwbWiHAOriCountState(wbWiHAOriCount + 30)
            setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost + 10))
            setallwbWiHSphereCount(allwbWiHSphereCount + 150)
            setallwbWiHTailCount(allwbWiHTailCount + 100)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 10))
        }
    }

    function windAxeRefine() {
        if (windHAxeRefineState == "grayscale(100%)") {
            setWindHAxeRefineState("grayscale(0%)")
            setWindHWeaponChoiceState("axe")
            setwbWiHASphereCountState(wbWiHASphereCount - 50)
            setwbWiHATailCountState(wbWiHATailCount - 40)
            setwbWiHAHornCountState(wbWiHAHornCount - 30)
            setwbWiHAHeartCountState(wbWiHAHeartCount - 10)
            setwbWiHAOriCountState(wbWiHAOriCount - 3)
            setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost - 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount - 50)
            setallwbWiHTailCount(allwbWiHTailCount - 40)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.5))
        }
        else if (windHAxeRefineState == "grayscale(0%)") {
            setWindHAxeRefineState("grayscale(100%)")
            setWindHWeaponChoiceState("axe")
            setwbWiHASphereCountState(wbWiHASphereCount + 50)
            setwbWiHATailCountState(wbWiHATailCount + 40)
            setwbWiHAHornCountState(wbWiHAHornCount + 30)
            setwbWiHAHeartCountState(wbWiHAHeartCount + 10)
            setwbWiHAOriCountState(wbWiHAOriCount + 3)
            setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost + 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount + 50)
            setallwbWiHTailCount(allwbWiHTailCount + 40)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.5))
        }
    }

    function handleWindAxeUnbindIncrement(event) {
        setWindHWeaponChoiceState("axe");
        if (windHAxeUnbindState < event.target.value) {
            if (event.target.value - windHAxeUnbindState == 1) {
                setWindHAxeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHASphereCountState(wbWiHASphereCount - 25)
                    setwbWiHATailCountState(wbWiHATailCount - 18)
                    setwbWiHAHeartCountState(wbWiHAHeartCount - 5)
                    setwbWiHAOriCountState(wbWiHAOriCount - 1)
                    setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost - 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 25)
                    setallwbWiHTailCount(allwbWiHTailCount - 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 5)
                    setallwbWiHOriCount(allwbWiHOriCount - 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHASphereCountState(wbWiHASphereCount - 175)
                    setwbWiHATailCountState(wbWiHATailCount - 130)
                    setwbWiHAHornCountState(wbWiHAHornCount - 30)
                    setwbWiHAHeartCountState(wbWiHAHeartCount - 35)
                    setwbWiHAOriCountState(wbWiHAOriCount - 8)
                    setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost - 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 175)
                    setallwbWiHTailCount(allwbWiHTailCount - 130)
                    setallwbWiHHornCount(allwbWiHHornCount - 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 35)
                    setallwbWiHOriCount(allwbWiHOriCount - 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 7.5))
                }
            }
        }
        else if (windHAxeUnbindState > event.target.value) {
            if (windHAxeUnbindState - event.target.value == 1) {
                setWindHAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHASphereCountState(wbWiHASphereCount + 25)
                    setwbWiHATailCountState(wbWiHATailCount + 18)
                    setwbWiHAHeartCountState(wbWiHAHeartCount + 5)
                    setwbWiHAOriCountState(wbWiHAOriCount + 1)
                    setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost + 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 25)
                    setallwbWiHTailCount(allwbWiHTailCount + 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 5)
                    setallwbWiHOriCount(allwbWiHOriCount + 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHASphereCountState(wbWiHASphereCount + 175)
                    setwbWiHATailCountState(wbWiHATailCount + 130)
                    setwbWiHAHornCountState(wbWiHAHornCount + 30)
                    setwbWiHAHeartCountState(wbWiHAHeartCount + 35)
                    setwbWiHAOriCountState(wbWiHAOriCount + 8)
                    setwbWiHARupeeCost(parseFloat(wbWiHARupeeCost + 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 175)
                    setallwbWiHTailCount(allwbWiHTailCount + 130)
                    setallwbWiHHornCount(allwbWiHHornCount + 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 35)
                    setallwbWiHOriCount(allwbWiHOriCount + 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindLance() {
        if (windHLanceCraftState == "grayscale(100%)") {
            setWindHLanceCraftState("grayscale(0%)")
            setWindHWeaponChoiceState("lance")
            setwbWiHLSphereCountState(wbWiHLSphereCount - 25)
            setwbWiHLTailCountState(wbWiHLTailCount - 18)
            setwbWiHLHeartCountState(wbWiHLHeartCount - 5)
            setwbWiHLOriCountState(wbWiHLOriCount - 1)
            setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost - 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount - 25)
            setallwbWiHTailCount(allwbWiHTailCount - 18)
            setallwbWiHHeartCount(allwbWiHHeartCount - 5)
            setallwbWiHOriCount(allwbWiHOriCount - 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
        }
        else if (windHLanceCraftState == "grayscale(0%)") {
            setWindHLanceCraftState("grayscale(100%)")
            setWindHWeaponChoiceState("lance")
            setwbWiHLSphereCountState(wbWiHLSphereCount + 25)
            setwbWiHLTailCountState(wbWiHLTailCount + 18)
            setwbWiHLHeartCountState(wbWiHLHeartCount + 5)
            setwbWiHLOriCountState(wbWiHLOriCount + 1)
            setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost + 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount + 25)
            setallwbWiHTailCount(allwbWiHTailCount + 18)
            setallwbWiHHeartCount(allwbWiHHeartCount + 5)
            setallwbWiHOriCount(allwbWiHOriCount + 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
        }
    }

    function windLanceWeaponBonus() {
        if (windHLanceWeaponBonusState == "grayscale(100%)") {
            setWindHLanceWeaponBonusState("grayscale(0%)")
            setWindHWeaponChoiceState("lance")
            setwbWiHLSphereCountState(wbWiHLSphereCount - 150)
            setwbWiHLTailCountState(wbWiHLTailCount - 100)
            setwbWiHLHornCountState(wbWiHLHornCount - 30)
            setwbWiHLHeartCountState(wbWiHLHeartCount - 10)
            setwbWiHLOriCountState(wbWiHLOriCount - 30)
            setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost - 10))
            setallwbWiHSphereCount(allwbWiHSphereCount - 150)
            setallwbWiHTailCount(allwbWiHTailCount - 100)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 10))
        }
        else if (windHLanceWeaponBonusState == "grayscale(0%)") {
            setWindHLanceWeaponBonusState("grayscale(100%)")
            setWindHWeaponChoiceState("lance")
            setwbWiHLSphereCountState(wbWiHLSphereCount + 150)
            setwbWiHLTailCountState(wbWiHLTailCount + 100)
            setwbWiHLHornCountState(wbWiHLHornCount + 30)
            setwbWiHLHeartCountState(wbWiHLHeartCount + 10)
            setwbWiHLOriCountState(wbWiHLOriCount + 30)
            setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost + 10))
            setallwbWiHSphereCount(allwbWiHSphereCount + 150)
            setallwbWiHTailCount(allwbWiHTailCount + 100)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 10))
        }
    }

    function windLanceRefine() {
        if (windHLanceRefineState == "grayscale(100%)") {
            setWindHLanceRefineState("grayscale(0%)")
            setWindHWeaponChoiceState("lance")
            setwbWiHLSphereCountState(wbWiHLSphereCount - 50)
            setwbWiHLTailCountState(wbWiHLTailCount - 40)
            setwbWiHLHornCountState(wbWiHLHornCount - 30)
            setwbWiHLHeartCountState(wbWiHLHeartCount - 10)
            setwbWiHLOriCountState(wbWiHLOriCount - 3)
            setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost - 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount - 50)
            setallwbWiHTailCount(allwbWiHTailCount - 40)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.5))
        }
        else if (windHLanceRefineState == "grayscale(0%)") {
            setWindHLanceRefineState("grayscale(100%)")
            setWindHWeaponChoiceState("lance")
            setwbWiHLSphereCountState(wbWiHLSphereCount + 50)
            setwbWiHLTailCountState(wbWiHLTailCount + 40)
            setwbWiHLHornCountState(wbWiHLHornCount + 30)
            setwbWiHLHeartCountState(wbWiHLHeartCount + 10)
            setwbWiHLOriCountState(wbWiHLOriCount + 3)
            setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost + 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount + 50)
            setallwbWiHTailCount(allwbWiHTailCount + 40)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.5))
        }
    }

    function handleWindLanceUnbindIncrement(event) {
        setWindHWeaponChoiceState("lance");
        if (windHLanceUnbindState < event.target.value) {
            if (event.target.value - windHLanceUnbindState == 1) {
                setWindHLanceUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHLSphereCountState(wbWiHLSphereCount - 25)
                    setwbWiHLTailCountState(wbWiHLTailCount - 18)
                    setwbWiHLHeartCountState(wbWiHLHeartCount - 5)
                    setwbWiHLOriCountState(wbWiHLOriCount - 1)
                    setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost - 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 25)
                    setallwbWiHTailCount(allwbWiHTailCount - 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 5)
                    setallwbWiHOriCount(allwbWiHOriCount - 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHLSphereCountState(wbWiHLSphereCount - 175)
                    setwbWiHLTailCountState(wbWiHLTailCount - 130)
                    setwbWiHLHornCountState(wbWiHLHornCount - 30)
                    setwbWiHLHeartCountState(wbWiHLHeartCount - 35)
                    setwbWiHLOriCountState(wbWiHLOriCount - 8)
                    setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost - 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 175)
                    setallwbWiHTailCount(allwbWiHTailCount - 130)
                    setallwbWiHHornCount(allwbWiHHornCount - 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 35)
                    setallwbWiHOriCount(allwbWiHOriCount - 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 7.5))
                }
            }
        }
        else if (windHLanceUnbindState > event.target.value) {
            if (windHLanceUnbindState - event.target.value == 1) {
                setWindHLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHLSphereCountState(wbWiHLSphereCount + 25)
                    setwbWiHLTailCountState(wbWiHLTailCount + 18)
                    setwbWiHLHeartCountState(wbWiHLHeartCount + 5)
                    setwbWiHLOriCountState(wbWiHLOriCount + 1)
                    setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost + 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 25)
                    setallwbWiHTailCount(allwbWiHTailCount + 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 5)
                    setallwbWiHOriCount(allwbWiHOriCount + 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHLSphereCountState(wbWiHLSphereCount + 175)
                    setwbWiHLTailCountState(wbWiHLTailCount + 130)
                    setwbWiHLHornCountState(wbWiHLHornCount + 30)
                    setwbWiHLHeartCountState(wbWiHLHeartCount + 35)
                    setwbWiHLOriCountState(wbWiHLOriCount + 8)
                    setwbWiHLRupeeCost(parseFloat(wbWiHLRupeeCost + 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 175)
                    setallwbWiHTailCount(allwbWiHTailCount + 130)
                    setallwbWiHHornCount(allwbWiHHornCount + 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 35)
                    setallwbWiHOriCount(allwbWiHOriCount + 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindBow() {
        if (windHBowCraftState == "grayscale(100%)") {
            setWindHBowCraftState("grayscale(0%)")
            setWindHWeaponChoiceState("bow")
            setwbWiHBoSphereCountState(wbWiHBoSphereCount - 25)
            setwbWiHBoTailCountState(wbWiHBoTailCount - 18)
            setwbWiHBoHeartCountState(wbWiHBoHeartCount - 5)
            setwbWiHBoOriCountState(wbWiHBoOriCount - 1)
            setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost - 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount - 25)
            setallwbWiHTailCount(allwbWiHTailCount - 18)
            setallwbWiHHeartCount(allwbWiHHeartCount - 5)
            setallwbWiHOriCount(allwbWiHOriCount - 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
        }
        else if (windHBowCraftState == "grayscale(0%)") {
            setWindHBowCraftState("grayscale(100%)")
            setWindHWeaponChoiceState("bow")
            setwbWiHBoSphereCountState(wbWiHBoSphereCount + 25)
            setwbWiHBoTailCountState(wbWiHBoTailCount + 18)
            setwbWiHBoHeartCountState(wbWiHBoHeartCount + 5)
            setwbWiHBoOriCountState(wbWiHBoOriCount + 1)
            setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost + 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount + 25)
            setallwbWiHTailCount(allwbWiHTailCount + 18)
            setallwbWiHHeartCount(allwbWiHHeartCount + 5)
            setallwbWiHOriCount(allwbWiHOriCount + 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
        }
    }

    function windBowWeaponBonus() {
        if (windHBowWeaponBonusState == "grayscale(100%)") {
            setWindHBowWeaponBonusState("grayscale(0%)")
            setWindHWeaponChoiceState("bow")
            setwbWiHBoSphereCountState(wbWiHBoSphereCount - 150)
            setwbWiHBoTailCountState(wbWiHBoTailCount - 100)
            setwbWiHBoHornCountState(wbWiHBoHornCount - 30)
            setwbWiHBoHeartCountState(wbWiHBoHeartCount - 10)
            setwbWiHBoOriCountState(wbWiHBoOriCount - 30)
            setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost - 10))
            setallwbWiHSphereCount(allwbWiHSphereCount - 150)
            setallwbWiHTailCount(allwbWiHTailCount - 100)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 10))
        }
        else if (windHBowWeaponBonusState == "grayscale(0%)") {
            setWindHBowWeaponBonusState("grayscale(100%)")
            setWindHWeaponChoiceState("bow")
            setwbWiHBoSphereCountState(wbWiHBoSphereCount + 150)
            setwbWiHBoTailCountState(wbWiHBoTailCount + 100)
            setwbWiHBoHornCountState(wbWiHBoHornCount + 30)
            setwbWiHBoHeartCountState(wbWiHBoHeartCount + 10)
            setwbWiHBoOriCountState(wbWiHBoOriCount + 30)
            setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost + 10))
            setallwbWiHSphereCount(allwbWiHSphereCount + 150)
            setallwbWiHTailCount(allwbWiHTailCount + 100)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 10))
        }
    }

    function windBowRefine() {
        if (windHBowRefineState == "grayscale(100%)") {
            setWindHBowRefineState("grayscale(0%)")
            setWindHWeaponChoiceState("bow")
            setwbWiHBoSphereCountState(wbWiHBoSphereCount - 50)
            setwbWiHBoTailCountState(wbWiHBoTailCount - 40)
            setwbWiHBoHornCountState(wbWiHBoHornCount - 30)
            setwbWiHBoHeartCountState(wbWiHBoHeartCount - 10)
            setwbWiHBoOriCountState(wbWiHBoOriCount - 3)
            setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost - 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount - 50)
            setallwbWiHTailCount(allwbWiHTailCount - 40)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.5))
        }
        else if (windHBowRefineState == "grayscale(0%)") {
            setWindHBowRefineState("grayscale(100%)")
            setWindHWeaponChoiceState("bow")
            setwbWiHBoSphereCountState(wbWiHBoSphereCount + 50)
            setwbWiHBoTailCountState(wbWiHBoTailCount + 40)
            setwbWiHBoHornCountState(wbWiHBoHornCount + 30)
            setwbWiHBoHeartCountState(wbWiHBoHeartCount + 10)
            setwbWiHBoOriCountState(wbWiHBoOriCount + 3)
            setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost + 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount + 50)
            setallwbWiHTailCount(allwbWiHTailCount + 40)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.5))
        }
    }

    function handleWindBowUnbindIncrement(event) {
        setWindHWeaponChoiceState("bow");
        if (windHBowUnbindState < event.target.value) {
            if (event.target.value - windHBowUnbindState == 1) {
                setWindHBowUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHBoSphereCountState(wbWiHBoSphereCount - 25)
                    setwbWiHBoTailCountState(wbWiHBoTailCount - 18)
                    setwbWiHBoHeartCountState(wbWiHBoHeartCount - 5)
                    setwbWiHBoOriCountState(wbWiHBoOriCount - 1)
                    setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost - 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 25)
                    setallwbWiHTailCount(allwbWiHTailCount - 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 5)
                    setallwbWiHOriCount(allwbWiHOriCount - 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHBoSphereCountState(wbWiHBoSphereCount - 175)
                    setwbWiHBoTailCountState(wbWiHBoTailCount - 130)
                    setwbWiHBoHornCountState(wbWiHBoHornCount - 30)
                    setwbWiHBoHeartCountState(wbWiHBoHeartCount - 35)
                    setwbWiHBoOriCountState(wbWiHBoOriCount - 8)
                    setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost - 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 175)
                    setallwbWiHTailCount(allwbWiHTailCount - 130)
                    setallwbWiHHornCount(allwbWiHHornCount - 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 35)
                    setallwbWiHOriCount(allwbWiHOriCount - 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 7.5))
                }
            }
        }
        else if (windHBowUnbindState > event.target.value) {
            if (windHBowUnbindState - event.target.value == 1) {
                setWindHBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHBoSphereCountState(wbWiHBoSphereCount + 25)
                    setwbWiHBoTailCountState(wbWiHBoTailCount + 18)
                    setwbWiHBoHeartCountState(wbWiHBoHeartCount + 5)
                    setwbWiHBoOriCountState(wbWiHBoOriCount + 1)
                    setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost + 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 25)
                    setallwbWiHTailCount(allwbWiHTailCount + 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 5)
                    setallwbWiHOriCount(allwbWiHOriCount + 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHBoSphereCountState(wbWiHBoSphereCount + 175)
                    setwbWiHBoTailCountState(wbWiHBoTailCount + 130)
                    setwbWiHBoHornCountState(wbWiHBoHornCount + 30)
                    setwbWiHBoHeartCountState(wbWiHBoHeartCount + 35)
                    setwbWiHBoOriCountState(wbWiHBoOriCount + 8)
                    setwbWiHBoRupeeCost(parseFloat(wbWiHBoRupeeCost + 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 175)
                    setallwbWiHTailCount(allwbWiHTailCount + 130)
                    setallwbWiHHornCount(allwbWiHHornCount + 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 35)
                    setallwbWiHOriCount(allwbWiHOriCount + 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindWand() {
        if (windHWandCraftState == "grayscale(100%)") {
            setWindHWandCraftState("grayscale(0%)")
            setWindHWeaponChoiceState("wand")
            setwbWiHWSphereCountState(wbWiHWSphereCount - 25)
            setwbWiHWTailCountState(wbWiHWTailCount - 18)
            setwbWiHWHeartCountState(wbWiHWHeartCount - 5)
            setwbWiHWOriCountState(wbWiHWOriCount - 1)
            setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost - 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount - 25)
            setallwbWiHTailCount(allwbWiHTailCount - 18)
            setallwbWiHHeartCount(allwbWiHHeartCount - 5)
            setallwbWiHOriCount(allwbWiHOriCount - 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
        }
        else if (windHWandCraftState == "grayscale(0%)") {
            setWindHWandCraftState("grayscale(100%)")
            setWindHWeaponChoiceState("wand")
            setwbWiHWSphereCountState(wbWiHWSphereCount + 25)
            setwbWiHWTailCountState(wbWiHWTailCount + 18)
            setwbWiHWHeartCountState(wbWiHWHeartCount + 5)
            setwbWiHWOriCountState(wbWiHWOriCount + 1)
            setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost + 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount + 25)
            setallwbWiHTailCount(allwbWiHTailCount + 18)
            setallwbWiHHeartCount(allwbWiHHeartCount + 5)
            setallwbWiHOriCount(allwbWiHOriCount + 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
        }
    }

    function windWandWeaponBonus() {
        if (windHWandWeaponBonusState == "grayscale(100%)") {
            setWindHWandWeaponBonusState("grayscale(0%)")
            setWindHWeaponChoiceState("wand")
            setwbWiHWSphereCountState(wbWiHWSphereCount - 150)
            setwbWiHWTailCountState(wbWiHWTailCount - 100)
            setwbWiHWHornCountState(wbWiHWHornCount - 30)
            setwbWiHWHeartCountState(wbWiHWHeartCount - 10)
            setwbWiHWOriCountState(wbWiHWOriCount - 30)
            setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost - 10))
            setallwbWiHSphereCount(allwbWiHSphereCount - 150)
            setallwbWiHTailCount(allwbWiHTailCount - 100)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 10))
        }
        else if (windHWandWeaponBonusState == "grayscale(0%)") {
            setWindHWandWeaponBonusState("grayscale(100%)")
            setWindHWeaponChoiceState("wand")
            setwbWiHWSphereCountState(wbWiHWSphereCount + 150)
            setwbWiHWTailCountState(wbWiHWTailCount + 100)
            setwbWiHWHornCountState(wbWiHWHornCount + 30)
            setwbWiHWHeartCountState(wbWiHWHeartCount + 10)
            setwbWiHWOriCountState(wbWiHWOriCount + 30)
            setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost + 10))
            setallwbWiHSphereCount(allwbWiHSphereCount + 150)
            setallwbWiHTailCount(allwbWiHTailCount + 100)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 10))
        }
    }

    function windWandRefine() {
        if (windHWandRefineState == "grayscale(100%)") {
            setWindHWandRefineState("grayscale(0%)")
            setWindHWeaponChoiceState("wand")
            setwbWiHWSphereCountState(wbWiHWSphereCount - 50)
            setwbWiHWTailCountState(wbWiHWTailCount - 40)
            setwbWiHWHornCountState(wbWiHWHornCount - 30)
            setwbWiHWHeartCountState(wbWiHWHeartCount - 10)
            setwbWiHWOriCountState(wbWiHWOriCount - 3)
            setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost - 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount - 50)
            setallwbWiHTailCount(allwbWiHTailCount - 40)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.5))
        }
        else if (windHWandRefineState == "grayscale(0%)") {
            setWindHWandRefineState("grayscale(100%)")
            setWindHWeaponChoiceState("wand")
            setwbWiHWSphereCountState(wbWiHWSphereCount + 50)
            setwbWiHWTailCountState(wbWiHWTailCount + 40)
            setwbWiHWHornCountState(wbWiHWHornCount + 30)
            setwbWiHWHeartCountState(wbWiHWHeartCount + 10)
            setwbWiHWOriCountState(wbWiHWOriCount + 3)
            setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost + 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount + 50)
            setallwbWiHTailCount(allwbWiHTailCount + 40)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.5))
        }
    }

    function handleWindWandUnbindIncrement(event) {
        setWindHWeaponChoiceState("wand");
        if (windHWandUnbindState < event.target.value) {
            if (event.target.value - windHWandUnbindState == 1) {
                setWindHWandUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHWSphereCountState(wbWiHWSphereCount - 25)
                    setwbWiHWTailCountState(wbWiHWTailCount - 18)
                    setwbWiHWHeartCountState(wbWiHWHeartCount - 5)
                    setwbWiHWOriCountState(wbWiHWOriCount - 1)
                    setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost - 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 25)
                    setallwbWiHTailCount(allwbWiHTailCount - 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 5)
                    setallwbWiHOriCount(allwbWiHOriCount - 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHWSphereCountState(wbWiHWSphereCount - 175)
                    setwbWiHWTailCountState(wbWiHWTailCount - 130)
                    setwbWiHWHornCountState(wbWiHWHornCount - 30)
                    setwbWiHWHeartCountState(wbWiHWHeartCount - 35)
                    setwbWiHWOriCountState(wbWiHWOriCount - 8)
                    setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost - 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 175)
                    setallwbWiHTailCount(allwbWiHTailCount - 130)
                    setallwbWiHHornCount(allwbWiHHornCount - 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 35)
                    setallwbWiHOriCount(allwbWiHOriCount - 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 7.5))
                }
            }
        }
        else if (windHWandUnbindState > event.target.value) {
            if (windHWandUnbindState - event.target.value == 1) {
                setWindHWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHWSphereCountState(wbWiHWSphereCount + 25)
                    setwbWiHWTailCountState(wbWiHWTailCount + 18)
                    setwbWiHWHeartCountState(wbWiHWHeartCount + 5)
                    setwbWiHWOriCountState(wbWiHWOriCount + 1)
                    setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost + 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 25)
                    setallwbWiHTailCount(allwbWiHTailCount + 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 5)
                    setallwbWiHOriCount(allwbWiHOriCount + 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHWSphereCountState(wbWiHWSphereCount + 175)
                    setwbWiHWTailCountState(wbWiHWTailCount + 130)
                    setwbWiHWHornCountState(wbWiHWHornCount + 30)
                    setwbWiHWHeartCountState(wbWiHWHeartCount + 35)
                    setwbWiHWOriCountState(wbWiHWOriCount + 8)
                    setwbWiHWRupeeCost(parseFloat(wbWiHWRupeeCost + 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 175)
                    setallwbWiHTailCount(allwbWiHTailCount + 130)
                    setallwbWiHHornCount(allwbWiHHornCount + 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 35)
                    setallwbWiHOriCount(allwbWiHOriCount + 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindStaff() {
        if (windHStaffCraftState == "grayscale(100%)") {
            setWindHStaffCraftState("grayscale(0%)")
            setWindHWeaponChoiceState("staff")
            setwbWiHStSphereCountState(wbWiHStSphereCount - 25)
            setwbWiHStTailCountState(wbWiHStTailCount - 18)
            setwbWiHStHeartCountState(wbWiHStHeartCount - 5)
            setwbWiHStOriCountState(wbWiHStOriCount - 1)
            setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost - 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount - 25)
            setallwbWiHTailCount(allwbWiHTailCount - 18)
            setallwbWiHHeartCount(allwbWiHHeartCount - 5)
            setallwbWiHOriCount(allwbWiHOriCount - 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
        }
        else if (windHStaffCraftState == "grayscale(0%)") {
            setWindHStaffCraftState("grayscale(100%)")
            setWindHWeaponChoiceState("staff")
            setwbWiHStSphereCountState(wbWiHStSphereCount + 25)
            setwbWiHStTailCountState(wbWiHStTailCount + 18)
            setwbWiHStHeartCountState(wbWiHStHeartCount + 5)
            setwbWiHStOriCountState(wbWiHStOriCount + 1)
            setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost + 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount + 25)
            setallwbWiHTailCount(allwbWiHTailCount + 18)
            setallwbWiHHeartCount(allwbWiHHeartCount + 5)
            setallwbWiHOriCount(allwbWiHOriCount + 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
        }
    }

    function windStaffWeaponBonus() {
        if (windHStaffWeaponBonusState == "grayscale(100%)") {
            setWindHStaffWeaponBonusState("grayscale(0%)")
            setWindHWeaponChoiceState("staff")
            setwbWiHStSphereCountState(wbWiHStSphereCount - 150)
            setwbWiHStTailCountState(wbWiHStTailCount - 100)
            setwbWiHStHornCountState(wbWiHStHornCount - 30)
            setwbWiHStHeartCountState(wbWiHStHeartCount - 10)
            setwbWiHStOriCountState(wbWiHStOriCount - 30)
            setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost - 10))
            setallwbWiHSphereCount(allwbWiHSphereCount - 150)
            setallwbWiHTailCount(allwbWiHTailCount - 100)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 10))
        }
        else if (windHStaffWeaponBonusState == "grayscale(0%)") {
            setWindHStaffWeaponBonusState("grayscale(100%)")
            setWindHWeaponChoiceState("staff")
            setwbWiHStSphereCountState(wbWiHStSphereCount + 150)
            setwbWiHStTailCountState(wbWiHStTailCount + 100)
            setwbWiHStHornCountState(wbWiHStHornCount + 30)
            setwbWiHStHeartCountState(wbWiHStHeartCount + 10)
            setwbWiHStOriCountState(wbWiHStOriCount + 30)
            setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost + 10))
            setallwbWiHSphereCount(allwbWiHSphereCount + 150)
            setallwbWiHTailCount(allwbWiHTailCount + 100)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 10))
        }
    }

    function windStaffRefine() {
        if (windHStaffRefineState == "grayscale(100%)") {
            setWindHStaffRefineState("grayscale(0%)")
            setWindHWeaponChoiceState("staff")
            setwbWiHStSphereCountState(wbWiHStSphereCount - 50)
            setwbWiHStTailCountState(wbWiHStTailCount - 40)
            setwbWiHStHornCountState(wbWiHStHornCount - 30)
            setwbWiHStHeartCountState(wbWiHStHeartCount - 10)
            setwbWiHStOriCountState(wbWiHStOriCount - 3)
            setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost - 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount - 50)
            setallwbWiHTailCount(allwbWiHTailCount - 40)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.5))
        }
        else if (windHStaffRefineState == "grayscale(0%)") {
            setWindHStaffRefineState("grayscale(100%)")
            setWindHWeaponChoiceState("staff")
            setwbWiHStSphereCountState(wbWiHStSphereCount + 50)
            setwbWiHStTailCountState(wbWiHStTailCount + 40)
            setwbWiHStHornCountState(wbWiHStHornCount + 30)
            setwbWiHStHeartCountState(wbWiHStHeartCount + 10)
            setwbWiHStOriCountState(wbWiHStOriCount + 3)
            setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost + 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount + 50)
            setallwbWiHTailCount(allwbWiHTailCount + 40)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.5))
        }
    }

    function handleWindStaffUnbindIncrement(event) {
        setWindHWeaponChoiceState("staff");
        if (windHStaffUnbindState < event.target.value) {
            if (event.target.value - windHStaffUnbindState == 1) {
                setWindHStaffUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHStSphereCountState(wbWiHStSphereCount - 25)
                    setwbWiHStTailCountState(wbWiHStTailCount - 18)
                    setwbWiHStHeartCountState(wbWiHStHeartCount - 5)
                    setwbWiHStOriCountState(wbWiHStOriCount - 1)
                    setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost - 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 25)
                    setallwbWiHTailCount(allwbWiHTailCount - 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 5)
                    setallwbWiHOriCount(allwbWiHOriCount - 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHStSphereCountState(wbWiHStSphereCount - 175)
                    setwbWiHStTailCountState(wbWiHStTailCount - 130)
                    setwbWiHStHornCountState(wbWiHStHornCount - 30)
                    setwbWiHStHeartCountState(wbWiHStHeartCount - 35)
                    setwbWiHStOriCountState(wbWiHStOriCount - 8)
                    setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost - 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 175)
                    setallwbWiHTailCount(allwbWiHTailCount - 130)
                    setallwbWiHHornCount(allwbWiHHornCount - 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 35)
                    setallwbWiHOriCount(allwbWiHOriCount - 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 7.5))
                }
            }
        }
        else if (windHStaffUnbindState > event.target.value) {
            if (windHStaffUnbindState - event.target.value == 1) {
                setWindHStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHStSphereCountState(wbWiHStSphereCount + 25)
                    setwbWiHStTailCountState(wbWiHStTailCount + 18)
                    setwbWiHStHeartCountState(wbWiHStHeartCount + 5)
                    setwbWiHStOriCountState(wbWiHStOriCount + 1)
                    setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost + 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 25)
                    setallwbWiHTailCount(allwbWiHTailCount + 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 5)
                    setallwbWiHOriCount(allwbWiHOriCount + 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHStSphereCountState(wbWiHStSphereCount + 175)
                    setwbWiHStTailCountState(wbWiHStTailCount + 130)
                    setwbWiHStHornCountState(wbWiHStHornCount + 30)
                    setwbWiHStHeartCountState(wbWiHStHeartCount + 35)
                    setwbWiHStOriCountState(wbWiHStOriCount + 8)
                    setwbWiHStRupeeCost(parseFloat(wbWiHStRupeeCost + 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 175)
                    setallwbWiHTailCount(allwbWiHTailCount + 130)
                    setallwbWiHHornCount(allwbWiHHornCount + 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 35)
                    setallwbWiHOriCount(allwbWiHOriCount + 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWindManacaster() {
        if (windHManacasterCraftState == "grayscale(100%)") {
            setWindHManacasterCraftState("grayscale(0%)")
            setWindHWeaponChoiceState("manacaster")
            setwbWiHMSphereCountState(wbWiHMSphereCount - 25)
            setwbWiHMTailCountState(wbWiHMTailCount - 18)
            setwbWiHMHeartCountState(wbWiHMHeartCount - 5)
            setwbWiHMOriCountState(wbWiHMOriCount - 1)
            setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost - 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount - 25)
            setallwbWiHTailCount(allwbWiHTailCount - 18)
            setallwbWiHHeartCount(allwbWiHHeartCount - 5)
            setallwbWiHOriCount(allwbWiHOriCount - 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
        }
        else if (windHManacasterCraftState == "grayscale(0%)") {
            setWindHManacasterCraftState("grayscale(100%)")
            setWindHWeaponChoiceState("manacaster")
            setwbWiHMSphereCountState(wbWiHMSphereCount + 25)
            setwbWiHMTailCountState(wbWiHMTailCount + 18)
            setwbWiHMHeartCountState(wbWiHMHeartCount + 5)
            setwbWiHMOriCountState(wbWiHMOriCount + 1)
            setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost + 1.2))
            setallwbWiHSphereCount(allwbWiHSphereCount + 25)
            setallwbWiHTailCount(allwbWiHTailCount + 18)
            setallwbWiHHeartCount(allwbWiHHeartCount + 5)
            setallwbWiHOriCount(allwbWiHOriCount + 1)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
        }
    }

    function windManacasterWeaponBonus() {
        if (windHManacasterWeaponBonusState == "grayscale(100%)") {
            setWindHManacasterWeaponBonusState("grayscale(0%)")
            setWindHWeaponChoiceState("manacaster")
            setwbWiHMSphereCountState(wbWiHMSphereCount - 150)
            setwbWiHMTailCountState(wbWiHMTailCount - 100)
            setwbWiHMHornCountState(wbWiHMHornCount - 30)
            setwbWiHMHeartCountState(wbWiHMHeartCount - 10)
            setwbWiHMOriCountState(wbWiHMOriCount - 30)
            setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost - 10))
            setallwbWiHSphereCount(allwbWiHSphereCount - 150)
            setallwbWiHTailCount(allwbWiHTailCount - 100)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 10))
        }
        else if (windHManacasterWeaponBonusState == "grayscale(0%)") {
            setWindHManacasterWeaponBonusState("grayscale(100%)")
            setWindHWeaponChoiceState("manacaster")
            setwbWiHMSphereCountState(wbWiHMSphereCount + 150)
            setwbWiHMTailCountState(wbWiHMTailCount + 100)
            setwbWiHMHornCountState(wbWiHMHornCount + 30)
            setwbWiHMHeartCountState(wbWiHMHeartCount + 10)
            setwbWiHMOriCountState(wbWiHMOriCount + 30)
            setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost + 10))
            setallwbWiHSphereCount(allwbWiHSphereCount + 150)
            setallwbWiHTailCount(allwbWiHTailCount + 100)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 30)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 10))
        }
    }

    function windManacasterRefine() {
        if (windHManacasterRefineState == "grayscale(100%)") {
            setWindHManacasterRefineState("grayscale(0%)")
            setWindHWeaponChoiceState("manacaster")
            setwbWiHMSphereCountState(wbWiHMSphereCount - 50)
            setwbWiHMTailCountState(wbWiHMTailCount - 40)
            setwbWiHMHornCountState(wbWiHMHornCount - 30)
            setwbWiHMHeartCountState(wbWiHMHeartCount - 10)
            setwbWiHMOriCountState(wbWiHMOriCount - 3)
            setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost - 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount - 50)
            setallwbWiHTailCount(allwbWiHTailCount - 40)
            setallwbWiHHornCount(allwbWiHHornCount - 30)
            setallwbWiHHeartCount(allwbWiHHeartCount - 10)
            setallwbWiHOriCount(allwbWiHOriCount - 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.5))
        }
        else if (windHManacasterRefineState == "grayscale(0%)") {
            setWindHManacasterRefineState("grayscale(100%)")
            setWindHWeaponChoiceState("manacaster")
            setwbWiHMSphereCountState(wbWiHMSphereCount + 50)
            setwbWiHMTailCountState(wbWiHMTailCount + 40)
            setwbWiHMHornCountState(wbWiHMHornCount + 30)
            setwbWiHMHeartCountState(wbWiHMHeartCount + 10)
            setwbWiHMOriCountState(wbWiHMOriCount + 3)
            setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost + 1.5))
            setallwbWiHSphereCount(allwbWiHSphereCount + 50)
            setallwbWiHTailCount(allwbWiHTailCount + 40)
            setallwbWiHHornCount(allwbWiHHornCount + 30)
            setallwbWiHHeartCount(allwbWiHHeartCount + 10)
            setallwbWiHOriCount(allwbWiHOriCount + 3)
            setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.5))
        }
    }

    function handleWindManacasterUnbindIncrement(event) {
        setWindHWeaponChoiceState("manacaster");
        if (windHManacasterUnbindState < event.target.value) {
            if (event.target.value - windHManacasterUnbindState == 1) {
                setWindHManacasterUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbWiHMSphereCountState(wbWiHMSphereCount - 25)
                    setwbWiHMTailCountState(wbWiHMTailCount - 18)
                    setwbWiHMHeartCountState(wbWiHMHeartCount - 5)
                    setwbWiHMOriCountState(wbWiHMOriCount - 1)
                    setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost - 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 25)
                    setallwbWiHTailCount(allwbWiHTailCount - 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 5)
                    setallwbWiHOriCount(allwbWiHOriCount - 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbWiHMSphereCountState(wbWiHMSphereCount - 175)
                    setwbWiHMTailCountState(wbWiHMTailCount - 130)
                    setwbWiHMHornCountState(wbWiHMHornCount - 30)
                    setwbWiHMHeartCountState(wbWiHMHeartCount - 35)
                    setwbWiHMOriCountState(wbWiHMOriCount - 8)
                    setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost - 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount - 175)
                    setallwbWiHTailCount(allwbWiHTailCount - 130)
                    setallwbWiHHornCount(allwbWiHHornCount - 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount - 35)
                    setallwbWiHOriCount(allwbWiHOriCount - 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost - 7.5))
                }
            }
        }
        else if (windHManacasterUnbindState > event.target.value) {
            if (windHManacasterUnbindState - event.target.value == 1) {
                setWindHManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbWiHMSphereCountState(wbWiHMSphereCount + 25)
                    setwbWiHMTailCountState(wbWiHMTailCount + 18)
                    setwbWiHMHeartCountState(wbWiHMHeartCount + 5)
                    setwbWiHMOriCountState(wbWiHMOriCount + 1)
                    setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost + 1.2))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 25)
                    setallwbWiHTailCount(allwbWiHTailCount + 18)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 5)
                    setallwbWiHOriCount(allwbWiHOriCount + 1)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbWiHMSphereCountState(wbWiHMSphereCount + 175)
                    setwbWiHMTailCountState(wbWiHMTailCount + 130)
                    setwbWiHMHornCountState(wbWiHMHornCount + 30)
                    setwbWiHMHeartCountState(wbWiHMHeartCount + 35)
                    setwbWiHMOriCountState(wbWiHMOriCount + 8)
                    setwbWiHMRupeeCost(parseFloat(wbWiHMRupeeCost + 7.5))
                    setallwbWiHSphereCount(allwbWiHSphereCount + 175)
                    setallwbWiHTailCount(allwbWiHTailCount + 130)
                    setallwbWiHHornCount(allwbWiHHornCount + 30)
                    setallwbWiHHeartCount(allwbWiHHeartCount + 35)
                    setallwbWiHOriCount(allwbWiHOriCount + 8)
                    setallwbWiHRupeeCost(parseFloat(allwbWiHRupeeCost + 7.5))
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
                            <Text fontSize={[1, 3]} ml="auto" mr="auto" color="green">Wind HDT Weapons</Text>
                        </Box>
                    </Flex>
                        <Flex>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WindHDTSword} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windHSwordCraftState }} onClick={craftWindSword} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Absolute Tempest</Text>
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
                                            onChange={handleWindSwordUnbindIncrement}
                                            defaultValue={windHSwordUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="green"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="green" fontSize={[1, 3]}>{windHSwordUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windHSwordWeaponBonusState }} onClick={windSwordWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: windHSwordRefineState }} onClick={windSwordRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WindHDTBlade} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windHBladeCraftState }} onClick={craftWindBlade} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Endless Horizon</Text>
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
                                            onChange={handleWindBladeUnbindIncrement}
                                            defaultValue={windHBladeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="green"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="green" fontSize={[1, 3]}>{windHBladeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windHBladeWeaponBonusState }} onClick={windBladeWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: windHBladeRefineState }} onClick={windBladeRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WindHDTDagger} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windHDaggerCraftState }} onClick={craftWindDagger} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Windruler's Maw</Text>
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
                                            onChange={handleWindDaggerUnbindIncrement}
                                            defaultValue={windHDaggerUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="green"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="green" fontSize={[1, 3]}>{windHDaggerUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windHDaggerWeaponBonusState }} onClick={windDaggerWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: windHDaggerRefineState }} onClick={windDaggerRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WindHDTAxe} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windHAxeCraftState }} onClick={craftWindAxe} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Glorystorm's Guide</Text>
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
                                            onChange={handleWindAxeUnbindIncrement}
                                            defaultValue={windHAxeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="green"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="green" fontSize={[1, 3]}>{windHAxeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windHAxeWeaponBonusState }} onClick={windAxeWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: windHAxeRefineState }} onClick={windAxeRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WindHDTLance} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windHLanceCraftState }} onClick={craftWindLance} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Guiding Gale</Text>
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
                                            onChange={handleWindLanceUnbindIncrement}
                                            defaultValue={windHLanceUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="green"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="green" fontSize={[1, 3]}>{windHLanceUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windHLanceWeaponBonusState }} onClick={windLanceWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: windHLanceRefineState }} onClick={windLanceRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WindHDTBow} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windHBowCraftState }} onClick={craftWindBow} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Jormungand's Fury</Text>
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
                                            onChange={handleWindBowUnbindIncrement}
                                            defaultValue={windHBowUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="green"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="green" fontSize={[1, 3]}>{windHBowUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windHBowWeaponBonusState }} onClick={windBowWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: windHBowRefineState }} onClick={windBowRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WindHDTWand} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windHWandCraftState }} onClick={craftWindWand} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Grand Tempest</Text>
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
                                            onChange={handleWindWandUnbindIncrement}
                                            defaultValue={windHWandUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="green"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="green" fontSize={[1, 3]}>{windHWandUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windHWandWeaponBonusState }} onClick={windWandWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: windHWandRefineState }} onClick={windWandRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WindHDTStaff} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windHStaffCraftState }} onClick={craftWindStaff} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Stormruler</Text>
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
                                            onChange={handleWindStaffUnbindIncrement}
                                            defaultValue={windHStaffUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="green"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="green" fontSize={[1, 3]}>{windHStaffUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windHStaffWeaponBonusState }} onClick={windStaffWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: windHStaffRefineState }} onClick={windStaffRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={[0, 1 / 10]}></Box>
                                    <Image src={WindHDTManacaster} sx={{ width: ["75px", "100px"] }} filter="grayscale(100%)" style={{ filter: windHManacasterCraftState }} onClick={craftWindManacaster} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="green">Tempest Trigger</Text>
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
                                            onChange={handleWindManacasterUnbindIncrement}
                                            defaultValue={windHManacasterUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                            width={[3/5, 1]}
                                            color="green"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={[1/4, 1 / 2]}>

                                        </Box>
                                        <Text color="green" fontSize={[1, 3]}>{windHManacasterUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={[0, 1 / 8]}></Box>
                                    <Image src={WeaponBonus} style={{ filter: windHManacasterWeaponBonusState }} onClick={windManacasterWeaponBonus} sx={{ width: ["40%", "25%"], height: ["30%","25%"] }}/>
                                    <Box width={[1 / 8]}></Box>
                                    <Image src={Refine} style={{ filter: windHManacasterRefineState }} onClick={windManacasterRefine} sx={{ width: ["40%", "25%"], height: ["30%", "25%"] }}/>
                                </Flex>
                            </Card>
                        </Flex>
                </Box>
                {windHDTWeaponSelection()}
            </Flex>
            <Box width={[3/4, 1 / 2]} p={3} m={3} bg={"#152238"} sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Materials Needed to get all Weapon Bonuses</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 175]}>
                            <Image src={WindHDTSphere} sx={{ width: ["80%","70%"], height: ["75%", "55%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{allwbWiHSphereCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={WindHDTTail} sx={{ width: ["80%","70%"], height: ["75%", "55%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{allwbWiHTailCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={WindHDTHorn} sx={{ width: ["80%","70%"], height: ["75%", "55%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{allwbWiHHornCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={WindHDTHeart} sx={{ width: ["80%", "70%"], height: ["70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{allwbWiHHeartCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["80%", "70%"], height: ["70%"]}} />
                            <Text color={"green"} fontSize={[1, 2]}>{allwbWiHOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["80%", "70%"], height: ["70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{allwbWiHRupeeCost.toFixed(1)} million</Text>
                        </Card>
                    </Flex>
            </Box>
            <WeaponTypeNavTabs />
        </div>
    )
}
