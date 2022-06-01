exports.movieListResponse = (movies) => {
    movieResult = [];
    movies.forEach(movie => {
       movieResult.push({
            name: movie.name,
            description: movie.description,
            cast: movie.cast, 
            director: movie.director,
            trailerUrls: movie.trailerUrls,
            posterUrls: movie.posterUrls,
            language: movie.language,
            releaseDate: movie.releaseDate,
            releaseStatus: movie.releaseStatus,
            imdbRating: movie.imdbRating,
            id: movie._id,
            createdAt: movie.createdAt,
            updatedAt: movie.updatedAt 
       });   
    });
    return movieResult;
}

exports.userSignUpObject = (user) => {
    return {
        name: user.name,
        userId: user.userId,
        email: user.email,
        userType: user.userType,
        createdAt: user.createdAt,
        updatedAt: user.updatedAtc
    }   
}
exports.userSignInObject = (user) => {
    return {
        name: user.name,
        userId: user.userId,
        email: user.email,
        userType: user.userType,
        accessToken: user.token
    }   
}

