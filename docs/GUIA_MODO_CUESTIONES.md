# Modo Cuestiones — guia de uso e publicação

O MedPráctica agora tem três modos independentes por região: Banco de imágenes, Examen práctico e Modo Cuestiones.

## Usar o modo

1. Abra uma região (por exemplo, Cabeza).
2. Toque em **Modo Cuestiones**.
3. Inicie o questionário. A sessão escolhe até 10 perguntas daquela região.
4. Ao marcar uma alternativa, o app informa a resposta correta e mostra a explicação. O resultado aparece ao terminar.
5. As perguntas erradas são priorizadas em futuras sessões neste dispositivo; acertar uma pergunta remove-a da revisão pendente.

O progresso do Modo Cuestiones fica separado do progresso do Examen práctico.

## Cadastrar e publicar perguntas

1. Entre no **Modo administrador** pelo botão discreto no rodapé. A senha atual vem de `config.js`; troque-a antes de publicar se ainda estiver usando a senha padrão.
2. Abra a região desejada → **Modo Cuestiones** → **Gestionar preguntas**.
3. Cadastre o enunciado, quatro alternativas A–D, a alternativa correta e, de preferência, uma explicação.
4. Clique em **Descargar banco**. O app baixa `preguntas.json` com o banco completo, incluindo todas as regiões.
5. No GitHub, substitua `data/preguntas.json` pelo arquivo baixado e faça Commit changes. Após o Pages atualizar e os dispositivos se conectarem, todos terão o banco publicado. O aplicativo mantém também uma cópia em cache para uso offline.

Importante: até publicar o arquivo exportado no GitHub, os novos itens/edições ficam somente no dispositivo em que foram cadastrados. A autenticação local já existente do modo administrador não é um serviço de segurança forte; o acesso real de edição continua dependendo do controle do repositório e, se configurado, das políticas Supabase.

## Formato do arquivo

`data/preguntas.json` é uma lista de objetos. Cada pergunta usa este formato:

```json
{
  "id": "mcq-cabeza-006",
  "region": "cabeza",
  "topic": "Órbita",
  "prompt": "¿Por dónde pasa el nervio óptico?",
  "options": ["Foramen oval", "Conducto óptico", "Foramen yugular", "Fisura orbitaria inferior"],
  "correctIndex": 1,
  "explanation": "El nervio óptico atraviesa el conducto óptico.",
  "updatedAt": 1792100000036
}
```

- `region`: `torax`, `cuello`, `cabeza` ou `abdomen`.
- `options`: exatamente quatro alternativas.
- `correctIndex`: índice da resposta certa, começando em zero (`0` = A, `1` = B, `2` = C, `3` = D).
- `id`: deve ser único e estável para aquela pergunta.

O banco incluído tem questões de exemplo para permitir testar imediatamente o fluxo; você pode editá-las e ampliar o conteúdo pelo gerenciador do próprio app.
