import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Heart, Shield, Truck } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    searchTerm,
    selectedCollectionId,
    filteredProducts,
    setSearchTerm,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative gradient-baby py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-baby-pink rounded-full blur-3xl animate-bounce-soft"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-baby-blue rounded-full blur-3xl animate-bounce-soft" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-baby-yellow rounded-full blur-3xl animate-bounce-soft" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            🧸 Mundo de Juguetes para Bebé
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow">
            Descubre los mejores juguetes para el desarrollo y diversión de tu bebé. 
            Calidad garantizada y envío rápido.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              type="text" 
              placeholder="Buscar juguetes..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="pl-12 h-14 text-lg rounded-full shadow-soft bg-white border-2 border-white/50"
            />
          </div>

          {/* Trust Badges */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-soft">
              <Shield className="h-10 w-10 text-baby-pink mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">100% Seguro</h3>
              <p className="text-sm text-muted-foreground">Productos certificados</p>
            </div>
            <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-soft">
              <Truck className="h-10 w-10 text-baby-blue mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Envío Gratis</h3>
              <p className="text-sm text-muted-foreground">En compras +$50</p>
            </div>
            <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-soft">
              <Heart className="h-10 w-10 text-baby-peach mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Garantía Total</h3>
              <p className="text-sm text-muted-foreground">30 días devolución</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-baby-peach/10 via-baby-mint/10 to-baby-lavender/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gradient mb-4">
                Explora Nuestras Categorías
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Encuentra el juguete perfecto para cada etapa del desarrollo de tu bebé
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Productos'}` 
                  : '✨ Productos Destacados'
                }
              </h2>
              <p className="text-muted-foreground">
                {selectedCollectionId 
                  ? 'Juguetes seleccionados de esta categoría'
                  : 'Los favoritos de nuestros pequeños clientes'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="rounded-full border-2 hover:bg-baby-pink/10"
              >
                Ver Todos
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted/30 rounded-3xl h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🧸</div>
              <p className="text-xl text-muted-foreground mb-2">
                {searchTerm 
                  ? 'No encontramos juguetes con ese nombre' 
                  : 'Pronto agregaremos más juguetes'
                }
              </p>
              <p className="text-muted-foreground">
                {searchTerm && 'Intenta con otra búsqueda'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 gradient-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            🎁 Ofertas Especiales para Ti
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Suscríbete y recibe descuentos exclusivos en juguetes para tu bebé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="tu@email.com" 
              className="h-12 rounded-full"
            />
            <Button className="h-12 px-8 rounded-full bg-baby-pink hover:bg-baby-pink/90 text-white font-semibold">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};