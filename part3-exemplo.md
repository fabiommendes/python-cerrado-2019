---

class: center, middle, inverse

# Exemplo
## Lista simplesmente encadeada

---
.left-col[
## Lista
### Imutável
### Eficiente
### Simples
]

.right-col[

### Pares de valores terminados em None

```python
from collections import namedtuple

cons = namedtuple('Cell', ['head', 'tail'])
```

.linked-list[ ]
]

---

.left-col[
## Lista
### Imutável
### Eficiente
### Simples
### Folds!
]

.right-col[

### Precisamos conhecer duas funções

Aplica `f` em cada par de elementos reduzindo a lista da direita para a esquerda...

```python
def foldr(f, start, lst):
    if lst is None:
        return start
    else:
        return f(lst.head, foldr(f, start, lst.tail))
```

...ou da esquerda para a direita
```python
def foldl(f, start, lst):
    while lst is not None:
        head, lst = lst
        start = f(head, start)
    return start
```
]

---
### Composição

.pull-left[
```python
add = lambda x, y: x + y

def sum(xs):
    return fold(add, 0, xs)
```
]

.pull-right[
```python
join = lambda x, y: f'{x}, {y}'

def show(xs):
    return fold(join, '', xs)
```
]

.margin-1.center[
**Note o padrão:** funções usam `fold` fixando os primeiros argumentos
]

.center[
<i class="fa fa-angle-double-down red" style="font-size: 4rem"></i>
]

.pull-left[
```python
from functools import partial
from operator import add, mul


sum = partial(fold, add, 0)
product = partial(fold, mul, 1)
show = partial(fold, join, '')
```
]

.pull-right[
```python
from sidekick import curry

fold = curry(3, fold)

sum = fold(add, 0)
product = fold(mul, 1)
show = fold(join, '')
```
]

.center[
Criamos novas funções por *especialização*
]

---

## Biblioteca completa de *one-liners**

```python
# Tamanho da lista
length = fold(lambda _, n: n + 1, 0)

# Concatena duas listas
concat = flip(foldr(cons))

# Inverte lista
reverse = foldl(cons, None)

# Aplica função em cada elemento da lista
map = lambda f, xs: foldr(lambda x, y: cons(f(x), y), None, xs)

# Seleciona elementos aceitos pelo predicado
filter = lambda pred, xs: foldr(filter_f(pred), None, xs)

# Intercala x nos elementos da lista
intersperse = lambda x, xs: cons(xs.head, foldr(interspace_f(x), None, xs.tail))


# Funções auxiliares
filter_f = lambda pred: lambda x, lst: cons(x, lst) if pred(x) else lst
interspace_f = lambda sep: lambda x, lst: cons(sep, cons(x, lst))
```

.right[*às vezes é necessário desenhar para entender...]
