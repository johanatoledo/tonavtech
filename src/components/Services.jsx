"use client";
import React from 'react';
import { 
  UserCircle, 
  Utensils, 
  Scissors, 
  ShoppingBag, 
  Sparkles, 
  Layout 
} from 'lucide-react';
import { FormattedMessage } from 'react-intl';

const Services = () => {
  
  const servicesList = [
    {
      titleId: "services.items.portfolio.title",
      descriptionId: "services.items.portfolio.description",
      icon: <UserCircle className="w-8 h-8" />
    },
    {
      titleId: "services.items.restaurants.title",
      descriptionId: "services.items.restaurants.description",
      icon: <Utensils className="w-8 h-8" />
    },
    {
      titleId: "services.items.beauty.title",
      descriptionId: "services.items.beauty.description",
      icon: <Scissors className="w-8 h-8" />
    },
    {
      titleId: "services.items.ecommerce.title",
      descriptionId: "services.items.ecommerce.description",
      icon: <ShoppingBag className="w-8 h-8" />
    },
    {
      titleId: "services.items.cleaning.title",
      descriptionId: "services.items.cleaning.description",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      titleId: "services.items.catalogs.title",
      descriptionId: "services.items.catalogs.description",
      icon: <Layout className="w-8 h-8" />
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="w-full py-24 px-4 md:px-6 bg-white dark:bg-background transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-secundary mb-6">
            <FormattedMessage 
              id="services.mainTitle" 
              values={{ italic: (chunks) => <span className="text-primary italic">{chunks}</span> }}
              defaultMessage="Nuestros <italic>Servicios</italic>"
            />
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>

          <h4 className="mt-10 text-2xl md:text-2xl font-medium text-black dark:text-secundary leading-relaxed max-w-3xl mx-auto"> 
            <FormattedMessage id="services.subTitle" />
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              onClick={scrollToContact}
              className="group cursor-pointer p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden shadow-sm hover:shadow-xl bg-white border border-slate-100 dark:diagonal-gradient-pro dark:border-gray-800 dark:hover:border-primary"
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-900/50 text-primary border border-slate-100 dark:border-slate-800 group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all duration-500 relative z-10">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white group-hover:text-primary transition-colors duration-300 relative z-10">
                <FormattedMessage id={service.titleId} />
              </h3>

              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                <FormattedMessage id={service.descriptionId} />
              </p>

              <div className="flex items-center text-xs font-bold text-accent uppercase tracking-widest relative z-10">
                <FormattedMessage id="services.consultCta" defaultMessage="Consultar ahora" />
                <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;