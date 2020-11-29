import React from 'react'
import ChimeraNavTabs from "./ChimeraNavTabs"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

export default function FireChimeraWeapons() {
    return (
        <div>
            <ChimeraNavTabs />
            <h1>Fire Chimera Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}