## Proyecto grupal para el curso de UX - Plataforma de venta de celulares y accesorios "FlashStore"
Esta es una aplicación de tienda en línea construida con **React** para el frontend y **Node.js** con **Express** para el backend. Utiliza **MySQL** como base de datos para gestionar la información de los productos, usuarios y pedidos.

## Análisis mediante el software SonarQube
Al realizar el análisis con el software SonarQube se obtuvo los siguientes resultados:

![image](https://github.com/user-attachments/assets/e2ab68db-0b9d-48a3-9fea-0473dc58b924)

En cuanto a los detalles acerca de estos tenemos lo siguiente:

![image](https://github.com/user-attachments/assets/a8af7cdf-3250-475b-9d3b-4f23626a39c1) 
![image](https://github.com/user-attachments/assets/892d1341-e8ac-485e-9387-4ebb1c1b21de)
![image](https://github.com/user-attachments/assets/33bcb06c-20d9-4453-a8b2-1390176152d1)

Para realizar las correcciones se priorizará según el grado de severidad. En el siguiente apartado se profundizará sobre las correcciones.

## Correcciones

La primera corrección que se realizara será en relación con un grado elevado de anidamiento y varios problemas menores relacionado con el mal uso de las promesas.

![image](https://github.com/user-attachments/assets/05a3c1ad-6839-47cf-a1ac-0a5f72735550)

![image](https://github.com/user-attachments/assets/b355fcf8-4404-4e86-8836-598ef46e2427)

El codigo antes de la correccion se vera a continuacion:

![code](https://github.com/user-attachments/assets/90d122b9-65a8-419e-814f-49265838b5be)

Para la primera corrección, se abordaron los problemas de anidamiento excesivo al encapsular las consultas a la base de datos y el manejo de los errores dentro de las promesas. Para esto se utilizó la clase "Error" para rechazar promesas, lo que permite proporcionar mensajes de erros más descriptivos y útiles para la depuración. Además, se hizo uso de "async/await" para simplificar la lógica de las funciones, mejorando así la legibilidad y el flujo del código. Como resultado de la correccion tenemos:

![code](https://github.com/user-attachments/assets/f44d86c1-75e3-4360-9a16-376c8a91340c)

##
La segunda y tercera corrección también se deben a la misma razón; sin embargo, el problema se encuentra en otra sección del código.

![image](https://github.com/user-attachments/assets/8cfad776-efe9-49d5-87a3-f9d331872999)

![image](https://github.com/user-attachments/assets/3ce37434-5d2d-4b5a-94cd-1b4fae2c370a)

El codigo previo a las correciones es el siguiente:

![code](https://github.com/user-attachments/assets/8faf7a4e-7f7f-4e73-9846-7d410d04936d)

En el segundo código, se convirtieron todas las funciones en async, lo que nos permite eliminar la necesidad de los callbacks y facilita el manejo de errores. Se utilizó "try/catch" para controlar excepciones y se encapsularon todas las interacciones con la base de datos en promesas, asegurando una gestión más clara de los resultados y errores. También se agregó un cierre seguro de la conexión a la base de datos en un bloque finally, garantizando que los recursos se liberen correctamente independientemente de si se producen errores. Finalmente el codigo despues de hacer las correcciones nos quedaria asi: 

![code](https://github.com/user-attachments/assets/18e9ef9c-891c-44ce-b26a-cf4e82faedfe)

Finalmente al realiar nuevamente el analisis del SonarQube obtenemos los siguientes resultados:


