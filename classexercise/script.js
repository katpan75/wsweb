$(function(){
    class Grocery{
      constructor(expirationdate, bestbefore, calories){
        this.expirationdate=expirationdate;
        this.bestbefore=bestbefore;
        this.calories=calories;
      }
      getData(){
      let x = this.expirationdate;
      let y = this.bestbefore;
      let z = this.calories;
      $(".result").html("<p> Expiration date:"+x+"</p><br><p>Best before:" +y+"</p><br><p>Calories:"+z+"</p>");
      console.log(x,y,z);
                   
      }
    }
    let cabbage = new Grocery("03/27/1886", "04/28/1888", "80");
    let carrot = new Grocery("08/06/2043", "02/73/2032", "10000");
    let eggs = new Grocery("07/22/1986", "08/08/1988", "16");
    let onion = new Grocery("11/07/2020", "11/24/2020", "10");
    
    
    
    $(".cabbage").click(function(){
        cabbage.getData();
        $(".result").toggle();
    });
      
      
        $(".carrot").click(function(){
            carrot.getData();
            $(".result").toggle();
        });
        $(".eggs").click(function(){
            eggs.getData();
            $(".result").toggle();
        });
        $(".onion").click(function(){
            onion.getData();
            $(".result").toggle();
        });
      
      
    });