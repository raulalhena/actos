# ACTOS

### Entidad / Modelo / Modulo

```JSON
[
    {
        "id": 1,
        "name": "Event 1",
        "description": "A nice event for all",
        "tags": ["event", "online", "nice"],
        "category": ["Global", "Empleabilidad", "Bienestar Emocional"],
        "venue": "C/Llull 25, 08005, Barcelona",
        "date": "2023-09-12",
        "startTime": "17:30",
        "endTime": "19:00",
        "timeZone": ["Madrid +2:00 GMT", "GMT 00:00"],
        "showStartTime": 1, //mostrar=1 / ocultar=0
        "showEndTime": 1, //mostrar=1 / ocultar=0
        "confirmed": 1, //pendiente=0 / confirmado=1
        "type": ["Proyecto", "Formacion", "Taller", "Charla", "Otros"],
        "mode": ["Presencial", "Online"],
        "image": "URL a la imagen",
        "video": "URL al video",
        "qr": "URL a la imagen",
        "attendees": ["user2", "user3"],
        "submitted": ["user1", "user2", "user3"],
        "capacity": 100,
        "price": 0,
        "payment": ["Gratis", "Donación", "Pago"],
        "contact": "eventmanager@actos.com",
        "language": ["Castellano", "Catalán", "Inglés"],
        "web": "URL a la web",
        "visibility": 0, //draft=0 / public=1
        "status": 0 //activo=1 / cancelado=0 
    }
]
```
Tamaño de Pantalla
breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);