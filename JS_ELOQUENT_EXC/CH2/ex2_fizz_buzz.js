<!DOCTYPE html>
<html>
<body>
    <script type="text/javascript">
        var fz = "Fizz";
        var bz = "Buzz";
        for (i = 1; i<= 100; i++){
            if( i % 3 == 0 && i % 5 == 0){
                console.log(fz + bz);
            }
            else if(i % 3 == 0 && i % 5 != 0){
                console.log(fz);
            }
            else if ( i % 5 == 0 && i % 3 != 0){
                console.log(bz);
            }
            else{
                console.log(i);
            }
         }
              
    </script>
    
</body>
</html>
