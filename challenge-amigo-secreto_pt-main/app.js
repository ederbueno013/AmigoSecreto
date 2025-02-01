let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    if (nome) {
        if (amigos.includes(nome)) {
            alert('Adicione outro nome, ele já foi registrado.');
            input.value = '';
            input.focus();
        } else {
            amigos.push(nome);
            atualizarLista();
            input.value = '';
            input.focus();
        }
    }
    
}

    function atualizarLista() {
        const lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        amigos.forEach((amigo, index) => {
            const li = document.createElement('li');
            li.textContent = amigo;
            lista.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (amigos.length < 2) {
            alert('Adicione pelo menos dois amigos para sortear.');                   
            return;
        }           
        
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = '';

        const sorteio = [...amigos];
        sorteio.sort(() => Math.random() - 0.5);

        sorteio.forEach((amigo, index) => {
            const li = document.createElement('li');
            const proximo = sorteio[(index + 1) % sorteio.length];
            li.textContent = `${amigo} tirou ${proximo}`;
            resultado.appendChild(li);
        });
    }