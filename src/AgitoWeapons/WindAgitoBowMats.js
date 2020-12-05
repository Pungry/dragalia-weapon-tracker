import React from 'react'
import WindAgitoSilverMask from "../Images/Wind_Agito_Silver_Mask.png";
import WindAgitoGoldMask from "../Images/Wind_Agito_Gold_Mask.png";
import WindAgitoInsanity from "../Images/Wind_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import WindAgitoBow from "../Images/Wind_Agito_Bow.png"

export default function WindAgitoBowMats(props) {
    return (
        <div>
            <Box width={1 / 2} mx="auto" bg={"#152238"}>
                <Box my={[10, 350]}></Box>
                <Box sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Box width={1 / 4}></Box>
                        <Image src={WindAgitoBow} sx={{ width: ["50%", "35%"] }} />
                    </Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Full Capabilities</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={WindAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.mubWiABoSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WindAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.mubWiABoGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WindAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.mubWiABoInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.mubWiABoGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.mubWiABoSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.mubWiABoOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.mubWiABoRupeeCost} million</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Weapon Bonus</Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <Image src={WindAgitoSilverMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.wbWiABoSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WindAgitoGoldMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.wbWiABoGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={WindAgitoInsanity} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.wbWiABoInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.wbWiABoSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.wbWiABoOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"green"} fontSize={[1, 2]}>{props.wbWiABoRupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}
