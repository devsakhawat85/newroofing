import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, CheckCircle } from 'lucide-react';
import { RoofingProject } from '../../types';

interface LightboxProps {
  project: RoofingProject | null;
  projects: RoofingProject[];
  onClose: () => void;
  onSelectProject: (p: RoofingProject) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  project,
  projects,
  onClose,
  onSelectProject
}) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        const currentIndex = projects.findIndex((p) => p.id === project.id);
        const nextIndex = (currentIndex + 1) % projects.length;
        onSelectProject(projects[nextIndex]);
      }
      if (e.key === 'ArrowLeft') {
        const currentIndex = projects.findIndex((p) => p.id === project.id);
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        onSelectProject(projects[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, projects, onClose, onSelectProject]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={() => {
          const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
          onSelectProject(projects[prevIndex]);
        }}
        className="absolute left-3 sm:left-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={() => {
          const nextIndex = (currentIndex + 1) % projects.length;
          onSelectProject(projects[nextIndex]);
        }}
        className="absolute right-3 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Modal */}
      <div className="w-full max-w-5xl bg-[#17283F] rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-700/60 max-h-[90vh]">
        {/* Large Image View */}
        <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-[60vh] md:max-h-[80vh] object-contain"
          />
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded">
            Project {currentIndex + 1} of {projects.length}
          </div>
        </div>

        {/* Project Details Sidebar */}
        <div className="w-full md:w-2/5 p-6 overflow-y-auto flex flex-col justify-between space-y-5 text-white">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B97745] uppercase tracking-wider">
              <span>{project.categoryLabel}</span>
              <span>·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3 h-3 text-[#B97745]" />
                {project.location}
              </span>
            </div>

            <h3 className="text-xl font-bold font-display text-white">
              {project.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>

            <div className="pt-2 border-t border-slate-700 space-y-2">
              <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                Installation Highlights
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#B97745] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-700/80">
            <div className="text-xs text-slate-400">
              Authentic completed installation by Lawrence and Sons Roofing Inc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
