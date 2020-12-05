import React from 'react'
import WaterAgitoSilverMask from "../Images/Water_Agito_Silver_Mask.png";
import WaterAgitoGoldMask from "../Images/Water_Agito_Gold_Mask.png";
import WaterAgitoInsanity from "../Images/Water_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import WaterAgitoLance from "../Images/Water_Agito_Lance.png"

export default function WaterAgitoLanceMats(props) {
    return (
        <div>
            <Box width={1 / 2} mx="auto" bg={"#152238"}>
                <Box my={[10, 350]}></Box>
                <Box sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Box width={1 / 4}></Box>
                        <Image src={WaterAgitoLance} sx={{ width: ["50%", "35%"] }} />
                    </Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Full Capabilities</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaALSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaALGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaALInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaALGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaALSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaALOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaALRupeeCost} million</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Weapon Bonus</Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoSilverMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaALSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoGoldMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaALGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoInsanity} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaALInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaALSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaALOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaALRupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}
