$(function () {

    //saving dom objects to variables
    var container = $('#container');
    var bird = $('#bird');
    var pole = $('.pole');
    var pole_1 = $('#pole_1');
    var pole_2 = $('#pole_2');
    var score = $('#score');
    var speed_span = $('#speed');
    var restart_btn = $('#restart_btn');

    //saving some initial setup
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var pole_initial_position = parseInt(pole.css('right'));
    var pole_initial_height = parseInt(pole.css('height'));
    var bird_left = parseInt(bird.css('left'));
    var bird_height = parseInt(bird.height());
    var speed = 10;
    speed_span.text(speed);

    //other declarations
    var go_up = false;

    var the_game = setInterval(function () {

        var pole_current_position = parseInt(pole.css('right'));
        
        //check whether the poles went out of the container or not
        if (pole_current_position > container_width) {
            
            var new_height = parseInt(Math.random() * 100);

            //Change the poles height
            pole_1.css('height', pole_initial_height + new_height);
            pole_2.css('height', pole_initial_height - new_height);

            //increase speed
            speed = speed + 5;
            speed_span.text(speed);
            
            pole_current_position = pole_initial_position;
        }

        //move the poles
        pole.css('right', pole_current_position + speed);

        if (go_up === false) {
            go_down();
        }
    }, 40);

    $(document).on('taphold', function(e){
        var taphold = e.type;
        console.log(taphold);
        if(taphold && go_up === false){
            go_up = setInterval(up, 25);
        }
    });

    
    $(document).on('taphold', function(e){
        var taphold = e.type;
        console.log(taphold);        
        if(taphold){
            clearInterval(go_up)
            go_up = false;
        }
    });

    $(document).on('mousedown', function(e){
        var mouse = e.type;
        if(mouse && go_up === false){
            go_up = setInterval(up, 25);
        }
    });

    
    $(document).on('mouseup', function(e){
        var mouse = e.type;
        if(mouse){
            clearInterval(go_up)
            go_up = false;
        }
    });

    $(document).on('keydown', function(e){
        var key = e.keyCode;        
        var mouse = e.mouse;
        if(key === 32 && go_up === false){
            go_up = setInterval(up, 25);
        }
    });

    $(document).on('keyup', function(e){
        var key = e.keyCode;
        if(key === 32){
            clearInterval(go_up)
            go_up = false;
        }
    });

    function up() {
        bird.css('top', parseInt(bird.css('top')) - 5);
    }
    
    function go_down() {
        bird.css('top', parseInt(bird.css('top')) + 5);
    }
 
});
