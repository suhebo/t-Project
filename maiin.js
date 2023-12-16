const value = document.querySelector("#value")

const incrementButton = document.querySelector("#IncrementBtn")
const resetButton = document.querySelector("#ResetBtn")
const decrementButton = document.querySelector("#DecrementBtn")

let startValue = 0
incrementButton.addEventListener("click", function(){
{
    startValue++;
    value.innerHTML = startValue
    
    if(startValue ==10)
    {
        value.style.color = "red"
    }
    else
    {
        value.style.color = "black"
    }

}})




decrementButton.addEventListener("click", function(){
    if (startValue >0)
{
    startValue-=1;
    value.innerHTML = startValue
}
{
    if(startValue ==10)
    {
        value.style.color = "red"
    }
    else
    {
        value.style.color = "black"
    }
}
})



let endValue = 0
resetButton.addEventListener("click", function()

{
    startValue--;
    value.innerHTML = endValue
})

