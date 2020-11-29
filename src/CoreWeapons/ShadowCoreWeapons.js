import React from 'react'
import CoreNavTabs from "./CoreNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

export default function ShadowCoreWeapons() {
    return (
        <div>
            <CoreNavTabs />
            <h1>Shadow Core Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}