import React from 'react'
import LightAgitoSilverMask from "../Images/Light_Agito_Silver_Mask.png";
import LightAgitoGoldMask from "../Images/Light_Agito_Gold_Mask.png";
import LightAgitoInsanity from "../Images/Light_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import LightAgitoAxe from "../Images/Light_Agito_Axe.png";

export default function LightAgitoAxeMats(props) {
    return (
        <div>
            <Box width={1/2}>
                <Box my={350}></Box>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={LightAgitoAxe} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLAASilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLAAGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLAAInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLAAGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLAASandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLAAOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLAARupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLAASilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLAAGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLAAInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLAASandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLAAOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLAARupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}