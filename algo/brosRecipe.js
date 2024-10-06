/*
'''
❓ PROMPT
You found a note from your brother when you got home from school:

"Doofus, go to the store to pick up some ingredients for my recipe. Don't buy anything we already have at home like last time. I didn't make the grocery list so you'll have to do it yourself and then go to the store to buy the missing ingredients, you lazy bum. Use your own money to pay for it; you owe me for only pranking you 5 times this week anyway. Get it done before dinnertime, loser."

Your brother's a jerk and gave you the recipe in the hardest possible way to decipher: one long line of all the quantities followed by all the ingredients. Meanwhile, the ingredients at home are in tabular format, ugh!

Example(s)
Recipe: "12 3 3 1 egGs baCon sAusaGe souRdoughBread"
At home: {"SauSage": 6, "EGgs": 4, "BACoN": 3, "banAnA": 1}
Grocery list: {"eggs": 8, "sourdoughbread": 1}

You need 12 eggs but you only have 4 at home, so you need 8 more, dweeb.
You need 3 bacon and you have 3 at home, so you don't need anymore, dweeb.
You need 3 sausage and you have 6 at home, so you don't need anymore, dweeb.
You need 1 sourdoughbread but you have none at home, so you need 1 more, dweeb.
The banana isn't a part of the recipe, so it doesn't matter, dweeb.

Your brother swears he could do this so much faster than you, but he's got more important things to do like go grind the half-pipe with some gnarly shredz.
 

🔎 EXPLORE
List your assumptions & discoveries:
1. the ingredients are unique - eggs will not appear twice
2. keys are case insensitive
3. are numbers always ints? Any floats, signed numbers?
4. keys are single words
5. can purchase ingredients a la carte
6. quantities represent units, so no need for units of measurement
7. brands do not matter
8. store will always have ingredients for recipe
 
input: 2 lists, key/value required ingredients, key/value on hand ingredients
output: difference from those 2 lists

Insightful & revealing test cases:
1. no ingredients at home
2. some ingredients
3. all ingredients at home

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O(n) - n is all the distinct ingredients
Space: O(n) - recipe list with all the ingredients
 

📆 PLAN
Outline of algorithm #: 
1. convert brosRecipe list to key/value store - make all lowercase
2. standardize key/value store for home ingredients - make all lowercase
3. create shopping list based on ingredients missing from recipe 

🛠️ IMPLEMENT
function getGroceryList(brosRecipe, ingredientsAtHome) {
def get_grocery_list(bros_recipe: str, ingredients_at_home:dict) -> dict:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function getGroceryList(brosRecipe, ingredientsAtHome) {
    let shoppingList = {}
    // convert brosRecipe to key/value
    // split into an array
    let recipe = brosRecipe.split(' ');
    // midpoint will odd: math.floor, even: length/2
    //let midpoint = recipe.length % 2 === 0 ? recipe.length/2 : Math.floor(recipe.length/2);
    let midpoint = recipe.length / 2;
    let quantity = recipe.splice(0, midpoint);
    // [eggs, bacon, sausage, sourdoughbread] [12, 3, 3, 1]
    
    let ingredients = {};
    // convert to hashmap
    for(let i = 0; i < recipe.length; i++) {
	let ingredient = recipe[i].toLowerCase();
	let amount = parseInt(quantity[i]);
	ingredients[ingredient] = amount;
    }
    // console.log("RECIPE: ", ingredients);
    
    // standardize ingredients at home keys
    for(let key in ingredientsAtHome) {
	// rename keys to lowercase characters
	ingredientsAtHome[key.toLowerCase()] = ingredientsAtHome[key];
	delete ingredientsAtHome[key];
    }
    // console.log("HOME INGREDIENTS: ", ingredientsAtHome);

    // determine missing ingredients
    for(let key in ingredients) {
	// subtract recipe.key[val] - ingredients.key[val]
	let recipeQuantity = ingredients[key];
	let ingredientsHome = ingredientsAtHome[key] || 0;
	let missingIngredients = recipeQuantity - ingredientsHome;
	// balance needs to add key/value into shoppingList
	if(missingIngredients > 0) {
	    shoppingList[key] = missingIngredients;
	}
    }
    console.log("SHOPPING LIST: ", shoppingList); 
    return shoppingList;
}


let recipe =  "12 3 3 1 egGs baCon sAusaGe souRdoughBread";
let ingredients = {"SauSage": 6, "EGgs": 4, "BACoN": 3, "banAnA": 1};
let groceryList = {"eggs": 8, "sourdoughbread": 1};


// let result1 = getGroceryList(recipe, ingredients);
// console.log(result1);

function isEqual(list1, list2) {
  if (list1.length != list2.length) return false;

  for (let i = 0; i < list1.length; i++){
    if (list1[i] !== list2[i]) return false;
  }

  return true;
}

// Test Case 1: No ingredients anywhere
const recipe_1 = "";
const home_1 = {};
const grocery_list_1 = {};
console.log('should match   ', grocery_list_1);
console.log(isEqual(getGroceryList(recipe_1, home_1), grocery_list_1));
console.log('**');

// Test Case 2: No ingredients at home
const recipe_2 = "2 8 1 1 eGgS pOrKlOiNcHoPs PaNkObReAdCrUmBs FlOuR";
const home_2 = {};
const grocery_list_2 = { "eggs": 2, "porkloinchops": 8, "pankobreadcrumbs": 1, "flour": 1 };
console.log('should match   ', grocery_list_2);
console.log(isEqual(getGroceryList(recipe_2, home_2), grocery_list_2));
console.log('**');

// Test Case 3: Some ingredients at home
const recipe_3 = "4 8 1 10 2 bUtTeR hIcKoRyWoOdChIpS pApRiKa BeEfBrIsKeT bRoWnSuGaR";
const home_3 = { "sAlT": 1, "pEPper": 1, "paPRika": 1, "bUTteR": 2 };
const grocery_list_3 = { "beefbrisket": 10, "brownsugar": 2, "hickorywoodchips": 8, "butter": 2 };
console.log('should match   ', grocery_list_3);
console.log(isEqual(getGroceryList(recipe_3, home_3), grocery_list_3));
console.log('**');

// Test Case 4: All ingredients at home
const recipe_4 = "2 4 1 2 2 BuTtEr SaLmOnFiLlEtS lEmOn OrEgAnO pArSlEy";
const home_4 = { "butTer": 2, "saLmoNfiLLets": 4, "leMOn": 1, "oREGano": 2, "pARsLey": 2 };
const grocery_list_4 = {};
console.log('should match   ', grocery_list_4);
console.log(isEqual(getGroceryList(recipe_4, home_4), grocery_list_4));
console.log('**');

// Test Case 5: Unneeded ingredients at home
const recipe_5 = "4 8 1 2 4 bUtTeR cHiCkEnDrUmStIcK gArLiC rOsEmArY oNiOn";
const home_5 = { "sALt": 1, "pePpeR": 1, "GaRlic": 2, "heAvYcrEaM": 2, "bUtTer": 6, "oNiOn": 6 };
const grocery_list_5 = { "rosemary": 2, "chickendrumstick": 8 };
console.log('should match   ', grocery_list_5);
console.log(isEqual(getGroceryList(recipe_5, home_5), grocery_list_5));
console.log('**');
