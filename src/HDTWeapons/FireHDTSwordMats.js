import React from 'react'
import FireHDTSphere from "../Images/Fire_HDT_Sphere.png";
import FireHDTTail from "../Images/Fire_HDT_Tail.png";
import FireHDTHorn from "../Images/Fire_HDT_Horn.png";
import FireHDTHeart from "../Images/Fire_HDT_Heart.png";
import Orichalcum from "../Images/Orichalcum.png";
import Rupies from "../Images/Rupees.png";
import { Box, Text, Flex, Card } from "rebass";
import FireHDTSword from "../Images/Fire_HDT_Sword.png";

export default function FireHDTSwordMats(props) {
    return (
        <Box width={1 / 2}>
            <Flex>
                <Box width={1 / 3}></Box>
                <img src={FireHDTSword} height="75" width="75" />
            </Flex>
            <Flex>
                <Text>To Weapon Bonus</Text>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={FireHDTSphere} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFHSphereCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={FireHDTTail} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFHTailCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={FireHDTHorn} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFHHornCount}</Text>
                </Card>
            </Flex>
            <Flex>
                <Card width={[75, 150]}>
                    <img src={FireHDTHeart} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFHHeartCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Orichalcum} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFHOriCount}</Text>
                </Card>
                <Card width={[75, 150]}>
                    <img src={Rupies} height="50" width="50" />
                    <Text fontSize={[1, 2]}>{props.wbFHRupeeCost} in millions</Text>
                </Card>
            </Flex>
        </Box>
    )
}