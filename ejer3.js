class formulas {

    suma(numero1p, numero2p) {
        this.numero1 = numero1p;
        this.numero2 = numero2p;

        if (Number.isInteger(this.numero1) == true && Number.isInteger(this.numero2) == true) {
            const sumaR = this.numero1 + this.numero2;
            return `La suma es de: ${sumaR}`;
        }

        return `ingresa numeros enteros`;
    }

    fibonacci(numerofibp) {
        this.numerofib = numerofibp;
        var num = []
        var numc = 0
        var sumaFibo = 0
        while (numc < this.numerofib) {
            numc += 1
            sumaFibo += numc
            num.push(numc)
        }
        return `los numeros ${num} y la suma es de ${sumaFibo} `
    }

    operacion_modulo(numeroopP) {
        this.numeroop = numeroopP;

        var numc = 0

        while (numc < this.numeroop) {
            if (numc % 2 == 0) {
                console.log(`el numero ${numc} tiene reciduo 0`)
            } else (console.log(`el numero ${numc} tiene reciduo diferente de 0`))

            numc += 1
        }

    }

    primos(numeprp) {

        this.numepr = numeprp;

        console.log(`has pasado el numero ${this.numepr}`)


        for (var i = 2; i < this.numepr; i++) {

            if (this.numepr % i === 0) {
                console.log(i + " es multiplo de " + this.numepr)
                console.log(this.numepr + " no es primo, porque " + i + " es multipo")
                return false
            }

            console.log(` el numero ${this.numepr} si es primo :)`)

        }

    }

}