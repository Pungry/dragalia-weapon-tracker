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
    const [waterWeaponChoice, setWaterWeaponChoiceState] = useLocalStorage("waterWeaponChoice", "sword")

    const [waterSwordCraftState, setWaterSwordCraftState] = useLocalStorage("waterSwordCraftState", "grayscale(100%)")
    const [waterSwordWeaponBonusState, setWaterSwordWeaponBonusState] = useLocalStorage("waterSwordWeaponBonusState", "grayscale(100%)")
    const [waterSwordRefineState, setWaterSwordRefineState] = useLocalStorage("waterSwordRefineState", "grayscale(100%)");
    const [waterSwordUnbindState, setWaterSwordUnbindState] = useLocalStorage("waterSwordUnbindState", 0);

    const [wbFWaSphereCount, setwbFWaSphereCountState] = useLocalStorage("wbFWaSphereCount", 500);
    const [wbFWaTailCount, setwbFWaTailCountState] = useLocalStorage("wbFWaTailCount", 360);
    const [wbFWaHeartCount, setwbFWaHeartCountState] = useLocalStorage("wbFWaHeartCount", 80);
    const [wbFWaOriCount, setwbFWaOriCountState] = useLocalStorage("wbFWaOriCount", 46);
    const [wbFWaRupeeCost, setwbFWaRupeeCost] = useLocalStorage("wbFWaRupeeCost", 25);
    const [wbFWaHornCount, setwbFWaHornCountState] = useLocalStorage("wbFWaHornCount", 90);

    const [waterBladeCraftState, setWaterBladeCraftState] = useLocalStorage("waterBladeCraftState", "grayscale(100%)")
    const [waterBladeWeaponBonusState, setWaterBladeWeaponBonusState] = useLocalStorage("waterBladeWeaponBonusState", "grayscale(100%)")
    const [waterBladeRefineState, setWaterBladeRefineState] = useLocalStorage("waterBladeRefineState", "grayscale(100%)");
    const [waterBladeUnbindState, setWaterBladeUnbindState] = useLocalStorage("waterBladeUnbindState", 0);

    const [wbFWaBlSphereCount, setwbFWaBlSphereCountState] = useLocalStorage("wbFWaBlSphereCount", 500);
    const [wbFWaBlTailCount, setwbFWaBlTailCountState] = useLocalStorage("wbFWaBlTailCount", 360);
    const [wbFWaBlHeartCount, setwbFWaBlHeartCountState] = useLocalStorage("wbFWaBlHeartCount", 80);
    const [wbFWaBlOriCount, setwbFWaBlOriCountState] = useLocalStorage("wbFWaBlOriCount", 46);
    const [wbFWaBlRupeeCost, setwbFWaBlRupeeCost] = useLocalStorage("wbFWaBlRupeeCost", 25);
    const [wbFWaBlHornCount, setwbFWaBlHornCountState] = useLocalStorage("wbFWaBlHornCount", 90);

    const [waterDaggerCraftState, setWaterDaggerCraftState] = useLocalStorage("waterDaggerCraftState", "grayscale(100%)")
    const [waterDaggerWeaponBonusState, setWaterDaggerWeaponBonusState] = useLocalStorage("waterDaggerWeaponBonusState", "grayscale(100%)")
    const [waterDaggerRefineState, setWaterDaggerRefineState] = useLocalStorage("waterDaggerRefineState", "grayscale(100%)");
    const [waterDaggerUnbindState, setWaterDaggerUnbindState] = useLocalStorage("waterDaggerUnbindState", 0);

    const [wbFWaDSphereCount, setwbFWaDSphereCountState] = useLocalStorage("wbFWaDSphereCount", 500);
    const [wbFWaDTailCount, setwbFWaDTailCountState] = useLocalStorage("wbFWaDTailCount", 360);
    const [wbFWaDHeartCount, setwbFWaDHeartCountState] = useLocalStorage("wbFWaDHeartCount", 80);
    const [wbFWaDOriCount, setwbFWaDOriCountState] = useLocalStorage("wbFWaDOriCount", 46);
    const [wbFWaDRupeeCost, setwbFWaDRupeeCost] = useLocalStorage("wbFWaDRupeeCost", 25);
    const [wbFWaDHornCount, setwbFWaDHornCountState] = useLocalStorage("wbFWaDHornCount", 90);

    const [waterAxeCraftState, setWaterAxeCraftState] = useLocalStorage("waterAxeCraftState", "grayscale(100%)")
    const [waterAxeWeaponBonusState, setWaterAxeWeaponBonusState] = useLocalStorage("waterAxeWeaponBonusState", "grayscale(100%)")
    const [waterAxeRefineState, setWaterAxeRefineState] = useLocalStorage("waterAxeRefineState", "grayscale(100%)");
    const [waterAxeUnbindState, setWaterAxeUnbindState] = useLocalStorage("waterAxeUnbindState", 0);

    const [wbFWaASphereCount, setwbFWaASphereCountState] = useLocalStorage("wbFWaASphereCount", 500);
    const [wbFWaATailCount, setwbFWaATailCountState] = useLocalStorage("wbFWaATailCount", 360);
    const [wbFWaAHeartCount, setwbFWaAHeartCountState] = useLocalStorage("wbFWaAHeartCount", 80);
    const [wbFWaAOriCount, setwbFWaAOriCountState] = useLocalStorage("wbFWaAOriCount", 46);
    const [wbFWaARupeeCost, setwbFWaARupeeCost] = useLocalStorage("wbFWaARupeeCost", 25);
    const [wbFWaAHornCount, setwbFWaAHornCountState] = useLocalStorage("wbFWaAHornCount", 90);

    const [waterLanceCraftState, setWaterLanceCraftState] = useLocalStorage("waterLanceCraftState", "grayscale(100%)")
    const [waterLanceWeaponBonusState, setWaterLanceWeaponBonusState] = useLocalStorage("waterLanceWeaponBonusState", "grayscale(100%)")
    const [waterLanceRefineState, setWaterLanceRefineState] = useLocalStorage("waterLanceRefineState", "grayscale(100%)");
    const [waterLanceUnbindState, setWaterLanceUnbindState] = useLocalStorage("waterLanceUnbindState", 0);

    const [wbFWaLSphereCount, setwbFWaLSphereCountState] = useLocalStorage("wbFWaLSphereCount", 500);
    const [wbFWaLTailCount, setwbFWaLTailCountState] = useLocalStorage("wbFWaLTailCount", 360);
    const [wbFWaLHeartCount, setwbFWaLHeartCountState] = useLocalStorage("wbFWaLHeartCount", 80);
    const [wbFWaLOriCount, setwbFWaLOriCountState] = useLocalStorage("wbFWaLOriCount", 46);
    const [wbFWaLRupeeCost, setwbFWaLRupeeCost] = useLocalStorage("wbFWaLRupeeCost", 25);
    const [wbFWaLHornCount, setwbFWaLHornCountState] = useLocalStorage("wbFWaLHornCount", 90);

    const [waterBowCraftState, setWaterBowCraftState] = useLocalStorage("waterBowCraftState", "grayscale(100%)")
    const [waterBowWeaponBonusState, setWaterBowWeaponBonusState] = useLocalStorage("waterBowWeaponBonusState", "grayscale(100%)")
    const [waterBowRefineState, setWaterBowRefineState] = useLocalStorage("waterBowRefineState", "grayscale(100%)");
    const [waterBowUnbindState, setWaterBowUnbindState] = useLocalStorage("waterBowUnbindState", 0);

    const [wbFWaBoSphereCount, setwbFWaBoSphereCountState] = useLocalStorage("wbFWaBoSphereCount", 500);
    const [wbFWaBoTailCount, setwbFWaBoTailCountState] = useLocalStorage("wbFWaBoTailCount", 360);
    const [wbFWaBoHeartCount, setwbFWaBoHeartCountState] = useLocalStorage("wbFWaBoHeartCount", 80);
    const [wbFWaBoOriCount, setwbFWaBoOriCountState] = useLocalStorage("wbFWaBoOriCount", 46);
    const [wbFWaBoRupeeCost, setwbFWaBoRupeeCost] = useLocalStorage("wbFWaBoRupeeCost", 25);
    const [wbFWaBoHornCount, setwbFWaBoHornCountState] = useLocalStorage("wbFWaBoHornCount", 90);

    const [waterWandCraftState, setWaterWandCraftState] = useLocalStorage("waterWandCraftState", "grayscale(100%)")
    const [waterWandWeaponBonusState, setWaterWandWeaponBonusState] = useLocalStorage("waterWandWeaponBonusState", "grayscale(100%)")
    const [waterWandRefineState, setWaterWandRefineState] = useLocalStorage("waterWandRefineState", "grayscale(100%)");
    const [waterWandUnbindState, setWaterWandUnbindState] = useLocalStorage("waterWandUnbindState", 0);

    const [wbFWaWSphereCount, setwbFWaWSphereCountState] = useLocalStorage("wbFWaWSphereCount", 500);
    const [wbFWaWTailCount, setwbFWaWTailCountState] = useLocalStorage("wbFWaWTailCount", 360);
    const [wbFWaWHeartCount, setwbFWaWHeartCountState] = useLocalStorage("wbFWaWHeartCount", 80);
    const [wbFWaWOriCount, setwbFWaWOriCountState] = useLocalStorage("wbFWaWOriCount", 46);
    const [wbFWaWRupeeCost, setwbFWaWRupeeCost] = useLocalStorage("wbFWaWRupeeCost", 25);
    const [wbFWaWHornCount, setwbFWaWHornCountState] = useLocalStorage("wbFWaWHornCount", 90);

    const [waterStaffCraftState, setWaterStaffCraftState] = useLocalStorage("waterStaffCraftState", "grayscale(100%)")
    const [waterStaffWeaponBonusState, setWaterStaffWeaponBonusState] = useLocalStorage("waterStafWeaponBonusState", "grayscale(100%)")
    const [waterStaffRefineState, setWaterStaffRefineState] = useLocalStorage("waterStaffRefineState", "grayscale(100%)");
    const [waterStaffUnbindState, setWaterStaffUnbindState] = useLocalStorage("waterStaffUnbindState", 0);

    const [wbFWaStSphereCount, setwbFWaStSphereCountState] = useLocalStorage("wbFWaStSphereCount", 500);
    const [wbFWaStTailCount, setwbFWaStTailCountState] = useLocalStorage("wbFWaStTailCount", 360);
    const [wbFWaStHeartCount, setwbFWaStHeartCountState] = useLocalStorage("wbFWaStHeartCount", 80);
    const [wbFWaStOriCount, setwbFWaStOriCountState] = useLocalStorage("wbFWaStOriCount", 46);
    const [wbFWaStRupeeCost, setwbFWaStRupeeCost] = useLocalStorage("wbFWaStRupeeCost", 25);
    const [wbFWaStHornCount, setwbFWaStHornCountState] = useLocalStorage("wbFWaStHornCount", 90);

    const [waterManacasterCraftState, setWaterManacasterCraftState] = useLocalStorage("waterManacasterCraftState", "grayscale(100%)")
    const [waterManacasterWeaponBonusState, setWaterManacasterWeaponBonusState] = useLocalStorage("waterManacasterWeaponBonusState", "grayscale(100%)")
    const [waterManacasterRefineState, setWaterManacasterRefineState] = useLocalStorage("waterManacasterRefineState", "grayscale(100%)");
    const [waterManacasterUnbindState, setWaterManacasterUnbindState] = useLocalStorage("waterManacasterUnbindState", 0);

    const [wbFWaMSphereCount, setwbFWaMSphereCountState] = useLocalStorage("wbFWaMSphereCount", 500);
    const [wbFWaMTailCount, setwbFWaMTailCountState] = useLocalStorage("wbFWaMTailCount", 360);
    const [wbFWaMHeartCount, setwbFWaMHeartCountState] = useLocalStorage("wbFWaMHeartCount", 80);
    const [wbFWaMOriCount, setwbFWaMOriCountState] = useLocalStorage("wbFWaMOriCount", 46);
    const [wbFWaMRupeeCost, setwbFWaMRupeeCost] = useLocalStorage("wbFWaMRupeeCost", 25);
    const [wbFWaMHornCount, setwbFWaMHornCountState] = useLocalStorage("wbFWaMHornCount", 90);

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
        if (waterWeaponChoice == "sword") {
            return <WaterHDTSwordCost wbFWaSphereCount={wbFWaSphereCount} wbFWaTailCount={wbFWaTailCount} wbFWaHeartCount={wbFWaHeartCount} wbFWaOriCount={wbFWaOriCount} wbFWaRupeeCost={wbFWaRupeeCost.toFixed(1)} wbFWaHornCount={wbFWaHornCount} />
        }
        if (waterWeaponChoice == "blade") {
            return <WaterHDTBladeCost wbFWaBlSphereCount={wbFWaBlSphereCount} wbFWaBlTailCount={wbFWaBlTailCount} wbFWaBlHeartCount={wbFWaBlHeartCount} wbFWaBlOriCount={wbFWaBlOriCount} wbFWaBlRupeeCost={wbFWaBlRupeeCost.toFixed(1)} wbFWaBlHornCount={wbFWaBlHornCount} />
        }
        if (waterWeaponChoice == "dagger") {
            return <WaterHDTDaggerCost wbFWaDSphereCount={wbFWaDSphereCount} wbFWaDTailCount={wbFWaDTailCount} wbFWaDHeartCount={wbFWaDHeartCount} wbFWaDOriCount={wbFWaDOriCount} wbFWaDRupeeCost={wbFWaDRupeeCost.toFixed(1)} wbFWaDHornCount={wbFWaDHornCount} />
        }
        if (waterWeaponChoice == "axe") {
            return <WaterHDTAxeCost wbFWaASphereCount={wbFWaASphereCount} wbFWaATailCount={wbFWaATailCount} wbFWaAHeartCount={wbFWaAHeartCount} wbFWaAOriCount={wbFWaAOriCount} wbFWaARupeeCost={wbFWaARupeeCost.toFixed(1)} wbFWaAHornCount={wbFWaAHornCount} />
        }
        if (waterWeaponChoice == "lance") {
            return <WaterHDTLanceCost wbFWaLSphereCount={wbFWaLSphereCount} wbFWaLTailCount={wbFWaLTailCount} wbFWaLHeartCount={wbFWaLHeartCount} wbFWaLOriCount={wbFWaLOriCount} wbFWaLRupeeCost={wbFWaLRupeeCost.toFixed(1)} wbFWaLHornCount={wbFWaLHornCount} />
        }
        if (waterWeaponChoice == "bow") {
            return <WaterHDTBowCost wbFWaBoSphereCount={wbFWaBoSphereCount} wbFWaBoTailCount={wbFWaBoTailCount} wbFWaBoHeartCount={wbFWaBoHeartCount} wbFWaBoOriCount={wbFWaBoOriCount} wbFWaBoRupeeCost={wbFWaBoRupeeCost.toFixed(1)} wbFWaBoHornCount={wbFWaBoHornCount} />
        }
        if (waterWeaponChoice == "wand") {
            return <WaterHDTWandCost wbFWaWSphereCount={wbFWaWSphereCount} wbFWaWTailCount={wbFWaWTailCount} wbFWaWHeartCount={wbFWaWHeartCount} wbFWaWOriCount={wbFWaWOriCount} wbFWaWRupeeCost={wbFWaWRupeeCost.toFixed(1)} wbFWaWHornCount={wbFWaWHornCount} />
        }
        if (waterWeaponChoice == "staff") {
            return <WaterHDTStaffCost wbFWaStSphereCount={wbFWaStSphereCount} wbFWaStTailCount={wbFWaStTailCount} wbFWaStHeartCount={wbFWaStHeartCount} wbFWaStOriCount={wbFWaStOriCount} wbFWaStRupeeCost={wbFWaStRupeeCost.toFixed(1)} wbFWaStHornCount={wbFWaStHornCount} />
        }
        if (waterWeaponChoice == "manacaster") {
            return <WaterHDTManacasterCost wbFWaMSphereCount={wbFWaMSphereCount} wbFWaMTailCount={wbFWaMTailCount} wbFWaMHeartCount={wbFWaMHeartCount} wbFWaMOriCount={wbFWaMOriCount} wbFWaMRupeeCost={wbFWaMRupeeCost.toFixed(1)} wbFWaMHornCount={wbFWaMHornCount} />
        }
    }

    function craftWaterSword() {
        if (waterSwordCraftState == "grayscale(100%)") {
            setWaterSwordCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("sword")
            setwbFWaSphereCountState(wbFWaSphereCount - 25)
            setwbFWaTailCountState(wbFWaTailCount - 18)
            setwbFWaHeartCountState(wbFWaHeartCount - 5)
            setwbFWaOriCountState(wbFWaOriCount - 1)
            setwbFWaRupeeCost(parseFloat(wbFWaRupeeCost - 1.2))
        }
        else if (waterSwordCraftState == "grayscale(0%)") {
            setWaterSwordCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("sword")
            setwbFWaSphereCountState(wbFWaSphereCount + 25)
            setwbFWaTailCountState(wbFWaTailCount + 18)
            setwbFWaHeartCountState(wbFWaHeartCount + 5)
            setwbFWaOriCountState(wbFWaOriCount + 1)
            setwbFWaRupeeCost(parseFloat(wbFWaRupeeCost + 1.2))
        }
    }

    function waterSwordWeaponBonus() {
        if (waterSwordWeaponBonusState == "grayscale(100%)") {
            setWaterSwordWeaponBonusState("grayscale(0%)")
            setWaterWeaponChoiceState("sword")
            setwbFWaSphereCountState(wbFWaSphereCount - 150)
            setwbFWaTailCountState(wbFWaTailCount - 100)
            setwbFWaHornCountState(wbFWaHornCount - 30)
            setwbFWaHeartCountState(wbFWaHeartCount - 10)
            setwbFWaOriCountState(wbFWaOriCount - 30)
            setwbFWaRupeeCost(parseFloat(wbFWaRupeeCost - 10))
        }
        else if (waterSwordWeaponBonusState == "grayscale(0%)") {
            setWaterSwordWeaponBonusState("grayscale(100%)")
            setWaterWeaponChoiceState("sword")
            setwbFWaSphereCountState(wbFWaSphereCount + 150)
            setwbFWaTailCountState(wbFWaTailCount + 100)
            setwbFWaHornCountState(wbFWaHornCount + 30)
            setwbFWaHeartCountState(wbFWaHeartCount + 10)
            setwbFWaOriCountState(wbFWaOriCount + 30)
            setwbFWaRupeeCost(parseFloat(wbFWaRupeeCost + 10))
        }
    }

    function waterSwordRefine() {
        if (waterSwordRefineState == "grayscale(100%)") {
            setWaterSwordRefineState("grayscale(0%)")
            setWaterWeaponChoiceState("sword")
            setwbFWaSphereCountState(wbFWaSphereCount - 50)
            setwbFWaTailCountState(wbFWaTailCount - 40)
            setwbFWaHornCountState(wbFWaHornCount - 30)
            setwbFWaHeartCountState(wbFWaHeartCount - 10)
            setwbFWaOriCountState(wbFWaOriCount - 3)
            setwbFWaRupeeCost(parseFloat(wbFWaRupeeCost - 1.5))
        }
        else if (waterSwordRefineState == "grayscale(0%)") {
            setWaterSwordRefineState("grayscale(100%)")
            setWaterWeaponChoiceState("sword")
            setwbFWaSphereCountState(wbFWaSphereCount + 50)
            setwbFWaTailCountState(wbFWaTailCount + 40)
            setwbFWaHornCountState(wbFWaHornCount + 30)
            setwbFWaHeartCountState(wbFWaHeartCount + 10)
            setwbFWaOriCountState(wbFWaOriCount + 3)
            setwbFWaRupeeCost(parseFloat(wbFWaRupeeCost + 1.5))
        }
    }

    function handleWaterSwordUnbindIncrement(event) {
        setWaterWeaponChoiceState("sword");
        if (waterSwordUnbindState < event.target.value) {
            if (event.target.value - waterSwordUnbindState == 1) {
                setWaterSwordUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFWaSphereCountState(wbFWaSphereCount - 25)
                    setwbFWaTailCountState(wbFWaTailCount - 18)
                    setwbFWaHeartCountState(wbFWaHeartCount - 5)
                    setwbFWaOriCountState(wbFWaOriCount - 1)
                    setwbFWaRupeeCost(parseFloat(wbFWaRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFWaSphereCountState(wbFWaSphereCount - 175)
                    setwbFWaTailCountState(wbFWaTailCount - 130)
                    setwbFWaHornCountState(wbFWaHornCount - 30)
                    setwbFWaHeartCountState(wbFWaHeartCount - 35)
                    setwbFWaOriCountState(wbFWaOriCount - 8)
                    setwbFWaRupeeCost(parseFloat(wbFWaRupeeCost - 7.5))
                }
            }
        }
        else if (waterSwordUnbindState > event.target.value) {
            if (waterSwordUnbindState - event.target.value == 1) {
                setWaterSwordUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFWaSphereCountState(wbFWaSphereCount + 25)
                    setwbFWaTailCountState(wbFWaTailCount + 18)
                    setwbFWaHeartCountState(wbFWaHeartCount + 5)
                    setwbFWaOriCountState(wbFWaOriCount + 1)
                    setwbFWaRupeeCost(parseFloat(wbFWaRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFWaSphereCountState(wbFWaSphereCount + 175)
                    setwbFWaTailCountState(wbFWaTailCount + 130)
                    setwbFWaHornCountState(wbFWaHornCount + 30)
                    setwbFWaHeartCountState(wbFWaHeartCount + 35)
                    setwbFWaOriCountState(wbFWaOriCount + 8)
                    setwbFWaRupeeCost(parseFloat(wbFWaRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterBlade() {
        if (waterBladeCraftState == "grayscale(100%)") {
            setWaterBladeCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("blade")
            setwbFWaBlSphereCountState(wbFWaBlSphereCount - 25)
            setwbFWaBlTailCountState(wbFWaBlTailCount - 18)
            setwbFWaBlHeartCountState(wbFWaBlHeartCount - 5)
            setwbFWaBlOriCountState(wbFWaBlOriCount - 1)
            setwbFWaBlRupeeCost(parseFloat(wbFWaBlRupeeCost - 1.2))
        }
        else if (waterBladeCraftState == "grayscale(0%)") {
            setWaterBladeCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("blade")
            setwbFWaBlSphereCountState(wbFWaBlSphereCount + 25)
            setwbFWaBlTailCountState(wbFWaBlTailCount + 18)
            setwbFWaBlHeartCountState(wbFWaBlHeartCount + 5)
            setwbFWaBlOriCountState(wbFWaBlOriCount + 1)
            setwbFWaBlRupeeCost(parseFloat(wbFWaBlRupeeCost + 1.2))
        }
    }

    function waterBladeWeaponBonus() {
        if (waterBladeWeaponBonusState == "grayscale(100%)") {
            setWaterBladeWeaponBonusState("grayscale(0%)")
            setWaterWeaponChoiceState("blade")
            setwbFWaBlSphereCountState(wbFWaBlSphereCount - 150)
            setwbFWaBlTailCountState(wbFWaBlTailCount - 100)
            setwbFWaBlHornCountState(wbFWaBlHornCount - 30)
            setwbFWaBlHeartCountState(wbFWaBlHeartCount - 10)
            setwbFWaBlOriCountState(wbFWaBlOriCount - 30)
            setwbFWaBlRupeeCost(parseFloat(wbFWaBlRupeeCost - 10))
        }
        else if (waterBladeWeaponBonusState == "grayscale(0%)") {
            setWaterBladeWeaponBonusState("grayscale(100%)")
            setWaterWeaponChoiceState("blade")
            setwbFWaBlSphereCountState(wbFWaBlSphereCount + 150)
            setwbFWaBlTailCountState(wbFWaBlTailCount + 100)
            setwbFWaBlHornCountState(wbFWaBlHornCount + 30)
            setwbFWaBlHeartCountState(wbFWaBlHeartCount + 10)
            setwbFWaBlOriCountState(wbFWaBlOriCount + 30)
            setwbFWaBlRupeeCost(parseFloat(wbFWaBlRupeeCost + 10))
        }
    }

    function waterBladeRefine() {
        if (waterBladeRefineState == "grayscale(100%)") {
            setWaterBladeRefineState("grayscale(0%)")
            setWaterWeaponChoiceState("blade")
            setwbFWaBlSphereCountState(wbFWaBlSphereCount - 50)
            setwbFWaBlTailCountState(wbFWaBlTailCount - 40)
            setwbFWaBlHornCountState(wbFWaBlHornCount - 30)
            setwbFWaBlHeartCountState(wbFWaBlHeartCount - 10)
            setwbFWaBlOriCountState(wbFWaBlOriCount - 3)
            setwbFWaBlRupeeCost(parseFloat(wbFWaBlRupeeCost - 1.5))
        }
        else if (waterBladeRefineState == "grayscale(0%)") {
            setWaterBladeRefineState("grayscale(100%)")
            setWaterWeaponChoiceState("blade")
            setwbFWaBlSphereCountState(wbFWaBlSphereCount + 50)
            setwbFWaBlTailCountState(wbFWaBlTailCount + 40)
            setwbFWaBlHornCountState(wbFWaBlHornCount + 30)
            setwbFWaBlHeartCountState(wbFWaBlHeartCount + 10)
            setwbFWaBlOriCountState(wbFWaBlOriCount + 3)
            setwbFWaBlRupeeCost(parseFloat(wbFWaBlRupeeCost + 1.5))
        }
    }

    function handleWaterBladeUnbindIncrement(event) {
        setWaterWeaponChoiceState("blade");
        if (waterBladeUnbindState < event.target.value) {
            if (event.target.value - waterBladeUnbindState == 1) {
                setWaterBladeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFWaBlSphereCountState(wbFWaBlSphereCount - 25)
                    setwbFWaBlTailCountState(wbFWaBlTailCount - 18)
                    setwbFWaBlHeartCountState(wbFWaBlHeartCount - 5)
                    setwbFWaBlOriCountState(wbFWaBlOriCount - 1)
                    setwbFWaBlRupeeCost(parseFloat(wbFWaBlRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFWaBlSphereCountState(wbFWaBlSphereCount - 175)
                    setwbFWaBlTailCountState(wbFWaBlTailCount - 130)
                    setwbFWaBlHornCountState(wbFWaBlHornCount - 30)
                    setwbFWaBlHeartCountState(wbFWaBlHeartCount - 35)
                    setwbFWaBlOriCountState(wbFWaBlOriCount - 8)
                    setwbFWaBlRupeeCost(parseFloat(wbFWaBlRupeeCost - 7.5))
                }
            }
        }
        else if (waterBladeUnbindState > event.target.value) {
            if (waterBladeUnbindState - event.target.value == 1) {
                setWaterBladeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFWaBlSphereCountState(wbFWaBlSphereCount + 25)
                    setwbFWaBlTailCountState(wbFWaBlTailCount + 18)
                    setwbFWaBlHeartCountState(wbFWaBlHeartCount + 5)
                    setwbFWaBlOriCountState(wbFWaBlOriCount + 1)
                    setwbFWaBlRupeeCost(parseFloat(wbFWaBlRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFWaBlSphereCountState(wbFWaBlSphereCount + 175)
                    setwbFWaBlTailCountState(wbFWaBlTailCount + 130)
                    setwbFWaBlHornCountState(wbFWaBlHornCount + 30)
                    setwbFWaBlHeartCountState(wbFWaBlHeartCount + 35)
                    setwbFWaBlOriCountState(wbFWaBlOriCount + 8)
                    setwbFWaBlRupeeCost(parseFloat(wbFWaBlRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterDagger() {
        if (waterDaggerCraftState == "grayscale(100%)") {
            setWaterDaggerCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("dagger")
            setwbFWaDSphereCountState(wbFWaDSphereCount - 25)
            setwbFWaDTailCountState(wbFWaDTailCount - 18)
            setwbFWaDHeartCountState(wbFWaDHeartCount - 5)
            setwbFWaDOriCountState(wbFWaDOriCount - 1)
            setwbFWaDRupeeCost(parseFloat(wbFWaDRupeeCost - 1.2))
        }
        else if (waterDaggerCraftState == "grayscale(0%)") {
            setWaterDaggerCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("dagger")
            setwbFWaDSphereCountState(wbFWaDSphereCount + 25)
            setwbFWaDTailCountState(wbFWaDTailCount + 18)
            setwbFWaDHeartCountState(wbFWaDHeartCount + 5)
            setwbFWaDOriCountState(wbFWaDOriCount + 1)
            setwbFWaDRupeeCost(parseFloat(wbFWaDRupeeCost + 1.2))
        }
    }

    function waterDaggerWeaponBonus() {
        if (waterDaggerWeaponBonusState == "grayscale(100%)") {
            setWaterDaggerWeaponBonusState("grayscale(0%)")
            setWaterWeaponChoiceState("dagger")
            setwbFWaDSphereCountState(wbFWaDSphereCount - 150)
            setwbFWaDTailCountState(wbFWaDTailCount - 100)
            setwbFWaDHornCountState(wbFWaDHornCount - 30)
            setwbFWaDHeartCountState(wbFWaDHeartCount - 10)
            setwbFWaDOriCountState(wbFWaDOriCount - 30)
            setwbFWaDRupeeCost(parseFloat(wbFWaDRupeeCost - 10))
        }
        else if (waterDaggerWeaponBonusState == "grayscale(0%)") {
            setWaterDaggerWeaponBonusState("grayscale(100%)")
            setWaterWeaponChoiceState("dagger")
            setwbFWaDSphereCountState(wbFWaDSphereCount + 150)
            setwbFWaDTailCountState(wbFWaDTailCount + 100)
            setwbFWaDHornCountState(wbFWaDHornCount + 30)
            setwbFWaDHeartCountState(wbFWaDHeartCount + 10)
            setwbFWaDOriCountState(wbFWaDOriCount + 30)
            setwbFWaDRupeeCost(parseFloat(wbFWaDRupeeCost + 10))
        }
    }

    function waterDaggerRefine() {
        if (waterDaggerRefineState == "grayscale(100%)") {
            setWaterDaggerRefineState("grayscale(0%)")
            setWaterWeaponChoiceState("dagger")
            setwbFWaDSphereCountState(wbFWaDSphereCount - 50)
            setwbFWaDTailCountState(wbFWaDTailCount - 40)
            setwbFWaDHornCountState(wbFWaDHornCount - 30)
            setwbFWaDHeartCountState(wbFWaDHeartCount - 10)
            setwbFWaDOriCountState(wbFWaDOriCount - 3)
            setwbFWaDRupeeCost(parseFloat(wbFWaDRupeeCost - 1.5))
        }
        else if (waterDaggerRefineState == "grayscale(0%)") {
            setWaterDaggerRefineState("grayscale(100%)")
            setWaterWeaponChoiceState("dagger")
            setwbFWaDSphereCountState(wbFWaDSphereCount + 50)
            setwbFWaDTailCountState(wbFWaDTailCount + 40)
            setwbFWaDHornCountState(wbFWaDHornCount + 30)
            setwbFWaDHeartCountState(wbFWaDHeartCount + 10)
            setwbFWaDOriCountState(wbFWaDOriCount + 3)
            setwbFWaDRupeeCost(parseFloat(wbFWaDRupeeCost + 1.5))
        }
    }

    function handleWaterDaggerUnbindIncrement(event) {
        setWaterWeaponChoiceState("dagger");
        if (waterDaggerUnbindState < event.target.value) {
            if (event.target.value - waterDaggerUnbindState == 1) {
                setWaterDaggerUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFWaDSphereCountState(wbFWaDSphereCount - 25)
                    setwbFWaDTailCountState(wbFWaDTailCount - 18)
                    setwbFWaDHeartCountState(wbFWaDHeartCount - 5)
                    setwbFWaDOriCountState(wbFWaDOriCount - 1)
                    setwbFWaDRupeeCost(parseFloat(wbFWaDRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFWaDSphereCountState(wbFWaDSphereCount - 175)
                    setwbFWaDTailCountState(wbFWaDTailCount - 130)
                    setwbFWaDHornCountState(wbFWaDHornCount - 30)
                    setwbFWaDHeartCountState(wbFWaDHeartCount - 35)
                    setwbFWaDOriCountState(wbFWaDOriCount - 8)
                    setwbFWaDRupeeCost(parseFloat(wbFWaDRupeeCost - 7.5))
                }
            }
        }
        else if (waterDaggerUnbindState > event.target.value) {
            if (waterDaggerUnbindState - event.target.value == 1) {
                setWaterDaggerUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFWaDSphereCountState(wbFWaDSphereCount + 25)
                    setwbFWaDTailCountState(wbFWaDTailCount + 18)
                    setwbFWaDHeartCountState(wbFWaDHeartCount + 5)
                    setwbFWaDOriCountState(wbFWaDOriCount + 1)
                    setwbFWaDRupeeCost(parseFloat(wbFWaDRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFWaDSphereCountState(wbFWaDSphereCount + 175)
                    setwbFWaDTailCountState(wbFWaDTailCount + 130)
                    setwbFWaDHornCountState(wbFWaDHornCount + 30)
                    setwbFWaDHeartCountState(wbFWaDHeartCount + 35)
                    setwbFWaDOriCountState(wbFWaDOriCount + 8)
                    setwbFWaDRupeeCost(parseFloat(wbFWaDRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterAxe() {
        if (waterAxeCraftState == "grayscale(100%)") {
            setWaterAxeCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("axe")
            setwbFWaASphereCountState(wbFWaASphereCount - 25)
            setwbFWaATailCountState(wbFWaATailCount - 18)
            setwbFWaAHeartCountState(wbFWaAHeartCount - 5)
            setwbFWaAOriCountState(wbFWaAOriCount - 1)
            setwbFWaARupeeCost(parseFloat(wbFWaARupeeCost - 1.2))
        }
        else if (waterAxeCraftState == "grayscale(0%)") {
            setWaterAxeCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("axe")
            setwbFWaASphereCountState(wbFWaASphereCount + 25)
            setwbFWaATailCountState(wbFWaATailCount + 18)
            setwbFWaAHeartCountState(wbFWaAHeartCount + 5)
            setwbFWaAOriCountState(wbFWaAOriCount + 1)
            setwbFWaARupeeCost(parseFloat(wbFWaARupeeCost + 1.2))
        }
    }

    function waterAxeWeaponBonus() {
        if (waterAxeWeaponBonusState == "grayscale(100%)") {
            setWaterAxeWeaponBonusState("grayscale(0%)")
            setWaterWeaponChoiceState("axe")
            setwbFWaASphereCountState(wbFWaASphereCount - 150)
            setwbFWaATailCountState(wbFWaATailCount - 100)
            setwbFWaAHornCountState(wbFWaAHornCount - 30)
            setwbFWaAHeartCountState(wbFWaAHeartCount - 10)
            setwbFWaAOriCountState(wbFWaAOriCount - 30)
            setwbFWaARupeeCost(parseFloat(wbFWaARupeeCost - 10))
        }
        else if (waterAxeWeaponBonusState == "grayscale(0%)") {
            setWaterAxeWeaponBonusState("grayscale(100%)")
            setWaterWeaponChoiceState("axe")
            setwbFWaASphereCountState(wbFWaASphereCount + 150)
            setwbFWaATailCountState(wbFWaATailCount + 100)
            setwbFWaAHornCountState(wbFWaAHornCount + 30)
            setwbFWaAHeartCountState(wbFWaAHeartCount + 10)
            setwbFWaAOriCountState(wbFWaAOriCount + 30)
            setwbFWaARupeeCost(parseFloat(wbFWaARupeeCost + 10))
        }
    }

    function waterAxeRefine() {
        if (waterAxeRefineState == "grayscale(100%)") {
            setWaterAxeRefineState("grayscale(0%)")
            setWaterWeaponChoiceState("axe")
            setwbFWaASphereCountState(wbFWaASphereCount - 50)
            setwbFWaATailCountState(wbFWaATailCount - 40)
            setwbFWaAHornCountState(wbFWaAHornCount - 30)
            setwbFWaAHeartCountState(wbFWaAHeartCount - 10)
            setwbFWaAOriCountState(wbFWaAOriCount - 3)
            setwbFWaARupeeCost(parseFloat(wbFWaARupeeCost - 1.5))
        }
        else if (waterAxeRefineState == "grayscale(0%)") {
            setWaterAxeRefineState("grayscale(100%)")
            setWaterWeaponChoiceState("axe")
            setwbFWaASphereCountState(wbFWaASphereCount + 50)
            setwbFWaATailCountState(wbFWaATailCount + 40)
            setwbFWaAHornCountState(wbFWaAHornCount + 30)
            setwbFWaAHeartCountState(wbFWaAHeartCount + 10)
            setwbFWaAOriCountState(wbFWaAOriCount + 3)
            setwbFWaARupeeCost(parseFloat(wbFWaARupeeCost + 1.5))
        }
    }

    function handleWaterAxeUnbindIncrement(event) {
        setWaterWeaponChoiceState("axe");
        if (waterAxeUnbindState < event.target.value) {
            if (event.target.value - waterAxeUnbindState == 1) {
                setWaterAxeUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFWaASphereCountState(wbFWaASphereCount - 25)
                    setwbFWaATailCountState(wbFWaATailCount - 18)
                    setwbFWaAHeartCountState(wbFWaAHeartCount - 5)
                    setwbFWaAOriCountState(wbFWaAOriCount - 1)
                    setwbFWaARupeeCost(parseFloat(wbFWaARupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFWaASphereCountState(wbFWaASphereCount - 175)
                    setwbFWaATailCountState(wbFWaATailCount - 130)
                    setwbFWaAHornCountState(wbFWaAHornCount - 30)
                    setwbFWaAHeartCountState(wbFWaAHeartCount - 35)
                    setwbFWaAOriCountState(wbFWaAOriCount - 8)
                    setwbFWaARupeeCost(parseFloat(wbFWaARupeeCost - 7.5))
                }
            }
        }
        else if (waterAxeUnbindState > event.target.value) {
            if (waterAxeUnbindState - event.target.value == 1) {
                setWaterAxeUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFWaASphereCountState(wbFWaASphereCount + 25)
                    setwbFWaATailCountState(wbFWaATailCount + 18)
                    setwbFWaAHeartCountState(wbFWaAHeartCount + 5)
                    setwbFWaAOriCountState(wbFWaAOriCount + 1)
                    setwbFWaARupeeCost(parseFloat(wbFWaARupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFWaASphereCountState(wbFWaASphereCount + 175)
                    setwbFWaATailCountState(wbFWaATailCount + 130)
                    setwbFWaAHornCountState(wbFWaAHornCount + 30)
                    setwbFWaAHeartCountState(wbFWaAHeartCount + 35)
                    setwbFWaAOriCountState(wbFWaAOriCount + 8)
                    setwbFWaARupeeCost(parseFloat(wbFWaARupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterLance() {
        if (waterLanceCraftState == "grayscale(100%)") {
            setWaterLanceCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("lance")
            setwbFWaLSphereCountState(wbFWaLSphereCount - 25)
            setwbFWaLTailCountState(wbFWaLTailCount - 18)
            setwbFWaLHeartCountState(wbFWaLHeartCount - 5)
            setwbFWaLOriCountState(wbFWaLOriCount - 1)
            setwbFWaLRupeeCost(parseFloat(wbFWaLRupeeCost - 1.2))
        }
        else if (waterLanceCraftState == "grayscale(0%)") {
            setWaterLanceCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("lance")
            setwbFWaLSphereCountState(wbFWaLSphereCount + 25)
            setwbFWaLTailCountState(wbFWaLTailCount + 18)
            setwbFWaLHeartCountState(wbFWaLHeartCount + 5)
            setwbFWaLOriCountState(wbFWaLOriCount + 1)
            setwbFWaLRupeeCost(parseFloat(wbFWaLRupeeCost + 1.2))
        }
    }

    function waterLanceWeaponBonus() {
        if (waterLanceWeaponBonusState == "grayscale(100%)") {
            setWaterLanceWeaponBonusState("grayscale(0%)")
            setWaterWeaponChoiceState("lance")
            setwbFWaLSphereCountState(wbFWaLSphereCount - 150)
            setwbFWaLTailCountState(wbFWaLTailCount - 100)
            setwbFWaLHornCountState(wbFWaLHornCount - 30)
            setwbFWaLHeartCountState(wbFWaLHeartCount - 10)
            setwbFWaLOriCountState(wbFWaLOriCount - 30)
            setwbFWaLRupeeCost(parseFloat(wbFWaLRupeeCost - 10))
        }
        else if (waterLanceWeaponBonusState == "grayscale(0%)") {
            setWaterLanceWeaponBonusState("grayscale(100%)")
            setWaterWeaponChoiceState("lance")
            setwbFWaLSphereCountState(wbFWaLSphereCount + 150)
            setwbFWaLTailCountState(wbFWaLTailCount + 100)
            setwbFWaLHornCountState(wbFWaLHornCount + 30)
            setwbFWaLHeartCountState(wbFWaLHeartCount + 10)
            setwbFWaLOriCountState(wbFWaLOriCount + 30)
            setwbFWaLRupeeCost(parseFloat(wbFWaLRupeeCost + 10))
        }
    }

    function waterLanceRefine() {
        if (waterLanceRefineState == "grayscale(100%)") {
            setWaterLanceRefineState("grayscale(0%)")
            setWaterWeaponChoiceState("lance")
            setwbFWaLSphereCountState(wbFWaLSphereCount - 50)
            setwbFWaLTailCountState(wbFWaLTailCount - 40)
            setwbFWaLHornCountState(wbFWaLHornCount - 30)
            setwbFWaLHeartCountState(wbFWaLHeartCount - 10)
            setwbFWaLOriCountState(wbFWaLOriCount - 3)
            setwbFWaLRupeeCost(parseFloat(wbFWaLRupeeCost - 1.5))
        }
        else if (waterLanceRefineState == "grayscale(0%)") {
            setWaterLanceRefineState("grayscale(100%)")
            setWaterWeaponChoiceState("lance")
            setwbFWaLSphereCountState(wbFWaLSphereCount + 50)
            setwbFWaLTailCountState(wbFWaLTailCount + 40)
            setwbFWaLHornCountState(wbFWaLHornCount + 30)
            setwbFWaLHeartCountState(wbFWaLHeartCount + 10)
            setwbFWaLOriCountState(wbFWaLOriCount + 3)
            setwbFWaLRupeeCost(parseFloat(wbFWaLRupeeCost + 1.5))
        }
    }

    function handleWaterLanceUnbindIncrement(event) {
        setWaterWeaponChoiceState("lance");
        if (waterLanceUnbindState < event.target.value) {
            if (event.target.value - waterLanceUnbindState == 1) {
                setWaterLanceUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFWaLSphereCountState(wbFWaLSphereCount - 25)
                    setwbFWaLTailCountState(wbFWaLTailCount - 18)
                    setwbFWaLHeartCountState(wbFWaLHeartCount - 5)
                    setwbFWaLOriCountState(wbFWaLOriCount - 1)
                    setwbFWaLRupeeCost(parseFloat(wbFWaLRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFWaLSphereCountState(wbFWaLSphereCount - 175)
                    setwbFWaLTailCountState(wbFWaLTailCount - 130)
                    setwbFWaLHornCountState(wbFWaLHornCount - 30)
                    setwbFWaLHeartCountState(wbFWaLHeartCount - 35)
                    setwbFWaLOriCountState(wbFWaLOriCount - 8)
                    setwbFWaLRupeeCost(parseFloat(wbFWaLRupeeCost - 7.5))
                }
            }
        }
        else if (waterLanceUnbindState > event.target.value) {
            if (waterLanceUnbindState - event.target.value == 1) {
                setWaterLanceUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFWaLSphereCountState(wbFWaLSphereCount + 25)
                    setwbFWaLTailCountState(wbFWaLTailCount + 18)
                    setwbFWaLHeartCountState(wbFWaLHeartCount + 5)
                    setwbFWaLOriCountState(wbFWaLOriCount + 1)
                    setwbFWaLRupeeCost(parseFloat(wbFWaLRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFWaLSphereCountState(wbFWaLSphereCount + 175)
                    setwbFWaLTailCountState(wbFWaLTailCount + 130)
                    setwbFWaLHornCountState(wbFWaLHornCount + 30)
                    setwbFWaLHeartCountState(wbFWaLHeartCount + 35)
                    setwbFWaLOriCountState(wbFWaLOriCount + 8)
                    setwbFWaLRupeeCost(parseFloat(wbFWaLRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterBow() {
        if (waterBowCraftState == "grayscale(100%)") {
            setWaterBowCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("bow")
            setwbFWaBoSphereCountState(wbFWaBoSphereCount - 25)
            setwbFWaBoTailCountState(wbFWaBoTailCount - 18)
            setwbFWaBoHeartCountState(wbFWaBoHeartCount - 5)
            setwbFWaBoOriCountState(wbFWaBoOriCount - 1)
            setwbFWaBoRupeeCost(parseFloat(wbFWaBoRupeeCost - 1.2))
        }
        else if (waterBowCraftState == "grayscale(0%)") {
            setWaterBowCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("bow")
            setwbFWaBoSphereCountState(wbFWaBoSphereCount + 25)
            setwbFWaBoTailCountState(wbFWaBoTailCount + 18)
            setwbFWaBoHeartCountState(wbFWaBoHeartCount + 5)
            setwbFWaBoOriCountState(wbFWaBoOriCount + 1)
            setwbFWaBoRupeeCost(parseFloat(wbFWaBoRupeeCost + 1.2))
        }
    }

    function waterBowWeaponBonus() {
        if (waterBowWeaponBonusState == "grayscale(100%)") {
            setWaterBowWeaponBonusState("grayscale(0%)")
            setWaterWeaponChoiceState("bow")
            setwbFWaBoSphereCountState(wbFWaBoSphereCount - 150)
            setwbFWaBoTailCountState(wbFWaBoTailCount - 100)
            setwbFWaBoHornCountState(wbFWaBoHornCount - 30)
            setwbFWaBoHeartCountState(wbFWaBoHeartCount - 10)
            setwbFWaBoOriCountState(wbFWaBoOriCount - 30)
            setwbFWaBoRupeeCost(parseFloat(wbFWaBoRupeeCost - 10))
        }
        else if (waterBowWeaponBonusState == "grayscale(0%)") {
            setWaterBowWeaponBonusState("grayscale(100%)")
            setWaterWeaponChoiceState("bow")
            setwbFWaBoSphereCountState(wbFWaBoSphereCount + 150)
            setwbFWaBoTailCountState(wbFWaBoTailCount + 100)
            setwbFWaBoHornCountState(wbFWaBoHornCount + 30)
            setwbFWaBoHeartCountState(wbFWaBoHeartCount + 10)
            setwbFWaBoOriCountState(wbFWaBoOriCount + 30)
            setwbFWaBoRupeeCost(parseFloat(wbFWaBoRupeeCost + 10))
        }
    }

    function waterBowRefine() {
        if (waterBowRefineState == "grayscale(100%)") {
            setWaterBowRefineState("grayscale(0%)")
            setWaterWeaponChoiceState("bow")
            setwbFWaBoSphereCountState(wbFWaBoSphereCount - 50)
            setwbFWaBoTailCountState(wbFWaBoTailCount - 40)
            setwbFWaBoHornCountState(wbFWaBoHornCount - 30)
            setwbFWaBoHeartCountState(wbFWaBoHeartCount - 10)
            setwbFWaBoOriCountState(wbFWaBoOriCount - 3)
            setwbFWaBoRupeeCost(parseFloat(wbFWaBoRupeeCost - 1.5))
        }
        else if (waterBowRefineState == "grayscale(0%)") {
            setWaterBowRefineState("grayscale(100%)")
            setWaterWeaponChoiceState("bow")
            setwbFWaBoSphereCountState(wbFWaBoSphereCount + 50)
            setwbFWaBoTailCountState(wbFWaBoTailCount + 40)
            setwbFWaBoHornCountState(wbFWaBoHornCount + 30)
            setwbFWaBoHeartCountState(wbFWaBoHeartCount + 10)
            setwbFWaBoOriCountState(wbFWaBoOriCount + 3)
            setwbFWaBoRupeeCost(parseFloat(wbFWaBoRupeeCost + 1.5))
        }
    }

    function handleWaterBowUnbindIncrement(event) {
        setWaterWeaponChoiceState("bow");
        if (waterBowUnbindState < event.target.value) {
            if (event.target.value - waterBowUnbindState == 1) {
                setWaterBowUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFWaBoSphereCountState(wbFWaBoSphereCount - 25)
                    setwbFWaBoTailCountState(wbFWaBoTailCount - 18)
                    setwbFWaBoHeartCountState(wbFWaBoHeartCount - 5)
                    setwbFWaBoOriCountState(wbFWaBoOriCount - 1)
                    setwbFWaBoRupeeCost(parseFloat(wbFWaBoRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFWaBoSphereCountState(wbFWaBoSphereCount - 175)
                    setwbFWaBoTailCountState(wbFWaBoTailCount - 130)
                    setwbFWaBoHornCountState(wbFWaBoHornCount - 30)
                    setwbFWaBoHeartCountState(wbFWaBoHeartCount - 35)
                    setwbFWaBoOriCountState(wbFWaBoOriCount - 8)
                    setwbFWaBoRupeeCost(parseFloat(wbFWaBoRupeeCost - 7.5))
                }
            }
        }
        else if (waterBowUnbindState > event.target.value) {
            if (waterBowUnbindState - event.target.value == 1) {
                setWaterBowUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFWaBoSphereCountState(wbFWaBoSphereCount + 25)
                    setwbFWaBoTailCountState(wbFWaBoTailCount + 18)
                    setwbFWaBoHeartCountState(wbFWaBoHeartCount + 5)
                    setwbFWaBoOriCountState(wbFWaBoOriCount + 1)
                    setwbFWaBoRupeeCost(parseFloat(wbFWaBoRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFWaBoSphereCountState(wbFWaBoSphereCount + 175)
                    setwbFWaBoTailCountState(wbFWaBoTailCount + 130)
                    setwbFWaBoHornCountState(wbFWaBoHornCount + 30)
                    setwbFWaBoHeartCountState(wbFWaBoHeartCount + 35)
                    setwbFWaBoOriCountState(wbFWaBoOriCount + 8)
                    setwbFWaBoRupeeCost(parseFloat(wbFWaBoRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterWand() {
        if (waterWandCraftState == "grayscale(100%)") {
            setWaterWandCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("wand")
            setwbFWaWSphereCountState(wbFWaWSphereCount - 25)
            setwbFWaWTailCountState(wbFWaWTailCount - 18)
            setwbFWaWHeartCountState(wbFWaWHeartCount - 5)
            setwbFWaWOriCountState(wbFWaWOriCount - 1)
            setwbFWaWRupeeCost(parseFloat(wbFWaWRupeeCost - 1.2))
        }
        else if (waterWandCraftState == "grayscale(0%)") {
            setWaterWandCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("wand")
            setwbFWaWSphereCountState(wbFWaWSphereCount + 25)
            setwbFWaWTailCountState(wbFWaWTailCount + 18)
            setwbFWaWHeartCountState(wbFWaWHeartCount + 5)
            setwbFWaWOriCountState(wbFWaWOriCount + 1)
            setwbFWaWRupeeCost(parseFloat(wbFWaWRupeeCost + 1.2))
        }
    }

    function waterWandWeaponBonus() {
        if (waterWandWeaponBonusState == "grayscale(100%)") {
            setWaterWandWeaponBonusState("grayscale(0%)")
            setWaterWeaponChoiceState("wand")
            setwbFWaWSphereCountState(wbFWaWSphereCount - 150)
            setwbFWaWTailCountState(wbFWaWTailCount - 100)
            setwbFWaWHornCountState(wbFWaWHornCount - 30)
            setwbFWaWHeartCountState(wbFWaWHeartCount - 10)
            setwbFWaWOriCountState(wbFWaWOriCount - 30)
            setwbFWaWRupeeCost(parseFloat(wbFWaWRupeeCost - 10))
        }
        else if (waterWandWeaponBonusState == "grayscale(0%)") {
            setWaterWandWeaponBonusState("grayscale(100%)")
            setWaterWeaponChoiceState("wand")
            setwbFWaWSphereCountState(wbFWaWSphereCount + 150)
            setwbFWaWTailCountState(wbFWaWTailCount + 100)
            setwbFWaWHornCountState(wbFWaWHornCount + 30)
            setwbFWaWHeartCountState(wbFWaWHeartCount + 10)
            setwbFWaWOriCountState(wbFWaWOriCount + 30)
            setwbFWaWRupeeCost(parseFloat(wbFWaWRupeeCost + 10))
        }
    }

    function waterWandRefine() {
        if (waterWandRefineState == "grayscale(100%)") {
            setWaterWandRefineState("grayscale(0%)")
            setWaterWeaponChoiceState("wand")
            setwbFWaWSphereCountState(wbFWaWSphereCount - 50)
            setwbFWaWTailCountState(wbFWaWTailCount - 40)
            setwbFWaWHornCountState(wbFWaWHornCount - 30)
            setwbFWaWHeartCountState(wbFWaWHeartCount - 10)
            setwbFWaWOriCountState(wbFWaWOriCount - 3)
            setwbFWaWRupeeCost(parseFloat(wbFWaWRupeeCost - 1.5))
        }
        else if (waterWandRefineState == "grayscale(0%)") {
            setWaterWandRefineState("grayscale(100%)")
            setWaterWeaponChoiceState("wand")
            setwbFWaWSphereCountState(wbFWaWSphereCount + 50)
            setwbFWaWTailCountState(wbFWaWTailCount + 40)
            setwbFWaWHornCountState(wbFWaWHornCount + 30)
            setwbFWaWHeartCountState(wbFWaWHeartCount + 10)
            setwbFWaWOriCountState(wbFWaWOriCount + 3)
            setwbFWaWRupeeCost(parseFloat(wbFWaWRupeeCost + 1.5))
        }
    }

    function handleWaterWandUnbindIncrement(event) {
        setWaterWeaponChoiceState("wand");
        if (waterWandUnbindState < event.target.value) {
            if (event.target.value - waterWandUnbindState == 1) {
                setWaterWandUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFWaWSphereCountState(wbFWaWSphereCount - 25)
                    setwbFWaWTailCountState(wbFWaWTailCount - 18)
                    setwbFWaWHeartCountState(wbFWaWHeartCount - 5)
                    setwbFWaWOriCountState(wbFWaWOriCount - 1)
                    setwbFWaWRupeeCost(parseFloat(wbFWaWRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFWaWSphereCountState(wbFWaWSphereCount - 175)
                    setwbFWaWTailCountState(wbFWaWTailCount - 130)
                    setwbFWaWHornCountState(wbFWaWHornCount - 30)
                    setwbFWaWHeartCountState(wbFWaWHeartCount - 35)
                    setwbFWaWOriCountState(wbFWaWOriCount - 8)
                    setwbFWaWRupeeCost(parseFloat(wbFWaWRupeeCost - 7.5))
                }
            }
        }
        else if (waterWandUnbindState > event.target.value) {
            if (waterWandUnbindState - event.target.value == 1) {
                setWaterWandUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFWaWSphereCountState(wbFWaWSphereCount + 25)
                    setwbFWaWTailCountState(wbFWaWTailCount + 18)
                    setwbFWaWHeartCountState(wbFWaWHeartCount + 5)
                    setwbFWaWOriCountState(wbFWaWOriCount + 1)
                    setwbFWaWRupeeCost(parseFloat(wbFWaWRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFWaWSphereCountState(wbFWaWSphereCount + 175)
                    setwbFWaWTailCountState(wbFWaWTailCount + 130)
                    setwbFWaWHornCountState(wbFWaWHornCount + 30)
                    setwbFWaWHeartCountState(wbFWaWHeartCount + 35)
                    setwbFWaWOriCountState(wbFWaWOriCount + 8)
                    setwbFWaWRupeeCost(parseFloat(wbFWaWRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterStaff() {
        if (waterStaffCraftState == "grayscale(100%)") {
            setWaterStaffCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("staff")
            setwbFWaStSphereCountState(wbFWaStSphereCount - 25)
            setwbFWaStTailCountState(wbFWaStTailCount - 18)
            setwbFWaStHeartCountState(wbFWaStHeartCount - 5)
            setwbFWaStOriCountState(wbFWaStOriCount - 1)
            setwbFWaStRupeeCost(parseFloat(wbFWaStRupeeCost - 1.2))
        }
        else if (waterStaffCraftState == "grayscale(0%)") {
            setWaterStaffCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("staff")
            setwbFWaStSphereCountState(wbFWaStSphereCount + 25)
            setwbFWaStTailCountState(wbFWaStTailCount + 18)
            setwbFWaStHeartCountState(wbFWaStHeartCount + 5)
            setwbFWaStOriCountState(wbFWaStOriCount + 1)
            setwbFWaStRupeeCost(parseFloat(wbFWaStRupeeCost + 1.2))
        }
    }

    function waterStaffWeaponBonus() {
        if (waterStaffWeaponBonusState == "grayscale(100%)") {
            setWaterStaffWeaponBonusState("grayscale(0%)")
            setWaterWeaponChoiceState("staff")
            setwbFWaStSphereCountState(wbFWaStSphereCount - 150)
            setwbFWaStTailCountState(wbFWaStTailCount - 100)
            setwbFWaStHornCountState(wbFWaStHornCount - 30)
            setwbFWaStHeartCountState(wbFWaStHeartCount - 10)
            setwbFWaStOriCountState(wbFWaStOriCount - 30)
            setwbFWaStRupeeCost(parseFloat(wbFWaStRupeeCost - 10))
        }
        else if (waterStaffWeaponBonusState == "grayscale(0%)") {
            setWaterStaffWeaponBonusState("grayscale(100%)")
            setWaterWeaponChoiceState("staff")
            setwbFWaStSphereCountState(wbFWaStSphereCount + 150)
            setwbFWaStTailCountState(wbFWaStTailCount + 100)
            setwbFWaStHornCountState(wbFWaStHornCount + 30)
            setwbFWaStHeartCountState(wbFWaStHeartCount + 10)
            setwbFWaStOriCountState(wbFWaStOriCount + 30)
            setwbFWaStRupeeCost(parseFloat(wbFWaStRupeeCost + 10))
        }
    }

    function waterStaffRefine() {
        if (waterStaffRefineState == "grayscale(100%)") {
            setWaterStaffRefineState("grayscale(0%)")
            setWaterWeaponChoiceState("staff")
            setwbFWaStSphereCountState(wbFWaStSphereCount - 50)
            setwbFWaStTailCountState(wbFWaStTailCount - 40)
            setwbFWaStHornCountState(wbFWaStHornCount - 30)
            setwbFWaStHeartCountState(wbFWaStHeartCount - 10)
            setwbFWaStOriCountState(wbFWaStOriCount - 3)
            setwbFWaStRupeeCost(parseFloat(wbFWaStRupeeCost - 1.5))
        }
        else if (waterStaffRefineState == "grayscale(0%)") {
            setWaterStaffRefineState("grayscale(100%)")
            setWaterWeaponChoiceState("staff")
            setwbFWaStSphereCountState(wbFWaStSphereCount + 50)
            setwbFWaStTailCountState(wbFWaStTailCount + 40)
            setwbFWaStHornCountState(wbFWaStHornCount + 30)
            setwbFWaStHeartCountState(wbFWaStHeartCount + 10)
            setwbFWaStOriCountState(wbFWaStOriCount + 3)
            setwbFWaStRupeeCost(parseFloat(wbFWaStRupeeCost + 1.5))
        }
    }

    function handleWaterStaffUnbindIncrement(event) {
        setWaterWeaponChoiceState("staff");
        if (waterStaffUnbindState < event.target.value) {
            if (event.target.value - waterStaffUnbindState == 1) {
                setWaterStaffUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFWaStSphereCountState(wbFWaStSphereCount - 25)
                    setwbFWaStTailCountState(wbFWaStTailCount - 18)
                    setwbFWaStHeartCountState(wbFWaStHeartCount - 5)
                    setwbFWaStOriCountState(wbFWaStOriCount - 1)
                    setwbFWaStRupeeCost(parseFloat(wbFWaStRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFWaStSphereCountState(wbFWaStSphereCount - 175)
                    setwbFWaStTailCountState(wbFWaStTailCount - 130)
                    setwbFWaStHornCountState(wbFWaStHornCount - 30)
                    setwbFWaStHeartCountState(wbFWaStHeartCount - 35)
                    setwbFWaStOriCountState(wbFWaStOriCount - 8)
                    setwbFWaStRupeeCost(parseFloat(wbFWaStRupeeCost - 7.5))
                }
            }
        }
        else if (waterStaffUnbindState > event.target.value) {
            if (waterStaffUnbindState - event.target.value == 1) {
                setWaterStaffUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFWaStSphereCountState(wbFWaStSphereCount + 25)
                    setwbFWaStTailCountState(wbFWaStTailCount + 18)
                    setwbFWaStHeartCountState(wbFWaStHeartCount + 5)
                    setwbFWaStOriCountState(wbFWaStOriCount + 1)
                    setwbFWaStRupeeCost(parseFloat(wbFWaStRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFWaStSphereCountState(wbFWaStSphereCount + 175)
                    setwbFWaStTailCountState(wbFWaStTailCount + 130)
                    setwbFWaStHornCountState(wbFWaStHornCount + 30)
                    setwbFWaStHeartCountState(wbFWaStHeartCount + 35)
                    setwbFWaStOriCountState(wbFWaStOriCount + 8)
                    setwbFWaStRupeeCost(parseFloat(wbFWaStRupeeCost + 7.5))
                }
            }
        }
    }

    function craftWaterManacaster() {
        if (waterManacasterCraftState == "grayscale(100%)") {
            setWaterManacasterCraftState("grayscale(0%)")
            setWaterWeaponChoiceState("manacaster")
            setwbFWaMSphereCountState(wbFWaMSphereCount - 25)
            setwbFWaMTailCountState(wbFWaMTailCount - 18)
            setwbFWaMHeartCountState(wbFWaMHeartCount - 5)
            setwbFWaMOriCountState(wbFWaMOriCount - 1)
            setwbFWaMRupeeCost(parseFloat(wbFWaMRupeeCost - 1.2))
        }
        else if (waterManacasterCraftState == "grayscale(0%)") {
            setWaterManacasterCraftState("grayscale(100%)")
            setWaterWeaponChoiceState("manacaster")
            setwbFWaMSphereCountState(wbFWaMSphereCount + 25)
            setwbFWaMTailCountState(wbFWaMTailCount + 18)
            setwbFWaMHeartCountState(wbFWaMHeartCount + 5)
            setwbFWaMOriCountState(wbFWaMOriCount + 1)
            setwbFWaMRupeeCost(parseFloat(wbFWaMRupeeCost + 1.2))
        }
    }

    function waterManacasterWeaponBonus() {
        if (waterManacasterWeaponBonusState == "grayscale(100%)") {
            setWaterManacasterWeaponBonusState("grayscale(0%)")
            setWaterWeaponChoiceState("manacaster")
            setwbFWaMSphereCountState(wbFWaMSphereCount - 150)
            setwbFWaMTailCountState(wbFWaMTailCount - 100)
            setwbFWaMHornCountState(wbFWaMHornCount - 30)
            setwbFWaMHeartCountState(wbFWaMHeartCount - 10)
            setwbFWaMOriCountState(wbFWaMOriCount - 30)
            setwbFWaMRupeeCost(parseFloat(wbFWaMRupeeCost - 10))
        }
        else if (waterManacasterWeaponBonusState == "grayscale(0%)") {
            setWaterManacasterWeaponBonusState("grayscale(100%)")
            setWaterWeaponChoiceState("manacaster")
            setwbFWaMSphereCountState(wbFWaMSphereCount + 150)
            setwbFWaMTailCountState(wbFWaMTailCount + 100)
            setwbFWaMHornCountState(wbFWaMHornCount + 30)
            setwbFWaMHeartCountState(wbFWaMHeartCount + 10)
            setwbFWaMOriCountState(wbFWaMOriCount + 30)
            setwbFWaMRupeeCost(parseFloat(wbFWaMRupeeCost + 10))
        }
    }

    function waterManacasterRefine() {
        if (waterManacasterRefineState == "grayscale(100%)") {
            setWaterManacasterRefineState("grayscale(0%)")
            setWaterWeaponChoiceState("manacaster")
            setwbFWaMSphereCountState(wbFWaMSphereCount - 50)
            setwbFWaMTailCountState(wbFWaMTailCount - 40)
            setwbFWaMHornCountState(wbFWaMHornCount - 30)
            setwbFWaMHeartCountState(wbFWaMHeartCount - 10)
            setwbFWaMOriCountState(wbFWaMOriCount - 3)
            setwbFWaMRupeeCost(parseFloat(wbFWaMRupeeCost - 1.5))
        }
        else if (waterManacasterRefineState == "grayscale(0%)") {
            setWaterManacasterRefineState("grayscale(100%)")
            setWaterWeaponChoiceState("manacaster")
            setwbFWaMSphereCountState(wbFWaMSphereCount + 50)
            setwbFWaMTailCountState(wbFWaMTailCount + 40)
            setwbFWaMHornCountState(wbFWaMHornCount + 30)
            setwbFWaMHeartCountState(wbFWaMHeartCount + 10)
            setwbFWaMOriCountState(wbFWaMOriCount + 3)
            setwbFWaMRupeeCost(parseFloat(wbFWaMRupeeCost + 1.5))
        }
    }

    function handleWaterManacasterUnbindIncrement(event) {
        setWaterWeaponChoiceState("manacaster");
        if (waterManacasterUnbindState < event.target.value) {
            if (event.target.value - waterManacasterUnbindState == 1) {
                setWaterManacasterUnbindState(event.target.value);
                if (event.target.value >= 1 && event.target.value <= 4) {
                    setwbFWaMSphereCountState(wbFWaMSphereCount - 25)
                    setwbFWaMTailCountState(wbFWaMTailCount - 18)
                    setwbFWaMHeartCountState(wbFWaMHeartCount - 5)
                    setwbFWaMOriCountState(wbFWaMOriCount - 1)
                    setwbFWaMRupeeCost(parseFloat(wbFWaMRupeeCost - 1.2))
                }
                else if (event.target.value == 5) {
                    setwbFWaMSphereCountState(wbFWaMSphereCount - 175)
                    setwbFWaMTailCountState(wbFWaMTailCount - 130)
                    setwbFWaMHornCountState(wbFWaMHornCount - 30)
                    setwbFWaMHeartCountState(wbFWaMHeartCount - 35)
                    setwbFWaMOriCountState(wbFWaMOriCount - 8)
                    setwbFWaMRupeeCost(parseFloat(wbFWaMRupeeCost - 7.5))
                }
            }
        }
        else if (waterManacasterUnbindState > event.target.value) {
            if (waterManacasterUnbindState - event.target.value == 1) {
                setWaterManacasterUnbindState(event.target.value);
                if (event.target.value >= 0 && event.target.value <= 3) {
                    setwbFWaMSphereCountState(wbFWaMSphereCount + 25)
                    setwbFWaMTailCountState(wbFWaMTailCount + 18)
                    setwbFWaMHeartCountState(wbFWaMHeartCount + 5)
                    setwbFWaMOriCountState(wbFWaMOriCount + 1)
                    setwbFWaMRupeeCost(parseFloat(wbFWaMRupeeCost + 1.2))
                }
                else if (event.target.value == 4) {
                    setwbFWaMSphereCountState(wbFWaMSphereCount + 175)
                    setwbFWaMTailCountState(wbFWaMTailCount + 130)
                    setwbFWaMHornCountState(wbFWaMHornCount + 30)
                    setwbFWaMHeartCountState(wbFWaMHeartCount + 35)
                    setwbFWaMOriCountState(wbFWaMOriCount + 8)
                    setwbFWaMRupeeCost(parseFloat(wbFWaMRupeeCost + 7.5))
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
                            Water HDT Weapons
                        </Box>
                    </Flex>
                        <Flex>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WaterHDTSword} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: waterSwordCraftState }} onClick={craftWaterSword} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="blue">Absolute Aqua</Text>
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
                                            onChange={handleWaterSwordUnbindIncrement}
                                            defaultValue={waterSwordUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{waterSwordUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterSwordWeaponBonusState }} onClick={waterSwordWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: waterSwordRefineState }} onClick={waterSwordRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WaterHDTBlade} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: waterBladeCraftState }} onClick={craftWaterBlade} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="blue">Ruinous Torrent</Text>
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
                                            onChange={handleWaterBladeUnbindIncrement}
                                            defaultValue={waterBladeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{waterBladeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterBladeWeaponBonusState }} onClick={waterBladeWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: waterBladeRefineState }} onClick={waterBladeRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WaterHDTDagger} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: waterDaggerCraftState }} onClick={craftWaterDagger} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="blue">Tideruler's Maw</Text>
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
                                            onChange={handleWaterDaggerUnbindIncrement}
                                            defaultValue={waterDaggerUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{waterDaggerUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterDaggerWeaponBonusState }} onClick={waterDaggerWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: waterDaggerRefineState }} onClick={waterDaggerRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WaterHDTAxe} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: waterAxeCraftState }} onClick={craftWaterAxe} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="blue">Mercy's Azure Tide</Text>
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
                                            onChange={handleWaterAxeUnbindIncrement}
                                            defaultValue={waterAxeUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{waterAxeUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterAxeWeaponBonusState }} onClick={waterAxeWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: waterAxeRefineState }} onClick={waterAxeRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WaterHDTLance} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: waterLanceCraftState }} onClick={craftWaterLance} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="blue">Limpid Rush</Text>
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
                                            onChange={handleWaterLanceUnbindIncrement}
                                            defaultValue={waterLanceUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{waterLanceUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterLanceWeaponBonusState }} onClick={waterLanceWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: waterLanceRefineState }} onClick={waterLanceRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WaterHDTBow} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: waterBowCraftState }} onClick={craftWaterBow} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="blue">Azure Mercurius</Text>
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
                                            onChange={handleWaterBowUnbindIncrement}
                                            defaultValue={waterBowUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{waterBowUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterBowWeaponBonusState }} onClick={waterBowWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: waterBowRefineState }} onClick={waterBowRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex>
                        <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WaterHDTWand} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: waterWandCraftState }} onClick={craftWaterWand} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="blue">Aquatic Spiral</Text>
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
                                            onChange={handleWaterWandUnbindIncrement}
                                            defaultValue={waterWandUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{waterWandUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterWandWeaponBonusState }} onClick={waterWandWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: waterWandRefineState }} onClick={waterWandRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WaterHDTStaff} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: waterStaffCraftState }} onClick={craftWaterStaff} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="blue">Ocean's Embrace</Text>
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
                                            onChange={handleWaterStaffUnbindIncrement}
                                            defaultValue={waterStaffUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{waterStaffUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterStaffWeaponBonusState }} onClick={waterStaffWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: waterStaffRefineState }} onClick={waterStaffRefine} />
                                </Flex>
                            </Card>
                            <Card width={[150, 200]}>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WaterHDTManacaster} sx={{ width: ["100px"] }} filter="grayscale(100%)" style={{ filter: waterManacasterCraftState }} onClick={craftWaterManacaster} />
                                </Flex>
                                <Flex>
                                    <Text fontSize={[1, 3]} px={[1, 4]} color="blue">Aqua Trigger</Text>
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
                                            onChange={handleWaterManacasterUnbindIncrement}
                                            defaultValue={waterManacasterUnbindState}
                                            step="1"
                                            max="5"
                                            bg="primary"
                                        />
                                    </Flex>
                                    <Flex>
                                        <Box width={1 / 2}>

                                        </Box>
                                        <Text>{waterManacasterUnbindState}</Text>
                                    </Flex>
                                </Box>
                                <Flex>
                                    <Box width={1 / 8}></Box>
                                    <Image src={WeaponBonus} style={{ filter: waterManacasterWeaponBonusState }} onClick={waterManacasterWeaponBonus} />
                                    <Box width={1 / 8}></Box>
                                    <Image src={Refine} style={{ filter: waterManacasterRefineState }} onClick={waterManacasterRefine} />
                                </Flex>
                            </Card>
                        </Flex>
                </Box>
                {waterHDTWeaponSelection()}
            </Flex>
            <WeaponTypeNavTabs />
        </div>
    )
}
