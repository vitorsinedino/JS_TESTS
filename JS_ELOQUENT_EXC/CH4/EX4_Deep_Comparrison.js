<!DOCTYPE html>
<html>
<body>
    <script type="text/javascript">
    //object definition//
    let obj = {here: {is: "an"}, object: 2}
    //function creation//
    function deepEqual(a, b) {
      //first comparison//
      if(a === b){
        return true;
      }
      //negative comparison case 1 //
      if(a == null || b == null || typeof a != "object" || typeof b != "object"){
        return false;
      } 
      // variable definition for objects not previously defined//
      var keysA = Object.keys(a);
      var keysB = Object.keys(b);

      //comparison for not defined objects//
      for(key in keysA){
        if(!keysB.includes(key) || !deepEqual(a[key], b[key])){
          return false;
        }
      }
      return true;
    }

    console.log(deepEqual(obj,{here: 1, object: 2}));
    </script>
    
</body>
</html>
