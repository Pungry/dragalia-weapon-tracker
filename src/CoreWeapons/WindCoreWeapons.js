import React from 'react'
import CoreNavTabs from "./CoreNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

export default function WindCoreWeapons() {
    return (
        <div>
            <CoreNavTabs />
            <h1>Wind Core Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}