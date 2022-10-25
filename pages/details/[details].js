import axios from "axios";
import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import { BASE_URL } from "../../constants/api";
import Image from "next/image";

export default function Drink({ drink }) {
  console.log("DRINK: " + drink.strDrink);
  return (
    <Layout>
      <Head title={drink.strDrink} />
      <div className="details">
        <h1 className="details-title">{drink.strDrink}</h1>
        <div className="details-content">
          <div className="details-intro">
            {/* <h1 className="details-title">{drink.strDrink}</h1> */}
            <Image
              src={drink.strDrinkThumb}
              width="500"
              height="500"
              alt="drink image"
              className="image"
            />
          </div>

          <div className="details-info">
            {/* <h2>{drink.strCategory}</h2> */}
            <div>
              <h2>Ingrediens:</h2>
              <div>
                <h3>{drink.strIngredient1}</h3>
                <p>{drink.strMeasure1}</p>
              </div>
              <div>
                <h3>{drink.strIngredient2}</h3>
                <p>{drink.strMeasure2}</p>
              </div>
              <div>
                <h3>{drink.strIngredient3}</h3>
                <p>{drink.strMeasure3}</p>
              </div>
              <div>
                <h3>{drink.strIngredient4}</h3>
                <p>{drink.strMeasure4}</p>
              </div>
              <div>
                <h3>{drink.strIngredient5}</h3>
                <p>{drink.strMeasure5}</p>
              </div>
              <div>
                <h3>{drink.strIngredient6}</h3>
                <p>{drink.strMeasure6}</p>
              </div>
              <div>
                <h3>{drink.strIngredient7}</h3>
                <p>{drink.strMeasure7}</p>
              </div>
              <div>
                <h3>{drink.strIngredient8}</h3>
                <p>{drink.strMeasure8}</p>
              </div>
              <div>
                <h3>{drink.strIngredient9}</h3>
                <p>{drink.strMeasure9}</p>
              </div>
              <div>
                <h3>{drink.strIngredient10}</h3>
                <p>{drink.strMeasure10}</p>
              </div>
              <div>
                <h3>{drink.strIngredient11}</h3>
                <p>{drink.strMeasure11}</p>
              </div>
              <div>
                <h3>{drink.strIngredient12}</h3>
                <p>{drink.strMeasure12}</p>
              </div>
              <div>
                <h3>{drink.strIngredient13}</h3>
                <p>{drink.strMeasure13}</p>
              </div>
              <div>
                <h3>{drink.strIngredient14}</h3>
                <p>{drink.strMeasure14}</p>
              </div>
              <div>
                <h3>{drink.strIngredient15}</h3>
                <p>{drink.strMeasure15}</p>
              </div>
            </div>
            <div>
              <h2>Instructions:</h2>
              <p>{drink.strInstructions}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(BASE_URL + "filter.php?c=Cocktail");
    console.log(response.data);

    const drinks = response.data;

    const paths = drinks.drinks.map((drink) => ({
      params: { details: drink.idDrink },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  const url = `${BASE_URL}lookup.php?i=${params.details}`;
  console.log("URL " + url);
  let data = null;

  try {
    const response = await axios.get(url);
    data = response.data;
    console.log("drink: " + data.drinks[0]);
  } catch (error) {
    console.log(error);
  }

  return {
    props: { drink: data.drinks[0] },
  };
}
