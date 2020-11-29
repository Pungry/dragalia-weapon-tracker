import React from 'react'
import CoreNavTabs from "./CoreNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

export default function WaterCoreWeapons() {
    return (
        <div>
            <CoreNavTabs />
            <h1>Water Core Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}