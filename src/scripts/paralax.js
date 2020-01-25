const paralax = document.querySelector('.parallax');
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {
  
    const divider = layer.dataset.speed;
    const strafe = wScroll * divider ;

    layer.style.transform = `translateY(-${strafe}%)`;
}

window.addEventListener('scroll', e=>{
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
})