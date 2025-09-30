import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import { ShoppingCart, Star } from "lucide-react"
import type { Product } from "@/lib/supabase"

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="bg-white border-2 border-baby-pink/20 rounded-3xl overflow-hidden card-hover shadow-soft">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-square bg-gradient-to-br from-baby-peach/20 to-baby-mint/20 rounded-t-3xl overflow-hidden relative">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-baby-pink text-6xl">
                    🧸
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {logic.discountPercentage && (
                    <span className="bg-red-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                      -{logic.discountPercentage}% OFF
                    </span>
                  )}
                  {logic.product.featured && (
                    <span className="bg-gradient-to-r from-baby-pink to-baby-blue text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                      ⭐ Destacado
                    </span>
                  )}
                  {!logic.inStock && (
                    <span className="bg-gray-600 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                      Agotado
                    </span>
                  )}
                </div>

                {/* Rating Stars */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-3 w-3 fill-baby-yellow text-baby-yellow" />
                  <span className="text-xs font-semibold text-foreground">4.8</span>
                </div>
              </div>
            </Link>

            <div className="p-5">
              <Link to={`/products/${logic.product.slug}`}>
                <h3 className="text-foreground font-bold text-base mb-2 line-clamp-2 hover:text-baby-pink transition-colors">
                  {logic.product.title}
                </h3>
                {logic.product.description && (
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {logic.product.description.replace(/<[^>]*>/g, '')}
                  </p>
                )}
              </Link>

              {logic.hasVariants && logic.options && (
                <div className="mb-4 space-y-3">
                  {logic.options.map((opt) => (
                    <div key={opt.id}>
                      <div className="text-xs font-semibold text-foreground mb-2">{opt.name}</div>
                      <div className="flex flex-wrap gap-2">
                        {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                          const isSelected = logic.selected[opt.name] === val
                          const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                          if (swatch) {
                            return (
                              <button
                                key={val}
                                type="button"
                                onClick={() => logic.handleOptionChange(opt.name, val)}
                                title={`${opt.name}: ${val}`}
                                className={`h-8 w-8 rounded-full border-2 transition-all ${
                                  isSelected ? 'border-baby-pink scale-110 shadow-lg' : 'border-gray-200'
                                } ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''}`}
                                style={{ backgroundColor: swatch }}
                                aria-label={`${opt.name}: ${val}`}
                              />
                            )
                          }

                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              className={`border-2 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                                isSelected 
                                  ? 'border-baby-pink bg-baby-pink text-white shadow-lg' 
                                  : logic.selected[opt.name] && !isSelected
                                    ? 'border-gray-200 bg-white text-gray-400 opacity-40'
                                    : 'border-gray-200 bg-white text-foreground hover:border-baby-pink'
                              }`}
                              aria-pressed={isSelected}
                              aria-label={`${opt.name}: ${val}`}
                              title={`${opt.name}: ${val}`}
                            >
                              {val}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-baby-pink/10">
                <div className="flex flex-col">
                  <span className="text-baby-pink font-bold text-xl">
                    {logic.formatMoney(logic.currentPrice)}
                  </span>
                  {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                    <span className="text-gray-400 text-sm line-through">
                      {logic.formatMoney(logic.currentCompareAt)}
                    </span>
                  )}
                </div>
                <Button
                  size="sm"
                  onClick={() => {
                    logic.onAddToCartSuccess()
                    logic.handleAddToCart()
                  }}
                  disabled={!logic.canAddToCart}
                  className="rounded-full bg-gradient-to-r from-baby-pink to-baby-blue hover:from-baby-pink/90 hover:to-baby-blue/90 text-white font-semibold px-4 py-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  {logic.inStock ? 'Agregar' : 'Agotado'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}