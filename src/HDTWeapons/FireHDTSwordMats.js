import React from 'react'
import FireHDTSphere from "../Images/Fire_HDT_Sphere.png";
import FireHDTTail from "../Images/Fire_HDT_Tail.png";
import FireHDTHorn from "../Images/Fire_HDT_Horn.png";
import FireHDTHeart from "../Images/Fire_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card, Image } from "rebass";
import FireHDTSword from "../Images/Fire_HDT_Sword.png";

export default function FireHDTSwordMats(props) {
    return (
        <Box width={[11 / 20, 2 / 5]} mx="auto">
            <Box my={[10, 0]}></Box>
            <Box sx={{ border: "3px solid blue" }} bg={"#152238"}>
                <Flex>
                    <Box width={[1 / 4, 2 / 5]}></Box>
                    <Image src={FireHDTSword} sx={{ width: ["50%", "20%"] }} />
                </Flex>
                <Flex>
                    <Text fontSize={[1, 3]} ml="auto" mr="auto" color="gold">To Weapon Bonus</Text>
                </Flex>
                <Flex alignItems="center">
                    <Card width={[75, 150]}>
                        <Image src={FireHDTSphere} sx={{ width: ["100%", "70%"], height: ["75%", "35%"] }} />
                        <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFHSphereCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={FireHDTTail} sx={{ width: ["100%", "70%"], height: ["75%", "35%"] }} />
                        <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFHTailCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={FireHDTHorn} sx={{ width: ["100%", "70%"], height: ["75%", "35%"] }} />
                        <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFHHornCount}</Text>
                    </Card>
                </Flex>
                <Flex>
                    <Card width={[75, 150]}>
                        <Image src={FireHDTHeart} sx={{ width: ["100%", "70%"], height: ["60%", "65%"] }} />
                        <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFHHeartCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={Orichalcum} sx={{ width: ["90%", "75%"], height: ["60%", "70%"] }} />
                        <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFHOriCount}</Text>
                    </Card>
                    <Card width={[75, 150]}>
                        <Image src={Rupies} sx={{ width: ["90%", "70%"], height: ["60%", "70%"] }} />
                        <Text color={"crimson"} fontSize={[1, 2]}>{props.wbFHRupeeCost} in millions</Text>
                    </Card>
                </Flex>
            </Box>
        </Box>
    )
}