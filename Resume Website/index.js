let cursor=document.querySelector('.cursorGlow')
document.addEventListener('mousemove',(e)=>{
    cursor.style.left=e.clientX+'px';
    cursor.style.top=e.clientY+'px';
})

