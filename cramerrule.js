



// var arr1 = [2,3,7]; 
// var arr2 = [5,8,7];     





function cramer(){
    var firstEquation = document.getElementById("firstLine").value;
    var secondEquation = document.getElementById("secondLine").value;

    if ( firstEquation == "") {
        alert("Enter First Equation")
    }else{
        if(secondEquation == "") {
            alert("Enter Second Equation")
        }else{
        
            var arr1 = firstEquation.match(/-?\d+/g);
            var arr2 = secondEquation.match(/-?\d+/g);
            console.log(arr1);
            console.log(arr2);
            var a1 = arr1[0];  
            var b1 = arr1[1];  
            var c1 = arr1[2];  
            var a2 = arr2[0];  
            var b2 = arr2[1];  
            var c2 = arr2[2];
                    
            //determinent
            var d = (a1*b2)-(a2*b1);
            if(d == 0){
                document.write("Determinant Is 0 That No futhur solution")
            }else{
            
                dx = (c1*b2)-(c2*b1);
                dy = (a1*c2)-(a2*c1);
                
                x = dx/d;
                y = dy/d;  

                document.write("<br>");
                document.write("<h2>Cramer Method</h2>");
                document.write("<br>");
                document.write("Determinant D = " + d);
                document.write("<br>");
                document.write(`Dx = ${dx}`);
                document.write("<br>");
                document.write(`Dy = ${dy}`);
                document.write("<br>");
                document.write("Value of x = " + x);
                document.write("<br>");
                document.write("Value of y = " + y);

            }
        }
        }
    }
    
    
function invers(){
    var firstEquation = document.getElementById("firstLine").value;
    var secondEquation = document.getElementById("secondLine").value;

    if ( firstEquation == "") {
        alert("Enter First Equation")
    }else{
        if(secondEquation == "") {
            alert("Enter Second Equation");
        }else{
            
            var arr1 = firstEquation.match(/-?\d+/g);
            var arr2 = secondEquation.match(/-?\d+/g);
        
            var a1 = arr1[0];  
            var b1 = arr1[1];  
            var c1 = arr1[2];  
            var a2 = arr2[0];  
            var b2 = arr2[1];  
            var c2 = arr2[2];

            var d = (a1*b2)-(a2*b1);
            if(d == 0){
                document.write("Determinant Is 0 That No futhur solution")
            }else{
                

                var z = a1;
                a1 = b2;
                b2 = z;
                b1 = (-b1);
                a2 = (-a2);

            

                var x =  (a1*c1)+(b1*c2);
                var y =  (a2*c1)+(b2*c2);
            
                x = x/d;
                y = y/d;

                document.write("<br>");
                document.write("<h2>Inverse Method</h2>");
                document.write("<br>");
                document.write("Determinant D = " + d);
                document.write("<br>");
                document.write("Value of x = " + x);
                document.write("<br>");
                document.write("Value of y = " + y);

            }
        }
    }    
}
    

