var a=prompt("Enter the word");
document.write("Given word:-"+a+"<br>");

var c=a.replace(a[0],a[0].toUpperCase());
document.write("The changed word is:-");
document.write(c);