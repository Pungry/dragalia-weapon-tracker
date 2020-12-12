import React from 'react'
import LightHDTSphere from "../Images/Light_HDT_Sphere.png";
import LightHDTTail from "../Images/Light_HDT_Tail.png";
import LightHDTHorn from "../Images/Light_HDT_Horn.png";
import LightHDTHeart from "../Images/Light_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import LightHDTLance from "../Images/Light_HDT_Lance.png";

export default function LightHDTLanceMats(props) {
    return (
        <Box width={[11 / 20, 2 / 5]} mx="auto">
            <Box my={[10, 350]}></Box>
            <Box sx={{ border: "3px solid blue" }} bg={"#152238"}>
                <Flex>
                    <Box width={[1 / 4, 2 / 5]}></Box>
                    <Image src={LightHDTLance} sx={{ width: ["50%", "20%"] }} />
                </Flex>
                <Flex>
                    <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">To Weapon Bonus</Text>
                </Flex>
                <Flex alignItems="center">
                    <Card width={[75, 150]}>
                        <Image src={LightHDTSphere} sx={{ width: ["100%", "70%"], height: ["75%", "35%"] }} />
                        <Text color={"gold"} fontSize={[1, 2]}>{props.wbLHLSphereCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={LightHDTTail} sx={{ width: ["100%", "70%"], height: ["75%", "35%"] }} />
                        <Text color={"gold"} fontSize={[1, 2]}>{props.wbLHLTailCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={LightHDTHorn} sx={{ width: ["100%", "70%"], height: ["75%", "35%"] }} />
                        <Text color={"gold"} fontSize={[1, 2]}>{props.wbLHLHornCount}</Text>
                    </Card>
                </Flex>
                <Flex>
                    <Card width={[75, 150]}>
                        <Image src={LightHDTHeart} sx={{ width: ["100%", "70%"], height: ["60%", "65%"] }} />
                        <Text color={"gold"} fontSize={[1, 2]}>{props.wbLHLHeartCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={Orichalcum} sx={{ width: ["90%", "75%"], height: ["60%", "70%"] }} />
                        <Text color={"gold"} fontSize={[1, 2]}>{props.wbLHLOriCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={Rupies} sx={{ width: ["90%", "70%"], height: ["60%", "70%"] }} />
                        <Text color={"gold"} fontSize={[1, 2]}>{props.wbLHLRupeeCost} in millions</Text>
                    </Card>
                </Flex>
            </Box>
        </Box>
    )
}