import React from 'react'
import LightAgitoSilverMask from "../Images/Light_Agito_Silver_Mask.png";
import LightAgitoGoldMask from "../Images/Light_Agito_Gold_Mask.png";
import LightAgitoInsanity from "../Images/Light_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import LightAgitoWand from "../Images/Light_Agito_Wand.png";

export default function LightAgitoWandMats(props) {
    return (
        <div>
            <Box width={1/2}>
                <Box my={700}></Box>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={LightAgitoWand} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLAWSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLAWGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLAWInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLAWGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLAWSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLAWOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLAWRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLAWSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLAWGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLAWInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLAWSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLAWOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLAWRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}