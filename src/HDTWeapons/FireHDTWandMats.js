import React from 'react'
import FireHDTSphere from "../Images/Fire_HDT_Sphere.png";
import FireHDTTail from "../Images/Fire_HDT_Tail.png";
import FireHDTHorn from "../Images/Fire_HDT_Horn.png";
import FireHDTHeart from "../Images/Fire_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import FireHDTWand from "../Images/Fire_HDT_Wand.png";

export default function FireHDTWandMats(props) {
    return (
        <Box width={1 / 2}>
            <Box my={650}></Box>
            <Flex>
                <Box width={1 / 3}></Box>
                <img src={FireHDTWand} height="75" width="75" />
            </Flex>
            <Flex>
                <Text>To Weapon Bonus</Text>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={FireHDTSphere} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFHWSphereCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={FireHDTTail} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFHWTailCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={FireHDTHorn} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFHWHornCount}</Text>
                </Card>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={FireHDTHeart} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFHWHeartCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Orichalcum} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFHWOriCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Rupies} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFHWRupeeCost} in millions</Text>
                </Card>
            </Flex>
        </Box>
    )
}