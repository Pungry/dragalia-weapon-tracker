import React from 'react'
import VoidNavTabs from "./VoidNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

export default function LightVoidWeapons() {
    return (
        <div>
            <VoidNavTabs />
            <h1>Light Void Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}