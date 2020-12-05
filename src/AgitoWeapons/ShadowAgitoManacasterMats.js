import React from 'react'
import ShadowAgitoSilverMask from "../Images/Shadow_Agito_Silver_Mask.png";
import ShadowAgitoGoldMask from "../Images/Shadow_Agito_Gold_Mask.png";
import ShadowAgitoInsanity from "../Images/Shadow_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import FireAgitoManacaster from "../Images/Fire_Agito_Manacaster.png"

export default function ShadowAgitoManacasterMats(props) {
    return (
        <div>
            <Box width={1 / 2} mx="auto" bg={"#152238"}>
                <Box my={[10, 700]}></Box>
                <Box sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Box width={1 / 4}></Box>
                        <Image src={FireAgitoManacaster} sx={{ width: ["50%", "35%"] }} />
                    </Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Full Capabilities</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSAMSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSAMGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSAMInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSAMGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSAMSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSAMOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.mubSAMRupeeCost} million</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Weapon Bonus</Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoSilverMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSAMSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoGoldMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSAMGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={ShadowAgitoInsanity} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSAMInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSAMSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSAMOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"purple"} fontSize={[1, 2]}>{props.wbSAMRupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}
