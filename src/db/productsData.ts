import tradicional from '../assets/images/Products/tradicional.svg'
import americano from '../assets/images/Products/americano.svg'
import cremoso from '../assets/images/Products/cremoso.svg'
import gelado from '../assets/images/Products/gelado.svg'
import cafeComLeite from '../assets/images/Products/cafe-com-leite.svg'
import latte from '../assets/images/Products/latte.svg'
import capuccino from '../assets/images/Products/capuccino.svg'
import macchiato from '../assets/images/Products/macchiato.svg'
import mocaccino from '../assets/images/Products/mocaccino.svg'
import chocolateQuente from '../assets/images/Products/chocolate-quente.svg'
import cubano from '../assets/images/Products/cubano.svg'
import havaiano from '../assets/images/Products/havaiano.svg'
import arabe from '../assets/images/Products/arabe.svg'
import irlandes from '../assets/images/Products/irlandes.svg'

export const ProductsData = [
  {
    id: 1,
    image: tradicional,
    tag: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '5,90'
  }, 
  {
    id: 2,
    image: americano,
    tag: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '6,90'
  },
  {
    id: 3,
    image: cremoso,
    tag: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '7,90'
  },
  {
    id: 4,
    image: gelado,
    tag: ['Tradicional', 'Gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '8,90'
  },
  {
    id: 5,
    image: cafeComLeite,
    tag: ['Tradicional', 'Com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '10,90'
  },
  {
    id: 6,
    image: latte,
    tag: ['Tradicional', 'Com leite'],
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '11,90'
  },
  {
    id: 7,
    image: capuccino,
    tag: ['Tradicional', 'Com leite'],
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '12,90'
  },
  {
    id: 8,
    image: macchiato,
    tag: ['Tradicional', 'Com leite'],
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: '13,90'
  },
  {
    id: 9,
    image: mocaccino,
    tag: ['Tradicional', 'Com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '14,90'
  },
  {
    id: 10,
    image: chocolateQuente,
    tag: ['Especial',  'Com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '15,90'
  },
  {
    id: 11,
    image: cubano,
    tag: ['Especial', 'Alcoólico', 'Gelado'],
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '16,90'
  },
  {
    id: 12,
    image: havaiano,
    tag: ['Especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '17,90'
  },
  {
    id: 13,
    image: arabe,
    tag: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '18,90'
  },
  {
    id: 14,
    image: irlandes,
    tag: ['Especial', 'Acoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '19,90'
  }
]
