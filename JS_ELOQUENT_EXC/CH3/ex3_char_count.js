<!DOCTYPE html>
<html>
<body>
    <script type="text/javascript">
    
        function countChar(word, ch){
          var count = 0;
          for (i = 0; i< word.length; i++){
              if(word[i] == ch){
                count++;
              }
              
          }
          return count;
          
        }

        function countBs(string){
          return countChar(string, "B");
        }

        console.log(countBs("BBC"));
        console.log(countChar("EH o crime E nois", "o"));


    </script>
    
</body>
</html>
