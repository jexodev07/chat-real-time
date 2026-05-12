# Instrucciones

Sigue esta pequeña guia para isntalar y configurar lo necesario para recrear este proyecto.

## Requisitos

- Instalar .NET (se puede cualquier versión moderna pero en este proyecto se uso la version 10)
- Instalar NodeJs 22+ de preferencia
- Instalar Angular 21

## Configurar backend

```bash
cd ./chat-real-time-backend

dotnet new webapi --no-openapi -n chat-real-time-backend
```

## Configurar frontend

```bash
cd ./chat-real-time-frontend

# Iniciar proyecto de angular
ng new chat-real-time-frontend --style css

# Instalar Tailwindcss
npm install tailwindcss @tailwindcss/postcss postcss --force
```

Crear archivo `.postcssrc.json`

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

Abrir archivo `styles.css` y configurarlo

```css
@import "tailwindcss";
```