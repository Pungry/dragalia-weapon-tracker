import React from 'react'
import ShadowAgitoSilverMask from "../Images/Shadow_Agito_Silver_Mask.png";
import ShadowAgitoGoldMask from "../Images/Shadow_Agito_Gold_Mask.png";
import ShadowAgitoInsanity from "../Images/Shadow_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import ShadowAgitoSword from "../Images/Shadow_Agito_Sword.png"

export default function ShadowAgitoSwordMats(props) {
    return (
        <div>
            <Box width={1 / 2} mx="auto" bg={"#152238"}>
                <Box my={[10, 0]}></Box>
                <Box sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Box width={1 / 4}></Box>
                        <Image src={ShadowAgitoSword} sx={{ width: ["50%", "35%"] }} />
                    </Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Full Capabilities</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSASSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSASGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSASInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSASGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSASSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSASOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSASRupeeCost} million</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Weapon Bonus</Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoSilverMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSASSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoGoldMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSASGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoInsanity} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSASInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSASSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSASOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSASRupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}
