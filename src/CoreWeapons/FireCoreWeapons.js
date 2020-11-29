import React from 'react'
import CoreNavTabs from "./CoreNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

// A little more complex here. Each weapon (besides manacasters), there are three stages of core weapon to go through before getting to unlock the elemental core weapons. Could circumvent by just saying "this weapon tracker is only for the final elemental weapons" and add a small disclaimer about how those 3 pre-elemental weapons aren't included in the cost.

export default function FireCoreWeapons() {
    return (
        <div>
            <CoreNavTabs />
            <h1>Fire Core Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}