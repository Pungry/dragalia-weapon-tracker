import React from 'react'
import LightAgitoSilverMask from "../Images/Light_Agito_Silver_Mask.png";
import LightAgitoGoldMask from "../Images/Light_Agito_Gold_Mask.png";
import LightAgitoInsanity from "../Images/Light_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import LightAgitoDagger from "../Images/Light_Agito_Dagger.png";

export default function LightAgitoDaggerMats(props) {
    return (
        <div>
            <Box width={1/2}>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={LightAgitoDagger} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLADSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLADGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLADInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLADGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLADSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLADOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubLADRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLADSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLADGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={LightAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLADInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLADSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLADOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbLADRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}
