import { useEffect, useState } from "react";

function FetchOnCategory() {
    const [category, setCategory] = useState("electronics");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setLoading(false);
        });
    }, [category, loading]);

    return (
        <div className="card">
            <h3>Fetch By Category</h3>
            <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            >
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men Clothing</option>
            <option value="women's clothing">Women Clothing</option>
            </select>

            {loading && <p>Loading products...</p>}

            {!loading && (
                <ul>
                    {products.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FetchOnCategory;