import React from 'react'
import WaterAgitoSilverMask from "../Images/Water_Agito_Silver_Mask.png";
import WaterAgitoGoldMask from "../Images/Water_Agito_Gold_Mask.png";
import WaterAgitoInsanity from "../Images/Water_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import WaterAgitoLance from "../Images/Water_Agito_Lance.png";

export default function WaterAgitoLanceMats(props) {
    return (
        <div>
            <Box width={1/2}>
                <Box my={350}></Box>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={WaterAgitoLance} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaALSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaALGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaALInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaALGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaALSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaALOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaALRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaALSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaALGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaALInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaALSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaALOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaALRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}