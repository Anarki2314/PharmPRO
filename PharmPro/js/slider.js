const buttons=document.querySelectorAll('.advantages_slide_arrow')
buttons.forEach(button => {
    button.addEventListener('click',function () {
        const slides=document.querySelectorAll('.advantages_slide');
        slides.forEach(slide => {
            slide.classList.toggle('active');
        });
        const btns=document.querySelectorAll('.advantages_slide_arrow');
        btns.forEach(btn => {
            btn.classList.toggle('active');
        });
     })
});
