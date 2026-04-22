
> Open this page at [https://tiilt-lab-code.github.io/passing-and-communication/](https://tiilt-lab-code.github.io/passing-and-communication/)

## Purpose

This is a **Passing and Communication Game** for micro:bit devices. The program enables teams to play a timed passing game where players pass a "ball" to each other using radio communication between multiple micro:bits. One device acts as a coach that starts and manages the game, while other devices represent players. The game tracks the total number of passes completed within a 30-second round.

## How to Use

### Setup
1. Load this program onto multiple micro:bit devices (one for coach, one or more for players)
2. All devices must be on the same radio group (default: Group 13)

### Coach Device
- **Activate Coach Mode**: Press buttons **A + B** together. The device will display "C"
- **Add Players**: Players press button **A** to register themselves. The coach device will display the number of registered players
- **Adjust Difficulty**: Press button **B** to decrease the delay between passes (range: 10 down to 1). The delay is displayed after each press
- **Start Game**: Once players are registered, press button **A** to begin the 30-second game round
- **Track Passes**: Press the **logo button** to increment the pass counter during the game
- When time expires, the device plays a sound and displays the total number of passes

### Player Devices
- **Register**: Press button **A** to send "add" message to the coach (displays when coach is in setup mode)
- **Play**: During the game, your device will receive a player's serial number. Pass the device to that player
- **Visual Feedback**: The device displays a heart icon during the game

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/tiilt-lab-code/passing-and-communication** and import

## Edit this project ![Build status badge](https://github.com/tiilt-lab-code/passing-and-communication/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/tiilt-lab-code/passing-and-communication** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/tiilt-lab-code/passing-and-communication/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
