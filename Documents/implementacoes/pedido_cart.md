# NIVEIS DELEGACOES E IMPLEMENTACOES PEDIDO - CARRINHO - CARRINHO SERVICE

O Pedido é classe AltoNivel :

- tudo que ele precisa fazer ele delega pro SubAltonivel Cart

> Cart é SubAltoNivel:

- tudo que o AltoNivel Pedido delegou a ela ela terceirizou para o BaixoNivel CartService

> CartService é o BaixoNivel :
> ele que implementa as operacoes delegadas pelo AltoNivela/SubNivel/BaixoNivel_Implementa

---
