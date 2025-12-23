function About() {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">

      {/* About Intro */}
      <section
        data-aos="fade-up"
        className="max-w-5xl mx-auto px-6 py-16 bg-white rounded-lg shadow-sm"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          About SeizureAI
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          SeizureAI is an AI-powered healthcare system designed to assist in the
          early detection of epileptic seizures using Machine Learning and EEG
          signal analysis.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          The system aims to support doctors and patients by providing timely
          seizure predictions, improving safety and clinical decision-making.
        </p>
      </section>

      {/* Use Case Studies */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold text-blue-900 text-center mb-12"
        >
          Use Case Studies
        </h2>

        {/* Case 1 */}
        <div
          data-aos="fade-right"
          className="grid md:grid-cols-2 gap-10 items-center mb-16"
        >
          <img
            src="https://img.freepik.com/free-vector/eeg-brain-scan-concept-illustration_114360-8034.jpg"
            alt="EEG Monitoring"
            className="rounded-lg shadow-lg"
          />

          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Case 1: EEG-Based Seizure Detection
            </h3>
            <p className="text-gray-700 leading-relaxed">
              EEG signals collected from patients are analyzed using a trained
              Machine Learning model to detect abnormal brain activity patterns
              associated with epileptic seizures.
            </p>
          </div>
        </div>

        {/* Case 2 */}
        <div
          data-aos="fade-left"
          className="grid md:grid-cols-2 gap-10 items-center mb-16"
        >
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Case 2: Hospital Monitoring Support
            </h3>
            <p className="text-gray-700 leading-relaxed">
              SeizureAI can be integrated into hospital monitoring systems to
              assist medical professionals by providing real-time alerts and
              seizure risk analysis for admitted patients.
            </p>
          </div>

          <img
            src="https://img.freepik.com/free-vector/medical-monitoring-concept-illustration_114360-7585.jpg"
            alt="Hospital Monitoring"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Case 3 */}
        <div
          data-aos="fade-right"
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <img
            src="https://img.freepik.com/free-vector/doctor-analyzing-medical-data-illustration_114360-7478.jpg"
            alt="Clinical Decision Support"
            className="rounded-lg shadow-lg"
          />

          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Case 3: Clinical Decision Support
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The system provides prediction results and confidence scores that
              can assist clinicians in making informed decisions regarding
              patient treatment and seizure management.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
