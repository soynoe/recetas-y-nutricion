// maneja el menu
function action(){
     console.log('button working');
           var ancla=document.getElementsByClassName('nav-enlace');
           for(var i=0; i <ancla.length; i++)
                ancla[i].classList.toggle('dissapear');
}

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

//cuando hago click en cada punto
     //Saber la posicion de ese punto
     //aplicar un transform translatex al grande
     //quitar la clase activo de todos los puntos
     //añadir la clase activo al punto que hicimos click

     punto.forEach( ( cadapunto, i)=> {
          punto[i].addeventlistener('click',()=>{

               let posicion = i
               let operacion = posicion * -50

               grande.style.transform = `translateX(${ operacion }%)`

               punto.forEach( (cadapunto , i)=>{
                    punto[i].classlist.remove('activo')
               })
               punto [i].classlist.add('activo')

})
     })
