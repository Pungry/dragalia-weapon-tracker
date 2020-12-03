import React from 'react'
import WaterAgitoSilverMask from "../Images/Water_Agito_Silver_Mask.png";
import WaterAgitoGoldMask from "../Images/Water_Agito_Gold_Mask.png";
import WaterAgitoInsanity from "../Images/Water_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import WaterAgitoWand from "../Images/Water_Agito_Wand.png";

export default function WaterAgitoWandMats(props) {
    return (
        <div>
            <Box width={1/2}>
                <Box my={700}></Box>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={WaterAgitoWand} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaAWSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaAWGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaAWInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaAWGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaAWSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaAWOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaAWRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaAWSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaAWGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaAWInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaAWSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaAWOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaAWRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}