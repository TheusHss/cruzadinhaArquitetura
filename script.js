function start() {
    paiHr()
    btn1.style.display = "none"
    btn2.style.display = "block"
    n1.style.display = "block"
    frase.innerHTML = "É o “cérebro” de todo computador: trata-se do componente responsável por executar todas as operações necessárias para o funcionamento do dispositivo."
}
var seg = 60;
var min = 4;
function ok() {
    window.location.href = "index.html"
}
function paiHr() {
    if (min <= 0 && seg <= 0) {
        perdeuID.style.display = "flex"
        document.querySelector(".boxPalavras").style.display = "none"
        boxPerguntas.style.display = "none"



        setTimeout(() => {
            window.location.href = "index.html"
        }, 10000);
    }
    else if (seg >= 0 && min >= 0) {

        if (seg == 00) {
            min--
            seg = 59
        }
        seg--
        segu.innerHTML = `${seg}`
        minu.innerHTML = `${min}`
        setTimeout(paiHr, 1000)
    }
}
var cora= 0
var cont = -1;
function ir() {
    var respo = n1.value.toLowerCase()
    n1.value = ''
    if (respo == 'cpu' && cont == -1) {
        cont++
        document.querySelectorAll('#cpu').forEach(iten => iten.classList.add("aparecer"))
        n1.placeholder="ACERTOU"

        frase.innerHTML = " É responsável por executa as principais operações lógicas e aritméticas do computador"
    } else if (respo == 'ula' && cont == 0) {
        cont++

        document.querySelectorAll('#ula').forEach(iten => iten.classList.add("aparecer"))
        n1.placeholder="ACERTOU"


        frase.innerHTML = "São circuitos digitais capazes de armazenar e deslocar informações binárias, são tipicamente usados como um dispositivo de armazenamento temporário. São utilizados na execução de programas de computadores, disponibilizando um local para armazenar dados"
    } else if (respo == 'registradores' && cont == 1) {
        cont++

        document.querySelectorAll('#regis').forEach(iten => iten.classList.add("aparecer"))
        n1.placeholder="ACERTOU"

        frase.innerHTML = "É um tipo de memória que permite a leitura e a escrita, utilizada como memória primária em sistemas eletrônicos digitais responsável por dar agilidade e velocidade no funcionamento do sistema. "
    } else if (respo == 'ram' && cont == 2) {
        cont++

        document.querySelectorAll('#ram').forEach(iten => iten.classList.add("aparecer"))
        n1.placeholder="ACERTOU"


        frase.innerHTML = " é um tipo de memória que permite apenas a leitura, ou seja, as suas informações são gravadas pelo fabricante uma única vez e após isso não podem ser alteradas ou apagadas, somente acessadas. São memórias cujo conteúdo é gravado permanentemente. "
    } else if (respo == 'rom' && cont == 3) {
        cont++

        document.querySelectorAll('#rom').forEach(iten => iten.classList.add("aparecer"))
        n1.placeholder="ACERTOU"


        frase.innerHTML = 'É um tipo de chip de memória de computador que mantém seus dados quando a energia é desligada.'
    } else if (respo == 'eprom' && cont == 4) {
        cont++

        document.querySelectorAll('#eprom').forEach(iten => iten.classList.add("aparecer"))
        n1.placeholder="ACERTOU"


        frase.innerHTML = "È um chip de memória de computador que mantém informações armazenadas sem a necessidade de uma fonte de energia."
    } else if (respo == 'flash' && cont == 5) {
        cont++

        document.querySelectorAll('#flash').forEach(iten => iten.classList.add("aparecer"))
        n1.placeholder="ACERTOU"


        frase.innerHTML = " tem como função armazenar grandes quantidades de informações. Os dados armazenados nas memórias de massa não são perdidos quando desligamos o equipamento, ao contrário da memória ram."
    } else if (respo == "memoria de massa" && cont == 6) {
        cont++

        document.querySelectorAll('#memo').forEach(iten => iten.classList.add("aparecer"))
        n1.placeholder="ACERTOU"


        frase.innerHTML = "permite que certos dispositivos de hardware num computador acessem a memória do sistema para leitura e escrita independentemente da CPU"
    } else if (respo == 'dma' && cont == 7) {
        cont++

        document.querySelectorAll('#dma').forEach(iten => iten.classList.add("aparecer"))
        n1.placeholder="ACERTOU"


        frase.innerHTML = "(Seleção de chip (CS) ou seleção de escravo (SS) é o nome de uma linha de controle em eletrônica digital usada para selecionar um chip entre vários conectados ao mesmo barramento de computador."
    } else if (respo == 'cs' && cont == 8) {
        cont++

        document.querySelectorAll('#cs').forEach(iten => iten.classList.add("aparecer"))
        n1.placeholder="ACERTOU"


        frase.innerHTML = "é um sistema dentro de um computador ou dispositivo, consistindo em um conector ou conjunto de fios, que fornece transporte para os dados. Diferentes tipos de barramentos de dados evoluíram junto com computadores pessoais e outras peças de hardware."
    } else if (respo == 'data bus' && cont == 9) {
        cont++

        document.querySelectorAll('#data').forEach(iten => iten.classList.add("aparecer"))
        n1.placeholder="ACERTOU"

        frase.innerHTML = "é um sistema de comunicação que transfere dados entre componentes dentro de um computador, ou entre computadores. Esta expressão abrange todos os componentes de hardware relacionados (fio, fibra óptica, etc.) e software, incluindo protocolos de comunicação."
    } else if (respo == 'adress bus' && cont == 10) {
        cont++

        document.querySelectorAll('#adress').forEach(iten => iten.classList.add("aparecer"))
        n1.placeholder="ACERTOU"

        frase.innerHTML = "Fabricado pela Intel em 2009, com frequência de 2660MHz a 3467MHz  utiliza uma soquete denominada LGA 1156, com 3 diferentes projetos de núcleos."
    }else if (respo == "i5" && cont == 11) {
        cont++

        document.querySelectorAll('#i5').forEach(iten => iten.classList.add("aparecer"))
        n1.placeholder="ACERTOU"

        frase.innerHTML = "fabricado em 2008, processadores Intel para desktop e notebooks x86-64 (64 bits). Foi lançada com microarquitetura Intel Nehalem, com frequência de 2300 MHz a 5100 MHz."
    } else if (respo == "i7" && cont == 12) {
        cont++

        document.querySelectorAll('#i7').forEach(iten => iten.classList.add("aparecer"))
        n1.placeholder="ACERTOU"

        frase.innerHTML = "Representado por dois núcleos, Ele é capaz de lidar com tarefas diferentes para deixar a máquina mais rápida, na hora de executar ações EX: Processador 775 Core duo E8400 3,0 ghz"
    } else if (respo == "dual core" && cont == 13) {
        cont++

        document.querySelectorAll('#dual').forEach(iten => iten.classList.add("aparecer"))
        n1.placeholder="ACERTOU"
        document.querySelector('.protecaoDeTela').innerHTML="ULTIMA QUESTÂO"
        frase.innerHTMl = "Representado por quatro núcleos, Ele é capaz de lidar com tarefas diferentes para deixar a máquina mais rápida, na hora de executar ações. EX:  Processador Intel Core I3-9100F Quad-Core 3.6ghz."
    } else if (respo == "quad core" && cont == 14) {
        cont++

        document.querySelectorAll('#quad').forEach(iten => iten.classList.add("aparecer"))
        btn2.style.display = "none"
        n1.style.display = "none"
        document.querySelector('.protecaoDeTela').innerHTML=""
        frase.innerHTML = "VOCÊ É INCRIVEL!!!"
    }else{
        cora++
        if(cora==1){
            core1.style.display="none"
        }
        else if(cora==2){
            core2.style.display="none"
        }
        else if(cora==3){
            core3.style.display="none"
        }
        else if(cora==4){
            core4.style.display="none"
            seg=0
            min=0
    
        }
        n1.placeholder="ERROUUUU"
    }
    
}