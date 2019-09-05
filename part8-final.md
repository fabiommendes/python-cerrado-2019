---

class: center, inverse, middle

# Considerações finais
## Funcional ou não?

---

layout: false
class: lambda 

## Arquiteturas funcionais

- Funções são Lego e classes Playmobil
- Compomos funções simples para gerar funções complexas
- Centrado em dados: T(data) -> new_data
- Testáveis e reutilizáveis

---
class: lambda 

## Mas Python não é funcional...

- Sintaxe carregada e imperativa
- Recursão e abstrações podem ser caras
- Pouquíssimas garantias estáticas
- Boas práticas exigem disciplina
- Estruturas de dados inadequadas 
- Mutabilidade em todo canto

---
class: lambda 

## Programação funcional para o bem comum! 

- Entenda o fluxo de dados e não o diagrama de classes
- Favoreça pipelines de dados e iterfaces imutáveis
- Componha funções
    + função boa é uma função pequena
    + evite efeitos colaterais
- Abrace a segunda ordem
- Python pode não ser ideal, </br>mas é suficiente

---
class: lambda 

## Referências

- [Why Functional Programming Matters](https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf)
- [Functional Programming with Python](http://kachayev.github.io/talks/uapycon2012/index.html)
- [Stop writing classes](https://www.youtube.com/watch?v=o9pEzgHorH0)
- [Learn You a Haskell for Great Good!](http://learnyouahaskell.com/)


---
class: lambda 

## Bibliotecas

- Stdlib
    + itertools, functools, operator
- Outros
    + [toolz](https://toolz.readthedocs.io/en/latest/)
    + [fn.py](https://github.com/kachayev/fn.py)
    + [sidekick (beta)](https://pypi.org/project/sidekick/)
    + [django.utils.functional](https://docs.djangoproject.com/en/2.1/_modules/django/utils/functional/)


---
class: lambda 

## Outras linguagens

- ELM: puramente funcional para Frontend
- Haskell: funcional séria
- Scala: funcional + OO
- Scheme: LISP muito utilizada  
- Clojure: uma LISP moderna


---
<iframe width="750" height="500" src="https://www.youtube.com/embed/Ci48kqp11F8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="margin: 4rem auto"></iframe>
