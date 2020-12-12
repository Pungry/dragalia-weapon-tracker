import React from 'react'
import WaterHDTSphere from "../Images/Water_HDT_Sphere.png";
import WaterHDTTail from "../Images/Water_HDT_Tail.png";
import WaterHDTHorn from "../Images/Water_HDT_Horn.png";
import WaterHDTHeart from "../Images/Water_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import WaterHDTSword from "../Images/Water_HDT_Sword.png";

export default function WaterHDTSwordMats(props) {
    return (
        <Box width={[11 / 20, 2 / 5]} mx="auto">
            <Box my={[10, 0]}></Box>
            <Box sx={{ border: "3px solid blue" }} bg={"#152238"}>
                <Flex>
                    <Box width={[1 / 4, 2 / 5]}></Box>
                    <Image src={WaterHDTSword} sx={{ width: ["50%", "20%"] }} />
                </Flex>
                <Flex>
                    <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">To Weapon Bonus</Text>
                </Flex>
                <Flex alignItems="center">
                    <Card width={[75, 150]}>
                        <Image src={WaterHDTSphere} sx={{ width: ["100%", "70%"], height: ["75%", "35%"] }} />
                        <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaHSphereCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={WaterHDTTail} sx={{ width: ["100%", "70%"], height: ["75%", "35%"] }} />
                        <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaHTailCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={WaterHDTHorn} sx={{ width: ["100%", "70%"], height: ["75%", "35%"] }} />
                        <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaHHornCount}</Text>
                    </Card>
                </Flex>
                <Flex>
                    <Card width={[75, 150]}>
                        <Image src={WaterHDTHeart} sx={{ width: ["100%", "70%"], height: ["60%", "65%"] }} />
                        <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaHHeartCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={Orichalcum} sx={{ width: ["90%", "75%"], height: ["60%", "70%"] }} />
                        <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaHOriCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={Rupies} sx={{ width: ["90%", "70%"], height: ["60%", "70%"] }} />
                        <Text color={"lightblue"} fontSize={[1, 2]}>{props.wbWaHRupeeCost} in millions</Text>
                    </Card>
                </Flex>
            </Box>
        </Box>
    )
}