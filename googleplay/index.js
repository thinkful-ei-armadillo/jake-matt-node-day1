const express = require('express');
const playstore = require('./playstore');
const app = express();

app.get('/apps', (req, res) => {

  const { sort = '', genres } = req.query;
  const genre = ['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'];

  if(sort){
    if(!['Rating','App'].includes(sort))
    return res.status(400).send('Must be rating or app...');
  } 
  
  if (!genre.includes(genres))
    return res.send('Must be Action, Puzzle, Strategy, Casual, Arcade, or Card');

  let results = playstore.filter(app =>
    {
      return app.Genres.toLowerCase().includes(genres.toLowerCase());
    });

    if(sort){
      results.sort((a,b) =>{
        
         return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
     
      });
    }
  res.json(results);
});


app.listen(8080, () => {
  console.log('Listening on port 8080');
});