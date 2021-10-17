var str = "abbcccddddeeeee";
var a = 0,b=0,c=0,d=0,e=0,i=0;
for(i=0; i<str.length; i++){
    if(str.charAt(i)=="a"){
        a++;
    }
    else if( str.charAt(i)=="b"){
        b++;
    }
    else if(str.charAt(i)=="c"){
        c++
    }
    else if(str.charAt(i)=="d"){
        d++;
    }
    else if(str.charAt(i)=="e"){
        e++;
    }

}

console.log("a = " + a + " b = "+ b + " c = " + c + " d = "+d + " e = " + e)

