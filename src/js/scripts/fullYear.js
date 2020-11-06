class CurrentYear{
    constructor(){
        var currentYear = document.querySelector("#currentYear");
        this.event();
    }
    event(){
        if(currentYear != null){
            currentYeAr();
        }
    }
}

//Get Current Year
function currentYeAr(){
    let date = new Date();
    let year = date.getFullYear();
    currentYear.textContent = year;
}

export default CurrentYear;