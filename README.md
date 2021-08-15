# Facile

## Acesse https://facilechallenge.herokuapp.com/

## Requisitos
 - Docker 20.10.7 
 - VSCODE

## Usabilidade

- git clone https://github.com/forestus/facile-challenge-backend
- code facilechallenge
- é necessário que voce configure as variaveis de ambiente neste estágio, segue abaixo uma descrição para configuração.
- docker-compose up (verifique se nao tem nenhum container com node ou postgres rodando antes)

## Configuração variaveis de ambiente

 - algumas variaveis precisam ser preenchidas no ormconfig.json e em um arquivo .env(basta seguir um modelo ".env.example" na raiz do projeto) para configuração do banco postgres.
</br>
</br>
 - No arquivo enviroment ".env" são necessários os campos abaixos: </br>

DATABASE_NAME= </br>
DATABASE_USERNAME= </br>
DATABASE_PASSWORD= </br>
DATABASE_HOST= </br>

 - No arquivo typeorm config "ormconfig.json" são necessários os campos abaixos: </br>

username: </br>
password: </br>
database: </br>
host: </br>

### OBS.: OS CAMPOS ACIMA DEVEM ESTAR IGUAIS QUANTO AO VALUE.
</br>

 - Para configurar a aplicação é necessário informar uma senha secreta em HASH também juntamente ao arquivo .env anterior e juntamente o NODE_ENV=development para que a configuração junto ao docker funcione corretamente.
 - Para subir a aplicação para o heroku é necessário que voce configurei os enviroments diretamente no heroku, NODE_ENV precisa ser colocado como "production"
</br>
</br>

## DOCKER
</br>

 - Ele possui duas configurações de execução, e é possível modificar no próprio arquivo docker-compose mudando "./.docker/entrypoint-dev.sh" para  "./.docker/entrypoint.sh", por padrão o projeto sera iniciado em modo de desenvolvimento ou seja irá iniciar pelo typescript aceitando modificações no código e reiniciando com ts-node-dev.


 - O Arquivo shell para entrypoint-dev irá executar a aplicação em modo de desenvolvimento diretamente no typescript e o entrypoint irá executar a aplicação ja no build com pm2 em unica instância, apenas para testar.
