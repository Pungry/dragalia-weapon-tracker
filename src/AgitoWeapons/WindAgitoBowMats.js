import React from 'react'
import WindAgitoSilverMask from "../Images/Wind_Agito_Silver_Mask.png";
import WindAgitoGoldMask from "../Images/Wind_Agito_Gold_Mask.png";
import WindAgitoInsanity from "../Images/Wind_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import WindAgitoBow from "../Images/Wind_Agito_Bow.png";

export default function WindAgitoBowMats(props) {
    return (
        <div>
            <Box width={1/2}>
                <Box my={350}></Box>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={WindAgitoBow} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiABoSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiABoGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiABoInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiABoGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiABoSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiABoOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWiABoRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiABoSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiABoGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WindAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiABoInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiABoSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiABoOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWiABoRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}
