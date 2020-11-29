import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Flex } from "rebass";
import OtherWeapon from "./Images/OtherWeaponsBanner.PNG"
import AgitoWeapon from "./Images/AgitoWeaponsBanner.PNG"
import ChimeraWeapon from "./Images/ChimeraWeaponsBanner.PNG"
import CoreWeapon from "./Images/CoreWeaponsBanner.PNG"
import HDTWeapon from "./Images/HDTWeaponsBanner.PNG"
import VoidWeapon from "./Images/VoidWeaponsBanner.PNG"

function WeaponTypeNavTabs() {
  const location = useLocation();

  return (
    <Box className="NavTabs">
      <Flex>
        <Link to="/agito/fire" p={1}>
          <img src={AgitoWeapon} alt="Link to Agito Weapons section" height="75" width="400"/>
        </Link>
      </Flex>
      <Flex className="nav-item">
        <Link to="/hdt/fire">
          <img src={HDTWeapon} alt="Link to HDT Weapons section" height="75" width="400"/>
        </Link>
      </Flex>
      <Flex className="nav-item">
        <Link to="/chimera/fire">
          <img src={ChimeraWeapon}  alt="Link to Chimera Weapons section" height="75" width="400"/>
        </Link>
      </Flex>
      <Flex className="nav-item">
        <Link to="/core/fire">
          <img src={CoreWeapon}  alt="Link to Core Weapons section" height="75" width="400"/>
        </Link>
      </Flex>
      <Flex className="nav-item">
        <Link to="/void/fire">
          <img src={VoidWeapon}  alt="Link to Void Weapons section" height="75" width="400"/>
        </Link>
      </Flex>
      <Flex className="nav-item">
        <Link to="/other">
          <img src={OtherWeapon} alt="Link to Other Weapons section" height="75" width="400"/>
        </Link>
      </Flex>
    </Box>
  );
}

export default WeaponTypeNavTabs;