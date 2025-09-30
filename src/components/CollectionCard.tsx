import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-white border-2 border-baby-blue/20 rounded-3xl overflow-hidden card-hover shadow-soft">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-gradient-to-br from-baby-lavender/30 to-baby-mint/30 overflow-hidden relative">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-baby-blue text-6xl">
              🎨
            </div>
          )}
          
          {collection.featured && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-baby-pink to-baby-yellow text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
              ⭐ Popular
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-foreground font-bold text-xl mb-2 line-clamp-1">
            {collection.name}
          </h3>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            variant="outline" 
            className="w-full rounded-full border-2 border-baby-blue text-baby-blue hover:bg-baby-blue hover:text-white font-semibold transition-all group"
            onClick={() => onViewProducts(collection.id)}
          >
            Ver Productos
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}