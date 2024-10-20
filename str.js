// var str1="              meghana";
//  var str2="meghana               ";
//  var remove_spaces_str1=str1.trimStart();
// console.log(remove_spaces_str1);
// var remove_spaces_str2=str2.trimEnd();
// var concat_str=remove_spaces_str1.concat(remove_spaces_str2);
// var uppercase_str=concat_str.toUpperCase();
// console.log(uppercase_str);


// var a="SOMETHING";
// console.log(a)
// var b=a.slice(3,6);
// console.log(b)
// var c=b.indexOf("H");
// console.log(c)
// var d=c.toLowerCase();
// console.log(d)


var a="a";
console.log(a)
var b="string";
console.log(b)
var cancat=a.concat(b);
console.log(cancat)
var uppercase_str=cancat.toUpperCase();
console.log(uppercase_str)
var slice=uppercase_str.charAt(5);
console.log(slice)


var str1="meghana";
console.log(str1)
var str2="bindhu";
console.log(str2)
var slice1=str1.slice(0,3);
console.log(slice1)
var slice2=str2.slice(3,6);
console.log(slice2)
var concat=slice1.concat(slice2);
console.log(concat)
var cap1=concat.charAt(0).toUpperCase();
console.log(cap1)
var slice3=concat.slice(1,5);
console.log(slice3)
var cap2=concat.charAt(5).toUpperCase();
console.log(cap2)
var result=cap1+slice3+cap2;
console.log(result)

// You are given a string with extra spaces at the beginning and end.You need to trim the string, make the first and last 
// characters uppercase, extract a specific part of the string, concatenate it with another string.


var str="         amazon          ";
console.log(str)
var trim_str=str.trim();
console.log(trim_str)
var first_last_upper=trim_str.charAt(0).toUpperCase()+trim_str.slice(1,length-1)+trim_str.charAt(trim_str.length-1).toUpperCase();
console.log(first_last_upper);
var extract_specific_part=trim_str.slice(1,4);
console.log(extract_specific_part);
var str2="za";
var concat_str=extract_specific_part.concat(str2);
console.log(concat_str)



 
var str="hello there , how are you ";
console.log(str)
var index_are=str.indexOf("are");
console.log(index_are)
