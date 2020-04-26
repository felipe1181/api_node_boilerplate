##arquitetura nodejs boilerplate
 

```
Representação estrutural:

src
 |   app.js           #Classe app inicializa as configurações do servidor
 |   server.js       #Server para iniciar o app
 |___app             
     |_____controllers   # Deve-se preocupar em aceitar requisições, repassar para os serviços corretos.
     |_____models        # Determina a estrutura lógica que representa uma entidade do banco de dados
     |_____services       # Regras de negócio.
     |_____subscribers # Eventos async - serviços de terceiros.
      |_____jobs              # Rotinas, camada para armazenar tarefas
 |_____database         # Onde organizamos as migrations.
 |_____config              # Configuração das variáveis de ambiente.
      |_____env.js          # Arquivo de configuração das variáveis de ambiente.
      |_____database.js # Arquivo de configuração de conexão com banco de dados.
 |_____constants        # Constantes dentro da aplicação, mensagens de erro..etc.
 |_____middlewares   # Configuração dos middlewares, como cors helmet etc
 |_____utils/helpers    # Trechos de código pequeno.
 |_____routes              # Definição de rotas express.
 |_____types               # Tipagem (d.ts) para Typescript.
```
