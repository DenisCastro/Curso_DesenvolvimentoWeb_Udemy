//import { ConcessionariaDao } from './ConcessionariaDao'
import Concessionaria from './Concessionaria'

//import { PessoaDao } from './PessoaDao';
import Pessoa from './Pessoa';
import { Dao } from './Dao';

//import { CarroDao } from './CarroDao'
//import Carro from './Carro';

//import { MotoDao } from './MotoDao'
//import Moto from './Moto'


//let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria  = new Concessionaria('', []);

//dao.inserir(concessionaria);

//let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('', '')

//dao2.atualizar(pessoa);

//let dao3: CarroDao = new CarroDao()
//let carro: Carro = new Carro('', 2)

//dao3.remover(carro);

//let dao4: MotoDao = new MotoDao()
//let moto: Moto = new Moto()

//dao4.selecionar(moto);

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao4: Dao<Pessoa> = new Dao<Pessoa>();

dao3.inserir(concessionaria);
dao4.remover(5);