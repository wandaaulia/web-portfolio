import JobTimeline from '../components/JobTimeline';
import { experiencesPage } from '../data/experiences';

export default function workExperiences() {

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-white font-semibold text-2xl mb-4 md:text-3xl lg:text-3xl">
            {experiencesPage.title}
          </h1>
          <p className="text-gray-400 text-base">
            {experiencesPage.desc}
          </p>
        </div>

        {/* Timeline */}
        <JobTimeline />
      </div>
    </div>
  );
}