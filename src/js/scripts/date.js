class CurrentDate {

    constructor(){
        // var currentDate= document.querySelector("#date");
        this.event();
    }
    event(){
        getCurrentDay();
    }

}
function getCurrentDay(){
    const date = new Date();
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.querySelector("#day").innerHTML = weekDays[date.getDay()];

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.querySelector("#date").innerHTML = months[ date.getMonth()] + " " + date.getDate() + ", "+ date.getFullYear();
      
}

export default CurrentDate;