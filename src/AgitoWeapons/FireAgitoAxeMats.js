import React from 'react'
import FireAgitoSilverMask from "../Images/Fire_Agito_Silver_Mask.png";
import FireAgitoGoldMask from "../Images/Fire_Agito_Gold_Mask.png";
import FireAgitoInsanity from "../Images/Fire_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import FireAgitoAxe from "../Images/Fire_Agito_Axe.png"

export default function FireAgitoAxeMats(props) {
    return (
        <div>
            <Box width={1/2}>
                <Box my={350}></Box>
                    <Flex>
                        <Box width ={1/3}></Box>
                        <img src={FireAgitoAxe} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubFAASilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubFAAGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubFAAInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubFAAGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubFAASandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubFAAOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubFAARupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbFAASilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbFAAGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbFAAInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbFAASandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbFAAOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbFAARupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}
