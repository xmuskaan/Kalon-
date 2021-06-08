import productsData from './productsData';


    const Filter = productsData.filter((product) => {
        switch(productsData.Ftype)
            {   case 'Earrings': return productsData;
                case 'Pendants': return productsData;
                case 'Rings': return productsData;
            }
    })  
    
export default Filter;
