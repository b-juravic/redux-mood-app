const MOODS = {
  none: "no mood",
  happy: "ʘ‿ʘ",
  funny: "ಠ益ಠ",
  confused: "⁀⊙﹏☉⁀"
}

const INITIAL_STATE = { mood: MOODS.none };

// save action strings as constants [overkill here, but should use]
// const _happy = "HAPPY";
// etc. and could then programatically generate the buttons and use this variable to also
// assign the value attribute to those buttons.

function moodReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "HAPPY":
      return { ...state, mood: action.mood };

    case "FUNNY":
      return { ...state, mood: action.mood };

    case "CONFUSED":
      return { ...state, mood: action.mood };

    default:
      return state;
  }
}

const store = Redux.createStore(moodReducer);


window.onload = function () {
  const moodFace = document.querySelector("#mood-face-container");
  moodFace.innerText = store.getState().mood;

  document.querySelector("#button-container")
    .addEventListener("click", function(evt) {
      const newMood = evt.target.id;
      store.dispatch({type: `${newMood.toUpperCase()}`, mood:`${MOODS[newMood]}`});
      const currentMood = store.getState().mood;
      moodFace.innerText = currentMood;
    })

}