---

class: center, inverse, powerpuff

# Funções pequenas, mas superpoderosas

---

.left-col[
## Funções
### map
]
.right-col[
## Mais .red[map]s e menos .red[for]s

Aplica função em cada termo da lista ou sequência

```python
double = lambda x: 2 * x

map(double, [1, 2, 3, 4]) == [2, 4, 6, 8]
```

Pode ser aplicada a sequências infinitas

```python
from itertools import count

map(double, count(1)) == [2, 4, 6, ...]
```

E usada com funções de vários argumentos

```python
from operators import add

map(add, [1, 2, 3], [4, 5, 6]) == [5, 7, 9]
```
]


---

.left-col[
## Funções
### map
### filter
### reduce
]
.right-col[
## Mais .red[filter]s e menos .red[if]s

`filter` preserva apenas os termos aceitos pela função de predicado

```python
is_large = lambda x: x >= 10

filter(is_large, [1, 2, 3, 42]) == [42]
```

`reduce` reduz sequência usando operador

```python
from functools import reduce

reduce(add, [1, 2, 3, 4]) == 1 + 2 + 3 + 4
```
]


---

.left-col[
## Composição
### The Bad
]

.right-col[
## Criamos *pipelines* de processamento de dados

**PROBLEMA:** Remover as entradas nulas, converter para número e calcular o valor máximo

```python
data = ["R$100.00", None, "R$42.00", "R$40.00", ...]

clean = filter(lambda x: x is not None, data)
numbers = map(lambda x: float(x[2:]), clean)
richest = reduce(max, numbers)
```

.pipeline[ ]
]


---

.left-col[
## Composição
### The Bad
### The Good
]

.right-col[
## Separando dados do algoritmo

Com auto-currying, o dado fica por último

```python
import sidekick as sk

clean_data = sk.filter(lambda x: x is not None)
to_numbers = sk.map(lambda x: float(x[2:]))
maximum = sk.reduce(max)

richest = maximum(to_numbers(clean_data(data)))
```

Daí, extraímos o pipeline

```python
process = sk.pipeline(
    sk.filter(lambda x: x is not None),
    sk.map(lambda x: float(x[2:])),
    sk.reduce(max),
)

richest = process(data)
```

Também podemos usar operadores `f >> g >> h`
]



---

.left-col[
## Composição
### The Bad
### The Good
### The Ugly
]

.right-col[
## Imperativo

```python
def process(data):               # pipeline
    res = 0                      # reduce
    for x in data:               # map/filter/reduce?
        if x is not None:        # filter
            y = float(x[2:])     # map
            res = max(x, y)      # reduce
    return res                   # reduce
```    

- Longo e aninhado
- Mistura considerações intenções
- Não abstrai fluxos de controle
- Infelizmente, é o que o Python gosta :(
]