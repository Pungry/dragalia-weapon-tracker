import React from 'react'
import FireAgitoSilverMask from "../Images/Fire_Agito_Silver_Mask.png";
import FireAgitoGoldMask from "../Images/Fire_Agito_Gold_Mask.png";
import FireAgitoInsanity from "../Images/Fire_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import FireAgitoBow from "../Images/Fire_Agito_Bow.png"

export default function FireAgitoBowMats(props) {
    return (
        <div>
            <Box width={1 / 2} mx="auto" bg={"#152238"}>
                <Box my={[10, 350]}></Box>
                <Box sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Box width={1 / 4}></Box>
                        <Image src={FireAgitoBow} sx={{ width: ["50%", "35%"] }, {height: ["50%", "35%"]}} />
                    </Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Full Capabilities</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFABoSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFABoGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFABoInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFABoGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFABoSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFABoOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.mubFABoRupeeCost} million</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Weapon Bonus</Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoSilverMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFABoSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGoldMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFABoGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoInsanity} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFABoInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFABoSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFABoOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFABoRupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}
