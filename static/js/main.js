console.log(data);

var filter_button = d3.select("#filter-btn");
// give reference to tbody
var tbody = d3.select("tbody");

// Things to do when filter_button is clicked.
filter_button.on("click", function(){
    
    d3.event.preventDefault();
    // 1. grab what user put in
    var user_input = d3.select("#datetime").node().value;

    // clear input value
    d3.select("#datetime").node().value = "";

    // 2. using user_input to filter appropriately.
    // create an Array of items that match user_input
    var filtered_data = data.filter(x => x.datetime === user_input);

    // 3. Pass it to build a Table
    Build_table(filtered_data);
});

function Build_table(filtered_data){
    // Change HTML content of <tbody>
    document.getElementsByTagName("tbody")[0].innerHTML='';
    filtered_data.forEach((obj => {
        // Create table rows for each object
        var row = tbody.append("tr");
        Object.entries(obj).forEach(function(x){
            // Create cell within current row.
            var cell = row.append("td");
            // give cell a value
            cell.text(x[1]);
        });
    }));

};



