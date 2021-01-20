module.exports = {
  /**
   * Suma de dos numeros
   * @example
   * n1 = 2, n2 = 2 => resultado 4
   * @param {*} n1 Numero uno de la suma
   * @param {*} n2 Numero dos de la suma
   */
  suma: function (n1, n2) {
    return this.esNumero(n1,n2) ?  n1 + n2 : this.mensajeError()
  },
  /**
   * Resta de dos numeros
   * @example
   * n1 = 2, n2 = 2 => resultado 0
   * @param {*} n1 Numero uno de la resta
   * @param {*} n2 Numero dos de la resta
   */
  resta: function (n1, n2) {
    return this.esNumero(n1,n2) ?  n1 - n2 : this.mensajeError()
  },
  /**
   * Multiplicación de dos numeros
   * @example
   * n1 = 2, n2 = 2 => resultado 4
   * @param {*} n1 Numero uno de la multiplicación
   * @param {*} n2 Numero dos de la multiplicación
   */
  multiplicacion: function (n1, n2) {
    return this.esNumero(n1,n2) ?  n1 * n2 : this.mensajeError()
  },
  /**
   * División de dos numeros
   * @example
   * n1 = 2, n2 = 2 => resultado 1
   * @param {*} n1 Numero uno de la división
   * @param {*} n2 Numero dos de la división
   */
  division: function (n1, n2) {
    return this.esNumero(n1,n2) ?  n1 / n2 : this.mensajeError()
  },
  /**
   * Mensaje de error cuando no tengamos valores numericos
   */
  mensajeError: function() {
    console.log('Alguno de los parametros ingresados no es númerico')
  },
  /**
   * Comprueba que son numeros
   * * @example
   * esNumero(n1, n2) => resultado: true|false
   * @param {*} n1 Numero uno
   * @param {*} n2 Numero dos
   */
  esNumero: function(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
      return false
    }
    return true
  }
}
