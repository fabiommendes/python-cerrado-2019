---
name: inverse
class: center, middle, inverse

# Python é funcional?

---

.left-col[
## Funções são valores
### Lisp, 1958
]

.right-col[
### Definimos uma função,

```python 
def add(x, y):
    return x + y
```

### salvamos em algum lugar qualquer,

```python 
operators = {'+': add, '-': ...}
```

### e usamos como uma variável, sem cerimônias,

```python 
op = '+'
print(operators[op](40, 2))
```
]
---

.left-col[
## Funções são valores
### Lisp, 1958
### São argumentos
]

.right-col[
### Criamos uma função

```python
def map(func, lst):
    result = []
    for x in lst:
        result.append(func(x))
    return result
```

### que recebe outra função como argumento

```python
>>> map(abs, [-1, 2, -3, 4])
[1, 2, 3, 4]
```
]

---

.left-col[
## Funções são valores
### Lisp, 1958
### São argumentos
### São resultados
]

.right-col[
### Funções podem criar e retornar novas funções,

```python
def incr_by(n):
    def incrementer(x):
        return x + n
    return incrementer
```

### onde compomos

```python
>>> map(incr_by(2), [10, 20, 30, 40])
[12, 22, 32, 42]
```

### e transformamos

```python
def flip(f):
    def flipped(x, y):
        return f(y, x)
    return flipped
```
]

---

.left-col[
## Funções são valores
### Lisp, 1958
### São argumentos
### São resultados
### São lambdas
]

.right-col[
### Lambdas definem funções como expressões

```python
flip2 = lambda f: lambda x, y: f(y, x)
```

### Internamente são idênticas às funções normais

```python
>>> type(flip2) == type(flip)
True
```
### Lambdas são limitadas a um único comando (porque o Guido quis e é tudo o que precisamos)

```python
>>> map(lambda x: 2 * x, [1, 2, 3, 4])
[2, 4, 6, 8]
```
]
