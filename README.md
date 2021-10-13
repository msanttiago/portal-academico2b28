# portal-academico

### dependencias do sistema de login

npm i passport passport-local express-session brcrypt

# passport (http://www.passportjs.org/docs/downloads/html/)

passport é a autenticação middleware para node. ele foi projetado para servir a um proposito singular: autenticar pedidos. Ao escrever módulos o encapsulamento é uma virtude, então o passport delega todas as outras funcionalidades para o aplicativo .
essa separaçao de preocupaçoes mantem o codigo limpo e mantenedor, e torna o passport extremamente fácil de integrar em um aplicativo.

o passport reconhece que cada aplicativo tem requisitos exclusivos de autenticação. os mecanismos de autenticação são conhecidos como "estrategias".


passport-local
(http://www.passportjs.org/packages/passport-local)

estrategia de passport para autenticação com nome de usuario e senha.

express-session

quando o cliente faz uma solicitação de login no servidor, o servidor criará uma sessão e armazenará no lado do servidor. quando o servidor responde ao cliente, ele envia um cookie.