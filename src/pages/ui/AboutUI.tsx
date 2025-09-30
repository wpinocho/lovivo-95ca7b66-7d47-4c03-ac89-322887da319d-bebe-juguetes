import { Heart, Shield, Truck, Award, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export const AboutUI = () => {
  const stats = [
    { label: 'Clientes Felices', value: '10,000+', icon: Heart },
    { label: 'Productos', value: '500+', icon: Sparkles },
    { label: 'Años de Experiencia', value: '5+', icon: Award },
    { label: 'Envíos Realizados', value: '25,000+', icon: Truck },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Seguridad Primero',
      description: 'Todos nuestros juguetes cumplen con las normas de seguridad más estrictas para garantizar la tranquilidad de los padres.',
    },
    {
      icon: Heart,
      title: 'Amor por los Niños',
      description: 'Cada producto es seleccionado pensando en el desarrollo, diversión y bienestar de tu bebé.',
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description: 'Trabajamos solo con las mejores marcas y ofrecemos garantía en todos nuestros productos.',
    },
    {
      icon: Sparkles,
      title: 'Innovación Constante',
      description: 'Siempre buscamos los juguetes más innovadores y educativos del mercado.',
    },
  ];

  const team = [
    {
      name: 'María González',
      role: 'Fundadora & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      description: 'Mamá de dos y apasionada por el desarrollo infantil.',
    },
    {
      name: 'Carlos Ramírez',
      role: 'Director de Producto',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      description: 'Experto en juguetes educativos y seguridad infantil.',
    },
    {
      name: 'Ana Martínez',
      role: 'Especialista en Atención',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      description: 'Siempre lista para ayudar a encontrar el juguete perfecto.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative gradient-baby py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-baby-pink rounded-full blur-3xl animate-bounce-soft"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-baby-blue rounded-full blur-3xl animate-bounce-soft" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Nuestra Historia 🧸
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow">
            Creando sonrisas y momentos mágicos desde 2019
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-baby-peach/10 via-baby-mint/10 to-baby-lavender/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white border-2 border-baby-blue/20 rounded-3xl shadow-soft">
                <CardContent className="p-6 text-center">
                  <stat.icon className="h-10 w-10 text-baby-pink mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gradient mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                En nuestra tienda de juguetes para bebé, creemos que cada niño merece juguetes seguros, 
                educativos y divertidos que estimulen su desarrollo y creatividad.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Fundada en 2019 por María González, una madre apasionada por el desarrollo infantil, 
                nuestra tienda nació del deseo de ofrecer a los padres una selección cuidadosamente 
                curada de juguetes de la más alta calidad.
              </p>
              <p className="text-lg text-muted-foreground">
                Hoy, servimos a miles de familias felices en todo el país, ayudándoles a encontrar 
                los juguetes perfectos para cada etapa del crecimiento de sus pequeños.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop" 
                alt="Bebé jugando"
                className="rounded-3xl shadow-soft w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-baby-pink to-baby-blue text-white p-6 rounded-2xl shadow-lg max-w-xs">
                <p className="font-bold text-lg mb-1">💝 Compromiso Total</p>
                <p className="text-sm">Con la felicidad y seguridad de tu bebé</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión que tomamos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-2 border-baby-blue/20 rounded-3xl shadow-soft card-hover">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-baby-pink/20 to-baby-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-baby-pink" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Conoce Nuestro Equipo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Personas apasionadas dedicadas a hacer felices a tus pequeños
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white border-2 border-baby-blue/20 rounded-3xl shadow-soft card-hover overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-xl text-foreground mb-1">{member.name}</h3>
                    <p className="text-baby-pink font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-baby">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
            ¿Listo para Encontrar el Juguete Perfecto?
          </h2>
          <p className="text-xl text-white/90 mb-8 drop-shadow">
            Explora nuestra colección y descubre juguetes que harán brillar los ojos de tu bebé
          </p>
          <Link to="/">
            <Button className="h-14 px-8 rounded-full bg-white text-baby-pink hover:bg-white/90 font-bold text-lg shadow-lg">
              Ver Productos 🎁
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};