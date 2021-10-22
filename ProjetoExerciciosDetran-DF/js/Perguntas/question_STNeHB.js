
//Array de Objetos PROVA Nº 01 - SNT E PROCESSO DE HABILITAÇÃO
const quiz = [

{
    //01
    q:'O Sistema Nacional de Trânsito é composto de órgãos:',
    options:['Normativos','Executivos','Fiscalizadores','Todas as alternativas acima'],
    answer:3
},

{
    //02
    q:'Assinale qual dos órgãos abaixo relacionados é um órgão recursal',
    options:['CIRETRAN','DENATRAN','CONTRAN','Nenhuma das alternativas acima'],
    answer:2
},
{
    //03
    q:'A qual órgão compete registrar as carteiras de habilitação e veículos automotores?',
    options:['Prefeitura','DETRAN','CONTRAN','DENATRAN'],
    answer:2
},
{
    //04
    q:'A qual órgão compete expedir e cassar a sua habilitação?',
    options:['CONAMA','IBAMA','DENATRAN','DETRAN'],
    answer:3
},
{
    //05
    q:'É competência de qual órgão criar as Câmaras Temáticas?',
    options:['JARI','CETRAN','CONTRAN','CONTRANDIFE'],
    answer:2
},
{
    //06
    q:'Para onde devemos remeter os recursos de multas de trânsito?',
    options:['Delegacia regional de Trânsito','Polícia Rodoviária Federal','DNIT','JARI'],
    answer:1
},
{
    //07
    q:'Qual das alternativas abaixo refere-se a pessoa incapacitada de habilitar-se?',
    options:['Fumante','Deficiente físico','Doente cardíaco','Todas as alternativas acima'],
    answer:2
},
{
    //08
    q:'O que não é requisito para habilitar-se?',
    options:['Ser alfabetizado','Responda pelos seus atos','Possuir ensino fundamental','Possuir documento de identidade e CPF'],
    answer:2
},
{
    //09
    q:'Marque a alternativa falsa:',
    options:['Pessoas daltônicas não podem habilitar-se','Pessoa com deficiência auditiva, não pode habilitar-se','Silvícolas, não podem habilitar-se','Alcoólatras inveterados, não podem habilitar-se'],
    answer:1
},
{
    //10
    q:'Assinale a alternativa verdadeira:',
    options:['Não será exigido curso prático de direção (15 aulas), ao candidato que já saiba dirigir','Estrangeiros não podem habilita-se no Brasil','Com uma carteira de categoria “E”, não se pode dirigir uma moto','7Renova-se a CNH de 5 em 5 anos, condutores de até 75 anos de idade'],
    answer:2
},
{
    //11
    q:'Marque a alternativa falsa:',
    options:['Documento de habilitação só será aceito quando apresentado em original','O licenciamento anual do veículo poderá ser apresentado cópia autenticada pela autoridade','Ao transferir a propriedade de um veículo, o comprador tem um prazo de um mês','Será necessário pagar o “Seguro DPVAT”, veículos importados'],
    answer:1
},
{
    //12
    q:'Qual documento não será exigido pelo agente de trânsito na abordagem para fiscalização?',
    options:['Documento de habilitação','Certificado de licenciamento anual do veículo','Certificado de Registro do veículo','As alternativas A e B estão corretas'],
    answer:2
},
{
    //13
    q:'A LADV (licença de aprendizagem) será válida:',
    options:['Em todo o território nacional','Em todo o estado da federação onde foi expedida','Na área de circunscrição do órgão que expediu','Apenas no município de domicílio do candidato'],
    answer:2
},
{
    //14
    q:'Qual punição será aplicada ao condutor que for encontrado dirigindo sem a companhia do instrutor?',
    options:['A licença (LADV) será recolhida, sendo devolvida após pagamento de multa','A licença (LADV) será recolhida, sendo devolvida somente ao instrutor responsável','A licença (LADV) será suspensa, por um período de seis meses','Nenhuma das alternativas acima, pois o candidato tem o direito de treinar com a LADV'],
    answer:2
},
{
    //15
    q:'Marque a alternativa falsa:',
    options:['O candidato só poderá prestar exame teórico após cumprir curso de 45 horas aula','O candidato só poderá prestar exame prático após cumprir curso de 20 horas aula','A licença de aprendizagem (LADV) só será conferida ao candidato aprovado em direção','O candidato reprovado em direção só poderá prestar novo exame após 15 dias'],
    answer:1
},
{
    //16
    q:'Com uma habilitação de categoria “C” o condutor poderá conduzir que tipo de veículo?',
    options:['Veículos de duas ou três rodas com ou sem carro lateral','Veículos de passageiros com mais de oito lugares, excluído o motorista','Veículos de carga com mais de 3.500 Kg de PBT','Veículos articulados com qualquer capacidade de carga.'],
    answer:2
},
{
    //17
    q:'Em que caso não será obrigatória a expedição de novo certificado de registro de veículo?',
    options:['Quando mudar o proprietário do veículo','Quando o proprietário mudar de domicílio ou município','Quando for alterado o seu combustível para gás','Quando for instalado um aparelho de som no veículo'],
    answer:3
},
{
    //18
    q:'Assinale a alternativa falsa:',
    options:['Para prestar exame para categoria “D” o candidato deverá apresentar um veículo que tenha no mínimo 20 lugares, excluído o motorista','Para prestar exame para categoria “C” o candidato deverá apresentar um veículo articulado, acoplado à um semi-reboque de no mínimo 6.000 Kg de PBT','Para prestar exame para categoria “E” o candidato deverá apresentar um veículo articulado que tenha no mínimo 6.000 Kg de PBT','O candidato da categoria “A” poderá prestar exame em uma motocicleta que tenha uma capacidade de cilindradas igual ou superior a 1.000'],
    answer:2
},
{
    //19
    q:'Assinale qual das alternativas abaixo não é uma exigência para escolares:',
    options:['Registro como veículo de passageiros','Inspeção semestral para verificação de condições de segurança','Faixa de cor amarela de 20 centímetros de largura afixada nas laterais do veículo','Tacógrafo'],
    answer:2
},
{
    //20
    q:'Não será exigido ao condutor de escolares:',
    options:['Idade superior a 21 anos','Habilitação de categoria igual ou superior a “D”','Curso de treinamento para situação de risco','Conclusão de escolaridade a nível primário'],
    answer:3
},
{
    //21
    q:'Aparelho registrador e instantâneo de velocidade e tempo (tacógrafo) não será exigido:',
    options:['Para veículos de carga com mais de 19 toneladas','Para taxi','Para veículos de passageiros com mais de 10 lugares','Para escolares'],
    answer:1
},
{
    //22
    q:'Sobre dimensões máximas permitidas para veículos podemos afirmar, exceto:',
    options:['Altura máxima permitida 4,4 metros','Largura máxima permitida 2,6 metros','Comprimento máximo permitido para veículos simples 14 metros','Os veículos nunca poderão exceder estes limites préestabelecidos pelo CONTRAN'],
    answer:3
},
{
    //23
    q:'O que não é equipamento obrigatório para veículo de pequeno porte?',
    options:['Cinto de segurança para árvore de transmissão','Cinto de segurança para os ocupantes do veículo','Chave de fenda','Pneu sobressalente'],
    answer:0
},
{
    //24
    q:'Os veículos serão identificados obrigatoriamente através de:',
    options:['Placas dianteira e traseira','Documentação do veículo','Cor, ano, modelo e espécie','Por caracteres gravados no chassi ou monobloco'],
    answer:3
},
{
    //25
    q:'Assinale a alternativa falsa.',
    options:['Um veículo que foi dado perda total, neste caso não poderá ser remontado sobre o mesmo chassi','Os proprietários de veículos com perda total terão 30 dias para dar baixa perante o órgão de trânsito','Os números gravados no chassi, poderão ser reproduzidos nos vidros e na carroçaria do veículo, a fim de dificultar roubos e desmontes dos mesmos','Sempre que for preciso fazer qualquer alteração de características do veículo, será obrigatória uma prévia autorização pelo órgão de trânsito'],
    answer:1
},
{
    //26
    q:'Qual o prazo exigido para habilitar-se na categoria “E”?',
    options:['Um ano de carteira “C”','Dois anos de carteira “C”','Um ano de carteira “D”','Três anos de carteira “B”'],
    answer:0
},
{
    //27
    q:'O condutor de máquina deverá estar habilitado em quais categorias?',
    options:['B, C, D ou E','C, D ou E','D ou E','Somente categoria “E”'],
    answer:1
},
{
    //28
    q:'Marque a falsa:',
    options:['O operador de máquinas em canteiro de obras não precisa ser habilitado','As máquinas não poderão ser conduzidas em vias de trânsito rápido','Para conduzir máquinas não é necessário curso de treinamento autorizado pelo órgão de trânsito','Menores de 21 anos não podem conduzir máquinas em vias públicas'],
    answer:3
},
{
    //29
    q:'A carteira nacional de habilitação será conferida ao candidato que, ao término de um ano, não tenha cometido:',
    options:['Qualquer infração de trânsito','2Duas infrações de natureza leve, duas médias e uma grave ou gravíssima0','Seis infrações de natureza leve, duas médias ou uma grave ou gravíssima','Qualquer infração de natureza grave ou gravíssima, ou ser reincidente em médias'],
    answer:3
},
{
    //30
    q:'Para conduzir veículos com carga perigosa o condutor deverá:',
    options:['Estar habilitado no mínimo na categoria D','Estar habilitado no mínimo na categoria C','Estar habilitado no mínimo na categoria B','Qualquer categoria desde que tenha curso de MOPE'],
    answer:2
}


]