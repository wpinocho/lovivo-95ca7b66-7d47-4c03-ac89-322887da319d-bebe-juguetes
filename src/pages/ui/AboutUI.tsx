import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Sparkles, Users } from 'lucide-react';
import type { UseAboutLogicReturn } from '@/components/headless/HeadlessAbout';

interface AboutUIProps {
  logic: UseAboutLogicReturn;
}

export const AboutUI = ({ logic }: AboutUIProps) => {
  const { stats, values, team } = logic;

  return (
    <EcommerceTemplate pageTitle="Sobre Nosotros">
      {/* Hero Section */}
      <section className="relative gradient-baby py-20 -mt-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-baby-pink rounded-full blur-3xl animate-bounce-soft"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-baby-blue rounded-full blur-3xl animate-bounce-soft" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-6xl mb-6">🧸</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Nuestra Historia
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Desde 2020, hemos ayudado a más de 10,000 familias a encontrar los juguetes perfectos 
            para el desarrollo y felicidad de sus bebés. Cada producto es seleccionado con amor y cuidado.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-3xl bg-gradient-to-br from-baby-pink/10 via-baby-blue/10 to-baby-lavender/10 card-hover"
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-br from-baby-peach/10 via-baby-mint/10 to-baby-lavender/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block p-3 bg-baby-pink/20 rounded-2xl mb-4">
                <Heart className="h-8 w-8 text-baby-pink" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Creemos que cada bebé merece juguetes que no solo diviertan, sino que también 
                estimulen su desarrollo integral. Por eso, cada producto en nuestra tienda es 
                cuidadosamente seleccionado por expertos en desarrollo infantil.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabajamos directamente con fabricantes certificados que comparten nuestros valores 
                de seguridad, calidad y sostenibilidad. Tu tranquilidad es nuestra prioridad.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop"
                alt="Bebé jugando"
                className="rounded-3xl shadow-soft w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-soft max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-6 w-6 text-baby-blue" />
                  <span className="font-bold text-foreground">100% Seguro</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Certificados internacionales de seguridad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-baby-blue/20 rounded-2xl mb-4">
              <Sparkles className="h-8 w-8 text-baby-blue" />
            </div>
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión que tomamos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-gradient-to-br from-baby-pink/5 via-baby-blue/5 to-baby-lavender/5 border-2 border-baby-pink/20 card-hover"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-baby-peach/10 via-baby-mint/10 to-baby-lavender/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-baby-peach/20 rounded-2xl mb-4">
              <Users className="h-8 w-8 text-baby-peach" />
            </div>
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profesionales apasionados por el bienestar de tu bebé
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center card-hover"
              >
                <div className="relative inline-block mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-soft"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-baby-pink to-baby-blue p-3 rounded-full shadow-lg">
                    <Heart className="h-6 w-6 text-white fill-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-baby-pink font-semibold mb-4">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-baby-pink/20 via-baby-blue/20 to-baby-lavender/20 rounded-3xl p-12 shadow-soft">
            <div className="text-6xl mb-6">💝</div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              ¿Listo para encontrar el juguete perfecto?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explora nuestra colección cuidadosamente seleccionada y descubre por qué miles 
              de familias confían en nosotros para el desarrollo de sus bebés.
            </p>
            <Button 
              size="lg"
              className="h-14 px-8 rounded-full bg-gradient-to-r from-baby-pink to-baby-blue hover:opacity-90 text-white font-bold text-lg shadow-soft"
              onClick={() => window.location.href = '/'}
            >
              Ver Productos
            </Button>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  );
};