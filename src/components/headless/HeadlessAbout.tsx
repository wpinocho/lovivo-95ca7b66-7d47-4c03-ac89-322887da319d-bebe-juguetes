import { ReactNode } from 'react';

export interface UseAboutLogicReturn {
  stats: Array<{
    icon: string;
    value: string;
    label: string;
  }>;
  values: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  team: Array<{
    name: string;
    role: string;
    image: string;
  }>;
}

export const useAboutLogic = (): UseAboutLogicReturn => {
  const stats = [
    {
      icon: '🎯',
      value: '10,000+',
      label: 'Familias Felices'
    },
    {
      icon: '🧸',
      value: '500+',
      label: 'Productos Únicos'
    },
    {
      icon: '⭐',
      value: '4.9/5',
      label: 'Calificación'
    },
    {
      icon: '🚚',
      value: '24-48h',
      label: 'Envío Rápido'
    }
  ];

  const values = [
    {
      icon: '💝',
      title: 'Calidad Garantizada',
      description: 'Todos nuestros juguetes cumplen con los más altos estándares de seguridad y calidad para tu bebé.'
    },
    {
      icon: '🌱',
      title: 'Desarrollo Integral',
      description: 'Seleccionamos juguetes que estimulan el desarrollo cognitivo, motor y emocional de los más pequeños.'
    },
    {
      icon: '🤝',
      title: 'Compromiso Familiar',
      description: 'Entendemos las necesidades de las familias y ofrecemos productos que generan momentos especiales.'
    },
    {
      icon: '♻️',
      title: 'Sostenibilidad',
      description: 'Priorizamos productos eco-friendly y materiales seguros para el planeta y tu bebé.'
    }
  ];

  const team = [
    {
      name: 'María González',
      role: 'Fundadora & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'Carlos Ramírez',
      role: 'Director de Producto',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Ana Martínez',
      role: 'Especialista en Desarrollo Infantil',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    }
  ];

  return {
    stats,
    values,
    team
  };
};

interface HeadlessAboutProps {
  children: (logic: UseAboutLogicReturn) => ReactNode;
}

export const HeadlessAbout = ({ children }: HeadlessAboutProps) => {
  const logic = useAboutLogic();
  return <>{children(logic)}</>;
};