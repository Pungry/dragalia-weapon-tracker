import './App.css';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import FireAgitoWeapons from "./AgitoWeapons/FireAgitoWeapons";
import WaterAgitoWeapons from "./AgitoWeapons/WaterAgitoWeapons";
import WindAgitoWeapons from "./AgitoWeapons/WindAgitoWeapons";
import LightAgitoWeapons from "./AgitoWeapons/LightAgitoWeapons";
import ShadowAgitoWeapons from "./AgitoWeapons/ShadowAgitoWeapons";
import FireHDTWeapons from "./HDTWeapons/FireHDTWeapons";
import WaterHDTWeapons from "./HDTWeapons/WaterHDTWeapons";
import WindHDTWeapons from "./HDTWeapons/WindHDTWeapons";
import LightHDTWeapons from "./HDTWeapons/LightHDTWeapons";
import ShadowHDTWeapons from "./HDTWeapons/ShadowHDTWeapons";
import FireChimeraWeapons from "./ChimeraWeapons/FireChimeraWeapons";
import WaterChimeraWeapons from "./ChimeraWeapons/WaterChimeraWeapons";
import WindChimeraWeapons from "./ChimeraWeapons/WindChimeraWeapons";
import LightChimeraWeapons from "./ChimeraWeapons/LightChimeraWeapons";
import ShadowChimeraWeapons from "./ChimeraWeapons/ShadowChimeraWeapons";
import FireCoreWeapons from './CoreWeapons/FireCoreWeapons';
import WaterCoreWeapons from './CoreWeapons/WaterCoreWeapons';
import WindCoreWeapons from './CoreWeapons/WindCoreWeapons';
import LightCoreWeapons from "./CoreWeapons/LightCoreWeapons"
import ShadowCoreWeapons from './CoreWeapons/ShadowCoreWeapons';
import FireVoidWeapons from './VoidWeapons/FireVoidWeapons';
import WaterVoidWeapons from './VoidWeapons/WaterVoidWeapons';
import WindVoidWeapons from './VoidWeapons/WindVoidWeapons';
import LightVoidWeapons from './VoidWeapons/LightVoidWeapons';
import ShadowVoidWeapons from './VoidWeapons/ShadowVoidWeapons';
import OtherWeapons from "./OtherWeapons/OtherWeapons"
import ErrorPage from "./ErrorPage";
import "./index.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FireAgitoWeapons} />
        <Route exact path="/agito/fire" component={FireAgitoWeapons} />
        <Route exact path="/agito/water" component={WaterAgitoWeapons} />
        <Route exact path="/agito/wind" component={WindAgitoWeapons} />
        <Route exact path="/agito/light" component={LightAgitoWeapons} />
        <Route exact path="/agito/shadow" component={ShadowAgitoWeapons} />
        <Route exact path="/hdt/fire" component={FireHDTWeapons} />
        <Route exact path="/hdt/water" component={WaterHDTWeapons} />
        <Route exact path="/hdt/wind" component={WindHDTWeapons} />
        <Route exact path="/hdt/light" component={LightHDTWeapons} />
        <Route exact path="/hdt/shadow" component={ShadowHDTWeapons} />
        <Route exact path="/chimera/fire" component={FireChimeraWeapons} />
        <Route exact path="/chimera/water" component={WaterChimeraWeapons} />
        <Route exact path="/chimera/wind" component={WindChimeraWeapons} />
        <Route exact path="/chimera/light" component={LightChimeraWeapons} />
        <Route exact path="/chimera/shadow" component={ShadowChimeraWeapons} />
        <Route exact path="/core/fire" component={FireCoreWeapons} />
        <Route exact path="/core/water" component={WaterCoreWeapons} />
        <Route exact path="/core/wind" component={WindCoreWeapons} />
        <Route exact path="/core/light" component={LightCoreWeapons} />
        <Route exact path="/core/shadow" component={ShadowCoreWeapons} />
        <Route exact path="/void/fire" component={FireVoidWeapons} />
        <Route exact path="/void/water" component={WaterVoidWeapons} />
        <Route exact path="/void/wind" component={WindVoidWeapons} />
        <Route exact path="/void/light" component={LightVoidWeapons} />
        <Route exact path="/void/shadow" component={ShadowVoidWeapons} />
        <Route exact path="/other" component={OtherWeapons} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
