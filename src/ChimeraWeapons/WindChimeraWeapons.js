import React from 'react'
import ChimeraNavTabs from "./ChimeraNavTabs"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

export default function WindChimeraWeapons() {
    return (
        <div>
            <ChimeraNavTabs />
            <h1>Wind Chimera Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}