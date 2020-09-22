export function decode(content: ArrayBuffer, encoding: 'gbk') {  
  var dataView = new DataView(content);  
  var decoder = new TextDecoder(encoding);  
  var decodedString = decoder.decode(dataView);
  return decodedString;
}