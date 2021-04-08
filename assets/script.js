function displaytime(){
    var datetime=moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(datetime);
}

setInterval(displaytime,0);

for (let i = 1; i < 10; i++) {
    $('.timeOfDay' + i ).addClass('present')
}
for (let i = 1; i < 10; i++) {
    $('.timeOfDay' + i ).addClass('past')
}
for (let i = 1; i < 10; i++) {
    $('.timeOfDay' + i ).addClass('future')
} 

