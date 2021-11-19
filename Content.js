import React from 'react';

const Content = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return ( 
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                    <img src={movie.Poster} alt='Movie'></img>
                    <div 
                        onClick={() => props.handleFavouritesClick(movie)} 
                        className='overlay d-flex align-items-center justify-content'
                        >
                            <FavouriteComponent />
                        </div>
                        
                </div>
            ))}
        </>
     );
};
 
export default Content;
