import React from "react";
import { Link } from "react-router-dom";
import FireButton from "../Images/Icon_Element_Flame.png";
import WaterButton from "../Images/Icon_Element_Water.png";
import WindButton from "../Images/Icon_Element_Wind.png";
import LightButton from "../Images/Icon_Element_Light.png";
import ShadowButton from "../Images/Icon_Element_Shadow.png";
import { Box, Flex } from "rebass";

function NavTabs() {
  return (<>
  <Flex>
    <Box width={[1/6, 2/5]}>
    </Box>
    <Box width={1/5}>
      <Flex>
        <Link to="/agito/fire">
          <Box p={[1/2, 5/2]} bg="#d3809b">
            <img src={FireButton} alt="Link to Fire Agito Weapons section" height="40" width="40" />
          </Box>
        </Link>
        <Box p={[5/2]}>
        </Box>
        <Link to="/agito/water">
          <Box p={[1/2, 5/2]} bg="#87CEFA">
          <img src={WaterButton} alt="Link to Water Agito Weapons section" height="40" width="40" />
          </Box>
        </Link>
        <Box p={[5/2]}>
        </Box>
        <Link to="/agito/wind">
          <Box p={[1/2, 5/2]} bg="palegreen">
          <img src={WindButton} alt="Link to Wind Agito Weapons section" height="40" width="40" />
          </Box>
        </Link>
        <Box p={[5/2]}>
        </Box>
        <Link to="/agito/light">
          <Box p={[1/2, 5/2]} bg="lightyellow">
          <img src={LightButton} alt="Link to Light Agito Weapons section" height="40" width="40" />
          </Box>
        </Link>
        <Box p={[5/2]}>
        </Box>
        <Link to="/agito/shadow">
          <Box p={[1/2, 5/2]} bg="violet">
          <img src={ShadowButton} alt="Link to Fire Agito Weapons section" height="40" width="40" />
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