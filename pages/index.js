import Head from "next/head";
import Layout from "../components/layout/Layout";
import Heading from "../components/Heading";
import { BASE_URL } from "../constants/api";
import axios from "axios";
import Image from "next/image";
import Witch from "../public/images/witch.png";
import { useState } from "react";

export default function Home(props) {
  // const [query, setQuery] = useState("");
  const [state, setState] = useState({
    query: "",
    list: [],
  });

  const handleChange = (e) => {
    const results = props.drinks.drinks.filter((drink) => {
      if (e.target.value === "") return props.drinks.drinks;
      return drink.strDrink
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setState({
      query: e.target.value,
      list: results,
    });
  };

  console.log(props);
  return (
    <Layout>
      <Head title="Home" />

      <div className="container">
        <div className="intro">
          <div>
            <Image
              src={Witch}
              width="400"
              height="800"
              alt="witch in cauldron"
              className="image"
            />
          </div>

          <div>
            <Heading title="Witches cauldron" />
            <div className="intro__tagline">
              <p>-Choose your poison and get the party started!</p>
            </div>
          </div>
        </div>

        <form>
          <input
            type="search"
            value={state.query}
            onChange={handleChange}
            placeholder="search for drink.."
          />
        </form>

        <ul className="card-wrapper">
          {state.list.map((drink, index) => {
            // return <li key={drink.strDrink}>{drink.strDrink}</li>;
            return (
              <a key={index} href={`details/${drink.idDrink}`} className="card">
                <Image
                  src={drink.strDrinkThumb}
                  width="400"
                  height="400"
                  alt="drink image"
                  className="image"
                />
                <h2>{drink.strDrink}</h2>
              </a>
            );
          })}
        </ul>

        {/* <div className="card-wrapper">
          {props.drinks.drinks.map((drink, index) => {
            return (
              <a key={index} href={`details/${drink.idDrink}`} className="card">
                <Image
                  src={drink.strDrinkThumb}
                  width="400"
                  height="400"
                  alt="drink image"
                  className="image"
                />
                <h2>{drink.strDrink}</h2>
              </a>
            );
          })}
        </div> */}
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
