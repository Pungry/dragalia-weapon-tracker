import React from 'react'
import WaterAgitoSilverMask from "../Images/Water_Agito_Silver_Mask.png";
import WaterAgitoGoldMask from "../Images/Water_Agito_Gold_Mask.png";
import WaterAgitoInsanity from "../Images/Water_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import WaterAgitoBlade from "../Images/Water_Agito_Blade.png"

export default function WaterAgitoBladeMats(props) {
    return (
        <div>
            <Box width={1 / 2} mx="auto" bg={"#152238"}>
                <Box my={[10, 0]}></Box>
                <Box sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Box width={1 / 4}></Box>
                        <Image src={WaterAgitoBlade} sx={{ width: ["50%", "35%"] }} />
                    </Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Full Capabilities</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaABlSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaABlGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaABlInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaABlGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaABlSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaABlOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaABlRupeeCost} million</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Weapon Bonus</Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoSilverMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaABlSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoGoldMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaABlGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoInsanity} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaABlInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaABlSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaABlOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaABlRupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}
