import React from 'react'
import ShadowAgitoSilverMask from "../Images/Shadow_Agito_Silver_Mask.png";
import ShadowAgitoGoldMask from "../Images/Shadow_Agito_Gold_Mask.png";
import ShadowAgitoInsanity from "../Images/Shadow_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import ShadowAgitoDagger from "../Images/Shadow_Agito_Dagger.png";

export default function ShadowAgitoDaggerMats(props) {
    return (
        <div>
            <Box width={1/2}>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={ShadowAgitoDagger} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSADSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSADGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSADInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSADGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSADSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSADOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSADRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSADSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSADGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSADInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSADSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSADOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSADRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}