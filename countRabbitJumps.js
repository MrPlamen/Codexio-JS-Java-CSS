function countJumps(garden) {
    let jumps = 0;
    
    for (let i = 0; i < garden.length; i++) {
      for (let j = 0; j < garden[i].length; j++) {
        if (garden[i][j]) {
          eatCarrots(garden, i, j);
          jumps++;
        }
      }
    }
  
    console.log(jumps);
  }
  
  function eatCarrots(garden, i, j) {
    if (i < 0 || i >= garden.length || j < 0 || j >= garden.length || garden[i][j] === 0) {
      return;
    }
  
    garden[i][j] = 0;
    
    eatCarrots(garden, i-1, j);
    eatCarrots(garden, i+1, j);
    eatCarrots(garden, i, j-1);
    eatCarrots(garden, i, j+1);
  }
  
  countJumps([  [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1]
  ]);
  
