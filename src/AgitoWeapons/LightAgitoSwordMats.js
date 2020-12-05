import React from 'react'
import LightAgitoSilverMask from "../Images/Light_Agito_Silver_Mask.png";
import LightAgitoGoldMask from "../Images/Light_Agito_Gold_Mask.png";
import LightAgitoInsanity from "../Images/Light_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import LightAgitoSword from "../Images/Light_Agito_Sword.png"

export default function LightAgitoSwordMats(props) {
    return (
        <div>
            <Box width={1 / 2} mx="auto" bg={"#152238"}>
                <Box my={[10, 0]}></Box>
                <Box sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Box width={1 / 4}></Box>
                        <Image src={LightAgitoSword} sx={{ width: ["50%", "35%"] }} />
                    </Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Full Capabilities</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLASSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLASGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLASInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLASGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLASSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLASOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLASRupeeCost} million</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Weapon Bonus</Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoSilverMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLASSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoGoldMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLASGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoInsanity} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLASInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLASSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLASOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLASRupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}
