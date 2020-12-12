import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Image } from "rebass";
import OtherWeapon from "./Images/OtherWeaponsBanner.PNG"
import AgitoWeapon from "./Images/AgitoWeaponsBanner.PNG"
import ChimeraWeapon from "./Images/ChimeraWeaponsBanner.PNG"
import CoreWeapon from "./Images/CoreWeaponsBanner.PNG"
import HDTWeapon from "./Images/HDTWeaponsBanner.PNG"
import VoidWeapon from "./Images/VoidWeaponsBanner.PNG"

function WeaponTypeNavTabs() {
  return (<>
  <Flex>
    <Box width={[1/16, 1/4]}></Box>
    <Box width={[3/4, 1]}>
      <Flex alignItems="center">
        <Link to="/agito/fire" p={1}>
          <Image src={AgitoWeapon} alt="Link to Agito Weapons section" sx={{ width: ["100%", "50%"] }}/>
        </Link>
      </Flex>
      <Flex className="nav-item">
        <Link to="/hdt/fire">
          <Image src={HDTWeapon} alt="Link to HDT Weapons section" sx={{ width: ["100%", "50%"] }}/>
        </Link>
      </Flex>
      {/* <Flex className="nav-item">
        <Link to="/chimera/fire">
          <Image src={ChimeraWeapon}  alt="Link to Chimera Weapons section" sx={{ width: ["100%", "50%"] }}/>
        </Link>
      </Flex>
      <Flex className="nav-item">
        <Link to="/core/fire">
          <Image src={CoreWeapon}  alt="Link to Core Weapons section" sx={{ width: ["100%", "85%"] }}/>
        </Link>
      </Flex>
      <Flex className="nav-item">
        <Link to="/void/fire">
          <Image src={VoidWeapon}  alt="Link to Void Weapons section" sx={{ width: ["100%", "50%"] }}/>
        </Link>
      </Flex>
      <Flex className="nav-item">
        <Link to="/other">
          <Image src={OtherWeapon} alt="Link to Other Weapons section" sx={{ width: ["100%", "50%"] }}/>
        </Link>
      </Flex> */}
    </Box>
  </Flex>
  </>);
}

export default WeaponTypeNavTabs;