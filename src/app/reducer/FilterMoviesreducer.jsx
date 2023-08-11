const FilterMoviesreducer = (state,action)=>{

    switch(action.type){
        case "FILTER_MOVIES":
            return{
                ...state,
                filter_movies: [...action.payload],
                all_filter_movies: [...action.payload]
            };

    default:
        return state

    }

}

export default FilterMoviesreducer