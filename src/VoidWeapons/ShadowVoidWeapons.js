import React from 'react'
import VoidNavTabs from "./VoidNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

export default function ShadowVoidWeapons() {
    return (
        <div>
            <VoidNavTabs />
            <h1>Shadow Void Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}