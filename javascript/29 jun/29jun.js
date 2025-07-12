/*const list =["banana","mango","graphes"];
const ullist=document.querySelector('#list');
const ulel=list.map(value =>{
    const ulel=document.createElement('li');
    ullist.innerText=value;
    return ulel;
})
console.log(ulel[0]);
ulel.append(...ulel);
*/

// const tablecontainer=document.querySelector('.table-container');

// const table1=document.createElement('table');
// table1.border="1";

// //row 1
// const row1=document.createElement('tr')

// //cell 1
// const cell1=document.createElement('td');
// cell1.innertext='row 1 col 1'

// row1.append(cell1);

// //cell 2
// const cell2=document.createElement('td');
// cell2.innerText='row 1 col 2'

// row1.append(cell2);
// table1.append(row1);
// tablecontainer.append(table1);

function generateTable(){
    const tablecontainer=document.querySelector('.table-container');

    const table1=document.createElement('table');
    table1.border="1";

    for(let i=0;i<3;i++){
        const row1=document.createElement('tr');

        for(let j=0;j<2;j++){
            const cell1=document.createElement('td');
            cell1.innerText=`row ${i+1} col ${j+1}`
            row1.appendChild(cell1); 
        }
    }
    table1.appendChild(row1)
    
}
const btn=document.querySelector('#generate-table');
btn.addEventListener("click" ,function(){
    generateTable();
})