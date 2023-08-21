const FilterMoviesreducer = (state,action)=>{

    switch(action.type){
        case "FILTER_MOVIES":
            return{
                ...state,
                filter_movies: [...action.payload],
                all_filter_movies: [...action.payload]
        };

        case "SORTED_MOVIES":
            let getsortedvalue = document.getElementById("sort")
            let sort_value = getsortedvalue.options[getsortedvalue.selectedIndex].value;
            console.log(sort_value)
            return{
                ...state,
                sorting_value:sort_value
            }

        case "SORTING_VALUES":
            let newSortedMovies
            let allsortedmovies = [...action.payload]

            if(state.sorting_value === "Sci-Fi"){
                newSortedMovies = allsortedmovies.sort((a,b)=> a.name.localCompare(b.name))
            }

            return{
                ...state,
                filter_movies:newSortedMovies
            }
            
        case "ON_SEARCH_CHANGE":
            const {name,value} = action.payload

            return{
                ...state,
                filter:{
                    ...state.filter,
                    [name]:value
                }
            }

        case "SEARCH_FILTER_MOVIES":
            let {all_filter_movies} = state
            let tempFilterMovies = [...all_filter_movies]

            const {text, director} = state.filter

            if(text){
                tempFilterMovies = tempFilterMovies.filter((curElem)=>{
                    return curElem.moviename.toLowerCase().includes(text)
                })
            }

            if(director){
                tempFilterMovies = tempFilterMovies.filter((curElem)=>
                     curElem.director === director
                )
            }

            return{
                ...state,
                filter_movies:tempFilterMovies
            }

    default:
        return state

    }

}

export default FilterMoviesreducer