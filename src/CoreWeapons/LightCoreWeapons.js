import React from 'react'
import CoreNavTabs from "./CoreNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

export default function LightCoreWeapons() {
    return (
        <div>
            <CoreNavTabs />
            <h1>Light Core Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}