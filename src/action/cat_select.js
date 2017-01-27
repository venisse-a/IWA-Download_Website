export const Cat_Select = (category) => {
    return {
        type: "CATEGORY_MOVIE_CLICKED",
        payload : category
    }
};

export const Cat_Ser_Select=(category)=>{
    return {
        type:"CATEGORY_SERIE_CLICKED",
        payload: category
    }
};