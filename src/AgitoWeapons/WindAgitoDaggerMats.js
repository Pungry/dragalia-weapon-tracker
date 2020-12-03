import React from 'react'
import WindAgitoSilverMask from "../Images/Wind_Agito_Silver_Mask.png";
import WindAgitoGoldMask from "../Images/Wind_Agito_Gold_Mask.png";
import WindAgitoInsanity from "../Images/Wind_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import WindAgitoDagger from "../Images/Wind_Agito_Dagger.png";

export default function WindAgitoDaggerMats(props) {
    return (
        <div>
            <Box width={1/2}>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={WindAgitoDagger} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiADSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiADGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiADInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiADGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiADSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiADOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiADRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiADSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiADGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiADInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiADSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiADOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiADRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}
