import React from 'react'
import ShadowHDTSphere from "../Images/Shadow_HDT_Sphere.png";
import ShadowHDTTail from "../Images/Shadow_HDT_Tail.png";
import ShadowHDTHorn from "../Images/Shadow_HDT_Horn.png";
import ShadowHDTHeart from "../Images/Shadow_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import FireHDTManacaster from "../Images/Fire_HDT_Manacaster.png";

export default function ShadowHDTManacasterMats(props) {
    return (
        <Box width={1 / 2}>
            <Box my={650}></Box>
            <Flex>
                <Box width={1 / 3}></Box>
                <img src={FireHDTManacaster} height="75" width="75" />
            </Flex>
            <Flex>
                <Text>To Weapon Bonus</Text>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={ShadowHDTSphere} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbSHMSphereCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={ShadowHDTTail} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbSHMTailCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={ShadowHDTHorn} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbSHMHornCount}</Text>
                </Card>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={ShadowHDTHeart} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbSHMHeartCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Orichalcum} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbSHMOriCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Rupies} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbSHMRupeeCost} in millions</Text>
                </Card>
            </Flex>
        </Box>
    )
}