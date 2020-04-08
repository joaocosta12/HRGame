class CalcController{

    constructor(){

        this._nome = '';
        this._pergunta1 = '';
        this._pergunta2 = '';
        this._pergunta3 = '';
        this._pergunta4 = '';
        this._pontuacao = 0;

        $('#form .pergunta1').hide();
        $('#form .pergunta2').hide();
        $('#form .pergunta3').hide();
        $('#form .pergunta4').hide();

        this.initButtonsEvents();
    }


    
    addEventListenerAll(element, events, fn){
        let eventList = events.split(' ');

        eventList.forEach(event => {
            element.addEventListener(event, fn, false);
        });

    }

    addConclusion(){
        document.getElementById("conclusion").innerHTML = "Olá, " + this._nome + "! Sua pontuação é: " + this._pontuacao;
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#form .perguntas button");

        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn, 'click drag', e => {
                if(index == 0){
                    this._nome = $('#UserName')[0].value;
                    $('#form .pergunta0').hide();
                    $('#form .pergunta1').show();
                    //alert(this._nome);
                }
                else if(index >= 1 && index < 5){
                    this._pergunta1 = 'pergunta' + index;
                    this._pontuacao += index;
                    $('#form .pergunta1').hide();
                    $('#form .pergunta2').show();
                    //alert(this._pergunta1);
                }else if(index >= 5 && index < 9){
                    this._pergunta2 = 'pergunta' + index;
                    this._pontuacao += index;
                    $('#form .pergunta2').hide();
                    $('#form .pergunta3').show();
                    //alert(this._pergunta2);
                }else if(index >= 9 && index < 13){
                    this._pergunta3 = 'pergunta' + index;
                    this._pontuacao += index;
                    $('#form .pergunta3').hide();
                    $('#form .pergunta4').show();
                    //alert(this._pergunta3);
                }else{
                    $('#form .pergunta4').hide();
                    this._pergunta4 = 'pergunta' + index;
                    this._pontuacao += index;
                    //alert(this._pergunta4);
                    this.addConclusion();
                }
            });

        });
    }

   


}