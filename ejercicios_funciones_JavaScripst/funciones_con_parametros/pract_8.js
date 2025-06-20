// Función para calcular la nota final con 60% teoría y 40% práctica
function calcularNotaFinal(teoria, practica) {
  return (teoria * 0.6) + (practica * 0.4);
}

// Función para verificar si la nota es alta (mayor o igual a 4.0)
function esNotaAlta(nota) {
  return nota >= 4.0;
}

// Función que evalúa el examen e imprime el resultado
function evaluarExamen(teoria, practica) {
  let notaFinal = calcularNotaFinal(teoria, practica);

  if (esNotaAlta(notaFinal)) {
    alert("¡La nota final fue alta! (" + notaFinal.toFixed(2) + ")");
  } else {
    alert("La nota final no fue alta. (" + notaFinal.toFixed(2) + ")");
  }
}

// Pedir datos al usuario
let teoria = parseFloat(prompt("Ingresa la nota de teoría (0 a 5):"));
let practica = parseFloat(prompt("Ingresa la nota de práctica (0 a 5):"));

// Evaluar el examen con las notas ingresadas
evaluarExamen(teoria, practica);