import React from 'react'
import HDTNavTabs from "./HDTNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

export default function LightHDTWeapons() {
    return (
        <div>
            <HDTNavTabs />
            <h1>Light HDT Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}
