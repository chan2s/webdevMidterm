jQuery(document).ready(function(){

    "use strict"
    $(".slider").ripples({

        dropRadius:11,
        perturbance:0.01,

    });

            $(".text").typed({

                    strings:["<strong>Hello</strong>","<strong class='primary'>You!</strong>"],
                    typespeed:0,
                    loop:true
            });
}


)