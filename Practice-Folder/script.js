console.log('script.js linked');
var submitBtn = $("submitBtn");

function handleFormSubmit () {
    event.preventDefault();
    var fname = document.querySelector("#fname").value;
    var mname = document.querySelector("#mname").value;
    var lname = document.querySelector("lname").value;

    /* jQuery version of the above ^^
    var fname = $("#fname").val();
    var mname = $("#mname").val();
    var lname = $("#lname").val();
    */

    /*
    DOM Traversal
    var fname = submitBtn.siblings("#fname").val();
    var mname = submitBtn.parent().children('#mname).val();
    */
    var elFullName = document.querySelector("fullName").value;
    var storedArray = [fname, mname, lname];
    for (var i = 0; i < storedArray.length; i++){
        var element = storedArray[i];
        var newEl = document.createElement("li");
        /*
        jQuery way of creating an element
        var newEl = $("{<li>");
        */
        newEl.textContent = element;
        /*
        jQuery way of writing the above ^^
        newEl.text(element);
        */
        elFullName.append(newEl);
    }
    // elFullName.textContent = fname + " " + mname + " " + lname;
    // or you can write this ^^ different in a shorthand way below using the back ticks and ${}
    // elFullName.textContent = `${fname} ${mname} ${lname}`
    var storedData = {
        fname,   //shorthand that will be the key and value in an object
        mname,   //shorthand that will be the key and value in an object
        lname,   //shorthand that will be the key and value in an object
    };
    // The above can also be written as var storedData = {fname, mname, lname};
    console.log(storedData);

    var stringData = JSON.stringify(storedData); //Turn JSON data into a string to store into the local storage
    localStorage.setItem("storedData", stringData)  //store locally (both have to be a string value to be stored in the local storage)
 }
// function undefinedData () {
//     return "banana bread";
// }
// var data = undefinedData ();    //If you leave a function empty and call it, it will automatically show as undefined
//  console.log(data);

document.addEventListener("submit", handleFormSubmit);
/*
jQuery version of the above ^^
$("#submitBtn").on("click", handleFormatSubmit)

OR if you have the submit button declared at the top as a variable you can do the following

submitBtn.on("click", handleFormSubmit)
*/
