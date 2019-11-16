import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
   
    const ninjaList = ninjas.map( item => {
        return item.age >20 ? (
            <div className="ninja" key={item.id}>
                    <div> Name:{item.name} </div>
                    <div> Age: {item.age} </div>
                    <button onClick={() => {deleteNinja(item.id)}}>Delete ninja</button>
                </div>
        ): null;
    })
    return (
        <div className="ninjasList">
            {ninjaList}
        </div>
    )

}

export default Ninjas;
