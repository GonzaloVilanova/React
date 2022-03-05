# Sinergia Contact Center - Plataforma de Pago

Crear un sistema web, para que quien desee consultar si tiene alguna deuda asignada, en financiación activa o pagando, pueda elegir a su criterio como abonar.
Sería una plataforma de acceso (Previo registro, por cuestiones de falta de conocimientos, deberia generar un LogIn validando datos y mostrando solo los que le corresponden
a esa persona). Una vez ingresada en la misma, el cliente dispondrá de sus "cards" de deudas, con diferentes estadios, saldos, empresa acreedora, números identificativos, etc.
Supone puede seleccionar la cantidad de cuotas a pagar, pudiendo adelantar o abonar cuotas atrasadas, o bien cancelar de manera anticipada. La idea es lograr más adelante,
"ofertas" como por ejemplo si cancela 2 deudas juntas, se le otorgue un descuento, o bien 1 sola...pero que haya diferencia entre abonar una cancelacion de 1 pago o un plan en cuotas.

- Aplicacion de Descuentos
- Opciones de pago en cuotas según cartera y deuda pendiente

## API Reference

#### Get all items

Firebase

```http mockapi.io
  GET /api/items
```

| Parameter | Type     | Description  |
| :-------- | :------- | :----------- |
| `api_key` | `string` | Your API key |

#### Get item

Firebase

```http
  GET mockapi.io/deudas/${id}
```

| Parameter | Type     | Description         |
| :-------- | :------- | :------------------ |
| `id`      | `number` | Id of item to fetch |

#### add(num1, num2)

## Demo

Insert gif or link to demo

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

## Dependencias:

    axios
    react-dom
    react-router-dom
    reactstrap
    firebase

![Logo](http://sinergiacc.ar/assests/img/Logotras.png)

### Autor

Gonzalo Vilanova
