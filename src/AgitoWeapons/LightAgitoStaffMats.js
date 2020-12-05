import React from 'react'
import LightAgitoSilverMask from "../Images/Light_Agito_Silver_Mask.png";
import LightAgitoGoldMask from "../Images/Light_Agito_Gold_Mask.png";
import LightAgitoInsanity from "../Images/Light_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import LightAgitoStaff from "../Images/Light_Agito_Staff.png"

export default function LightAgitoStaffMats(props) {
    return (
        <div>
            <Box width={1 / 2} mx="auto" bg={"#152238"}>
                <Box my={[10, 700]}></Box>
                <Box sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Box width={1 / 4}></Box>
                        <Image src={LightAgitoStaff} sx={{ width: ["50%", "35%"] }} />
                    </Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Full Capabilities</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLAStSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLAStGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLAStInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLAStGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLAStSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLAStOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLAStRupeeCost} million</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Weapon Bonus</Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoSilverMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLAStSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoGoldMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLAStGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoInsanity} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLAStInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLAStSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLAStOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLAStRupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}
