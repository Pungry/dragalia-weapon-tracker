import React from 'react'
import VoidNavTabs from "./VoidNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

// Also a little different... void weapons have 8 weapon abilities in addition to the unbinds. So two separate sliders? Or 8 small buttons for the weapon abilities, because you can pick and choose what to do. Then, two boxes of counters for this: one for keeping track of stuff needed for all 8 bonuses, one for just what's needed for weapon bonus.

export default function FireVoidWeapons() {
    return (
        <div>
            <VoidNavTabs />
            <h1>Fire Void Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}