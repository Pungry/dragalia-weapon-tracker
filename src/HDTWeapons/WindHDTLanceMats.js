import React from 'react'
import WindHDTSphere from "../Images/Wind_HDT_Sphere.png";
import WindHDTTail from "../Images/Wind_HDT_Tail.png";
import WindHDTHorn from "../Images/Wind_HDT_Horn.png";
import WindHDTHeart from "../Images/Wind_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import WindHDTLance from "../Images/Wind_HDT_Lance.png";

export default function WindHDTLanceMats(props) {
    return (
        <Box width={1 / 2}>
            <Box my={350}></Box>
            <Flex>
                <Box width={1 / 3}></Box>
                <img src={WindHDTLance} height="75" width="75" />
            </Flex>
            <Flex>
                <Text>To Weapon Bonus</Text>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={WindHDTSphere} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbWiHLSphereCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={WindHDTTail} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbWiHLTailCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={WindHDTHorn} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbWiHLHornCount}</Text>
                </Card>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={WindHDTHeart} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbWiHLHeartCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Orichalcum} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbWiHLOriCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Rupies} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbWiHLRupeeCost} in millions</Text>
                </Card>
            </Flex>
        </Box>
    )
}