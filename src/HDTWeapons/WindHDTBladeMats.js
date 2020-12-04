import React from 'react'
import WindHDTSphere from "../Images/Wind_HDT_Sphere.png";
import WindHDTTail from "../Images/Wind_HDT_Tail.png";
import WindHDTHorn from "../Images/Wind_HDT_Horn.png";
import WindHDTHeart from "../Images/Wind_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import WindHDTBlade from "../Images/Wind_HDT_Blade.png";

export default function WindHDTBladeMats(props) {
    return (
        <Box width={1 / 2}>
            <Flex>
                <Box width={1 / 3}></Box>
                <img src={WindHDTBlade} height="75" width="75" />
            </Flex>
            <Flex>
                <Text>To Weapon Bonus</Text>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={WindHDTSphere} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbWiHBlSphereCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={WindHDTTail} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbWiHBlTailCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={WindHDTHorn} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbWiHBlHornCount}</Text>
                </Card>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={WindHDTHeart} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbWiHBlHeartCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Orichalcum} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbWiHBlOriCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Rupies} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbWiHBlRupeeCost} in millions</Text>
                </Card>
            </Flex>
        </Box>
    )
}