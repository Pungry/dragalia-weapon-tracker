import React, { useState } from 'react'
import AgitoNavTabs from "./AgitoNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"
import { Box, Text, Flex, Card, Heading, Image } from "rebass";
import { Input, Label, Checkbox, Slider } from "@rebass/forms";

import FireAgitoSword from "../Images/Fire_Agito_Sword.png";
import FireAgitoBlade from "../Images/Fire_Agito_Blade.png";

import FireAgitoSilverMask from "../Images/Fire_Agito_Silver_Mask.png";
import FireAgitoGoldMask from "../Images/Fire_Agito_Gold_Mask.png";
import FireAgitoInsanity from "../Images/Fire_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import Refine from "../Images/Refine.PNG";
import Unbind from "../Images/Unbind.PNG";
import WyrmprintSlots from "../Images/Wyrmprint_Slots.PNG";
import WeaponBonus from "../Images/Weapon_Bonus.PNG";

import FireAgitoSwordCost from "./FireAgitoSwordMats"

// Refactor. Separate all 9 weapons for each element into their own component so I can individually track mub and weapon bonus stuff there. Keep track of weapon state here. 9 separate component calls that'll have 8 not firing if the weapon state isn't firing.

// Mostly fire sword has been built.

export default function FireAgitoWeapons() {
    const [fireSwordCraftState, setFireSwordCraftState] = useState("grayscale(100%)")
    const [fireSwordWeaponBonusState, setFireSwordWeaponBonusState] = useState("grayscale(100%)")
    const [fireSwordWyrmprintSlotState, setFireSwordWyrmprintSlotState] = useState("grayscale(100%)")
    const [fireSwordUnbindState, setFireSwordUnbindState] = useState(0);
    const [fireSwordRefineState, setFireSwordRefineState] = useState(0);
    const [fireBladeCraftState, setFireBladeCraftState] = useState("grayscale(100%)")

    const [fireWeaponChoice, setFireWeaponChoiceState] = useState("sword")

    const [mubFASSilverMaskCount, setmubFASSilverMaskCountState] = useState(516);
    const [mubFASGoldMaskCount, setmubFASGoldMaskCountState] = useState(410);
    const [mubFASInsanityCount, setmubFASInsanityCountState] = useState(89);
    const [mubFASGaleCount, setmubFASGaleCountState] = useState(30);
    const [mubFASSandCount, setmubFASSandCountState] = useState(5);
    const [mubFASOriCount, setmubFASOriCountState] = useState(66);
    const [mubFASRupeeCost, setmubFASRupeeCost] = useState(59.5);

    const [wbFASSilverMaskCount, setwbFASSilverMaskCountState] = useState(332);
    const [wbFASGoldMaskCount, setwbFASGoldMaskCountState] = useState(270);
    const [wbFASInsanityCount, setwbFASInsanityCountState] = useState(28);
    const [wbFASSandCount, setwbFASSandCountState] = useState(5);
    const [wbFASOriCount, setwbFASOriCountState] = useState(32);
    const [wbFASRupeeCost, setwbFASRupeeCost] = useState(30);

    function fireWeaponSelection() {
        if (fireWeaponChoice == "sword") {
            return <FireAgitoSwordCost mubFASSilverMaskCount={mubFASSilverMaskCount} mubFASGoldMaskCount={mubFASGoldMaskCount} mubFASInsanityCount={mubFASInsanityCount} mubFASGaleCount={mubFASGaleCount} mubFASSandCount={mubFASSandCount} mubFASOriCount={mubFASOriCount} mubFASRupeeCost={mubFASRupeeCost} wbFASSilverMaskCount={wbFASSilverMaskCount} wbFASGoldMaskCount={wbFASGoldMaskCount} wbFASInsanityCount={wbFASInsanityCount} wbFASSandCount={wbFASSandCount} wbFASOriCount={wbFASOriCount} wbFASRupeeCost={wbFASRupeeCost} />
        }
        if (fireWeaponChoice == "blade") {
            return "Blade chosen idiot"
        }
    }
    
    function craftFireSword() {
        if (fireSwordCraftState == "grayscale(100%)") {
            setFireSwordCraftState("grayscale(0%)")
            setFireWeaponChoiceState("sword")
            setmubFASSilverMaskCountState(mubFASSilverMaskCount - 40)
            setwbFASSilverMaskCountState(wbFASSilverMaskCount - 40)
            setmubFASGoldMaskCountState(mubFASGoldMaskCount - 30)
            setwbFASGoldMaskCountState(wbFASGoldMaskCount - 30)
            setmubFASSandCountState(mubFASSandCount - 1)
            setwbFASSandCountState(wbFASSandCount - 1)
            setmubFASRupeeCost(mubFASRupeeCost - 2)
            setwbFASRupeeCost(wbFASRupeeCost - 2)
        }
        else if (fireSwordCraftState == "grayscale(0%)") {
            setFireSwordCraftState("grayscale(100%)")
            setFireWeaponChoiceState("sword")
            setmubFASSilverMaskCountState(mubFASSilverMaskCount + 40)
            setwbFASSilverMaskCountState(wbFASSilverMaskCount + 40)
            setmubFASGoldMaskCountState(mubFASGoldMaskCount + 30)
            setwbFASGoldMaskCountState(wbFASGoldMaskCount + 30)
            setmubFASSandCountState(mubFASSandCount + 1)
            setwbFASSandCountState(wbFASSandCount + 1)
            setmubFASRupeeCost(mubFASRupeeCost + 2)
            setwbFASRupeeCost(wbFASRupeeCost + 2)
        }
    }

    function fireSwordWeaponBonus() {
        if (fireSwordWeaponBonusState == "grayscale(100%)") {
            setFireSwordWeaponBonusState("grayscale(0%)");
            setFireWeaponChoiceState("sword");
            setmubFASSilverMaskCountState(mubFASSilverMaskCount - 100)
            setwbFASSilverMaskCountState(wbFASSilverMaskCount - 100)
            setmubFASGoldMaskCountState(mubFASGoldMaskCount - 100)
            setwbFASGoldMaskCountState(wbFASGoldMaskCount - 100)
            setmubFASInsanityCountState(mubFASInsanityCount - 14)
            setwbFASInsanityCountState(wbFASInsanityCount - 14)
            setmubFASOriCountState(mubFASOriCount - 30)
            setwbFASOriCountState(wbFASOriCount - 30)
            setmubFASRupeeCost(mubFASRupeeCost - 10)
            setwbFASRupeeCost(wbFASRupeeCost - 10)
        }
        else if (fireSwordWeaponBonusState == "grayscale(0%)") {
            setFireSwordWeaponBonusState("grayscale(100%)");
            setFireWeaponChoiceState("sword");
            setmubFASSilverMaskCountState(mubFASSilverMaskCount + 100)
            setwbFASSilverMaskCountState(wbFASSilverMaskCount + 100)
            setmubFASGoldMaskCountState(mubFASGoldMaskCount + 100)
            setwbFASGoldMaskCountState(wbFASGoldMaskCount + 100)
            setmubFASInsanityCountState(mubFASInsanityCount + 14)
            setwbFASInsanityCountState(wbFASInsanityCount + 14)
            setmubFASOriCountState(mubFASOriCount + 30)
            setwbFASOriCountState(wbFASOriCount + 30)
            setmubFASRupeeCost(mubFASRupeeCost + 10)
            setwbFASRupeeCost(wbFASRupeeCost + 10)
        }
    }

    function fireSwordWyrmprintSlot() {
        if (fireSwordWyrmprintSlotState == "grayscale(100%)") {
            setFireSwordWyrmprintSlotState("grayscale(0%)");
            setFireWeaponChoiceState("sword");
            setmubFASSilverMaskCountState(mubFASSilverMaskCount - 16)
            setmubFASGoldMaskCountState(mubFASGoldMaskCount - 10)
            setmubFASOriCountState(mubFASOriCount - 1)
            setmubFASRupeeCost(mubFASRupeeCost - 2.5)
        }
        else if (fireSwordWyrmprintSlotState == "grayscale(0%)") {
            setFireSwordWyrmprintSlotState("grayscale(100%)");
            setFireWeaponChoiceState("sword");
            setmubFASSilverMaskCountState(mubFASSilverMaskCount + 16)
            setmubFASGoldMaskCountState(mubFASGoldMaskCount + 10)
            setmubFASOriCountState(mubFASOriCount + 1)
            setmubFASRupeeCost(mubFASRupeeCost + 2.5)
        }
    }

    function handleFireSwordUnbindIncrement(event) {
        setFireWeaponChoiceState("sword");
        if (fireSwordUnbindState < event.target.value)
        {
            setFireSwordUnbindState(event.target.value);
            if (event.target.value >= 0 && event.target.value <=4)
            {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount - 40)
                setwbFASSilverMaskCountState(wbFASSilverMaskCount - 40)
                setmubFASGoldMaskCountState(mubFASGoldMaskCount - 30)
                setwbFASGoldMaskCountState(wbFASGoldMaskCount - 30)
                setmubFASSandCountState(mubFASSandCount - 1)
                setwbFASSandCountState(wbFASSandCount - 1)
                setmubFASRupeeCost(mubFASRupeeCost - 2)
                setwbFASRupeeCost(wbFASRupeeCost - 2)
            }
            else if (event.target.value == 5)
            {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount - 16)
                setwbFASSilverMaskCountState(wbFASSilverMaskCount - 16)
                setmubFASGoldMaskCountState(mubFASGoldMaskCount - 10)
                setwbFASGoldMaskCountState(wbFASGoldMaskCount - 10)
                setmubFASInsanityCountState(mubFASInsanityCount - 7)
                setwbFASInsanityCountState(wbFASInsanityCount - 7)
                setmubFASOriCountState(mubFASOriCount - 1)
                setwbFASOriCountState(wbFASOriCount - 1)
                setmubFASRupeeCost(mubFASRupeeCost - 7.5)
                setwbFASRupeeCost(wbFASRupeeCost - 7.5)
            }
            else if (event.target.value >=5 && event.target.value <=8)
            {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount - 16)
                setmubFASGoldMaskCountState(mubFASGoldMaskCount - 10)
                setmubFASInsanityCountState(mubFASInsanityCount - 7)
                setmubFASOriCountState(mubFASOriCount - 1)
                setmubFASRupeeCost(mubFASRupeeCost - 7.5)
            }
            else if (event.target.value > 8)
            {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount - 80)
                setmubFASGoldMaskCountState(mubFASGoldMaskCount - 70)
                setmubFASInsanityCountState(mubFASInsanityCount - 30)
                setmubFASGaleCountState(mubFASGaleCount - 20)
                setmubFASOriCountState(mubFASOriCount - 20)
                setmubFASRupeeCost(mubFASRupeeCost - 2)
            }
        }
        else if (fireSwordUnbindState > event.target.value)
        {
            setFireSwordUnbindState(event.target.value);
            if (event.target.value >= 0 && event.target.value <=3)
            {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount + 40)
                setwbFASSilverMaskCountState(wbFASSilverMaskCount + 40)
                setmubFASGoldMaskCountState(mubFASGoldMaskCount + 30)
                setwbFASGoldMaskCountState(wbFASGoldMaskCount + 30)
                setmubFASSandCountState(mubFASSandCount + 1)
                setwbFASSandCountState(wbFASSandCount + 1)
                setmubFASRupeeCost(mubFASRupeeCost + 2)
                setwbFASRupeeCost(wbFASRupeeCost + 2)
            }
            else if (event.target.value == 4)
            {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount + 16)
                setwbFASSilverMaskCountState(wbFASSilverMaskCount + 16)
                setmubFASGoldMaskCountState(mubFASGoldMaskCount + 10)
                setwbFASGoldMaskCountState(wbFASGoldMaskCount + 10)
                setmubFASInsanityCountState(mubFASInsanityCount + 7)
                setwbFASInsanityCountState(wbFASInsanityCount + 7)
                setmubFASOriCountState(mubFASOriCount + 1)
                setwbFASOriCountState(wbFASOriCount + 1)
                setmubFASRupeeCost(mubFASRupeeCost + 7.5)
                setwbFASRupeeCost(wbFASRupeeCost + 7.5)
            }
            else if (event.target.value >=5 && event.target.value <=7)
            {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount + 16)
                setmubFASGoldMaskCountState(mubFASGoldMaskCount + 10)
                setmubFASInsanityCountState(mubFASInsanityCount + 7)
                setmubFASOriCountState(mubFASOriCount + 1)
                setmubFASRupeeCost(mubFASRupeeCost + 7.5)
            }
            else if (event.target.value == 8)
            {
                setmubFASSilverMaskCountState(mubFASSilverMaskCount + 80)
                setmubFASGoldMaskCountState(mubFASGoldMaskCount + 70)
                setmubFASInsanityCountState(mubFASInsanityCount + 30)
                setmubFASGaleCountState(mubFASGaleCount + 20)
                setmubFASOriCountState(mubFASOriCount + 20)
                setmubFASRupeeCost(mubFASRupeeCost + 2)
            }
        }
    }

    function handleFireSwordRefineIncrement(event) {
        setFireWeaponChoiceState("sword");
        if (fireSwordRefineState < event.target.value)
            {
                setFireSwordRefineState(event.target.value);
                if (event.target.value == 1)
                {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount - 16);
                    setwbFASSilverMaskCountState(wbFASSilverMaskCount - 16);
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount - 10);
                    setwbFASGoldMaskCountState(wbFASGoldMaskCount - 10);
                    setmubFASInsanityCountState(mubFASInsanityCount - 7);
                    setwbFASInsanityCountState(wbFASInsanityCount - 7);
                    setmubFASOriCountState(mubFASOriCount - 1);
                    setwbFASOriCountState(wbFASOriCount - 1);
                    setmubFASRupeeCost(mubFASRupeeCost - 2.5);
                    setwbFASRupeeCost(wbFASRupeeCost - 2.5);
                }
                if (event.target.value == 2)
                {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount - 40)
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount - 30);
                    setmubFASInsanityCountState(mubFASInsanityCount - 10);
                    setmubFASGaleCountState(mubFASGaleCount - 10);
                    setmubFASOriCountState(mubFASOriCount - 10);
                    setmubFASRupeeCost(mubFASRupeeCost - 2.5);
                }
            }
        else if (fireSwordRefineState > event.target.value)
            {
                setFireSwordRefineState(event.target.value)
                if (event.target.value == 0)
                {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount + 16);
                    setwbFASSilverMaskCountState(wbFASSilverMaskCount + 16);
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount + 10);
                    setwbFASGoldMaskCountState(wbFASGoldMaskCount + 10);
                    setmubFASInsanityCountState(mubFASInsanityCount + 7);
                    setwbFASInsanityCountState(wbFASInsanityCount + 7);
                    setmubFASOriCountState(mubFASOriCount + 1);
                    setwbFASOriCountState(wbFASOriCount + 1);
                    setmubFASRupeeCost(mubFASRupeeCost + 2.5);
                    setwbFASRupeeCost(wbFASRupeeCost + 2.5);
                }
                if (event.target.value == 1)
                {
                    setmubFASSilverMaskCountState(mubFASSilverMaskCount + 40)
                    setmubFASGoldMaskCountState(mubFASGoldMaskCount + 30);
                    setmubFASInsanityCountState(mubFASInsanityCount + 10);
                    setmubFASGaleCountState(mubFASGaleCount + 10);
                    setmubFASOriCountState(mubFASOriCount + 10);
                    setmubFASRupeeCost(mubFASRupeeCost + 2.5);
                }
            }
    }

    function craftFireBlade() {
        if (fireBladeCraftState == "grayscale(100%)") {
            setFireBladeCraftState("grayscale(0%)")
            setFireWeaponChoiceState("blade")
        }
        else if (fireBladeCraftState == "grayscale(0%)") {
            setFireBladeCraftState("grayscale(100%)")
            setFireWeaponChoiceState("blade")
        }
    }

    return (
        <div>
            <AgitoNavTabs />
            <Flex>
                {/* The box for all the weapons */}
                <Box width={1 / 2}>
                    <Flex>
                        <Box width={2 / 5}>

                        </Box>
                        <Box width={3 / 5}>
                            Fire Agito Weapons
                        </Box>
                    </Flex>
                    <Flex>
                        <Card width={[150, 200]}>
                            <Image src={FireAgitoSword} sx={{width: ["128px"]}} style={{ filter: fireSwordCraftState }} onClick={craftFireSword} />
                            <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Nothung</Text>
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
                                        defaultValue={0}
                                        step="1"
                                        max="9"
                                        bg="primary"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={1 / 2}>

                                    </Box>
                                    <Text>{fireSwordUnbindState}</Text>
                                </Flex>
                            </Box>
                            <Box width={[125, 150]}>
                                <Flex>
                                    <Box width={1/3}></Box>
                                    <Image src={Refine} />
                                </Flex>
                                <Flex>
                                    <Box width={1 / 10}></Box>
                                    <Slider
                                        onChange={handleFireSwordRefineIncrement}
                                        defaultValue={0}
                                        step="1"
                                        max="2"
                                        bg="primary"
                                    />
                                </Flex>
                                <Flex>
                                    <Box width={1 / 2}>

                                    </Box>
                                    <Text>{fireSwordRefineState}</Text>
                                </Flex>
                            </Box>
                            <Flex>
                                <Box width={1/8}></Box>
                                <Image src={WeaponBonus} style={{ filter: fireSwordWeaponBonusState }} onClick={fireSwordWeaponBonus} />
                                <Box width={1/8}></Box>
                                <Image src={WyrmprintSlots} style={{ filter: fireSwordWyrmprintSlotState }} onClick={fireSwordWyrmprintSlot} />
                            </Flex>
                        </Card>
                        <Card width={[150, 256]}>
                            <Image src={FireAgitoBlade} height="100" width="100" filter="grayscale(100%)" style={{ filter: fireBladeCraftState }} onClick={craftFireBlade} />
                            <Text fontSize={[1, 3]} px={[1, 4]} color="crimson">Tyrfing</Text>
                        </Card>
                        <Card width={[150, 256]}>
                            <Image src={FireAgitoSword} height="100" width="100" filter="grayscale(100%)" style={{ filter: fireSwordCraftState }} onClick={craftFireSword} />
                            <Text px={4} color="crimson">Nothung</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={256}>
                            <Image src={FireAgitoSword} height="100" width="100" filter="grayscale(100%)" style={{ filter: fireSwordCraftState }} onClick={craftFireSword} />
                            <Text px={4} color="crimson">Nothung</Text>
                        </Card>
                        <Card width={256}>
                            <Image src={FireAgitoSword} height="100" width="100" filter="grayscale(100%)" style={{ filter: fireSwordCraftState }} onClick={craftFireSword} />
                            <Text px={4} color="crimson">Nothung</Text>
                        </Card>
                        <Card width={256}>
                            <Image src={FireAgitoSword} height="100" width="100" filter="grayscale(100%)" style={{ filter: fireSwordCraftState }} onClick={craftFireSword} />
                            <Text px={4} color="crimson">Nothung</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={256}>
                            <Image src={FireAgitoSword} height="100" width="100" filter="grayscale(100%)" style={{ filter: fireSwordCraftState }} onClick={craftFireSword} />
                            <Text px={4} color="crimson">Nothung</Text>
                        </Card>
                        <Card width={256}>
                            <Image src={FireAgitoSword} height="100" width="100" filter="grayscale(100%)" style={{ filter: fireSwordCraftState }} onClick={craftFireSword} />
                            <Text px={4} color="crimson">Nothung</Text>
                        </Card>
                        <Card width={256}>
                            <Image src={FireAgitoSword} sx={{width: ["35%"]}}style={{ filter: fireSwordCraftState }} onClick={craftFireSword} />
                            <Text px={4} color="crimson">Nothung</Text>
                        </Card>
                    </Flex>
                </Box>
                {/* The box for the materials needed to 100% a weapon */}
                {fireWeaponSelection()}
            </Flex>
            <WeaponTypeNavTabs />
        </div>
    )
}
