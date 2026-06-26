import NavBar from "../NavBar/NavBar";
import { useRef } from "react";

//#region ex1
type User = {
  id: number;
  name: string;
  age: number;
};

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

export default function Exercices() {
  const introRef = useRef<HTMLDivElement>(null);
  const exercice1Ref = useRef<HTMLDivElement>(null);
  const exercice2Ref = useRef<HTMLDivElement>(null);
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Ex 1

  const users: User[] = [
    { id: 1, name: "Tuan", age: 25 },
    { id: 2, name: "Helene", age: 25 },
    { id: 3, name: "Cuong", age: 66 },
    { id: 4, name: "Ngan", age: 62 },
    { id: 5, name: "Enzo", age: 11 },
    { id: 6, name: "AGOUAGOU", age: 14 },
    { id: 6, name: "Corentine", age: 56 },
    { id: 7, name: "Perre Fourras", age: 11 },
    { id: 8, name: "Charlie", age: 32 },
    { id: 9, name: "David", age: 15 },
    { id: 11, name: "POCHA", age: 25 },
    { id: 10, name: "Coco", age: 29 },
    { id: 12, name: "Benoit", age: 82 },
  ];

  const products: Product[] = [
    { id: 1, name: "climatiseur", price: 300, stock: 0 },
    { id: 2, name: "ventilateur", price: 29, stock: 3 },
    { id: 3, name: "fleur", price: 2, stock: 59 },
    { id: 4, name: "Clavier", price: 80, stock: 5 },
    { id: 5, name: "Souris", price: 35, stock: 0 },
    { id: 6, name: "Écran", price: 250, stock: 3 },
    { id: 7, name: "Casque", price: 120, stock: 8 },
    { id: 7, name: "Ordinateur gaming", price: 1999, stock: 47 },
  ];
  console.log(products);

  // (value: User, index: number, array: User[])
  const majeurs: User[] = users.filter((user) => user.age >= 18);
  const majeursCroissant = majeurs.toSorted((a, b) => a.age - b.age);
  const numberMajeurs = majeurs.length;

  // same
  const arrayAges = users.map((user) => user.age);
  const userOlder = Math.max.apply(null, arrayAges);

  // ... spread operator
  const usersCopy = [...users];
  usersCopy.push(
    { id: 11, name: "Truong", age: 26 },
    { id: 12, name: "Alicette", age: 43 },
  );
  // utilisation reduce
  const olderUser = users.reduce((previousUser, currentUser) =>
    currentUser.age > previousUser.age ? currentUser : previousUser,
  );
  // console.log(olderUser);

  // "qui contient uniquement les noms des utilisateurs majeurs, triés par âge croissant.
  const resultFilter = [...users]
    .filter((user) => user.age >= 18)
    .sort((a, b) => a.age - b.age)
    .map((user) => user.name);
  // console.log(resultFilter);

  // filtrer les utilisateurs dont prenoms Majeurs ET en majuscule
  const resultRequest = users
    .filter((user) => user.age >= 18)
    .map((user) => user.name.toUpperCase());
  // console.log(resultRequest);

  // verify display only username in upperCase and majeurs !
  const usersInUpperCaseOnly = users
    .filter((user) => user.name === user.name.toUpperCase())
    .map((user) => user.name);
  console.log(usersInUpperCaseOnly);

  //#endregion

  //#region ex2
  // Enrichissement data affiche  produits stock > 0 et ajout attribut isExpensive true si > 100
  const availableProducts = products
    .filter((p) => p.stock > 0)
    .map((p) =>
      p.price > 100
        ? { ...p, isExpensive: true }
        : { ...p, isExpensive: false },
    );
  console.log(availableProducts);

  // total stock value : for each product
  const stockValue = availableProducts.reduce(
    (accumulator, currentP) => accumulator + currentP.price * currentP.stock,
    0,
  );
  console.log(stockValue);

  // mostValuable
  const mostValuable = Math.max(
    ...availableProducts.map((p) => p.price * p.stock),
  );

  const mostValuableProduct = [...availableProducts].reduce(
    (accProduct, currentProduct) =>
      currentProduct.price > accProduct.price ? currentProduct : accProduct,
  );

  console.log(mostValuableProduct);
  //petit exo reduce
  // const numbers = [2, 4, 6, 8];
  // const carreDeDeux = numbers.reduce(
  //   (accumulateur, currentvalue) => accumulateur + currentvalue * currentvalue,
  //   0,
  // );
  // console.log(carreDeDeux);

  //#endregion
  return (
    <>
      <button onClick={() => scrollToSection(introRef)}>Intro</button>
      <button onClick={() => scrollToSection(exercice1Ref)}>Exercice 1</button>
      <button onClick={() => scrollToSection(exercice2Ref)}>Exercice 2</button>
      <a href="/exercices2">Exercices2</a>
      <div style={{}} />
      <div ref={introRef} className="mt-2">
        <h3>Intro:</h3>
        Exercices Typescript, Javascript et React.
      </div>
      <div className="mt-3" ref={exercice1Ref}>
        <h1>Exercice 1</h1>
        Objectifs : -afficher uniquement les majeurs trier par âge -compter le
        nombre d'utilisateurs - trouver l'utilisateur le plus âgé Puis afficher
        le résultat dans React.
        {/* (callbackfn: (value: User, index: number, array: User[]) => U */}
        <h2>Les personnes majeurs :</h2>
        <ul>
          {majeurs.map((majeur) => (
            <li key={majeur.id}>
              {majeur.name} - {majeur.age}
            </li>
          ))}
        </ul>
        <h2>Les personnes majeurs triés par age croissant :</h2>
        <ul>
          {/* JSX */}
          {majeursCroissant.map((majeur) => (
            <li>
              {majeur.name} - {majeur.age}
            </li>
          ))}
          Nombre de personne majeurs : {numberMajeurs} <br></br>
          Personne la plus agée : {userOlder}
        </ul>
        <br></br>
        Spread operator "..." :<br></br>
        Création copie tableau users et ajout de deux nouveaux utilisateurs:
        {usersCopy.map((user) => (
          <div>{user.name}</div>
        ))}
        <br></br>
        Reduce (tres fort) pour afficher la plus vieille personne :
      </div>
      <div ref={exercice2Ref}>
        <h1>Exercice 2</h1>
      </div>
      Dashboard avec tri des données
      <br></br>function asynchronepromesses et api
    </>
  );
}
