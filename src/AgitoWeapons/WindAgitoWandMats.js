import React from 'react'
import WindAgitoSilverMask from "../Images/Wind_Agito_Silver_Mask.png";
import WindAgitoGoldMask from "../Images/Wind_Agito_Gold_Mask.png";
import WindAgitoInsanity from "../Images/Wind_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import WindAgitoWand from "../Images/Wind_Agito_Wand.png"

export default function WindAgitoWandMats(props) {
    return (
        <div>
            <Box width={1 / 2} mx="auto" bg={"#152238"}>
                <Box my={[10, 700]}></Box>
                <Box sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Box width={1 / 4}></Box>
                        <Image src={WindAgitoWand} sx={{ width: ["50%", "35%"] }} />
                    </Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Full Capabilities</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={WindAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.mubWiAWSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WindAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.mubWiAWGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WindAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.mubWiAWInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.mubWiAWGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.mubWiAWSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.mubWiAWOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.mubWiAWRupeeCost} million</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Weapon Bonus</Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <Image src={WindAgitoSilverMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.wbWiAWSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WindAgitoGoldMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.wbWiAWGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WindAgitoInsanity} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.wbWiAWInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.wbWiAWSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.wbWiAWOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.wbWiAWRupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}
