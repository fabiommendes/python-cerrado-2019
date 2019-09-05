---

class: center, inverse, middle

# Iteradores e sequências infinitas
## (Como ser funcional em um mundo em eterna mudança)
---

.left-col[
## Iteráveis
### Criação
]
.right-col[
## Um Iterável produz uma sequência de valores

E uma interface previsível e minimalista

```python
it = iter([1, 2, 3, 4])

next(it) == 1
next(it) == 2
...
```

Também pode ser criada com funções geradoras

```python
def fibos():
    x, y = 1, 1
    while True:
        yield x
        x, y = y, x + y
```

(E não temos medo de sequências infinitas...)
]

---

.left-col[
## Iteráveis
### Criação
### Mutação
]

.right-col[
## Modificamos o iterável para revelar informação

Vamos calcular a razão áurea como o limite de dois 
números de Fibonacci

```python
from sidekick import X, Y

ratios = (y / x for x, y in window(2, fibos()))
ratios = sk.until_convergence((X == Y), ratios)
```

- `window(n)`: percorre o iterador em uma janela de n elementos
- `until_convergence(pred)`: termina iteração quando predicado for verdadeiro
]
---

.left-col[
## Iteráveis
### Criação
### Mutação
### Destruição
]

.right-col[
## Finalmente, consumimos o iterável

```python
golden_ratio = sk.last(ratios)   # 1.618033988749895
```

### Importante!

- Iteradores são radicalmente **mutáveis**
- Uma vez lido, o iterador é consumido para sempre
- Crie um pipeline, passe o iterador somente uma vez
- Para persistência, use listas e tuplas

### Funcional pragmático em Python

- **Funções** + **iteradores** + **lazyness**
- Use imutabilidade e funções puras com moderação
- <i class="fa fa-heart red" style="transform: scale(1.5); margin: 0 0.5rem;"></i> geradores e *list comprehensions*

]


---

.left-col[
## Iteráveis
### Criação
### Mutação
### Destruição
### Bônus
]

.right-col[
## Crivo de Erastótenes

```python
from sidekick.misc.lazylist import LazyList
from sidekick import N

def sieve(nums):
    p, nums = sk.uncons(nums)
    yield p
    yield from sieve(n for n in nums if n % p != 0)

primes = LazyList(sieve(N[2, 3, ...]), size='inf')
primes == [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...]
```
]