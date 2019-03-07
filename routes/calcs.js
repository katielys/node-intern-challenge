const router = require('express').Router();

function fat (n) { 
   if (n == 0 || n == 1)
    return 1;
  if (fat[n] > 0)
    return fat[n];
  return fat[n] = fat(n-1) * n;
}

function fib (n){
	let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr[n]
}

router.post('/fat', (req, res) => {
  const {n} = req.body;

  if (!n) {
    res.sendStatus(400);
  }

  res.json({result: fat(n)});
});

router.post('/fib', (req, res) => {
  const {n} = req.body;

  if (!n) {
    res.sendStatus(400);
  }

  res.json({result: fib(n)});
});
module.exports = router;
