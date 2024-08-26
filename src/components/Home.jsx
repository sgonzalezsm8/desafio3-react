import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../utils/pizzas';


const Home = (props) => {
    console.log(props);
    return (
        <div>
            <Header />
            <div className="container my-4">
                <div className="row">
                    {pizzas.map((pizza) => (
                        <div className="col-md-4" key={pizza.id}>
                            <CardPizza pizza={pizza} />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Home;