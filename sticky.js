
var hide_Show = document.querySelector('.menu_list');
var display =0; 

function hideShow(){
    if(display==1)
    {
        hide_Show.style.display='block';
        display=0;
    }
    /*
else
{
    hide_Show.style.display='none';
    display=1;
}
    */
}



function closses(){
    hide_Show.style.display='none';
    display=1;
}
   
   
   
    /*
        if(display==1)
        {
            hide_Show.style.display='block';
            display=0;
        }
    else


    {
        hide_Show.style.display='none';
        display=1;
    }
}
*/