import React from 'react'
import WindAgitoSilverMask from "../Images/Wind_Agito_Silver_Mask.png";
import WindAgitoGoldMask from "../Images/Wind_Agito_Gold_Mask.png";
import WindAgitoInsanity from "../Images/Wind_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import WindAgitoWand from "../Images/Wind_Agito_Wand.png";

export default function WindAgitoWandMats(props) {
    return (
        <div>
            <Box width={1/2}>
                <Box my={700}></Box>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={WindAgitoWand} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiAWSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiAWGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiAWInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiAWGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiAWSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiAWOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiAWRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiAWSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiAWGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiAWInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiAWSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiAWOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiAWRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}
