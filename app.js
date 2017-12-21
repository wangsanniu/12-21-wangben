//charCodeAt方法可返回指定位置的字符的 Unicode 编码,字符串中第一个字符的下标是 0
//如果 index 是负数，或大于等于字符串的长度，则返回 NaN。
var str = 'hello node'
console.log(str.charCodeAt(1))  //101

//fromCharCode 可接受一个指定的 Unicode 值参数  一个或多个 Unicode 值，即要创建的字符串中的字符的 Unicode 编码
console.log(String.fromCharCode(72, 69, 76, 76, 79)) //HELLO

//charAt方法可返回指定位置的字符。
console.log(str.charAt(4))  //o

//slice 可从已有的数组中返回选定的元素 第一个参数是从何处开始选取第二个参数从何处结束
// 第一个参数可以是负数，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
console.log(str.slice(1,3))	//el

//substring 从指定字符串中获取字符串 从第一个参数的位置起 获取到第二个参数的位置 不包括第二个参数的位置。
//如果第二个参数不传 则获取到最后。
console.log(str.substring(2,4))  //ll

//substr  参数：两个参数 第一个参数 从什么位置起获取  第二个参数获取多少个字符如果第二个字符不传则获取到最后。
console.log(str.substr(2,4))//llo

//indexOf方法可返回某个指定的字符串值在字符串中首次出现的位置。
console.log(str.indexOf('l')) //2

//lastIndexOf 方法可返回一个指定的字符串值最后出现的位置
console.log(str.lastIndexOf('l'))//3

//search方法用于检索字符串中指定的子字符串 如果没有找到任何匹配的子串，则返回 -1。
console.log(str.search('l'))//2

//concat方法用于连接两个或多个字符串  返回值 连接完成后的新字符串 
var str2='haha';
console.log(str.concat(str2)) //hello nodehaha

//split方法用于把一个字符串分割成字符串数组。
console.log(str.split(''))//[ 'h', 'e', 'l', 'l', 'o', ' ', 'n', 'o', 'd', 'e' ]

//tolocaleLowerCase将指定字符串转换成小写
var str3 = 'HELLO'
console.log(str3.toLowerCase()) //hello

//toUpperCase将指定字符串转化为大写
console.log(str.toUpperCase())// HELLO NODE




