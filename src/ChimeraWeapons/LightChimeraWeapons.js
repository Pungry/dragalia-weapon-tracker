import React from 'react'
import ChimeraNavTabs from "./ChimeraNavTabs"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

export default function LightChimeraWeapons() {
    return (
        <div>
            <ChimeraNavTabs />
            <h1>Light Chimera Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}