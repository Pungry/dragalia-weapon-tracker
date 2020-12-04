import React, { useState } from 'react'
import HDTNavTabs from "./HDTNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"
import { Box, Text, Flex, Card, Image } from "rebass";
import { Slider } from "@rebass/forms";

import ShadowHDTSword from "../Images/Shadow_HDT_Sword.png";
import ShadowHDTBlade from "../Images/Shadow_HDT_Blade.png";
import ShadowHDTDagger from "../Images/Shadow_HDT_Dagger.png";
import ShadowHDTAxe from "../Images/Shadow_HDT_Axe.png";
import ShadowHDTLance from "../Images/Shadow_HDT_Lance.png";
import ShadowHDTBow from "../Images/Shadow_HDT_Bow.png";
import ShadowHDTWand from "../Images/Shadow_HDT_Wand.png";
import ShadowHDTStaff from "../Images/Shadow_HDT_Staff.png";
import FireHDTManacaster from "../Images/Fire_HDT_Manacaster.png";

import Refine from "../Images/Refine.PNG";
import Unbind from "../Images/Unbind.PNG";
import WeaponBonus from "../Images/Weapon_Bonus.PNG";

import ShadowHDTSwordCost from "./ShadowHDTSwordMats"
import ShadowHDTBladeCost from "./ShadowHDTBladeMats"
import ShadowHDTDaggerCost from "./ShadowHDTDaggerMats"
import ShadowHDTAxeCost from "./ShadowHDTAxeMats"
import ShadowHDTLanceCost from "./ShadowHDTLanceMats"
import ShadowHDTBowCost from "./ShadowHDTBowMats"
import ShadowHDTWandCost from "./ShadowHDTWandMats"
import ShadowHDTStaffCost from "./ShadowHDTStaffMats"
import ShadowHDTManacasterCost from "./ShadowHDTManacasterMats"

export default function ShadowHDTWeapons() {
    const [shadowHWeaponChoice, setShadowHWeaponChoiceState] = useLocalStorage("shadowHWeaponChoice", "sword")

    const [shadowHSwordCraftState, setShadowHSwordCraftState] = useLocalStorage("shadowHSwordCraftState", "grayscale(100%)")
    const [shadowHSwordWeaponBonusState, setShadowHSwordWeaponBonusState] = useLocalStorage("shadowHSwordWeaponBonusState", "grayscale(100%)")
    const [shadowHSwordRefineState, setShadowHSwordRefineState] = useLocalStorage("shadowHSwordRefineState", "grayscale(100%)");
    const [shadowHSwordUnbindState, setShadowHSwordUnbindState] = useLocalStorage("shadowHSwordUnbindState", 0);

    const [wbSHSphereCount, setwbSHSphereCountState] = useLocalStorage("wbSHSphereCount", 500);
    const [wbSHTailCount, setwbSHTailCountState] = useLocalStorage("wbSHTailCount", 360);
    const [wbSHHeartCount, setwbSHHeartCountState] = useLocalStorage("wbSHHeartCount", 80);
    const [wbSHOriCount, setwbSHOriCountState] = useLocalStorage("wbSHOriCount", 46);
    const [wbSHRupeeCost, setwbSHRupeeCost] = useLocalStorage("wbSHRupeeCost", 25);
    const [wbSHHornCount, setwbSHHornCountState] = useLocalStorage("wbSHHornCount", 90);

    const [shadowHBladeCraftState, setShadowHBladeCraftState] = useLocalStorage("shadowHBladeCraftState", "grayscale(100%)")
    const [shadowHBladeWeaponBonusState, setShadowHBladeWeaponBonusState] = useLocalStorage("shadowHBladeWeaponBonusState", "grayscale(100%)")
    const [shadowHBladeRefineState, setShadowHBladeRefineState] = useLocalStorage("shadowHBladeRefineState", "grayscale(100%)");
    const [shadowHBladeUnbindState, setShadowHBladeUnbindState] = useLocalStorage("shadowHBladeUnbindState", 0);

    const [wbSHBlSphereCount, setwbSHBlSphereCountState] = useLocalStorage("wbSHBlSphereCount", 500);
    const [wbSHBlTailCount, setwbSHBlTailCountState] = useLocalStorage("wbSHBlTailCount", 360);
    const [wbSHBlHeartCount, setwbSHBlHeartCountState] = useLocalStorage("wbSHBlHeartCount", 80);
    const [wbSHBlOriCount, setwbSHBlOriCountState] = useLocalStorage("wbSHBlOriCount", 46);
    const [wbSHBlRupeeCost, setwbSHBlRupeeCost] = useLocalStorage("wbSHBlRupeeCost", 25);
    const [wbSHBlHornCount, setwbSHBlHornCountState] = useLocalStorage("wbSHBlHornCount", 90);

    const [shadowHDaggerCraftState, setShadowHDaggerCraftState] = useLocalStorage("shadowHDaggerCraftState", "grayscale(100%)")
    const [shadowHDaggerWeaponBonusState, setShadowHDaggerWeaponBonusState] = useLocalStorage("shadowHDaggerWeaponBonusState", "grayscale(100%)")
    const [shadowHDaggerRefineState, setShadowHDaggerRefineState] = useLocalStorage("shadowHDaggerRefineState", "grayscale(100%)");
    const [shadowHDaggerUnbindState, setShadowHDaggerUnbindState] = useLocalStorage("shadowHDaggerUnbindState", 0);

    const [wbSHDSphereCount, setwbSHDSphereCountState] = useLocalStorage("wbSHDSphereCount", 500);
    const [wbSHDTailCount, setwbSHDTailCountState] = useLocalStorage("wbSHDTailCount", 360);
    const [wbSHDHeartCount, setwbSHDHeartCountState] = useLocalStorage("wbSHDHeartCount", 80);
    const [wbSHDOriCount, setwbSHDOriCountState] = useLocalStorage("wbSHDOriCount", 46);
    const [wbSHDRupeeCost, setwbSHDRupeeCost] = useLocalStorage("wbSHDRupeeCost", 25);
    const [wbSHDHornCount, setwbSHDHornCountState] = useLocalStorage("wbSHDHornCount", 90);

    const [shadowHAxeCraftState, setShadowHAxeCraftState] = useLocalStorage("shadowHAxeCraftState", "grayscale(100%)")
    const [shadowHAxeWeaponBonusState, setShadowHAxeWeaponBonusState] = useLocalStorage("shadowHAxeWeaponBonusState", "grayscale(100%)")
    const [shadowHAxeRefineState, setShadowHAxeRefineState] = useLocalStorage("shadowAxeRefineState", "grayscale(100%)");
    const [shadowHAxeUnbindState, setShadowHAxeUnbindState] = useLocalStorage("shadowHAxeUnbindState", 0);

    const [wbSHASphereCount, setwbSHASphereCountState] = useLocalStorage("wbSHASphereCount", 500);
    const [wbSHATailCount, setwbSHATailCountState] = useLocalStorage("wbSHATailCount", 360);
    const [wbSHAHeartCount, setwbSHAHeartCountState] = useLocalStorage("wbSHAHeartCount", 80);
    const [wbSHAOriCount, setwbSHAOriCountState] = useLocalStorage("wbSHAOriCount", 46);
    const [wbSHARupeeCost, setwbSHARupeeCost] = useLocalStorage("wbSHARupeeCost", 25);
    const [wbSHAHornCount, setwbSHAHornCountState] = useLocalStorage("wbSHAHornCount", 90);

    const [shadowHLanceCraftState, setShadowHLanceCraftState] = useLocalStorage("shadowHLanceCraftState", "grayscale(100%)")
    const [shadowHLanceWeaponBonusState, setShadowHLanceWeaponBonusState] = useLocalStorage("shadowHLanceWeaponBonusState", "grayscale(100%)")
    const [shadowHLanceRefineState, setShadowHLanceRefineState] = useLocalStorage("shadowHLanceRefineState", "grayscale(100%)");
    const [shadowHLanceUnbindState, setShadowHLanceUnbindState] = useLocalStorage("shadowHLanceUnbindState", 0);

    const [wbSHLSphereCount, setwbSHLSphereCountState] = useLocalStorage("wbSHLSphereCount", 500);
    const [wbSHLTailCount, setwbSHLTailCountState] = useLocalStorage("wbSHLTailCount", 360);
    const [wbSHLHeartCount, setwbSHLHeartCountState] = useLocalStorage("wbSHLHeartCount", 80);
    const [wbSHLOriCount, setwbSHLOriCountState] = useLocalStorage("wbSHLOriCount", 46);
    const [wbSHLRupeeCost, setwbSHLRupeeCost] = useLocalStorage("wbSHLRupeeCost", 25);
    const [wbSHLHornCount, setwbSHLHornCountState] = useLocalStorage("wbSHLHornCount", 90);

    const [shadowHBowCraftState, setShadowHBowCraftState] = useLocalStorage("shadowHBowCraftState", "grayscale(100%)")
    const [shadowHBowWeaponBonusState, setShadowHBowWeaponBonusState] = useLocalStorage("shadowHBowWeaponBonusState", "grayscale(100%)")
    const [shadowHBowRefineState, setShadowHBowRefineState] = useLocalStorage("shadowHBowRefineState", "grayscale(100%)");
    const [shadowHBowUnbindState, setShadowHBowUnbindState] = useLocalStorage("shadowHBowUnbindState", 0);

    const [wbSHBoSphereCount, setwbSHBoSphereCountState] = useLocalStorage("wbSHBoSphereCount", 500);
    const [wbSHBoTailCount, setwbSHBoTailCountState] = useLocalStorage("wbSHBoTailCount", 360);
    const [wbSHBoHeartCount, setwbSHBoHeartCountState] = useLocalStorage("wbSHBoHeartCount", 80);
    const [wbSHBoOriCount, setwbSHBoOriCountState] = useLocalStorage("wbSHBoOriCount", 46);
    const [wbSHBoRupeeCost, setwbSHBoRupeeCost] = useLocalStorage("wbSHBoRupeeCost", 25);
    const [wbSHBoHornCount, setwbSHBoHornCountState] = useLocalStorage("wbSHBoHornCount", 90);

    const [shadowHWandCraftState, setShadowHWandCraftState] = useLocalStorage("shadowHWandCraftState", "grayscale(100%)")
    const [shadowHWandWeaponBonusState, setShadowHWandWeaponBonusState] = useLocalStorage("shadowHWandWeaponBonusState", "grayscale(100%)")
    const [shadowHWandRefineState, setShadowHWandRefineState] = useLocalStorage("shadowHWandRefineState", "grayscale(100%)");
    const [shadowHWandUnbindState, setShadowHWandUnbindState] = useLocalStorage("shadowHWandUnbindState", 0);

    const [wbSHWSphereCount, setwbSHWSphereCountState] = useLocalStorage("wbSHWSphereCount", 500);
    const [wbSHWTailCount, setwbSHWTailCountState] = useLocalStorage("wbSHWTailCount", 360);
    const [wbSHWHeartCount, setwbSHWHeartCountState] = useLocalStorage("wbSHWHeartCount", 80);
    const [wbSHWOriCount, setwbSHWOriCountState] = useLocalStorage("wbSHWOriCount", 46);
    const [wbSHWRupeeCost, setwbSHWRupeeCost] = useLocalStorage("wbSHWRupeeCost", 25);
    const [wbSHWHornCount, setwbSHWHornCountState] = useLocalStorage("wbSHWHornCount", 90);

    const [shadowHStaffCraftState, setShadowHStaffCraftState] = useLocalStorage("shadowHStaffCraftState", "grayscale(100%)")
    const [shadowHStaffWeaponBonusState, setShadowHStaffWeaponBonusState] = useLocalStorage("shadowHStaffWeaponBonusState", "grayscale(100%)")
    const [shadowHStaffRefineState, setShadowHStaffRefineState] = useLocalStorage("shadowHStaffRefineState", "grayscale(100%)");
    const [shadowHStaffUnbindState, setShadowHStaffUnbindState] = useLocalStorage("shadowHStaffUnbindState", 0);

    const [wbSHStSphereCount, setwbSHStSphereCountState] = useLocalStorage("wbSHStSphereCount", 500);
    const [wbSHStTailCount, setwbSHStTailCountState] = useLocalStorage("wbSHStTailCount", 360);
    const [wbSHStHeartCount, setwbSHStHeartCountState] = useLocalStorage("wbSHStHeartCount", 80);
    const [wbSHStOriCount, setwbSHStOriCountState] = useLocalStorage("wbSHStOriCount", 46);
    const [wbSHStRupeeCost, setwbSHStRupeeCost] = useLocalStorage("wbSHStRupeeCost", 25);
    const [wbSHStHornCount, setwbSHStHornCountState] = useLocalStorage("wbSHStHornCount", 90);

    const [shadowHManacasterCraftState, setShadowHManacasterCraftState] = useLocalStorage("shadowHManacasterCraftState", "grayscale(100%)")
    const [shadowHManacasterWeaponBonusState, setShadowHManacasterWeaponBonusState] = useLocalStorage("shadowHManacasterWeaponBonusState", "grayscale(100%)")
    const [shadowHManacasterRefineState, setShadowHManacasterRefineState] = useLocalStorage("shadowHManacasterRefineState", "grayscale(100%)");
    const [shadowHManacasterUnbindState, setShadowHManacasterUnbindState] = useLocalStorage("shadowHManacasterUnbindState", 0);

    const [wbSHMSphereCount, setwbSHMSphereCountState] = useLocalStorage("wbSHMSphereCount", 500);
    const [wbSHMTailCount, setwbSHMTailCountState] = useLocalStorage("wbSHMTailCount", 360);
    const [wbSHMHeartCount, setwbSHMHeartCountState] = useLocalStorage("wbSHMHeartCount", 80);
    const [wbSHMOriCount, setwbSHMOriCountState] = useLocalStorage("wbSHMOriCount", 46);
    const [wbSHMRupeeCost, setwbSHMRupeeCost] = useLocalStorage("wbSHMRupeeCost", 25);
    const [wbSHMHornCount, setwbSHMHornCountState] = useLocalStorage("wbSHMHornCount", 90);

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

    function shadowHDTWeaponSelection() {
        if (shadowHWeaponChoice == "sword") {
            return <ShadowHDTSwordCost wbSHSphereCount={wbSHSphereCount} wbSHTailCount={wbSHTailCount} wbSHHeartCount={wbSHHeartCount} wbSHOriCount={wbSHOriCount} wbSHRupeeCost={wbSHRupeeCost.toFixed(1)} wbSHHornCount={wbSHHornCount} />
        }
        if (shadowHWeaponChoice == "blade") {
            return <ShadowHDTBladeCost wbSHBlSphereCount={wbSHBlSphereCount} wbSHBlTailCount={wbSHBlTailCount} wbSHBlHeartCount={wbSHBlHeartCount} wbSHBlOriCount={wbSHBlOriCount} wbSHBlRupeeCost={wbSHBlRupeeCost.toFixed(1)} wbSHBlHornCount={wbSHBlHornCount} />
        }
        if (shadowHWeaponChoice == "dagger") {
            return <ShadowHDTDaggerCost wbSHDSphereCount={wbSHDSphereCount} wbSHDTailCount={wbSHDTailCount} wbSHDHeartCount={wbSHDHeartCount} wbSHDOriCount={wbSHDOriCount} wbSHDRupeeCost={wbSHDRupeeCost.toFixed(1)} wbSHDHornCount={wbSHDHornCount} />
        }
        if (shadowHWeaponChoice == "axe") {
            return <ShadowHDTAxeCost wbSHASphereCount={wbSHASphereCount} wbSHATailCount={wbSHATailCount} wbSHAHeartCount={wbSHAHeartCount} wbSHAOriCount={wbSHAOriCount} wbSHARupeeCost={wbSHARupeeCost.toFixed(1)} wbSHAHornCount={wbSHAHornCount} />
        }
        if (shadowHWeaponChoice == "lance") {
            return <ShadowHDTLanceCost wbSHLSphereCount={wbSHLSphereCount} wbSHLTailCount={wbSHLTailCount} wbSHLHeartCount={wbSHLHeartCount} wbSHLOriCount={wbSHLOriCount} wbSHLRupeeCost={wbSHLRupeeCost.toFixed(1)} wbSHLHornCount={wbSHLHornCount} />
        }
        if (shadowHWeaponChoice == "bow") {
            return <ShadowHDTBowCost wbSHBoSphereCount={wbSHBoSphereCount} wbSHBoTailCount={wbSHBoTailCount} wbSHBoHeartCount={wbSHBoHeartCount} wbSHBoOriCount={wbSHBoOriCount} wbSHBoRupeeCost={wbSHBoRupeeCost.toFixed(1)} wbSHBoHornCount={wbSHBoHornCount} />
        }
        if (shadowHWeaponChoice == "wand") {
            return <ShadowHDTWandCost wbSHWSphereCount={wbSHWSphereCount} wbSHWTailCount={wbSHWTailCount} wbSHWHeartCount={wbSHWHeartCount} wbSHWOriCount={wbSHWOriCount} wbSHWRupeeCost={wbSHWRupeeCost.toFixed(1)} wbSHWHornCount={wbSHWHornCount} />
        }
        if (shadowHWeaponChoice == "staff") {
            return <ShadowHDTStaffCost wbSHStSphereCount={wbSHStSphereCount} wbSHStTailCount={wbSHStTailCount} wbSHStHeartCount={wbSHStHeartCount} wbSHStOriCount={wbSHStOriCount} wbSHStRupeeCost={wbSHStRupeeCost.toFixed(1)} wbSHStHornCount={wbSHStHornCount} />
        }
        if (shadowHWeaponChoice == "manacaster") {
            return <ShadowHDTManacasterCost wbSHMSphereCount={wbSHMSphereCount} wbSHMTailCount={wbSHMTailCount} wbSHMHeartCount={wbSHMHeartCount} wbSHMOriCount={wbSHMOriCount} wbSHMRupeeCost={wbSHMRupeeCost.toFixed(1)} wbSHMHornCount={wbSHMHornCount} />
        }
    }

    function craftShadowSword() {
        if (shadowHSwordCraftState == "grayscale(100%)") {
            setShadowHSwordCraftState("grayscale(0%)")
            setShadowHWeaponChoiceState("sword")
            setwbSHSphereCountState(wbSHSphereCount - 25)
            setwbSHTailCountState(wbSHTailCount - 18)
            setwbSHHeartCountState(wbSHHeartCount - 5)
            setwbSHOriCountState(wbSHOriCount - 1)
            setwbSHRupeeCost(parseFloat(wbSHRupeeCost - 1.2))
        }
        else if (shadowHSwordCraftState == "grayscale(0%)") {
            setShadowHSwordCraftState("grayscale(100%)")
            setShadowHWeaponChoiceState("sword")
            setwbSHSphereCountState(wbSHSphereCount + 25)
            setwbSHTailCountState(wbSHTailCount + 18)
            setwbSHHeartCountState(wbSHHeartCount + 5)
            setwbSHOriCountState(wbSHOriCount + 1)
            setwbSHRupeeCost(parseFloat(wbSHRupeeCost + 1.2))
        }
    }

    function shadowSwordWeaponBonus() {
        if (shadowHSwordWeaponBonusState == "grayscale(100%)") {
            setShadowHSwordWeaponBonusState("grayscale(0%)")
            setShadowHWeaponChoiceState("sword")
            setwbSHSphereCountState(wbSHSphereCount - 150)
            setwbSHTailCountState(wbSHTailCount - 100)
            setwbSHHornCountState(wbSHHornCount - 30)
            setwbSHHeartCountState(wbSHHeartCount - 10)
            setwbSHOriCountState(wbSHOriCount - 30)
            setwbSHRupeeCost(parseFloat(wbSHRupeeCost - 10))
        }
        else if (shadowHSwordWeaponBonusState == "grayscale(0%)") {
            setShadowHSwordWeaponBonusState("grayscale(100%)")
            setShadowHWeaponChoiceState("sword")
            setwbSHSphereCountState(wbSHSphereCount + 150)
            setwbSHTailCountState(wbSHTailCount + 100)
            setwbSHHornCountState(wbSHHornCount + 30)
            setwbSHHeartCountState(wbSHHeartCount + 10)
            setwbSHOriCountState(wbSHOriCount + 30)
            setwbSHRupeeCost(parseFloat(wbSHRupeeCost + 10))
        }
    }

    function shadowSwordRefine() {
        if (shadowHSwordRefineState == "grayscale(100%)") {
            setShadowHSwordRefineState("grayscale(0%)")
            setShadowHWeaponChoiceState("sword")
            setwbSHSphereCountState(wbSHSphereCount - 50)
            setwbSHTailCountState(wbSHTailCount - 40)
            setwbSHHornCountState(wbSHHornCount - 30)
            setwbSHHeartCountState(wbSHHeartCount - 10)
            setwbSHOriCountState(wbSHOriCount - 3)
            setwbSHRupeeCost(parseFloat(wbSHRupeeCost - 1.5))
        }
        else if (shadowHSwordRefineState == "grayscale(0%)") {
            setShadowHSwordRefineState("grayscale(100%)")
            setShadowHWeaponChoiceState("sword")
            setwbSHSphereCountState(wbSHSphereCount + 50)
            setwbSHTailCountState(wbSHTailCount + 40)
            setwbSHHornCountState(wbSHHornCount + 30)
            setwbSHHeartCountState(wbSHHeartCount + 10)
            setwbSHOriCountState(wbSHOriCount + 3)
            setwbSHRupeeCost(parseFloat(wbSHRupeeCost + 1.5))
        }
    }

    function handleShadowSwordUnbindIncrement(event) {
        setShadowHWeaponChoiceState("sword");
        if (shadowHSwordUnbindState < event.target.value) {
            if (event.target.value - shadowHSwordUnbindState == 1) {
                setShadowHSwordUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbSHSphereCountState(wbSHSphereCount - 25)
                    setwbSHTailCountState(wbSHTailCount - 18)
                    setwbSHHeartCountState(wbSHHeartCount - 5)
                    setwbSHOriCountState(wbSHOriCount - 1)
                    setwbSHRupeeCost(parseFloat(wbSHRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbSHSphereCountState(wbSHSphereCount - 175)
                    setwbSHTailCountState(wbSHTailCount - 130)
                    setwbSHHornCountState(wbSHHornCount - 30)
                    setwbSHHeartCountState(wbSHHeartCount - 35)
                    setwbSHOriCountState(wbSHOriCount - 8)
                    setwbSHRupeeCost(parseFloat(wbSHRupeeCost - 7.5))
                }
            }
        }
        else if (shadowHSwordUnbindState > event.target.value) {
            if (shadowHSwordUnbindState - event.target.value == 1) {
                setShadowHSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbSHSphereCountState(wbSHSphereCount + 25)
                    setwbSHTailCountState(wbSHTailCount + 18)
                    setwbSHHeartCountState(wbSHHeartCount + 5)
                    setwbSHOriCountState(wbSHOriCount + 1)
                    setwbSHRupeeCost(parseFloat(wbSHRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbSHSphereCountState(wbSHSphereCount + 175)
                    setwbSHTailCountState(wbSHTailCount + 130)
                    setwbSHHornCountState(wbSHHornCount + 30)
                    setwbSHHeartCountState(wbSHHeartCount + 35)
                    setwbSHOriCountState(wbSHOriCount + 8)
                    setwbSHRupeeCost(parseFloat(wbSHRupeeCost + 7.5))
                }
            }
        }
    }

    function craftShadowBlade() {
        if (shadowHBladeCraftState == "grayscale(100%)") {
            setShadowHBladeCraftState("grayscale(0%)")
            setShadowHWeaponChoiceState("blade")
            setwbSHBlSphereCountState(wbSHBlSphereCount - 25)
            setwbSHBlTailCountState(wbSHBlTailCount - 18)
            setwbSHBlHeartCountState(wbSHBlHeartCount - 5)
            setwbSHBlOriCountState(wbSHBlOriCount - 1)
            setwbSHBlRupeeCost(parseFloat(wbSHBlRupeeCost - 1.2))
        }
        else if (shadowHBladeCraftState == "grayscale(0%)") {
            setShadowHBladeCraftState("grayscale(100%)")
            setShadowHWeaponChoiceState("blade")
            setwbSHBlSphereCountState(wbSHBlSphereCount + 25)
            setwbSHBlTailCountState(wbSHBlTailCount + 18)
            setwbSHBlHeartCountState(wbSHBlHeartCount + 5)
            setwbSHBlOriCountState(wbSHBlOriCount + 1)
            setwbSHBlRupeeCost(parseFloat(wbSHBlRupeeCost + 1.2))
        }
    }

    function shadowBladeWeaponBonus() {
        if (shadowHBladeWeaponBonusState == "grayscale(100%)") {
            setShadowHBladeWeaponBonusState("grayscale(0%)")
            setShadowHWeaponChoiceState("blade")
            setwbSHBlSphereCountState(wbSHBlSphereCount - 150)
            setwbSHBlTailCountState(wbSHBlTailCount - 100)
            setwbSHBlHornCountState(wbSHBlHornCount - 30)
            setwbSHBlHeartCountState(wbSHBlHeartCount - 10)
            setwbSHBlOriCountState(wbSHBlOriCount - 30)
            setwbSHBlRupeeCost(parseFloat(wbSHBlRupeeCost - 10))
        }
        else if (shadowHBladeWeaponBonusState == "grayscale(0%)") {
            setShadowHBladeWeaponBonusState("grayscale(100%)")
            setShadowHWeaponChoiceState("blade")
            setwbSHBlSphereCountState(wbSHBlSphereCount + 150)
            setwbSHBlTailCountState(wbSHBlTailCount + 100)
            setwbSHBlHornCountState(wbSHBlHornCount + 30)
            setwbSHBlHeartCountState(wbSHBlHeartCount + 10)
            setwbSHBlOriCountState(wbSHBlOriCount + 30)
            setwbSHBlRupeeCost(parseFloat(wbSHBlRupeeCost + 10))
        }
    }

    function shadowBladeRefine() {
        if (shadowHBladeRefineState == "grayscale(100%)") {
            setShadowHBladeRefineState("grayscale(0%)")
            setShadowHWeaponChoiceState("blade")
            setwbSHBlSphereCountState(wbSHBlSphereCount - 50)
            setwbSHBlTailCountState(wbSHBlTailCount - 40)
            setwbSHBlHornCountState(wbSHBlHornCount - 30)
            setwbSHBlHeartCountState(wbSHBlHeartCount - 10)
            setwbSHBlOriCountState(wbSHBlOriCount - 3)
            setwbSHBlRupeeCost(parseFloat(wbSHBlRupeeCost - 1.5))
        }
        else if (shadowHBladeRefineState == "grayscale(0%)") {
            setShadowHBladeRefineState("grayscale(100%)")
            setShadowHWeaponChoiceState("blade")
            setwbSHBlSphereCountState(wbSHBlSphereCount + 50)
            setwbSHBlTailCountState(wbSHBlTailCount + 40)
            setwbSHBlHornCountState(wbSHBlHornCount + 30)
            setwbSHBlHeartCountState(wbSHBlHeartCount + 10)
            setwbSHBlOriCountState(wbSHBlOriCount + 3)
            setwbSHBlRupeeCost(parseFloat(wbSHBlRupeeCost + 1.5))
        }
    }

    function handleShadowBladeUnbindIncrement(event) {
        setShadowHWeaponChoiceState("blade");
        if (shadowHBladeUnbindState < event.target.value) {
            if (event.target.value - shadowHBladeUnbindState == 1) {
                setShadowHBladeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbSHBlSphereCountState(wbSHBlSphereCount - 25)
                    setwbSHBlTailCountState(wbSHBlTailCount - 18)
                    setwbSHBlHeartCountState(wbSHBlHeartCount - 5)
                    setwbSHBlOriCountState(wbSHBlOriCount - 1)
                    setwbSHBlRupeeCost(parseFloat(wbSHBlRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbSHBlSphereCountState(wbSHBlSphereCount - 175)
                    setwbSHBlTailCountState(wbSHBlTailCount - 130)
                    setwbSHBlHornCountState(wbSHBlHornCount - 30)
                    setwbSHBlHeartCountState(wbSHBlHeartCount - 35)
                    setwbSHBlOriCountState(wbSHBlOriCount - 8)
                    setwbSHBlRupeeCost(parseFloat(wbSHBlRupeeCost - 7.5))
                }
            }
        }
        else if (shadowHBladeUnbindState > event.target.value) {
            if (shadowHBladeUnbindState - event.target.value == 1) {
                setShadowHBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbSHBlSphereCountState(wbSHBlSphereCount + 25)
                    setwbSHBlTailCountState(wbSHBlTailCount + 18)
                    setwbSHBlHeartCountState(wbSHBlHeartCount + 5)
                    setwbSHBlOriCountState(wbSHBlOriCount + 1)
                    setwbSHBlRupeeCost(parseFloat(wbSHBlRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbSHBlSphereCountState(wbSHBlSphereCount + 175)
                    setwbSHBlTailCountState(wbSHBlTailCount + 130)
                    setwbSHBlHornCountState(wbSHBlHornCount + 30)
                    setwbSHBlHeartCountState(wbSHBlHeartCount + 35)
                    setwbSHBlOriCountState(wbSHBlOriCount + 8)
                    setwbSHBlRupeeCost(parseFloat(wbSHBlRupeeCost + 7.5))
                }
            }
        }
    }

    function craftShadowDagger() {
        if (shadowHDaggerCraftState == "grayscale(100%)") {
            setShadowHDaggerCraftState("grayscale(0%)")
            setShadowHWeaponChoiceState("dagger")
            setwbSHDSphereCountState(wbSHDSphereCount - 25)
            setwbSHDTailCountState(wbSHDTailCount - 18)
            setwbSHDHeartCountState(wbSHDHeartCount - 5)
            setwbSHDOriCountState(wbSHDOriCount - 1)
            setwbSHDRupeeCost(parseFloat(wbSHDRupeeCost - 1.2))
        }
        else if (shadowHDaggerCraftState == "grayscale(0%)") {
            setShadowHDaggerCraftState("grayscale(100%)")
            setShadowHWeaponChoiceState("dagger")
            setwbSHDSphereCountState(wbSHDSphereCount + 25)
            setwbSHDTailCountState(wbSHDTailCount + 18)
            setwbSHDHeartCountState(wbSHDHeartCount + 5)
            setwbSHDOriCountState(wbSHDOriCount + 1)
            setwbSHDRupeeCost(parseFloat(wbSHDRupeeCost + 1.2))
        }
    }

    function shadowDaggerWeaponBonus() {
        if (shadowHDaggerWeaponBonusState == "grayscale(100%)") {
            setShadowHDaggerWeaponBonusState("grayscale(0%)")
            setShadowHWeaponChoiceState("dagger")
            setwbSHDSphereCountState(wbSHDSphereCount - 150)
            setwbSHDTailCountState(wbSHDTailCount - 100)
            setwbSHDHornCountState(wbSHDHornCount - 30)
            setwbSHDHeartCountState(wbSHDHeartCount - 10)
            setwbSHDOriCountState(wbSHDOriCount - 30)
            setwbSHDRupeeCost(parseFloat(wbSHDRupeeCost - 10))
        }
        else if (shadowHDaggerWeaponBonusState == "grayscale(0%)") {
            setShadowHDaggerWeaponBonusState("grayscale(100%)")
            setShadowHWeaponChoiceState("dagger")
            setwbSHDSphereCountState(wbSHDSphereCount + 150)
            setwbSHDTailCountState(wbSHDTailCount + 100)
            setwbSHDHornCountState(wbSHDHornCount + 30)
            setwbSHDHeartCountState(wbSHDHeartCount + 10)
            setwbSHDOriCountState(wbSHDOriCount + 30)
            setwbSHDRupeeCost(parseFloat(wbSHDRupeeCost + 10))
        }
    }

    function shadowDaggerRefine() {
        if (shadowHDaggerRefineState == "grayscale(100%)") {
            setShadowHDaggerRefineState("grayscale(0%)")
            setShadowHWeaponChoiceState("dagger")
            setwbSHDSphereCountState(wbSHDSphereCount - 50)
            setwbSHDTailCountState(wbSHDTailCount - 40)
            setwbSHDHornCountState(wbSHDHornCount - 30)
            setwbSHDHeartCountState(wbSHDHeartCount - 10)
            setwbSHDOriCountState(wbSHDOriCount - 3)
            setwbSHDRupeeCost(parseFloat(wbSHDRupeeCost - 1.5))
        }
        else if (shadowHDaggerRefineState == "grayscale(0%)") {
            setShadowHDaggerRefineState("grayscale(100%)")
            setShadowHWeaponChoiceState("dagger")
            setwbSHDSphereCountState(wbSHDSphereCount + 50)
            setwbSHDTailCountState(wbSHDTailCount + 40)
            setwbSHDHornCountState(wbSHDHornCount + 30)
            setwbSHDHeartCountState(wbSHDHeartCount + 10)
            setwbSHDOriCountState(wbSHDOriCount + 3)
            setwbSHDRupeeCost(parseFloat(wbSHDRupeeCost + 1.5))
        }
    }

    function handleShadowDaggerUnbindIncrement(event) {
        setShadowHWeaponChoiceState("dagger");
        if (shadowHDaggerUnbindState < event.target.value) {
            if (event.target.value - shadowHDaggerUnbindState == 1) {
                setShadowHDaggerUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbSHDSphereCountState(wbSHDSphereCount - 25)
                    setwbSHDTailCountState(wbSHDTailCount - 18)
                    setwbSHDHeartCountState(wbSHDHeartCount - 5)
                    setwbSHDOriCountState(wbSHDOriCount - 1)
                    setwbSHDRupeeCost(parseFloat(wbSHDRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbSHDSphereCountState(wbSHDSphereCount - 175)
                    setwbSHDTailCountState(wbSHDTailCount - 130)
                    setwbSHDHornCountState(wbSHDHornCount - 30)
                    setwbSHDHeartCountState(wbSHDHeartCount - 35)
                    setwbSHDOriCountState(wbSHDOriCount - 8)
                    setwbSHDRupeeCost(parseFloat(wbSHDRupeeCost - 7.5))
                }
            }
        }
        else if (shadowHDaggerUnbindState > event.target.value) {
            if (shadowHDaggerUnbindState - event.target.value == 1) {
                setShadowHDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbSHDSphereCountState(wbSHDSphereCount + 25)
                    setwbSHDTailCountState(wbSHDTailCount + 18)
                    setwbSHDHeartCountState(wbSHDHeartCount + 5)
                    setwbSHDOriCountState(wbSHDOriCount + 1)
                    setwbSHDRupeeCost(parseFloat(wbSHDRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbSHDSphereCountState(wbSHDSphereCount + 175)
                    setwbSHDTailCountState(wbSHDTailCount + 130)
                    setwbSHDHornCountState(wbSHDHornCount + 30)
                    setwbSHDHeartCountState(wbSHDHeartCount + 35)
                    setwbSHDOriCountState(wbSHDOriCount + 8)
                    setwbSHDRupeeCost(parseFloat(wbSHDRupeeCost + 7.5))
                }
            }
        }
    }

    function craftShadowAxe() {
        if (shadowHAxeCraftState == "grayscale(100%)") {
            setShadowHAxeCraftState("grayscale(0%)")
            setShadowHWeaponChoiceState("axe")
            setwbSHASphereCountState(wbSHASphereCount - 25)
            setwbSHATailCountState(wbSHATailCount - 18)
            setwbSHAHeartCountState(wbSHAHeartCount - 5)
            setwbSHAOriCountState(wbSHAOriCount - 1)
            setwbSHARupeeCost(parseFloat(wbSHARupeeCost - 1.2))
        }
        else if (shadowHAxeCraftState == "grayscale(0%)") {
            setShadowHAxeCraftState("grayscale(100%)")
            setShadowHWeaponChoiceState("axe")
            setwbSHASphereCountState(wbSHASphereCount + 25)
            setwbSHATailCountState(wbSHATailCount + 18)
            setwbSHAHeartCountState(wbSHAHeartCount + 5)
            setwbSHAOriCountState(wbSHAOriCount + 1)
            setwbSHARupeeCost(parseFloat(wbSHARupeeCost + 1.2))
        }
    }

    function shadowAxeWeaponBonus() {
        if (shadowHAxeWeaponBonusState == "grayscale(100%)") {
            setShadowHAxeWeaponBonusState("grayscale(0%)")
            setShadowHWeaponChoiceState("axe")
            setwbSHASphereCountState(wbSHASphereCount - 150)
            setwbSHATailCountState(wbSHATailCount - 100)
            setwbSHAHornCountState(wbSHAHornCount - 30)
            setwbSHAHeartCountState(wbSHAHeartCount - 10)
            setwbSHAOriCountState(wbSHAOriCount - 30)
            setwbSHARupeeCost(parseFloat(wbSHARupeeCost - 10))
        }
        else if (shadowHAxeWeaponBonusState == "grayscale(0%)") {
            setShadowHAxeWeaponBonusState("grayscale(100%)")
            setShadowHWeaponChoiceState("axe")
            setwbSHASphereCountState(wbSHASphereCount + 150)
            setwbSHATailCountState(wbSHATailCount + 100)
            setwbSHAHornCountState(wbSHAHornCount + 30)
            setwbSHAHeartCountState(wbSHAHeartCount + 10)
            setwbSHAOriCountState(wbSHAOriCount + 30)
            setwbSHARupeeCost(parseFloat(wbSHARupeeCost + 10))
        }
    }

    function shadowAxeRefine() {
        if (shadowHAxeRefineState == "grayscale(100%)") {
            setShadowHAxeRefineState("grayscale(0%)")
            setShadowHWeaponChoiceState("axe")
            setwbSHASphereCountState(wbSHASphereCount - 50)
            setwbSHATailCountState(wbSHATailCount - 40)
            setwbSHAHornCountState(wbSHAHornCount - 30)
            setwbSHAHeartCountState(wbSHAHeartCount - 10)
            setwbSHAOriCountState(wbSHAOriCount - 3)
            setwbSHARupeeCost(parseFloat(wbSHARupeeCost - 1.5))
        }
        else if (shadowHAxeRefineState == "grayscale(0%)") {
            setShadowHAxeRefineState("grayscale(100%)")
            setShadowHWeaponChoiceState("axe")
            setwbSHASphereCountState(wbSHASphereCount + 50)
            setwbSHATailCountState(wbSHATailCount + 40)
            setwbSHAHornCountState(wbSHAHornCount + 30)
            setwbSHAHeartCountState(wbSHAHeartCount + 10)
            setwbSHAOriCountState(wbSHAOriCount + 3)
            setwbSHARupeeCost(parseFloat(wbSHARupeeCost + 1.5))
        }
    }

    function handleShadowAxeUnbindIncrement(event) {
        setShadowHWeaponChoiceState("axe");
        if (shadowHAxeUnbindState < event.target.value) {
            if (event.target.value - shadowHAxeUnbindState == 1) {
                setShadowHAxeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbSHASphereCountState(wbSHASphereCount - 25)
                    setwbSHATailCountState(wbSHATailCount - 18)
                    setwbSHAHeartCountState(wbSHAHeartCount - 5)
                    setwbSHAOriCountState(wbSHAOriCount - 1)
                    setwbSHARupeeCost(parseFloat(wbSHARupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbSHASphereCountState(wbSHASphereCount - 175)
                    setwbSHATailCountState(wbSHATailCount - 130)
                    setwbSHAHornCountState(wbSHAHornCount - 30)
                    setwbSHAHeartCountState(wbSHAHeartCount - 35)
                    setwbSHAOriCountState(wbSHAOriCount - 8)
                    setwbSHARupeeCost(parseFloat(wbSHARupeeCost - 7.5))
                }
            }
        }
        else if (shadowHAxeUnbindState > event.target.value) {
            if (shadowHAxeUnbindState - event.target.value == 1) {
                setShadowHAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbSHASphereCountState(wbSHASphereCount + 25)
                    setwbSHATailCountState(wbSHATailCount + 18)
                    setwbSHAHeartCountState(wbSHAHeartCount + 5)
                    setwbSHAOriCountState(wbSHAOriCount + 1)
                    setwbSHARupeeCost(parseFloat(wbSHARupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbSHASphereCountState(wbSHASphereCount + 175)
                    setwbSHATailCountState(wbSHATailCount + 130)
                    setwbSHAHornCountState(wbSHAHornCount + 30)
                    setwbSHAHeartCountState(wbSHAHeartCount + 35)
                    setwbSHAOriCountState(wbSHAOriCount + 8)
                    setwbSHARupeeCost(parseFloat(wbSHARupeeCost + 7.5))
                }
            }
        }
    }

    function craftShadowLance() {
        if (shadowHLanceCraftState == "grayscale(100%)") {
            setShadowHLanceCraftState("grayscale(0%)")
            setShadowHWeaponChoiceState("lance")
            setwbSHLSphereCountState(wbSHLSphereCount - 25)
            setwbSHLTailCountState(wbSHLTailCount - 18)
            setwbSHLHeartCountState(wbSHLHeartCount - 5)
            setwbSHLOriCountState(wbSHLOriCount - 1)
            setwbSHLRupeeCost(parseFloat(wbSHLRupeeCost - 1.2))
        }
        else if (shadowHLanceCraftState == "grayscale(0%)") {
            setShadowHLanceCraftState("grayscale(100%)")
            setShadowHWeaponChoiceState("lance")
            setwbSHLSphereCountState(wbSHLSphereCount + 25)
            setwbSHLTailCountState(wbSHLTailCount + 18)
            setwbSHLHeartCountState(wbSHLHeartCount + 5)
            setwbSHLOriCountState(wbSHLOriCount + 1)
            setwbSHLRupeeCost(parseFloat(wbSHLRupeeCost + 1.2))
        }
    }

    function shadowLanceWeaponBonus() {
        if (shadowHLanceWeaponBonusState == "grayscale(100%)") {
            setShadowHLanceWeaponBonusState("grayscale(0%)")
            setShadowHWeaponChoiceState("lance")
            setwbSHLSphereCountState(wbSHLSphereCount - 150)
            setwbSHLTailCountState(wbSHLTailCount - 100)
            setwbSHLHornCountState(wbSHLHornCount - 30)
            setwbSHLHeartCountState(wbSHLHeartCount - 10)
            setwbSHLOriCountState(wbSHLOriCount - 30)
            setwbSHLRupeeCost(parseFloat(wbSHLRupeeCost - 10))
        }
        else if (shadowHLanceWeaponBonusState == "grayscale(0%)") {
            setShadowHLanceWeaponBonusState("grayscale(100%)")
            setShadowHWeaponChoiceState("lance")
            setwbSHLSphereCountState(wbSHLSphereCount + 150)
            setwbSHLTailCountState(wbSHLTailCount + 100)
            setwbSHLHornCountState(wbSHLHornCount + 30)
            setwbSHLHeartCountState(wbSHLHeartCount + 10)
            setwbSHLOriCountState(wbSHLOriCount + 30)
            setwbSHLRupeeCost(parseFloat(wbSHLRupeeCost + 10))
        }
    }

    function shadowLanceRefine() {
        if (shadowHLanceRefineState == "grayscale(100%)") {
            setShadowHLanceRefineState("grayscale(0%)")
            setShadowHWeaponChoiceState("lance")
            setwbSHLSphereCountState(wbSHLSphereCount - 50)
            setwbSHLTailCountState(wbSHLTailCount - 40)
            setwbSHLHornCountState(wbSHLHornCount - 30)
            setwbSHLHeartCountState(wbSHLHeartCount - 10)
            setwbSHLOriCountState(wbSHLOriCount - 3)
            setwbSHLRupeeCost(parseFloat(wbSHLRupeeCost - 1.5))
        }
        else if (shadowHLanceRefineState == "grayscale(0%)") {
            setShadowHLanceRefineState("grayscale(100%)")
            setShadowHWeaponChoiceState("lance")
            setwbSHLSphereCountState(wbSHLSphereCount + 50)
            setwbSHLTailCountState(wbSHLTailCount + 40)
            setwbSHLHornCountState(wbSHLHornCount + 30)
            setwbSHLHeartCountState(wbSHLHeartCount + 10)
            setwbSHLOriCountState(wbSHLOriCount + 3)
            setwbSHLRupeeCost(parseFloat(wbSHLRupeeCost + 1.5))
        }
    }

    function handleShadowLanceUnbindIncrement(event) {
        setShadowHWeaponChoiceState("lance");
        if (shadowHLanceUnbindState < event.target.value) {
            if (event.target.value - shadowHLanceUnbindState == 1) {
                setShadowHLanceUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbSHLSphereCountState(wbSHLSphereCount - 25)
                    setwbSHLTailCountState(wbSHLTailCount - 18)
                    setwbSHLHeartCountState(wbSHLHeartCount - 5)
                    setwbSHLOriCountState(wbSHLOriCount - 1)
                    setwbSHLRupeeCost(parseFloat(wbSHLRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbSHLSphereCountState(wbSHLSphereCount - 175)
                    setwbSHLTailCountState(wbSHLTailCount - 130)
                    setwbSHLHornCountState(wbSHLHornCount - 30)
                    setwbSHLHeartCountState(wbSHLHeartCount - 35)
                    setwbSHLOriCountState(wbSHLOriCount - 8)
                    setwbSHLRupeeCost(parseFloat(wbSHLRupeeCost - 7.5))
                }
            }
        }
        else if (shadowHLanceUnbindState > event.target.value) {
            if (shadowHLanceUnbindState - event.target.value == 1) {
                setShadowHLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbSHLSphereCountState(wbSHLSphereCount + 25)
                    setwbSHLTailCountState(wbSHLTailCount + 18)
                    setwbSHLHeartCountState(wbSHLHeartCount + 5)
                    setwbSHLOriCountState(wbSHLOriCount + 1)
                    setwbSHLRupeeCost(parseFloat(wbSHLRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbSHLSphereCountState(wbSHLSphereCount + 175)
                    setwbSHLTailCountState(wbSHLTailCount + 130)
                    setwbSHLHornCountState(wbSHLHornCount + 30)
                    setwbSHLHeartCountState(wbSHLHeartCount + 35)
                    setwbSHLOriCountState(wbSHLOriCount + 8)
                    setwbSHLRupeeCost(parseFloat(wbSHLRupeeCost + 7.5))
                }
            }
        }
    }

    function craftShadowBow() {
        if (shadowHBowCraftState == "grayscale(100%)") {
            setShadowHBowCraftState("grayscale(0%)")
            setShadowHWeaponChoiceState("bow")
            setwbSHBoSphereCountState(wbSHBoSphereCount - 25)
            setwbSHBoTailCountState(wbSHBoTailCount - 18)
            setwbSHBoHeartCountState(wbSHBoHeartCount - 5)
            setwbSHBoOriCountState(wbSHBoOriCount - 1)
            setwbSHBoRupeeCost(parseFloat(wbSHBoRupeeCost - 1.2))
        }
        else if (shadowHBowCraftState == "grayscale(0%)") {
            setShadowHBowCraftState("grayscale(100%)")
            setShadowHWeaponChoiceState("bow")
            setwbSHBoSphereCountState(wbSHBoSphereCount + 25)
            setwbSHBoTailCountState(wbSHBoTailCount + 18)
            setwbSHBoHeartCountState(wbSHBoHeartCount + 5)
            setwbSHBoOriCountState(wbSHBoOriCount + 1)
            setwbSHBoRupeeCost(parseFloat(wbSHBoRupeeCost + 1.2))
        }
    }

    function shadowBowWeaponBonus() {
        if (shadowHBowWeaponBonusState == "grayscale(100%)") {
            setShadowHBowWeaponBonusState("grayscale(0%)")
            setShadowHWeaponChoiceState("bow")
            setwbSHBoSphereCountState(wbSHBoSphereCount - 150)
            setwbSHBoTailCountState(wbSHBoTailCount - 100)
            setwbSHBoHornCountState(wbSHBoHornCount - 30)
            setwbSHBoHeartCountState(wbSHBoHeartCount - 10)
            setwbSHBoOriCountState(wbSHBoOriCount - 30)
            setwbSHBoRupeeCost(parseFloat(wbSHBoRupeeCost - 10))
        }
        else if (shadowHBowWeaponBonusState == "grayscale(0%)") {
            setShadowHBowWeaponBonusState("grayscale(100%)")
            setShadowHWeaponChoiceState("bow")
            setwbSHBoSphereCountState(wbSHBoSphereCount + 150)
            setwbSHBoTailCountState(wbSHBoTailCount + 100)
            setwbSHBoHornCountState(wbSHBoHornCount + 30)
            setwbSHBoHeartCountState(wbSHBoHeartCount + 10)
            setwbSHBoOriCountState(wbSHBoOriCount + 30)
            setwbSHBoRupeeCost(parseFloat(wbSHBoRupeeCost + 10))
        }
    }

    function shadowBowRefine() {
        if (shadowHBowRefineState == "grayscale(100%)") {
            setShadowHBowRefineState("grayscale(0%)")
            setShadowHWeaponChoiceState("bow")
            setwbSHBoSphereCountState(wbSHBoSphereCount - 50)
            setwbSHBoTailCountState(wbSHBoTailCount - 40)
            setwbSHBoHornCountState(wbSHBoHornCount - 30)
            setwbSHBoHeartCountState(wbSHBoHeartCount - 10)
            setwbSHBoOriCountState(wbSHBoOriCount - 3)
            setwbSHBoRupeeCost(parseFloat(wbSHBoRupeeCost - 1.5))
        }
        else if (shadowHBowRefineState == "grayscale(0%)") {
            setShadowHBowRefineState("grayscale(100%)")
            setShadowHWeaponChoiceState("bow")
            setwbSHBoSphereCountState(wbSHBoSphereCount + 50)
            setwbSHBoTailCountState(wbSHBoTailCount + 40)
            setwbSHBoHornCountState(wbSHBoHornCount + 30)
            setwbSHBoHeartCountState(wbSHBoHeartCount + 10)
            setwbSHBoOriCountState(wbSHBoOriCount + 3)
            setwbSHBoRupeeCost(parseFloat(wbSHBoRupeeCost + 1.5))
        }
    }

    function handleShadowBowUnbindIncrement(event) {
        setShadowHWeaponChoiceState("bow");
        if (shadowHBowUnbindState < event.target.value) {
            if (event.target.value - shadowHBowUnbindState == 1) {
                setShadowHBowUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbSHBoSphereCountState(wbSHBoSphereCount - 25)
                    setwbSHBoTailCountState(wbSHBoTailCount - 18)
                    setwbSHBoHeartCountState(wbSHBoHeartCount - 5)
                    setwbSHBoOriCountState(wbSHBoOriCount - 1)
                    setwbSHBoRupeeCost(parseFloat(wbSHBoRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbSHBoSphereCountState(wbSHBoSphereCount - 175)
                    setwbSHBoTailCountState(wbSHBoTailCount - 130)
                    setwbSHBoHornCountState(wbSHBoHornCount - 30)
                    setwbSHBoHeartCountState(wbSHBoHeartCount - 35)
                    setwbSHBoOriCountState(wbSHBoOriCount - 8)
                    setwbSHBoRupeeCost(parseFloat(wbSHBoRupeeCost - 7.5))
                }
            }
        }
        else if (shadowHBowUnbindState > event.target.value) {
            if (shadowHBowUnbindState - event.target.value == 1) {
                setShadowHBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbSHBoSphereCountState(wbSHBoSphereCount + 25)
                    setwbSHBoTailCountState(wbSHBoTailCount + 18)
                    setwbSHBoHeartCountState(wbSHBoHeartCount + 5)
                    setwbSHBoOriCountState(wbSHBoOriCount + 1)
                    setwbSHBoRupeeCost(parseFloat(wbSHBoRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbSHBoSphereCountState(wbSHBoSphereCount + 175)
                    setwbSHBoTailCountState(wbSHBoTailCount + 130)
                    setwbSHBoHornCountState(wbSHBoHornCount + 30)
                    setwbSHBoHeartCountState(wbSHBoHeartCount + 35)
                    setwbSHBoOriCountState(wbSHBoOriCount + 8)
                    setwbSHBoRupeeCost(parseFloat(wbSHBoRupeeCost + 7.5))
                }
            }
        }
    }

    function craftShadowWand() {
        if (shadowHWandCraftState == "grayscale(100%)") {
            setShadowHWandCraftState("grayscale(0%)")
            setShadowHWeaponChoiceState("wand")
            setwbSHWSphereCountState(wbSHWSphereCount - 25)
            setwbSHWTailCountState(wbSHWTailCount - 18)
            setwbSHWHeartCountState(wbSHWHeartCount - 5)
            setwbSHWOriCountState(wbSHWOriCount - 1)
            setwbSHWRupeeCost(parseFloat(wbSHWRupeeCost - 1.2))
        }
        else if (shadowHWandCraftState == "grayscale(0%)") {
            setShadowHWandCraftState("grayscale(100%)")
            setShadowHWeaponChoiceState("wand")
            setwbSHWSphereCountState(wbSHWSphereCount + 25)
            setwbSHWTailCountState(wbSHWTailCount + 18)
            setwbSHWHeartCountState(wbSHWHeartCount + 5)
            setwbSHWOriCountState(wbSHWOriCount + 1)
            setwbSHWRupeeCost(parseFloat(wbSHWRupeeCost + 1.2))
        }
    }

    function shadowWandWeaponBonus() {
        if (shadowHWandWeaponBonusState == "grayscale(100%)") {
            setShadowHWandWeaponBonusState("grayscale(0%)")
            setShadowHWeaponChoiceState("wand")
            setwbSHWSphereCountState(wbSHWSphereCount - 150)
            setwbSHWTailCountState(wbSHWTailCount - 100)
            setwbSHWHornCountState(wbSHWHornCount - 30)
            setwbSHWHeartCountState(wbSHWHeartCount - 10)
            setwbSHWOriCountState(wbSHWOriCount - 30)
            setwbSHWRupeeCost(parseFloat(wbSHWRupeeCost - 10))
        }
        else if (shadowHWandWeaponBonusState == "grayscale(0%)") {
            setShadowHWandWeaponBonusState("grayscale(100%)")
            setShadowHWeaponChoiceState("wand")
            setwbSHWSphereCountState(wbSHWSphereCount + 150)
            setwbSHWTailCountState(wbSHWTailCount + 100)
            setwbSHWHornCountState(wbSHWHornCount + 30)
            setwbSHWHeartCountState(wbSHWHeartCount + 10)
            setwbSHWOriCountState(wbSHWOriCount + 30)
            setwbSHWRupeeCost(parseFloat(wbSHWRupeeCost + 10))
        }
    }

    function shadowWandRefine() {
        if (shadowHWandRefineState == "grayscale(100%)") {
            setShadowHWandRefineState("grayscale(0%)")
            setShadowHWeaponChoiceState("wand")
            setwbSHWSphereCountState(wbSHWSphereCount - 50)
            setwbSHWTailCountState(wbSHWTailCount - 40)
            setwbSHWHornCountState(wbSHWHornCount - 30)
            setwbSHWHeartCountState(wbSHWHeartCount - 10)
            setwbSHWOriCountState(wbSHWOriCount - 3)
            setwbSHWRupeeCost(parseFloat(wbSHWRupeeCost - 1.5))
        }
        else if (shadowHWandRefineState == "grayscale(0%)") {
            setShadowHWandRefineState("grayscale(100%)")
            setShadowHWeaponChoiceState("wand")
            setwbSHWSphereCountState(wbSHWSphereCount + 50)
            setwbSHWTailCountState(wbSHWTailCount + 40)
            setwbSHWHornCountState(wbSHWHornCount + 30)
            setwbSHWHeartCountState(wbSHWHeartCount + 10)
            setwbSHWOriCountState(wbSHWOriCount + 3)
            setwbSHWRupeeCost(parseFloat(wbSHWRupeeCost + 1.5))
        }
    }

    function handleShadowWandUnbindIncrement(event) {
        setShadowHWeaponChoiceState("wand");
        if (shadowHWandUnbindState < event.target.value) {
            if (event.target.value - shadowHWandUnbindState == 1) {
                setShadowHWandUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbSHWSphereCountState(wbSHWSphereCount - 25)
                    setwbSHWTailCountState(wbSHWTailCount - 18)
                    setwbSHWHeartCountState(wbSHWHeartCount - 5)
                    setwbSHWOriCountState(wbSHWOriCount - 1)
                    setwbSHWRupeeCost(parseFloat(wbSHWRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbSHWSphereCountState(wbSHWSphereCount - 175)
                    setwbSHWTailCountState(wbSHWTailCount - 130)
                    setwbSHWHornCountState(wbSHWHornCount - 30)
                    setwbSHWHeartCountState(wbSHWHeartCount - 35)
                    setwbSHWOriCountState(wbSHWOriCount - 8)
                    setwbSHWRupeeCost(parseFloat(wbSHWRupeeCost - 7.5))
                }
            }
        }
        else if (shadowHWandUnbindState > event.target.value) {
            if (shadowHWandUnbindState - event.target.value == 1) {
                setShadowHWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbSHWSphereCountState(wbSHWSphereCount + 25)
                    setwbSHWTailCountState(wbSHWTailCount + 18)
                    setwbSHWHeartCountState(wbSHWHeartCount + 5)
                    setwbSHWOriCountState(wbSHWOriCount + 1)
                    setwbSHWRupeeCost(parseFloat(wbSHWRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbSHWSphereCountState(wbSHWSphereCount + 175)
                    setwbSHWTailCountState(wbSHWTailCount + 130)
                    setwbSHWHornCountState(wbSHWHornCount + 30)
                    setwbSHWHeartCountState(wbSHWHeartCount + 35)
                    setwbSHWOriCountState(wbSHWOriCount + 8)
                    setwbSHWRupeeCost(parseFloat(wbSHWRupeeCost + 7.5))
                }
            }
        }
    }

    function craftShadowStaff() {
        if (shadowHStaffCraftState == "grayscale(100%)") {
            setShadowHStaffCraftState("grayscale(0%)")
            setShadowHWeaponChoiceState("staff")
            setwbSHStSphereCountState(wbSHStSphereCount - 25)
            setwbSHStTailCountState(wbSHStTailCount - 18)
            setwbSHStHeartCountState(wbSHStHeartCount - 5)
            setwbSHStOriCountState(wbSHStOriCount - 1)
            setwbSHStRupeeCost(parseFloat(wbSHStRupeeCost - 1.2))
        }
        else if (shadowHStaffCraftState == "grayscale(0%)") {
            setShadowHStaffCraftState("grayscale(100%)")
            setShadowHWeaponChoiceState("staff")
            setwbSHStSphereCountState(wbSHStSphereCount + 25)
            setwbSHStTailCountState(wbSHStTailCount + 18)
            setwbSHStHeartCountState(wbSHStHeartCount + 5)
            setwbSHStOriCountState(wbSHStOriCount + 1)
            setwbSHStRupeeCost(parseFloat(wbSHStRupeeCost + 1.2))
        }
    }

    function shadowStaffWeaponBonus() {
        if (shadowHStaffWeaponBonusState == "grayscale(100%)") {
            setShadowHStaffWeaponBonusState("grayscale(0%)")
            setShadowHWeaponChoiceState("staff")
            setwbSHStSphereCountState(wbSHStSphereCount - 150)
            setwbSHStTailCountState(wbSHStTailCount - 100)
            setwbSHStHornCountState(wbSHStHornCount - 30)
            setwbSHStHeartCountState(wbSHStHeartCount - 10)
            setwbSHStOriCountState(wbSHStOriCount - 30)
            setwbSHStRupeeCost(parseFloat(wbSHStRupeeCost - 10))
        }
        else if (shadowHStaffWeaponBonusState == "grayscale(0%)") {
            setShadowHStaffWeaponBonusState("grayscale(100%)")
            setShadowHWeaponChoiceState("staff")
            setwbSHStSphereCountState(wbSHStSphereCount + 150)
            setwbSHStTailCountState(wbSHStTailCount + 100)
            setwbSHStHornCountState(wbSHStHornCount + 30)
            setwbSHStHeartCountState(wbSHStHeartCount + 10)
            setwbSHStOriCountState(wbSHStOriCount + 30)
            setwbSHStRupeeCost(parseFloat(wbSHStRupeeCost + 10))
        }
    }

    function shadowStaffRefine() {
        if (shadowHStaffRefineState == "grayscale(100%)") {
            setShadowHStaffRefineState("grayscale(0%)")
            setShadowHWeaponChoiceState("staff")
            setwbSHStSphereCountState(wbSHStSphereCount - 50)
            setwbSHStTailCountState(wbSHStTailCount - 40)
            setwbSHStHornCountState(wbSHStHornCount - 30)
            setwbSHStHeartCountState(wbSHStHeartCount - 10)
            setwbSHStOriCountState(wbSHStOriCount - 3)
            setwbSHStRupeeCost(parseFloat(wbSHStRupeeCost - 1.5))
        }
        else if (shadowHStaffRefineState == "grayscale(0%)") {
            setShadowHStaffRefineState("grayscale(100%)")
            setShadowHWeaponChoiceState("staff")
            setwbSHStSphereCountState(wbSHStSphereCount + 50)
            setwbSHStTailCountState(wbSHStTailCount + 40)
            setwbSHStHornCountState(wbSHStHornCount + 30)
            setwbSHStHeartCountState(wbSHStHeartCount + 10)
            setwbSHStOriCountState(wbSHStOriCount + 3)
            setwbSHStRupeeCost(parseFloat(wbSHStRupeeCost + 1.5))
        }
    }

    function handleShadowStaffUnbindIncrement(event) {
        setShadowHWeaponChoiceState("staff");
        if (shadowHStaffUnbindState < event.target.value) {
            if (event.target.value - shadowHStaffUnbindState == 1) {
                setShadowHStaffUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbSHStSphereCountState(wbSHStSphereCount - 25)
                    setwbSHStTailCountState(wbSHStTailCount - 18)
                    setwbSHStHeartCountState(wbSHStHeartCount - 5)
                    setwbSHStOriCountState(wbSHStOriCount - 1)
                    setwbSHStRupeeCost(parseFloat(wbSHStRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbSHStSphereCountState(wbSHStSphereCount - 175)
                    setwbSHStTailCountState(wbSHStTailCount - 130)
                    setwbSHStHornCountState(wbSHStHornCount - 30)
                    setwbSHStHeartCountState(wbSHStHeartCount - 35)
                    setwbSHStOriCountState(wbSHStOriCount - 8)
                    setwbSHStRupeeCost(parseFloat(wbSHStRupeeCost - 7.5))
                }
            }
        }
        else if (shadowHStaffUnbindState > event.target.value) {
            if (shadowHStaffUnbindState - event.target.value == 1) {
                setShadowHStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbSHStSphereCountState(wbSHStSphereCount + 25)
                    setwbSHStTailCountState(wbSHStTailCount + 18)
                    setwbSHStHeartCountState(wbSHStHeartCount + 5)
                    setwbSHStOriCountState(wbSHStOriCount + 1)
                    setwbSHStRupeeCost(parseFloat(wbSHStRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbSHStSphereCountState(wbSHStSphereCount + 175)
                    setwbSHStTailCountState(wbSHStTailCount + 130)
                    setwbSHStHornCountState(wbSHStHornCount + 30)
                    setwbSHStHeartCountState(wbSHStHeartCount + 35)
                    setwbSHStOriCountState(wbSHStOriCount + 8)
                    setwbSHStRupeeCost(parseFloat(wbSHStRupeeCost + 7.5))
                }
            }
        }
    }

    function craftShadowManacaster() {
        if (shadowHManacasterCraftState == "grayscale(100%)") {
            setShadowHManacasterCraftState("grayscale(0%)")
            setShadowHWeaponChoiceState("manacaster")
            setwbSHMSphereCountState(wbSHMSphereCount - 25)
            setwbSHMTailCountState(wbSHMTailCount - 18)
            setwbSHMHeartCountState(wbSHMHeartCount - 5)
            setwbSHMOriCountState(wbSHMOriCount - 1)
            setwbSHMRupeeCost(parseFloat(wbSHMRupeeCost - 1.2))
        }
        else if (shadowHManacasterCraftState == "grayscale(0%)") {
            setShadowHManacasterCraftState("grayscale(100%)")
            setShadowHWeaponChoiceState("manacaster")
            setwbSHMSphereCountState(wbSHMSphereCount + 25)
            setwbSHMTailCountState(wbSHMTailCount + 18)
            setwbSHMHeartCountState(wbSHMHeartCount + 5)
            setwbSHMOriCountState(wbSHMOriCount + 1)
            setwbSHMRupeeCost(parseFloat(wbSHMRupeeCost + 1.2))
        }
    }

    function shadowManacasterWeaponBonus() {
        if (shadowHManacasterWeaponBonusState == "grayscale(100%)") {
            setShadowHManacasterWeaponBonusState("grayscale(0%)")
            setShadowHWeaponChoiceState("manacaster")
            setwbSHMSphereCountState(wbSHMSphereCount - 150)
            setwbSHMTailCountState(wbSHMTailCount - 100)
            setwbSHMHornCountState(wbSHMHornCount - 30)
            setwbSHMHeartCountState(wbSHMHeartCount - 10)
            setwbSHMOriCountState(wbSHMOriCount - 30)
            setwbSHMRupeeCost(parseFloat(wbSHMRupeeCost - 10))
        }
        else if (shadowHManacasterWeaponBonusState == "grayscale(0%)") {
            setShadowHManacasterWeaponBonusState("grayscale(100%)")
            setShadowHWeaponChoiceState("manacaster")
            setwbSHMSphereCountState(wbSHMSphereCount + 150)
            setwbSHMTailCountState(wbSHMTailCount + 100)
            setwbSHMHornCountState(wbSHMHornCount + 30)
            setwbSHMHeartCountState(wbSHMHeartCount + 10)
            setwbSHMOriCountState(wbSHMOriCount + 30)
            setwbSHMRupeeCost(parseFloat(wbSHMRupeeCost + 10))
        }
    }

    function shadowManacasterRefine() {
        if (shadowHManacasterRefineState == "grayscale(100%)") {
            setShadowHManacasterRefineState("grayscale(0%)")
            setShadowHWeaponChoiceState("manacaster")
            setwbSHMSphereCountState(wbSHMSphereCount - 50)
            setwbSHMTailCountState(wbSHMTailCount - 40)
            setwbSHMHornCountState(wbSHMHornCount - 30)
            setwbSHMHeartCountState(wbSHMHeartCount - 10)
            setwbSHMOriCountState(wbSHMOriCount - 3)
            setwbSHMRupeeCost(parseFloat(wbSHMRupeeCost - 1.5))
        }
        else if (shadowHManacasterRefineState == "grayscale(0%)") {
            setShadowHManacasterRefineState("grayscale(100%)")
            setShadowHWeaponChoiceState("manacaster")
            setwbSHMSphereCountState(wbSHMSphereCount + 50)
            setwbSHMTailCountState(wbSHMTailCount + 40)
            setwbSHMHornCountState(wbSHMHornCount + 30)
            setwbSHMHeartCountState(wbSHMHeartCount + 10)
            setwbSHMOriCountState(wbSHMOriCount + 3)
            setwbSHMRupeeCost(parseFloat(wbSHMRupeeCost + 1.5))
        }
    }

    function handleShadowManacasterUnbindIncrement(event) {
        setShadowHWeaponChoiceState("manacaster");
        if (shadowHManacasterUnbindState < event.target.value) {
            if (event.target.value - shadowHManacasterUnbindState == 1) {
                setShadowHManacasterUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbSHMSphereCountState(wbSHMSphereCount - 25)
                    setwbSHMTailCountState(wbSHMTailCount - 18)
                    setwbSHMHeartCountState(wbSHMHeartCount - 5)
                    setwbSHMOriCountState(wbSHMOriCount - 1)
                    setwbSHMRupeeCost(parseFloat(wbSHMRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbSHMSphereCountState(wbSHMSphereCount - 175)
                    setwbSHMTailCountState(wbSHMTailCount - 130)
                    setwbSHMHornCountState(wbSHMHornCount - 30)
                    setwbSHMHeartCountState(wbSHMHeartCount - 35)
                    setwbSHMOriCountState(wbSHMOriCount - 8)
                    setwbSHMRupeeCost(parseFloat(wbSHMRupeeCost - 7.5))
                }
            }
        }
        else if (shadowHManacasterUnbindState > event.target.value) {
            if (shadowHManacasterUnbindState - event.target.value == 1) {
                setShadowHManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbSHMSphereCountState(wbSHMSphereCount + 25)
                    setwbSHMTailCountState(wbSHMTailCount + 18)
                    setwbSHMHeartCountState(wbSHMHeartCount + 5)
                    setwbSHMOriCountState(wbSHMOriCount + 1)
                    setwbSHMRupeeCost(parseFloat(wbSHMRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbSHMSphereCountState(wbSHMSphereCount + 175)
                    setwbSHMTailCountState(wbSHMTailCount + 130)
                    setwbSHMHornCountState(wbSHMHornCount + 30)
                    setwbSHMHeartCountState(wbSHMHeartCount + 35)
                    setwbSHMOriCountState(wbSHMOriCount + 8)
                    setwbSHMRupeeCost(parseFloat(wbSHMRupeeCost + 7.5))
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
                            Shadow HDT Weapons
                        </Box>
                    </Flex>
                        <Flex>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={ShadowHDTSword} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: shadowHSwordCraftState }} onClick={craftShadowSword} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="purple">Absolute Hex</Text>
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
                                            onChange={handleShadowSwordUnbindIncrement}
                                            defaultValue={shadowHSwordUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{shadowHSwordUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: shadowHSwordWeaponBonusState }} onClick={shadowSwordWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: shadowHSwordRefineState }} onClick={shadowSwordRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={ShadowHDTBlade} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: shadowHBladeCraftState }} onClick={craftShadowBlade} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="purple">True Abyss</Text>
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
                                            onChange={handleShadowBladeUnbindIncrement}
                                            defaultValue={shadowHBladeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{shadowHBladeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: shadowHBladeWeaponBonusState }} onClick={shadowBladeWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: shadowHBladeRefineState }} onClick={shadowBladeRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={ShadowHDTDagger} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: shadowHDaggerCraftState }} onClick={craftShadowDagger} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="purple">Shaderuler's Maw</Text>
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
                                            onChange={handleShadowDaggerUnbindIncrement}
                                            defaultValue={shadowHDaggerUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{shadowHDaggerUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: shadowHDaggerWeaponBonusState }} onClick={shadowDaggerWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: shadowHDaggerRefineState }} onClick={shadowDaggerRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={ShadowHDTAxe} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: shadowHAxeCraftState }} onClick={craftShadowAxe} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="purple">Shadowy Darkbite Axe</Text>
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
                                            onChange={handleShadowAxeUnbindIncrement}
                                            defaultValue={shadowHAxeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{shadowHAxeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: shadowHAxeWeaponBonusState }} onClick={shadowAxeWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: shadowHAxeRefineState }} onClick={shadowAxeRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={ShadowHDTLance} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: shadowHLanceCraftState }} onClick={craftShadowLance} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="purple">Ebon Scourge Lance</Text>
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
                                            onChange={handleShadowLanceUnbindIncrement}
                                            defaultValue={shadowHLanceUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{shadowHLanceUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: shadowHLanceWeaponBonusState }} onClick={shadowLanceWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: shadowHLanceRefineState }} onClick={shadowLanceRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={ShadowHDTBow} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: shadowHBowCraftState }} onClick={craftShadowBow} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="purple">Hellish Prophecy</Text>
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
                                            onChange={handleShadowBowUnbindIncrement}
                                            defaultValue={shadowHBowUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{shadowHBowUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: shadowHBowWeaponBonusState }} onClick={shadowBowWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: shadowHBowRefineState }} onClick={shadowBowRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={ShadowHDTWand} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: shadowHWandCraftState }} onClick={craftShadowWand} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="purple">Darkbinder</Text>
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
                                            onChange={handleShadowWandUnbindIncrement}
                                            defaultValue={shadowHWandUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{shadowHWandUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: shadowHWandWeaponBonusState }} onClick={shadowWandWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: shadowHWandRefineState }} onClick={shadowWandRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={ShadowHDTStaff} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: shadowHStaffCraftState }} onClick={craftShadowStaff} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="purple">Dark Hunger</Text>
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
                                            onChange={handleShadowStaffUnbindIncrement}
                                            defaultValue={shadowHStaffUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{shadowHStaffUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: shadowHStaffWeaponBonusState }} onClick={shadowStaffWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: shadowHStaffRefineState }} onClick={shadowStaffRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={FireHDTManacaster} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: shadowHManacasterCraftState }} onClick={craftShadowManacaster} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="purple">?????</Text>
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
                                            onChange={handleShadowManacasterUnbindIncrement}
                                            defaultValue={shadowHManacasterUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{shadowHManacasterUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: shadowHManacasterWeaponBonusState }} onClick={shadowManacasterWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: shadowHManacasterRefineState }} onClick={shadowManacasterRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                </Box>
                {shadowHDTWeaponSelection()}
            </Flex>
            <WeaponTypeNavTabs />
        </div>
    )
}
