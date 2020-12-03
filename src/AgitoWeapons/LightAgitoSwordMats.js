import React from 'react'
import LightAgitoSilverMask from "../Images/Light_Agito_Silver_Mask.png";
import LightAgitoGoldMask from "../Images/Light_Agito_Gold_Mask.png";
import LightAgitoInsanity from "../Images/Light_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import LightAgitoSword from "../Images/Light_Agito_Sword.png";

export default function LightAgitoSwordMats(props) {
    return (
        <div>
            <Box width={1/2}>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={LightAgitoSword} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLASSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLASGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLASInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLASGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLASSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLASOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLASRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLASSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLASGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLASInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLASSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLASOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLASRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}
