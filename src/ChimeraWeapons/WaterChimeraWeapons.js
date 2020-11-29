import React from 'react'
import ChimeraNavTabs from "./ChimeraNavTabs"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

export default function WaterChimeraWeapons() {
    return (
        <div>
            <ChimeraNavTabs />
            <h1>Water Chimera Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}