import React from "react";
import { Link, useLocation } from "react-router-dom";
import FireButton from "../Images/Icon_Element_Flame.png";
import WaterButton from "../Images/Icon_Element_Water.png";
import WindButton from "../Images/Icon_Element_Wind.png";
import LightButton from "../Images/Icon_Element_Light.png";
import ShadowButton from "../Images/Icon_Element_Shadow.png";
import { Box, Text, Flex } from "rebass";

function NavTabs() {
  const location = useLocation();

  return (<>
  <Flex>
    <Box width={2/5}>
    </Box>
    <Box width={1/5}>
      <Flex>
        <Link to="/core/fire">
          <Box p={[1/2, 5/2]} bg="#d3809b">
            <img src={FireButton} alt="Link to Fire core Weapons section" height="40" width="40" />
          </Box>
        </Link>
        <Box p={[5/2]}>
        </Box>
        <Link to="/core/water">
          <Box p={[1/2, 5/2]} bg="#87CEFA">
          <img src={WaterButton} alt="Link to Water core Weapons section" height="40" width="40" />
          </Box>
        </Link>
        <Box p={[5/2]}>
        </Box>
        <Link to="/core/wind">
          <Box p={[1/2, 5/2]} bg="palegreen">
          <img src={WindButton} alt="Link to Wind core Weapons section" height="40" width="40" />
          </Box>
        </Link>
        <Box p={[5/2]}>
        </Box>
        <Link to="/core/light">
          <Box p={[1/2, 5/2]} bg="lightyellow">
          <img src={LightButton} alt="Link to Light core Weapons section" height="40" width="40" />
          </Box>
        </Link>
        <Box p={[5/2]}>
        </Box>
        <Link to="/core/shadow">
          <Box p={[1/2, 5/2]} bg="violet">
          <img src={ShadowButton} alt="Link to Fire core Weapons section" height="40" width="40" />
          </Box>
        </Link>
      </Flex>
    </Box>
    <Box width={2/5}>
    </Box>
  </Flex>
  </>);
}

export default NavTabs;