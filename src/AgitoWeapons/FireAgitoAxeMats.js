import React from 'react'
import FireAgitoSilverMask from "../Images/Fire_Agito_Silver_Mask.png";
import FireAgitoGoldMask from "../Images/Fire_Agito_Gold_Mask.png";
import FireAgitoInsanity from "../Images/Fire_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import FireAgitoAxe from "../Images/Fire_Agito_Axe.png"

export default function FireAgitoAxeMats(props) {
    return (
        <div>
            <Box width={1 / 2} mx="auto" bg={"#152238"}>
                <Box my={[10, 350]}></Box>
                <Box sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Box width={1 / 4}></Box>
                        <Image src={FireAgitoAxe} sx={{ width: ["50%", "50%"] }} />
                    </Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Full Capabilities</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFAASilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFAAGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFAAInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFAAGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFAASandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFAAOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFAARupeeCost} million</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Weapon Bonus</Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoSilverMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFAASilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGoldMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFAAGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoInsanity} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFAAInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFAASandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFAAOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFAARupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}
