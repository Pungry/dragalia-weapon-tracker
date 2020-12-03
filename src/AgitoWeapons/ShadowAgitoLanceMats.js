import React from 'react'
import ShadowAgitoSilverMask from "../Images/Shadow_Agito_Silver_Mask.png";
import ShadowAgitoGoldMask from "../Images/Shadow_Agito_Gold_Mask.png";
import ShadowAgitoInsanity from "../Images/Shadow_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import ShadowAgitoLance from "../Images/Shadow_Agito_Lance.png";

export default function ShadowAgitoLanceMats(props) {
    return (
        <div>
            <Box width={1/2}>
                <Box my={350}></Box>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={ShadowAgitoLance} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSALSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSALGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSALInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSALGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSALSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSALOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSALRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSALSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSALGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSALInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSALSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSALOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSALRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}