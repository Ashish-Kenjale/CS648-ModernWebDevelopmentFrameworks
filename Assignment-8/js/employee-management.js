/*eslint-env browser*/

var employee_list;

employee_list = [["Albus Dumbledor", "Headmaster", 3213], ["Rubeus Hagrid", "Gamekeeper", 3214], ["Draco Malfoy", "Villain", 3215], ["Sirius Black", "Godfather", 3216], ["Lily Potter", "Auror", 3217]];

//Helper function to get an element from the DOM
var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

// Event handler for Delete employee button
var delEmp = function (e) {
    "use strict";
    
};

var addEmp = function (e) {
    "use strict";

    window.console.log("In addEmp()");

    var name, title, extension, header = "", msg, required;

    required = "* Required field";
    msg = "Please review your entries and complete all required fields";

    name = $("emp_name").value;
    title = $("emp_title").value;
    extension = $("emp_extension").value;

    window.console.log("in addEmp");
    if (name === "") {
        var errorContent1 = window.document.createTextNode(required);

        $("emp_name").nextElementSibling.appendChild(errorContent1);
        window.console.log("Name Sibling Element: "+$("emp_name").nextElementSibling.id);
        header = msg;
    }

    if (title === "") {
        var errorContent2 = window.document.createTextNode(required);
        $("emp_title").nextElementSibling.appendChild(errorContent2);
        // $("emp_title").nextElementSibling.nodeValue = required;
        header = msg;
    }

    if (extension === "") {
        var errorContent3 = window.document.createTextNode(required);
        $("emp_extension").nextElementSibling.appendChild(errorContent3);
        // $("emp_extension").nextElementSibling.nodeValue = required;
        header = msg;
    }

    $("registration_header").firstChild.nodeValue = header;

    if (header === msg) {
        // html = html + "<tr><td>Email:</td><td>" + email + "</td></tr>";
        // html = html + "<tr><td>Phone:</td><td>" + phone + "</td></tr>";
        // html = html + "<tr><td>Country:</td><td>" + country + "</td></tr>";
        // html = html + "<tr><td>Contact:</td><td>" + contact + "</td></tr>";
        // html = html + "<tr><td>Terms:</td><td>" + terms + "</td></tr>";
        // $("registration_info").innerHTML = html;
    } else {
        // $("registration_info").innerHTML = "";
        

        var newEmp = [name, title, extension];
        var index = employee_list.push(newEMp);

        console.log("Adding " + newEmp);
        addTableRow(index-1);
        window.alert("New employee added!");
        name = "";
        title = "";
        ext = "";

        window.console.log("submitting");

    }

    window.console.log("exiting addEmp()");
}


function addTableRow(index) {
    var table = $("employeesTable");
  
    // creating cell for employee data
    var row = document.createElement("tr");
    row.id = employees[index][2] + " row";
    for (j = 0; j < employees[index].length; j++) {
      var td = document.createElement("td");
      td.innerHTML = employees[index][j];
      td.style.border = "1px solid white";
      td.style.font = "14px arial";
      row.appendChild(td);
    }
  
    // need a cell to place the delete button in
    var td = document.createElement("td");
    td.style.border = "1px solid white";
    td.align = "center";
    row.appendChild(td);
  
    // adding delete button
    var button = document.createElement("button");
    button.innerHTML = "Delete";
    button.style.color = "white";
    button.style.background = primaryColor;
    button.style.padding = "3px 20px";
    button.style.margin = "5px 0";
    button.id = employees[index][2]+" btn";
    row.lastChild.appendChild(button);
  
    // alternating row color
    if (index%2 === 0) {
      row.style.background = secondary1;
    } else {
      row.style.background = secondary2;
    }
    table.appendChild(row);
  
}


var init = function (e) {

    // $("btn_emp_add").addEventListener("click", addEmp(e)); 
    document.getElementById("btn_emp_add").addEventListener("click", addEmp(e)); 

    

    window.console.log(employee_list);

    display(employee_list);
    window.console.log(employee_list);

}

{/* <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>John Lennon</td>
      <td>Rhythm Guitar</td>
    </tr>
  </tbody>
</table> */}
function display(employee_list) {
    "use strict";

    var i = 0;

    window.console.log(employee_list);

    $("employee_info_table").previousElementSibling.innerHTML = "Showing "+ employee_list.length + " Employees";

    $("employee_info_table").innerHTML += "<thead><tr><th>Name</th><th>Title</th><th>Extension</th><th></th></tr></thead>" +
    "<tfoot><tr><th>Name</th><th>Title</th><th>Extension</th><th></th></tr></tfoot><tbody>";

    for (i = 0; i < employee_list.length; i += 1) {
        $("employee_info_table").innerHTML += "<tr><td>"+ employee_list[i][0] + "</td><td>"+ employee_list[i][1] + "</td><td>"+ employee_list[i][2] + "</td></tr>";
    }

    $("employee_info_table").innerHTML += "</tbody>";
}

window.addEventListener("load", init);


// function display_menu() {
//     "use strict";
//     window.console.log("Welcome to the Employee Management Application");
//     window.console.log("");
//     window.console.log("COMMAND MENU");
//     window.console.log("show - Show all employees");
//     window.console.log("add - Add an employee");
//     window.console.log("del - Delete an employee");
//     window.console.log("exit - Exit the program");
//     window.console.log("");
// }
// function display(employee_list) {
//     "use strict";
//     var i = 1;
//     employee_list.forEach(function (employee) {
//         window.console.log(String(i) + ". " + employee);
//         i += 1;
//     });
//     window.console.log("");
// }
// function add(employee_list) {
//     "use strict";
//     var employee = window.prompt("Enter the employee's name");
//     employee_list.push(employee);
//     window.console.log(employee + " was added.");
//     window.console.log("");
// }
// function del(employee_list) {
//     "use strict";
//     var num, employee;
//     num = parseInt(window.prompt("Employee number to delete"), 10);
//     if (num < 1 || num > employee_list.length) {
//         window.alert("Invalid employee number.");
//     } else {
//         employee = employee_list.splice(num - 1, 1);
//         window.console.log(employee + ' was deleted.');
//         /* OR
//         delete employee_list[num - 1];
//         window.console.log("Employee number " + num + " was deleted.");
//         */
//     }
// }
// function main() {
//     "use strict";
//     var employee_list, command;
    
//     display_menu();
    
//     employee_list = ["Zak Ruvalcaba",
//                     "Sally Smith",
//                     "Fred Franklin",
//                     "John Smith",
//                     "Jane Caruthers"];
    
//     while (true) {
//         command = window.prompt("Enter command");
//         if (command !== null) {
//             if (command === "show") {
//                 display(employee_list);
//             } else if (command === "add") {
//                 add(employee_list);
//             } else if (command === "del") {
//                 del(employee_list);
//             } else if (command === "exit") {
//                 break;
//             } else {
//                 window.alert("That is not a valid command.");
//             }
//         } else {
//             break;
//         }
//     }
//     window.console.log("Program terminated.");
// }
// // main();