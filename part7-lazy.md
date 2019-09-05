---

class: center, inverse, middle

# Como ser preguiçoso
---

# Lazy programming


### pro·cras·ti·nar
Deixar para outro dia ou para depois; adiar, delongar, postergar*.

.lazy-disclaimer[
*com a esperança de que se enrolar, as coisas se resolverão
]
.lazy[]

---

.left-col[
## Lazyness
### Processamento de Dados
]

.right-col[
## Geradores e operações em iteradores são "lazy"

```python
from turtle import fd, lt
from math im    port sqrt

scale = 10  # px
sk.pipe(
    fibos(),
    sk.map(sqrt),
    sk.map(op.mul(scale)),
    sk.map(lambda x: fd(x), lt(90)),
    sk.take(20),
)
```    

- Sequências infinitas? Sem problemas
- Uso de memória eficiente
- Fácil composição
- Computa somente o necessário
]

---
.left-col[
## Lazyness
### Processamento de Dados
### Valores
]

.right-col[
## Thunks

```python
from turtle import fd, lt
from math import sqrt

def thunk(f):
    def lazy():
        nonlocal value
        try:
            return value
        except NameError:
            value = f(*args, **kwargs)
            return value
    return lazy
# (ou from sidekick import thunk)

@thunk
def config():
    with  open('config.json') as fd:
        cfg  = json.load(fd)
    return cfg

# inicializa somente uma vez
path = config()['path']
rasa_cfg = config()['plugins']['rasa'] 
...    
```
]

---
.left-col[
## Lazyness
### Processamento de Dados
### Valores
### Classes
]

.right-col[
## Classes também podem ser lazy

```python
from sidekick import alias, delegate_to, lazy

class Vector:
    x: float
    y: float

    size = lazy(lambda self: sqrt(self.x**2 + self.y**2))
    length = alias('size')


class Arrow:
    start: Vector
    step: Vector
    
    size = delegate_to('step')
```    
]

---
.left-col[
## Lazyness
### Processamento de Dados
### Valores
### Classes
### Zumbis
]

.right-col[
## Deferred, Zombies e lazy imports

```python
from sidekick import import_later, zombie, deferred
from django_app.models import User

# Importar módulos pesados 
pd = import_later('pandas')

# Carregar objetos com inicialização lenta 
# ou que não podem ser criados no contexto do
# módulo
users = deferred(
    User.objects
        .filter(...))

# Objeto assume a classe do proxy após inicialização
webmaster = deferred(lambda: 
        User.objects
            .filter(is_superuser=True)
            .first())
```    
]