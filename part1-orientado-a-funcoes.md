name: inverse
layout: true
class: center, middle, inverse
---

# Programação funcional em Python. Funciona?

## Python Cerrado 2019

Fábio Macêdo Mendes

---

## Programação orientada a funções

1936, Alonzo Church, Cálculo lambda

---

layout: false
.left-col[
## Lambda
cálculo lambda utiliza **apenas** lambdas
]
.right-col[
Função fatorial, implementanda como cálculo lambda em Python

```python
(lambda f: lambda x: f(f, x))(
(lambda f, n: 
  (lambda cond, then, else_: cond(then, else_))(
    (lambda n: n(lambda _: lambda a, b: b(), 
                 lambda a, b: a()))(n), 
     lambda: lambda f, x: f(x), 
     lambda: (lambda n, m: lambda f, x: 
       n(lambda y: m(f, y), x))(
         n, 
         f(f, 
           (lambda n: lambda f, x: 
             (lambda k: k(lambda a: a))
           (n(lambda g: lambda h: h(g(f)), lambda y: x)))
           (n))))))
```
]
<div class="WAT">WAT??!</div>

---
.left-col[
## Python vs. Lambda
]
.right-col[

### Python

```python
def fat(n):
    if n == 0:
        return 1
    else:
        return n * fat(n - 1)
```
Funciona bem com seres humanos

### Lambda
```python
(lambda: lambda f: lambda x: ...)
```
1 expressão Python, 208 bytes gzipped, onde acrescentamos:
- Booleanos e o comando "if"
- Multiplicação e subtração de números naturais
- Recursão de funções
- (além do fatorial)
]

---
## Turing, .grey[Hardware] vs. Church, .grey[Software]

.spaced[
- Máquina de Turing
    + Assembler <span class="red bold">></span> Gotos <span class="red bold">></span> Programação estruturada (1958, Algol)
    + O foco mudou para arquitetura e otimizações
- Cálculo lambda (1958, Lisp)
    - *"A programação pode se libertar do estilo Von Neumann?"*
    - Haskell (1990)
    - Renascimento funcional (2000s) 
- Convergência
```java
// Lambdas em Java e C++!
(s) -> System.out.println("Hello " + s + "!");
[] (auto s) { cout << "Hello " << s << "!" << endl; }
```
]