






---
#### Nota sobre decoradores: repassando argumentos

```python
def add(x, y):
    return x + y

>>> add(1, 2)
3
>>> args = (1, 2)
>>> add(*args)
3
>>> kwargs = {'x': 1, 'y': 2}
>>> add(**kwargs)
3
```
@[1-2] (Definimos uma função)
@[4-5] (Chamada de função "tradicional")
@[6-8] (Passando lista de argumentos)
@[9-11] (Passando argumentos por nome)




---
## Conceitos de programação funcional:
### Funções puras

--- 
### Funções puras

Calcula um valor para cada grupo de argumentos (e não faz mais nada além disto)

```python
def pura(x, y):
    # Não produz efeitos colaterais
    # Não modifica estado global
    # Não depende de estado global mutável
    # Não tem saídas aleatórias
    # Não pode modificar estrutura de dados mutáveis
    # Não faz IO
    return x + y
```
@[2]
@[3]
@[4]
@[5]
@[6]
@[7]
@[1-8](Funções no sentido matemático)
@[1-8](Funções puras são definidas pela interface e não pela implementação)


---
### Anti-patterns

```python
def join_lists(list_a, list_b):
    list_a.extend(list_b)
    return list_a

def impura_disfarçada(x, y):
    if random.random() < 0.01:
        dispare_os_mísseis()
    return x + y
```
@[1-3](Modifica objeto mutável)
@[5-8](Parece função, mas não é)
@[1-8](Python é uma linguagem impura: pureza precisa ser mantida por disciplina)


---
### Pureza

- Testáveis e fáceis de entender
- Menos bugs
- Paralelizável
- Reutilizável





--- 
### Explosão de Lambdas

```python
to_table = compose(
    str.splitlines,
    lambda lines: map(lambda line: line.split(','), lines),
    lambda lines: map(lambda line: map(float, line), lines),
)
```
@[2] (Separa string em linhas)
@[3] (Mapeia função para separar linhas nas vírgulas)
@[4] (Aplica a função float a cada elemento)
@[1-5] (Código semi-ilegível)


--- 
### Podemos mudar o map e simplificar

```python
def fmap(f): 
    return lambda data: map(f, data)

split = lambda sep: lambda st: st.split(sep)

to_table = compose(
    str.splitlines,
    fmap(split(',')),
    fmap(fmap(float)),
)
```
@[1-2] (Recebe f e retorna função que aplica f no argumento com map)
@[8-9] (Não precisamos criar o lambda que recebe as linhas)
@[4] (Generalizamos o split)


--- 
### Currying

```python
add = lambda x, y: x + y
add_curried = lambda x: lambda y: x + y

>>> add(1, 2), add_curried(1)(2)
(3, 3)
>>> succ = add_curried(1)
>>> succ(41)
42
```
@[2] (Recebe um argumento por vez e retorna funções que esperam os argumentos restantes)
@[4-5] (A assinatura não fica particularmente bonita)
@[6] (É fácil de criar novas funções por aplicação parcial)
@[7-8]


--- 
### Auto-Curry

```python
def curry(arity, f):
    def curried(*args, **kwargs):
        if len(args) >= arity:
            return f(*args)
        return lambda *extra: curried(*args, *extra)
    return curried

curry = curry(2, curry)

@curry(2)
def add(x, y):
    return x + y
```
@[10-12] (Podemos fazer um curry automático?)
@[1] (Aridade = número de argumentos esperados)
@[3-4] (Retorna se receber todos argumentos)
@[5] (Caso contrário, retorna uma aplicação parcial)
@[8] (Aplicamos no próprio curry para usá-la como decorador)
@[10-12]



---
## Conceitos de programação funcional:
### Geradores, iteradores, etc

---
### Lazyness

@ul
- Estruturas de dados funcionais são imutáveis
- Em Python não são...
- Mas abstrai sequências como iteratores de forma consistente
- Num iterador, usamos cada valor somente uma vez
@ulend


---
### Compreensões de lista

```python
def map(func, lst):
    return [func(x) for x in lst]

def filter(pred, lst):
    return [x for x in lst if pred(x)]
```

@[1-2] (Sequência de valores gerada por um laço for)
@[4-5] (É possível filtrar valores utilizando um "if")


---
### Nota: Também temos dicionários, conjuntos e geradores

```python
lazy = (func(x) for x in lst)
conjunto = {func(x) for x in lst}
dicionario = {x: func(x) for x in lst}
```

---
### Geradores 

```python
def fibos():
    x, y = 1, 1
    yield from (x, y)
    
    while True:
        x, y = y, y + x
        yield y

# Loop infinito: objectos são calculados sob demanda
for x in fibos():
    print(x)    
```
@[9-11] (Extraímos elementos chamando gerador em um laço for ou criando lista)
@[1] (Geradores são funções que "retornam" várias vezes)
@[7] (yield retorna um valor, mas não interrompe a função)
@[3] (yield from retorna todos valores de uma lista)


---
### Dicas
#### (para fazer em casa...)


---
### Manipulando iteradores

```python
>>> itertools.count()
0, 1, 2, 3, ...
>>> map(f, [a, b, c, ...])
f(a), f(b), f(c), ...
>>> filter(pred, [ok_a, bad, ok_b, ...])
ok_a, ok_b, ...
>>> functools.reduce(f, [a, b, c, ...])
f(f(f(a, b), c), ...)
>>> itertools.chain([a, b], [c, d, ...])
a, b, c, d, ...
>>> itertools.islice([a, b, c, ...], 0, 3)
a, b, c
```
@[1-2] (Conta números indefinidamente)
@[3-4] (Aplica f em cada elemento do iterador)
@[5-6] (Mantêm apenas elementos em que pred(ok) == True)
@[7-8] (Reduz o iterador pela aplicação de operador)
@[9-10] (Junta dois ou mais iteráveis)
@[11-12] (Fatia iterador como se fosse lista)




---
## Receitas
#### (algoritmos)


---
### Raiz de um número

* Raiz de x: iteramos a relação de recorrência r' = (x/r + r) / 2
* Inicia-se tipicamente em x=1
* Convergência rápida


---
### Recorência
#### (vamos construir nosso arsenal funcional)

```python
@curry(2)
def repeat(r, f):
    yield r
    while True:
        r = f(r)
        yield r

>>> rec_sqrt_2 = lambda r: 0.5 * (2 / r + r)
>>> repeat(1.0, rec_sqrt_2)
1.0, 1.5, 1.41666, 1.4142156862745097, ...
```
@[7] (Definimos relação de recorrência)
@[8-9] (Gera um stream infinito)
@[2] (Gera valor sem aplicar)
@[4-5] (Aplica função e gera)
@[1-5] (Trata-se de um gerador infinito)


---
### Convergência
#### (sabendo quando parar)

```python
def within(eps, it):
    it = iter(it)
    y = next(it)
    for x in it:
        if abs(x - y) < eps:
            return x
        y = x

>>> within(0.1, repeat(1.0, rec_sqrt_2))
1.0, 1.5, 1.41666
```
@[3] (Extrai o primeiro elemento do iterador)
@[4] (Retorna os termos subsequentes, comparando com o anterior)
@[5-6] (Para quando a diferença estiver na tolerância)


---
### Juntamos tudo

```python
def sqrt(y):
    return within(1e-9, repeat(1, rec_sqrt(y)))

req_sqrt = lambda x: lambda r: 0.5 * (x / r + r)
sqrt = compose(rec_sqrt(y),
               repeat(1),
               within(1e-9)) 
```
@[1-2] (Mantemos algum apego ao Python tradicional)
@[3] (Onde definimos a relação de recorrência "curried")
@[5-7] (Funcional nota 10)
@[5] (Fácil trocar a regra de recorrência...)
@[7] (...e o critério de convergência)
@[6] (além de explorar convergência acelerada e outros métodos)


---
## Melhore seu kung-fu

---
### Python não é funcional...

@ul
- Não acredite em "multiparadigma"
- Exige disciplina
- Mutabilidade em todo canto
- Estruturas de dados e tipos inadequadas
- Sintaxe carregada e imperativa
- Recursão e abstrações podem ser caras
- Pouquíssimas garantias estáticas
@ulend


---
### The good

@ul
- Funções são valores
- Geradores e iteradores
- Lambdas
- Expressiva: libs podem usar truques de sintaxe para criar idiomas mais naturais
@ulend


---
### Programação funcional para o bem comum! 

@ul
- Entenda o fluxo de dados e não o diagrama de classes
- Mostre seus dados com iterfaces imutáveis
- Componha funções
    + função boa é uma função pequena
    + prefira funções puras
- Não tenha medo da segunda ordem
- Use iteradores sempre que possível
@ulend



---
## P/ casa: Orientação a objetos
### Conciliação e disputa


---
### Mais funções, menos classes

```python
class Class:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def func(self, c):
        return do_something(self.a, self.b, c)

def func(a, b, c):
    return do_something(a, b, c)

func(a, b, c) == Class(a, b).func(c)

obj = Class(a, b, c)
obj = functools.partial(func, a, b)
obj_alt = functools.partial(func, a)
```
@[1-8] (Falsa classe)
@[10-13] (Na verdade é uma função)
@[15-17] ("objeto" é uma aplicação parcial)


---
### Menos herança, mais reaproveitamento

```python
apply = lambda f, attr: lambda self: func(getattr(self, attr))

class ClassA:
    def common(self): pass
    
class ClassB:
    common = ClassA.common
    answer = lambda self: 42
    method = apply(some_func, 'attribute')
```
@[1-9] (Herança = "é um", não "tem mesmos métodos que")


---
### Menos trabalho agora

```python
from sidekick import lazy
from dataclasses import dataclass

@dataclass
class Vec:
    x: float
    y: float

    abs = lazy(lambda self: sqrt(self.x**2 + self.y**2))
    abs_ = property(lambda self: sqrt(self.x**2 + self.y**2))
```
@[4] (Inicialização atrasada)
@[5] (Resultado sem cache)


---
### Abuse de protocolos

- Reutilize APIs conhecidas
- Conheça o módulo `collections`
- Favoreça builtins no lugar de classes próprias
- Conheça types.SimpleNamespace e collections.namedtuple
- Conheça os protocolos: iterable, iterator, decorator, context manager, descriptor, class, etc...


---
### Saiba fazer DSLs
#### (e use com moderação)

```python
from operator import *
from functools import partial

bin_op = (
    lambda op: lambda self, other:
    op if other is _ else partial(op, other))

class placeholder:
    __add__ = bin_op(add)
    __mul__ = bin_op(mul)
    ...
<div>
_ = placeholder()
incr = _ + 1
half = _ / 2
inverse = 1 / _
add = _ + _
```

---
### Conciliação

@ul
- Substitua classes inúteis por funções
- Favoreça classes imutáveis
- Use protocolos estabelecidos, crie valores versáteis
- Entenda o que a classe representa
- Seja preguiçoso
@ulend



---
## Saiba mais
### Referências, projetos, linguagens, etc


---
### Referências

- [Why Functional Programming Matters](https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf)
- [Functional Programming with Python](http://kachayev.github.io/talks/uapycon2012/index.html)
- [Stop writing classes](https://www.youtube.com/watch?v=o9pEzgHorH0)
- [Learn You a Haskell for Great Good!](http://learnyouahaskell.com/)


---
### Bibliotecas

- Stdlib
    + itertools, functools, operator
- Outros
    + [toolz](https://toolz.readthedocs.io/en/latest/)
    + [fn.py](https://github.com/kachayev/fn.py)
    + [sidekick (beta)](https://pypi.org/project/sidekick/)
    + [django.utils.functional](https://docs.djangoproject.com/en/2.1/_modules/django/utils/functional/)


---
### Outras linguagens

- ELM: puramente funcional para Frontend
- Haskell: funcional séria
- Scala: funcional + OO
- Scheme: LISP muito utilizada  
- Clojure: uma LISP moderna
</div>