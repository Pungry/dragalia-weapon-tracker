import React from 'react'
import WaterAgitoSilverMask from "../Images/Water_Agito_Silver_Mask.png";
import WaterAgitoGoldMask from "../Images/Water_Agito_Gold_Mask.png";
import WaterAgitoInsanity from "../Images/Water_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import WaterAgitoStaff from "../Images/Water_Agito_Staff.png";

export default function WaterAgitoStaffMats(props) {
    return (
        <div>
            <Box width={1/2}>
                <Box my={700}></Box>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={WaterAgitoStaff} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaAStSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaAStGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaAStInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaAStGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaAStSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaAStOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubWaAStRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaAStSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaAStGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={WaterAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaAStInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaAStSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaAStOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbWaAStRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}