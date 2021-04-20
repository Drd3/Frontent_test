# Tecnologias usadas

- Sass

# Tecnologias CSS usadas

- Grid System
- Flexbox
- Media Quieries

# Pasos para ejecutar

Para poder visualizar la pagina, simplemente abra el archivo "index.html".

Si desea enlazar los arhivos Sass junto a los CSS copie y ejecute el siguiente codigo en la consola de comandos. (Este paso mensionado no es necesario para poder ver la pagina ejecutando 'index.html')

> sass --watch sass:css

# Descripciones

## CSS y Sass

Para el desarrollo de los estilos aplicados en el HTML, se modularizo el codigo CSS mediante la implementacion de Sass. De esta manera, los estilos de la pagina quedaron divididos en 'header.scss', 'body.scss' y 'footer.scss'. Estos son ejecutados desde main.scss. 

Los codigos colores se encuentran en el 'variables.scss'.

En el archivo 'breakpoints.scss', se encuentra informacion relativa al responsive de la pagina: Breakpoints y un Mixin de un media Query general para los contenedores de la pagina.

## JS

En el archivo Js se encuentra el codigo de el funcionamiento del boton que activa la lista de lenguajes y el codigo que obtiene el valor del tributo 'attr-currency'.


### Dato adicional.
El svg 'instagram.svg' no contenia un vector del icono de instagram, sino uno de Twitter. EL icono observable en la pagina enviada se obtuvo a travez de el archivo 'test frontend ux.xd' (que se me fue enviado para realizar la prueba) copiando el codigo SVG del icono que se encontraba en la platilla y reemplazandolo.