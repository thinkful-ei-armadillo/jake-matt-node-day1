'use strict';

const express = require('express');

const app = express();

/*******************************************************************/

app.get('/sum', (req, res) => {
  const { a, b } = req.query;

  if (!a) {
    return res.status(400).send('a is required');
  }

  if (!b) {
    return res.status(400).send('b is required');
  }

  res.send(`${Number(a)} + ${Number(b)} = ${Number(a) + Number(b)} `);
});

/*******************************************************************/

app.get('/cipher', (req, res) => {
  const { text, shift } = req.query;

  const shiftNum = Number(shift);

  const cipher = text
    .toUpperCase()
    .split('')
    .map(word => {
      return word.charCodeAt(0) + shiftNum;
    });

  const newCipher = cipher
    .map(num => {
      return String.fromCharCode(num);
    })
    .join('');

  res.send(newCipher);
});

/*******************************************************************/

app.get('/lotto', (req, res) => {
  const {num} = req.query;

  const randomNums = [];
  for(let i = 0; i<6 ; i++){
    randomNums.push(Math.round(Math.random() * 20)+1);
  }

  const newNum = num.map((num) => 
    Number(num)
  );

  const check = [];

  for(let i = 0; i < randomNums.length; i++){
    ( check.push(randomNums.includes(newNum[i])));
  }

  // if(newNum.length !== 3){
  //   return res.status(400).send('please give exactly 6 numbers');
  // }

  
  

  res.send(check);

});


app.listen(8080, () => {
  console.log('server started on 8080');
});
