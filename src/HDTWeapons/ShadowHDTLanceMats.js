import React from 'react'
import ShadowHDTSphere from "../Images/Shadow_HDT_Sphere.png";
import ShadowHDTTail from "../Images/Shadow_HDT_Tail.png";
import ShadowHDTHorn from "../Images/Shadow_HDT_Horn.png";
import ShadowHDTHeart from "../Images/Shadow_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import ShadowHDTLance from "../Images/Shadow_HDT_Lance.png";

export default function ShadowHDTLanceMats(props) {
    return (
        <Box width={1 / 2}>
            <Box my={350}></Box>
            <Flex>
                <Box width={1 / 3}></Box>
                <img src={ShadowHDTLance} height="75" width="75" />
            </Flex>
            <Flex>
                <Text>To Weapon Bonus</Text>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={ShadowHDTSphere} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbSHLSphereCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={ShadowHDTTail} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbSHLTailCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={ShadowHDTHorn} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbSHLHornCount}</Text>
                </Card>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={ShadowHDTHeart} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbSHLHeartCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Orichalcum} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbSHLOriCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Rupies} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbSHLRupeeCost} in millions</Text>
                </Card>
            </Flex>
        </Box>
    )
}