$(document).ready(function(){
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
 
    let currentHour = moment().hours();

    $(".hBlock").each(function (){
        let hour = parseInt($(this).attr("id"));
        console.log(hour);
    
        if (hour === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        else if (hour > currentHour) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
        else {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
    });
    
    $(".save").click(function(){   
        var input = $(this).siblings(".hBlock").val()
        var whichHour = $(this).siblings(".hBlock").attr("id")
        localStorage.setItem(whichHour, input);
    });

    $("#9").val(localStorage.getItem("9"))
    $("#10").val(localStorage.getItem("10"))
    $("#11").val(localStorage.getItem("11"))
    $("#12").val(localStorage.getItem("12"))
    $("#13").val(localStorage.getItem("13"))
    $("#14").val(localStorage.getItem("14"))
    $("#15").val(localStorage.getItem("15"))
    $("#16").val(localStorage.getItem("16"))
    $("#17").val(localStorage.getItem("17"))
    
});