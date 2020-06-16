let count = 0;

//select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn');
console.log(btns); //nodelist

btns.forEach(function(item){
    item.addEventListener('click', function(e){
     console.log(e.currentTarget);
   const styles = e.currentTarget.classList;

   if(styles.contains('decrease') && !count == 0){
       count --;
   }
    else if(styles.contains('increase')){
        count ++;
    }
    else {
        count = 0
    }
   value.textContent = count;
    })
})