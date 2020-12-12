import React from 'react'
import ShadowHDTSphere from "../Images/Shadow_HDT_Sphere.png";
import ShadowHDTTail from "../Images/Shadow_HDT_Tail.png";
import ShadowHDTHorn from "../Images/Shadow_HDT_Horn.png";
import ShadowHDTHeart from "../Images/Shadow_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import ShadowHDTLance from "../Images/Shadow_HDT_Lance.png";

export default function ShadowHDTLanceMats(props) {
    return (
        <Box width={[11 / 20, 2 / 5]} mx="auto">
            <Box my={[10, 350]}></Box>
            <Box sx={{ border: "3px solid blue" }} bg={"#152238"}>
                <Flex>
                    <Box width={[1 / 4, 2 / 5]}></Box>
                    <Image src={ShadowHDTLance} sx={{ width: ["50%", "20%"] }} />
                </Flex>
                <Flex>
                    <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">To Weapon Bonus</Text>
                </Flex>
                <Flex alignItems="center">
                    <Card width={[75, 150]}>
                        <Image src={ShadowHDTSphere} sx={{ width: ["100%", "70%"], height: ["75%", "35%"] }} />
                        <Text color={"purple"} fontSize={[1, 2]}>{props.wbSHLSphereCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={ShadowHDTTail} sx={{ width: ["100%", "70%"], height: ["75%", "35%"] }} />
                        <Text color={"purple"} fontSize={[1, 2]}>{props.wbSHLTailCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={ShadowHDTHorn} sx={{ width: ["100%", "70%"], height: ["75%", "35%"] }} />
                        <Text color={"purple"} fontSize={[1, 2]}>{props.wbSHLHornCount}</Text>
                    </Card>
                </Flex>
                <Flex>
                    <Card width={[75, 150]}>
                        <Image src={ShadowHDTHeart} sx={{ width: ["100%", "70%"], height: ["60%", "65%"] }} />
                        <Text color={"purple"} fontSize={[1, 2]}>{props.wbSHLHeartCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={Orichalcum} sx={{ width: ["90%", "75%"], height: ["60%", "70%"] }} />
                        <Text color={"purple"} fontSize={[1, 2]}>{props.wbSHLOriCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={Rupies} sx={{ width: ["90%", "70%"], height: ["60%", "70%"] }} />
                        <Text color={"purple"} fontSize={[1, 2]}>{props.wbSHLRupeeCost} in millions</Text>
                    </Card>
                </Flex>
            </Box>
        </Box>
    )
}