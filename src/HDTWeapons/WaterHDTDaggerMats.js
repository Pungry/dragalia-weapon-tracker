import React from 'react'
import WaterHDTSphere from "../Images/Water_HDT_Sphere.png";
import WaterHDTTail from "../Images/Water_HDT_Tail.png";
import WaterHDTHorn from "../Images/Water_HDT_Horn.png";
import WaterHDTHeart from "../Images/Water_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import WaterHDTDagger from "../Images/Water_HDT_Dagger.png";

export default function WaterHDTDaggerMats(props) {
    return (
        <Box width={1 / 2}>
            <Flex>
                <Box width={1 / 3}></Box>
                <img src={WaterHDTDagger} height="75" width="75" />
            </Flex>
            <Flex>
                <Text>To Weapon Bonus</Text>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={WaterHDTSphere} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFWaDSphereCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={WaterHDTTail} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFWaDTailCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={WaterHDTHorn} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFWaDHornCount}</Text>
                </Card>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={WaterHDTHeart} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFWaDHeartCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Orichalcum} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFWaDOriCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Rupies} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFWaDRupeeCost} in millions</Text>
                </Card>
            </Flex>
        </Box>
    )
}