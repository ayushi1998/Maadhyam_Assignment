var letter,select,active,a,ptr,ans;

a=['C','A','T']

active=1;
ptr=1;
ans=['a','b','c'];
document.querySelector('.btn'+1).addEventListener('click', function() {
    
    select=document.querySelector('.btn'+1).textContent;
    console.log(select)
    var val=document.querySelector('.text'+active).textContent;
    console.log(val);
    
    
    // If the active_pos is empty and the letter selected is correct

          next();
});


document.querySelector('.btn2').addEventListener('click', function() {
    select=document.querySelector('.btn2').textContent;
    console.log(select)
    var val=document.querySelector('.text'+active).textContent;
  
    next();
 
});

document.querySelector('.btn3').addEventListener('click', function() {
    select=document.querySelector('.btn'+3).textContent;
    console.log(select)
        var val=document.querySelector('.text'+active).textContent;

            
            next();

});
document.querySelector('.btn4').addEventListener('click', function() {
    select=document.querySelector('.btn'+4).textContent;
    console.log(select)
        var val=document.querySelector('.text'+active).textContent;

    next();
  
});
document.querySelector('.btn5').addEventListener('click', function() {
    select=document.querySelector('.btn'+5).textContent;
    console.log(select)
        var val=document.querySelector('.text'+active).textContent;
   next();

 
});
document.querySelector('.btn6').addEventListener('click', function() {
    
 select=document.querySelector('.btn'+6).textContent;
    console.log(select)
        var val=document.querySelector('.text'+active).textContent;

            next();
         
});




document.querySelector('.btna').addEventListener('click', function() {
    
 document.querySelector('.text1').textContent='_';
    active--;
 
    
});
document.querySelector('.btnb').addEventListener('click', function() {
    
 document.querySelector('.text2').textContent='_';
    active--;
 
    
});
document.querySelector('.btnc').addEventListener('click', function() {
    
 document.querySelector('.text3').textContent='_';
    active--;
 
    
});

function next()
{
       if( a[ptr-1]==select)
                {
                    // CHANGE CSS 1. MAKE IT FIXED 2.CHANGE COLOUR OF TEXT
                    document.querySelector('.text'+active).style.color='aquamarine';           // document.querySelector('.btn1'+active).disaplay='none';
                    document.querySelector('.text'+active).style.backgroundColor='white';
                    document.querySelector('.btn'+ans[ptr-1]).setAttribute('disabled','true');
                    document.querySelector('.btn'+ans[ptr-1]).classList.add('noHover');
                    document.querySelector('.btn'+ans[ptr-1]).style.pointerEvents='none';
                  
                  
                    ptr++;
                    
                    
                }
                      
            
                 
            val=select;
            document.querySelector('.text'+active).textContent=select;
            active++;
    
    console.log(ptr);
    if(ptr==4)
        {
            
            alert("You have guessed it right!")
        }

}