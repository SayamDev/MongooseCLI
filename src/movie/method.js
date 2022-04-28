const Movie = require("./model");

exports.addMovie = async (movieObj) => {
  try {
    await Movie.create(movieObj);
  } catch (error) {
    console.log(error);
  }
};


exports.deleteMovie = async(movieObj) => {
    try {
        await Movie.deleteOne(movieObj)
    } catch (error) {
        console.log(error)
    }
}