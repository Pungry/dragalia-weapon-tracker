# Dragalia Weapon Tracker

[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

You can find Dragalia Weapon Tracker at this link: [https://dragalia-weapon-tracker.herokuapp.com/](https://dragalia-weapon-tracker.herokuapp.com/)

Dragalia Lost has a bunch of weapons and no interface to track your crafting progress. That's where this weapon tracker comes in. This easy-to-use, mobile-friendly tracker allows you to see how many weapon materials you need for crafting each weapon from scratch to full unbind.

## Table of Contents

* [Usage](#usage)
* [Technologies](#Technologies)
* [Future](#future)
* [Questions/Contributions](#Questions/Contributions)
* [License](#license)

## Usage 

The homepage of the weapon tracker is the fire Agito weapon tracking table. On each page of the tracker, you will have a 3x3 weapon grid, a box either to the right or below this grid that says how far away you are from fully crafting a selected weapon, and a box underneath that saying how far away you are from fully crafting all weapons from this section. It should look like the screenshots below.

![Grid-and-weapon-selector](https://i.imgur.com/POeHdGi.png)
![All-weapons-of-type-crafted](https://i.imgur.com/yZZ739u.png)

At the start, all weapons of any type will be greyed out. Indicate that you have initially crafted the weapon by clicking its image. Both the box to the side and the box below will update the materials needed to fully craft that weapon.

Use the top slider to indicate how many unbinds you have paid for on the weapon. Use the bottom slider to indicate how many times you have refined the weapon. As of now, both sliders can only go up and down one state at a time. I hope to fix that soon.

The bottom two boxes are for the weapon bonus and the wyrmprint slot. Click each to indicate that you have paid for them.

As of now, only Agito and HDT weapons are trackable. More sections will be added in the future. To switch between them, click the pictures below the "Materials Needed to MUB All Weapons" box. To switch between elements in a weapon type, click the corresponding elemental pictures at the top of the screen.

## Technologies

Dragalia Weapon Tracker is a front-end app that runs on [React](https://reactjs.org/). It uses [Rebass](https://rebassjs.org/) for basic components and functionality such as the boxes and sliders. The "back-end" is the localStorage feature on your browser. As such, if the weapon tracker does not remember your data, I recommend upgrading to a more recent web browser.

## Future

I will first and foremost make the sliders fully functional. As of now, they are annoying to use because they can only go up one step at a time, or else the math would fully break.

After that, I want to make sections for the other weapon types of Chimera, Core, Void, and a joke one for the Other Weapons because they are useless.

Potentially this website could hold more information about the game, such as how many materials are dropped in each quest, and a schedule for double-drops on the voids, but that's very much future goals.

## Questions/Contributions

For any questions or ideas for contributions, please find me on GitHub or reach out by email. Please help me on the visual design, if nothing else. Reach us by the emails below: 

[Quint Turner](mailto:henryquintturner@gmail.com)

## License 

Copyright 2020 
        
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.