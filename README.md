# 🐉 **Misión MongoDB — El Bestiario Digital**

![MongoDB](https://img.shields.io/badge/Base%20de%20Datos-NoSQL-green)
![VSCode](https://img.shields.io/badge/Herramienta-VSCode-blue)
![Atlas](https://img.shields.io/badge/Entorno-MongoDB%20Atlas-orange)
![Author](https://img.shields.io/badge/Autor-Pepinós%20Arboleda%20Brian-lightgrey)

---

## 🧩 **Autor**

**Nombre completo:** TNTE Pepinós Arboleda Brian  
**Asignatura:** Modelado avanzado de Base de Datos  
**Fecha:** 20 Octubre 2025  

---

## 📜 **El Bestiario Digital**

En esta misión, el cronista de datos ha sido convocado para construir un Bestiario Digital de Criaturas Fantásticas, una colección donde cada ser mítico posee atributos únicos: alas, fuego, hechizos o escamas.  

A diferencia de una base de datos relacional, donde cada campo debe ser rígido y uniforme, MongoDB permite representar estos seres mediante un esquema flexible y natural.  
Cada criatura es un documento independiente, con estructuras personalizadas y atributos anidados, demostrando el verdadero poder del modelo NoSQL.

---

## ⚙️ **Instrucciones para ejecutar el script**

El archivo principal de esta misión es misiones_mongodb.js, el cual contiene todas las operaciones CRUD necesarias para crear, leer, actualizar y analizar el Bestiario Digital.

---

### 🔹 **Opción 1. Ejecución en MongoDB Atlas (en la nube)**

1. Inicia sesión en [MongoDB Atlas](https://cloud.mongodb.com) y abre tu cluster.  
2. Haz clic en **Connect → Connect with Mongo Shell** y copia tu cadena de conexión.  
   Ejemplo: mongosh "mongodb+srv://<tu-cluster>.mongodb.net/?retryWrites=true&w=majority" --username <usuario>
3. Una vez dentro de `mongosh`, ejecuta:load('misiones-mongodb.js')
4. Se creará la base de datos **bestiario** con la colección **criaturas** y se mostrarán los resultados en pantalla.

---

### 🔹 **Opción 2. Ejecución local (MongoDB Community Server)**

1. Asegúrate de tener **MongoDB** y **mongosh** instalados en tu sistema.  
2. Copia el archivo `misiones-mongodb.js` dentro de tu carpeta de trabajo.  
3. Abre una terminal y ejecuta:
mongosh
load('misiones_mongodb.js')

4. Verás los mensajes del script confirmando las inserciones y actualizaciones realizadas.

---

### 🔹 **Opción 3. Ejecución desde VS Code (Extensión MongoDB Playground)** 🧩

Esta es la forma más práctica si trabajas directamente desde Visual Studio Code.

#### 🧭 **Pasos:**
1. Instala la extensión oficial **MongoDB for VS Code** (autor: MongoDB Inc).  
2. Abre la barra lateral de MongoDB (icono verde 🍃 a la izquierda).  
3. Conéctate a tu **cluster de Atlas** o instancia local.  
4. Haz clic en **"Create New Playground"**.  
Esto abrirá un archivo temporal con el nombre `Playground-0.mongodb.js`.  
5. Elimina el contenido por defecto y **pega todo el código** de tu archivo `misiones_mongodb.js`.  
6. En la esquina superior derecha, verifica que diga:  
✅ **Connected to tu cluster**  
7. Finalmente, haz clic en el botón **▶ Run** (o presiona `Ctrl + Shift + R`).


## 🧾 **Operaciones realizadas en el script**

| Tipo | Descripción | Ejemplo |
|------|--------------|---------|
| 🟢 **Create** | Inserta criaturas con estructuras variadas usando `insertOne()` y `insertMany()` | `db.criaturas.insertOne({...})` |
| 🔍 **Read** | Consulta todas las criaturas, por hábitat o por nivel de peligro | `db.criaturas.find({ habitat: "Bosque Encantado" })` |
| 🛠️ **Update** | Añade habilidades o incrementa niveles de peligro con `updateOne()` y `updateMany()` | `db.criaturas.updateMany({ habitat: "Bosque Encantado" }, { $inc: { nivel_peligro: 1 } })` |


---

