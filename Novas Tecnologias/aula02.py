# Algoritmo para formulário de usuário
# nome, idade, altura, massa

nome = input('Digite o seu nome: ')
idade = int(input('Digite a sua idade: '))
altura = float(input('Digite a sua altura: '))
massa = float(input('Digite a sua massa: '))
est_civil = input('''Digite o seu estado civil\n 
                    \nS - Solteiro
                    \nC - Casado
                    \nD - Divorciado
                    \nV - Viúvo ''').upper()

# Cálculo do imc
imc = massa/altura**2


estilo_linha = 30*'*'

if imc < 17:
    pimc = 'Você está muito abaixo do peso'
elif imc >= 17 and imc <= 18.49:
    pimc = 'Você está abaixo do peso'
elif imc >= 18.5 and imc <= 24.99:
    pimc = 'Você está no peso normal'
elif imc >= 25 and imc <= 29.99:
    pimc = 'Você está acima do peso'
elif imc >= 30 and imc <= 34.99:
    pimc = 'Você está com obesidade do tipo I'
elif imc >= 35 and imc <= 39.99:
    pimc = 'Você está com obesidade do tipo II (severa)'
else:
    pimc = 'Você está com obesidade do tipo III (mórbida)'


match est_civil:
    case S:
        pcivil = 'Solteiro'
    case C:
        pcivil = 'Casado'
    case D:
        pcivil = 'Divorciado'
    case V:
        pcivil = 'Viúvo'
    _:
        pcivil = 'Mensagem inválida! Tente novamente'
    

print(f'''
    {estilo_linha}
    \nFomulário de Usuário\n
    * Nome: {nome}
    * Idade: {idade} anos
    * IMC: {imc:.2f}\n
    {estilo_linha}
    \n{pimc}
''')