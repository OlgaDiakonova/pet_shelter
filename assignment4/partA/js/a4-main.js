var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = function () {

    loadTableWithFilters();

}

function filterDog() {

    filterType = "dog";
    loadTableWithFilters();

}

function filterCat() {

    filterType = "cat";
    loadTableWithFilters();

}

function filterBird() {

    filterType = "bird";
    loadTableWithFilters();

}

function filter_zero_1() {

    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
}

function filter_1_3() {

    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
}

function filter_4_plus() {

    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

function filterAllPets(){

    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();

}


function loadTableWithFilters() {

    var main_tb = document.querySelector("#main-table-body");
    main_tb.innerHTML = "";
    
    petData.forEach(function(element){
   
        if ((filterType == "" ? true:element.type == filterType) && element.age >= filterAgeMin && element.age <= filterAgeMax) {
        var tr = document.createElement("tr");

        var td_photo = document.createElement("td");
        var td_img = document.createElement("img");
        td_img.src = element.image.src;
        td_img.alt = element.image.alt;
        td_img.height = element.image.height;
        td_img.width = element.image.width;
        td_photo.appendChild(td_img)
        tr.appendChild(td_photo);

        var td_descr = document.createElement("td");
        var td_name = document.createElement("h4");
        td_name.innerHTML = element.name;
        td_descr.appendChild(td_name);
        var td_par = document.createElement("p");
        td_par.innerHTML = element.description;
        td_descr.appendChild(td_par);

        var td_age = document.createElement("span");
        td_age.innerHTML = "Age: " + element.age + " years old.";
        td_descr.appendChild(td_age);
        tr.appendChild(td_descr);

        main_tb.appendChild(tr);

        }

        
    
    })

}