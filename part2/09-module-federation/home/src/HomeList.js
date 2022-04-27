const HomeList = (num) => {
  let str = '<ul>'
  for (let i = 0; i < num; i++) {
    str += '<li>item ' + (i + 1) + '</li>'
  }
  str += '</ul>'
  return str
}

export default HomeList
