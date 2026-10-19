import React from 'react';
import { AUTHENTIC_PROJECTS } from '../../data/companyData';
import { RoofingProject } from '../../types';
import { ArrowRight, Maximize2, MapPin } from 'lucide-react';

interface FeaturedGallerySectionProps {
  onSelectProject: (p: RoofingProject) => void;
  onViewAllProjects: () => void;
}

export const FeaturedGallerySection: React.FC<FeaturedGallerySectionProps> = ({
  onSelectProject,
  onViewAllProjects
}) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745] mb-1">
              Authentic Completed Work
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-[#17283F] tracking-tight">
              Featured Phoenix Roofing Projects
            </h2>
            <p className="text-sm sm:text-base text-[#68717B] mt-2 leading-relaxed">
              Real projects completed by Lawrence and Sons Roofing Inc across the Phoenix metropolitan area. No generic stock imagery—authentic roof installations.
            </p>
          </div>

          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#17283F] hover:text-[#B97745] transition-colors cursor-pointer group whitespace-nowrap self-start md:self-end"
          >
            <span>View Full Project Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Main Large Showcase (Project 1 - 7 cols) */}
          <div
            onClick={() => onSelectProject(AUTHENTIC_PROJECTS[0])}
            className="md:col-span-7 group relative rounded-lg overflow-hidden border border-slate-200 shadow-sm cursor-pointer bg-slate-900 min-h-[380px] sm:min-h-[460px] flex flex-col justify-end"
          >
            <img
              src={AUTHENTIC_PROJECTS[0].image}
              alt={AUTHENTIC_PROJECTS[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="relative p-6 sm:p-8 text-white space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-[#B97745]">
                <span className="uppercase tracking-wider">
                  {AUTHENTIC_PROJECTS[0].categoryLabel}
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#B97745]" />
                  {AUTHENTIC_PROJECTS[0].location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                {AUTHENTIC_PROJECTS[0].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 max-w-xl">
                {AUTHENTIC_PROJECTS[0].description}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-white/90 font-medium group-hover:text-[#B97745] transition-colors">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Click to inspect high-resolution photography</span>
              </div>
            </div>
          </div>

          {/* Side Stacked Showcases (2 items - 5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6 sm:gap-8">
            {AUTHENTIC_PROJECTS.slice(1, 3).map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-lg overflow-hidden border border-slate-200 shadow-sm cursor-pointer bg-slate-900 min-h-[220px] sm:min-h-[240px] flex-1 flex flex-col justify-end"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="relative p-5 sm:p-6 text-white space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#B97745]">
                    <span className="uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1 text-slate-300 text-[11px]">
                      <MapPin className="w-3 h-3 text-[#B97745]" />
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white">
                    {project.title}
                  </h3>

                  <div className="pt-1 flex items-center gap-1.5 text-xs text-white/80 group-hover:text-[#B97745] transition-colors">
                    <Maximize2 className="w-3 h-3" />
                    <span>Inspect project specs</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
