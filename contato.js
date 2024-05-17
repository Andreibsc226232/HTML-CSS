<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BSC IT SOLUTIONS</title>
    <link rel="stylesheet" href="../assets/css/contato.css">
</head>
<body>
    <div class="header-container">
        <ul class="menu">
            <li><a href="./index.html">Home</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </div>

    <div class="container">
        <section class="title-form">
            <h2>Preencha o formulário</h2>
        </section>

        <form id="loginForm" class="form" action="pagina_destino.html" method="POST">
            <div class="form-content">
                <label for="username">Nome</label>
                <input type="text" id="username" name="username" placeholder="Digite aqui seu nome" required>
            </div>

            <div class="form-content">
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="Digite aqui seu email" required>
            </div>

            <div class="form-content">
                <label for="password">Senha</label>
                <div class="password-container">
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" required>
                    <p></p>
                    <button type="button" id="togglePassword">Mostrar</button>
                </div>
            </div>

            <div class="form-content">
                <label for="checkbox">Eu li e concordo com os termos de uso</label>
                <div class="checkbox-container">
                    <input type="checkbox" id="checkbox" name="checkbox" required>
                </div>
            </div>

            <button type="submit">Enviar</button>
        </form>
    </div>

    <script src="../assets/scripts/script.js"></script>
</body>
</html>