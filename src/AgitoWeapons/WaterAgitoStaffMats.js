import React from 'react'
import WaterAgitoSilverMask from "../Images/Water_Agito_Silver_Mask.png";
import WaterAgitoGoldMask from "../Images/Water_Agito_Gold_Mask.png";
import WaterAgitoInsanity from "../Images/Water_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import WaterAgitoStaff from "../Images/Water_Agito_Staff.png"

export default function WaterAgitoStaffMats(props) {
    return (
        <div>
            <Box width={1 / 2} mx="auto" bg={"#152238"}>
                <Box my={[10, 700]}></Box>
                <Box sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Box width={1 / 4}></Box>
                        <Image src={WaterAgitoStaff} sx={{ width: ["50%", "35%"] }} />
                    </Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Full Capabilities</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaAStSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaAStGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaAStInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaAStGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaAStSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaAStOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.mubWaAStRupeeCost} million</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Weapon Bonus</Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoSilverMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaAStSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoGoldMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaAStGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WaterAgitoInsanity} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaAStInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaAStSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaAStOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaAStRupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}
