<!DOCTYPE html>
<html>
  <body>

    <script type="text/javascript">
    //array definitions for the reduce method//
    var arr = ["a", "b,", ",c,", d = ["a", "b", "f", "g"]];
    var arr2 = [];
    //reduce method call//
    arr2 = arr.reduce((accumulator, currentValue) =>{
      return currentValue + arr2.concat(accumulator);
      
    },);
    //console call//
    console.log(arr2);
    </script>
  </body>
</html>
