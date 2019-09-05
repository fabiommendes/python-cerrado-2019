// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../../usr/lib/node_modules/parcel/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"main.js":[function(require,module,exports) {
"use strict";

var _fs = require("fs");

var part1 = "name: inverse\nlayout: true\nclass: center, middle, inverse\n---\n\n# Programa\xE7\xE3o funcional em Python. Funciona?\n\n## Python Cerrado 2019\n\nF\xE1bio Mac\xEAdo Mendes\n\n---\n\n## Programa\xE7\xE3o orientada a fun\xE7\xF5es\n\n1936, Alonzo Church, C\xE1lculo lambda\n\n---\n\nlayout: false\n.left-col[\n## Lambda\nc\xE1lculo lambda utiliza **apenas** lambdas\n]\n.right-col[\nFun\xE7\xE3o fatorial, implementanda como c\xE1lculo lambda em Python\n\n```python\n(lambda f: lambda x: f(f, x))(\n(lambda f, n: \n  (lambda cond, then, else_: cond(then, else_))(\n    (lambda n: n(lambda _: lambda a, b: b(), \n                 lambda a, b: a()))(n), \n     lambda: lambda f, x: f(x), \n     lambda: (lambda n, m: lambda f, x: \n       n(lambda y: m(f, y), x))(\n         n, \n         f(f, \n           (lambda n: lambda f, x: \n             (lambda k: k(lambda a: a))\n           (n(lambda g: lambda h: h(g(f)), lambda y: x)))\n           (n))))))\n```\n]\n<div class=\"WAT\">WAT??!</div>\n\n---\n.left-col[\n## Python vs. Lambda\n]\n.right-col[\n\n### Python\n\n```python\ndef fat(n):\n    if n == 0:\n        return 1\n    else:\n        return n * fat(n - 1)\n```\nFunciona bem com seres humanos\n\n### Lambda\n```python\n(lambda: lambda f: lambda x: ...)\n```\n1 express\xE3o Python, 208 bytes gzipped, onde acrescentamos:\n- Booleanos e o comando \"if\"\n- Multiplica\xE7\xE3o e subtra\xE7\xE3o de n\xFAmeros naturais\n- Recurs\xE3o de fun\xE7\xF5es\n- (al\xE9m do fatorial)\n]\n\n---\n## Turing, .grey[Hardware] vs. Church, .grey[Software]\n\n.spaced[\n- M\xE1quina de Turing\n    + Assembler <span class=\"red bold\">></span> Gotos <span class=\"red bold\">></span> Programa\xE7\xE3o estruturada (1958, Algol)\n    + O foco mudou para arquitetura e otimiza\xE7\xF5es\n- C\xE1lculo lambda (1958, Lisp)\n    - *\"A programa\xE7\xE3o pode se libertar do estilo Von Neumann?\"*\n    - Haskell (1990)\n    - Renascimento funcional (2000s) \n- Converg\xEAncia\n```java\n// Lambdas em Java e C++!\n(s) -> System.out.println(\"Hello \" + s + \"!\");\n[] (auto s) { cout << \"Hello \" << s << \"!\" << endl; }\n```\n]";
var part2 = "---\nname: inverse\nclass: center, middle, inverse\n\n# Python \xE9 funcional?\n\n---\n\n.left-col[\n## Fun\xE7\xF5es s\xE3o valores\n### Lisp, 1958\n]\n\n.right-col[\n### Definimos uma fun\xE7\xE3o,\n\n```python \ndef add(x, y):\n    return x + y\n```\n\n### salvamos em algum lugar qualquer,\n\n```python \noperators = {'+': add, '-': ...}\n```\n\n### e usamos como uma vari\xE1vel, sem cerim\xF4nias,\n\n```python \nop = '+'\nprint(operators[op](40, 2))\n```\n]\n---\n\n.left-col[\n## Fun\xE7\xF5es s\xE3o valores\n### Lisp, 1958\n### S\xE3o argumentos\n]\n\n.right-col[\n### Criamos uma fun\xE7\xE3o\n\n```python\ndef map(func, lst):\n    result = []\n    for x in lst:\n        result.append(func(x))\n    return result\n```\n\n### que recebe outra fun\xE7\xE3o como argumento\n\n```python\n>>> map(abs, [-1, 2, -3, 4])\n[1, 2, 3, 4]\n```\n]\n\n---\n\n.left-col[\n## Fun\xE7\xF5es s\xE3o valores\n### Lisp, 1958\n### S\xE3o argumentos\n### S\xE3o resultados\n]\n\n.right-col[\n### Fun\xE7\xF5es podem criar e retornar novas fun\xE7\xF5es,\n\n```python\ndef incr_by(n):\n    def incrementer(x):\n        return x + n\n    return incrementer\n```\n\n### onde compomos\n\n```python\n>>> map(incr_by(2), [10, 20, 30, 40])\n[12, 22, 32, 42]\n```\n\n### e transformamos\n\n```python\ndef flip(f):\n    def flipped(x, y):\n        return f(y, x)\n    return flipped\n```\n]\n\n---\n\n.left-col[\n## Fun\xE7\xF5es s\xE3o valores\n### Lisp, 1958\n### S\xE3o argumentos\n### S\xE3o resultados\n### S\xE3o lambdas\n]\n\n.right-col[\n### Lambdas definem fun\xE7\xF5es como express\xF5es\n\n```python\nflip2 = lambda f: lambda x, y: f(y, x)\n```\n\n### Internamente s\xE3o id\xEAnticas \xE0s fun\xE7\xF5es normais\n\n```python\n>>> type(flip2) == type(flip)\nTrue\n```\n### Lambdas s\xE3o limitadas a um \xFAnico comando (porque o Guido quis e \xE9 tudo o que precisamos)\n\n```python\n>>> map(lambda x: 2 * x, [1, 2, 3, 4])\n[2, 4, 6, 8]\n```\n]\n";
var part3 = "---\n\nclass: center, middle, inverse\n\n# Exemplo\n## Lista simplesmente encadeada\n\n---\n.left-col[\n## Lista\n### Imut\xE1vel\n### Eficiente\n### Simples\n]\n\n.right-col[\n\n### Pares de valores terminados em None\n\n```python\nfrom collections import namedtuple\n\ncons = namedtuple('Cell', ['head', 'tail'])\n```\n\n.linked-list[ ]\n]\n\n---\n\n.left-col[\n## Lista\n### Imut\xE1vel\n### Eficiente\n### Simples\n### Folds!\n]\n\n.right-col[\n\n### Precisamos conhecer duas fun\xE7\xF5es\n\nAplica `f` em cada par de elementos reduzindo a lista da direita para a esquerda...\n\n```python\ndef foldr(f, start, lst):\n    if lst is None:\n        return start\n    else:\n        return f(lst.head, foldr(f, start, lst.tail))\n```\n\n...ou da esquerda para a direita\n```python\ndef foldl(f, start, lst):\n    while lst is not None:\n        head, lst = lst\n        start = f(head, start)\n    return start\n```\n]\n\n---\n### Composi\xE7\xE3o\n\n.pull-left[\n```python\nadd = lambda x, y: x + y\n\ndef sum(xs):\n    return fold(add, 0, xs)\n```\n]\n\n.pull-right[\n```python\njoin = lambda x, y: f'{x}, {y}'\n\ndef show(xs):\n    return fold(join, '', xs)\n```\n]\n\n.margin-1.center[\n**Note o padr\xE3o:** fun\xE7\xF5es usam `fold` fixando os primeiros argumentos\n]\n\n.center[\n<i class=\"fa fa-angle-double-down red\" style=\"font-size: 4rem\"></i>\n]\n\n.pull-left[\n```python\nfrom functools import partial\nfrom operator import add, mul\n\n\nsum = partial(fold, add, 0)\nproduct = partial(fold, mul, 1)\nshow = partial(fold, join, '')\n```\n]\n\n.pull-right[\n```python\nfrom sidekick import curry\n\nfold = curry(3, fold)\n\nsum = fold(add, 0)\nproduct = fold(mul, 1)\nshow = fold(join, '')\n```\n]\n\n.center[\nCriamos novas fun\xE7\xF5es por *especializa\xE7\xE3o*\n]\n\n---\n\n## Biblioteca completa de *one-liners**\n\n```python\n# Tamanho da lista\nlength = fold(lambda _, n: n + 1, 0)\n\n# Concatena duas listas\nconcat = flip(foldr(cons))\n\n# Inverte lista\nreverse = foldl(cons, None)\n\n# Aplica fun\xE7\xE3o em cada elemento da lista\nmap = lambda f, xs: foldr(lambda x, y: cons(f(x), y), None, xs)\n\n# Seleciona elementos aceitos pelo predicado\nfilter = lambda pred, xs: foldr(filter_f(pred), None, xs)\n\n# Intercala x nos elementos da lista\nintersperse = lambda x, xs: cons(xs.head, foldr(interspace_f(x), None, xs.tail))\n\n\n# Fun\xE7\xF5es auxiliares\nfilter_f = lambda pred: lambda x, lst: cons(x, lst) if pred(x) else lst\ninterspace_f = lambda sep: lambda x, lst: cons(sep, cons(x, lst))\n```\n\n.right[*\xE0s vezes \xE9 necess\xE1rio desenhar para entender...]\n";
var part4 = "---\n\nclass: center, inverse, powerpuff\n\n# Fun\xE7\xF5es pequenas, mas superpoderosas\n\n---\n\n.left-col[\n## Fun\xE7\xF5es\n### map\n]\n.right-col[\n## Mais .red[map]s e menos .red[for]s\n\nAplica fun\xE7\xE3o em cada termo da lista ou sequ\xEAncia\n\n```python\ndouble = lambda x: 2 * x\n\nmap(double, [1, 2, 3, 4]) == [2, 4, 6, 8]\n```\n\nPode ser aplicada a sequ\xEAncias infinitas\n\n```python\nfrom itertools import count\n\nmap(double, count(1)) == [2, 4, 6, ...]\n```\n\nE usada com fun\xE7\xF5es de v\xE1rios argumentos\n\n```python\nfrom operators import add\n\nmap(add, [1, 2, 3], [4, 5, 6]) == [5, 7, 9]\n```\n]\n\n\n---\n\n.left-col[\n## Fun\xE7\xF5es\n### map\n### filter\n### reduce\n]\n.right-col[\n## Mais .red[filter]s e menos .red[if]s\n\n`filter` preserva apenas os termos aceitos pela fun\xE7\xE3o de predicado\n\n```python\nis_large = lambda x: x >= 10\n\nfilter(is_large, [1, 2, 3, 42]) == [42]\n```\n\n`reduce` reduz sequ\xEAncia usando operador\n\n```python\nfrom functools import reduce\n\nreduce(add, [1, 2, 3, 4]) == 1 + 2 + 3 + 4\n```\n]\n\n\n---\n\n.left-col[\n## Composi\xE7\xE3o\n### The Bad\n]\n\n.right-col[\n## Criamos *pipelines* de processamento de dados\n\n**PROBLEMA:** Remover as entradas nulas, converter para n\xFAmero e calcular o valor m\xE1ximo\n\n```python\ndata = [\"R$100.00\", None, \"R$42.00\", \"R$40.00\", ...]\n\nclean = filter(lambda x: x is not None, data)\nnumbers = map(lambda x: float(x[2:]), clean)\nrichest = reduce(max, numbers)\n```\n\n.pipeline[ ]\n]\n\n\n---\n\n.left-col[\n## Composi\xE7\xE3o\n### The Bad\n### The Good\n]\n\n.right-col[\n## Separando dados do algoritmo\n\nCom auto-currying, o dado fica por \xFAltimo\n\n```python\nimport sidekick as sk\n\nclean_data = sk.filter(lambda x: x is not None)\nto_numbers = sk.map(lambda x: float(x[2:]))\nmaximum = sk.reduce(max)\n\nrichest = maximum(to_numbers(clean_data(data)))\n```\n\nDa\xED, extra\xEDmos o pipeline\n\n```python\nprocess = sk.pipeline(\n    sk.filter(lambda x: x is not None),\n    sk.map(lambda x: float(x[2:])),\n    sk.reduce(max),\n)\n\nrichest = process(data)\n```\n\nTamb\xE9m podemos usar operadores `f >> g >> h`\n]\n\n\n\n---\n\n.left-col[\n## Composi\xE7\xE3o\n### The Bad\n### The Good\n### The Ugly\n]\n\n.right-col[\n## Imperativo\n\n```python\ndef process(data):               # pipeline\n    res = 0                      # reduce\n    for x in data:               # map/filter/reduce?\n        if x is not None:        # filter\n            y = float(x[2:])     # map\n            res = max(x, y)      # reduce\n    return res                   # reduce\n```    \n\n- Longo e aninhado\n- Mistura considera\xE7\xF5es inten\xE7\xF5es\n- N\xE3o abstrai fluxos de controle\n- Infelizmente, \xE9 o que o Python gosta :(\n]";
var part5 = "---\n\nclass: center, inverse, middle\n\n# Iteradores e sequ\xEAncias infinitas\n## (Como ser funcional em um mundo em eterna mudan\xE7a)\n---\n\n.left-col[\n## Iter\xE1veis\n### Cria\xE7\xE3o\n]\n.right-col[\n## Um Iter\xE1vel produz uma sequ\xEAncia de valores\n\nE uma interface previs\xEDvel e minimalista\n\n```python\nit = iter([1, 2, 3, 4])\n\nnext(it) == 1\nnext(it) == 2\n...\n```\n\nTamb\xE9m pode ser criada com fun\xE7\xF5es geradoras\n\n```python\ndef fibos():\n    x, y = 1, 1\n    while True:\n        yield x\n        x, y = y, x + y\n```\n\n(E n\xE3o temos medo de sequ\xEAncias infinitas...)\n]\n\n---\n\n.left-col[\n## Iter\xE1veis\n### Cria\xE7\xE3o\n### Muta\xE7\xE3o\n]\n\n.right-col[\n## Modificamos o iter\xE1vel para revelar informa\xE7\xE3o\n\nVamos calcular a raz\xE3o \xE1urea como o limite de dois \nn\xFAmeros de Fibonacci\n\n```python\nfrom sidekick import X, Y\n\nratios = (y / x for x, y in window(2, fibos()))\nratios = sk.until_convergence((X == Y), ratios)\n```\n\n- `window(n)`: percorre o iterador em uma janela de n elementos\n- `until_convergence(pred)`: termina itera\xE7\xE3o quando predicado for verdadeiro\n]\n---\n\n.left-col[\n## Iter\xE1veis\n### Cria\xE7\xE3o\n### Muta\xE7\xE3o\n### Destrui\xE7\xE3o\n]\n\n.right-col[\n## Finalmente, consumimos o iter\xE1vel\n\n```python\ngolden_ratio = sk.last(ratios)   # 1.618033988749895\n```\n\n### Importante!\n\n- Iteradores s\xE3o radicalmente **mut\xE1veis**\n- Uma vez lido, o iterador \xE9 consumido para sempre\n- Crie um pipeline, passe o iterador somente uma vez\n- Para persist\xEAncia, use listas e tuplas\n\n### Funcional pragm\xE1tico em Python\n\n- **Fun\xE7\xF5es** + **iteradores** + **lazyness**\n- Use imutabilidade e fun\xE7\xF5es puras com modera\xE7\xE3o\n- <i class=\"fa fa-heart red\" style=\"transform: scale(1.5); margin: 0 0.5rem;\"></i> geradores e *list comprehensions*\n\n]\n\n\n---\n\n.left-col[\n## Iter\xE1veis\n### Cria\xE7\xE3o\n### Muta\xE7\xE3o\n### Destrui\xE7\xE3o\n### B\xF4nus\n]\n\n.right-col[\n## Crivo de Erast\xF3tenes\n\n```python\nfrom sidekick.misc.lazylist import LazyList\nfrom sidekick import N\n\ndef sieve(nums):\n    p, nums = sk.uncons(nums)\n    yield p\n    yield from sieve(n for n in nums if n % p != 0)\n\nprimes = LazyList(sieve(N[2, 3, ...]), size='inf')\nprimes == [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...]\n```\n]";
var part6 = "---\n\nclass: center, inverse, middle\n\n# Criando fun\xE7\xF5es\n## Composi\xE7\xE3o e especializa\xE7\xE3o\n---\n\n.left-col[\n## Fun\xE7\xF5es\n### Especializa\xE7\xE3o\n]\n\n.right-col[\nPrograma\xE7\xE3o funcional depende de mecanismos efetivos para cria\xE7\xE3o e composi\xE7\xE3o de fun\xE7\xF5es\n\n```python\n# Tempo sobrando, vida tranquila...\ndef succ(n: int) -> int:\n    \"\"\"Return the next integer after n\"\"\"\n\n    return n + 1\n\n# Ok, se vc tem pressa\nsucc = lambda n: n + 1\n\n# ou n\xE3o tem escr\xFApulos\nsucc = (1).__add__\n\n# Entra o Sidekick\nfrom sidekick import op, fn, X, Y, placeholder as _\n\n# Usando auto-currying\nsucc = op.add(1)\n\n# F\xE1brica de fun\xE7\xF5es\nsucc = (X + 1)\n\n# Placeholder\nsucc = fn(_ + 1)\n```\n]\n---\n\n.left-col[\n## Fun\xE7\xF5es\n### Especializa\xE7\xE3o\n### Composi\xE7\xE3o\n]\n\n.right-col[\n## Juntamos fun\xE7\xF5es simples para construir outras fun\xE7\xF5es espec\xEDficas\n\n```python\nsucc = fn(_ + 1)\ndouble = fn(2 * _)\nincr_all = sk.map(succ)\n\nnext_after_double = double >> succ\n```\n\n## Qualquer fun\xE7\xE3o pode ganhar estes poderes\n\n```python\n@fn\ndef fat(n):\n    return 1 if n <= 0 else n * fat(n - 1)\n\n@fn.curry(2)\ndef diff_h(h, f):\n    return lambda x: (f(x + h) - f(x)) / h\n\ndiff = diff(1e-6)\n```\n]\n";
var part7 = "---\n\nclass: center, inverse, middle\n\n# Como ser pregui\xE7oso\n---\n\n# Lazy programming\n\n\n### pro\xB7cras\xB7ti\xB7nar\nDeixar para outro dia ou para depois; adiar, delongar, postergar*.\n\n.lazy-disclaimer[\n*com a esperan\xE7a de que se enrolar, as coisas se resolver\xE3o\n]\n.lazy[]\n\n---\n\n.left-col[\n## Lazyness\n### Processamento de Dados\n]\n\n.right-col[\n## Geradores e opera\xE7\xF5es em iteradores s\xE3o \"lazy\"\n\n```python\nfrom turtle import fd, lt\nfrom math im    port sqrt\n\nscale = 10  # px\nsk.pipe(\n    fibos(),\n    sk.map(sqrt),\n    sk.map(op.mul(scale)),\n    sk.map(lambda x: fd(x), lt(90)),\n    sk.take(20),\n)\n```    \n\n- Sequ\xEAncias infinitas? Sem problemas\n- Uso de mem\xF3ria eficiente\n- F\xE1cil composi\xE7\xE3o\n- Computa somente o necess\xE1rio\n]\n\n---\n.left-col[\n## Lazyness\n### Processamento de Dados\n### Valores\n]\n\n.right-col[\n## Thunks\n\n```python\nfrom turtle import fd, lt\nfrom math import sqrt\n\ndef thunk(f):\n    def lazy():\n        nonlocal value\n        try:\n            return value\n        except NameError:\n            value = f(*args, **kwargs)\n            return value\n    return lazy\n# (ou from sidekick import thunk)\n\n@thunk\ndef config():\n    with  open('config.json') as fd:\n        cfg  = json.load(fd)\n    return cfg\n\n# inicializa somente uma vez\npath = config()['path']\nrasa_cfg = config()['plugins']['rasa'] \n...    \n```\n]\n\n---\n.left-col[\n## Lazyness\n### Processamento de Dados\n### Valores\n### Classes\n]\n\n.right-col[\n## Classes tamb\xE9m podem ser lazy\n\n```python\nfrom sidekick import alias, delegate_to, lazy\n\nclass Vector:\n    x: float\n    y: float\n\n    size = lazy(lambda self: sqrt(self.x**2 + self.y**2))\n    length = alias('size')\n\n\nclass Arrow:\n    start: Vector\n    step: Vector\n    \n    size = delegate_to('step')\n```    \n]\n\n---\n.left-col[\n## Lazyness\n### Processamento de Dados\n### Valores\n### Classes\n### Zumbis\n]\n\n.right-col[\n## Deferred, Zombies e lazy imports\n\n```python\nfrom sidekick import import_later, zombie, deferred\nfrom django_app.models import User\n\n# Importar m\xF3dulos pesados \npd = import_later('pandas')\n\n# Carregar objetos com inicializa\xE7\xE3o lenta \n# ou que n\xE3o podem ser criados no contexto do\n# m\xF3dulo\nusers = deferred(\n    User.objects\n        .filter(...))\n\n# Objeto assume a classe do proxy ap\xF3s inicializa\xE7\xE3o\nwebmaster = deferred(lambda: \n        User.objects\n            .filter(is_superuser=True)\n            .first())\n```    \n]";
var part8 = "---\n\nclass: center, inverse, middle\n\n# Considera\xE7\xF5es finais\n## Funcional ou n\xE3o?\n\n---\n\nlayout: false\nclass: lambda \n\n## Arquiteturas funcionais\n\n- Fun\xE7\xF5es s\xE3o Lego e classes Playmobil\n- Compomos fun\xE7\xF5es simples para gerar fun\xE7\xF5es complexas\n- Centrado em dados: T(data) -> new_data\n- Test\xE1veis e reutiliz\xE1veis\n\n---\nclass: lambda \n\n## Mas Python n\xE3o \xE9 funcional...\n\n- Sintaxe carregada e imperativa\n- Recurs\xE3o e abstra\xE7\xF5es podem ser caras\n- Pouqu\xEDssimas garantias est\xE1ticas\n- Boas pr\xE1ticas exigem disciplina\n- Estruturas de dados inadequadas \n- Mutabilidade em todo canto\n\n---\nclass: lambda \n\n## Programa\xE7\xE3o funcional para o bem comum! \n\n- Entenda o fluxo de dados e n\xE3o o diagrama de classes\n- Favore\xE7a pipelines de dados e iterfaces imut\xE1veis\n- Componha fun\xE7\xF5es\n    + fun\xE7\xE3o boa \xE9 uma fun\xE7\xE3o pequena\n    + evite efeitos colaterais\n- Abrace a segunda ordem\n- Python pode n\xE3o ser ideal, </br>mas \xE9 suficiente\n\n---\nclass: lambda \n\n## Refer\xEAncias\n\n- [Why Functional Programming Matters](https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf)\n- [Functional Programming with Python](http://kachayev.github.io/talks/uapycon2012/index.html)\n- [Stop writing classes](https://www.youtube.com/watch?v=o9pEzgHorH0)\n- [Learn You a Haskell for Great Good!](http://learnyouahaskell.com/)\n\n\n---\nclass: lambda \n\n## Bibliotecas\n\n- Stdlib\n    + itertools, functools, operator\n- Outros\n    + [toolz](https://toolz.readthedocs.io/en/latest/)\n    + [fn.py](https://github.com/kachayev/fn.py)\n    + [sidekick (beta)](https://pypi.org/project/sidekick/)\n    + [django.utils.functional](https://docs.djangoproject.com/en/2.1/_modules/django/utils/functional/)\n\n\n---\nclass: lambda \n\n## Outras linguagens\n\n- ELM: puramente funcional para Frontend\n- Haskell: funcional s\xE9ria\n- Scala: funcional + OO\n- Scheme: LISP muito utilizada  \n- Clojure: uma LISP moderna\n\n\n---\n<iframe width=\"750\" height=\"500\" src=\"https://www.youtube.com/embed/Ci48kqp11F8\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen style=\"margin: 4rem auto\"></iframe>\n";
var mdData = part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8;
var source = document.querySelector('#source');
source.innerHTML = mdData;
var slideshow = remark.create();
},{"fs":"../../../../../usr/lib/node_modules/parcel/src/builtins/_empty.js"}],"../../../../../usr/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44563" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/lib/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map