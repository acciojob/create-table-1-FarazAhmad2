function insert_Row() {
    //Write your code here
	let myTable = document.getElementById('sampleTable');
  let newRow = myTable.insertRow(0);

  // Insert cells into the new row
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);

  // Set the content of the cells
  cell1.textContent = "New Cell1";
  cell2.textContent = "New Cell2"; 
}
