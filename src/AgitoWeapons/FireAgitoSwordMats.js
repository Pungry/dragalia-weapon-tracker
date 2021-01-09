import React from 'react'
import FireAgitoSilverMask from "../Images/Fire_Agito_Silver_Mask.png";
import FireAgitoGoldMask from "../Images/Fire_Agito_Gold_Mask.png";
import FireAgitoInsanity from "../Images/Fire_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import FireAgitoSword from "../Images/Fire_Agito_Sword.png"

export default function FireAgitoSwordMats(props) {
    return (
        <div>
            <Box width={1 / 2} mx="auto" bg={"#152238"}>
                <Box my={[10, 0]}></Box>
                <Box sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Box width={1 / 4}></Box>
                        <Image src={FireAgitoSword} sx={{ width: ["25%", "35%"] }, {height: ["25%", "35%"]}} />
                    </Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Full Capabilities</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFASSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFASGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFASInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFASGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFASSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFASOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFASRupeeCost} million</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Weapon Bonus</Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoSilverMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFASSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGoldMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFASGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoInsanity} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFASInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFASSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFASOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFASRupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}
