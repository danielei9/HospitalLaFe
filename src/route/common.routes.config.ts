/** 
 * Author: Daniel Burruchaga 
 * Date: 21/12/21
 * Description: 
 * oportunidad para practicar el uso de la herencia con extends ,
 * Todos los archivos de ruta tienen el mismo comportamiento: tienen un nombre (que usaremos con fines de depuración) 
 * y acceso al Application object principal Express.js .
*/
import express from 'express';
export abstract class CommonRoutesConfig {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes(); // necesario el abstract por que asegura qe va a existir

    }
    /* EXAMPLE */
    getName() {
        return this.name;
    }
    /**
     * Esto obliga a cualquier clase que se extienda CommonRoutesConfiga
     * proporcionar una implementación que coincida con esa firma; si no lo 
     * hace, el compilador de TypeScript arrojará un error. 
     * */

    abstract configureRoutes(): express.Application;

}