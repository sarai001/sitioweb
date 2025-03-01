let productos = [
    {
        "codigo": "G1",
        "nombre": "Snoopy",
        "descripcion": "Algodón suave",
        "categoria": "peluche",
        "precio_compra": 24000,
        "precio_venta": 4000, 
        "stock": 25,
        "stock_minimo": 11,
        "iva": 2.0,
        
        "costo_docena": 37000,
        "fecha_ingreso": "2025-01-11"
    },
    {
        "codigo": "E1",
        "nombre": "base media beauty creations ",
        "descripcion": "cobertura media",
        "categoria": "maquillaje",
        "precio_compra": 100000,
        "precio_venta": 2179254, 
        "stock": 56,
        "stock_minimo": 10,
        "iva": 2.55,
        "costo_docena": 255000,
        "fecha_ingreso": "2025-02-12"
    },
    {
        "codigo": "N1",
        "nombre": "Base de Beauty Creations",
        "descripcion": "Cobertura alta",
        "categoria": "Maquillaje",
        "precio_compra": 120000,
        "precio_venta": 15000,
        "stock": 30,
        "stock_minimo": 5,
        "iva": 2.0,
        "costo_docena": 1440000,
        "fecha_ingreso": "2024-11-12"
    },
    
    {
        "codigo": "E2",
        "nombre": "polvo translucido de beauty creations ",
        "descripcion": "pieles de grasas a secas",
        "categoria": "maquillaje",
        "precio_compra": 120000,
        "precio_venta": 15000 , 
        "stock": 60,
        "stock_minimo": 25,
        "iva": 2.0,
        "costo_docena":270000,
        "fecha_ingreso": "2024-02-12"
    }
];

// Función para agregar un nuevo producto
function agregarProducto() {
    const form = document.getElementById("productForm");

    const nuevoProducto = {
        codigo: form.codigo.value,
        nombre: form.nombre.value,
        descripcion: form.descripcion.value,
        categoria: form.categoria.value,
        precio_compra: parseFloat(form.precio_compra.value),
        precio_venta: parseFloat(form.precio_venta.value), 
        stock: parseInt(form.stock.value),
        stock_minimo: parseInt(form.stock_minimo.value),
        iva: parseFloat(form.iva.value),
       
        costo_docena: parseFloat(form.costo_docena.value),
        fecha_ingreso: form.fecha_ingreso.value
    };

    productos.push(nuevoProducto);
    actualizarTabla();
    form.reset();
}

// Función para eliminar un producto
function eliminarProducto(index) {
    productos.splice(index, 1);
    actualizarTabla();
}

// Función para actualizar la tabla de productos
function actualizarTabla(productosMostrados = productos) {
    const tabla = document.getElementById("productTable").getElementsByTagName("tbody")[0];
    tabla.innerHTML = ""; 

    productosMostrados.forEach((producto, index) => {
        const fila = tabla.insertRow();

        fila.insertCell().textContent = producto.codigo;
        fila.insertCell().textContent = producto.nombre;
        fila.insertCell().textContent = producto.descripcion;
        fila.insertCell().textContent = producto.categoria;
        fila.insertCell().textContent = producto.precio_compra;
        fila.insertCell().textContent = producto.precio_venta; 
        fila.insertCell().textContent = producto.stock;
        fila.insertCell().textContent = producto.stock_minimo;
        fila.insertCell().textContent = producto.iva;
       
        fila.insertCell().textContent = producto.costo_docena;
        fila.insertCell().textContent = producto.fecha_ingreso;

        const celdaAcciones = fila.insertCell();
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => eliminarProducto(index);
        celdaAcciones.appendChild(botonEliminar);
    });
   
    
    
    // Función para agregar un nuevo producto
    function agregarProducto() {
        const form = document.getElementById("productForm");
    
        const nuevoProducto = {
            codigo: form.codigo.value,
            nombre: form.nombre.value,
            descripcion: form.descripcion.value,
            categoria: form.categoria.value,
            precio_compra: parseFloat(form.precio_compra.value),
            precio_venta: parseFloat(form.precio_venta.value), 
            stock: parseInt(form.stock.value),
            stock_minimo: parseInt(form.stock_minimo.value),
            iva: parseFloat(form.iva.value),
            costo_docena: parseFloat(form.costo_docena.value),
            fecha_ingreso: form.fecha_ingreso.value
        };
    
       
        productos.push(nuevoProducto);
    
        
        console.log(productos);
    
   
        actualizarTabla();
    
        // Limpiar el formulario
        form.reset();
    }
    
    // Función para eliminar un producto
    function eliminarProducto(index) {
        productos.splice(index, 1);
        actualizarTabla();
    }
    
   
    function actualizarTabla(productosMostrados = productos) {
        const tabla = document.getElementById("productTable").getElementsByTagName("tbody")[0];
        tabla.innerHTML = ""; // Limpiar tabla
    
        productosMostrados.forEach((producto, index) => {
            const fila = tabla.insertRow();
    
            fila.insertCell().textContent = producto.codigo;
            fila.insertCell().textContent = producto.nombre;
            fila.insertCell().textContent = producto.descripcion;
            fila.insertCell().textContent = producto.categoria;
            fila.insertCell().textContent = producto.precio_compra;
            fila.insertCell().textContent = producto.precio_venta; 
            fila.insertCell().textContent = producto.stock;
            fila.insertCell().textContent = producto.stock_minimo;
            fila.insertCell().textContent = producto.iva;
            fila.insertCell().textContent = producto.costo_docena;
            fila.insertCell().textContent = producto.fecha_ingreso;
    
            const celdaAcciones = fila.insertCell();
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.onclick = () => eliminarProducto(index);
            celdaAcciones.appendChild(botonEliminar);
        });
    }
    
   
    
}


// Función para registrar un movimiento de inventario
function registrarMovimiento(codigo, cantidad, tipo) {
    const producto = productos.find(p => p.codigo === codigo);

    if (!producto) {
        alert("Producto no encontrado.");
        return;
    }

    if (tipo === "entrada") {
        producto.stock += cantidad; 
    } else if (tipo === "salida") {
        if (cantidad > producto.stock) {
            alert("No hay suficiente stock para realizar la salida.");
            return;
        }
        producto.stock -= cantidad; 
    }

    actualizarTabla(); 
}

// Función para registrar el movimiento desde el formulario
function registrarMovimientoDesdeFormulario() {
    const codigo = document.getElementById("codigo_movimiento").value;
    const cantidad = parseInt(document.getElementById("cantidad_movimiento").value);
    const tipo = document.getElementById("tipo_movimiento").value;

    registrarMovimiento(codigo, cantidad, tipo);
}

// Función que verifica el stock bajo y muestra alerta
function verificarStockBajo() {
    productos.forEach(producto => {
        if (producto.stock < producto.stock_minimo) {
            alert("¡Alerta! Stock bajo para el producto: " + producto.nombre);
        }
    });
}

// Función que calcula el valor total del inventario
function calcularValorInventario() {
    let valorTotal = 0;
    productos.forEach(producto => {
        valorTotal += producto.stock * producto.precio_compra;
    });
    alert("Valor total del inventario: " + valorTotal);
}

// Función que calcula el margen de ganancia de los productos
function calcularMargenGanancia() {
    productos.forEach(producto => {
        const margen = (producto.precio_venta - producto.precio_compra) / producto.precio_venta;
        alert("Margen de ganancia para " + producto.nombre + ": " + margen);
    });
}

// Función para mostrar productos próximos a agotarse
function productosProximosAgotarse() {
    const productosAgotandose = productos.filter(producto => producto.stock <= producto.stock_minimo * 1.2);

    if (productosAgotandose.length > 0) {
        const nombres = productosAgotandose.map(producto => producto.nombre).join(", ");
        alert("Productos próximos a agotarse: " + nombres);
    }
}

// Función para buscar productos mediante un filtro de búsqueda
function buscarProductos() {
    const textoBusqueda = document.getElementById("busqueda").value.toLowerCase();
    const productosFiltrados = productos.filter(producto => {
        return producto.codigo.toLowerCase().includes(textoBusqueda) ||
               producto.nombre.toLowerCase().includes(textoBusqueda) ||
               producto.categoria.toLowerCase().includes(textoBusqueda);
    });
    actualizarTabla(productosFiltrados);
}

// Función para filtrar productos según parámetros
function filtrarProductos() {
    const categoriaSeleccionada = document.getElementById("filtro_categoria").value;
    const precioMinimo = document.getElementById("filtro_precio_min").value;
    const precioMaximo = document.getElementById("filtro_precio_max").value;
    const stockMinimo = document.getElementById("filtro_stock").value;
    const fechaIngreso = document.getElementById("filtro_fecha").value;

    const productosFiltrados = productos.filter(producto => {
        return (categoriaSeleccionada === "" || producto.categoria === categoriaSeleccionada) &&
               (precioMinimo === "" || producto.precio_compra >= precioMinimo) &&
               (precioMaximo === "" || producto.precio_compra <= precioMaximo) &&
               (stockMinimo === "" || producto.stock >= stockMinimo) &&
               (fechaIngreso === "" || producto.fecha_ingreso === fechaIngreso);
    });

    actualizarTabla(productosFiltrados);
}
// −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
//                                                 Crear el gráfico
// −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−− 



let margenGananciaChart = null;

// Función para calcular el margen de ganancia
function calcularMargenGanancia() {
    const nombresProductos = [];
    const margenes = [];

    productos.forEach(producto => {
        // Cálculo del precio de venta con margen del 50% y considerando IVA
        let margen = 1.5;  
        let precio_venta = producto.costo_docena * margen;  
        let precio_final = precio_venta * (1 + producto.iva);  

        
        const margenGanancia = (precio_final - producto.precio_compra) / precio_final;
        
        // Agregar a las listas de datos
        nombresProductos.push(producto.nombre);
        margenes.push(margenGanancia);
    });

    // Si ya existe un gráfico, destruirlo antes de crear uno nuevo
    if (margenGananciaChart) {
        margenGananciaChart.destroy();
    }

    // Crear el gráfico de barras
    const ctx = document.getElementById('margenGananciaChart').getContext('2d');
    margenGananciaChart = new Chart(ctx, {
        type: 'bar',  // Tipo de gráfico
        data: {
            labels: nombresProductos,  
            datasets: [{
                label: 'Margen de Ganancia',
                data: margenes,  
                backgroundColor: 'rgba(75, 192, 192, 0.2)',  
                borderColor: 'rgba(75, 192, 192, 1)',  
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,  
                    ticks: {
                        callback: function(value) {
                            return (value * 100).toFixed(2) + '%';  
                        }
                    }
                }
            }
        }
    });
}

// Llamar a la función para generar el gráfico
calcularMargenGanancia();

// Función para agregar un producto
function agregarProducto() {
    const nuevoProducto = {
        codigo: document.getElementById("codigo").value,
        nombre: document.getElementById("nombre").value,
        descripcion: document.getElementById("descripcion").value,
        categoria: document.getElementById("categoria").value,
        precio_compra: parseFloat(document.getElementById("precio_compra").value),
        precio_venta: parseFloat(document.getElementById("precio_venta").value),
        stock: parseInt(document.getElementById("stock").value),
        stock_minimo: parseInt(document.getElementById("stock_minimo").value),
        iva: parseFloat(document.getElementById("iva").value),
        costo_docena: parseFloat(document.getElementById("costo_docena").value),
        fecha_ingreso: document.getElementById("fecha_ingreso").value
    };

    // Agregar el nuevo producto al array
    productos.push(nuevoProducto);
    
    // Limpiar el formulario
    document.getElementById("productForm").reset();

    // Actualizar gráfico
    calcularMargenGanancia();
    actualizarTabla();
}

// Llamar a la función para calcular los márgenes y mostrar el gráfico inicialmente
calcularMargenGanancia();
actualizarTabla();


// -------------------------------------------------accesibilidad------------------------------------------------------


// Botón de alto contraste
document.getElementById('high-contrast').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast-mode');
});

// Botón de modo dislexia
document.getElementById('dyslexia-mode').addEventListener('click', function() {
    document.body.classList.toggle('dyslexia-friendly-mode');
});

// Botón de aumentar fuente
document.getElementById('larger-font').addEventListener('click', function() {
    document.body.classList.toggle('larger-font-size');
});


// Botón de leer en voz alta
let utterance = null; // Variable para almacenar el objeto de síntesis de voz

// Botón de leer en voz alta
document.getElementById('read-aloud').addEventListener('click', function() {
    const text = document.body.innerText;
    utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
});

// Botón de pausa
document.getElementById('pause-read-aloud').addEventListener('click', function() {
    if (utterance && speechSynthesis.speaking) {
        speechSynthesis.pause();
    }
});

// Botón de reanudar
document.getElementById('resume-read-aloud').addEventListener('click', function() {
    if (utterance && speechSynthesis.paused) {
        speechSynthesis.resume();
        const currentTime = speechSynthesis.currentTime; 
        utterance.onboundary = function(event) {
            if (event.elapsedTime >= currentTime) {
                utterance.onboundary = null; 
                speechSynthesis.speak(utterance); 
            }
        };
    }
});



// Botón de ampliar pantalla
document.getElementById('magnify').addEventListener('click', function() {
    document.body.style.zoom = document.body.style.zoom ? '' : '1.8'; lla
});
