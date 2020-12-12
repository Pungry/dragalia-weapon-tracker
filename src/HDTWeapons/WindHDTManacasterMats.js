import React from 'react'
import WindHDTSphere from "../Images/Wind_HDT_Sphere.png";
import WindHDTTail from "../Images/Wind_HDT_Tail.png";
import WindHDTHorn from "../Images/Wind_HDT_Horn.png";
import WindHDTHeart from "../Images/Wind_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import WindHDTManacaster from "../Images/Wind_HDT_Manacaster.png";

export default function WindHDTManacasterMats(props) {
    return (
        <Box width={[11 / 20, 2 / 5]} mx="auto">
            <Box my={[10, 600]}></Box>
            <Box sx={{ border: "3px solid blue" }} bg={"#152238"}>
                <Flex>
                    <Box width={[1 / 4, 2 / 5]}></Box>
                    <Image src={WindHDTManacaster} sx={{ width: ["50%", "20%"] }} />
                </Flex>
                <Flex>
                    <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">To Weapon Bonus</Text>
                </Flex>
                <Flex alignItems="center">
                    <Card width={[75, 150]}>
                        <Image src={WindHDTSphere} sx={{ width: ["100%", "70%"], height: ["75%", "35%"] }} />
                        <Text color={"green"} fontSize={[1, 2]}>{props.wbWiHMSphereCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={WindHDTTail} sx={{ width: ["100%", "70%"], height: ["75%", "35%"] }} />
                        <Text color={"green"} fontSize={[1, 2]}>{props.wbWiHMTailCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={WindHDTHorn} sx={{ width: ["100%", "70%"], height: ["75%", "35%"] }} />
                        <Text color={"green"} fontSize={[1, 2]}>{props.wbWiHMHornCount}</Text>
                    </Card>
                </Flex>
                <Flex>
                    <Card width={[75, 150]}>
                        <Image src={WindHDTHeart} sx={{ width: ["100%", "70%"], height: ["60%", "65%"] }} />
                        <Text color={"green"} fontSize={[1, 2]}>{props.wbWiHMHeartCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={Orichalcum} sx={{ width: ["90%", "75%"], height: ["60%", "70%"] }} />
                        <Text color={"green"} fontSize={[1, 2]}>{props.wbWiHMOriCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={Rupies} sx={{ width: ["90%", "70%"], height: ["60%", "70%"] }} />
                        <Text color={"green"} fontSize={[1, 2]}>{props.wbWiHMRupeeCost} in millions</Text>
                    </Card>
                </Flex>
            </Box>
        </Box>
    )
}