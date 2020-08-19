$(document).ready(function(){
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
 
    var hourBlocks = [{0: 0,
    1 : $('#1'), 
    2 : $('#2'), 
    3 : $('#3'), 
    4 : $('#4'), 
    5 : $('#5'), 
    6 : $('#6'), 
    7 : 7, 
    8 : 8, 
    9 : $('#9'),
    10 : $('#10'), 
    11 :$('#11'), 
    12 : $('#12'),
    }];
   
    var currentHour = moment().format('h');
   
    for (var i = 1; i < 13; i++){
        let hour = hourBlocks[0][i];
        
        if (parseInt(hour) === parseInt(currentHour)){        
            $('.chngBackgrd').addClass("bg-danger");
        }if (parseInt(hour) < parseInt(currentHour)){
            $('.chngBackgrd').addClass("bg-secondary");
        }if (parseInt(hour) > parseInt(currentHour)){
            $('.chngBackgrd').addClass("bg-success");
        };
    };

    $(".save").click(function(){   
        var input = $(this).siblings(".chngBackgrd").val()
        var whichHour = $(this).siblings(".chngBackgrd").attr("id")
        localStorage.setItem(whichHour, input);
    });

    $(".chngBackgrd").
});