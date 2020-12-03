import React from 'react'
import ShadowAgitoSilverMask from "../Images/Shadow_Agito_Silver_Mask.png";
import ShadowAgitoGoldMask from "../Images/Shadow_Agito_Gold_Mask.png";
import ShadowAgitoInsanity from "../Images/Shadow_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import ShadowAgitoBlade from "../Images/Shadow_Agito_Blade.png";

export default function ShadowAgitoBladeMats(props) {
    return (
        <div>
            <Box width={1/2}>
                    <Flex>
                    <Box width ={1/3}></Box>
                        <img src={ShadowAgitoBlade} height="75" width="75"/>
                    </Flex>
                    <Flex>
                        <Text>9 unbinds, Weapon Bonus unlocked, and all 5 wyrmprint slots unlocked </Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSABlSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSABlGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSABlInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={FireAgitoGale} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSABlGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSABlSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSABlOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.mubSABlRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        How much to unlock just weapon bonus
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoSilverMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSABlSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoGoldMask} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSABlGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <img src={ShadowAgitoInsanity} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSABlInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <img src={TwinklingSand} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSABlSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Orichalcum} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSABlOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <img src={Rupies} height="50" width="50"/>
                            <Text fontSize={[1,2]}>{props.wbSABlRupeeCost} in millions</Text>
                        </Card>
                    </Flex>
                </Box>
        </div>
    )
}