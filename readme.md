
<h1>Aplicativo de Previsão do tempo  </h1>
<h3> Sobre o Projeto</h3>

Desenvolvido para o Projeto Integrador do Centro Universitário SENAC , o presente projeto tem por objetivos:

- Fornecer previsão do tempo, para o dia e para as próximas horas.
- Qualidade do ar e níveis de raio UV (Baixo, Moderado, Alto). 
- Informar ao usuário  se o tempo é adequado para fazer atividades ao ar livre.


<h3>Tecnologias Utilizadas</h3>

**Back End**
- Axios(biblioteca JavaScript que é utilizada para fazer requisições HTTP a um servidor)
- Fetch Api(A Fetch API é uma interface JavaScript para fazer requisições HTTP em um navegador)

**Front End**
- Vite <br/>Ferramenta de construção de aplicativos web usada com o React e o TypeScript. Ela oferece um ambiente de desenvolvimento rápido que usa um servidor de desenvolvimento com recarga rápida, além de uma configuração otimizada para produção para compilar e empacotar o código para implantação.

- Typescript <br/>Linguagem de programação que é uma extensão do JavaScript. Ela adiciona recursos ao JavaScript, como tipagem estática, interfaces, classes e outras funcionalidades de programação orientada a objetos.

- React (Biblioteca JavaScript para construir interfaces de usuário (UI) reutilizáveis e componentizadas)

<h3> API's Utilizadas</h3>

- [Open UV]( https://api.openuv.io/api/v1/forecast?lat=${location.latitude}&lng=${location.longitude}&alt=100&dt=): **API indice UV para fins de teste.**

- [Open Wheater]( http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=8fbf9d865cca5419dae8674766dec0f6) **API para pegar os dados de temperatura qualidade do ar e tempo.**



<h3> Tela do Aplicativo </h3>

![Tela do aplicativo no Desktop](https://github.com/PIntegrador2023/projeto-integrador/blob/main/Tela%20do%20aplicativo%20no%20Desktop.jpg)

  
<h3>Passo a passo para Instalação/Execução do APP:</h3>

- O primeiro passo é acessar a pasta raiz do projeto e instalar o npm através do comando "npm install":

- O segundo passo é a instalação das bibliotecas abaixo dentro da pasta raiz do programa:

1) React Icons (comando: npm i react-icons)

2) Axios(comando:npm i axios)

3) moment(comando: npm i moment)

- Por fim, digite o comando "npm run dev" em seu terminal (dentro da pasta raiz do programa) para executar o projeto.

<h3> Consultar a documentação do Site:</h3>

[Open Wheater](https://openweathermap.org/)

<h3>Os Autores:</h3>

- Amanda Pereira Santana
- André Nascimento Barros 
- David Sales Bohrer
- Lilian Cavalcanti Taurino
- Mauricio Dall Onder
