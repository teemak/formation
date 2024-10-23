/*
'''
❓ PROMPT
Our team is working on developing an indicator for Battery State for our new electric vehicle.
We are tasked to make a visual representation of the vehicle's battery status.
The indicator should provide a visual representation of the battery's charge level, from 0% to 100%, in increments of 10%.
The battery level should be represented as a series of pills where each pill represents 10% of the battery's charge.

Acceptance Criteria:

The program correctly initializes the battery status based on the provided percentage.
The program correctly displays the current battery status, with one 'charged' pill for every 10% of charge and 'discharged' pills for the remaining charge.
The displayed battery status matches the provided examples when the battery is at 0%, 10%, 20%, ..., 100% charge rounding down.
The program correctly handles edge cases, such as a charge level above 100% or below 0%.

* The ASCII battery bounds must match those shown in the examples.
  Specifically:
    * battery is indented by 4 blank spaces (please do not show
      battery percentage as number)
    * battery has a 'top' ('||') in the middle line
    * Top and bottom of battery must only consist of the '|' and '='
      characters.
    * Lit pills must indicate being lit by the 'XX' characters. As a
      final example, here is a battery representation output by a
      fully implemented `show_battery` function for a battery at 100%

The base code can be found below in the Planning section!

 |====================|
 |XXXXXXXXXXXXXXXXXXXX|
 |XXXXXXXXXXXXXXXXXXXX||
 |XXXXXXXXXXXXXXXXXXXX|
 |====================|

Example(s)
let battery = new Battery(75);
console.log(battery.showBattery());
// Output:
//     |====================|
//     |XXXXXXXXXXXXXX      |
//     |XXXXXXXXXXXXXX      ||
//     |XXXXXXXXXXXXXX      |
//     |====================|

battery = new Battery(30);
console.log(battery.showBattery());
// Output:
//     |====================|
//     |XXXXXX              |
//     |XXXXXX              ||
//     |XXXXXX              |
//     |====================|
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT

# Python
DISCHARGED = ' ' * 2
CHARGED = 'X' * 2

class Battery:
    def __init__(self, percent=0):
        pass 

    def update_charge_state(self, percent):
        # Calculates charge based on given percentage
        pass

    def update_battery_indicator(self):
        # Read the battery charge and update pill states for the indicator
        pass

    def show_battery(self):
        # Show battery indicator
        return

// Javascript
const DISCHARGED = '  ';
const CHARGED = 'XX';

class Battery {
    constructor(percent=0) {}

    updateChargeState(percent) {
        // Calculates charge based on given percentage
    }

    updateBatteryIndicator() {
        // Read the battery charge and update pill states for the indicator
    }

    showBattery() {
        // Show battery indicator
        return
    }
}

 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

const CHARGED = 'XX';
const DISCHARGED = ' ';

class Battery {
    constructor(percent = 0) {
        // valid input is [0 < percent < 100]
        percent = Math.max(0, Math.min(100, percent));
        this.updateChargeState(percent);
    }

    updateChargeState(percent) {
        this.chargedPills = Math.floor(percent / 10);
    }

    updateBatteryIndicator() {
        let pills = CHARGED.repeat(this.chargedPills);
        let empty = DISCHARGED.repeat(20 - pills.length);
        return pills += empty;
    }

    showBattery() {
        let pills = this.updateBatteryIndicator();
        const border = '    |====================|';
        const middle = `    |${pills}|`;
        const middleHandle = `    |${pills}||`;

        return `${border}\n${middle}\n${middleHandle}\n${middle}\n${border}`;
    }
}

// let level = 0;
// let level = 75;
// let level = 80;
let level = 40;
let result = new Battery(level).showBattery();
console.log(`LEVEL: ${level}%`);
console.log(result);

// Test Cases
let testCases = [
  // Test Case 1
  [new Battery(75).showBattery(), "\
    |====================|\n\
    |XXXXXXXXXXXXXX      |\n\
    |XXXXXXXXXXXXXX      ||\n\
    |XXXXXXXXXXXXXX      |\n\
    |====================|"],

  // Test Case 2
  [new Battery(-50).showBattery(), "\
    |====================|\n\
    |                    |\n\
    |                    ||\n\
    |                    |\n\
    |====================|"],

  // Test Case 3
  [new Battery(30).showBattery(), "\
    |====================|\n\
    |XXXXXX              |\n\
    |XXXXXX              ||\n\
    |XXXXXX              |\n\
    |====================|"],

  // Test Case 4
  [new Battery(750).showBattery(), "\
    |====================|\n\
    |XXXXXXXXXXXXXXXXXXXX|\n\
    |XXXXXXXXXXXXXXXXXXXX||\n\
    |XXXXXXXXXXXXXXXXXXXX|\n\
    |====================|"],

  // Test Case 5
  [new Battery(0).showBattery(), "\
    |====================|\n\
    |                    |\n\
    |                    ||\n\
    |                    |\n\
    |====================|"],

  // Test Case 6
  [new Battery(80).showBattery(), "\
    |====================|\n\
    |XXXXXXXXXXXXXXXX    |\n\
    |XXXXXXXXXXXXXXXX    ||\n\
    |XXXXXXXXXXXXXXXX    |\n\
    |====================|"],

  // Test Case 7
  [new Battery(40).showBattery(), "\
    |====================|\n\
    |XXXXXXXX            |\n\
    |XXXXXXXX            ||\n\
    |XXXXXXXX            |\n\
    |====================|"]
];

testCases.forEach((testCase, i) => {
    let [output, expected] = testCase;
    let result = output === expected ? "PASS" : "FAIL";
    console.log(`Test Case ${i+1}: ${result}`);
    if (result === "FAIL") {
        console.log(`Expected: ${expected}`);
        console.log(`Output: ${output}`);
        console.log();
    }
});
