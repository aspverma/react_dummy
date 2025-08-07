// Home.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate(); // initialize navigate

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data)=>setRecipes(data.recipes));
  }, []);

  const handleDetailsClick = (recipe) => {
    navigate("/details", { state: recipe }); // navigate with state
  };

  return (
    <div>
      <h1>Recipe List</h1>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={(recipe) => handleDetailsClick(recipe)} // handle click
        >
          <h2>{recipe.name}</h2>
          <p>{recipe.cuisine}</p>
          <button>View Details</button>
        </div>
      ))}
    </div>
  );
}

export default Home;