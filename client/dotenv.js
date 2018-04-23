if (process.env.NODE_ENV !== 'production') {
  import dotenv from 'dotenv';
  console.log("not prod");
  dotenv.load();
}