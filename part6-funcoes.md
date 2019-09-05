---

class: center, inverse, middle

# Criando funções
## Composição e especialização
---

.left-col[
## Funções
### Especialização
]

.right-col[
Programação funcional depende de mecanismos efetivos para criação e composição de funções

```python
# Tempo sobrando, vida tranquila...
def succ(n: int) -> int:
    """Return the next integer after n"""

    return n + 1

# Ok, se vc tem pressa
succ = lambda n: n + 1

# ou não tem escrúpulos
succ = (1).__add__

# Entra o Sidekick
from sidekick import op, fn, X, Y, placeholder as _

# Usando auto-currying
succ = op.add(1)

# Fábrica de funções
succ = (X + 1)

# Placeholder
succ = fn(_ + 1)
```
]
---

.left-col[
## Funções
### Especialização
### Composição
]

.right-col[
## Juntamos funções simples para construir outras funções específicas

```python
succ = fn(_ + 1)
double = fn(2 * _)
incr_all = sk.map(succ)

next_after_double = double >> succ
```

## Qualquer função pode ganhar estes poderes

```python
@fn
def fat(n):
    return 1 if n <= 0 else n * fat(n - 1)

@fn.curry(2)
def diff_h(h, f):
    return lambda x: (f(x + h) - f(x)) / h

diff = diff(1e-6)
```
]
