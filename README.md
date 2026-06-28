# Proyecto Landing Pages con IA

Portada unificada realizada con HTML, CSS y JavaScript. El archivo principal es `index.html` y contiene tres accesos directos: prompt utilizado, landing del Primer Agente y landing del Segundo Agente.

## Datos del estudiante

- Nombre y apellido: Completar
- Materia: Completar
- Comision/curso: Completar
- Docente: Completar
- Fecha de entrega: Completar

## Deploy unificado

- Vercel: Completar con el enlace del deploy. Debe apuntar a la portada principal con las tres opciones.

## Agentes y modelos

- Primer Agente: Codex Curador
- Modelo utilizado: GPT-5
- Sitio generado: `agente-1/index.html`

- Segundo Agente: Codex Estratega
- Modelo utilizado: GPT-5
- Sitio generado: `agente-2/index.html`

## Prompt exacto utilizado

```text
realizar una interfaz de acceso (portada html, con css y javascript), una pagina de portada que contenga tres accesos directos:

Link 1: El texto plano del prompt utilizado.

Link 2: Landing Page generada por el Primer Agente (especificando nombre del agente y modelo de lenguaje usado).

Link 3: Landing Page generada por el Segundo Agente (especificando nombre del agente y modelo de lenguaje usado).

Repositorio y Documentacion: Subir todo el codigo del proyecto a un unico repositorio de GitHub. El archivo README.md del repositorio debe detallar obligatoriamente la siguiente informacion de forma clara:

Datos del estudiante.

Link al deploy unificado (un solo enlace de Vercel que dirija a la portada con las tres opciones).

El prompt exacto utilizado.

Capturas de pantalla de ambos sitios web generados.
```

## Capturas de pantalla

Capturas incluidas en el repositorio:

![Landing Primer Agente](screenshots/landing-agente-1.png)

![Landing Segundo Agente](screenshots/landing-agente-2.png)

## Estructura del proyecto

```text
.
|-- index.html
|-- prompt.txt
|-- assets/
|   |-- script.js
|   `-- styles.css
|-- agente-1/
|   `-- index.html
|-- agente-2/
|   `-- index.html
`-- screenshots/
    |-- landing-agente-1.png
    `-- landing-agente-2.png
```
