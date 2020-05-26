// from data.js
var tableData = data;

// YOUR CODE HERE!

// Display the Dataset

tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select the Submit Button
var submit = d3.select("#filter-btn");

//Click-Event of Datetime Filter
submit.on("click", function() {

// Remove Existing Table
d3.select("tbody").html("");

// Prevent the Page from Refreshing
d3.event.preventDefault();

// Get the Value Property of the input element
var dateTime = d3.select("#datetime").property("value");
console.log(dateTime);

// Filter Report
var filteredData = tableData.filter(record => record.datetime === dateTime);
console.log(filteredData);

// Display the Filtered Dataset
filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});

