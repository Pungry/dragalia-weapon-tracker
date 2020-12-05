import React from 'react'
import LightAgitoSilverMask from "../Images/Light_Agito_Silver_Mask.png";
import LightAgitoGoldMask from "../Images/Light_Agito_Gold_Mask.png";
import LightAgitoInsanity from "../Images/Light_Agito_Insanity.png";
import FireAgitoGale from "../Images/Fire_Agito_Gale.png";
import TwinklingSand from "../Images/Twinkling_Sand.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import LightAgitoDagger from "../Images/Light_Agito_Dagger.png"

export default function LightAgitoDaggerMats(props) {
    return (
        <div>
            <Box width={1 / 2} mx="auto" bg={"#152238"}>
                <Box my={[10, 0]}></Box>
                <Box sx={{ border: "3px solid blue" }}>
                    <Flex>
                        <Box width={1 / 4}></Box>
                        <Image src={LightAgitoDagger} sx={{ width: ["50%", "35%"] }} />
                    </Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Full Capabilities</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoSilverMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLADSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoGoldMask} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLADGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoInsanity} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLADInsanityCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={FireAgitoGale} sx={{ width: ["100%"], height: ["75%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLADGaleCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLADSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLADOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.mubLADRupeeCost} million</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">Weapon Bonus</Text>
                    </Flex>
                    <Flex>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoSilverMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLADSilverMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoGoldMask} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLADGoldMaskCount}</Text>
                        </Card>
                        <Card width={[75, 150]}>
                            <Image src={LightAgitoInsanity} sx={{ width: ["70%"], height: ["70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLADInsanityCount}</Text>
                        </Card>
                    </Flex>
                    <Flex>&nbsp;</Flex>
                    <Flex>
                        <Card width={[75, 175]}>
                            <Image src={TwinklingSand} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLADSandCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Orichalcum} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLADOriCount}</Text>
                        </Card>
                        <Card width={[75, 175]}>
                            <Image src={Rupies} sx={{ width: ["70%"], height: ["52%", "70%"] }} />
                            <Text color={"gold"} fontSize={[1, 2]}>{props.wbLADRupeeCost} million</Text>
                        </Card>
                    </Flex>
                </Box>
            </Box>
        </div>
    )
}
