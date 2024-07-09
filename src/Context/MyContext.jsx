import { createContext, useEffect, useState} from "react"

export const MyContext = createContext() // Creamos la variable que tendra el contexto



const MycontextProvider = ({children}) => {

    const [imagenes, setImagenes] = useState([]);

    /* Agregamos el API */
    const PHOTO = async () => {
      const response = await fetch("../photos.json");
      const data = await response.json();
      let newA = data.photos.map((item) => ({...item, LIKED: false}))
      setImagenes(newA);
      console.log("Primer Console ==>", newA);
    };
    
    /* Creamos la funcion que tomara al darle me gusta a la imagen y cambiara el LIKED a true*/
    const megusta = (id) => {
      setImagenes((item) => item.map((item) => {
        if (item.id === id) {
          return {...item, LIKED: true}
          }
          return item
        }))
    };

    /* Creamos la funcion que al darle nogusta a la imagen y cambiara el LIKED a false*/
    const nogusta = (id) => {           
    setImagenes((item) => item.map((item) => {
         if (item.id === id) {
          return {...item, LIKED: false}
           }
           return item
       }))
     }   
    
    const getIma = {
        imagenes,
        megusta, 
        nogusta,
    }

    useEffect(() => {

        PHOTO();
    }, []);
 
    return (
      <MyContext.Provider value={getIma} >
        {children}
      </MyContext.Provider>
    );
  
}

export default MycontextProvider

