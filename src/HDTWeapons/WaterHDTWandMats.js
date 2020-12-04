import React from 'react'
import WaterHDTSphere from "../Images/Water_HDT_Sphere.png";
import WaterHDTTail from "../Images/Water_HDT_Tail.png";
import WaterHDTHorn from "../Images/Water_HDT_Horn.png";
import WaterHDTHeart from "../Images/Water_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import WaterHDTWand from "../Images/Water_HDT_Wand.png";

export default function WaterHDTWandMats(props) {
    return (
        <Box width={1 / 2}>
            <Box my={700}></Box>
            <Flex>
                <Box width={1 / 3}></Box>
                <img src={WaterHDTWand} height="75" width="75" />
            </Flex>
            <Flex>
                <Text>To Weapon Bonus</Text>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={WaterHDTSphere} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFWaWSphereCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={WaterHDTTail} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFWaWTailCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={WaterHDTHorn} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFWaWHornCount}</Text>
                </Card>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={WaterHDTHeart} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFWaWHeartCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Orichalcum} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFWaWOriCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Rupies} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFWaWRupeeCost} in millions</Text>
                </Card>
            </Flex>
        </Box>
    )
}