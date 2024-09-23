function calculadora() {
    const numeroBase1 = input_numero_base1.value
    const numeroBase2 = input_numero_base2.value
    const baseEscolhida1 = select_base_1.value
    const baseEscolhida2 = select_base_2.value
    const operadorEscolhido = select_operadores.value
    var numero1 = 0
    var numero2 = 0
    var total = 0
    retorno_calculo.innerHTML = ``


    if (operadorEscolhido == 'adicao') {

        if (baseEscolhida1 == 'binario') {
            numero1 = Number(parseInt(numeroBase1, 2).toString(10))
            if (baseEscolhida2 == 'binario') {
                numero2 = Number(parseInt(numeroBase2, 2).toString(10))
                total = numero1 + numero2
                retorno_calculo.innerHTML = `${total}`
                
            } else if (baseEscolhida2 == 'octal') {
                numero2 = Number(parseInt(numeroBase2, 8).toString(10))
                total = numero1 + numero2
                retorno_calculo.innerHTML = `${total}`

            } else if (baseEscolhida2 == 'decimal') {
                numero2 = Number(parseInt(numeroBase2, 8).toString(10))
                total = numero1 + numero2
                retorno_calculo.innerHTML = `${total}`

            } else if (baseEscolhida2 == 'hexadecimal') {
                numero2 = Number(parseInt(numeroBase2, 8).toString(10))
                total = numero1 + numero2
                retorno_calculo.innerHTML = `${total}`
            }

        } else if (baseEscolhida1 == 'octal') {
            if (baseEscolhida2 == 'binario') {

            } else if (baseEscolhida2 == 'decimal') {

            } else if (baseEscolhida2 == 'hexadecimal') {

            }

        } else if (baseEscolhida1 == 'decimal') {

            if (baseEscolhida1 == 'binario') {

            } else if (baseEscolhida2 == 'octal') {

            } else if (baseEscolhida2 == 'hexadecimal') {

            }

        } else if (baseEscolhida1 == 'hexadecimal') {

            if (baseEscolhida1 == 'binario') {

            } else if (baseEscolhida2 == 'octal') {

            } else if (baseEscolhida2 == 'decimal') {

            }
        }

    } else if (operadorEscolhido == 'subtracacao') {

        if (baseEscolhida1 == 'binario') {

        } else if (baseEscolhida1 == 'octal') {

        } else if (baseEscolhida1 == 'decimal') {

        } else if (baseEscolhida1 == 'hexadecimal') {

        }

    } else if (operadorEscolhido == 'multiplicacao') {
        if (baseEscolhida1 == 'binario') {

        } else if (baseEscolhida1 == 'octal') {

        } else if (baseEscolhida1 == 'decimal') {

        } else if (baseEscolhida1 == 'hexadecimal') {

        }

    } else if (operadorEscolhido == 'divisao') {
        if (baseEscolhida1 == 'binario') {

        } else if (baseEscolhida1 == 'octal') {

        } else if (baseEscolhida1 == 'decimal') {

        } else if (baseEscolhida1 == 'hexadecimal') {

        }

    }
}