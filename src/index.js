
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];

  if (!Array.isArray(matrix) || matrix.length === 0) {
      return result; // Если матрица не задана или пуста, возвращаем пустой массив
  }

  for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
          // Четные строки: добавляем слева направо
          result.push(...matrix[i]);
      } else {
          // Нечетные строки: добавляем справа налево
          result.push(...matrix[i].reverse());
      }
  }

  return result;
  
}
