import { readFileSync } from 'fs'

const part1 = readFileSync(__dirname + '/part1-orientado-a-funcoes.md', 'utf-8')
const part2 = readFileSync(__dirname + '/part2-python-funcional.md', 'utf-8')
const part3 = readFileSync(__dirname + '/part3-exemplo.md', 'utf-8')
const part4 = readFileSync(__dirname + '/part4-map-reduce.md', 'utf-8')
const part5 = readFileSync(__dirname + '/part5-iteradores.md', 'utf-8')
const part6 = readFileSync(__dirname + '/part6-funcoes.md', 'utf-8')
const part7 = readFileSync(__dirname + '/part7-lazy.md', 'utf-8')
const part8 = readFileSync(__dirname + '/part8-final.md', 'utf-8')

const mdData = part1 + part2 + part3 + part4 + part5 + part6 + part7 + part8;
const source = document.querySelector('#source');
source.innerHTML = mdData;
let slideshow = remark.create();