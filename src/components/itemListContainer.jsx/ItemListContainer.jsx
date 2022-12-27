import FlexWrapper from '../flexWrapper/FlexWrapper';
import Item from '../Item/Item';
import React from "react";
import imgcafe from '../../assets/img/capuccino.webp';

function ItemListContainer(){
    return<>       
            <FlexWrapper>
                <Item title="cafe suave"
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
                />
            </FlexWrapper>
        </>;
}

export default ItemListContainer;