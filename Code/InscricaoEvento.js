const 
dataSistema = new Date();

var
DtHoje = new Intl.DateTimeFormat('pt-BR').format(dataSistema);

nome="";
idade=0;

LotacaoEvento = 100 // capacidade máxima para qualquer evento


// Simulando Banco de Dados
var 
Inscritos = [
    {
        nome: "Ana", 
        DtNasc: "01/01/1999",
        eventoId: 1 },
    {
        nome: "Adriano", 
        DtNasc: "01/01/1981",
        eventoId: 2},
    {
        nome: "Cláudio", 
        DtNasc: "01/11/1985",
        eventoId: 2},   
    {
        nome: "Chico", 
        DtNasc: "01/11/1985",
        eventoId: 1},  
    {
        nome: "Suzana", 
        DtNasc: "01/07/1986",
        eventoId: 0}
]



Eventos = [
    {
    Evento: "Engenharia Reversa",
    Palestrante: "José Xavier", 
    dataInicio: "20/08/2022"},
    {
    Evento: "Limpeza de Tratores",
    Palestrante: "Fernando Cláudio",
    dataInicio: "18/08/2022"},
    {
    Evento: "Psicologia no Trabalho",
    Palestrante: "Ticiane Maria",
    dataInicio: "21/08/2022"}
]

var totalInscritos = Inscritos.length;

function listarEventos() {
let indice = 0;

while (indice < Eventos.length){
    console.log ("Evento: " + indice + " - " + Eventos[indice].Evento+ " | Data de Início: " + Eventos[indice].dataInicio);
   indice++ ;
      
} 
}


// Calculo básico da diferença entre o ano atual e o ano do nascimento da pessoa que vai se inscrever.
function CalculaIdade (DataAtual,DataNascimento){
var
AnoAtual = DataAtual.split("/")[2];
AnoNasc = DataNascimento.split("/")[2];
return (AnoAtual-AnoNasc);
}

// Calcula a quantidade de pessoas incritas em determinada Palestra.
function InscritosTotalEvento(codigoEvento){
    let ct_inscrito = 0
    
    for (let indice = 0; indice < totalInscritos; indice++){   
       

      if (Inscritos[indice].eventoId == codigoEvento)
        {
            ct_inscrito++;
        } 
    
    }
return (ct_inscrito)
}

// Lista os inscritos 
function MostrarInscritos(codigoEvento){
    for (let indice = 0; indice < Inscritos.length; indice++){
        if (Inscritos[indice].eventoId == codigoEvento){
            console.log(Inscritos[indice].nome + " | Palestra: "+ Inscritos[indice].eventoId)
        }
            
    }
}
    
function addInscrito (NomeInsc,dtNascInsc,eventoidInsc){
   let 
    novoInscrito = {nome: NomeInsc,
                    DtNasc: dtNascInsc,
                    eventoId: eventoidInsc};

   
    Inscritos.push(novoInscrito);
    totalInscritos = Inscritos.length;
    }



// inicio da execução



console.log("Lista de Eventos");
console.log("--------------------------------");
listarEventos();
console.log("--------------------------------");


var
eventoIndice = 2; // Entrada do código do evento
console.log("=======================================");
console.log("Código de Evento escolhido -> " + eventoIndice)
console.log("=======================================");

if (Eventos[eventoIndice].dataInicio > DtHoje) // Verificar Data Evento
{
    DataNascimentoInput="01/01/1980"; // Entrada da data de nascimento
    console.log ("Data de nascimento do Inscrito: " + DataNascimentoInput);
    idade = CalculaIdade(DtHoje,DataNascimentoInput);
    if (idade >= 18)
    {
        nome = "José Sebastiao Marques"; // Entrada do Nome
        console.log ("Inscrito: "+ nome);

       // Verifica se tem vaga na Palestra
        if (InscritosTotalEvento(eventoIndice) < LotacaoEvento)
        {
            addInscrito(nome,DataNascimentoInput,eventoIndice);
            console.log("___________________________________");
            console.log ("Cadastro feito com sucesso");
            console.log ("Evento: " + Eventos[eventoIndice].Evento);
            console.log ("Palestrante: " + Eventos[eventoIndice].Palestrante);
            console.log ("Total de Inscritos: " + InscritosTotalEvento(eventoIndice));
            console.log ("------------------------------------------");
            console.log ("Inscritos:")
            MostrarInscritos(eventoIndice);
        
        }
    }
    else
    {
        console.log ("Idade não permitida");
    }
}
else
{
 console.log ("Evento já iniciado");

}

console.log("--------------------------------");
console.log("Fim de execução");
console.log("--------------------------------");
/* 
console.log("--------------------------------");
console.log ("Contéudo da variável Inscritos")
console.log("--------------------------------");
console.log(Inscritos);
*/