# Meeting Queue

## Instalación

### Requisitos
* NodeJS
* Bower
* NPM
* Grunt

### Instalación

Después de Instalar **NodeJS** y **NPM**

```
[sudo] npm install -g grunt grunt-cli
[sudo] npm install -g bower
npm install
```
**bower install** se ejecutará solo al terminar **npm install** de manera automática.

### Ejecución

```
grunt
```

Esto automáticamente iniciará el servidor, además de la generación de la semilla del mundo, a partir de ese momento (y hasta que no se pare el servidor) la vida continuará ejecutándose.

### Visualización

Para visualizar el mundo hay que abrir en el navegador **http://[ip-del-server]:3000** para observar la vida e interactuar con el juego.
