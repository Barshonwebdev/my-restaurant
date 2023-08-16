// meal load function 

const searchMeal=()=>{
    
}

const loadMeal=async()=>{
    try {
        const url= "https://www.themealdb.com/api/json/v1/1/categories.php";
        const res= await fetch(url);
        const data= await res.json();
        console.log(data.categories);
        displayMeal();
    }

    catch (error){
        console.log(error);
    }
}

loadMeal();