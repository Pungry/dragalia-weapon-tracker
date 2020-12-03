import React from 'react'
import ShadowAgitoSilverMask from "../Images/Shadow_Agito_Silver_Mask.png";
import ShadowAgitoGoldMask from "../Images/Shadow_Agito_Gold_Mask.png";
import ShadowAgitoInsanity from "../Images/Shadow_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import ShadowAgitoBow from "../Images/Shadow_Agito_Bow.png";

export default function ShadowAgitoBowMats(props) {
    return (
        <div>
            <Box width={1/2}>
                <Box my={350}></Box>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={ShadowAgitoBow} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSABoSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSABoGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSABoInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSABoGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSABoSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSABoOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSABoRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSABoSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSABoGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSABoInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSABoSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSABoOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSABoRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}