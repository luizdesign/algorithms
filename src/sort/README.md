# Sort Algorithms
Abaixo segue um pouco sobre os alguns dos principais algoritimos de ordenação:

- [Performance](#performance)
- [Insertion Sort](#insertion-sort)
- [Selection Sort](#selection-sort)
- [Bubble Sort](#bubble-sort)
- [Quick Sort](#quick-sort)
- [Merge Sort](#merge-sort)
- [Heap Sort](#heap-sort)
- [Radix Sort](#radix-sort)
- [Shell Sort](#shell-sort)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Performance test
TODO

## Insertion Sort
***Ideia:*** Algoritmo linear que percorre a lista (Array), da esquerda para direita, a partir do segundo registro, analisando cada registro e reposicionando ele para a ordem correta quando necessário.

***Imprementação:*** [./src/sort/insertion.ts](https://github.com/luizdesign/algorithms/blob/master/src/sort/insertion.ts)

***Example:*** [./examples/sort/insertion.ts](https://github.com/luizdesign/algorithms/blob/master/examples/sort/insertion.ts)

**Representação visual do algoritimo**
*(clique para assistir no youtube)*
<a href="http://www.youtube.com/watch?feature=player_embedded&v=ROalU379l3U
" target="_blank"><img src="http://img.youtube.com/vi/ROalU379l3U/0.jpg"
alt="Representação visual do algoritimo Insertion sort representado por um grupo de dança" width="360" /></a>

***Referências:***
- https://www.treinaweb.com.br/blog/conheca-os-principais-algoritmos-de-ordenacao/
- https://www.devmedia.com.br/algoritmos-de-ordenacao-analise-e-comparacao/28261
- https://pt.wikipedia.org/wiki/Insertion_sort
- https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c

---
## Selection Sort
***Ideia:*** Algoritimo que percorre a lista (Array) procurando o menor valor e reposiciona ele em primeiro. Na sequencia procura os segundo menor, depois o terceiro, até reposicionar a lista por completo.

***Imprementação:*** [./src/sort/selection.ts](https://github.com/luizdesign/algorithms/blob/master/src/sort/selection.ts)

***Example:*** [./examples/sort/selection.ts](https://github.com/luizdesign/algorithms/blob/master/examples/sort/selection.ts)

**Representação visual do algoritimo**
*(clique para assistir no youtube)*
<a href="http://www.youtube.com/watch?feature=player_embedded&v=Ns4TPTC8whw
" target="_blank"><img src="http://img.youtube.com/vi/Ns4TPTC8whw/0.jpg"
alt="Representação visual do algoritimo selection sort representado por um grupo de dança" width="360" /></a>

***Referências:***
- https://www.treinaweb.com.br/blog/conheca-os-principais-algoritmos-de-ordenacao/
- https://www.devmedia.com.br/algoritmos-de-ordenacao-analise-e-comparacao/28261
- https://pt.wikipedia.org/wiki/Selection_sort
- https://medium.com/javascript-algorithms/javascript-algorithms-selection-sort-54da919d0513

---
## Bubble Sort
***Ideia:*** O algoritimo percorre a lista (Array) aos pares e ordena o par fazendo os maiores valores flutuarem para a direita. Os pares mantém uma intersecção: o primeiro par é composto pelos indices 0 e 1, o segundo pelos indices 1 e 2, e assim por diante. O processo é repetido até ordenar a lista por completo.

***Imprementação:*** [./src/sort/bubble.ts](https://github.com/luizdesign/algorithms/blob/master/src/sort/bubble.ts)

***Example:*** [./examples/sort/bubble.ts](https://github.com/luizdesign/algorithms/blob/master/examples/sort/bubble.ts)

**Representação visual do algoritimo**
*(clique para assistir no youtube)*
<a href="http://www.youtube.com/watch?feature=player_embedded&v=lyZQPjUT5B4
" target="_blank"><img src="http://img.youtube.com/vi/lyZQPjUT5B4/0.jpg"
alt="Representação visual do algoritimo Bubble sort representado por um grupo de dança" width="360" /></a>

***Referências:***
- https://www.devmedia.com.br/algoritmos-de-ordenacao-analise-e-comparacao/28261
- https://pt.wikipedia.org/wiki/Bubble_sort
- https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2

---
## Quick Sort
***Ideia:*** O algoritimo se baseia de usar um pivot (indice da lista) para dividir a lista em sub-listas ordena-las e junta-las novamente no final. As sub-listas são divididas novamente até possuir uma comparação simples.

***Imprementação:*** [./src/sort/quick.ts](https://github.com/luizdesign/algorithms/blob/master/src/sort/quick.ts)

***Example:*** [./examples/sort/quicksort.ts](https://github.com/luizdesign/algorithms/blob/master/examples/sort/quicksort.ts)

**Representação visual do algoritimo**
*(clique para assistir no youtube)*
<a href="http://www.youtube.com/watch?feature=player_embedded&v=ywWBy6J5gz8
" target="_blank"><img src="http://img.youtube.com/vi/ywWBy6J5gz8/0.jpg"
alt="Representação visual do algoritimo Quick sort representado por um grupo de dança" width="360" /></a>

***Referências:***
- https://www.treinaweb.com.br/blog/conheca-os-principais-algoritmos-de-ordenacao/
- https://www.devmedia.com.br/algoritmos-de-ordenacao-analise-e-comparacao/28261
- https://medium.com/javascript-algorithms/javascript-algorithms-quicksort-beb3169c4d4
- https://pt.wikipedia.org/wiki/Quicksort

---
## Merge Sort
***Ideia:*** O algoritimo conciste em dividir a lista (Array) em partes iguais, ordenar cada sub-lista e mergear cada sub-lista ordenando a cada merge.

***Imprementação:*** [./src/sort/merge.ts](https://github.com/luizdesign/algorithms/blob/master/src/sort/merge.ts)

***Example:*** [./examples/sort/merge.ts](https://github.com/luizdesign/algorithms/blob/master/examples/sort/merge.ts)

**Representação visual do algoritimo**
*(clique para assistir no youtube)*
<a href="http://www.youtube.com/watch?feature=player_embedded&v=XaqR3G_NVoo
" target="_blank"><img src="http://img.youtube.com/vi/XaqR3G_NVoo/0.jpg"
alt="Representação visual do algoritimo Merge sort representado por um grupo de dança" width="360" /></a>

***Referências:***
- https://www.treinaweb.com.br/blog/conheca-os-principais-algoritmos-de-ordenacao/
- https://pt.wikipedia.org/wiki/Merge_sort
- https://medium.com/javascript-algorithms/javascript-algorithms-merge-sort-c1c102b8cfa8

---
## Heap Sort
***Ideia:*** O algoritimo se baseia em montar uma heap (estrutura de dados baseado em árvore binária) ordenando o valor máximo no centro da árvore. A partir desse ponto a ideia é diminuir a heap de tamanho de 1 em 1 e re-construindo a lista na ordem correta.

***Imprementação:*** [./src/sort/heap.ts](https://github.com/luizdesign/algorithms/blob/master/src/sort/heap.ts)

***Example:*** [./examples/sort/heap.ts](https://github.com/luizdesign/algorithms/blob/master/examples/sort/heap.ts)

**Representação visual do algoritimo**
*(clique para assistir no youtube)*
<a href="http://www.youtube.com/watch?feature=player_embedded&v=Xw2D9aJRBY4
" target="_blank"><img src="http://img.youtube.com/vi/Xw2D9aJRBY4/0.jpg"
alt="Representação visual do algoritimo Heap sort representado por um grupo de dança" width="360" /></a>

***Referências:***
- https://pt.wikipedia.org/wiki/Heapsort
- https://www.geeksforgeeks.org/heap-sort/
- https://pt.wikipedia.org/wiki/Heap


---
## Radix Sort
***Ideia:*** O algoritimo se baseia em 3 passos:
1. criar clusters de listas com base no numero de itens na lista: para uma lista de 10 itens sera um cluster de listas de 0 a 9;
2. Normalizar o tamanho dos valores igualando o numero de caracteres. Uma lista de [500, 1, 10, 2] vira [500, 001, 010, 002]
3. Ordenar olhando caracter por caracter da direita para a esquerda. Para [500, 001, 010, 002] será clusterizado olhando 0, 1, 0, 2, na sequencia 0, 0, 1, 1 e por ultimo 5, 0, 0, 0.


***Imprementação:*** [./src/sort/radix.ts](https://github.com/luizdesign/algorithms/blob/master/src/sort/radix.ts)

***Example:*** [./examples/sort/radix.ts](https://github.com/luizdesign/algorithms/blob/master/examples/sort/radix.ts)

**Representação visual do algoritimo**
*(clique para assistir no youtube)*
<a href="http://www.youtube.com/watch?feature=player_embedded&v=ibtN8rY7V5k
" target="_blank"><img src="http://img.youtube.com/vi/ibtN8rY7V5k/0.jpg"
alt="Representação visual do algoritimo Radix sort representado por um grupo de dança" width="360" /></a>

***Referências:***
- https://pt.wikipedia.org/wiki/Radix_sort
- https://www.youtube.com/watch?v=YXFI4osELGU
- https://www.programiz.com/dsa/radix-sort

---
## Shell Sort
***Ideia:*** O algoritimo possui a mesma ideia do [Insertion Sort](#insertion-sort) porém não olhando indices adjacentes. A ideia é analisar indices distantes por um valor X e decrementar esse valor até 1, então por exemplo para X = 4, serão analisados o indice 0 e 4, 1 e 5, etc; depois decrescemos X para 3 por exemplo então analisamos 0 e 3, 1 e 4, etc até que se chegue X em 1.

***Imprementação:*** [./src/sort/shell.ts](https://github.com/luizdesign/algorithms/blob/master/src/sort/shell.ts)

***Example:*** [./examples/sort/shell.ts](https://github.com/luizdesign/algorithms/blob/master/examples/sort/shell.ts)

**Representação visual do algoritimo**
*(clique para assistir no youtube)*
<a href="http://www.youtube.com/watch?feature=player_embedded&v=CmPA7zE8mx0
" target="_blank"><img src="http://img.youtube.com/vi/CmPA7zE8mx0/0.jpg"
alt="Representação visual do algoritimo Shell sort representado por um grupo de dança" width="360" /></a>

***Referências:***
- https://pt.slideshare.net/jackocap/aa-algoritmo-shell-sort
- https://pt.wikipedia.org/wiki/Shell_sort
- https://www.treinaweb.com.br/blog/conheca-os-principais-algoritmos-de-ordenacao/
