require("./db/connection");
const yargs = require("yargs");
const { addMovie } = require("./movie/method");

const app = async (yargsObj) => {
  try {
    if (yargsObj.add) {
      //add movie function that takes yargsObj terminal input
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
      console.log(`Successfully added ${yargsObj.title}`);
    } else if (yargsObj.list) {
      const filterObj = {
        [yargsObj.key]: yargsObj.val,
      };
      console.log(filterObj);
      //list movies from database
    } else if (yargsObj.update) {
      //update movies with filterObj and updateObj
    } else if (yargsObj.delete) {
      //delete movie with filterObj
    } else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);