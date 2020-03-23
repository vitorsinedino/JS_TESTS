<!DOCTYPE html>
<html>
<body>
    <script type="text/javascript">
    //Function that creates the array for using on the sum func//
       function range(start, end) {
          var array = [];
          for (i = 0; i < end; i++){
            array[i] = start;
            start++;
          }
          return array;
       }

       //function call //
       range (1, 10);

       //function that sum all the array elements // 
       function sum(array) {
         var sum = 0;
         for(i = 0; i < array.length; i++){
            sum += array[i];
         }
         document.writeln("the sum of the elements of the array is " + sum);
       }

       //call of the sum function//
       sum(range (1, 10));

       
    </script>
    
</body>
</html>
