# 🚀 VideoAI – Pacote Início Rápido

Este é um modelo funcional para você começar a vender vídeos automatizados com IA.

## 📁 Estrutura do Projeto


## 🛠 Como Colocar Online

### Passo 1: Criar Conta no GitHub
- [github.com](https://github.com)
- Crie um repositório público chamado: `video-ai-inicio-rapido`

### Passo 2: Subir Arquivos
- Arraste todos os arquivos acima para o repositório

### Passo 3: Ativar GitHub Pages
- No GitHub:
  - Acesse **Settings > Pages**
  - Em Source, selecione a branch `main` e a pasta `/root`
  - Salve
- Seu site estará online em:  
  `https://seu-usuario.github.io/video-ai-inicio-rapido/`

### Passo 4: Teste Localmente (Opcional)
- Abra o arquivo `index.html` no navegador para ver como funciona antes de publicar

## 💳 Como Configurar o Pagamento Com Stripe

1. Crie conta no [Stripe Dashboard](https://dashboard.stripe.com/)
2. Na aba "Developers", copie sua **Public Key** (ex: `pk_test_XXXXXXXXXXXXX`)
3. Cole-a no arquivo `checkout.js`, na linha:
   ```js
   const stripe = Stripe('pk_test_XXXXXXXXXXXXXXXXXXXXXXXX');
