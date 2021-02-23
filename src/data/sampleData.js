import { v4 as uuid } from 'uuid';

const sampleData = [
  {
    id: uuid(),
    name: 'Daniel Latour',
    email: 'daniellatour@company.com',
    role: 'UX Designer',
  },
  {
    id: uuid(),
    name: 'Leda Tompkins',
    email: 'ledatompkins@company.com',
    role: 'Data Scientist',
  },
  {
    id: uuid(),
    name: 'Miyoko Rowell',
    email: 'miyokorowell@company.com',
    role: 'Full-stack Engineer',
  },
  {
    id: uuid(),
    name: 'Malcolm Norden',
    email: 'malcolmnorden@company.com',
    role: 'iOS Developer',
  },
];

export default sampleData;