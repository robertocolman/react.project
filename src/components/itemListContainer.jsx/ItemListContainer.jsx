import React, {useEffect, useState} from "react";

import FlexWrapper from '../flexWrapper/FlexWrapper';
import Item from '../Item/Item';
import getItems from '../../services/mockAsyncService'

function ItemListContainer(){

    const [products, setProducts] = useState([]);

    console.log("Renderizamos al componente")
    
    getItems().then((respuesta)=>{
        console.log(respuesta)
        setProducts(respuesta)
    });
    

    return<>       
            <FlexWrapper>
                {products.map((item) => (
                    <Item 
                        key={item.title}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        detail={item.detail}
                        imgurl={item.imgurl}
                        />
                ))}
                {/* <Item title="cafe suave"
                price={400}
                detail="cafe suave marca dolca"
                imgurl="https://farmacityar.vteximg.com.br/arquivos/ids/210957-1000-1000/221824_cafe-instantaneo-nescafe-dolca-suave-x-170-g_imagen-1.jpg?v=637587796594730000"
                />
                <Item title="cafe fuerte"
                price={500}
                detail="cafe fuerte marca dolca"
                imgurl="https://farmacityar.vteximg.com.br/arquivos/ids/219961-1000-1000/226259_cafe-nescafe-dolca-original-x-117-g_imagen-1.jpg?v=637818239193970000"
                />
                <Item title="cafe capuccino"
                price={800}
                detail="cafe capuccino dolca"
                imgurl={imgcafe}
                />
                <Item title="cafe latte"
                price={1000}
                detail="cafe latte dolca"
                imgurl='/assets/img/latte.png'
                /> */}
            </FlexWrapper>
        </>;
}

export default ItemListContainer;