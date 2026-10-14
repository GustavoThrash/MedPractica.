PRÁCTICA ANATÓMICA — VERSÃO PARA INSTALAR NO IPHONE

O que é
Esta pasta transforma o simulador HTML em um PWA: um site que pode ser adicionado à tela inicial do iPhone e abrir em modo de app. Não é um aplicativo publicado na App Store.

IMPORTANTE
O site precisa estar publicado em um endereço HTTPS para poder ser adicionado à tela inicial e usar o modo offline. O arquivo HTML aberto diretamente do computador não é suficiente.

PUBLICAR GRATUITAMENTE COM GITHUB PAGES
1. No computador, extraia todos os arquivos deste ZIP para uma pasta.
2. Entre em https://github.com e crie uma conta ou faça login.
3. Crie um repositório novo chamado practica-anatomica. Para usar o GitHub Pages grátis, deixe-o público.
4. Abra o repositório e escolha Add file > Upload files.
5. Envie os ARQUIVOS E A PASTA icons que estão dentro desta pasta extraída. Não envie só o ZIP. O index.html, manifest.webmanifest, sw.js e a pasta icons precisam ficar na raiz do repositório.
6. Clique em Commit changes.
7. No repositório, abra Settings > Pages.
8. Em Build and deployment, escolha Deploy from a branch. Escolha Branch: main e Folder: /(root), depois Save.
9. Aguarde o GitHub Pages publicar e abra o endereço exibido na própria página Settings > Pages. Ele normalmente se parece com https://SEU-USUARIO.github.io/practica-anatomica/.

ADICIONAR AO IPHONE
1. No iPhone, abra o endereço publicado usando o Safari (não um navegador embutido de outro aplicativo).
2. Toque em Compartilhar.
3. Escolha Adicionar à Tela de Início.
4. Se aparecer, ative “Abrir como App da Web”.
5. Toque em Adicionar. O ícone Práctica Anatómica aparecerá na tela inicial.

USO E DADOS
- Cadastre pelo menos 10 estruturas antes de iniciar uma prova.
- As estruturas e imagens ficam guardadas no armazenamento local desse navegador/instalação. Não há conta nem sincronização entre dispositivos.
- Os resultados das provas não são gravados como histórico.
- A primeira visita deve ser feita com internet. Depois que os arquivos forem armazenados em cache, o site poderá abrir sem conexão; o comportamento pode variar conforme a gestão de armazenamento do iOS.
- Guarde cópias das imagens originais. Limpar os dados do site ou remover o app pode apagar o banco de questões local.

ARQUIVOS PRINCIPAIS
index.html             O simulador
manifest.webmanifest   Nome, ícones e comportamento de instalação
sw.js                 Cache do site para uso offline
icons/                Ícones do app


NOVA FUNÇÃO — REVISÃO AUTOMÁTICA DE ERROS
Ao terminar cada simulado, as questões erradas ou não respondidas ficam pendentes para o próximo simulado de 10 questões. Questões pendentes aparecem obrigatoriamente no simulado seguinte; as vagas restantes são preenchidas por outras estruturas aleatórias. Uma questão sai da revisão quando for respondida corretamente. O app guarda apenas os IDs das questões pendentes, não um histórico de provas. Para receber esta atualização no GitHub Pages, substitua index.html e sw.js pelos arquivos atualizados e faça commit.


REVISÃO ATIVA (v5): o progresso de cada estrutura (Nueva / En revisión / En aprendizaje / Dominada, acertos seguidos e erros) agora fica salvo junto com a própria estrutura no IndexedDB. Dominada = 3 acertos seguidos; qualquer erro volta para En revisión. Resposta não confirmada até o tempo acabar conta como sem responder. Substitua index.html e sw.js no GitHub.
