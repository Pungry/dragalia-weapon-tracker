import React from 'react'
import ShadowAgitoSilverMask from "../Images/Shadow_Agito_Silver_Mask.png";
import ShadowAgitoGoldMask from "../Images/Shadow_Agito_Gold_Mask.png";
import ShadowAgitoInsanity from "../Images/Shadow_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import ShadowAgitoBow from "../Images/Shadow_Agito_Bow.png"

export default function ShadowAgitoBowMats(props) {
    return (
        <div>
            <Box width={1 / 2} mx="auto" bg={"#152238"}>
                <Box my={[10, 350]}></Box>
                <Box sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Box width={1 / 4}></Box>
                        <Image src={ShadowAgitoBow} sx={{ width: ["50%", "35%"] }} />
                    </Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Full Capabilities</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSABoSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSABoGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSABoInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSABoGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSABoSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSABoOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSABoRupeeCost} million</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Weapon Bonus</Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoSilverMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSABoSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoGoldMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSABoGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoInsanity} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSABoInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSABoSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSABoOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSABoRupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}
