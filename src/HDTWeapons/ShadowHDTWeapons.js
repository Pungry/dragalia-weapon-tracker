import React from 'react'
import HDTNavTabs from "./HDTNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

export default function ShadowHDTWeapons() {
    return (
        <div>
            <HDTNavTabs />
            <h1>Shadow HDT Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}
