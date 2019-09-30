const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3001);


app.get('/', (request, response) => {
  response.status(200).json({"hello": "world", "projectSpec": "https://frontend.turing.io/projects/whats-new.html"});
});

app.get('/api/v1/news', (request, response) => {

});

app.listen(app.get('port'), () => {
  console.log(`Whats New API server running on http://localhost:${app.get('port')}`);
});