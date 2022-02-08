
const parameterConverstion = (state) => {
    const new_state = {}
    Object.keys(state).map(key => {
        switch (key) {
            case "signal":
            case "ëxit_strategy":
            case "entry_strategy":
            case "retrack_days":
            case "positions":
            case "value":
            case "conservative":
                new_state[key] = state[key]
            case "desired_gain":
                new_state["req"] = state["desired_gain"]
        }
    })
}

export default parameterConverstion