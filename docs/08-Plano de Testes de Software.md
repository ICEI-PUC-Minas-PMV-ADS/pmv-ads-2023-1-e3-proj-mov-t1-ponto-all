
# Plano de Testes de Software

O Plano de Testes de Software é gerado a partir da especificação do sistema e consiste em casos de testes que deverão ser executados quando a implementação estiver parcial ou totalmente pronta.

##  1. Requisitos para Realização do Teste

As seguintes ferramentas serão empregadas neste projeto de testes:

- Navegador da Internet <p> - Chrome, Firefox ou Edge
- Conectividade de Internet para acesso às plataformas (APISs)
- Expo Dev
- Banco de dados SQLite
- Biblioteca de testes xUnit

##  2. Ambiente de teste

- Testes deverão ser desenvolvido com um pequeno volume de dados, baseados em testes manuais.
- Os dados serão criados em tempo real, por desenvolvedores da aplicação e usuários.
- A aplicação será desenvolvida em linguagem React Native, com html, css, JSON.
- Todos os testadores deverão ter configurações de desktop/mobile similares aos que serão disponibilizadas aos colaboradores da empresa.

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

##  3. Abordagem e Detalhamento de Testes<p>

|**Caso de Teste**|**CT-01 –Login**|
| :-: | :-: |
|Requisito Associado|RF-001 <p> - A aplicação deverá permitir que o usuário acesse o sistema com Nome de Usuário e Senha.|
|Objetivo do Teste|Verificar se o usuário consegue realizar cadastro e efetuar login no sistema.|
|Passos|<p>-Acessar o navegador.<p>-Informar ao navegador à URL da aplicação .All.<p>-Selecionar no menu da aplicação a opção login.<p>-Informar dados de login.<p>-Selecionar o botão ENTRAR para efetuar o login.|
|Critério do Êxito| O usuário consegue acessar, informar todos os dados cadastrais e efetuar login sem entraves no sistema.|

|**Caso de Teste**|**CT-02– Efetuar registro de ponto eletrônico**|
| :-: | :-: |
|Requisito Associado|RF-002 A aplicação deve permitir o registro de ponto do colaborador.|
|Objetivo do Teste|Verificar se o usuário já logado consegue efetuar o registro do ponto eletrônico e obter registro.|
|Passos|<p> - Acessar o navegador<br><p> - Informar a URL da aplicação. ALL<br><p> - Realizar login no site.<br><p> - Na página inicial já logada o usuário deve acionar o botão (registrar ponto)<br><p> - Aguardar a confirmação do registro por mensagem na tela.|
|Critério do Êxito| Aparecerá na tela da aplicação “Registro realizado com sucesso”, informado a hora exata da realização do ponto.|

|**Caso de Teste**|**CT-03 Emissão de Relatório de Jornada** |
| :-: | :-: |
|Requisito Associado|RF-003 A aplicação deve permitir que o colaborador emita relatório com relação a sua jornada.|
|Objetivo do Teste|Verificar se o usuário terá sucesso no processo de emissão de relatórios (horas trabalhadas, resuma de horas, banco de horas)|
|Passos|<p>Acessar o navegador<br><p> - Informar a URL da aplicação .ALL<br><p> - Realizar login no site<br><p> - Na página inicial já logada no perfil do usuário, acessar menu na opção Relatórios.<p>-Navegar na página Relatórios <p>-Selecionar relatório desejado no menu de seleção. <p>-Emitir relatório clicando no botão Gerar Relatório.|
|Critério do Êxito| Ser capaz de emitir o relatório.|

|**Caso de Teste**|**CT-04 Gerenciamento de colaboradores**|
| :-: | :-: |
|Requisito Associado|RF-004 A aplicação deve permitir aos administradores o gerenciamento dos colaboradores.|
|Objetivo do Teste|<p> - Verificar que o administrador terá acesso ao gerenciamento dos colaboradores.|
|Passos|<p>-Acessar o navegador<br><p> - Informar a URL da aplicação .ALL<br><p> - Realizar login no site como adm.<p> - Na página inicial já logada no perfil administrador, acessar menu Colaboradores.-Clicar no botão Incluir/Editar Colaborador.|
|Critério do Êxito| O usuário logado como adm consegue incluir colaborador e ou editar os dados.|

|**Caso de Teste**|**CT-05 Visualização das jorandas de trabalho pelo ADM**|
| :-: | :-: |
|Requisito Associado|RF-005 A aplicação deve permitir que o administrador visualize as jornadas realizadas de todos os seus colaboradores.|
|Objetivo do Teste|<p>Verificar que o administrador terá acesso a consulta da jornada realizada registrada pelos colaboradores.|
|Passos|<p>-Acessar o navegador <p>- Informar a URL da aplicação .ALL<p>- Realizar login no site como adm.<p>- Na página inicial já logada no perfil administrador, acessar menu na opção Controle de Jornada de Trabalho.<p>-Visualizar dados da jornada de trabalho dos colaboradores.|
|Critério do Êxito|<p>O usuário logado como administrador consegue ter acesso às informações solicitadas.|

|**Caso de Teste**|**CT-06 Cálculo das jornadas de trabalho**|
| :-: | :-: |
|Requisito Associado|RF-006 A aplicação deve executar o cálculo das jornadas trabalhadas do colaborador.|
|Objetivo do Teste|<p>-Verificar se o usuário conseguirá realizar os cálculos de horas trabalhadas pela aplicação.|
|Passos|<p>Acessar o navegador <p>- Informar a URL da aplicação .ALL<p>- Realizar login no site <p>- Na página inicial já logada no perfil do usuário, acessar menu na opção Relatórios.<p>-Navegar na página Relatórios <p>-Selecionar relatório desejado no menu de seleção. <p>-Emitir relatório clicando no botão Gerar Relatório.|
|Critério do Êxito|<p>O relatório deve conter o cálculo da jornada de trabalho realizada por colaborador.|

|**Caso de Teste**|**CT-07 Geolocalização**|
| :-: | :-: |
|Requisito Associado|RF-007 A aplicação deve possuir marcação de geolocalização para monitoramento do colaborador.|
|Objetivo do Teste|-Verificar o envio das informações de geolocalização do usuário. |
|Passos|<p> - Acessar o navegador<br><p> - Informar a URL da aplicação. ALL<br><p> - Realizar login no site.<br><p> - Na página inicial já logada o usuário deve acionar o botão (registrar ponto)<br><p> - Aguardar a confirmação do registro por mensagem na tela.<p> - A informação da localização deverá aparecer na tela.|
|Critério do Êxito| O endereço do local do usuário ao registrar o ponto deverá ser informado.|

