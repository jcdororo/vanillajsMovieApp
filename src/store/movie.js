import { Store } from "../core/heropy";

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: []
})

export default store
export const searchMovies = async page => {
  store.state.page = page;
  if (page === 1){
    store.state.movies = [];
  }
  //7035c60c
  const res = await fetch(`https://omdbapi.com?apikey=52c458e9&s=${store.state.searchText}&page=${page}`)
  const { Search, totalResults } = await res.json();
  store.state.movies = [
    ...store.state.movies,
    ...Search
  ]
  store.state.pageMax = Math.ceil(Number(totalResults) / 10)
}