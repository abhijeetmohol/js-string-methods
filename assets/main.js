console.log("JS STRING METHODS")
// There are total 23 methods of string

//.length
console.log("1: .length");
let a="omkar";
console.log(a.length);
console.log("(Above method is use to count the letters)");

//.toUppercase()
console.log("2: .toUppercase()");
let b="omkar";
console.log(b.toUpperCase());
console.log("(Above method is use to make letters capital)");

//.toLowercase()
console.log("3: .toLowercase()");
let c="OMKAR";
console.log(c.toLowerCase());
console.log("(Above method is use to make letters small)");

//.slice()
console.log("4: .slice()");
let d="omkar";
console.log(d.slice(1,3));
console.log("(Above method we have to declare two letter position argument 1st is starting 2nd is ending, if 2nd is not declare it conduct from 1st argument to last letter)");

//.replace()
console.log("5: .replace()");
let e="OMKAR aka bandya";
let f=e.replace("bandya", "dada");
console.log(f);
console.log("(Above method we replace word bandya to dada)");

//.concat()
console.log("6: .concat()");
let g="omkar";
let h="jadhav";
console.log(g.concat(h));
console.log("(Above method is help add two string work as an addition)");

//.trim()
console.log("7: .concat()");
let i="              omkar";
console.log(i.trim());
console.log("(Above method is help to remove immutable spaces)");

//.includes()
console.log("8: .includes()");
let j="omkar is a excellent student";
console.log(j.includes("is"));
console.log("(Above method is work as boolen if word find then true otherwise false)");

//.startsWith()
console.log("9: .startsWith()");
let k="omkar is a excellent student";
console.log(k.startsWith("omkar"));
console.log("(Above method is work as boolen if word find then true otherwise false)");

//.endsWith()
console.log("10: .endsWith()");
let l="omkar is a excellent student";
console.log(l.endsWith("student"));
console.log("(Above method is work as boolen if word find then true otherwise false)");

//.search()
console.log("11: .search()");
let m="omkar is a excellent student";
console.log(m.search("student"));
console.log("(Above method is work as include but it gives a position of letter instead of boolen)");

//.match()
console.log("12: .match()");
let n="omkar is a excellent student and good student";
console.log(n.match(/student/g));
console.log("(Above method is trying to match and collect it and make it an array, it is written as '/word we have to find/g' g for )");

//.indexOf()
console.log("13: .indexOf()");
let o="omkar is a excellent student and good student";
console.log(o.indexOf("student"));
console.log("(Above method is give the position of letter we have to find from starting and never search again)");

//.lastIndexOf()
console.log("14: .lastIndexOf()");
let p="omkar is a excellent student and good student";
console.log(p.lastIndexOf("student"));
console.log("(Above method is give the position of letter we have to find from ending and never search again)");

// .charCodeAt()
console.log("15: .charCodeAt()");
let q="omkar is a excellent student and good student";
console.log(q.charCodeAt(0));
console.log("(Above method is totally depend on sky code .we have to declare a position of letter and then output is the skycode of that letter)");

// .fromcharCode()
console.log("16: .fromCharCode()");
let xy=String.fromCharCode(65);
console.log(xy);
console.log("(Above method is totally depend on sky code .we have to declare a skycode and then output is the value skycode. no need to declare a variable or string and written as:String.fromCharCode(skycode))");

// .charAt()
console.log("17: .charAt()");
let r="javascript";
console.log(r)
console.log(r.charAt(9));
console.log("(in Above method we have to give position of letter and output is the letter)");

// .split()
console.log("18: .split()");
let s="javascript";
console.log(s.split("a"));
console.log("(Split a string into substrings using the specified separator and return them as an array.)");

// .repeat()
console.log("19: .repeat()");
let t="javascript";
console.log(t)
console.log(t.repeat(5));
console.log("(Above method is repeat a string)");

// .substr()
console.log("20: .substr()");
let u="javascript";
console.log(u)
console.log(u.substr(3,5));
console.log("(we have to declare two position starting and ending,from declared starting position start condting as a 1st )");

// .substring()
console.log("21: .sunstring()");
let v="javascript";
console.log(v)
console.log(v.substring(1,4));
console.log("(Above method is work as slice but not included declared 2nd position of letter)");

// .tostring()
console.log("22: .tostring()");
let w=50;
console.log(w)
console.log(w.toString()+50);
console.log("(Above method is convert numeric value into the string,in above 1st 50 is a string because of this method)");

// .valueof()
console.log("23: .valueof()");
let x="javascript";
console.log(x)
console.log(x.valueOf());
console.log("(Above method is written string as it is because it is default)");

/*there are total 23 
strings methods */