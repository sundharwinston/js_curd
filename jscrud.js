var selectedRow = null

function formsubmit() {
        var formData = readFormData();
        if (selectedRow == null)
            insert(formData);
        else
            update(formData);
        resetForm();
    }

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["date"] = document.getElementById("date").value;
    formData["activity"] = document.getElementById("activity").value;
    formData["duration"] = document.getElementById("duration").value;
    return formData;
}

function insert(data) {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    name_column = newRow.insertCell(0);
    name_column.innerHTML = data.name;
    date_column = newRow.insertCell(1);
    date_column.innerHTML = data.date;
    activity_column = newRow.insertCell(2);
    activity_column.innerHTML = data.activity;
    duration_column = newRow.insertCell(3);
    duration_column.innerHTML = data.duration;
    cell6 = newRow.insertCell(4);
    cell6.innerHTML =  `<button onclick="edit(this)">Edit</button>
                        <button onclick="delete_data(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("activity").value = "";
    document.getElementById("duration").value = "";
    selectedRow = null;
}

function edit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("date").value = selectedRow.cells[1].innerHTML;
    document.getElementById("activity").value = selectedRow.cells[2].innerHTML;
    document.getElementById("duration").value = selectedRow.cells[3].innerHTML;
}
function update(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.date;
    selectedRow.cells[2].innerHTML = formData.activity;
    selectedRow.cells[3].innerHTML = formData.duration;
}

function delete_data(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        resetForm();
    }
}
