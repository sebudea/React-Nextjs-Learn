// Tenemos una lista, estilo json
const products = [
    { title: 'Col', isFruit: false, id: 1 },
    { title: 'Ajo', isFruit: false, id: 2 },
    { title: 'Manzana', isFruit: true, id: 3 },
];

// Creamos una const(variable) que va a gaurdar los datos json en listas
// para luego renderizarlas, incluso con condicionales
// importante que este en llaves li
const ListItems = products.map(product =>
    <li
        key={product.id}
        style={{
            color: product.isFruit ? "magenta" : "darkgreen"
        }}>
        {product.title}
    </li>
);


// Creamos componente para que renderice la lista
// importante meter la lista en llaves ul y mostrar la lista como elemento JSX con las llaves {}
const RenderListas = () => {

    return (
        <div>
            <h1>Renderizado de listas</h1>
            <ul>
                {ListItems}
            </ul>
        </div>
    )
}

export default RenderListas
