import React from 'react'
import LightHDTSphere from "../Images/Light_HDT_Sphere.png";
import LightHDTTail from "../Images/Light_HDT_Tail.png";
import LightHDTHorn from "../Images/Light_HDT_Horn.png";
import LightHDTHeart from "../Images/Light_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import LightHDTWand from "../Images/Light_HDT_Wand.png";

export default function LightHDTWandMats(props) {
    return (
        <Box width={1 / 2}>
            <Box my={700}></Box>
            <Flex>
                <Box width={1 / 3}></Box>
                <img src={LightHDTWand} height="75" width="75" />
            </Flex>
            <Flex>
                <Text>To Weapon Bonus</Text>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={LightHDTSphere} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbLHWSphereCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={LightHDTTail} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbLHWTailCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={LightHDTHorn} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbLHWHornCount}</Text>
                </Card>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={LightHDTHeart} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbLHWHeartCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Orichalcum} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbLHWOriCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Rupies} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbLHWRupeeCost} in millions</Text>
                </Card>
            </Flex>
        </Box>
    )
}