import React from 'react'
import WaterAgitoSilverMask from "../Images/Water_Agito_Silver_Mask.png";
import WaterAgitoGoldMask from "../Images/Water_Agito_Gold_Mask.png";
import WaterAgitoInsanity from "../Images/Water_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import WaterAgitoDagger from "../Images/Water_Agito_Dagger.png";

export default function WaterAgitoDaggerMats(props) {
    return (
        <div>
            <Box width={1/2}>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={WaterAgitoDagger} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaADSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaADGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaADInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaADGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaADSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaADOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaADRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaADSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaADGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaADInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaADSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaADOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaADRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}
