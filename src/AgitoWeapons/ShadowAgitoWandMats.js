import React from 'react'
import ShadowAgitoSilverMask from "../Images/Shadow_Agito_Silver_Mask.png";
import ShadowAgitoGoldMask from "../Images/Shadow_Agito_Gold_Mask.png";
import ShadowAgitoInsanity from "../Images/Shadow_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import ShadowAgitoWand from "../Images/Shadow_Agito_Wand.png";

export default function ShadowAgitoWandMats(props) {
    return (
        <div>
            <Box width={1/2}>
                <Box my={700}></Box>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={ShadowAgitoWand} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSAWSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSAWGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSAWInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSAWGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSAWSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSAWOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSAWRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSAWSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSAWGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSAWInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSAWSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSAWOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSAWRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}