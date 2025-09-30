import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Heart, Phone, Mail } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white border-b-2 border-baby-pink/20 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="text-3xl">🧸</div>
              <div>
                <BrandLogoLeft />
                <p className="text-xs text-baby-pink font-semibold">Juguetes para Bebé</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-foreground/70 hover:text-baby-pink transition-colors font-medium"
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className="text-foreground/70 hover:text-baby-pink transition-colors font-medium"
              >
                Nosotros
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground/70 hover:text-baby-pink transition-colors font-medium"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Cart */}
          {showCart && (
            <Button
              variant="ghost"
              size="icon"
              onClick={openCart}
              className="relative hover:bg-baby-pink/10 rounded-full"
            >
              <ShoppingCart className="h-6 w-6 text-baby-pink" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-baby-pink to-baby-blue text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Button>
          )}
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-gradient">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-gradient-to-br from-baby-pink/20 via-baby-blue/20 to-baby-lavender/20 py-12 border-t-2 border-baby-pink/20 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-4xl">🧸</div>
              <BrandLogoLeft />
            </div>
            <p className="text-muted-foreground mb-4">
              Los mejores juguetes para el desarrollo y diversión de tu bebé. 
              Calidad garantizada y envío rápido a todo el país.
            </p>
            <div className="flex gap-4">
              <SocialLinks />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Enlaces</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-muted-foreground hover:text-baby-pink transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className="block text-muted-foreground hover:text-baby-pink transition-colors"
              >
                Nosotros
              </Link>
              <Link 
                to="/blog" 
                className="block text-muted-foreground hover:text-baby-pink transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-baby-pink" />
                <span className="text-sm">+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-baby-pink" />
                <span className="text-sm">hola@tienda.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-baby-pink/20 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Hecho con <Heart className="h-4 w-4 text-baby-pink fill-baby-pink" /> para los más pequeños
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            &copy; 2024 Tienda de Juguetes. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}