export const initialState = { // crear estados
    cities: [], //estado inicial de cities
    citiesNew: [],
    user: null,
    itineraries:[]
   
}

export const accionType = { // mis accioness
    CITIESDB: "CITIESDB",
    USERDB: "USERDB",
    FILTER: "FILTER",
    ITINIERARIES: "ITINIERARIES"

}

const reducer = (state, action) => {

    switch (action.type) {
        case "CITIESDB":
           
            return {
                ...state,
                cities: action.cities,
                citiesNew: action.cities
            }
            case "USERDB":
                return {
                    ...state,
                    user: action.user
                }
                case "FILTER":
                    return {
                        ...state,
                        citiesNew: action.citiesNew
                    }
                    case "ITINIERARIES":
                       
                        return {
                            ...state,
                            itineraries: action.itineraries
                        }
                                    
        default: return state
    }

   
}

export default reducer;