import React from 'react'
import ChimeraNavTabs from "./ChimeraNavTabs"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

export default function ShadowChimeraWeapons() {
    return (
        <div>
            <ChimeraNavTabs />
            <h1>Shadow Chimera Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}