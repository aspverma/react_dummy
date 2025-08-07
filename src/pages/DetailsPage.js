// Details.js
import { useLocation } from "react-router-dom";

function Details() {
  const { state: recipe } = useLocation();

  if (!recipe) return <p>No recipe data found.</p>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Difficulty: {recipe.difficulty}</p>
      <p>Prep Time: {recipe.prepTimeMinutes} min</p>
      <p>Servings: {recipe.servings}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>
    </div>
  );
}

export default Details;