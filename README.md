# VueSchool Clock Challenge 🕒

## The Challenge

We've built a digital clock component, but something's not ticking! The clock shows the initial time but refuses to update. Can you help us fix it?

### Expected Behavior ✨

- Time updates every second
- Shows AM/PM period indicator accurately according to the time
- Clock keeps running until component unmounts

### Current Behavior 🐛

- Clock shows initial time but freezes
- Period indicator (AM/PM) is static

## Your Mission 🚀

1. Examine the code in:
   - `src/components/DigitalClock.vue`
   - `src/composables/useTimeFormat.js`
2. Find out why the time isn't updating every second
3. Implement a solution that makes the clock work as expected
4. Ensure proper cleanup when the component unmounts

### Hints 💡

- You only need to change the `useTimeFormat.js` composable
- Think about how reactivity and computed properties work in Vue
- Remember to handle component lifecycle

Good luck! Time is ticking... ⏰
