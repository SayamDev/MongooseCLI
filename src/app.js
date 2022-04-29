require("./db/connection");
const yargs = require("yargs");
const {
  addMovie,
  deleteMovie,
  listMovie,
  updateMovie,
  specificMovies,
  specificActor
} = require("./movie/method");

const app = async (yargsObj) => {
  try {
    if (yargsObj.add) {
      //add movie function that takes yargsObj terminal input
      await addMovie({
        title: yargsObj.title,
        actor: yargsObj.actor,
        year: yargsObj.year,
      });
      console.log(`Successfully added ${yargsObj.title}`);
    } else if (yargsObj.list) {
      console.log(await listMovie());
      //list movies from database
    } else if (yargsObj.update) {
      //update movies with filterObj and updateObj
      await updateMovie({
        title: yargsObj.title,
        actor: yargsObj.actor,
        year: yargsObj.year,
      });
      console.log(`Successfully updated ${yargsObj.actor}`);
    } else if (yargsObj.delete) {
      //delete movie with filterObj
      await deleteMovie({ title: yargsObj.title });
      console.log(`Successfully deleted ${yargsObj.title}`);
    } else if (yargsObj.filter) {
      //filter list by movie 
      console.log(await specificMovies({ title: yargsObj.title }));
      console.log(await specificActor({ actor: yargsObj.actor }));
    } else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
    //this makes terminal refresh after entry has occured
    await client.close();
  }
};

app(yargs.argv);

//   const filterObj = {
//     [yargsObj.key]: yargsObj.val,
//   };

//node src/app.js --add
//node src/app.js --delete
//node src/app.js --list
//node src/app.js --update
//node src/app.js --filter 
