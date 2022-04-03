import Head from "next/head";
import Layout from "../components/layout/Layout";
import Heading from "../components/Heading";
import { BASE_URL } from "../constants/api";
import axios from "axios";
import Image from "next/image";
import Witch from "../public/images/witch.png";

export default function Home(props) {
  console.log(props);
  return (
    <Layout>
      <Head title="Home" />

      <div className="container">
        <div className="intro">
          <div>
            <Image
              src={Witch}
              width="150"
              height="300"
              alt="witch in cauldron"
              className="image"
            />
          </div>

          <div>
            <Heading title="Witches cauldron" />
            <p>-Choose your poison and get the party started!</p>
          </div>
        </div>

        <div className="card-wrapper">
          {props.drinks.drinks.map((drink, index) => {
            return (
              <a key={index} href={`details/${drink.idDrink}`} className="card">
                <Image
                  src={drink.strDrinkThumb}
                  width="200"
                  height="200"
                  alt="drink image"
                  className="image"
                />
                <h2>{drink.strDrink}</h2>
              </a>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let drinks = [];

  try {
    const response = await axios.get(BASE_URL + "filter.php?c=Cocktail");
    console.log(response.data);

    drinks = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      drinks: drinks,
    },
  };
}
