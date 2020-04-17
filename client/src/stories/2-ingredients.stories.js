import React from 'react';
import SimpleExpansionPanel from '../components/ingredientcard/expansionPanel';
import IngredientDB from '../data/mock-db';
import WeightButton from '../components/ingredientcard/WeightButton';
import FlavorTableItem from '../components/ingredientcard/FlavorTableItem';
export default {
  title: 'SimpleExpansionPanel',
  component: SimpleExpansionPanel,
};

export const textButtons = () => (
  <SimpleExpansionPanel
    weight={IngredientDB[0].weight}
    description={IngredientDB[0].description}
    name={IngredientDB[0].name}
    matches={IngredientDB[0].matches}
  />
);
export const button = () => <WeightButton weight={IngredientDB[0].weight} />;
export const buttonNotColor = () => <WeightButton />;
export const TextWeightButton = () => (
  <SimpleExpansionPanel
    weight={IngredientDB[0].weight}
    description={IngredientDB[0].description}
    name={IngredientDB[0].name}
    matches={IngredientDB[0].matches}
  />
);
export const TableDefault = () => (
  <FlavorTableItem
    flavorName={IngredientDB[0].name}
    flavorDescription={IngredientDB[0].description}
    matches={IngredientDB[0].matches}
  />
);
