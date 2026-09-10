import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectCartItems } from '../redux/CartSlice.jsx'

const products = [
  { id: 1, name: 'Snake Plant', description: 'A sculptural, low-maintenance classic for bright or quiet corners.', price: 24, category: 'Indoor Plants', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2bb6?auto=format&fit=crop&w=700&q=85' },
  { id: 2, name: 'Peace Lily', description: 'Glossy green leaves and elegant white blooms that love gentle light.', price: 29, category: 'Indoor Plants', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=85' },
  { id: 3, name: 'Spider Plant', description: 'A cheerful, easy-growing plant with graceful arching leaves.', price: 18, category: 'Indoor Plants', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=85' },
  { id: 4, name: 'Money Plant', description: 'A trailing favorite with heart-shaped leaves for shelves and desks.', price: 22, category: 'Indoor Plants', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=85' },
  { id: 5, name: 'ZZ Plant', description: 'Deep green, glossy foliage with remarkable resilience.', price: 31, category: 'Indoor Plants', image: 'https://images.unsplash.com/photo-1614594895308-bd7b5c7f2f5f?auto=format&fit=crop&w=700&q=85' },
  { id: 6, name: 'Monstera', description: 'A statement tropical plant with iconic split leaves.', price: 38, category: 'Indoor Plants', image: 'https://images.unsplash.com/photo-1614594575927-5d5d9e1f5f4b?auto=format&fit=crop&w=700&q=85' },
  { id: 7, name: 'Anthurium', description: 'Bright, long-lasting red flowers framed by polished leaves.', price: 34, category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=700&q=85' },
  { id: 8, name: 'African Violet', description: 'Compact purple blooms that bring a soft pop of color indoors.', price: 19, category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=700&q=85' },
  { id: 9, name: 'Orchid', description: 'An graceful flowering plant for a refined windowsill display.', price: 42, category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1566907225477-7b6c4b45d0c4?auto=format&fit=crop&w=700&q=85' },
  { id: 10, name: 'Bromeliad', description: 'A tropical rosette with a vibrant central flower spike.', price: 35, category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=85' },
  { id: 11, name: 'Kalanchoe', description: 'Clusters of tiny, sunny flowers over sturdy succulent leaves.', price: 21, category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=700&q=85' },
  { id: 12, name: 'Begonia', description: 'Patterned foliage and delicate blooms in a compact form.', price: 26, category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1610557892470-a34c3c6b5f5f?auto=format&fit=crop&w=700&q=85' },
  { id: 13, name: 'Aloe Vera', description: 'A sun-loving succulent with soothing, fleshy leaves.', price: 17, category: 'Succulents', image: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&w=700&q=85' },
  { id: 14, name: 'Jade Plant', description: 'A lucky, tree-like succulent with plump oval leaves.', price: 23, category: 'Succulents', image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=700&q=85' },
  { id: 15, name: 'Echeveria', description: 'A neat blue-green rosette that makes a lovely small accent.', price: 15, category: 'Succulents', image: 'https://images.unsplash.com/photo-1533460004989-cef01064af7e?auto=format&fit=crop&w=700&q=85' },
  { id: 16, name: 'String of Pearls', description: 'Delicate beads cascade beautifully from a hanging planter.', price: 27, category: 'Succulents', image: 'https://images.unsplash.com/photo-1616500031634-1c6ef3f2a5e1?auto=format&fit=crop&w=700&q=85' },
  { id: 17, name: 'Haworthia', description: 'A compact striped succulent for sunny desks and shelves.', price: 14, category: 'Succulents', image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8f1c1a5?auto=format&fit=crop&w=700&q=85' },
  { id: 18, name: 'Panda Plant', description: 'Velvety silver leaves with charming chocolate-brown edges.', price: 20, category: 'Succulents', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85' },
]

const categories = ['All Plants', 'Indoor Plants', 'Flowering Plants', 'Succulents']

function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState('All Plants')
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const visibleProducts = selectedCategory === 'All Plants' ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <main className="page-shell">
      <section className="page-intro">
        <p className="eyebrow">THE COLLECTION</p>
        <h1>Find your next favorite plant.</h1>
        <p>Small rituals, greener rooms. Explore plants selected for every kind of home.</p>
      </section>
      <div className="category-tabs" role="tablist" aria-label="Plant categories">
        {categories.map((category) => (
          <button key={category} className={selectedCategory === category ? 'active' : ''} onClick={() => setSelectedCategory(category)} type="button">{category}</button>
        ))}
      </div>
      <section className="product-grid" aria-label="Available plants">
        {visibleProducts.map((product) => {
          const isAdded = cartItems.some((item) => item.id === product.id)
          return (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={`${product.name} houseplant`} width="700" height="700" />
              <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h2>{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <strong>${product.price}</strong>
                  <button type="button" className={isAdded ? 'add-button added' : 'add-button'} disabled={isAdded} onClick={() => dispatch(addToCart(product))}>{isAdded ? 'Added' : 'Add to Cart'}</button>
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default ProductList