import {combineReducers} from 'redux';
import Categories from './categories';
import Active_Category from './cat_active';
import Movies from './movies';
import Active_Movie from './mov_active';


const allReducers = combineReducers({
    categories : Categories,
    movies : Movies,
    activeMovie : Active_Movie,
    activeCategory : Active_Category
});

export default allReducers;