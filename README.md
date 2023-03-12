
<h1>FIPE - Preço de veículos usados</h1>

<p>O sistema tem por finalidade consultar o preço médio de veículos com base nos dados da Tabela FIPE.</p> 

<p>Os dados são fornecidos pela <a href="https://github.com/deividfortuna/fipe" target="blank">API</a> não oficial da FIPE.</p>

<p>O projeto tem propósitos academicos, em especial com relação ao consumo de dados de uma API REST utilizando ReactJS.</p>

<p>A tela inicial do sistema:</p>
<img src = "src/img/readme/index0.png" alt="Página inicial" />

<p>Para realizar a consulta o usuário deve escolher uma categoria, que quando selecionada carregará as marcas de veículos disponíveis para aquela categoria.</p>

<img src = "src/img/readme/categoria.png" alt="Categorias" width="300"/>

<p>Selecionada a categoria, o sistema carregará as marcas de veículos disponíveis para aquela categoria.</p>

<img src = "src/img/readme/marcas.png" alt="Marcas" width="300"/>
<p>Ao escolher uma marca, o sistema carregará os modelos de veículos existentes para àquela marca</p>
<img src = "src/img/readme/modelo.png" alt="Modelos" width="300" />
<p>Ao escolher um modelo, o sistema carregará os anos de lançamento daquele modelo</p>
<img src = "src/img/readme/ano.png" alt="Anos" width="300" />
<p>Ao escolher o ano veículo, o sistema encontrará o veículo que preenche todos os parâmetros e entregará seu preço médio praticado no mercado de usados, de acordo com a Tabela FIPE.</p>
<img src = "src/img/readme/resultado.png" alt="Resultado da consulta" width=500 />
<h2>Considerações Finais</h2>
<p>Esse projeto serviu-me para aprimorar noções de componentização, bem como vivenciar desafios e buscar soluções em relação ao consumo de dados em formato JSON e sua disponibilização, considerando restrições de acesso (CORS).</p>