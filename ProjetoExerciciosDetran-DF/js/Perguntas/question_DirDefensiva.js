


//Array de Objetos Direção Defensiva
const quiz = [
    {
		//01
       q:'Atualmente são adotados no Brasil três tipos de cinto de segurança. Qual deles oferece maior proteção?',
       options:['O pélvico','O Toráxico','O de dois pontos','O de três pontos'],
       answer:3
    },

    {
		//02
        q:'Defensivamente, é distância frontal recomendável para veículos com até 06 metros de comprimento:',
        options:['De 06 segundos','De 10 segundos','De 2 segundos','De 09 segundos'],
        answer:2
     },

     {
		 //03
        q:'Não é comportamento do condutor que adota a direção defensiva:',
        options:['Faz valer seu direito','Realiza uma viagem sem infrações de trânsito','Realiza uma viagem sem faltar com a cortesia devida','Encara a tarefa de dirigir com objetivo dereduzir a possibilidade de ser envolvido em acidente de trânsito'],
        answer:0
     },

     {
		 //04
        q:'O condutor que está sempre preparado apara reagir contra os erros dos outros no trânsito, está praticando uma direção:',
        options:['Agressiva','Corretiva','Preventiva','Defensiva'],
        answer:2
     },

     {
		 //05
        q:'Não está relacionado a ato inseguro:',
        options:['Excesso de velocidade','Desobedecer a parada obrigatória','Sinalização da via errada ou insuficiente','Desobedecer ao sinal fechado'],
        answer:2
     },

     {
		 //06
        q:'Segundo estatísticas, é local onde ocorrem um terço de todos os acidentes de trânsito:',
        options:['Nas ultrapassagens','Nos cruzamentos','Nas retas','Nas curvas'],
        answer:1
     },
	 
	 {
		 //07
        q:'Qual acidente de trânsito que envolve apenas um veículo, cuja causa é desconhecida:',
        options:['Colisão frente a frente','Colisão nas retas','Colisão nos cruzamentos','Colisão misteriosa'],
        answer:3
     },
	 
	 {
		 //08
        q:'Está ligada a condição atmosférica:',
        options:['Luz','Tempo','Estrada','Trânsito'],
        answer:1
     },
	      
	 {
		 //09
        q:'Quando o veículo está em aceleração, o peso se concentra na parte traseira levando-o para fora da curva, dizemos que está acontecendo:',
        options:['Um comportamento sub-terçante','Um comportamento sobre-terçante','Uma derrapagem','Uma aquaplanagem'],
        answer:0
     },
	 
	 {
		 //10
        q:'Defensivamente ao ser ultrapassado o condutor deve:',
        options:['Facilitar a ultrapassagem.','Somente diminuir a velocidade','Aumentar a velocidade','Diminuir a velocidade e deslocar-se para a esquerda'],
        answer:0
     },
	 
	 {
		 //11
        q:'Não é atitude imprudente do condutor no trânsito',
        options:['Ultrapassagem forçada','Dirigir após ter ingerido bebida alcoólica','Imprimir velocidade compatível com a segurança','Desrespeitar a sinalização'],
        answer:2
     },
	 
	 {
		 //12
        q:'Ao parar o veículo antes de fazer uma manobra à esquerda as rodas devem ficar:',
        options:['Voltadas para frente','Voltadas para a esquerda','Voltadas para a direita','Em qualquer posição'],
        answer:0
     },
	 
	 {
		 //13
        q:'O condutor deve pisar no freio antes da embreagem para:',
        options:['Fazer uma mudança de marchas','Diminuir a velocidade do veículo','Parar o veículo','Virar à esquerda ou à direita'],
        answer:2
     },
	      
	 {
		 //14
        q:'Qual comportamento defensivo que o condutor deve ter em relação ao veículo que segue a sua frente:',
        options:['Manter acesas as luzes de seu veículo utilizando o farol alto mesmo nas vias com iluminação pública','Manter distância segura entre o veículo que dirige e o que segue à sua frente','Circular com seu veículo em velocidade incompatível com a segurança','Manter o veículo sempre na faixa mais à direita'],
        answer:1
     },
	 
	 {
		 //15
        q:'É a última condição adversa a ser considerada:',
        options:['Tempo','Estrada','Luz','Motorista'],
        answer:3
     },
	 
	 {
		 //16
        q:'Não devemos fazer em frenagem de emergência:',
        options:['Bloquear o corpo firmando o pé esquerdo','Frear fortemente e se travar as rodas, aliviar o pé do freio','Pisar na embreagem ao iniciar uma parada','Tentar manter o veículo em linha reta'],
        answer:2
     },
	 
	 {
		 //17
        q:'Para evitar colisão com o veículo da frente você deve:',
        options:['Trafegar mais à direita e sinalizar suas intenções','Não desviar os olhos do motorista da frente, para saber sempre o que está fazendo e como agir','Olhar sempre para frente, deixar bastante espaço entre o seu veículo e o da frente e estar preparado pra parar','Ficar alerta e dominar a situação, manter distância reagir e parar'],
        answer:3
     },
	 
	 {
		 //18
        q:'Qual o comportamento do veiculo quando em aceleração?',
        options:['Colisão misteriosa','Força centrípeta','Movimento sub-esterçante','Movimento sobre-esterçante'],
        answer:2
     },
	 
	 {
		 //19
        q:'Não constitui fundamento da prevenção de acidente:',
        options:['Previsão','Conhecimento','Atenção','Interação'],
        answer:3
     },
	 
	 {
		 //20
        q:'Qual o estudo que visa aprimorar o relacionamento entre o homem e a máquina?',
        options:['Força centrífuga','Força centrípeta','Ergonomia','Autonomia'],
        answer:2
     },
	      
	 {
		 //21
        q:'Assinale a alternativa incorreta. “Enxergando” o perigo com antecedência, você estará:',
        options:['Trafegando com margem de segurança','Tendo mais tempo para reagir','Prevenindo acidentes','Dirigindo corretivamente'],
        answer:3
     },
	 
	 {
		 //22
        q:'É finalidade do cinto de segurança:',
        options:['Salvar vidas','Evitar acidentes','Evitar multas','Amenizar a gravidade das lesões'],
        answer:3
     },
	 
	 {
		 //23
        q:' Assinale a alternativa errada. A aderência diminui quando:',
        options:['Houver óleo na pista','Os pneus tiverem mais de 2mm de sulco','Aquaplanagem','Excesso de velocidade'],
        answer:1
     },
	      
	 {
		 //24
        q:'Quando ocorre o desgarramento da parte dianteira do veículo, tem início o processo de:',
        options:['Comportamento sobre-esterçante','Hidroplanagem','Derrapagem','Comportamento sub-esterçante'],
        answer:3
     },
	 
	 {
		//25
        q:'Quando o peso do veículo se concentra na dianteira, o veículo está em:',
        options:['Aceleração','Uma curva acentuada','Uma derrapagem','Desaceleração'],
        answer:3
     },
	      
	 {
		 //26
        q:'Qual fenômeno ocorre quando as rodas do veículo perdem contato com o solo, devido à presença de uma camada d’água entre a superfície da pista e os pneus?',
        options:['Um empoçamento d’água na pista','Condição adversa do tempo','Aquaplanagem','Condição adversa da pista'],
        answer:2
     },
	 
	 {
		 //27
        q:'Dentre as afirmações abaixo, uma delas não se relaciona com direção preventiva:',
        options:['Respeitar o direito dos demais usuários da via','De um modo geral, o motorista preventivo não é surpreendido com uma situação de risco','Apesar de calmo e habilidoso, o motorista não consegue antecipar uma situação de risco','É importante na direção preventiva observar e respeitar as normas de circulação'],
        answer:2
     },
	 
	 {
		 //28
        q:'O motorista defensivo, na eminência de ser prejudicado em seu direito de preferência no trânsito, deve:',
        options:['Falar com o motorista de seu erro, para que o mesmo venha corrigir em outras situações','Diminuir até mesmo parar, dando a preferência para o outro','Piscar os faróis','Acelerar a velocidade de seu veículo'],
        answer:1
     },
	 
	 {
		 //29
        q:'Em quantas posições pode ser analisada uma colisão envolvendo dois veículos:',
        options:['Serão analisadas 2 posições','Serão analisadas 4 posições','Serão analisadas 6 posições','Serão analisadas 8 posições'],
        answer:2
     },
	 
	 {
		 //30
        q:'Em via de mão dupla é permitido trafegar pela contramão:',
        options:['Para retornar','Para virar à esquerda','Para ultrapassar','Para fazer uma passagem'],
        answer:2
     },
	      
	 {
		 
        q:'What is 22 + 6?',
        options:['99','56','16','28'],
        answer:3
     }
	 



]