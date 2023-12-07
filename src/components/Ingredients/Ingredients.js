import React, { useEffect, useState } from "react";
import "./Ingredients.css";

const Ingredients = (props) => {

    const { order, setOrder } = props;

    const [ingredientsState, setIngredientsState] = useState([]);

    const changeHandler = (event) => {
        const { value, checked } = event.target

        setIngredientsState(checked ? [...ingredientsState, value] : [...ingredientsState.filter((item) => item !== value)]);
    }
    useEffect(() => {
        setOrder({ ...order, ingredients: ingredientsState })
    }, [ingredientsState]);

    return (
        <>
            <fieldset className="d-flex flex-column flex-wrap">

                <div>
                    <input type="checkbox" id="peperoni" value="Peperoni" onChange={changeHandler} />
                    <label htmlFor="peperoni">Peperoni</label>
                </div>
                <div>
                    <input type="checkbox" id="grilledChicken" value="Tavuk Izgara" onChange={changeHandler} />
                    <label htmlFor="grilledChicken">Tavuk Izgara</label>
                </div>
                <div>
                    <input type="checkbox" id="corn" value="Mısır" onChange={changeHandler} />
                    <label htmlFor="corn">Mısır</label>
                </div>
                <div>
                    <input type="checkbox" id="garlic" value="Sarımsak" onChange={changeHandler} />
                    <label htmlFor="garlic">Sarımsak</label>
                </div>
                <div>
                    <input type="checkbox" id="pineapple" value="Ananas" onChange={changeHandler} />
                    <label htmlFor="pineapple">Ananas</label>
                </div>
                <div>
                    <input type="checkbox" id="sausage" value="Sosis" onChange={changeHandler} />
                    <label htmlFor="sausage">Sosis</label>
                </div>
                <div>
                    <input type="checkbox" id="onion" value="Soğan" onChange={changeHandler} />
                    <label htmlFor="onion">Soğan</label>
                </div>
                <div>
                    <input type="checkbox" id="sucuk" value="Sucuk" onChange={changeHandler} />
                    <label htmlFor="sucuk">Sucuk</label>
                </div>
                <div>
                    <input type="checkbox" id="pepper" value="Biber" onChange={changeHandler} />
                    <label htmlFor="pepper">Biber</label>
                </div>
                <div>
                    <input type="checkbox" id="courgette" value="Kabak" onChange={changeHandler} />
                    <label htmlFor="courgette">Kabak</label>
                </div>
                <div>
                    <input type="checkbox" id="ham" value="Kanada Jambonu" onChange={changeHandler} />
                    <label htmlFor="ham">Kanada Jambonu</label>
                </div>
                <div>
                    <input type="checkbox" id="tomato" value="Domates" onChange={changeHandler} />
                    <label htmlFor="tomato">Domates</label>
                </div>
                <div>
                    <input type="checkbox" id="jalepeno" value="Jalepeno" onChange={changeHandler} />
                    <label htmlFor="jalepeno">Jalepeno</label>
                </div>
                <div>
                    <input type="checkbox" id="salami" value="Salam" onChange={changeHandler} />
                    <label htmlFor="salami">Salam</label>
                </div>

            </fieldset>
        </>
    );
}
export default Ingredients;