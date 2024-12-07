'use strict';


/* 6 
Use nested for loop to find max value in 2d matrix
For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
should return 9
*/

const max = (matrix) => {
    let maxValue = -Infinity; 
    
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) { 
        if (matrix[row][col] > maxValue) { 
          maxValue = matrix[row][col]; 
        }
      }
    }
    console.log(maxValue); 
  };
  
max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

/* 7 
Use for..in to calculate age for each person
For example ages({
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
  })
  should return {
  lenin: 54,
  mao: 83,
  gandhi: 79,
  hirohito: 88,
})
*/

const ages = (persons) => {
    const result = {}; 
    
    for (const person in persons) { 
      const born = persons[person].born; 
      const died = persons[person].died; 
      
      result[person] = died - born; 
    }
  
    console.log(result);
  };
  
  ages({
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
    });

