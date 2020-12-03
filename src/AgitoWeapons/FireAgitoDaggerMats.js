import React from 'react'
import FireAgitoSilverMask from "../Images/Fire_Agito_Silver_Mask.png";
import FireAgitoGoldMask from "../Images/Fire_Agito_Gold_Mask.png";
import FireAgitoInsanity from "../Images/Fire_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import FireAgitoDagger from "../Images/Fire_Agito_Dagger.png"

export default function FireAgitoDaggerMats(props) {
    return (
        <div>
            <Box width={1/2}>
                    <Flex>
                        <Box width ={1/3}></Box>
                        <img src={FireAgitoDagger} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubFADSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubFADGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubFADInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubFADGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubFADSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubFADOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubFADRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbFADSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbFADGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbFADInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbFADSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbFADOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbFADRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}
