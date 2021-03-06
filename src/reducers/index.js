import {combineReducers} from 'redux';
import Categories from './categories';
import Active_Movie_Category from './cat_active';
import Movies from './movies';
import Active_Movie from './mov_active';
import Series_Categories from './categories_series';
import Users from './user';
import Active_Serie from './ser_active'
import Series from './series'


const allReducers = combineReducers({
    users : Users,
    categories : Categories,
    categories_series : Series_Categories,
    movies : Movies,
    series : Series,
    activeMovie : Active_Movie,
    activeSerie : Active_Serie,
    active_movie_category : Active_Movie_Category
});

export default allReducers;