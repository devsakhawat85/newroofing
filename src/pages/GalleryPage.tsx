import React, { useState } from 'react';
import { AUTHENTIC_PROJECTS } from '../data/companyData';
import { RoofingProject } from '../types';
import { Maximize2, MapPin, CheckCircle2, Filter } from 'lucide-react';

interface GalleryPageProps {
  onSelectProject: (p: RoofingProject) => void;
  onOpenQuote: (serviceTitle?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onSelectProject,
  onOpenQuote
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'shingle' | 'metal' | 'tile'>('all');

  const filteredProjects = activeFilter === 'all'
    ? AUTHENTIC_PROJECTS
    : AUTHENTIC_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#17283F] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#B97745]">
              Real Installations in Phoenix, Arizona
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white">
              Authentic Project Gallery
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore completed residential and commercial roofing projects by Lawrence and Sons Roofing Inc. Every image represents real craftsmanship on real Arizona homes.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filter Bar (Functional buttons adhering to frontend design guidelines) */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#17283F] uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-[#B97745]" />
              <span>Filter by Material:</span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F7F6F2] rounded-md border border-slate-200">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#17283F] text-white shadow-sm'
                    : 'text-[#68717B] hover:text-[#20262D]'
                }`}
              >
                All Projects ({AUTHENTIC_PROJECTS.length})
              </button>
              <button
                onClick={() => setActiveFilter('metal')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  activeFilter === 'metal'
                    ? 'bg-[#17283F] text-white shadow-sm'
                    : 'text-[#68717B] hover:text-[#20262D]'
                }`}
              >
                Standing-Seam Metal
              </button>
              <button
                onClick={() => setActiveFilter('tile')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  activeFilter === 'tile'
                    ? 'bg-[#17283F] text-white shadow-sm'
                    : 'text-[#68717B] hover:text-[#20262D]'
                }`}
              >
                Tile &amp; Underlayment
              </button>
              <button
                onClick={() => setActiveFilter('shingle')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  activeFilter === 'shingle'
                    ? 'bg-[#17283F] text-white shadow-sm'
                    : 'text-[#68717B] hover:text-[#20262D]'
                }`}
              >
                Architectural Shingles
              </button>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Image */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded">
                    {project.categoryLabel}
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-sm text-white p-2 rounded-full">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-center gap-1 text-[11px] text-slate-300">
                      <MapPin className="w-3 h-3 text-[#B97745]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="text-base font-bold font-display text-white line-clamp-1">
                      {project.title}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-[#68717B] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <div className="text-[11px] font-semibold text-[#17283F] uppercase tracking-wider">
                        Key Features:
                      </div>
                      <ul className="space-y-1 text-xs text-[#68717B]">
                        {project.details.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-[#B97745] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-semibold text-[#17283F] hover:text-[#B97745] transition-colors cursor-pointer"
                    >
                      Inspect Full Resolution
                    </button>
                    <button
                      onClick={() => onOpenQuote(project.categoryLabel)}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-[#17283F] hover:bg-[#20262D] rounded transition-colors cursor-pointer"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Authentic Material Notes */}
          <div className="mt-16 bg-[#F7F6F2] p-8 rounded-lg border border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-[#17283F] font-display">
              About Lawrence &amp; Sons Roofing Project Photography
            </h3>
            <p className="text-xs sm:text-sm text-[#68717B] leading-relaxed">
              Every photograph shown on this website depicts an actual roofing project completed by Lawrence and Sons Roofing Inc in Phoenix, Arizona. We pride ourselves on transparent workmanship. If you would like to inspect sample material swatches or discuss your roof's specific architecture, we provide a full in-person consultation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
