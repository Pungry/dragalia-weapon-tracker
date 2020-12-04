import React from 'react'
import LightHDTSphere from "../Images/Light_HDT_Sphere.png";
import LightHDTTail from "../Images/Light_HDT_Tail.png";
import LightHDTHorn from "../Images/Light_HDT_Horn.png";
import LightHDTHeart from "../Images/Light_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import LightHDTBlade from "../Images/Light_HDT_Blade.png";

export default function LightHDTBladeMats(props) {
    return (
        <Box width={1 / 2}>
            <Flex>
                <Box width={1 / 3}></Box>
                <img src={LightHDTBlade} height="75" width="75" />
            </Flex>
            <Flex>
                <Text>To Weapon Bonus</Text>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={LightHDTSphere} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbLHBlSphereCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={LightHDTTail} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbLHBlTailCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={LightHDTHorn} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbLHBlHornCount}</Text>
                </Card>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={LightHDTHeart} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbLHBlHeartCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Orichalcum} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbLHBlOriCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Rupies} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbLHBlRupeeCost} in millions</Text>
                </Card>
            </Flex>
        </Box>
    )
}