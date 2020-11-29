import React from 'react'
import HDTNavTabs from "./HDTNavTabs.js"
import WeaponTypeNavTabs from "../WeaponTypeNavTabs"

// For each weapon, have a picture of the weapon that starts "greyed out", then is in color when clicked. Clicking a weapon indicates that it has been crafted. Have one slider directly underneath the picture to indicate UB level. Have a button underneath that to the left to click to indicate that the wyrmprint slot has been unlocked. Have a button on the right to click to indicate that the weapon bonus has been crafted.

// Have a box to the right that'll show how many mats is needed to craft all the weapons up to 8UB, slots, and weapon bonuses. Whenever these numbers are updated, have that number saved to local storage and pulled back out of local storage. These numbers update whenever a button under a weapon is clicked.

// Perhaps have another box to the right to input what resources a user has? Or directly under what they need left?

// Sorted by element, not by weapon type. So all 9 Volk weapons are on the same box, then all 9 KY, etc. Flip between them by clicking an element button.

export default function FireHDTWeapons() {
    return (
        <div>
            <HDTNavTabs />
            <h1>Fire HDT Weapons</h1>
            <WeaponTypeNavTabs />
        </div>
    )
}
